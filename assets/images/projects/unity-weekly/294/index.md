---
type: unity-weekly
title: Unity Weekly 294
description: >-
  2026/11/02週のUnity Weeklyです。Brotliデコーダの脆弱性とeMudhra CA侵害のセキュリティアドバイザリ、Unity CLI 1.0.0-beta.15、Unity IAPのロードマップ、XREAL AURA向けのAndroid XR開発、content directories、Memory Profiler 1.2.0などを紹介しています。
pubDatetime: 2026-11-02T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### 2026年10月 セキュリティアドバイザリ Brotliデコーダの脆弱性

[2026年10月 セキュリティアドバイザリ Brotliデコーダの脆弱性 - Unity](https://unity.com/ja/security/unity-brotli-decoder-vulnerability)

GoogleのBrotli圧縮ライブラリの脆弱性（CVE-2026-111497）について、Unityでの影響条件と対処方法を案内するアドバイザリです。

影響を受けるのは、`BrotliStream`、`BrotliDecoder`、またはBrotli展開を有効にした `HttpClient` で、攻撃者が制御できるデータを展開するアプリケーションだとしています。
該当する場合、細工されたBrotliデータによってクラッシュや、アプリケーションの権限でのコード実行につながるおそれがあると説明しています。
`UnityWebRequest` やAssetBundleはこのデコーダを使わないとのことです。
また、Editorに同梱されるPackage Managerはパッケージ署名の検証前にレジストリの応答を展開するため影響を受けるとして、修正版Editorへの更新を案内しています。

修正版は[英語版アドバイザリ](https://unity.com/security/unity-brotli-decoder-vulnerability)の表で案内しており、10月30日時点では6000.3.27f2と6000.7.0b7が掲載され、ほかのリリース系列は順次更新するとしています。
対処としては、デコーダが配布したアプリケーションに含まれるため、該当するアプリケーションはEditorの更新だけでなく再ビルドと再配布が必要だとしています。
Unityアプリケーションでの悪用の証拠やユーザーへの影響は確認していないとのことです。

### 2026年10月 セキュリティ更新アドバイザリ eMudhra CA侵害

[2026年10月 セキュリティ更新アドバイザリ eMudhra CA侵害 - Unity](https://unity.com/ja/security/unity-emudhra-compromise)

認証局eMudhraの中間CA証明書の秘密鍵が侵害された問題について、Unityでの影響と対策を案内するアドバイザリです。

侵害された鍵で発行した証明書を使うと、中間者攻撃の位置にいる攻撃者がアプリケーションの通信を傍受したり改ざんしたりできるとしています。
Unityへの侵入ではなく、証明書の信頼と検証に関する問題だと説明しています。
保護されるかどうかはプラットフォームと適用済みの更新で異なるとして、端末のOSなどを最新に保つことと、開発中のプロジェクトを修正版Editorへ更新することを案内しています。

修正版は[英語版アドバイザリ](https://unity.com/security/unity-emudhra-compromise)の表で案内しており、10月30日時点では6000.3.27f2と6000.7.0b7が掲載されています。
出荷済みアプリケーションの再ビルドは一般には不要としていますが、Androidビルド用のOpenJDKは別途影響を受け、Adoptiumの更新を待っているとのことです。
Unityアプリケーションでの悪用の証拠やユーザーへの影響は確認していないとのことです。

### Unity CLI 1.0.0-beta.15 is rolling out

[Unity CLI 1.0.0-beta.15 is rolling out - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-cli-1-0-0-beta-15-is-rolling-out/1740651)

Unity CLI 1.0.0-beta.15の公開をアナウンスするディスカッションです。
エージェントとスクリプトからの利用に向けた機能を追加し、1.0に向けて一覧とストリームの出力形式を統一しています。
主な変更点は次のとおりです。

- Breaking changes for scripts
    - JSONの一覧出力を `items`、`total`、`nextPage`、`partial` に統一し、ndjsonの各データ行に `type: "row"`、末尾に `type: "result"` の行を付ける
    - `unity projects new` と `unity list` を削除し、それぞれ `unity projects create <name> --no-cloud` と `unity command` に置き換える
    - `list` サブコマンドを削除し、`unity projects` などグループ名だけで一覧を表示する
- Added
    - Unity 6以降のプロジェクトをProject Auditorで調査する `unity projects audit` を追加した
    - オフラインで使うドキュメントキャッシュと、MCP経由の長時間ジョブを追加した
    - `ProjectSettings/UnityCliConfig.json` の `cli.version` でプロジェクトごとにCLIのバージョンを指定できる
- Changed
    - `--project-path` を全コマンドで使えるようにし、短いフラグの意味を統一した
    - 自己更新で直近3バージョンを保持し、`unity self-update --rollback <version>` で戻せる
- Fixed (highlights)
    - Windowsで `--download-directory` に絶対パスを渡せない問題を修正した
    - ヘッドレスLinuxやコンテナーでサインインが保持されない問題、Cloudコマンドが期限切れトークンで失敗する問題を修正した
- Security
    - Editorとモジュールのダウンロードをリリース情報と照合する
    - `unity ci init` でシリアルをマスクする

### Unity In-App Purchasing (IAP) Roadmap Update

[Unity In-App Purchasing (IAP) Roadmap Update - Monetization & Growth Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-in-app-purchasing-iap-roadmap-update/1740614)

Unity IAP 5.4以降で利用できる機能と、D2C（Direct-to-Consumer）を含む今後の計画を整理したディスカッションです。
5.4は2026年6月、D2CのTest modeは9月に提供されたもので、項目ごとに今できる準備も案内しています。

- Available now
    - Unity Cloudプロジェクトと連携すると、ストアを横断した収益レポートを利用できる
    - Remote Catalogで商品を各ストアへ対応付け、StripeとCodaによるD2C決済やwebshopに利用できる
    - Test modeで決済事業者のアカウントなしに購入フローを試せる
- Coming soon
    - Google Playのサブスクリプションのベースプランとオファーへの対応を予定している
    - Remote Catalogを基に、AppleとGoogleへ商品と価格を同期する機能を予定している
    - 地域ごとのD2C購入オプションとStashへの対応、webshopへのサインインや報酬機能を予定している
    - 取引単位のデータを自社のデータウェアハウスへ取り込む機能は早期アクセスの段階で、[フォーム](https://docs.google.com/forms/d/e/1FAIpQLSfHXM70AOdBL_hKpjNtM1RwebKhB0PkFQtg48hb_kuzva6w0w/viewform)から申請を受け付けている

ロードマップは現在の方針であり、提供する機能や時期を保証するものではないとしています。

### Time to build for XREAL AURA with Android XR!

- [Time to build for XREAL AURA with Android XR! - XR - Unity Discussions](https://discussions.unity.com/t/time-to-build-for-xreal-aura-with-android-xr/1740578)
- [XREAL AURA Is Here: Meet Seven Made With Unity Titles - Unity Blog](https://unity.com/blog/xreal-aura-games-made-with-unity)

XREAL AURA向けのAndroid XR開発について、Unity 6.5以降（6.6推奨）とパッケージの構成を案内するディスカッションです。
Unity OpenXR: Android XR 1.5.0、OpenXR Plug-in 1.18以降に加え、XR Interaction ToolkitとXR Handsの推奨バージョンや開発資料を紹介しています。

Android XRデバイス間では共通のAPKを配布できるとしたうえで、XREAL AURAはアイトラッキングとフェイストラッキングに対応しないため、マニフェストの確認と `Android XR: Faces` 機能の無効化を案内しています。

関連するブログでは、Unityで開発された対応タイトルと各スタジオの開発事例を紹介しています。
OpenXRによる移植やURP、Prefab、UPM、Unity CLIの活用に触れており、発売済みの5作品と今後登場予定のFallout: Factions、SwarmFleetを紹介しています。

### Getting started with content directories

[Getting started with content directories - Technical Articles - Unity Discussions](https://discussions.unity.com/t/getting-started-with-content-directories/1740417)

Unity 6.6で提供されたcontent directoriesの導入資料を紹介するディスカッションです。
AssetBundlesを置き換えるコンテンツシステムとして、アセットの構成を見直し、読み込み速度とビルド速度、実行時のメモリ使用量を改善する狙いを説明しています。

マニュアルと入門動画のほか、Addressablesを使うプロジェクトでAssetBundlesの代わりにcontent directoriesを生成するための移行動画を案内しています。

### The Path to CoreCLR #3 - GC Safety – The Journey Begins

[The Path to CoreCLR #3 - GC Safety – The Journey Begins - C# & .NET - Unity Discussions](https://discussions.unity.com/t/the-path-to-coreclr-3-gc-safety-the-journey-begins/1740357)

UnityのCoreCLR移行を解説する連載の第3回で、エンジンをGCに対して安全にするために行った変更を紹介しています。
参照フィールドを持つクラスではMonoとCoreCLRでメモリレイアウトが異なるため、ネイティブコードが管理オブジェクトのフィールドを直接読む実装を、管理コード経由でアクセスする構成へ変更した経緯を説明しています。

また、移動するGCへの対応が終わる前に他の開発を進めるため、確保だけを行い回収しないNullGCを使った初期の検証を紹介しています。
NullGCは一度削除した後に再び必要になった経緯があり、現在は再び無効化しているとのことです。

### Now Available: Unity Hub 3.22.0

[Now Available: Unity Hub 3.22.0 - Unity Hub - Unity Discussions](https://discussions.unity.com/t/now-available-unity-hub-3-22-0/1737927/28)

Unity Hub 3.22.0のスレッドで、2026年10月28日に公開した3.22.5の変更点を案内する投稿です。

- Bug fixes & improvements
    - Windows 11のMSIX版インストールでデスクトップショートカットを追加する
    - Windowsで、Toolsから開いたターミナルで、Hubを再起動するまでUnity CLIが見つからない問題を修正した
- Security
    - Electronを44.10.0に更新し、ネットワークとプロキシ周りを含むサードパーティライブラリの既知の脆弱性を修正した

### Memory Profiler Releases

[Memory Profiler Releases - Performance & Profiling Product Updates - Unity Discussions](https://discussions.unity.com/t/memory-profiler-releases/730398/58)

Memory Profiler 1.2.0（2026年10月23日リリース）の変更点を案内するスレッドの投稿です。
Roots & Impactによる参照と影響度の分析やCoreCLR対応は[1.2.0-pre.1のリリーススレッド](https://discussions.unity.com/t/memory-profiler-1-2-0-pre-1-released-roots-impact-profiling-coreclr-support/1735523)で紹介済みで、今回は正式版での追加と修正を列挙しています。

- Added
    - CoreCLRスナップショットの新しい管理ルートをRoots & Impactで表示する
    - Potential Savingsで削減可能なメモリを示し、Roots & Impactの詳細へ移動できる
- Changed
    - 管理オブジェクト側とネイティブオブジェクト側を、テーブルのアイコンや選択詳細で区別する
- Fixed
    - 閉じたMemory Profilerウィンドウが次のドメインリロードまでメモリに残る問題を修正した
    - CoreCLRスナップショットの一部の配列フィールドが誤って表示される問題を修正した

### 2026 Industry releases and what’s coming in Q4

[2026 Industry releases and what’s coming in Q4 - Unity Blog](https://unity.com/blog/unity-industry-product-releases-2026)

Unity Industryの2026年の更新を四半期ごとに振り返り、第4四半期の予定をまとめた記事です。
Unity Studioの共同編集とEditorへの出力、Asset Managerのセルフホストなどを紹介しています。

また、Simulation Proの早期アクセス、FigmaとUI Toolkitをつなぐ実験的なコネクター、CAD処理をAIエージェントで構成する実験的なIndustry AI Workflowsも取り上げています。

### Google Play Indie Games Fund in Africa 2026 - Games Made with Unity

[Google Play Indie Games Fund in Africa 2026 - Games Made with Unity - Unity Blog](https://unity.com/blog/google-play-indie-games-fund-2026)

Google Play Indie Games Fundが初めてアフリカで実施され、独立系ゲーム開発者に総額100万ドルを支援することを紹介する記事です。
Unityは採択されたチームへ技術的な支援を行い、今年の採択作品のうち9作品がUnityで開発されているとしています。

ナイジェリアや南アフリカ、ガーナ、ケニアのスタジオについて、アフリカの文化や地域性を取り入れた作品を含め、各チームが取り組む作品の概要を紹介しています。

### How much story does your video game need?

- [How much story does your video game need? - Unity Blog](https://unity.com/blog/how-much-story-does-your-video-game-need)
- [Start with a feeling: How to define your first video game - Unity Blog](https://unity.com/blog/define-your-video-game)
- [Jump, match, build, or explore? How to find your core game loop - Unity Blog](https://unity.com/blog/find-your-core-game-loop)
- [How bosses and enemies decide what to do in video games - Unity Blog](https://unity.com/blog/how-enemy-ai-works-video-games)
- [10 things you need to know before building your first video game - Unity Blog](https://unity.com/blog/things-to-know-before-starting-your-first-game)
- [Frame rate explained: What is fps in video games? - Unity Blog](https://unity.com/blog/frame-rate-in-video-games-explained)
- [How does terrain work in video games? - Unity Blog](https://unity.com/blog/video-game-terrain-guide)

Unity Blogで、ゲーム制作を始める人向けに企画やゲームデザインの基礎を解説する記事が続けて公開されています。
物語の比重、プレイヤーに感じてほしい感情からの企画、コアループ、敵AIの設計、制作前に考える10項目、フレームレート、地形の表現をそれぞれ扱っています。

## Articles

### Simple Brawler Part 3: Ground Checks, Respawns and Spawn Points in Quantum

- [Simple Brawler Part 3: Ground Checks, Respawns and Spawn Points in Quantum - Photon Blog](https://blog.photonengine.com/simple-brawler-part-3-photon-quantum-tutorial/)
- [Simple Brawler Part 4: Charged Dash Attack and Prop Spawning in Quantum - Photon Blog](https://blog.photonengine.com/simple-brawler-part-4-photon-quantum-tutorial/)

Photon Quantum 3.1で、接地判定とリスポーン、プロップ生成とチャージ式ダッシュ攻撃を実装する連載記事です。
決定論的な状態とUnityの表示を分ける構成や、ロールバック対象外のシステムフィールドに可変状態を置かない設計、コレクションの確保と解放を説明しています。

### Unity6.6で新Hierarchyがデフォルトに、レイヤーやタグだけでなく、EntitiesやUI Toolkitも表示されるように【Unity】

[Unity6.6で新Hierarchyがデフォルトに、レイヤーやタグだけでなく、EntitiesやUI Toolkitも表示されるように【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/NewHierarchy_6_6)

Unity 6.6で既定になった新Hierarchyについて、LayerとTagの直接編集、Entityの検索、UI Toolkit要素の表示を紹介しています。
Sceneビューの表示と選択を切り替えるVisibilityとPickingの列も扱っています。
UI Toolkit要素を表示するUI Authoringは実験的機能だと説明しています。

### ライトスペース・パースペクティブ・シャドウマップ技法 (LiSPSM): UnityでSRPからLiSPSMで影を描く

[ライトスペース・パースペクティブ・シャドウマップ技法 (LiSPSM): UnityでSRPからLiSPSMで影を描く - 3Dゲーム開発備忘録](https://daiki-eguchi.hatenablog.com/entry/2026/10/25/192218)

UnityのSRPでLiSPSMを実装する方法を、ライト空間でのワープと変換行列の作り方から解説しています。
近くと遠くの影の品質を調整する仕組みや、ライトと視線がほぼ平行な場合に通常の正射影シャドウマップへ切り替える処理を紹介しています。

### Unity公式AIを無料体験で使う方法と、シーンや素材の生成例【Unity】【AI】

[Unity公式AIを無料体験で使う方法と、シーンや素材の生成例【Unity】【AI】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Unity_AI_FreeTrial)

Unity 6000.6.1f1とAssistant 2.21.0-pre.1でUnity AIを試す手順と、コード、シーン、スプライト、マテリアルの生成例を紹介しています。
無料体験から有料契約へ自動移行することや、生成結果が指示どおりになるとは限らない点にも触れています。

### 【C# / Unity】型制約なしゼロアロケでDisposeする方法

[【C# / Unity】型制約なしゼロアロケでDisposeする方法 - Qiita](https://qiita.com/Omochaya/items/c396ca2910e1c5e90e92)

`IDisposable` の型制約を付けずに、構造体のボックス化領域を `Unsafe.Unbox<T>` で再利用して `Dispose` を呼ぶ方法を紹介しています。
再帰呼び出しに対応するスタックによるボックスの管理と、参照型フィールドを残さないための後処理も解説しており、シングルスレッドを前提とした実装だと説明しています。
