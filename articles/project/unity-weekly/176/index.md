---
type: unity-weekly
title: Unity Weekly 176
description: 2024/06/10週のUnity Weeklyです。Unite 2024、カスケードシャドウマッピング、シェーダー最適化などについて取り上げています。
pubDatetime: 2024-06-09T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unite 2024 Registrations are now LIVE!

[Official - Unite 2024 Registrations are now LIVE! - Unity Forum](https://forum.unity.com/threads/unite-2024-registrations-are-now-live.1600377/)

2024/09/18 ~ 09/20に開催されるUnite 2024の参加登録が開始されました。

## Articles

### URP14のカスケードシャドウマッピングの実装を読んでみる

[【Unity】URP14のカスケードシャドウマッピングの実装を読んでみる](https://zenn.dev/r_ngtm/articles/urp14-cascaded-shadow)

カスケードシャドウマッピングの基本的な仕組みから、URP14におけるカスケードシャドウマッピングの実装を解説しています。

### シェーダー最適化入門 第1回目「条件分岐を使いこなせ」

[シェーダー最適化入門 第1回目「条件分岐を使いこなせ」 - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2024/05/29/142930)

シェーダープログラミングにおける処理分岐として静的分岐と動的分岐の違いや、動的分岐におけるGPU上での処理の流れ、これらを踏まえた上で最適化のためのコーディング指針について紹介しています。

### 学園アイドルマスターの眉毛のShaderをUnityで再現してみた

[学園アイドルマスターの眉毛のShaderをUnityで再現してみた | gam0022.net](https://gam0022.net/blog/2024/05/29/gakumasu-mayuge-shader/)

学園アイドルマスターの眉毛の表現をURP上で再現する方法について、モデルの準備からStencilを使うパターンとDepth Offsetを使うパターンの2つの方法を紹介しています。

### Custom SRP 3.0.0

[Custom SRP 3.0.0](https://catlikecoding.com/unity/custom-srp/3-0-0/)

Catlike CodingのCustom SRPチュートリアルシリーズで、シンプルなTiled Forward+ renderingの実装について解説しています。
また、この機能をデバッグするためのレンダリングデバッガーの実装についてもあわせて紹介しています。

### Unity6からRenderGraphを使いこなそう ー 基本機能編

[Unity6からRenderGraphを使いこなそう ー 基本機能編 - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2024/06/04/171757)

HDRPやURP17以降で導入されたRenderGraphについて、基本的な機能や従来のレンダーパイプラインと比べたときのメリット、レンダリングパイプライン上でのレンダーパスやフレームリソースを確認できるRender Graph Viewerの使い方について紹介しています。

### Unity 6 PreviewでColor32に `IEqutable<Color32>` が実装された

[Unity 6 PreviewでColor32にIEqutable<Color32>が実装された #Unity6 - Qiita](https://qiita.com/RyotaMurohoshi/items/051b091ff46dc0518d3d)

Unity 6 Previewにて `Color32` に `IEqutable<Color32>` が実装されたことを紹介しています。

### EnumをHLSLコードに生成するGenerateHLSLを試す

[【URP14】EnumをHLSLコードに生成するGenerateHLSLを試す](https://zenn.dev/r_ngtm/articles/urp14-shader-generator)

`GenerateHLSL` を利用して、C#のEnumからHLSLコードを生成する方法を紹介しています。
