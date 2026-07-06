---
type: unity-weekly
title: Unity Weekly 279
description: >-
  2026/07/06週のUnity Weeklyです。Unity 6.6のECS開発状況、URPのGTAOおよびScreen Space Reflectionsのプレビュー、Unity IAP 5.4のD2C機能、AppleのRosetta廃止スケジュールと対応を紹介しています。
pubDatetime: 2026-07-06T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### ECS Development Status for Unity 6.6

[ECS Development Status for Unity 6.6 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/ecs-development-status-for-unity-6-6/1724480)

Unity 6.6に向けたECS / Entitiesの開発状況をまとめたディスカッションです。ECSパッケージはUnityリリースと同期するコアパッケージとなり、GameObjectとEntitiesのワークフロー統合が進められています。

主な内容は以下の通りです。

- EntityId Unification
    - GameObjectとEntitiesの識別子を揃える方針のもと、EntityIdの4バイトから8バイトへの移行が完了し、より大きなアドレス空間を扱えるようになった
    - エディター向けのvirtual memoryサポートやmetadata pagingなどのメモリ最適化も進められている
- Managed Component Deprecation
    - classベースのmanaged componentはパフォーマンス上の制約から非推奨となり、`UnityObjectRef<T>`を使ったstructへの移行が推奨される
    - 移行対象のコードにはanalyzer（EA0017）で警告が表示される
