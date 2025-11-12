---
type: unity-weekly
title: Unity Weekly 137
description: >-
  2023/09/04週のUnity Weeklyです。Muse Chat、Visual Compositor、Unity Awards、2D
  Animationなどについて取り上げています。
pubDatetime: 2023-09-03T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### 4 ways to use Muse Chat in your workflow

[Ways to use Muse Chat throughout your workflows | Unity Blog](https://blog.unity.com/engine-platform/use-muse-chat-in-your-workflow)

6/27にクローズドベータでリリースされたUnity Museに実装されているMuse Chatについて、これの利用例について4つ紹介しています。

### AI を活用した Unity Muse と Unity Sentis の紹介

[AI を活用した Unity Muse と Unity Sentis の紹介 | Unity Blog](https://blog.unity.com/ja/engine-platform/introducing-unity-muse-and-unity-sentis-ai)

[Introducing Unity Muse and Unity Sentis, AI-powered creativity](https://blog.unity.com/engine-platform/introducing-unity-muse-and-unity-sentis-ai) の日本語訳記事です。

この記事では、UnityのAI活用のためのプロダクトがクローズベータリリースについてのアナウンスと、具体的にリリースされたUnity SantisとUnity Museについて紹介しています。

またAIソリューションのサードパーティパッケージが[Unity Asset Storeでダウンロードできるようになった](https://assetstore.unity.com/ai-hub)旨についても触れています。

### Visual Compositor の紹介：Unity でのリアルタイムでノードベースの画像合成！

[Visual Compositor の紹介：Unity でのリアルタイムでノードベースの画像合成！ - YouTube](https://www.youtube.com/watch?v=MUNpz-_hVuo)

Unityで画像合成を行う「Visual Compositor」パッケージについての紹介動画です。この動画ではパッケージの基本的な使い方について紹介しています。また、実験的な機能としてStable Diffusionとの連携についても触れています。

### The 15th Unity Awards - Call for nominations

[Official - The 15th Unity Awards - Call for nominations - Unity Forum](https://forum.unity.com/threads/the-15th-unity-awards-call-for-nominations.1486323/)

今回で15回目を迎えるUnity Awardsが開催されます。9/11までノミネートを募集し、10月にノミネート作品の発表、11月のUniteで受賞者がライブ発表されます。

## Articles

### 【もぉん流】Unity 2D Animation 入門

[【もぉん流】Unity 2D Animation 入門](https://zenn.dev/matsu_friends/books/34195b3174515f)

2D Animationパッケージを利用した2Dアセットのスキニングアニメーションについて、このパッケージの各種ツールの利用方法とアニメーションの制作方法について解説しています。

### Compute Shaders in Unity: Boids simulation on GPU, Shared Memory

[ArtStation - Compute Shaders in Unity: Boids simulation on GPU, Shared Memory](https://www.artstation.com/blogs/degged/Ow6W/compute-shaders-in-unity-boids-simulation-on-gpu-shared-memory)

Compute Shaderを用いたGPUベースのBoidシミュレーションの実装について解説しています。

### 論文を読んで紐物理を実装してみよう(PBD)

[[Unity] 論文を読んで紐物理を実装してみよう(PBD)](https://zenn.dev/nrdev/articles/141dbc5774f666)

Position-Based Dynamicsを用いた紐の挙動のシミュレーションの実装について、論文を参照しつつ、その実装について解説しています。

### UnityのSplineパッケージを使ってプロシージャルな壁を作る方法

[UnityのSplineパッケージを使ってプロシージャルな壁を作る方法](https://zenn.dev/clay_andromeda/articles/unity-spline-wall-01)

Splineパッケージに含まれる `SplineExtrude` を利用して、曲線に沿って壁をプロシージャルに生成する方法について紹介しています。

### How to create a Mario Kart Item Box with Unity Shader Graph | Jettelly

[How to create a Mario Kart Item Box with Unity Shader Graph | Jettelly](https://www.jettelly.com/blog/creating-mario-kart-item-box-with-shader-graph-in-unity)

マリオカートのアイテムボックスのような表現をShader Graphで実現する方法について紹介しています。

### Shaderのマテリアルプロパティを見やすくしてみよう

[Shaderのマテリアルプロパティを見やすくしてみよう - Qiita](https://qiita.com/skkn/items/76767ee7e1897e5ba8ec)

マテリアルの各種プロパティを見やすく表示するための `CustomShaderGUI` 実装について、標準の StandardShader などを参考にしつつ、見た目の整え方について解説しています。

### How to add sprite preview to the Inspector window

[How to add sprite preview to the Inspector window — Sunny Valley Studio](https://www.sunnyvalleystudio.com/blog/unity-2d-sprite-preview-inspector-custom-editor)

インスペクター上にスプライトのプレビュー画像を表示する方法について紹介しています。

### Unsafe.WriteUnalignedとMemoryMarshal.GetReferenceとSpanを組み合わせてメモリのコピーを行う

[【C#】Unsafe.WriteUnalignedとMemoryMarshal.GetReferenceとSpanを組み合わせてメモリのコピーを行う - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/08/28/120000)

`Unsafe.WriteUnaligned` と `Span` を用いたメモリーのコピー方法について紹介しています。

### to paint random tiles with weighted probability – Unity Tilemap

[How to paint random tiles with weighted probability – Unity Tilemap | 2D Extras – Stuart's Pixel Games](https://stuartspixelgames.com/2023/08/31/how-to-paint-random-tiles-with-weighted-probability-unity-tilemap-2d-extras/)

### Unity エディタ再起動方法 ( UnityHubが開いちゃう人向け )

[Unity エディタ再起動方法 ( UnityHubが開いちゃう人向け ) - Qiita](https://qiita.com/matsumotokaka11/items/bfdf59c172f382a0e132)

エディターをスクリプト上から再起動する方法について、 [CsReference](https://github.com/Unity-Technologies/UnityCsReference) を参考にしつつ実装方法を紹介しています。

### RectTransformの値が変わったのを検知する****

[【ハルシオンブログ】RectTransformの値が変わったのを検知する - ハルシオンシステムの気ままBlog](http://halcyonsystemblog.jp/blog-entry-1006.html)

`UIBehaviour.OnRectTransformDimensionsChange` を用いて `RectTransform` の値の変更を検知する方法を紹介しています。

### UaaL(Unity as a Library)のサンプルプロジェクトを起動する

[【Unity/Android】UaaL(Unity as a Library)のサンプルプロジェクトを起動する](https://zenn.dev/dara/articles/aeadd5c721a0d6)

Android上でUaaLを起動する方法について紹介しています。

### プレハブのプレビュー画像を表示する例

[【Unity】プレハブのプレビュー画像を表示する例 - コガネブログ](https://baba-s.hatenablog.com/entry/2023/08/30/131822?utm_source=feed)

アセットのプレビュー画像を取得する `AssetPreview.GetAssetPreview` について紹介しています。

## Repositories

### PrimeTween

[KyryloKuzyk/PrimeTween: High-performance, allocation-free animation library for Unity](https://github.com/KyryloKuzyk/PrimeTween)

アロケーションフリーかつ高性能なTweenライブラリ。インスペクターからアニメーションを直接編集でき、実行時のメモリ割り当ては一切行われない。

### Audio-Manager-for-Unity

[microsoft/Audio-Manager-for-Unity: A tool for defining and executing audio behaviors in Unity in a node based editor](https://github.com/microsoft/Audio-Manager-for-Unity)

ノードベースエディターでUnityのオーディオ挙動を定義して実行するためのツール。

### Unity-Theme

[IvanMurzak/Unity-Theme: Create palettes of colors and components for change specific color on a specific visual element. Very useful to UI.](https://github.com/IvanMurzak/Unity-Theme#readme)

特定のビジュアル要素の色を制御する、テーマ実装。

### Voronoi destruction effect

[OskarSigvardsson/unity-delaunay: A Delaunay/Voronoi library for Unity, and a simple destruction effect](https://github.com/OskarSigvardsson/unity-delaunay)

ボロノイ分割による破壊効果を実装するためのライブラリ。
