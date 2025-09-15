---
type: "unity-weekly"
title: "Unity Weekly 239"
description: "2025/09/15週のUnity Weeklyです。Unity6.3ベータ版リリースやUnity 6.3の新機能紹介をメインに取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2025-09-16T00:00:01"
---

## Unity Officials

### Unity 6.3 Beta is now available

[Unity 6.3 Beta is now available - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-6-3-beta-is-now-available/1680610)

Unity 6.3のベータ版がリリースされたことをアナウンスするディスカッションです。

このバージョンは、Unity 6のLTSリリースとしてGAがリリースされてから2年間（Unity EnterpriseとUnity Industryでは3年間）サポートされることが予定されています。

このディスカッションでは、Unity6.3のベータ版で入る主要な新機能を紹介しています。

### Renderer Shader User Value: Customize your visual per renderer

[Renderer Shader User Value: Customize your visual per renderer - Technical Articles - Unity Discussions](https://discussions.unity.com/t/renderer-shader-user-value-customize-your-visual-per-renderer/1682526)

Unity6.3に追加されたRenderer Shader User Value (RSUV)について紹介するディスカッションです。

この機能では各レンダラーに対して、[SkinnedMeshRenderer.SetShaderUserValue](https://docs.unity3d.com/6000.3/Documentation/ScriptReference/SkinnedMeshRenderer.SetShaderUserValue.html) や [MeshRenderer.SetShaderUserValue](https://docs.unity3d.com/6000.3/Documentation/ScriptReference/MeshRenderer.SetShaderUserValue.html) を用いて独自の値（uint）を割り当てられ、シェーダーから `unity_RendererUserValue` を介して設定した値を取得することができます。

またRSUVは、CPUオーバーヘッドなく利用できるようにかつバッチ処理も壊れないように設計されており、ベンチマークの結果も合わせて紹介されています。

### Vector Graphics in UI Toolkit

[Vector Graphics in UI Toolkit - Unity Engine - Unity Discussions](https://discussions.unity.com/t/vector-graphics-in-ui-toolkit/1683117)

Unity6.3からUI Toolkit上でベクター画像のインポートやレンダリングのレンダリングをサポートする旨を紹介するディスカッションです。

この機能は、UI ToolkitのPainter 2D APIを用いることで、画面解像度に依存せずアンチエイリアスされたスムーズな画像を描画できます。

このディスカッションでは、この機能の基本的な使い方や、[ベクターイメージを扱うUnityのAPIドキュメント](https://docs.unity3d.com/6000.3/Documentation/Manual/ui-systems/work-with-vector-graphics.html)についてそれぞれ紹介しています。

### Shader Graph Custom Lighting Sample

[Shader Graph Custom Lighting Sample - Unity Engine - Unity Discussions](https://discussions.unity.com/t/shader-graph-custom-lighting-sample/1681765)

Unity6.3から利用できる[Shader Graphのライティングに関する新しいサンプル](https://www.youtube.com/watch?v=4v2fgeJa8z4)（リンク先はYouTube）を紹介するディスカッションです。

新しいサンプルでは、描画をカスタマイズすることでトゥーンシェーディングや絵画的なシェーディングなどスタイライズドレンダリングを行ったり、ローエンド端末やXRプラットフォーム向けに対して特定の描画をOFFにすることで描画パフォーマンスを向上を見込めることを示しています。

このディスカッションでは、サンプルの利用方法からカスタマイズ方法について説明しています。

### Experimental Network Profiler in Netcode for Entities

[Experimental Network Profiler in Netcode for Entities - Unity Engine - Unity Discussions](https://discussions.unity.com/t/experimental-network-profiler-in-netcode-for-entities/1683092)

[Netcode for Entities](https://docs.unity3d.com/Packages/com.unity.netcode@1.6/manual/index.html)向けのプロファイラーモジュールが実験的に公開されています。

プロファイラーはクライアント向けとサーバー向けでそれぞれUnity Profilerのモジュールとして提供されており、「フレームごとのネットワークアクティビティ」・「ネットワークデータのスナップショット」・「予測と補完」についてそれぞれ確認できます。

このプロファイラーモジュールを有効にするためには、Unity6以降を利用し、また `NETCODE_PROFILER_ENABLED` をScript Define Symbolとして定義する必要があります。

### サバイバルキッズマルチプレイヤーネットワークアーキテクチャの内部

[Inside the Survival Kids Multiplayer Network Architecture](https://unity.com/blog/inside-the-survival-kids-multiplayer-network-infrastructure)

KONAMIとUnityが共同開発するSwitch2向けの[サバイバルキッズ](https://www.konami.com/games/survival_kids/)におけるマルチプレイヤーのアーキテクチャーについて紹介しています。

元々、[Netcode for GameObjects](https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@2.5/manual/index.html)を採用していたところから[Netcode for Entities](https://docs.unity3d.com/Packages/com.unity.netcode@1.6/manual/index.html) への移行や、その上でGameObjectやMonoBehaviourを併用する設計にした経緯などを説明しています。


## Articles

### Unity 6.3 の標準機能でメインツールバーをカスタマイズできるようになった

[【Unity】Unity 6.3 の標準機能でメインツールバーをカスタマイズできるようになった - コガネブログ](https://baba-s.hatenablog.com/entry/2025/09/12/085027)

Unity6.3から利用できるようになったメインツールバー（エディター上部のプレイボタンなどが配置されているバー）の拡張APIの使い方を紹介しています。

### 「QualiArts様の描画最適化術」を試してみる Part.1

[「QualiArts様の描画最適化術」を試してみる Part.1 #C# - Qiita](https://qiita.com/Toshizabeth/items/4e97a7ea05a13db7a689)

「[「IDOLY PRIDE」における描画最適化術](https://technote.qualiarts.jp/article/23/)」を参考に、DrawProceduralによるインスタンシング描画やJobSystemによるCPU上での独自のカリング処理による画面外のオブジェクトを描画しないことによる描画の最適化の実装例を紹介しています。

### RenderGraph開発:Tips紹介

[RenderGraph開発:Tips紹介 - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2025/09/12/122325)

RenderGraphの `ContextContainer` から取得できる `UniversalResourceData` の `cameraColor` を自作テクスチャに差し替えることで一時的な計算用テクスチャからの戻しBlitを削減できる最適化と、この手法がうまくいかないケースやその際のフォールバック実装についてそれぞれ紹介しています。

### UI Test Framework パッケージ v1.0 ファーストインプレッション

[UI Test Framework パッケージ v1.0 ファーストインプレッション - やらなイカ？](https://www.nowsprinting.com/entry/2025/09/15/080000)

Unity6.3以降で利用できる、UI Toolkit のテストを行うことのできるUnity標準パッケージ「[UI Test Framework](https://docs.unity3d.com/Packages/com.unity.ui.test-framework@1.0/manual/index.html)」の概要から基本的な使い方や著者による所感が紹介されています。
