---
type: unity-weekly
title: Unity Weekly 288
description: >-
  2026/09/21週のUnity Weeklyです。Unity 6.7ベータの開始、UI Toolkitの開発状況とFigma connector、Unity CLI 1.0.0-beta.9 / beta.10、Unity Pipeline 0.7.0-exp.1、Netcode for Entities 7.0.0とNetcode for GameObjects 3.0.0、Claude CodeとCodex向けの公式Unityプラグインなどを紹介しています。
pubDatetime: 2026-09-21T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity 6.7 Beta is now available

- [Unity 6.7 Beta is now available - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-6-7-beta-is-now-available/1736830)
- [6.7 (LTS) Beta Sweepstakes - Your chance to win a GPU, Switch or Unity Swag! - Unity Editor - Unity Discussions](https://discussions.unity.com/t/6-7-lts-beta-sweepstakes-your-chance-to-win-a-gpu-switch-or-unity-swag/1736728)

Unity 6.7の公開ベータ開始と、ベータ期間中のバグ報告を対象にしたBeta Sweepstakesを告知するディスカッションです。

ベータ版は毎週ビルドを公開する予定で、最新ビルドとリリースノートは[beta landing page](https://unity.com/releases/editor/beta)から確認できます。
ただし破壊的な問題を含む場合や変更が少ない場合はビルドを見送ることがあり、週次の頻度は保証しないとしています。プレリリースに関する議論は[6.7-betaタグ](https://discussions.unity.com/tag/6-7-beta/160473)で行い、投稿時は[issue tracker](https://issuetracker.unity3d.com/)で既知の問題か確認したうえで、新しいトピックにはIssue IDを添える、別々の問題は別々のトピックに分ける、といったガイドラインを挙げています。

Sweepstakesは、未報告でUnityが再現・確認した「original bug」を6.7ベータ期間中に1件以上報告すると参加できます。[bug report](https://unity.com/releases/editor/qa#bug-reporting)のDescriptionに`#BetaSweepstakes_6_7`を書くか、Editorのbug reporterのチェックボックスをオンにします。応募期間は2026年9月17日6:00 PTから2026年11月27日23:59 PTまでです。

### State of UI Toolkit in Unity 6.7

[State of UI Toolkit in Unity 6.7 - UI Product Updates - Unity Discussions](https://discussions.unity.com/t/state-of-ui-toolkit-in-unity-6-7/1736756)

UI Toolkitの開発状況をまとめたディスカッションです。

[2025年11月のステータス更新](https://discussions.unity.com/t/ui-toolkit-development-status-and-next-milestones-november-2025/1698009)以降にUnity 6.4から6.7にかけて入った変更を、正式リリース済みの機能、実験的フラグを有効にすると試せる機能、今後の方針の3つに分けて整理しています。

Unity 6.7の時点でUI ToolkitはゲームUIのほとんどの用途をカバーできるようになったとしています。

- Released and supported
    - Rendering, effects, and styling: `backdrop-filter`（6.6、6.7でカスタムfilter functionに対応）、`drop-shadow()`（6.6）、`background-image`の`linear-gradient()` / `radial-gradient()`（6.7）、flex子要素の間隔を取る`gap`（6.7）、階層順と独立に重なり順を制御する`z-index`（6.7）、UI Shader Graphの頂点ステージプログラミング（6.6）、`VisualElement.AddMeshModifier`などのメッシュ変更API（6.6）
    - In-scene authoring and animation: 6.6で実験的だった[in-scene UI authoring](https://docs.unity3d.com/6000.7/Documentation/Manual/ui-systems/in-scene-ui-authoring.html)とUI Viewportが6.7で正式化。Scene viewとHierarchyで画面空間・ワールド空間のUIを直接配置・操作でき、Animation windowで`VisualElement`のプロパティをキーフレームアニメーションできる。
    - Text: Advanced Text Generatorがランタイムパネルのデフォルトになり（6.7）、移行中のテキスト生成でCPU 10%〜40%の改善を計測。`TextElement.SetText`に`ReadOnlySpan<char>`や`StringBuilder`などを受けるアロケーションなしのオーバーロードが追加された（6.6）。
    - Localization: Addressables上の任意パッケージではなく6.7でエンジン組み込みになった。asset providerの抽象化、Smart Strings、stringとassetを1つのテーブル型で扱う統合テーブルエディタ、CSV / XLIFF / Google Sheetsのインポート・エクスポートを持つ。
    - Performance and diagnostics: computed styleのアンマネージドメモリ移行（6.5）、WebGLで最大20倍・WebGPUで最大4倍になったメッシュ更新（6.5）、専用Profilerモジュール（6.6）、USSセレクタマッチングの高速化（6.7）、`opacity: 0`要素のカリング（6.4）、OpenGL ES / WebGL 2.0でUIシェーダーが頂点uniform上限を超えて描画に失敗する問題の解消（6.7）
    - Authoring and workflow: `UIDocument`の後継となる`PanelRenderer`（6.5）、MonoBehaviourのフィールドからランタイムの要素を参照する`VisualElementReference`（6.5・6.6）、UI Toolkit要素向けのカスタムproperty drawer（6.7）、非推奨UXML構文を自動更新するUXML upgrade service（6.6）
- Available behind an experimental flag
    - Project Settings > UI Toolkitからオプトインする。`[VisualElementComponent]`構造体を任意の`VisualElement`に付けるUI Components、CSS Gridに相当するGrid Layout、Android / iOS / macOS / Windowsのランタイムパネル向けAccessibility Hierarchy、`-unity-curvature`でワールド空間パネルを湾曲させるCurved UI、Font Subsetter、StyleSheet Editing Mode、複数のUI Builderウィンドウ、UI Toolkit Filters向けのShader Graph target（いずれも6.7）と、USS Stats profiler（6.5）。
- UI Toolkit Connector for Figma Design
    - 要望の多かったFigmaからのインポートを別投稿（次項）で解説している
- What's next
    - 今後は新機能の追加より、性能と仕上げの2点に注力するとしている。soft maskingやUI内のパーティクル / 3Dオブジェクト、media query、Addressables対応などの要望は引き続き追跡するが、この2点を優先すると述べている。

### Experimental: UI Toolkit Connector for Figma design

[Experimental: UI Toolkit Connector for Figma design - UI Product Updates - Unity Discussions](https://discussions.unity.com/t/experimental-ui-toolkit-connector-for-figma-design/1736969)

UI Toolkit Connector for Figma designの最初の実験版`com.unity.ui.figma 0.1.0-exp.1`のリリースを告知するディスカッションです。

Figmaで作ったフレームを手作業で組み直さずにUI Toolkitへ持ち込み、Unity側で加えた変更をFigmaへ送り返すことを狙ったパッケージです。
FigmaフレームをUXMLへ変換できること自体より、FigmaとUnityの間で開発者がどのように作業したいのかを知りたいとして、ワークフローへのフィードバックを求めています。

- What it does
    - Figmaで選択したフレームをPush selectionで`Assets/Figma/<file name>/`配下の`.uxml`と`.uss`として取り込む
    - インポートごとに`tokens.uss`とdesign-token modeごとのstylesheetが生成され、テーマをstylesheet単位で切り替えられる
    - ボタンやトグルなどのFigmaコンポーネントは、名前、プラグイン上のタグ、Project Settings > UI Toolkit > Connector for Figma designのmapping assetのいずれかで実際のコントロールへ解決される
    - スタイル、レイアウト、インタラクション状態、design tokenの変更はFigmaへ書き戻せる。ただし構造は一方向で、Figmaが階層を所有するためUnity側での要素追加や並べ替えは送り返されない。
    - connectorウィンドウのLast importで、インポートで表現できなかった内容と理由を確認できる
- Requirements
    - Unity 6000.3以降、Figma desktop app、対象ファイルをDesign modeで編集できる権限が必要
    - プラグイン自体は無料でどのFigmaプランでも入れられるが、実際に使える範囲はプランではなくファイルの権限で決まる。他人のファイルを閲覧専用で開いている場合や、Dev seatしか持っていない場合は、インポートもFigmaへの書き戻しもできない。
    - design tokenの取り込みはどのプランでも動く。ただしダークとライトのようにmodeごとにstylesheetを分けるには1つのcollectionに複数のmodeを持たせる必要があり、無料プランでは作れないためProfessional以上が必要になる。
- Setup
    - `com.unity.ui.figma`をインストールすると依存としてUnity Pipeline（`com.unity.pipeline`）も入り、connectorはPipelineのサーバー上で動く。Figmaプラグインはサンドボックス化されたブラウザフレームで動くため、Window > Pipeline > SettingsでAllow Browser Clientsを有効にしてサーバーを再起動する必要がある。その後、Unity側でコピーしたトークン（60秒でクリップボードから消える）をFigma側の[Unity UI Toolkit Connector](https://www.figma.com/community/plugin/1671239513881857517/unity-ui-toolkit-connector)プラグインに貼り付けて接続する。

0.1リリースのため引き継がれない要素があり、[known limitations](https://docs.unity3d.com/Packages/com.unity.ui.figma@0.1/manual/index.html#known-limitations)と[control mapping](https://docs.unity3d.com/Packages/com.unity.ui.figma@0.1/manual/control-mapping.html)のページを参照するよう案内しています。

### Graph Toolkit Update in Unity 6.7 beta

[Graph Toolkit Update in Unity 6.7 beta - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/graph-toolkit-update-in-unity-6-7-beta/1735612)

Unity 6.7ベータでのGraph Toolkit（GTK）の主要な機能追加とAPI拡張を紹介するディスカッションです。

- State Machines
    - GTKの初期バージョン以降で最大の新機能。専用のtransitionとconditionを持つ[state machine](https://docs.unity3d.com/6000.7/Documentation/ScriptReference/Unity.GraphToolkit.Editor.StateMachine.html)用のグラフ種別が追加された。使い方を示すサンプルは[sample package](https://docs.unity3d.com/Packages/com.unity.graphtoolkit-samples@0.6/manual/)で近日提供予定。
        - States: StateMachineグラフの基本単位。単独のstateとして実装するか、通常のグラフまたはStateMachineグラフを内包するsubgraph nodeとして実装できる。
        - Transitions & Conditions: 2つのstateをつなぐ接続。inspector overlayでconditionを設定し、条件を満たすと遷移する。
        - Self Transition: stateから自身への遷移。同じstate上でループする遷移を定義できる。
        - Debug View: 通常のグラフと同様に、PlayMode中にstate machineの各要素をハイライト表示できる
        - State Machine Creation API: state machineをコードから組み立てるメソッドが追加された
- Other Additions
    - Unityが[Dictionaryをシリアライズ](https://docs.unity3d.com/6000.7/Documentation/Manual/script-serialization-dictionaries.html)できるようになったことを受けたDictionary対応
    - 新しい`NodeView`クラスでnodeのルート`VisualElement`にアクセスし、SliderやToggleなどを直接差し込める
    - `IInputPortBuilder` / `IOutputPortBuilder.WithDataTypes`で1つのポートに複数の型を持たせるpolymorphic port
    - Variable Nodeを入力ポート付きに変換するSet Value Input。graph inspectorの「Allow to set value in graph」か、ALT / Optionキーを押しながらのドラッグ、またはコードから`VariableNodeMode.Set`を指定して作る。
    - `[GraphMenu(typeof(MyGraph))]` / `[BlackboardMenu(typeof(MyGraph))]`による右クリックメニューのカスタム項目
    - `Graph.BuildAvailableVariableTypes` / `Graph.BuildAvailableConstantTypes`で作成可能なvariable / constantの型を制御
    - `DataTypeStyleMapper`のiconに`null`を渡して型アイコンを隠す方法、グラフの変更内容を追いやすくする`GraphLogger`の新プロパティ
- What's next
    - 今後はAPI拡張による安定化とユーザー要望への対応に時間を割くとしている

### Unity CLI 1.0.0-beta.9 / 1.0.0-beta.10 is rolling out

- [Unity CLI 1.0.0-beta.9 is rolling out - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-cli-1-0-0-beta-9-is-rolling-out/1736105)
- [Unity CLI 1.0.0-beta.10 is rolling out - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-cli-1-0-0-beta-10-is-rolling-out/1736729)

Unity CLI 1.0.0-beta.9と1.0.0-beta.10のリリースを告知するディスカッションです。beta.9はサインインのセキュリティと日常的な使い勝手、beta.10はEditorを外側から扱うための機能が中心です。

- beta.9
    - Configuration: `proxy`や`accelerator`など個別サブコマンドだった設定を`unity config get|set|list|unset <key>`に統合し、シークレットらしい値は読み戻し時にマスクする。グローバルフラグ`--color <auto|always|never>`と、`unity version --format json`によるバージョン情報の構造化出力を追加。
    - Testing: `unity test --affected --since <ref>`がバージョン管理のimpact graphを使い、変更が到達するテストだけを実行する。Addressablesやリソースフォルダ読み込みのように解析で証明できない変更がある場合は推測せず拒否し、`--affected-compare`で自分のプロジェクトでの偽陰性率を確認できる。
    - Changed: `unity skill show`がスキル内容をインストールなしで標準出力に表示、`unity plugin upgrade`が実バージョン比較に変更、`unity install --list-components`は`--list-modules`へ改名
    - Notable fixes: Windowsで無関係なプロセスのコマンドラインに制御文字が混ざるとEditor実行中でも「実行中でない」と誤報告していた問題、`unity open`などが起動したEditorのエラー終了を常に成功と報告していた問題、macOSで`unity doctor`が資格情報ストアの確認でハングしたりキーチェーンダイアログを出す問題、`unity install 6000.5`のような部分バージョン指定が最新リリースに解決されない問題などを修正
- beta.10
    - Contexts and configuration: `unity context`でアカウント、組織、プロジェクト、Editor、パスのデフォルトを名前付きでまとめる。`ProjectSettings/UnityCliConfig.json`をコミットして`unity build` / `unity test`のデフォルトを宣言でき、`unity config resolve <key>`で適用値と出典レイヤーを確認できる。Unity Acceleratorの設定と`unity diagnose accelerator`による接続確認も追加。
    - Builds: `unity build --list-targets` / `--list-profiles` / `--create-profile <target>`、再ビルドなしに最新の記録済みビルドを起動する`unity build run`、起動したEditorの終了まで待つ`unity open --wait`（Windowsは未対応でexit code 2）
    - Agents and automation: 全コマンドツリーをJSONで出す`unity commands --format json`、接続先Editorの結果だけを返す`unity command <name> --result-only`、ファイル変更ごとに`unity test --affected`を再実行する`unity watch test`、`unity mcp`のキャプチャがメインスレッド無応答時にデスクトップスクリーンショットへフォールバック
    - Also added: `unity vcs blame <scene|prefab>`、Editorなしで.unitypackageの中身を見る`unity assets inspect`、`unity license status`の`floatingServer` / `machineId`報告
    - Sign-in: トークン読み取りが常駐のauth broker経由に統一され、リフレッシュ要求はハードウェアバックの鍵（Windows / LinuxはTPM、macOSはKeychain）で署名される。`UNITY_NO_AUTH_BROKER=1`でオプトアウトできる。
    - Changed: `unity self-update`が中断再開とBrotli圧縮版（生バイナリの約2/3）に対応、`unity command`のrecompile / test結果を人が読める形式で表示
    - Notable fixes: `unity install`が既存install-stateデータベースの`writer_kind`カラム欠落で`INSTALL_FAILED`になる問題、`unity status`が起動中Editorを`ready`と誤報告する問題やWSL内からWindowsホストのEditorを見逃す問題、Apple Silicon + Rosetta 2で`unity install <version> -a x86_64`が動かない問題、`unity bug --share-project`がプロジェクト全体をレポートに含めていた問題などを修正

更新は`unity self-update`、完全なリリースノートは`unity changelog`で確認できます。

### Unity Pipeline package 0.6.0-exp.1 / 0.7.0-exp.1 is available now!

- [Unity Pipeline package 0.6.0-exp.1 is available now! - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-pipeline-package-0-6-0-exp-1-is-available-now/1735626)
- [Unity Pipeline package 0.7.0-exp.1 is available now! - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-pipeline-package-0-7-0-exp-1-is-available-now/1736536)

Unity Pipelineパッケージ0.6.0-exp.1と0.7.0-exp.1のリリースを告知するディスカッションです。0.6.0-exp.1はUnity Weekly 287で取り上げたとおり、IL2CPPと接続中のプレイヤーで使えるホットリロード、最大200コマンドをまとめて実行する`batch`、単一`.cs`をメモリ上でコンパイルして呼ぶ`run_script`、Runtime ServerのMonoBehaviourからSettingsへの移行（破壊的変更）が中心でした。

0.7.0-exp.1は`unity pipeline install`（既存プロジェクトは`--force`）で導入でき、`console`コマンドが実態を正しく報告すること、Pipelineをリリースビルドから外すことの2点を主眼にしています。

- New
    - `CommandRegistry.RegisterCommand` / `UnregisterCommand`で、`[CliCommand]`属性なしにランタイムでコマンドを登録できる。属性宣言と同じメタデータと`[CliArg]`の探索を持ち、特定オブジェクトに束縛したdelegateを渡せる。
    - すべての`console`レスポンスに、severity別の保持件数`counts`と、Editor自身の`compilationFailed` / `compiling`フラグやコンソール件数を含む`groundTruth`が付く。エントリを返さず同じカウンタだけを返す`console_status`はコンパイル中のポーリングに使える。
    - 各エントリがUnityの`LogType`をそのまま持つ`logType`と、ライブ捕捉ではなくEditorのストアから読んだことを示す`seeded`を返す。`recompile_status`も`compilationFailed`を報告する。
    - `wait`: editorやobjectの状態が成立するかタイムアウトするまで、同期またはバックグラウンドでポーリングする。`/api/exec`を自前で回す必要がなくなる。
- Changes（破壊的変更3件）
    - ランタイムアセンブリと同梱のRoslyn DLLが、Development BuildでないPlayerビルドから除外される。含めたい場合は`ENABLE_RUNTIME_PIPELINE`を定義する。
    - コードリロード用の属性が`Unity.Pipeline.Attributes`へ移動した。属性のためだけに`Unity.Pipeline`を参照していたアセンブリ定義は参照の追加が必要。
    - ログを二重にバッファしていた`get_console_logs`が廃止され、`logType`を持つ`console`に置き換わる。`clear_console`はランタイムアセンブリへ移動し、playerビルドでも動く。
- Fixes
    - `console`のカーソルが新しいセッションやスナップショット復元をまたいで生存できなかった問題を修正し、レスポンスに`session`を追加。使えないカーソルには`reset=true` / `dropped=true`付きで末尾を返す。
    - 捕捉開始前に出たコンパイルエラーがsticky entryとして残るためバッファがConsole windowと一致しなかった問題を、セッションごとに1回Editorのストアからバックフィルして修正
    - `clear_console`が2つのバッファの片方しかクリアしていなかった問題、`recompile`がコンパイルエラーが残っているのに`up_to_date`を返す問題（Unityのネイティブなcompile-failureフラグを参照するよう変更）を修正
    - Androidでランタイムのインスタンス記述子が書けなかった問題を`Application.persistentDataPath`への書き込みで修正、`Pipeline_SessionStopped`が送信されていなかった問題を`EditorApplication.wantsToQuit`での発火に変更して修正

`wait`、ランタイム登録、consoleコマンドの詳細は[パッケージのドキュメント](https://docs.unity3d.com/Packages/com.unity.pipeline@0.7/manual/index.html)にあります。

### Netcode for Entities 7.0.0: moving back to an independent package in Unity 6.7

[Netcode for Entities 7.0.0: moving back to an independent package in Unity 6.7 - Multiplayer & Networking Product Updates - Unity Discussions](https://discussions.unity.com/t/netcode-for-entities-7-0-0-moving-back-to-an-independent-package-in-unity-6-7/1736319)

Unity 6000.7.0b1以降でNetcode for Entitiesがコアパッケージから独立パッケージに戻り、最初の独立リリースが7.0.0になることを告知するディスカッションです。Unity 6.0、6.3、6.5、6.6には変更がありません。

Unity 6.5でEntitiesパッケージとの統合上の課題からコアパッケージ化された（[当時の投稿](https://discussions.unity.com/t/netcode-for-entities-package-as-part-of-6000-5-editor/1723854)）ものの、技術的な解決策ができたため独立化するとしています。
Editorのリリースサイクルから離れることで、より広い対象Editorへ機能と修正を早く届け、新しいGameObjectワークフローへLTSを待たずに早期アクセスできると説明しています。バージョンが2.xでなく7.0.0なのは、コアパッケージ時代にEditorのバージョン（6.5.0、6.6.0）に従っていたため、Package Managerがバージョンを上げる方向にしか動けないためだとしています。

- Breaking changes in Netcode for Entities 7.0.0
    - `World`から`NetcodeWorld`へ: `ClientServerBootstrap.ClientWorld` / `ServerWorld`などnetcodeシステムを要求するAPIの引数と戻り値が`NetcodeWorld`になり、通常の`World`を渡した場合に実行時エラーだったものがコンパイル時エラーになる
        - `NetcodeWorld`は`World`を継承するため大半はそのまま動くが、戻り値や`List<World>`のようなコレクションは手で直す必要がある
    - `NetCode`から`Netcode`へ: 命名規則統一のため名前空間と型名を正規化し、`NetworkTime` / `NetworkTimeSystem`は`Unity.Netcode.NetcodeTime`名前空間へ移動。いずれも`[MovedFrom]`付きでscript updaterが自動移行する。
    - `AutoConnectPort`のデフォルトが非ゼロになり、新規プロジェクトが標準で接続・描画されるようになる
    - Single-world host modeが新規プロジェクトの既定になり、実験的なdefineは削除された（[ドキュメント](https://docs.unity3d.com/Packages/com.unity.netcode@7.0/manual/single-world-host-mode.html)）
- Editor and version support
    - 最小サポートEditorはUnity 6000.7.0b1で、Editor manifestに含まれて自動取得される。Unity 6.5 / 6.6はバンドル済みのコアバージョンを維持し、Unity 6.3はNetcode for Entities 1.xで継続サポートされる。

移行手順は[upgrade guide](https://docs.unity3d.com/Packages/com.unity.netcode@7.0/manual/upgrade-guide.html)を参照するよう案内しています。

### Netcode for GameObjects 3.0.0 is now available

[Netcode for GameObjects 3.0.0 is now available - Multiplayer & Networking Product Updates - Unity Discussions](https://discussions.unity.com/t/netcode-for-gameobjects-3-0-0-is-now-available/1736792)

Netcode for GameObjects 3.0.0のリリースを告知するディスカッションです。

Unite Seoulで発表されたネットコード統合に向けた最初のリリースで、Netcode for Entities 7.0.0が必須の依存パッケージになりました。

- What do you need to know
    - 3.0.0へアップグレードするとNetcode for Entitiesが自動的にプロジェクトへ追加される。ただし現時点では実際には使っておらず、将来のUnity Netcodeに向けた準備としての依存追加だとFAQで答えている。
    - 最小サポートEditorはUnity 6000.7.0b1で、Editor manifestには6000.7.0b3から含まれる予定
    - Unity 6.6以下ではNetcode for GameObjects 2.xを継続利用し、対象Editorのサポート終了までバグ修正のバックポートを続ける
    - [GitHubリポジトリ](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects)のデフォルトブランチが`develop-2.0.0`から`develop-3.x.x`へ変わる予定
- Breaking changes in Netcode for GameObjects 3.0.0
    - プロジェクトを開くと、存在しなければ`NetcodeConfig`設定アセットが作成される（ソース管理へのチェックインを推奨）
    - `Unity.Netcode.Editor`から`Unity.Netcode.GameObjects.Editor`のようにアセンブリと名前空間が改名され、`NetworkTime` / `NetworkTimeSystem`は`Unity.Netcode.GameObjects.Timing`へ移動、`[MovedFrom]`付きでscript updaterが自動移行する
    - 数バージョンにわたり警告だった長期非推奨APIがエラーになった

移行手順は[upgrade guide](https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@3.0/manual/upgrade-guide.html)を、統合の背景は[devlog](https://discussions.unity.com/t/ghostfields-in-gameobject-netcode-devlog-entry-3/1713506/18)を参照するよう案内しています。

### Unity's plugin is now available in Claude Code

- [Unity's plugin is now available in Claude Code - AI & Machine Learning Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-s-plugin-is-now-available-in-claude-code/1736143)
- [Official Unity Plugin for Claude Code - Unity Blog](https://unity.com/ja/blog/unity-plugin-for-claude-code)

Claude Code向けの公式Unityプラグインの公開を告知するディスカッションと、その内容を解説するブログ記事です。

Unityのエンジニアリングスキル、Unity CLI、実行中のEditorを操作するためのUnity MCPサーバーをインストールするファーストパーティのプラグインで、Anthropicのマネージドディレクトリから[1回のインストール](https://claude.com/plugins/unity)で設定なしに使えるとしています。

ブログではClaude Codeがこのプラグインをインストールできる最初のコーディングエージェントで、他のエージェント向けは年内に提供予定と述べています。

- 公開時点で含まれるもの
    - URP、UI Toolkit、Multiplayer、LevelPlay、IAP向けに作られた29個のエンジンスキル
    - サポートされるビルド操作を組み込んだCLIワークフロー
    - Unityのサポートとセキュリティのもとで、Claude Codeをアクティブなプロジェクトに接続するEditor操作
- 初期スキルセットの分類（ブログ）
    - はじめに＆ツール: 新規プロジェクトのガイド付きフロー`/new-unity-project`、ターミナルからUnityを操作する`/unity-cli`、Editor外からUPMパッケージを操作する`/unity-package-management`
    - UIとテキスト: UIシステムを自動判定してUI Toolkit / uGUI / IMGUI向けへ振り分ける`/ui`系と、TextMeshProのフォント構成を扱う`/optimize-text-mesh-pro`
    - 2Dとスプライト、グラフィックとレンダリング（URPポストプロセス、カスタムShader Graphノード、Render Graph上のRendererFeatureのレビュー）、オーディオ、シーンとゲームプレイ（AI Navigation、3D物理の衝突診断）、Monetizationとライブ運用（Unity IAP、LevelPlay、Unity Services）、Multiplayer、プラットフォームとローカライゼーション

ブログは汎用のコーディングエージェントがプロジェクト固有の規約を知らずに推測で作業する問題を挙げ、Unityの各機能を担当するチームがスキルを書くことでエラーが減り、トークン効率が上がり、少ないターンで作業が終わると述べています。

ドキュメントは[docs.unity.com](https://docs.unity.com/en-us/ai/unity-plugin/claude-code)にあります。

### The Official Unity Plugin for Codex

- [The Official Unity Plugin for Codex - AI & Machine Learning Product Updates - Unity Discussions](https://discussions.unity.com/t/the-official-unity-plugin-for-codex/1736730)
- [Unity's Official Plugin for Codex: Skills, CLI, Editor Control - Unity Blog](https://unity.com/blog/unity-plugin-codex)

Codex向けの公式Unityプラグインの公開を告知するディスカッションと、その内容を解説するブログ記事です。

ターミナルからの2コマンド、または[Codexのディレクトリ](https://chatgpt.com/plugins/plugins_6aa1c02597c081918e358d72f65bd772)からのワンクリックでセットアップでき、プロジェクトごとの設定やマシン移行時のコピーは不要としています。対象はUnity 6以降です。

- What a single install gets you
    - UI ToolkitとuGUI、2Dとタイルマップ、URPとShader Graph、オーディオ、ナビゲーションと物理、IAPとLevelPlay、マルチプレイヤー、Web、ローカライゼーションを担当するUnityの各チームが書いた31個のスキル
    - Codexがターミナルから直接Editorのインストール、プロジェクトの作成・オープン、パッケージ管理を行うためのunity-cliスキル

ディスカッションでは、これはスキルのパッケージであってMCPサーバーではないため、実行中のEditorには接続しないと明記しています。

詳細は[ドキュメント](https://docs.unity.com/en-us/ai/unity-plugin/codex)を参照するよう案内しています。

ブログはOpenAIの[GPT-6 Astra](https://openai.com/index/gpt-6-astra/)のリリースに合わせた公開だとしています。
汎用のコーディングエージェントは古いバージョン向けのフォーラム投稿やチュートリアルを含む「ネット上の平均」から回答するため、コンパイルは通っても実態が誤っているコードになりがちだと指摘し、手作業のスプライトアトラス、hover stateに誤って書かれたトランジション、動かないURP renderer featureを例に挙げています。

根拠として[Stack Overflowの2025 Developer Survey](https://survey.stackoverflow.co/2025/ai)を引いています。66%が「ほぼ正しいが完全ではないAIの回答」を最大の不満に挙げ、45%がAI生成コードのデバッグに時間がかかると答えたという結果です。プラグインはUnity Technologies名義でUnity Companion Licenseのもとで公開されています。

スキル一覧はClaude Code版とほぼ共通で、Built-in Render PipelineからURPへ移行する`/migrate-birp-to-urp`、Unity Searchのクエリを作る`/generate-editor-search-query`、`/audio-setup-mixers`などが加わっています。

### Welcome to the new Unity Documentation experience (and yes, Dark Mode is finally here 🌑)

[Welcome to the new Unity Documentation experience (and yes, Dark Mode is finally here 🌑) - Templates & Documentation Product Updates - Unity Discussions](https://discussions.unity.com/t/welcome-to-the-new-unity-documentation-experience-and-yes-dark-mode-is-finally-here/1736348)

Unityのドキュメントサイトを全面的に刷新し、[Engineのドキュメント](http://docs.unity.com/engine)を含む全製品のドキュメントを[docs.unity.com](http://docs.unity.com)へ統合したことを告知するディスカッションです。

パッケージのドキュメント移行は進行中で、次の最優先事項だとしています。

- A redesigned reading and reference experience
    - Dark Modeの追加、タブ切り替えや折りたたみセクションなどの新しいコンテンツ部品、Visual Studio / Riderに近いシンタックスハイライトとコピー用ボタン付きのコードスニペット、Scripting Referenceの目次構造とスコープ検索の改善、APIリファレンスとマニュアルの検索結果統合
- Faster, more reliable under the hood
    - モダンなフレームワークで再構築し、予測可能なURL構造で検索エンジン、LLM、コーディングエージェントが正しいページとバージョンを解決・引用できるようにした
- Search that actually finds what you need
    - 検索を再構築し、LearnやDiscussions、サポート記事を含む全情報源から結果を返してフィルタで絞り込める
- Built for you and your AI assistants
    - 任意のドキュメントURLに`.md`を付けるとナビゲーションやHTMLなしのプレーンなMarkdownを取得できる（例: docs.unity.com/en-us/hub/settings.md）
    - [docs.unity.com/llms.txt](http://docs.unity.com/llms.txt)が全製品の構造化マップを提供し、製品ごとの`llms.txt`（例: [Hub](http://docs.unity.com/hub/llms.txt)）もある
- Versioning that scales
    - 製品ごとに独立したバージョン切り替えに対応し、サポート終了バージョンや非推奨製品向けのアーカイブ機構を用意した。今後数か月で更新が止まったドキュメントのアーカイブを始めるが、削除はせず常にダウンロードできる。

フィードバックはサイト上のページ内ウィジェットから送れます。

### ICYMI August 2026 Edition

[ICYMI August 2026 Edition - News & General Discussion - Unity Discussions](https://discussions.unity.com/t/icymi-august-2026-edition/1736559)

2026年8月のUnity関連のニュースと更新をまとめたディスカッションです。

- Discussions posts
    - Announcements: [Discussions: what's changed?](https://discussions.unity.com/t/discussions-what-s-changed/1733999)
    - Releases: [Unity Hub 3.21.1](https://discussions.unity.com/t/now-available-unity-hub-3-21-1/1734183)、UVCS 11.0.16.10330 / 10371
    - Feature Previews, Pre-Releases, and Roadmap updates: [The Path to CoreCLR #1: The Problem](https://discussions.unity.com/t/the-path-to-coreclr-1-the-problem/1733018)、Unity CLI 1.0.0-beta.4 / beta.6、[Customizable Main Toolbar: Unity 6.7 improvements](https://discussions.unity.com/t/customizable-main-toolbar-unity-6-7-improvements/1733331)、[Unity Cloud Collaboration Tools (experimental)](https://discussions.unity.com/t/unity-cloud-collaboration-tools-experimental/1734008)、[Unity Performance Testing API package becomes a Core Package in 6.6](https://discussions.unity.com/t/unity-performance-testing-api-package-becomes-a-core-package-in-6-6/1734660)、Unity Compute Light Baker、WebGPU、Unity Pipeline 0.5.0-exp.1、[Vivox Summer Update](https://discussions.unity.com/t/vivox-summer-update/1734063)
    - Technical Articles: [Technical Guide: Building custom tools for the Unity Editor](https://discussions.unity.com/t/technical-guide-building-custom-tools-for-the-unity-editor/1733712/1)、[The Unity Pipeline package and Unity CLI: Installation guide and walkthrough](https://unity.com/resources/unity-pipeline-cli-technical-walkthrough)
- e-books / How-to Articles
    - CADから3Dへのパイプライン自動化、3Dデザインレビュー、Unity IAPのwebshop設定、ユーザー獲得やゲーム経済設計のガイド
- Videos / Livestreams / Unity Learn
    - [Switching from Unity MCP server to Unity CLI](https://www.youtube.com/watch?v=FsSu_CHzI2o)、Unity Adsのキャンペーン運用、Creator Spotlight（Blast Ships、Tempus Vitae、Drakkenridge）、Piñata Popサンプル、Unity CLIの導入・プロジェクト作成・シーン構築のチュートリアル
- Blogs / Case studies
    - Gorilla Tagのライブ運用、Hologryphの[SAND: Raiders of Sophie](https://unity.com/blog/hologryph-sand-raiders-of-sophie)、[The Immortal John Triptych](https://unity.com/blog/immortal-john-triptych-joe-richardson-interview)、[DrakkenRidge](https://unity.com/blog/drakkenridge-building-open-world-mobile-vr-rpg-unity-ecs)、[Rendering at scale](https://unity.com/blog/rendering-at-scale-efficient-strategies-for-massive-object-counts)、Unity IAP 5の移行ガイドと決済プロバイダ、XGame StudioとFalcon Gamesの事例

### Composer & Category Updates — How It's Landing

[Composer & Category Updates — How It's Landing - Discussions Platform - Unity Discussions](https://discussions.unity.com/t/composer-category-updates-how-its-landing/1736051)

Unity Discussionsで数週間前に導入した新しいトピック作成画面と細分化されたカテゴリ構成の結果を報告するディスカッションです。

無関係な話題の受け皿になっていた「Unity Engine」カテゴリを解消することが主な目的で、投稿が最初から適切なカテゴリに入る割合が増え、運営がトピックを事後に移動する時間が大きく減ったとしています。

新しいタグ機能への慣れについてはまだ様子を見ている段階で、このスレッドで更新を続けると述べています。

### CICD Made Easier with Unity CLI

[CICD Made Easier with Unity CLI - Unity Blog](https://unity.com/blog/cicd-made-easier-with-unity-cli)

継ぎ足しで肥大化しがちなCI/CDパイプラインの責務を、Unity CLIでどう減らせるかを解説するブログ記事です。

CIプロバイダーやプロジェクトのビルドコードを置き換えるものではなく、両者をつなぐ独自の仕組みを減らすものと位置付けています。

- Simplify: express what the pipeline needs to do
    - Editorの実行ファイルを直接呼んで`-batchmode -nographics -quit -runTests ...`を並べる代わりに、`unity test . --mode EditMode --output ./results/editmode.xml --allow-install`のように意図を直接書ける。`--allow-install`はプロジェクトが要求するEditorバージョンを読んで必要ならインストールするため、バージョンの正はビルドマシンではなくプロジェクト側になる。
    - ビルドも`unity build . --target Android --execute-method Builder.PerformBuild --output-path ./out/app.aab`と書け、シーン選択やスクリプティングシンボルなどプロジェクト固有のロジックは既存の`Builder.PerformBuild`側に残る。CLI自体は`brew install --cask unity-cli`（macOS / Linux）や`winget install Unity.CLI`（Windows）で入れる。
- Improve: remove risk from the pipeline
    - ランナーのEditorバージョンが違う、CIと開発者マシンで挙動が違う、独自ラッパースクリプトがそれ自体インフラになる、失敗の診断が難しい、認証情報とライセンスがジョブより長く残る、パイプラインが1つのCIプロバイダーに縛られる、という6つのリスクを挙げている
    - 診断面では`unity test`がNUnit XMLを直接出力し、定義済みの終了コードと`cli-log.json`などのログを残す。認証情報はbase64でエンコードしたシークレットから復号してビルド後に削除し、ライセンスは`unity license activate --floating`から`unity license return`までをジョブのライフサイクルとして扱い、エフェメラルランナーでは`return`を無条件の後始末に置くよう勧めている。

### 5 tips for speeding up your XR dev workflows with Unity CLI

[5 tips for speeding up your XR dev workflows with Unity CLI - Unity Blog](https://unity.com/blog/5-tips-for-speeding-up-your-xr-dev-workflows-with-unity-cli)

MetaのDeveloper AdvocateであるDilmer Valecillos氏に、Unity CLIをXR開発のワークフローへ組み込む5つの方法を聞いたブログ記事です。

- Tip 1: Leverage the new Unity CLI and pipeline package over the MCP
    - Unity MCP serverをリリース以来使ってきたが、MCPは飛ばしてUnity CLIとpipelineパッケージを使うことを勧めている。CLIは同じプロトコルの組み込みMCP serverを持つためMCPクライアントはそのまま接続でき、最大の利点はRoslynによるコード評価でEditorの再コンパイルとドメインリロードが不要になること。
- Tip 2: Familiarize yourself with the basic commands
    - `unity command eval "return UnityEditor.EditorApplication.isPlaying;"`のようにC#スニペットをメインスレッドで即時実行する例や、`unity install 6000.5.0f1 -m android android-sdk-ndk-tools --cm --accept-eula --yes`のようなパラメータ化したインストール例を挙げている
- Tip 3: Try out different LLMs
    - 現在はClaude CodeとCodexを併用し、コードを書く時とレビューする時で別のLLMを使い分けることを勧めている
- Tip 4: Get to a working Quest build faster with Meta's AI tooling
    - 汎用のコーディングアシスタントはVRについて自信満々だが間違いも多いとし、最新ドキュメントと実機への直接アクセスを提供する[Meta VR CLI](https://developers.meta.com/horizon/documentation/unity/ts-ai-tooling-overview/#hzdb-horizon-debug-bridge)（`metavr mcp install claude-code`などでMCP serverを導入）、Questの要件を確認して誤設定を直す[Project Setup Tool](https://developers.meta.com/horizon/documentation/unity/unity-upst-overview/)、LOD付きの3Dアセットを150万点検索できる[Meta Asset Library](https://developers.meta.com/horizon/documentation/unity/unity-asset-library-overview/)を紹介している
- Tip 5: Let agents assist your performance profiling
    - Meta VR CLIの`perf`コマンド（`metavr perf capture --mode full --duration 15000 ...`）でフレーム時間のスパイクやCPU / GPUのボトルネックを数秒で提示させ、Unity内では[Quest Runtime Optimizer](https://developers.meta.com/horizon/documentation/unity/unity-quest-runtime-optimizer)のボトルネック分析とGameObject単位の「What If」分析を使う。OVRMetricsやRenderDoc、Perfetto、Unity Profilerも引き続き使える。

### Optimizing Deep Rock Galactic: Survivor for Mobile

[Optimizing Deep Rock Galactic: Survivor for Mobile - Unity Blog](https://unity.com/blog/optimizing-deep-rock-galactic-survivor-for-mobile)

Funday GamesのDeep Rock Galactic: Survivorを、移植会社のPiktivがモバイル向けに最適化した過程を、engineering managerのMarcus Ekelund氏とprincipal engineerのFredrik Åkerblom氏にインタビューしたブログ記事です。

PC版が1.0に達する前に分岐し、PCからモバイルへの一方向マージだけを維持しながら、技術面では独自に再構築したとしています。
対象機種の多くはRAM 4GBですが、対象のiPadのうち1機種だけが3GBで、使えるメモリは約1,850MBしかなく、超えるとクラッシュするためRAM管理が最優先だったとのことです。

- ボトルネックと解決策
    - ダメージラベル
        - TextMesh ProのGameObject生成がボトルネックだったため、0〜9のスプライトシートを使う通常のparticle systemに置き換えた
    - パスファインディング
        - PC版のNavMeshをやめ、flow field navigationとKD-treeによる物理クエリの最適化を導入した
        - flow fieldはグリッド全体にゴールからの方向を伝播させるためエージェント数にコストが依存せず、KD-treeは範囲検索で爆発範囲内の敵探索などを置き換えるが、敵が常に動くためツリーの再構築頻度が課題だった
    - 敵の描画
        - 約1,000体のskinned mesh rendererが同時に表示される問題に対し、アニメーションのキーフレームをテクスチャに焼き込んで頂点シェーダーで動かし、GPU instancingでCPUコストをほぼゼロにした
- テストと指標
    - 低スペック機で30fps、フラグシップで60fpsを目標に、1,000体の敵が接近する、500体と全武器の自動発射といった6シナリオでCPU / GPU / メモリを自動計測した
        - 約4,000個の光るcubeを10秒間にspawnするシナリオは当初大きな負荷だったが、最適化後は計測できないレベルになった
    - 敵の移動と物理は10〜15段の依存を持つBurst jobsのチェーンで通常のphysics systemの外で処理し、手続き生成されるレベルの床と壁はトップダウンカメラの可視範囲を計算して独自のbatch draw commandで送っている
    - AddressablesはbiomeごとにアセットをまとめてiPadのメモリ制限を守るために重要で、同期処理を非同期化する大きなアーキテクチャ変更を伴った

ECSやDOTSを使うべきだったと気付いても全面書き換えは不要で、Burstコンパイラとネイティブなデータ型の部分採用で十分だったというのが2人の教訓です。

### How Hologryph Built SAND: Raiders of Sophie For A Sustainable Live Ops Cadence

[How Hologryph Built SAND: Raiders of Sophie For A Sustainable Live Ops Cadence - Unity Blog](https://unity.com/blog/hologryph-sand-raiders-of-sophie)

HologryphのCTO兼ゲームディレクターであるSerhiy Grinets氏に、1910年の架空の砂漠世界を舞台にしたextraction game「SAND: Raiders of Sophie」の技術構成とライブ運用についてインタビューしたブログ記事です。

技術目標は、authoritativeなサーバーとクライアントの厳密な分離と両側で同一結果を出す手続き的なワールド生成、1台のTramplerを構成する数百エンティティの同期、滑らかなワールドストリーミングの3つでした。

- 構成
    - Tramplerはデッキやキャビンなどのcompartment単位で構成され、新しいcompartmentはモデリングと設定だけで組み込める。基盤は独自のInversion of ControlコンテナとECSの組み合わせで、レプリケーションは独自ネットワークエンジンがゲームプレイコードの下層で処理する。
    - シミュレーションはUnity EntitiesではなくオープンソースのEntitasを改造したもので動くが、地形生成、Tramplerの移動計算、独自のocclusion cullingはBurstコンパイルしたjobのチェーンとしてメインスレッド外で実行している
    - 砂塵、煙、シールド、武器のエフェクトはすべてVFX Graph製で、size、color、timingなどのパラメータを公開してアーティストだけで新エフェクトを作れるようにしている
    - Addressablesがメモリ管理の中核で、プレイヤーの移動に応じてコンテンツを読み込み・解放する。クライアントとサーバーのプロジェクト間でアセットを転送する独自の仕組みも持つ。
    - Asset StoreからはGPU Instancer Pro、Amplify Impostors、Odin Inspector、Rewired、Easy Save、DOTween、I2 Localizationを使っている
- Vivox
    - 全プレイヤーがクルー用の「無線」チャンネルと3D proximity voiceのpositionalチャンネルに常時接続し、位置情報はプレイヤー移動時のみ約20回/秒で送っている。proximity voiceは交渉、協力、裏切りといったextraction gameらしい社会的なやり取りを生むゲームプレイ要素だとしている。

### DrakkenRidge: Building an open-world adventure for mobile VR

[DrakkenRidge: Building an open-world adventure for mobile VR - Unity Blog](https://unity.com/ja/blog/drakkenridge-building-open-world-mobile-vr-rpg-unity-ecs)

Garage CollectiveのSimeon Acker氏とCyril Guichard氏が、2人チームでモバイルVR向けのオープンワールドRPG「DrakkenRidge」をEntitiesで構築した方法を解説するゲストブログです。

- ECSとGameObjectの使い分け
    - ワールドの90%はEntitiesとして[Entities Graphics](https://docs.unity3d.com/Packages/com.unity.entities.graphics@1.0/manual/index.html)で描画し、数百のバッチとSetPass呼び出しを削減して数千のオブジェクトを8回のSetPass呼び出しで描いている
    - 掴み、登攀、パルクール、魔法、近接戦闘といった近接のVRインタラクションは、プログラマー1名とアーティスト1名で素早く試行するため従来のGameObjectとMonoBehaviourで作っている。物理オブジェクトはプレイヤー位置を追跡し、遠距離では描画のみ、近距離でだけ物理相互作用を許可する。
- カスタムのエンティティシステム
    - Editor上で各エンティティにカリング値を持たせてランタイムで描画とカリングを判断する距離オーサリング、都市内のエンティティをまとめて判断するカスタムのエンティティグループ、遠方のエンティティを軽いエンティティに置き換えるエンティティLOD
    - 距離計算は`IJobChunk`を実装したBurstコンパイル済みのjobで行い、`DynamicBuffer`を反復前に`NativeArray`へ変換する最適化を紹介している
- さらなる最適化
    - ローポリゴンのレトロなアートスタイルのため従来の3D LODはメリットが薄く、独自の距離オーサリングで代替した。森など密集した遠景には一定距離で2Dビルボードに置き換えるインポスターを使っている。

### Made With Unity: gamescom 2026 Recap

[Made With Unity: gamescom 2026 Recap - Unity Blog](https://unity.com/blog/made-with-unity-gamescom-2026-recap)

gamescom 2026でのUnity製タイトルの動向をまとめたブログ記事で、Indie Arena Boothへの初出展、Opening Night Liveで発表されたHUMANKIND 2やLEGO Skylinesなどの新作、Made with Unity Awardを受賞したMorbid Metalを紹介しています。

## Articles

### [Unity] PSD から実用的な Prefab を生成する Claude Code Skills 設計

[[Unity] PSD から実用的な Prefab を生成する Claude Code Skills 設計 - WonderPlanet Developers' Blog](https://developers.wonderpla.net/entry/2026/08/26/110022)

社内ハッカソンで開発した、PhotoshopのPSDからuGUIのPrefabをClaude Code Skillsで自動生成するツールの設計を解説する記事です。

共通のnested prefabを使う、ヒエラルキーからUIの意図が読める、LayoutGroupとアンカーが適切に設定されている、の3条件を「実用的なPrefab」と定義し、レイヤー分けが描画都合で決まるPSDに対して「どれが塊で、どれが並ぶか」というUI都合の構造判定をAIに任せています。

実装面では[UniCli](https://github.com/yucchiy/UniCli)の`eval`で起動中のEditor内でC#を実行し、CanvasをRenderTextureで撮影してPSDと比較・修正するループをEdit Modeで回す構成です。演出を含む画面や場合分けが必要なUIではルールを明示しないと良い結果にならないとし、デザイナーがPhotoshopレイヤーに意図を追記して暗黙知をスキルに蓄積する仕組みを紹介しています。

### ZLinqが急に動かなくなった原因がPipelineパッケージだった

[ZLinqが急に動かなくなった原因がPipelineパッケージだった - きゅぶろぐ](https://blog.kyubuns.dev/entry/2026/09/19/222836)

Unityのバージョンを上げた後に[ZLinq](https://github.com/Cysharp/ZLinq)を使うコードが`MissingMethodException`で落ちるようになった原因を追った記事です。

Pipelineパッケージに同梱される`System.Runtime.CompilerServices.Unsafe.dll`が古く、ZLinqが使う`Unsafe.SkipInit`を持たないことが原因とのことでした。
これまではCollectionsパッケージが同梱する新しいDLLが使われていたため問題が出ず、Collectionsが2.6.8へ更新されて重複回避のためにこのDLLが削除されたことで、Pipeline側の古いDLLが読み込まれるようになったと説明しています。

この記事では、ワークアラウンドについても併せて紹介しています。

### IEnableableComponent usage in an actual game

[IEnableableComponent usage in an actual game - COFFEE BRAIN GAMES](https://coffeebraingames.wordpress.com/2026/09/10/ienableablecomponent-usage-in-an-actual-game/)

Unity ECSの`IEnableableComponent`を、開発中のゲーム「Made of Food」でどう使っているかを3つのパターンで紹介する記事です。

3つのパターンを、実際のクエリコードとともに示しています。

- 一度だけ実行: スプライト準備が必要なエンティティを`WithDisabled<T>()`で拾い、処理後に`SetComponentEnabledForAll`で有効化して再処理を防ぐ
- 状態: `Tired`のようなタグを有効・無効にし、複数のシステムが`WithNone<Tired>()`で対象を除外する
- dirty flag: ネストした`ItemState.Changed`を有効にして`WithAll<ItemState.Changed>()`で変更のあったアイテムだけを更新し、処理後に無効化する

### Dissolve & Noise | Unity Shader Code Basics 10

[Dissolve & Noise | Unity Shader Code Basics 10 - Daniel Ilett](https://danielilett.com/2026-09-10-tut10-10-dissolve-noise/)

Unity Shader Code Basicsシリーズの第10回として、ノイズ関数をHLSLで自作し、ディゾルブ表現を実装する記事です。

シードから疑似ランダムな単位ベクトルを返す`randomVector()`を土台に、2種類のノイズを`NoiseFunctions.hlsl`に実装しています。

- Perlinノイズ: 格子点のランダムベクトルとの内積を補間する。単一オクターブ版と、周波数を倍にしつつ振幅を半分にして重ねる3オクターブ版を作る。
- Voronoiノイズ: セルの中心と境界からの距離を求める

`Dissolve.shader`はPBRシェーダーを拡張し、`_NoiseScale`や`_CutoffHeight`、`_EdgeColor`などのプロパティと`_Time.y`によるアニメーションで、ノイズに沿って溶けていく表現を作っています。

### Unity Shader Graph Basics (Part 13 - Terrain Lit Official Support)

[Unity Shader Graph Basics (Part 13 - Terrain Lit Official Support) - Daniel Ilett](https://danielilett.com/2026-09-17-tut9-13-official-terrains/)

Unity 6.3でShader Graphに追加されたTerrain material typeを使って、テレイン用のシェーダーを作る記事です。サンプルプロジェクトはUnity 6.6へ更新されています。

Create > Shader Graph > URP > Terrain Lit Shader Graphから作成し、インデックスでテクスチャレイヤーを取り出すTerrain Textureノード、各レイヤーの重みをRGBAに持つLayer Masks出力、レイヤーのPBR出力をまとめてサンプリングするLayer Standardノードを組み合わせて基本のテレインシェーダーを組んでいます。

後半では、レイヤーマスクにハイトマップを掛けて境界を作るheight-based blendingをHeight MaskとBlend Layers Alphaノードで実装しています。

### Unity 2Dで絵が化けるShader Graphおもしろテクニック12選

[Unity 2Dで絵が化けるShader Graphおもしろテクニック12選 - Zenn](https://zenn.dev/gamedev_toollab/articles/3255ea6d473453)

Unity 2DのSpriteRenderer向けに、Shader Graphで実装できる表現技法を12個まとめた記事です。

被弾フラッシュ、パレットスワップ、溶解、アウトラインと内側リム、揺れ、グリッチ、ピクセル化と減色、ホログラム、Normal Mapと2D Lightによる疑似立体化、Mask Mapによる部分発光、複製Spriteの水面反射、ワールドを横切るスキャンの12種を、模様生成用と画像サンプリング用の座標を一本化しないという前提のもとで解説しています。

Sprite Atlasの回転パックで横ずれが縦に変わる、透明縁が黒くなるといった失敗例と、TextureSample数や透明Overdrawなど負荷要素についても整理しています。

