---
type: unity-weekly
title: Unity Weekly 131
description: 2023/07/24週のUnity Weeklyです。VisionOS、SpeedTree 9.5、SIGGRAPH 2023などについて取り上げています。
pubDatetime: 2023-07-23T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### What you need to know about Unity PolySpatial and visionOS

[What you need to know about Unity PolySpatial and visionOS | Unity Blog](https://blog.unity.com/engine-platform/unity-support-for-visionos)

UnityのVisionOS対応のベータプログラムが07/19から開始されました。この記事ではWWDC2023のUnityでVisionOS向けアプリを作成するためのセッションと、UnityのVisionOS対応によっての制作できるアプリについてそれぞれ紹介しています。

### SpeedTree 9.5: Unleash creative control and realism with procedural detailing

[SpeedTree 9.5: Unleash creative control and realism with procedural detailing | Unity Blog](https://blog.unity.com/engine-platform/speedtree-9-5)

SpeedTree 9.5のリリースが発表されました。この記事では、SpeedTree 9.5で利用できる新しい葉の操作機能や、苔・雪・小枝などのプロシージャルなディティールをサーフェイス上に配置するProjector、新しいハイトマップなどについてそれぞれ紹介しています。

### Technical art behind the raging color of I See Red

[Technical art behind the raging color of I See Red | Unity Blog](https://blog.unity.com/games/technical-art-behind-the-look-of-i-see-red)

[Whiteboard Games](https://whiteboard.games/en/)がリリースした「[I See Red](https://iseeredgame.com/en/)」の「血の表現」について、VFXからヒットエフェクト、幅広いプレイヤーに遊んでもらうための色盲モードの実装、ゲーム内でのカラー調整とロードするテクスチャリソースの最適化のためのSplatmap Shaderについて、それぞれ解説しています。

### SIGGRAPH 2023 - Unity Forum

* [Official - SIGGRAPH 2023 - Unity Forum](https://forum.unity.com/threads/siggraph-2023.1462586/)
* [Unity Artistry Tools at SIGGRAPH 2023 | Unity](https://unity.com/events/siggraph-2023)

UnityがSIGGRAPH 2023にてキーノートとセッションに登壇します。

Unity Wētā Toolsのツールの一般公開やいくつかの作品の紹介や、Ziva Face Trainer、Ziva VFX、SpeedTree 9.5、SyncSketchなど、Unity Wētā Toolsの最新技術を体験できるとのことです。

## Articles

### UnityでVisionOSアプリを作成する

[UnityでVisionOSアプリを作成する](https://zenn.dev/tkada/articles/e8bc9e9dbe88bc)

UnityでVisionOSアプリをビルドし、Xcodeのシミュレーション上で再生する方法について紹介しています。

### Unityチームでの輪読会の取り組み紹介とUniRx/UniTaskクイズ

[Unityチームでの輪読会の取り組み紹介とUniRx/UniTaskクイズ - Mirrativ Tech Blog](https://tech.mirrativ.stream/entry/2023/07/19/111524?utm_source=feed)

UniRxとUniTaskを扱う上で知っておくとよい仕様や挙動についてクイズ形式でまとめています。

### Creating a Lava Lamp Shader With Unity

* [Lava Lamp Unity Shader Graph | Tutorial - YouTube](https://www.youtube.com/watch?v=HmICrwj2Exo&t=45s)
* [Tutorial: Creating a Lava Lamp Shader With Unity](https://80.lv/articles/tutorial-creating-a-lava-lamp-shader-with-unity/)

URPとShaderGraphを用いたシンプルで費用対効果の高い流体シミュレーションのテクニックと、これを用いた溶岩のランプシェーダーのセットアップについて紹介しています。

### Make a fully functional calculator in Unity not only for VR

* [Make a fully functional calculator in Unity not only for VR, Part I](https://blog.gamedev.tv/make-a-fully-functional-calculator-in-unity-not-only-for-vr-part-i/)
* [Make a fully functional calculator in Unity not only for VR, Part II](https://blog.gamedev.tv/make-a-fully-functional-calculator-in-unity-not-only-for-vr-part-ii/)
* [Make a fully functional calculator in Unity not only for VR, Part III](https://blog.gamedev.tv/make-a-fully-functional-calculator-in-unity-not-only-for-vr-part-iii/)

VRアプリ上で電卓を制作する方法について、電卓を実装するための構文木による表現からその実装方法、VRアプリとして電卓を制作する方法についてそれぞれ解説しています。

### Exploring Unity DOTS and ECS: Is it a Game Changer?

[Exploring Unity DOTS and ECS: Is it a Game Changer? | HackerNoon](https://hackernoon.com/exploring-unity-dots-and-ecs-is-it-a-game-changer?source=rss)

ECS（Entity Component System）とはなにかや利用するメリット、Job Systemを用いた実装と通常の実装におけるパフォーマンスを簡単なライフゲーム実装によって比較しています。

### Input Systemの入力値の型をチェックする 

[【Unity】Input Systemの入力値の型をチェックする | ねこじゃらシティ](https://nekojara.city/unity-input-system-check-type)

Input Systemで、 `InputAction.CallbackContext` や `InputAction.ReadValue` から得られる入力値の型をチェックする方法と、型のチェックから実際の値の取得を行う拡張メソッドの実装例について紹介しています。

### コースティクスの連番画像を出力する

[【Substance Designer + Python】コースティクスの連番画像を出力する](https://zenn.dev/r_ngtm/articles/substance-water-flipbook)

Substance DesignerとPythonを用いて水中のコースティックスを連番画像として出力する方法と、Unity公式が配布するVFXToolboxのImage Sequencerを用いて、連番画像をテクスチャシートとしてアニメーション再生する方法についてそれぞれ解説しています。

### こんなときに使うと便利！Unityの「プレハブ」機能を活用した作業効率化事例集

[こんなときに使うと便利！Unityの「プレハブ」機能を活用した作業効率化事例集 - Cluster Creators Guide](https://creator.cluster.mu/2023/07/21/prefab-casestudy/)

プレハブ機能を活用することで、作業を効率化できる事例についてまとめています。

### 業務で行うUnityProjectのベーシックな知見をまとめてみました

[【Unity】業務で行うUnityProjectのベーシックな知見をまとめてみました – 株式会社ロジカルビート](https://logicalbeat.jp/blog/15424/)

Unityを扱う際に知っておくと良い知見を、Unityの基礎からC#スクリプティング、パフォーマンス対策の観点でまとめています。

### 振り子を作る 【HingeJoint + LineRenderer】

[【Unity】 振り子を作る 【HingeJoint + LineRenderer】 - Raspberlyのブログ](https://raspberly.hateblo.jp/entry/Unity_Furiko)

HingeJointとLineRendererを用いて、ノーコードで振り子を表現するする方法について紹介しています。

### ADX for Unityでインタラクティブミュージック

[ADX for Unityでインタラクティブミュージック（ブロック再生編） - Qiita](https://qiita.com/nimushiki/items/0d8ae6a7c54c34097d00)

ADX for Unityを用いて、待機しているエリアによって再生するBGMのブロック（AメロやBメロ、サビなどの単位）をシームレスに遷移するような実装について解説しています。

### Debug.Logをゲーム画面内に表示する方法

[【Unity】Debug.Logをゲーム画面内に表示する方法(ビルド時にもログを確認できる!)](https://zenn.dev/daichi_gamedev/articles/unity-debuglog)

`Application.logMessageReceived` を用いて `Debug.Log` に出力する文字列をハンドリングし、ゲーム画面内に表示する方法を紹介しています。
