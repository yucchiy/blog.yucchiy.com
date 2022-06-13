---
date: "2021-03-14T15:00:00+09:00"
draft: false
title: "C#のUsing Statementと、C# 8.0で導入されたUsing Declarationについて"
tags: ["C#", "C# 8.0"]

---

先日、Unity 2020がリリースされました。

[Unity 2020 LTSをリリースしました｜Unity Japan（ユニティ・テクノロジーズ・ジャパン）｜note](https://note.com/unityjapan/n/naf7bb0270aff)

Unity 2020では C# 8.0が使えるようになり、このブログでも[null許容参照型](https://blog.yucchiy.com/2020/12/nullable-for-unity/)について取り上げました。

その中で、地味ではありますがUsing Declarationが地味に便利だったので、備忘録としてブログにかきます。

## この記事のまとめ

- Using Statementを用いることでブロックを抜けると確実に`Dispose`を呼び出すことができるが、ネストが深くなるなど可読性に問題があった
- C# 8.0で導入されたUsing Declarationにより、変数の定義の手前に`using`を記述すると、その変数が定義されたスコープを抜けると自動的に`Dispose`を呼び出されるようになった

## System.IDisposableについて

C#ではアンマネージドなリソースを破棄するためのメカニズムを提供するために、`System.IDisposable`というインターフェイスが用意されています。

アンマネージドなリソースは.NETのガベージコレクターに管理を任せられないリソースで、このようなリソースを含むオブジェクトを作成する場合、オブジェクトの使用が終了したらそのリソースを明示的に破棄する必要があります。

例えば[File.OpenText](https://docs.microsoft.com/en-us/dotnet/api/system.io.file.opentext?view=net-5.0#System_IO_File_OpenText_System_String_)で取得できる`StreamReader`は、利用中にファイルハンドラを開いているため、
利用後に`Dispose`を呼び出してファイルハンドラを閉じる必要があります。

`Dispose`はその性質上(たとえ例外などが発生したとしても)確実に呼び出される必要があります。例えばtry-finally句を用いて定義したオブジェクトのDisposeを呼び出すという方法があります。

```cs
var sr = File.OpenText(path)
try
{
    // srに対して処理を行う
}
finally
{
    // finally句で確実にDisposeを呼び出す
    sr.Dispose();
}
```

しかし定義と破棄のペアをもれなく書く必要があるため、ヒューマンエラーの元になります。

## Using StatementによるDispose呼び出しの自動化

[using ステートメント - C# リファレンス | Microsoft Docs](https://docs.microsoft.com/ja-jp/dotnet/csharp/language-reference/keywords/using-statement)

そこでC#ではUsing Statementという仕組みがあります。上記の処理を下記のように記述できます。

```cs
using (var sr = File.OpenText(path))
{
    // srに対して処理を行う
}
// usingのスコープを抜けた瞬間に
// Disposeが呼び出される
```

つまり、using句で定義したオブジェクトの`Dispose`がそのスコープを抜けると自動で呼び出されるようになります。
これにより、変数の宣言に対して破棄は自動化されるため、上記で懸念となるヒューマンエラーは解消されます。

ちなみにこの構文では、途中で例外が発生しても`Dispose`は確実に呼び出されます。確かめてみます。

```cs
// HogeはDisposeが呼び出されると
// "Hoge(Name = name).Dispose() called"
// という文字列を出力する
public class Hoge : IDisposable
{
    public string Name { get; }

    public Hoge(string name) { Name = name; }

    public void Dispose()
    {
        WriteLineAndFlush($"Hoge(Name = {Name}).Dispose() called");
    }
}

// 念の為WriteLineのあとFlushを呼ぶメソッド
static void WriteLineAndFlush(string? line)
{
    Console.Out.WriteLine(line);
    Console.Out.Flush();
}

static void TestCase()
{
    try
    {
        using (var hoge1 = new Hoge("hoge1"))
        {
            WriteLineAndFlush("in using hoge1");
            using (var hoge2 = new Hoge("hoge2"))
            {
                WriteLineAndFlush("in using hoge2");
                using (var hoge3 = new Hoge("hoge3"))
                {
                    WriteLineAndFlush("in using hoge3");
                }

                WriteLineAndFlush("out using hoge3");
            }

            WriteLineAndFlush("out using hoge2");

            throw new Exception("Itotekina exception");
        }

        WriteLineAndFlush("out using hoge1");
    }
    catch (Exception e)
    {
        WriteLineAndFlush($"Exception = {e.Message}");
    } 
}
```

`Hoge`クラスは`Dispose`が呼び出されたタイミングでコンソールに`Dispose`に下記のようなメッセージを出力します。

```cs
var hoge = new Hoge("TestName");
hoge.Dispose();
// => Hoge(Name = TestName).Dispose() called
```

`TestCase()`メソッドでは、`hoge2`オブジェクトのスコープが外れたあとに例外が呼び出されます。`hoge1`オブジェクトも宣言済みなので`hoge1`オブジェクトの`Dispose`も呼び出されることを期待します。

実行すると、下記が出力されます。

```
in using hoge1
in using hoge2
in using hoge3
Hoge(Name = hoge3).Dispose() called
out using hoge3
Hoge(Name = hoge2).Dispose() called
out using hoge2
Hoge(Name = hoge1).Dispose() called
Exception = Itotekina exception
```

上記のように例外が投げられた場合でも、例外をキャッチする前に(つまり`Exception = Itotekina exception`が出力されるまえに)`Hoge(Name = hoge1).Dispose() called`が出力されている、つまり`Dispose`が呼び出されていることが確認できました。

しかし、上記のように扱うオブジェクトが増えれば増えるほどネストが深くなり、可読性が下がるといった問題もあります。

一応この回避策の１つとして、下記のようにUsing Statementを連鎖させる記述をすることができます。

```cs
using (var hoge1 = new Hoge("hoge1"))
using (var hoge2 = new Hoge("hoge2"))
using (var hoge3 = new Hoge("hoge3"))
{
    throw new Exception("Itotekina exception");
}
```

また、1つの`using`ステートメント内に複数のオブジェクトを宣言することもできます。

```cs
using (Hoge hoge1 = new Hoge("hoge1"), hoge2 = new Hoge("hoge2"), hoge3 = new Hoge("hoge3"))
{
    throw new Exception("Itotekina exception");
}
```

ただし、この場合はステートメント内の型を明記する必要があるのと、宣言する変数はすべて同じ型である必要があります。

ちなみにいずれも出力は下記のとおりです。

```
Hoge(Name = hoge3).Dispose() called
Hoge(Name = hoge2).Dispose() called
Hoge(Name = hoge1).Dispose() called
Exception = Itotekina exception
```

## Using Declaration

[Pattern based using and using declarations - C# 8.0 specification proposals | Microsoft Docs](https://docs.microsoft.com/ja-jp/dotnet/csharp/language-reference/proposals/csharp-8.0/using)


上記のUsing Statementをより簡素に書くためにC# 8.0ではUsing Declarationという記法が追加されました。

```cs
using (var hoge1 = new Hoge("hoge1"))
{
    using (var hoge2 = new Hoge("hoge2"))
    {
        using (var hoge3 = new Hoge("hoge3"))
        {
        }
    }
}
```

例えば上記のコードはUsing Declarationを用いて下記のように書くことができます。

```cs
{
    using var hoge1 = new Hoge("hoge1");
    using var hoge2 = new Hoge("hoge2");
    using var hoge3 = new Hoge("hoge3");
}
// このタイミングでhoge1, hoge2, hoge3の
// Disposeが呼び出される。
```

Using Declarationの利用方法は簡単で、変数宣言の前に`using`を書くだけです。Using Declarationを用いると、そのインスタンスがスコープを抜けた直後に`Dispose`が呼び出されるようになります。

結果は下記のようになります。このように宣言した順番と逆順でDisposeが呼び出されていることが確認できます。

```
Hoge(Name = hoge3).Dispose() called
Hoge(Name = hoge2).Dispose() called
Hoge(Name = hoge1).Dispose() called
```

## 余談: ILレベルでのUsing Declaration

下記のUsing StatementおよびUsing Declarationで記述されたコードは、コンパイル後のILは全く同じになります。

```cs
// Using Statement
using (var hoge1 = new Hoge("hoge1"))
{
    using (var hoge2 = new Hoge("hoge2"))
    {
    }
}

// Using Declaration
{
    using var hoge1 = new Hoge("hoge1");
    using var hoge2 = new Hoge("hoge2");
}
```

上記のコードを一度ILに変換し、それをC#にデコンパイルしたコードは下記のとおりです。

```cs
Hoge hoge = new Hoge("hoge1");
try
{
    Hoge hoge2 = new Hoge("hoge2");
    try
    {
    }
    finally
    {
        if (hoge2 != null)
        {
            ((IDisposable)hoge2).Dispose();
        }
    }
}
finally
{
    if (hoge != null)
    {
        ((IDisposable)hoge).Dispose();
    }
}
```

内部的にはtry-finallyに変換されているんですね。

## Reference

- [Dispose メソッドの実装 | Microsoft Docs](https://docs.microsoft.com/ja-jp/dotnet/standard/garbage-collection/implementing-dispose?redirectedfrom=MSDN)
- [using ステートメント - C# リファレンス | Microsoft Docs](https://docs.microsoft.com/ja-jp/dotnet/csharp/language-reference/keywords/using-statement)
- [Pattern based using and using declarations - C# 8.0 specification proposals | Microsoft Docs](https://docs.microsoft.com/ja-jp/dotnet/csharp/language-reference/proposals/csharp-8.0/using)
- [アンマネージ リソースのクリーンアップ | Microsoft Docs](https://docs.microsoft.com/ja-jp/dotnet/standard/garbage-collection/unmanaged)
