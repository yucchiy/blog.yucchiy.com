---
type: unity-weekly
title: Unity Weekly 175
description: >-
  2024/06/03週のUnity Weeklyです。Shader variants optimization and
  troubleshooting、DOTS e-book、Odin Inspector & Validator Student
  planなどについて取り上げています。
pubDatetime: 2024-06-02T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity shader variants optimization and troubleshooting

[Unity shader variants optimization and troubleshooting | Unity Blog](https://blog.unity.com/engine-platform/shader-variants-optimization-troubleshooting-tips)

シェーダーバリアントの最適化とトラブルシューティングとして、生成・利用されているシェーダーバリアントの確認方法や設定やグラフィックスAPI、スクリプト経由でバリアントをストリッピングする方法などのについてそれぞれ紹介しています。

### Understanding DOTS: Advanced developer e-book and Guide

[Understanding DOTS: Advanced developer e-book and Guide | Unity Blog](https://blog.unity.com/engine-platform/new-ebook-understanding-unity-dots)

Unity公式が、DOTSについての電子書籍「[Introduction to the Data-Oriented Technology Stack](https://unity.com/ja/resources/introduction-to-dots-ebook)」を公開しました。

この記事では、この電子書籍の概要とDOTSのパフォーマンスについて紹介しています。

### Students Get Odin Inspector and Validator for Free with Unity

[Students Get Odin Inspector and Validator for Free with Unity | Unity Blog](https://blog.unity.com/games/odin-inspector-validator-free-unity-student-plan)

Unity Student Planの一環として、Odin InspectorとOdin Validatorが無料で提供されることが発表されました。


## Articles

### ビルドログから理解するシェーダーストリッピング

[【Unity / URP14】ビルドログから理解するシェーダーストリッピング【シェーダーバリアント】](https://zenn.dev/r_ngtm/articles/unity-shaderstripping)

URP14環境で、シェーダーバリアントをビルド時のログから確認する方法から`shader_feature`と`multi_compile`の違いやこれらが混在する場合の挙動の検証、シェーダーバリアントのストリッピングの確認方法、`IPreprocessShaders` によるスクリプト経由でのストリッピング方法、URP14から使えるストリッピング挙動をカスタマイズする `IShaderVariantStripper` などについてそれぞれ解説しています。

### Boost Unity Game Performance With IL2CPP_USE_SPARSEHASH

[Boost Unity Game Performance With IL2CPP_USE_SPARSEHASH](https://gamedev.center/instantly-boost-unity-game-performance-with-il2cpp_use_sparsehash/)

il2cppのメタデータのメモリ上での保存方法と、その保存に使われるデータ構造を `IL2CPP_USE_SPARSEHASH` に `0` を設定することで密なハッシュマップを用いてパフォーマンス向上を見込めること、デフォルトで利用される疎なハッシュマップとのパフォーマンスの比較について紹介しています。

### ホロライブアプリでのAddressable AssetSystem活用事例

[ホロライブアプリでのAddressable AssetSystem活用事例｜カバー株式会社　公式note](https://note.cover-corp.com/n/nba3cbd32f74f)

ホロライブアプリでのAddressablesとScriptable Build Pipelineの導入事例について紹介しています。

### UnityのDI超ざっくり入門

- [UnityのDI超ざっくり入門 1 - そもそもUnityのDIって何？](https://zenn.dev/qemel/articles/ad6cf484d8280a)
- [UnityのDI超ざっくり入門 2 - [SerializeField]とコンストラクタでPureC#込みのゲーム設計をする](https://zenn.dev/qemel/articles/4a032e10b3629c)
- [UnityのDI超ざっくり入門 3 - VContainerを使ってみる](https://zenn.dev/qemel/articles/14d247b9945527)

Unity上でのDI（Dependency Injection）の基本的な概念やメリットの説明から、簡単なDIのスクラッチ実装、実装した仕組みをVContainerで置き換える方法についてそれぞれ紹介しています。

### Unity Shader Graph Basics (Part 9 - Scene Intersections 2)

[Unity Shader Graph Basics (Part 9 - Scene Intersections 2)](https://danielilett.com/2024-05-28-tut7-13-intro-to-shader-graph-part-9/)

[Unity Shader Graph Basics (Part 8 - Scene Intersections 1)](https://danielilett.com/2024-05-21-tut7-12-intro-to-shader-graph-part-8/)の続きで、シーン上の他オブジェクトとの交差を用いたウェーブフォームとエッジグローエフェクトを実装する方法について紹介しています。

### ObservableCollections.ObservableDictionaryをReadonlyにしたい

[ObservableCollections.ObservableDictionaryをReadonlyにしたい #C# - Qiita](https://qiita.com/toRisouP/items/c8d5e2cbe9a4dae4bbb8)

Cysharpの提供する[ObservableCollections](https://github.com/Cysharp/ObservableCollections)の `ObservableDictionary` をReadOnlyとして提供するラッパークラスの実装を紹介しています。

### 【UI Toolkit】スクロール位置などビューに関わるデータを保存するView Dataの使い方

[【Unity】【UI Toolkit】スクロール位置などビューに関わるデータを保存するView Dataの使い方 - LIGHT11](https://light11.hatenadiary.com/entry/2024/05/22/193751)

UI ToolkitのView Dataの使い方と、これを用いて `ScrollView` のスクロール位置を永続化する方法について紹介しています。

### Unity Tutorial: Fake Cloud Shadows

[Unity Tutorial: Fake Cloud Shadows](https://mirzabeig.substack.com/p/unity-tutorial-fake-cloud-shadows)

簡単なフェイククラウドシャドウを実現する方法について紹介しています。
