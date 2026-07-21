---
type: unity-weekly
title: Unity Weekly 281
description: >-
  2026/07/20週のUnity Weeklyです。Unite Seoul Keynote 2026のライブ配信、Unity CLIとcom.unity.pipelineパッケージ、Monobehaviour.Update、PrefabLens、Swift Xcode Project Typeなどを紹介しています。
pubDatetime: 2026-07-21T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Join us live on Youtube for the Unite Seoul Keynote on on Jul 21, 2026

[Join us live on Youtube for the Unite Seoul Keynote on on Jul 21, 2026 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/join-us-live-on-youtube-for-the-unite-seoul-keynote-on-on-jul-21-2026/1731253)

2026年7月21日にソウルで開催されるUnite Seoul KeynoteのYouTubeライブ配信「What's next for Unity? | Unite Seoul Keynote 2026」を案内するディスカッションです。配信開始は2026年7月21日 1:00（UTC）、日本時間では同日10:00です。

CoreCLR、グラフィックス、2Dなどエンジンの次のステップに関する初公開情報の共有と、新機能のリアルタイムデモ、「いくつかの大きな発表」が予告されており、このトピック内でもライブスレッド形式で主要なアップデートを共有するとしています。

### Meet the Unity CLI: manage Unity from your terminal

[Meet the Unity CLI: manage Unity from your terminal - Unity Blog](https://unity.com/blog/meet-the-unity-cli)

ターミナルからUnityを管理する単一バイナリの「Unity CLI」と、実行中のEditorをCLIから操作可能にする実験的パッケージ`com.unity.pipeline`の提供開始を告知するブログ記事です。

CLIがUnityを管理し、Pipelineパッケージがそれを操作し、evalがその内部に踏み込む、という3層の構成で、以下の内容が紹介されています。

- What is the Unity CLI
    - 自己完結の単一バイナリ`unity`として提供され、Editor・モジュール・プロジェクト・認証を扱う。`unity install 6000.2.10f1 -m android ios webgl`のようにEditorとモジュールを一括インストールでき、`unity upgrade`で自身を更新する
    - ネイティブバイナリのため、従来のUnity Hubのheadless実行（`-- --headless`）より起動が速いとしている
- Built for automation
    - `--format json` / `--format tsv`による構造化出力、stdout / stderrの分離、終了コードの契約（0 = 成功、1 = エラー、130 = キャンセル）を備える
    - `--accept-eula --yes`による無人インストール、環境変数経由のサービスアカウント認証、環境診断の`unity doctor`を用意する
- Talking to the Editor
    - `com.unity.pipeline`パッケージ（Unity 6.0 LTS以降、experimental）を`unity pipeline install`で導入すると、実行中のEditorがローカルAPI経由でCLIからのコマンドを受け付ける
    - プロジェクト内のstaticメソッドに`[CliCommand]`属性（引数は`[CliArg]`）を付けるだけで独自コマンドとして自動発見され、`unity command <command-name>`で実行できる
    - ランタイムコンポーネントをdevelopment buildに入れると、`unity command --runtime <player exec name>`で実行中のPlayerも同様に操作できる（localhost限定・デフォルト無効）
- Execute C# scripts with eval
    - `unity command eval "return Application.version;"`のように、任意のC#式を実行中のEditor（`--runtime`でPlayer）内で評価して結果を返す。Roslynでコンパイルされ、Editorのメインスレッドで実行される
    - 再コンパイルや再起動なしにミリ秒で応答するため、AIエージェントに速いフィードバックループを与えるとしている。セキュリティトークンでゲートされる
- A foundation for AI-assisted development
    - 構造化出力と終了コードの契約、`unity command`によるコマンドの自己記述性により、AIエージェントが「プロジェクトを観察し、操作し、結果を検証する」ループを構成できるとしている
    - Unity AI（in-Editor assistant suiteなど）はこの実行面の一利用者であり、同じ面がサードパーティのエージェントや自作スクリプトにも開かれていると位置づけている

## Articles

### 「UnityのMonobehaviour.Update()をプロは避けるのか」についての様々な意見

[「UnityのMonobehaviour.Update()をプロは避けるのか」についての様々な意見 - X](https://x.com/t_tutiya/status/2078812163897205173)

土屋つかさ氏がXの記事機能で公開した、プロの現場で`Monobehaviour.Update()`を使う／使わないについて言及されたポストのまとめです。

### UnityYAML Assets を GitHub 上でレビュー可能にする OSS「PrefabLens」を作った

[UnityYAML Assets を GitHub 上でレビュー可能にする OSS「PrefabLens」を作った - Zenn](https://zenn.dev/hashiiiii/articles/2efea432e7e5bf)

ブログの著者が開発する、`.prefab`や`.unity`などUnityYAML形式のアセット差分をGitHub上でレビュー可能にするOSS「[PrefabLens](https://github.com/hashiiiii/PrefabLens)」を紹介しています。fileID / guidによるオブジェクト参照の解決を行い、Chrome Extension・Unity Plugin・CLIの3つの形態で人間が読みやすい差分表示を提供するとしています。

### Unity6.3で、ついに右下の「Development Build」表示を消すことができるようになった！

[Unity6.3で、ついに右下の「Development Build」表示を消すことができるようになった！ - きゅぶろぐ](https://blog.kyubuns.dev/entry/2026/07/15/205333)

Unity 6.3から `Watermark.showDeveloperWatermark` を設定することで、Development Build時の右下のウォーターマーク表示を消せるようになったことを紹介しています。

### Unityのエディタ拡張から共有メモリに書き込みを行い、ランタイム側で読み込みを行う

[Unityのエディタ拡張から共有メモリに書き込みを行い、ランタイム側で読み込みを行う - Zenn](https://zenn.dev/sion_pn/articles/8677bcac5b443e)

Unity 6.3.10f1で、エディタ拡張ウィンドウから`MemoryMappedFile`で共有メモリへ書き込み、ランタイム側のMonoBehaviourがポーリングして読み取る、プロセス間通信のサンプル実装を紹介しています。

### 【Unity】Unity 6.5 からサポートされた Swift Xcode Project Type について

[【Unity】Unity 6.5 からサポートされた Swift Xcode Project Type について - Qiita](https://qiita.com/mao_/items/7eee21416b86ed673420)

Unity 6.5で実験的機能として追加された、iOS / tvOS向けXcodeプロジェクトをSwiftベースで生成するSwift Xcode Project Typeを解説しています。メモリ安全性の向上とランタイムクラッシュの削減を利点とする一方、最小サポートはiOS 16.0で、Unity as a Libraryとフルスクリーンビデオは現時点で非対応であり、ポストプロセススクリプトの修正やネイティブプラグインの移行が必要になる点を詳述しています。

### MasterMemoryは何を解決し、何を解決しないのか：Unityのマスターデータ運用を実務目線で整理する

[MasterMemoryは何を解決し、何を解決しないのか：Unityのマスターデータ運用を実務目線で整理する - Zenn](https://zenn.dev/gamedev_toollab/articles/6f449f670e3e4b)

CysharpのMasterMemoryを「読み取り専用のインメモリDB」と位置づけ、型安全な検索API、複合キー・範囲検索、C#で書けるValidatorなど解決することと、入力元管理・ローカライズ・CI/CD・環境別データ管理など解決しない前後工程を整理しています。ScriptableObjectやSQLiteと比べたときの位置付け、向いているケース・向いていないケースにも触れています。

### AIに任せたE2Eテストが俺TUEEEと化していたので、実プレイ由来のセーブデータで作り直した話

[AIに任せたE2Eテストが俺TUEEEと化していたので、実プレイ由来のセーブデータで作り直した話 - Zenn](https://zenn.dev/unsoluble_sugar/articles/57d4ca55ef1ef1)

モバイルゲーム開発（Unity 6000.3.10f1）でClaude Codeに任せたE2Eテストが、AIの用意した非現実的な前提状態のまま決定化され、実プレイと乖離していた問題への対応を紹介しています。

対応として、bashに埋め込んだC#文字列をコンパイル済みのE2E APIへ移行して実行時エラーをコンパイル時に検知できるようにし、テストの前提状態は実プレイで到達した状態だけをセーブデータスナップショットとして保存・ロードする方式に作り直しています。これによりAIの推論に委ねる範囲が減り、テスト追加も簡便になったとしています。

### Unity実務で迷わないデータフォーマット選定：YAML / JSON / MessagePackの使い分け

[Unity実務で迷わないデータフォーマット選定：YAML / JSON / MessagePackの使い分け - Zenn](https://zenn.dev/gamedev_toollab/articles/4faca5628182b8)

人間が編集するか、データ量と読み込み頻度、通信かローカルか、スキーマ変更への強さという観点から、YAML / JSON / MessagePackの使い分けを整理しています。ユーザー設定・セーブデータ・マスターデータ・サーバ通信といった用途別の指針を示し、編集元と実行時形式を分離してデータパイプライン全体を設計することを勧めています。

### 【C#, Unity】JetBrains.Annotationsの\[MustDisposeResource\]はUniTaskにも対応してた話

[【C#, Unity】JetBrains.Annotationsの\[MustDisposeResource\]はUniTaskにも対応してた話 - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2026/07/16/120000)

JetBrains.Annotationsの`[MustDisposeResource]`属性が、`Task<IDisposable>` / `ValueTask<IDisposable>`だけでなくUniTaskを返す非同期メソッドでも機能することを、Rider 2026.1.4での実験で確認しています。UniTaskがtask-likeな戻り値として扱われるため、Dispose漏れの警告が適切に表示されるとしています。

### 新しいUnity CLIでGitHub ActionsにUnity Personalライセンスを持ち込む

[新しいUnity CLIでGitHub ActionsにUnity Personalライセンスを持ち込む - Zenn](https://zenn.dev/yamachu/articles/e3a8a0c8d68723)

上記のUnity CLIをGitHub ActionsのCIでUnity Personalライセンスと組み合わせようとした検証記事です。

サービスアカウント認証ではPersonalライセンスに到達できないこと、既存の`.ulf`をオフラインで読み込む方法はマシンバインドの不一致で失敗することを確認した上で、GameCIの実装を読み解き、`-serial` / `-username` / `-password`によるオンラインアクティベーション構成に落ち着いた経緯をまとめています。
