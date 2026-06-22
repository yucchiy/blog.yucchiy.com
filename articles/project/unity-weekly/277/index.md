---
type: unity-weekly
title: Unity Weekly 277
description: >-
  2026/06/22週のUnity Weeklyです。Unity 6.5リリース、Audio status update Q2 2026、CoreCLR/Scripting/Serialization Update、XREAL AURA Support、Unity Core Standards、Localization Package 1.5.12、Unity 物理 完全に理解した勉強会などを紹介しています。
pubDatetime: 2026-06-22T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity 6.5 is now available

[Unity 6.5 is now available - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-6-5-is-now-available/1723176)

Unity 6.5がリリースされたことをアナウンスしています。

Unity 6.5は6.3 LTSを土台に、Unity 6.7 LTSへ向けた基盤改善とワークフロー改善が幅広く含まれています。

- **Unification and Foundation for Performance**：InstanceIDから[EntityID](https://docs.unity3d.com/6000.5/Documentation/ScriptReference/EntityId.html)への移行が進み、CoreCLR Editorへ向けた[Lifecycle API](https://docs.unity3d.com/6000.5/Documentation/Manual/programming-code-lifecycle.html)、Profiler AI Assistant Integration、[Project Auditor](https://docs.unity3d.com/6000.4/Documentation/Manual/project-auditor/project-auditor.html)、高レベルのランタイムパフォーマンス指標を集計するためのPerformance Metric Signalsが追加
- **2D Graphics, Physics and Performance Improvements**：[Custom 2D Lights](https://docs.unity3d.com/6000.5/Documentation/Manual/urp/custom-2d-light.html)、[Custom 2D Shadows](https://docs.unity3d.com/6000.5/Documentation/Manual/urp/custom-2d-shadow.html)、GameObjectを介さずSpriteを描画するRenderSprite API、[2D Profiler](https://docs.unity3d.com/6000.5/Documentation/Manual/sprite/profiler-2d.html)改善、Entity ID tiles、Spriteの[BlendShape API](https://docs.unity3d.com/6000.5/Documentation/ScriptReference/Sprite.AddBlendShape.html)、[Physics Core 2D built-in module](https://docs.unity3d.com/6000.5/Documentation/Manual/2d-physics-api/2d-physics-api-landing.html)が追加
- **Visual Effects & Shaders Authoring Improvements**：Shader Graphとshader authoringまわりの更新
  - **Improved Graph Template Workflows**：[Graph Template Workflows](https://discussions.unity.com/t/graph-template-workflows/1718175)として、Decal ProjectorsやFullscreen Renderer Featureからtemplateを使ってgraphを作成でき、Template Windowのsorting、filtering、favoritesも強化
  - **Shader Subgraph Improvements and Switch Node**：[Shader Subgraph Improvements in Unity 6.5](https://discussions.unity.com/t/shader-subgraph-improvements-in-unity-6-5/1705859)として、Subgraph向けにInline Editors、Input Constraints、Switch Nodeが追加
  - **Shader Function Reflection API**：[Shader Function Reflection API](https://discussions.unity.com/t/shader-function-reflection-api/1708277)により、HLSL fileに書いたcustom shader functionをShader Graphへ自動的に反映
- **3D Graphics Optimization**：[PSO Tracing](https://docs.unity3d.com/6000.3/Documentation/Manual/shader-pso-introduction.html)とPSO cachingのワークフローが強化
  - **PSO Tracing**：Caching miss tracing、codeless tracing、automatic tracing、warming、Pipeline State Objectのinspectionを追加
  - **VFX Graph prewarm API**：[PSO Caching Improvements in Unity 6.5](https://discussions.unity.com/t/pso-caching-improvements-in-unity-6-5/1719264)で、VFX Assetsが使うcompute shaderをprewarmするAPIも紹介
- **More Effects and HDR Rendering on Mobile**：On-Tile Post ProcessingとTile-Only Modeにより、対応モバイルGPUでHDR、tone mapping、color grading、vignetteなどをtile上で処理しやすくする改善
- **Lighting Search - New Light Explorer**：[Unity Search framework](https://docs.unity3d.com/Manual/search-overview.html)上に構築され、Light Explorerの課題を補う検索、フィルタ、編集のワークフローとしてLighting Searchが追加
- **Graph Toolkit - Enhanced Authoring and Graph Customization**：Unity 6.4でEditorのcoreに入ったGraph Toolkitに、programmatic graph操作、untyped variables、collections、見た目のカスタマイズが追加
- **UI Systems**：uGUIとUI Toolkitの更新
  - **uGUI - Usability and API improvements**：[RaycastReceiver](https://docs.unity3d.com/Packages/com.unity.ugui%402.5/manual/UIVisualComponents.html)、[TextMesh Pro](https://docs.unity3d.com/Packages/com.unity.ugui%402.0/manual/TextMeshPro/index.html)のcustom asset loading callback、GridLayoutGroupやSelectableのAPIが追加
  - **UI Toolkit - Performance and Foundation Improvements**：[performance and profiling](https://discussions.unity.com/t/ui-toolkit-performance-update-in-6-5/1716685)改善としてComputed Style関連のunmanaged memory化、[Advanced Text Generator](https://discussions.unity.com/t/advanced-text-generator-atg-now-default-in-6-5/1715871)の既定有効化、UIDocumentから発展した[PanelRenderer](https://discussions.unity.com/t/panelrenderer-evolution-of-the-uidocument-component-in-6-5/1715909)が追加
- **Platforms**：各プラットフォーム向けのbuild、runtime、deploymentの更新
  - **Apple Swift Project Type**：[Swift Xcode Project Type](https://discussions.unity.com/t/apple-swift-xcode-project-type-for-ios-ipados-and-tvos-available-in-unity-6-5/1713471)として、iOS、iPadOS、tvOS runtime target向けにSwift-firstなplugin workflowとpublic APIの土台を導入
  - **Android Performance Improvements**：[Android Performance Improvements](https://discussions.unity.com/t/boosting-android-performance-with-lto-optimizations-in-unity-6-5/1720008)として、Android向けにThinLTO版Unity Engine libraryとIL2CPP Compiler Master Configurationの性能改善を提供
  - **Android: Making it Easier to Adapt to Multiple Screen Configurations**：[System Bars API](https://docs.unity3d.com/6000.5/Documentation/Manual/android-manage-system-bars.html)と[foldable関連API](https://docs.unity3d.com/6000.5/Documentation/ScriptReference/Android.AndroidFoldingFeature.html)により、画面構成やhinge状態の変化に対応しやすくする改善
  - **HDRP for Nintendo Switch™ 2**：Nintendo Switch 2向けにHDRPが公式対応し、physical light units、physical sky、volumetrics、advanced shadowsを利用でき、[PGA Tour 2K25](https://youtu.be/N5LJk-IieQ4)の例も紹介
  - **Web Assembly 2023 on by Default**：WebAssembly 2023が既定になり、playback engine variationの整理とenhanced code stripping関連のbuild time改善が追加
  - **DirectStorage using AsyncReadManager C# API on Windows**：WindowsのC# AsyncReadManager interfaceが新しいlow level I/O architectureを使うようになり、DirectStorageを利用可能
  - **Xbox PC Remote Iteration support in Windows Build Profile**：[Xbox PC Toolbox](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-pc/xboxpctoolbox/xboxpctoolbox)を使い、Windows Build ProfileからXbox PC Remote Iterationを選んでpaired devkitへone-clickでremote deployment可能
- **Audio Workflows - Generators Access to clip data**：AudioClip dataをgeneratorから扱うための更新
  - **Scriptable Generators**：AudioClipが[Generators](https://docs.unity3d.com/6000.5/Documentation/Manual/audio-scriptable-processors-generators.html)として`IAudioGenerator`と`ICapabilities`を実装し、nested scriptable generator treeのleafとして利用可能
  - **Audio Random Container**：[Audio Random Container](https://docs.unity3d.com/6000.5/Documentation/Manual/AudioRandomContainer-UI.html)をnested generator treeで再実装した例も紹介
  - **Experimental Enhanced Audio Foundation (EAF) to mobile platforms**：Enhanced Audio FoundationはWindows、Mac、iOS、Android、Xboxで既存audio backendの代替として利用可能
- **Package Manager - Samples View**：[Unity Core Standards](https://unity.com/core-standards)の取り組みとしてSamples Viewが追加され、インストール済みパッケージと依存パッケージのsampleを横断的に検索し、説明や元パッケージを確認してimport可能
- **Cloud Code - Experimental Package for Stateful Cloud Code and Local Server**：[Stateful Cloud CodeとLocal Cloud Code Server](https://discussions.unity.com/t/new-cloud-code-features-to-develop-deploy-and-grow-your-games/1718489)の実験パッケージが追加され、server-side stateの保持とlocal serverでの反復開発が可能

### Audio status update Q2 2026

[Audio status update Q2 2026 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/audio-status-update-q2-2026/1723396)

Unity 6.5に入ったAudio関連の更新として、Scriptable Audio PipelineとEnhanced Audio Foundationの進捗を共有するディスカッションです。

Scriptable Audio Pipelineでは、AudioClipが`IAudioGenerator`と`ICapabilities`を実装し、nested scriptable generator treeのleafとして扱えるようになりました。

各オーディオクリップのジェネレーターは、メモリ上のclipでもディスクストリーミングのclipでも、非同期ジョブでchunk単位にデコードするパイプラインで処理されます。

サンプル実装として、簡易版Audio Random Containerをnested generator treeで再実装したプロジェクトも公開されています。

これに伴って、AudioClipをAudioSource経由ではなくgeneratorとして直接instantiateする`AudioClip.CreateInstance(...)`や、async clip loadの状態を扱う`GeneratorInstance.Result`の拡張などのAPIが追加されています。

また、Enhanced Audio Foundationは主要Unityプラットフォーム向けの基盤実装とテストが進んでおり、将来的な起動高速化、デバイス遷移、明示的な出力選択、multi-output、native endpoint spatializer、haptics統合などが可能になることを説明しています。

Unity 6.5では、Windows・Mac・iOS・Android・Xboxで既存オーディオバックエンドの代替として透過的に利用でき、エディター起動の際に `-showAudioFoundationUI` フラグを指定することで、プロジェクト設定セクションにオプションが表示されるようです。

### CoreCLR, Scripting, and Serialization Update - June 2026

[CoreCLR, Scripting, and Serialization Update - June 2026 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/coreclr-scripting-and-serialization-update-june-2026/1723299)

CoreCLR、Scripting、Serializationの四半期アップデートとして、Unity 6.6、6.7、6.8に向けた移行計画を共有するディスカッションです。

- **Unity 6.6**：新規プロジェクトのEnter Play Mode設定はscene reloadのみになり、code reloadを行わずstatic stateがリセットされない設定がデフォルトに
  - **Dictionary serialization**：`[SerializeField]`を付けた`Dictionary`フィールドをInspector上の2列レイアウトで編集し、ネイティブシリアライズで永続化
  - **`com.unity.serialization` deprecation**：公式のシリアライズパッケージが非推奨に。直接依存している場合は一時的にpackageをlocal embedしつつ、長期的には`System.Text.Json`、Odin Serializer、MemoryPackなどへの移行を推奨
  - **Burst integration**：Burstがcore engineへ統合される
- **Unity 6.7 LTS**：Experimental CoreCLR Desktop PlayerとExperimental IL2CPP PlayerをPublic Experimental Releaseとして提供
- **Unity 6.8**：Monoを取り除き、CoreCLR-backed EditorとCoreCLR Desktop Player、.NET 10、C# 14をサポート
  - **Optimization**：6.8初期段階は機能と性能のparityを優先し、本格的な最適化は2027年の次期LTS以降に持ち越し

### XREAL AURA Support Now Available in Unity 6.5!

[XREAL AURA Support Now Available in Unity 6.5! - Unity Engine - Unity Discussions](https://discussions.unity.com/t/xreal-aura-support-now-available-in-unity-6-5/1723292)

Unity 6.5でXREAL AURAが公式サポートされたことをアナウンスしています。

このサポートでは、Android XR向けのSingle APK deploymentにより、Samsung Galaxy XRとXREAL AURAを1つのビルドで対象にできます。

また、XREAL AURAのpuck deviceではUnityでの入力操作を完全にサポートしており、trackpad inputがUnity Input SystemとXR Interaction Toolkitにマッピングすることで、既存の入力ワークフローでナビゲーションやインタラクションを扱えるようになっているとのことです。

利用にはUnity 6.5以降のAndroid XR Build Profileを使い、Unity OpenXR: Android XR 1.3.1以降、OpenXR Plugin 1.18以降、XR Interaction Toolkit 3.4.0以降が推奨されています。

### Now available: Unity Hub 3.18.3

[Now available: Unity Hub 3.18.3 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/now-available-unity-hub-3-18-3/1722261/2)

Unity Hub 3.18.3がリリースされています。

このリリースでは、前回のHubプロセスが完全に終了しなかったあとにHubを開くとクラッシュする問題、Microsoft Visual C++ Redistributableが入っていないWindows環境でHubが起動しない問題、サインアウト後にanalytics opt-in設定が一貫しなくなる問題が修正されています。

このディスカッションでは、Unity Hub 3.18.2の変更も併記されていて、Editorのセキュリティ警告をdismissできるようになったこと、Windows ARM64でEditorインストールに失敗する問題の修正、module checksum downloadのproxy対応、GitHub連携、New Project、custom templateまわりの修正などがまとめられています。

### Unity Core Standards: New Features and What’s Next

[Unity Core Standards: New Features and What’s Next - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-core-standards-new-features-and-what-s-next/1723174)

Unity Core Standardsの取り組みとして、Package Managerの署名、透明性、安全性まわりの更新を共有するディスカッションです。

Unity 6.4では、署名がない、または署名が不正なパッケージをインストールする際に警告ポップアップを出し、外部由来または未署名のパッケージを追加するリスクを明示するようになっています。

Unity 6.5ではPackage ManagerにSamples Viewが追加され、インストール済みパッケージと依存パッケージに含まれるサンプルを横断的に検索できるようになります。

また、CI/CDなどでの利用を想定して、Unityを起動せずともパッケージ署名ができるUPM CLIのリリースも合わせて案内しています。

### Localization Package 1.5.12

- [Localization Package: Release Announcements and Notes - Unity Engine - Unity Discussions](https://discussions.unity.com/t/localization-package-release-announcements-and-notes/724838/45)
- [Changelog | Localization | 1.5.12](https://docs.unity3d.com/Packages/com.unity.localization@1.5/changelog/CHANGELOG.html)

Localization package 1.5.12の公開をアナウンスしています。

1.5.12では、TextCore FontAssetをローカライズする `LocalizedTextCoreFontAsset`、UI ToolkitやUGUI、TMPをまたいだdropdownのローカライズ対応、UGUIとTMP向けの `LocalizedStringListEvent` 対応、UI Toolkit dropdown choicesと `LocalizedStringList` または `LocalizedStringGroup` のbinding対応が追加されています。

`TableReference.OnBeforeSerialize` から複数スレッドで呼ばれる可能性がある `StringFromGuid` マルチスレッド問題や `IVariable.Value` 代入時のアロケーション、macOS向けXcode projectでlocalization filesが正しく設定されない問題、英語localeを含まないiOSプロジェクトでInfoPlist.stringsが見つからずXcode buildに失敗する問題などが修正されています。

### 「ユニティちゃんピクセルアートパック for アクションゲーム Vol.2」を使ってみよう！

- [Unity 2D開発チームがリリースした「ユニティちゃんピクセルアートパック for アクションゲーム Vol.2」を紹介します。 - X](https://x.com/unity_japan/status/2067079786938163606)
- [「ユニティちゃんピクセルアートパック for アクションゲーム Vol.2」を使ってみよう！ - YouTube](https://www.youtube.com/watch?v=1y-b743ofOI)
- [『コーゲンシティ・オールスターズ！』ユニティちゃんピクセルアートパック for アクションゲーム Vol.2 - UNITY-CHAN! OFFICIAL WEBSITE](https://unity-chan.com/download/releaseNote.php?id=UnityChanPixelArtPackVol2)

Unity Japanが、Xで「ユニティちゃんピクセルアートパック for アクションゲーム Vol.2」の紹介を投稿しています。

このパックは『コーゲンシティ・オールスターズ！』のピクセルアート素材集で、公式ページでは最新バージョン3.0が公開されています。

3.0では、Aseprite版のAnimation ClipとAnimation ControllerやAsepriteアニメーションを使うサンプルシーンなどが追加されています。

## Slides

### Unity 物理 完全に理解した 勉強会

[Unity 物理 完全に理解した 勉強会 - connpass](https://unity-fully-understood.connpass.com/event/393961/)

2026/06/19に開催された「Unity 物理 完全に理解した 勉強会」の講演動画および一部LT資料が公開されています。

また、有志によるまとめ記事も投稿されています。

- 講演動画
    - [Unity 物理 完全に理解した 勉強会 - YouTube](https://youtu.be/yQnnzkLLiXQ)
- リポジトリ
    - [samstarke/legend-of-mario](https://github.com/samstarke/legend-of-mario)
- スライド資料
    - [物理の掛け合わせ 〜7つの機構で学ぶ物理演算 - Speaker Deck](https://speakerdeck.com/dsgarage/wu-li-nogua-kehe-wase-7tunoji-gou-dexue-buwu-li-yan-suan)
    - [Low-level Physics 2D で作るク○物理ゲー](https://tnayuki.dev/slides/unity-fully-understood-physics)
    - [Unity6.5におけるUnity Physics - ドクセル](https://www.docswell.com/s/nuskey/57N42D-unity65-physics)
- まとめブログ
    - [〖勉強会レポ〗: Unity 物理 完全に理解した 勉強会 - Raspberlyのブログ](https://raspberly.hateblo.jp/entry/UnityPhysicsComplete)

## Articles

### Unity AddressablesのBundle分割とLZ4/LZMA圧縮を実務目線で考える

[Unity AddressablesのBundle分割とLZ4/LZMA圧縮を実務目線で考える - Zenn](https://zenn.dev/gamedev_toollab/articles/268ef4a46efbb5)

AddressablesのBundle分割と圧縮形式を、実務上の判断基準として整理しています。

Bundle分割がダウンロード単位、キャッシュ単位、更新単位、ロード単位に影響する点や、LZ4 / LZMAの使い分け、実機計測の必要性について触れています。

### Unity6.5でMathmaticsパッケージがビルドインになり、いくつかの未実装だった「暗黙の型変換演算子」も追加された

[Unity6.5でMathmaticsパッケージがビルドインになり、いくつかの未実装だった「暗黙の型変換演算子」も追加された - Qiita](https://qiita.com/RyotaMurohoshi/items/65e26605907c7742fa50)

Unity 6.5で`Unity.Mathematics`がcore Editor / Engineのbuilt-in moduleになったことと、UnityEngine側の数学型との暗黙変換の追加について整理しています。

`Vector2Int`と`int2`、`Vector3Int`と`int3`の暗黙変換追加や、UnityEngine math APIsとUnity Mathematicsの使い分けにも触れています。

### Editor拡張を綺麗に実装したい！！！（Unity）

[Editor拡張を綺麗に実装したい！！！（Unity） - Zenn](https://zenn.dev/daikichi228/articles/872c73dd3df7e2)

ProjectビューのPrefabを選び、インスタンス化してTransformを操作できるEditor拡張を題材に、Editor拡張の責務分割を検討しています。

`EditorWindow`、Prefab選択、Transform設定、Prefab生成を、Model / View / Presenter / Controllerと自作DIContainerに分ける設計例を紹介しています。

### ClaudeCodeとCodexにコーディングを全て任せて商用レベルのUnityゲーム開発を行う

- [ClaudeCodeとCodexにコーディングを全て任せて商用レベルのUnityゲーム開発を行う【前編】 #AI - Qiita](https://qiita.com/archeleeds/items/6fbf02174f308e31f284)
- [ClaudeCodeとCodexにコーディングを全て任せて商用レベルのUnityゲーム開発を行う【後編】 - Qiita](https://qiita.com/archeleeds/items/6ec24ba4942973a1ce0b)

前編では、作るゲームの前提、自作フレームワークLighthouseとunity-cli-loopを使った開発環境、Claude Code単体やCodex併用での試行錯誤を紹介しています。

後編では、design、guidelines、roadmap、self-reviewの4種類のドキュメントを用意し、AIのセッションが切り替わっても文脈を復元しやすくする運用を紹介しています。

### UPMパッケージをPackage Signatures対応する

[UPMパッケージをPackage Signatures対応する - Zenn](https://zenn.dev/asus4/articles/89c8ae3a1bb891)

GitHubやOpenUPMで公開しているUPM packageを、Unity Package Signaturesに対応させる手順をまとめています。

EditorのExportから署名付き`.tgz`を作る方法や、Unity Package Manager CLIとGitHub Actionsを使ってCIで署名済みpackageを公開する構成を紹介しています。

### Unity NGO (Netcode for GameObjects) 入門

[Unity NGO (Netcode for GameObjects) 入門 - Qiita](https://qiita.com/Mu-san1028/items/e2e39e75a05c8973409d)

Netcode for GameObjectsの基本概念を、3Dサンプルゲームを作りながら確認する入門記事です。

Host、Client、Server、`NetworkVariable<T>`、`ServerRpc`、`ClientRpc`、`NetworkObject`、`NetworkTransform`などを順に説明しています。

### UnityからWebXR 書き出しをしてみる

[UnityからWebXR 書き出しをしてみる - Zenn](https://zenn.dev/asus4/articles/9dd5f98fa99f26)

Meta Quest向けアプリをStore配信せずに試してもらう手段として、UnityからWebXRへ書き出す検証をまとめています。

`unity-webxr-export`を使ったMeta Quest 3 Browserでの動作確認や、Brotli圧縮、WebGPU非対応、ファイルサイズなどの注意点を紹介しています。


## Repositories

### Unity-Technologies/UnityCsReference

- [Unity-Technologies/UnityCsReference](https://github.com/Unity-Technologies/UnityCsReference)
- [UnityCsReference が更新されました 6000.6.0a7 までカバー - X](https://x.com/_kzr/status/2067399605931962551)

UnityのC# reference sourceを公開する `UnityCsReference` が更新され、Unity 6000.6.0a7までのC# reference sourceが更新されました。
