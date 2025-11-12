---
type: unity-weekly
title: >-
  Frame Timing Manager、Unity Gaming Services、Memory Profiler v1.0.0-pre.2 -
  Unity Weekly #074
description: >-
  2022/06/27週のUnity Weeklyです。Frame Timing Manager、Unity Gaming Services、Memory
  Profiler v1.0.0-pre.2、Experimental Entities 0.51、Compute Shader などについて取り上げました。
pubDatetime: 2022-06-26T12:00:00.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity フレームタイミングマネージャーによるパフォーマンスボトルネックの検出

[Unity Frame Timing Managerによるパフォーマンスボトルネックの検出 | Unity Blog](https://blog.unity.com/ja/technology/detecting-performance-bottlenecks-with-unity-frame-timing-manager)

フレーム内のCPU・GPU時間を計測するための [Frame Timing Manager](https://docs.unity3d.com/2022.2/Documentation/Manual/frame-timing-manager.html) というAPIについて、このAPIを用いてどのような値を計測できるのか、実際にこのAPIを用いてCPU・GPU時間をHUDで表示したり、フレーム内のボトルネックを検出する方法について紹介しています。



また、Frame Timing Managerの対応プラットフォームや制限事項、高度なトピックスとしてフレームタイムラインの可視化や他のマーカーとの差分計算に使用できるタイムスタンプ情報の取得する方法などについても言及しています。

### Unity ゲーミングサービスを使って 1 つのモジュール式プラットフォームでライブゲームを構築しよう

[Unity ゲーミングサービスを使って 1 つのモジュール式プラットフォームでライブゲームを構築しよう | Unity Blog](https://blog.unity.com/ja/games/build-your-live-game-in-a-single-modular-platform-with-unity-gaming-services)

Unity Gaming Service（UGS）の正式版リリースがアナウンスされました。



UGSを用いてライブゲーム構築を構築するために、どのような要件をUGSのどの機能を用いると実現できるかについて紹介しています。

* アカウント管理
    * [Authentication](https://unity.com/ja/products/authentication): ゲームのアカウント管理
    * [Cloud Save](https://unity.com/ja/products/cloud-save): プレイヤーのアビリティや統計情報などのプレイヤーデータを保存し、デバイスを跨いだアカウントを提供できる。
* マルチプレイヤー
    * [Lobby](https://unity.com/ja/products/lobby): ゲームセッションに参加する前のプレイヤーを公開・非公開ロビーに集めることができる
    * [Relay](https://unity.com/ja/products/relay): P2Pセッションを構築できる。IPを共有をせず、またゲームトラフィックはDTLSによって暗号化されている。[Netcode for GameObjects](https://unity.com/ja/products/netcode) を組み合わせると小規模な協力プレイゲームのプロジェクトを立ち上げることができる
    * [Multiplay](https://unity.com/ja/products/multiplay) と [Matchmaker](https://unity.com/ja/products/matchmaker) を組み合わせて協力型ゲームおよび対戦型ゲームを構築できる
* コンテンツの設定と管理
    * [Cloud Code](https://unity.com/ja/products/cloud-code): ステートレスなサーバーレスサービス
    * [Economy](https://unity.com/ja/products/economy): ゲーム内経済システムを構築できるバックエンドサービス
* プレイヤーを理解する
    * [Analytics](https://unity.com/ja/products/unity-analytics): ゲーム内のプレイヤーの行動やゲームのパフォーマンスを解析できる。また、ExcelやTableau、OpenOfficeなどへのデータエクスポートも可能。
* プレイヤーを引き込む
    * [Game Overrides](https://unity.com/ja/solutions/games-operate/engage): ゲームアップデートを行わずに、管理画面上でプレイヤーごとの設定変更ができるサービス。これを用いてゲーム難易度の変更のスケジュール、ターゲット指定、A/Bテストを行える。[Cloud Content Delivery](https://docs.unity.com/ccd/UnityCCDGameOverrides.html)と組み合わせると、プレイヤーグループごとに特定のアセット配信をスケジュールすることもできる
    * [Push Notifications](https://docs.unity.com/push-notifications/WhatArePushNotifications.html): リモートプッシュ配信サービス
* コミュニティーを構築する
    * [Vivox](https://unity.com/ja/products/vivox): テキストチャットとボイスチャットを構築できるエンジン非依存なサービス
* パフォーマンスの監視
    * [Cloud Diagnostics](https://unity.com/ja/products/cloud-diagnostics?_ga=2.183389666.532293565.1641834336-1524759146.1613488747): リアルタイムのエラーモニタリングを提供するサービス。クラッシュや例外のレポートを行ってくれる。
* ユーザーを獲得する
    * [Audience Pinpointer](https://unity.com/ja/solutions/mobile-business/get-users/audience-pinpointer): ユーザー獲得のための広告ソリューション
* ゲームを収益化する
    * [Unity Mediation](https://unity.com/ja/products/mediation): ゲーム内広告による収益化ソリューション
### Memory Profiler 1.0.0-pre.2 Released

[Official - Memory Profiler 1.0.0-pre.2 Released - Unity Forum](https://forum.unity.com/threads/memory-profiler-1-0-0-pre-2-released.1298490/)

Memory Profilerの 1.0.0-pre.2 がリリースされました。

* タブの再構築により機能の整理が行われました
* トータルメモリレポート＆サマリービューの再構築
    * Memory Usage On Device: ターゲットデバイスでの利用可能な総物理メモリに対して、アプリケーションが使用している常駐メモリ量の割合を表示します。このビューは、 Unity 2022でのメモリキャプチャのみで利用可能です。
    * Total Committed Memory: アプリケーションのコミットメモリサイズと、その内訳（Native、Managed、Graphicsなど）の上位表示。コミットされたメモリは、物理メモリ上かディスクにスワップしているかなどに関わらず、アプリケーションのすべてのメモリを表示しています。
    * Managed Memory
    * Top Unity Object Categories: 新しいビューでは、アプリケーション中のメモリ使用量の多いカテゴリと、そのカテゴリの詳細を調べるためのリンクをあわせて表示しています。s
* 2メモリキャプチャ間のオブジェクト差分
    * 今までの単純なオブジェクトのDiffだけではなく、カテゴリごと（Texture2DやMaterialなど）のグループ化、メモリ使用量の差分なども表示され、より視覚的に理解しやすいビューが実装されています。
また今回のリリースは、検証済みバージョンである 1.0 に向けての最初のステップとなるリリースという位置づけとなります。また Memory Profiler 1.0は、Unity 2022以降を必要とするパッケージとなる予定とのことです。

それ以前のUnityバージョンのプロジェクトで Memory Profiler 1.0を利用したい場合は、メモリキャプチャ自体はそのバージョンで行い、Unity 2022のエディターでMemory Profilerを開いてスナップショットをインポートすることで利用できます。

### Experimental Entities 0.51 is Available

[Official - Experimental Entities 0.51 is Available - Unity Forum](https://forum.unity.com/threads/experimental-entities-0-51-is-available.1281233/)

Entities 0.51がリリースされました。このリリースでの主なアップデートは、Unity 2020 LTS と 2021  LTS両方の互換性をサポートしたことです。また、下記リンクに示すEntities 0.50以降のいくつかの問題が修正されています。

* [com.unity.entities](https://docs.unity3d.com/Packages/com.unity.entities@0.51/changelog/CHANGELOG.html)
* [com.unity.rendering.hybrid](https://docs.unity3d.com/Packages/com.unity.rendering.hybrid@0.51/changelog/CHANGELOG.html)
* [com.unity.netcode](https://docs.unity3d.com/Packages/com.unity.netcode@0.51/changelog/CHANGELOG.html)
* [com.unity.physics](https://docs.unity3d.com/Packages/com.unity.physics@0.51/changelog/CHANGELOG.html)
* [com.havok.physics](https://docs.unity3d.com/Packages/com.havok.physics@0.51/changelog/CHANGELOG.html)
### GPUの力を解き放て！Unity Compute Shader入門！

[GPUの力を解き放て！Unity Compute Shader入門！ - YouTube](https://www.youtube.com/watch?v=yiPVxGO-Yg0)

UnityでCompute Shaderを使う入門動画です。



Compute Shaderの特徴とUnityでの利用事例、Compute Shaderの基本要素のおさらい、群衆シミュレーションのアルゴリズムのBoidの実装解説とパフォーマンス比較、BoidアルゴリズムのCompute Shader実装の最適化について解説しています。

## Articles

### Point to click movement with the new Input System & Cinemachine

[Point to click movement with the new Input System & Cinemachine - GameDev Resources](https://gamedev-resources.com/point-to-click-movement-with-the-new-input-system-cinemachine/)

フィールドをクリックすると、その地点へキャラクターが移動するようなシステムとカメラの追従機能を、新しいInput SystemおよびCinemachineで実装する方法について紹介しています。



キャラクターの移動は、マウスの入力を新しいInput Systemでスクリーン座標として読み取り、 `Camera.ScreenPointToRay` でワールド座標に変換し、事前に用意したNavMeshに対して `NavMesh.SamplePosition` でNavMesh上の座標を算出、その座標に対して `NavMeshAgent` で移動するような実装を行っています。



キャラクター追従カメラは、VirtualCameraのBodyを `Framing Transposer` に設定して実装しています。

### AssetBundleの互換性を壊さずにasmdefを適用するには？

[【Unity】AssetBundleの互換性を壊さずにasmdefを適用するには？ - Qiita](https://qiita.com/mhama/items/13db54ceb5978805fd2f)

asmdefを適用していないコンポーネントを含んだAssetBundleを、そのコンポーネントにasmdefを適用すると（アセンブリ名が変わるために）AssetBundleを復元できなくなる問題と、内部のロジックをテスト可能にするためにコンポーネント中の一部ロジックを別クラス化するなどでasmdef化する方法などについて紹介しています。

### UnityのVisualEffectGraphとShaderGraphを使って剣の軌跡エフェクトを作成する

[UnityのVisualEffectGraphとShaderGraphを使って剣の軌跡エフェクトを作成する | Unityを使った３Dゲームの作り方（かめくめ）](https://gametukurikata.com/effect/visualeffectgraphswordtraileffect)

剣を振った時の軌跡（トレイル）エフェクトの実装方法について紹介しています。



トレイルエフェクトに使うためのメッシュのBlenderでの作成方法から、Visual Effect Graphを用いて作成したメッシュを剣を振った軌道に合わせて表示する方法、剣を振るアニメーションにアニメーションイベントを仕込み、仕込んだイベントをVisual Effect Graphで受け取ってエフェクトを表示する方法、エフェクトの見た目をShaderGraphを用いて調整する方法についてそれぞれ解説しています。

### AnimationControllerで制御しているキャラクタにAnimationClipのアニメーションを割り込ませる

[AnimationControllerで制御しているキャラクタにAnimationClipのアニメーションを割り込ませる](https://zenn.dev/tyto/articles/1c26d44b516850)

AnimationControllerで制御しているキャラクターに対して別のAnimationClipの再生を割り込ませる方法について紹介しています。



AnimationControllerのアニメーション出力を `AnimatorControllerPlayable` で、追加のAnimationClipの再生を`AnimationClipPlayable` で行い、 `AnimationLayerMixerPlayable` で２アニメーション出力を合成することでこれを実装する方法について解説しています。

### LightMapをベイクしたシーンをマルチシーンで追加で読み込んだ時の見た目の差異を解消する

[[Unity]LightMapをベイクしたシーンをマルチシーンで追加で読み込んだ時の見た目の差異を解消する - Qiita](https://qiita.com/nattuhan/items/d21351a5003281cbf0ce)

LightMapをベイクしたシーンをマルチシーンとして読み込む時と単体シーンとして読み込む時とで見た目が異なる問題を解消する方法として、マルチシーンをアクティブにする方法と、FogやSkybox、Environment Reflectionなどのシーン依存な情報を合わせる方法についてそれぞれ紹介しています。

### Single Pass InstancedでGrabPass取得できない時の対処

[Single Pass InstancedでGrabPass取得できない時の対処](https://zenn.dev/panda_nakami/articles/20220620-unity-grabpass-singlepassinstanced)

VRプラットフォームでシングルパスインスタンシングレンダリングを行う際、 `GrabPass` を利用するようなシェーダーで `tex2D` によるテクスチャのサンプリングを行うと描画が崩れる（マルチパスレンダリングの場合は壊れない）問題と、`UNITY_DECLARE_SCREENSPACE_TEXTURE` と `UNITY_SAMPLE_SCREENSPACE_TEXTURE` を用いて `GrabPass` の生成するテクスチャをサンプリングすることでこの問題を解決する方法について紹介しています。

### NetworkedProperty（に相当する機能）のすゝめ

[NetworkedProperty（に相当する機能）のすゝめ - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/2022/06/24/173324)

Unityでネットワークマルチプレイを実装する際に、（Photonなどにあるような）Unityのゲームオブジェクト単位で状態の同期を行う NetworkedProperty と、（ネットワークライブラリでよくある）RPC（Remote Procedure Call）との機能的な使い分けの１考察を紹介しています。

### 視聴者が「次のステージを投票」できるゲーム動画配信システムを作る

[視聴者が「次のステージを投票」できるゲーム動画配信システムを作る - Qiita](https://qiita.com/Takaaki_Ichijo/items/91520ada5a1e247e2ff7)

[Genvid](https://www.genvidtech.com/ja/) SDKを用いた、対戦ゲームなどで「動画の視聴者が投票によって次のステージを選択できる」ようなシステムの試作について紹介しています。

JavaScrip側での投票機能と、投票機能の結果をUnityで受け取る実装についてそれぞれ解説しています。

### Q:#if UNITY_EDITOR な ScriptableObject のフィールドはビルド時にどうなる？

[Q:#if UNITY_EDITOR な ScriptableObject のフィールドはビルド時にどうなる？](https://zenn.dev/gok/articles/eac077b628ad4a)

Resources内のアセットの、`#if UNITY_EDITOR` 囲ったシリアライズ可能なプロパティを持つが、ビルド後にどのように扱われるのかについて実験的に説明しています。

### 新Input Systemでナビゲーション機能を実装する

[新Input Systemでナビゲーション機能を実装する](https://zenn.dev/brainvader/articles/c50dfe5ba990ff)

新しいInput Systemを用いて、マウスホイールによるズームイン・アウト、カスタムコンポジットを用いたドラッグ、Orbit Camera（ターゲットを原点とする球を軌道とするカメラワーク）の実装方法について紹介しています。

### ARCore Geospatial APIの緯度経度の情報を持つAREarthManagerについて調べてみた

[ARCore Geospatial APIの緯度経度の情報を持つAREarthManagerについて調べてみた - Qiita](https://qiita.com/iwaken71/items/c6b403b39929dac5bd4b)

Googleの発表したVPS（Visual Positioning Service/System）であるARCore Geospatial APIの中で緯度と経度などを計測できる AREarthManager を用いて取得できる `GeospatialPose` のそれぞれのプロパティについて解説しています。

## Repositories

### Runtime Monitoring

[JohnBaracuda/Runtime-Monitoring: Runtime Monitoring is an easy way for you to monitor the value or state of custom C# members during runtime. Just add the 'Monitor' attribute to a field, property, event, method or even class and get its value or state displayed automatically in a customizable and extendable debug UI.](https://github.com/JohnBaracuda/Runtime-Monitoring)

フィールドやプロパティ、イベントに `Monitor` 属性をつけておくだけで、ランタイムで値の変化などを監視するUIを提供するツール。

### ReeseUnityDemos

[reeseschultz/ReeseUnityDemos: Unity packages and demos—emphasizing ECS, jobs and the Burst compiler—by Reese and others.](https://github.com/reeseschultz/ReeseUnityDemos)

DOTSベースのナビゲーションシステム・パスファインディングなどのパッケージと、それらを用いたデモプロジェクト。

### Sorangon Level Up Sketch Open Project

[Sorangon/Level-Up-Sketch-Open-Project](https://github.com/Sorangon/Level-Up-Sketch-Open-Project)

レポジトリの作者が「Real Time VFX monthly sketch challenge #52」に応募した作品の公開プロジェクト。メッシュのボクセル化、ビュー空間でのグリッチエフェクト、データパターントレイルの３つのエフェクトや実際の作品が入ったシーンなどが用意されています。



また、この作品を作る際に使用した下記ツールも合わせて提供されています。

* Gradient and curve Textures generator
* Gradient mapping shaders
* Height Fog custom render pass


