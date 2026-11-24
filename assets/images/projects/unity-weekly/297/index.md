---
type: unity-weekly
title: Unity Weekly 297
description: >-
  2026/11/30週のUnity Weeklyです。Unity CLI 1.0、Unity EditorのDockerベースイメージ、Neural Texture Compression、Unite Tokyo 2026の公開資料などを紹介しています。
pubDatetime: 2026-11-30T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
draft: false
---

## Unity Officials

### The Unity CLI 1.0 is here

[The Unity CLI 1.0 is here - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/the-unity-cli-1-0-is-here/1742101)

Unity CLI 1.0の正式リリースをアナウンスするディスカッションです。
最新のUnity Hubを使っていればCLIはすでに同梱されており、[Unity CLIのドキュメント](https://docs.unity.com/en-us/unity-cli/unity-cli)から始めるよう案内しています。

Claude Code、Codex、Grok Build、Google Antigravityなどのコーディングエージェントを1つのコマンドでセットアップでき、Unityのチームが書いたスキルを利用できるとしています。
[Unity Pipelineパッケージ](https://docs.unity.com/en-us/unity-cli/unity-pipeline/unity-pipeline-package)（`com.unity.pipeline`）により、開いているEditorを使ってビルドでき、スクリプトやCI向けに一貫した出力を返すと説明しています。

詳細は[Unityのブログ記事](https://unity.com/the-unity-cli-1.0-is-here)で紹介しています。

### Neural Texture Compression in Unity 6.7

[Neural Texture Compression in Unity 6.7 - Graphics Product Updates - Unity Discussions](https://discussions.unity.com/t/neural-texture-compression-in-unity-6-7/1742548)

Unity 6.7に実験的な機能として追加される、URP向けのNeural Texture Compressionを紹介するディスカッションです。
複数のテクスチャをまとめて圧縮し、シェーダーでサンプリングするときにニューラルネットワークで復元することで、推論の負荷と引き換えにテクスチャのメモリ使用量を減らすと説明しています。

BaseMap、MAOS、Normalをまとめたテクスチャセットの例では従来のBCn圧縮に比べてメモリを50%削減し、サンプル「Atrio」のテクスチャ全体では最大30%削減したと報告しています。
Unity 6.7b8以降のWindowsのDirectX 12またはmacOSのMetalが対象で、現時点ではURPのDeferred Rendering Pathでの利用のみを推奨するとしています。
このバージョンではNeural Trainerウィンドウを利用できず、代わりに学習済みのアセットを提供しているとのことです。
本番環境での利用はまだ推奨せず、Unity 7で正式にサポートする予定だと説明しています。

### Build Unity projects in Docker with the new Unity Editor base image - Beta now available!

[Build Unity projects in Docker with the new Unity Editor base image - Beta now available! - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/build-unity-projects-in-docker-with-the-new-unity-editor-base-image-beta-now-available/1742375)

Unity 6.7以降のHeadless EditorをLinuxのDockerコンテナで動かすためのベースイメージ`unity/editor-base`を、パブリックベータとして公開するディスカッションです。

Ubuntu 24.04の`linux/amd64`をベースに、Unity CLIとHeadless Editorが読み込むライブラリを含み、Editor本体と必要なモジュールは利用者がDockerfileでUnity CLIの`--headless`オプションを使って追加するとしています。
Headless EditorはUnity Licensing Serverのライセンスでのみ有効化でき、コンテナはEditorの起動時にライセンスを1つ借り、終了時に返却すると説明しています。
iOS、visionOS、コンソール向けのビルドには対応せず、Editorウィンドウの表示やGPUを使う処理もできないとのことです。

[返信](https://discussions.unity.com/t/build-unity-projects-in-docker-with-the-new-unity-editor-base-image-beta-now-available/1742375/8)では、Personalライセンスもこのイメージで問題なく使え、Licensing Server以外のライセンス種別も、新しいコンテナを起動するたびにライセンスの有効化と解除を行えば利用できるとしています。
[別の返信](https://discussions.unity.com/t/build-unity-projects-in-docker-with-the-new-unity-editor-base-image-beta-now-available/1742375/10)では、コンテナ自体の利用や起動に別のライセンスは不要だと補足しています。

### Announcing unity-worktree-cow: parallel AI agents on one Unity project, without the disk cost

[Announcing unity-worktree-cow: parallel AI agents on one Unity project, without the disk cost - AI & Machine Learning Product Updates - Unity Discussions](https://discussions.unity.com/t/announcing-unity-worktree-cow-parallel-ai-agents-on-one-unity-project-without-the-disk-cost/1742245)

1つのUnityプロジェクトで複数のAIエージェントを並行して動かすためのAgent Skillとスクリプト「unity-worktree-cow」を公開するディスカッションです。
[リポジトリ](https://github.com/Unity-Technologies/unity-worktree-cow)では、インポート済みのプロジェクトを元に、コピーオンライトでGitのworktreeを作る手順を紹介しており、Unity Version Controlのワークスペースにも対応しているとしています。

作業コピーはそれぞれ独立した`Library`を持ち、書き込むまではスナップショットとディスクブロックを共有すると説明しています。
Windows 11 24H2以降のReFS、macOSのAPFS、Linuxのbtrfs、XFS、ZFS 2.2以降が対象で、リポジトリと作業コピーは同じボリュームに置く必要があるとのことです。
作業コピーを初めて開くときはアセットの再インポートは発生しない一方、スクリプトのコンパイルは行われるため、1分未満から数分かかるとしています。

### Android Logcat Package

[Android Logcat Package - Mobile - Unity Discussions](https://discussions.unity.com/t/android-logcat-package/1742307)

Unity 6.0以降向けのAndroid Logcat 1.5.0の公開を案内するディスカッションです。

LogcatウィンドウのToolsメニューから開くCommandsウィンドウが追加され、パッケージ管理、権限、dumpsys、settingsのような専用UIのないADBコマンドを保存、整理、検索、実行できるとしています。
コマンドは非同期で実行され、`<placeholder>`の置換に対応し、JSONでimportとexportできると説明しています。

Android Screen Captureウィンドウでは、端末画面のライブ表示とPCやMacからの操作、スクリーンショットの管理、動画の録画と再生に対応したとしています。
Linuxでは録画に対応していないとのことです。

### Introducing the Unity Fellowship

[Introducing the Unity Fellowship - News & General Discussion - Unity Discussions](https://discussions.unity.com/t/introducing-the-unity-fellowship/1742072)

Unityで開発中のインディーゲームを支援するプログラム「Unity Fellowship」を発表するディスカッションです。

毎年10作品を選び、最大5万米ドルの助成に加えて、技術やマーケティングの支援を提供するとしています。
助成金の返済や売上の分配、IPの譲渡は求めないとのことです。

応募にはプレイ可能なビルドかデモが必要で、プログラム参加から12か月以内の早期アクセス開始または正式発売を目指す作品が対象だと説明しています。
初回の応募締切は米国東部時間の12月18日17:00（日本時間の12月19日7:00）で、[応募ページ](http://unity.com/fellowship)と[FAQ](http://www.unity.com/unity-fellowship#faq)を案内しています。

### Boost Disks: Now Available in 128 GB, 256 GB and 512 GB

[Boost Disks: Now Available in 128 GB, 256 GB and 512 GB - Build Automation - Unity Discussions](https://discussions.unity.com/t/boost-disks-now-available-in-128-gb-256-gb-and-512-gb/1742088)

Unity Build AutomationのBoost Diskを、ビルドターゲットごとに128 GB、256 GB、512 GBから選べるようになったことを案内するディスカッションです。
Boost Diskは、`Library`とソース管理のディレクトリを含むプロジェクトルート全体を、ビルド間で再利用する高速なディスクにキャッシュする仕組みだと説明しています。

既存のBoost Diskは、容量を変更しなければ512 GBのままだとしています。
サイズを変更するとディスクを作り直すため、キャッシュは消去されるとのことです。
利用できるのはWindows 11のビルドターゲットのみで、リージョンにも制限があると案内しています。

### Welcome to Unity, Synty Studios

[Welcome to Unity, Synty Studios - Asset Store Product Updates - Unity Discussions](https://discussions.unity.com/t/welcome-to-unity-synty-studios/1742102)

スタイライズされたローポリのアセットを制作するSynty StudiosがUnityに加わることを発表するディスカッションです。
創業者とSyntyのアーティストのチームがUnityにフルタイムで参加するとしています。

購入済みアセットのライセンスや利用方法は変わらず、Synty StoreとSynty Passも継続するとのことです。
Syntyのアセットライブラリは、クローズドベータを皮切りにUnity Sparkで利用できるようになると説明しています。

### Multiplayer Services Package 2.5.0 is now available

[Multiplayer Services Package 2.5.0 is now available - Multiplayer & Networking Product Updates - Unity Discussions](https://discussions.unity.com/t/multiplayer-services-package-2-5-0-is-now-available/1742326)

Multiplayer Services 2.5.0のリリースをアナウンスするディスカッションです。

- Added
    - Dedicated Serverからセッションを作成し、設定したセッションのプロパティを公開する`ServerSessionConnector`と、サーバーの認可後にそれを実行する`ServerSessionConnectorBehaviour`を追加した
    - `com.unity.pipeline`を導入した環境で、Session Connectorの設定や実行を行うMultiplayer Services向けのCLIコマンドを追加した
- Changed
    - Matchmaker Authoringで、デプロイや更新時にサービスが403などで要求を拒否した場合に、ステータスコード付きのエラーを表示するようにした
- Fixed
    - `MatchmakeSessionAsync`のキャンセル時にチケットの削除を最大3回リトライし、キャンセル処理中に見つかったマッチには参加しないようにした
    - Matchmaker Authoringで、Editor外で編集した設定ファイルがデプロイに反映されない問題や、失敗したデプロイが成功として報告される問題を修正した

### Profile Analyzer 1.5.0 released

[Profile Analyzer 1.5.0 released - Performance & Profiling Product Updates - Unity Discussions](https://discussions.unity.com/t/profile-analyzer-1-5-0-released/1742367)

Profile Analyzer（`com.unity.performance.profile-analyzer`）1.5.0のリリースをアナウンスするディスカッションです。

Unity 2022.3 xLTSのサポート終了に伴い、最低サポートバージョンをUnity 6.0に引き上げたことが主な変更だとしています。
breaking changesはまだ無いため、2022.3のプロジェクトでもこのバージョンを強制的に導入できると説明しています。
修正内容は[変更履歴](https://docs.unity3d.com/Packages/com.unity.performance.profile-analyzer@1.5/changelog/CHANGELOG.html#150---2026-11-20)に挙げられています。

- Changed
    - 最低サポートバージョンをUnity 6.0に引き上げた
- Fixed
    - サイズ情報のない`GC.Alloc`を0バイトとして取り込み、0バイトのアロケーションもProfilerと同様に件数へ含めるようにした
    - Thread Summaryで先頭フレームを二重に集計する不具合を修正した
### Memory Profiler Releases（1.2.1）

[Memory Profiler Releases - Performance & Profiling Product Updates - Unity Discussions](https://discussions.unity.com/t/memory-profiler-releases/730398/59)

Memory Profilerのリリースを案内するスレッドで、[1.2.1](https://docs.unity3d.com/Packages/com.unity.memoryprofiler@1.2/changelog/CHANGELOG.html#121---2026-11-20)の変更点を案内する投稿です。

- Added
    - 対応するUnityバージョンで取得したスナップショットでは、Selected Item DetailsパネルにVisualEffectAssetとVFXManagerのメタデータを追加し、CPUとGPUのバッファ、ベイク済みテクスチャ、indirect command bufferとインデックスバッファのサイズを確認できるようにした
- Fixed
    - Captureを連続でクリックするとキャプチャが重なって失敗し、進捗表示が残ってEditorを操作できなくなる不具合を修正した
    - 大きなスナップショットのテーブルや比較の構築中にMemory Profilerウィンドウを閉じると、Editorが数分間応答しなくなる不具合を修正した

## Events

### Unite Tokyo 2026

[セッション - Unite Tokyo 2026](https://unitetokyo.com/session/)

Unite Tokyo 2026のセッションページで、公開された講演スライドを閲覧できます。
ライブ配信された基調講演とUnityロードマップは、YouTubeでアーカイブが公開されています。
ロードマップでは、Unity 7に向けたCoreCLRやECS for Allに加えて、Content DirectoriesやUnity CLIの今後を紹介しています。

- 講演動画
    - [Unite Tokyo 基調講演 - YouTube](https://www.youtube.com/watch?v=s_zEdnwum4U)
    - [Unity ロードマップ - YouTube](https://www.youtube.com/watch?v=78gP-1vtYds)
- 発表資料
    - [Unite 2026 Tokyo - Roadmap - ドクセル](https://www.docswell.com/s/UnityJapan/54NPRN-2026-11-17-153743)

## Articles

### ブラックフライデーセール開催！300以上の人気アセットが50%オフ！日替わりで最大95%オフになるフラッシュセールも同時開催中！【Unity】【アセット】

[ブラックフライデーセール開催！300以上の人気アセットが50%オフ！日替わりで最大95%オフになるフラッシュセールも同時開催中！【Unity】【アセット】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Black_Friday_Sale_2026)

Unity Asset Storeのブラックフライデーセールのうち、著者が過去に紹介記事を書いたアセットがセール対象になっているものをまとめて紹介しています。
Hot Reload、Odin、Easy Saveなどを用途別に挙げ、それぞれの紹介記事へのリンクを添えています。

### 開発体験を損なわないアセット運用と互換性チェック

[開発体験を損なわないアセット運用と互換性チェック - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2026/11/19/120031)

アセット、API、アドレスの3つの経路で、ビルド時の前提とあとから配信される状態が食い違う問題への対処を紹介しています。

コミット由来の配信タグをアプリに内蔵し、ビルド時に配信済みの成果物と指紋を照合して、一致しなければビルドを止める運用を説明しています。

Editorでの再生時もカタログに載ったアセットは配信済みバンドルから読む「リモート優先モード」や、開発ビルドのタイトル画面でアプリとサーバーのprotoの互換性を比較する仕組み、Addressablesのアドレスから定数と関数を生成してリネームや削除をコンパイルエラーにする方法も解説しています。

サーバーAPIの破壊的変更そのものは防げないことや、SHAタグには30日の削除予約を付けているため古い開発ビルドはバンドルを取得できないことを、残る制約として挙げています。

### トゥーン調キャラクターのタイツ表現

[トゥーン調キャラクターのタイツ表現 - Sumzap Engineering Blog](https://tech.sumzap.co.jp/entry/toon-character-tights-wet-expression)

Unity Toon Shaderの上に、役割の異なる処理を重ねてナイロン生地のタイツを表現するシェーダーの実装を紹介しています。

法線と視線の内積から肌の透け方を変える透け感、HDRPのSilk Shaderを参考にした糸を横切る向きの異方性反射、波の計算で作る2段階の網目、輪郭ぎわに淡い明るさを足す毛羽を解説しています。

網目は`fwidth`で隣のピクセルとのずれを測り、距離に応じて`smoothstep`で消すことでモアレを抑えるとのことです。
雨天での濡れ表現は要素の紹介にとどめ、実装の詳細は後日あらためて記事にする予定だとしています。

### 【Unity】Unity 6.6 から、新規プロジェクトは Play モードに入るときにコードをリロードしないのが既定になったので注意

[【Unity】Unity 6.6 から、新規プロジェクトは Play モードに入るときにコードをリロードしないのが既定になったので注意 - LIGHT11](https://light11.hatenadiary.com/entry/2026/11/20/140038)

Unity 6.6から、新規プロジェクトでPlayモードに入るときの既定設定が「Reload Scene only」に変わったことを紹介しています。

シーンだけが読み直されるため、コード側のstatic変数などに前回の再生の状態が残る例を示しています。

対処として、Unity 6.5で追加された`Unity.Scripting.LifecycleManagement`名前空間の`[AutoStaticsCleanup]`属性を付け、Playモードに入るたびにフィールドの初期化子の値へ戻す方法を説明しています。

### Unity 6.7から、List\<T\>のInspectorへのドラッグ&ドロップで、要素の途中挿入ができるようになる

[Unity 6.7から、List\<T\>のInspectorへのドラッグ&ドロップで、要素の途中挿入ができるようになる - Qiita](https://qiita.com/RyotaMurohoshi/items/1242bbda98fd0e1e6773)

Unity 6.7のベータ版6000.7.0b9で、Inspector上のリストへアセットをドラッグすると、表示された挿入位置に要素を途中挿入できるようになったことを紹介しています。

Unity 6.3 LTSではリストのヘッダーにしかドロップできない挙動と比較し、複数のアセットをまとめて挿入する場合や配列でも同様に動くことを確認しています。

ベータ版での確認のため、製品版では変わる可能性があるとしています。
