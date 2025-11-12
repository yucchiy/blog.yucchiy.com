---
title: C#でソースをランタイムでコンパイルし、実行する
description: ''
pubDatetime: 2020-11-24T00:00:00.000Z
tags:
  - C#
  - .NET
  - Roslyn
---

C#で、ソースコードを実行中にコンパイルして、そのプログラム中でコンパイルしたクラスやメソッドを実行する方法を紹介します。

## Roslynとは

Roslynは.NETコンパイラプラットフォームの通称であり、C#やVisual Basic（、F#も？）のコンパイル・コード解析のためのAPIを提供します。

具体的には今回紹介するような動的なコンパイルであったり、コード解析([Roslyn Analyzer](https://github.com/dotnet/roslyn-analyzers)などと呼ばれている)、OmniSharpというIDEのための言語機能提供の[バックエンドもRoslyn実装が存在したり](https://github.com/OmniSharp/omnisharp-roslyn)、単にコンパイラというより、コンパイルに関する周辺機能を諸々APIで提供しています。

最近ではC# 9から導入された[Source Generator](https://devblogs.microsoft.com/dotnet/new-c-source-generator-samples/)も、Roslynの1機能として提供されています。

イメージとして**C#コンパイラでできることが、だいたいC#でプログラムから呼び出せる**、と思っても大きく違いはないのではと思ったりします。

## 環境構築

今回はRoslynを利用します。利用するには[Microsoft.CodeAnalysis.CSharp](https://www.nuget.org/packages/Microsoft.CodeAnalysis.CSharp)をインストールします。インストールするにはdotnetコマンドで下記を実行します。

```
dotnet add package Microsoft.CodeAnalysis.CSharp --version 3.8.0
```

## コンパイルのための下準備

下記の`TestClass`をランタイムでコンパイルして、コンパイル後に`TestClass.Add`を呼び出して結果を出力してみます。

```cs
private static readonly string SourceCode = @"
    public class TestClass
    {
        public static int Add(int a, int b)
        {
            return a + b;
        }
    }
";
```

ソースコードを実行中にコンパイルする場合は下記のように[`CSharpCompilation.Create`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.codeanalysis.csharp.csharpcompilation.create?view=roslyn-dotnet)を呼び出し、生成された`CSharpCompilation`インスタンスに対して[`Emit`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.codeanalysis.compilation.emit?view=roslyn-dotnet)を呼び出します。ここで引数にはそれぞれアセンブリ名・シンタックスツリー・メタリファレンス・コンパイルオプションを渡します。数が多いのでそれぞれ順を追って説明します。

```cs
var compilation = CSharpCompilation.Create(
    "TestClass.dll",
    new[] { syntaxTree },
    references,
    compilationOptions
);

// MemoryStreamについては後述する
using (var stream = new MemoryStream())
{
    // ここでコンパイル
    var emitResult = compilation.Emit(stream);
```

まずソースコードを[シンタックスツリー](https://docs.microsoft.com/en-us/dotnet/api/microsoft.codeanalysis.csharp.csharpsyntaxtree?view=roslyn-dotnet)に変換するには[`CSharpSyntxTree.ParseText`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.codeanalysis.csharp.csharpsyntaxtree.parsetext?view=roslyn-dotnet#Microsoft_CodeAnalysis_CSharp_CSharpSyntaxTree_ParseText_Microsoft_CodeAnalysis_Text_SourceText_Microsoft_CodeAnalysis_CSharp_CSharpParseOptions_System_String_System_Threading_CancellationToken_)メソッドを用います。

```cs
var options = CSharpParseOptions.Default
    .WithLanguageVersion(LanguageVersion.CSharp8);

var syntaxTree = CSharpSyntaxTree.ParseText(
    SourceCode,
    options,
    "TestClass.cs"
);
```

上記では、第1引数にソースコードを表すテキストファイルを指定しています。また第3引数には、このソースコードのファイルパスを指定します。

第2引数には、このソースコードのパースオプションを指定します。[`CSharpParseOptions`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.codeanalysis.csharp.csharpparseoptions?view=roslyn-dotnet)のコンストラクタを呼び出して作成でもよいですが、`CSharpParseOptions.Default`をもとに、`With*`メソッドを呼び出してカスタマイズしたものを渡しても良いでしょう。上記の例では、デフォルトオプションに対して、C#のバージョンを指定したものを渡しています。

`CSharpParseOptions.Default`は[引数なしでコンストラクタを呼び出したものを保持していて](https://github.com/dotnet/roslyn/blob/cf55f3a58e47298426fa971d3bd9d8857c746c65/src/Compilers/CSharp/Portable/CSharpParseOptions.cs#L21)、具体的にそれぞれのパラメータには[こちら](https://github.com/dotnet/roslyn/blob/cf55f3a58e47298426fa971d3bd9d8857c746c65/src/Compilers/CSharp/Portable/CSharpParseOptions.cs#L48)パラメータが渡っているようです。

`LanguageVersion`は[`Default`](https://github.com/dotnet/roslyn/blob/cf55f3a58e47298426fa971d3bd9d8857c746c65/src/Compilers/CSharp/Portable/LanguageVersion.cs#L155)でサポートされているもののうち最新のものが、`DocumentationMode`には[`Parse`](https://github.com/dotnet/roslyn/blob/cf55f3a58e47298426fa971d3bd9d8857c746c65/src/Compilers/Core/Portable/DocumentationMode.cs#L25)が、`SourceCodeKind`には[`Regular`](https://github.com/dotnet/roslyn/blob/cf55f3a58e47298426fa971d3bd9d8857c746c65/src/Compilers/Core/Portable/SourceCodeKind.cs#L19)が、`preprocessorSymbols`は`null`が渡され、プリプロセッサシンボルが設定されていない状態です。（ちゃんと調べてなくて`DocumentationMode`および`SourceCodeKind`が変わると何が変わるか把握できてなくて、もし知っておられる方がおられたら教えていただけると幸いです...。）

次にメタリファレンスですが、こちらは参照するdllなどを指定するためのパラメータです。ちなみになにも指定しないと下記のようなエラーが発生します。

```
[Error, (TestClass.cs@Line2:26)] CS0518, 定義済みの型 'System.Object' は定義、またはインポートされていません
[Error, (TestClass.cs@Line4:39)] CS0518, 定義済みの型 'System.Int32' は定義、またはインポートされていません
[Error, (TestClass.cs@Line4:46)] CS0518, 定義済みの型 'System.Int32' は定義、またはインポートされていません
[Error, (TestClass.cs@Line4:31)] CS0518, 定義済みの型 'System.Int32' は定義、またはインポートされていません
[Error, (TestClass.cs@Line2:26)] CS1729, 'object' には、引数 0 を指定するコンストラクターは含まれていません
```

ちなみに上記のエラーは、コンパイル後に`EmitResult.Diagnostics`を表示することで確認できます。

```cs
foreach (var diagnostic in emitResult.Diagnostics)
{
    var pos = diagnostic.Location.GetLineSpan();
    var location =
        "(" + pos.Path + "@Line" + (pos.StartLinePosition.Line + 1) +
        ":" +
        (pos.StartLinePosition.Character + 1) + ")";
    Console.WriteLine(
        $"[{diagnostic.Severity}, {location}]{diagnostic.Id}, {diagnostic.GetMessage()}"
    );
}
```

`TestClass`で利用している`int`は内部的には`System.Int32`を利用しています。メタリファレンスは何も指定しないとこれらがインポートされていないため、コンパイルエラーとなります。

これを回避するために、今回は`object`クラスが属するアセンブリをメタリファレンスに指定しておきます。具体的には下記のように指定します。

```cs
var references = new MetadataReference[]
{
    MetadataReference.CreateFromFile(
        typeof(object).Assembly.Location),
};
```

`typeof(object).Assembly`でアセンブリを取得し、その[`Location`](https://docs.microsoft.com/en-us/dotnet/api/system.reflection.assembly.location?view=net-5.0)を取得します。このプロパティにはdllのファイルパスが格納されています。

ファイルパスから[`MetadataReference.CreateFromFile`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.codeanalysis.metadatareference.createfromfile?view=roslyn-dotnet)を通して取得できるインスタンスをリファレンスとして指定します。

最後にコンパイルオプションですが、[`CSharpCompilationOptions`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.codeanalysis.csharp.csharpcompilationoptions?view=roslyn-dotnet)を指定します。

```cs
var compilationOptions = new CSharpCompilationOptions(
    OutputKind.DynamicallyLinkedLibrary
);
```

必須パラメータは`OutputKind`で、コンパイル後のアセンブリの種類を指定します。dllにするか、コンソールアプリにするかなどを指定できますが、今回はコンパイル後にメソッドをリフレクションで呼び出すために、`DynamicallyLinkedLibrary`を指定しました。

他にも、Unsafeを許可するかどうか、Nullableをどうするか、警告レベルをどうするかなど、C#で指定できるであろうコンパイルオプションをそれぞれ指定できます。どのようなオプションが指定できるかは、[こちら](https://docs.microsoft.com/en-us/dotnet/api/microsoft.codeanalysis.csharp.csharpcompilationoptions?view=roslyn-dotnet)で確認できます。

## コンパイル結果からアセンブリを取得する

前述はしましたが、上記で用意したパラメータから`Create`メソッドで`CSharpCompilation`を作成します。

```cs
var compilation = CSharpCompilation.Create(
    "TestClass.dll",
    new[] { syntaxTree },
    references,
    compilationOptions
);
```

あとは`compilation.Emit`を呼び出すことでコンパイルを行います。`Emit`の引数には[`Stream`](https://docs.microsoft.com/en-us/dotnet/api/system.io.stream?view=net-5.0)を指定します。この`Stream`にコンパイル結果のアセンブリが書き出されます。また、コンパイル結果は戻り値の[`EmitResult`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.codeanalysis.emit.emitresult?view=roslyn-dotnet)に格納されています。この結果をもとに処理を切りかえることになります。

```cs
using (var stream = new MemoryStream())
{
    var emitResult = compilation.Emit(stream);
    if (emitResult.Success)
    {
        // コンパイル成功
    }
    else
    {
        // コンパイルエラーなどで失敗
        // エラー処理を書く
    }
}
```

再掲ですが、コンパイル時のメッセージは`EmitResult.Diagnostics`に格納されています。ちょうどコーディング時に、エディターに表示されているような警告やコンパイルエラーなどが格納されていると考えるとわかりやすいかと思います。

メッセージ一覧は例えば下記のように出力して確認します。

```cs
foreach (var diagnostic in emitResult.Diagnostics)
{
    var pos = diagnostic.Location.GetLineSpan();
    var location =
        "(" + pos.Path + "@Line" + (pos.StartLinePosition.Line + 1) +
        ":" +
        (pos.StartLinePosition.Character + 1) + ")";
    Console.WriteLine(
        $"[{diagnostic.Severity}, {location}]{diagnostic.Id}, {diagnostic.GetMessage()}"
    );
}
```

コンパイルが成功していれば、あとは出力されたアセンブリをロードします。これには`AssemblyLoadContext`を用います。

```cs
var emitResult = compilation.Emit(stream);
if (emitResult.Success)
{
    // コンパイルが成功していれば実行
    stream.Seek(0, SeekOrigin.Begin);

    // これでコンパイル後のアセンブリが取得できた
    var assembly = AssemblyLoadContext.Default.LoadFromStream(stream);
}
```

`LoadFromStream`でストリームに書き込まれたアセンブリをロードします。ただしアセンブリ書き出し後にストリームの位置が先頭になっていないので、`Seek`で先頭にセットしなおしておきます。

ちなみに`AssemblyLoadContext.Default`を使ってるので、このプログラムを実行しているコンテキストをそのまま使っています。場合によっては独自のローダーを実装したほうがいいかもしれません。（サンドボックス的にプログラムを実行する場合は、独自のローダーを実装するなど？ ちゃんと調べられてないので、もし詳しい方がおられたらおしえていただけると幸いです...。）

## コンパイルしたクラスを呼び出す

上記でソースコードをコンパイルしたアセンブリを取得できたので、あとはメソッドを呼び出してみます。呼び出しにはリフレクションを用います。
静的メソッドを呼び出す場合は下記のように呼び出せます。

```cs
// 生成したアセンブリから、生成したクラス情報を名前で取得する
var testClassType = assembly.GetType("TestClass");
// クラス情報からメソッド情報を取得する
var addMethod = testClassType.GetMethod("Add");
// メソッドを呼び出す
// 第1引数をnullにすると静的メソッド呼び出しとなる
// 第2引数でメソッドの引数を指定する
// 戻り値もobjectなので適宜キャスト
// var result = TestClass.Add(1, 2); を実行している
var result = (int)addMethod.Invoke(null, new object[]{1, 2});
// 実行結果を取得する
Console.WriteLine($"TestClass.Add(1, 2) = {result}");
// > TestClass.Add(1, 2) = 3
```

また、下記のようなクラスのインスタンスを生成し、メソッドやプロパティを呼び出すことも可能です。

```cs
private static readonly string SourceCodeTestClass2 = @"
    public class TestClass2
    {
        public string Name { get; }
        public TestClass2(string name)
        {
            Name = name;
        }

        public string GetName()
        {
            return Name;
        }
    }
";
```

具体的には下記のように呼び出します。インスタンス化には[`Assembly.CreateInstance`](https://docs.microsoft.com/en-us/dotnet/api/system.reflection.assembly.createinstance?view=net-5.0)または[`Activator.CreateInstance`](https://docs.microsoft.com/en-us/dotnet/api/system.activator?view=net-5.0)を用います。今回は`Activator`を用いました。(やり方は他にもたくさんあるかもしれません。)

便宜上、先程までのコンパイル処理を`Compile`メソッドに纏めています。戻り値としてコンパイル結果のアセンブリを返すこととします。

```cs
var assembly = Compile(SourceCodeTestClass2, "TestClass2.cs", "TestClass2.dll");
var classType = assembly.GetType("TestClass2");
// Activatorを用いてTestClass2のコンストラクタを呼び出す
// var instance = new TestClass2("Name1"); を実行している
var instance = Activator.CreateInstance(classType, new object[] { "Name1" });

// プロパティ呼び出し
var property = classType.GetProperty("Name");
// var result = instance.Name;
var result = (string)property.GetValue(instance);
Console.WriteLine($"instance.Name = {result}");
// > instance.Name = Name1

// メソッド呼び出し
var method = classType.GetMethod("GetName");
result = (string)method.Invoke(instance, null);
Console.WriteLine($"instance.GetName() = {result}");
// > instance.GetName() = Name1
```

ただし、事前に型がコンパイルする側に定義されている場合は、インスタンス生成後のメソッドやプロパティ呼び出し処理にわざわざリフレクションを用いなくてもよいです。

具体的な例として、ゲームの敵を表す`IEnemy`インターフェイスを用意し（`GetNextEnemyAction`は次の敵の行動を取得するメソッドだとします。）、その実装クラスをランタイムでコンパイルしてインスタンス化して、`IEnemy`として扱うなど行うことができます。

`IEnemy`や`EnemyAction`、`TestEnemy`のクラスは下記とします。

```cs
// 敵行動を表す列挙型
public enum EnemyAction
{
    TurnLeft,
    TurnRight,
    GoStraight,
    Attack,
}

// 敵インターフェイス
public interface IEnemy
{
    EnemyAction GetEnemyNextAction();
}

// このソースコードをコンパイルして、IEnemyとして扱いたいとする
private static readonly string SourceCodeTestEnemy = @"
    using SampleCompilingSourceAtRuntime;
    public class TestEnemy : IEnemy
    {
        public EnemyAction GetEnemyNextAction()
        {
            return EnemyAction.GoStraight;
        }
    }
";
```

上記の`TestEnemy`をランタイムでコンパイルして、`IEnemy`として扱います。もちろん`GetEnemyNextAction`を（リフレクションなしで）呼び出す事ができます。

```cs
var assembly = Compile(
    SourceCodeTestEnemy,
    "TestEnemy.cs",
    "TestEnemy.dll"
);
var classType = assembly.GetType("TestEnemy");

// TestEnemyクラスをインスタンス化し、
// IEnemyにキャストして扱う（もちろんこれは問題なく動く）
var enemy = (IEnemy)Activator.CreateInstance(classType, null);

// 次の行動を取得する。リフレクションなしでメソッド呼び出しできる
var action = enemy.GetEnemyNextAction();
// -> next action = GoStraight
System.Console.WriteLine($"next action = {action}");
```

上記はつまり、ランタイムでコンパイルしたコードを、**事前にコンパイルしたコードと(インスタンス化を除いて)同様のパフォーマンスで扱うことができる**ということです。

`TestEnemy`はとてもシンプルなのでイメージが湧きづらいかもしれませんが、より実用的な用途としては、ゲームのエディタは起動しつつ、ランタイムでAIのコードをコンパイルし、ロジックを差し替えるホットリロードなどの用途にも利用できるのかもしれません。ただし、上記だとアセンブリのアンロードが不足しているので、そのへんが必要になりそうです。具体的には[.NET Coreでアセンブリをアンロードする - AYU MAX](https://www.ayumax.net/entry/2019/12/10/000000)が参考になりそうです。（ちゃんと調べられてないのでまたの機会に...）

また、CMS（別にCMSに限らないですが）サービスのプラグイン機構などにもそのまま応用が効きそうです。

補足として、`TestEnemy`をコンパイルするには、(Enumなどを利用するために)メタリファレンスとして下記が追加で必要になります。

```cs

// .NET標準のアセンブリは、概ね同じフォルダに入っているので、
// どれか1つのファイルパスからディレクトリパスを割り出しておく。
// 具体的に、だいたい下記のようなフォルダに入っている
// /usr/local/share/dotnet/shared/Microsoft.NETCore.App/5.0.0
var assemblyDirectoryPath = Path.GetDirectoryName(typeof(object).Assembly.Location);
var references = new MetadataReference[]
{
    MetadataReference.CreateFromFile(
        $"{assemblyDirectoryPath}/mscorlib.dll"),
    MetadataReference.CreateFromFile(
        $"{assemblyDirectoryPath}/System.Runtime.dll"),
    MetadataReference.CreateFromFile(
        typeof(object).Assembly.Location),
    // IEnemyおよびEnemyActionを利用するのに必要
    MetadataReference.CreateFromFile(
        typeof(SampleCompilingSourceAtRuntime.IEnemy).Assembly.Location),
};
```

これは[System.Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum?view=net-5.0)を利用するのに外部アセンブリとして、mscorlib.dllおよびSystem.Runtime.dllが必要なためです。

そのクラスがどのアセンブリが必要かどうかは、公式ドキュメントの`Namespace`下の`Assemblies`に書いてあります。(上記の`System.Enum`を確認すると、「mscorlib.dll,System.Runtime.dll」と書いてあることが確認できるかと思います。

また、上記で利用した`Compile`メソッドは下記のとおりです。

```cs
private static Assembly Compile(string sourceCode, string sourceCodePath, string assemblyName)
{
    var assemblyDirectoryPath = Path.GetDirectoryName(typeof(object).Assembly.Location);
    var references = new MetadataReference[]
    {
        MetadataReference.CreateFromFile(
            $"{assemblyDirectoryPath}/mscorlib.dll"),
        MetadataReference.CreateFromFile(
            $"{assemblyDirectoryPath}/System.Runtime.dll"),
        MetadataReference.CreateFromFile(
            typeof(object).Assembly.Location),
        MetadataReference.CreateFromFile(
            typeof(SampleCompilingSourceAtRuntime.IEnemy).Assembly.Location),
    };

    var parseOptions = CSharpParseOptions.Default
        .WithLanguageVersion(LanguageVersion.CSharp8);

    var syntaxTree = CSharpSyntaxTree.ParseText(
        sourceCode,
        parseOptions,
        sourceCodePath
    );

    var compilationOptions = new CSharpCompilationOptions(
        OutputKind.DynamicallyLinkedLibrary
    );

    var compilation = CSharpCompilation.Create(
        assemblyName,
        new[] { syntaxTree },
        references,
        compilationOptions
    );

    using (var stream = new MemoryStream())
    {
        var emitResult = compilation.Emit(stream);

        foreach (var diagnostic in emitResult.Diagnostics)
        {
            var pos = diagnostic.Location.GetLineSpan();
            var location = "(" + pos.Path + "@Line" + (pos.StartLinePosition.Line + 1) + ":" + (pos.StartLinePosition.Character + 1) + ")";
            Console.WriteLine($"[{diagnostic.Severity}, {location}] {diagnostic.Id}, {diagnostic.GetMessage()}");
        }

        if (!emitResult.Success)
        {
            throw new ArgumentException("Compile error occured.");
        }

        stream.Seek(0, SeekOrigin.Begin);
        return AssemblyLoadContext.Default.LoadFromStream(stream);
    }
}
```

## まとめ

Roslynを用いてソースコードをランタイムでコンパイルして、それを実行する方法について紹介しました。

### 参考

- [2014 08-30 life with roslyn(slideshare)](https://www.slideshare.net/shibuki/2014-0830-life-with-roslyn)
- [[雑記] .NET Compiler Platform - C# によるプログラミング入門 | ++C++; // 未確認飛行 C](https://ufcpp.net/study/csharp/misc_roslyn.html)
- [Compiling C# Code Into Memory and Executing It with Roslyn | Tugberk @ the Heart of Software](http://www.tugberkugurlu.com/archive/compiling-c-sharp-code-into-memory-and-executing-it-with-roslyn)
