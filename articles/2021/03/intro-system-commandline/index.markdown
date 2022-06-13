---
date: "2021-03-09T10:00:00+09:00"
draft: false
title: "System.CommandLine 入門"
tags: ["C#", "System.CommandLine"]

---

コマンドラインアプリケーションを作りたかったので[System.CommandLine](https://github.com/dotnet/command-line-api)を利用してみた。その備忘録としてこの記事を記載します。

## System.CommandLine とは

`System.ConmmandLine`は.NETで**コンソールアプリケーション(CLI)を作るための.NET公式のライブラリ**です。
触った印象ではライブラリというよりかはフレームワークの立ち位置の印象です。

主にCLIのコマンドライン引数のパースしその結果をCLIアプリケーションの引数などにマッピングしたり、
CLIアプリのエントリーポイントの呼び出し、そしてヘルプなどCLIでよく実装される出力（`System.CommandLine`ではレンダリングと呼んでいる）を自動で行ったりしてくれます。

## サンプルアプリを実装してみる

[command-line-api/Your-first-app-with-System-CommandLine.md at main · dotnet/command-line-api](https://github.com/dotnet/command-line-api/blob/main/docs/Your-first-app-with-System-CommandLine.md) を試しつつ`System.CommandLine`がどういうものかを理解してみます。

### プロジェクトの作成・インストール

まずはプロジェクトを作成します。

```
$ dotnet new console -o myApp
$ cd myApp
```

`System.ConmmandLine`は[nuget](https://www.nuget.org/packages/System.CommandLine)経由でインストールできます。具体的には下記のコマンドでインストールできます。

```
$ dotnet add package System.CommandLine --version 2.0.0-beta1.20574.7
```

これで`System.CommandLine`のインストールが完了しました。

### サンプルアプリの動作を理解してみる

サンプルアプリを実行しつつ`System.CommandLine`がどのように動作しているのかを理解してみます。

このサンプルアプリで、主に下記のことを把握してみます。

- `System.CommandLine`を利用したアプリケーションの作成方法
- コマンドライン引数をオプションとしてパースする方法
- パースしたオプションをコマンドラインアプリで利用する方法

まず、サンプルアプリの全容は下記のとおりです。

```cs
using System;
using System.CommandLine;
using System.CommandLine.Invocation;
using System.IO;

public class Program
{
    static int Main(string[] args)
    {
        // Create a root command with some options
        var rootCommand = new RootCommand
        {
            new Option<int>(
                "--int-option",
                getDefaultValue: () => 42,
                description: "An option whose argument is parsed as an int"),
            new Option<bool>(
                "--bool-option",
                "An option whose argument is parsed as a bool"),
            new Option<FileInfo>(
                "--file-option",
                "An option whose argument is parsed as a FileInfo")
        };

        rootCommand.Description = "My sample app";

        // Note that the parameters of the handler method are matched according to the names of the options
        rootCommand.Handler = CommandHandler.Create<int, bool, FileInfo>((intOption, boolOption, fileOption) =>
        {
            Console.WriteLine($"The value for --int-option is: {intOption}");
            Console.WriteLine($"The value for --bool-option is: {boolOption}");
            Console.WriteLine($"The value for --file-option is: {fileOption?.FullName ?? "null"}");
        });

        // Parse the incoming args and invoke the handler
        return rootCommand.InvokeAsync(args).Result;
    }
}
```

実行例は下記のとおりです。このようにオプションを正しくパースして、アプリ中でハンドリングできていることが確認できます。

```
$ dotnet run -- --int-option 123
The value for --int-option is: 123
The value for --bool-option is: False
The value for --file-option is: null

$ dotnet run -- --bool-option True
The value for --int-option is: 42
The value for --bool-option is: True
The value for --file-option is: null
```

上記の実装だけで、このコマンドラインアプリのヘルプメッセージやバージョン番号の出力も自動で生成してくれます。

```
$ dotnet run -- --help
myApp:
  My sample app

Usage:
  myApp [options]

Options:
  --int-option <int-option>      An option whose argument is parsed as an int [default: 42]
  --bool-option                  An option whose argument is parsed as a bool
  --file-option <file-option>    An option whose argument is parsed as a FileInfo
  --version                      Show version information
  -?, -h, --help                 Show help and usage information

$ dotnet run -- --version
1.0.0
```

コマンドラインアプリを作成するには`RootCommand`を生成する必要があります。
このサンプルアプリでは`--int-option`と`--bool-option`、`--file-option`の3つのオプション引数を設定しています。
また、コマンドラインアプリの説明文も指定します。

```cs
var rootCommand = new RootCommand
{
    new Option<int>(
        "--int-option",
        getDefaultValue: () => 42,
        description: "An option whose argument is parsed as an int"),
    new Option<bool>(
        "--bool-option",
        "An option whose argument is parsed as a bool"),
    new Option<FileInfo>(
        "--file-option",
        "An option whose argument is parsed as a FileInfo")
};
rootCommand.Description = "My sample app";
```

コマンドラインアプリの処理は`RootCommand.Handler`に`ICommandHandler`を設定することでハンドリングできます。
`ICommandHandler`は`CommandHandler.Create`を利用して生成できます。このサンプルアプリでは受け取ったオプション引数をそのままコンソールに出力します。

```cs
rootCommand.Handler = CommandHandler.Create<int, bool, FileInfo>((intOption, boolOption, fileOption) =>
{
    Console.WriteLine($"The value for --int-option is: {intOption}");
    Console.WriteLine($"The value for --bool-option is: {boolOption}");
    Console.WriteLine($"The value for --file-option is: {fileOption?.FullName ?? "null"}");
});
```

ハンドラの引数は先程指定したオプション引数を受け取るために指定します。
引数名はオプション引数の名前と紐付きます（具体的には`--int-option`は、`intOption`という名前の引数で受け取っています）。

`RootCommand`を実行するには`RootCommand.InvokeAsync(args)`を呼び出します。`Result`にはコマンドラインの終了コードが格納されます。
なのでエントリーポイントの戻り値は`RootCommand`の戻り値をそのまま返却します。

```cs
return rootCommand.InvokeAsync(args).Result;
```

## オプション引数のパース

サンプルアプリを理解したところで、オプション引数のパース方法について詳しく追っていきます。
オプション引数を用いることでコマンドラインに名前付きでパラメータを指定する事ができます。オプションはコマンドライン上で下記のように指定します。

```
$ myapp --int-option 123
        ^----------^
```

Windowsでは下記のように指定します。

```
$ myapp /int-option 123
        ^---------^
```

このオプションをコマンドラインでパースには、作成した`Command`クラスのインスタンスに`Option`を設定します。

```cs
var cmd = new RootCommand();
cmd.AddOption(new Option<int>("--int-option"));
```

パースしたオプション値を利用するには、CommandHandlerの作成時に利用したいオプションに対応する引数を追加します。
指定したオプションは引数名をもとに引数にマッチしてそのオプション値がバインドされます。
デフォルトの規則では**オプション名の`-`(ハイフン)はすべて無視され、また大文字と小文字の区別はありません**。
例えば上記の`--int-option`の場合は`intOption`という名前の引数に値がバインドされます。（上記のルール上、`intoption`でも`IntOption`でもマッチします）

具体的には下記のようにオプション値をハンドリングすることができます。

```cs
// --int-optionをintOptionという引数でハンドリングしている
cmd.Handler = CommandHandler.Create<int>(
    (int intOption) => Console.WriteLine(intOption));

await cmd.InvokeAsync("--int-option 123");
// 123を出力する
```

オプションは指定した型に対応したパースを行いますが、パースに失敗する場合はエラーを出力します。

```cs
await cmd.InvokeAsync("--int-option onetwothree");
// Cannot parse argument 'onetwothree' for option '--int-option' as expected type System.Int32.
```

型が`bool`の場合はその値をフラグとしても解釈することができます。例えば`app --a-flag`と指定した場合は、`--a-flag`オプションの値は`True`になります。

```cs
await cmd.InvokeAsync("");
// False
await cmd.InvokeAsync("--a-flag");
// True
await cmd.InvokeAsync("--a-flag False");
// False
await cmd.InvokeAsync("--a-flag True");
// True
```

オプションの型にはEnumも指定できます。また列挙に存在しない値はエラーとなります。

```cs
var cmd = new RootCommand();
cmd.AddOption(new Option<System.IO.FileAccess>("--file-access"));
cmd.Handler = CommandHandler.Create<System.IO.FileAccess>(
    (System.IO.FileAccess fileAccess) => Console.WriteLine(fileAccess));
    
await cmd.InvokeAsync("--file-access Read");
// Read
await cmd.InvokeAsync("--file-access Write");
// Write
await cmd.InvokeAsync("--file-access Hoge");
// Cannot parse argument 'Hoge' for option '--file-access' as expected type System.IO.FileAccess.
```

コマンドラインアプリでパスを扱うことは多いですが、ファイルパスやディレクトリパスをパースする場合は`System.IO.FileInfo`および`System.IO.DirectoryInfo`をオプションの型として指定できます。
また、`ExistingOnly()`を呼び出すと（下記の例だと`--file`に指定している）、そのパスのファイルおよびディレクトリが実際に存在しない場合にエラーを返します。

```cs
var cmd = new RootCommand();
cmd.AddOption(new Option<System.IO.FileInfo>("--file"));
cmd.AddOption(new Option<System.IO.DirectoryInfo>("--directory").ExistingOnly());
cmd.Handler = CommandHandler.Create<System.IO.FileInfo, System.IO.DirectoryInfo>(
    (System.IO.FileInfo file, System.IO.DirectoryInfo directory) =>
    {
        Console.WriteLine($"file = {file}");
        Console.WriteLine($"directory = {directory}");
    }
);
    
await cmd.InvokeAsync("--file ./Program.cs --directory .");
// file = ./Program.cs
// directory = .
await cmd.InvokeAsync("--file ./SonzaiShinai.cs --directory .");
// File does not exist: ./SonzaiShinai.cs
```

コマンドラインアプリによってはオプションがもっと多くの複雑なケースもあります。その場合にはオプション値を扱う専用のクラスにバインドすることができます。

```cs
// オプションをまとめて受け取るクラス
public class ComplexType
{
    public int AnInt { get; set; }
    public string AString { get; set; }
}

var cmd = new RootCommand();
cmd.AddOption(new Option<int>("--an-int"));
cmd.AddOption(new Option<string>("--a-string"));
cmd.Handler = CommandHandler.Create<ComplexType>(
    (ComplexType complex) =>
    {
        Console.WriteLine($"AnInt = {complex.AnInt}, AString = {complex.AString}");
    }
);
    
await cmd.InvokeAsync("--an-int 123 --a-string 456");
// AnInt = 123, AString = 456
```

## サブコマンド

コマンドラインの機能が多くなる場合は、それぞれの機能をサブコマンドとして分割することができます。
イメージとしてはgitコマンドで、コミットの状態確認や追加を`git status`や`git add`などそれぞれ別コマンドで呼び出しています。

`System.CommandLine`でサブコマンドを定義するには、`AddCommand`を利用します。下記の例ではサブコマンドに`cmd1`と`cmd2`を追加します。

```cs
// 親コマンド
var cmd = new RootCommand();

// サブコマンド cmd1
var cmd1 = new Command("cmd1");
cmd1.AddOption(new Option<int>("--an-int"));
cmd1.Handler = CommandHandler.Create<int>(
    (int anInt) =>
    {
        Console.WriteLine($"Child Command cmd1: {anInt}");
    }
);
cmd.AddCommand(cmd1);

// サブコマンド cmd2
var cmd2 = new Command("cmd2");
cmd2.AddOption(new Option<string>("--a-string"));
cmd2.Handler = CommandHandler.Create<string>(
    (string aString) =>
    {
        Console.WriteLine($"Sub command cmd2: {aString}");
    }
);
cmd.AddCommand(cmd2);
 
// サブコマンドのcmd1を呼び出す
await cmd.InvokeAsync("cmd1 --an-int 123");
// Sub command cmd1: 123
// サブコマンドのcmd2を呼び出す
await cmd.InvokeAsync("cmd2 --a-string 456");
// Sub command cmd1: 456
```

## 終了処理の実装

最後にコマンドラインアプリケーションの終了処理について触れておきます。

コマンドラインアプリケーションでは、たとえばOSにプロセスが殺させることでプロセスが強制的に終了される場合があります。
例えばユーザーがコマンドラインアプリケーション実行中に`Ctrl-C`を押すとプロセスを終了させる事ができます。

`Sysetm.CommandLine`はプロセス終了時をハンドリングする機能を用意しています。
実装方法は簡単で、コマンドハンドラの引数に`CancellationToken`を追加し、非同期処理の`CancellationToken`にそのトークンを渡します。

終了処理が呼び出された場合に`OperationCanceledException`が例外で投げられます。クリーンアップ処理などを実行したい場合は、catch句内に処理をかきます。

```cs
public class Program
{
    static int Main(string[] args)
    {
        var rootCommand = new RootCommand();
        rootCommand.Description = "My sample app";

        rootCommand.Handler = CommandHandler.Create(
            async (IConsole console, CancellationToken token) =>
        {
            try
            {
                await Task.Delay(10000, token);
                return 0;
            }
            catch (OperationCanceledException)
            {
                console.Error.Write("The operation was aborted\n");
                return 1;
            }
        });

        return rootCommand.InvokeAsync(args).Result;
    }
}
```

上記の場合コマンドラインを実行後10秒待ちますが、その間に`Ctrl-C`を押すとアプリケーションの実行が途中でキャンセルされ、`OperationCanceledException`を投げます。
それを受け取ると標準エラー出力に`"The operation was aborted\n"`を出力し、終了コードに失敗を意味する`1`を返却しています。

## まとめ

`System.CommandLine`について、その基本的な使い方と、特にオプション引数のパース方法とサブコマンド、終了処理の実装について紹介しました。


## 参考

- [dotnet/command-line-api: Command line parsing, invocation, and rendering of terminal output.](https://github.com/dotnet/command-line-api)
- [command-line-api/Your-first-app-with-System-CommandLine.md at main · dotnet/command-line-api](https://github.com/dotnet/command-line-api/blob/main/docs/Your-first-app-with-System-CommandLine.md)
- [command-line-api/Process-termination-handling.md at main · dotnet/command-line-api](https://github.com/dotnet/command-line-api/blob/main/docs/Process-termination-handling.md)
- [command-line-api/How-To.md at main · dotnet/command-line-api](https://github.com/dotnet/command-line-api/blob/main/docs/How-To.md)
