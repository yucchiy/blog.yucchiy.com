---
title: MemoryPackでシリアライズ・デシリアライズをカスタマイズするいくつかの方法
description: MemoryPackで、独自型のシリアライズやデシリアライズをカスタマイズする方法をいくつか紹介します。
pubDatetime: 2023-01-01T06:00:00.000Z
tags:
  - Unity
  - MemoryPack
---

あけましておめでとうございます。2023年1記事はMemoryPackの小ネタです。



MemoryPackで、独自型のシリアライズやデシリアライズをカスタマイズする方法をいくつか紹介します。

## シリアライズ・デシリアライズをカスタマイズしたいとき

そのまま保存する場合はフォーマッターを自作する必要はありません。たとえば下記のような`Player`クラスを考えます。

```csharp
public class Player
{
    public string Name { get; }
    public List<Weapon> Weapons { get; private set; }
}

public class Weapon
{
    public int Id { get; }
    public string Name { get; }
    public int Power { get; }
    // その他ゲームに関する様々なパラメータがあるとする
}
```


`Player`が装備している武器は`Weapons`変数が所持しています。ここで`Weapon`はゲームのマスターデータなどのデータベースから取得できるとします。その時のキーとして`Id`が利用できるとします。

```csharp
// たとえばこういうデータベースクラスがあるとする
// 簡単のためにstaticで定義した。
public static class WeaponDatabase
{
    public static Weapon Get(int id)
    {
        return id switch
        {
            1 => new Weapon(1, "ナイフ", 1),
            2 => new Weapon(2, "短剣", 2),
            3 => new Weapon(3, "長剣", 3),
        };
    }
}

// こんな感じでとれるとする
var weapon = WeaponDatabase.Get(1);
```


このような状況では、 `Player`側で`Weapons`の内容をすべて保存する必要はなく、 `Player`クラスのシリアライズ・デシリアライズは下記のように行えるのが良いでしょう。

1. `Weapons`に入っているそれぞれのIDの一覧をシリアライズしておく
1. デシリアライズ時に1.で保存したIDの一覧から`Weapons`を復元する
このような要件に対して、MemoryPackではいくつか思いつく対応方法を紹介します。

### シリアライズ・デシリアライズ時のコールバックを利用する

MemoryPackではシリアライズ・デシリアライズの前後のタイミングをフックして、独自の処理を差し込むことができます。具体的には`MemoryPackable`なクラスの静的メソッドに`MemoryPackOnSerializing`や`MemoryPackOnDeserialized`などの属性をつけることで、そのメソッドが呼び出されるようになります。

