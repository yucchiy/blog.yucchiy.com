---
type: unity-weekly
title: Unity Weekly 271
description: >-
  2026/05/11週のUnity Weeklyです。Unity AI Open Beta、PSO Caching Improvements in Unity 6.5、UPM CLIなどを紹介しています。
pubDatetime: 2026-05-11T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---


## Unity Officials

### Unity AI’s Open Beta Now Live for Unity 6

- [Unity AI’s Open Beta Now Live for Unity 6 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-ai-s-open-beta-now-live-for-unity-6/1718560)
- [Unity AI Open Beta | Launch Trailer - YouTube](https://www.youtube.com/watch?v=pHRZm2BwNQc)

Unity 6以降でUnity AIがOpen Betaとして利用可能になったことをアナウンスしています。

Open Betaの内容として、下記が紹介されています。

- Agentic In-Project Assistance
    - Unityワークフローに特化したエージェントアシスタントが利用できる
    - [Generators](https://docs.unity3d.com/Packages/com.unity.ai.assistant@2.7/manual/about/overview.html)を用いてプレースホルダーマテリアル、サウンド、キューブマップ、2D・3Dアセットが作成できる
- AI Gateway
    - AI Gateway経由でサードパーティーエージェントを組み込むことができる
- MCP Server
    - [Unity MCP](https://docs.unity3d.com/Packages/com.unity.ai.assistant@2.7/manual/integration/unity-mcp-get-started.html)を用いてIDEや好みのLLMエディターからエディターを制御できる

また、ディスカッションではUnity AIベータ版の利用開始方法や、より具体的なUnity AIの機能紹介として[プロファイラキャプチャーからのボトルネック解決](https://discussions.unity.com/t/unity-ai-s-open-beta-now-live-for-unity-6/1718560#p-7291632-profile-performance-bottlenecks-6)や[プランモード](https://discussions.unity.com/t/unity-ai-s-open-beta-now-live-for-unity-6/1718560#p-7291632-plan-mode-7)、[独自のスキル管理](https://discussions.unity.com/t/unity-ai-s-open-beta-now-live-for-unity-6/1718560#p-7291632-leverage-skills-and-create-your-own-8)、[より高度な知識が求められるUnity固有タスクの解決](https://discussions.unity.com/t/unity-ai-s-open-beta-now-live-for-unity-6/1718560#p-7291632-more-expertise-in-unity-specific-tasks-10)、[アセットによるシーン構築や資産化の自動化](https://discussions.unity.com/t/unity-ai-s-open-beta-now-live-for-unity-6/1718560#p-7291632-fully-integrated-workflow-bring-your-assets-to-life-11)、[FigmaプロジェクトからUIアセットの自動生成](https://discussions.unity.com/t/unity-ai-s-open-beta-now-live-for-unity-6/1718560#p-7291632-use-a-figma-project-to-create-high-fidelity-ui-15)などが紹介されています。

### PSO Caching Improvements in Unity 6.5

[PSO Caching Improvements in Unity 6.5 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/pso-caching-improvements-in-unity-6-5/1719264)

Unity 6.5にてPSOキャッシュの改善が行われたことをアナウンスしています。このディスカッションでは、主に下記の改善について紹介しています。

- Cache miss collection
    - PSO収集中に考慮されていなかった状態を追加で自動収集するAPIが追加された
    - [Rendering.GraphicsStateCollection.WarmUp](https://docs.unity3d.com/6000.6/Documentation/ScriptReference/Rendering.GraphicsStateCollection.WarmUp.html) の第2引数でキャッシュミスの状態をトレースするかを設定できる
    - WarmUp後に [Rendering.GraphicsStateCollection.cacheMissCollection](https://docs.unity3d.com/6000.6/Documentation/ScriptReference/Rendering.GraphicsStateCollection-cacheMissCollection.html) を用いてPSOキャッシュ内に存在しない状態のみを保存できる
- VFX Asset warmup
    - GraphicsStateCollection(GSC) APIでは現在ComputeShaderのバリアントを正しく収集できないため、VFXEffectAssetでComputeShaderのPrewarmを行うためのAPIとして、[VFX.VisualEffectAsset.PrewarmComputeShaders](https://docs.unity3d.com/6000.6/Documentation/ScriptReference/VFX.VisualEffectAsset.PrewarmComputeShaders.html) が追加された
- Editor UI
    - GSCがエディターUIに統合され、エディターUIのGraphics > Shader SettingsからPSOトレースやウォームアップを有効にできるようになった
    - ウォームアップモードを利用すると、起動時にプリコンパイルしてキャッシュするGSCを割り当てることができるようになった

また、現状のGSCの制約や既知の不具合についても合わせて紹介しています。

### Increasing the OpenGLES minimum spec in Unity 6.6

[Increasing the OpenGLES minimum spec in Unity 6.6 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/increasing-the-opengles-minimum-spec-in-unity-6-6/1719163)

Unity 6.6におけるOpenGLESの最小バージョンの引き上げについてアナウンスしています。

Unity 6.6ではAndroidの最小バージョンが引き上げられ、合わせてOpenGLES 3.1以上のバージョンが必須になるとのことです。

このディスカッションでは、この引き上げについての経緯や、Unity6以降で提供されているデバイスごとにAndroidのグラフィックデバイスAPIを設定できる[Vulkan Device Filtering Asset](https://docs.unity3d.com/6000.6/Documentation/Manual/introduction-vulkan-device-filtering-asset.html)や、Unity6.6で提供されるAndroidのGraphics API hardware profile settings（参考: [Introduction to Vulkan hardware profiles](https://docs.unity3d.com/6000.6/Documentation/Manual/vulkan-hardware-profiles-intro.html)）を用いてデバイスフィルタリングをプログラマブルに実現する方法についてもそれぞれ紹介しています。

### Unity Package Manager CLI workflow

[Unity - Manual: Unity Package Manager CLI workflow](https://docs.unity3d.com/6000.6/Documentation/Manual/upm-cli.html)

UPMのCLIツールが利用可能になり、パッケージ署名のワークフローの自動化が行いやすくなりました。

### Update on Behavior Package Support and Team Presence

[Update on Behavior Package Support and Team Presence - Unity Engine - Unity Discussions](https://discussions.unity.com/t/update-on-behavior-package-support-and-team-presence/1718517)

Behaviourパッケージの今後のサポートや今後の動きについて、新機能の追加より保守や安定性の実現へと以降していくことをアナウンスしています。


## Articles

### Input Systemで短押しと長押しを区別する

[【Unity】Input Systemで短押しと長押しを区別する | ねこじゃらシティ](https://nekojara.city/unity-input-system-tap-or-hold)

Input systemで、短押しと長押しを区別するためのインタラクションとしてTapやHold、SlowTapの使い方からこれらを用いた判別処理の実装について紹介しています。

### VMC Protocol対応とフルトラ配信の未来について

[VMC Protocol対応とフルトラ配信の未来について｜REALITY株式会社](https://note.com/reality_eng/n/ndbd0311d00f7)

Realityのエイプリルフール企画におけるVMC Protocolの対応とフルトラ配信について、企画の経緯となるフルトラの可能性や具体的な実装についてそれぞれ紹介しています。

### ReactiveInputSystemでInputSystemをObservableに変換する

[【Unity】ReactiveInputSystemでInputSystemをObservableに変換する](https://zenn.dev/nuskey/articles/library-reactiveinputsystem)

ブログの著者が開発するInputSystemをリアクティブに扱うライブラリの基本的な使い方を紹介しています。

### UnityHubのカスタムテンプレートで毎回の初期設定をスキップしよう

[UnityHubのカスタムテンプレートで毎回の初期設定をスキップしよう](https://zenn.dev/saikoukiroku/articles/118d0436cbd134)

UnityHub に新しく追加されたカスタムテンプレートで、ユーザー定義のテンプレートを利用する方法を紹介しています。

### Unity 6.5でAndroidのWindow Insetsに関する設定やAPIが追加される

[Unity 6.5でAndroidのWindow Insetsに関する設定やAPIが追加される #Unity6.5 - Qiita](https://qiita.com/RyotaMurohoshi/items/37d375555f9a3d4a3693)

Unity 6.5から追加されているAndroidのWindow Insets APIについて、基本的な使い方やそれぞれの設定においてどのように見た目や機能が変化するのか紹介しています。

### Physically Based Rendering

[Physically Based Rendering | Unity Shader Code Basics 07](https://danielilett.com/2026-04-28-tut10-07-pbr/)

URP上でPBRベースなレンダリングをHLSLを用いて実際に実装し、SurfaceDataやInputDataを構築して描画する方法を解説しています。

また、MetalicとSpecularの二つのワークフローの使い分けや、RoughnesマップとSmoothnessマップの変換機能などについてそれぞれ紹介しています。

### Roslyn Analyzerがビルド時間に与える影響を調べる方法

[【C#】Roslyn Analyzerがビルド時間に与える影響を調べる方法 - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2026/04/25/200000)

Roslyn Analyzerのビルド時間を計測するためのログファイルの出力方法から、出力されたログファイルの解析方法についてそれぞれ紹介しています。
