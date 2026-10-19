---
type: unity-weekly
title: Unity Weekly 292
description: >-
  2026/10/19週のUnity Weeklyです。Unity Hub 4.0 Beta、Unity CLIによるライトベイクのコマンド、Foxy Dumplingsのマルチプラットフォーム開発、Triple-i Initiativeのショーケースなどを紹介しています。
pubDatetime: 2026-10-19T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Now Available: Unity Hub 4.0 Beta

[Now Available: Unity Hub 4.0 Beta - Unity Hub - Unity Discussions](https://discussions.unity.com/t/now-available-unity-hub-4-0-beta/1739331)

Unity Hub 4.0 Betaの公開をアナウンスするディスカッションです。

macOS、Windows、Linux向けのネイティブアプリとして一から作り直したもので、起動は約10倍速く、ダウンロードサイズは約4分の1になったとしています。
Unity CLIとコアを共有しており、両方のツールが同じプロジェクト、Editor、サインインを参照します。

ソース管理では、SSHを使うGitリモートに対応し、また、Git Credential Managerを設定してGitHubとGitLabへブラウザーからサインインできるため、personal access tokenの貼り付けが不要になりました。

Linuxでは既存の `unityhub` パッケージをその場で更新するほか、Flatpakでの配布も始まりました。

詳細は[リリースノート](https://unity.com/unity-hub/release-notes#4.0.0-beta.1)を案内しており、4.0.0-beta.1（2026年10月14日）の主な項目は次のとおりです。

- What's new
    - General
        - `Cmd+F`（WindowsとLinuxは `Ctrl+F`）でProjects、Templates、Installsの検索へ移動できる
        - システムの視差効果を減らす設定に従う
    - Source control
        - SSHを使うGitリモートはSSHエージェントが保持する鍵で動作する
        - 組織ごと、またはプロジェクトごとに選んだGitアカウントは、Unity CLI、IDE、Gitと共有される
        - システムの資格情報マネージャーに保存済みのGitHubとGitLabのサインインを使う
        - 接続を切るとターミナルとIDEもサインアウトするため、事前に確認を求める
    - Installs
        - Install Editorダイアログに各バージョンのリリース日を表示する
    - Licenses
        - Linux Arm64では、FEX-Emuがインストールされていればライセンス処理が動作する
- Bug fixes & improvements
    - Projects
        - アカウントを切り替えると、インストールできるEditorリリースの一覧を更新する
    - Source control
        - Gitのクローンに進捗を表示し、Cancelで中止できる
        - Git LFSがインストールされていれば、Git LFSのファイルを実ファイルとして取得する
        - サブフォルダーにあるプロジェクトのリポジトリリンクがデフォルトブランチを開く
        - Windowsで、アクセント付きや非ラテン文字のパスに対してUnity Version Controlが空のチェックインをしなくなった
        - 新規プロジェクトの最初のUnity Version Controlチェックインが失敗した時に報告する
    - Installs
        - キャンセルやクラッシュで残った部分的なダウンロードファイルを削除する
    - Custom templates
        - Editorで開いているプロジェクトからはテンプレートを作成できない
        - 非ラテン文字だけのテンプレート名を使える
    - General
        - Unity Editorのプロキシ設定（`UNITY_PROXYSERVER`、`UNITY_NOPROXY`）を使う
    - Security
        - バグレポートのログとHub自身のログにアカウント名とメールアドレスを含めない

### Upcoming video: Light baking with Unity CLI (commands for light baking)

[Upcoming video: Light baking with Unity CLI (commands for light baking) - Lighting & Global Illumination - Unity Discussions](https://discussions.unity.com/t/upcoming-video-light-baking-with-unity-cli-commands-for-light-baking/1739366)

公開予定の動画「Light baking with Unity CLI」で使うスクリプトを先行して配布するディスカッションです。

添付の[LightingCLI.zip](https://discussions.unity.com/uploads/short-url/aZzuVKPkgaAGrSDRlUTVaQ4sK9O.zip)には、次の6つのカスタムコマンドを含む `.unitypackage` が入っています。

- `lighting-viewset`：シーンのピン留めしたカメラビューを生成する
- `lighting-bake`：複数のシーンを順にベイクし、それぞれをキャプチャする
- `lighting-status`：進行中のベイクの状態を確認する
- `lighting-capture`：シーンのビューをPNGとHTMLのコンタクトシートに描画する
- `lighting-verify`：欠落または古くなったライティングデータを検出する
- `lighting-report`：コミット間で差分を取れるJSONとしてライティングの統計を出力する

要件はUnity 6000.6、URP、Pipelineパッケージ（`unity pipeline install`）で、`Assets > Import Package > Custom Package` で取り込みます。

Asset Storeの外で共有するパッケージのため、Unityは未署名の警告を出しますが、想定どおりの挙動だとしています。

プロジェクトフォルダーから `unity command lighting-viewset --scenes MyScene` のように実行する例を示し、詳細はzip内のREADMEと[Unity CLIのドキュメント](https://on.unity.com/UnityCLI_Docs)を案内しています。

ほかに欲しいコマンドのアイデアや質問も募っているとのことです。

### Information on account suspension

[Information on account suspension - News & General Discussion - Unity Discussions](https://discussions.unity.com/t/information-on-account-suspension/1739213)

二要素認証（2FA）のリセット期限後にアカウントが停止されたユーザーへの対応を案内するディスカッションです。

停止されたアカウントは、[サポート](https://support.unity.com/hc/en-us/p/account_and_organization)の「Sign-in and account recovery」から連絡するよう案内しています。

継続的なセキュリティ対策として、全ユーザーに[アカウントのセキュリティページ](https://cloud.unity.com/account/security)で2FAを有効化または更新することを勧めています。

停止中にプライバシー関連の請求を出したユーザーは、まずサポート経由でアクセスを回復したうえで、[Unity Dashboardから請求を出し直す](https://support.unity.com/hc/en-us/articles/33187219273876-How-can-I-request-a-personal-information-report-for-my-Unity-account)必要があります。

また、サポートへ送る内容をまとめた[ナレッジベースの記事](https://support.unity.com/hc/en-us/articles/54616227806612-My-Unity-account-was-suspended-after-the-2FA-deadline-How-do-I-get-it-back)を案内しています。

### How Soft Crunch Games built Foxy Dumplings for every platform

[How Soft Crunch Games built Foxy Dumplings for every platform - Unity Blog](https://unity.com/blog/foxy-dumplings-cross-platform-development)

4人チームの[Soft Crunch Games](https://softcrunch.games/)が、料理と経営のゲーム『[Foxy Dumplings](https://store.steampowered.com/app/4184130/Foxy_Dumplings/)』を単一のコードベースからPC、コンソール、モバイルへ出荷した取り組みを紹介する記事です。

全プラットフォームが同じコミットから同じビルドを得る方針を取り、ゲームプレイのコードはプラットフォームに依存させていません。
セーブ、実績、クラウド同期などの固有処理はインターフェースの背後に置いて起動時に選び、約40のプラットフォームとストアの構成に対するコンパイルチェックをスクリプトで回しています。

- 入力とUIは、ゲームパッド、キーボードとマウス、タッチの各操作体系を単独で完結させ、1つのボタンプロンプトのPrefabが使用中のデバイスに応じて表示を切り替える
- 性能は最も弱いターゲットから実機でプロファイルし、レンダーテクスチャのサイズ削減と、言語切り替え時にフォントアトラスで起きるメモリスパイクを修正した
- セーブは移植可能な単一のバイナリ形式にし、クラウド同期は各プラットフォームのネイティブセーブと[Unity Cloud Save](https://docs.unity.com/en-us/cloud-save)、アカウント連携は[Unity Authentication](https://docs.unity.com/en-us/authentication)で構成した

Unity 6.3 LTSではIL2CPPビルドが10〜15%ほど速くなったと報告しています。

振り返りとして、Editorでは出ない問題が実機で見つかったため、もっと早く開発機にビルドを載せるべきだったと述べています。

### All Unity games in the October Triple-i Initiative

[All Unity games in the October Triple-i Initiative - Unity Blog](https://unity.com/blog/all-unity-games-triple-i-showcase)

2026年10月に開催された[Triple-i Initiative](https://iii-initiative.com/en/)のショーケースで紹介されたUnity製タイトルをまとめた記事です。

春のショーケースから6か月後のサプライズ開催で、45分間にワールドプレミア、ゲームプレイ公開、発売日発表が詰め込まれ、紹介作品の半数以上がUnity製だったとしています。
あわせて[Triple-i Initiativeのセール](https://store.steampowered.com/sale/triple-i-initiative-2026)と[Made with UnityのSteamキュレーターページ](https://store.steampowered.com/curator/45049063-Made-With-Unity-Official/list/145840/)を案内しています。

紹介されている作品は次のとおりです。

- ワールドプレミアと新作発表
    - 『Machinarium 2』（Amanita Design）：2009年作の続編
    - 『Dandelion Void』（Manzanita Interactive / Kwalee）：2027年に早期アクセス開始、デモ配信中
    - 『Lazare's Sacrifice』（Dream Reality Interactive / Curve Games）：2027年春
    - 『Little Prince Tyger』（Saltitude / Team 17）：最初のプレイテストを受付中
    - 『The Escapists 3』（Team17）：2027年にPCとコンソール向け
    - 『Volatiles』（Team Instant Defeat / 11 bit studios）
- 発売日の発表
    - 『Waltz and Jam』（Flyway Games / Krafton）：2026年12月3日、デモ配信中
    - 『PRISON OF HUSKS』（Glass Head Dolls / Wings）：2027年1月27日にPCとPS5向け、Steamデモ配信中
    - 『ROCKBEASTS』（LICHTHUND / CRITICAL ROLE）：2027年1月、初の公開デモ配信中
    - 『Among Us Story: On Guard』（Innersloth）：2027年2月17日
    - 『Trainwatch』（Harvester Games / 11 bit studios）：2027年3月10日、プレイテスト中
    - 『ReVamp』（Digital Sun Games / Forklift Interactive）：2027年3月25日、プレイテストの登録受付中
    - 『LIVING HELL』（Joe Fender / Future Friends Games）：2027年夏、プレイテスト中
    - 『SULFUR』（Perfect Random）：10月28日にコンソール版1.0
- デモとプレイテスト
    - 『Haunted Paws』（LazyFlock）：PCデモ配信中
    - 『Isle Goblin』（Kilowatt Games / Fireshine Games、Pocketpair Publishing）：プレイテスト中
    - 『Pony Island 2: Panda Circus』（Daniel Mullins Games）：Steamでプレイテスト中
    - 『Prospice: Anomalous Logistics』（Code Wakers / Forklift Interactive）：デモ配信中、2027年発売
    - 『Too Deep To Quit』（DEMON MAX）：デモ配信中
    - 『Vaultbreakers』（BetaDwarf / Square Enix Collective）：デモ配信中
- 既存タイトルの追加コンテンツ
    - 『DAVE THE DIVER x Subnautica 2』（MINTROCKET）：コンテンツパックのDLCを2027年初頭に配信
    - 『Kingdom Two Crowns: Pharaoh Lands』（Fury Studios / Raw Fury）：2026年配信予定のDLC
    - 『Risk of Rain 2: Hallowed Concepts』（Gearbox Software、Hopoo Games / 2K Games）：4つ目のDLCが配信中

## Articles

### Unity大規模開発のAIコーディングで手戻りを減らす。「grill-me」で実装スコープを絞り込んだ実践例

[Unity大規模開発のAIコーディングで手戻りを減らす。「grill-me」で実装スコープを絞り込んだ実践例 - COLOPL Tech Blog](https://blog.colopl.dev/entry/2026/10/08/110000)

コンパイルや実機確認に時間がかかるUnityの大規模タイトルで、Claude Codeに実装させる前に[grill-me](https://github.com/mattpocock/skills)スキルで設計とスコープを絞り込んだ実践例を紹介しています。

grill-meを使わずに依頼した場合、AIはコードベース内にある類似処理を見つけて流用しようとしましたが、その処理はPrefab構造が異なるため、流用するには周辺の複数のスクリプトまで変更する必要があり、大規模な改修案が提示されたとのことです。

`/grill-me` を使った場合は、状態管理の方針や連携通知の方式についてAIから質問を受け、開発者が流用案を却下して変更範囲を対象コンポーネント内に限定することで、実装後のコンパイルと実機確認を手戻りなく通せたとしています。

設計の着地点が見えていて検証コストが高い運用中コードの改修に向き、素早い試行錯誤や探索的な設計比較には向かないと整理しています。

執筆時点では処理本体が共通スキルの[grilling](https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md)へ委譲されており、新規導入では `grilling` への移行が推奨されていることにも触れています。

### 自作Unity UIライブラリ「Kumiko」の内部設計を解説！状態管理とGateの仕組み

[自作Unity UIライブラリ「Kumiko」の内部設計を解説！状態管理とGateの仕組み - Zenn](https://zenn.dev/sorane/articles/cb454ee1f72202)

著者が開発するuGUI向けUIライブラリ[Kumiko](https://github.com/SoraneDev/Kumiko)の内部設計のうち、UIの状態管理と、ボタンの決定入力に条件を加えるGateを解説しています。

状態管理では、同時に成立しうる内部状態を `[Flags]` 付きの `InteractionFlags` で保持し、入力種別（Navigation / Pointer / Touch）に応じて表示用の `InteractionState` を1つに決定します。
Gateは `Evaluate()` で状態を変えずに判定し、全Gateの最終結果を受けて `Commit()` で状態を更新する2段階にすることで、`DoubleClickGate` と `CooldownGate` を組み合わせても状態の食い違いが起きないようにしています。

### Unity 6.3の入力設計入門：Input System・UI・ポーズ・リバインドの実践

[Unity 6.3の入力設計入門：Input System・UI・ポーズ・リバインドの実践 - Zenn](https://zenn.dev/gamedev_toollab/articles/761211b826ae6e)

Unity 6.3でInput Systemを使う入力設計を、ActionとBindingの基本、Project-wide Actionsによる読み取り、ポーリングAPIとフェーズの使い分け、Updateで保存してFixedUpdateで消費する入力の扱い、ポーズ、UI入力の分離、`PlayerInput`、リバインドと保存、文字入力とタッチ、Input Debuggerでの切り分けまで整理しています。
操作の意味、入力の所有者、処理タイミング、状態遷移時の破棄条件を先に決めることを勧めています。

### Unity6.7からエディタ上部のToolBarに、メニュー項目をピン留め出来るように【Unity】

[Unity6.7からエディタ上部のToolBarに、メニュー項目をピン留め出来るように【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/ToolbarPinning)

Unity 6.7（検証環境は6000.7.0a6）から、コードを書かずにEditor上部のツールバーへメニュー項目をピン留めできるようになったことを紹介しています。
ツールバー右端の「⋮」から「Add Menu Item Shortcut」を選び、開いたウィンドウでメニュー項目を検索して選ぶと、そのメニューを開くボタンが追加される仕組みです。
以前の記事で紹介した[プログラムでツールバーを拡張する方法](https://kan-kikuchi.hatenablog.com/entry/MainToolbarElement)と同様のことができるとしています。
