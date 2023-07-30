---
type: "unity-weekly"
title: "Unity Weekly 132"
description: "2023/07/31週のUnity Weeklyです。Nature Shader in 2022 LTS、Unite 2023、Megacity multiplayer sample、YetAnotherHttpHandlerなどについて取り上げています。"
tags: ["Unity Weekly","Unity"]
date: "2023-07-31T00:00:01"

---

## Unity Officials

### How to make nature shaders with Shader Graph in 2022 LTS

[How to make nature shaders with Shader Graph in 2022 LTS | Unity Blog](https://blog.unity.com/engine-platform/nature-shaders-with-shader-graph-in-2022-lts)

Unity 2022 LTSで、スタイライズされた water shader や 半現実的な sand shader の Shader Graph による実装を紹介しています。

### What to expect at Unite 2023

[What to expect at Unite 2023 | Unity Blog](https://blog.unity.com/news/what-to-expect-at-unite-2023)

Unite 2023で取り上げられる予定のコンテンツや、参加方法について紹介しています。

### Welcome to Megacity: Our competitive-action multiplayer sample

[Welcome to Megacity: Our competitive-action multiplayer sample | Unity Blog](https://blog.unity.com/games/megacity-competitive-action-multiplayer-sample-game)

対戦アクションマルチプレイヤーゲームのサンプルであるMegacityがリリースされました。

このデモではECSによるハイパフォーマンスなゲーム実装から Netcode for Entities パッケージ と UGS を用いたマルチプレイヤーの実装が含まれています。

サンプルプロジェクトは下記リンクからダウンロードできます。

[Unity-Technologies/MegacityMultiplayer: Megacity Multiplayer is an action-packed, shooter game based on the original Megacity sample. It leverages the power of Netcode for Entities for an immersive, multiplayer experience that can support 64+ players simultaneously.](https://github.com/Unity-Technologies/MegacityMultiplayer)

### More capabilities to make your multiplayer game even better

[More capabilities to make your multiplayer game even better | Unity Blog](https://blog.unity.com/games/more-multiplayer-capabilities-for-games)

UGSのマルチプレイヤーゲーム制作に関するサービスに追加された AWS S3からゲームサーバーのビルドを直接アップロードする機能 と、 UGSのCLIツールのリリースについて紹介しています。

### Unity ECS で高速化！とりあえずキャラを 5,000 体出してみよう！

[Unity ECS で高速化！とりあえずキャラを 5,000 体出してみよう！ - YouTube](https://www.youtube.com/watch?v=zn3m6ZFppdQ)

[はじめての Unity ECS - Entity Component System を使ってみよう！](https://www.youtube.com/watch?v=vzF00Wb6wNY)で利用したサンプルプロジェクトのダンサーの体数を5000体に増やし、さらにスポーン処理とダンサーのアニメーション処理を高速化する方法について解説しています。

## Articles

### Unity用のHTTP/2(gRPC) Client、YetAnotherHttpHandlerを公開しました

[neue cc - Unity用のHTTP/2(gRPC) Client、YetAnotherHttpHandlerを公開しました](https://neue.cc/2023/07/28_yetanotherhttphandler.html)

Unityで利用できる HTTP/2 Client、 [YetAnotherHttpHandler](https://github.com/Cysharp/YetAnotherHttpHandler) がリリースされました。このライブラリの実装背景から技術スタックについて紹介しています。

### Unityが提供する、モバイルハードでも美しく表現する描画方式「URP」とは何か。Unityの人に訊いてみた

[Unityが提供する、モバイルハードでも美しく表現する描画方式「URP」とは何か。Unityの人に訊いてみた - AUTOMATON](https://automaton-media.com/articles/reportjp/20230729-257473/)

URPの特徴について、HDRPと比較しつつUnityの中の人が紹介しています。

### あてっこ！ぷにまるずを支える技術紹介 〜モバイルWebGLの開発事例〜

[あてっこ！ぷにまるずを支える技術紹介 〜モバイルWebGLの開発事例〜 - Mirrativ Tech Blog](https://tech.mirrativ.stream/entry/2023/07/26/160551?utm_source=feed)

ミラティブが開発するモバイルブラウザ上で動くWebGLアプリ「あてっこ！ぷにまるず」で利用しているライブラリの紹介と導入経緯についてまとめています。

### Unityでもgrpc-dotnetを使ったgRPCがしたい

[Unityでもgrpc-dotnetを使ったgRPCがしたい - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/grpc-dotnet-unity)

grpc-dotnet-unityを用いてUnity上でgRPC通信を行う方法についてまとめています。

### AnimatorやPlayableGraphからも卒業！？スキニング・スケルタルアニメーションの独自実装をして全局面で勝つ・前編

[【Unity】AnimatorやPlayableGraphからも卒業！？スキニング・スケルタルアニメーションの独自実装をして全局面で勝つ・前編【中級者向け】](https://www.infiniteloop.co.jp/tech-blog/2023/07/animatorreplacepart1/)

BurstとBatchRendererGroupによる独自のスケルタルアニメーション実装の概要と、Unity標準のアニメーション再生とのパフォーマンス比較の結果を紹介しています。

### Unity公式LoggingのConfigurationを理解する

[Unity公式LoggingのConfigurationを理解する](https://zenn.dev/mochineko/articles/143f7f01de7694)

Unity公式のロギングパッケージの各種設定項目についてまとめています。

また、実際にアプリをリリースすることを想定した開発時やリリース時の設定例や、現状のロギングパッケージを使う際の注意点についても言及しています。

### How to instantiate a prefab in ECS?

[How to instantiate a prefab in ECS? – COFFEE BRAIN GAMES](https://coffeebraingames.wordpress.com/2023/07/28/how-to-instantiate-a-prefab-in-ecs/)

ECS（Entity Component System）でプレハブをインスタンス化するための `IComponentData` と `ISystem` の実装から、サブシーンのセットアップ方法についてそれぞれ解説しています。

### Unity Prefabs 101: Improving Your Workflow with Reusable Game Objects

[Unity Prefabs 101: Improving Your Workflow with Reusable Game Objects](https://blog.gladiogames.com/all-posts/unity-prefabs-101-improving-your-workflow-with-reusable-game-objects?)

通常のプレハブから Prefab Variants や Nested Prefabs の作成からプレハブの解除（Unpacking）方法、プレハブ更新時のオーバーライドポップアップの説明とプレハブ内に複数の別プレハブを含めていたときに別プレハブを更新した際のオーバーライドの挙動、プレハブ作成のベストプラクティスについてまとめています。

### WebGLでGoogle Analyticsへカスタムイベントを送信する

[【Unity】WebGLでGoogle Analyticsへカスタムイベントを送信する - Qiita](https://qiita.com/kazuki_kuriyama/items/c1a7e4839fadc0c8c9d6)

FirebaseのUnity SDKはWebGL非対応のため、jslib側から直接Google Analyticsのjsを呼び出すことでGoogle Analyticsのカスタムイベントを送信する方法について紹介しています。

### Unity の Version Defines と.unitypackage インポートについて

[Unity の Version Defines と.unitypackage インポートについて - 凹みTips](https://tips.hecomi.com/entry/2023/07/30/191152)

特定の外部パッケージがインストールされている際に自動でDefine Symbolsを定義する「Version Defines」が、対象の外部パッケージを `*.unitypack` 経由でインストールした場合に動作しない挙動についてまとめています。

## Repositories

### Cysharp/YetAnotherHttpHandler

[Cysharp/YetAnotherHttpHandler: YetAnotherHttpHandler brings the power of HTTP/2 (and gRPC) to Unity and .NET Standard.](https://github.com/Cysharp/YetAnotherHttpHandler)

Unityで利用できる HTTP/2 Clientライブラリ。HttpClientのHttpHandlerとして実装されているので、ハンドラを置き換えることでHttpClientと同じAPIが利用できる。

### Release v0.113.0 · vrm-c/UniVRM

[Release v0.113.0 · vrm-c/UniVRM](https://github.com/vrm-c/UniVRM/releases/tag/v0.113.0)

UniVRMのv0.113.0に、VRM向けのアニメーションフォーマット「VRM Animation」のドラフトが公開されました。

### gree/MuscleCompressor

[gree/MuscleCompressor](https://github.com/gree/MuscleCompressor)

ヒューマノイドアニメーションを、`*.anim`のかわりに[Muscle](https://docs.unity3d.com/2021.3/Documentation/Manual/MuscleDefinitions.html)を用いて読み込み・書き出しするためのライブラリ。

`*.anim` と比べてフォーマットが軽量で、最大96%の圧縮率を実現する。



### Unity-Technologies/MegacityMultiplayer

[Unity-Technologies/MegacityMultiplayer: Megacity Multiplayer is an action-packed, shooter game based on the original Megacity sample. It leverages the power of Netcode for Entities for an immersive, multiplayer experience that can support 64+ players simultaneously.](https://github.com/Unity-Technologies/MegacityMultiplayer)