- New Hierarchy
    - GameObjectとEntitiesを統合表示する[新しいHierarchy window](https://docs.unity3d.com/6000.6/Documentation/Manual/new-hierarchy.html)がデフォルトになった
- Systems Window: Streamlined and More Informative
    - スケジューリング列の追加や不要なUIの削除により、Systems windowが整理された
- Memory Profiler Integration
    - Entities / Collections / Entities GraphicsのアロケーションをMemory Profilerで識別しやすくなった
- SubScene Baking Determinism Validation
    - bake結果の再現性を検証するための`EntitySceneImporterDeterminismChecker.Check()` APIが追加された
- Component Lifecycle Debug Callbacks
    - `IDebugOnAdded` / `IDebugOnRemoved`インターフェースで、componentの追加・削除タイミングを追跡できるようになった
- API Cleanup and Improvements
    - `EntityCommandBuffer`のmulti-playbackの非推奨化やEntity Store V1の削除などのAPI整理が行われている

### Preview of URP Ground Truth Ambient Occlusion (GTAO)

[Preview of URP Ground Truth Ambient Occlusion (GTAO) - Unity Engine - Unity Discussions](https://discussions.unity.com/t/preview-of-urp-ground-truth-ambient-occlusion-gtao/1724061)

URP の Screen Space Ambient Occlusion を強化する Ground Truth Ambient Occlusion（GTAO）のプレビューを案内するディスカッションです。
Unity 6.7 での提供を目指しており、Unity 6000.7.0a1 以降の Alpha で試せます。

GTAO は深度バッファから水平線角度を読み取り、各ピクセル上の半球が近傍ジオメトリにどれだけ遮られているかを推定する手法です。
従来の Alchemy SSAO より、物理ベースのコンタクトシャドウを出しやすいと説明されています。
既存の SSAO は引き続きサポートされ、シーンごとに GTAO へ移行できます。

主な変更点は以下の通りです。

- Ground Truth Ambient Occlusion
    - Alchemy SSAOと並ぶ新しいモードとして追加され、dropdownで切り替えられる
- Volume-Based Configuration
    - SSAO設定がVolume systemへ統合され、runtimeではVolume overrideが正として扱われる
- Compute Shader Path
    - compute shaderによりstep countとdirection countを制御でき、raster fallbackも用意される
- Spatial filtering
    - compute pathではBilateral filterとBox filterを選択できる
- Temporal filtering
    - motion vectorを使って前フレームのAOをreprojectし、動きのある場面でノイズを抑えられる

Unity はプレビュー版へのフィードバックも求めており、試用後の[短いアンケート](https://docs.google.com/forms/d/e/1FAIpQLScQHxwgCtEqw2XEZzyCSg0puqvfdcSx8m9K5BilLfwPdqI1GA/viewform?usp=header)と、バグやガイドに載っていない内容の[スレッド報告](https://discussions.unity.com/t/preview-of-urp-ground-truth-ambient-occlusion-gtao/1724061)を案内しています。

### Preview of Screen Space Reflections for URP

[Preview of Screen Space Reflections for URP - Unity Engine - Unity Discussions](https://discussions.unity.com/t/preview-of-screen-space-reflections-for-urp/1721494)

URP向けScreen Space Reflectionsのプレビューを案内するディスカッションです。

Unity 6.7での提供を目指しており、Unity 6000.6.0a7以降のAlphaで試せます。

この機能はスクリーンスペースでレイマーチングを行い、カメラのカラーバッファと深度バッファを参照して、リアルタイムに光沢のある反射を生成します。
画面内に表示されている情報だけを使うため、反射レイが画面外へ出る場合やオブジェクトの背後を参照する場合は、近くのリフレクションプローブまたはスカイマップのキューブマップを代替として使います。

プレビュー版へのフィードバックも求めており、試用後の[短いアンケート](https://docs.google.com/forms/d/e/1FAIpQLSeDlcosKk5T06zfFT2GOKyFjKKzCZ_iJ9D3tWJkKwj1asjdaQ/viewform?usp=publish-editor)と、バグやガイドに載っていない内容の[スレッド報告](https://discussions.unity.com/t/preview-of-screen-space-reflections-for-urp/1721494)を案内しています。

### Direct-to-consumer (D2C) capabilities are now available in Unity IAP 5.4

[Direct-to-consumer (D2C) capabilities are now available in Unity IAP 5.4 - Unity Services - Unity Discussions](https://discussions.unity.com/t/direct-to-consumer-d2c-capabilities-are-now-available-in-unity-iap-5-4/1724578)

Unity IAP 5.4でDirect-to-consumer（D2C）機能が利用可能になったことをアナウンスするディスカッションです。

新しい販売チャネルとして、以下の2つが追加されています。

- ゲーム内ウェブ決済
    - プレイヤーがアプリを離れることなくウェブ決済で購入できる
- ノーコードのウェブショップ
    - ダッシュボードから独自ブランドのストアフロントを構築できる

対象はモバイルプラットフォームで、WebGLやデスクトップゲームはサポート対象外とされています。

決済プロバイダーはStripeとCodaで、既存のIAPと同じカタログとダッシュボードを単一のSDKで利用できます。ストア外決済による利益率の改善、プレイヤーデータの取得、価格設定・プロモーション・ユーザーセグメントの制御向上が利点として挙げられています。

また、Unity 6ユーザー向けには、[Unity AI Assistant](https://docs.unity3d.com/Packages/com.unity.ai.assistant@2.12/manual/index.html)（または任意のAIツール）と新しく提供された[AI skill](https://discussions.unity.com/t/unity-6-developers-migrate-to-iap-5-with-our-new-ai-skill-and-get-ready-for-d2c/1720752)を使って、IAP 5.4への移行を計画・実行できることが案内されています。詳細は[公式ブログ](https://unity.com/blog/unity-iap-d2c-launch-blog)で紹介されています。

### Apple Rosetta deprecation and your Mac Intel-based games: what to do and when

[Apple Rosetta deprecation and your Mac Intel-based games: what to do and when - Unity Engine - Unity Discussions](https://discussions.unity.com/t/apple-rosetta-deprecation-and-your-mac-intel-based-games-what-to-do-and-when/1724774)

Appleによる[Rosetta](https://developer.apple.com/documentation/apple-silicon/about-the-rosetta-translation-environment/)（Intel向けバイナリをApple Siliconで動かす変換レイヤー）の廃止スケジュールと、Intel Mac向けゲームを配布している開発者が取るべき対応を案内するディスカッションです。

スケジュールは以下の通りです。

- 現在（macOS 26.4 / 26.5）
    - Rosetta経由で動作するゲームに警告メッセージが表示され始めている
- macOS 27（2026年秋）
    - すべてのアプリでRosettaを利用できる最後のメジャーリリースになる
- macOS 28以降（2027年秋以降）
    - レガシーゲーム向けの限定的な互換機能だけが残る

対応としては、Unity 2020.3以降のプロジェクトであれば、最低限[Universalバイナリへの移行](https://docs.unity3d.com/6000.3/Documentation/Manual/macos-building.html)、推奨としてApple Silicon専用バイナリ化が案内されています。Unity 2020.3より古く積極的な更新予定のないプロジェクトには、[macOS 27ベータに含まれるテストツール](https://developer.apple.com/documentation/macos-release-notes/macos-27-release-notes)での動作確認が案内されています。このツールはベータ限定で、macOS 27の正式リリース前に削除される予定です。

なお、Unity自体も[Unity 6.7 LTSを最後に、Mac Editor / Mac RuntimeともにMac Intelサポートから撤退する予定](https://discussions.unity.com/t/unity-to-deprecate-intel-based-mac-support-starting-with-unity-6-6/1721740)です。


## Articles

### Unity 6.5において、久しぶりにuGUIに機能追加があった

[Unity 6.5において、久しぶりにuGUIに機能追加があった - Qiita](https://qiita.com/RyotaMurohoshi/items/3897669f4ddbb4c04a15)

Unity 6.5で`com.unity.ugui`が2.5.0へ更新され、久しぶりにuGUIへ機能追加があったことを紹介しています。
描画のオーバーヘッドなしにraycast対象を作れる`RaycastReceiver`の追加、`GridLayoutGroup`の生成行列数プロパティ、`Selectable`の状態取得メソッドのpublic化などを取り上げています。

### Unity6.6で、ついにDictionaryのSerializable(シリアライズ)に公式対応【Unity】

[Unity6.6で、ついにDictionaryのSerializable(シリアライズ)に公式対応【Unity】](https://kan-kikuchi.hatenablog.com/entry/Dictionary_Serializable)

Unity 6.6（Alpha）で`Dictionary`のシリアライズに公式対応し、`[SerializeField]`を付けるだけでInspector編集やJSON化ができるようになったことを紹介しています。
`DictionaryHeader`属性によるキー・値の表示ラベル変更や重複キーの警告に触れつつ、publicフィールドは対象外で`[SerializeField]`が必須という通常のListと異なる制約も整理しています。

### Unity 6のBuild Profilesを使って、開発用・本番用などのビルド設定を分けて管理する

[Unity 6のBuild Profilesを使って、開発用・本番用などのビルド設定を分けて管理する - Qiita](https://qiita.com/matsu_r11/items/f574eeaabffb62f36337)

Unity 6のBuild Profilesを使い、開発用・本番用などのビルド設定をプロファイルアセットとして分けて管理する方法を紹介しています。
シーンリスト、Scripting Defines、Player Settingsのオーバーライドに加え、`BuildPlayerWithProfileOptions`によるスクリプトからのビルド実行にも触れています。

### Unity Packageを自動インポートするPackageを作ってみた話

[Unity Packageを自動インポートするPackageを作ってみた話 - Qiita](https://qiita.com/seikasan/items/7563340ad5ca834b6450)

新規プロジェクトのたびに同じパッケージ群を手動でインストールする手間をなくすため、UPMやNuGetForUnityを含む開発スタックを一括セットアップするパッケージの自作を紹介しています。
再コンパイルをまたぐステージ管理や、複数パッケージの依存関係の扱いなど、実装上の工夫を扱っています。

### Unity 6時代のLINQとZLinq：大規模開発でGCを増やさないための使い分け

[Unity 6時代のLINQとZLinq：大規模開発でGCを増やさないための使い分け - Zenn](https://zenn.dev/gamedev_toollab/articles/0ec521211d78f1)

Unityの大規模開発でGCを増やさないために、LINQ、ZLinq、for文をどう使い分けるかを整理しています。
ホットパスでは利便性より性能を優先する、ZLinqはGC削減の手段でありコレクション生成のアロケーションは別問題、事前確保したListの再利用が最も堅牢、という原則をまとめています。

### C#のDisposeを深掘りする：GC、finalizer、UnityEngine.Objectの破棄を整理する

[C#のDisposeを深掘りする：GC、finalizer、UnityEngine.Objectの破棄を整理する - Zenn](https://zenn.dev/gamedev_toollab/articles/4fceb9127d8085)

C#の`Dispose`、GC、finalizer、`UnityEngine.Object`の破棄が、それぞれ異なる寿命管理を扱っていることを整理しています。
破棄方法は型ではなく所有権で決めるという方針のもと、自分で生成したインスタンスは`Destroy`、`IDisposable`は`Dispose`、Addressablesのアセットは`Addressables.Release`という使い分けをまとめています。

### Unity HubのEditorのセキュリティ警告などのアラートを非表示(dismiss)できるように【Unity Hub】

[Unity HubのEditorのセキュリティ警告などのアラートを非表示(dismiss)できるように【Unity Hub】](https://kan-kikuchi.hatenablog.com/entry/UnityHub_Dismiss_Alerts)

Unity Hub 3.18.2以降で、エディターごとに表示されるセキュリティ警告アラートを「Accept & dismiss」で非表示にできるようになったことを紹介しています。
非表示にしたアラートはSettingsの「Reset dismissed alerts」で再表示できます。
