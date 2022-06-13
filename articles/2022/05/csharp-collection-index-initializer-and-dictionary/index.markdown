---
type: "memo"
title: "C#のコレクション初期化子とインデックス初期化子、またはDictionaryの初期化について"
date: "2022-05-05T09:00:00+20:00"
draft: false
tags: ["C#"]

---

C#では、C# 3.0でコレクション初期化子が実装されました。

これを用いることで、コレクション型を初期化すると同時に、そのコレクションの要素の初期化も行うことができます。

たとえば、 `List<T>` の要素の初期化をコレクション初期化子を用いると下記のように記述できます。

```csharp
// intListには1, 2, 3, 4が入った状態で初期化される。
var intList = new List<int>() {1, 2, 3, 4};

foreach (var el in intList)
{
    // そのため、下記が出力される
    // 1
    // 2
    // 3
    // 4
    Console.WriteLine(el);
}
```

このコレクション初期化子、便利なのでよく使っていたのですが、実際どう展開されるのか知らなく、調べたのでメモ代わりにブログに残します。

## コレクション初期化子の実装について

コレクション初期化子は、 内部的にはその型の `Add` メソッドを呼び出す形で展開されます。

つまり、先述したコードは、下記のように展開されます（コードは[SharpLab](https://sharplab.io/)でC#のコードをコC#として出力したコード）。

```csharp
// var intList = new List<int>() {1, 2, 3, 4};
List<int> list = new List<int> ();
list.Add (1);
list.Add (2);
list.Add (3);
list.Add (4);
List<int> list2 = list;
```

`Add` メソッドが呼び出されることで、要素が初期化されていることが確認できます。

このコレクション初期化子ですが、対象の型が下記の条件を満たすと利用できます。

- `IEnumerable` を実装している
- `Add` メソッドが実装されている

展開されたコードは `IEnumerable` を実装していなくてとも、 `Add` のみが実装だけで事足りそうですが、 **コレクション**初期化子ということで下記のようなクラスの実装でもコレクション初期化子が利用できてしまう事態を避けるためと考えられます。

```csharp
// この型に対して
struct Adder
{
    public int Add(int x, int y) => x + y;
}

// こういう呼び出しができてしまう
// （が意味不明）
var x = new Adder
{
    { 2, 1 },
    { 3, 4 },
    { 5, 9 },
};
```

参考: [小ネタ コレクション初期化子 | ++C++; // 未確認飛行 C ブログ](https://ufcpp.net/blog/2016/12/tipscollectioninitializer/)

また、C# 6.0 以降で `Add` メソッドは、インスタンスメソッドだけではなく拡張メソッドでもOKになりました。

```csharp
class Point
{
    public int X { get; set; }
    public int Y { get; set; }
}

static class PointExtensions
{
    public static void Add(this List<Point> list, int x, int y)
        => list.Add(new Point { X = x, Y = y });
}

var points = new List<Point>
{
    { 1, 2 },
    { 4, 6 },
    { 0, 3 },
};

// pointsは下記の要素が入ったリストとして初期化される
// (X = 1, Y = 2)
// (X = 4, Y = 6)
// (X = 0, Y = 3)
```

参考: [C# 6 の新機能 - C# によるプログラミング入門 | ++C++; // 未確認飛行 C](https://ufcpp.net/study/csharp/ap_ver6.html#add-extensions)

参考: [オブジェクト初期化子とコレクション初期化子 - C# プログラミング ガイド | Microsoft Docs](https://docs.microsoft.com/ja-jp/dotnet/csharp/programming-guide/classes-and-structs/object-and-collection-initializers#collection-initializers)

## コレクション初期化子を用いたDictionaryの初期化

上記のコレクション初期化子を用いることで、Dictionaryの要素の初期化は下記のように実装できます。

```csharp
var dict = new Dictionary<int, string>()
{
    // Addメソッドが複数引数をとるときは
    // { T1の変数, T2の変数, ... } と言うかたちで呼び出す
    { 1, "Nantoka" },
    { 2, "Kantoka" },
    { 3, "Nantoka-Kantoka" }
};
```

これはこれでとても便利で良いのですが、Dictionaryの場合、キーをインデックスアクセス的に記述できたほうが直感的なのかなーと思ったり...？

## インデックス初期化子によるDictionaryの初期化

ということで、上記の問題（？）を解決するために、C# 6.0からインデックス初期化子という構文が追加され、より直感的な記述ができるようになりました。

上記のコレクション初期化子を用いたDictionaryの初期化と（ほぼ）同等のコードを、インデックス初期化子を用いて下記のように記述できます。

```csharp
var dict = new Dictionary<int, string>()
{
    [1] = "Nantoka",
    [2] = "Kantoka",
    [3] = "Nantoka-Kantoka"
};
```

キーがインデックスアクセス的に記述され、すこし直感的になったように感じます。

このコードは、下記のように展開されます。

```csharp
Dictionary<int, string> dictionary = new Dictionary<int, string> ();
dictionary [1] = "Nantoka";
dictionary [2] = "Kantoka";
dictionary [3] = "Nantoka-Kantoka";
Dictionary<int, string> dict = dictionary ;
```

コレクション初期化子は `Add` メソッドの呼び出しに置き換えられるのに対して、インデックス初期化子は（名前の通り）インデクサーによるアクセスに置き換えられています。

ちなみに、インデックス初期化子はインデクサーを実装している型であれば利用可能なので（更にいうとセッターのみでもよい）、独自型でもインデクサーを実装していれば利用できます。

参考: [インデックス初期化子 - xin9le.net](https://blog.xin9le.net/entry/2014/11/20/025417)

参考: [C# 6 の新機能 - C# によるプログラミング入門 | ++C++; // 未確認飛行 C](https://ufcpp.net/study/csharp/ap_ver6.html#index-initializer)

## まとめ

コレクション初期化子とインデックス初期化子についてそれぞれ機能の紹介と、これらがどのように展開されるのか、またこれらを用いたDictionaryの要素の初期化について触れました。

## 参考

- [オブジェクト初期化子とコレクション初期化子 - C# プログラミング ガイド | Microsoft Docs](https://docs.microsoft.com/ja-jp/dotnet/csharp/programming-guide/classes-and-structs/object-and-collection-initializers)
- [コレクション初期化子を使用してディクショナリを初期化する方法 - C# プログラミング ガイド | Microsoft Docs](https://docs.microsoft.com/ja-jp/dotnet/csharp/programming-guide/classes-and-structs/how-to-initialize-a-dictionary-with-a-collection-initializer)
- [小ネタ コレクション初期化子 | ++C++; // 未確認飛行 C ブログ](https://ufcpp.net/blog/2016/12/tipscollectioninitializer/)
- [C# 6 の新機能 - C# によるプログラミング入門 | ++C++; // 未確認飛行 C](https://ufcpp.net/study/csharp/ap_ver6.html)
- [インデックス初期化子 - xin9le.net](https://blog.xin9le.net/entry/2014/11/20/025417)