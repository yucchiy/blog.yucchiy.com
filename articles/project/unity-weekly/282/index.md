---
type: unity-weekly
title: Unity Weekly 282
description: >-
  2026/07/27週のUnity Weeklyです。Unite Seoul Keynoteのアーカイブ、Unity CLI 1.0.0-beta.3、Unity Hub 3.20 Beta、Unity MCP server、Unity x Fortnite、Texpixなどを紹介しています。
pubDatetime: 2026-07-27T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---


## Unity Officials

### Unite Seoul Keynote

[Unite Seoul Keynote - YouTube](https://www.youtube.com/watch?v=ZTkvearTewE)

韓国・ソウルから2026年7月21日10:00（KST）にライブ配信された、Unite Seoul Keynoteのアーカイブ動画です。前号で取り上げた配信告知の本編にあたり、CoreCLR、グラフィックス、2D、AIワークフローなどUnityエンジンの今後に関する初公開情報と、ライブデモ、ソウルからの新発表を含むとしています。

概要欄のチャプターによると、CEOのMatt Bromberg氏によるイントロダクションとUnity 7の紹介に始まり、CoreCLR、グラフィックス（Surface Cache GIを含む）、2D、Unity Neural、META CLI & MCP、XREAL Aura、Fortnite、Unity Vector、IAP+、Industry、Unity Production Pipeline & CLIといったトピックが続き、ライブコードイテレーションのデモや、DAVE THE DIVER（MINTROCKET）、SUPERCENTなどの事例紹介を挟む構成になっています。

### Getting started with Unity MCP server

[Getting started with Unity MCP server - Technical Articles - Unity Discussions](https://discussions.unity.com/t/getting-started-with-unity-mcp-server/1731988)

UnityのMCP（Model Context Protocol）サーバーの概要と導入の入口を案内するディスカッションです。

MCPサーバーを通じて、互換性のあるAIクライアント（Claude Code、Cursor、Windsurf、Claude Desktopなど）をUnity Editorに直接統合し、コンソール出力、ビルドパラメータ、GameObject、シーン階層へリアルタイムにアクセスできるようになるとしています。

前提条件としてUnity 6（6000.0）以上とAI Assistantパッケージ、Unity Cloudに接続されたプロジェクト、Unity AIの有効なトライアルまたはサブスクリプションを挙げたうえで、具体的なセットアップ手順はGitHub CopilotとGeminiのワークフローを示す動画（[Use GitHub Copilot in Unity](https://www.youtube.com/watch?v=JzFRwEjU-Z4)、[Build with Gemini in Unity](https://www.youtube.com/watch?v=jlbHXpCzi8E)）と[AI Assistantパッケージのドキュメント](https://docs.unity3d.com/Packages/com.unity.ai.assistant@2.14/manual/index.html)を紹介しています。

パッケージはプレビュー/プレリリース状態である点にも注記があります。

### Unity CLI 1.0.0-beta.3 is rolling out

[Unity CLI 1.0.0-beta.3 is rolling out - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-cli-1-0-0-beta-3-is-rolling-out/1731984)

Unity CLI 1.0.0-beta.3のリリースを告知するディスカッションです。

このバージョンでのアップデートは、自動化・エージェントワークフローとローカライゼーションの強化が中心とのことです。

- Added
    - `unity run --command <name>`によるエディタコマンドのヘッドレス実行
    - `unity shell`のセッション履歴・タブ補完・マシンモード対応
    - `unity bug`の非対話モード対応
    - `unity editors running`と`unity projects size`コマンドの追加
    - 全コマンドでの`--json`フラグのサポート
- Fixed
    - 日本語・韓国語・中国語のカタログで500以上の文字列が欠落していた問題の修正
    - エディタスクリプト再コンパイル後に`unity mcp`が壊れる問題の修正
    - WSLおよびLinuxでの`unity auth login`の修正
    - ターミナル出力のエスケープシーケンスインジェクション対策の強化

### Want to help us redesign the "New Topic" experience?

[Want to help us redesign the "New Topic" experience? - Discussions Platform - Unity Discussions](https://discussions.unity.com/t/want-to-help-us-redesign-the-new-topic-experience/1731915)

Unity Discussionsの新規トピック作成画面のリデザインに協力するユーザーテスト参加者の募集するディスカッションです。

投稿場所からコンテキストを自動認識して必要なタグだけを表示する「コンテキストファースト」なデザインへの移行を計画しており、5名の参加者を[Google Form](https://docs.google.com/forms/d/e/1FAIpQLSei-U2-CZas4rmeG_lhAxSMOGJBPrhnuFVO1nxzstuKsP9RJQ/viewform)で募集しています。

ベテランである必要はなく、比較的新しいユーザーの視点を求めているとしています。申し込みは7月31日まで、テストは翌週、サイトへの導入は7月末を予定しているとのことです。

### Now Available: Unity Hub 3.20 Beta

[Now Available: Unity Hub 3.20 Beta - Unity Engine - Unity Discussions](https://discussions.unity.com/t/now-available-unity-hub-3-20-beta/1731828)

Unity Hub 3.20 Betaのリリースを告知するディスカッションです。

エディタインストールの信頼性向上が中心のリリースで、あわせてUnity CLIがパブリックベータとして利用可能になったことにも触れています。

- ダウンロード検証の厳格化、中断したダウンロードの再開、モジュールインストールの個別リトライなど、インストールの信頼性を改善
- WindowsでのUACプロンプト統合により、複数インストール時の操作性を改善
- プロキシ認証（Kerberos / NTLM）やPAC / WPAD設定などネットワーク周りを改善
- Linuxでのデフォルトブラウザによるサインイン対応、deb / rpmパッケージの改善
- macOS / Linux / Windows各環境のセキュリティ修正

### Create your own custom instructions for Unity AI

[Create your own custom instructions for Unity AI - Technical Articles - Unity Discussions](https://discussions.unity.com/t/create-your-own-custom-instructions-for-unity-ai/1731678)

Unity AIのCustom Instructions機能の使い方を解説するディスカッションです。

Claude Codeの`CLAUDE.md`やCursorの`.cursorrules`に相当する機能で、プロジェクト全体のガイドラインをシステムコンテキストへ永続的に挿入できるとしています。AI Assistant 2.12-preとUnity 6000.5.0f1での検証に基づいています。

本文は下記の章立てで紹介しています。

- Context is king
    - 文脈こそがジェネリックな提案とプロジェクトに即した結果の違いを生むとし、カスタム命令によって対話のたびに好みやプロジェクトの詳細を繰り返す必要がなくなると述べている
- How to set up custom instructions
    - テキストアセット（.txtまたは.md）を作成し、Project SettingsのAssistant Preferencesのカスタム命令ボックスに割り当てる。以後、会話のたびにバックグラウンドでAIのシステムプロンプトへ自動追加される
    - 128kトークンのコンテキストウィンドウに対してカスタム命令は2,000〜10,000トークンを想定し、1,000語程度以下に保つことを推奨している
- What to include in custom instructions
    - Project overview: プロジェクトの説明と、Unityバージョン、Input System、URPなどの技術スタックを書く
    - Context about your preferences: 自身のスキルレベルを定義し、説明の詳細度やコミュニケーションスタイルを調整する
    - Design philosophy: composition over inheritanceやサービスロケーターパターンなど、具体的な設計原則を書く
    - Code preferences: `_camelCase` / `PascalCase` / `k_PascalCase`などの命名規則や、Allmanブレースなどのフォーマットを指定する
    - File structure and workflow rules: スクリプトの配置先やMarkdown計画ファイルの場所などを定義する
    - Don't list a file tree: 変更頻度の高いファイルツリーの列挙はすぐに古くなりAIの誤解を招くため、概念的なアーキテクチャマップの方が有用としている
    - Crucial "do nots" (safety rules): メタファイルやYAMLの直接編集の禁止など、プロジェクトの破損を防ぐ規則を書く
- Interaction mode
    - 実装前にAIから質問させるウィザード形式の対話を指示することで、方向性を先に確認して時間とトークンを節約する
    - あわせて、非自明なロジックへのインラインコメントや`[Tooltip]`属性で意図を示すself-documenting codeを勧めている
- Be specific in your examples and what defines "done"
    - DoD（完了の定義）のチェックリストと少数例プロンプティングで、AIが指示に正確に従いやすくする。複数の指示ファイル間の矛盾を避けるため、`CLAUDE.md`を正のリソースとして参照する戦略にも触れている
- Ask Unity AI for improvement to your custom instructions
    - カスタム命令自体の改善提案をAIに求め、プロジェクトの進化に合わせて「生きたファイル」として反復改善する

### Unity x Fortnite: How Unity Runs Inside Unreal Engine

[Unity x Fortnite: How Unity Runs Inside Unreal Engine - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-x-fortnite-how-unity-runs-inside-unreal-engine/1731630)

UnityとEpic Gamesのパートナーシップの進捗として、Unityの「Fantasy Kingdom」プロジェクトがUnreal Engine内でネイティブに動作する様子を公開したディスカッションです。

仕組みの中核はUnityのクライアント/サーバープロトコルであるPolySpatialで、以下の4つの構成でUnityのシミュレーションを別プロセスで実行しながらUnreal Engine側がレンダリングを担うような構成とのことです。

- Headless Unity Server: C#スクリプト、ゲームプレイシステム、物理、ワールドステートを実行する
- PolySpatial Protocol: シーンデータをリアルタイムに送信する
- Headless Fortnite Server: ライブのFortniteインスタンスを実行し、データを仲介する
- Fortnite Client: レンダリングと入力を担当する

今回のマイルストーンは「Unreal Engine内でUnityが動く」段階であり、Fortnite本体への統合はまだ先で、早期アクセスは2027年までは提供されない予定としています。

また、[interest form](https://create.unity.com/unity-on-fortnite-unreal-interest-form)に記入すると2027年の早期アクセスの抽選対象になり、あわせて開発の進捗情報が共有されるInsiders Programにも登録されるとしています。

### IAP tutorial series: Webshops

[IAP tutorial series: Webshops - Technical Articles - Unity Discussions](https://discussions.unity.com/t/iap-tutorial-series-webshops/1731579)

Unity IAPのビデオチュートリアルシリーズ（IAP 4からIAP 5へのアップグレード、決済プロバイダーの実装、ウェブショップの構築の3本）のうち、Webshopsを扱うディスカッションです。

プレイヤーがゲームのカタログをウェブ上で閲覧し直接購入できるD2C（ダイレクト・ツー・コンシューマー）アプローチを解説しています。

- ウェブショップの作成と構成: Unity Cloud Dashboardでの初期設定
- モックカタログでのテスト: 本番前のプレースホルダーアイテムでの検証
- ストアテーマのデザイン: AIによる自動テーマ生成と「Refine AI」による調整
- ライブ在庫と決済のセットアップ: 実商品の追加とStripe、Coda Paymentsなどの決済ゲートウェイの連携
- テストトランザクションのシミュレーション: 開発プレビューURLでのエンドツーエンドテスト
- ゲーム統合: ディープリンクでゲーム内からウェブショップへリダイレクトする実装

### Building for XREAL AURA: Inside Google's First Android XR Hackathon

[Building for XREAL AURA: Inside Google's First Android XR Hackathon - Unity Blog](https://unity.com/blog/inside-google-s-first-xr-hackathon)

Googleが初開催したAndroid XRハッカソン（2026年6月13〜14日、XREAL AURA向け）のレポートを紹介するディスカッションです。

### Games made with Unity: June 2026 in review

[Games made with Unity: June 2026 in review - Unity Blog](https://unity.com/blog/games-made-with-unity-june-2026-releases)

2026年6月にリリースされたMade with Unityゲームのまとめたディスカッションです。

### Help us shape the Beta Sweepstakes!

[Help us shape the Beta Sweepstakes! - Unity Engine - Unity Discussions](https://discussions.unity.com/t/help-us-shape-the-beta-sweepstakes/1732048)

Unity beta 版のテスト参加者向け企画「Beta Sweepstakes」についての意見を募集するディスカッションです。

参加者・非参加者の双方を対象に、参加しなかった理由や、賞品のグラフィックスカードが本当に魅力的か別のものが適切か、といったフィードバックを[Google Form](https://forms.gle/Qyf2CJyQd3DP2gPw7)経由で募っています。


## Articles

### Unity CLI でAIエージェントにゲームを作らせてみた

[Unity CLI でAIエージェントにゲームを作らせてみた - Zenn](https://zenn.dev/tkada/articles/1ba97707dee14a)

ベータ版の[Unity CLI](https://unity.com/ja/blog/meet-the-unity-cli)と`com.unity.pipeline`パッケージを使い、起動中のUnity EditorをHTTP経由の約140個のコマンドで遠隔操作して、Claude Codeにブロック崩しの実装・シーン構築・Play Modeでの自動検証まで行わせた実験記事です。エディタが見つからない場合のハマりどころや、AIエージェント向けのスキル定義が同梱されている点にも触れています。参考リンクとして[Unity CLIのドキュメント](https://docs.unity.com/en-us/unity-cli/unity-cli)などが挙げられています。

### Unity公式の2Dサンプルプロジェクト「Bunny Blitz」が公開された

[Unity公式の2Dサンプルプロジェクト「Bunny Blitz」が公開された - Qiita](https://qiita.com/RyotaMurohoshi/items/849fb150d68c55e6d555)

Unity公式の2Dサンプルプロジェクト「Bunny Blitz」が[Asset Store](https://assetstore.unity.com/packages/templates/packs/bunny-blitz-2d-3d-sample-project-393078)で無料公開されたこと（[公式の告知トピック](https://discussions.unity.com/t/bunny-blitz-2d-and-3d-sample-project-available-now/1731205)）を紹介しています。2D環境を3Dキャラクターが駆け抜ける横スクロールアクションで、Unity 6.3 LTSから導入された「3D as 2D」機能の実践的なワークフローを学べるものですが、プロジェクト自体はUnity 6.5以降が必須である点に注意を促しています。あわせて[紹介動画](https://www.youtube.com/watch?v=bRrlm0ZDfRY)と[Unity 6.3 LTS向け2DグラフィックスのeBook](https://unity.com/ja/resources/2d-game-art-animation-lighting-unity-6-3-lts)も案内しています。

### UI ToolkitのQ("...")を手書きしないため、UXMLから型付きElement参照を生成する

[UI ToolkitのQ("...")を手書きしないため、UXMLから型付きElement参照を生成する - きゅぶろぐ](https://blog.kyubuns.dev/entry/2026/07/23/220202)

UI Toolkitで`Q()`に文字列を渡して要素を取得すると、UXML側のリネームがコンパイルエラーにならず実行時に壊れる問題に対して、UXMLから型付きのElement参照クラスをエディタスクリプトで自動生成するアプローチを紹介しています。UXMLをXDocumentで解析して名前付き要素を抽出し、インスタンス化したVisualTreeAssetから型を確定してC#コードを生成することで、文字列リテラルの散在をなくしコンパイル時の型安全性を得ています。

### Unity 6.5 DirectStorageの公開実測を読む：18.6%短縮と最大40%の条件

[Unity 6.5 DirectStorageの公開実測を読む：18.6%短縮と最大40%の条件 - Zenn](https://zenn.dev/gamedev_toollab/articles/faa971db6fcaf5)

Unity 6.5のDirectStorage対応について、[Unity Discussionsで公開されたユーザー検証データ](https://discussions.unity.com/t/unity-announces-directstorage-support-in-unity-6-4-beta-enabling-accelerated-asset-loading-on-windows/1703061?page=2)を基に、効く範囲と実際の効果を読み解く検証記事です。

実測例としてHDRPプロジェクトでロード時間が7.49秒から6.10秒（約18.6%短縮）になった事例を取り上げ、公式の謳う「最大40%」の高速化は対応I/Oのベストケースであり、総ロード時間がそのまま短縮されるわけではない、と整理しています。

対象はWindows 64-bit Player上のTexture・Mesh・DOTSのEntities asset dataと`AsyncReadManager`による読み込みで、`File.ReadAllBytes`などの通常I/Oは自動では切り替わらない点や、ON/OFFビルドの自動生成と再現可能な計測方法にも触れています。

参考資料として[DirectStorageの公式マニュアル](https://docs.unity3d.com/6000.5/Documentation/Manual/windows-directstorage.html)や、Unityスタッフによる解説スレッド「[Direct Storage in Unity - Where We Are and What's Next](https://discussions.unity.com/t/direct-storage-in-unity-where-we-are-and-whats-next/1716802)」も参照しています。

### 【Unity】VContainerを利用して安定した拡張性のあるゲーム基盤をつくる！

[【Unity】VContainerを利用して安定した拡張性のあるゲーム基盤をつくる！ - Qiita](https://qiita.com/archeleeds/items/042d8a9ffaf888d90752)

シーン遷移やダイアログ管理が複雑化してゲーム基盤が壊れていく過程を追いながら、VContainerのDIスコープ階層で基盤とコンテンツの境界を切る設計を解説しています。

メインシーン + モジュールシーンというモデル、フェーズ×ステップのパイプラインによる遷移の順序保証、スタック + 操作キューによるダイアログ基盤などを紹介し、記事の著者が同じ思想で実装したフレームワーク「[Lighthouse](https://github.com/lisearcheleeds/Lighthouse)」をGitHubで公開しています。

### 【Unity】線香花火のエフェクトを作る【Visual Effect Graph / Particle Strip】

[【Unity】線香花火のエフェクトを作る【Visual Effect Graph / Particle Strip】 - Raspberlyのブログ](https://raspberly.hateblo.jp/entry/UnitySummnerChallenge2026)

[Unity Summer Challenge 2026](https://unity3d.jp/unity-summer-challenge-2026/)への投稿作品である、線香花火エフェクトの作り方を紹介しています。

Unity 6000.3.12f1 + Universal Render Pipeline 17.3.0 + Visual Effect Graph 17.3.0の環境で、エフェクトを親弾・親弾のトレイル・子弾・子弾のトレイルの4要素で構成し、Particle Stripによる軌跡表現や、遠距離での描画をSubpixel Anti-Aliasingで改善する工夫を紹介しています。


## Repositories

### Texpix

[ruccho/Texpix: A pixel-font rendering system for Unity (uGUI).](https://github.com/ruccho/Texpix)

ピクセルフォントを本来の形のまま描画する、Unity（uGUI）向けのレンダリングシステム。SDFやアンチエイリアシングを使わず最近傍フィルタリングでピクセルパーフェクトに描画し、4近傍・8近傍のピクセルアウトライン、動的・静的アトラス、リッチテキスト、フォールバックフォント、マスク、カスタムシェーダーに対応する。Unity 6000.3以降で動作し、MITライセンスで公開されている。

