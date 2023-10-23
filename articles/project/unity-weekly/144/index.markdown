---
type: "unity-weekly"
title: "Unity Weekly 144"
description: "2023/10/23週のUnity Weeklyです。UI Toolkit、unity1week online共有会、Rust.Tokyo、Input Systemなどについて取り上げています。"
tags: ["Unity Weekly","Unity"]
date: "2023-10-23T00:00:01"

---

## Unity Officials

### 使ってみようUI Toolkit - 前半

[使ってみようUI Toolkit - 前半 - YouTube](https://www.youtube.com/watch?v=R4xd7FGNYqs&t=478s)

ランタイムで動くカード型のUI要素を、UI Toolkitを用いて実装する方法を紹介しています。

UI Builderの使い方、レイアウトを整えるためのFlexの挙動やPosition Modeなどのパラメーター、フォントの設定、USSによるスタイル設定などについてそれぞれ解説しています。

## Slides

### unity1week online共有会 #13

unity1week online共有会 #13の動画と資料が公開されています。

* [📣 unity1week online共有会 #13 - YouTube](https://www.youtube.com/watch?v=COFWY3BrDEw)
* [u1w共有会 「チーム開発でのGoogle Sheetを 使ったマスターデータの管理」 | ドクセル](https://www.docswell.com/s/yousanz/ZP9X68-2023-10-14-214148)
* [⌨️ a Key is Landmine 💣のデザイン / Design of "a Key is Landmine" - Speaker Deck](https://speakerdeck.com/lycoris102/design-of-a-key-is-landmine)
* [こわくないエディター拡張入門 - Speaker Deck](https://speakerdeck.com/gameshalico/kowakunaiedeitakuo-zhang-ru-men)
* [unity1week_online共有会13_オープンソースゲーム開発のススメ - Speaker Deck](https://speakerdeck.com/mathken029/unity1week-onlinegong-you-hui-13-opunsosugemukai-fa-nosusume)
* [ハカセちゃんのせかいへようこそ！ - Google Slides](https://docs.google.com/presentation/d/1Tz7xQC3pGILf9jpm1tWLaZQ860Oh1K5XM8t56c1c7h8/edit?pli=1#slide=id.p)
* [クッキークリッカーは1週間で作れるか？ - Speaker Deck](https://speakerdeck.com/kakuhito/kutukikuritukaha1zhou-jian-dezuo-reruka)
* [Getting Started with ECS! | ドクセル](https://www.docswell.com/s/annulusgames/ZXYQ8Y-getting_started_with_ecs)
* [U1W共有会_13登壇資料 | ドクセル](https://www.docswell.com/s/5101209457/5DE6RN-2023-10-14-235441)

### 他言語がメインの場合のRustの活用法 - csbindgenによるC# x Rust FFI実践事例（Rust.Tokyo 2023）

[他言語がメインの場合のRustの活用法 - csbindgenによるC# x Rust FFI実践事例 - Speaker Deck](https://speakerdeck.com/neuecc/ta-yan-yu-gameinnochang-he-norustnohuo-yong-fa-csbindgenniyoruc-number-x-rust-ffishi-jian-shi-li)

csbindgenによるC#とRust FFIの活用事例について紹介しています。


## Articles

### Book (w/ Turnable Pages) Breakdown 

[Book (w/ Turnable Pages) Breakdown | Cyanilux](https://www.cyanilux.com/tutorials/spellbook-breakdown/)

ページめくりができる本の実装について、本のモデルのセットアップから本のページの背景や文字を設定するUVなどのShaderGraph、本をめくるアニメーションのための頂点の扱い、これらを制御するためのC#スクリプトなどについてそれぞれ解説しています。

### Input SystemでUI操作との競合を防ぐ方法

[【Unity】Input SystemでUI操作との競合を防ぐ方法 | ねこじゃらシティ](https://nekojara.city/unity-input-system-ui-exclusive)

uGUI（UI）の要素にマウスやタッチイベントが発生した際に、Input Systemの操作を無効化する方法について紹介しています。

カーソルがuGUI上にあるかの判定方法から操作可能なUIに限定して検知する方法、Input Fieldの入力ブロック、フォーカス復帰時の考慮などそれぞれ解説しています。

### UnityとC#で簡単にgRPCする in 2023

[UnityとC#で簡単にgRPCする in 2023](https://zenn.dev/turing_motors/articles/7f5cc78c5d5b55)

[YetAnotherHttpHandler](https://github.com/Cysharp/YetAnotherHttpHandler)を用いてUnity上でgRPCによる通信を実装する方法について、[NuGetForUnity](https://github.com/GlitchEnzo/NuGetForUnity)を用いた依存パッケージのインストール方法からYetAnotherHttpHandlerの導入方法、gRPCで必要なコードの自動生成、gRPCによる通信の実装方法についてそれぞれ解説しています。

### TextMeshProでテキストアニメーションを実装する

[【Unity】TextMeshProでテキストアニメーションを実装する – 株式会社ロジカルビート](https://logicalbeat.jp/blog/15431/)

TextMeshProで文字送り演出（1文字ずつ表示するアニメーション）を実装する方法を、1文字ずつ表示するための`maxVisibleCharacter`の利用方法から、1文字ずつフェードインさせるような演出の実装方法についてそれぞれ紹介しています。

### Building Blocksで始めるMetaQuest3 MRアプリ開発

[Building Blocksで始めるMetaQuest3 MRアプリ開発 - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/building-blocks)

Oculus Unity Integration SDKのBuilding Blocksを用いて、ハンドトラッキングやシーンの認識を行う方法を紹介しています。


## Repositories

### SplatVFX

[GitHub - keijiro/SplatVFX: 3D Gaussian Splatting with Unity VFX Graph](https://github.com/keijiro/SplatVFX)

VFX Graphを使った3D Gaussian Splattingの実装。

### Ica Normal Tools

[GitHub - burak-efe/Ica_Normal_Tools: Super fast Normal and Tangent recalculation library for Unity.](https://github.com/burak-efe/Ica_Normal_Tools?)

高速な法線・接線の再計算ライブラリ。

### Deploy

[GitHub - mnicolas94/facticus-deploy: A Unity package to help you build and deploy your game remotely with Github Actions](https://github.com/mnicolas94/facticus-deploy?)

GitHub Actionsを用いた複数プラットフォーム向けのゲームのビルドとストアへのデプロイをするためのUnityパッケージ。

### Unity.Package.FigmaToUnity

[GitHub - TrackMan/Unity.Package.FigmaToUnity: Unity plugin for importing entire Figma pages into Unity UI Toolkit files.](https://github.com/TrackMan/Unity.Package.FigmaToUnity)

FigmaのデータをUI Toolkitのアセット（UXMLとUSS）に変換するパッケージ。

### UIEEx

[GitHub - blightue/UIEEx: UIEEx(UIElement Extension) is an extension library of Unity UI Elements package. UIEEx improve the workflow of creating editor & runtime UI by UI Elements.](https://github.com/blightue/UIEEx?)

UI Elementsでのエディターやランタイムワークフローを改善するためのパッケージ。