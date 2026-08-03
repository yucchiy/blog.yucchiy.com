---
type: unity-weekly
title: Unity Weekly 283
description: >-
  2026/08/03週のUnity Weeklyです。Unity Hub 3.20.0、Unity 6.5/6.6のWeb Platform、Multiplayer Service Package 2.3.0、Cloud CodeのStateful Logic、Input System 1.20.0などを紹介しています。
pubDatetime: 2026-08-03T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Web Platform - What shipped in 6.5, and what's coming in 6.6

[Web Platform - What shipped in 6.5, and what's coming in 6.6 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/web-platform-what-shipped-in-6-5-and-whats-coming-in-6-6/1732387)

Unity 6.5のWeb向け更新とUnity 6.6 Betaで予定している機能を紹介するディスカッションです。

- Shipped in Unity 6.5
    - WebAssembly 2023（Wasm2023）がWebビルドのデフォルトになり、enhanced code strippingに関する不具合修正と新しい命令の利用によってビルド時間を短縮した
    - UI ToolkitのComputed Styleなどをアンマネージドメモリへ移し、GC負荷とネイティブコードへデータを渡す際のオーバーヘッドを削減した
- Coming up in 6.6 Beta
    - WebAssembly64は `memory64` 仕様による64ビットポインターで2〜4GBのメモリ上限を取り除く
        - ChromeとFirefoxは対応済みだがSafariは未対応で、ポインターサイズ増加によるバイナリとメモリ使用量の増加もある。
    - Progressive Asset Loadingは単一の`.data`ファイルをシーン単位の小さなパッケージへ分割し、Scene 0の起動に必要なデータだけ先に取得する
        - カスタムWebGLテンプレートからダウンロード進捗も扱えるようになった

### Now Available: Unity Hub 3.20.0

[Now Available: Unity Hub 3.20.0 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/now-available-unity-hub-3-20-0/1732484)

Unity Hub 3.20.0の正式リリースを告知するディスカッションです。
エディターとモジュールのインストール信頼性を中心に、画面構成、プロジェクト一覧の性能、企業ネットワーク対応、セキュリティが更新されています。

- What’s New in 3.20.0
    - General
        - Hubの画面構成を整理した
        - SettingsとLearnをトップバーへ移動した
        - ResourcesをHelpful linksへ改名し、Learn内のタブへ移動した
        - LicensesをSettings配下へ移動した
        - 左ナビゲーションのトグルをヘッダーへ移動した
        - 左ナビゲーションを完全に隠し、トグルへのホバーで一時表示できるようにした
- Bug fixes & improvements
    - Installs
        - WindowsでEditorのアンインストールに失敗した際にエラーを表示し、保護されたルートディレクトリへのEditorインストールを拒否するようにした
        - 一時的なネットワークエラー、タイムアウト、整合性検証失敗時の再試行と、インストール前のダウンロード検証を追加した
        - 複数モジュールの一部が失敗しても残りを完了し、失敗したモジュールだけ再試行できるようにしたほか、共有依存関係、Windows Installerの競合、言語パックの重複ダウンロードに関する問題を修正した
        - Install EditorダイアログのArchiveタブで、Hubを再起動するまでEditorのインストール状態が誤って表示される問題を修正した
    - Projects
        - プロジェクトの作成とインポートを早い段階で利用できるようにした
        - プロジェクト一覧からSize列を削除し、行の展開時にサイズを計算することで一覧の性能を改善した
        - プロジェクト作成時に使用するUnityの`.gitignore`テンプレートを更新した
        - New Projectで選択したUse AI Assistantの値を保持するようにした。デフォルトは無効のままとなる。
        - Settings > ProjectsへShow AI Assistant option in new projectsトグルを追加した。無効にするとNew ProjectのAI Assistantオプションを隠し、AI Assistantパッケージを追加しない。
        - Unity Version Controlの選択時に、New Projectで選んだソースコントロールプロバイダーが保持されない問題を修正した
        - 別のソースコントロールプロバイダーへ接続したあとに切断したプロジェクトをUnity Version Controlへ接続すると、通知なしで失敗する問題を修正した
        - プロジェクトの接続状態が変わっていない場合でも、無関係な更新後にProject connected通知が表示される問題を修正した
    - General
        - Settingsへ利用可能な更新を示すバナーを追加し、更新確認中の進捗表示を分かりやすくした
        - HubでGitHubとの接続を解除しても、ほかのツールが保存したGitHub認証情報を削除しないようにした
        - 選択した更新チャンネルがHubの再起動後にリセットされる問題を修正した
        - 起動時にHubのバージョン番号が一瞬表示される問題を修正した
        - Analyticsのオプトアウト設定を保存できなかった場合に、通知なしで元へ戻さずエラーを表示するようにした
        - Bug Reporterでフォルダーをアップロードした場合、送信時ではなく選択時に拒否するようにした
        - Linuxでのサインインを埋め込みHubウィンドウではなくデフォルトブラウザーで開くようにした
        - LinuxのタスクバーにUnity Editorのアイコンが正しく表示されるようにした
        - Linuxのフレームレスウィンドウで角丸を有効にした
        - 407 Proxy Authentication Required発生時のメッセージを明確にし、自動再試行を追加した
    - Security
        - macOSでの動的ライブラリ注入に対する対策を追加した
        - macOSとLinuxの昇格インストールおよびアンインストールで、昇格コマンドの実行前にEditorインストールパスの危険なシェル文字をサニタイズするようにした
        - Editorのdeep link URL起動とフォルダー削除でシェルを経由せず、コマンド注入を防ぐようにした
        - メインウィンドウのWeb PreferencesをElectronのセキュリティベストプラクティスに沿うよう更新した

### Bunny Blitz - 2D and 3D Sample Project Available Now

[Bunny Blitz - 2D and 3D Sample Project Available Now - Technical Articles - Unity Discussions](https://discussions.unity.com/t/bunny-blitz-2d-and-3d-sample-project-available-now/1731205)

Unity公式の無料サンプル「Bunny Blitz」をAsset Storeで公開したことを紹介するディスカッションです。
Unity 6.3で導入された3D as 2Dのワークフローを使い、2D環境内の3Dキャラクターを2D LightsとURP 2D Rendererで一体的に描画しています。

Sorting GroupによるSpriteと3D Objectの並び替え、Unity 6.5の2D custom injection pass、Shader Graphの3D as 2D対応、VFX Graph、2D Physics、再利用可能なレベルテンプレートなどを確認できます。

### Multiplayer Service Package v2.3.0 is now publicly available

[Multiplayer Service Package v2.3.0 is now publicly available - Unity Services - Unity Discussions](https://discussions.unity.com/t/multiplayer-service-package-v2-3-0-is-now-publicly-available/1732363)

Multiplayer Service Package 2.3.0のリリースを告知するディスカッションです。
`SessionConnector`をセッションの作成、参加、構成まで扱えるライフサイクルツールへ拡張しています。

- Added
    - `SessionConnector`
        - `SessionConnector.Join`を追加し、`SessionConnector.Create`、`SessionConnector.CreateOrJoin`と合わせて利用可能にした
        - `SessionConnector.WithSessionOptions`でセッション名、最大人数、公開範囲、ロック状態、パスワードを設定できるようにした
        - `SessionConnector.WithDirectNetworkOptions`でDirect接続のIPアドレスとポートを設定できるようにした
        - `SessionConnector.WithRelayNetworkOptions`で`RelayConnectionOptions`を使い、Relayのリージョン、プロトコル、リージョン保持を設定できるようにした
        - `SessionConnector.WithJoinByCode`で任意のパスワードと参加コードを使ってセッションへ参加できるようにした
        - `SessionConnector.WithJoinById`で任意のパスワードとセッションIDを使ってセッションへ参加できるようにした
        - `SessionConnector.WithCreateOrJoin`でIDを指定してセッションを作成または参加できるようにした
        - `SessionConnector.GetSessionOptions`で現在のセッション作成設定を取得できるようにした
        - `SessionConnector.GetJoinOptions`で現在の参加設定を`JoinOptions`として取得できるようにした
        - `SessionConnector.GetRelayNetworkOptions`で現在のRelay接続設定を取得できるようにした
        - `SessionConnector.GetDirectNetworkOptions`で現在のDirect接続のIPアドレスとポート設定を取得できるようにした
    - `JoinOptions`へ参加方法を示す`Mode`、`SessionId`、`SessionCode`、任意の`Password`を追加した
    - `JoinSessionMode`を公開し、コードとセッションIDのどちらで参加するかを外部コードから確認できるようにした
    - `RelayConnectionOptions`へRelayのリージョン、トランスポートプロトコル、リージョン保持設定をまとめた
    - `DirectConnectionOptions`でlisten IP、publish IP、ポートのスナップショットを公開した
- Fixed
    - Session Connectorアセット作成後にProjectウィンドウでインラインリネームへ入るようにした
    - Distributed AuthorityとRelayのハンドラーが`SessionException`を投げる前に重複した`LogError`を出さないようにした。基になった例外は`InnerException`へ保持され、呼び出し側が処理した回復可能な失敗でUnity Test Runnerが失敗しない。

### Create event-based multiplayer games with Stateful Logic and Cloud Code

[Create event-based multiplayer games with Stateful Logic and Cloud Code - Unity Services - Unity Discussions](https://discussions.unity.com/t/create-event-based-multiplayer-games-with-stateful-logic-and-cloud-code/1731013)

Cloud Code 3.0.0-exp.8で導入された実験的なStateful Logicを使い、専用サーバーを持たずにイベント駆動型のマルチプレイヤーゲームを構築する方法を紹介するディスカッションです。
カードゲーム、ターン制ゲーム、パズルなど、プレイヤーの操作時だけ状態が変わるゲームを対象としています。

- Local Testing
    - Unity EditorからローカルCloud Codeサーバーを起動してバックエンドロジックを検証し、完成後はDeploymentウィンドウから環境へ配備する
- State Management
    - Player scopeで個人のインベントリや報酬を保持し、MultiplayerSession scopeでセッション参加者の共有状態を管理する
- Native Authoring
    - Unity 6.5以降ではProjectウィンドウからCloud Code Module Scriptを作成でき、組み込みSource Generatorがクライアント側のbindingを同期する

ScopesとLocal Cloud Code ServerはUnity 6.3 LTS以降、Native AuthoringはUnity 6.5以降で利用できます。

### RELEASE: Input System 1.20.0

[RELEASE: Input System 1.20.0 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/release-input-system-1-20-0/1731685)

Input System 1.20.0のリリースを告知するディスカッションです。
Unity 6.0、6.3、6.5、6.6の今後のEditor更新からPackage Manager経由で利用可能になり、パッケージ名`com.unity.inputsystem`を指定して直接導入することもできます。

- 導入方法
    - Package Managerに更新が表示された時点でアップデートする
    - Package ManagerのInstall Package By Nameで、パッケージ名に`com.unity.inputsystem`、バージョンに`1.20.0`を指定する
    - `Packages/manifest.json`へ`"com.unity.inputsystem": "1.20.0"`を追加する
- 主な変更
    - input consumption機能を再設計した
    - focus eventによるフォーカス処理を改善した
    - domain reloadを無効にしたEnter Play Modeに対応した

すべての改善と修正は[Input System 1.20.0のChangelog](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.20/changelog/CHANGELOG.html)で確認できます。

## Articles

### AssetBundle に代わる新システム！ Unity 6.6 の Content Directories を紐解く

[AssetBundle に代わる新システム！ Unity 6.6 の Content Directories を紐解く - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2026/07/30/164955)

Unity 6000.6.0b1のContent Directoriesについて、基本的なビルドとロード、AssetBundleとの違い、Content Fileやマニフェストを含む内部設計を調査した記事です。

1アセットを1 Content Fileへ分けるgranular layoutによって重複と常駐メモリを抑える一方、Unity 6.6時点ではローカルコンテンツのみで、動的更新や独自ストリームからのロードが未対応である点も整理しています。

### Unity 6.6（uGUI 2.6）でSafeAreaコンポーネントが追加される

[Unity 6.6（uGUI 2.6）でSafeAreaコンポーネントが追加される - Qiita](https://qiita.com/RyotaMurohoshi/items/8c6e550056de97ba0ea9)

Unity 6.6 Beta 5とuGUI 2.6で追加された公式の`SafeArea`コンポーネントを紹介する記事です。

`Screen.safeArea`を使って`RectTransform`を調整し、適用する辺、基準方向、反対側にも同じinsetを適用する中央揃えを設定できます。

### .NET/Unity向けの非同期ステートマシンを公開しました(してました)

[.NET/Unity向けの非同期ステートマシンを公開しました(してました) - Qiita](https://qiita.com/Hyouga/items/bab5943a52200456d78d)

この記事の著者が開発する、.NETとUnity向けにMITライセンスで公開されている[AsyncStateMachine](https://github.com/HyogaFukuno/AsyncStateMachine) について、基本的な使い方と設計を紹介する記事です。

コンテキストを必須にしたPure C#のStateをFactoryで生成し、各Stateの`OnExecuteAsync`が実行期間と例外処理を所有することで、毎フレーム親から呼び出す同期型ステートマシンとは異なるState主体の制御を実現しています。

### Unityのテストコード入門：EditMode・PlayMode・非同期・CIを実務で使い分ける

[Unityのテストコード入門：EditMode・PlayMode・非同期・CIを実務で使い分ける - Zenn](https://zenn.dev/gamedev_toollab/articles/b54a13c6586545)

Unity 6世代のUnity Test Frameworkを前提に、EditModeとPlayMode、`[Test]`と`[UnityTest]`、非同期テスト、既存プロジェクトへの段階導入、CIでの実行範囲を整理した入門記事です。

ゲームルールは高速なEditModeテスト、Unityのライフサイクルやフレーム経過が必要な箇所だけPlayModeテストとし、PR、main統合、夜間またはリリース前で検証範囲を分ける方針を示しています。
