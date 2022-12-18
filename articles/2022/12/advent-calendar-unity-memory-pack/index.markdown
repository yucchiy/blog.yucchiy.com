---
type: "tech"
title: "UnityでMemoryPackを利用してみる"
description: "Unityで、C#に特化した高速なシリアライザーであるMemoryPackを導入する方法についてまとめています。"
tags: ["Unity","MemoryPack"]
date: "2022-12-18T15:00:00"

---

本記事は [Unity Advent Calendar 2022](https://qiita.com/advent-calendar/2022/unity) の19日目の記事です。

この記事では [Cysharp/MemoryPack](https://github.com/Cysharp/MemoryPack)とUnityでの利用方法について紹介します。

## MemoryPackとは

[MemoryPack](https://github.com/Cysharp/MemoryPack)は、Cysharp社が提供するC#に特化したシリアライザーです。

MemoryPackでは、C#インスタンスを独自のバイナリフォーマットに変換します。類似するライブラリとしてJSONシリアライザであれば[System.Text.Json](https://learn.microsoft.com/en-us/dotnet/api/system.text.json?view=net-7.0)や[JsonUtility](https://docs.unity3d.com/ScriptReference/JsonUtility.html)、MessagePackシリアライザであれば [MessagePack for C#](https://github.com/neuecc/MessagePack-CSharp)となります。

MemoryPackの特徴として、他シリアライザーと比べて処理が速いという点が挙げられます。

## MemoryPackがなぜ速いのか

なぜMemoryPackが他のシリアライザーと比べて高速なのか簡単に説明します。詳細はライブラリの著者であるneneccさんの下記の記事が参考になります。

* [neue cc - MemoryPackにみる .NET 7/C# 11世代のシリアライザー最適化技法](https://neue.cc/2022/11/04_memorypack.html)
* [neue cc - C# 11 による世界最速バイナリシリアライザー「MemoryPack」の作り方](https://neue.cc/2022/12/08_MemoryPackSessionInDotNetConfRecapTokyo.html)
* [C#11 による世界最速バイナリシリアライザー「MemoryPack」の作り方 - Speaker Deck](https://speakerdeck.com/neuecc/c-number-11-niyorushi-jie-zui-su-bainarisiriaraiza-memorypack-nozuo-rifang)
MemoryPackは「Zero encoding extreme performance binary serializer for C# and Unity.」ということで、つまりシリアライズのために他シリアライザーで一般的に行われるようなエンコーディングをC#に特化したバイナリフォーマットを選定によって避け、その高速化を実現しています。

通常シリアライザーは、シリアライズしたいインスタンスの各メンバーを何かしらのテキストまたはバイナリ表現に変換します（エンコーディング）。たとえば`int`のシリアライズでは、JSONでは数値を1〜11バイトの文字列として、MessagepackやProtocol Buffersなどのシリアライザーでは、サイズ節約のために1〜5バイトの可変長なバイナリとしてエンコーディングします（著者の[ブログから引用](https://neue.cc/2022/11/04_memorypack.html)させていただいています）。

一方MemoryPackでは、インスタンスのメモリ上のデータを直接引っ張ってきます。そのため、たとえば`int`は、C#のメモリ表現をそのままコピーしてくるので4バイト固定のシリアライズになります。

さらにMemoryPackではC#のメモリ表現を前提として、可能な限り少ないコピーでデータをシリアライズできるようにしています。

これによって端的に差が出るケースが、ドキュメントにもある`Vector3`配列のシリアライズおよびデシリアライズです。

![](./B5CFC18D7719057E77F2897F68B35E3E.png)

MessagePackを例に取ると、`Vector3`配列は下記のようなシリアライズ処理が必要になります。

```csharp
void SerializeMessagePack(Vector3[] value)
{
    // 配列の長さ x フィールドの数だけ繰り返す
    foreach (var item in value)
    {
        // X
        {
            // 書き出すバッファのリサイズ
            if ((buffer.Length - offset) < 5)
            {
                // 実際にはResizeではなくてbufferWriter.Advance()です
                Array.Resize(ref buffer, buffer.Length * 2);
            }
            // 1つのfloatのエンコーディング
            // 先頭に識別子1byte+実際のfloatの値がはいる
            var p = MemoryMarshal.GetArrayDataReference(buffer);
            Unsafe.WriteUnaligned(ref Unsafe.Add(ref p, offset), (byte)0xca);
            Unsafe.WriteUnaligned(ref Unsafe.Add(ref p, offset + 1), item.X);
            offset += 5;
        }
        // これが３要素つづく
        // Y
        {
            if ((buffer.Length - offset) < 5)
            {
                Array.Resize(ref buffer, buffer.Length * 2);
            }
            var p = MemoryMarshal.GetArrayDataReference(buffer);
            Unsafe.WriteUnaligned(ref Unsafe.Add(ref p, offset), (byte)0xca);
            Unsafe.WriteUnaligned(ref Unsafe.Add(ref p, offset + 1), item.Y);
            offset += 5;
        }
        // Z
        {
            // 書き出すバッファのリサイズ
            if ((buffer.Length - offset) < 5)
            {
                Array.Resize(ref buffer, buffer.Length * 2);
            }
            var p = MemoryMarshal.GetArrayDataReference(buffer);
            Unsafe.WriteUnaligned(ref Unsafe.Add(ref p, offset), (byte)0xca);
            Unsafe.WriteUnaligned(ref Unsafe.Add(ref p, offset + 1), item.Z);
            offset += 5;
        }
    }
}
```


このように、それぞれの要素を愚直に書き出す必要があります。一方でMemoryPackでは下記のようにシリアライズを行います。

```csharp
void SerializeMemoryPack(Vector3[] value)
{
    // 配列長と型サイズからコピー領域が簡単に計算できる
    var size = Unsafe.SizeOf<Vector3>() * value.Length;
    // 書き出すバッファのリサイズ
    if ((buffer.Length - offset) < size)
    {
        Array.Resize(ref buffer, buffer.Length * 2);
    }
    // どれだけ複雑だろうとコピー一発で済ませられる
    MemoryMarshal.AsBytes(value.AsSpan()).CopyTo(buffer.AsSpan(0, offset))
}
```


これがどういう原理なのか簡単に説明します。

C#ではstructの配列は必ずデータが直列に並びます。さらに`Vector3`もxyzの`float`のフィールドが3要素のみで、`Vector3`そのものもメモリ上にデータが並びます（厳密にはstructが参照型を持たない場合にデータが完全にメモリ上に並びます）。これらの条件により、`Vector3`の配列はメモリ上に x0y0z0x1y1z1... という形で完全にデータが並びます。そのため `Vector3` 配列のメモリ上でのサイズは `Vector3` 型のサイズ×配列長となり、配列の先頭からその長さのデータを引き抜けば、シリアライズしたい配列のデータそのものになります。

またC#の構造体は定義したメンバー順に必ずデータが並ぶので、配列長がわかっていれば下記のように、バッファから1度のコピーでデシリアライズが行えます。

```csharp
Vector3[] DeserializeMemoryPack(ReadOnlySpan<byte> buffer, int size)
{
    var dest = new Vector3[size];
    // 配列長がわかれば、型サイズとあわせて1度でコピー&
    // そのbyte配列はそのままVector3の配列を表現しているので
    // キャストするだけでそのまま使える！
    MemoryMarshal.Cast<byte, Vector3>(buffer).CopyTo(dest);
    return dest;
}
```


このように、C#のメモリをそのままコピーすることでエンコーディングを避け、C#のメモリ表現前提で一度にまとめてコピーできる箇所はまとめて行ってトータルのコピー回数を減らすことで最適化を行っています。

MemoryPackのバイナリフォーマットはC#に特化、つまりC#のメモリ表現にとって都合の良いバイナリフォーマットを定義することで、シリアライズのパフォーマンスを最大化できるようにしています。

## MemoryPackをUnityでつかう

MemoryPackは、具体的なシリアライズの実装をC#の[Source Generator](https://learn.microsoft.com/ja-jp/dotnet/csharp/roslyn-sdk/source-generators-overview)という仕組みでコンパイル時に生成します。UnityでSource Generatorを利用できる最小バージョンが2021.2なので、MemoryPackがサポートする最小のUnityバージョンは 2021 LTSとなります。

### MemoryPackのインストール

MemoryPackのUnityへのインストールは、UPM（Unity Package Manager）経由か、アセットパッケージ（.unitypackage）経由で行うことができます。この記事では UPM 経由でのインストール方法について簡単に紹介します。

メニューの「Window > Package Manager」でパッケージマネージャのウインドウを開き、下図のようにウインドウ左上の「＋」ボタンをクリックして出てくるプルダウンメニューから「Add package from git URL…」を選択します。

![](./14126200E7C83013910D9E0446C4D08B.png)

選択後に出てくるテキストボックスに下図のように`https://github.com/Cysharp/MemoryPack.git?path=src/MemoryPack.Unity/Assets/Plugins/MemoryPack#1.9.6`というURLを入力します。ちなみに末尾の `#` 以降はバージョンになり、ここに[リリース済みのタグ](https://github.com/Cysharp/MemoryPack/releases)を入力すると任意のバージョンをインストールできます。 この記事を書いた 2022/12/17 時点での最新バージョンは`1.9.6`なので、そのバージョンを入力しました。

![](./C6E0DAFAA1836BCDBA7984DB02284CC8.png)

その後、下図のようにMemoryPackが表示されていればパッケージのインストールは完了です。

![](./FD6CAEAF01D53AF744C2EF12BF379BF8.png)

ただし、MemoryPackが `System.Runtime.CompilerServices.Unsafe/6.0.0` に依存しているため、追加でこのDLLを配置する必要があります。このDLLはNuGetから引っ張ってきます。

[NuGetのSystem.Runtime.CompilerServices.Unsafe 6.0.0 のページ](https://www.nuget.org/packages/System.Runtime.CompilerServices.Unsafe/6.0.0)を開き、画面右の「Download package」からnupkgをダウンロードします。

次に、nupkgをzipとして解凍して、その中にあるDLLを引っ張ってきます。macOS標準では、ファイル名の末尾に「.zip」を追記後、そのファイルを開くとzipとして解凍されます。その中の`lib/netstandard2.0`内にある`System.Runtime.CompilerServices.Unsafe.dll`（下図）をUnityプロジェクト内に配置します。

![](./C6C1515EE27067D04533FB23EA7058F0.png)

これでインストールは完了です。ちなみに .unitypackage の方は下図のようにDLLもセットでインストールされるため、この対応は不要です。

![](./3E33E10FB25FAE4A84C04FD584A45AE0.png)

## 基本的なMemoryPackの使い方

基本的な使い方はとても簡単で、シリアライズしたいC#の型に対して`[MemoryPackable]`属性を指定します。このときC#の型は`partial`キーワードをあわせて指定します。`partial`が必要な理由は、シリアライズ時に必要な処理を、このクラス上に自動生成するためです。

```csharp
using MemoryPack;

[MemoryPackable]
public partial class Person
{
    public int Age { get; set; }
    public string Name { get; set; }
}
```


上記の指定によってSource Generatorが`Person`型のシリアライズとデシリアライズのためのコードを自動生成します。コードは `{TypeName}.MemoryPackFormatter.g.cs` という名前で作成されます。このコードを確認したい場合、Riderであれば下図のように型にカーソルをあてて「Go to > Go to Declaration or Usages」を選択すると、

![](./CE57CA22499C12544A6D33F2E8310576.png)

下図のように `Person.MemoryPackFormatter.g.cs` がでてくるので、これを選択することで自動生成されたコードにジャンプできます。

![](./A24101AC8FC3AFC7375701BBE7F9A92C.png)

MemoryPackを用いて`Person`型のインスタンスをシリアライズおよびデシリアライズしてみます。シリアライズには `MemoryPackSerializer.Serialize<T>` を、デシリアライズには `MemoryPackDeserializer.Deserialize<T>` を呼び出します。

```csharp
var v = new Person {Age = 40, Name = "John"};
// シリアライズ
var bin = MemoryPackSerializer.Serialize(v);
// デシリアライズ
var val = MemoryPackSerializer.Deserialize<Person>(bin);
// 40, John
Debug.Log($"{val.Age}, {val.Name}");
```


内部的には上記で生成されたフォーマッタを呼び出すかたちでシリアライズおよびデシリアライズが行われています。

### ビルトインでサポートする型

[Built-in supported types](https://github.com/Cysharp/MemoryPack#built-in-supported-types)

ドキュメントから抜粋になりますが、下記の型をビルトインでサポートしています。

* .NET primitives (`byte`, `int`, `bool`, `char`, `double`, etc.)
* Unmanaged types (Any `enum`, Any user-defined `struct` which doesn't contain reference types)
* `string`, `decimal`, `Half`, `Int128`, `UInt128`, `Guid`, `Rune`, `BigInteger`
* `TimeSpan`, `DateTime`, `DateTimeOffset`, `TimeOnly`, `DateOnly`, `TimeZoneInfo`
* `Complex`, `Plane`, `Quaternion` `Matrix3x2`, `Matrix4x4`, `Vector2`, `Vector3`, `Vector4`
* `Uri`, `Version`, `StringBuilder`, `Type`, `BitArray`
* `T[]`, `T[,]`, `T[,,]`, `T[,,,]`, `Memory<>`, `ReadOnlyMemory<>`, `ArraySegment<>`, `ReadOnlySequence<>`
* `Nullable<>`, `Lazy<>`, `KeyValuePair<,>`, `Tuple<,...>`, `ValueTuple<,...>`
* `List<>`, `LinkedList<>`, `Queue<>`, `Stack<>`, `HashSet<>`, `SortedSet<>`, `PriorityQueue<,>`
* `Dictionary<,>`, `SortedList<,>`, `SortedDictionary<,>`, `ReadOnlyDictionary<,>`
* `Collection<>`, `ReadOnlyCollection<>`, `ObservableCollection<>`, `ReadOnlyObservableCollection<>`
* `IEnumerable<>`, `ICollection<>`, `IList<>`, `IReadOnlyCollection<>`, `IReadOnlyList<>`, `ISet<>`
* `IDictionary<,>`, `IReadOnlyDictionary<,>`, `ILookup<,>`, `IGrouping<,>`,
* `ConcurrentBag<>`, `ConcurrentQueue<>`, `ConcurrentStack<>`, `ConcurrentDictionary<,>`, `BlockingCollection<>`
* Immutable collections (`ImmutableList<>`, etc.) and interfaces (`IImmutableList<>`, etc.)
プリミティブおよびUnmanged types（enumやユーザー定義の参照型を持たない構造体）、基本的なコレクションのシリアライズはサポートしています。Unityのクラスをシリアライズしたい場合は、後述する「ラップ型とカスタムフォーマッター」によってシリアライズできます。

### MemoryPackIncludeとMemoryPackIgnore

[Define [MemoryPackable] class / struct / record / record struct](https://github.com/Cysharp/MemoryPack#define-memorypackable-class--struct--record--record-struct)

MemoryPackでは`[MemoryPackable]`属性のついた型のpublicなフィールドとプロパティをシリアライズします。なので、下記のようなクラスでは`_name`がシリアライズされないのが確認できます。

```csharp
using MemoryPack;

[MemoryPackable]
public partial class Person2
{
    public int Age { get; set; }
    private string _name;

    public void SetName(string name) => _name = name;
    public string GetName() => _name;
}

var v = new Person2 {Age = 40};
v.SetName("John");
// シリアライズ
var bin = MemoryPackSerializer.Serialize(v);
// デシリアライズ
var val = MemoryPackSerializer.Deserialize<Person2>(bin);
// _nameがシリアライズされないので、GetName()は空文字になる
// 40,
Debug.Log($"{val.Age}, {val.GetName()}");
```


もしprivateなフィールドおよびプロパティをシリアライズ対象に含めたい場合は`[MemoryPackInclude]`属性を指定します。逆にpublicだがシリアライズ対象に含めたくない場合は`[MemoryPackIgnore]`属性を指定します。

```csharp
using MemoryPack;

[MemoryPackable]
public partial class Person3
{
    // シリアライズ対象から外す
    [MemoryPackIgnore]
    public int Age { get; set; }
    // シリアライズ対象に含める
    [MemoryPackInclude]
    private string _name;

    public void SetName(string name) => _name = name;
    public string GetName() => _name;
}

var v = new Person3 {Age = 40};
v.SetName("John");
// シリアライズ
var bin = MemoryPackSerializer.Serialize(v);
// デシリアライズ
var val = MemoryPackSerializer.Deserialize<Person3>(bin);
// _nameはシリアライズされるが、Ageはシリアライズされないので下記が出力される
// 0, John
Debug.Log($"{val.Age}, {val.GetName()}");
```


### コンストラクタの指定

[Constructor selection](https://github.com/Cysharp/MemoryPack#constructor-selection)

MemoryPackは、パラメータなしコンストラクターとパラメータ化されたコンストラクタのどちらもサポートしています。いくつか注意点があります。

1. コンストラクタが複数個ある場合は、MemoryPackが利用するコンストラクタを`[MemoryPackConstructor]`で１つ指定する必要がある
1. パラメータ化されたコンストラクターを使用する場合は、コンストラクタの引数とメンバー名を一致させる必要がある（case-sensitive、大文字小文字は区別しない）
ちなみにこれらのルールに違反している場合、MemoryPackはRoslyn Analyzer経由で、下記のように独自のエラーを報告します。（それぞれMEMPACK004とMEMPACK006）

![](./8E8D6F751FC5055A7FF93501E0425133.png)

ちなみに2.は具体的に、下記のような実装においてエラーを報告します。

```csharp
using MemoryPack;

[MemoryPackable]
public partial class Person4
{
    [MemoryPackInclude]
    private string _name;

    private string GetName() => _name;

    [MemoryPackConstructor]
    // 引数のnameと初期化対象の_nameの名前が不一致
    public Person4(string name)
    {
        _name = name;
    }
}
```


少し分かりづらいのですが、コンストラクタのパラメータ名`name`と、`Person4`クラスで MemoryPackのシリアライズ対象に含まれるフィールド`_name`の名前が不一致しているために発生しています。これを愚直にコンストラクタを修正すると下記のようになります。

```csharp
    [MemoryPackConstructor]
    public Person4(string _name)
    {
        this._name = _name;
    }
```


このように、パラメーターとシリアライズ対象のフィールド名またはプロパティ名を一致させれば良いです。ただしこれだと若干気持ち悪さはあるので、下記のどれかで対応したほうが良いかもしれません。

```csharp
using MemoryPack;

// 1. 自動プロパティにしちゃう案
[MemoryPackable]
public partial class Person5
{
    // 自動プロパティにしちゃう
    public string Name { get; private set; }

    public Person5(string name)
    {
        Name = name;
    }
}

// 2. やっぱり諦められない案
//    private setterを定義してコンストラクタでそっち経由で初期化
[MemoryPackable]
public partial class Person6
{
    // シリアライズ対象はこっちにする案
    public string Name
    {
        get => _name;
        private set => _name = value;
    }

    // こっちはシリアライズ対象に含めない
    // が、そうするとreadonlyがつけられない...
    private string _name;

    public Person6(string name)
    {
        // プロパティ側で初期化する
        Name = name;
    }
}

// 3. やっぱり諦められない案
//    2.案 + init-only setterを使う
[MemoryPackable]
public partial class Person7
{
    public string Name
    {
        get => _name;
        // init-only setterで _name を初期化
        private init => _name = value;
    }
    
    // そうすると _name を readonlyにできる!
    // ただしUnityではinit-only setterがそのまま使えないので
    // IsExternalInitを定義するワークアラウンドが必要
    private readonly string _name;

    public Person7(string name)
    {
        Name = name;
    }
}
```


自動プロパティを許容できるなら、1.がシンプルで良いかもです。3.については、現状のUnityでは下記の定義を追加するというワークアラウンドが必要です。

```csharp
namespace System.Runtime.CompilerServices
{
    internal sealed class IsExternalInit { }
}
```


## シリアライズ時のコールバック

[Serialization callbacks](https://github.com/Cysharp/MemoryPack#serialization-callbacks)

MemoryPackでは、シリアライズおよびデシリアライズ前後にコールバックを仕込めます。たとえば特定のプロパティへの値、は後から代入したいなどといった用途に利用できます。

```csharp
using System;
using MemoryPack;

[MemoryPackable]
public partial class EmitIdData
{
    // デシリアライズ時に発行するものとする
    public Guid Id { get; set; }

    // デシリアライズ後の処理
    [MemoryPackOnDeserialized]
    static void EmitId(ref MemoryPackReader reader, ref EmitIdData? value)
    {
        // デシリアライズした後にあとからプロパティを追記もできる
        var guid = Guid.NewGuid();
        value.Id = guid;
        Debug.Log($"{guid.ToString()} on MemoryPackOnDeserialized");
    }
}

var emitId = new EmitIdData();
var bin = MemoryPackSerializer.Serialize(emitId);
var val = MemoryPackSerializer.Deserialize<EmitIdData>(bin);
// 下記ログが出力されて、EmitIdが呼び出されていることが確認できる
// 56f2239e-c5b6-4d1b-b7f8-f1c227f0e6de on MemoryPackOnDeserialized
Debug.Log($"EmitId = {val.Id}");
// EmitIdメソッドで発行したGuidと同じ値が出力されていることが確認できる
// EmitId = 56f2239e-c5b6-4d1b-b7f8-f1c227f0e6de
```


処理順は下記のとおりです。

1. `MemoryPackSerializing` / `MemoryPackDeserializing`
1. MemoryPackの シリアライズ  / デシリアライズ
1. `MemoryPackSerialized` / `MemoryPackDeserialized`
また、シリアライズおよびデシリアライズ時に`IServiceProvider`を経由して外からデータを渡すこともできます。たとえばIDだけシリアライズしておいて、IDに対応するインスタンスはデシリアライズ時にデータベースから引っ張りたいなどの場合、下記のようにデシリアライズ時に外からデータベースを登録してもらった `IServiceProvider` を渡してもらって（下記では `PlayerDatabase` がそのデータベースとする）、デシリアライズ時にデータベースを引いて初期化するといったことが可能です。

```csharp
using System.Collections.Generic;
using MemoryPack;

[MemoryPackable]
public partial class ServiceProviderSample
{
    // Playerインスタンスは、マスタデータのデータベースから値を引っ張ってくるとする
    // そのためここではシリアライズ対象から外しておく
    [MemoryPackIgnore]
    public Player Player { get; private set; }

    // IDだけシリアライズしておいて、データベースで引けるようにする
    public int Id { get; }
    public ServiceProviderSample(int id) => Id = id;

    [MemoryPackOnDeserialized]
    static void OnDeserialized(ref MemoryPackReader reader, ref ServiceProviderSample? value)
    {
        // 外からデータベースをしてもらって、そこからPlayerインスタンスをひく
        var db = reader.Options.ServiceProvider!.GetService(typeof(PlayerDatabase)) as PlayerDatabase;
        value.Player = db.GetById(value.Id);
    }
}

public class Player
{
    public string Name { get; }
    public Player(string name) => Name = name;
}

public class PlayerDatabase
{
    // これが、IDに対応するマスターデータを取得するメソッドだとする
    public Player GetById(int id)
    {
        return id switch
        {
            1 => new Player("John"),
            _ => throw new KeyNotFoundException(),
        };
    }
}
```


上記クラスのデシリアライズは下記のように行います。

ポイントとして、`MemoryPackSerializer.Deserialize<T>`の引数にオプションを渡せるので、その中の`ServiceProvider`にデータベースを登録済みの、`IServiceProvider`を実装するクラスを渡してやります。

```csharp
var v = new ServiceProviderSample(1);
var bin = MemoryPackSerializer.Serialize(v);
var options = new MemoryPackSerializerOptions()
{
    // providerはIServiceProviderを実装していて、
    // 下記のようにサービスが登録されているものとする
　　 // provider.AddService(typeof(PlayerDatabase), new PlayerDatabase());
    ServiceProvider = provider,
};
// デシリアライズ
var val = MemoryPackSerializer.Deserialize<ServiceProviderSample>(bin, options);
// 1, John
Debug.Log($"{val.Id}, {val.Player.Name}");
```


## 外部型のシリアライズとカスタムフォーマッター

[Serialize external types](https://github.com/Cysharp/MemoryPack#serialize-external-types)

[CustomFormatter](https://github.com/Cysharp/MemoryPack#customformatter)

MemoryPack標準で対応している型のシリアライズ以外の型のうち、すでに存在する外部の型をシリアライズしたい場合、MemoryPackではいくつかの手段が用意されています。この記事では軽くしか取り上げていませんが、 [カスタムフォーマッター](https://github.com/Cysharp/MemoryPack#formatterprovider-api)を利用することで独自の型のシリアライズをサポートできます。

ただしカスタムフォーマッターの実装を、`MemoryPackReader`と`MemoryPackWriter`を用いて独自のバイナリ操作を行うのは難しいため、ドキュメントではラップ型を用意し、そちらの型で`MemoryPackInclude`と`MemoryPackIgnore`を用いてシリアライズ対象を調整し、直接`MemoryPackReader`と`MemoryPackWriter`を操作しない方法を推奨しています。

具体例としてドキュメントの例そのままですが、`AnimationCurve`のシリアライズを、ラップ型での解決方法を紹介します。

`AnimationCurve`のシリアライズにはそのクラスの`preWrapMode`と `postWrapMode` 、`keys`をシリアライズする必要があります。そのため下記のように`SerializableAnimationCurve`というラップ型を作り、それぞれのフィールドに対するプロパティを作ったうえで`MemoryPackInclude`を用いてMemoryPackのシリアライズ対象に含めます。

```csharp
[MemoryPackable]
public readonly partial struct SerializableAnimationCurve
{
    [MemoryPackIgnore]
    public readonly AnimationCurve AnimationCurve;

    [MemoryPackInclude]
    WrapMode preWrapMode => AnimationCurve.preWrapMode;
    [MemoryPackInclude]
    WrapMode postWrapMode => AnimationCurve.postWrapMode;
    [MemoryPackInclude]
    Keyframe[] keys => AnimationCurve.keys;

    [MemoryPackConstructor]
    SerializableAnimationCurve(WrapMode preWrapMode, WrapMode postWrapMode, Keyframe[] keys)
    {
        var curve = new AnimationCurve(keys);
        curve.preWrapMode = preWrapMode;
        curve.postWrapMode = postWrapMode;
        this.AnimationCurve = curve;
    }

    public SerializableAnimationCurve(AnimationCurve animationCurve)
    {
        this.AnimationCurve = animationCurve;
    }
}
```


これで`AnimationCurve`をシリアライズするラップ型の実装ができました。下記のように`SerializableAnimationCurve`経由で`AnimationCurve`のシリアライズとデシリアライズができていることが確認できます。

```csharp
var curve = new AnimationCurve(new Keyframe[]
{
    new Keyframe(0, 0),
    new Keyframe(1, 10),
});
var bin = MemoryPackSerializer.Serialize(new SerializableAnimationCurve(curve));
var val = MemoryPackSerializer.Deserialize<SerializableAnimationCurve>(bin);
// 2
Debug.Log($"{val.AnimationCurve.length}");
// 0 -> 0
Debug.Log(
    $"{val.AnimationCurve.keys[0].time} -> {val.AnimationCurve.keys[0].value}");
// 1 -> 10
Debug.Log(
    $"{val.AnimationCurve.keys[1].time} -> {val.AnimationCurve.keys[1].value}");
```


ただし`AnimationCurve`のシリアライズに毎回`SerializableAnimationCurve`を書くのはかなり面倒なので、 `SerializableAnimationCurve` とカスタムフォーマッターを用いてこれを簡略化できます。

まず`AnimationCurve`のカスタムフォーマッターを用意します。具体的には`MemoryPackFormatter<AnimationCurve>` を継承したクラスを実装します。

```csharp
using MemoryPack;
using UnityEngine;

public class AnimationCurveFormatter : MemoryPackFormatter<AnimationCurve>
{
    public override void Serialize(ref MemoryPackWriter writer, ref AnimationCurve? value)
    {
        if (value == null)
        {
            writer.WriteNullObjectHeader();
            return;
        }

        writer.WritePackable(new SerializableAnimationCurve(value));
    }

    public override void Deserialize(ref MemoryPackReader reader, ref AnimationCurve? value)
    {
        if (reader.PeekIsNull())
        {
            value = null;
            return;
        }
        
        var wrapped = reader.ReadPackable<SerializableAnimationCurve>();
        value = wrapped.AnimationCurve;
    }
}
```


カスタムフォーマッターでは上記のように`Serialize`と`Deserialize`を実装します。

このなかで`SerializeableAnimationCurve`の`WritePackable`と`ReadPackable`を呼び出すことで、`AnimationCurve`のシリアライズとデシリアライズを`SerializableAnimationCurve`のフォーマッターに委譲しています。

あとは、用意したカスタムフォーマッターを登録します。

```csharp
MemoryPackFormatterProvider.Register<AnimationCurve>(
    new AnimationCurveFormatter());
```


このようにカスタムフォーマッターを用意することで、`AnimationCurve`のシリアライズは下記のように直接`AnimationCurve`をMemoryPackの各種メソッドに渡すことができ、とても自然に記述できるようになりました。

```csharp
var curve = new AnimationCurve(new Keyframe[]
{
    new Keyframe(0, 0),
    new Keyframe(1, 10),
});
var bin = MemoryPackSerializer.Serialize(curve);
var val = MemoryPackSerializer.Deserialize<AnimationCurve>(bin);
// 2
Debug.Log($"{val.length}");
// 0 -> 0
Debug.Log($"{val.keys[0].time} -> {val.keys[0].value}");
// 1 -> 10
Debug.Log($"{val.keys[1].time} -> {val.keys[1].value}");
```


このようにカスタムフォーマッターを実装する際は、**直接バイナリの読み書きを自分で記述するのではなく、ラップ型を用意してそちらで読み書きさせること**で、ミスを少なくすることが推奨されています。

## バージョンと運用

MemoryPackを運用する上で注意すべき点として、`[MemoryPackable]`をつけた型の運用があります。

MemoryPackは通常、シリアライズ対象のメンバーをその順番にそのままシリアライズおよびデシリアライズしようとします。そのため、通常だと下記の制約があります。

* メンバーを後ろに追記は可能。またメンバー名の変更も可能。
* メンバーの削除はできない。
* メンバーの順番の入れ替えはできない。
* メンバーの種類（型）の変更はできない。
具体例として、下記の型で一度シリアライズしたデータに対して

```csharp
[MemoryPackable]
public partial class VersionCheck
{
    public int Prop1 { get; set; }
    public long Prop2 { get; set; }
}
```


下記のように変更をいれるとデシリアライズが行えません。

```csharp
// Prop1の削除をした
[MemoryPackable]
public partial class VersionCheck
{
    // public int Prop1 { get; set; }
    public long Prop2 { get; set; }
}

// Prop2とProp1を入れ替えた
[MemoryPackable]
public partial class VersionCheck
{
    public long Prop2 { get; set; }
    public int Prop1 { get; set; }
}
```


MemoryPackでは`[MemoryPackable]`属性の引数に`GenerateType.VersionTolerant`を指定することで、その型がバージョントレラントをサポートします。メンバーのすべての並びを`[MemoryPackOrder]`によって明示することで制約が以下のように緩和されます。

* メンバーを後ろに追記は可能。またメンバー名の変更も可能。
* **メンバーの削除ができる。ただし、 ****`[MemoryPackOrder]`****で指定したオーダーの再利用はできない。**
* メンバーの順番の入れ替えはできない。
* メンバーの種類（型）の変更はできない。
具体的には、下記の２つの型は相互にシリアライズ・デシリアライズが可能です。

```csharp
[MemoryPackable(GenerateType.VersionTolerant)]
public partial class VersionTolerantObject1
{
    [MemoryPackOrder(0)]
    public int MyProperty0 { get; set; } = default;

    [MemoryPackOrder(1)]
    public long MyProperty1 { get; set; } = default;

    [MemoryPackOrder(2)]
    public short MyProperty2 { get; set; } = default;
}

[MemoryPackable(GenerateType.VersionTolerant)]
public partial class VersionTolerantObject2
{
    [MemoryPackOrder(0)]
    public int MyProperty0 { get; set; } = default;

    // メンバー削除に対応
    // ただし、並び順の1番目は再利用ができない
    //[MemoryPackOrder(1)]
    //public long MyProperty1 { get; set; } = default;

    [MemoryPackOrder(2)]
    public short MyProperty2 { get; set; } = default;

    // 追記はいままでどおり可能
    [MemoryPackOrder(3)]
    public short MyProperty3 { get; set; } = default;
}
```


ただし`GenerateType.VersionTolerant`を指定すると、通常のシリアライズと比べて速度が落ちるのと、ペイロードが少し大きくなる点には注意が必要です。

## パフォーマンスについて

[Payload Size and Compression](https://github.com/Cysharp/MemoryPack#payload-size-and-compression)

最後にMemoryPackのパフォーマンス、とくにペイロードのサイズについて触れておきます。

まず気になる各種フォーマットとのペイロードサイズの比較ですが、下記の傾向になるようです。

* MemoryPackのデータにはキー情報がなく、さらにバイナリ形式なので、JSONと比べるとペイロードサイズが小さくなる可能性がある。
* intを多用するデータ構造の場合、MemoryPackやProtobufと比べるとサイズが大きくなる傾向にある。
    * MemoryPackでintは固定サイズで常に4バイトだが、MessagePackやProtobufでは[varint](https://developers.google.com/protocol-buffers/docs/encoding)エンコーディングが行われ、そのサイズは1〜5バイトの可変長サイズになる。ただし一般的なデータは0に近い値のほうが多い傾向にあるので、そのサイズが4バイトより小さくなりやすい。
* floatとdoubleはMemoryPackでは4バイトと8バイト、MemoryPackでは5バイトと9バイト。たとえばVector3配列の場合はMemoryPackのほうが小さくなる。
* 文字列はUTF8でシリアライズされるので他シリアライザーと同じ傾向となる。
もしペイロードサイズが許容できない場合は、圧縮を検討します。MemoryPackでは標準でBrotli圧縮による圧縮・解凍をサポートしています。

[Compression](https://github.com/Cysharp/MemoryPack#compression)

```csharp
var v = new Person4("John");

// 圧縮

// BrotliCompressorは自分で解放
using var compressor = new BrotliCompressor();
MemoryPackSerializer.Serialize(compressor, v);

// 圧縮済みのMemoryPackバイナリが取得できる
var bin = compressor.ToArray();

// 解凍

// BrotliDecompressorは自分で解放
using var decompressor = new BrotliDecompressor();
var decompressedBuffer = decompressor.Decompress(bin);
// 圧縮済みのバイナリを解凍してデシリアライズ
var value = MemoryPackSerializer.Deserialize<Person4>(decompressedBuffer);

// John
Debug.Log($"{value.Name}");
```


## まとめ

C#に特化したシリアライザーライブラリのMemoryPackについて紹介しました。

C#に閉じた箇所、たとえばセーブデータの扱いなどで高速な保存・読み込みが行えそうなど、Unityでも活用できる箇所は多そうです。

この記事では紹介しきれてないけど気になっている機能はたくさんあり、また時間があればそのへんも記事を書いていこうと思います。

またMemoryPackは、.NET 7で最もパフォーマンスを発揮するシリアライザーということで、今後UnityのCore CLR移行が進んでモダンなC#環境になると、パフォーマンスの向上も期待できるのかも？ということで色々楽しみです。

UnityでMemoryPackを導入してみようと検討されておられる方に、少しでも参考になれば幸いです。

