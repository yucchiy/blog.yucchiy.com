---
type: unity-weekly
title: Unity Weekly 208
description: >-
  2025/01/27週のUnity Weeklyです。Unity 6 & 6.1 アップデート、CA.unity #9講演動画公開、Unity
  ECSなどについて取り上げています。
pubDatetime: 2025-01-26T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

###  Unity Engine support for 16 KB memory page sizes (Android 15+)

[[INFO] Unity Engine support for 16 KB memory page sizes (Android 15+) - Unity Engine - Unity Discussions](https://discussions.unity.com/t/info-unity-engine-support-for-16-kb-memory-page-sizes-android-15/1589588)

[Android 15からサポートされるOSの 16KBページサイズ対応](https://developer.android.com/guide/practices/page-sizes) における、Unityエンジン上でのサポート状況についてまとめられています。

この対応が必要な理由やUnity上での対応方法や確認方法などが紹介されています。

また、Unityの各バージョンでの対応状況についてもまとめられています。既存のLTSでは、下記バージョンにて対応が済んでいるとのことです。

- [Unity 2022.3.56f1](https://unity.com/ja/releases/editor/whats-new/2022.3.56)
- [Unity 2021.3.48f1](https://unity.com/ja/releases/editor/whats-new/2021.3.48)

Unity 6では6.1にて対応が予定されており、この対応が入ったバージョンが2月上旬にリリースされるとのことです。

### New Build Output Compression Level Settings - Unity Services

[New Build Output Compression Level Settings - Unity Services - Unity Discussions](https://discussions.unity.com/t/new-build-output-compression-level-settings/1589244)

Unity Build Automation にて、ビルド時の出力ファイルに対する圧縮設定のレベルが `6` から `1` に変更されたことがアナウンスされています。

### Public access to WebGPU (experimental) in Unity 6.1

[Public access to WebGPU (experimental) in Unity 6.1 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/public-access-to-webgpu-experimental-in-unity-6-1/1572462)

Unity 6.1においての実験版のWebGPUの機能へのアクセス方法や、現状および今後のプラットフォームサポート、現状フォーカスしている対応について紹介しています。

また、この改善をテストするために Stratton Gamesと共同開発した「[Project Pristamic](https://www.youtube.com/watch?v=3bu4WZUCGYc&t=1544s)」についても、合わせて紹介しています。

### Competitive Action Multiplayer Template now released!

[Competitive Action Multiplayer Template now released! [Netcode for Entities] - Unity Engine - Unity Discussions](https://discussions.unity.com/t/competitive-action-multiplayer-template-now-released-netcode-for-entities/1573137)

新しい [Competitive Action Multiplayer](https://docs.unity3d.com/Packages/com.unity.template.multiplayer-netcode-for-entities@1.0/manual/index.html) のテンプレートライブラリがリリースされています。

このパッケージでは、[Netcode for Entities](https://docs.unity3d.com/Packages/com.unity.netcode@1.4/manual/index.html) や [Unity Multiplayer SDK](https://docs.unity3d.com/Packages/com.unity.services.multiplayer@0.0/manual/index.html) パッケージを活用したファーストパーソンな対戦型のマルチプレイヤーゲームの構築例を確認できます。

### Behavior Package 1.0.7 Released! Changelog inside

[Behavior Package 1.0.7 Released! Changelog inside - Unity Engine - Unity Discussions](https://discussions.unity.com/t/behavior-package-1-0-7-released-changelog-inside/1573165)

[Behaviour Packages](https://docs.unity3d.com/Packages/com.unity.behavior@1.0/manual/index.html) の 1.0.7 がリリースされています。このバージョンでの変更点を紹介しています。

### Unity 6: VFX Graph Learning Templates

[Unity 6: VFX Graph Learning Templates - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-6-vfx-graph-learning-templates/1571327)

Unity 6のVFX Graphのラーニングテンプレートの主要な項目や、このテンプレートの導入方法などについて紹介しています。

### Unity 6: Collision Improvements in VFX Graph

[Unity 6: Collision Improvements in VFX Graph - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-6-collision-improvements-in-vfx-graph/1557951)

Unity 6における、VFX Graphのコリジョンに関する処理の改善点を紹介しています。

### visionOS Release Notes 2.1.2 and 1.3.9

[visionOS Release Notes 2.1.2 and 1.3.9 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/visionos-release-notes-2-1-2-and-1-3-9/1564178)

PolySpatial 2.1.2および1.3.9の主要なアップデートやリリースノートを紹介しています。

### ドラッグ＆ドロップだけで簡単に作れる！ Modify Roll A Ballを使ってレベルデザインをしてみよう！

[ドラッグ＆ドロップだけで簡単に作れる！ Modify Roll A Ballを使ってレベルデザインをしてみよう！ | Unity Learning Materials](https://learning.unity3d.jp/10647/)

ノーコードでRoll A Ballのレベルデザインが行える [Modify Roll A Ball](https://github.com/yoh7686/ModifyRollABall) を用いて、実際にレベルデザインを行う方法を紹介しています。

### Fixes in Adaptive Performance 5.1.1 - Adaptive Performance Package 

[Adaptive Performance Package - Unity Engine - Unity Discussions](https://discussions.unity.com/t/adaptive-performance-package/737426/156)

[Adaptive Performance Packageの5.1.1](https://docs.unity3d.com/Packages/com.unity.adaptiveperformance@5.0/manual/index.html) がリリースされました。このアップデートで修正された不具合について紹介しています。

現行のAdaptive Performanceはバージョン6系ですが、このバージョンはUnity 2021.2以降で動作するバージョンです。

### Cinematics & Virtual Production package deprecation in Unity 6.1 

[Cinematics & Virtual Production package deprecation in Unity 6.1 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/cinematics-virtual-production-package-deprecation-in-unity-6-1/1553433)

Unity 6.1 でCinematics & VIrtual Production packagesが非推奨パッケージとなることが決定されました。

この決定によって廃止されるパッケージ（または廃止されないパッケージ）と、パッケージ廃止の理由について述べています。

### PVRTC format and legacy ETC compressor deprecation in Unity 6.1

[PVRTC format and legacy ETC compressor deprecation in Unity 6.1 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/pvrtc-format-and-legacy-etc-compressor-deprecation-in-unity-6-1/1570745)

Unity 6から、iOSプレイヤーの最小サポートバージョンが13.0以上に引き上げられたり、OpenGLES 2.0のサポートが削除されたことに伴って、PVRTC フォーマットと オプトインのLegacy ETC圧縮がUnity 6.1から非推奨となることが決定されました。

## Slides

### CA.Unity #9

2025/01/08 に行われた CA.unity #9 の講演内容のアーカイブが [こちらで](https://www.youtube.com/playlist?list=PLBsO-IAhmMUW-1FBTxUhpxvjEuSjAfwHY) 公開されています。

- [Unity6世代のアップデートをサラッとまとめ - YouTube](https://www.youtube.com/watch?v=sbg608DtEdM&list=PLBsO-IAhmMUW-1FBTxUhpxvjEuSjAfwHY&index=5)
- [Unity6の新機能 STPについての話 - YouTube](https://www.youtube.com/watch?v=pC__bXKeZt8&list=PLBsO-IAhmMUW-1FBTxUhpxvjEuSjAfwHY&index=3)
- [Unity 6シェーダーWarmupガイド - YouTube](https://www.youtube.com/watch?v=UmZASJ69TAc&list=PLBsO-IAhmMUW-1FBTxUhpxvjEuSjAfwHY&index=2)
- [Unity6 の Android周辺のアップデートについて - YouTube](https://www.youtube.com/watch?v=B2OQB89B4iM&list=PLBsO-IAhmMUW-1FBTxUhpxvjEuSjAfwHY&index=1)

## Articles

### Unity ECS v1.3.2を使ってゲームを作ってみました (2)―Component編

[[Unity]Unity ECS v1.3.2を使ってゲームを作ってみました (2)―Component編 │ Aiming 開発者ブログ](https://developer.aiming-inc.com/unity/unity-ecs-sample-game-2-component/)

Unity ECS を用いたゲーム開発を簡単な事例をもとに紹介する連載記事で、この記事ではコンポーネントの記述方法について紹介しています。

[前回の記事](https://developer.aiming-inc.com/unity/unity-ecs-sample-game-1-introduction/) では、おもにUnity ECSのメリットや最適化のアプローチについて触れられていました。

### Unit Testing for Unity Developers

[Unit Testing for Unity Developers - DEV Community](https://dev.to/virtualmaker/unit-testing-for-unity-developers-52lp)

Unityにおける単体テストの実践方法や、単体テストと結合テストやE2Eテストの違いの説明、GitHub ActionsによるCIでの自動テストについてそれぞれ解説しています。

### Unity Addressable Asset System を使いこなす

[Unity Addressable Asset System を使いこなす](https://zenn.dev/allways/articles/f172da98410e2f)

Addressablesによるアセット配信やアセットバンドルパッキングに関する粒度や、アセットロードと解放の設計、AddressablesのエディターAPIを用いた自動化などのプラクティスについて解説しています。

### Unity Shader GraphでNamed Redirectを作ってみた

[Unity Shader GraphでNamed Redirectを作ってみた](https://zenn.dev/matrixsoftware/articles/bdd465cc9f906d)

Unreal EngineのMaterial EditorにあるNamed Reroute を 参考に、Shader Graph上でノードを経由せずに名前によって入出力をつなぐ「Named Redirect」機能を実装する方法について紹介しています。

### Awaitableの二度漬けには超ご用心

[【Unity】Awaitableの二度漬けには超ご用心](https://zenn.dev/ruccho/articles/c0b657c9e17b7e)

Unity 6から導入された `Awaitable` について、二度漬け（同じ `Awaitable` を複数回 `await` する行為）が禁止されている理由についての紹介と、 `ValueTask` や `UniTask` との二度漬け時の挙動の違いについて解説しています。

### Maze 4.0.0

[Maze 4.0.0](https://catlikecoding.com/unity/maze/4-0-0/)

Catlike Coding「[Maze](https://catlikecoding.com/unity/maze/)」において、本チュートリアルのUIをUI Toolkitに置き換える実装について解説しています。

### Addressablesで別のプロジェクトへリソースを転送する

[【Unity】Addressablesで別のプロジェクトへリソースを転送する](https://zenn.dev/n_hidano/articles/c59e4aaaeb6c2b)

Addressablesで `.bundle` としてビルドしたアセットを、別プロジェクトでよみこむ方法について紹介しています。

### 処理フローや依存関係を整えるために役立つデザインパターン

[処理フローや依存関係を整えるために役立つデザインパターン(Unity)](https://zenn.dev/qemel/articles/edc0d0b9b752aa)

処理フローや依存関係に関するデザインパターンとして DIP（Dependency Inversion Principle）・Observer・Eventパターンを紹介しています。

### ビルド時にシーンに対して処理を行える IProcessSceneWithReportのOnProcessScene

[ビルド時にシーンに対して処理を行える IProcessSceneWithReportのOnProcessScene【Unity】【エディタ拡張】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/IProcessSceneWithReport_OnProcessScene)

ビルド時にシーンを処理する際に呼び出される `IProcessSceneWithReport` の基本的な使い方を紹介しています。

## Repositories

### CristianQiu/Unity-URP-Outline

[CristianQiu/Unity-URP-Outline: A Unity package that includes a outline render feature for Unity 6 URP and rendergraph. Integrated with URP volume system. Perfect for fast prototyping.](https://github.com/CristianQiu/Unity-URP-Outline)

Unity 6のURPおよびRenderGraphに対応したアウトライン実装。

### Noise Shader v3.0.0

[keijiro/NoiseShader: Noise shader library for Unity](https://github.com/keijiro/NoiseShader)

v3.0.0がリリースされ、1D gradient noise function の実装の追加や、ノイズ関数の正規化係数が更新されました。

### Expect

[AnnulusGames/Expect: Expression-based Assertion Library for .NET](https://github.com/AnnulusGames/Expect)

ラムダ式を活用した、.NET向けのアサーションライブラリ。