詳細については、MemoryPackドキュメントの「[Serialization callbacks](https://github.com/Cysharp/MemoryPack#serialization-callbacks)」が参考になりますが、簡単にまとめると下記の順番で呼び出されます。

* シリアライズ
    1. `MemoryPackOnSerializing` がついたメソッド
    1. MemoryPackのシリアライズ
    1. `MemoryPackOnSerialized` がついたメソッド
* デシリアライズ
    1. `MemoryPackOnDeserializing` がついたメソッド
    1. MemoryPackのデシリアライズ
    1. `MemoryPackOnDeserialized` がついたメソッド
`~ing` がついたメソッドが前処理として、 `~ed` がついたメソッドが後処理として呼ばれると理解しておくと良いでしょう。

また静的メソッドは `ref reader/writer` および `ref T? value` を引数に取れます。

### シリアライズ用のプロパティ・フィールドを用意して対応

これを利用して、下記のようなコードを記述することで`Weapons`の`Id`一覧をシリアライズし、デシリアライズ時に`Id`一覧から`Weapons`を復元できます。

```csharp
using System.Collections.Generic;
using System.Linq;
using MemoryPack;

[MemoryPackable]
public partial class Player1
{
    // Weaponsそのものはシリアライズしない
    [MemoryPackIgnore]
    public List<Weapon> Weapons { get; } = new();

    // 代わりにId一覧をシリアライズする
    // こっちは外から参照されなくていいのでprivateで定義
    [MemoryPackInclude]
    private int[] WeaponIds { get; set; }

    // MemoryPackのシリアライズが行われる前に呼び出される
    [MemoryPackOnSerializing]
    private static voidOnSerializing(
        ref MemoryPackWriter writer, ref Player1? value)
    {
        // WeaponsからId配列を作成する
        value.WeaponIds = value.Weapons
            .Select(w => w.Id)
            .ToArray();
        // このメソッド呼び出し後に、MemoryPackの実際のシリアライズが行われる
    }

    // MemoryPackのデシリアライズが行われた後に呼び出される
    [MemoryPackOnDeserialized]
    private static voidOnDeserialized(
        ref MemoryPackReader reader, ref Player1? value)
    {
        // Id配列からWeaponsを復元
        value.Weapons.AddRange(
            value.WeaponIds.Select(WeaponDatabase.Get)
        );
    }
}
```


`Weapons`はシリアライズ対象に含めないので`MemoryPackIgnore` を、`WeaponIds`は`Weapons`のID一覧をシリアライズするためのプロパティとして定義して`MemoryPackInclude`を入れています。

`MemoryPackOnSerializing`をフックして`WeaponIds`へIDの詰め込みを行っています。ポイントとしては`MemoryPackOnSerializing`で**シリアライズ手前**をフックしている点です。 

`MemoryPackOnSerialized`だとシリアライズが終わっているためここでIDを詰め込んでも正しくシリアライズが行われません。逆にデシリアライズ時は後処理で`Weapons`を復元します。デシリアライズ手前ではまだ `WeaponIds` が復元されてないためです（というかこの時点では`value`自体も空）。

このように、シリアライズ用のプロパティなどを用意して、そちらにシリアライズ時に詰め替えを行うといった手法で要件を満たせます。

### シリアライズ・デシリアライズ時に独自のバイナリを書き出し・読み出して対応

Player側にシリアライズ用のプロパティやフィールドをわざわざ用意するのもなー、という場合は、MemoryPackのシリアライズ時に独自のバイナリを追記してやるという方法も使えそうです。

具体的には下記の手順で対応します。

1. シリアライズ時に`MemoryPackOnSerialized`をフックして、 `Weapons`からID配列を生成してそれを追記する
1. デシリアライズ時に`MemoryPackOnDeserialized`をフックして、1.で書き出したバイナリからID配列をデシリアライズして、そこから`Weapons`を復元する
```csharp
using System.Collections.Generic;
using System.Linq;
using MemoryPack;

public partial class Player2
{
    // 今回もこちらはシリアライズしないので
    // MemoryPackIgnore
    [MemoryPackIgnore]
    public List<Weapon> Weapons { get; } = new();

    [MemoryPackOnSerialized]
    private static void OnSerialized(
        ref MemoryPackWriter writer, ref Player2? value)
    {
        // ID配列を直接MemoryPackWriterで配列として追記する
        writer.WriteArray(
            value.Weapons.Select(w => w.Id).ToArray()
        );
    }

    [MemoryPackOnDeserialized]
    private static void OnDeserialized(
        ref MemoryPackReader reader, ref Player2? value)
    {
        // 追記しておいたID配列を読み込み
        int[] ids = null;
        reader.ReadArray(ref ids);

        // そこからWeaponsを復元
        value.Weapons.AddRange(
            ids.Select(WeaponDatabase.Get)
        );
    }
}
```


シリアライズでは`MemoryPackOnSerialized`時に`MemoryPackWriter`を介して独自のバイナリを書き出しておき、デシリアライズでは`MemoryPackOnDeserialized`時に`MemoryPackReader`を介してそのバイナリを読みます。

このようにMemoryPackでは独自のバイナリを付与したり読み込んだりが比較的簡単にできますが、独自のバイナリ書き込みはMemoryPackの枠組みを超えた処理となるため要注意です。順番を間違えたり、読み込みと書き込みの数やフィールド数が不一致するとシリアライズやデシリアライズに失敗するためです。

MemoryPackはこの複雑な低レベルな処理を、SourceGeneratorで自動化することで安全に扱えるようにしているため、特別なことがない限りは先述したシリアライズ用のプロパティやフィールドを用意するなどの対応が良さそうではあります。

## シリアライズ対象はシンプルなクラスとして扱いたい問題

設計思想によっては、シリアライズ対象はシリアライズロジックに依存したくないという話はあると思います。

たとえば上記の`Player`自身に`MemoryPackable`や`MemoryPackIgnore`とかつけたくないとか、そもそもID配列だけシリアライズしてみたいなロジックは知りたくないというか。

さらにいうと今回staticに定義した`WeaponDatabase`はデータベースに関する処理で、 `Player`や`Weapon`とは別アセンブリで定義したい、`Player`は`WeaponDatabase`を知りたくない、というのは普通にありそうな話です。

その場合は、シリアライズ用の型を用意することで対応できます。

### シリアライズ用の型を用意して対応するパターン

シリアライズしたい`Player`に対してシリアライズ用の型を用意して、そちらをシリアライズすることで対応するというパターンが考えられると思います。

これは公式ドキュメントの「[Serialize external types](https://github.com/Cysharp/MemoryPack#serialize-external-types)」で取り上げられている方法をそのまま利用するかたちとなります。つまりUnityの既存型やライブラリで追加した型など、すでに存在していて手がいれられないもの、MemoryPackとしてシリアライズするためのテクニックです。

下記の`Player`クラスに対してシリアライズするための`PlayerSerializable`クラスを用意します。

```csharp
using System.Collections.Generic;
using System.Linq;
using MemoryPack;

// シリアライズしたいクラス
public class Player
{
    public string Name { get; }
    public List<Weapon> Weapons { get; } = new();

    public Player(string name, List<Weapon> weapons)
    {
        Name = name;
        Weapons = weapons;
    }
}

// Playerシリアライズ用の型
// こっちはPlayerクラスと別アセンブリとかにしても問題なし
[MemoryPackable]
public partial class PlayerSerializable
{
    [MemoryPackIgnore]
    public readonly Player Player;

    // シリアライズ対象のプロパティを定義して
    // そのまま元のPlayerのプロパティを参照する
    [MemoryPackInclude]
    private string Name => Player.Name;
    // WeaponsはIDとしてシリアライズする
    [MemoryPackInclude] private int[] WeaponIds
        => Player.Weapons.Select(w => w.Id).ToArray();

    // デシリアライズ時にMemoryPackが呼び出すコンストラクタ
    [MemoryPackConstructor]
    public PlayerSerializable(string Name, int[] WeaponIds)
    {
        // ここで Playerを復元する
        Player = new Player(
            Name,
            // ID配列からWeapons配列を復元
            WeaponIds.Select(WeaponDatabase.Get).ToList()
        );
    }

    // こっちのコンストラクタはシリアライズ時に使う
    public PlayerSerializable(Player player)
    {
        Player = player;
    }
}
```


シリアライズとデシリアライズは、下記のように行います。

```csharp
var p = new Player("Taro", new List<Weapon>
{
    WeaponDatabase.Get(1),
    WeaponDatabase.Get(3),
});

// PlayerSerializableを介する
var bin = MemoryPackSerializer.Serialize(new PlayerSerializable(p));
var val = MemoryPackSerializer.Deserialize<PlayerSerializable>(bin).Player;

// Name = Taro
Debug.Log($"Name = {val.Name}");
// WeaponCount = 2
Debug.Log($"WeaponCount = {val.Weapons.Count}");
// Weapon[0].Id = 1
Debug.Log($"Weapon[0].Id = {val.Weapons[0].Id}");
// Weapon[0].Name = ナイフ
Debug.Log($"Weapon[0].Name = {val.Weapons[0].Name}");
// Weapon[1].Id = 3
Debug.Log($"Weapon[1].Id = {val.Weapons[1].Id}");
// Weapon[1].Name = 長剣
Debug.Log($"Weapon[1].Name = {val.Weapons[1].Name}");
```


上記は、都度`PlayerSerializable`を介していて呼び出しが結構面倒です。これは下記のようなカスタムフォーマッターを用意することで呼び出しを簡略化できます。

```csharp
// Playerのカスタムフォーマッター
// シリアライズ・デシリアライズ自体は全部
// PlayerSerializableに委譲する
public class PlayerFormatter : MemoryPackFormatter<Player>
{
    public override void Serialize(
        ref MemoryPackWriter writer, ref Player value)
    {
        if (value == null)
        {
            writer.WriteNullObjectHeader();
            return;
        }

        // PlayerSerializable経由でシリアライズ
        writer.WritePackable(new PlayerSerializable(value));
    }

    public override void Deserialize(
        ref MemoryPackReader reader, ref Player value)
    {
        if (reader.PeekIsNull())
        {
            value = null;
            return;
        }

        // PlayerSerializable経由でデシリアライズ
        var wrapped = reader.ReadPackable<PlayerSerializable>();
        value = wrapped.Player;
    }
}
```


上記のフォーマッターを用いて、シリアライズとデシリアライズを下記のように記述できます。

```csharp
// これをアプリケーションの初期化で１度呼ぶ
MemoryPackFormatterProvider.Register(new PlayerFormatter());

var p = new Player("Taro", new List<Weapon>
{
    WeaponDatabase.Get(1),
    WeaponDatabase.Get(3),
});

// Playerクラスを直接シリアライズしてる風
var bin = MemoryPackSerializer.Serialize(p);
// Playerクラスとして直接デシリアライズしてる風
var val = MemoryPackSerializer.Deserialize<Player>(bin);

// Name = Taro
Debug.Log($"Name = {val.Name}");
// WeaponCount = 2
Debug.Log($"WeaponCount = {val.Weapons.Count}");
// Weapon[0].Id = 1
Debug.Log($"Weapon[0].Id = {val.Weapons[0].Id}");
// Weapon[0].Name = ナイフ
Debug.Log($"Weapon[0].Name = {val.Weapons[0].Name}");
// Weapon[1].Id = 3
Debug.Log($"Weapon[1].Id = {val.Weapons[1].Id}");
// Weapon[1].Name = 長剣
Debug.Log($"Weapon[1].Name = {val.Weapons[1].Name}");
```


かなり直感的な呼び出しでシリアライズとデシリアライズができるようになりました。この手法を利用する場合はセットでやっておきたいですね。

ちなみにカスタムフォーマッターを用意する場合、もちろんreader/writerで独自バイナリとして全部書き出すといったことも可能なのですが、前述のとおり低レイヤーな処理を手で書くのは結構大変なのであまりやらないほうがいい気がします。

（それをやらないためにMemoryPackはSourceGeneratorで自動化する術を提供しているわけで）

このように`Player`クラスからMemoryPackやシリアライズの依存を消すことができました。が、まぁ当然ですがシリアライズ型のメンテナンスが大変という問題が別途ついてきます。`Player`を編集すると、セットでシリアライズしたいプロパティを`PlayerSerializable`に追記する必要があります。

この辺はトレードオフで、どこまで設計として厳密さをとって、どこまで利便性を求めるか、というところを決めていく必要があるのかもしれません。

## まとめ

MemoryPackで、シリアライズやデシリアライズをカスタマイズする方法をいくつか紹介しました。

シリアライズ対象の型とシリアライズ処理の依存を切りたい問題と、シリアライズ処理のメンテナンスどうするか問題は、設計次第なところがあり難しい問題ですが、この記事を参考にしつつうまく組み合わせていただけると幸いです。

