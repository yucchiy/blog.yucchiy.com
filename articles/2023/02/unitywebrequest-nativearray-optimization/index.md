---
title: UnityWebRequestのDownloadHandler.nativeDataを用いたコピーの回避による最適化について
description: >-
  UnityWebRequestのDownloadHandler.nativeDataについてとNativeArray<T>からSpan<T>への変換、それらを用いたコピー回避の最適化について紹介します。
pubDatetime: 2023-02-22T05:00:00.000Z
tags:
  - Unity
  - UnityWebRequest
  - 最適化
---

去年のC#アドベントカレンダーで、[System.Text.Jsonのソース生成をUnityで試す | Yucchiy's Note](https://blog.yucchiy.com/2022/12/csharp-advent-calendar-system-text-json-unity/)という記事を書きました。

この記事中で、`DownloadHandler.nativeData`を用いてJSONシリアライズ時のコピー回避による最適化について触れていましたが、こちらについてもう少し詳しく触れておきたいと思います。

記事中の実装は、Unity 2021.3.16f1で検証しています。

## DownloadHandlerでのデータの取り扱いについて

UnityでHTTP通信を行うための[UnityWebRequest](https://docs.unity3d.com/2021.3/Documentation/ScriptReference/Networking.UnityWebRequest.html)では、実際にダウンロードされたデータを`DownloadHandler`クラスを経由して扱うことができます。

`DownloadHandler`ダウンロードしたデータを取得するためのAPIが`text`・`data`・`nativeData`と、3つあります。

`text`はダウンロードしたデータをUTF8文字列として返却します。2021.3時点では、`text`プロパティは内部的に`GetText`メソッドを呼び出していますが、このメソッドは下記のような実装になっています。

```csharp
protected virtual unsafe string GetText()
{
    NativeArray<byte> nativeData =
        this.GetNativeData();
    return nativeData.IsCreated && nativeData.Length > 0 ?
        new string(
            (sbyte*) nativeData.GetUnsafeReadOnlyPtr<byte>(),
            0, nativeData.Length,
            this.GetTextEncoder()
        ) : "";
}
```

unsafeなどがあって若干ややこしいですが、元データ（`this.GetNativeData()`で取得した`NativeArray<byte>`）からstringを生成して返却しています。

`data`はデータのバイナリデータを`byte[]`として返却します。`data`プロパティは`GetData`メソッドを呼び出していますが、このメソッドは内部的に`InternalGetByteArray`を呼び出しています。下記がその実装です。

```csharp
internal static byte[] InternalGetByteArray(DownloadHandler dh)
{
    NativeArray<byte> nativeData = dh.GetNativeData();
    return nativeData.IsCreated ?
        nativeData.ToArray() :
        (byte[]) null;
}
```

`ToArray()`は`NativeArray<T>`の内部で保持しているデータをコピーして配列として返却します。下記の実装になっています。

```csharp
public T[] ToArray()
{
    T[] dst = new T[this.Length];
    NativeArray<T>.Copy(this, dst, this.Length);
    return dst;
}
```

一方で、`nativeData`も`data`と同様にバイナリデータを返却します。では`data`との違いは？というと、`data`は`byte[]`を返すのですが`nativeData`は元データを`NativeArray<byte>.ReadOnly`として返却します。

このとき`nativeData`は、[ドキュメントにある通り](https://docs.unity3d.com/ja/2021.2/ScriptReference/Networking.DownloadHandler-nativeData.html)をアロケーションフリーで元データを返却します。

エンジン側で確保された`byte`配列なのですが、その領域を直接指し示す`NativeArray<byte>.RaadOnly`を返却します。C#側で安全に扱える元データのポインターを返す、といったイメージでしょうか。

長々と説明しましたが、まとめると`data`や`text`は元データを**コピーして返却する**のに対して、`nativeData`は元データの参照を`NativeArray<T>.ReadOnly`を返すことで、**元データのコピーを回避できます**。

## `NativeArray<T>`から`Span<T>`への変換

`NativeArray<T>`は文字通り配列のため、下記のような処理で`Span<T>`として扱えます。

```csharp
unsafe
{
    var data = uwr.nativeData;
    ReadOnlySpan<byte> span = new ReadOnlySpan<byte>(data.GetUnsafeReadOnlyPtr(), data.Length);
}
```

Unity 2022.2以降では、`NativeArray<T>`に`AsSpan`メソッドが用意されました。このメソッドはunsafeでないため、下記のようにunsafe外でも普通に利用できます。

```csharp
var data = uwr.nativeData;
ReadOnlySpan<byte> span = data.AsReadOnlySpan();
```

参考: [【Unity】NativeArray<T>からSpan<T>へ変換する方法(2022.2以前はunsafe, 2022.2以降はAsSpan) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2022/12/19/120000)
参考: [Unity 2021.2 から新しく使えるようになったC#のクラスを眺める - Qiita](https://qiita.com/Gaku_Ishii/items/23d85defb8339fe3e9c0#spant1)

## `Span<T>`を経由した、シリアライザーのコピー回避

UnityWebRequestでダウンロードしたデータを、`nativeData`を用いてコピーフリーでアクセスでき、さらに`NativeArray<T>`を`Span<T>`に変換することで、`Span<T>`として引き回せることがわかりました。

では、これでなにが嬉しいのかというと、JSONやMessagePackなどのシリアライザーが`Span<T>`を受け取る口さえあれば、**UnityWebRequestが確保した元データをコピー無しで直接渡すことができる点**です。

たとえばSystem.Text.Jsonパッケージの`JsonSerializer`のデシリアライズメソッドは、`ReadOnlySpan<byte>`を[受け取るメソッド](https://learn.microsoft.com/ja-jp/dotnet/api/system.text.json.jsonserializer.deserialize?view=net-7.0#system-text-json-jsonserializer-deserialize(system-readonlyspan((system-byte))-system-type-system-text-json-jsonserializeroptions))があります。このメソッドに、下記のように`nativeData`を渡すことで、`data`と比べて配列コピーのアロケーションコストを抑えることができます。

System.Text.Jsonなどの利用方法については、[こちらの記事](https://blog.yucchiy.com/2022/12/csharp-advent-calendar-system-text-json-unity/#serializetoutf8bytes%E3%81%AB%E3%82%88%E3%82%8Butf-8%E3%83%90%E3%82%A4%E3%83%88%E9%85%8D%E5%88%97%E3%81%AE%E3%82%B7%E3%83%AA%E3%82%A2%E3%83%A9%E3%82%A4%E3%82%BA)にて詳細を確認ください。

```csharp
// handlerはDownloadHandlerとする

// UTF-8バイト配列をデシリアライズ
// JSONの場合はUTF-8という前提で
Profiler.BeginSample("From UTF-8 Bytes");
var utf8Bytes = handler.data;
p = JsonSerializer.Deserialize<Product>(
    utf8Bytes,
    ProductJsonContext.Default.Product);
Profiler.EndSample();

// UTF-8バイト配列を、元のデータを直接参照してデシリアライズ
// このとき元配列をコピーしないので、その分アロケーションコストが抑えられる
Profiler.BeginSample("From UTF-8 Bytes With Native Array");
unsafe
{
    var utf8BytesSpan = new ReadOnlySpan<byte>(
        handler.nativeData.GetUnsafeReadOnlyPtr(),
        handler.nativeData.Length);
    p = JsonSerializer.Deserialize<Product>(
        utf8BytesSpan, ProductJsonContext.Default.Product);
}
Profiler.EndSample();
```

![「From UTF-8 Bytes」より「From UTF-8 Bytes With Native Array」のほうがGC Allocを抑えられていることが確認できる](https://blog.yucchiy.com/static/d6e86e797a3aa87538638513c21a79d6/66caf/ED3DEAB5B24E6396C6D5ECE01FB5237B.png)

当然ですが、他のシリアライザーでも、`Span<byte>`を渡すAPIさえあればこのテクニックは利用できます。たとえば、C#向けのシリアライザーである[MemoryPack](https://github.com/cysharp/memorypack)では下記のように実装できます。

```csharp
// 下記クラスがあるとして...
[MemoryPackable]
public partial class Person
{
    public int Age { get; set; }
    public string Name { get; set; }
}

// APIからMemoryPackバイナリがふってきているとする
// 2022.2からはAsSpanを用いて、とてもシンプルに扱える
var val = MemoryPackSerializer.Deserialize<Person>(handler.nativeData.AsSpan());
Debug.Log($"{val.Age}, {val.Name}");
```

## まとめ

UnityWebRequestの`DownloadHandler.nativeData`について`data`との違いを説明しつつ、その実用例として、コピーコストを抑える最適化事例を紹介しました。
2022.2では、`NativeArray<T>.AsSpan()`が入ることによって、`NativeArray<T>`と`Span<T>`の変換も簡単になることも説明しました。
