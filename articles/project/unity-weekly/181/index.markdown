---
type: "unity-weekly"
title: "Unity Weekly 181"
description: "2024/07/15週のUnity Weeklyです。Shader Graph サンプルアセット、U/Day Tokyo 2024アーカイブ、Game Developers Meetingなどについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-07-16T00:00:01"
---


## Unity Officials

### New Shader Graph Production Ready Shaders in Unity 6

[New Shader Graph Production Ready Shaders in Unity 6](https://unity.com/ja/blog/engine-platform/new-shader-graph-production-ready-shaders-in-unity-6)

Unity 2022 LTS および Unity 6で利用できるあたらしいShader Graphのサンプルセットについて、その一部を紹介しています。

### U/Day Tokyo 2024 アーカイブ動画視聴 事前登録 

[U/Day Tokyo 2024 アーカイブ動画視聴 事前登録 | Unity](https://create.unity.com/uday-tokyo-2024-ondemand)

2024/07/01に開催されたU/Day Tokyo 2024の公園アーカイブ動画の一部の限定公開が開始されました。

登録ページに申し込むと限定公開のURLが案内されます。残りのアーカイブ動画は後日公開される予定です。

## Events

### Game Developers Meeting Vol.62

[Game Developers Meeting Vol.62 | Peatix](https://gdm62.peatix.com/)

Game Developers Meetingの第62回が2024/07/31に開催されます。

## Articles

### メモリークエストの解放演出におけるグラフィック表現

[『呪術廻戦 ファントムパレード』メモリークエストの解放演出におけるグラフィック表現 - Sumzap Engineering Blog](https://tech.sumzap.co.jp/entry/graphic-expression-in-jujutsuphanpara-memoryquest)

『呪術廻戦 ファントムパレード』のメモリークエストの解放演出におけるグラフィック表現の実装方法について、実装方針からシェーダーの実装までを解説しています。

### Unity Shader Graph Basics (Part 10 - Custom Functions)

[Unity Shader Graph Basics (Part 10 - Custom Functions)](https://danielilett.com/2024-07-09-tut7-14-intro-to-shader-graph-part-10/)

Shader Graphのチュートリアル記事で、カスタム関数を利用する方法と、追加のライトを取得するための実装について解説しています。

### Ways to interact with the network in Unity with examples for organizing multiplayer games

[Ways to interact with the network in Unity with examples for organizing multiplayer games - DEV Community](https://dev.to/devsdaddy/ways-to-interact-with-the-network-in-unity-with-examples-for-organizing-multiplayer-games-464f)

Unityでマルチプレイヤーゲームを構築するためのTCP・UDP・WebSocketsなどの基本的なプロトコル、UNet・Mirror・Photon・Netcode for GameObjectsなどの主要なネットワークライブラリについての特徴、メッセージプロトコルについてそれぞれ特徴やメリット・デメリットを比較して紹介しています。

### UnityでAndroid13から14へアップデートする際に起きたこととその解決法

[UnityでAndroid13から14へアップデートする際に起きたこととその解決法 #GooglePlayConsole - Qiita](https://qiita.com/ba321/items/58ea939550438eed915e)

UnityのAndroidプロジェクトのTarget API Levelを33から34に上げた際に発生したビルドエラーとその対処法について紹介しています。

### Dr. Strange Portal using Unity VFX Graph

[Dr. Strange Portal using Unity VFX Graph | SAI](https://steveimm.id/posts/portal-vfx/)

ドクター・ストレンジにでてくるようなポータルエフェクトを、VFX Graphで再現する方法を紹介しています。

基本的なセットアップからパーティクル生成のためのノード設定、ポストプロセッシング、C#スクリプトによるスポーン制御までを解説しています。

### SourceGeneratorに対してブレークポイントを用いてデバッグするにはlaunchSettings.jsonが大切

[【C#, Rider】SourceGeneratorに対してブレークポイントを用いてデバッグするにはlaunchSettings.jsonが大切 - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2024/07/11/120000)

RiderでSourceGeneratorのデバッグの際にブレークポイントを貼るための `launchSettings.json` の設定について解説しています。

### UnityでSourceGeneratorのAdditionalFilesを用いてファイル読み込みをしたい場合はcsc.rspをasmdefと同階層に配置する

[【Unity】UnityでSourceGeneratorのAdditionalFilesを用いてファイル読み込みをしたい場合はcsc.rspをasmdefと同階層に配置する - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2024/07/08/120000)

Source Generator上で外部ファイルを読み込むための `AdditionalTextsProvider` の利用方法や、Unity上での設定について紹介しています。

### 複数のAnimationCurveの波形をブレンド(合成)して使う BlendAnimationCurve

[複数のAnimationCurveの波形をブレンド(合成)して使う BlendAnimationCurve【Unity】【DOTween】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/BlendAnimationCurve)

複数の `AnimationCurve` をブレンドして利用する実装を紹介しています。

### UnityでAppleVisionPro を用いてARPlane/ARMeshを利用する方法と注意点

[【Unity】UnityでAppleVisionPro を用いてARPlane/ARMeshを利用する方法と注意点【VisionOS】 #MR - Qiita](https://qiita.com/Cova8bitdot/items/f480f30d8f11f4364ce6)

AppleVisionPro上でARFoundationフレームワークのARPlaneとARMeshを利用するための基本的な設定と、これらにRigidbodyを用いた当たり判定を実現する方法・その注意点について紹介しています。

### そろそろShaderをやるパート92 -URP編- UIの端から順に透過させる

[そろそろShaderをやるパート92 -URP編- UIの端から順に透過させる](https://zenn.dev/kento_o/articles/aa036f817e1808)

URP上でUIの中心から遠いピクセルを順に透過させるようなシェーダーを実装する方法を紹介しています。
