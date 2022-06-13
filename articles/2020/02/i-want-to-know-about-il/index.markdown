---
date: "2020-02-18T09:00:00+09:00"
draft: false
title: "どういう処理をしてるかを知りたくて簡単にILに触れてみた件"
tags: ["C#", "IL"]

---

とあるコードレビューでこんなレビューをいただきました。

> public int Hoge { get => _hoge; } 的なラムダ呼び出しは、毎フレーム呼び出される前提なら
> GC.Allocが気になるのでpublic int Hoge { get => { return _hoge; } } で最適化したい

だいたいこんな感じ。自分の認識では前者はGC.Alloc発生する余地がないだろうといいつつ、これがたしかにラムダ呼び出しだとGC.Alloc発生する可能性がある？ と思いつつ。
自信がなかったのでこの構文がどういう処理をするのだろうと気になったので、ILでも吐いて見て調べてみるかーと思い、調査してみました。

簡単のため、下記のコードをベースに進めます。

```cs
using UnityEngine;

public class Test : MonoBehaviour
{
    void Start()
    {
        _hoge = 100;
        _fuga = 200;
    }

    void Update()
    {
        var hoge = Hoge;
        var fuga = Fuga;
    }

    public int Hoge { get => _hoge; }
    public int Fuga { get { return _fuga; } }

    private int _hoge;
    private int _fuga;
}
```

## まずプロファイラをみてるみる

とはいってもGC.Allocだけを知りたければ計測すれば分かる話なので、まずはプロファイラで確認してみます。ちなみにUnity 2019.3.0.f3で確認しています。

上記のコンポーネントだけをシーンに配置したシーンを用意し、Profiler WindowでDeep Profileにてアロケーションを確認してみます。

結果が下記画像です。`Assembly-CSharp.dll!::Test.get_Hoge()`が今回調べたい箇所ですが、`GC Alloc`項は`0B`なのでアロケーション自体は発生してなさそうです。ちなみに指摘にあった方も同時に確認していますが、こちらもアロケーションは発生してなさそうです。

![Testのプロファイル結果](./profiling.png)

