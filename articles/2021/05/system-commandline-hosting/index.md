---
title: System.CommandLine.Hostingを利用して、System.CommandLineでDIする
description: ''
pubDatetime: 2021-05-27T08:00:00.000Z
tags:
  - C#
  - System.CommandLine
  - CLI
---

## 概要

System.CommandLineには[System.CommandLine.Hosting](https://www.nuget.org/packages/System.CommandLine.Hosting/0.3.0-alpha.21216.1)というMicrosoft.Extensions.Hostingをサポートするライブラリがあります。

これは一言でいうと、System.CommandLineでGenericHostを利用するためのパッケージです。
厳密にいうとSystem.CommandLineの各種機能はGenericHostにより構築されますが、その実装は`CommandHander`により隠蔽されています。

そのためSystem.CommandLine.Hostingは、ホストの構築のカスタマイズをサポートするためのパッケージといえます。
用途としては用意したクラスのDepencency Injection（DI）GenericHostに備わっているや設定ファイルのサポート、ログ周りの機能の利用が多いかと思います。


## セットアップ

プロジェクトを作成し、[System.CommandLine](https://www.nuget.org/packages/System.CommandLine/)と[System.CommandLine.Hosting](https://www.nuget.org/packages/System.CommandLine.Hosting/)を追加します。

```
dotnet add package System.CommandLine --version 2.0.0-beta1.21216.1
dotnet add package System.CommandLine.Hosting --version 0.3.0-alpha.21216.1
```

## 利用してみる

https://github.com/dotnet/command-line-api/blob/main/src/System.CommandLine.Hosting.Tests/HostingHandlerTest.cs

System.CommandLine.Hosting経由でDIを利用してみます。まずはコード全容を下記に示します。

```cs
using Xunit;
using System.CommandLine.Invocation;
using System.CommandLine;
using System.CommandLine.Parsing;
using System.CommandLine.Builder;
using System.CommandLine.Hosting;
using System.CommandLine.IO;
using System.Threading.Tasks;

using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

public class CliTest
{
    // 利用部
    [Fact]
    public async void Test1()
    {
        var builder = new CommandLineBuilder(new MyCommand());

        builder.UseDefaults();
        builder.UseHost(host =>
        {
            host.ConfigureServices((context, services) =>
            {
                services.AddTransient<MyService>();
            });

            host.UseCommandHandler<MyCommand, MyCommand.MyHandler>();
        });

        var parser = builder.Build();

        var result = await parser.InvokeAsync(new string[]{
            "46",
            "--string-option", "MyCommand"
        });

        Assert.Equal(result, 46);
    }
}

// コマンド定義
public class MyCommand : Command
{
    public MyCommand(): base(name: "mycommand")
    {
        AddArgument(new Argument<int>("IntArgument"));
        AddOption(new Option<string>("--string-option"));
    }

    public class MyHandler : ICommandHandler
    {
        private readonly MyService _service;

        public int IntArgument { get; set; }
        public string StringOption { get; set; }

        public IConsole Console { get; set; }

        public MyHandler(MyService service)
        {
            _service = service;
        }

        public Task<int> InvokeAsync(InvocationContext context)
        {
            _service.Hello(Console, StringOption);
            return Task.FromResult(IntArgument);
        }
    }
}

// DIによってインジェクションされるサービス
public class MyService
{
    public void Hello(IConsole console, string name)
    {
        console.Out.WriteLine($"Hello {name}");
    }
}
```

https://github.com/yucchiy/sandbox-csharp/blob/master/src/Sandbox.System.CommandLine.Tests/UnitTest1.cs

### コマンドとコマンドハンドラーの定義

コマンドの定義は下記のとおりです。

```cs
public class MyCommand : Command
{
    public MyCommand(): base(name: "mycommand")
    {
        AddArgument(new Argument<int>("IntArgument"));
        AddOption(new Option<string>("--string-option"));
    }
}
```

`mycommand`という名前でコマンドを作成しています。
このコマンドはコマンドライン引数から`IntArgument`という引数を１つと、`--string-option`というオプション引数を受け取ることができます。

具体的には下記のようなコマンドライン引数を受け取ります。

```
46            --string-option hello
~~            ~~~~~~~~~~~~~~~~~~~~~
# IntArgument --string-option
```

コマンドハンドラーの実装ですが、System.CommandLine.Hostingを用いない、通常のコマンドハンドラー実装の場合は下記のように`CommandHandler.Create`を利用します。
https://blog.yucchiy.com/2021/03/intro-system-commandline/

```cs
// commandはCommandクラスのインスタンス
command.Handler = CommandHandler.Create<int, string>((intArgument, stringOption) =>
{
    Console.WriteLine($"The value for IntArgument is: {intArgument}");
    Console.WriteLine($"The value for --string-option is: {stringOption}");
});
```

System.CommandLine.Hostingを用いる場合は、下記のように`ICommandHandler`を実装したクラスを用意します。

### コマンドハンドラーへのDI

上記の**引数およびオプション引数は、このクラスのプロパティにインジェクションされます**。それらを受け取るための`IntArgument`および`StringOption`を定義します。
`IntArgument`プロパティで`new Argument<int>("IntArgument")`で指定した引数を、`StringOption`で、`new Option<string>("--string-option")`で指定したオプション引数を取得できます。

```cs
// MyCommmandのネストクラスとして実装している
// (もちろんネストしなくてもOK)
public class MyHandler : ICommandHandler
{
    // コンストラクタインジェクション経由で初期化
    private readonly MyService _service;

    // OptionやArgumentはプロパティインジェクションされる
    public int IntArgument { get; set; }
    public string StringOption { get; set; }
    // コマンドラインの利用するコンソール情報もプロパティインジェクションされる
    public IConsole Console { get; set; }

    // 続きはこのあと
}
```

次に`MyHandler`が利用する`MyService`をDIします。DIはコンストラクタ経由で行います。

```cs
public MyHandler(MyService service)
{
    _service = service;
}
```

このようにコンストラクタ引数として指定した`MyService`が自動でDIされます。

### コマンドの呼び出し

では上記のコマンドを実行するところをみていきます。通常は、`Command.InvokeAsync`でコマンドを実行していましたが、
`System.CommandLine.Hosting`を使う場合、`CommandLineBuilder`経由でパーサーを作成し、そのパーサー経由で`InvokeAsync`を呼び出します。

```cs
var builder = new CommandLineBuilder(new MyCommand());

builder.UseDefaults();
builder.UseHost(host =>
{
    host.ConfigureServices((context, services) =>
    {
        services.AddTransient<MyService>();
    });

    host.UseCommandHandler<MyCommand, MyCommand.MyHandler>();
});

var parser = builder.Build();
// コマンドラインの呼び出し
// argsはコマンドライン引数が格納されたstring配列
var result = await parser.InvokeAsync(args);
```

ここで、`CommandLineBuilder`に対してDI設定や、コマンドハンドラーを設定します。

```cs
// コマンドラインの標準機能を一通り初期化
builder.UseDefaults();

// ここでホスト設定（DIや設定ファイル、ログまわりの設定）
builder.UseHost(host =>
{
    host.ConfigureServices((context, services) =>
    {
        // ここで依存定義
        // これでMyServiceをコンストラクタインジェクションできる
        services.AddTransient<MyService>();
    });

    // いままではcommand.Handler = CommandHandler.Create
    // でやってた箇所をUseCommandHanderで定義する
    host.UseCommandHandler<MyCommand, MyCommand.MyHandler>();
});
```

`UseHost`でホスト設定を行います。DIの依存関係の定義は上記の`host.ConfigureService`内で行っています。[こちらのドキュメント](https://docs.microsoft.com/en-us/dotnet/core/extensions/dependency-injection-usage)を参考に設定します。

また`UserCommandHandler`で、`Command`に対してどのコマンドハンドラーを利用するかを定義します。

`UserDefaults`は、コマンドラインアプリケーションで必要な設定を一通り行ってくれるので呼び出しておきます。

## まとめ

`System.CommandLine.Hosting`について、その説明と利用方法を説明しました。
