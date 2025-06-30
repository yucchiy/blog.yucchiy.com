---
type: "unity-weekly"
title: "Unity Weekly 229"
description: "2025/06/30週のUnity Weeklyです。Unity 6.2 Beta Release、アウトライン実装、ZLinqなどについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2025-06-30T00:00:01"
---

## Unity Officials

### Unity 6.2 Beta Release Announcement & Features

- [Unity 6.2 Beta Release Announcement & Features | Unity](https://unity.com/blog/unity-6-2-beta-release-announcement-data-driven-stability)
- [Introducing data controls and better game diagnostics in the Unity 6.2 beta - Unity Engine - Unity Discussions](https://discussions.unity.com/t/introducing-data-controls-and-better-game-diagnostics-in-the-unity-6-2-beta/1658915)

Unity 6.2のベータバージョンの最新版（Unity 6000.2.0b7）のリリースのアナウンスと、このリリースで提供されるデータ収集とおもにUnity Dashboardの改善機能を強化するための「Developer Data Framework」について概要を紹介しています。
この機能で収集されたデータは、Unityのパフォーマンス改善（や、オプトイン形式によるUnity AIの学習データへの活用がアナウンスされています。

詳細は[こちらのページ](https://docs.unity.com/en-us/cloud/developer-data-framework)より確認できます。

また、Unity AIにFLUXやGPT-Imageなどの新しいモデルをベースにした事前トレーニングモデルによる2Dスプライト生成機能の大幅な改善・拡張についても紹介されています。


## Articles

### The easiest way to render an outline in Unity

[The easiest way to render an outline in Unity](https://ameye.dev/notes/easiest-outline-in-unity/)

ステンシルマスクと頂点押し出し法による、カスタムC#コードなし・既存のUnity機能とシンプルなアウトラインシェーダーを実装する方法について紹介しています。

また、アウトラインシェーダーを他のテクニックで実現する方法などについても簡単に言及しています。

### ZLinq for Unity移行ガイド

[ZLinq for Unity移行ガイド](https://zenn.dev/matsuataru/articles/zlinq_transfer_unity)

ZLinqへの `ZLinq.DropInGenerator` によるLINQからの移行の際にプロジェクトで課題となった、ZLinqが独自の `ValueEnumerable` を基底にもつことによって発生する、
明示的に `IEnumerable<T>` を利用している箇所がある場合にコンパイルエラーが発生する事象について、パターンに分けて対応方法を紹介しています。

### 10万オブジェクトを低レイヤーの力で描画する

[10万オブジェクトを低レイヤーの力で描画する](https://zenn.dev/ebimonaca/articles/508462b7fb9594)

大量のオブジェクトの描画を、パフォーマンス上問題のあるミニマムなコードをUnityプロファイラやRenderDocを確認して問題を特定しつつ、
`Graphics.DrawMeshInstancedIndirect` などを用いて高速化する方法について解説しています。

### CustomRenderTextureを使用してReflectionProbeで使用するBakeされたCubeMapを調整する

[CustomRenderTextureを使用してReflectionProbeで使用するBakeされたCubeMapを調整する #Unity - Qiita](https://qiita.com/marv_ootake/items/5a4afec9577b4e90660e)

`CustomRenderTexture` を用いて、ReflectionProbeに利用されているCubeMapに対してシェーダーを用いたテクスチャの調整を行う方法について紹介しています。

### ログのラッパークラスのログをクリックしても呼び出し元に飛ぶようにする&ラッパーをConsoleに表示しない方法

[ログのラッパークラスのログをクリックしても呼び出し元に飛ぶようにする&ラッパーをConsoleに表示しない方法【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/HideInCallstack)

独自のログクラスを実装した際に、Unityエディターのコンソール上に表示されるメッセージをクリックした際に、ログクラスの実装ではなくログの呼び出し元にジャンプさせるためのUnityの仕様の解説と、
`HideInCallstack` を用いて、コンソールに表示されるスタックトレースの一覧から、ログクラスの呼び出しの行を削除する方法についてそれぞれ解説しています。

### Unity上でスポットライトとシャドウマップを自作してみた

[Unity上でスポットライトとシャドウマップを自作してみた #Shader - Qiita](https://qiita.com/bino_rdl/items/2cee6e2bbfe77618d113)

独自のスポットライトとシャドウマップを実装するための `ScriptableRenderPass` と `ScriptableRendererFeature` について紹介しています。

### Unity向けIncremental Source Generatorのテストを書く

[【Unity】【Rider】Unity向けIncremental Source Generatorのテストを書く - LIGHT11](https://light11.hatenadiary.com/entry/2025/06/23/193332)

Incremental Source Generatorが生成するコードに対して、ユニットテストを記述する方テストを記述する方法について紹介しています。

### Unity WebGL 負荷対策と最適化

[Unity WebGL 負荷対策と最適化](https://zenn.dev/1stscratch/articles/a2718d682d89f2)

WebGLビルドのUnityアプリでメモリ不足の際に発生する問題なや、メモリ使用量を削減するためのテクスチャの設定すするためのテクスチャの設定やスクリプティング、ローディングが途中で止まる問題についての対策についてそれぞれ紹介しています。

### Encoding.UTF8.GetStringでBOM付きのutf8を読み込むとutf16のBOMが入ることに気づいた

[【C#】Encoding.UTF8.GetStringでBOM付きのutf8を読み込むとutf16のBOMが入ることに気づいた - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2025/06/23/120000)

`Encoding.UTF8.GetString` でBOM付きのutf8を読み込んだ際の挙動や、`File.ReadAllText` や `File.ReadAllText(path, Encoding.Utf8)` などで同じくテキストを読み取った時の挙動の違いについてまとめています。

### Azure AI Foundry Voice Live APIをUnityで使う実装解説

[Azure AI Foundry Voice Live APIをUnityで使う実装解説 #LLM - Qiita](https://qiita.com/miyaura/items/ad30d4ba11aa6f0adb14)

[Azure AI Foundry](https://azure.microsoft.com/ja-jp/products/ai-foundry)のVoice Live APIの概要から、
このAPIを用いた音声認識や会話の作成を行うためのAPIのやり取りや、Unity上でAPIとやり取りするための実装についてそれぞれ紹介しています。