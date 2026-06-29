---
type: unity-weekly
title: Unity Weekly 278
description: >-
  2026/06/29週のUnity Weeklyです。Unity 6.7 Alpha、Unity DevOps Build Automationの依存関係非推奨化、Unity Hub 3.19 beta、Netcode関連パッケージ更新、IAP4からIAP5への移行、Managed Code VariantとDEVELOPMENT_BUILDの移行などを紹介しています。
pubDatetime: 2026-06-29T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity 6.7 Alpha is now available

- [Unity 6.7 Alpha is now available - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-6-7-alpha-is-now-available/1724012)
- [Planned breaking changes in Unity 6.7 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/planned-breaking-changes-in-unity-6-7/1723293)

Unity 6.7 Alphaの公開開始と、Unity 6.7で予定されている破壊的変更を紹介するディスカッションです。

予定されている破壊的変更として、下記が紹介されています。

- OculusXR Package Removal
    - Unity 6.5で非推奨になったOculusXRパッケージがUnity 6.7で削除され、Unity 6.7へアップグレードしたプロジェクトではパッケージが自動的に削除される
    - Meta Quest向けにはOpenXR Metaパッケージへの移行が推奨されている
- Windows Player now links the C runtime dynamically
    - Windowsビルドの `UnityPlayer.dll` やゲーム実行ファイル、`UnityCrashHandler64.exe` などが、Microsoft Visual C++ランタイムを静的リンクではなく動的リンクするようになる
- Restrictions on serialized data structure patterns
    - `[Serializable]` な型が自身の型を直接フィールドに持つケースや、相互参照などで循環参照を作るケースが、Unity 6.5では警告だったがUnity 6.7からコンパイルエラーになる
    - 必要な場合は `[SerializeReference]` を使う
- Denoising changes
    - Unity 6.5で非推奨になったOptixデノイザーがUnity 6.7で削除され、OpenImageデノイザーへ自動更新される
    - OpenImageデノイザーはエンジンモジュールへ移動し、`com.unity.rendering.denoising` パッケージのインストールは不要になる
- Input system migrated to built-in package
    - Input SystemがUnity Engineのビルトインパッケージとなる
    - これにより `com.unity.inputsystem` パッケージの存在やasmdefのVersion Defineで有無を判定する実装は壊れるため、Input Systemが有効かどうかは`ENABLE_INPUT_SYSTEM`で判定する必要がある
- Netcode for Entities config singleton now created always
    - Netcode for Entitiesが `NetcodeConfig` を常に自動生成するようになり、`EntityManager.CreateSingleton<NetcodeConfig>()` で明示的に作成するコードは失敗するようになる
    - 取得には `SystemAPI.GetSingleton<NetcodeConfig>()` を使う
- Removed deprecated Android ‘touch outside keyboard’ API
    - Unity 6.0で非推奨になった `TouchScreenKeyboard.Android.consumesOutsideTouches` APIが削除される

### Unity DevOps Build Automation — 2026 Dependency Deprecation Cycle

