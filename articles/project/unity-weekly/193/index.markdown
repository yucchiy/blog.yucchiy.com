---
type: "unity-weekly"
title: "Unity Weekly 193"
description: "2024/10/07週のUnity Weeklyです。Unified Rendering、URP-AlphaBypassなどについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-10-07T00:00:01"
---

## Unity Officials

### Unified Rendering - Unity Engine - Unity Discussions

[Unified Rendering - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unified-rendering/1519264)

Unite2024のUnityEngineロードマップで発表された「Unified Rendering」についてのスレッドがUnity Disscussionsに立てられました。

「Unified Rendering」が立ち上がった背景や課題感、Unity6以降での移行計画などのついて紹介しています。

### URP-AlphaBypass

[keijiro/URP-AlphaBypass: Alpha preserving feature for Unity URP](https://github.com/keijiro/URP-AlphaBypass)

カラーターゲットのアルファチャンネルをポストプロセスパスにより上書きされるのを防ぐためのURPサンプルプロジェクト

## Articles

### 崩壊スターレイルのキャラクターレンダリング再現

[[Unity]崩壊スターレイルのキャラクターレンダリング再現 #Shader - Qiita](https://qiita.com/metaaa/items/c8968257e40dcfb7d0d8)

lilToolShaderをベースに、「崩壊スターレイル」のグラフィックを再現するための顔の影の制御やセルフシャドウ、眉やアウトラインの描画の制御について解説しています。

### オブジェクト大量描画のスタート地点に立とう

[【Unity】オブジェクト大量描画のスタート地点に立とう](https://zenn.dev/nigiri/articles/a94a92a3f50a2f)

Unityで大量のオブジェクトを描画するテクニックを、`Graphics.DrawXXX`と`Grahics.RenderXXX`APIの違いから`Grahics.DrawMeshInstanced`の基本的な使い方、ComputeShaderの組み合わせ方まで解説しています。

### Enumを簡単にStringとしてシリアライズできるパッケージ作りました

[Enumを簡単にStringとしてシリアライズできるパッケージ作りました - きゅぶろぐ](https://blog.kyubuns.dev/entry/2024/10/06/115505)

ブログ著者が開発しているEnumをStringとしてシリアライズできる「[StringSerializableEnum](https://github.com/kyubuns/StringSerializableEnum)」について紹介しています。

### YetAnotherHttpHandlerを用いてHTTP/2を扱えるHttpClientを作成する

[【Unity】YetAnotherHttpHandlerを用いてHTTP/2を扱えるHttpClientを作成する - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2024/10/03/120000)

YetAnotherHttpHandlerを用いてUnityでHTTP/2通信を行う方法について紹介しています。

### ちょっとだけコードをきれいにする簡単なTips

[ちょっとだけコードをきれいにする簡単なTips in Unity C#](https://zenn.dev/qemel/articles/70eb6255cab5d9)

コードの可読性や保守性を高めるためのTipsをいくつか紹介しています。

### record (class)・record struct・readonly record structがどういう実装になるのかSharpLabでデコンパイルして覗いてみる

[【C#】record (class)・record struct・readonly record structがどういう実装になるのかSharpLabでデコンパイルして覗いてみる - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2024/09/30/120000)

C#の`record`や`record struct`などが、どのようなコードとして展開されるのかを、SharpLabのデコンパイル結果を確認しながら解説しています。
