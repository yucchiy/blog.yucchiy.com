---
type: "tech"
title: "MemoryPackで独自のバージョニングを行う"
description: "MemoryPackのバイナリに独自のバージョンタグを埋め込むことで、バージョニングを行う方法について紹介します。"
tags: ["Unity","MemoryPack"]
date: "2023-01-21T18:30:00"

---

MemoryPackは標準で[Version tolerant](https://github.com/Cysharp/MemoryPack#version-tolerant)によるバージョニングをサポートしています。

しかし、たとえば一時的なデータをアプリケーションに保存するが、アプリケーションの変更によって一時的データが利用できない場合など、独自のバージョニングを行いたいケースがあるかもしれません。

この記事では、MemoryPackでシリアライズ対象のクラスにバージョンを定義せず、MemoryPackのバイナリに独自データを埋め込むことで、独自のバージョニングを行う方法について紹介します。

## MemoryPackのバイナリに独自データを埋め込む・読み込む

MemoryPackでは、シリアライズ・デシリアライズ前後にこちらの定義したコールバックを呼び出すことができます。これにより独自の処理を差し込むことができます。

[Serialization callbacks](https://github.com/Cysharp/MemoryPack#serialization-callbacks)

具体的には、下記のように静的メソッドに対して属性を設定することで、コールバックメソッドとして呼び出されます。

```csharp
[MemoryPackable]
public partial class MethodCallSample
{
    [MemoryPackOnSerializing]
    static void OnSerializing()
    {
        Debug.Log(nameof(OnSerializing));
    }

    [MemoryPackOnSerialized]
    static void OnSerialized()
    {
        Debug.Log(nameof(OnSerialized));
    }

    [MemoryPackOnDeserializing]
    static void OnDeserializing()
    {
        Debug.Log(nameof(OnDeserializing));
    }

    [MemoryPackOnDeserialized]
    static void OnDeserialized()
    {
        Debug.Log(nameof(OnDeserialized));
    }
}
```

コールバックメソッドの呼び出しとMemoryPackの処理は、それぞれ下記の順番で行われます。

* シリアライズ
    1. `MemoryPackOnSerializing`が指定されたメソッド
    2. MemoryPackのシリアライズ
    3. `MemoryPackOnSerialized`が指定されたメソッド
* デシリアライズ
    1. `MemoryPackOnDeserializing`が指定されたメソッド
    2. MemoryPackのデシリアライズ
    3. `MemoryPackOnDeserialized`が指定されたメソッド

また、これらのコールバックメソッドでは`ref reader/writer, ref T value`を受け取れます。
これによって、下記のようにMemoryPackでシリアライズされたバイナリの前後に独自のデータを読み書きできます。

```csharp
[MemoryPackable]
public partial class CustomHeader
{
    [MemoryPackOnSerializing]
    static void OnSerializing(ref MemoryPackWriter writer, ref CustomHeader? value)
    {
        // シリアライズ前をフックできる
        // ここでデータを書くと、MemoryPackのバイナリの前にヘッダー的な感じでデータを埋め込める
        writer.WriteUnmanaged(10);
    }

    [MemoryPackOnDeserializing]
    static void OnDeserializing(ref MemoryPackReader reader, ref CustomHeader? value)
    {
        // デシリアライズ前をフックできる
        // 独自に書いたデータを読み込む
        var val = reader.ReadUnmanaged<int>();
        // 10
        Debug.Log($"{val}");
    }
}
```

## 独自に埋め込んだデータを用いて独自のバージョニングを行う

上記の埋め込みを用いて独自のバージョニングを行ってみます。

1. シリアライズ時にバージョンを埋め込む
2. デシリアライズ時にバージョンを読み込んで、バージョンが違う場合例外を投げる

下記に例を示します。（といっても、前述のデータ埋め込みとほとんどコードは変わりません。）

```csharp
// なにか適当なところからバージョンをとってくるとする
public class MyApplication
{
    public static readonly int Version = 2;
}

[MemoryPackable]
public partial class Snapshot
{
    public int Hp { get; set; }
    public int Mp { get; set; }

    public Snapshot(int hp, int mp)
    {
        Hp = hp;
        Mp = mp;
    }

    [MemoryPackOnSerializing]
    static void OnSerializing(
        ref MemoryPackWriter writer,
        ref Snapshot? value)
    {
        writer.WriteUnmanaged(MyApplication.Version);
    }

    [MemoryPackOnDeserializing]
    static void OnDeserializing(
        ref MemoryPackReader reader,
        ref Snapshot value)
    {
        var version = reader.ReadUnmanaged<int>();
        if (MyApplication.Version != version)
        {
            throw new ApplicationVersionException($"Embed version = {version}");
        }
    }
}
```

上記を用いて、下記のようにバージョン変更を検知できます。

```csharp
// とあるアプリバージョンで実行
var data = new Snapshot(10, 20);
var bin = MemoryPackSerializer.Serialize(data);
// 適当な場所に保存
File.WriteAllBytes($"{Application.persistentPath}/temp-save.bin", bin);

// 上記実行からアプリバージョンがあがったとして下記を実行
var bin = File.ReadAllBytes($"{Application.persistentPath}/temp-save.bin");
try
{
    var data = MemoryPackSerializer.Deserialize<Snapshot>(data);

    // ここを通るということは保存したデータは問題なく利用できる、はず
} catch (ApplicationVersionException e)
{
    // バージョンが変わっているのでここでエラー処理をする
}
```

## カスタムフォーマッターを利用してバージョンを埋め込む

上記の実装の場合、`Snapshot`にバージョンの埋め込み処理などを行う必要があります。
設計思想によっては、データ型そのものにバージョニングに関するロジックを実装したくないかもしれません。

この処理をカスタムフォーマッター側で実装することで、データ型そのものはバージョニングの処理に依存しない、といった実装も可能です。

具体的にさきほどの`Snapshot`に対して、独自のバージョニングを行うフォーマッターの実装は下記のとおりです。

```csharp
// このクラス自体はシンプルなデータを保持するだけのクラス
[MemoryPackable]
public partial class Snapshot2
{
    public int Hp { get; set; }
    public int Mp { get; set; }
    public Snapshot2(int hp, int mp)
    {
        Hp = hp;
        Mp = mp;
    }
}

// シリアライズ処理＋バージョニングを行うフォーマッター
public class SnapshotWithVersioningFormatter
    : MemoryPackFormatter<Snapshot2>
{
    public override void Serialize(
        ref MemoryPackWriter writer,
        ref Snapshot2? value)
    {
        if (value == null)
        {
            writer.WriteNullObjectHeader();
            return;
        }
        
        // バージョン埋め込み
        writer.WriteUnmanaged(MyApplication.Version);
        // Snapshot2のシリアライズ
        writer.WritePackable(value);
    }

    public override void Deserialize(
        ref MemoryPackReader reader,
        ref Snapshot2? value)
    {
        if (reader.PeekIsNull())
        {
            value = null;
            return;
        }

        // バージョンチェック
        var version = reader.ReadUnmanaged<int>();
        if (version != MyApplication.Version)
        {
            throw new ApplicationVersionException();
        }

        // Snapshot2のデシリアライズ
        reader.ReadPackable<Snapshot2>();
    }
}
```

下記のようにシリアライズ・デシリアライズおよびバージョンチェックを行います。

```csharp
// アプリの初期化時などで一度だけ呼び出す
MemoryPackFormatterProvider.Register(
    new SnapshotWithVersioningFormatter());

// シリアライズ
var val = new Snapshot2(10, 20);
var bin = MemoryPackSerializer.Serialize(val);

// バージョンが変わったとする
MyApplication.Version = 3;

try
{
    // デシリアライズ時に、シリアライズ時とバージョンが違っていると
    // ApplicationVersionExceptionを投げる。
    val = MemoryPackSerializer.Deserialize<Snapshot2>(bin);
    Debug.Log($"{val.Hp}, {val.Mp}");
}
catch (ApplicationVersionException e)
{
    // バージョンのミスマッチが発覚
    Debug.LogException(e);
}
```