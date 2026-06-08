---
type: unity-weekly
title: Unity Weekly 275
description: >-
  2026/06/08週のUnity Weeklyです。Managed Code Variant、Unity IAP v5 Custom Store、Platform Toolkit 1.1.0、Project Auditor in Unity 6.5などを紹介しています。
pubDatetime: 2026-06-08T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity to Deprecate Intel-based Mac Support Starting with Unity 6.6

[Unity to Deprecate Intel-based Mac Support Starting with Unity 6.6 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-to-deprecate-intel-based-mac-support-starting-with-unity-6-6/1721740)

[AppleのIntelベースのMacサポート縮小](https://support.apple.com/en-us/122867)に伴って、Unity 6.6およびUnity 6.7でIntelベースのMacサポートが廃止され、Unity 6.8以降では利用できなくなる予定であることが告知しています。

サポートが終了するコンポーネントは下記の通りです。

- Intel macOS (x86_64) 版 Unity エディター
- Intel (x86_64) 版 macOS スタンドアロン プレイヤー
- iOSおよびtvOS x86_64とユニバーサルシミュレーター

また、Apple Silicon (arm64) 版については引き続きサポートが行われ、またUnity6.5では macOS版Unityエディターが完全な公証(Notarization)を受けたことについても言及しています。

### UNITY_64 and DEVELOPMENT_BUILD deprecation and Managed Code Variants

[UNITY_64 and DEVELOPMENT_BUILD deprecation and Managed Code Variants - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-64-and-development-build-deprecation-and-managed-code-variants/1721546)

Unity 6.6で `UNITY_64` と `DEVELOPMENT_BUILD` のスクリプティングシンボルが非推奨となり、`DEVELOPMENT_BUILD` の役割を担う新しいPlayer Settingとして「Managed Code Variant」が導入されることが告知されています。

このディスカッションでは、これらのシンボルが非推奨になった理由から、新しく追加される「Managed Code Variant」のそれぞれのバリアントで設定されるスクリプティングシンボルについての紹介、既存のシンボル（`UNITY_64`・`DEVELOPMENT_BUILD`）がUnity 6.8で完全に削除される予定である点などをそれぞれ紹介しています。

また、Unityの内部パッケージも既存のシンボルを利用していたためManaged Code Variantによってどのように影響を受けるかや、既存のシンボルを使っていた開発者向けにコードの修正方法などにも言及しています。

[Managed Code Variantsについてはこちらのドキュメント](https://docs.unity3d.com/6000.6/Documentation/ScriptReference/ManagedCodeVariant.html)で詳細を確認できます。

### Tutorial: Unity IAP v5 Custom Store Amazon Appstore Integration for Fire Tablets

[Tutorial: Unity IAP v5 Custom Store Amazon Appstore Integration for Fire Tablets - Unity Services - Unity Discussions](https://discussions.unity.com/t/tutorial-unity-iap-v5-custom-store-amazon-appstore-integration-for-fire-tablets/1721816)

Unity IAP v5のCustom Storeを利用して、Fireタブレット向けにAmazon Appstore統合を行うチュートリアルが公開されています。

[Unity IAP v5 Custom Store Tutorial: Amazon Appstore Integration](https://support.unity.com/hc/en-us/articles/49666577333012-Unity-IAP-v5-Custom-Store-Tutorial-Amazon-Appstore-Integration)

このサポートページでは、Custom Storeを用いてAmazon Appstore統合を行う方法を紹介したPDFや実際のコードを含んだ `unitypackage`、ビデオ解説を含んでいます。

### Platform Toolkit 1.1.0 Update is now available

[Platform Toolkit 1.1.0 Update is now available - Unity Engine - Unity Discussions](https://discussions.unity.com/t/platform-toolkit-1-1-0-update-is-now-available/1721834)

Platform Toolkit 1.1.0のアップデート内容を告知するディスカッションです。

Platform Toolkit 1.1.0では、主に下記の機能が追加されるとのことです。

- PlayStation®4 Platform Support
- Play Mode Controls - Attributes
    - Play Mode Controlsに、テストアカウントに対してAttributesの値を設定できるようになった
- Play Mode Controls - Storage warnings
    - Play Mode Controlsに、ストレージAPIの操作の頻度などに対して警告を出す機能が追加された
- Steam Extensions API
    - 拡張として `SteamCallbacks` が追加され、Platform Toolkitが提供していないAPIに対しての連携が行えるようになった
    - ドキュメント: [Platform-specific reference | Platform Toolkit for Steam | 1.1.0](https://docs.unity3d.com/Packages/com.unity.platformtoolkit.steam@1.1/manual/platform-details.html)
- Build Profile Support
    - Build Profileをサポートし、例えばWindowsプラットフォーム対してSteamtおGDKなど複数のプロファイルを作ることができるようになった

### Project Auditor in Unity 6.5

[Project Auditor in Unity 6.5 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/project-auditor-in-unity-6-5/1722242)

Unity 6.5でのProject Auditorのアップデート内容を告知するディスカッションで、下記の機能追加が紹介されています。

- コード解析が改善され、解析対象のコードの選択オプションが増え、自社コードが除外されるようになった
- 廃止されるAPIの検出が改善され、廃止されたAPIの使用状況の一覧が表示されたり、将来のバージョンで廃止されるAPIも確認できるようになった
- 共通の分析設定がProject Auditorのスタート画面で表示されるようになった
- 新しいGameObjectの解析が追加され、シーンやプレハブ上のGameObjectを分析する機能が追加された
- 非同期分析が実装され、Project Auditorの分析中にエディターをブロックしなくなった

### Unity IAP packages 5.3.1 and 4.15.1 are now available

[Unity IAP packages 5.3.1 and 4.15.1 are now available - Unity Services - Unity Discussions](https://discussions.unity.com/t/unity-iap-packages-5-3-1-and-4-15-1-are-now-available/632966/214)

Unity IAP 5.3.1および4.15.1が公開されたことをアナウンスしています。

- 5.3.0
    - エディター上でのドメインリロード無効化のサポート
    - Xbox Store for Xbox Series・Xbox One・Windowsのサポート
         - [Getting started with Unity - Microsoft Game Development Kit | Microsoft Learn](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/get-started-with-unity-pc/gdk-unity-end-to-end-guide?view=gdk-2510)
    - Unity IAP 4から5へのアップデートのAIスキルの追加
    - Swift 6 strict concurrency warningsの対応
    - StoreKit v1バックエンド選択時に、購入履歴がない時にRestorePurchases・FetchPurchasesが発火しない不具合の修正
    - visionOSでデフォルトバックエンドがStoreKit v1になる不具合の修正
    - カタログエディターで空のカタログをエクスポートした時に `IndexOutOfRangeException` が吐かれる不具合の修正
- 5.3.1
    - Microsoft Store Collections serviceを通じたXboxの購入検証のサポート
        - [Unity - Manual: In-app purchases for Xbox games on Windows](https://docs.unity3d.com/6000.4/Documentation/Manual/xbox-games-on-windows-iap.html)
    - プロジェクトがトップレベルの `UnityUtil` 名前空間を後悔するサードパーティパッケージと名前衝突するエラーを修正
    - Google - `FetchProducts` が商品詳細キャッシュを埋める前に `FetchPurchases` が完了した場合に、購入情報が気づかれないまま失われる可能性がある競合状態の修正
    - Google - `AccountIdentifiers` が `null` の所有購入(テスト購入または `SetObfuscatedAccountId` を呼び出さないアプリ)の `GooglePurchase` を構築する際に発生する `NullReferenceException` を投げる不具合の修正
    - Google - 商品に定期購入オファーの詳細がない場合 (定期購入対象外の商品の場合、Google Play から null が返される場合) に `ProductDetailsConverter.BuildProductDescription` で `NullReferenceException` が発生する不具合の修正
    - Google - `QueryPurchasesAsync` から受け取った `Purchase` の参照が非同期境界を越えて無効になり `NullReferenceException` が発生する不具合の修正
- 4.15.1
    - 4.13.0 で誤って消されていた iOSプラグインののVisionOSサポートを修正

Changelogはそれぞれ下記から確認できます。

- [Changelog | In-App Purchasing | 5.3.1](https://docs.unity3d.com/Packages/com.unity.purchasing@5.3/changelog/CHANGELOG.html)
- [Changelog | In App Purchasing | 4.15.1](https://docs.unity3d.com/Packages/com.unity.purchasing@4.15/changelog/CHANGELOG.html)

### Netcode for GameObjects v2.12.0 is now publicly available

[Netcode for GameObjects v2.12.0 is now publicly available - Unity Engine - Unity Discussions](https://discussions.unity.com/t/netcode-for-gameobjects-v2-12-0-is-now-publicly-available/1721808)

Netcode for GameObjects 2.12.0のリリースがアナウンスされています。

このリリースでは、主にTransport層の接続フローの改善と非推奨APIの整理が行われています。

### May - In Case You Missed It

[May - In Case You Missed It - Unity Engine - Unity Discussions](https://discussions.unity.com/t/may-in-case-you-missed-it/1722136)

Unity公式が2026年5月に投稿したブログやUnity Discussions、E-books、YouTubeなどについてまとめられています。

### Games made with Unity: May 2026 in review

[Games made with Unity: May 2026 in review](https://unity.com/ja/blog/games-made-with-unity-may-2026-releases)

2026年5月にリリース・アーリーアクセス開始されたUnity製ゲームや、各ゲームアワードで受賞したUnity製タイトルがまとめられています。

### Optimizing battery life in Monster Walk

[Optimizing Battery Life in Monster Walk](https://unity.com/blog/optimizing-battery-life-in-monster-walk)

リアルタイムの歩数をゲームプレイへ変換するモバイルゲーム『Monster Walk』おいて、プラットフォームの制約やバッテリー消費を抑えながらバックグラウンドの歩数データを扱うために行った設計や実装を紹介しています。


## Articles

### 現代の GPU アーキテクチャとシェーダー最適化の考え方

[現代の GPU アーキテクチャとシェーダー最適化の考え方 - Zenn](https://zenn.dev/ruccho/articles/shader-optimization)

現代のGPUアーキテクチャーを前提としたシェーダー最適化の考え方を整理しています。

ボトルネックの特定方法からレジスタや共有メモリの節約、メモリアクセス、タイルメモリ、16ビット演算、分岐の扱いなど、実装時に意識する観点がまとめられています。

### 【VFX】エフェクト用メッシュはブラウザで作る！ Effect Mesh Generator を作りました

[【VFX】エフェクト用メッシュはブラウザで作る！ Effect Mesh Generator を作りました - Qiita](https://qiita.com/big615big615/items/cd051afd14ecc9d61e27)

この記事の著者が開発する、UnityのVFX制作で使うエフェクト用メッシュを、MayaやBlenderを開かずにブラウザ上で生成するツール「[Effect Mesh Generator](https://big615big615.github.io/EffectMeshGenerator/)」について紹介しています。

### Unity Project Auditorを使って“なんとなく重そう”を機械的に洗い出す

[Unity Project Auditorを使って“なんとなく重そう”を機械的に洗い出す - Qiita](https://qiita.com/matsu_r11/items/2e17b2c1d57b9fe80617)

Project Auditorの概要から起動方法、検証用のコードでどのような検出が行われるのか、触ってみた所感について紹介しています。

### Unity 6.5 で BlendLightingScenario が動かない原因: ProbeReferenceVolume 初期化遅延

[Unity 6.5 で BlendLightingScenario が動かない原因:ProbeReferenceVolume 初期化遅延 - Zenn](https://zenn.dev/shintama/articles/unity-apv-webgpu-blending-timing)

Unity 6.5でAdaptive Probe VolumesのLighting Scenario Blendingを検証する中で、`ProbeReferenceVolume` の初期化タイミングにより `BlendLightingScenario` が期待通り動作しないケースの調査と対応方法を紹介しています。

## Repositories

### BoundingBoxSoftware/CharacterController

[BoundingBoxSoftware/CharacterController](https://github.com/BoundingBoxSoftware/CharacterController)

Unity標準のCharacterControllerではケアできない多くのエッジケースに対応することを目的に実装された独自のCharacterController実装。
