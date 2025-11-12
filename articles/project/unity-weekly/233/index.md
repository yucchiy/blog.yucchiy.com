---
type: unity-weekly
title: Unity Weekly 233
description: >-
  2025/07/28のUnity Weeklyです。プロファイリング電子書籍、Wheel Worldインタビュー、CEDEC
  2025フォローアップ、Project Auditorなどについて取り上げています。
pubDatetime: 2025-07-27T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### How to Use Profiling Tools in Unity 6 Efficiently

[How to Use Profiling Tools in Unity 6 Efficiently | Unity](https://unity.com/blog/use-unity-6-profiling-tools-smart-efficient?utm_source=techcmm&utm_medium=social&utm_campaign=games)

Unityプロジェクトをプロファイリングするためのテクニックをまとめた電子書籍「[Ultimate guide to profiling Unity games (Unity 6 edition)](https://unity.com/resources/ultimate-guide-to-profiling-unity-games-unity-6)」がリリースされました。

この書籍では、Unity 6で追加・更新された機能などを用いたプロファイリングの方法から、パフォーマンスチューニングのための考えたからプロファイリング手法、プラットフォーム固有のプロファイリングツールなどについてそれぞれ解説しています。

### How Frankenstein Bikes Inspired Wheel World

[How Frankenstein Bikes Inspired Wheel World | Unity](https://unity.com/blog/how-frankenstein-bikes-inspired-wheel-world)

「[Wheel World](https://store.steampowered.com/app/1497460/Wheel_World/)」を開発する「Messhof」へのインタビュー記事で、
このゲームの世界観のデザインから登場するサイクリストのAIやトラフィックシステムの設計、自転車の物理学のアプローチなどについてその概要を紹介しています。

## Articles

### CEDEC2025『E2Eだけがテスト自動化じゃない！ Unity製ゲームの開発者テスト チュートリアル』フォローアップ

[CEDEC2025『E2Eだけがテスト自動化じゃない！ Unity製ゲームの開発者テスト チュートリアル』フォローアップ - やらなイカ？](https://www.nowsprinting.com/entry/2025/07/28/080000)

CEDEC2025でブログ著者が発表「E2Eだけがテスト自動化じゃない！ Unity製ゲームの開発者テスト チュートリアル」のスライドの公開と、発表で触れた資料へのリンクAsk the Speakerであった質問への一部回答などを紹介しています。

### Unity向け軽量サウンドマネージャの開発と運用：小規模タイトルに最適な設計について

[Unity向け軽量サウンドマネージャの開発と運用：小規模タイトルに最適な設計について #audio - Qiita](https://qiita.com/tatmos/items/e2f54e4271b926ce7873)

記事の著者がCEDEC2025で発表した「[Unity向け軽量サウンドマネージャーの開発と運用: 小規模タイトルに最適な設計について | CEDEC2025](https://cedec.cesa.or.jp/2025/timetable/detail/s67a98c750d540/)」の発表スライドについて解説しています。

### 高速なC#を書くために知っておくべきもの

[高速なC#を書くために知っておくべきもの](https://zenn.dev/aakei/articles/b858aee98b602e)

ハイパフォーマンスなC#を記述するための情報源や参考になるライブラリ、C#のコンパイル結果を解析するための各種ツールを紹介しています。

### Netcode for GameObjectsを使っていてServerRPCの戻り値が欲しい時 NetcodeGameObjectRpcAsync で “ちょうど良い” 非同期 RPC を実現する

[【Unity】Netcode for GameObjectsを使っていてServerRPCの戻り値が欲しい時 NetcodeGameObjectRpcAsync で “ちょうど良い” 非同期 RPC を実現する #NetCode - Qiita](https://qiita.com/harayuu10/items/a921c640ca66e634041e)

この記事の著者が開発する、Netcode for GameObjectsでサポートしてないServerRPCの戻り値の受け取りをSource Generatorを用いて擬似的に実現する「[NetcodeGameObjectRpcAsync](https://github.com/harayuu9/NetcodeGameObjectRpcAsync)について、その導入方法から自動生成されるコードの特徴、機能的な制約やパフォーマンスについて説明しています。

### 天文学を活用して C# で太陽位置を計算する方法

[天文学を活用して C# で太陽位置を計算する方法 #Unity - Qiita](https://qiita.com/haystacker/items/22ac24d4e15f20ea46fc)

地球上の任意の位置・時間から見た対応の高度角と方位角を天文学を活用して計算する方法を解説しています。

### Unityプロジェクトを解析し、改善点を教えてくれるProjectAuditorが公式パッケージ化

[Unityプロジェクトを解析し、改善点を教えてくれるProjectAuditorが公式パッケージ化【Unity】【最適化】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/ProjectAuditor_101)

Unityプロジェクトを静的解析してプロジェクトの設定やコードの問題点を指摘する、Unity公式パッケージ「ProjectAuditor」について、導入方法から基本的な使い紹介しています。

### Unityのスタンドアロンプレイヤーのウィンドウハンドルを高い精度かつ自由なタイミングで取得する

[Unityのスタンドアロンプレイヤーのウィンドウハンドルを高い精度かつ自由なタイミングで取得する #C# - Qiita](https://qiita.com/_wataame/items/4c17dce3b5495357c28e)

WINAPIをUnityから直接叩くことで、StandalonePlayerでのウインドウハンドルの情報を取得する方法を紹介しています。

### Tilemap分割ツールを開発したよ、見てみて

[【Unity】Tilemap分割ツールを開発したよ、見てみて【OSS】](https://zenn.dev/gameshitai/articles/c94e96fa29c204)

この記事の著者が開発する、タイルの接続情報から用途に応じたTilemapを再構築するツール「[TilemapSplitter](https://github.com/SunagimoOisii/TilemapSplitter)」について、このツールの機能概要から基本的な使い方、実装について紹介しています。

### 自作したシャドウマップにソフトシャドウをつけてみる

[【Unity】自作したシャドウマップにソフトシャドウをつけてみる #Shader - Qiita](https://qiita.com/ayaha401/items/dc8a291533d6c16b7219)

自作したシャドウマップ実装にソフトシャドウをつける実装について、その実装のアイデアから実装方法を紹介しています。


### PolygonCollider2Dが重すぎる件

[【Unity】PolygonCollider2Dが重すぎる件 #物理演算 - Qiita](https://qiita.com/RiTa-23/items/14d5f9269f287173d046)

PolygonCollider2Dがメッシュ数によって重たい場合にメッシュ数を削減することで軽量化する方法を、標準機能の「Use Delaunay Mesh」によって頂点数を削減する方法と、「[Polygon Collider Simplification](https://github.com/j-bbr/PolygonColliderSimplification)」によって削減する方法の２つの方法を紹介しています。

### Meta Quest3 MRアプリ開発 - OpenXR + XR Interaction Toolkit

[Meta Quest3 MRアプリ開発 - OpenXR + XR Interaction Toolkit #Unity - Qiita](https://qiita.com/afjk/items/a57b07915feb0bed2d3a)

XR Interaction Toolkitを用いて、Meta Quest3のMRアプリを開発するための基本的な環境構築方法を紹介しています。