[Unity DevOps Build Automation — 2026 Dependency Deprecation Cycle - Unity Services - Unity Discussions](https://discussions.unity.com/t/unity-devops-build-automation-2026-dependency-deprecation-cycle/1724029)

Unity Build Automationで利用できる依存関係の2026年の非推奨化の計画をアナウンスするディスカッションです。

非推奨となる依存には2026/06/24から `deprecated` ラベルが付き、2026/08/21に削除予定とのことです。削除時点で対象依存関係を使っているビルドターゲットは、自動的に無効化される可能性があります。

依存関係ごとの計画は以下の通りです。

- OS: Windows 11 22H2の非コンソールビルドターゲットとmacOS Sonoma Siliconを削除し、Windows 11 24H2、コンソールビルドターゲット向けWindows 11 22H2、macOS Sequoiaは継続する
- Xcode: Xcode 15.4.0 / 16.0.0 / 16.1.0を削除し、16.2.0 / 16.3.0 / 16.4.0 / 26.xの安定版は継続する
- Unity: Unity 6000.1.x / 6000.2.x、2022.3.x（2022.3.62f3と2022.3.40f1を除く）、2021.3.x（2021.3.45f2を除く）を削除し、6000.4.x / 6000.3.x / 6000.0.xや一部旧LTSは継続する
- Android SDK: Android SDK 33を削除し、Android SDK 34 / 35 / 36は継続する
- UBA V1 API: 2026/06/24以降の新機能追加はV2 APIのみになり、2026/09/21以降はV1 APIの更新・修正を停止し、2026/12/21頃にV1 APIを削除する

### Now Available: Unity Hub 3.19 beta

[Now Available: Unity Hub 3.19 beta - Unity Engine - Unity Discussions](https://discussions.unity.com/t/now-available-unity-hub-3-19-beta/1724124)

Unity Hub 3.19 betaのリリースを告知するディスカッションです。

このリリースでは、Hubの起動時間改善、古いエディターバージョンのインストール、既存エディターへのモジュール追加をHub内で扱えるようにした点が主な変更です。

リリースノートの主な内容は以下の通りです。

- What’s new
    - Projects
        - 新しいプロジェクト追加画面で「Use AI Assistant」チェックボックスが追加され、有効にするとUnity AIパッケージがプロジェクトに追加される
    - Installs
        - Install EditorダイアログのArchiveタブから古いエディターバージョンを確認・インストールできるようになった
        - ディスク上にある既存エディターへのモジュール追加に対応した
    - General
        - Hub起動性能が最大40%改善され、最近使ったプロジェクトを保存済みスナップショットのロードから先に表示し、エディター詳細やライセンス情報などはバックグラウンドで読み込むようになった
        - フランス語・ドイツ語・ポルトガル語・ロシア語・スペイン語の5言語に対応した
        - サイドナビゲーションの展開状態がセッションをまたいで保存されるようになった
        - 組織がDeveloper Data Frameworkの共有を有効化するためのバナーがトップバナーカルーセルに追加された
        - Hubが、インストール時ではなく初回起動時に利用規約の同意を求めるようになった
- Bug fixes and improvements
    - Projects
        - New Projectでテンプレートの「View Details」を選択した際、古いテンプレートバージョンが入っている場合にパッケージタブに警告を表示し、アップグレードできるようになった
        - プロジェクト作成時に誤った「path too long」エラーが出る問題が修正された
        - すでに開いているプロジェクトに対して、エディター起動時にHubを最小化する設定が反映されない問題が修正された
        - 起動時やフォーカス切り替え時に冗長なプロジェクトサイズスキャンが走る問題が修正された
        - 未インストールのエディターバージョンが必要なプロジェクトを開く際に、LTS選択で正しい最新LTSバージョンが表示されるようになった
    - Installs
        - Windowsでのインストール信頼性が改善され、インストーラーのタイムアウト処理や権限昇格プロンプトのタイムアウト時のダウンロード保持と再試行が改善された
        - Hubから削除した手動インストールエディターが追跡され続け、再追加される問題が修正された
    - Custom templates
        - カスタムテンプレートの読み込み時間が改善された
    - General
        - サインイン中のHubアカウントとアクティブなIDが異なる場合に、Unity Version Control認証が更新されない問題が修正された
        - Windowsで大きな認証情報がOSの認証情報サイズ制限により保存できない問題が修正された
        - サインアウト / サインインやHubアップデートをまたいで分析設定が保持されるようになった
        - 初回起動時にOSロケールからインターフェース言語が正しく検出されない問題が修正された
        - Windowsでエディター起動時のコンソールウィンドウが一瞬表示される問題が修正された
        - Hubが利用するサードパーティ依存関係の削減が継続された

### Netcode for Entities package as part of 6000.5 editor

[Netcode for Entities package as part of 6000.5 editor - Unity Engine - Unity Discussions](https://discussions.unity.com/t/netcode-for-entities-package-as-part-of-6000-5-editor/1723854)

Unity 6000.5からNetcode for Entitiesがエディターに含まれる[コアパッケージ](https://docs.unity3d.com/6000.5/Documentation/Manual/pack-core.html)になったことを紹介するディスカッションです。

6000.5ではスタンドアロンパッケージ1.12.0相当から始まり、その後エディター側のリリースノートや6000.5.2f1のChangelogでNetcode向け変更が追えるようになっています。

Unity 6000.5以降ではエディター同梱のコアパッケージ版を使う必要があり、スタンドアロン版は旧エディター向けに公式サポート期間中のバグ修正やQoL改善がバックポートされる方針です。

6000.5向けの[NetcodeSamples](https://github.com/Unity-Technologies/EntityComponentSystemSamples)は[`6000.5`ブランチ](https://github.com/Unity-Technologies/EntityComponentSystemSamples/tree/NetcodeSamples/6000.5)で更新されており、今後も見つけやすくするために[Netcode for GameObjects repo](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects)に近いミラーリポジトリの検討も行われています。

### Netcode for Entities v1.14.0 is now publicly available

[Netcode for Entities v1.14.0 is now publicly available - Unity Engine - Unity Discussions](https://discussions.unity.com/t/netcode-for-entities-v1-14-0-is-now-publicly-available/1723846)

Netcode for Entities 1.14.0が公開されています。

このリリースは、6000.5以降でコアパッケージ化されたNetcode for Entitiesとは別に、旧エディター向けスタンドアロンパッケージへバグ修正とQoL改善をバックポートする位置づけです。

主な変更は以下の通りです。

- Added
    - `GhostVariantBakedOverride` の動的バッファと `Append...` 拡張メソッドにより、生成コードから `GhostComponentVariation` のデフォルトバリアントをオーバーライドできるようになった
- Changed
    - `GhostAuthoringInspectionComponent` のインスタンスメソッドが `public` になり、オーバーライド項目をコードから作成できるようになった
- Fixed
    - 2つのGhostGroupエンティティが同じ `ArchetypeChunk` を共有する子を持ち、同じスナップショットで送信されると、先の子のスナップショットデータが後続の子で上書きされる問題を修正
    - ネストしたクラス内の `IInputComponentData` に `GhostFields` を追加するとコンパイルエラーになる問題を修正
    - `GhostAuthoringInspectionComponent` で設定した `PrefabType` のオーバーライドが生成済みプレハブに反映されない問題を修正

### Netcode for GameObjects v2.13.0 is now publicly available

[Netcode for GameObjects v2.13.0 is now publicly available - Unity Engine - Unity Discussions](https://discussions.unity.com/t/netcode-for-gameobjects-v2-13-0-is-now-publicly-available/1723847)

Netcode for GameObjects 2.13.0が公開されています。

このリリースは最新エディターとの互換性対応が中心です。

主な変更は以下の通りです。

- Added
    - ドメインリロード無効時のFast Enter Play Mode対応が追加された
- Changed
    - `DEVELOPMENT_BUILD || UNITY_EDITOR` や一部の `DEVELOPMENT_BUILD`シンボル利用が `DEBUG` に置き換えられた
- Deprecated
    - null許容boolの `NetworkObject.IsSceneObject` が非推奨となり、代わりに `NetworkObject.InScenePlaced` が導入された

### Multiplayer Tools 2.2.9 Released

[Multiplayer Tools 2.2.9 Released - Unity Engine - Unity Discussions](https://discussions.unity.com/t/multiplayer-tools-2-2-9-released/1723841)

Multiplayer Tools 2.2.9が公開されています。

このリリースは最新エディターとの互換性対応が中心です。

主な変更は以下の通りです。

- Added
    - ドメインリロードなしのFast Enter Play Mode対応が追加された
- Changed
    - `DEVELOPMENT_BUILD` シンボルが `UNITY_ENABLE_CHECKS` に置き換えられた
- Fixed
    - Unity 6000.5以降のエディターで正しく動くようにNetStatsMonitor APIが更新された

### IAP tutorial series: Upgrading from Unity IAP4 to IAP5

[IAP tutorial series: Upgrading from Unity IAP4 to IAP5 - Technical Articles - Unity Discussions](https://discussions.unity.com/t/iap-tutorial-series-upgrading-from-unity-iap4-to-iap5/1723788)

Unity IAP4からIAP5へ移行する手順を、動画チュートリアルと補足記事として解説しています。

Unity IAP4では、`IStoreListener` / `IDetailedStoreListener` を実装し、`IStoreController` で購入開始や購入確定を行う構成でした。
Unity IAP5では、`UnityIAPServices.StoreController` を中心にイベント購読、`Connect`、`FetchProducts`、`FetchPurchases` を明示的に組み立てる構成へ変わるため、商品取得や購入処理、レシート検証を新しい流れに合わせて移行する方針を示しています。

### Shuriken Particles & Shader Graph

[Shuriken Particles & Shader Graph - Technical Articles - Unity Discussions](https://discussions.unity.com/t/shuriken-particles-shader-graph/1669355/11)

この投稿では、Unity 6.6におけるShuriken Particle SystemをShader Graphで扱うためのURP Particle Shadersの不具合修正と、Particle向けノード、テンプレート、サンプルの整備状況をまとめています。

Unity 6.6のURP Particle Shadersについて、Deferred / Deferred+でParticles LitがライティングやParticle Colorを失う問題、ShadowCaster pass不足、Vertex Streamsの誤設定などの不具合修正を解説しています。

あわせて、DXC対応に向けたParticle Transform処理の整理、[Shader Graph Nodes](https://discussions.unity.com/t/shuriken-particles-shader-graph/1669355/11#shader-graph-nodes)、Particle Graph Templates、サンプル更新が紹介されています。

サンプル更新ではParticle Shader Graph sampleにGPU Instancing、Flipbook Blending、Custom Particle Dataなどの例が含まれ、スレッド本文では[Shuriken Particles Shader Graph Examples](https://github.com/FredMoreau/Shuriken-Particles-Shader-Graph-Examples)も案内されています。

### Unity 6.5 Adds Xbox PC Remote Tools Support, Enabling One-Click Remote Build Deployment to Any Windows Machine

[Unity 6.5 Adds Xbox PC Remote Tools Support, Enabling One-Click Remote Build Deployment to Any Windows Machine - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-6-5-adds-xbox-pc-remote-tools-support-enabling-one-click-remote-build-deployment-to-any-windows-machine/1723298)

Unity 6.5でXbox PC Remote Toolsに対応し、WindowsビルドをリモートWindowsマシンへエディターから直接デプロイできるようになったことをアナウンスしています。

開発機とリモートWindowsマシンの両方にXbox PC Toolboxを入れてペアリングし、Windows Standalone Build ProfileでXbox PC Remote Iterationを選び、リモートマシンのIPを指定すると、フルビルド / インクリメンタルビルドを直接デプロイできます。

Unity DebuggerやProfilerは通常のネットワーク接続されたプレイヤーと同様にアタッチでき、Microsoft GDKは不要で、すべてのUnityライセンスティアで利用できます。

### 6.6 Beta Sweepstakes - Your chance to win a GPU!

[6.6 Beta Sweepstakes - Your chance to win a GPU! - Unity Engine - Unity Discussions](https://discussions.unity.com/t/6-6-beta-sweepstakes-your-chance-to-win-a-gpu/1724096)

Unity 6.6 Betaのバグレポートを促進するための「Beta Sweepstakes」が告知されています。

2026/06/26 6:00 PSTから2026/08/17 23:59 PSTまでの期間中に、`#BetaSweepstakes_6_6` をDescriptionに付けてオリジナルバグを報告すると応募対象になり、NVIDIA GeForce RTX 5070 Ti、AMD Radeon RX 9070 XT、ASUS Dual GeForce RTX 4070 Superが賞品として用意されています。

オリジナルバグは、提出時点で未報告で、かつ、Unityが再現しバグとして認めたものとされています。


## Events

### Shader Graph Masterclass: Shader Implementation

[Shader Graph Masterclass: Shader Implementation - Unity Engine - Unity Discussions](https://discussions.unity.com/t/shader-graph-masterclass-shader-implementation/1724219)

2026/07/02 16:00 BST / 8:00 PSTに開催される、Shader Graphの無料ウェビナーが告知され、[登録ページ](https://unity3d.zoom.us/webinar/register/2217824743331/WN_05wnkmeLSnW120RahqGmBg)が案内されています。

このウェビナーでは、シェーダーの役割、Shader Graphアセットの作成とマテリアル適用、フォリッジシェーダー、ウォーターシェーダー、Shader Graphワークフローや主要ノードを扱う予定とのことです。

対象は、テクニカルアートに関心のある初級から中級のUnityユーザーや、パフォーマンスの高いビジュアルエフェクトを作りたい開発者とされています。

## Articles

### Unity 6で、Asset Storeからインポートした「.unitypackage形式」のアセットのバージョンを後から確認できるようになった

[Unity 6で、Asset Storeからインポートした「.unitypackage形式」のアセットのバージョンを後から確認できるようになった - Qiita](https://qiita.com/RyotaMurohoshi/items/00edc79c04070f82e3d1)

Unity 6以降でインポートしたAsset Store由来の`.unitypackage`アセットについて、Package Manager Windowからインポート済みアセット一覧、含まれるファイル、バージョンを確認できることを紹介しています。

この情報は各`.meta`に追加される`AssetOrigin`に保存されるようで、Unity 2022など旧バージョンでインポート済みのものは後からUnity 6へ上げても確認できない点に触れています。

### 小さいローカル LLM をファインチューニングしてタスクに特化させ、Unity で利用する

[小さいローカル LLM をファインチューニングしてタスクに特化させ、Unity で利用する - Zenn](https://zenn.dev/meson_tech_blog/articles/fine-tuning-local-llm)

`mlx-community/gemma-3n-E2B-it-lm-4bit`をMLXとLoRAでファインチューニングし、問い合わせ分類に特化した小さなローカルLLMを作る流れを紹介しています。
少量の教師データ作成、Claudeによる合成データ増幅、品質ゲート、LoRA学習、評価、LoRAマージ、LLM for Unityでの利用までを扱っています。

### Managed Code VariantとDEVELOPMENT_BUILDの移行

- [Unity6.6でManaged Code Variantが追加され、DEBUGが有効になる条件が変わり、新たなシンボルも追加された話【Unity】](https://kan-kikuchi.hatenablog.com/entry/Managed_Code_Variant)
- [DEVELOPMENT_BUILDがUnity6.6で警告が表示され、Unity6.8から使えなくなるという話【Unity】](https://kan-kikuchi.hatenablog.com/entry/Unity6_8_DEVELOPMENT_BUILD)

Unity 6.6で追加されたManaged Code Variantにより、`DEBUG`がDevelopment BuildではなくManaged Code VariantのDebugで有効になることと、Debug / Release / Masterごとの新しいシンボルを紹介しています。

あわせて、`DEVELOPMENT_BUILD` はUnity 6.6で警告対象になり、Unity 6.8から使えなくなるため、用途に応じて `DEBUG`、`UNITY_ENABLE_CHECKS`、`UNITY_INCLUDE_INSTRUMENTATION`、実行時判定の`Debug.isDebugBuild`へ移行する必要があることを整理しています。

### Addressablesで大量DLをキャンセルしても通信が止まらない問題に対処する

[Addressablesで大量DLをキャンセルしても通信が止まらない問題に対処する - Zenn](https://zenn.dev/gamedev_toollab/articles/fd34995fc8359e)

Addressablesで大量のリモートAssetBundleをまとめてDL対象にした場合、アプリ側のキャンセル後も内部キューに積まれたWebRequestが残り、通信が続く問題を扱っています。

`WebRequestQueue`と`AssetBundleProvider`を直接修正し、未通信キューへのキャンセル通知と通信中の`UnityWebRequest.Abort()`を行う方針を紹介しています。

### Unity 6時代にUniTaskはまだ必要か？Awaitable登場後の使い分けを整理する

[Unity 6時代にUniTaskはまだ必要か？Awaitable登場後の使い分けを整理する - Zenn](https://zenn.dev/gamedev_toollab/articles/1c793e678197f9)

Unity標準の`Awaitable`登場後に、どこまで標準async/awaitで足りるか、どこから`UniTask`を使うメリットがあるのかについて整理しています。
