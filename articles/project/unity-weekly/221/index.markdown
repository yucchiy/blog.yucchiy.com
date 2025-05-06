---
type: "unity-weekly"
title: "Unity Weekly 221"
description: "2025/05/05週のUnity Weeklyです。Physics development status、Unity XR Updates、Vivox 16.6.0、ZLinqアーキテクチャ解説などについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2025-05-07T00:00:01"
---

## Unity Officials

### Physics development status and next milestones - May 2025

[Physics development status and next milestones - May 2025 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/physics-development-status-and-next-milestones-may-2025/1637988)

2025/05現在の、Unityの物理エンジン周辺の開発状況と、次のマイルストーンについて共有するディスカッションです。

開発状況の共有としてとして、Unity 6でリリースされたECS向けのUnityの物理エンジン（Unity Physics）で追加された「Incremental Dynamic and Incremental Static Broadphases」や「Collider.BakeTransform」、[Unity Physics Samples](https://github.com/Unity-Technologies/EntityComponentSystemSamples/blob/master/PhysicsSamples/README.md)の更新内容
などについて共有しています。

今後のロードマップとして、Unity Physicsで高質量比・硬いジョイント・長い拘束チェーンなどのシミュレーションを高精度に行うための「Direct solver」や、物理エンジンバックエンドを選択できるような統一的なオーサリングワークフローを紹介しています。

また、[Built-in PhysicsのUnity Clothの非推奨化の可能性](https://discussions.unity.com/t/feedback-request-deprecation-of-unity-cloth/1526223)について、非推奨化の検討を取りやめることと今後のロードマップ更新で今後のステップについて共有する旨の共有も行われています。

### Unity XR Updates - April 2025

[Unity XR Updates - April 2025 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-xr-updates-april-2025/1636040)

2025/04現在のUnity XRのアップデートについて共有するディスカッションです。

主に、Unity 6.1で利用可能になる機能についてハイライトされています。

### Unity MARS is now deprecated

[Unity MARS is now deprecated - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-mars-is-now-deprecated/1630939)

ARクリエイター向けの開発ツール「[Unity MARS](https://unity.com/ja/products/unity-mars)」が非推奨化されたことについて共有するディスカッションです。

Unity 6.1から非推奨となり追加の機能開発は停止・クリティカルなバグ対応については継続されます。
最新のパッケージ（1.6&2.0）はサブスクリプションエンタイトルメントチェックが外され、既存ユーザーは2022 LTSおよびUnity6.1でエンタイトルメントチェックを必要とせずにプロダクションを継続できることがあわせて伝えられています。

### AfterRendering injection point in URP now executes always after the Final Blit to Back Buffer (starting in 6000.2.0a9)

[AfterRendering injection point in URP now executes always after the Final Blit to Back Buffer (starting in 6000.2.0a9) - Unity Engine - Unity Discussions](https://discussions.unity.com/t/afterrendering-injection-point-in-urp-now-executes-always-after-the-final-blit-to-back-buffer-starting-in-6000-2-0a9/1635946)

[Unity 6000.2.0a9](https://unity.com/releases/editor/alpha/6000.2.0a9)で、`AfterRendering`のインジェクションポイントの変更点と、すべてのURLの設定において`AfterRendering`を`Final Blit to Back Buffer`の後に実行するようになったことについて共有するディスカッションです。

### New audio examples for Vivox 16.6.0!

[New audio examples for Vivox 16.6.0! - Unity Services - Unity Discussions](https://discussions.unity.com/t/new-audio-examples-for-vivox-16-6-0/1633959)

Vivox 16.6.0で追加された新しい機能の紹介と、実際の音声のサンプルを紹介するディスカッションです。

### Behavior Package 1.0.9 Released! Changelog inside

[Behavior Package 1.0.9 Released! Changelog inside - Unity Engine - Unity Discussions](https://discussions.unity.com/t/behavior-package-1-0-9-released-changelog-inside/1629895)

Behavior Package 1.0.9で追加された新しい機能の紹介と、実際のサンプルを紹介するディスカッションです。

### [2025] DevOps Annual Deprecation Cycle

[[2025] DevOps Annual Deprecation Cycle - Unity Services - Unity Discussions](https://discussions.unity.com/t/2025-devops-annual-deprecation-cycle/1628822)

Unity DevOpsのBuild Automationで提供するOS・Xcode・Unity各種バージョンのうち、2025年に廃止されるバージョンとそのスケジュールについて共有するディスカッションです。

### Creating an Immersive 3D Experience for Among Us Fans

### How Half Past Yellow Created a Unique Visual Identity for Tempest Tower

[How Half Past Yellow Created a Unique Visual Identity for Tempest Tower | Unity](https://unity.com/blog/half-past-yellow-creating-enemy-visuals-tempest-tower)

Unityで開発されたSteamプラットフォーム向けのタワーディフェンスゲーム「[Tempest Tower](https://store.steampowered.com/app/3123800/Tempest_Tower/)」の敵キャラクターのデザインについて、
どのようにデザインされ、特徴的な「粘土の質感」をどのようにシェーディングしているかのテクニックを紹介しています。

[Creating an Immersive 3D Experience for Among Us Fans | Unity](https://unity.com/blog/creating-immersive-3d-experience-among-us-pc-vr)

2025/05/06にリリースされた PC・VRプラットフォーム向けの [Among Us 3D](https://store.steampowered.com/app/3168600/Among_Us_3D/) について、
PC・VR両プラットフォーム対応においてどのようにタイトルを拡張子魅力的なプレイヤー体験を構築したかを、
プロジェクトディレクター&Schell Gamesのシニアデザイナーの Ryan Hall 氏とエンジニアリングディレクター&Schell GamesのプリンシパルエンジニアのWilliam Roberts氏にインタビューを行っています。

### Unity Japanの代表取締役に、当社執行役員・上里田勝が就任

[Unity Japanの代表取締役に、当社執行役員・上里田勝が就任](https://unity3d.jp/news/unity-japan-new-representative-director-20250501)

ユニティ・テクノロジーズ・ジャパン株式会社の新しい代表取締役に、上里田 勝氏が2025年4月24日付で就任したことを発表しています。


## Articles

### ゼロアロケーションLINQライブラリ「ZLinq」のリリースとアーキテクチャ解説

[ゼロアロケーションLINQライブラリ「ZLinq」のリリースとアーキテクチャ解説](https://neue.cc/2025/05/05_ZLinq.html)

ZLinq著者による、ZLinq v1のリリースとアーキテクチャについて詳しく解説した記事です。

このライブラリの基本的な使い方やその使い方、主にこのライブラリで実践されているパフォーマンス最適化について解説されています。

### 【Unity】シェーダーでひびを入れる［その5：最終形］

[【Unity】シェーダーでひびを入れる［その5：最終形］](Uhttps://zenn.dev/lilytechlab/articles/0b3254bab6e152)

シェーダーでオブジェクトに「ひび」のような表現を加えるシリーズの最終回で、これまでに紹介した手法を統合し、シェーダープロパティを用いて各手法の適用有無を切り替える実装を紹介しています。
また、紹介した手法の実装からの一部変更点や、シェーダーのコード全文が掲載されています。

これまでの記事は、下記より確認できます。

- [【Unity】シェーダーでひびを入れる［その1：フラグメントシェーダー編］](https://zenn.dev/lilytechlab/articles/518b5e29738f9b)
- [【Unity】シェーダーでひびを入れる［その2：ジオメトリシェーダー編］](https://zenn.dev/lilytechlab/articles/4b67cfbc44ad79)
- [【Unity】シェーダーでひびを入れる［その3：テッセレーションシェーダー編］](https://zenn.dev/lilytechlab/articles/a083aad2460432)
- [【Unity】シェーダーでひびを入れる［その4：PN-Triangles編］](https://zenn.dev/lilytechlab/articles/1b0772f6175c34)
- [【Unity】シェーダーでひびを入れる［その5：最終形］](https://zenn.dev/lilytechlab/articles/0b3254bab6e152)

### Unityプロジェクト向け.editorconfigサンプル

[Unityプロジェクト向け.editorconfigサンプル](https://www.nowsprinting.com/entry/2025/04/30/080000)

Roslynを開発するレポジトリの`.editorconfig`をベースに、Unityプロジェクト向けにカスタマイズした`.editorconfig`のサンプルを紹介しています。

### Rust (cargo-ndk) でビルドした Android 向け Unity プラグインを 16KB アライメントに対応する

[Rust (cargo-ndk) でビルドした Android 向け Unity プラグインを 16KB アライメントに対応する](https://zenn.dev/mayuki/articles/7eb1e503ee10e6)

Rustで実装したAndroid向けのネイティブプラグインを、Android 15以降のARM64デバイスで対応した16KBアライメントに対応するための各種対応方法についてまとめています。

### 2年かけてUnityでuGUIやUI Toolkitの代わりに使うGUIライブラリを開発して公開した

[2年かけてUnityでuGUIやUI Toolkitの代わりに使うGUIライブラリを開発して公開した](https://zenn.dev/tatarou/articles/bc4a9790837b96)

この記事の著者が開発するImmediate-Mode GUIライブラリ「[[RimGui]](https://assetstore.unity.com/packages/tools/gui/rimgui-316805)」について、このGUIライブラリの特徴から基本的な使い方、フォント描画についての最適化についてそれぞれ説明しています。

### Unity ⇄ Unreal Engine 用語対応＋語源まとめ 〜BlueprintやActorはなぜそう呼ばれるのか？〜

[Unity ⇄ Unreal Engine 用語対応＋語源まとめ 〜BlueprintやActorはなぜそう呼ばれるのか？〜](https://qiita.com/segur/items/19d7fe63c1fa93af198f)

Unityエンジニアの視点からUnityとUnreal EngineのScene/Level・Prefab/Blueprint・GameObject/Actorといった主要な用語の、語源や概念的な違いが歴史的由来を交えて説明されています。

### Unity - 横断的な例外処理

[Unity - 横断的な例外処理](https://yotiky.hatenablog.com/entry/unity_exceptionhandle)

UniRxやMessageBrokerのストリーム内で発生した例外を扱う際に、ストリーム内で発生した例外を外部に送出するために利用できる`onError`コールバック引数の使い方や各種メソッドでの挙動の注意点や、UniTaskの`AsyncReactiveProperty`や`UniTask.Linq`での例外処理の注意点、各種`UnhandledException`の扱いの注意点などそれぞれまとめています。

### UnityWebRequestをラップしたHTTPクライアントを実装する

[UnityWebRequestをラップしたHTTPクライアントを実装する](https://zenn.dev/s4k1/articles/cf25702fdd3b4b)

UnityWebRequestをラップして、タイムアウトやリトライ制御、HTTPなどのエラーコードに応じて処理を分岐するような実装を行う独自のHTTPクライアントを実装する方法を紹介しています。

### 【Unity】シェーダーでクォータニオンを扱うときの計算量について

[【Unity】シェーダーでクォータニオンを扱うときの計算量について](https://qiita.com/yuri_tsukimi/items/4174c6690a8898898b99)

シェーダー内で回転を計算するための計算量を、回転行列を用いる場合とクォータニオンを用いる場合とでそれぞれ比較しています。

### ZLinqでString.JoinしたいときはJoinToString

[ZLinqでString.JoinしたいときはJoinToString](https://www.nowsprinting.com/entry/2025/04/30/080000)

ZLinqで`String.Join`相当の処理を行う際に利用できる`JoinToString`メソッドを紹介しています。

またこの記事では、`JoinedBy`と`ZString`を用いて同等の処理を実現する方法についても言及しています。

### 【Unity】Addressables Reportで実際にビルドされたアセットバンドルを分析する

[【Unity】Addressables Reportで実際にビルドされたアセットバンドルを分析する](https://light11.hatenadiary.com/entry/2025/05/01/204254)

Addressableでアセットバンドルをビルドしたときに、どのようなアセットバンドルがビルドされているかを確認する方法を紹介しています。

### 【Unity】Cinemachine 3 の「Spline Cart」を用いてオブジェクトの動きを簡単に制御する

[【Unity】Cinemachine 3 の「Spline Cart」を用いてオブジェクトの動きを簡単に制御する](https://zenn.dev/gucchi612/articles/20250430unity_dollycart)

Cinemachine 3で以前のバージョンの「Dolly Cart」の代わりに用意された、Unity標準のSplinesパッケージを用いた「Spline Cart」を用いて、オブジェクトの動きをスプライン曲線で制御する方法を紹介しています。