---
type: unity-weekly
title: Unity Weekly 197
description: >-
  2024/11/04週のUnity Weeklyです。Unity 6、URP EbooksのUnity 6対応、Zero
  Messengerなどについて取り上げています。
pubDatetime: 2024-11-04T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Biggest Edition Yet of our URP E-Book for Unity 6

- [Biggest Edition Yet of our URP E-Book for Unity 6 | Unity](https://unity.com/ja/blog/biggest-edition-urp-ebook-unity-6)
- [上級クリエイター向け URP 入門（Unity 6 版）｜Unity](https://unity.com/ja/resources/introduction-to-urp-advanced-creators-unity-6)
- [Introduction to URP for advanced creators (Unity 6 edition) | Unity](https://unity.com/resources/introduction-to-urp-advanced-creators-unity-6)

URPの発展的な内容を扱ったE-book「[Introduction to URP for advanced creators](https://unity.com/resources/introduction-to-urp-advanced-creators-unity-6)」がUnity 6対応しました。

記事では新しくリリースされたGPU Resident DrawerやGPUオクルージョンカリングなどによる最適化、Renderer Features の Render Graph対応について紹介しています。

### モバイルも正式対応！Unity 6 の Web プラットフォームを徹底解説！

[モバイルも正式対応！Unity 6 の Web プラットフォームを徹底解説！ - YouTube](https://www.youtube.com/watch?v=JFQGHj6VJy8)

Unity 6におけるWebプラットフォームの扱い方の変更点や、Unity 6サポートするモバイルブラウザやWebGPUのサポート状況や非対応機能、WebGPUのための最適化設定、各サービスへのアップロードの際の注意点についてそれぞれ解説しています。

## Articles

### ZeroMessenger – .NET/Unity向けの軽量メッセージングライブラリ

[【C#】ZeroMessenger – .NET/Unity向けの軽量メッセージングライブラリ - Annulus Games](https://annulusgames.com/blog/zero-messenger/)

記事の著者が開発する.NET/Unity向けの軽量メッセージングライブラリ「[ZeroMessenger](https://github.com/AnnulusGames/ZeroMessenger)」について、ライブラリ開発の背景からベンチマーク、各種ライブラリと比較したこのライブラリの立ち位置について解説しています。

### Unity用の激薄ステートマシンライブラリを作りました

[Unity用の激薄ステートマシンライブラリを作りました](https://zenn.dev/qemel/articles/387f1dd31b0d81)

著者の開発するUnityで利用できるPure C#かつDIフレンドリーな、軽量なステートマシン実装「[PureFsm](https://github.com/qemel/PureFsm)」について紹介しています。

### Unity 6へのアップデート時はFixed Timestepの再設定が必要

[Unity 6へのアップデート時はFixed Timestepの再設定が必要](https://zenn.dev/sion_pn/articles/20721cacf3b2dd)

Unity 6でFixed Timestepのデータの持ち方が変更されたことで、Unity 2021 LTSからのアップデートの際にProject SettingsのFixed Timestepの設定値が引き継がれない事象について説明しています。

### Unity Playable API を使いこなす

[Unity Playable API を使いこなす](https://zenn.dev/allways/articles/5b9ef33032d5fa)

Playable APIについて、基本的な使い方からAnimationControllerとの連携、APIを利用する際の注意点、デバッグの際に利用できるPlayable Graph Visualizerなどについてそれぞれ紹介しています。

### Unity Sentisを使ってUnityランタイム上でAIモデルを使えるようにする

[Unity Sentisを使ってUnityランタイム上でAIモデルを使えるようにする](https://zenn.dev/headwaters/articles/63c880df6d8131)

Unity6から正式版がリリースされたUnity Sentisを用いて訓練済みのモデルをアプリ上で動かすことで、Speech To TextやLLM実行、音声合成をローカルで実現する方法を紹介しています。

### エディタ上に折れ線グラフを表示する

[エディタ上に折れ線グラフを表示する【Unity】【エディタ拡張】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/EditorGraphViewer)

エディター上に折れ線グラフを表示するための、独自の `EditorGraphView` クラス実装について紹介しています。

### System.IOとUnioの画像ロードの経過時間をProfilerで比較してみた

[System.IOとUnioの画像ロードの経過時間をProfilerで比較してみた - 土鍋で雑多煮](https://donabenabe.hatenablog.com/entry/ImageLoadUnioProfiler)

`System.IO` と Unityのネイティブメモリを用いたI/Oの最適化を行うライブラリ「[Unio](https://github.com/hadashiA/Unio)」で画像のロード速度の比較を紹介しています。

### 配列やリストを使わない MonoBehaviour プール

[配列やリストを使わない MonoBehaviour プール #Unity - Qiita](https://qiita.com/sator_imaging/items/80c712ee4fcabfce9163)

`MonoBehaviour` のプール実装について紹介しています。

### Unity C# マスターガイド：基礎から高度なデザインパターンまで - 20章で学ぶゲーム開発の実践テクニック

[Unity C# マスターガイド：基礎から高度なデザインパターンまで - 20章で学ぶゲーム開発の実践テクニック #C# - Qiita](https://qiita.com/finders/items/ffc14b85ad134457d215)

UnityにおけるC#コーディングにおいての制御構文などの基礎からゲームでよく利用するデザインパターンの実装例を紹介しています。

### UnityでAndroid14から15へアップデートする際に起きたこととその解決法

[UnityでAndroid14から15へアップデートする際に起きたこととその解決法 #android開発 - Qiita](https://qiita.com/ba321/items/d9d066694d1c4b25a256)

記事の著者がUnity 2022 LTSでAndroid 14から15にアップデートした際に遭遇したエラーとその対処方法について紹介しています。

### Unity6からPersonalでもMade with Unityのロゴを非表示に出来るように

[Unity6からPersonalでもMade with Unityのロゴを非表示に出来るように【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Unity6_Logo_Settings)

Unity 6からPersonal ライセンスでも設定できるようになった、Unityのスプラッシュ画面を非表示にする方法について紹介しています。

### uLipSync が Unity 6 で動くかどうか調査してみた

[uLipSync が Unity 6 で動くかどうか調査してみた - 凹みTips](https://tips.hecomi.com/entry/2024/10/31/234002)

ブログ著者の開発するuLipSyncをUnity 6にアップデートする際に発生したパッケージ周辺のエラーについて紹介しています。
