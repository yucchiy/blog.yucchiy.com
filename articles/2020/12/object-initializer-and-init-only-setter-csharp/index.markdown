---
date: "2020-12-27T07:00:00+09:00"
draft: false
title: "C# 9.0のオブジェクト初期化子とInit Only Setter"
tags: ["C#"]

---

C#にはオブジェクト初期化子(Objec Initializer)という構文があります。下記のように記述することでクラスのプロパティを初期化できるというものです。

```csharp
Cat cat = new Cat { Age = 10, Name = "Fluffy" };
Cat sameCat = new Cat("Fluffy"){ Age = 10 };

System.Console.WriteLine($"cat.Age = {cat.Age}, cat.Name = {cat.Name}");
// -> cat.Age = 10, cat.Name = Fluffy
System.Console.WriteLine($"sameCat.Age = {sameCat.Age}, sameCat.Name = {sameCat.Name}");
// -> sameCat.Age = 10, sameCat.Name = Fluffy

public class Cat
{
    // Auto-implemented properties.
    public int Age { get; set; }
    public string Name { get; set; }

    public Cat()
    {
    }

    public Cat(string name)
    {
        this.Name = name;
    }
}
```

(余談ですが上記コードはC#9のTop-level statementsでは導入されると有効なソースコードです。)

この構文はコンストラクタを呼び出したあとにプロパティに値を代入する、下記のコードのシンタックスシュガーです(下記はILをデコンパイルしたC#コード)。なぜ初期化子という名前がつけられているのかな、と個人的には思っていました。

```csharp
Cat cat = new Cat();
cat.Age = 10;
cat.Name = "Fluffy";
Cat cat2 = cat;
Cat cat3 = new Cat("Fluffy");
cat3.Age = 10;
Cat cat4 = cat3;
Console.WriteLine(string.Format("cat.Age = {0}, cat.Name = {1}", cat2.Age, cat2.Name));
Console.WriteLine(string.Format("sameCat.Age = {0}, sameCat.Name = {1}", cat4.Age, cat4.Name));
```

そんなことを思い、雑につぶやいていたら[@neuecc](https://twitter.com/neuecc)に下記のようなツッコミをいただきました。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">しかしobject “init”ializer経由でしか初期化できない”init”が誕生したことにより結果整合性が！？</p>&mdash; neuecc (@neuecc) <a href="https://twitter.com/neuecc/status/1333935528530432001?ref_src=twsrc%5Etfw">December 2, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

なるほど？と思い、調べてみました。

## Init Only Setter

C# 9.0から、[Init Only Setter](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/csharp-9.0/init)という構文が追加されました。この構文は、主に不変な型を定義をより楽に行うためのものです。

C# 1.0から不変なデータを実装するには、2通りの方法しか提供されていません。

1. `readonly`でフィールドの定義する
2. `getter`プロパティのみを定義する

例えば1.を用いると、下記のように不変データを実装できます。

```csharp
var point = new Point(1, 2);
point.X = 3;
// -> error CS0200: Property or indexer 'Point.X' cannot be assigned to -- it is read only

struct Point
{
    public int X { get; }
    public int Y { get; }

    public Point(int x, int y)
    {
        this.X = x;
        this.Y = y;
    }
}
```

ただし上記コードではプロパティの初期化に、それぞれコンストラクタでデータを受け取って、それをプロパティに代入するというボイラープレート的なコードを毎度記述しなければならないという問題がありました。Init Only Setterはこれを解決するために導入されました。

具体的には下記ようなコードを書けます。

```csharp
var point = new Point() { X = 1, Y = 2, };
point.X = 3;
// -> error CS8852: Init-only property or indexer 'Point.X' can only be assigned in an object initializer, or on 'this' or 'base' in an instance constructor or an 'init' accessor.

struct Point
{
    public int X { get; init; }
    public int Y { get; init; }
}
```

わざわざボイラープレートなコードを書くことなくプロパティを初期化することができました。このように`init`と定義するとそのプロパティをInit Only Setterとして定義できます。また、Init Only Setterなプロパティを初期化できるのがオブジェクト初期化子です（厳密には他の初期化方法も存在します）。

## まとめ

C# 9.0のInit Only Setterの導入により、(個人的には)オブジェクト初期化子はその名にふさわしい機能になりました。

## 参考

- [オブジェクト初期化子とコレクション初期化子 - C# プログラミング ガイド | Microsoft Docs](https://docs.microsoft.com/ja-jp/dotnet/csharp/programming-guide/classes-and-structs/object-and-collection-initializers)
- [Init only setters - C# 9.0 specification proposals | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/csharp-9.0/init)