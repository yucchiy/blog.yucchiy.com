---
type: "unity-weekly"
title: "Multiplayer Development、BR200、SRP Dev Blitz Day - Unity Weekly 087"
description: "2022/09/26週のUnity Weeklyです。マルチプレイヤーゲーム開発やBR200プロジェクト、SRPチームのDev Blitz Dayなどについて取り上げました。"
tags: ["Unity Weekly","Unity"]
date: "2022-09-25T15:00:00"

---

## Unity Officials

### Announcing new tools for multiplayer development in Unity

[Announcing new tools for multiplayer development | Unity Blog](https://blog.unity.com/games/multiplayer-networking-tools-launch-announcement)

Unityでマルチプレイヤーなゲームを制作する際に利用できるSDKやツール、サンプルゲームプロジェクトについて紹介しています。



また、Photon FusionとUnity Game Server Hosting（Multiplay）を組み合わせた、最大同時プレイヤー数200人の大規模なバトルロワイヤルのサンプルプロジェクト「[BR200](https://assetstore.unity.com/packages/templates/packs/br200-battle-royale-multiplayer-with-photon-fusion-226753)」が公開されました。

このサンプルはPhoton社と連携して開発されていて、ネットワークの実装以外にも、武器システムや投擲システム、リコイル、キャラクターコントローラー、アニメーション同期実装など様々な実装を含みます。

### GPUインスタンシングでペンライト演出を作る！

[【Unity】GPUインスタンシングでペンライト演出を作る！](https://youtu.be/5BPezehWwOA)

ライブで観客がペンライトを振るような演出を題材に、GPUインスタンシングで同じメッシュを色や姿勢を変えて大量に描画する方法について紹介しています。



基本的なGPUインスタンシングによるオブジェクトの描画方法からStructured Bufferを介してインスタンスごとにパラメータを渡す方法、カリングの粒度をある程度保ちつつ1024個以上のインスタンスを描画するための描画の工夫についてそれぞれ解説しています。

### Scriptable Render Pipeline Dev Blitz Day 2022 - Q&A - Unity Forum

[Official - Scriptable Render Pipeline Dev Blitz Day 2022 - Q&A - Unity Forum](https://forum.unity.com/threads/scriptable-render-pipeline-dev-blitz-day-2022-q-a.1339088/)

Unityの特定チームのエンジニアがRedditフォーラムの質問に集中的に回答するDev Blitz Dayの２回目が 9/29 に開催されます。



今回はSRP（Scriptable Render Pipeline）の開発チームが参加し、URP（Universal Render Pipeline）やHDRP（High Definition Render Pipeline）、SRPなどの話題について回答する予定です。

## Articles

### Sand Balls Mechanics Implementation: The Best Way To Deform A Mesh In Unity — Part II: MeshData And Optimization

[Sand Balls Mechanics: How To Deform A Mesh In Unity Part II](https://gamedev.center/sand-balls-mechanic-implementation-how-to-deform-a-mesh-the-most-performant-way-part-2/)

[MeshData API](https://docs.unity3d.com/2020.1/Documentation/ScriptReference/Mesh.MeshData.html)を用いてジョブ内でメッシュを変形する方法について紹介しています。



また、メッシュの変形のパフォーマンスを向上させる方法としてメッシュ解像度の調整やジョブ内でのメッシュのベイク、（今回の事例が2Dなので）Z軸を固定した物理シミュレーションの検討と実際のパフォーマンスについても解説しています。

### MessagePipeを触ってみる1 概要・導入編

[【Unity】MessagePipeを触ってみる1 概要・導入編 - Qiita](https://qiita.com/toRisouP/items/4775f15a6612ab765892)

ハイパフォーマンスなメッセージングライブラリ「[MessagePipe](https://github.com/Cysharp/MessagePipe)」について概要から導入について紹介しています。　



MessagePipeの概要からこの提供するPub/Subパターン実装についての説明、UniRxのMessageBroker・Observableとの比較、MessagePipeを実際に使って入力とオブジェクトの操作を疎結合にするサンプルについてそれぞれ解説しています。

### XR Plug-in ManagementによるXR機能（サブシステム）の仕組みを追う

[XR Plug-in ManagementによるXR機能（サブシステム）の仕組みを追う - e.blog](https://edom18.hateblo.jp/entry/2022/09/24/xr-plugin-management)

XR Plug-in Managementで提供されるXR機能（サブシステム）が、どのような仕組みで実装されているのかについて紹介しています。



[coder89/arfoundation-mock](https://github.com/coder89/arfoundation-mock)というサブシステム実装を例に、サブシステムの設定から初期化、機能実装がどのように実現されているのかについて解説しています。

### 運用開始から4か月経ってから振り返るAWS&GitHub&Terraformを使ったUnity CI環境

[運用開始から4か月経ってから振り返るAWS&GitHub&Terraformを使ったUnity CI環境 - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/2022/09/22/153523)

AWS上に構築されたUnityのCI環境を社内で4ヶ月運用して、実際に起こった出来事や解決方法について紹介しています。



GitHub上のレポジトリのサイズが大きいことによって発生した帯域問題とそれを解決するためのビルドキャッシュやUnity Acceleratorの導入とマシンの強化について、iOSやMacプラットフォームのビルドを行うためのMac環境の準備やSelf-Hosted RunnerによるMac環境構築、Firebase App Distributionを用いた社内テストについてそれぞれ解説しています。

### PIXを使って、描画負荷を計測してみる

[【Unity】PIXを使って、描画負荷を計測してみる](https://zenn.dev/r_ngtm/articles/unity-study-pix-profiling)

Microsoftが開発するWindows環境向けのパフォーマンスチューニング・デバッグツールであるPIXを用いてUnity製アプリの実際のドローコールを計測や処理負荷を計測する方法について紹介しています。



また、PIXを用いて実際の重たい処理を特定する方法や、その中から重たい処理を確認する（記事では影の処理負荷が重たいのでそちらのパフォーマンスの確認する）方法についてそれぞれ解説しています。

## Repositories

### Dream Textures

[artnas/Unity-Plane-Mesh-Splitter: Split large meshes in Unity into smaller submeshes](https://github.com/artnas/Unity-Plane-Mesh-Splitter)

任意のメッシュを、より小さなサブメッシュに分割するツール。新しいMesh構築APIや頂点データのコピー処理の簡略化、Burstの導入によりパフォーマンスの大幅な向上と複数スレッドへの作業負荷の分散などの最適化が行われています。



巨大なメッシュを適当なサイズに分割することでUnity組み込みのfrustum cullingの効果を受けやすくして、描画パフォーマンスを向上させることを目的としています。

### KlakMath

[keijiro/KlakMath: An extension library for Unity Mathematics.](https://github.com/keijiro/KlakMath)

[Unity Mathematics](https://docs.unity3d.com/Packages/com.unity.mathematics@1.2/manual/index.html)の拡張ライブラリ。Mathematicsには存在しない補間関数やノイズ関数、擬似乱数などの機能を提供します。



先日リリースされたv2.0.0ではMutable structからReadonly structを積極的に利用するように実装が見直されました。

### UIComponents

[jonisavo/uicomponents: A small front-end framework for Unity's UIToolkit with a goal to reduce boilerplate code and make development more fun!](https://github.com/jonisavo/uicomponents)

UIToolkit向けのフロントエンドフレームワーク。UIToolkitで再利用可能なコンポーネントを簡単に実装できるようにUXMLとUSSの自動的なロードや、DIによるUIコンポーネントが利用する各UIの自動割り当てなどの実装が含まれます。

### AutoScreen for Unity2021

[su10/AutoScreen-for-Unity2021: A smart solution for Safe Area in Unity.](https://github.com/su10/AutoScreen-for-Unity2021)

Unity 2021以降向けのセーフエリア実装。このライブラリの提供するコンポーネントを用いることで、エディターの再生・非再生中に関わらず、（Device Simulatorの）シミュレーションウインドウによってデバイスのセーフエリアを考慮した配置を簡単に確認できます。



