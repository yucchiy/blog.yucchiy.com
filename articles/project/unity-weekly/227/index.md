---
type: unity-weekly
title: Unity Weekly 227
description: >-
  2025/06/16週のUnity Weeklyです。「Into the Dead: Our Darkest Days」HDRP活用事例、General
  C# & DOTS-specific performance tips、Unity AssetManagerなどについて取り上げています。
pubDatetime: 2025-06-15T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---


## Unity Officials

### Behind PikPok’s Real-Time Lighting Setup For Into the Dead: Our Darkest Days

[Behind PikPok’s Real-Time Lighting Setup For Into the Dead: Our Darkest Days | Unity](https://unity.com/resources/pikpok-into-the-dead-our-darkest-days)

「[Into the Dead: Our Darkest Days](https://store.steampowered.com/app/2239710/Into_the_Dead_Our_Darkest_Days/)」のHDRPで構築されたリアルタイムライティングについて、HDRPを採用するに至った経緯から、このゲームにおけるライティングの課題から最適化のためのライトのLODシステムからレベルにおけるライティングを最適化するためのアーティストツールの構築、昼夜を表現するためのライトの設定などについて紹介しています。

### So your code is slow: General C# and DOTS-specific performance tips

[So your code is slow: General C# and DOTS-specific performance tips - Technical Articles - Unity Discussions](https://discussions.unity.com/t/so-your-code-is-slow-general-c-and-dots-specific-performance-tips/1654372)

パフォーマンスを最適化するためのC#コーディングについての考え方や、C#・DOTSにおけるパフォーマンス・チューニングのTipsを紹介しています。

### Introduction to Asset Manager Transfer Methods
　
[Introduction to Asset Manager Transfer Methods | Unity](https://unity.com/resources/asset-manager-transfer-methods)

[Unity Asset Manager](https://unity.com/products/asset-manager)のビジュアルツールとしてのウェブインターフェイスやエディター拡張、プログラムツールとしてPythonによるCLIツールやPixyz SDK、AssetManager SDKやREST APIについてそれぞれ紹介しています。

## Articles

### CBUFFER外パラメータによる描画崩れ

[【Unity / SRP Batcher】CBUFFER外パラメータによる描画崩れ](https://zenn.dev/r_ngtm/articles/unity-srpbatch-globalparameter-bug)

SRP Batcher環境下でのマテリアルのパラメーターの定義として、`CBUFFER_START`と`CBUFFER_END`で囲ったパラメーターとそうでないものについて、それぞれのパラメーターがiOSとAndroidでどのようにあつかわれているのかについて、XcodeのGPUキャプチャやRenderDocを用いて確認しています。

### SmartAddresserアップデート：複数のルールセットを透過的に扱える新機能「CompositeLayoutRuleData」を追加しました

[SmartAddresserアップデート：複数のルールセットを透過的に扱える新機能「CompositeLayoutRuleData」を追加しました - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2025/06/09/162536)

Addressableのアドレスやラベルの付与を自動化する[Smart Addresser](https://github.com/CyberAgentGameEntertainment/SmartAddresser)のアップデートとして、複数のルールセットを透過的に扱える「CompositeLayoutRuleData」について紹介しています。

### シェーダーのConstantBufferを自作する

[【Unity / iOS】シェーダーのConstantBufferを自作する](https://zenn.dev/r_ngtm/articles/unity-reduce-constantbuffer)

ConstantBufferを独自で定義してC#コード上からシェーダーに値を渡す方法から、Xcode上でGPUキャプチャを行った際にどのようにバッファーが利用されているかの確認、C#から値を渡すための `ConstantBuffer.PushGlobal` と `Shader.SetGlobalFloat` の2つのAPIのパフォーマンスについて比較しています。

### Firebase AI Logic for Unity

- [Firebase AI Logic for Unity：画像生成・画像解析の実装と検証](https://zenn.dev/hololab/articles/firebase-ai-logic-unity-image-generation-analysis)
- [Firebase AI Logic for Unity：Live API実装ガイド　リアルタイム音声対話を実現する](https://zenn.dev/hololab/articles/firebase-ai-logic-unity-live-api)

[Firebase AI Logic for Unity](https://firebase.blog/posts/2025/05/ai-logic-unity-androidxr/)による画像生成や画像解析、Live APIを用いたリアルタイム音声対話の実装について、コードを交えつつ紹介しています。

### UnityのBuildProfileの設定をスクリプトから変更する方法

[UnityのBuildProfileの設定をスクリプトから変更する方法 #Unity - Qiita](https://qiita.com/Akome/items/9d0bc3d94648915b52a7)

Unity 6から追加されたBuild Profileの設定を、スクリプトから操作するための実装について紹介しています。

### iStepでキャラクターの足を地形に合わせて配置する

[【アセット紹介】iStepでキャラクターの足を地形に合わせて配置する【Unity】 - Raspberlyのブログ](https://raspberly.hateblo.jp/entry/iStep)

地形に沿った足の配置を行うアセット「[iStep](https://assetstore.unity.com/packages/tools/animation/istep-215843)」について、基本的な使い方を紹介しています。

### Unityのゲーム以外をいい感じに設計する

[Unityのゲーム以外をいい感じに設計する](https://zenn.dev/d_forest/articles/af7bbca511eb0e)

Unityプロジェクトで、Layered ArchitectureやDIP（Dependency Inversion Principle）を適用した設計について紹介しています。
