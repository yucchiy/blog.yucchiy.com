---
title: C# 9.0のTop-level statementsとその動作
description: ''
pubDatetime: 2021-01-02T10:00:00.000Z
tags:
  - C#
  - C# 9.0
---

あけましておめでとうございます。2021年の書き始めはC#9.0です。

## Top-level statementsとは

C# 9.0 に入った **Top-level statements** は多くのアプリケーションの不要な式を取り除くための導入された機能です。具体的にはコンソールアプリケーションのエントリーポイントの記述を簡素に行うことができます。下記のようなコードについて考えます。

```csharp
using System;
namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
```

Top-level statementsを用いると上記のコードは下記で記述することができます。

```csharp
using System;
Console.WriteLine("Hello World!");
```

エントリーポイントのための**クラスやメソッドの定義が省略でき、簡素に実装できる**ことが確認できます。

ちなみに動作環境は、コマンドラインの実行は`dotnet 5.0.100`で、C#コードのデコンパイルはSharpLabでC#のバージョンは[dotnet/roslyn 6c5cef5](https://github.com/dotnet/roslyn/commit/6c5cef5b5cd8a4baf6c3996566b74f985e99073a)で確認しました。また、コマンドライン実行のためのプロジェクトのcsprojは下記のとおりです。

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net5.0</TargetFramework>
  </PropertyGroup>
</Project>
```

### コマンドライン引数のとり方

`args` という変数が定義されています。

```csharp
using System;
for (var i = 0; i < args.Length; ++i)
{
    Console.WriteLine($"{i} - {args[i]}");
}
```

下記のようにプログラムを実行すると、コマンドライン引数を処理できていることが確認できます。

```csharp
$ dotnet run arg1 arg2 arg3                                                                                                              
0 - arg1                                                                                                                                                                                 
1 - arg2                                                                                                                                                                                 
2 - arg3
```

### メソッド定義

（一応）メソッドも定義できます。

```csharp
using System;
void Echo()
{
    Console.WriteLine("Hello world");
}

Echo(); // "Hello world"
```

### クラスや構造体の定義

クラスや構造体の定義も可能ですが、Top-level statementsの後に記述する必要があります。

```csharp
using System;

// struct Test
// {
//     public int IntVal;
// }
// ここに定義すると下記のエラーがでる。
// error CS8803: Top-level statements must precede namespace and type declarations.

var test = new Test();

Console.WriteLine($"{test.IntVal}");

struct Test
{
    public int IntVal;
}
```

### async / await

通常のエントリーポイント同様、async/await を用いる事もできます。

```csharp
using System;
using System.Threading.Tasks;
await Test();

static async Task Test()
{
    Console.WriteLine("First line.");
    await Task.Delay(1000);
    Console.WriteLine("Second line.");
    await Task.Delay(1000);
    Console.WriteLine("Third line.");
    // First line.
    // Second line. (1秒後に表示)
    // Third line. (さらに1秒後に表示)
}
```

## 内部動作

このTop-level statementsがどのように実装されているのか見てみます。

```csharp
using System;
Console.WriteLine("Hello World!");
```

このコードをコンパイル後、デコンパイルしたコードは下記のようになります。

```csharp
[CompilerGenerated]
internal static class <Program>$
{
    private static void <Main>$(string[] args)
    {
        Console.WriteLine("Hello World!");
    }
}
```

省略したエントリーポイントのためのクラス及びメソッド（上記だと クラスが `<Program>` で メソッドが `<Main>` ）コンパイラが生成し、Top-level statementsとして定義した文はその中に定義しているようです。そのメソッドが `args` 変数を定義しているため、その変数でコマンドライン引数がとれます。

ちなみに、メソッドを定義した場合（上記の例だと `Echo`）は、下記のように展開されます。

```csharp
[CompilerGenerated]
internal static class <Program>$
{
    private static void <Main>$(string[] args)
    {
        <<Main>$>g__Echo|0_0();
    }

    internal static void <<Main>$>g__Echo|0_0()
    {
        Console.WriteLine("Hello world");
    }
}
```

生成したクラスの `internal` な静的メソッドとして定義し（ `<<Main>$>g__Echo|0_0` というメソッド名で定義 ）、それを呼び出しています。

ちなみにクラスや構造体の定義について触れましたが、こちらは Top-level statements とは関係なく、コンパイラが自動生成するエントリーポイントクラスの外に（普通に）クラスが配置されます。

```csharp
[CompilerGenerated]
internal static class <Program>$
{
    private static void <Main>$(string[] args)
    {
        Test test = default(Test);
        Console.WriteLine(string.Format("{0}", test.IntVal));
    }
}
internal struct Test
{
    public int IntVal;
}
```

字句解析のルール上、名前空間および型の宣言までを Top-level statements として、そのステートメントの情報を元にエントリーポイントのクラスを生成します。

ちなみに async/awaitでは、`IAsyncStateMachine`を実装したクラスを自動生成している。が、このへんがちゃんとわからずそのうち調べる...。 ([https://devblogs.microsoft.com/premier-developer/dissecting-the-async-methods-in-c/](https://devblogs.microsoft.com/premier-developer/dissecting-the-async-methods-in-c/))

## 制約

1プロジェクトにつき Top-level statements は**1つしか定義できません**。定義した場合は `CS8802` エラーを吐きます。

## まとめ

C# 9.0のTop-level statementsについて、その使い方と、内部的にどのように動作するのか紹介しました。

## 参考

- [Top-level statements and functions · Issue #3117 · dotnet/csharplang · GitHub](https://github.com/dotnet/csharplang/issues/3117)
    - Top-level statementsのProposal
- [What's new in C# 9.0 - C# Guide | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-9#top-level-statements)
    - C# 9.0でのTop-level statementsの紹介
- [Tutorial: Explore ideas using top-level statements to build code as you learn | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/exploration/top-level-statements)
    - Top-level statementsの公式チュートリアル
