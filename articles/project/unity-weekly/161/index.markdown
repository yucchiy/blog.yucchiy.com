---
type: "unity-weekly"
title: "Unity Weekly 161"
description: "2024/02/26週のUnity Weeklyです。DOTS Bootcamp、Unity UIのShader Graph対応などについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-02-26T00:00:01"

---

## Unity Officials

### Get ready for our data-oriented design bootcamp with these resources

- [Get ready for our data-oriented design bootcamp with these resources | Unity Blog](https://blog.unity.com/engine-platform/dots-bootcamp-resources)
- [Official - DOTS Bootcamp - Unity Forum](https://forum.unity.com/threads/dots-bootcamp.1549733/)

2024年の3月5日から4日間に、Unity公式のDOTS　Bootcampが開催されます。

この期間中、毎日1時間のセッション（45分の録画セッションと15分のライブQ&A）が行われ、DOTSの基礎からC#ジョブシステム・Burstコンパイラ・ECSを自分のプロジェクトで活用する方法、DOTSのパフォーマンス最適化などの知見が共有される予定です。

レジストレーションは[こちらのリンク](https://unity.com/ja/campaign/data-oriented-design-bootcamp)から行えます。

ブログではDOTSに関する各種学習教材やテンプレートなどが紹介されています。

### Unity UI が Shader Graph に対応！ UI 用シェーダーを作ってみよう！

[Unity UI が Shader Graph に対応！ UI 用シェーダーを作ってみよう！ - YouTube](https://www.youtube.com/watch?v=PV195gBqxKA)

Unity 2023.2から利用できるようになったShader Graph上でのUI用のシェーダーの記述について、サンプル紹介から基本的なUIシェーダーの作り方、この機能の制約や注意点について、それぞれ解説しています。

## Articles

### SwiftパッケージをビルドしてUnityで扱う

[SwiftパッケージをビルドしてUnityで扱う - e.blog](https://edom18.hateblo.jp/entry/2024/02/23/105651)

SwiftパッケージをmacOS・iOS向けにそれぞれビルドし、Unity上で扱う方法について紹介しています。

また、SwiftとC#間での基本的なデータの扱い方やコールバックの呼び出し方や注意点、Swiftパッケージ間の依存関係の扱い方などについても言及しています。

### アニメ風の演出効果をShader Graphで実現する

[【Unity】アニメ風の演出効果をShader Graphで実現する #Unity - Qiita](https://qiita.com/togucchi/items/f89e99b4048de825b2ec)

手書きアニメでよく見られる、画面に一瞬激しい効果がかかるような演出を、Shader Graphと `FullscreenPassRendererFeature` を利用し実現する方法について解説しています。

### Unity PolySpatialを使ってハンドトラッキングする

[Unity PolySpatialを使ってハンドトラッキングする](https://zenn.dev/meson/articles/polyspatial-hand-tracking)

Unity公式のvisionOSサポートパッケージ「Unity PolySpatial」を用いたユーザーインタラクションを行う方法として、uGUIで配置したUIをこのパッケージで扱う方法や `VisionOSHoverEffect` コンポーネントを用いた視線上のオブジェクトをタッチ操作で取得する方法、ハンドトラッキングで得られる情報を用いてオブジェクトを操作する方法をそれぞれ解説しています。

### VisualScripting奮闘記(駆)

[VisualScripting奮闘記(駆)｜ntny](https://note.com/ntny/n/n1469394a1aba?sub_rt=share_pb)

基本的なVisual Scriptingの使い方から、ゲームで扱う上で直面したさまざまな問題とその解決方法についてそれぞれ解説しています。

### 軽くて綺麗なラディアルブラーを作ろう！

[【Unity URP】軽くて綺麗なラディアルブラーを作ろう！｜G2 Studios株式会社](https://note.g2-studios.net/n/n7b7a0c068a1c)

ディザリングの考え方を用いた軽量なラディアルブラーの実装方法について解説しています。

### UnityWebRequestの詳細なエラー内容で処理を分岐する方法

[【Unity】UnityWebRequestの詳細なエラー内容で処理を分岐する方法 #Unity - Qiita](https://qiita.com/su10/items/538e39a2a2cd84dc032b)

UnityWebRequestのエラー種類からエラーメッセージを生成する内部コードをリフレクション経由で呼び出し、`UnityWebRequestError.error` の文字列が、内部でどのようなエラーの扱いなのかを解析し、その文字列の対応表を紹介しています。

### UnityのRenderGraphSystem(URP17)に対応した一番シンプルなCustom RPを作ってみる

[UnityのRenderGraphSystem(URP17)に対応した一番シンプルなCustom RPを作ってみる](https://zenn.dev/sansyoku_gyokai/articles/bdce53aa0f2f5a)

URP 17のRenderGraphSystemの対応方法を、簡単なScriptableRenderPassの実装を題材に紹介しています。

### Unity公式パッケージ「Code Coverage」を利用してTest Frameworkのコードカバレッジを計測する

[【Unity】Unity公式パッケージ「Code Coverage」を利用してTest Frameworkのコードカバレッジを計測する - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2024/02/23/120000)

Unity公式のテストカバレッジを計測するパッケージ「[Code Coverage](https://docs.unity3d.com/Packages/com.unity.testtools.codecoverage@1.2/manual/index.html)」の、導入方法から基本的な使い方を紹介しています。

### UnityのURPを解説した無料の公式電子書籍がアップデート。デカールや「Fullscreen Shader Graph」などのセクションを追加

[UnityのURPを解説した無料の公式電子書籍がアップデート。デカールや「Fullscreen Shader Graph」などのセクションを追加｜ゲームメーカーズ](https://gamemakers.jp/article/2024_02_23_61426/)

Unity公式のURPに関する電子書籍「[Introduction to the Universal Render Pipeline for advanced Unity creators](https://unity.com/ja/resources/introduction-universal-render-pipeline-for-advanced-unity-creators-2022lts)」の2022 LTS版の公開と、そのアップデート内容について取り上げています。

### 「Steam Audio」がオープンソース化。UnityやUEに統合できる、ゲームやVRアプリ用の空間オーディオツール

[「Steam Audio」がオープンソース化。UnityやUEに統合できる、ゲームやVRアプリ用の空間オーディオツール｜ゲームメーカーズ](https://gamemakers.jp/article/2024_02_22_61267/)

Vulve社の提供するオーディオソリューション「[Steam Audio](https://github.com/ValveSoftware/steam-audio/releases)」のv4.5.2がリリースされたことに伴い、このライブラリがオープンソースで公開されました。このライブラリはUnity向けのSDKも公開されており、Unityでも利用可能です。

## Repositories

### EnhancedOnScreenStick

[AnnulusGames/EnhancedOnScreenStick: Provides an advanced virtual joystick compatible with Unity Input System/uGUI.](https://github.com/AnnulusGames/EnhancedOnScreenStick)

Unityの（新しい）Input System互換の仮想ジョイスティックを提供するライブラリ。

### Alchemy v2.0

[AnnulusGames/Alchemy: Provides a rich set of editor extensions and serialization extensions for Unity.](https://github.com/AnnulusGames/Alchemy)

Unty向けのエディター拡張ライブラリ「Alchemy v2.0」がリリースされました。

EditorWindow拡張、Hierarchy拡張などの新機能が追加された他、Inspector拡張用として新たな属性の追加されました。

[mewlist/Doinject: Asynchronous DIContainer for Unity](https://github.com/mewlist/Doinject)

Unity向け非同期DIフレームワーク「Doinject」のv1.0.0がリリースされました。
Unity 2022 LTS以降に対応し、非同期が絡む生成処理やAddressablesの連携などの機能を備えています。