---
type: unity-weekly
title: Unity Weekly 159
description: >-
  2024/02/12週のUnity Weeklyです。Project_TCC、Audio Random
  Container、R3などについて取り上げています。
pubDatetime: 2024-02-12T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Project_TCC

[unity3d-jp/Project_TCC: TCC stands for Tiny Character Controller. TCC is the best way to make your own game. This repository contains all packages and examples for TCC projects.](https://github.com/unity3d-jp/Project_TCC)

TCC（Tiny Character Controller）という、キャラクターの挙動を複数の小さなコンポーネント郡を組み合わせることで構築するシステムがUTJ（Unity Technologies Japan）から公開されました。

このプロジェクトではSBS（Step by Step）シリーズという、ジャンプやローリングや移動床などよくあるゲームのキャラクター挙動をTCCを用いて実装するサンプルシーン郡が提供されており、作りたい挙動に近いシーンを選んで参考にすることができます。

また、Visual Scriptingの制御もサポートしています。

### Unity で効果音に自然な揺らぎを！Audio Random Container を使ってみよう！

[Unity で効果音に自然な揺らぎを！Audio Random Container を使ってみよう！ - YouTube](https://www.youtube.com/watch?v=wM0kMg6OkKo)

Unity 2023.2から追加された、効果音をランダムに再生する「Audio Random Container」という機能について、その機能の概要から基本的な利用方法について紹介しています。

## Announce

### App Store Connectのアップロード要件、4月29日に適用開始

[App Store Connectのアップロード要件、4月29日に適用開始 - 最新ニュース - Apple Developer](https://developer.apple.com/jp/news/?id=fxu2qp7b)

App Store ConnectにiOS・iPadOS・tvOS・watchOS向けのアプリを提出する際のXcode 15以降でのビルドの義務化が、2024/04/29以降に適用されることが発表されました。

## Articles

### 次世代Rx「R3」解説

[次世代Rx「R3」解説 #C# - Qiita](https://qiita.com/toRisouP/items/e7be5a5a43058556db8f)

C#向けの新しいRxライブラリ「[R3](https://github.com/Cysharp/R3)」についてその概要と、dotnet/reactiveやUniRxなどの従来のRxライブラリとの違いとしてObservableの再定義・Scheduler廃止・async/awaitと調和した実装・ReactiveProperty同梱などの観点でそれぞれ解説しています。

### UniTaskでMonoBehaviourのイベントを扱う

[UniTaskでMonoBehaviourのイベントを扱う #Unity - Qiita](https://qiita.com/toRisouP/items/baafaef3e94ff13ce163)

MonoBehaviourの各種イベントをUniTaskとして扱うための `AsyncTrigger` について、その基本的な使い方を紹介しています。

### Unity PolySpatialを使ってApple Vision Pro向けアプリを開発する

[Unity PolySpatialを使ってApple Vision Pro向けアプリを開発する](https://zenn.dev/meson/articles/get-started-polyspatial)

UnityのPolySpatialを使用してApple Vision Pro向けのアプリ開発について、基本的なセットアップ方法からvisionOS向けアプリを作る際の注意点としてマテリアルやカメラの扱い、シミュレーター上での動作確認方法について紹介しています。

### リニアワークフローでもUIはsRGBで描画したいんだけど？

[リニアワークフローでもUIはsRGBで描画したいんだけど？ [Unityゲームグラフィックス実践] #Unity - Qiita](https://qiita.com/suzuna-honda/items/da7e61e8ac24b375cdc1)

Unityでリニアワークフローを採用しつつUIをsRGB色空間で扱い描画するための、独自のURPの拡張について解説しています。

### Understanding C# 8 default interface methods

[Understanding C# 8 default interface methods](https://andrewlock.net/understanding-default-interface-methods/)

C# 8から利用できるデフォルトインターフェイスメソッドについて、その仕組から典型的な使い方、その利用時の注意点について解説しています。

### UnityでSRPからデプスシャドウを描く 〜複数のDirectionalLightの影を描く〜

[UnityでSRPからデプスシャドウを描く 〜複数のDirectionalLightの影を描く〜 - 3Dゲーム開発備忘録](https://daiki-eguchi.hatenablog.com/entry/2024/02/08/190116)

SRP（Scriptable Render Pipeline）上で、複数のディレクショナルライトのシャドウマップを描画するためのテクニックを紹介しています。

### UnityTestFramework上でパフォーマンス測定ができるPerformance Testing Packageの基礎的な使い方

[【Unity】UnityTestFramework上でパフォーマンス測定ができるPerformance Testing Packageの基礎的な使い方 - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2024/02/05/120000)

Performance Testing Packageの基本的な使い方をまとめています。

### 【Unity/Addressables】DLC頒布するための実装方法サンプル

[【Unity/Addressables】DLC頒布するための実装方法サンプル](https://zenn.dev/tigrig/articles/dfca34b4d307b9)

Addressablesで追加コンテンツを配布するためのグループの設計やその実装について紹介しています。

### Unity+PlayFabでタイトルニュース(各ゲームごとのお知らせ)の設定&取得

[Unity+PlayFabでタイトルニュース(各ゲームごとのお知らせ)の設定&取得【Unity】【PlayFab】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/PlayFab_TilteNews)

[PlayFab](https://playfab.com/)を利用して、ゲームのタイトル画面で運営からのお知らせを実装する方法について紹介しています。

### イージング関数の定義と、任意のイージング関数を返す関数を定義する

[【Unity】イージング関数の定義と、任意のイージング関数を返す関数を定義する #C# - Qiita](https://qiita.com/amanatsutouko/items/e80997f9eb72e76db4f1)

基本的なイージングカーブの実装について紹介しています。

### Unity ECS でメモリリークを調べる方法

[Unity ECS でメモリリークを調べる方法 #Unity - Qiita](https://qiita.com/br_branch/items/e7723dd9d3fe6253e81b)

Unity ECSでメモリリークを調査するためのオプション設定について紹介しています。
