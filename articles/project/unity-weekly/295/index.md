---
type: unity-weekly
title: Unity Weekly 295
description: >-
  2026/11/09週のUnity Weeklyです。Shader Build SettingsとFast Build、Cloud Code 3.0、GameObject NetcodeのGhostObjects、Unity CLI 1.0.0-beta.16と17、Unity Pipeline 0.10.0-exp.1、Unity Hub 3.22.6と4.0.0-beta.5などを紹介しています。
pubDatetime: 2026-11-09T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
draft: true
---

## Unity Officials

### Shader Build Settings and fast compilation

[Shader Build Settings and fast compilation - Graphics Product Updates - Unity Discussions](https://discussions.unity.com/t/shader-build-settings-and-fast-compilation/1740976)

Unity 6.6と6.7で利用できるShader Build Settingsと、シェーダーのコンパイル時間を短縮する設定を紹介するディスカッションです。

- Configuring the target compiler with Shader Build Settings
    - Unity 6.6から、WindowsのBuild ProfileごとにDXCを選択できる。対応はDX12のみで、DX11を併用するとFXC用のシェーダーもコンパイルするため、ビルド時間が増える場合がある
- Fast shader builds
    - Unity 6.7のFast Buildは、対応するキーワードを動的分岐へ変換してバリアントを削減する
    - URP 3D Sampleでの試験では、クリーンビルドの時間を約75%短縮できたと報告している
- Keyword exclusion
    - Unity 6.6から、不要なキーワードや組み合わせを除外できる
    - 必要なバリアントが欠落する可能性があるため、実行時に使わないと確認できたものだけを除外するよう注意を呼びかけている
- Constant defines
    - バリアントを増やさずにビルド時の分岐を設定する、独自のシェーダー定義をEditorから指定できる

### Performance Testing Framework 3.7.0 has been released

[Performance Testing Framework 3.7.0 has been released - Performance & Profiling Product Updates - Unity Discussions](https://discussions.unity.com/t/performance-testing-framework-3-7-0-has-been-released/1740972)

Performance Testing Framework 3.7.0（`com.unity.test-framework.performance`）のリリースを紹介しています。

Unity 6.0と6.3向けにリリースし、Unity 2022.3 xLTSのサポート終了に伴って最小対応バージョンをUnity 6.0に引き上げたことが主な変更です。
このバージョンにはまだbreaking changesはなく、2022.3のプロジェクトへ強制的に導入することは可能だと説明しています。

### Module state and streamlined development with Cloud Code 3.0

[Module state and streamlined development with Cloud Code 3.0 - Cloud Code - Unity Discussions](https://discussions.unity.com/t/module-state-and-streamlined-development-with-cloud-code-3-0/1741157)

Unity 6.7以降を対象としたCloud Code 3.0の正式パッケージ公開を紹介しています。

- Stateful Cloud Code
    - `[StateScope]`でプレイヤー単位またはMultiplayerセッション単位の状態を呼び出し間で保持できる
    - 対象プレイヤーへのプッシュメッセージ、サーバータイマー、関数単位のアクセス制御に対応した
- Native Authoring: Cloud Code modules in the Editor
    - Unityプロジェクト内でモジュールを作成し、型付きのクライアントを自動生成できる
- The local Cloud Code server
    - デプロイせずにローカル実行とデバッグができ、再コンパイル後は実行中のサーバーへ変更を反映する
    - Observability Logsウィンドウから、デプロイ済みのスクリプトとモジュールのログを確認できる
- Multiplayer Play Mode integration
    - ローカルまたはリモートのCloud Codeを使うシナリオを設定し、複数プレイヤーで検証できる
- Also in 3.0
    - `ModuleHostWarmup`による事前起動に対応し、ワーカーのメモリを256 MBから512 MBへ増やした
- Agent Skills
    - Unityのマルチプレイヤーサービスを使う開発向けに、`build-live-game`スキルを公開した
- Before you upgrade
    - Unity 6000.7以降と.NET 10 SDKが必要
    - 一部の旧APIを削除し、`Unity.Services.CloudCode.Apis`のクラスを内部化したため、インターフェース経由の利用へ移行が必要

### Prediction in GameObject Netcode - GhostObjects Released

[Prediction in GameObject Netcode - GhostObjects Released - Multiplayer & Networking Product Updates - Unity Discussions](https://discussions.unity.com/t/prediction-in-gameobject-netcode-ghostobjects-released/1741239)

Unity 6000.7以降向けのUnity Netcode 7.2.0とNetcode for GameObjects 3.2.0で、GhostObject APIが利用可能になったことを紹介しています。

- Package versions
    - Netcode for EntitiesをUnity Netcodeへ改称した。パッケージ名の`com.unity.netcode`は変更なし
    - GameObjectに`GhostObject`と`GhostBehaviour`を追加し、予測、ロールバック、量子化、差分圧縮を利用できる
- Since our last dev log: Unity Netcode 7.2.0
    - Rigidbodyの予測とロールバックを支援する物理処理、遅延スポーン、親子関係の変更の予測と同期などに対応した
- How this fits with Netcode for GameObjects
    - 同じGameObject上で`NetworkObject`と`GhostObject`を併用できる
    - 既存の接続フローを維持しながら、`NetworkTransform`をGhostObjectのTransform同期へ置き換える構成を紹介している
- Next steps
    - オブジェクトプールや予測誤差の平滑化などを今後の改善項目として挙げている
- Unity 7
    - 2つのNetcodeパッケージのコードを統合する方針で、いずれかの機能群を廃止するものではないと説明している

### Unity CLI 1.0.0-beta.16 is rolling out

[Unity CLI 1.0.0-beta.16 is rolling out - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-cli-1-0-0-beta-16-is-rolling-out/1741044)

Unity CLI 1.0.0-beta.16の公開をアナウンスするディスカッションです。
Editorのダイアログ操作や起動中のEditorを使ったビルドを追加し、自動化スクリプトに影響する出力形式と終了コードも変更しています。

- Highlights
    - 対応するEditorでは、`unity command editor dialog`でダイアログを確認し、`unity command editor dialog answer <id> <button>`で応答できる
    - `unity build --target`が起動中のEditorでビルドする。タイムアウトやCtrl+Cは待機を終了するだけで、Editorやビルド自体は停止しない
    - `unity skill sync [client]`で1つのエージェントのスキルを確認なしに更新する
    - `unity vcs diff`が変更された参照先のアセット名を示し、`unity vcs summarize --objects`でオブジェクト単位に変更を要約する
- Also new
    - Cloud Buildのターゲット、リポジトリ、署名用認証情報の設定をCLIから実行できる
    - クラウド連携プロジェクトの作成時にRemote Configの`liveops_enabled`とCloud Saveのスロットを追加する。`--bare`で省略できる
- Changes to check if you script the CLI
    - コマンドの出力を実行中にストリーミングし、コマンド自身の終了コードを返す
    - EditorのJSON出力から`success`、`command`、`parameters`、`target`のラッパーを削除した。`--result-only`は変更なし
    - Editorが処理中の場合は終了コード17、モーダルダイアログで停止している場合は18、オフラインやDNS、プロキシ関連のエラーは7を返す
    - `setup all`はシェルを利用できるエージェントへMCPを自動登録しない。必要な場合は`unity mcp configure`で設定する
- Notable fixes
    - URPマテリアルのアップグレードダイアログによる停止、指定changesetと異なるEditorビルドのインストール、SOCKSプロキシ経由のダウンロードなどを修正した

### Unity CLI 1.0.0-beta.17 is rolling out

[Unity CLI 1.0.0-beta.17 is rolling out - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-cli-1-0-0-beta-17-is-rolling-out/1741241)

Unity CLI 1.0.0-beta.17の配信開始をアナウンスするディスカッションです。

- Highlights
    - プラグインの依存関係の宣言に対応し、依存先からインストールや更新を実行する
    - CLIからPipeline Automationアプリと下書きバージョンを作成できる
- Also new
    - Hubでクラッシュレポートの送信を無効にすると、CLIにも反映する
- Changes to check if you script the CLI
    - 複数のコマンドグループで、引数不足や余分な引数がある場合の終了コードを2に変更した
    - `--git-token-from-stdin`への入力が空の場合は終了コード4で失敗し、保存済みGit認証へフォールバックしない
    - 非対話環境でリモートリポジトリを削除するロールバックには、`--yes`が必要に
    - Cloudプロジェクト名が一意に解決できない場合や通信失敗時の終了コード、TSVとJSONの出力形式を変更した
- Notable fixes
    - 引用符付きの`-projectPath`で起動したEditorの検出、JUnitレポートによるNUnitレポートの上書き、負荷が高い環境でのテスト監視の取りこぼしなどを修正した

### Unity Pipeline 0.10.0-exp.1 is out!

[Unity Pipeline 0.10.0-exp.1 is out! - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-pipeline-0-10-0-exp-1-is-out/1741046)

Unity Pipeline 0.10.0-exp.1の公開をアナウンスするディスカッションです。
CLIからのProfiler記録やメモリスナップショット取得、Editorウィンドウのキャプチャなどを追加し、引数の命名規則や設定ファイルの保存先も変更しています。

- New
    - Editorまたは接続した開発用PlayerのProfiler記録と、`.snap`形式のメモリスナップショット取得に対応した
    - 任意のEditorウィンドウやSceneビューのキャプチャ、URPとHDRPでのオーバーレイUIを含むカメラキャプチャに対応した
    - `script eval`が`using`、メソッド、型、`await`を含むスクリプトに対応した。`--file`によるファイル実行や`--dry-run`によるコンパイルのみの確認もできる
    - `--format human|tsv|json`で出力形式を指定し、実行中にCLIへストリーミングする
    - Unity 6.3以降のツールバーからPipeline Serverを起動、停止できる
- Changes
    - コマンド引数と構造化引数のキーをkebab-caseに統一し、古い表記は拒否する。コマンド名と結果フィールドは変更なし
    - 有効化は`enabled`、出力先は`output-path`など、同じ概念の引数名を統一した。公開済みの`unity` CLIは1.0.0まで動作する
    - 未知の引数やネストしたキーは`INVALID_COMMAND_ARGS`として拒否し、候補を提示する
    - 独自コマンドの引数名として`format`、`json`、`fields`、`verbose`、`omit-nulls`を使用できない
    - プロトコルの終了コードをCLIに合わせ、サーバー自身の終了コードは100以降にした。特定のコードを判定するスクリプトは更新が必要
    - Editorサーバー設定を`ProjectSettings/`からユーザー単位の`UserSettings/`へ移動した。コミット済みの設定はプロジェクトの全員には適用されなくなる
    - キャプチャの相対`--output-path`の基準を`Assets/`からプロジェクトルートへ変更した
    - `capture screenshot`と`script eval_file`を非推奨にし、それぞれ`capture game_view`または`capture scene_view`、`script eval --file`への移行を案内している
- Fixes
    - batchmodeでのEditorの予期しない終了、スクリプト再読み込み後の古いリスナー、コンパイル完了前の成功報告を修正した
    - Multiplayer Play Modeのクローン起動や、ドメインリロードを伴うテスト結果の重複、欠落などを修正した
- Upcoming API change in Unity Pipeline 1.0.0: a smaller public API
    - 今後の1.0.0では、サーバー実装、応答モデル、コンパイル処理などの内部用C#型を公開APIから削除する予定だとしている
    - JSONの応答形式は変更しない一方、対象のC#型に依存するコードは1.0.0へ更新するとコンパイルできなくなるため、依存箇所の確認を呼びかけている

### Now Available: Unity Hub 3.22.0

- [Now Available: Unity Hub 3.22.0 - Unity Hub - Unity Discussions](https://discussions.unity.com/t/now-available-unity-hub-3-22-0/1737927/40)
- [Unity Hub release notes - Unity](https://unity.com/unity-hub/release-notes)

Unity Hub 3.22.0のスレッドで、2026年11月6日に公開した3.22.6の変更点を案内する投稿です。
主にWindowsのMSIX版のインストールと更新に関する不具合を修正しています。

- What’s new
    - Unity 6の新しいEditorへ変更する前に、Project Auditorで移行準備を確認する機能を段階的に提供する
- Bug fixes & improvements
    - ベータ版を安定版に重ねてインストールした際に、古い安定版への更新を案内する不具合を修正した
    - MSIX版でダウンロード済みテンプレートからのプロジェクト作成や、一部のWindows 11でのインストールが失敗する不具合を修正した
    - MSIX版のデスクトップショートカット自動作成を廃止し、ログの保存先を`%APPDATA%\UnityHub\logs`へ変更した
    - 新規インストール時の利用状況分析の既定設定を更新した

### Now Available: Unity Hub 4.0 Beta

- [Now Available: Unity Hub 4.0 Beta - Unity Hub - Unity Discussions](https://discussions.unity.com/t/now-available-unity-hub-4-0-beta/1739331/123)
- [Unity Hub release notes - Unity](https://unity.com/unity-hub/release-notes)

Unity Hub 4.0 Betaのスレッドで、2026年11月6日に公開した4.0.0-beta.5の変更点を案内する投稿です。

- What’s new
    - プロジェクトとテンプレートの警告を非表示にし、設定から復元できる
    - 再起動なしで反映するクラッシュレポート送信設定と、Editorのパスをコピーする項目を追加した
    - 同梱するUnity CLIを1.0.0-beta.17へ更新した
- Bug fixes & improvements
    - Editor更新時の二重確認、GitHubとGitLabへの接続、ダウンロード再開などの不具合を修正した
    - Windows MSIX版のインストール失敗、タスクバーのアイコン欠落、更新の不具合を修正した
    - 新規インストール時の利用状況分析の既定設定を更新した

### How SEED renders a world players never stop building

[How SEED renders a world players never stop building - Unity Blog](https://unity.com/blog/seed-unity-rendering-performance)

Klang GamesのMMO「SEED」における、プレイヤーが拡張し続ける世界をPCとモバイルで描画するための最適化事例を紹介しています。

URPとShader Graphをベースに、プレイヤーが築いた社会のサーバースナップショットをテストケースとして再現し、ProfilerとFrame Debuggerで描画負荷を調べています。
LODのアニメーション付きクロスフェードの無効化や、GPU Resident DrawerによるインスタンシングでCPU負荷を軽減しています。

モバイルではMemory Profilerによる重複アセットの調査、プラットフォーム別のAddressables、Mesh LODの活用でメモリ使用量を削減したことを解説しています。

### How Ares Interactive runs live ops without waiting on client updates

[How Ares Interactive runs live ops without waiting on client updates - Unity Blog](https://unity.com/blog/ares-interactive-live-service-games)

Ares Interactiveの「Baseball Hits 26」と「The Walking Dead: Aftermath」を題材に、クライアント更新を待たずにイベントやバランス調整を反映する運用設計を紹介しています。

「The Walking Dead: Aftermath」では、Addressablesをロードとメモリ管理に、AssetBundles APIを遠隔配信に使い分けています。
スコープ付きの依存性注入による機能の分離、セーブデータの移行処理、CIによる開発環境と本番環境の設定管理についても解説しています。

### Our new XR e-book is here: Build XR with Unity: Meta XR

- [Our new XR e-book is here: Build XR with Unity: Meta XR - Unity Blog](https://unity.com/blog/our-new-xr-e-book-is-here-build-xr-with-unity%3A-meta-xr)
- [Build XR with Unity - Meta XR e-book, available now for free - XR - Unity Discussions](https://discussions.unity.com/t/build-xr-with-unity-meta-xr-e-book-available-now-for-free/1741289)

UnityとMetaが共同制作した無料のXR開発ガイド「Build XR with Unity: Meta XR」の公開を紹介しています。

Unity 6.6とXR Interaction Toolkit 3.6を用いた環境構築、視線やハンドトラッキング、Quad ViewsやApplication SpaceWarpによる描画最適化を解説しています。
Unity CLIとUnity Pipeline、実験的なMeta XR Operatorを使った、AIエージェントによるビルドやテスト、検証のワークフローも取り上げています。

### The Immersive Edge: October 2026 industry content wrap-up

[The Immersive Edge: October 2026 industry content wrap-up - Unity Blog](https://unity.com/blog/october-2026-industry-content-wrap-up)

2026年9月と10月に公開された、産業分野でのUnity活用に関する21件の資料を紹介しています。
CADデータの活用やシミュレーション、デジタルツインによる学習データ生成、HMI向けテンプレートなどを取り上げています。

### Games made with Unity: October 2026 in review

[Games made with Unity: October 2026 in review - Unity Blog](https://unity.com/blog/games-made-with-unity-october-2026-releases)

2026年10月にリリースされたUnity製ゲームをジャンル別に紹介しています。
「SULFUR」や「Mycopunk」の正式リリースに加え、Australian Game Developer Awardsの受賞作品やMIX Fall Showcaseの出展作品も取り上げています。

## Articles

### 【Unity】Xcode 27 (SDK 27) での UIRequiresFullScreen の挙動変更とウィンドウリサイズへの対応

[【Unity】Xcode 27 (SDK 27) での UIRequiresFullScreen の挙動変更とウィンドウリサイズへの対応 - Zenn](https://zenn.dev/applibot_tech/articles/bbc27e1b520137)

Xcode 27でビルドしたUnityアプリをiPadOS 27で動かした際の、`UIRequiresFullScreen`の互換モード廃止とウィンドウリサイズへの対応を解説しています。
設定の有無によるリサイズの反映タイミングや画面回転の違いを検証し、`Screen.orientation`だけに頼らず、`Screen.width`と`Screen.height`に基づいてレイアウトを更新する方針を紹介しています。

### 【.NET/Unity】C# の型制約とボックス化をハックする — IL と手動スタック配置

[【.NET/Unity】C# の型制約とボックス化をハックする — IL と手動スタック配置 - Zenn](https://zenn.dev/aakei/articles/csharp-stack-box)

ILで型制約なしに`Dispose`を呼ぶ方法と、ボックスを手動でスタックに配置する方法を、Windows x64の.NETとUnityで検証しています。
両方式の割り当て量や値の変更の保持を比較し、手動のスタック配置については、ランタイムへの依存と参照の寿命の制約から実用を推奨していません。

### シーン管理と画面遷移を統合するUnityナビゲーション基盤の設計と実装

[シーン管理と画面遷移を統合するUnityナビゲーション基盤の設計と実装 - Sumzap Engineering Blog](https://tech.sumzap.co.jp/entry/unity-navigation-framework-design-and-implementation)

シーン管理と画面遷移をRoot / Session / Screenのツリーで扱う、Spica.Navigationの設計と内部実装を紹介しています。
GraphViewによる画面構成の定義とコード生成、共通祖先からの差分による遷移対象の決定、遷移手順やルーターを独立させる設計を解説しています。

### Unity6.6からノッチなどを避けてUIを配置出来るSafeAreaコンポーネントが追加【Unity】【uGUI】

[Unity6.6からノッチなどを避けてUIを配置出来るSafeAreaコンポーネントが追加【Unity】【uGUI】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/SafeArea_6_6)

Unity 6.6で追加されたSafe Areaコンポーネントを使い、ノッチやホームインジケーターを避けてuGUIを配置する方法を紹介しています。
`Edges`で調整する辺を選ぶ設定や、画面回転への追従、Content Size FitterなどとRectTransformの制御が競合する場合の注意点を説明しています。

### UnityのUIだけ重い：Canvas・Layout・文字更新から原因を切り分ける

[UnityのUIだけ重い：Canvas・Layout・文字更新から原因を切り分ける - Zenn](https://zenn.dev/gamedev_toollab/articles/8245c840ae35ee)

uGUIの負荷を、実機に接続したProfilerとEditor専用のProfilerのUIモジュールを使って切り分ける手順を紹介しています。
文字列生成、Layout、Canvasのバッチ構築を区別し、更新条件やCanvasの分割などを一つずつ変えて、CPU時間と割り当て量、描画への影響を比較する方法を説明しています。

### Android XR（Unity）でパススルーと空間認識を使う - Galaxy XRでの実装と検証

- [Android XR（Unity）でパススルーと空間認識を使う - Galaxy XRでの実装と検証 - Zenn](https://zenn.dev/miyaura/articles/androidxr-unity-passthrough-meshing-97c594f54228e9)
- [Unity用のAndroid XR設定済みプロジェクトを作成しテンプレート化する - Zenn](https://zenn.dev/miyaura/articles/unitycli-androidxr-template-857dd9165237c7)
- [Galaxy XR（Android XR）向けMRTK3の開発環境と空シーンを構築する - Zenn](https://zenn.dev/miyaura/articles/androidxr-mrtk3-setup-87b915e67b491d)

UnityでAndroid XR向けの開発環境を構築し、Galaxy XRで動作を検証した3本の記事です。
パススルーと空間メッシュによるオクルージョンや衝突判定の実装、Unity CLIによる設定済みプロジェクトのテンプレート化、MRTK3で手の操作を使うための設定と公式サンプルの動作状況を紹介しています。

### UnityのAnimator Controllerは本当に必要か？Playables・Animancerを選ぶ判断軸

[UnityのAnimator Controllerは本当に必要か？Playables・Animancerを選ぶ判断軸 - Zenn](https://zenn.dev/gamedev_toollab/articles/0ba99e00a47531)

Animator Controller、Playablesの直接利用、Animancerを、遷移を編集する担当者と再生制御の実装範囲から比較しています。
攻撃の完了と中断をゲーム側の行動管理で判断する設計や、既存機能の移行、Animancerの無料版と有料版の違い、段階的な導入の確認項目を解説しています。
