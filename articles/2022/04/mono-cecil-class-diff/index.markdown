---
type: "memo"
title: "Mono.Cecilを用いて２つのDLLの間の型の差分を出す"
date: "2022-04-13T09:00:00+10:00"
draft: false
tags: ["C#", "Mono.Cecil", "IL", "Unity"]

---

## はじめに

Unityの最適化の一環でManaged Code Strippingを調整してたりすると、本来必要な型が最適化で省かれてしまって、ビルドが正常に動かない時があります。

実機のログを追うと場合によってはログから欠けている型を特定できる場合もありますが、ログのみから特定が難しい場合もあります。

そこでManaged Code Strippingの設定によって動くビルドと動かないビルドからそれぞれdllを抽出して、Mono.Cecilを用いてdllに入っている型の差分を出す方法を紹介します。

## Mono.Cecilとは

Mono.Cecilについては[pCYSl5EDgo](https://twitter.com/pcysl5edgo)さんの [Mono.Cecil入門](https://qiita.com/pCYSl5EDgo/items/4146989d08e169dde81d)という記事にかなり丁寧な紹介があるので、この記事では簡単に触れておきます。

[Mono.Cecil](https://github.com/jbevain/cecil)はECMA標準に則って構築されたDLLの中身（型とかフィールドとか）を確認したり、DLLを編集・生成するためのライブラリです。

今回はMono.Cecilを用いてUnityから生成されたアプリから抽出したDLLから型の一覧を抽出します。

## Unityで作成したアプリからDLLを抽出する

Scripting Backendがmonoの場合は、DLLが直接アプリに組み込まれています。例えばStandaloneビルドをしたアプリは、assets/bin/Data/Managedフォルダ配下にDLLが格納されています。

Scripting Backendがil2cppの場合はC#コードがすべてC++に変換され、soやaなどプラットフォームごとのネイティブライブラリになっているのでDLLは存在しませんが、[Il2CppDumper](https://github.com/Perfare/Il2CppDumper)などをツールを用いると型とフィールドのみのDLL（実装が存在しないDLL）を復元できます。

（※これらのツールの悪用はお控えください）

## Mono.Cecilを用いて型一覧を取得する

適当なC#コンソールアプリケーションのプロジェクトを作成します。

作成後、NuGet経由でMono.Cecilをインストールします。

![Mono.CecilをNuGet経由でインストールする](./01.png)

Mono.CecilをNuGet経由でインストールする

Mono.Cecilを用いてDLL内の型一覧を取得します。下記に実装を示します。

```csharp
using Mono.Cecil;

// 比較したいDLLのパス
var dll1 = @"C:\PATH\TO\OptimizedBuild\assets\bin\Data\Managed\Assembly-CSharp.dll";
var dll2 = @"C:\PATH\TO\NoOptimizedBuild\assets\bin\Data\Managed\Assembly-CSharp.dll";

// dllをモジュールとして読み込み
var module1 = ModuleDefinition.ReadModule(dll1);
var module2 = ModuleDefinition.ReadModule(dll2);

// モジュールに入っている型情報一覧を型名一覧に変換
var types1 = module1.Types.Select(t => t.FullName);
var types2 = module2.Types.Select(t => t.FullName);

// 型一覧の差集合をとって一覧表示
foreach (var typeName in types2.Except(types1))
{
    Console.WriteLine(typeName);
}
```

そこまで複雑な実装ではないですが簡単に説明すると、 `ModuleDefinition.ReadModule` にdllのパスを渡すことでdllのモジュール情報を読み込めます。戻り値の型の `Types` フィールドにそのモジュールの型一覧が格納されているので、その情報から2つのDLL間の差分をLINQの `Except` メソッドで計算して、それを一覧表示しています。

上記の実装では `dll2` に存在して `dll1` に存在しない型一覧を表示しています。下図のように型の差分を取得できます。

![2つのDLL間の型一覧の差分を表示](./02.png)