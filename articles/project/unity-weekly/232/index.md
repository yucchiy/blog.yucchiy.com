---
type: unity-weekly
title: Unity Weekly 232
description: >-
  2025/07/22週のUnity Weeklyです。Unity6.3 pre-release、Graph Toolkit、Project
  Auditorなどについて取り上げています。
pubDatetime: 2025-07-21T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity 6.3 pre-release

[Unity 6.3 pre-release - engagement guidelines & release announcements - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-6-3-pre-release-engagement-guidelines-release-announcements/1658892)

Unity 6.3がリリースされたことをアナウンスしています。

ディスカッション上に [6-3-alpha](https://discussions.unity.com/tag/6-3-alpha) タグが用意したことで、Unity 6.3に関する情報はこちらのタグを用いて確認できることを伝えています。

また、Unity6.3のバグをレポートする際の一連のアクションについて改めて紹介しています。

### Render Graph Updates in Unity 6.3

[Render Graph Updates in Unity 6.3 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/render-graph-updates-in-unity-6-3/1668122)

Unity 6.3におけるRender Graphパッケージのアップデートを紹介しています。

Render Graphに関するいくつかの便利ヘルパーの導入から、URPにおける互換性モードが `URP_COMPATIBILITY_MODE` をシンボル定義しないと有効にならない点、Render Graphの状態を確認するための「Render Graph View」がプレイヤービルドしたデバイス上で利用できるアップデート、URPとHDRPが利用するRender Graph APIの基礎部分が統一された点などについてそれぞれ紹介しています。

### Shader Graph improvements in Unity 6.3

[Shader Graph improvements in Unity 6.3 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/shader-graph-improvements-in-unity-6-3/1668235)

Unity 6.3におけるShader Graphパッケージのアップデートを紹介しています。

アクセスできるテクスチャのチャンネル数が4から7になった点や、ネストしたプロパティやキーワードをサブグラフに設定できる機能、補完設定に `nointerpolation` が追加された点、グラフテンプレートが実装された点などについてそれぞれ紹介しています。

### Unity’s Graph Toolkit (Experimental), AVAILABLE TODAY in Unity 6.2!

[Unity’s Graph Toolkit (Experimental), AVAILABLE TODAY in Unity 6.2! - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-s-graph-toolkit-experimental-available-today-in-unity-6-2/1664909)

グラフUI構築するためのGraph Toolkitの実験的パッケージが、Unity 6.2より利用可能になった旨のアナウンスが行われました。

Graph Toolkitが既存のGraphViewと比べて、シリアライズやndo/Redoなどの機能を標準的に実装している点などを紹介しています。

### Documentation: Improved prefabs documentation

[Documentation: Improved prefabs documentation - Unity Engine - Unity Discussions](https://discussions.unity.com/t/documentation-improved-prefabs-documentation/1666872)

PrefabドキュメントがUnityのアップデートに対して古い点から、Unity6向けにアップデートした点を紹介しています。

### Getting started with the Project Auditor

[Getting started with the Project Auditor - YouTube](https://www.youtube.com/watch?v=8QQG0J624LY)

Unity 6.1からUnityの標準的なパッケージとして導入された、プロジェクト設定を解析して問題点やパフォーマンス最適化のための設定を提示する「Project Auditor」について、その基本的な使い方を動画形式で紹介しています。 

### RELEASE: Input System 1.14.1

[RELEASE: Input System 1.14.1 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/release-input-system-1-14-1/1665776/2)

Input Systemの1.14.1のリリースがアナウンスされました。

このバージョンでは、macOSでUSB越しのXboxコントローラー接続に対応した点と、多くのバグフィックスが含まれています。

[CHANGELOG全文はこちらより確認できます](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.14/changelog/CHANGELOG.html)。

### Now Available on Unity Build Automation - macOS Sequoia, Xcode 16.3, 16.4 and 26.0 Beta 2

[Now Available on Unity Build Automation - macOS Sequoia, Xcode 16.3, 16.4 and 26.0 Beta 2 - Unity Services - Unity Discussions](https://discussions.unity.com/t/now-available-on-unity-build-automation-macos-sequoia-xcode-16-3-16-4-and-26-0-beta-2/1664931/)

Unityが公式で提供するビルドサービス「Build Automation」、Xcode 16.3, 16.4が利用可能になり合わせて26.0 Beta 2向けのビルドが可能になったことをアナウンスしています。


## Articles

### Input Systemでキーコンフィグの読み書きを独自実装する

[【Unity】Input Systemでキーコンフィグの読み書きを独自実装する | ねこじゃらシティ](https://nekojara.city/unity-input-system-custom-rebinding)

Input Systemを用いて、キーコンフィグを設定から上書きする実装を実現する1実装として、
`InputAction` や `InputBinding` に用意された、既存の設定を上書きするAPIの紹介と、その値を読み込み・保存することでそれを実現する方法についてそれぞれ解説しています。

また、この実装を `InputActionAsset` や `InputActionMap` インスタンスにまとめて反映する実装についても言及しています。

### How To Make A Retro VHS Effect Shader In Unity

[How To Make A Retro VHS Effect Shader In Unity](https://gamedev.center/how-to-make-a-retro-vhs-effect-shader-in-unity/)

VHSエフェクトシェーダーについて、このシェーダーに必要なプロパティからその実装についてそれぞれ紹介しています。

### TileTemplateについて

[TileTemplateについて #Unity - Qiita](https://qiita.com/RyotaMurohoshi/items/78b490aa1343b2087fdd)

Unity 6.1で ｀com.unity.2d.tilemap` パッケージに追加された、TextureやSpriteからTile Assetを効率的に作成するためのツール「TileTemplate」について、その概要からその使い方を紹介しています。


## Repositories

### UnityMetalFrameCapture-Example

[mao-test-h/UnityMetalFrameCapture-Example](https://github.com/mao-test-h/UnityMetalFrameCapture-Example)

アプリ上（PlayerビルドしたiOSアプリ）からMetal debuggerのフレームキャプチャを行うサンプル実装。
