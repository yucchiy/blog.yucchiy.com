---
type: "unity-weekly"
title: "Unity Weekly 243"
description: "2025/10/14週のUnity Weeklyです。Package Managerの署名表示、Build Automation新機能、Render Graph講義資料などを紹介しています。"
tags: ["Unity Weekly", "Unity"]
date: "2025-10-14T00:00:01"
---

## Unity Officials

### Package Manager Changes - Package Signing and Status Labels

[Package Manager Changes - Package Signing and Status Labels - Unity Engine - Unity Discussions](https://discussions.unity.com/t/package-manager-changes-package-signing-and-status-labels/1688660)

Unity 6.3からPackage Managerに変更があり、パッケージに署名がつけることができるようになったことがアナウンスされています。
署名のステータスについて下記のステータスが追加されました。

- **Invalid signature**: パッケージのコンテンツと署名が一致しないことを表す。パッケージ破損や悪意ある改変の可能性がある
- **Unsigned**: パッケージが無署名であることを表す

まもなく各パッケージに **Signed**の表示が出るようになるとのことです。
ドキュメントは[こちらから確認できます](https://docs.unity3d.com/6000.3/Documentation/Manual/upm-signature.html)。

### Introducing Build Failure Analysis in UBA

[Introducing Build Failure Analysis in UBA - Unity Services - Unity Discussions](https://discussions.unity.com/t/introducing-build-failure-analysis-in-uba/1688937)

Unity Build Automationの新しい機能として、ビルド失敗時にビルドログを分析して、一般的な失敗パターンを表示する機能を公開したことをアナウンスしています。

### RELEASE: Input System 1.15.0

[RELEASE: Input System 1.15.0 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/release-input-system-1-15-0/1688570)

Input System 1.15.0がリリースされたことがアナウンスされています。

キーボードにMediaPlayPause・MediaRewind・MediaForwardのキーの追加や新しいFluent APIとして `WithSuppressedActionPropagation` の追加、`InputAction`のバインディングを動的に表示するMonoBehaviourサンプル`InputActionLabel`の追加、様々なバグフィックスが行われています。

CHANGELOGの全文は[こちらより確認できます](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.15/changelog/CHANGELOG.html#1150---2025-10-03)。

### In Case You Missed It - September 2025

[In Case You Missed It - September 2025 - News & General Discussion - Unity Discussions](https://discussions.unity.com/t/in-case-you-missed-it-september-2025/1688254)

Unity公式が2025/09に投稿した主要なディスカッションをまとめています。


## Articles

### Unity 6 Render Graph入門～Render Graphの仕組みと簡単なポストプロセス実装～

[CyberAgentGameEntertainment/RenderGraphTutorial: Render Graph Learning Repository](https://github.com/CyberAgentGameEntertainment/RenderGraphTutorial)

サイバーエージェントがUnity 6におけるRender Graphの仕組みや活用方法を解説した資料を公開しています。

Render Graphの概要からこの機能が実現したい最適化の下地としてタイルベースレンダリングやGPUの並列動作についての説明や、これらのUnityのRender Graphでの実装との関連性について解説しています。

またハンズオン演習として、シーンをモノクロ化した画像とセピア化した画像を合成するポストプロセスをRender Graphで実装する例を紹介しています。

### AudioResource, AudioClip, AudioRandomContainer Interactions

[AudioResource, AudioClip, AudioRandomContainer Interactions](https://gametorrahod.com/audio-random-container/)

SFXプレイヤーオーディオプラグインを開発する著者による、Unity6以降に追加されているAudioResourceやAudioRandomContainerなどの所感を紹介する記事です。

まず、AudioResourceやAudioRandomContainerの内部的な挙動を実験ベースで説明したのち、このAPIでライブラリを開発するにあたっての懸念として、制御のためのAPIの少なさや内部で使っているPlayableGraphなどと組み合わせた際の挙動の不安定さなどを指摘しています。

### GPU Instanced Grass Breakdown

[GPU Instanced Grass Breakdown | Cyanilux Shader Tutorials](https://www.cyanilux.com/tutorials/gpu-instanced-grass-breakdown/)

URPでのGPUインスタンシングを活用した多数の草をレンダリングするテクニックについて、インスタンシングからGPU上でのフラスタムカリングの実装をUnityの各バージョン（Unity2021.2、2022、6、それ以前）ごとに追加された機能での実装を含めて解説しています。

### Unity Shader Graph Basics (Part 11 - Terrains)

[Unity Shader Graph Basics (Part 11 - Terrains)](https://danielilett.com/2025-10-12-tut9-11-terrains/)

Shader GraphでTerrainシェーダーを実装するためのチュートリアルです。

この記事では、Unity 6.3によるShader GraphによるTerrainシェーダーサポート前の独自での対応方法を紹介しており、
Terrainシェーダーを実装するのに必要な基本的なプロパティの説明からシンプルなLit Shaderの実装、
応用的な実装として、法線の情報から傾斜を推定して岩テクスチャをペイントする実装や
ゲームでよくあるワールドスキャンのような地形を走査するようなビジュアルエフェクトを実現する方法をそれぞれ解説してます。

### Unity Shader Graph Basics (Part 12 - Post Processing)

[Unity Shader Graph Basics (Part 12 - Post Processing)](https://danielilett.com/2025-10-14-tut9-12-post-processing/)

Shader Graphでポストプロセスエフェクトを実装するためのチュートリアルで、Unity 2022で追加されたFullscreen Shader Graphの機能を用いて、
グレースケールフィルターとエッジ検出ベースのアウトラインエフェクトを実装する方法についてそれぞれ紹介しています。

### Unity で MQTT を使って IoT デバイスと通信する

[Unity で MQTT を使って IoT デバイスと通信する - e.blog](https://edom18.hateblo.jp/entry/2025/10/06/080050)

Unityアプリで、MQTTnetを用いてIoTデバイス（この記事ではM5Stack）と通信するためのUnity側およびIoTデバイス側の実装を紹介しています。

また、UnityアプリをAndroidアプリとしてビルドした際の不具合とその対処法についても言及しています。

### Zelda Recall Rune in Unity URP

[Zelda Recall Rune in Unity URP](https://danielilett.com/2025-10-11-tut7-16-recall-rune/)

ゼルダの伝説ティアーズオブキングダムのRecall Rune（モドレコ）のビジュアルエフェクトをURPで再現するチュートリアルです。

このビジュアルエフェクトの要素分解から、このエフェクトを再現するための深度テストやエッジ検出、ポストプロセスやRender Featuresの実装についてそれぞれ解説しています。

### Unity 属性の一覧と概要

[Unity 属性の一覧と概要](https://zenn.dev/mtlom/articles/eb846e8c301ee6)

Unityでランタイムおよびエディターで使える属性の一覧を列挙して、その属性の機能概要をそれぞれ紹介しています。

### RiderでJunieのMCPとしてserenaとunity-mcpを使えるようにする

[RiderでJunieのMCPとしてserenaとunity-mcpを使えるようにする](https://zenn.dev/fumio_dev/articles/68643323e06e60)

Riderから使えるAIエージェントであるJunie上で、Unityを操作するためにunity-mcpやコンテキストの効率的な管理のためにserenaを導入する方法を紹介しています。 

### Unity x SteamのCI上のデプロイで自動バージョン付与でバグトラッキング精度を向上する

[Unity x SteamのCI上のデプロイで自動バージョン付与でバグトラッキング精度を向上する](https://zenn.dev/nonchalant0303/articles/168fba00c74f1e)

UnityのWindowsアプリビルドの際に、CI上でビルドしたGitレポジトリのハッシュを付与することで、アプリのバージョンを追いやすくする仕組みを紹介しています。 