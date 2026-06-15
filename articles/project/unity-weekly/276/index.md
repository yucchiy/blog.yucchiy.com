---
type: unity-weekly
title: Unity Weekly 276
description: >-
  2026/06/15週のUnity Weeklyです。Unity IAP 4 End of Support、Built-in Dictionary Serialization、Graph Toolkit Update in Unity 6.6 alpha、Asset Store Summar Sale、アーティスト向け2DゲームEbook、Unity 完全理解した勉強会開催などを紹介しています。
pubDatetime: 2026-06-15T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity IAP 4: End of Support Announcement

[Unity IAP 4: End of Support Announcement - Unity Services - Unity Discussions](https://discussions.unity.com/t/unity-iap-4-end-of-support-announcement/1722241)

Unity IAP 4が2026/06/08をもって非推奨となったことがアナウンスされています。

このアナウンスでは、Unity IAP 4の新機能追加・不具合修正・カスタマーサポートが終了し、今後の開発はUnity IAP 5に集中することが説明されています。

既存のIAP 4プロジェクトは引き続き動作し、パッケージ自体も削除されませんが、次のLTSではバンドルされるEditor manifestがIAP 5を指す予定であることも示されています。

Unity IAP 5へ移行する理由として、Google Play Billing Library 7+やStoreKit v2への対応、ストアごとのログによるデバッグ改善、D2C commerceなどについて触れています。

既存プロジェクトへの移行のサポートとして、Unity AI AssistantまたはClaude Codeで動作するIAP migration AI skillの利用が案内されています。

また、Amazon App StoreはIAP 5のcustom store pathでサポートされ、iOS 15+が最低対象になる点にも触れられています。

### Built-in Dictionary Serialization and Authoring in Unity 6.6 Alpha

[Built-in Dictionary Serialization and Authoring in Unity 6.6 Alpha - Unity Engine - Unity Discussions](https://discussions.unity.com/t/built-in-dictionary-serialization-and-authoring-in-unity-6-6-alpha/1722926)

Unity 6.6 alphaに、DictionaryのビルトインシリアライズとInspector上での編集機能が追加されたことがアナウンスされています。

この機能は6000.6.0a7以降で利用でき、`Dictionary` に対して `[SerializeField]` を指定することで利用できます。

### Graph Toolkit Update in Unity 6.6 alpha

[Graph Toolkit Update in Unity 6.6 alpha - Unity Engine - Unity Discussions](https://discussions.unity.com/t/graph-toolkit-update-in-unity-6-6-alpha/1721970)

Unity 6.6 alpha に含まれる Graph Toolkit のアップデートについて紹介しています。

このアップデートでは、主にグラフ実行時の状態を可視化・デバッグするための機能が追加されています。

- Wire Animation
    - ノード間を接続するワイヤーに対して、実行フローを示すアニメーションや見た目のカスタマイズを行えるAPIが追加された
- Node Progress & Animation
    - ノード上部のアクセントバーに進捗率を設定したり、アニメーションを再生できるようになった
- Port Previews
    - ポートの横に小さなテキストフィールドを表示し、実行時の値などを表示できるようになった
- Error, Warning and Info Markers
    - `GraphLogger` を用いて、ノード・ポート・グラフにエラーや警告、情報を表示できるようになった

その他、下記の更新も行われています。

- ID/GUID accessors
    - グラフ・ノード・ポート・サブグラフアセットのID/GUIDにアクセスできるようになった
- USS styling
    - USSによるノードUIのカスタマイズが行えるようになった
- Port connection controls
    - ポートの接続数制御や接続可否判定を行えるようになった
- Flags enum
    - Flags enumの表示に対応した
- Toolbar actions
    - グラフツールバーへのカスタムアクション追加が行えるようになった

### Now available: Unity Hub 3.18.2

[Now available: Unity Hub 3.18.2 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/now-available-unity-hub-3-18-2/1722261)

Unity Hub 3.18.2のリリースがアナウンスされています。

このリリースでは、主に下記の修正と改善が行われています。

- Installs and downloads
    - Editorのセキュリティ警告をdismissできるようになった
    - Windows ARM64デバイスでEditorインストールに失敗する問題の修正
    - module checksum downloadのproxy対応とWindows証明書処理の改善
- Source control
    - Linux credential storage、権限不足、token切断時のGitHub personal access token処理の修正
    - GitHub repository検索やGit default branch初期化の修正
- Projects
    - New Projectでcloud / local projectの前回選択を記憶するようになった
    - source control providerを選ばない操作が分かりやすくなった
- Custom Templates
    - 必要なEditor versionが未インストールのtemplateから、Editor installを開始できるようになった
    - Windows / UNC path上のtemplate thumbnail pathの修正
- General
    - Unity Hubの別インスタンスを開く際のクラッシュ修正
    - analytics opt-out preferenceの永続化修正
    - Linuxでの一時ファイル処理改善

### The Asset Store Summer Sale is LIVE

[The Asset Store Summer Sale is LIVE - News & General Discussion - Unity Discussions](https://discussions.unity.com/t/the-asset-store-summer-sale-is-live/1722778)

Unity Asset StoreのSummer Sale開始がアナウンスされています。

4週間にわたり、ツール・環境・キャラクター・VFX・オーディオなど幅広いカテゴリの400以上のアセットが50%オフになります。また、日替わりのFlash Dealsでは最大90%オフのセールも行われるとのことです。

### アーティストのための2Dゲームアート、アニメーション、ライティング（Unity 6.3 LTS版）

[アーティストのための2Dゲームアート、アニメーション、ライティング（Unity 6.3 LTS版） - ユニティ・テクノロジーズ・ジャパン](https://unity3d.jp/game/2d-game-art-animation-lighting-unity-6-3-lts-2)

Unityの2Dゲーム開発向けeBook「アーティストのための2Dゲームアート、アニメーション、ライティング」がUnity 6.3 LTS対応版としてアップデートされています。

このガイドでは、『Dragon Crashers』『Happy Harvest』『Gem Hunter Match』、2Dと3Dを融合した『Bunny Blitz』のアセットやシーンを題材に、2Dプロジェクトのセットアップ、スプライト、スケルタルアニメーション、2Dゲームでの3Dアセット活用、2Dライティングやシャドウ、タイルマップ、プラットフォーム向け最適化などを扱っています。

### ゲーム・オブ・スローンズのモバイル版ウェスタロスを建設する：ドラゴンファイア

[ゲーム・オブ・スローンズのモバイル版ウェスタロスを建設する：ドラゴンファイア - Unity Blog](https://unity.com/ja/blog/building-westeros-for-mobile-in-game-of-thrones-dragonfire)

WB Games Bostonが開発するモバイル向けタイトル『ゲーム・オブ・スローンズ：ドラゴンファイア』について、ロード時間やメモリ使用量、コンテンツ配信、レンダリングなどの最適化に関する取り組みを紹介しています。

この記事では、初回セッションで必要なデータ量を抑えるための段階的ロード、カスタムプロファイリングイベントをCSVやChrome trace / OpenTelemetry traceへ変換する調査、Unity Profiler / Profile Analyzer / Memory Profiler / RenderDocを用いた分析などが紹介されています。

また、2000×4000の大規模マップをロードする際の最適化や、マップデータのチャンク化、Terrain GameObjectを直接メッシュレンダリングへ置き換える最適化、バイオームや共有アセット単位でAssetBundleを構成する考え方にも触れられています。


## Events

### Unity 物理 完全に理解した 勉強会

[Unity 物理 完全に理解した 勉強会 - connpass](https://unity-fully-understood.connpass.com/event/393961)

Unityユーザーコミュニティ主導の「Unity 〇〇完全に理解した勉強会」の物理回が、2026/06/19に開催されます。


## Articles

### BannedApiAnalyzers.Unity を公開しました

[BannedApiAnalyzers.Unity を公開しました - やらなイカ？](https://www.nowsprinting.com/entry/2026/06/13/182911)

このブログの著者が開発する、Unityプロジェクトで使用を禁止したいAPIをコンパイル時に検出するためのRoslynアナライザ「[BannedApiAnalyzers.Unity](https://github.com/nowsprinting/BannedApiAnalyzers.Unity)」について紹介しています。

「Microsoft.CodeAnalysis.BannedApiAnalyzers」と比較して、UnityのAdditional files機能で読み込める `<Filename>.BannedApiAnalyzers.Unity.additionalfile` を設定ファイルとして使うことで、`.csproj` ファイルを書き換えずに禁止APIを指定できることや、NuGetForUnity / UnityNuGetでの導入方法について説明しています。

### Unity 6.5で、長らくObsoleteだったrigidbodyなどのプロパティーが完全に削除される

[Unity 6.5で、長らくObsoleteだったrigidbodyなどのプロパティーが完全に削除される - Qiita](https://qiita.com/RyotaMurohoshi/items/9260ca789e127e02a681)

Unity 6.5で、長らく `Obsolete` 扱いだった `Component.rigidbody` や `GameObject.rigidbody` などのプロパティが削除されることについて紹介しています。

Unity 6.4まではAPI Updaterによって `GetComponent<T>()` への書き換えが促されていましたが、Unity 6.5以降は該当プロパティが存在しないため、事前に明示的な `GetComponent<T>()` 呼び出しへ修正する必要があることに触れています。

### Unityで作るUIアニメーションの方法と知識

[Unityで作るUIアニメーションの方法と知識 - 株式会社ロジカルビート](https://logicalbeat.co.jp/blog/25042/)

Unityを触り始めた2Dデザイナー向けに、UnityでUIアニメーションを作成する方法について紹介しています。

この記事では、AnimatorコンポーネントとAnimationコンポーネントを使ったAnimationClipの再生方法や、ImageとSpriteRendererの違い、画面比率に対応したアニメーションの作り方などを説明しています。

### Unity大規模プロジェクトでのAddressable化によるパフォーマンス最適化

[Unity大規模プロジェクトでのAddressable化によるパフォーマンス最適化 - Zenn](https://zenn.dev/applibot_tech/articles/57867c4d40b20e)

大規模なUnityプロジェクトにおいて、Resourcesベースのアセット管理からAddressablesへ移行し、常駐メモリを削減した取り組みについて紹介しています。

記事では、`Resources.Load` を利用していたUI要素のロードをAddressables化した背景として、ResourceManagerが常時60MB強のメモリを占有していたことに触れ、Addressables化の方針、移行時に気をつけた点、測定結果などを解説しています。

### Unity DOTS 勉強するで第3話 JOBって何ぞや

[Unity DOTS 勉強するで第3話 JOBって何ぞや - Zenn](https://zenn.dev/saikoukiroku/articles/03304cbf189756)

Unity DOTSでボイドを動かすサンプルを題材に、`IJobEntity` を用いたジョブの使い方について紹介しています。

この記事では、`ScheduleParallel`、`state.Dependency`、`NativeArray` の `TempJob` 確保とDisposeなど、ジョブをSystem側から扱うときの流れを説明しています。
