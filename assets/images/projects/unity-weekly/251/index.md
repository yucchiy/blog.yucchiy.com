---
type: unity-weekly
title: Unity Weekly 251
description: >-
  2025/12/08週のUnity Weeklyです。Unity 6.3 LTS公開、U/Day Tokyo 2025、Unity お・と・なのLT大会 2025、Advent Calendar 2025などを紹介しています。
pubDatetime: 2025-12-08T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity 6.3 LTS is now available

- [Unity 6.3 LTS is Now Available | Unity](https://unity.com/blog/unity-6-3-lts-is-now-available)
- [Unity 6.3 LTS is now available - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-6-3-lts-is-now-available/1697328)

Unity 6.3 LTSがリリースされました。

Unity 6.3 LTSは、2年間のサポートで、かつエンタープライズ向けにはさらに1年（合計三年間）のサポートを予定しているとのことです。

新機能の紹介として、下記の機能が紹介されています。

- Platform Toolkit: 各プラットフォーム専用の機能を統一的なAPIで扱える
- 新しいシェーダービルド設定: コーディングなしでシェーダーキーワードを調整できる
- AssetBundle TypeTree: AssetBundleのTypeTreeの重複を排除し、メモリ使用量を削減
- Unity Core Standards: 検証済み・署名済みのパッケージを提供できる。また、AssetStoreでも署名済みのパッケージを配布できる。
- Render Graph: ユーティリティーパスを拡張して、柔軟性の向上やいてレーション向上、ビルドサイズの縮小。Render Graph Viewerのデバイス対応(詳細は[Discussionより](https://discussions.unity.com/t/render-graph-updates-in-unity-6-3/1668122))
- Multi Player: HTTP/2 & gRPCサポート、Netcodeにホスト移行をサポート。
- Profiler: ハイライトプロファイラーモジュールが追加され、プロファイリングデータを元にシンプルなプロファイリングのサマリーが確認できるように。
- xAtlas: ライトマップにxAtlasを利用できるように。これによりライトマップのVRAMおよびディスク容量の使用量を削減できる。
- DX12のメモリ使用量削減: Tight Buffer Alightmentをサポート（詳細は[Discussionより](https://discussions.unity.com/t/graphics-memory-optimizations-for-dx12-vulkan-and-metal/1689618)）
- Renderer Shader User Value(RSUV): `MeshRenderer` および `SkinnedMeshRenderer` でユーザーがシェーダーに独自の値を設定できるAPIが追加された（詳細は[Discussionより](https://discussions.unity.com/t/renderer-shader-user-value-customize-your-visual-per-renderer/1682526)）
- URP Bloomがモバイルサポート: 低解像度向けに最適化されたKawaseフィルタリングと高解像度向けのデュアルフィルタリングを含む
- Sprite Atlas Analyzer: 非効率な設定を行っているスプライトを発見し問題をレポートする機能が追加
- 2D Animation: マルチスレッド、変形スプライトのキャッシュ、最適化されたシングルボーン メッシュ変形、ボーン データの冗長性の削減、リファクタリングされた IK システムによる不要な変形後操作の排除により、パフォーマンスが向上。
- Graphics device filtering: Windows Playerにて、デバイスごとに最適なグラフィックAPIとスレッドモードが設定できるように（詳細は[Discussionより](https://discussions.unity.com/t/graphics-memory-optimizations-for-dx12-vulkan-and-metal/1689618)）
- Indirect Ray Tracing: `RTAS.AddInstancesIndirect<T>` を用いて、大量のオブジェクトに対して単一のAPIコールでレイトレーシングが行えるように。
- Shader Graph: [Terrain Shader](https://discussions.unity.com/t/terrain-shaders-in-shader-graph-new-in-unity-6-3/1683627)のサポートや[アクセスできるUVチャンネルが4から7に](https://discussions.unity.com/t/shader-graph-improvements-in-unity-6-3/1668235)
- Visual Effects Graph: GPU駆動なエフェクトのサンプルを追加
- Render 3D as 2D: 3Dオブジェクトを2DのSorting Layer・Orders・Groups・Sprite Mask・Lightingに対応した2D描画が行えるように
- UI Toolkit: [独自のシェーダーやポストプロセスフィルターの対応](https://discussions.unity.com/t/feedback-request-custom-shaders-and-post-processing-filters/1680973)、SVG Imageをサポート。
- Audio: Scriptable Audio Pipeline と Enhanced Audio Foundationが実装され、オーディオをBurst C#で処理できるように

また、パフォーマンスや品質を強化しており、Production Verificationとして「Phasmophobia」や「V Rising」、「Pokémon Sleep」などで使用して各種ライブラリの改善の検証を行ったとのことです。

詳細は[こちらのブログ](https://unity.com/blog/unity-6-3-lts-is-now-available)にて確認できます。

### UI Toolkit Test Framework is available in 6.3!

[UI Toolkit Test Framework is available in 6.3! - Unity Engine - Unity Discussions](https://discussions.unity.com/t/ui-toolkit-test-framework-is-available-in-6-3/1698228)

UI Toolkit Test FrameworkがUnity 6.3から利用可能になったことをアナウンスするディスカッションです。

ディスカッションでは、このライブラリのできることから基本的な使い方、学習のためのリソースを紹介しています。

### Platform Toolkit - Official cross platform API 

[Platform Toolkit - Official cross platform API - now available for 6.3 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/platform-toolkit-official-cross-platform-api-now-available-for-6-3/1698376)

Unity 6.3から利用できるPlatform Toolkitについて紹介するディスカッションです。

ディスカッションでは、この機能の概要から、現状カバーするプラットフォームやその機能を紹介しています。

ドキュメントは[こちらより](https://docs.unity3d.com/Packages/com.unity.platformtoolkit@1.0/manual/index.html)より確認できます。

### UI Toolkit development status and next milestones – November 2025

[UI Toolkit development status and next milestones – November 2025 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/ui-toolkit-development-status-and-next-milestones-november-2025/1698009)

2025/11現在でのUI Toolkitの開発ステータスや次のマイルストーンについて紹介するディスカッションです。

Unity6.3など最近のUnityに実装されたUI Toolkitの機能の紹介と、現在アクティブに開発が進められている機能として、高度なアニメーションワークフローやシーンビュー上でのオーサリングなどについてそれぞれ紹介しています。

### Generators: Incoming changes - Nov 2025

[Generators: Incoming changes - Nov 2025 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/generators-incoming-changes-nov-2025/1697293)

Unityの生成AIで近日中に変更のある機能を紹介するディスカッションです。

「Video-to-Motion」の近日中の機能提供停止やサウンド生成のモデルをScenario’s ElevenLabs SFX v2 modelに置き換える予定とのことです。

またこのモデル置き換えでサウンドよリファレンス機能が使えなくなるが、機能の代替等のプランは現在検討中とのことです。

### Unity VR+ Tutorial: Building Games That Work in Both VR and Desktop

[Unity VR+ Tutorial: Building Games That Work in Both VR and Desktop - Technical Articles - Unity Discussions](https://discussions.unity.com/t/unity-vr-tutorial-building-games-that-work-in-both-vr-and-desktop/1693039)

VRとデスクトップの両方で動作するアプリケーションをUnity上で実装するためのチュートリアル記事です。

このチュートリアルで実装するアプリケーションのアーキテクチャからプロジェクトの作成、各種実装についてそれぞれ詳細に解説しています。

### Making it shine: Advanced visual techniques in Unity

[Making it shine: Advanced visual techniques in Unity | Unite 2025 presentation - Unity Engine - Unity Discussions](https://discussions.unity.com/t/making-it-shine-advanced-visual-techniques-in-unity-unite-2025-presentation/1698380)

Unite2025のセッションの中から「Making It Shine （https://www.youtube.com/watch?v=-M7owmmA4iI）」について紹介するディスカッションです。

このセッションの概要から扱う技術トピックを紹介しています。


## Events

### Unity お・と・なのLT大会 2025

[【年末だよ】 Unity お・と・なのLT大会 2025 - connpass](https://unity-bu.connpass.com/event/376352/)

2025/12/21に、日本Androidの会 Unity部主催の「【年末だよ】 Unity お・と・なのLT大会 2025」が開催されます。

今回は、オンライン会場（ZOOM）とオフライン会場の2会場開催で、オフライン会場はDeNA 渋谷オフィスとなります。

現在、一般参加およびLT登壇を募集しています。

### U/Day Tokyo 2025

[U/Day Tokyo 2025 公式サイト](https://unity3d.jp/u-day-tokyo-2025/)

U/Day Tokyo 2025が、2025/12/11にベルサール汐留で開催されます。


## Articles

### Redditに直接「Unity製ゲーム」を公開可能に。Reddit上でそのままプレイできる

- [Redditに直接「Unity製ゲーム」を公開可能に。Reddit上でそのままプレイできる - AUTOMATON](https://automaton-media.com/articles/newsjp/unity-reddit-20251205-369801/)
- [Unity Quickstart | Reddit for Developers](https://developers.reddit.com/docs/quickstart/quickstart-unity)

Reddit上でUnityで制作したゲームを公開可能になりました。
[Unity Quickstart](https://developers.reddit.com/docs/quickstart/quickstart-unity)では、実際のビルドの公開手順を紹介しています。

### UnityでゲームAIのUtility AIを作ってみる

[UnityでゲームAIのUtility AIを作ってみる #Unity3D - Qiita](https://qiita.com/tsubaki_t1/items/9edd75359bd82f8201f3)

ゲームAIをUtility（効用）ベースに組み立てるための考え方やその設計、実装方法について紹介しています。

また、最適なアクションを選択するためのそれぞれのアクションのスコアを計算するモデルの考え方や実装、キャラクターらしさを出すための欲求モデルや動因駆動なモデルについてもそれぞれ説明しています。

### C#でオリジナルコーディングエージェントをつくってみよう

[C#でオリジナルコーディングエージェントをつくってみよう - KAYAC Engineers' Blog](https://techblog.kayac.com/lets-build-csharp-coding-agent)

OpenAIのAPIを用いて、基本的なファイルの読み込みや書き込みのためのツールが利用できるLLMエージェントをC#で実装する方法について解説しています。

### VFXgraphと遊ぼう！

[VFXgraphと遊ぼう！ │ Aiming 開発者ブログ](https://developer.aiming-inc.com/study/post-13237/)

Aiming社が、VFXGraphに興味を持ってもらうことをきっかけに始めた社内勉強会の内容を元に、VFXGraphの紹介や、実際に用意したサンプルの紹介、チュートリアルとして実施した「インタラクティブな床」をVFXGraphで実現するためのグラフの実装について、それぞれ紹介しています。

### Unity 6.3から使えるSprite Atlas Analyzerを触ってみる

[Unity 6.3から使えるSprite Atlas Analyzerを触ってみる | Yucchiy's Note](https://blog.yucchiy.com/2025/12/sprite-atlas-analyzer-unity63)

Unity 6.3から利用できるスプライトの設定の問題を検出・報告するSprite Atlas Analyzerについて、基本的な使い方から各種画面の見方、独自のアナライザーを実装する方法について紹介しています。

### Unity テクスチャのメモリ使用量をプラットフォーム別に正確に求める

[Unity テクスチャのメモリ使用量をプラットフォーム別に正確に求める - Sumzap Engineering Blog](https://tech.sumzap.co.jp/entry/texture-memory-analyzation)

テクスチャサイズを、非圧縮とブロック圧縮、mipmapやTextureArray、Read/Writeの有無を考慮して試算する方法について紹介しています。

### Project Auditorでカスタムアナライザーを実装する

[Project Auditorでカスタムアナライザーを実装する | Yucchiy's Note](https://blog.yucchiy.com/2025/12/project-auditor-custom-analyzer)

プロジェクトの静的解析を行うProject Auditorで、独自のアナライザーを実装する方法について紹介しています。

### Unity IAP v5系の実装方法と罠

[Unity IAP v5系の実装方法と罠｜Otsuka🤓](https://note.com/otsuka_game/n/nd5af3091e2a9)

著者がUnity IAP v5でStoreKit v2の対応を行うにあたって、対応の際の観点や実際に苦労した点をまとめています。

### 汎用的なジャンプ機構の実装例 - コヨーテタイム・先行入力・多段ジャンプ・可変ジャンプを共通化する

[【Unity】汎用的なジャンプ機構の実装例 - コヨーテタイム・先行入力・多段ジャンプ・可変ジャンプを共通化する #C# - Qiita](https://qiita.com/watabe_h/items/2946deb958e28609d771)

アクションゲームにおいて、操作性を良くするためによく実装されるコヨーテタイムやジャンプの先行受付、よく採用される挙動である多段ジャンプや可変ジャンプなどの実装例を紹介しています。

### Project Settingsを上から見ていきつつ自分の言葉で書いてみる

[Project Settingsを上から見ていきつつ自分の言葉で書いてみる　Burst AOT Settings編 #Unity - Qiita](https://qiita.com/ScreenPocket/items/dcb326f7663eca7da532)

Project Settingsのそれぞれの設定が、具体的にどのような影響を与えるのかについて、著者自身の解釈を含めて説明しています。
今回は、Burst AOT Settingsについて説明しています。

### 超軽量物理エンジンLow-level 2D PhysicsがUnity6.3で登場

[【Unity】超軽量物理エンジンLow-level 2D PhysicsがUnity6.3で登場 #Unity - Qiita](https://qiita.com/tamutamuta/items/c860fe735f6b2bdddbbb)

Unity 6.3で追加されたLow-level 2D Physicsについて、その概要や、サンプルを通じてAPIの特徴などを紹介しています。

### Adaptive Probe VolumesでLighting Scenarioをブレンドしてみる

[【Unity】Adaptive Probe VolumesでLighting Scenarioをブレンドしてみる](https://zenn.dev/ambr_inc/articles/b7a92d863203e8)

APVsのLighting Scenarioの結果をブレンドする方法について紹介しています。

### Unity as a Library で UnityFramework を XCFramework 化して iOS 実機とシミュレーターの両方で動かせるようにする

[【Unity6.3対応版】Unity as a Library で UnityFramework を XCFramework 化して iOS 実機とシミュレーターの両方で動かせるようにする #Xcode - Qiita](https://qiita.com/mao_/items/4da81d6b57ea1a0fe382)

Unity6.4および6.3で入った、UaaLをAppleSiliconのmacOSのシミュレーター上で動作させるための対応について、その内部的な変更をUnityビルドで生成されたXcodeプロジェクトを確認しつつ解説しています。

### Quest3から両目の映像を取得してリアルタイムで立体映像を楽しんでみる

[Quest3から両目の映像を取得してリアルタイムで立体映像を楽しんでみる #Unity - Qiita](https://qiita.com/Kenty1003/items/b789d02f682ea3cc991f)

ステレオスコピックと呼ばれる左右で視差のある画像を見せることで奥行きを表現する技法をMetaQuest3で実現する方法を紹介しています。

### Unity Lerpで目標値に到達しない問題と解決法

[Unity Lerpで目標値に到達しない問題と解決法 #C# - Qiita](https://qiita.com/35Sunnogo/items/eaac7717f6aa9ec2ba25)

Lerpなどの補完関数を挟んだアニメーションで、目標値にピッタリに到達しない場合に利用できるテクニックを紹介しています。

### UnityでローカルLLMを手軽に動かせるOSS・公式パッケージ三選 (gemma-unity-plugin, LLMUnity, Unity Sentis)

[【Unity】UnityでローカルLLMを手軽に動かせるOSS・公式パッケージ三選 (gemma-unity-plugin, LLMUnity, Unity Sentis) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/advent-calendar2025)

Unityで利用できるローカルLLMのライブラリを3つ取り上げてそれぞれの特徴を比較したのち、LLMUnityの導入方法からその使い方を紹介しています。

### 非同期処理で同じオブジェクトの更新を連続して行う場合に前の処理をキャンセルしないと事故ることがある

[【Unity】非同期処理で同じオブジェクトの更新を連続して行う場合に前の処理をキャンセルしないと事故ることがある #C# - Qiita](https://qiita.com/block/items/7100823d2bd8bafa76df)

同じオブジェクトに対して複数個の非同期処理を呼び出した時に、順番違いで意図しないオブジェクトの更新を防ぐためのキャンセル処理の実装について紹介しています。

### RenderGraphで実装するBayer Matrix ディザリング

[[Unity 6] RenderGraphで実装するBayer Matrix ディザリング【URPポストプロセス】 #Shader - Qiita](https://qiita.com/KeichiMizutani/items/cf4eeb7f70e4da6f203f)

BayerMatrixによるグレースケールのディザリングを、URPのRenderGraph上で実装する方法を紹介しています。

### Unityの正確なリリースノート情報を取得してくれるMCP ServerをOSSとして公開しました

[Unityの正確なリリースノート情報を取得してくれるMCP ServerをOSSとして公開しました - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2025/11/29/230000)

ブログの著者が開発している、Unityのリリースノートの情報を正確に取得するためのMCP「[Unity Release Note MCP](https://github.com/hanachiru/unity-release-note-mcp/blob/main/README_JA.md)」について、このライブラリを作成するに至った背景や基本的な使い方を紹介しています。

### Junieを使ってUnityプロジェクトにRequired属性を一括付与する

[Junieを使ってUnityプロジェクトにRequired属性を一括付与する #C# - Qiita](https://qiita.com/RyotaMurohoshi/items/15e24a1b61c88addb256)

JetBrainが提供するAIエージェント「Junie」を用いて、`OdinInspector.Required`属性を、プロンプトベースで一括で付与する例について紹介しています。

### Earth, Wind & FireっぽいエフェクトをRenderGraphで実装する

[Earth, Wind & FireっぽいエフェクトをRenderGraphで実装する](https://zenn.dev/adoring_onion/articles/lets-groove-effect)

RebderGraphベースで前フレームの描画結果を利用した残像効果を実装する方法について解説してきます。

### メソッド名からそれを呼んでいるGameObjectを検索するエディタ拡張

[【Unity】メソッド名からそれを呼んでいるGameObjectを検索するエディタ拡張 #UnityEditor - Qiita](https://qiita.com/NightOwl/items/38684b562a22b062f1b6)

記事の著者によるunityのUIライブラリの現状やそれを踏まえた用途などに応じたライブラリ選定について説明しています。

### XREAL One Pro + XREAL Eye のカメラ映像を Gemini API で解析する 

[【Unity】XREAL One Pro + XREAL Eye のカメラ映像を Gemini API で解析する #AI - Qiita](https://qiita.com/iwaken71/items/da5cc843b426390ff40e)

XREAL Eyeのカメラ画像をキャプチャしてGemini APIへ送信し、解析結果を取得する実装を紹介しています。

### 状態管理ライブラリを激推しする記事

[状態管理ライブラリを激推しする記事](https://zenn.dev/ambr_inc/articles/bd9a3cf5001a38)

記事の著者が開発する、クラスの状態管理を補助する[StateVariable](https://github.com/tanitaka-tech/StateVariable)というライブラリについて、導入のメリットから使い方を紹介しています。

### 隠れたオブジェクトをスキャンで表示する（URP/Render Objects）

[隠れたオブジェクトをスキャンで表示する（URP/Render Objects）](https://zenn.dev/boichi/articles/ad58e85f88c5a3)

Render Objectsを用いて、特定のオブジェクトに対して深度テストの結果手前のオブジェクトに隠れた箇所を描画するエフェクトを実装する方法を紹介しています。

### AIを駆使してなるべくゲーム作りを丸投げした結果をCursorとAntigravityで比較してみた

[AIを駆使してなるべくゲーム作りを丸投げした結果をCursorとAntigravityで比較してみた #Unity - Qiita](https://qiita.com/nari-nari/items/3f272a5fafd2af516d5a)

CursorとAntigravityで、UnityMCPを導入して、プロンプトのみで同じゲームを制作した際の、2つのツールの使用感の所管についてまとめています。

### UnityのGPU負荷を大幅軽減できるアセット「DLSS4」「XeSS2」（＆STP）を比較

[UnityのGPU負荷を大幅軽減できるアセット「DLSS4」「XeSS2」（＆STP）を比較 #Unity - Qiita](https://qiita.com/waiwaiunity/items/a183188e677eba617159)

アップスケーリングによって描画負荷を軽減できるライブラリのパフォーマンスや品質の比較を紹介しています。

### Lightship ARDKをUnity as a Library(UaaL環境下）で動かす

[[iOS] Lightship ARDKをUnity as a Library(UaaL環境下）で動かす](https://zenn.dev/hirosukekayaba/articles/f8bedd3a10f15c)

UaaL 上でLightship ARDKを利用する際、iOSのビルドを作るときに遭遇したビルドエラーやクラッシュの対処方法について紹介しています。

### uGUI vs UI Toolkit vs ...

[uGUI vs UI Toolkit vs ... #C# - Qiita](https://qiita.com/naninunenoy/items/55b131675f0edd531645)

記事の著者によるunityのUIライブラリの現状やそれを踏まえた用途などに応じたライブラリ選定について説明しています。

### KMPでUnity as a Libraryを使ってみた！！

[KMPでUnity as a Libraryを使ってみた！！ #iOS - Qiita](https://qiita.com/9chbita/items/f9df0d73a633217a701b)

Kotlin Multi Platform（KMP）上でUaaLをつかってUnityアプリを立ち上げるための、AndroidとiOSプロジェクトのそれぞれの実装について紹介しています。

### VRM+VRMAをランライムで読み込んでアニメーション再生(Unity)

[VRM+VRMAをランライムで読み込んでアニメーション再生(Unity) #C# - Qiita](https://qiita.com/naninunenoy/items/7387eaaac3d814f00311)

UniVRMを用いたVRMモデルの表示からアニメーション再生について、その実装方法を紹介しています。

### Unity6.3に上げたら自作のRendererFeatureが効かなくなった件の対策

[Unity6.3に上げたら自作のRendererFeatureが効かなくなった件の対策 #UniversalRenderPipeline - Qiita](https://qiita.com/ScreenPocket/items/28f9635327aac80c30f9)

https://qiita.com/ScreenPocket/items/28f9635327aac80c30f9

Unity 6.3でURPを互換性モードで実行して、RenderGraph未対応でも描画崩れを防ぐ方法について紹介しています。

### Unity 2022.3.21f1 から Unity 6 (6000.0.62f1) への移行で発生した4つのトラブルと解決法【Intel版Editor】

[Unity 2022.3.21f1 から Unity 6 (6000.0.62f1) への移行で発生した4つのトラブルと解決法【Intel版Editor】 #Unity6 - Qiita](https://qiita.com/tatsuya_sugio/items/230fcd592d453878fd50)

Unity 2022.3.21f1 から Unity 6 (6000.0.62f1)に移行した際に発生したAddressablesやiOSのクラッシュなどの不具合と、その対策について紹介しています。

