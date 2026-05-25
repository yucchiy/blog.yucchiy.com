---
type: unity-weekly
title: Unity Weekly 273
description: >-
  2026/05/25週のUnity Weeklyです。URP feedback request、IAP 5移行スキル、Unity Learnアップデート、Unity Studio、Unity Learning Materialsコンテンツ更新などを紹介しています。
pubDatetime: 2026-05-25T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### URP feedback request: Projects setting global shader variables via script

[URP feedback request: Projects setting global shader variables via script - Unity Engine - Unity Discussions](https://discussions.unity.com/t/urp-feedback-request-projects-setting-global-shader-variables-via-script/1720526)

URP内部改善として、一部のUnity/URP internal shader globalsをpersistent constant bufferへ移し、読み取り専用にする検討について、フィードバックを募集しています。

`Shader.SetGlobal*`や`CommandBuffer.SetGlobal*`、`Material.Set*`、`MaterialPropertyBlock`などで、`_AdditionalLightsPosition` や `urp_ReflProbes_BoxMax` などのURPのグローバルシェーダー変数を上書きしているケースが具体的にどのようなものかを募っています。

このディスカッションでは、具体的にどの変数を読み取り専用にする予定か、その一覧も紹介しています。

### Unity 6 developers - migrate to IAP 5 with our new AI skill and get ready for D2C

[Unity 6 developers - migrate to IAP 5 with our new AI skill and get ready for D2C - Unity Services - Unity Discussions](https://discussions.unity.com/t/unity-6-developers-migrate-to-iap-5-with-our-new-ai-skill-and-get-ready-for-d2c/1720752)

Unity IAP 4からUnity IAP 5へ移行するためのIAP migration skillが公開されたことを紹介しています。このスキルはUnity AI AssistantとClaude Codeの両方で利用できます。

このディスカッションでは、このスキルによるIAP 5パッケージへの移行方法を紹介しています。

IAP 5は2026年6月末にGA予定のD2C commerceのSDK基盤のため、GooglePlay Billing Library 7+やApple StoreKit v2の対応だけでなく、StripeやCodaなどの決済プロバイダー、独自価格設定、アプリストアとD2C取引の統合カタログでの管理など様々な恩恵が受けられるので、アップグレードを推奨しているとのことです。

### Unity Learn | Monthly Update – April & May 2026

[Unity Learn | Monthly Update – April & May 2026 - Learn Content - Unity Discussions](https://discussions.unity.com/t/unity-learn-monthly-update-april-may-2026/1719946)

Unity Learnの2026年4月・5月の更新として、Unity Learn、Asset Store、その他Unity Webプラットフォーム間の統合ログイン、新しい検索体験、チュートリアル内の画像やコードスニペットの拡大表示が紹介されています。

今後の予定として、6月上旬にAIインサイトも活用したLearn Collections、6月末にスキル・バッジ・進捗を追跡するLearning Dashboardの刷新が予定されています。

一方で、My Learningページのエラーや完了率の不正確さは継続課題で、ダッシュボード基盤の再構築に合わせて6月末の修正を目標にしているとのことです。

### Accelerate 3D workflows: New collaboration and export tools in Unity Studio

[Accelerate 3D workflows: New collaboration and export tools in Unity Studio](https://unity.com/blog/unity-studio-collaboration-editor-export)

Unity Studioに追加されたコラボレーション機能とStudio-to-Editor Exportについて紹介しています。

コラボレーション機能では、Unity Studioのシーン上の3Dアセットへ直接コメントを付けるアノテーションや、複数ユーザーによるリアルタイム編集により、レビューやフィードバックをUnity Studio上に集約できるとのことです。

Studio-to-Editor Export機能では、Unity Studioで作成したアセットをUnityEditorにシームレスにエクスポートできるとのことです。[Studio-to-Editor Export機能の詳細はこちらから確認できます](https://docs.unity.com/en-us/unity-studio/studio-importer)。

### Unity ゲーム開発オンラインセミナー2026 ＃2 〜Unity 6を使いこなすためには！【続編】～

[Unity ゲーム開発オンラインセミナー2026 ＃2　〜Unity 6を使いこなすためには！【続編】～ | Unity Learning Materials](https://learning.unity3d.jp/11061/)

2026/04/22に開催された、「Unity ゲーム開発オンラインセミナー2026 ＃2　〜Unity 6を使いこなすためには！【続編】～」のオンラインセミナーの動画が公開されています。

このセミナーでは、Unity Webランタイムのプロファイリングと、Platform Toolkitによるクロスプラットフォーム開発について解説しています。

### 〖Unity自習室/3〗 Unity AI を使ってみよう！ 〖生配信〗

[〖Unity自習室/3〗 Unity AI を使ってみよう！ 〖生配信〗 | Unity Learning Materials](https://learning.unity3d.jp/11057/)

Unityの学習に役立つ情報を紹介するYouTubeライブ配信番組「Unity自習室」の第3回のアーカイブが公開されています。

配信では、Unity AIの概要、プロトタイピングや演出作り込みでの使用例、実際にUnity AI Assistantを使って作るライブデモなどが扱われています。

### Unity Vector Expands to D28 ROAS Ad Revenue and Hybrid Monetization Models

[Unity Vector Expands to D28 ROAS Ad Revenue and Hybrid Monetization Models](https://unity.com/blog/d28-roas)

Unity VectorにD28 Ad Revenue ROASキャンペーンとD28 Hybrid ROASキャンペーンが追加されたことを紹介しています。

D28 Ad Revenue ROASは広告収益を主要な収益源とするモバイルゲーム向けで、国ごとのD28 ROASターゲットに基づいて、28日間の広告収益見込みへ最適化するキャンペーンです。

D28 Hybrid ROASは、IAPと広告収益の両方がユーザー価値に寄与するゲーム向けで、短期のIAPや広告エンゲージメントでは見えにくい、28日間の合算収益シグナルへ最適化する仕組みとして説明されています。

## Articles

### URP 17.5（Unity 6.5）で追加されるLight2DProviderにより、2Dライティングを柔軟に拡張できるようになる

[URP 17.5（Unity 6.5）で追加されるLight2DProviderにより、2Dライティングを柔軟に拡張できるようになる #Unity6.5 - Qiita](https://qiita.com/RyotaMurohoshi/items/b00c5ba7c7f89823c561)

URP 17.5（Unity 6.5以降で利用されるURP）に追加される `Light2DProvider` を用いて、2Dライトを拡張する方法を紹介しています。

この記事では、`Light2DProvider` を用いた基本的な拡張として `GetMesh` を実装してライト形状をコードで定義する方法を紹介しています。

また、2Dシャドウ側の拡張点としてURP 17.0から提供されている `ShadowShape2DProvider` についても触れています。

### 軽量化手法24選

[軽量化手法24選【Unity】](https://zenn.dev/neriame_code/articles/2875f05bef3983)

Unityプロジェクトの軽量化・最適化でよく使う手法を、MonoBehaviour / Unity API、メモリ・GC、データ構造、描画・UI、アセット管理、入力、デバッグ・プロファイリングなどの観点で整理しています。

`GetComponent`のキャッシュ、`GameObject.Find`の回避、`Update`の責務削減、オブジェクトプール、LINQや毎フレーム`new`の回避、Canvas分割、Addressables移行、AnimatorパラメータIDのキャッシュ、`Debug.Log`の本番除外などが紹介されています。

最後に、Unity ProfilerやMemory Profiler、Frame Debuggerで計測し、ボトルネック特定、対処、再計測のサイクルを回すことの重要性についても説明しています。

### Unity6のゲーム開発にて、DOTSを本格導入してみた！(Vol.1)

[Unity6のゲーム開発にて、DOTSを本格導入してみた！(Vol.1)](https://zenn.dev/herowl/articles/875b05be63fd8f)

Unity 6で弾幕ゲームの弾管理へDOTS的なデータ指向設計を導入する例を紹介しています。

記事では、`IComponentData`を実装した構造体で弾のデータを扱い、`NativeArray`上で連続配置することで、従来のMonoBehaviourよりCPUキャッシュ効率や並列処理に向いたデータレイアウトにする考え方を説明しています。

また、`IJobParallelFor`とBurstによる弾更新の並列化、`Graphics.RenderMeshInstanced`を用いた描画、PrefabやBakerを介さずにMesh、Material、Matrix4x4を直接扱う設計について解説しています。

### Unity ShaderGraph備忘録 part4-動的な色収差

[Unity ShaderGraph備忘録 part4-動的な色収差](https://zenn.dev/zn_ryg12/articles/shader-note-20260524)

Shader Graphで作成した色収差シェーダーに、Timeノードを加工した値を組み合わせて、鼓動のような強弱変化やグリッチ風の明滅・縞模様を加える方法を紹介しています。

また、`AudioSource.GetSpectrumData`で音声を周波数成分へ変換し、低域成分を `_AudioIntensity` としてマテリアルへ渡すことで、音に連動して色収差の強度を制御する実装例も説明しています。
