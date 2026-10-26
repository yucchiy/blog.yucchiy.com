---
type: unity-weekly
title: Unity Weekly 293
description: >-
  2026/10/26週のUnity Weeklyです。MethodReloadによるドメインリロードの省略、Unity CLI 1.0.0-beta.14、Unity Core Standards、Unite Tokyo 2026の講演内容、RenderDocとAIによる描画不具合の調査などを紹介しています。
pubDatetime: 2026-10-26T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Skipping domain reload: faster iteration using the MethodReload feature

- [Skipping domain reload: faster iteration using the MethodReload feature - Scripting Product Updates - Unity Discussions](https://discussions.unity.com/t/skipping-domain-reload-faster-iteration-using-the-methodreload-feature/1740090)
- [Faster iteration using the MethodReload feature - Unity Blog](https://unity.com/blog/skipping-domain-reload-faster-iteration-using-the-methodreload-feature)

`com.unity.pipeline` パッケージ（`0.7.0-exp.1`、Unity 6.0以降）の実験的機能MethodReloadを紹介するディスカッションとブログ記事です。

MethodReloadは、`[MethodReload]` を付けたメソッドの本体の変更を、ドメインリロードをせずに実行中のPlay Modeや、Editorに接続した開発ビルドのプレイヤーへ反映する機能です。
IL2CPPはドメインリロードに対応せず、実機では変更のたびにプレイヤー全体の再ビルドが要ることを背景に挙げています。
メソッドの本体に収まらない変更は、これまでどおりドメインリロードで反映する位置づけです。

使い方は、パッケージをインストールし、変更を繰り返す `public` で戻り値が `void` か `IEnumerator` のメソッドに属性を付け、Project Settings → Pipeline → Editorの「Method Reload Interpreter Watch」で監視を始める、という流れです。
実機では、ランタイムのPipelineドライバーを有効にした開発ビルドを接続すると、保存した変更が接続中のプレイヤーへ送られます。

仕組みは、C#で書いたインタープリターが属性付きメソッドのILを実行するもので、そのためIL2CPPのプレイヤーにも含められます。
主な制限は次のとおりです。

- 変わるのは属性付きメソッドの本体だけで、呼び出し側、フィールド、型のレイアウトは変わらない
- `await`、`try`/`catch`、LINQのクエリ構文、`ref`/`out` 引数、ジェネリックメソッドなどは使えず、Roslynアナライザーが違反を報告する
- 実機では、プレイヤーに含まれているメンバーしか呼べない
- インタープリターで実行するぶん遅いが、リリースビルドはコンパイル済みの本体をそのまま実行する
- 実行中のコルーチンは元の本体のまま動き、変更は次の `StartCoroutine` から反映される

Asset StoreのホットリロードのパッケージはIL2CPPのプレイヤーで動かず、.NETのHot ReloadはUnityのランタイムに対応しないのに対し、MethodReloadは言語機能の範囲を絞る代わりにIL2CPPの開発ビルドで動く点が利点だと整理しています。
詳細は[パッケージのドキュメント](https://docs.unity3d.com/Packages/com.unity.pipeline@0.7/manual/code-reload.html)を案内しています。

### Unity CLI 1.0.0-beta.14 is rolling out

[Unity CLI 1.0.0-beta.14 is rolling out - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-cli-1-0-0-beta-14-is-rolling-out/1739999)

Unity CLI 1.0.0-beta.14の配信開始をアナウンスするディスカッションです。

スクリプトから使う場合のbreaking changesのほか、`unity open` でプロジェクトを人の操作なしに開いて準備完了まで待つ機能、AIエージェント向けの機能、セキュリティの強化をまとめています。
1.0に向けて出力と終了コードの契約を確定させたbetaのため、更新前にスクリプトへの影響を確かめるよう勧めている点が特徴です。
修正は140件以上あり、全体は `unity changelog` で確認できます。
主な項目は次のとおりです。

- Breaking changes for scripts
    - 終了コードに11（プロジェクトではない、またはリリースが無い）、12（実行中のEditorが無い、または到達できない）、13（Editorのコマンドが無い）、14（タイムアウト）を追加し、その他の失敗は6になった
    - tsvのヘッダーをどの言語でもJSONのキーと同じにし、結果が空でもヘッダー行を出力する
    - `--timeout` は秒の整数だけを受け付け、`30s` や `1.5` のような値は使い方のエラー（終了コード2）になる
    - 答えが「いいえ」になる状態確認のコマンド（サインアウト中の `auth status` など）は `success: false` を返す
    - `--json` と異なる `--format` を同時に指定すると、無視されずに使い方のエラーになる
    - `unity open`、`editor module add`、`projects unlink vcs` は入力を待たず、渡すべきオプションを案内する
    - `unity serve` と環境変数 `UNITY_CLI_FTUE` を削除した
- Opening projects unattended
    - `unity open --until-ready` はEditorがコマンドを受け付けられる状態になるまで待ち、ダイアログで止まった場合はダイアログ名と対処を示してすぐに失敗する
    - `unity open --batchmode` はヘッドレスのEditorを起動する
    - `unity open --accept-upgrades` はアップグレードとAPI Updaterのダイアログを承諾する
    - `unity terms accept <version>` でEditorのSoftware Termsを事前に承諾できる
- For AI agents
    - `unity mcp --tools` と `--exclude-tools` で、エージェントに見せるEditorのツールを絞り込める
    - `--port`、`--pid`、`--instance` で、Multiplayer Play Modeのプレイヤーを含む複数のEditorから1つを指定できる
    - `unity logs --console --follow` は、コンパイルエラーのコード、ファイル、行を含むコンソールを流し続ける
    - `unity docs toc` でドキュメントのページ一覧を、`unity docs <topic> --content` でページをMarkdownとして出力する
    - `unity setup antigravity` を追加し、`unity setup claude` はAnthropicの公式マーケットプレイスからインストールするようになった
    - `unity commands --grep` で、CLIのコマンド、プラグイン、接続中のEditorのコマンドをまとめて検索できる
- Projects, installs, and auth
    - `unity projects create` はURPテンプレートとPipelineパッケージを既定にし、`--bare` で追加分を省ける
    - `unity install --download-directory <dir>` で、指定したフォルダーに自己完結のEditorをインストールできる
    - `unity auth login` はUnity Hubでサインイン中のアカウントを使うか尋ねる
    - `unity license activate` は環境変数 `UNITY_LICENSE_SERIAL` からシリアルを読む
- Security
    - 認証情報はUnityのサーバーにだけ送り、ダウンロードではHTTPSからHTTPへのリダイレクトを拒否する
    - Linux向けのリリースに署名を付けた
- Fixes
    - `unity watch test` がテストを繰り返し実行し続けなくなった
    - ダイアログで止まっているEditorを、`unity status` が準備完了と報告しなくなった
    - `unity self-update` が勝手に古いバージョンをインストールしなくなった
    - プラグインがHubのアカウントではなく、CLIでサインイン中のアカウントを使うようになった

既にインストール済みなら `unity self-update` で更新でき、新規の場合はbetaチャンネルを指定したインストールスクリプトを案内しています。

### Unity Core Standards: What's new in 6.6 and 6.7, and looking ahead to Unity 7

[Unity Core Standards: What's new in 6.6 and 6.7, and looking ahead to Unity 7 - Package Manager Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-core-standards-what-s-new-in-6-6-and-6-7-and-looking-ahead-to-unity-7/1740002)

[Unity Core Standards](https://unity.com/core-standards)の開始から1年を迎え、Unity 6.6と6.7での変更とUnity 7に向けた予定をまとめたディスカッションです。
内容は次のとおりです。

- Package security settings coming in Unity 6.7 LTS
    - Unity 6.7から、Project Settings > Package Managerにプロジェクト全体の信頼ポリシーを設定する[package security settings](https://docs.unity3d.com/6000.7/Documentation/Manual/upm-pkg-sec-settings.html)が入り、選んだポリシーに合わせてパッケージの追加を許可またはブロックする
    - 既定では、Unity、Asset Store、自分の組織が署名したパッケージを受け入れ、Advancedでより厳しいポリシーや緩いポリシーを選べる
    - 6.7へ移行したプロジェクトでは、アップグレード後に追加したパッケージにだけ適用する
- Package signing for .unitypackage files
    - Unity 6.6で、[パッケージの署名](https://docs.unity3d.com/6000.7/Documentation/Manual/AssetPackagesSignatures.html)を `.unitypackage` にも広げ、パッケージの出どころと公開後に改変されていないことを確かめられるようにした
    - パッケージがプロジェクトに入るすべての経路へ署名を広げる取り組みの一環だとしている
- Helping package publishers prepare for Unity 7
    - Unity 7では、パッケージがCoreCLRと単一のレンダーパイプラインの方針に合わせる必要がある
    - パブリッシャー向けの資料とガイドを今後数か月で公開する予定で、[CoreCLRのアップグレードガイド](https://discussions.unity.com/t/path-to-coreclr-2026-upgrade-guide/1714279)と[単一のレンダーパイプラインへの道筋](https://discussions.unity.com/t/the-path-to-a-single-render-pipeline-in-unity-7/1737908)を案内している
- Working with our community
    - Asset Storeの利用者に役立つ情報を出すため、パッケージのラベルの追加を試しており、パブリッシャーが申請時に自己申告できるようにする予定

### Unity CLI 使用データ:2億件のイベントが明らかにするもの

[Unity CLI 使用データ:2億件のイベントが明らかにするもの - Unity Blog](https://unity.com/ja/blog/unity-cli-usage-data-ai-coding-agents)

2026年7月20日から10月13日までのテレメトリをもとに、Unity CLIの使われ方を紹介する記事です。

この期間に22万6,000人以上のサインインユーザーが使い、イベントは2億件を超えたとしています。
CLIの実行の約98%はコーディングエージェントや自動化によるもので、ターミナルでの手入力は0.2%、CIは0.3%でした。
人がPipelineパッケージのインストール、Editorのバージョンを合わせたプロジェクトの起動、サインイン、エージェントのUnityへの接続、CLIスキルのインストールを済ませ、その後の作業をエージェントに引き渡す使い方が多いと分析しています。

コマンド別では、接続中のEditorでコマンドを実行する `unity command` が約1億2,400万回、接続中のEditorの状態、プロジェクト、バージョンを表示する `unity status` が約670万回、EditorごとにPipelineパッケージの有無を一覧する `unity pipeline list` が約140万回でした。
エージェント別ではClaude Codeが最も多く、Codex、Cursorなどが続き、国別では米国、日本、韓国、ドイツの順に多いとしています。

集計ではUnityの従業員とオプトアウトした開発者を除き、CI用の環境変数があればCI、入出力がどちらもターミナルなら人、それ以外をエージェントと自動化に分類したと説明しています。

### The 2026 Official Unity Game Jam starts November 5th!

[The 2026 Official Unity Game Jam starts November 5th! - News & General Discussion - Unity Discussions](https://discussions.unity.com/t/the-2026-official-unity-game-jam-starts-november-5th/1740103)

2年目となるUnity公式のゲームジャムの開催をアナウンスするディスカッションです。

前回は週末だけの開催で短すぎるという声があったため、今回は制作に丸7日間と、パッケージングと提出のための日程を設けています。

- キックオフ：11月5日（木）9時（PT）からYouTubeとTwitchで配信し、配信の終盤にあたる10時（PT）ごろのテーマ発表の時点で開始する
- 提出期限：11月14日（土）12時（UTC）で、延長はしないとしている
- 結果発表：12月10日（木）の配信で発表する
- 賞：1位から3位とBest Student Awardを選び、Unity Proの1年ライセンス、Unity Academyのサブスクリプション、Asset Storeのクーポンなどを贈る

審査の対象になるには、itch.io上でブラウザーから遊べるWebGLビルドが必要で、早めにビルドを試すよう勧めています。
参加は[itch.ioのジャムのページ](https://itch.io/jam/official-unity-game-jam-2026)から受け付け、事前の準備として、Unity Discordに近く開設するチーム募集のチャンネルと、[Unity Learnのゲームジャム向けコース](https://learn.unity.com/course/get-started-with-game-jams)を案内しています。

### Unite Tokyo 2026、Unityによる講演内容を公開

[Unite Tokyo 2026、Unityによる講演内容を公開 - ユニティ・テクノロジーズ・ジャパン株式会社](https://unity3d.jp/news/unite-tokyo-2026-session/)

2026年11月17日（火）にベルサール渋谷ガーデンで開催されるUnite Tokyo 2026について、Unityによる主な講演（一部は仮題）を公開したお知らせです。

本社チームのスタッフが登壇する基調講演とUnityロードマップの講演のほか、Unity Japanスタッフによる次の講演が掲載されています。

- 『Unity 6 世代のコンテンツ管理最前線 ― Addressables と Content Directories』
- 『BIRP から URP へ ― 移行に必要な情報をまとめて解説』
- 『軽くて、美しくて、どんな環境でも動く URP ライティングの最前線』
- 『Unity 7 が来る前に：CoreCLR 移行の仕組みと実践』
- 『AI エージェントたちに Unity 開発を任せたら、ボクは疑う係になった件』
- 『常に俺だけトークンが足りないのは何故！？コストを意識した Unity エージェンティック開発のすすめ』
- 『AI で XR アプリが作れる時代に、開発者は何を知っておくべきか？』
- 『はじめての Unity Robotics：シミュレーションで始めるロボット開発』

外部登壇者の講演と本社スタッフの講演の詳細は近日公開としており、講演情報とタイムテーブルは[公式サイト](https://unitetokyo.com/)で確認するよう案内しています。


## Articles

### AIとRender Docの連携による描画不具合の調査

[AIとRender Docの連携による描画不具合の調査 - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2026/10/20/102300)

Android実機でだけ画面がブラックアウトする不具合を、RenderDocの実機キャプチャとClaude Codeを組み合わせて調査した事例を紹介しています。

[RenderDocのPython API](https://renderdoc.org/docs/python_api/index.html)でキャプチャを解析し、キャプチャから取り出したSPIR-Vを書き換えて、リプレイ時だけシェーダーを差し替えます。
差し替えた結果は、実機でのリモートリプレイとレンダーターゲットの数値の読み出して確認します。

約30回の差し替えを経て、ドライバーのシェーダーコンパイルが原因の可能性が高いと判断し、調査開始から1時間弱でワークアラウンドを見つけたとしています。
1回のビルドに1時間かかる環境だったため、検証のサイクルを大きく短縮できたと述べています。

### C# Kaigi 2026「C#の現在地 進化の歴史と、AI時代の.NET Everywhere」, MessagePack for C# v4 preview.1

[C# Kaigi 2026「C#の現在地 進化の歴史と、AI時代の.NET Everywhere」, MessagePack for C# v4 preview.1 - neue cc](https://neue.cc/2026/10/23_csharpkaigi_msgpack_v4preview.html)

ブログの著者の [C# Kaigi 2026](https://csharpkaigi.net/)のキーノートの振り返りと、[MessagePack for C# v4 preview.1](https://github.com/MessagePack-CSharp/MessagePack-CSharp/releases/tag/v4.0.0-preview.1)のリリースを紹介しています。

v4は「Performant by default」「Secure by default」「Schema-resilient by default」を掲げ、AIによる攻撃が激しくなるなかで旧来の構造にパッチを重ねるのは限界だとして破壊的変更を許容しています。

速さの最大の要因はフォーマッターのインターフェースの変更で、`IMessagePackFormatter<TWriteBuffer, TReadBuffer, T>` のようにバッファの型をジェネリックパラメーターにし、devirtualizationとインライン化が効く形にした点とのことです。

正式版は大きな問題が無ければ11月中旬から下旬の予定で、v4からはCysharp organizationに移管し、v3にもセキュリティパッチを続けるとしています。

### 表面下散乱（SSS）の実装案比較とトゥーン調への適用方法

[表面下散乱（SSS）の実装案比較とトゥーン調への適用方法 - Sumzap Engineering Blog](https://tech.sumzap.co.jp/entry/toon-shader-subsurface-scattering)

トゥーン調キャラクターの肌に血色のにじみと透け感を加えるため、リアルタイムSSSの代表的な4つの手法（Screen-Space SSS、Texture-Space Diffusion、Pre-Integrated Skin Shading、Approximated Translucency）をUnity 6のURPとUnity Toon Shaderの上で比較しています。

採用したのは、Pre-Integrated系の考え方で影境界のにじみを作り、厚みを使った透過で逆光の透けを加える構成で、2段影を作るトゥーンの N·L（法線とライト方向の内積）を影境界からの符号付き距離として再利用しています。
追加の負荷はテクスチャの参照3回だけで、描画パスや中間バッファは増えない構成とのことです。

### Project Auditorに独自ルールを追加する方法【Unity】【Project Auditor】【エディタ拡張】

[Project Auditorに独自ルールを追加する方法【Unity】【Project Auditor】【エディタ拡張】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/ProjectAuditor_CustomRules)

Project Auditorに独自のルールを追加する方法を、`Assets/PixelArt` 以下のSpriteのFilter ModeがPointになっているかを確かめる例で紹介しています。

`TextureModuleAnalyzer` を継承したクラスで、ルールの記述子を `Initialize` で登録し、テクスチャごとに呼ばれる `Analyze` で違反を報告する作りです。
音声やメッシュには `AudioClipModuleAnalyzer` や `MeshModuleAnalyzer` を継承して同様のルールを作れるとしています。

### Unity6.7でBox Colliderを自分や子に合わせるFit to Self・Fit to Childrenが追加【Unity】

[Unity6.7でBox Colliderを自分や子に合わせるFit to Self・Fit to Childrenが追加【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/FittoSelf_FittoChildren)

Unity 6.7のアルファ版6000.7.0a6で、Box ColliderのCenterとSizeを見た目に合わせる「Fit to Self」と「Fit to Children」が追加されたことを紹介しています。

Fit to Selfは自身のRendererに、Fit to Childrenは自身と子孫のRendererをまとめて囲む1つの箱に合わせ、ResetとちがってIs Triggerなどの設定を変えないとのことです。

見た目の隙間は除かれないこと、非アクティブなオブジェクトや無効なRendererは対象外であること、見た目を変えても自動では追従しないことを注意点に挙げています。

### 自作Unityサウンド再生ライブラリ「Narimono」の内部設計を解説！ハンドルと同時再生数の仕組み

[自作Unityサウンド再生ライブラリ「Narimono」の内部設計を解説！ハンドルと同時再生数の仕組み - Zenn](https://zenn.dev/sorane/articles/97739af035878d)

このブログの著者が開発するサウンド再生ライブラリ[Narimono](https://github.com/SoraneDev/Narimono)の内部設計のうち、ハンドルの仕組み、同時再生数の上限処理、フェード、3Dサウンドの距離判定を解説しています。

`AudioSource` を使い回すと古いハンドルが別の音を操作してしまうため、ハンドルにボイス番号と世代番号を持たせ、新しい再生とフェードアウトの開始で世代番号を進める設計です。

上限に達した時に古い音をフェードアウトさせる設定では、フェード中の音もボイスを使うため、空きボイスが無ければ新しい音を捨てて音の途切れを避けています。

