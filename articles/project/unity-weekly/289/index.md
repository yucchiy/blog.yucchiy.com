---
type: unity-weekly
title: Unity Weekly 289
description: >-
  2026/09/28週のUnity Weeklyです。Unity公式のExternal Dependency Manager、Content directories、The Path to CoreCLR #2、Unity CLI 1.0.0-beta.11などを紹介しています。
pubDatetime: 2026-09-28T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Content directories: Beyond the AssetBundle

[Content directories: Beyond the AssetBundle - Unity Blog](https://unity.com/blog/content-directories-beyond-the-assetbundle)

Unity 6.6で使えるようになったAssetBundleの代替となるContent directoriesの仕組みを、ビルド、アドレッシング、ロードの各段階に分けて解説するブログ記事です。

AssetBundleは配布・保存・ロードの不可分な単位で、依存関係もバンドル単位で追跡するため、そのレイアウトが実行時性能からダウンロードサイズまでを左右してきたと振り返っています。

Content directoriesはアセットを大きなロード単位に焼き込まず、メッシュやテクスチャなどの個々のアーティファクトを個別に識別・ロード・アンロードできるようにし、ハードウェアリソースの活用、暗黙的にコンテンツ重複を排除できるとしています。

Unity 6.6ではPlayer同梱のAssetBundleの代替に使え、Unity 7以降ではアーティファクト単位のリモート配信へ拡張する計画とのことです。
Player同梱のコンテンツの管理にAddressablesを使っている場合は、コード変更なしで[Content directoriesへ切り替え](https://docs.unity3d.com/Packages/com.unity.addressables@4.0/manual/convert-content-directories.html)られます。

ビルドは標準のasset importerフレームワーク上で各アセットの処理を個別に行い、Unity 2023.1で予告したmulti-process build pipelineと同じ基盤を利用しているとのことです。
出力されるアーティファクトはgitと同じくコンテンツのハッシュで命名されるため重複排除が自然に効き、アーティファクト間の参照は安定したIDで行うことでハッシュ変更の連鎖を防いでいます。

ロードはマニフェストから依存を解決してアーティファクトごとに独立して行え、読み込みとデシリアライズの両方が非同期で実行され、また、`Load()` を呼ぶまでロードされないエンジン組み込みの参照型 `Loadable<T>` が追加されました。

計測例として、Slime Rancher 2をAddressablesのAssetBundleバックエンドからコード変更なしで切り替えたところ、インクリメンタルビルドが32分16秒から3分4秒、Playerビルドサイズが4GBから2.88GB、起動からゲームプレイまでのロード時間が45秒から30秒になったとのことです。

リモート配信については、manifestがハッシュでアーティファクトを識別できることを活かし、端末に無いものだけを差分でダウンロードする計画で、詳細は2027年に共有する予定とのことです。

はじめ方は[ドキュメント](https://docs.unity3d.com/6000.6/Documentation/Manual/content-directories-introduction.html)を参照し、フィードバックは[Asset & Content Managementカテゴリ](https://discussions.unity.com/c/asset-and-content-management/90/none)へ送るよう案内しています。

### Introducing External Dependency Manager (EDM): Unity's official package for mobile native dependencies

[Introducing External Dependency Manager (EDM): Unity's official package for mobile native dependencies - Mobile - Unity Discussions](https://discussions.unity.com/t/introducing-external-dependency-manager-edm-unitys-official-package-for-mobile-native-dependencies/1737255)

AndroidとiOSのネイティブ依存を管理するUnity公式パッケージ[External Dependency Manager](https://docs.unity3d.com/Packages/com.unity.external-dependency-manager@2.1/manual/index.html)（EDM）2.1.0のリリースを告知するディスカッションです。

このライブラリは[GoogleのEDM4U](https://github.com/googlesamples/unity-jar-resolver)のフォークで、その上に手を加えてUPM経由で配布する公式サポートパッケージにしたとしています。
今後はUnityがエンジン互換性の維持、機能追加、不具合修正を行い、モバイル依存管理をエンジンの第一級機能にする最初の一歩と位置付け、Googleとも協業していくと述べています。

無料でUnity 2022.3以降に対応し、EDM4UのXML依存定義形式、AndroidのGradle解決、iOSのCocoaPodsとSwift Package Managerをサポートします。

- What are the differences between Unity EDM and Google's EDM4U?
    - コア機能は同じで、依存定義のXMLファイルの互換性とGradle・CocoaPods・　Swift Package Managerの対応を持つ
        - RubyとCocoaPodsのインストール検出を改善し、UIを他の公式パッケージに揃え、最近のUnityバージョンとの互換性を上げた
    - EDM4Uにあった機能のうち、Package Manager resolver（UPMが担当）、Pre-Gradle resolution（Gradleが担当）、ABI StrippingとManifest Variable Processing（廃止済み機能）は提供せず、VersionHandlerは非推奨となる
- I am a game developer - how can I try EDM?
    - Package ManagerのUnity Registryから `External Dependency Manager` を検索してインストールする
        - 別の依存マネージャが入っている場合はどちらをアクティブにするか尋ねられ、アクティブなものが、SDKが持ち込んだものを含む全XML依存を処理する
    - 破壊的な操作や削除は行わないため、納得できるまで自由に[切り替えて](http://docs.unity3d.com/Packages/com.unity.external-dependency-manager@2.1/manual/get-started-with-edm.html#select-a-dependency-manager)評価できる
        - SDK経由でOpenUPMから入った旧マネージャは、アンインストールするとSDKも外れるため、SDKが移行するまで残すよう勧めている
- I am an SDK maintainer - how can I transition my Unity plugin and customers to using EDM?
    - [パッケージへの依存を宣言](https://docs.unity3d.com/Packages/com.unity.external-dependency-manager@2.1/manual/get-started-with-edm.html#plug-in-distributor-guide)して旧マネージャへの依存を外すか、UPMからのインストール手順を自分のドキュメントで案内する
    - 2022.3より古いバージョンをサポートする場合は引き続き別の手段を案内する必要がある

### The Path to CoreCLR #2: Embedding CoreCLR

[The Path to CoreCLR #2: Embedding CoreCLR - C# & .NET - Unity Discussions](https://discussions.unity.com/t/the-path-to-coreclr-2-embedding-coreclr/1737339)

CoreCLRへの移行を振り返るシリーズの第2回として、CoreCLRをUnityに組み込んで動かすまでの最初の関門を解説するディスカッションです。
第1回は[The Path to CoreCLR #1: The Problem](https://discussions.unity.com/t/the-path-to-coreclr-1-the-problem/1733018)です。

- What is this embedding thing all about
    - UnityはネイティブなC++プログラムで、ユーザーのC#を呼ぶためにC#ランタイムをアプリケーション内で読み込み・起動している
        - 共有ライブラリのロード、BCLやユーザーDLLのパス設定、.NET VMの初期化という順序で実行する
        - 全てMonoが20年近くサポートしてきたEmbedding APIで、これを数回呼ぶだけで済んだ
    - Unityはmonoにリンクせず実行時に動的ロードし、数百の関数を名前で探して関数ポインタに格納する
        - 1つの `MonoFunctions.h` に `DO_API` マクロで関数一覧を書き、型定義・変数宣言・シンボル解決の3回のインクルードで展開する「X-macro」パターンを使っている
- Connecting the Dots
    - 最初にCoreCLRを新しいスクリプティングバックエンドとして各所のEnumやEditor UIを更新し、ビルドコードに組み込み、CIをMonoと同等にした
    - ドメインリロードを気にしなくてよいStandalone Playerから着手し、これらの対応をユーザーに見えないよう開発者ビルドのチェックの裏に隠した
- Path of least resistance
    - Microsoftが提供するのは `coreclr_initialize` などのAPIだけで、Monoが提供するEmbedding APIに相当するものがない
        - 必要なAPIを精査して実装し直すのではなく、CoreCLRのフォーク内に `mono_field_get_name` など `MonoFunctions.h` と同じ名前・シグネチャの関数をエクスポートして「CoreCLRにMonoのコスチュームを着せた」
        - `MonoClassField_clr` はCoreCLRの `FieldDesc` のtypedefで、内部型システムに直接手を伸ばしている。
    - 数年かけて既存製品に影響を与えず取り込むには、これが最速で安全な方法だったと説明している
    - 一方でCoreCLRのGCは移動・圧縮するため、CoreCLRをMonoとして動かすために大量のGC非安全なコードを記述することになった
        - 上流のdotnet/runtimeで保証されない内部APIへ依存する実装を書いたことで技術的負債を抱え、フォークの維持が高コストになった
        - これは後で解決する問題になる

この段階でCoreCLRがUnity内で初期化を試みるところまで到達し、次回はCoreCLRを完全に動かすまでに直面したGC安全性の問題を扱う予定とのことです。

### Unity CLI 1.0.0-beta.11 is rolling out

[Unity CLI 1.0.0-beta.11 is rolling out - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-cli-1-0-0-beta-11-is-rolling-out/1737353)

Unity CLI 1.0.0-beta.11のリリースを告知するディスカッションです。
このリリースでは、フルビルドを省いたコンパイル確認、ターミナルからの `.unitypackage` のエクスポート・インポート、プロジェクトのUnityバージョンに合わせたドキュメント参照が中心です。

- Added
    - `unity recompile`: 起動中のEditorでスクリプトがコンパイルできるかをフルビルドなしに確認し、エラーをファイルと行付きで一覧する
        - 成功は `0`、コンパイルエラーは `6`、Editor無応答は `7` の終了コードでCIが再試行すべき失敗と区別できる
        - `--strict` で警告も失敗にする
    - `unity assets export <asset-path...> --output <file.unitypackage>` / `unity assets import <file.unitypackage>`: 依存を含めた（`--no-dependencies` で除外）エクスポートと、Editor起動前にパッケージとプロジェクトを検証するインポート
    - `unity docs <topic>`: プロジェクトのUnityバージョンに合ったドキュメントを開く
        - `--manual`、`--search`、`--url`、`--editor-version` を持つ
    - `unity cloud org create <name>`、Unity Build AutomationとUnity Pipeline Automationを読み取り専用で参照する `unity pipeline cloud-build` / `unity pipeline automation`、Editorログをファイルへ書く `unity run --log-file <path>`、Unity Issue Tracker MCP serverを追加する `unity mcp configure --server issue-tracker`、インストール先が消えたEditorを報告・削除する `unity editors prune`
    - `install.sh` / `install.ps1` は安定版が出るまで、チャネル未指定なら最新betaをインストールする
- Fixed
    - `unity build run` が圧縮WebGLビルドを正しいヘッダーで配信せずFirefoxを含むブラウザで読み込めなかった問題、`unity open` がUnity Cloud連携プロジェクトでUnity Connectを半端に設定して「Unity Connect configuration is invalid」やEditorの高CPU使用を招いていた問題、`unity job wait` が実作業中に成功を報告していた問題を修正
    - LinuxのモジュールインストールがUnity側リリースデータの誤ったチェックサムで失敗するため、データ修正まではUnity Hubと同様にLinuxのモジュールだけチェックサム検証を省く
    - ホストに複数アドレスがある、またはローカルproxyがIPv6のみで待ち受ける場合の「address incompatible with the selected protocol」、WindowsでPACがスキームごとにproxyを返す場合の扱い、実行元フォルダが消えた場合の `unity self-update` の失敗、`Packages/manifest.json` に `com.unity.pipeline` が重複している場合の `unity pipeline install` / `upgrade` のクラッシュなどを修正
    - 使い方の誤りも `--format json` / `--format ndjson` に従い、`INVALID_COMMAND_ARGS` コードの構造化結果を返す（終了コードは2のまま）
- Security
    - `unity bug` が収集するログからホームディレクトリのパス、ユーザー名、トークン、メールアドレスをマスクする（`--attachments` で追加したファイルはそのまま）
    - Linuxで `.pkg` モジュールの展開が既存のsymlinkを通して書き込まないようにし、hardened auth-brokerはtoken storeやpolkitポリシーの設定不備時に起動を拒否する

更新は `unity self-update`、完全なリリースノートは[ドキュメント](https://docs.unity.com/unity-cli/release-notes)で確認できます。

### Graphics Livestream: Unanswered questions

[Graphics Livestream: Unanswered questions - Graphics - Unity Discussions](https://discussions.unity.com/t/graphics-livestream-unanswered-questions/1737509)

先日の[graphics livestream](https://www.youtube.com/watch?v=_zclpXNtK9E)のQ&Aで配信中に答えられなかった16の質問に、グラフィクスチームが回答するディスカッションです。

- Unity 6.7で入るもの
    - Shader Graphのstencil対応（Package Managerにサンプルあり）、URPでのDLSS 4.5とFSR 3 / FSR 4の対応、Upscalerの公開
    - Volumetric Fogはpreviewを6.7で試せるようにし、正式版は7.x初期に出す
        - 最初はHDRPの実装に近く、7.xを通じて低スペック機向けのスケーラビリティを改善する
- Neural Texture Compression（NTC）
    - デモで見せたものはプロトタイプで、まだ出荷していない
    - NVIDIAの研究を土台に、block-compressed decodeを避けてデコーダをtile memory内に置く移植性重視の設計で、専用の行列ハードウェアのないスマートフォンでも動く
    - キャプチャ、学習、パッキングを行うツールを「Neural Rendering Framework」として提供し、Unity 7のリリースサイクルで出す計画
        - デコーダはFP16で重みをシェーダー定数として焼き込み、latentはRGBA4444でテクスチャユニットのフィルタリングをそのまま使うため、FP8にすると2倍のサイズになりハードウェアフィルタも失う
    - NTCは決定的でテンポラル蓄積は不要
        - サンプルごとのデコードが重い環境では起動時に1回デコードする選択もでき、その場合はダウンロード・インストールサイズの削減は残るがGPUメモリの削減は得られない
- Shader Graphの拡張
    - 任意のoutput stackを許すとレンダーパイプラインとの契約が崩れてアップグレードで壊れるため計画していない
        - 代わりにパイプライン側のシェーダーがオーバーライド可能な関数と構造体を宣言し、フォークせずに拡張する「Shader Interfaces」を開発中で、Shader Graph統合は7.x初期を目指す
        - URP Litのsurface / lighting入力構造体にメンバーを足してシェーディング関数を差し替える、といったカスタムライティングを想定している
    - Master Nodeのオーサリングは、Unity 7でinterfaceによる新しいシェーダー記述が入った後にShader Function Reflection APIと同様の形で検討する可能性がある
- その他
    - SCGI（surface cache GI）の現在のデノイザーはDLSS Ray Reconstructionを使っておらず、広いプラットフォームカバレッジとスケーラビリティを優先している
    - Gaussian splattingレンダラーは計画していない
        - マテリアルテクスチャの代替としてもmobile GPUに向かないが、octahedral imposterの代替としては有望と見ている
    - GPUで手続き生成したジオメトリのレイトレーシングは、CPU側でmaterializeしてBVHへ入れるか、Surface Cacheのカーネルを改造する必要があり、どちらも今は簡単なAPIがない
    - world-space reflectionは長期的な方向性だが、reflection probeの近代化と直接光・シャドウ・間接光へのレイトレーシング投入を優先するため2027年のロードマップにはない
        - Unified ray tracing APIは既に使え、自前のシェーダーからinline ray tracingを呼べる

### Meta VR Glasses are coming. Build with Unity from day one.

- [Unity Announces Day-One Support for Meta VR Glasses - XR - Unity Discussions](https://discussions.unity.com/t/unity-announces-day-one-support-for-meta-vr-glasses/1736824)
- [Meta VR Glasses are coming. Build with Unity from day one. - Unity Blog](https://unity.com/blog/build-for-meta-vr-glasses-with-unity)

Meta Connect 2026で発表されたMeta VR Glassesを、UnityがUnity 6.6以降でday-oneサポートすることを告知するディスカッションと、その内容を紹介するブログ記事です。

VR Glassesはコントローラーを持たず、ハンドとアイ入力が主な操作手段になるデバイスです。
Questと同じOpenXRスタックの上にあるため、既存のQuestプロジェクトはほぼそのまま持ち込めるとしています。

- Improved Input Support
    - Unity 6.6からハンドとアイのインタラクション対応を強化し、対象を見てピンチするだけで近くも遠くも選択できる
    - OpenXRのdynamic foveationにより、視線の先だけ描画品質を上げて他は抑えることで描画予算を確保する
- Expanded Hand Tracking Features
    - ヘッドセットのカメラ視野外にある手も追跡するWide Motion Mode、必要な追跡精度をシステムへ伝えるFrequency Hintに対応
    - 実機で記録したポーズから再利用可能な `XRHandShape` アセットを作るXR Hand Captureと、XR Interaction SimulatorのHands Simulationで、デバイスを装着せずにジェスチャーをEditor上で試せる
- Spatial Audio Built for Immersive Entertainment
    - Unity 6.6で7.1chに高さ方向の4chを加えた7.1.4サラウンドに対応
- Performance That Keeps Hands Responsive
    - 解像度、LOD、エフェクトを段階的に下げてフレームレートの急落を避けるAdaptive Performance for XRと、Vulkan GPUのプロファイリングツールの改善
    - 各眼を低解像度の全体と中心の高解像度の2ビューで描くQuad Viewsと、バリアント削減やコンパイルオーバーヘッド削減によるシェーダー最適化
- Getting started
    - Meta Quest Build Profileを起点にし、[OpenXR: Meta](https://docs.unity3d.com/Packages/com.unity.xr.meta-openxr@2.6/manual/index.html) 2.6.1、AR Foundation 6.6.2以降、OpenXR Plugin 1.18.0以降、XR Interaction ToolkitとXR Hands 1.9.0以降を入れる
    - 実機到着前は[XR Interaction Simulator](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@3.6/manual/xr-interaction-simulator-overview.html)で検証し、コントローラー前提のUIと入力設計を見直す

ブログ記事では、Two Point Hospital – Mixed Reality EditionやDragon Grove、Supernaturalなどのローンチタイトルの開発者コメントと、[VR Template](https://docs.unity3d.com/Packages/com.unity.template.vr@10.0/manual/index.html) / [VR Multiplayer Template](https://docs.unity3d.com/Packages/com.unity.template.vr-multiplayer@2.2/manual/index.html)に関する案内が行われています。

10月1日9:00 PTに、MetaのAR Schleicher氏とDilmer Valecillos氏を招いた[ライブ配信](https://youtube.com/live/uaayV72DCNk)でeye tracking、microgesture、quad views renderingのデモと導入手順を紹介する予定とのことです。

### From simulation to real-world deployment: Unity Simulation Pro early access

- [Unity Robotics: Closing the Sim2Real Gap with Simulation Pro - Industry Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-robotics-closing-the-sim2real-gap-with-simulation-pro/1736757)
- [From simulation to real-world deployment: Unity Simulation Pro early access - Unity Blog](https://unity.com/blog/unity-simulation-pro-early-access)

ロボティクス向けパッケージUnity Simulation Proの早期アクセス開始を告知するディスカッションと、その背景と事例を紹介するブログ記事です。

Unity上に散在していたロボティクス開発向けの機能とワークフローを1つのパッケージに統合したもので、Unity 6.3以降でプロダクションサポートされ、早期アクセスはUnity Industryの開発者向けに行われています。

- What's new
    - URDF importer: URDFファイルをドラッグ&ドロップでUnityへ取り込む
    - Sensor simulation: Lidar、RGB-D、IMUのセンサーを標準で用意
    - ROS-2 support: ROSベースのハードウェアとUnityから直接通信する
    - Headless Linux Build Target: 既存のハードウェア構成で並列シミュレーションを行う
- Unity Robotics Solutions
    - Simulation Pro以外にも、シーン内で観察・行動・学習するエージェントを定義する[ML-Agents](https://docs.unity3d.com/Packages/com.unity.ml-agents@latest/index.html)、物体検出やモーションプランニングのために推論をシミュレーションへ組み込む[Sentis](https://docs.unity3d.com/Packages/com.unity.ai.inference@latest)、遠隔操作やhuman-in-the-loop学習向けのXR、20以上のプラットフォームへ配備するUnity Runtimeを関連ソリューションとして挙げている
- Resources
    - [パッケージのドキュメント](https://docs.unity3d.com/Packages/com.unity.simulationpro@latest/index.html)、Unity Academyの5時間の[トレーニング](https://academy.unity.com/courses/introduction-to-unity-robotics-and-simulation)、[Unity Robotics Hub](https://github.com/Unity-Technologies/Unity-Robotics-Hub)

ブログ記事では、TIER IVの自動運転シミュレータAWSIM、KITECHが点群スキャンから作った工場のデジタルツインによる学習データ生成、MedtronicのHugoロボット支援手術システムの記録・再生パイプラインを、Unityをロボティクスに使う事例として紹介しています。

### [UVCS] 🚀 We're building something new — and we want you in early!

[[UVCS] 🚀 We're building something new — and we want you in early! - Unity Version Control - Unity Discussions](https://discussions.unity.com/t/uvcs-were-building-something-new-and-we-want-you-in-early/1737378)

Unity Version Controlで変更をレビューし、議論し、取り込むための新しい仕組みのベータテスターを募集するディスカッションです。

詳細はまだ明かせないとしつつ、mainに入る前のチームの協業を見直すもので、レビューをより速く明確に、見失いにくくし、既存のブランチワークフローと自然に統合すると述べています。

チームでUVCSを定期的に使い、他人の作業をレビューする、または自分の作業をレビューされる立場で、率直なフィードバックをくれる少人数を募っています。
参加者には開発チームによる機能全体のウォークスルーと組織単位での早期アクセスを提供し、スレッドへ返信するとDMで日程調整するとしています。

### Cleaner voice chat is here! RNNoise is coming to Vivox

[Cleaner voice chat is here! RNNoise is coming to Vivox - Multiplayer & Networking - Unity Discussions](https://discussions.unity.com/t/cleaner-voice-chat-is-here-rnnoise-is-coming-to-vivox/1737421)

Vivox Core 5.28.0で、機械学習ベースのデノイザーRNNoiseがキャプチャパイプラインに追加されたことを紹介するディスカッションです。

Vivoxは従来からWebRTCのノイズ抑制を備えており、ファンの音や部屋の反響、キーボードの打鍵音のような定常的なノイズには十分だったものの、突発音や隣家のリーフブロワーのような非定常ノイズは古典的な信号処理では苦手だったとしています。
RNNoiseはMozillaで開発されXiph.Org Foundationへ寄贈されたリカレントニューラルネットワークのデノイザーで、音声を保ちながら周囲のノイズを取り除くよう学習されています。

- What we added: RNNoise on top of WebRTC NS
    - パイプラインは `mic → WebRTC NS → RNNoise → encoder → network` になり、2つの抑制器は独立に制御できる
    - WebRTC NSは従来どおり既定で有効、RNNoiseは既定で無効のオプトイン
- A "strength" knob you can tune
    - 固定のゲイン削減だと声が薄くなる、または騒がしい環境で効きが足りないことがあるため、周波数帯ごとの削減量を0〜100で調整するstrengthパラメータを追加した
    - 0は実質パススルー、有効化時の既定は40、100は明瞭さを優先する非常に騒がしい環境向け
- New API — separated, explicit, better
    - 1つの「noise suppression」トグルではなく、`vx_noise_reduction_rnnoise_set_enabled` / `set_strength` と `vx_noise_reduction_webrtcns_set_enabled` / `set_level` で個別に制御する
    - 旧 `vx_set_noise_suppression_*` は新しいWebRTC NS制御の薄いラッパーとして残るため既存の統合は壊れない
- A couple of things to know
    - RNNoiseはCPUコストがゼロではないため、プラットフォーム予算が厳しい場合は全員に有効化する前に計測する
        - DebugビルドはReleaseより大幅にCPUを使うので、Debugで性能を判断しない
    - マイクへの接触音や直接の咳など非常に大きい近接ノイズは残るため、AGCとpush-to-talkの設計は引き続き必要

RNNoiseのAPIはcore SDKで利用でき、Unity向けC#バインディングは今後のUnity SDKリリースに入る予定とのことです。
既定値やstrengthの調整について、スレッドでのフィードバックを求めています。

### How RUST LTD built the deep firearm simulation for Hot Dogs, Horseshoes & Hand Grenades 2

[How RUST LTD built the deep firearm simulation for Hot Dogs, Horseshoes & Hand Grenades 2 - Unity Blog](https://unity.com/blog/rust-ltd-hot-dogs-horseshoes-hand-grenades-2)

RUST LTDの共同創業者でhead of productionのLuke Noonan氏とgame directorのAnton Hand氏に、スタンドアロンVR向けの物理銃器サンドボックス兼extraction roguelike「Hot Dogs, Horseshoes & Hand Grenades 2」（H3VR2）の構築についてインタビューしたブログ記事です。

10年以上Early Accessで開発した前作を移植せず、新規のUnityプロジェクトで約6か月を設計とツール作りに費やしてから本格的なコンテンツ制作へ移ったとしています。
20人超のチームで5つのタイムゾーンにまたがるため、バージョン管理、ビルド自動化、Editorツールといった開発運用を最初から整えたとのことです。

- シミュレーションと物理
    - 実物の資料からスプリング定数や部品の質量、カートリッジの圧力曲線などの実データを投入し、銃ごとの挙動差をゲーム用の数値としてではなくシミュレーションから生じさせる方針。値が誤っていると銃が正しく動作しない。
    - NVIDIA PhysXは控えめに使い、プレイヤーが持ち運ぶ親オブジェクトの中の微小部品は独自の内部シミュレーションで扱い、力とインパルスの変換だけをゲーム空間と橋渡しする
    - 弾道とエージェントの大部分はECS for UnityとBurstで構築し、サブステップの衝突判定、空気抵抗、材質の貫通をより高精度にした
- パフォーマンスとUnity 6.3
    - 銃の3Dモデルにフレーム予算の多くを割くと決め、ポリゴン数やテクスチャメモリ、環境構造をそれに合わせて設計した
        - 最適化を後工程ではなくプロジェクト全体を貫く工程として扱っている
    - Unity 6.3ではnested prefabsに加え、SRP Batcherの性能、シェーダーコンパイルの改善、on-tile post-processingが効いた
        - 従来はシェーダーに直接書いていたHDRトーンマッピングを、on-tile post-processingで別パスに戻せた
- ツール
    - Odin Inspectorで銃ごとに無関係な設定項目を隠すカスタムインスペクターを全員が書いている
    - Technie Collider Creator 2は物理ハルのオーサリングで数百から数千時間を節約したとしている

## Events

### Unity Shader 完全に理解した 勉強会

[Unity Shader 完全に理解した 勉強会 - connpass](https://unity-fully-understood.connpass.com/event/403229/)

Unityユーザーコミュニティ主導の「Unity 〇〇完全に理解した勉強会」のShader回が、2026/10/02（金）18:30から渋谷スクランブルスクエアのDeNAで開催されます。

UnityにおけるShaderの知見を持つメンバーによるトークとLTのあと、懇親会が予定されています。会場参加とYouTube Liveでのオンライン参加のどちらも無料で、connpassから申し込めます。

## Articles

### 作ったツール、作りっぱなしにしてませんか?

[作ったツール、作りっぱなしにしてませんか? - Akatsuki Hackers Lab | 株式会社アカツキ（Akatsuki Inc.)](https://hackerslab.aktsk.jp/2026/09/01/123212)

増え続ける社内Editorツールが「どれを、いつ、何回、何msかけて」使われたかをPostgreSQLに記録し、Grafanaで可視化する仕組みを紹介する記事です。

ツール作者に手間をかけさせないため、`TypeCache` で `[MenuItem]` 付きメソッドを列挙し、Harmonyで計測コードを注入しています。
処理時間は `[ToolTelemetryTimer]` 属性を付けたメソッドだけ計測し、`Task` は `ContinueWith`、`UniTask` は `ref __result` でラッパーに差し替えて完了を追跡、`async void` と `UniTaskVoid` は回数のみ記録します。

記録はメモリ上のキューから60秒ごとにスプールファイルへ退避し、PostgreSQLへバッチINSERTする構成で、実機側のツールも既存のWebSocketデバッグ基盤に相乗りする形で計測しているとのことです。

また、導入後のトラブルとして、NuGet配布のLib.Harmony 2.4.1に不正なTypeRefが残っていてUnityが `BadImageFormatException` で起動できなくなり、Mono.Cecilでメタデータを再生成して修復した経緯も書かれています。

### Serializableの付け忘れなど、シリアライズの間違いをコンパイル時に検出してくれるように【Unity】

[Serializableの付け忘れなど、シリアライズの間違いをコンパイル時に検出してくれるように【Unity】](https://kan-kikuchi.hatenablog.com/entry/Serializable_Warning)

Unity 6.5から、シリアライズのルール違反をRoslynアナライザーがコンパイル時に検出するようになったことを紹介する記事です。

これまでは `[Serializable]` の付け忘れなどがエラーにも警告にもならず、Inspectorに表示されないといった形で後から気付くことが多かったとしています。
`[Serializable]` を付け忘れたクラスのフィールドでは `warning UAC1001: ... is skipped by serialization (missing the [Serializable] attribute).` のように警告され、`[System.Serializable]` を付けるか `[System.NonSerialized]` で明示するのが対処法です。

### UI ToolkitはUXMLを投げ捨ててコンポーネント指向で組め ―73万行のAIゲームプロジェクトのUI Toolkit活用事例―

[UI ToolkitはUXMLを投げ捨ててコンポーネント指向で組め ―73万行のAIゲームプロジェクトのUI Toolkit活用事例― - Zenn](https://zenn.dev/tokoharusame/articles/2e0d39bde10c29)

コードをすべてAIに書かせている73万行規模の個人開発ゲーム「DmonMaster」で、UI ToolkitをUXMLとUI Builderを使わずC#のコンポーネント指向で組んでいる構成を解説する記事です。

- `VisualElement` を継承した `BaseView` を基底にし、1つの部品を1クラスと1つのUSSで作る
    - `OnFirstAttach` / `OnAttached` / `OnDetached` のライフサイクルを持ち、R3の購読を `.Bind(this)` で登録するとpanelから外れた時にまとめて解放する
- 部品ごとに分けたUSSはAssetPostprocessorで1つに自動マージし、C#定数の埋め込みとコメントに書いた `calc()` 式の計算も行う
- `Button` や `ScrollView` などの標準コントロールは使わず、ポインタがどの要素の上にあるかの判定を最外殻の `RootView` に集約した独自コントロールに置き換えている
- EditModeテストでテキストのはみ出し、親範囲からの逸脱、絶対配置の重なり、画像解像度の不足を検査するScannerを回し、意図的なはみ出しはUSS変数で宣言する
- panelは3840×2160を基準に高さで合わせて拡大縮小し、幅は画面比率に応じて変動させる

### 【図解】Unity×Computeシェーダーで流体シミュレーション（Stable Fluids）を作った

[【図解】Unity×Computeシェーダーで流体シミュレーション（Stable Fluids）を作った - Zenn](https://zenn.dev/haharman/articles/310d80dc737c2b)

Unity 6000.3.10f1とURPで、Compute Shaderを使ったStable Fluidsを実装し、マウス操作でインクが流れる表現を作る記事です。

C#側は読み書き用のRenderTextureを入れ替えるPingPongラッパー、マウス位置と速度差分からの入力生成、カーネルのディスパッチを担当し、HLSL側は外力の追加、速度の移流、発散、Jacobi法による圧力の反復計算、圧力勾配の減算、色素の移流の順で処理します。

semi-Lagrangian法とJacobi法を図解しており、粘性項は省略しているため厳密なStable Fluidsではないとしています。

### UnityのHDR入門：Bloom・トーンマッピング・HDRディスプレイ出力を理解する

[UnityのHDR入門：Bloom・トーンマッピング・HDRディスプレイ出力を理解する - Zenn](https://zenn.dev/gamedev_toollab/articles/1fad4c27c51acb)

Unity 6.3 LTSとURP 17.3を対象に、HDRレンダリングとHDRディスプレイ出力という「HDR」の2つの意味を切り分けて解説する記事です。

1.0を超える値をどう保持しトーンマッピングで圧縮するか、Linear / Gammaや色域とはどう違う概念かを整理したうえで、SDR環境でURP AssetのHDRを有効にしてBloomを試す手順、`Allow HDR Display Output` と `Use HDR Display Output` などHDR出力の前提条件、`HDROutputSettings.main` で環境の対応と出力状態を調べる診断コード、Paper Whiteの設定を扱っています。

発展編ではシェーダーで `saturate` によりHDR値を潰さない、RenderTextureのフォーマットを見直すといった実装上の注意と、症状別のトラブルシューティング表をまとめています。

### Custom SRP 7.2 - Separate Shadow Passes

[Custom SRP 7.2 - Separate Shadow Passes - Catlike Coding](https://catlikecoding.com/unity/custom-srp/7-2/)

Custom SRPシリーズの7.2として、lighting passの中にあったシャドウ処理を専用のpassへ分離する記事です。

シャドウ用のクラスを `CameraRenderer` 側で生成するようにしてlighting passとの結合を弱め、新設した `ShadowsPass` とその下の `DirectionalShadowsPass`、`OtherShadowsPass` の3つにシャドウ処理を分けています。


## Repositories

### ruccho/YAUI

[ruccho/YAUI: Yet Another Unity UI: a fast, Flexbox-based UI system on GameObjects.](https://github.com/ruccho/YAUI)

GameObjectベースのオーサリングを保ちながら、uGUIとの互換性を捨てて性能を追求したFlexboxベースのUIシステム「YAUI」のリポジトリです。

UI全体をパネルごとに1ドローコールで描き、テキスト生成とFlexboxレイアウトはワーカースレッドのジョブで計算し、要素はGameObject上のコンポーネントなので、PrefabやAnimator、Inspectorはそのまま使えるとのことです。
Pixel 5での[ベンチマーク](https://ruccho.com/YAUI/ja/benchmarks)では、uGUIやUI Toolkitと比べてほとんどのシナリオでメインスレッドのコストが最も小さいとしています。

Unity 6000.7以降とURPが必要で、OpenGL ESは非対応です。実験的パッケージで、安定版までに破壊的変更があり得るとしています。
