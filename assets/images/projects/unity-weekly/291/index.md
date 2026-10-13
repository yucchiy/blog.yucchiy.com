---
type: unity-weekly
title: Unity Weekly 291
description: >-
  2026/10/12週のUnity Weeklyです。Unity 7.0 Alpha、CoreCLRと.NETの更新、UI ToolkitとUnity CLI、Unity 6.7のオーディオ更新、Multiplayer Services 2.4.0、CloudBehaviours、CA.unity #11などを紹介しています。
pubDatetime: 2026-10-12T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity 7.0 Alpha is now available

[Unity 7.0 Alpha is now available - Issue Tracker - Unity Discussions](https://discussions.unity.com/t/unity-7-0-alpha-is-now-available/1738310)

Unity 7.0のパブリックアルファの開始をアナウンスするディスカッションです。

[7000.0.0a7](https://unity.com/releases/editor/alpha/7000.0.0a7)から週次でビルドを公開していくとのことです。
Unity Discussionsでは `7.0-alpha` タグでプレリリースについて議論でき、正式リリース前に残りの問題を見つけて品質を上げることを目的としているとのことです。

問題を見つけた時は、[Issue Tracker](https://issuetracker.unity3d.com/)で既存の報告を確認し、既知であれば投票、未知であれば最小再現プロジェクト付きでバグ報告するよう案内しています。
`7.0-alpha` タグで投稿する時は、Issue IDを示すこと、別の問題は別トピックに分けること、7.0の機能・バグ・リグレッションに関係しないトピックにはタグを付けないことを求めています。

あわせて、7.0のCoreCLR Editorについては次の「[CoreCLR, Scripting, and .NET Update, October 2026](https://discussions.unity.com/t/coreclr-scripting-and-net-update-october-2026/1738338)」を参照するよう案内しています。

### CoreCLR, Scripting, and .NET Update, October 2026

[CoreCLR, Scripting, and .NET Update, October 2026 - C# & .NET - Unity Discussions](https://discussions.unity.com/t/coreclr-scripting-and-net-update-october-2026/1738338)

Unity 6.7 LTSとUnity 7.0に向けた.NETモダナイゼーションの進捗を共有するディスカッションです。

- Unity 6.7 LTS
    - Experimental CoreCLR Desktop Playerと、iOS向けのExperimental IL2CPP Mobile Playerを試せる
    - いずれもC# 9と.NET Standard 2.1のAPIに制限される
- Unity 7.0
    - CoreCLR Editor
        - Monoを使わない最初のCoreCLRベースのEditorがプレリリースで利用可能になった
        - C# 9と.NET Standard 2.1が対象で、互換性テスト用であり本番利用は想定していない
        - C# 14と.NET 10に対応したCoreCLR Editorは段階的に提供する予定
    - Core CLR Player
        - 実験版を土台にした、実験版ではないCoreCLR Desktop Playerを提供する
    - IL2CPP Players
        - 全プラットフォームを更新したIL2CPPへ準備でき次第移行する
    - Migration to .NET 10 & C# 14
        - Unity 7.0のライフサイクル中にCoreCLR Editorへ.NET 10とC# 14を入れる作業を進めており、Windows / macOS / Linuxで内部ビルドを検証している
        - 公開日はまだ約束できないとしている
        - 最初のサポート版7.0では、機能と安定性でUnity 6.7 LTSと同等にすることに集中し、性能改善は後回しにする
    - MSBuild Integration
        - MSBuildベースのコンパイルに向けたプロジェクト生成とIDEツール
        - アセンブリ参照とインクリメンタルコンパイルを扱うコンパイルのワークフロー
- Post-Unity 7.0 LTS
    - 7.0の翌年のLTSでは最適化に軸足を移し、ランタイム、JIT、GCの改善を評価するとのこと

### RELEASE: Input System 1.20.1

[RELEASE: Input System 1.20.1 - Input Product Updates - Unity Discussions](https://discussions.unity.com/t/release-input-system-1-20-1/1738320)

Input System 1.20.1のリリースをアナウンスするディスカッションです。

Unity 6.0 / 6.3 / 6.6向けにPackage Managerから入手でき、Unity 6.7と7.0ではEditorと一緒に提供されるコアパッケージになったとのことです。

今回のリリースはバグ修正のみで、詳細は[CHANGELOG](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.20/changelog/CHANGELOG.html)を参照するよう案内しています。

### Prototyping game UI with UI Toolkit and the Unity CLI

[Prototyping game UI with UI Toolkit and the Unity CLI - UI Toolkit - Unity Discussions](https://discussions.unity.com/t/prototyping-game-ui-with-ui-toolkit-and-the-unity-cli/1738349)

Unity CLIを使ってAIエージェントにUI ToolkitのゲームUIを作らせる[チュートリアル動画](https://www.youtube.com/watch?v=SwuGB3quO2k)を紹介するディスカッションです。

コンセプトアートと短いブリーフから始め、ターミナルからエージェントを指示してEditorで動くメニューを作るまでを扱っています。
そのうえで、それを支えるPipelineパッケージ、Unity公式のagent skills、カスタムCLIコマンドを解説しています。

また、コマンドラインからUIテストを実行し、Game viewのスクリーンショットを撮ることで、エージェントが自分の変更を検証して反復できるようにする方法も紹介しています。

テンプレートプロジェクト（[UITK_CLI_Template.zip](https://discussions.unity.com/uploads/short-url/9ollkhkKzjk4zq5pCJfu7jI32zA.zip)）が配布されており、エージェント向けブリーフの例、画面説明のテンプレート、UIを調べてクリックするカスタムCLIコマンド、完成したサンプルUIが含まれています。

Unity 6.x（6000.5.10f1で作成）、Unity CLI、Unity公式のagent skillsが必要です。

### Audio status update Q3 2026

[Audio status update Q3 2026 - Audio & Video Product Updates - Unity Discussions](https://discussions.unity.com/t/audio-status-update-q3-2026/1738186)

Unity 6.7 betaで使えるオーディオ機能の四半期アップデートを紹介するディスカッションです。

- Scriptable Audio Pipeline
    - Effects
        - 音声を受け取って加工し次へ渡すScriptable Effectsで、リバーブ、ディレイ、フィルター、コンプレッサー、ディストーションをBurstでコンパイルしたC#で書ける
        - `AudioSource` をアタッチしたGameObjectに付け、コンポーネント順に処理される
        - [マニュアル](https://docs.unity3d.com/6000.7/Documentation/Manual/audio-scriptable-processors-effects.html)と[サンプル](https://github.com/Unity-Technologies/audio-examples/tree/main/scriptable-processor-effect-rack)がある
    - Seeking
        - `SeekMessage` でサンプル精度のシークができ、ループ区間やゲームプレイとの同期に使える
        - [マニュアル](https://docs.unity3d.com/6000.7/Documentation/Manual/audio-scriptable-processors-generators.html#seek-a-generator)と[サンプル](https://github.com/Unity-Technologies/audio-examples/tree/main/scriptable-processor-seeking)がある
    - Realtime Messages
        - `RealtimeContext.SendMessage` と `ProcessorInstance.IRealtime.OnMessage` で、オーディオスレッド上でメッセージを送受信できる
    - Profiling
        - Audio Profilerに、各scriptable processorの状態と処理時間をDSP Loadとともに表示するProcessorsビューが加わった
- Enhanced Audio Foundation
    - General Availability
        - visionOS、tvOS、UWP、PS4、Webを除く全プラットフォームで利用でき（Androidは8.1以上）、`Edit > Project Settings > Audio` で有効にする
        - デバイスのシームレスな切り替え、メインスレッドのストールの解消、デバイス検出とサンプルレート変換の品質向上が得られる
        - [マニュアル](https://docs.unity3d.com/6000.7/Documentation/Manual/audio-foundations.html)
    - 7.1.4 Support
        - 高さ方向のスピーカーを含む12チャンネルの7.1.4出力に対応し、Meta Quest、Windows、Xbox、対応Android端末で使える
    - Ambisonic Decoder
        - Unity独自のUnity Quad+ Ambisonic Decoderを搭載し、1次〜3次のクリップをQuad以上のレイアウトで再生できる
        - [マニュアル](https://docs.unity3d.com/6000.7/Documentation/Manual/audio-ambisonic-decoder.html)

### Unity CLI 1.0.0-beta.13 is rolling out

[Unity CLI 1.0.0-beta.13 is rolling out - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-cli-1-0-0-beta-13-is-rolling-out/1738551)

Unity CLI 1.0.0-beta.13のリリースを告知するディスカッションです。

既存の自動化に影響する変更として、主に下記を挙げています。

- Unity 6.7以降へ未連携のプロジェクトを更新する `unity projects upgrade` では、`--cloud`、`--cloud-project`、`--no-cloud` のいずれかによるUnity Cloudの選択が必要になった
- `unity open` / `unity projects open` は古いプロジェクトをUnity 6.7以降へ暗黙に更新せず、`PROJECT_UPGRADE_REQUIRED` で停止して明示的な `unity projects upgrade` を促す
- `unity build --format json` の標準出力は単一のJSON文書になり、進捗とEditorログは標準エラー出力へ移った
- ダイアログでEditorが停止している時、`unity status` は `STATUS_BLOCKED_BY_DIALOG` を返し、JSONには `blockedBy` が加わった。`--until-ready` もタイムアウトを待たずに終了する
- `unity cloud org create` から `--industry` がなくなり、個人・法人に応じた名前と国の指定が必要になった

新たに `unity setup codex` / `unity setup grok` が追加され、Unity公式のプラグインとagent skillsを導入できます。`unity mcp` は `--project-path` がなければ `UNITY_PROJECT_PATH` を読むようになりました。
セキュリティ面では、`unity build` / `run` / `test` のEditorログに出るアクセストークン、Android keystoreのパスワードなどをマスクするよう修正しています。

### Heads up: Upcoming com.unity.pipeline 0.9.0 release will include breaking changes to command names

[Heads up: Upcoming com.unity.pipeline 0.9.0 release will include breaking changes to command names - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/heads-up-upcoming-com-unity-pipeline-0-9-0-release-will-include-breaking-changes-to-command-names/1738559)

`com.unity.pipeline` 0.9.0で、多くのコマンド名が変わることを事前告知するディスカッションです。

GAに向けて、`com.unity.pipeline` の全コマンドを一貫した命名規則にそろえ、人とAIエージェントの両方が見つけやすくすることを目的としています。

対象は `com.unity.pipeline` パッケージ内のコマンド、つまり `unity command` で表示されるコマンドです。
使い方ごとの対応として、次を案内しています。

- If you use scripts
    - コマンド名で呼び出すスクリプトは動かなくなる可能性がある
    - 本番プロジェクトを更新する前にテスト用プロジェクトへ0.9.0を入れ、`unity command --obsolete-command-names` で旧名と新名の対応を確認するよう勧めている
- If you use AI agents
    - まずskillsを更新する。`npx skills add Unity-Technologies/skills` で導入した場合は `npx skills update` を実行し、Claude CodeやCodexのプラグインは自動更新されなければ再インストールする
    - 新しいエージェントセッションを始めるのが最も安全で、既存セッションを続ける場合はコマンド名が変わったことをエージェントに伝える

あわせて、コマンドを探すための出力も改善しています。

`unity command` でコマンドグループ、`unity command --tags` でタグ、`unity command --obsolete-command-names` で旧名と新名の対応を一覧できます。

旧名で実行すると `Command Not Found` のエラーになるため、その時も `unity command --obsolete-command-names` で新しい名前を確認するよう案内しています。

正式な更新案内とリリースノートは、準備ができ次第投稿するとのことです。

### Multiplayer Services Package 2.4.0 is now available

[Multiplayer Services Package 2.4.0 is now available - Multiplayer & Networking Product Updates - Unity Discussions](https://discussions.unity.com/t/multiplayer-services-package-2-4-0-is-now-available/1738947)

Multiplayer Services Package 2.4.0のリリースをアナウンスするディスカッションです。

セッション要求で `CancellationToken` を使えるようにし、作成や参加をキャンセルした時はネットワークの起動も中止して `NetworkManager` を終了することで、キャンセル後にネットワークが動き続ける問題を解消しているとのことです。

また、ネットワーク停止が途中で失敗しても割り当てを解放するようにし、割り当てが残って次回の起動を妨げる問題を修正することで、ネットワーク再起動時の安定性を高まったとしています。

変更一覧は以下の通りです。

- Added
    - セッションの作成、参加、再接続、検索、Quick Joinによるマッチメイキングに `CancellationToken` を受け取るオーバーロードを追加
    - 作成や参加のキャンセルを通知する `AddingSessionCancelled` を追加。この場合、`AddingSessionFailed` は発火しない
- Changed
    - 上記の操作は、キャンセル時に `OperationCanceledException` をスローする。`MatchmakeSessionAsync(MatchmakerOptions, ...)` は従来どおり `SessionException`（`SessionError.MatchmakerCancelled`）をスローし、`AddingSessionCancelled` ではなく `AddingSessionFailed` で通知する
    - サーバー用アセンブリをEditorでも常にコンパイルし、Dedicated Serverへビルドターゲットを切り替えずにサーバー用アセットを作成できるよう変更。Authenticationの最低依存バージョンを3.8.0に更新
- Fixed
    - ネットワーク停止失敗時にRelayとDistributed Authorityの割り当てが残り、次回の起動が `SessionError.AllocationAlreadyExists` で失敗する問題を修正
    - Matchmakerの試行終了後に、`CancellationToken` のキャンセルコールバックの登録が残る問題を修正
    - 呼び出し側で処理済みのMatchmakerの失敗がコンソールエラーとして残り、Unity Test Runnerでテストが失敗する問題を修正。要求の詳細は詳細ログへ変更
    - 競合するセッション設定や `NetworkManager` 不在時のエラーを分かりやすくし、非互換パッケージをプロジェクト起動時にも検出するよう修正

### CloudBehaviours: Online Game Logic the Unity Way

[CloudBehaviours: Online Game Logic the Unity Way - Cloud Code - Unity Discussions](https://discussions.unity.com/t/cloudbehaviours-online-game-logic-the-unity-way/1738920)

Unity 6.6以降向けのCloud Code `3.1.0-exp.1` で、CloudBehavioursの実験版を公開したことをアナウンスするディスカッションです。

`CloudBehaviour` を継承するC#クラスから、サーバー側のCloud Codeモジュールと、クライアント側のMonoBehaviourのバインディングを生成する仕組みです。

公開フィールドはスコープ内のクライアントへ同期する状態、公開メソッドはクライアントから呼べるエンドポイントになり、C#イベントでサーバーからの通知を受け取れます。

`SyncView` でプレイヤーごとに見せる情報を制御でき、サーバー管理のタイマーやエンドポイントごとのアクセス制御にも対応しています。

サンプルは、サーバー側でサイコロの結果を決定し、セッションの全プレイヤーへ同期する実装です。
導入は `com.unity.services.cloudcode` の `3.1.0-exp.1` を名前で追加する方式で、詳細は[ドキュメント](https://docs.unity.com/en-us/cloud-code/cloudbehaviours)を案内しています。


### Why we built Unity Spark

[Why we built Unity Spark - Unity Blog](https://unity.com/blog/why-we-built-unity-spark)

UnityとGoogleが発表した、ブラウザー上でゲームを作って共有するためのUnity Sparkについて、Unity CEOのMatt Bromberg氏が狙いを説明する記事です。

Unityやゲーム開発の経験がなくてもインタラクティブな作品を作れるようにすることを目指し、Unity Asset Storeのクリエイターが制作したアセットを利用できるとしています。

### New for Unity Industry: Automotive HMI sample for embedded-style hardware

[New for Unity Industry: Automotive HMI sample for embedded-style hardware - Unity Blog](https://unity.com/blog/unity-industry-hmi-template-for-embedded-systems)

Unity 6.3以降向けの自動車HMIテンプレートがUnity Hubから入手できるようになったことを紹介する記事です。
2021年公開版を更新し、LinuxベースのRaspberry Pi 5で最大60 fpsで動作することを紹介しています。

計器クラスター、3D車両、空調操作、交通シミュレーションに連動するADAS表示、UI全体のテーマ変更を備えていて、データやUI、3D車両の層を分けているため、実車データや車両モデル、画面デザインの差し替えを想定しています。

交通・歩行者・信号を含むシミュレーションを、実車データの用意前にUIの挙動を試す材料として使えるとのことです。

### Echo Weaver: Building a time-loop metroidbrainia in Unity 6

[Echo Weaver: Building a time-loop metroidbrainia in Unity 6 - Unity Blog](https://unity.com/blog/echo-weaver-time-loop-unity)

Unity 6で制作された『Echo Weaver』について、プレイヤーの知識を進行条件にする設計、タイムループの状態管理、手描きの2D世界の最適化を紹介する記事です。

ループごとに変わる状態は軽量なシーンを破棄して再読み込みし、地形などの不変部分は常駐させているとのことです。

ループを越えて保持する記憶はディスクへ保存し、持ち運べるアイテムはチャンク間で消失や複製が起きないよう常駐シーンへ移しています。

最適化の取り組みは次のとおりです。

- Asset compression
    - アトラスの圧縮を有効にしてメモリ使用量を削減
- Scene loading
    - ビルド時に装飾をチャンクから除き、数個ずつフレームに分散して生成
- Batching
    - 複数のスプライトを1枚の画像にまとめて描画回数を削減
- Lighting
    - ライトのレイヤーを統合
- Water effects
    - 水面下のレイヤーを統合し、低性能端末向けには屈折の再描画を省略
- Debugging
    - Frame Debuggerでバッチが分かれる原因を調べ、マテリアルやスプライトを整理

### Spooky games made with Unity: Your 2026 Halloween playlist

[Spooky games made with Unity: Your 2026 Halloween playlist - Unity Blog](https://unity.com/blog/horror-games-made-with-unity-halloween-2026)

2026年のハロウィンに向けて、Unity製のホラーゲームを怖さや楽しみ方のカテゴリ別に紹介しています。今後発売予定の作品も取り上げています。
各カテゴリで紹介されている作品の例は次のとおりです。

- Pure dread
    - 『Pathologic 3』：疫病が広がる町で、時間に追われながら住民の治療に取り組む
    - 『GHOST CAM』：カメラのファインダー越しに幽霊を探し、撮影するVRゲーム
- Scares to share
    - 『Sker Ritual』：ウェールズの民間伝承を題材に、友人と協力して押し寄せる敵と戦うラウンド制のシューター
    - 『Yet Another Zombie Survivors』：大量のゾンビと戦いながら強化を重ねるアクションゲーム
- Cozy spooky
    - 『Moonlight Peaks』：吸血鬼として、自分好みの住まいを作るライフシミュレーション
    - 『Puppergeist』：リズムに合わせて、いたずら好きな犬の幽霊を相手にするビジュアルノベル
- Laugh, then scream
    - 『Cursed Companions』：禁じられた言葉を口にすると命を落とす、音声を使った協力型ホラー
    - 『HELLMART』：スーパーマーケットの運営シミュレーションにホラーを組み合わせ、7日間の生存を目指す
- From the deep
    - 『Cthulhu’s Reach: Devil Reef』：ラヴクラフト作品に登場する土地を探索し、怪物と戦ってマフィアへの借金返済を目指す協力型ローグライク
    - 『Darkwater』：氷に閉ざされた惑星で、自分が獲物にならないよう資源を探す
- Horror games on the horizon
    - 『There Are No Ghosts at the Grand』：昼は海辺のホテルを改装し、夜は掃除道具で幽霊と戦う。2026年12月に早期アクセス開始予定
    - 『Hotel Espir』：1942年のアラバマを舞台に、音だけを頼りに追ってくる殺人鬼から身を守る。2027年10月発売予定


## Events

### CA.unity #11

[CA.unity #11](https://cyberagent.connpass.com/event/397789/)

サイバーエージェントが主催するUnityの勉強会「CA.unity」の第11回の講演スライドが、Unity Learning Materialsで公開されています。

- [Unityアプリケーション全自動プロファイリングまでの道のり - Unity Learning Materials](https://learning.unity3d.jp/11092/)
- [Rust によるマルチプラットフォームなネイティブプラグイン開発 - Unity Learning Materials](https://learning.unity3d.jp/11086/)
- [AI時代のUnity開発: Unity CLI Loopで変わった開発体験 - Unity Learning Materials](https://learning.unity3d.jp/11075/)
- [Houdini x AIの今 〜改造版Houdini Engine for Unityを開発した話〜 - Unity Learning Materials](https://learning.unity3d.jp/11076/)

## Articles

### 2027年春までに確認したいUnity / iOS対応 ― iPadOS 27・UIScene・iPhone Duo・Xcode 27

[2027年春までに確認したいUnity / iOS対応 ― iPadOS 27・UIScene・iPhone Duo・Xcode 27 - Zenn](https://zenn.dev/biwacoder/articles/0af853ec2eb31b)

Unity製iOSアプリで2027年春までに確認したい変更を、iPadOS 27のウィンドウリサイズ、iPhone Duo、UISceneライフサイクル、Xcode 27のビルド環境に分けて整理した記事です。

- SDK 27でビルドしたiPadアプリでは `UIRequiresFullScreen` による固定画面を前提にできず、実行中のサイズ・比率変更を確認する必要がある。固定比率を保ちたい場合はアプリ側の黒帯表示が選択肢になる
- iPhone Duoでは内側画面の比率と分割表示、Safe Areaを確認する。記事では、2027年4月以降の提出時にiPhone Duo向けスクリーンショットが必要になると紹介している。
- UIScene対応済みのUnity Editorへ更新するとともに、AppDelegateのコールバックを使うDeep Linkや通知、認証などのネイティブプラグインを実機で確認する
- Xcode 27を利用できないIntel Macが開発機やCIに残っていないか確認する

### 【Unity 6.6】Resources / Addressables / Content Directories の違いを整理する ― Unity 7 の展望まで

[【Unity 6.6】Resources / Addressables / Content Directories の違いを整理する ― Unity 7 の展望まで - Qiita](https://qiita.com/matsu_r11/items/33a85a979b6a2cb99278)

Unity 6.6でのResources、Addressables、Content Directoriesの違いを、アセットの配置、ビルド、読み込み、解放のコードとともに整理しています。

保存とロードの方式に対するAddressablesの管理レイヤーとしての位置付けや、Content Directoriesのローカル配信の制約、Addressables 4.xとUnity 7で予定される対応にも触れています。

### UnityのMemory Profilerでスナップショット取得を自動化し、メモリリーク傾向を簡易調査するツールを作ってみた

[UnityのMemory Profilerでスナップショット取得を自動化し、メモリリーク傾向を簡易調査するツールを作ってみた - Qiita](https://qiita.com/SuguruHasegawa/items/9d6b559cc9874dc27c06)

記事の著者が開発する、Memory Profilerのスナップショットを定期取得し、取得時に別途収集したメモリ情報から、全体の推移、オブジェクトの増加傾向、サイズ上位の一覧をCSVへ出力するEditorツール「AutoMemoryProfiler」を紹介しています。

`.snap` ファイル自体の解析やリークの確定診断は行わず、追加調査の候補を絞るための簡易判定として扱っています。

### Unity 6.3 LTSでゲームを作り始める前に押さえたい設計・設定・検証

[Unity 6.3 LTSでゲームを作り始める前に押さえたい設計・設定・検証 - Zenn](https://zenn.dev/gamedev_toollab/articles/705aeb222a844d)

Unity 6.3 LTSでの新規ゲーム開発に向けて、対象端末と開発環境の固定、レンダーパイプライン、入力とUI、非同期処理、リソース管理、保存など、制作初期に決める事項と検証方法を整理しています。

起動からプレイ、リザルト、保存、再起動後の復元までの短い一周を実機で通し、機能間のつなぎ目を早期に確かめる方針を紹介しています。

### Unity ShaderGraph備忘録 part7- ポスプロのアウトライン実装

[Unity ShaderGraph備忘録 part7- ポスプロのアウトライン実装 - Zenn](https://zenn.dev/zn_ryg12/articles/shader-note-20261011)

Shader Graphで深度テクスチャのエッジを検出し、ポストプロセスとしてアウトラインを描く方法を紹介しています。
斜め4方向の深度差からマスクを作り、線の太さ、しきい値、色を調整する手順と、Bloomを組み合わせた発光表現を解説しています。
