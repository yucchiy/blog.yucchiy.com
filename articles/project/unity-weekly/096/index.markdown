---
type: "unity-weekly"
title: "Unity Weekly 096"
description: "2022/11/21週のUnity Weeklyです。新しいRunner Game テンプレート、Cloud Diagnostics Advanced、Game Focusなどについて取り上げました。"
tags: ["Unity Weekly","Unity"]
date: "2022-11-20T15:00:00"

---

## Unity Officials

### 新しいモバイル向け Runner Game テンプレートを使ったラピッドプロトタイピング

[新しいモバイル向け Runner Game テンプレートを使ったラピッドプロトタイピング | Unity Blog](https://blog.unity.com/ja/games/rapid-prototyping-with-new-mobile-runner-game-template)

モバイル向けに公開された新しい Runner Game テンプレートについて、その制作意図や Runner Game テンプレートが時間を節約しつつゲーム開発に集中するための仕組みを６つ解説しています。

### Games Focus：マルチプレイヤーネットワークで接続型ゲームを作り、運用する

[Games Focus：マルチプレイヤーネットワークで接続型ゲームを作り、運用する | Unity Blog](https://blog.unity.com/ja/technology/games-focus-creating-and-operating-connected-games-with-multiplayer-networking)

[Unity Multiplayer Network](https://docs-multiplayer.unity3d.com/)が提供する現状のサービスや機能、今後提供予定の機能などについて紹介しています。

### Unity と Sauce Labs が Cloud Diagnostics Advanced をローンチ

[Unity と Sauce Labs が Cloud Diagnostics Advanced をローンチ | Unity Blog](https://blog.unity.com/ja/technology/unity-sauce-labs-launch-cloud-diagnostics-advanced)

UnityとBacktraceを開発するSauce Labsが提携して開発したクラッシュ・エラー報告ツール Cloud Diagnostic Advanced についてその機能やすでにUnityが提供するCloud Diagnosticsとの違いについて紹介しています。

### Games Focus：チームを強化し、部門を超えたコラボレーションを実現する

[Games Focus：チームを強化し、部門を超えたコラボレーションを実現する | Unity Blog](https://blog.unity.com/ja/technology/games-focus-empowering-teams-for-cross-functional-collaboration)

Unityの提供するグラフベースのツール（Visual ScriptingやShader Graph）やDevOpsツール（Plastic SCMやCloud Build）の現状と、今後リリースする予定の機能などについて紹介しています。

## Articles

### UniTaskでマルチスレッド処理と例外処理

[UniTaskでマルチスレッド処理と例外処理 - Qiita](https://qiita.com/toRisouP/items/0c94002a092fcb29de22)

UniTaskでスレッドプールを使ってマルチスレッド処理を書く方法と、例外が発生しても確実にその後の処理をメインスレッドに戻す例外処理について紹介しています。

### Compute Shaderについて勉強してみた

[【Unity】Compute Shaderについて勉強してみた – 株式会社ロジカルビート](https://logicalbeat.jp/blog/11021/)

ライフゲームをCompute Shaderで実装する方法と、CPU処理（C#実装）とGPU処理（Compute Shader実装）でのパフォーマンスについて比較しています。

### Radeonで描画が乱れないシェーダーの書き方

[【Unity】Radeonで描画が乱れないシェーダーの書き方 - Qiita](https://qiita.com/lilxyzw/items/4721cd68e813dd4d48a7)

Radeon（AMD）とNVIDIAのGPUでの挙動の違いや、Radeon上で描画を崩れにくくするためのシェーダーを書くためのtips、四則演算や組み込み関数の実行結果について紹介しています。

### VFX Graphで雨を降らせる

[【Unity】VFX Graphで雨を降らせる - Qiita](https://qiita.com/Kudo004/items/cb17afd7d16b20707abb)

VFX Graphを用いて雨が降っているような効果を実装する方法について、それぞれのノードでの処理を解説しています。

### Unity Barracudaを用いたIn-Game Style Transferの導入メモとパフォーマンス調査

[Unity Barracudaを用いたIn-Game Style Transferの導入メモとパフォーマンス調査](https://zenn.dev/nahuel/articles/fd38bd54b43a50)

Unity Barracudaを用いて画面全体にIn-Game Style Transferによる画風変換の効果を適用するための方法とCPU・GPUのパフォーマンスについて紹介しています。

### 高速・高画質で出力する魔改造UnityRecorderと動画出力のベンチマーク

[高速・高画質で出力する魔改造UnityRecorderと動画出力のベンチマーク - Qiita](https://qiita.com/kotauchisunsun/items/2c8f0e0ebe543d7f2317)

UnityRecorderの画像出力のフォーマットを調整することで高速かつ高画質な動画を出力するための方法や、この改良を行う際に検討した項目や各画像のフォーマットの性質について紹介しています。

### **Unityでボクセルデータからメッシュを生成する方法(Marching Cubes)**

[Unityでボクセルデータからメッシュを生成する方法(Marching Cubes) - Qiita](https://qiita.com/GossiperLoturot/items/15750b9c452cdf0fcd73)

Marching Cubes法を用いてポリゴンデータをボクセル化して表示する方法とその実装について紹介しています。

### UnityでAlembicからVATを生成する

[UnityでAlembicからVATを生成する - Qiita](https://qiita.com/metaaa/items/6a9edcad4835259122df)

AlembicからVAT（Vertex Animation Texture）を生成する方法と生成したVATを用いてアニメーションを再生するシェーダーについてそれぞれ実装込みで紹介しています。

### Unity2022からの公式スプラインパッケージ『Splines』で曲線・パスをシーンに簡単に作成する

[【Unity】Unity2022からの公式スプラインパッケージ『Splines』で曲線・パスをシーンに簡単に作成する - LIGHT11](https://light11.hatenadiary.com/entry/2022/11/17/194205)

Unity 2022から公式が提供しているスプラインパッケージ「Splines」で曲線を生成する方法からスクリプトで曲線を制御する方法、SplineAnimateコンポーネントを使ったアニメーション、SplineInstantiateを使って曲線上にゲームオブジェクトを配置する方法、Spline Extrudeを用いて曲線に沿ったメッシュを生成する方法など紹介しています。

## Repositories

### NSprites - Unity DOTS Sprite Rendering Package

[Antoshidza/NSprites: Unity DOTS Sprite Rendering Package](https://github.com/Antoshidza/NSprites)

DOTSベースなスプライトレンダリングシステム。Entities 0.51.x をサポートし、今後 1.0 をサポート予定。



インスタンシングによるスプライトの描画を行うことで可能な限り1ドローコールでの描画を行う。

### Animated-Line-Renderer

[ForeignGods/Animated-Line-Renderer: Demo of animated line renderer in unity](https://github.com/ForeignGods/Animated-Line-Renderer)

Unityでアニメーション付きの点線や破線を描画するレンダラー実装のデモ。

### UIAnimation

[Mr-sB/UIAnimation: Simply set unity3d UI animation in inspector. Include some common effect.](https://github.com/Mr-sB/UIAnimation)

インスペクター上でアニメーションを設定できるUIアニメーションコンポーネント実装。

### Text To TextMesh Pro Upgrade Tool for Unity

[yasirkula/UnityTextToTextMeshProUpgradeTool: Upgrade Text, InputField, Dropdown and TextMesh objects to their TextMesh Pro variants in Unity](https://github.com/yasirkula/UnityTextToTextMeshProUpgradeTool)

既存のuGUIテキストコンポーネントをTextMesh Proのコンポーネントへ変換するツール実装。

### String Formatter

[skibitsky/string-formatter: 👨‍👩‍👧 Format strings with HTML-like tags (Unity's Rich Text) in LINQ fashion](https://github.com/skibitsky/string-formatter)

Unityのリッチテキストの装飾をLINQのようなメソッドチェーンベースに設定できるString Builder実装。

### Creating procedural animations

[MinaPecheux/UnityTutorials-ProceduralAnimations: The code for a short tutorial on procedural animations and how to create them thanks to the Animation Rigging package in Unity/C# (available in text format).](https://github.com/MinaPecheux/UnityTutorials-ProceduralAnimations)

Animation Riggingを用いてスクリプトでプロシージャルアニメーションを実装するチュートリアルプロジェクト。

### Ibralogue

[Ibralogue/Ibralogue: A dialogue library for the Unity game engine.](https://github.com/Ibralogue/Ibralogue?)

シンプルかつ拡張可能なダイアログシステム。



独自のシンタックスファイルによりダイアログを記述でき、会話の分岐や変数、関数内から静的なメソッド呼び出しなどをサポートする。

### bindlessdi

[no0bsprey/bindlessdi: Lightweight dependency injection framework for Unity almost free of bindings](https://github.com/no0bsprey/bindlessdi)

コンストラクタインジェクションのみをサポートする軽量DIライブラリ。

### Behavior Tree

[kietran99/BehaviorTree: [WIP][Unity] Visual editor for creating AI behavior](https://github.com/kietran99/BehaviorTree)

ノードエディタベースのBehaviour Tree実装。

