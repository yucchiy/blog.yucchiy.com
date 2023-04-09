---
type: "unity-weekly"
title: "Unity Weekly 116"
description: "2023/04/10週のUnity Weeklyです。Unite 2023、2022.2 Physics アップデート、配置テクニック、Netcode for GameObjects、UGSなどについてまとめています。"
tags: ["Unity Weekly","Unity"]
date: "2023-04-10T00:00:01"

---

## Unity Officials

### Join Unity’s World-Renowned Conference for Creators

[Join Unity’s World-Renowned Conference for Creators | Unite 2022](https://unity.com/events/unite)

Unite 2023が、11/15〜11/16にオランダのアムステルダムで開催される予定です。


### Unity の物理エンジン最新機能を紹介！ 2022.2 Physics アップデート

[Unity の物理エンジン最新機能を紹介！ 2022.2 Physics アップデート](https://www.youtube.com/watch?v=FtYtM3q-pEY)

Unity 2022.2のPhysicsアップデートの中から重心と慣性テンソルのInspector上での設定やSimulation ModeのUpdate、Collision Layer Override、Contact Eventの最適化などについてそれぞれ紹介しています。


### 配置を超加速する11のテクニック

[配置を超加速する11のテクニック](https://www.youtube.com/watch?v=lrQAhLi8bOk)

ゲームオブジェクトを配置する際に利用できるテクニックを、オブジェクトにピタッとくっつける（Vertex snapping）や、一定の値だけ動かす（increment snapping）、グリッドに沿って配置する（grid snapping）、数式を使って等間隔に並べるなど、11個紹介しています。


### Build a production-ready multiplayer game with Netcode for GameObjects

[Build a production-ready multiplayer game with Netcode for GameObjects | Unity Blog](https://blog.unity.com/games/build-a-production-ready-multiplayer-game-with-netcode-for-gameobjects)

Netcode for GameObjectsを用いてマルチプレイヤーゲームを実装する方法をまとめた4部構成のウェビナーシリーズについて、それぞれのウェビナー動画の概要を紹介しています。


### Unity Gaming Services: 5 highlights from recent releases

[Unity Gaming Services: 5 highlights from recent releases | Unity Blog](https://blog.unity.com/engine-platform/unity-gaming-services-5-highlights-from-recent-releases)

UGSで最近リリースされた機能の中から5つ紹介しています。


## Articles

### Visual Effect Graphを使ってパーティクルエフェクトを作成してみる

[【Unity】Visual Effect Graphを使ってパーティクルエフェクトを作成してみる](https://logicalbeat.jp/blog/11053/)

VFXGraphの概要も簡単なパーティクル作成手順、実験的機能であるメッシュサンプリングを用いたメッシュ上にパーティクルを配置するような表現などを解説しています。

また、既存のParticle Systemとのパフォーマンスについても言及しています。


### 3Dモデルの頂点を引き伸ばして、シャドウボリュームを描画してみる

[【URP】3Dモデルの頂点を引き伸ばして、シャドウボリュームを描画してみる](https://zenn.dev/r_ngtm/articles/urp-vertex-shadow-volume)

頂点シェーダーでの頂点引き伸ばしによるシャドーボリューム表現について、シャドーボリュームのためのパスをRender Objectsを用いて追加する方法やシェーダーの実装、オーバードロー抑制のためのステンシルバッファの活用についてそれぞれ解説しています。


### URPでも任意のタイミングでGrabPassする

[URPでも任意のタイミングでGrabPassする](https://zenn.dev/fuqunaga/articles/005cb0380d495e)

BiRPのGrabPassをURPでCameraOpaqueTextureを用いて再現する方法と、より細かいタイミングで画面のキャプチャを行うためのRenderFeatureの設定や実装について解説しています。


### let's 👏 talk 👏 about 👏 normals

[let's 👏 talk 👏 about 👏 normals | Team Dogpit on Patreon](https://www.patreon.com/posts/80837090)

ビュー空間やワールド空間、接空間などそれぞれの空間における法線をまとめています。


### Runner 2

[Runner 2](https://catlikecoding.com/unity/tutorials/prototypes/runner-2/)

エンドレスランゲームのプロトタイピングについて、ロジックや移動などのゲームの基本的な実装から、背景やビジュアル面の実装についてそれぞれ解説しています。


### Stealth Vision in Unity URP

[Stealth Vision in Unity URP](https://danielilett.com/2023-04-07-tut6-4-stealth-vision/)

Stealth Vision（ステルスゲームなどでよくある、壁越しにオブジェクトを見ることのできる表現）を実現するテクニックについて紹介しています。

URPとRender FeaturesのRender Objectsを用いて壁越しのオブジェクトに対して特定のマテリアルを適用する方法と、X-ray Material（オブジェクトのエッジを強調するような表現）とLava Lamp Material（ディゾルブ的な表現）をShader Graphで実装する方法についてそれぞれ解説しています。


### ディザリングを実装してみた

[【Unity】ディザリングを実装してみた - シェーダーTips](https://ny-program.hatenablog.com/entry/2023/04/09/195811)

ディザリング（一定間隔に穴を開けて、不透明描画だが半透明のような見た目を表現するための手法）を実装する方法について、穴をあけるしきい値パターンとその実装についてそれぞれ紹介しています。


### A Comprehensive Guide to the Execution Order of Unity Event Functions

[A Comprehensive Guide to the Execution Order of Unity Event Functions](https://www.edy.es/dev/docs/a-comprehensive-guide-to-the-execution-order-of-unity-event-functions/)

Unityの各種イベントの実行順を網羅的にまとめたチートシートが公開されています。


### スプラインの経路情報をスクリプトから扱う

[【Unity2022】スプラインの経路情報をスクリプトから扱う](https://nekojara.city/unity-splines-path)

オブジェクトの移動を、Splineパッケージで表現した曲線に沿ってスクリプト上で実現する方法について、経路情報の扱い方や、実際の実装方法についてそれぞれ紹介しています。


### 配列のインデックス・範囲の指定方法まとめ

[【C#】配列のインデックス・範囲の指定方法まとめ - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/04/06/120000)

配列に対するインデックスおよび範囲指定について、 C# 8.0 から追加された記法を含めて紹介しています。


### 10 Shaders Explained Quickly

[10 Shaders Explained Quickly](https://danielilett.com/2023-04-07-tut6-5-10-shaders-quickly/)

アウトラインやディゾルブ、シルエットなど計10種のシェーダーをShader Graphで実装するための方法について説明しています。


### Input Systemで長押しを実現する

[【Unity】Input Systemで長押しを実現する](https://nekojara.city/unity-input-system-hold)

Input SystemのHold Interactionを用いて、ボタンの長押しを実装する方法について紹介しています。


### 【Addressable】複数キーを指定してロードする際のMergeModeの使い道

[【Unity】【Addressable】複数キーを指定してロードする際のMergeModeの使い道 - LIGHT11](https://light11.hatenadiary.com/entry/2023/04/05/200636)

Addressablesの `LoadAssetsAsync` に指定できる `Addressables.MergeMode` についてその具体的な利用例を解説しています。


### GraphViewに取って代わる？ノードベースGUIツールを作るためのパッケージ「GraphTools Foundation」の概要と現状

[【Unity】GraphViewに取って代わる？ノードベースGUIツールを作るためのパッケージ「GraphTools Foundation」の概要と現状 - LIGHT11](https://light11.hatenadiary.com/entry/2023/04/03/203231)

Unityが開発するグラフビューを実装するためのパッケージ「GraphTools Foundation」について、その概要や、現在標準で提供される「Graph View」との立ち位置などについて紹介しています。


### UnityでもAIのコーディング支援機能「GitHub Copilot」を使って効率&生産性爆上がり！ (料金、セキュリティ&ライセンス問題対応、導入と設定、どんな時に便利か)

[UnityでもAIのコーディング支援機能「GitHub Copilot」を使って効率&生産性爆上がり！ (料金、セキュリティ&ライセンス問題対応、導入と設定、どんな時に便利か)【Unity】【JetBrains Rider】【AI】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/GitHub_Copilot_Unity_Rider)

GitHub Copilotの概要から料金体系や学習や記述コードの学習利用に関する設定やライセンスに関する問題に対しての設定、Riderで利用するための設定方法についてそれぞれ解説しています。


### UnityのAssemblyDefinitionの推奨設定とその理由

[UnityのAssemblyDefinitionの推奨設定とその理由](https://zenn.dev/mochineko/articles/14ff2978af9943)

Assembly Definitionの各種設定についてまとめています。


## Repositories

### CyberAgentGameEntertainment/SmartAddresser

[CyberAgentGameEntertainment/SmartAddresser: Automate Addressing, Labeling, and Version Control for Unity's Addressable Asset System.](https://github.com/CyberAgentGameEntertainment/SmartAddresser)

Addressableアセットシステムのアドレスやラベルの付与を自動化するためのツール。


### CatDarkGame/AISkyboxGenerator

[CatDarkGame/AISkyboxGenerator: A project that uses AI Prompt commands in the Unity Engine to generate Skybox Panorama images.](https://github.com/CatDarkGame/AISkyboxGenerator)

スカイボックス画像をAIプロンプトで生成するプロジェクト。


### NullTale/LutLight2D

[NullTale/LutLight2D: Stylized pixel art lighting for Unity 2D](https://github.com/NullTale/LutLight2D)

LUT（Look Up Table）を用いたピクセルアートにおけるスタイライズなライト表現。


### corentin-ryr/Boat-Simulation

[corentin-ryr/Boat-Simulation: Buoyancy simulation with mesh intersection in Unity.](https://github.com/corentin-ryr/Boat-Simulation)

メッシュオブジェクトの浮力シミュレーション。