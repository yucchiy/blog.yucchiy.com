---
type: "unity-weekly"
title: "Unity Weekly 182"
description: "2024/07/22週のUnity Weeklyです。Unity 6のグラフィックス、URP 3D Sample、Plateauなどについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-07-22T00:00:01"
---

## Slides

### モバイル、VR、PC、およびコンソールでの Unity 6の高解像度グラフィックス

[モバイル、VR、PC、およびコンソールでの Unity 6の高解像度グラフィックス | Unity Learning Materials](https://learning.unity3d.jp/10208/)

UnityがGDC2024で発表した「[High-fidelity graphics on mobile, VR, PC, and consoles with Unity 6](https://schedule.gdconf.com/session/unity-developer-summit-high-fidelity-graphics-on-mobile-vr-pc-and-consoles-with-unity-6-presented-by-unity/903623)」の日本語翻訳が公開されています。

### Tutorial: The URP 3D Sample – a short introduction 

[Tutorial: The URP 3D Sample – a short introduction | Unity Learning Materials](https://learning.unity3d.jp/10154/)

Unity 2022 LTS以降で利用できるURPの3Dサンプルの概要について動画で紹介しています。

### 日本の町並みを簡単にインポート！ 使ってみよう Plateau

[日本の町並みを簡単にインポート！ 使ってみよう Plateau | Unity Learning Materials](https://learning.unity3d.jp/10166/)

国土交通省が提供するPlateau SDKの基本的な使い方からデータのインポート方法、提供されるシーンのデータ構造について解説しています。

## Articles

### Unity向けオブジェクトプールライブラリ「uPools」

[Unity向けオブジェクトプールライブラリ「uPools」 #Unity - Qiita](https://qiita.com/toRisouP/items/b893a57c67e8ef7b23e7)

Unity向けオブジェクトプールライブラリ「[uPool](https://github.com/AnnulusGames/uPools/)」の基本的な使い方について解説しています。

### Deep dive: The design and implementation of object pools

[Featured Blog | Deep dive: The design and implementation of object pools](https://www.gamedeveloper.com/programming/deep-dive-the-design-and-implementation-of-object-pools)

オブジェクトプールを用いることのメリットや基本的な設計、実装方法について解説しています。

### C# Source Generator 開発チュートリアル

[C# Source Generator 開発チュートリアル │ Aiming 開発者ブログ](https://developer.aiming-inc.com/csharp/source-generator-tutorial/)

簡単なメソッドの自動生成を題材に、Source Generatorでのコードの自動生成について解説しています。

### ISymbol.ToDisplay(SymbolDisplayFormat.FullyQualified)を用いてSymbolの完全修飾名を取得する(プロパティなどのメンバーシンボルでは取得できないので注意) 

[【C#】ISymbol.ToDisplay(SymbolDisplayFormat.FullyQualified)を用いてSymbolの完全修飾名を取得する(プロパティなどのメンバーシンボルでは取得できないので注意) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2024/07/18/120000)

`ISymbol.ToDisplay(SymbolDisplayFormat.FullyQualified)`を用いて完全修飾名を取得する方法と、このメソッドが正しく動作しないケースについて紹介しています。

### ファンパレ「夢幻廻楼」技術の裏側 ~ UI表現編~

[ファンパレ「夢幻廻楼」技術の裏側 ~ UI表現編~ - Sumzap Engineering Blog](https://tech.sumzap.co.jp/entry/ui-expression-in-jujutsuphanpara-mugenkairo)

「[呪術廻戦 ファントムパレード](https://jujutsuphanpara.jp/)」の「夢幻廻楼」における階層オブジェクトの選択状態の表現について、その実装からパフォーマンス最適化まで解説しています。

### テスト推進奮闘記 Now In REALITY Tech #118

[テスト推進奮闘記 Now In REALITY Tech #118｜REALITY](https://note.com/reality_eng/n/nb9783c502466)

REALITYにおけるチームにテストを導入するための取り組みについて紹介しています。

### Unity6 で ビルド設定を複数作成できるようになった！

- [Unity6 で ビルド設定を複数作成できるようになった！ #Unity - Qiita](https://qiita.com/OnederAppli/items/cb8b56cac3f322dd30b0)
- [Unity6 の batchmode で BuildProfile を切り替えてビルドする #Unity - Qiita](https://qiita.com/OnederAppli/items/580559a5835a28b65a27)

Unity 6から利用できるビルド設定を複数保持できるBuildProfileの基本的な使い方について紹介しています。

### How to Optimize Work With Collisions in Unity

[How to Optimize Work With Collisions in Unity | HackerNoon](https://hackernoon.com/how-to-optimize-work-with-collisions-in-unity)

コリジョン衝突時に`Collider`コンポーネントを利用したいケースで、コンポーネントをキャッシュして都度`GetComponent`を実行しないことでパフォーマンスを向上させるための設計と実装について紹介しています。

### Recorderで連続してシーンを録画する

[【Unity】Recorderで連続してシーンを録画する #Unity - Qiita](https://qiita.com/GameDevEgg/items/8ae1a0aa69754e2879fe)

Unity Recorderをスクリプト上から操作してシーンを録画する方法について紹介しています。

### PreviewRenderUtilityを使ってエディタ拡張でモデルをプレビューする！

[Unity - PreviewRenderUtilityを使ってエディタ拡張でモデルをプレビューする！ #エディター拡張 - Qiita](https://qiita.com/asiram/items/bdc56be6e1247e5f1b41)

`PreviewRenderUtility`を用いて、エディター拡張上で3Dモデルのプレビューを実装する方法について紹介しています。
