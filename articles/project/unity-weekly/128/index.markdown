---
type: "unity-weekly"
title: "Unity Weekly 128"
description: "2023/07/03週のUnity Weeklyです。HDRP Water System、URP Visual Effect、Unity Sentis & Unity Muse、New AI marketplaceなどについてまとめています。"
tags: ["Unity Weekly","Unity"]
date: "2023-07-03T00:00:01"

---

## Unity Officials

###  The new Water System in Unity 2022 LTS and 2023.1

[The new Water System in Unity 2022 LTS and 2023.1 | Unity Blog](https://blog.unity.com/engine-platform/new-hdrp-water-system-in-2022-lts-and-2023-1)

Unity 2022.2のHDRPから利用できるWater Systemについて紹介しています。

Water Systemの概要からデモプロジェクト、調整のためのパラメータ、波の高さなどをCPU側でサンプリングするAPIや2023.1から実装されてるFoam Generator、ゲーム世界とシミュレーションの統合、パフォーマンスなどについてそれぞれ解説しています。

### 12 recipes for popular visual effects using the Universal Render Pipeline 

[12 recipes for popular visual effects using the Universal Render Pipeline | Unity Blog](https://blog.unity.com/engine-platform/12-recipes-for-popular-visual-effects-using-universal-render-pipeline)

StencilやToon & Outline Shadingなどのゲームでよく使われるビジュアルエフェクトをURPで実現するためのレシピ集「Recipes for popular visual effects using the Universal Render Pipeline」が公開されました。

この記事では、レシピ集で扱っているテクニックの概要を紹介しています。

またレシピ集は、[こちらのリンクから](https://resources.unity.com/ebooks/the-universal-render-pipeline-cookbook-unity-2022-lts-edition)ダウンロードできます。

### Introducing Unity Muse and Unity Sentis, AI-powered creativity

[Introducing Unity Muse and Unity Sentis, AI-powered creativity | Unity Blog](https://blog.unity.com/engine-platform/introducing-unity-muse-and-unity-sentis-ai)

UnityのAI活用のためのプロダクトがクローズベータリリースされました。

2つのプロダクトがリリースされ、Unity SentisがプロジェクトにAIを組み込むためのランタイム、Unity Museがアセット生成支援のためのシステムとなります。

またAIソリューションのサードパーティパッケージが[Unity Asset Storeでダウンロードできるようになりました](https://assetstore.unity.com/ai-hub)。

### 9 Verified Solutions on the Unity Asset Store's new AI Marketplace

[9 Verified Solutions on the Unity Asset Store's new AI Marketplace | Unity Blog](https://blog.unity.com/news/9-verified-solutions-on-new-unity-asset-store-ai-marketplace)

Unity Asset Storeの新しいAIマーケットプレイスで利用可能になったサードパーティーソリューションの中から、検証済みソリューションを9つの概要を紹介しています。

## Articles

### 【Unityにおける大量描画のテクニック】ライフゲームタワーを使ったパフォーマンス比較

[【Unityにおける大量描画のテクニック】ライフゲームタワーを使ったパフォーマンス比較 | QualiArtsエンジニアブログ](https://technote.qualiarts.jp/article/56)

大量のキューブを、GameObject配置（MeshRenderer複数配置）や`DrawMesh`、`DrawMeshInstanced`、`DrawMeshInstancedProcedural`で描画した際のパフォーマンス比較とメリット・デメリットについて解説しています。

### Chunk Iteration in Entities 1.0

[Chunk Iteration in Entities 1.0 – COFFEE BRAIN GAMES](https://coffeebraingames.wordpress.com/2023/06/25/chunk-iteration-in-entities-1-0/)

Entities 1.0においてチャンクに対するイテレーション処理を書くためのプラクティスを紹介しています。

### Input SystemのInteractionの仕組みと使い方

[【Unity】Input SystemのInteractionの仕組みと使い方 | ねこじゃらシティ](https://nekojara.city/unity-input-system-interaction)

Input Systemで入力パターンを検知するためのInteractionについて、その概要から基本的な使い方、独自のInteractionを実装する方法についてそれぞれ解説しています。

### Unity でエディタ拡張向けの重い画像生成の改善をしてみた

[Unity でエディタ拡張向けの重い画像生成の改善をしてみた - 凹みTips](https://tips.hecomi.com/entry/2023/06/29/234749)

エディタ拡張上で画像を生成して表示するというケースの最適化事例として、画像生成ジョブの非同期化やキャッシュ参照などのテクニックを紹介しています。

### 実はあったSerializedDictionary

[実はあったSerializedDictionary - Qiita](https://qiita.com/shirokuma1101/items/4a1bb6ea4038cd2f540c)

Core RPに実装されているシリアライズ可能な辞書型`SerializedDictionary`について、その概要と使い方を紹介しています。

### Optimizing Performance and Boosting FPS in Unity Games

[Optimizing Performance and Boosting FPS in Unity Games | HackerNoon](https://hackernoon.com/optimizing-performance-and-boosting-fps-in-unity-games?source=rss)

Unityのゲームでパフォーマンスを改善するためのテクニックを紹介しています。

### 正式リリースされたばかりのECS Graphicsを触ってみた – DOTS Instancing とは？

[【Unity】正式リリースされたばかりのECS Graphicsを触ってみた – DOTS Instancing とは？ – – 株式会社ロジカルビート](https://logicalbeat.jp/blog/15417/)

ECSとECS Graphicsの概要と、大量のオブジェクト描画のパフォーマンスをDOTS InstancingとSRP Batcherでそれぞれ比較しています。

## Repositories

### przemyslawzaworski/Unity-GPU-Based-Occlusion-Culling

[przemyslawzaworski/Unity-GPU-Based-Occlusion-Culling](https://github.com/przemyslawzaworski/Unity-GPU-Based-Occlusion-Culling?)

静的・動的の両方に対応したGPUベースのオクルージョンカリングシステム。

### LibraStack/UnityMvvmToolkit

[LibraStack/UnityMvvmToolkit: Brings data-binding to your Unity project](https://github.com/LibraStack/UnityMvvmToolkit?)

UnityでMVVMアーキテクチャによるUIを制作するためのツールキット。

### jackyyang09/Simple-Unity-Audio-Manager

[jackyyang09/Simple-Unity-Audio-Manager: A decentralized audio playing system for Unity, designed for simplicity and built to scale!](https://github.com/jackyyang09/Simple-Unity-Audio-Manager?)

シンプルに設計され拡張性の高い分散型オーディオシステム。