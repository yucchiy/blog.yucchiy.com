---
type: "unity-weekly"
title: "Unity Weekly 222"
description: "2025/05/12週のUnity Weeklyです。Shader Graph in Unity 6.2、Vehicle experimental package、Android XR Pre-Release、RenderGraphなどについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2025-05-12T00:00:01"
---

## Unity Officials

### Shader Graph improvements in Unity 6.2

[Shader Graph improvements in Unity 6.2 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/shader-graph-improvements-in-unity-6-2/1639900)

Unity 6.2におけるShader Graphの改善について紹介するディスカッションです。

[Append Node](https://docs.unity3d.com/Packages/com.unity.shadergraph@17.2/manual/Append-Node.html)やProperty Drawerを属性によって拡張するMaterial Property Attributeのサポート、Variantの削減などを目的としたDynamic Keywordsについて紹介しています。

### Unity Vehicles experimental package now available

[Unity Vehicles experimental package now available - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-vehicles-experimental-package-now-available/1636923)

Unity公式の、ECS向けの車両パッケージの実験版リリースをアナウンスするディスカッションです。

このパッケージをリリースする狙いやパッケージのインストール方法、提供されるサンプルについてそれぞれ説明しています。
ドキュメントは[こちら](https://docs.unity3d.com/Packages/com.unity.vehicles@0.1/manual/index.html)より確認できます。

### Android XR Pre-Release Now Available!

[Android XR Pre-Release Now Available! - Unity Engine - Unity Discussions](https://discussions.unity.com/t/android-xr-pre-release-now-available/1634938)

Android XRのプレリリースをアナウンスするディスカッションです。

このパッケージのインストール方法や推奨するUnityバージョンの紹介、このプレリリースに含まれる主要な機能としてDynamic Refresh RateやHand Mesh with Occulusion、新しいAndroid XRのGraphic Featuresへの対応、
次のUnity 6.2向けのリリースに含まれる予定のVisibility Mesh Occlusionについてそれぞれ紹介しています。


## Articles

### Unity6からRenderGraphを使いこなそう #4

[Unity6からRenderGraphを使いこなそう #4 - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2025/05/07/142406)

SGEコアテクの「Unity6からRenderGraphを使いこなそう」シリーズの最終回です。

本回ではFrameBufferFetchの実装を支えるSubPassとNativeRenderPassについて、
この概要からNativeRenderPassが実行されるまでの流れの説明、登録された描画コマンドを実行するときのSubPassのマージの仕組みについてそれぞれ解説しています。

過去の記事は、下記より確認できます。

- [Unity6からRenderGraphを使いこなそう ー 基本機能編 - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2024/06/04/171757)
- [Unity6 RenderGraphの実装手順解説 - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2024/09/11/105032)
- [Unity6 RenderGraphでのデータ受け渡し手法 - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2024/10/16/183856)
- [Unity6のRenderGraphでのFrameBufferFetch活用法 - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2025/02/21/165851)

### self-hosted runner × Unityでアセットレビューを自動化した話

[self-hosted runner × Unityでアセットレビューを自動化した話 Now in REALITY Tech #137｜REALITY株式会社](https://note.com/reality_eng/n/n1a19d5c050d6)

REALITYの各種アセットのレビューを効率化するために独自で開発したアセットのバリデーションを行うためのエディター拡張や、
そのツールをself-hosted runner経由で実行してアセットに関するPull Requestのレビューを自動で行うジョブについてそれぞれ紹介しています。

### GCが発生するIReadOnlyList<T>等のforeachに警告を出すRoslynAnalyzer

[GCが発生するIReadOnlyList<T>等のforeachに警告を出すRoslynAnalyzer - きゅぶろぐ](https://blog.kyubuns.dev/entry/2025/05/10/214047)

`foreach`を回すときに`IReadOnlyList<T>`などの`GC.Alloc`が発生する型を利用している場合に警告を出すRoslynAnalyzerの実装について紹介しています。

### Rider 2025.1から"Explore LINQ"というLINQの各ステップでデータがどのように変換されているか可視化できるようになった

[【Rider】Rider 2025.1から"Explore LINQ"というLINQの各ステップでデータがどのように変換されているか可視化できるようになった - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2025/05/08/120000)

Rider 2025.1から利用できるようなった、LINQの各ステップの実行結果を可視化する「Explore LINQ」について、その機能概要からインストール方法、使い方を紹介しています。

### Unity 用 Meta Quest 位置合わせライブラリ (QR / Immersal) の仕組み

[Unity 用 Meta Quest 位置合わせライブラリ (QR / Immersal) の仕組み](https://zenn.dev/hololab/articles/quest-camera-tools)

Passthrough Camera APIから受け取ったカメラ画像から、QRコードまたはImmersal SDKを用いて位置合わせを行う実装について、
ホロラボが公開する[QuestCameraTools-Unity](https://github.com/HoloLabInc/QuestCameraTools-Unity)をもとに紹介しています。

QRによる位置合わせでは、実際のアルゴリズムも交えつつ解説しています。

### Meta Quest 3のPassthrough APIの使い方

[Meta Quest 3のPassthrough APIの使い方 #Unity - Qiita](https://qiita.com/matchyy/items/18319bccb23d6005a67e)

Meta Quest3から利用できるようになったPassthrough APIを使うためのミニマムなサンプルコードを紹介しています。

### InputSystemでエラーが表示される場合の対処法

[【Unity】InputSystemでエラーが表示される場合の対処法 - おもちゃラボ](https://nn-hokuson.hatenablog.com/entry/2025/05/07/182909)

Unity 6.1以降のプロジェクトにてデフォルトで新しいInputSystemを利用する設定になったことにより`InvalidOperationException`が発生する場合の対処として、
Player Settingsより新旧両方のInputSystemを有効にしなおす方法を紹介しています。

### Unity 6.1でColorにプリセット色がたくさん追加された

[Unity 6.1でColorにプリセット色がたくさん追加された #Rider - Qiita](https://qiita.com/RyotaMurohoshi/items/a7fd4e342846165b79c6)

Unity 6.1で追加されたColorプリセットについて紹介しています。