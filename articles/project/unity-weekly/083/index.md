---
type: unity-weekly
title: CEDEC 2022、Dev Blitz Day - Unity Weekly 083
description: 2022/08/29週のUnity Weeklyです。CEDEC 2022、Dev Blitz Dayなどについてまとめています。
pubDatetime: 2022-08-28T06:00:00.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

CEDEC 2022が開催されました。Unityからも公式で講演が行われました。Unity公式の講演はYouTubeやUnity Learning Materialsから確認できます。

### Unity最新情報まとめ！2022年夏版！

[Unity最新情報まとめ！2022年夏版！ | Unity Learning Materials](https://learning.unity3d.jp/8392/)

Unity 2021 LTSとUnity 2022の更新情報について、主にグラフィックスとUI Toolkitのランタイムサポート、OverlayやSplineパッケージの紹介、C#スクリプティングの更新情報（C#9.0、.NET Standard 2.1、Core CLR）、プロファイリングツール、などを紹介しています。

### ちょっと踏み込んだURP: エンジニアに向けた実践的なナレッジ紹介

[ちょっと踏み込んだURP: エンジニアに向けた実践的なナレッジ紹介 | Unity Learning Materials](https://learning.unity3d.jp/8396/)

URP12の新機能の各種紹介から、シェーダービルドフロー（Shader VariantsのStrippingやDXCなど）、URPのカスタムシェーダーの書き方、URP Renderer Featuresの実例について紹介しています。

### Unityの多彩な機能で作る、美しい自然景観

[Unityの多彩な機能で作る、美しい自然景観 | Unity Learning Materials](https://learning.unity3d.jp/8398/)

UnityのHDRP（High Definition Render Pipeline）を駆使して美しい自然景観を制作する方法について紹介しています。



雲・空の生成として Physically Based SkyとVolumetric Clouds、Cloud Layer、地形や植生の生成として TerrainとTerrain Tools、海や川などの生成としてWater System、植生の生成としてspeedtreeの利用方法についてそれぞれ解説しています。

### Unityの「Netcode for GameObjects」のサンプルで学ぶ co-opゲームの作り方

[Unityの「Netcode for GameObjects」のサンプルで学ぶ co-opゲームの作り方 | Unity Learning Materials](https://learning.unity3d.jp/8400/)

「Netcode for GameObjects」のサンプルプロジェクト「Boss Room」を内部解説をしつつ、co-op（共闘型のゲーム）を「Netcode for GameObjects」を用いて制作する方法について紹介しています。



「Netcode for GameObjects」が提供する同期機能やこれが依存する各種パッケージ、「Boss Room」を構成するネットワーク関連の各種コンポーネントの利用方法、Unity Gaming Servicesとの連携、Profilerと連携したデバッグ・プロファイリング機能などについて解説しています。

### ゲーム開発CI/CDによるバージョン管理、Plastic SCMによるベストプラクティス

[ゲーム開発CI/CDによるバージョン管理、Plastic SCMによるベストプラクティス | Unity Learning Materials](https://learning.unity3d.jp/8403/)

Plastic SCM利用のベストプラクティスについて紹介しています。



Platstic SCMを利用するメリット、Plastic SCMの開発チームでの具体的な利用例を交えたベストプラクティス（レポジトリの構成やブランチ戦略）、CI/CDを行うためのコツ（JIRA連携や、Triggerを利用した通知、マージルールの設定）についてそれぞれ解説しています。

### モバイルアプリの広告収益を最大化！Unity Mediationを使ったマネタイゼーションのすすめ

[モバイルアプリの広告収益を最大化！Unity Mediationを使ったマネタイゼーションのすすめ | Unity Learning Materials](https://learning.unity3d.jp/8406/)

Unity Mediationを使うメリットや導入方法、アプリへの組み込み、Unity Dashboardでの各種設定方法などについて紹介しています。

### PlayStation VR2向け次世代ゲーム開発

[PlayStation VR2向け次世代ゲーム開発 | Unity Learning Materials](https://learning.unity3d.jp/8408/)

PlayStation VR2向けのゲームを開発する上でUnityが提供する機能について紹介しています。



グラフィックス機能面（シングルパスレンダリングで両眼向け描画、ミラービュー、オクルージョンメッシュを用いた視認できるメッシュのみの描画など）、Play Station5 + PS VR2のための次世代グラフィックス・コンテキストとそれによるパフォーマンス結果、フォビエートレンダリング、PS VR2の視線トラッキングによる入力などについてそれぞれ解説しています。

### Unity UI team 2022 Dev Blitz Day - Q&A

[Official - Unity UI team 2022 Dev Blitz Day - Q&A - Unity Forum](https://forum.unity.com/threads/unity-ui-team-2022-dev-blitz-day-q-a.1325829/)

UnityのDev Blitz Dayという新しい取り組みについてのアナウンスがされました。



Blitz Dayとして指定された日は、特定チームのエンジニアがUnityフォーラムおよびRedditに集中的に回答します。初回は 8/26 9:00 〜 17:00（EST）にUIチームが参加しました。

## Articles

### Unity で暴れる Joint を鎮めるテクニック

[Unity で暴れる Joint を鎮めるテクニック | おいもログ](https://blog.oimo.io/2022/08/25/calm-joints-down/)

Unityでチェーンやロープのような構造をJointとRigidbodyを用いて実現するときに、Jointが暴れる問題について、その原因と対応方法について解説しています。



Jointが暴れる原因についてJointでつなぐ物体の質量比と回転運動の非線形性の観点から考察し、慣性モーメントを増やすことで対応する方法と、これをスクリプトやコライダーを加工することで増やす方法についてそれぞれ紹介しています。

### Unity + MagicOnionでメタバース空間を作ってみる

[Unity+MagicOnionでメタバース空間を作ってみる（第一回） - Qiita](https://qiita.com/ma--taku/items/7f634b72d23fcd4ede7f)

[Unity+MagicOnionでメタバース空間を作ってみる（第二回） - Qiita](https://qiita.com/ma--taku/items/e9a95eeb9b2dfdea3330)

[Unity+MagicOnionでメタバース空間を作ってみる（第三回） - Qiita](https://qiita.com/ma--taku/items/5208be177fbd62f8f5c1)



UnityとMagicOnionを用いたチャット機能からアバターの同期の実装方法、実装したサーバー実装をDockerイメージとしてコンテナ化してAWS EC2上へデプロイする方法、Oculus Quest2向けのVRアプリとして動作させる方法についてそれぞれ解説しています。

### UnityのAddressablesのRemoteコンテンツ運用 - ResourceProviderのカスタマイズ

[UnityのAddressablesのRemoteコンテンツ運用 - ResourceProviderのカスタマイズ - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/unity_addressables_provider)

アセットシステムのAdressablesでリモートに配置したアセットのロード方法や `ResourceProvider` の拡張方法、アセットのファイル管理するためのアセットのGroupの設定についてそれぞれ紹介しています。



またAddressablesを導入するメリットについて、メモリ管理や非同期ロード、LocalやRemoteを意識しないアセットロードなどの観点から解説しています。

### Geospatial APIを用いたロケーションベースARのイテレーションを効率的に回す方法

[Geospatial APIを用いたロケーションベースARのイテレーションを効率的に回す方法](https://zenn.dev/meson/articles/improve-iteration-with-recordplaybackapi)

Recording & Playaback APIを用いたロケーションベースのARのアプリ開発を効率化する方法について紹介しています。



Recording APIでカメラ画像やセンサーデータを記録しておき、Playback APIで録画したデータを再生することで、現地での計測を１度だけだけで、アプリ開発やデバッグはそのデータを用いる方法について解説しています。

### Let There Be Light: Writing Unity URP Shaders with Code, Part 2

[Let There Be Light: Writing Unity URP Shaders with Code, Part 2 | by NedMakesGames | Jul, 2022 | Medium](https://nedmakesgames.medium.com/let-there-be-light-writing-unity-urp-shaders-with-code-part-2-112d370c2b75)

URP（Universal Render Pipeline）でシェーダーを書くためのチュートリアルの第2段です。このチュートリアルでは、シェーダーにライティングを追加する方法について紹介しています。



シェーダーで影を描画するための基本的な知識から、URP標準のBlinn-Phongライティングのための関数を用いたライティングの実装、ライティングを有効にするためのシェーダーキーワードやバリアントの設定方法などについてそれぞれ解説しています。

### 【Unity Localization】 GCPのサービスアカウントでプライベートSheetsと連携 (Cronジョブ対応含む)

[【Unity Localization】 GCPのサービスアカウントでプライベートSheetsと連携 (Cronジョブ対応含む) - すぎしーのXRと3DCG](https://tsgcpp.hateblo.jp/entry/2022/08/21/193730)

Unity LocalizationパッケージのStringTableCollectionを非公開のスプレッドシートと連携する方法について紹介しています。



サービスアカウント経由でプライベートのスプレッドシートへのアクセス方法、サービスアカウント向けの `IGoogleScheetsService` の実装方法、実装した ScheetsServicesProviderを用いて Pull or Push を行う方法についてそれぞれ解説しています。



また、CIで定期的にStringTableCollectionを更新するための方法についても言及しています。

### FSR試してみた！

[【Unity】FSR試してみた！ - Qiita](https://qiita.com/TakayukiKiyohara/items/fc652576a08f214b0ac4)

Unityで標準的に利用できるAMDのFSR（FidelityFX Super Resolution）を用いたパフォーマンス検証結果について紹介しています。



端末の解像度で直接レンダリングしたものと、レンダリング解像度を50%に落として描画したのちにBilinearとFSRでそれぞれアップスケーリングしたものの描画結果とパフォーマンス（FPS）についてそれぞれ示しています。

### async/awaitがわからない

[async/awaitがわからない](https://zenn.dev/fumo/articles/04fe1720dbfa20)

独自のAwaitableパターンを実装して、それぞれの箇所でログを出力することで、async/awaitの動作を確認しています。

### 高速なスクロールビュー(無限ループやスナッピングも可能)を簡単に実装出来る EnhancedScroller

[高速なスクロールビュー(無限ループやスナッピングも可能)を簡単に実装出来る EnhancedScroller【Unity】【uGUI】【アセット】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/EnhancedScroller?utm_source=feed)

高速なスクロールビューを実装するためのEnhancedScrollerについて高速な理由やセルのスナッピングやグリッドなどについて紹介しています。

### Unity 2021.3.6fでDirectoryNotFoundExceptionと出てAndroidのビルドが失敗する

[Unity 2021.3.6fでDirectoryNotFoundExceptionと出てAndroidのビルドが失敗する](https://zenn.dev/nekomimi_daimao/articles/cd1e8fe48a42de)

Unity 2021.3.6f1でAndroidビルドが失敗する問題について、その原因を紹介しています。

## Repositories

### Asmdef Helper

[naninunenoy/AsmdefHelper: Unity assembly definition utilities.](https://github.com/naninunenoy/AsmdefHelper)

UnityのAssembly Definitionのユーティリティライブラリ。依存関係ビューワーや複数asmdeの一括編集、コンパイルロッカー、独自のasmdef作成エディターなどを提供しています。

### Swipe Detector

[burning-laboratory/unity-swipe-input: Swipe detection system for Unity game engine](https://github.com/burning-laboratory/unity-swipe-input)

モバイルプラットフォームでスワイプを認識・処理するためのライブラリ。

### Voxels

[Tuntenfisch/Voxels: GPU-based implementation of Dual Contouring in Unity for destructible voxel terrain.](https://github.com/Tuntenfisch/Voxels)

破壊可能なボクセル地形の、[Dual Contouring](https://www.cs.rice.edu/~jwarren/papers/dualcontour.pdf)（PDF）によるGPUベースな実装。

### OpenFracture

[dgreenheck/OpenFracture: Open source mesh slicing/fracturing utility for Unity](https://github.com/dgreenheck/OpenFracture)

メッシュの破壊とスライスのを行うためのパッケージで、任意のジオメトリのメッシュ（凸・非凸、穴の空いたメッシュ）の破壊とスライスをサポートしています。

### Spline Mesh

[methusalah/SplineMesh: A Unity plugin to create curved content in real-time with bézier curves](https://github.com/methusalah/SplineMesh)

ベジエ曲線に沿ったリアルタイムなコンテンツ生成ライブラリ。一般的なスプラインコンポーネントからスプラインに沿ったメッシュの曲げ加工や２次元形状のの押し出し、使いやすいエディターなどを提供します。

