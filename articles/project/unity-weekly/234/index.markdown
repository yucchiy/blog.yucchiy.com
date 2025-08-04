---
type: "unity-weekly"
title: "Unity Weekly 234"
description: "2025/08/04週のUnity Weeklyです。エディターワークフローに関する電子書籍、Behaviour Package 1.0.12、mathematics & Animation Jobなどについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2025-08-04T00:00:01"
---

### Unity 6におけるエディターワークフロー、デバッグ、2Dのベストプラクティスに関するヒント

[Unity 6におけるエディターワークフロー、デバッグ、2Dのベストプラクティスに関するヒント | Unity](https://unity.com/ja/blog/editor-workflows-debugging-2d-best-practices-unity-6)

通常の作業やデバッグ、2Dに関するエディター操作に関してのベストプラクティスをまとめた電子書籍が公開されています。

### Behaviour Package 1.0.12 Released!

[Behaviour Package 1.0.12 Released! - Unity Engine - Unity Discussions](https://discussions.unity.com/t/behaviour-package-1-0-12-released/1672207)

Behaviour Treeを実装した標準パッケージ「Behaviour Package」のv1.0.12がリリースされたことがアナウンスされています。

このバージョンでは、Dark/Lightテーマのサポートや、Graph Assetの生成時にランタイムアセットを生成する対応が行われました。

### Breaking down the completely destructible world of Deliver At All Costs

世界のあらゆるものを破壊できるあアクションゲーム「[Deliver At All Costs](https://store.steampowered.com/app/1880610/Deliver_At_All_Costs/)」について、60fpsを維持してそれを実現するためのワークフローやテクニックについて概要を紹介しています。


## Articles

### mathematicsとAnimation C# Jobsを活用した揺れ物の実装調査

[【Unity】mathematicsとAnimation C# Jobsを活用した揺れ物の実装調査 #animation - Qiita](https://qiita.com/nozoxa/items/ffff1b1218f785fbcf9f)

位置ベースによる揺れものの物理挙動の実装について、mathematicsパッケージとAnimation C# Jobsを用いて、SIMDとマルチスレッドの最適化を意識した実装方法について解説しています。

### シェーダーでアニメーションカーブを使う

[シェーダーでアニメーションカーブを使う - Mirrativ Tech Blog](https://tech.mirrativ.stream/entry/2025/07/31/100000)

アニメーションカーブで設定された値をエディター拡張でテクスチャとしてベイクし、そのテクスチャ経由でシェーダーでアニメーションカーブを利用する方法について紹介しています。

### Unity IAPのGoogle Play Billing Libraryサポート状況について（7まで。）

[Unity IAPのGoogle Play Billing Libraryサポート状況について（7まで。） - きゅぶろぐ](https://blog.kyubuns.dev/entry/2025/07/28/114003)

Unity IAPの各バージョンが、Google Play Billing Libraryのどのバージョンをサポートしているのかについてまとめています。

### Unity6で使えるShaderWarmupについて

[Unity6で使えるShaderWarmupについて – 株式会社ロジカルビート](https://logicalbeat.jp/blog/21074/)

Unity6から利用できるシェーダーのWarmUpのGraphicsStateCollectionについて、この機能が事前に必要とする `.graphicsstate` を収集する方法を紹介しています。

### Unity6で追加されたシェーダグラフヒートマップ機能でノードごとの「処理の重さ」を可視化する

[【Unity】Unity6で追加されたシェーダグラフヒートマップ機能でノードごとの「処理の重さ」を可視化する - LIGHT11](https://light11.hatenadiary.com/entry/2025/07/30/185824)

Unity6から利用できる、Shader Graph 上で各ノードごとの処理負荷を可視化するHeatmap Color Modeについて、その基本的な使い方を紹介しています。

### Flutter Web x Unity as a LibraryでPoCアプリ作った話

[Flutter Web x Unity as a LibraryでPoCアプリ作った話](https://zenn.dev/mixi/articles/ad87d351e5c45b)

Flutter WebからWebビルド版のUaaLを利用する方法から、双方に命令を送り合う方法についてそれぞれ解説しています。

### Photon QuantumとMultiplayer Play Modeを組み合わせると、Virtual Playerに好きなメッセージを送れて便利

[Photon QuantumとMultiplayer Play Modeを組み合わせると、Virtual Playerに好きなメッセージを送れて便利 - きゅぶろぐ](https://blog.kyubuns.dev/entry/2025/08/02/191105)

Photon Quantumが用意している、Unity標準のMultiplayer Play ModeのVirtual Playerとの通信をサポートする機能について紹介しています。

### Editor拡張の設定保存＆メニューバーにチェック表示

[【Unity】Editor拡張の設定保存＆メニューバーにチェック表示](https://zenn.dev/lilytechlab/articles/f621308187d992)

ユーザーごとにエディター上で設定を保持するための `EditorUserSettings.(Get|Set)ConfigValue` や、メニュー上でOn/Off状態を可視化する `Menu.SetChecked` などのAPIを紹介しています。

### ゲーム実行中に動的にTilemapへTileを配置する

[ゲーム実行中に動的にTilemapへTileを配置する #Unity - Qiita](https://qiita.com/RyotaMurohoshi/items/b803f600aa66280c289e)

ランタイムでTilemapに任意のTileを設定するAPIについて紹介しています。