---
type: unity-weekly
title: Unity Weekly 130
description: >-
  2023/07/17週のUnity Weeklyです。Unity Safe Voice, Improving Burst Inspector, 2022
  LTS Prefab変更点、Multiplayer Dev Blitz Dayなどについて取り上げています。
pubDatetime: 2023-07-17T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity 2023.1 TECH ストリームが公開されました

[Unity 2023.1 TECH ストリームが公開されました | Unity Blog](https://blog.unity.com/ja/engine-platform/2023-1-tech-stream-now-available)

Unity 2023.1のTECHストリームの公開に際して、そのバージョンの新機能を紹介する記事「[Unity 2023.1 Tech Stream is now available](https://blog.unity.com/engine-platform/2023-1-tech-stream-now-available)」の日本語翻訳が公開されました。

### Tackling toxicity with Unity Safe Voice

[Tackling toxicity with Unity Safe Voice | Unity Blog](https://blog.unity.com/engine-platform/tackling-toxicity-with-unity-safe-voice)

AIでボイスを解析してその会話の毒性検出（toxicity detection）を行うサービス「Unity Safe Voice」がクローズドベータとしてリリースされました。

### Improving Burst Inspector search performance

[Improving Burst Inspector search performance | Unity Blog](https://blog.unity.com/engine-platform/improving-burst-inspector-search-performance)

Burst Compilerのコンパイル結果を表示するBurst Inspectorの検索機能が改善され、この機能が約13倍程度高速になりました。この記事ではその改善項目の詳細を解説しています。

### 7分で理解するPrefabの変更点

[7分で理解するPrefabの変更点 - YouTube](https://www.youtube.com/watch?v=LTXnCc3pg6k)

Unity 2022 LTSでのPrefabのアップデートについてまとめています。

Prefabインスタンス編集の制約緩和やPrefabモードのデフォルト設定、Prefabインスタンスの置き換え、Prefabバリアントの親子構成の確認機能、PrefabオーバーライドのUI改善などを、それぞれの改善点を動画で解説しています。

### Multiplayer Dev Blitz Day 2023

[Official - Multiplayer Dev Blitz Day 2023 - Unity Forum](https://forum.unity.com/threads/multiplayer-dev-blitz-day-2023.1460404/)

Unityの開発者が、その1日プロダクトに関する質問に答えるDev Blitz Dayが7/20に開催される予定です。今回はMultiplayer特集です。

専用のフォーラムとDiscordのチャンネルが前日に作成されるので、事前に質問を投げると、当日に回答されていくとのことです。

## Articles

### Input Systemを旧Inputのように扱う方法と注意点

[【Unity】Input Systemを旧Inputのように扱う方法と注意点 | ねこじゃらシティ](https://nekojara.city/unity-input-system-legacy-like)

Input Systemを旧Inputの `GetButtonDown` などのように各入力の状態を取得する方法と、その注意点についてまとめています。

### Unityで使うマルチプラットフォーム対応PluginをRustで作る 

[Unityで使うマルチプラットフォーム対応PluginをRustで作る](https://zenn.dev/izm/articles/f900ba5671d722)
[Unityで使うマルチプラットフォーム対応PluginをRustで作るMacOSとiOS編](https://zenn.dev/izm/articles/5ea081e916156b)

Unityで利用できるマルチプラットフォーム対応のネイティブプラグインをRustとcsbindgenを用いて実装すると、MacOSとiOS向けのビルド方法についてそれぞれまとめています。

### Compute Shaders in Unity: Processing transforms with GPU

[ArtStation - Compute Shaders in Unity: Processing transforms with GPU](https://www.artstation.com/blogs/degged/KOre/compute-shaders-in-unity-processing-transforms-with-gpu)

大量のTransformをCompute Shaderを用いて操作する方法についてまとめています。

### 右下の"Development Build"を消すパッケージを作りました

[右下の"Development Build"を消すパッケージを作りました - きゅぶろぐ](https://blog.kyubuns.dev/entry/2023/07/17/211054)

ブログ著者が開発する、UnityでDevelopment Buildを有効にした際に、実機右下に表示される「Development Build」のウォーターマスク表示を削除するパッケージについて紹介しています。
