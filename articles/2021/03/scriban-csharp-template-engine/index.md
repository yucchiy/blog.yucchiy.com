---
title: C#で利用できるテンプレートエンジンscribanについて
description: ''
pubDatetime: 2021-03-24T01:00:00.000Z
tags:
  - C#
  - テンプレートエンジン
---

この記事ではC#で利用できるテンプレートエンジン[scriban](https://github.com/scriban/scriban)について備忘録としてブログをかきます。

## テンプレートエンジンがほしくなるケース

先日[memo-cli](https://github.com/yucchiy/memo-cli)という自分用のメモ管理ツールを実装していたときに、メモの**カテゴリごとに生成するメモのファイル名のフォーマットを変更したい**ということがありました。

例えば通常作成するメモのファイル名は`input-name.markdown`の`input-name`の部分にコマンドライン引数から受け取ったものを埋め込むが、日記を管理するカテゴリでは`20210324_journal.markdown`と指定された日付を埋め込むようにしたいといった要件です。

C#の標準機能でこのような文字列を生成する場合、[string.Format](https://docs.microsoft.com/en-us/dotnet/api/system.string.format?view=net-5.0)や[文字列補間](https://docs.microsoft.com/ja-jp/dotnet/csharp/tutorials/string-interpolation)が利用できそうです。

```cs
// string.Format
var fileName1 = string.Format("{0}.markdown", inputName);
// dateはDateTime型の変数
var journalFileName1 = string.Format("{0}_journal.markdown", date.ToString("yyyymmdd"));

// 文字列補間
var fileName2 = $"{inputName}.markdown";
var dateString = date.ToString("yyyymmdd");
var journalFileName2 = $"{dateString}_journal.markdown";
```

しかし埋め込みたい変数およびその順番、または日付であればそのフォーマットを**変更するごとにプログラムを再ビルドする必要**があります。もちろんその組み合わせを全て保持しておいて呼び分ける仕組みを実装すれば再ビルド問題は回避できますが、メモの管理なのでできればそのフォーマットは**設定ファイルなどで管理し変更したい**です。

このような場合、テンプレートエンジンを利用すると便利です。

```cs
var journalFormat = "{{ date | date.to_string '%Y%m%d' }}.markdown";
var template = Scriban.Template.Parse(journalFormat);
var journalFileName = template.Render(new { Date = date });
```

上記の例では`{{ date | date.to_string '%Y%m%d' }}`部分が変数の埋め込みで、実際に値を埋め込んで文字列を生成する部分は`template.Render(new { Date = date });`になります。

このように日付のフォーマットを指定することもできますし、このフォーマット文字列はプログラムに埋め込まれている必要なく、設定ファイルに定義されているものを利用することもできます。

## scribanの使い方

scribanは、NuGetからインストールできます。

```
$ dotnet add package Scriban.Signed --version 3.6.0
```

上記で簡単に説明しましたが、scribanでは大きく分けて下記の手順で利用します。

```cs
// テンプレート文字列のパース処理
var template = Template.Parse("Hello {{name}}!");

// パース済みのテンプレートに対して変数を埋め込んで文字列を出力する
var result = template.Render(new { Name = "World" }); // => "Hello World!"
```

`{{name}}`が埋め込み変数になり、`Render`に渡している`new { Name = "World" }`が実際に埋め込む変数になります。

注意としてデフォルトでは埋め込む変数のプロパティ名が`Name`になっていますが、テンプレート文字列側では`name`となっています。scribanはデフォルトでプロパティ名をスネークケースに変換して利用します。

つまり、例えば`MyMethodIsNice`というプロパティ名はテンプレート文字列側では`my_method_is_nice`として参照します。この挙動は[Member renamer](https://github.com/scriban/scriban/blob/master/doc/runtime.md#member-renamer)で変更することもできます。

ちなみにこのテンプレート文字列は、[Liquid](https://shopify.github.io/liquid/)というDSLライクな文法で提供されています。ちなみに、Liquidテンプレートそのものもサポートしているようです。

```cs
// テンプレート文字列をLiquidとしてパースする
var template = Template.ParseLiquid("Hello {{name}}!");

// パース済みのテンプレートに対して変数を埋め込んで文字列を出力する
var result = template.Render(new { Name = "World" }); // => "Hello World!"
```

今回は利用しなかったので取り上げてないですが、テンプレートには[if](https://github.com/scriban/scriban/blob/master/doc/language.md#92-if-expression-else-else-if-expression)や[for](https://github.com/scriban/scriban/blob/master/doc/language.md#93-loops)なども利用でき、例えば下記のようなリスト表示も表現することができます。

```cs
var template = Template.Parse(@"
<ul id='products'>
  {{ for product in products }}
    <li>
      <h2>{{ product.name }}</h2>
           Price: {{ product.price }}
           {{ product.description | string.truncate 15 }}
    </li>
  {{ end }}
</ul>
");
// ProductListにProductの配列が格納されている
var result = template.Render(new { Products = this.ProductList });
```

## まとめ

テンプレートエンジンが利用したくなるケースと、C#で利用できるテンプレートエンジンであるscribanについて紹介しました。
