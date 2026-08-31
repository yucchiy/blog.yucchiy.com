---
type: unity-weekly
title: Unity Weekly 286
description: >-
  2026/08/31週のUnity Weeklyです。Unite Seoul 2026基調講演でのUnity 7発表、Unity Compute Light Baker、WebGPUの正式機能化、モバイルサンプルプロジェクトPiñata Popなどを紹介しています。
pubDatetime: 2026-08-31T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unite Seoul 2026 Keynote Recap: Announcing Unity 7

[Unite Seoul 2026 Keynote Recap: Announcing Unity 7 - Unity Blog](https://unity.com/blog/unite-seoul-keynote-2026-recap)

Unite Seoul 2026の基調講演で発表されたUnity 7をはじめとする各種アナウンスをまとめた公式のリキャップ記事です。開発中の機能・時期を含むため、内容は変更される可能性があると注記されています。

- Welcome to Unite Seoul 2026: Unity CEO Matthew Bromberg sets the stage
    - CEOのMatthew Bromberg氏がUnity 7を発表した。Unity 6からのbreaking changesなしの直接の継続で、Unity 7 Previewは12月、正式リリースは来年Q1を予定し、一部機能は先行してベータで提供される
- Inside the Engine: CoreCLR and the push for faster iteration
    - Unity 7でCoreCLRを搭載し、.NET 10とC# 14、MSBuild対応を含むモダンな.NETエコシステムへアクセスできるようになる。ドメイン全体でなく必要な部分だけを再読み込みする新しいコードリロードモデルも導入する
    - Unity 6.6以降ではFast Enter Play Modeが新規プロジェクトのデフォルトになる（LORDNINE: Infinite Classで2.7倍、Deep Rock Galactic: Survivorで4.7倍のPlay Mode進入の高速化を紹介）
    - CoreCLR移行に向けて人気Asset Storeパッケージ68個の互換性テスト、[アップグレードガイド](https://discussions.unity.com/t/path-to-coreclr-2026-upgrade-guide/1714279)の公開、Unity 6へのProject Auditor統合を実施済みで、Discussionsとバグトラッカーでのフィードバックを募っている
- Graphics: Real-time global illumination, a new 2D toolset, and Neural Rendering in Unity 7
    - URP向けの完全に動的なglobal illuminationであるSurface Cache GIを初公開した。ベイク不要で間接光が即時更新され、動的ジオメトリにも対応する。6.7 alphaでプレビューでき、Unity 6.7 LTSで広く提供される
    - Unity 6.6でDirectX Shader Compiler（DXC）によるDX12向けシェーダーコンパイルに対応し、Unity 6.7ではシェーダービルド時間を最大90%削減するFast Build Profileが加わる
    - 2Dでは新サンプルBunny Blitz、マルチスレッドのPhysics Core 2D（Box2D v3ベース）、GameObjectのオーバーヘッドなしに大量のスプライトを描画するRenderSprite API、新しい2Dプロファイラーを紹介した
    - ニューラル推論をURPのcomputeパイプラインへ持ち込むUnity Neuralを発表した。強化されたUpscaler FrameworkとNeural Texture Compression（NTC）を含み、Unity 6.7からロールアウトが始まる
- Platform reach: A new partnership, XR devices, and a first look at Unity inside Unreal
    - Metaとのパートナーシップ深化によるQuest向けAI支援ワークフロー、Google Android XRエコシステムのXREAL AURA対応を紹介した
    - Unite Barcelonaで発表したEpic Gamesとのパートナーシップの初の公開技術デモとして、Unityでシミュレートしたゲームを Unreal Engine がリアルタイムに描画する様子を披露した（PolySpatialというクライアント・サーバー型のプロトコルで同期。2027年の早期アクセスに向けた[申し込みフォーム](https://create.unity.com/unity-on-fortnite-unreal-interest-form)を受付中）
- Grow your game: Unity Vector's next phase focused on creatives and agentic capabilities
    - Unity Adsの基盤であるUnity Vectorについて、AIによる広告クリエイティブ生成・最適化のワークフローと、自然言語でキャンペーンを管理できるUnity Ads MCP、対話型AIエージェントのCampaign Assistantを年内に提供する計画を発表した
- IAP SDK 5.4: Native Direct-to-Consumer Commerce Comes to Unity
    - Unity IAP SDK 5.4でdirect-to-consumer（D2C）コマースが利用可能になった。Web決済レイヤーによるゲーム内チェックアウトと、ノーコードのwebshopビルダーの2通りを提供し、決済プロバイダーとしてStripeとCodaに対応する（Stashも近日対応）
- Real-time 3D collaboration with Unity Studio
    - ブラウザベースのStudioエディタがリアルタイムのマルチユーザーコラボレーションに対応した。Asset ManagerのSelf-Hosted Cloudオプション（AWS / Azure接続）とPipeline Automationも発表した
- Production pipelines and CLI: Opening the Editor to everyone
    - Unity CLIとUnity MCP serverを誰でも無料・サブスクリプション不要で利用できるようにすると表明した。Webダッシュボード、CLI、プロジェクトレベルのRBAC、Web経由のアップロードなどはクローズドベータを受付中で、Unity 6以上で動作する
- Wrap-Up: Unity 7 and what comes next
    - 締めくくりとして、リビルドや再デプロイなしにコード変更が実機へほぼリアルタイムに反映されるlive code iteration on deviceのライブデモを披露した

### New Unity Compute Light Baker available in 6.6

[New Unity Compute Light Baker available in 6.6 - Graphics Product Updates - Unity Discussions](https://discussions.unity.com/t/new-unity-compute-light-baker-available-in-6-6/1734762)

Unity 6000.6.0a3で新しいライトベイキングエンジンUnity Compute Light Bakerが追加されたことを告知するディスカッションです。

[Scriptable Render Pipelines Core](https://docs.unity3d.com/Packages/com.unity.render-pipelines.core@17.5/manual/index.html)パッケージとUnity Compute shader、[Unified Ray Tracing API](https://docs.unity3d.com/Packages/com.unity.render-pipelines.core@17.5/manual/UnifiedRayTracing/unified-ray-tracing-api.html)を活用してライトマップ・ライトプローブ・adaptive probe volumeデータを生成するもので、6000.7で提供予定の動的GIソリューション（Surface Cache GI）と同じ技術スタックにより実装されているとのことです。

- 現在はオプトインで、Project Settings / Graphics / Default Light Bakerから有効化する。
    - Unity 7サイクルで新規プロジェクトのデフォルトになる
- 挙動の違いによりライティング設定の軽微な変更が必要な場合があり、詳細は[Unity Compute Light Baker user manual](https://docs.google.com/document/d/1JQYAPP-Sq8wPnKT3BPF26Bg6qZO-H6O4ohi0vZLtidc/edit?tab=t.0#heading=h.n6hcgaugb9kl)にまとまっている
- CPU/GPU Progressive Lightmapperは非推奨化の方向に
    - Unity 7サイクルでCPU Lightmapperは削除され（利用プロジェクトはUnity Compute Light Bakerへアップグレード）、Progressive GPU Lightmapperの既存プロジェクトは継続利用できるが、2027年を通してUnity Compute GPU Light Bakerへ移行される
- 非推奨化はメンテナンスコストと、Rosettaエミュレーション終了後にmacOSのARM CPUアーキテクチャをサポートできないことが理由としている
    - 影響を確認する[アンケート](https://docs.google.com/forms/d/e/1FAIpQLSfP_1GDysJv1wg7jJokXor-wXKdYP2VEE_NCPkZ6BcAcYF7ag/viewform?usp=header)を実施している

### WebGPU out of experimental in Unity 6.6

[WebGPU out of experimental in Unity 6.6 - Web - Unity Discussions](https://discussions.unity.com/t/webgpu-out-of-experimental-in-unity-6-6/1734694)

Unity 6000.6でWebGPUグラフィックスAPIがexperimentalを脱して、標準サポート対象の正式機能になったことを告知するディスカッションです。

- What "out of experimental" means
    - compute shaderを筆頭にモダンなGPU機能セットをブラウザにもたらす
    - ただしデフォルトでは無効で、Web Player settingsのGraphics APIsリストへの追加が必要（WebGL 2が当面デフォルトのまま）
- Features unique to WebGPU on the Web
    - GPU Resident Drawing / GPU Occlusion Culling、Spatial-Temporal Post-processing（STP）、VFX Graph、Adaptive Probe Volumes（APV）、Compute SkinningなどWebGLでは動かない機能がブラウザで動作する
- Graphics Device Filtering: control your fallback
    - Unity 6.6の新機能[Graphics Device Filtering](https://docs.unity3d.com/6000.6/Documentation/Manual/webgpu-intro-device-filter-asset.html)で、特定のデバイスやドライバでWebGPUを許可・拒否するルールを定義し、WebGLへのフォールバック条件を制御できる
- Compatibility mode
    - フルの「core」モードを扱えない古いグラフィックスハードウェア向けに、軽量版のAPIである互換モードを用意している
    - WebGPUが使えない環境では自動で互換モードへフォールバックするため、開発者側の追加作業なしに、WebGLまで落とさずWebGPUのままより広いデバイスへ届けられる

過去の経緯として[早期アクセス](https://discussions.unity.com/t/early-access-to-the-new-webgpu-backend/933493)と[Unity 6.1でのexperimental公開](https://discussions.unity.com/t/public-access-to-webgpu-experimental-in-unity-6-1/1572462)のアナウンスも参照されています。

### Help us refine addressables and AssetBundles!

[Help us refine addressables and AssetBundles! - Asset & Content Management Product Updates - Unity Discussions](https://discussions.unity.com/t/help-us-refine-addressables-and-assetbundles/1734679)

AddressablesやAssetBundleに精通したユーザーに、コンテンツパイプラインの改善へ協力を呼びかけるディスカッションです。

大規模なライブラリを管理している、独自のワークアラウンドを構築している、現状の問題点に強い意見があるといったユーザーを対象に、プライベートなUnityグループスペースで開発中のプロダクト（今後のcontent directoriesを含む）への意見を求めています。
参加者はコンテンツパイプラインの将来と優先順位へ直接影響を与えられ、構築中の機能への早期アクセスを得られるとしています。参加希望は[フォーム](https://forms.gle/873r4Yase99MuDky9)から受け付けています。

### Piñata Pop - Mobile Sample Project Available Now

[Piñata Pop - Mobile Sample Project Available Now - Technical Articles - Unity Discussions](https://discussions.unity.com/t/pinata-pop-mobile-sample-project-available-now/1734688)

Unityのモバイル・マネタイズ機能の実装リファレンスとなる新しいサンプルゲーム[Piñata Pop](https://assetstore.unity.com/packages/templates/packs/pinata-pop-mobile-sample-project-386952)の公開を告知するディスカッションです。

- Touch input: Input Systemによるタッチ入力と同時入力の扱い
- Gyroscope / motion: 加速度センサーでデバイスの傾きをゲームプレイに反映
- Ads monetization via LevelPlay: リワード・バナー・インタースティシャル広告の配置ロジックとコールバック
- In-app purchases: 消費型・非消費型のカタログをIn-App Purchasingで一元管理
- UI: SafeArea APIでノッチやパンチホールを避けるuGUIの実装
- Localization: フランス語・スペイン語・オランダ語・英語の文字列とアセットのローカライズ
- Local Notifications: ローカル通知によるリテンション施策

商用・趣味プロジェクトへの再利用が可能で、[Unity Play](https://play.unity.com/en/games/41088e19-1fc7-4bf5-a6fe-e15473a9f515/pinata-pop-mobile-sample-project)でそのままプレイもできます。チュートリアルとLearnコースも開発中とのことです。

### New UVCS 11.0.16.10371 release!

[New UVCS 11.0.16.10371 release! - Unity Version Control - Unity Discussions](https://discussions.unity.com/t/new-uvcs-11-0-16-10371-release/1734678)

Unity Version Control（UVCS）[11.0.16.10371](https://www.plasticscm.com/download/releasenotes/11.0.16.10371)のリリースを告知するディスカッションです。今回はDesktop GUI中心の更新としています。

- All platforms — Desktop GUI: Show hidden branches in the Branch Explorer
    - Branch Explorerの「Other」フィルターに「Show hidden」トグルが追加され、隠しブランチを低い不透明度で図中に表示できるようになった
- All platforms — Desktop GUI: "Merge to" is now enabled when you are not in a workspace
    - ソースをworkspaceへロードせずサーバー上で直接マージする「merge to」が、workspaceを開いていない状態でもブランチ・チェンジセット・ラベルの右クリックメニューから実行できるようになった（CLIの`cm merge`の`--to` / `--destination`オプションに相当）
- Bug fixes
    - 1行が極端に長いファイル（1行のhexとしてシリアライズされたバイナリブロブを含むUnity YAMLアセットなど）のdiffを開くと数秒フリーズする問題を、先頭数千文字+省略マーカーの描画に変えて修正した
    - side-by-side diffでブロック選択を中央のスプリッターをまたいでドラッグするとクラッシュする問題を修正した
    - Pending ChangesタブのShelves一覧が初回ロード時の日付を表示し続ける問題を修正した

インストーラーは[UVCSのドキュメント](https://docs.unity.com/en-us/unity-version-control/installation-landing)と[Plastic SCMのダウンロードページ](https://www.plasticscm.com/download)から入手できます。

### How to reimagine a classic sports game for a new generation with level design, worldbuilding, and VFX

[How to reimagine a classic sports game for a new generation with level design, worldbuilding, and VFX - Unity Blog](https://unity.com/blog/reimagining-backyard-baseball-3d-level-design-and-environment-art)

1997年の2Dゲーム『Backyard Baseball』を3Dで再構築したMega Cat Studiosが、レベルデザインと環境アートの取り組みを解説する記事です。同スタジオによる技術Tipsシリーズの第3弾です。

- Design for readability
    - 読みやすさを最終仕上げでなく基礎的なデザイン要件として扱い、前景・中景・背景を色・コントラスト・ライティングで分離
- Props and world-building
    - リプレイや別カメラに対応するため各フィールドを360°の環境として作り込み、頂点数の管理とマテリアル共有で最適化
- Decals for environmental detail
    - UnityのDecal Renderer Featureで摩耗・汚れ・ひび・足跡を表現し、一貫性・正確さ・ブレンド・繊細さを考慮して設定
- Interactive VFX
    - ボールが環境に当たると照明が明滅したり茂みからリスが飛び出したりする、スクリプトされたリアクションのシステムを構築
- Blending materials / Lighting
    - マテリアルブレンドの調整と、プレイエリアを鮮明に保ちつつフォグで距離感を作るライティングで、昼夜どちらでも統一感を保つ

### Deploying and optimizing UG for Meta Quest

[Deploying and optimizing UG for Meta Quest - Unity Blog](https://unity.com/blog/deploying-and-optimizing-ug-for-meta-quest)

Meta Quest向けマルチプレイヤーVRゲーム『UG』のデプロイと最適化について、Continuum XRの開発者へのインタビュー記事です。

ネットワーキングにはPhoton Fusion 2 Shared Modeを採用し、Unity Version Controlのブランチ運用とUnity Hub + Meta Quest Developer Hubでのビルド・配布、Mixpanelダッシュボードによるエラー監視を組み合わせています。
Unity 2021.1からUnity 6への移行は安定性とFusionとの相性を理由に行い、約1週間で主な問題を解決したとのことです。

パフォーマンス面では72fpsを目標にUnity ProfilerとMetaのダッシュボードで監視し、シーン検索APIの呼び出しが多数のオブジェクトがあるシーンでスタッターを起こしていた事例や、1フレームに複数のネットワークオブジェクトをspawnしていた事例をProfilerで特定・解決した経験を紹介しています。
ターゲットを絞ったビルドを小規模なコホートへ10分以内に配信できるQAワークフローが安定性の鍵だと述べています。

### How Limbitless Solutions is redefining adaptive sports with real-time 3D

[How Limbitless Solutions is redefining adaptive sports with real-time 3D - Unity Blog](https://unity.com/blog/limbitless-solutions-facial-powered-play-adaptive-sports-wheelchair-mobility)

University of Central Floridaの非営利研究組織Limbitless Solutionsが開発する、顔の筋肉の動きだけで操作できるアダプティブEMGコントローラーProject Xavierを紹介する記事です。
Unity for Humanity Awards 2026でHonourable Mentionに選ばれています。

顔の筋肉の動きを入力としてデジタルスポーツ環境を操作できるようにし、進行性の神経筋疾患を持つ人が競技へ参加しながら、電動車椅子の操作に必要な空間認識や精密な制御のスキルを同時に練習できる設計になっています。
リハビリと競技・遊びを分離せず1つの体験に統合している点と、プラットフォーム全体を無料で提供している点が特徴として挙げられています。

### A day in the life of an industrial designer running collaborative design reviews, without endless revision cycles

[A day in the life of an industrial designer running collaborative design reviews, without endless revision cycles - Unity Blog](https://unity.com/blog/unity-studio-collaborative-design-review-without-endless-revisions)

Unity Studioを使ったインタラクティブなデザインレビューを、架空のインダストリアルデザイナーの1日として描く記事です。

CADデータをUnity Studioへドラッグ&ドロップしてブラウザで探索できるレビュー環境を作り、現実的な環境・ライティング・ガイド付き視点を整えたうえで、エンジニアリング・マーケティング・リーダーシップへブラウザリンクを共有して同じインタラクティブな体験をレビューする流れを紹介しています。
静的なレンダリング画像やスライドでのレビューで起きる曖昧なフィードバックや手戻りを減らし、全員が同じデザインを見て議論できることを利点として挙げています。


## Articles

### ColorにorangeやskyBlueなど、140色以上のプリセットが一気に追加【Unity】

[ColorにorangeやskyBlueなど、140色以上のプリセットが一気に追加【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Color_New)

Unity 6.1で`Color`構造体に146個の色プリセットが追加されたことを紹介する記事です。

Unity 6.0までは`Color.red`など11個（実質10色）だったプリセットが、`Color.darkRed`や`Color.coral`、`Color.skyBlue`など.NETの色定義に基づくHTML/CSS標準の色名で大幅に拡充され、カラーピッカーからも参照できるようになったことを示しています。

### Custom Editors | Unity Shader Code Basics 08

[Custom Editors | Unity Shader Code Basics 08 - Daniel Ilett](https://danielilett.com/2026-08-27-tut10-08-custom-editors/)

Unity Shader Code Basicsシリーズの第8回として、マテリアルのインスペクターGUIを完全にカスタマイズするShaderGUIベースのカスタムエディタの実装を解説する記事です。

PBRシェーダーにopaque/transparentの切り替えやアルファクリップなどのプロパティを追加し、`ShaderGUI`を継承したクラスで`MaterialHeaderScopeList`によるセクション分け、enumとpopupによるプロパティ描画、選択に応じたブレンドモード・シェーダーキーワード・描画パスの動的な切り替えまでを実装しています。

### 増え続ける3Dアセットに悩む方へ。家具の品質管理を自動化するバリデータ導入事例

[増え続ける3Dアセットに悩む方へ。家具の品質管理を自動化するバリデータ導入事例 - REALITY株式会社（note）](https://note.com/reality_eng/n/n28a876fd80e6)

REALITYのTAチームが、大量に制作される家具3Dアセットの品質確認を自動化するバリデータの導入事例を紹介する記事です。

月4本の家具ガチャ（約600アセット）の手動確認の負担を背景に、アセットのファイル構成、ファイルの命名（AIを活用したスペルミス検出を含む）、テクスチャのサイズ、prefabの構成、`AssetDatabase.GetDependencies`による外部依存性のチェックを、GitHubのPull Request作成時に実行する運用を解説しています。

### UIプレハブを一元管理・自動生成するUnityエディタ拡張の設計と実装

[UIプレハブを一元管理・自動生成するUnityエディタ拡張の設計と実装 - Sumzap Engineering Blog](https://tech.sumzap.co.jp/entry/unity-ui-registry-editor-extension)

UIプレハブの登録・管理・生成コードの自動生成を1つのエディタウィンドウに集約するエディタ拡張「Spica.UIRegistry」の設計と実装を解説する記事です。

Group・Items・Previewの3ペイン構成のエディタウィンドウ、`ScriptableSingleton`によるProject Settingsへの設定保存、`ReorderableList`での並び替えと重複登録の防止、`PreviewRenderUtility`によるCanvas有無両対応のプレビューとEditModeでのアニメーション再生確認、テンプレート置換による`MenuItem`付き生成コードの自動出力までを、コード例とともに紹介しています。

### Unity IAP v5 イベントの発生タイミングについて調べてみた

[Unity IAP v5 イベントの発生タイミングについて調べてみた - 株式会社ロジカルビート](https://logicalbeat.co.jp/blog/25051/)

Unity 6.2とUnity IAP 5.0.4の環境で、Unity IAP v5の各イベントが発生するタイミングを正常フローとエラー時の両方で整理した記事です。

初期化・購入・リストアの正常フローでの`OnPurchasePending`から`ConfirmPurchase`、`OnPurchaseConfirmed`までの流れに加え、ストア側の決済の前後どちらで切断されたかによる挙動の違いを検証しています。特に決済後に切断された場合、未完了のトランザクションがアプリ起動時・リストア時・別商品の購入時に`OnPurchasePending`として割り込んでくる点に注意が必要だとしています。
