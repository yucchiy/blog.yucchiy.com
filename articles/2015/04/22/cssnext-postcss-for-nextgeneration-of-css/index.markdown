---
date: "2015-04-22T09:00:00+09:00"
title: "cssnextでみる次世代CSSとPostCSS"
description: "次世代CSSではcustom propertiesやmedia queries rangesといった便利な機能がいくつか追加されており, cssnextを用いて簡単に利用することができる. さらにPostCSSを用いるとCSSにネストやミックスイン構文を取り込むことができ, SassやStylusのような表現力をCSSに持たせることができる."
tags: ["css", "postcss", "cssnext"]

---

![cssnext](./cssnext.png)

今日ではSassやStylusなどaltCSSを用いたウェブデザインは主流になりつつあるが, 一方で, 次世代CSSではaltCSSで実装されているような様々な機能追加が検討されている.
そこで次世代CSSを先取りするcssnextと次世代CSSで足りない機能をPostCSSのプラグインを用いて補う方法について紹介する.
これらのツールを用いると, CSSの枠組みの中で閉じた開発が行えて良いのではないかと思う.

## 最近のウェブデザイン事情と次世代CSS

最近のウェブデザインでは, SassやStylusなどのaltCSSと呼ばれるメタ言語を用いてスタイルを記述し,
それぞれのプリプロセッサを用いてCSSを生成するような開発スタイルが多くなってきた.
[Twitter Bootstrap](http://getbootstrap.com/css/#sass)や[Foundation](http://foundation.zurb.com/docs/sass.html)など, 
主要なCSSフレームワークはSassを用いて開発が行われており, altCSSではデファクトスタンダードであると言っても過言ではない.

このような開発スタイルが主流になったのは, ウェブデザインの複雑化に対して現状のCSSの機能が少ないという点であると考えられる.
必要な機能はaltCSS内で実装し, プリプロセッサを用いて現状のブラウザが解釈できるCSSを出力することで, そのような問題を解決する.

上記のような解決が主流となったのは, CSSの機能が少ないという点が原因であると考えられる.
しかし, 次世代CSSではカスタムプロパティによる変数の実現や`calc`関数による四則演算, カスタムセレクタによるセレクタの再利用など様々な機能の導入が予定されており,
altCSSを用いなくてもいい感じに開発を行っていける可能性がある. また, PostCSSの枠組みで構文の拡張を行うと,
Sassなどの持つネストやミックスイン構文をCSSに組み込むことができる.

## cssnextとは

次世代CSSはブラウザの実装状況によりすぐに利用できない可能性がある. そこでこのような問題を解決するためのツールとして,
次世代CSSを現状のブラウザが解釈できるようなCSSに変換してくれる[cssnext](https://cssnext.github.io/)というツールがある.

このcssnextは, [PostCSS](https://github.com/postcss/postcss)というツールにより実装されている.
PostCSSはCSSを入力として, 任意の処理(たとえばvendor prefixを自動で差し込む・圧縮など)を行った後のCSSを出力するツールである.
この任意の処理は開発者がプラグインを差し込むだけで行えるため, プロジェクトごとに必要な処理を, プラグイン単位で取捨選択することができる.
またPostCSSは, プラグイン開発のための[APIを提供](https://github.com/postcss/postcss/blob/master/API.md)されており, プラグインの開発も容易だという特徴がある.

cssnextはPostCSSのプラグインパック(プラグインをひとまとめにして提供しなおすプラグイン)と呼ばれるもので, 以下の機能をサポートする(cssnextのREADMEより抜粋).

* automatic vendor prefixes (via [autoprefixer](https://github.com/postcss/autoprefixer))
* [custom properties & `var()`](http://www.w3.org/TR/css-variables/)([⇗](https://github.com/postcss/postcss-custom-properties)),
* [reduced `calc()`](https://github.com/MoOx/reduce-css-calc#readme)([⇗](https://github.com/postcss/postcss-calc)),
* [custom media queries](http://dev.w3.org/csswg/mediaqueries/#custom-mq)([⇗](https://github.com/postcss/postcss-custom-media)),
* [media queries ranges](http://dev.w3.org/csswg/mediaqueries/#mq-ranges)([⇗](https://github.com/postcss/postcss-media-minmax)),
* [custom selectors](http://dev.w3.org/csswg/css-extensions/#custom-selectors)([⇗](https://github.com/postcss/postcss-custom-selector)),
* [`color()`](http://dev.w3.org/csswg/css-color/#modifying-colors)([⇗](https://github.com/postcss/postcss-color-function)),
* [`hwb()`](http://dev.w3.org/csswg/css-color/#the-hwb-notation)([⇗](https://github.com/postcss/postcss-color-hwb)) ,
* [`gray()`](http://dev.w3.org/csswg/css-color/#grays)([⇗](https://github.com/postcss/postcss-color-gray)),
* [#rrggbbaa](http://dev.w3.org/csswg/css-color/#hex-notation)([⇗](https://github.com/postcss/postcss-color-hex-alpha)),
* [`rebeccapurple`](http://dev.w3.org/csswg/css-color/#valdef-color-rebeccapurple)([⇗](https://github.com/postcss/postcss-color-rebeccapurple)),
* [font-variant](http://dev.w3.org/csswg/css-fonts/#propdef-font-variant)([⇗](https://github.com/postcss/postcss-font-variant)),
* [filter](http://www.w3.org/TR/filter-effects/)([⇗](https://github.com/iamvdo/pleeease-filters))
* [`rem` units](http://www.w3.org/TR/css3-values/#rem-unit)([⇗](https://github.com/robwierzbowski/node-pixrem))
* [pseudo-elements](http://www.w3.org/TR/css3-selectors/#pseudo-elements)([⇗](https://github.com/axa-ch/postcss-pseudoelements))
* alpha colors for browser that don't understand [css 3 colors](http://www.w3.org/TR/css3-color/)([⇗](https://github.com/postcss/postcss-color-rgba-fallback))

この中のいくつかの機能について紹介する.

### Custom properties & var()

カスタムプロパティはその名の通りユーザが自由にプロパティを定義するための機能で, `--property-name`と`var()`を用いる.
様々な利用方法が考えられるが, 利用例としてSassなどの変数として利用するなどが考えられる.

```
:root {
    --accent-color: #f0825c; 
    --base-color: #4f5759;
}

a {
    color: var(--accent-color);
}

html, body {
    color: var(--base-color, black);
}
```

`--accent-color`と`--base-color`というカスタムプロパティを定義し, aタグとbodyタグ以下の要素にそれぞれ割り当てている.
ここで, `var()`の第2引数にはフォールバック値が割り当てられる. 上記では`--accent-color`が定義されていない時,
かわりに`black`がcolorとして割り当てられる.上記をコンパイルすると以下の様なcssが出力される.

```
a {
    color: #f0825c;
}

html, body {
    color: black;
    color: #4f5759;
}
```

cssnextでは, カスタムプロパティの実装には[postcss-custom-properties](https://github.com/postcss/postcss-custom-properties)を用いているが,
属性を複数設定することでフォールバック値を実現している.

### Custom media queries

カスタムメディアクエリを用いると, メディアクエリに名前が付けられるようになる. これによりメディアクエリに設計者の意図を伝えることができ,
また, メディアクエリのサイズを変更したい場合に, カスタムメディアクエリの定義を変更するだけでよくなる(下記だと`--smarll-viewport`を変更するだけでよい).

```
@custom-media --small-viewport (max-width: 30em);

@media (--small-viewport) {
    .invisible-with-small-viewport {
        display: none;
    }
}
```

### Media queries ranges

現状のメディアクエリでは, `min-width`と`max-width`を用いることで範囲を表現していたが, メディアクエリの範囲指定に`>=`と`<=`を用いることができる.
カスタムメディアクエリと併用すると, 以下の様な直感的なクエリが記述できる.

```
@custom-media --small-viewport (width <= 30em);

@media (--small-viewport) {
    .invisible-with-small-viewport {
        display: none;
    }
}
```

### Custom selectors

カスタムセレクタを用いると, 既存のセレクタを用いて新たなセレクタを作成することができる.

```
@custom-selector :--heading h1, h2, h3, h4, h5, h6;

:--heading + p {
    margin-bottom: 15px;
}
```

上記のカスタムセレクタをコンパイルすると, 以下のCSSが出力される.

```
h1 + p,
h2 + p,
h3 + p,
h4 + p,
h5 + p,
h6 + p { 
    margin-bottom: 0;
}
```

上記のように複数のセレクタにまとめてスタイルを適用したり, 複数からなるセレクタを一つにまとめることでコードの重複を防いだりなど, 様々な用途が考えられる.

### color()・hwb()・gray()・#rrggbbaa

色指定を行う関数がいくつか実装されている. カラー表現を数値で行うことができるため, 上記の`calc()`関数と併用してつかうなど用途が考えられる.

```
.foo {
    color: gray(0);
}

.bar {
    color: gray(255, 50%);
}

body {
    background: color(red a(90%))
}

body {
    color: hwb(90, 0%, 0%, 0.5);
}

body {
    background: #9d9c
}
```

## ネストやミックスイン構文を使いたい

cssnextを用いると次世代CSSを先取りしたウェブデザイン開発が可能になる. しかし, 
SassやStylusにあるネストやミックスイン構文などはサポートされておらず,
cssnextを導入してもそのような構文は利用できずに辛い, という意見はあると思う.
そういうときには, **PostCSSのプラグインを足すことで**ネストやミックスイン構文を追加することができる.
例えば, [postcss-mixins](https://github.com/postcss/postcss-mixins)と[postcss-nested](https://github.com/postcss/postcss-nested)を追加すると以下の様なCSSが書ける.

```
@custom-media --mobile (width <= 640px);

@define-mixin social-icon $color {
    background: $color;
    &:hover {
        background: color($color whiteness(+10%));
    }
}

.social-icon {
    &.is-twitter {
        @mixin social-icon #55acee;
    }
    &.is-facebook {
        @mixin social-icon #3b5998;
    }
}

.post-article {
    padding: 10px 5px;
    @media (--mobile) {
        padding: 0;
    }
}
```

これ以外の構文を追加したい場合も, PostCSSのプラグインを追加したり, 自分で開発することで実現できる.

## 問題点

cssnextと, 追加でPostCSSのプラグインを導入することによって, CSSを便利に拡張できる.
一見便利そうであるが, 問題点としては**cssnextやPostCSSで拡張したCSSは, CSSのシンタックスから外れている**ことだ.
cssnextで扱うCSSは, いつかはCSSとして正しい構文になるのでよいが, CSSの仕様として策定していないシンタックスを足してつくったオレオレCSSはそもそもCSSではないので,
**変換後でないと`css-lint`などのツールを利用できなかったり, エディタのシンタックスハイライトがサポート対象外だったり**なにかと開発で支障をきたすおそれがある.
それならばSassやStylusを用いてコーディングを行ったほうが良いというふうになりそうで, どの程度CSSの枠組みで頑張るかというのを考えるのが難しい.

そんなのエディタのハイライティングをプロジェクトごとに拡張すればいいのでは, とかlintも変換してからかければいいのではと思うかもしれないが,
このへんの背景を知らないひとがプラグインを用いてCSSを拡張しだすと, **CSSに方言みたいなものが生まれてしまう**可能性があってあんまり良くない気がする.

