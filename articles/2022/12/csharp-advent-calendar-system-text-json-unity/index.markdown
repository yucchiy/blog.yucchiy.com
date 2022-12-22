---
type: "tech"
title: "System.Text.Jsonのソース生成をUnityで試す"
description: "UnityでSource Generator対応したSystem.Text.Jsonについて、その紹介と導入方法、シリアライズとデシリアライズ方法、パフォーマンスに比較、いくつかの最適化手法について紹介します。"
tags: ["Unity","C#"]
date: "2022-12-22T15:00:00"

---

この記事は[C# Advent Calendar 2022](https://qiita.com/advent-calendar/2022/csharplang)の23日目の記事です。


Unity 2021.2 から Source Generatorが利用できるようになりました。

これによってUnityでも、Microsoftが提供するJsonシリアライザー `System.Text.Json` のソース生成を利用できるようになりました。

`System.Text.Json` のソース生成は、C#のSource Generatorを用いてシリアライズおよびデシリアライズのコードをビルド時に生成することで、シリアライザーのパフォーマンスを向上させるものです。

[Try the new System.Text.Json source generator - .NET Blog](https://devblogs.microsoft.com/dotnet/try-the-new-system-text-json-source-generator/)


この記事では、Unityで `System.Text.Json` のソース生成を利用するための環境構築と、実際にコード生成を用いたJSONシリアライズ・デシリアライズの動作確認、最後にUnityアプリとして実機で動かしてそのパフォーマンスを比較してみます。あわせてUnity公式が提供するJSONシリアライザーの `JsonUtility` ともパフォーマンスの比較を行ってみます。

検証環境は以下の通りです。

* macOS Monterey 12.5
* MacBookPro（2018）、2.9GHz 6-Core Intel Core i9、32GB
* Unity 2021.3.14f1
* Rider 2022.2
* iPhone X

ちなみに、Unity 2022.2.0b16では動作が確認できませんでした。
（おそらく内部のSource Generatorのバージョンが変わった？）

## System.Text.JsonをUnityに導入する

前述の通り、Unity 2021.2からSource Generatorが利用できるようになりました。

[Unity - Manual: Roslyn analyzers and source generators](https://docs.unity3d.com/2021.3/Documentation/Manual/roslyn-analyzers.html)



Unityでは現状`System.Text.Json`の 6.0.0-previewが利用できます。下記はドキュメントからの抜粋です。


このバージョンから、ソース生成によるシリアライズとデシリアライズがサポートされています。ちなみに6.0.0でのソース生成は、Unityがサポートしている[Microsoft.CodeAnalysis 3.8](https://www.nuget.org/packages/Microsoft.CodeAnalysis.CSharp/3.8.0)よりも後のバージョン（3.11）が利用されているため利用できないようです（おそらく）。



Unityで`System.Text.Json`を利用するには、`System.Text.Json`本体とそれが依存するパッケージをすべてnugetから持ってくる必要があります。具体的には下記のパッケージをすべてインストールする必要があります。

* [System.Text.Json](https://www.nuget.org/packages/System.Text.Json/6.0.0-preview.7.21377.19)
* [System.Text.Encodings.Web](https://www.nuget.org/packages/System.Text.Encodings.Web/6.0.0-preview.7.21377.19)
* [System.Runtime.CompilerServices.Unsafe](https://www.nuget.org/packages/System.Runtime.CompilerServices.Unsafe/)
* [Microsoft.Bcl.AsyncInterfaces](https://www.nuget.org/packages/Microsoft.Bcl.AsyncInterfaces/6.0.0)
それぞれ上記のページに飛んで「Download package」をクリックしてnupkgを落としてきます。

次にnupkgをzipとして解凍します。Macであればファイル名末尾にzipを付けたあとにそのファイルをダブルクリックで解凍できます。解凍後のフォルダをひらくと、`lib/netstandard2.0`または `lib/netstandard2.1`フォルダ内にパッケージ名と同じ名前のdllがあるので、Unityプロジェクト配下に配置します（下図は`System.Text.Json`パッケージの例）。

![](./09ACD05FCE95B9E3B2D55CB764D9B6D7.png)

上記のDLLをすべてUnityプロジェクトに配置すると、いままでのリフレクションベースな `System.Text.Json`が利用できます。下記コードのように`JsonSerializer`の`Serialize`と`Deserialize`を呼び出すことで、クラスとJSONの相互変換ができます。

```csharp
public class Person
{
    public int Age { get; set; }
    public string Name { get; set; }
}

var p = new Person
{
    Age = 40,
    Name = "John",
};
// シリアライズ
var json = JsonSerializer.Serialize(p);
// {"Age":40,"Name":"John"}
Debug.Log($"{json}");

// デシリアライズ
var val = JsonSerializer.Deserialize<Person>(json);
// 40, John
Debug.Log($"{val.Age}, {val.Name}");
```


次に、`System.Text.Json`のソース生成機能をUnityに持ってきます。さきほど解凍した`System.Text.Json`のnupkgの中に、下図のようにSystem.Text.Json.SourceGeneration.dllがあるので、これをUnityプロジェクトに配置します。

![](./62E0EC4E0F305E035E1C50CA79BE7EA6.png)

次にプロジェクトビューでSystem.Text.Json.SourceGenerator.dllを選択して、インスペクター上で下記の設定を行います。

1. 「Select platforms for plugin」ですべてのプラットフォームのチェックを外す
1. 「Asset Labels」に「RoslynAnalyzer」を設定する
具体的には、下図のように設定します。

![](./B102B22AF45A7E5C6473C0DB73AD26C6.png)

これでソース生成を含めた`System.Text.Json`の導入が完了しました。

## ソース生成でのJSON

のシリアライズ・デシリアライズを試す

それではSource Generatorでのソース生成とシリアライズ・デシリアライズを試してみます。ソース生成経由でのシリアライズは、下記ドキュメントに詳細が記載されています。

[How to use source generation in System.Text.Json | Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json/source-generation?pivots=dotnet-6-0)

また、下記ブログでも利用方法が説明されています。

[Try the new System.Text.Json source generator - .NET Blog](https://devblogs.microsoft.com/dotnet/try-the-new-system-text-json-source-generator/)

実際に、先程の`Person`クラスをソース生成経由でシリアライズとデシリアライズしてみます。大まかには下記の手順です。

1. `JsonSerializeContext`を継承したpartialなクラスを作る
1. 1.で作ったクラスに`JsonSerializable`属性を指定する
1. 2.で作成したクラスにSource Generator経由で`JsonTypeInfo<T>`の実装などが生成されるので、それをシリアライズ・デシリアライズの引数に渡す
具体的には、シリアライズしたいクラスをさきほどの`Person`として、下記のようなクラスを用意します。

```csharp
[JsonSerializable(typeof(Person))]
internal partial class PersonJsonContext : JsonSerializerContext {}
```


このクラスを用いて、ソース生成を用いたシリアライズは下記のように行います。

```csharp
var p = new Person
{
    Age = 40,
    Name = "John",
};

// シリアライズ
var json = JsonSerializer.Serialize(
    p,
    // 生成されたJsonTypeInfoを渡す
    PersonJsonContext.Default.Person
);
// {"Age":40,"Name":"John"}
Debug.Log($"{json}");

// デシリアライズ
var val = JsonSerializer.Deserialize(
    json,
    // こっちも同様
    PersonJsonContext.Default.Person
);
// 40, John
Debug.Log($"{val.Age}, {val.Name}");
```


シリアライズおよびデシリアライズ時に生成された`JsonTypeInfo<T>`（上記だと`PersonJsonContext.Default.Person`）渡します。それ以外は特に変わりません。簡単ですね。

## パフォーマンス比較

ここまででソース生成によるシリアライズとデシリアライズの方法を紹介したので、ソース生成の有無によるパフォーマンスを比較してみます。下記の３種類のクラスをそれぞれシリアライズ・デシリアライズしたときの速度を計測してみます。

```csharp
// サンプルで取り上げたシンプルなケース
public class Person
{
    public int Age { get; set; }
    public string Name { get; set; }
}

// 一通りの基本型を持ったクラス
public class Primitives
{
    public short Short { get; }
    public int Int { get; }
    public long Long { get; }
    public byte Byte { get; }
    public bool Bool { get; }
    public char Char { get; }
    public float Float { get; }
    public double Double { get; }
    public string String { get; }
}

// クラスがネストするケース
public class NestCase
{
    public class Inner
    {
        public int Int { get; }
        public double Double { get; }
        public string String { get; }
    }
    
    public Inner A { get; }
    public Inner B { get; }
    public Inner C { get; }
    public Inner D { get; }
    public Inner E { get; }
    public Inner F { get; }
    public Inner G { get; }
    public Inner H { get; }
    public Inner I { get; }
}
```


### 実機上でのパフォーマンス計測について

計測はiOSの実機上で行います。実機上でのパフォーマンス計測には[Performance Testing Extension](https://docs.unity3d.com/Packages/com.unity.test-framework.performance@2.8/manual/index.html)という、Unity Test Runner上でパフォーマンス計測を行ってくれるツールを用いました。

たとえば下記のようなコードを記述して、

```csharp
[Test, Performance]
public void SimplePerson_Serialize_SourceGenerator_Check()
{
    Measure.Method(() =>
    {
        for (int i = 0; i < 1000; i++)
        {
            JsonSerializer.Serialize(
                PersonTests[i], PersonJsonContext.Default.Person);
        }
    }).Run();
}
```


Test Runnerを実行することで、上記の`Measure.Method`に渡したメソッドの処理を、複数回実行して計測し、その平均や分散などを下図のように報告してくれます。

![](./8C9B13DD254F5B30CAA532C92A7F95E6.png)

Performance Testing Extensionについては下記の記事にてインストール方法や利用方法を記載していますので、興味があればご確認ください。

[Performance Testing Extensionを用いてUnityで実機でパフォーマンス計測をおこなう | Yucchiy's Note](https://blog.yucchiy.com/2021/09/unity-performance-testing/)

### 計測対象について

今回は下記の４つでパフォーマンスを比較しました。

* ソースコード生成なしの`System.Text.Json`での文字列へのシリアライズとデシリアライズ
* ソースコード生成ありの`System.Text.Json`での文字列へのシリアライズとデシリアライズ
* ソースコード生成ありの`System.Text.Json`でのUTF-8 バイト配列へのシリアライズとデシリアライズ
* `JsonUtility`での文字列へのシリアライズとデシリアライズ
### JsonUtilityについて

`JsonUtility`はUnityが標準で用意するJSONシリアライザーです。`System.Text.Json`と比べると、たとえばシリアライズの対象がシリアライズ可能なフィールドのみなどと自由度が低いというデメリットはありますが、高速にシリアライズ・デシリアライズが行えるなどのメリットがあります。

[JSON 形式へのシリアル化 - Unity マニュアル](https://docs.unity3d.com/ja/2020.3/Manual/JSONSerialization.html)

`JsonUtility`の使い方については下記の記事にて紹介していますので、こちらも興味があればご確認ください。

[JsonUtilityでオブジェクトをシリアライズしたりデシリアライズしたりする | Yucchiy's Note](https://blog.yucchiy.com/2022/06/jsonutility-serialize-deserialize-unity-object/)

### SerializeToUtf8BytesによるUTF-8バイト配列のシリアライズ

[C# を使用して JSON をシリアル化および逆シリアル化する方法 - .NET | Microsoft Learn](https://learn.microsoft.com/ja-jp/dotnet/standard/serialization/system-text-json/how-to?pivots=dotnet-6-0#serialize-to-utf-8)

今回`System.Text.Json`が用意する `JsonSerializer`で、UTF-8 バイト配列へのシリアライズとUTF-8 バイト配列からのデシリアライズもパフォーマンス計測の対象に入れました。

C#の文字列はその内部フォーマットがUTF-16なため、たとえば `JsonSerializer.Serialize`を呼び出して結果を`string`で受け取る場合は、一度UTF-8としてシリアライズした後に`string`に変換するため際にUTF-16へのエンコーディングが行われます。

JSONは文字コードがUTF-8を想定しているため、たとえばJSONフォーマットなAPI通信をUnity標準のHTTPクライアント[UnityWebRequest](https://docs.unity3d.com/ScriptReference/Networking.UnityWebRequest.html)を用いると、下記のようなコードを書くことになります。

```csharp
// requestはAPIのリクエストを表すインスタンスだとする
// シリアライズしてUTF-8バイト配列から文字列（UTF-16）に変換
var json = JsonSerializer.Serialize(request);
// 文字列（UTF-16）からUTF-8にバイト配列に再度変換
var data = System.Text.Encoding.UTF8.GetBytes(json);

// ここからUnityWebRequest
var uwr = UnityWebRequest.Post(url);
uwr.uploadHandler = (UploadHandler)new UploadHandlerRaw(data);
uwr.SetRequestHandler("Content-Type", "application/json");
// リクエスト結果待ち
yeld return uwr.SendWebRequest();
```


シリアライズ時にUTF-8バイト配列からUTF-16に変換したのち、さらにUTF-8バイト配列にエンコードしなおしてリクエストする必要があります。つまり文字列を挟むと2度余計な変換をしていることになります。

これを`SerializeToUtf8Bytes`を用いると下記のように記述できます。

```csharp
// シリアライズ結果をそのままUTF-8バイト配列を受け取る
var data = JsonSerializer.SerializeToUtf8Bytes(request);

// UnityWebRequest
var uwr = UnityWebRequest.Post(url);
// そのままUTF-8バイト配列を渡せる
uwr.uploadHandler = (UploadHandler)new UploadHandlerRaw(data);
uwr.downloadHandler = (DownloadHandler)new DownloadHandlerBuffer();
uwr.SetRequestHandler("Content-Type", "application/json");
// リクエスト結果待ち
uwr.SendWebRequest();
```


このように直接UTF-8バイト配列を受け取ることで無駄なエンコーディングを省くことができます。

ちなみにこれはデシリアライズ時にも同じことが言えます。  `UnityWebRequest`の`DownloadHandler`は、レスポンスを`data`と`text`とというメソッド経由で取得でき、それぞれレスポンスのコピーとレスポンス文字列に変換したデータが受け取れます。それぞれ `JsonSerizlier` でデシリアライズでの下記のコードで行えます。

```csharp
// 文字列（UTF-16）をデシリアライズ
Profiler.BeginSample("From Text");
var text = handler.text;
var p = JsonSerializer.Deserialize<Product>(
    text, ProductJsonContext.Default.Product);
Profiler.EndSample();

// UTF-8バイト配列をデシリアライズ
// JSONの場合はUTF-8という前提で
Profiler.BeginSample("From UTF-8 Bytes");
var utf8Bytes = handler.data;
p = JsonSerializer.Deserialize<Product>(
    utf8Bytes,
    ProductJsonContext.Default.Product);
Profiler.EndSample();
```


`text`をデシリアライズすると、元データ（UTF-8バイト配列）→ 文字列（UTF-16）→ UTF-8バイト配列に変換 → デシリアライズとなりますが、`data`をデシリアライズすると、UTF-8バイト配列を直接デシリアライズできるため、無駄な処理を省くことができます。

ちなみに `DownloadHandler`には`nativeData`という、元データを`NativeArray<byte>`をリードオンリーで参照できるプロパティが存在します。 `data`は呼び出しごとにこの`nativeData` をコピーしてしまうのですが、 `nativeData`を参照することでコピーを避ける事ができます。また`JsonSerializer`の `Deserialize`は`ReadOnlySpan<byte>`を直接みてデシリアライズできます。

これを組み合わせると、Unsafeなコードにはなりますが`ReadOnlySpan<byte>`を介して、元データのコピーを行わずそのままデシリアライズが可能です。具体的には、下記のように`NativeArray<T>`から`ReadOnlySpan<T>`を引き抜いて、それを`Deserialize`に渡すことで実現できます。

```csharp
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


上の３つのデシリアライズのプロファイリングを取ると下図のようになりました。`nativeData`経由だと、特にGC Allocが小さくなっているのが確認できます。

![](./ED3DEAB5B24E6396C6D5ECE01FB5237B.png)

余談ですが、 Unity 2022.2では `NativeArray<T>`から`Span<T>`を生成するAPIが用意されました。

[Unity - Scripting API: Unity.Collections.NativeArray_1.AsSpan](https://docs.unity3d.com/2022.2/Documentation/ScriptReference/Unity.Collections.NativeArray_1.AsSpan.html)

[【Unity】NativeArray<T>からSpan<T>へ変換する方法(2022.2以前はunsafe, 2022.2以降はAsSpan) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2022/12/19/120000)

こちらを用いることで、下記のようにUnsafeなしに、さらにシンプルにコードが記述できるようになります。

```csharp
// UTF-8バイト配列を、元のデータを直接参照してデシリアライズ
// このとき元配列をコピーしないので、その分アロケーションコストが抑えられる
Profiler.BeginSample("From UTF-8 Bytes With Native Array2");
// unsafeも外せるしシンプル
var utf8BytesSpan = handler.nativeData.AsSpan();
var p = JsonSerializer.Deserialize<Product>(
    utf8BytesSpan, ProductJsonContext.Default.Product);
Profiler.EndSample();
```


### パフォーマンス計測結果

改めて、下記４つのシリアライズ、デシリアライズのパフォーマンスについて、 `Person` ・ `Primitives` ・ `NestCase` の３つのクラスでのパフォーマンスの計測結果を比較します。

* ソースコード生成なしの`System.Text.Json`での文字列へのシリアライズとデシリアライズ
    *  `JsonSerializer`と表記
* ソースコード生成ありの`System.Text.Json`での文字列へのシリアライズとデシリアライズ
    *  `JsonSerializerSrcGen`と表記
* ソースコード生成ありの`System.Text.Json`でのUTF-8 バイト配列へのシリアライズとデシリアライズ
    * `JsonSerializerSrcGenUtf8`と表記
* `JsonUtility`での文字列へのシリアライズとデシリアライズ
    * `JsonUtility`と表記
    
上記のクラスのインスタンスをそれぞれ1000回シリアライズ・デシリアライズを1計測として、それを10回繰り返し、その平均を算出しました。例えば`Person`クラス`JsonSerializerSrcGen`の計測コードは下記の通りです。

```csharp
[Test, Performance]
public void SimplePerson_Serialize_SourceGenerator_Check()
{
    Measure.Method(() =>
    {
        for (int i = 0; i < 1000; i++)
        {
            JsonSerializer.Serialize(
                // PersonTests[i]は事前に生成したものを利用
                // すべてランダムな値を入れている。
                // 文字列は1~9、a-zA-Zでランダムな文字列を利用
                // （本当はユニコードも入れるべき...）
                PersonTests[i], PersonJsonContext.Default.Person);
        }
    })
        // 計測は10回繰り返す
        .MeasurementCount(10)
        .Run();
}
```


まずシリアライズについてです。単位はミリ秒です。それぞれのクラスで最も速かったシリアライズに対して**太字**を付けました。

|                          |    Person | Primitives |  NestCase |
| :----------------------- | --------: | ---------: | --------: |
| JsonSerializer           |    3.93   |    18.66   |   66.15   |
| JsonSerializerSrcGen     |    1.84   |     7.93   |   30.76   |
| JsonSerializerSrcGenUtf8 |  **1.80** |     7.45   | **28.92** |
| JsonUtility              |    2.86   |   **5.67** |   29.94   |

次にデシリアライズです。

|                          |  Person  |  Primitives  |  NestCase  |
| :----------------------- | -------: | -----------: | ---------: |
| JsonSerializer           |   3.63   |       7.93   |    47.20   |
| JsonSerializerSrcGen     |   1.44   |       7.27   |    45.24   |
| JsonSerializerSrcGenUtf8 | **1.29** |       6.89   |    44.08   |
| JsonUtility              |   2.91   |     **4.86** |  **28.48** |

上記の結果から、下記のことが言えそうです。

* `System.Text.Json`ではソース生成を行うことで、速度改善が見られた。
    * シリアライズ処理に対しては概ね2〜2.5倍程度の速度向上が見られた。
    * デシリアライズは〜2倍程度。シリアライズ処理よりは大きな速度改善は見られなかった。
* UTF-8バイト配列にシリアライズ、またはUTF-8バイト配列をデシリアライズすることで若干の速度改善は見られた。
    * こちらはGC Allocも合わせて改善した。
* `System.Text.Json`のソース生成&UTF-8バイト配列による処理と`JsonUtility`による処理については、ケースによって結果が前後したが、特にデシリアライズは`JsonUtility`が高速な傾向あった。
## まとめ

Unity2021.2でSource Generatorが利用できるようになったので、Source Generatorによる最適化が入った`System.Text.Json`の紹介とその導入方法、シリアライズとデシリアライズ方法、パフォーマンスについて比較しました。

また、`System.Text.Json`でUTF-8バイト配列を直接シリアライザーに渡す・受け取ることで、UTF-16へのエンコーディング処理を省く最適化と、UnityWebRequestの`NativeArray<T>`と`Span<T>`を用いたアロケーション削減についても触れました。

テストケースが少ないのであまりはっきりとしたことは言いづらいですが、Unityで利用できるJsonUtilityは、高速な反面カスタマイズや、UTF-8バイト配列を直接受け取る方法がないなどのデメリットがあるため、とくに通信APIなどでのJSONシリアライザーとして`System.Text.Json`の利用は、カスタマイズ製やGC削減などの最適化の観点で、ありなのかなという感じがしました。

書いてみて（C# Advent Calendarの記事なのに）C#成分が少なくて、どっちかというとUnity Advent Calendarネタ感があり申し訳ない感じもしますが、Unityへの`System.Text.Json`のSource Generator導入について扱っているブログが少なかった（調べた感じではなかった）ので、記事にさせていただきました。

`System.Text.Json`をUnityで導入することを検討しておられる方の参考になれば幸いです。

