---
type: "unity-weekly"
title: "Unity Weekly 174"
description: "2024/05/27週のUnity Weeklyです。Muse Chat、Project TCC、リリースノートRSS Feed変更点などについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-05-27T00:00:01"

---


## Unity Officials

### Using rich LLM integrations to power relevance and reliability with Muse Chat

[Using rich LLM integrations to power relevance and reliability with Muse Chat | Unity Blog](https://blog.unity.com/engine-platform/llm-integration-relevance-reliability-unity-muse-chat)

Unityエディターやプロジェクトのコンテキストに基づいた回答を行えるMuse Chatについて、そのパイプラインや利用例について紹介しています。

### Change to RSS Feeds on Release Pages on Unity.com

[Official - Change to RSS Feeds on Release Pages on Unity.com - Unity Forum](https://forum.unity.com/threads/change-to-rss-feeds-on-release-pages-on-unity-com.1596654/)

UnityのリリースページのRSSの一部URLが変更される予定です。

パッチリリースフィードが無くなりアルファとテックリリースのフィードの新設や、RSSフィード自体もリリースノート全文をサーブしていたものがリリースノートへのリンクになるなど一部変更が入るとのことです。

### Unity 6 Preview が公開されました

[Unity 6 Preview が公開されました | Unity Blog](https://blog.unity.com/ja/engine-platform/unity-6-preview-release)

[Unity 6 Preview Release Features & Highlights](https://blog.unity.com/engine-platform/unity-6-preview-release) の日本語翻訳記事です。

Unity 6のプレビュー（Unity 2023.3 Tech Stream）が2024/05/01にリリースされました。

この記事ではこのバージョンで追加・改善された機能の中から、レンダリングのパフォーマンス改善やWebGPU・DirectX12バックエンドのプラットフォーム向けの新機能、XR向けの機能改善、マルチプレイヤー向けのツール、ECS、Unity SentisなどのAI、MemoryProfilerやUIToolkitなどの生産性や機能性向上のためのアップデートなどについてそれぞれ紹介しています。

### URP と HDRP に関する Unity 最大の e ブックが Unity 2022 LTS 対応版にアップデート

[URP と HDRP に関する Unity 最大の e ブックが Unity 2022 LTS 対応版にアップデート | Unity Blog](https://blog.unity.com/ja/engine-platform/unity-2022-lts-updates-urp-hdrp-e-books)

[Unity 2022 LTS URP and HRDP e-books for advanced users| Unity Blog](https://blog.unity.com/engine-platform/unity-2022-lts-updates-urp-hdrp-e-books) の日本語翻訳記事です。

Unity 2022 LTSに対応したURPとHRDPの電子書籍「[Introduction to the Universal Render Pipeline for advanced Unity creators](https://unity.com/ja/resources/introduction-universal-render-pipeline-for-advanced-unity-creators-2022lts)」と「[Lighting and environments in the High Definition Render Pipeline](https://unity.com/ja/resources/hdrp-lighting-environments-2022-lts-ebook)」について、それぞれの書籍の概要とアップデート内容について紹介しています。

### 3 つのアップデートに加え、Unity Muse のすべての機能がエディターで利用可能に

[3 つのアップデートに加え、Unity Muse のすべての機能がエディターで利用可能に | Unity Blog](https://blog.unity.com/ja/engine-platform/unity-muse-ai-capabilities-in-editor-plus-new-updates)

[All Unity Muse AI capabilities are now available in the Editor, plus 3 new updates](https://blog.unity.com/engine-platform/unity-muse-ai-capabilities-in-editor-plus-new-updates) の日本語翻訳記事です。

Unity Museのアップデートによって利用可能になったエディター機能として、Unityに特化したAIチャット、アニメーション生成、LLMによるキャラクター挙動の生成（Behaviour Treeの生成）について紹介しています。

### 使ってみようProject TCC 〜インストールから中身の見方までを解説！〜

[使ってみようProject TCC 〜インストールから中身の見方までを解説！〜 - YouTube](https://www.youtube.com/watch?v=glhitMtGn5c)

Project TCCのインストール方法から、サンプルシーンのプロジェクト上での構成の説明、キャラクターの制御方法の確認としてPlayer InputやScript Machineの確認方法について紹介しています。

## Articles

### 非同期処理とasync/await

[【C#】非同期処理とasync/await - Annulus Games](https://annulusgames.com/blog/async-await/)

C#の非同期処理とasync/await、C# 8.0で追加された非同期ストリームや`IAsyncEnumerable<T>`についての基本的な使い方やasync/awaitがコンパイル後にどのようなコードに変換されているのかについて解説しています。

また、Unityの非同期処理を行う仕組みであるコルーチンとの比較やUniTaskの実装などについても言及しています。

### ECS Programming Patterns from Official Packages

[ECS Programming Patterns from Official Packages](https://gametorrahod.com/ecs-patterns/)

`Unity.Entities` を参照しているUnityの公式パッケージから学ぶことのできるECSのプログラミングパターンについて紹介しています。

### Sun Beams / God Rays Shader Breakdown

[Sun Beams / God Rays Shader Breakdown | Cyanilux](https://www.cyanilux.com/tutorials/god-rays-shader-breakdown/)

ゴッドレイシェーダーをShaderGraphで実装する方法について解説しています。

### Unity Shader Graph Basics (Part 8 - Scene Intersections 1)

[Unity Shader Graph Basics (Part 8 - Scene Intersections 1)](https://danielilett.com/2024-05-21-tut7-12-intro-to-shader-graph-part-8/)

UnityのShaderGraphに関するチュートリアルシリーズで、シーン上の他オブジェクトと物理的に交差するときにオブジェクトの見た目を変更するようなシェーダーを実装する方法について解説しています。

### UnityでCallerArgumentExpression属性, required修飾子, initアクセサを利用する方法(自分で定義する必要があり)
 
[【Unity】UnityでCallerArgumentExpression属性, required修飾子, initアクセサを利用する方法(自分で定義する必要があり) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2024/05/20/120000)

Unityで `CallerArgumentExpression` 属性や `required` 修飾子、`init` アクセサーなどの、デフォルトでは利用できない機能を利用するための方法について紹介しています。

### Roslynを使った構文解析とセマンティック解析のやり方まとめ

[【.NET】Roslynを使った構文解析とセマンティック解析のやり方まとめ - LIGHT11](https://light11.hatenadiary.com/entry/2024/05/20/190949)

.NETのRoslynを使った構文解析とセマンティック解析について基本的な要素や使い方について紹介しています。

## Repositories

### Unio

[hadashiA/Unio: Unio (short for unity native I/O) is a small utility set of I/O using native memory areas.](https://github.com/hadashiA/Unio)

Unityのネイティブメモリを活用してGC.Allocを回避するI/Oライブラリ。
あわせてUnityの `NativeArray<T>` から `Memory<T>` や `ArrayBufferWriter<T>` を生成するAPIも提供しています。