ちなみに前者は[expression-bodied なプロパティ](https://ufcpp.net/study/csharp/oo_property.html#expression-bodied)と呼ばれ、プロパティを本体が式形式でかける構文です（ので、これでアロケーションが都度発生することはないだろう、と自分の中の認識でした）。

## ILで処理を調べてみる

では、これらがそれぞれILレベルでどういう処理になってるか調べてみます。今回は[SharpLab](https://sharplab.io/)でILを吐いて調べてみました。下記の画像のように左側のテキストボックスにコードを貼ると、右側にILを吐いてくれます。

![SharpLabでILを解析している様子](./sharplab.png)

SharpLabでは`UnityEngine`がないので、かわりに下記のコードを解析します。

```cs
using System;
public class Program
{
    public void Main()
    {
        _hoge = 100;
        _fuga = 200;
        
        Console.WriteLine($"Hoge = {Hoge}, Fuga = {Fuga}");
    }
    
    public int Hoge { get => _hoge; }
    public int Fuga { get { return _fuga; } }

    private int _hoge;
    private int _fuga;
}
```

ちなみにILは`Release`で吐き出します。結果は以下のとおり。

```
.class private auto ansi '<Module>'
{
} // end of class <Module>

.class public auto ansi beforefieldinit Program
    extends [System.Private.CoreLib]System.Object
{
    // Fields
    .field private int32 _hoge
    .field private int32 _fuga

    // Methods
    .method public hidebysig 
        instance void Main () cil managed 
    {
        // Method begins at RVA 0x2050
        // Code size 57 (0x39)
        .maxstack 8

        IL_0000: ldarg.0
        IL_0001: ldc.i4.s 100
        IL_0003: stfld int32 Program::_hoge
        IL_0008: ldarg.0
        IL_0009: ldc.i4 200
        IL_000e: stfld int32 Program::_fuga
        IL_0013: ldstr "Hoge = {0}, Fuga = {1}"
        IL_0018: ldarg.0
        IL_0019: call instance int32 Program::get_Hoge()
        IL_001e: box [System.Private.CoreLib]System.Int32
        IL_0023: ldarg.0
        IL_0024: call instance int32 Program::get_Fuga()
        IL_0029: box [System.Private.CoreLib]System.Int32
        IL_002e: call string [System.Private.CoreLib]System.String::Format(string, object, object)
        IL_0033: call void [System.Console]System.Console::WriteLine(string)
        IL_0038: ret
    } // end of method Program::Main

    .method public hidebysig specialname 
        instance int32 get_Hoge () cil managed 
    {
        // Method begins at RVA 0x208a
        // Code size 7 (0x7)
        .maxstack 8

        IL_0000: ldarg.0
        IL_0001: ldfld int32 Program::_hoge
        IL_0006: ret
    } // end of method Program::get_Hoge

    .method public hidebysig specialname 
        instance int32 get_Fuga () cil managed 
    {
        // Method begins at RVA 0x2092
        // Code size 7 (0x7)
        .maxstack 8

        IL_0000: ldarg.0
        IL_0001: ldfld int32 Program::_fuga
        IL_0006: ret
    } // end of method Program::get_Fuga

    .method public hidebysig specialname rtspecialname 
        instance void .ctor () cil managed 
    {
        // Method begins at RVA 0x209a
        // Code size 7 (0x7)
        .maxstack 8

        IL_0000: ldarg.0
        IL_0001: call instance void [System.Private.CoreLib]System.Object::.ctor()
        IL_0006: ret
    } // end of method Program::.ctor

    // Properties
    .property instance int32 Hoge()
    {
        .get instance int32 Program::get_Hoge()
    }
    .property instance int32 Fuga()
    {
        .get instance int32 Program::get_Fuga()
    }

} // end of class Program
```

今回の興味の対象となる`Hoge`プロパティの処理は下記の通り（それぞれ抜粋）。

```
    // Fields
    .field private int32 _hoge

    .method public hidebysig specialname 
        instance int32 get_Hoge () cil managed 
    {
        // Method begins at RVA 0x208a
        // Code size 7 (0x7)
        .maxstack 8

        IL_0000: ldarg.0
        IL_0001: ldfld int32 Program::_hoge
        IL_0006: ret
    } // end of method Program::get_Hoge

    // Properties
    .property instance int32 Hoge()
    {
        .get instance int32 Program::get_Hoge()
    }
```

ILについて素人なのですが、なんとなく `get_Hoge()` メソッドが定義されていて処理が下記なのかなとわかります。

```
    IL_0000: ldarg.0                    // ??
    IL_0001: ldfld int32 Program::_hoge  // [Program::_hoge]
    IL_0006: ret                        // []
```

頭で`idarg.0`やっている理由がわからないのですが（引数なしなのにこれ必要？）、`ldfld int32 Program::_hoge`で`_hoge`を`int`でスタックに詰んで、`ret`でメソッド抜け出して、戻り値としてスタックに積んだ`Program::_hoge`を返却してるのかな、と。
`Fuga`プロパティの方も同じ処理となっていて、２つはまったく同じ処理を行っていることがわかりました。

## ILを直書きしてみる

上記の件はこれにて解決したんですが、ILみてていろいろ興味が湧いたので帰りの電車で調べてたんですが、[@neuecc](https://twitter.com/neuecc)さんの[Introduction to the pragmatic IL via C#](http://neue.cc/2017/12/04_560.html)を見ててILをC#から直書きもできるんだってことを知って、なにこれ面白いなーと思って見ていました。あまりILに関わる機会がなかったので知らなかったんですが、このブログの

> IL生成をしない汎用的なコードだとリフレクションが必要なものですが、IL生成によってそれを避ける、つまり「リフレクションを高速にするもの」状態です。また、高速化のポイントとしてはルックアップを最小に抑える、というのが挙げられます。

という箇所を読んで、なるほどそんなに黒魔術とかというより手段の１つとして知っておくと良さそうという印象を持ちました。

ちなみにIL直書きもそこまで難しくなく、例えばILで書いたメソッドをC#で使う場合は[`System.Reflection.EmitDynamicMethod`](https://docs.microsoft.com/en-us/dotnet/api/system.reflection.emit.dynamicmethod?view=netframework-4.8)を用いて、ILをツラツラとかく感じでいけます。例えば２引数を受け取って足し算をするメソッドは下記のようにかけます。

```cs
using System;
using System.Reflection.Emit;
					
public class Program
{
	public static void Main()
	{
		var dm = new DynamicMethod("MySum", typeof(int), new[] { typeof(int), typeof(int) });
		var il = dm.GetILGenerator();
		
		il.Emit(OpCodes.Ldarg_0); // [a]       第１引数をスタックに詰む
		il.Emit(OpCodes.Ldarg_1); // [a, b]    第２引数をスタックに詰む
		il.Emit(OpCodes.Add);     // [(a + b)] スタックに詰んだ２つの値を足す
		il.Emit(OpCodes.Ret);     // []        メソッド終了して戻り値を返す
		
		var mySum = (Func<int, int, int>)dm.CreateDelegate(typeof(Func<int, int, int>));
		Console.WriteLine($"MySum(2, 3) = {mySum(2, 3)}");
	}
}
```

まぁこれだと単純すぎてよくわからんて感じですが、IL入門としては悪くないんじゃないかと。

## まとめ

expression-bodied なプロパティとフィールドを返すだけのプロパティをILレベルで処理を比較してみました。実際どのような処理になっていてなにが問題なのか調べる手段として、または最適化の手段としてILを知っておけるといいなと感じました。

ちなみにILの知識自体はないに等しいため、本文中でなにか不備等があれば [@yucchiy_](https://twitter.com/yucchiy_)にてご連絡いただけると幸いです。あと、ILでこういうの面白いよーとかもぜひ。
