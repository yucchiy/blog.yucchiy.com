---
type: "unity-weekly"
title: "Unity Weekly 106"
description: "2023/01/30週のUnity Weeklyです。6ウェイライティングやVolumetric Matrialなどについて取り上げています。"
tags: ["Unity Weekly","Unity"]
date: "2023-01-30T00:00:01"

---

## Unity Officials

### Visual Effect Graph の 6 ウェイライティングを使ったリアルな煙のライティング

[Visual Effect Graph の 6 ウェイライティングを使ったリアルな煙のライティング | Unity Blog](https://blog.unity.com/ja/technology/realistic-smoke-with-6-way-lighting-in-vfx-graph)

Unity 2022.2 TECHストリームで利用できる、ベイク済みのシミュレーションから煙をリアルタイムでレンダリングできる6ウェイライティングについて、その原理や採用するメリット、6ウェイライティングマップの構築プロセス、レンダリング設定とその効果についてそれぞれ解説しています。

### 機能ボリュメトリック・マテリアルで高度な空気感表現が可能に！

[【Unity 2022.2】新機能ボリュメトリック・マテリアルで高度な空気感表現が可能に！ - YouTube](https://www.youtube.com/watch?v=5ouHEAYxKl8)

Unity 2022.2のHDRP14.0で追加されたVolumetric Materialについて、その機能の説明から動作原理、シェーダーグラフの解説、この機能を使った複雑なフォグ表現、この機能によるフォグ表現の限界についてそれぞれ解説しています。

## Articles

### 自動マージでアセット更新作業を楽にする

[自動マージでアセット更新作業を楽にする - Mirrativ Tech Blog](https://tech.mirrativ.stream/entry/2023/01/27/105211?utm_source=feed)

アセットを管理するGitレポジトリで、masterや手前のリリースバージョンのブランチに入った変更を、以後のリリースバージョンのブランチに自動でマージするようなGitHub Actionsを実装する方法について紹介しています。

### The Hidden Costs of async/await: How it Affects Build Size

[The Hidden Costs of async/await: How it Affects Build Size](https://gamedev.center/the-cost-of-async-await-on-the-build-size/)

async/awaitによって生成されるステートマシンのコードが、アプリのビルドサイズにどの程度影響するかについてまとめています。

### UnityのSplinesを使ってみる

[UnityのSplinesを使ってみる | Unityを使った３Dゲームの作り方（かめくめ）](https://gametukurikata.com/basic/splines)

Splinesパッケージのツールを用いた曲線の定義方法から、Spline Instantiateコンポーネントを用いた曲線上へのゲームオブジェクトの配置、Spline Animateコンポーネントを用いた曲線に沿ったアニメーション、Splite Extrudeコンポーネントを用いた曲線に沿ったメッシュの生成などについてまとめています。

### Timelineをスクリプトで動的に管理してみよう

[【Unity】Timelineをスクリプトで動的に管理してみよう – 株式会社ロジカルビート](https://logicalbeat.jp/blog/11061/)

UnityのTimelineで、スクリプト経由で動的にトラックのバインディングを切り替えたり、特定のクリップの開始位置を取得して、そのタイミングでイベントを発火する方法などについて紹介しています。

### Choosing the Right Load Type in Unity’s Audio Import Settings

[Choosing the Right Load Type in Unity’s Audio Import Settings | by Made Indrayana | Medium](https://medium.com/@made-indrayana/choosing-the-right-load-type-in-unitys-audio-import-settings-1880a61134c7)

Audio Import Settingsの中のLoad Typeの説明とそれらの動作、ロード時の負荷について解説しています。

### Unity Test Frameworkの非同期テストで できること/ できないこと

[Unity Test Frameworkの非同期テストで できること/ できないこと - やらなイカ？](https://www.nowsprinting.com/entry/2023/01/29/010837)

Unity Test Framework v1.3でサポートされた非同期テストについて、利用できる属性の組み合わせと、できないこと（v1.3.2時点でのバグ挙動も含めて）についてまとめています。

### TextMeshProUGUIで表示したTextの最後の位置を取得する方法

[TextMeshProUGUIで表示したTextの最後の位置を取得する方法 - Qiita](https://qiita.com/matsu_friends/items/8e6ff02f6857c495e8be)

TMProのテキストで、ノベルゲームなどによくあるカーソルを表示するために、テキストの一番最後の位置を正しく取得するための方法について紹介しています。

### Photon Fusion for Unityを使った自分のプロダクトをサーバーモードに対応させる～準備編

[Photon Fusion for Unityを使った自分のプロダクトをサーバーモードに対応させる～準備編 - Qiita](https://qiita.com/nimushiki/items/39f1648b81a8cfff65e2)

Photon Fusion for Unityでサーバーモードに対応させるための、UGS（Unity Gaming Services）のサーバーの設定方法について紹介しています。

### 「良いコード/悪いコードで学ぶ設計入門」を読んだので自分の記事のコードをリファクタしてみた

[「良いコード/悪いコードで学ぶ設計入門」を読んだので自分の記事のコードをリファクタしてみた - Qiita](https://qiita.com/OKsaiyowa/items/4cf8b3a25114f75042de)

「[良いコード/悪いコードで学ぶ設計入門](https://www.amazon.co.jp/-/en/%E4%BB%99%E5%A1%B2-%E5%A4%A7%E4%B9%9F/dp/4297127830/ref=sr_1_1?adgrpid=134755123199&gclid=CjwKCAiAoL6eBhA3EiwAXDom5glODvQnhMf2xzfpLvmk5jYfqd5Kh1AsnD1zOrLnlbJfLQlBARuwWxoC0eMQAvD_BwE&hvadid=611341853962&hvdev=c&hvlocphy=1009300&hvnetw=g&hvqmt=e&hvrand=9894040049356543011&hvtargid=kwd-1660384028854&hydadcr=27492_14587064&jp-ad-ap=0&keywords=%E8%89%AF%E3%81%84%E3%82%B3%E3%83%BC%E3%83%89%E6%82%AA%E3%81%84%E3%82%B3%E3%83%BC%E3%83%89%E3%81%A7%E5%AD%A6%E3%81%B6%E8%A8%AD%E8%A8%88%E5%85%A5%E9%96%80&qid=1674570768&sr=8-1)」の内容を元に、[ARFoundationによる平面検知のコード](https://qiita.com/OKsaiyowa/items/00748baf198b6661b6c5)をリファクタリングした際の、考え方や実際の修正手順を紹介しています。

### 逆コンパイルから学ぶC#

[【Unity】逆コンパイルから学ぶC# - Qiita](https://qiita.com/IShix/items/ac7577efc2bf3c6dbc2c)

RiderのIL ViewerでC#をILにコンパイルしてその後ILをC#へ逆コンパイルした結果（Low-Level C#）を確認して、文字列の変換（+演算子や文字列補間）・暗黙的型変換・コルーチン・ボックス化・ラムダ式・タプル・Enum・GameObjectのnullチェックなどが、実際にどのような処理で実現されているかについて検証しています。

### ARFoundationにおける平面検知シーケンスの実装

[【Unity(C#)】ARFoundationにおける平面検知シーケンスの実装 - Qiita](https://qiita.com/OKsaiyowa/items/00748baf198b6661b6c5)

UnityのARFoundationを用いて平面を検知するための実装を紹介しています。

### IDisposable.Dispose し忘れてる場合に Rider で警告の線を表示する方法

[【Unity】IDisposable.Dispose し忘れてる場合に Rider で警告の線を表示する方法 - コガネブログ](https://baba-s.hatenablog.com/entry/2023/01/26/090000)

`IDisposable`の`Dispose`忘れを検知するRoslyn Analyzerについて、導入方法とその使い方をまとめています。

### UnityのメッシュをフルカラーでMagicaVoxelにエクスポートできる「MagicaVoxel Tools」の紹介と使い方

[【Unity】UnityのメッシュをフルカラーでMagicaVoxelにエクスポートできる「MagicaVoxel Tools」の紹介と使い方【アセット紹介(2)】 - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/01/26/120000)

UnityのメッシュをMagicaVoxelにエクスポートできる「MagicabVoxelTools」について、基本的な利用方法をまとめています。

### FSRで低解像度な画像を補間してみた

[【Unity】FSRで低解像度な画像を補間してみた - Qiita](https://qiita.com/Yamara/items/d67b2e0b0ae4a28e9cd0)

URP/HDRPで実装されているAMD FidelityFX Super Resolution（FSR）を用いてテクスチャのアップサンプリングの検証結果を紹介しています。

## Repositories

### StructureOfArraysGenerator

[Cysharp/StructureOfArraysGenerator: Structure of arrays source generator to make CPU Cache and SIMD friendly data structure for high-performance code in .NET and Unity.](https://github.com/Cysharp/StructureOfArraysGenerator?)

CPUキャッシュとSIMDフレンドリーなデータ構造を作るためのSource Generator。

### Addler

[Haruma-K/Addler: Memory management system for Unity's Addressable Asset System. Provides lifetime management system for loaded resources, object pooling system, and preloading system.](https://github.com/Haruma-K/Addler?)

Addressablesアセットのメモリ管理システム。ロードしたアセットのライフサイクル管理や、オブジェクトプール、事前ロードなどの機能を提供する。

### Unity's GameObject Paint Tool

[acoppes/unity-gameobject-brush: Unity's Editor GameObjects Paint Tool for 2D Games. It contains both a custom window for objects palette + a customizable brush for paining.](https://github.com/acoppes/unity-gameobject-brush?)

GameObjectを2Dゲームシーンへの配置を行うためのペイントツール。パレットウインドウと、カスタマイズ可能なブラシツールを提供する。

### NativeHeap

[Amarcolina/NativeHeap: A Min/Max heap data structure for Unity. Compatible with the Unity Job system and Burst compiler.](https://github.com/Amarcolina/NativeHeap?)

ヒープのネイティブコレクション実装。

### GiLight2D

[NullTale/GiLight2D: 2D light for Unity Urp with raytracing](https://github.com/NullTale/GiLight2D?)

2DのグローバルイルミネーションのURP Render Feature実装。

### ZeroAllocJobScheduler

[genaray/ZeroAllocJobScheduler: A high-performance alloc free c# Jobscheduler.](https://github.com/genaray/ZeroAllocJobScheduler?)

アロケーションフリーなジョブスケジュラー。

### Atlas

[david-knopp/Atlas: 👩‍🚀 Atlas Utility library for Unity](https://github.com/david-knopp/Atlas?)

再利用可能なクラスやツールを提供するライブラリ。ステートマシンやタイマー、オブジェクトプールやエディターツールなどが含まれる。

### Planar Reflections for Unity's Built-In Render Pipeline

[eldskald/planar-reflections-unity: Planar reflections probe component for Unity's Built-in Render Pipeline](https://github.com/eldskald/planar-reflections-unity?)

Built-In Render PipelineでのPlanner reflectionsの実装デモ。
