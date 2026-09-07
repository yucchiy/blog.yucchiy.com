---
type: unity-weekly
title: Unity Weekly 287
description: >-
  2026/09/07週のUnity Weeklyです。Unity 6.6の正式リリース、Unity Pipeline 0.6.0-exp.1、Unity CLI 1.0.0-beta.8、Memory Profiler 1.2.0-pre.1、Unite Tokyo 2026の開催概要などを紹介しています。
pubDatetime: 2026-09-07T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity 6.6 is now available

[Unity 6.6 is now available - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-6-6-is-now-available/1735357)

Unity 6.6の正式リリースを告知するディスカッションです。Unity 6ファミリー最後のSupportedリリースで、6.7 LTSが出るまでLTSと同等のサポート・安定性・重要な更新を受けられるとしています。

新機能の一覧は[What's New](https://docs.unity3d.com/6000.6/Documentation/Manual/WhatsNewUnity66.html)、移行手順は[upgrade guide](https://docs.unity3d.com/6000.6/Documentation/Manual/UpgradeGuideUnity66.html)が案内されています。

- Highlights in the 6.6 release
    - Fast Enter Play Mode: 新規プロジェクトでは[Enter Play Modeの設定](https://docs.unity3d.com/6000.6/Documentation/Manual/configurable-enter-play-mode.html)がreload scene onlyになり、Play Mode進入時にコードのリロードやstatic変数のリセットが行われなくなる
    - Native Dictionary Serialization: `[SerializeField]`を付けた[Dictionaryフィールドをネイティブにシリアライズ](https://docs.unity3d.com/6000.6/Documentation/Manual/script-serialization-dictionaries.html)し、ドメインリロード・シーン保存・Play Mode遷移をまたいで保持する
    - [Content Directories](https://docs.unity3d.com/6000.6/Documentation/Manual/content-directories.html): バンドルのレイアウトを事前に決めずにコンテンツを整理・ロードできる仕組み。既存のAssetBundleグループはConvert Schema(s) to content directoriesから[変換](https://docs.unity3d.com/Packages/com.unity.addressables@4.0/manual/convert-content-directories.html)できる
    - [Build Analysis](https://docs.unity3d.com/6000.6/Documentation/Manual/build-analysis-window-reference.html): ビルド種別・プラットフォーム・サイズ・ビルド時間・圧縮やキャッシュの統計を[Build History](https://docs.unity3d.com/6000.6/Documentation/Manual/build-history.html)と合わせて確認できる新ウィンドウ
    - Faster, More Flexible Hierarchy Window: [新しいHierarchyウィンドウ](https://docs.unity3d.com/6000.6/Documentation/Manual/hierarchy-window.html)がデフォルトになり、大規模シーンでの性能改善、横スクロール、並び替え可能なカスタム列が使える
- 2D
    - 2DライトのRendering Layer Mask対応、GPUスキニング使用時の2Dシャドウ対応、2D Animation / Tilemap / 2D Graphicsの新Profilerモジュール、Sprite Editorのワークフロー改善、Spriteメッシュ生成のDelaunay subdivision、Tile paletteの名前フィルタとロック機能
- Graphics
    - Unity Compute Light Baker、Project AuditorのURP Settings Analyzer、Frame Debuggerでのconstant bufferのフィールド表示、URPでの[現在のピクセルの深度の直接読み取り](https://docs.unity3d.com/6000.6/Documentation/Manual/urp/read-depth-input-attachment.html)、Shader Graph / Visual Effect Graph / Shuriken particleのワークフロー改善
- Shader Build Settings
    - DX12向けに[DXC（DirectX Shader Compiler）](https://docs.unity3d.com/6000.6/Documentation/Manual/shader-dxc-compiler.html)でシェーダーをコンパイルできるようになり、Shader Model 6の機能と最適化が使える
    - 新しいShader Build Settingsでシェーダーキーワードを動的分岐へ変換したり不要なキーワードを除外してバリアント数を削減できる。Survival Kidsプロジェクトのクリーンビルドが1時間46分から32分に短縮した例を挙げている
- UI Systems
    - uGUI: デバイスのセーフエリアに合わせて`RectTransform`を調整する[SafeArea](https://docs.unity3d.com/Packages/com.unity.ugui@2.6/manual/script-SafeArea.html)コンポーネント、レイアウト要素の最大サイズ、2つの`RectTransform`が同一平面上にあるかや内包できるかを判定するAPI、TextMesh Proの`SetText()`の`ReadOnlySpan`対応
    - UI Toolkit: 要素の背後に描かれた内容へフィルタを適用する[backdrop-filter](https://docs.unity3d.com/6000.6/Documentation/Manual/ui-systems/backdrop-filter.html)、[drop-shadow](https://docs.unity3d.com/6000.6/Documentation/Manual/ui-systems/built-in-filters.html)フィルタ、[UI Shader Graph](https://docs.unity3d.com/6000.6/Documentation/Manual/ui-systems/ui-shader-graph.html)での頂点ステージのプログラミングと[VisualElement.AddMeshModifier](https://docs.unity3d.com/6000.6/Documentation/ScriptReference/UIElements.VisualElement.AddMeshModifier.html)、UI向けの新Profilerモジュール
- Graph Toolkit
    - デバッグ層が追加され、ランタイムバックエンドを持つツールは実行状態をグラフ上に表示できる。ノードの見た目の完全なカスタマイズも可能になった
- Platforms
    - XR: Quest向けの[adaptive performance](https://docs.unity3d.com/6000.6/Documentation/Manual/adaptive-performance/adaptive-performance.html)、ハンドトラッキングのOpenXR拡張、XRでのSpatial Audio対応
    - Web: [WebGPU](https://docs.unity3d.com/6000.6/Documentation/Manual/WebGPU-features.html)がプロダクション対応になった（WebGL 2がデフォルトのまま、[WebGPU Device Filter asset](https://docs.unity3d.com/6000.6/Documentation/Manual/webgpu-device-filter-asset.html)で対象を制御）。シーン単位でアセットを配信する[Progressive Asset Loading](https://docs.unity3d.com/6000.6/Documentation/Manual/class-PlayerSettingsWebGL.html#Publishing)と、最大16GBのメモリを扱える[WebAssembly64](https://docs.unity3d.com/6000.6/Documentation/Manual/wasm-64bit-support.html)（Chrome / Edge 128以降、Firefox 129以降。Safariは非対応）
    - Mobile: Apple向けの[Swift Project Type](https://discussions.unity.com/t/apple-swift-xcode-project-type-for-ios-ipados-and-tvos-available-in-unity-6-5/1713471)で、新しいUnityAPI frameworkを通じて[公開API](https://docs.unity3d.com/6000.6/Documentation/Manual/ios-swift-api-reference.html)へアクセスできる
    - Consoles/PC: WindowsとXbox Series X|SでContent DirectoriesがDirect Storageの対応データ型になった
    - Package signing now available for .unitypackage: パッケージ公開者がエクスポートする.unitypackageに[署名](https://docs.unity3d.com/6000.7/Documentation/Manual/AssetPackagesSignatures.html)できるようになった。[Unity Core Standards](https://unity.com/core-standards)の一環

### Unity Pipeline package 0.6.0-exp.1 is available now!

[Unity Pipeline package 0.6.0-exp.1 is available now! - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-pipeline-package-0-6-0-exp-1-is-available-now/1735626)

Unity Pipelineパッケージ0.6.0-exp.1のリリースを告知するディスカッションです。

ホットリロードがIL2CPPと接続中のプレイヤーで使えるようになり、Runtime ServerがMonoBehaviourからSettingsへ移動する破壊的変更が含まれます。

- New
    - Hot reload: Pipeline設定で`.cs`ウォッチャーを有効にすると、ファイル保存でドメインリロードや再起動なしに実行中のコードが更新される。Editor Play Modeと接続中のプレイヤーで動作し、新しいILインタープリタによりIL2CPPプレイヤーでも使える。`[HotReload]`本体で対応するC#サブセットを示すRoslyn analyzerと、リロード時に反応できる`[OnHotReload]`属性が追加された
    - `batch`: 最大200コマンドを1リクエストで実行し、後続の操作が先行の結果を参照できる。デフォルトでトランザクショナルで全体が1つのUndoステップになり、失敗時は適用済みの操作をロールバックする
    - `run_script`: 単一の`.cs`ファイルをメモリ上でコンパイルし、指定したstaticメソッドを呼び出す。アセットインポートもドメインリロードも不要
    - `get_runtime_pipeline_settings` / `set_runtime_pipeline_settings`によるランタイム設定のAPI操作、`/api/exec`のコンパクトなレスポンス、`eval`の利用ログと`report_evals`、Editor analytics（コマンド名とタグのみ収集、Unityのanalyticsオプトアウトで無効化）
    - [Unity 6.7] モーダルダイアログがEditorをブロックしている時に、開いているダイアログを一覧するエンドポイントとbusyの理由としてダイアログ名を返す仕組みが追加された
- Fixes
    - Pipelineサーバーを無効にしたビルドにサーバーが含まれることがあった問題、Player Settings > Run In Backgroundが永続的にオンになる問題、不正なランタイム設定が黙って保存される問題、Runtime設定を読むだけで設定ファイルが書き換わる問題などを修正
    - `reload_file`が何も適用しなくても成功を報告していた問題を修正し、メソッド単位の理由を返すようにした
- Changes
    - Runtime設定ページを「Server」と「Runtime Behavior」のグループに再構成し、Play Mode中は読み取り専用にした
    - `OnTransactionProcessed`が`OnCommandDone`に変わり、`BasePipelineServer`を継承している場合はどのコマンドが実行され、成功したか、所要時間はどれだけかも受け取れる
    - テストフィクスチャ、コマンドハンドラとそのDTO、`EditorPipelineManager`など多くの型が`internal`になった。公開APIではなかったため影響はないはずだが、使っていた場合は用途を知らせてほしいとしている

### Unity CLI 1.0.0-beta.8 is rolling out

[Unity CLI 1.0.0-beta.8 is rolling out - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-cli-1-0-0-beta-8-is-rolling-out/1735542)

Unity CLI 1.0.0-beta.8のリリースを告知するディスカッションです。

今回の焦点はバージョン管理のエンドツーエンド対応で、フラグなしでUnityプロジェクトをgitに載せる、読めるマージコンフリクト、エディタアップグレード後も動くシーンマージを挙げています。

公開数時間後に取り下げられたbeta.7の内容をすべて含んでおり、beta.7は未公開の`com.unity.pipeline`のバージョンを必要としたため`unity command`と`unity run --command`が失敗しうる状態でした。その期間にbeta.7をインストールした場合は更新するよう求めています。

- Version control
    - `unity vcs setup`でバージョン管理されていないプロジェクトをフラグなしでリモートへの初回コミットまで進められる。プリセットでチームの選択を保存でき、ガイド付き実行は同等のフラグ付きコマンドを出力する
    - `unity vcs doctor`でバージョン管理下でUnityが動くための設定を監査し、`--fix`で一括修復する
    - `unity vcs conflicts` / `explain` / `resolve`でマージコンフリクトをfileIDの羅列でなくGameObjectとコンポーネントとして扱い、`unity vcs merge-setup`でUnityYAMLMergeを1コマンドで設定する
    - `unity vcs status` / `sync` / `switch` / `diff` / `affected`の日常操作、`unity vcs hooks install`によるコミット時の整合性チェック、`unity vcs git worktree add` / `remove`と`unity vcs git migrate-lfs`、Unity Version Control GUIのレビューコメントを読み書きする`unity vcs uvcs review`
    - リポジトリ作成でBitbucketとAzure DevOpsに対応し、GitHubとGitLabではブラウザサインインが使える
- Editors, installs, and tooling
    - `unity close <path-or-name>`でプロジェクトを開いているエディタを閉じられる（デフォルトも`--force`も作業を保存しない）
    - `unity upgrade`は`unity self-update`に改名（旧名はエイリアスとして残る）
    - `unity doctor`が認証情報ストアの動作を確認するようになり、`unity plugin`で外部ツールを管理、`unity skill install`でVS Code / Cursor / Windsurf / Cline向けのAgent Skillsをインストールできる
- Fixes worth knowing about
    - beta.4〜beta.6でLinuxのplayback engineが誤ったパスにインストールされていた（iOS、WebGL、Linux-IL2CPP、Linux-Serverが対象。`unity install-modules --force -m <module>`で再インストールし、誤配置分を手で削除する）
    - 6000.6.0a4以降のプロジェクトから作ったテンプレートがUDSFilesystemのエラーとShaderGraphのインポート失敗を起こしていた問題、Windowsインストールの複数の問題、コマンド完了後に認証情報ストアの読み取りで停止していた問題などを修正
- Breaking changes
    - `unity projects create`にサインインが必要になった。`--no-cloud`または`UNITY_NO_CLOUD`でクラウド手順をスキップできる
- Security
    - 実行中のEditorを、プロセスが自称する名前でなくOSが報告する実行ファイルで識別するようになった。以前はローカルプロセスがEditorを偽装して`projects clean`や`run`をブロックできた

更新は`unity self-update`、完全なリリースノートは`unity changelog`で確認できます。

### Memory Profiler 1.2.0-pre.1 Released — Roots & Impact Profiling & CoreCLR Support

[Memory Profiler 1.2.0-pre.1 Released — Roots & Impact Profiling & CoreCLR Support - Performance & Profiling Product Updates - Unity Discussions](https://discussions.unity.com/t/memory-profiler-1-2-0-pre-1-released-roots-impact-profiling-coreclr-support/1735523)

Memory Profilerパッケージ1.2.0-pre.1のリリースと、新しいRoots & Impactテーブルによるワークフローを解説するディスカッションです。

Unity 6.7向けのプレリリースですが2022.3まで後方互換で、プレリリース期間中は`com.unity.memoryprofiler`をバージョン`1.2.0-pre.1`で明示指定して追加する必要があります。変更履歴は[releases thread](https://discussions.unity.com/t/memory-profiler-releases/730398/55)を参照するよう案内しています。

- The Roots & Impact Table
    - コールスタック対応の要望の背景にある「なぜこれがメモリにあるのか」「どのシステム・クラス・名前空間に注力すべきか」という問いに対し、どこで確保されたかを示すコールスタックは適していないとし、ネイティブとマネージド間の参照、両者のメタデータ、メモリ管理の内部知識を持つインストルメント型のMemory Profilerならこれに答えられるとしている
- So what does that mean in practice?
    - v1.1.10以降ではすべてのルートから幅優先探索で保持対象を辿り、深さ優先で参照先へメモリを帰属させる。Scene Objectのネイティブ側がシーンに、マネージド側がstaticイベントにルートされるようなケースは、シーンアンロード後の[Leaked Managed Shells](https://docs.unity3d.com/Packages/com.unity.memoryprofiler@latest/index.html?subfolder=/manual/managed-shell-objects.html#managed-shell-memory-leaks)につながる
    - 1.2.0では各オブジェクトと確保のStatusを算出し、テーブルのStatus列とフィルタで「All Leaked」などを絞り込める
    - Roots & Impactテーブルでは、マネージドのstatic参照が保持するメモリを名前空間・型別に、Sceneとその階層が保持するメモリ、Asset Bundleでロード済みだが未使用のアセット数を確認できる。Reserved / Untracked / Virtual Machineメモリはデフォルトで非表示で、フラット表示にするとLeaked Shellを参照経由の総インパクト順に並べられる
- CoreCLR Player Support
    - CoreCLR Playerのスナップショットをキャプチャできるようになった。CoreCLR VMのネイティブ確保はまだUntrackedに含まれ、stack root、finalizer root、frozen heapオブジェクトはUIに表示されない
- The Current Workflow and Future Improvements / Example Workflow
    - 現状は各項目をShortest Path To Rootに1回だけ列挙し、Managed Shellとそのネイティブオブジェクトを別行として扱うため、Sharedに帰属したインパクトを追いにくいワークフロー上の課題があるとし、staticイベント経由でルートされた`GameFlowManager`の例で読み方を解説している
    - フィルタ適用時にImpact列は再計算されない点と、到達可能なマネージドオブジェクトのリークはツールでは判定できず利用者の判断が必要な点に注意を促している

### DevOps billing is now managed by Unity's central billing

[DevOps billing is now managed by Unity's central billing - Build Automation - Unity Discussions](https://discussions.unity.com/t/devops-billing-is-now-managed-by-unitys-central-billing/1735384)

DevOps（Unity Build Automation、Unity Version Control）の課金がUnityの[central billing](https://docs.unity.com/en-us/cloud/billing)で管理されるようになったことを告知するディスカッションです。

DevOpsのサブスクリプション価格は変わらず、移行後に予算とアラートが期待どおり移行されているか確認するよう求めています。

- Added
    - cloud dashboardのAdministration > Usage allowanceでDevOpsの月間割り当てを確認できる
- Changed
    - 「Build minutes monthly caps」と「Monthly cap reminder」の設定がAdministration > Billing & Cost > Budget alertsへ移動し、既存の設定は移行済み
    - Administration > Cost and usageのレポートがDevOps関連SKUについてほぼリアルタイムになった
- Removed
    - Build Automation > Settings > Build consumptionタブが削除された。ビルドの同時実行数はジョブ履歴ページから引き続き管理できる

## Events

### Unite Tokyo 2026、開催概要決定。本日よりチケット販売開始。

[Unite Tokyo 2026、開催概要決定。本日よりチケット販売開始。 - ユニティ・テクノロジーズ・ジャパン株式会社](https://unity3d.jp/news/unite-tokyo-2026/)

2026年11月17日（火）にベルサール渋谷ガーデンで開催されるUnite Tokyo 2026の開催概要と、2026年9月3日正午からのチケット販売開始を案内するプレスリリースです。

時間は10:00〜19:30で、19:30から懇親会が行われます。チケットは[Unite Tokyo 2026公式サイト](https://unitetokyo.com/)で販売され、Regular、学生向け割引、Supporter Program付きの種類があり、9月30日までは早割で通常価格の10%割引が適用されます。

ゲームと産業を含めたUnityが注力する分野を網羅する講演・展示を実施し、講演情報は10月下旬、展示情報は11月上旬に公開予定とのことです。

## Articles

### Post Processing | Unity Shader Code Basics 09

[Post Processing | Unity Shader Code Basics 09 - Daniel Ilett](https://danielilett.com/2026-09-03-tut10-09-post-processing/)

Unity Shader Code Basicsシリーズの第9回として、URPのRender Graphでポストプロセスエフェクトを実装する方法を解説する記事です。

Render Graph Viewerでパスとアタッチメントの流れを確認したうえで、`VolumeComponent`と`IPostProcessComponent`による設定クラス、`ScriptableRendererFeature`、`RecordRenderGraph`を実装した`ScriptableRenderPass`の組み合わせで、グレースケール（コピーパスと本体パスの2段構成）、深度テクスチャを使うシルエット、Roberts Crossオペレータによるアウトラインの3つのエフェクトを実装しています。

### 【Unity】Unity Cliのset_autotickのドメインリロード問題がv0.5.0-exp.1にて対応された話

[【Unity】Unity Cliのset_autotickのドメインリロード問題がv0.5.0-exp.1にて対応された話 - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2026/09/06/120000)

Unity CLIの[set_autotick](https://docs.unity3d.com/Packages/com.unity.pipeline@0.6/manual/commands/editor-lifecycle-and-observability.html#set_autotick)の設定が再コンパイルのたびに無効になっていた問題が、Unity Pipeline v0.5.0-exp.1で対応されたことを検証する記事です。

[変更履歴](https://docs.unity3d.com/Packages/com.unity.pipeline@0.5/changelog/CHANGELOG.html)の「[UUM-148605] set_autotick の有効/無効および間隔の設定状態を SessionState に保持し、再コンパイルのたびに黙って無効になるのではなく、ドメインのリロード後も設定が維持されるようにする」を引用し、`EditorApplication.update`のtick数を計測するベンチマークで、v0.4.0-exp.1では再コンパイル後に設定が戻っていたものがv0.5.0-exp.1では維持されることを確認しています。

### エモモの眉毛を髪の上に描画できるようにする

[エモモの眉毛を髪の上に描画できるようにする - Mirrativ Tech Blog](https://tech.mirrativ.stream/entry/2026/08/31/100000)

Mirrativの3Dアバター「エモモ」で、髪に隠れる眉毛を髪の上に描画できるようにした実装を解説する記事です。

ZTestをAlwaysにする方法は服や装飾品との前後関係が壊れ、眉毛をステンシルマスクにして髪を消す方法は半透明部分と頭部の他オブジェクトの扱いが複雑になるため採用せず、「見えている髪の領域をステンシルに記録し、その領域だけZTestを無効にして眉毛を描く」2パス構成に落ち着いた経緯を紹介しています。

### 2026年版 Unityでリアルタイム通信ゲームを作るなら何を選ぶべきか

[2026年版 Unityでリアルタイム通信ゲームを作るなら何を選ぶべきか - Zenn](https://zenn.dev/gamedev_toollab/articles/0bf9234a741c40)

2〜32人程度が連続的な状態を同期するリアルタイム通信ゲームを対象に、2026年8月時点のUnity向けネットワーク製品の選び方を整理した記事です。

通信をTransport / Netcode / Session / Hosting / Backendの5層に分け、スナップショット補間・入力予測と再シミュレーション・決定論的リプレイの同期方式を先に決めるべきだとしたうえで、Photon Fusion 2、NGO + MPS SDK、Netcode for Entities、FishNet、Mirror、Photon Quantum、Nakamaの適性を比較し、権限設計の原則、PoCの受け入れ基準、CCUとegressのコスト見積もりまでを扱っています。

### Unity 6.7から、Editor上でAndroidの「Target API Level」と「Compile API Level」を別々に指定できるようになる

[Unity 6.7から、Editor上でAndroidの「Target API Level」と「Compile API Level」を別々に指定できるようになる #Unity6.7 - Qiita](https://qiita.com/RyotaMurohoshi/items/75326f611295ecfb0a9f)

Unity 6.7（6000.7.0a6時点）でAndroidのTarget API LevelとCompile API LevelをPlayer Settingsから別々に指定できるようになることを紹介する記事です。

これまではTarget API Levelの値が`compileSdkVersion`にも適用され、両者を分けるにはGradle Templatesが必要でしたが、新設のCompile API Levelと`PlayerSettings.Android.compileSdkVersion`でmajor.minorの精度を含めて独立に設定できるようになったことを示しています。

### 【Unity】Claude CodeからUnityを操作する「Unity CLI Loop v3」の導入手順

[【Unity】Claude CodeからUnityを操作する「Unity CLI Loop v3」の導入手順 #AI - Qiita](https://qiita.com/NightOwl/items/9a147acd3696c82e1a40)

Claude CodeなどのAIエージェントからUnityのコンパイル・テスト・シーン操作・PlayModeを操作できるUnity CLI Loop v3の導入手順を、Windows 11とUnity 6000.3.21f1の環境でまとめた記事です。

Package Managerのgit URLからのインストール、Setup WizardでのCLIとSkillsのインストール、`/uloop-compile`や`/uloop-run-tests`などのスキルの使い分けに加え、v3でNode.jsとポート管理が不要になったこと、再コンパイルなしにメソッド本体の変更を反映する`hot-reload`と指定行で停止して変数を確認する`pause-point`が追加されたことを紹介しています。
