---
type: unity-weekly
title: Unity Weekly 238
description: >-
  2025/09/08週のUnity Weeklyです。Sonic Dream Team最適化事例、Unity
  6.3の新機能紹介、NativeCompressionなどについて取り上げています。
pubDatetime: 2025-09-07T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Apple ArcadeデバイスでFPS目標を達成するためのSonic Dreamチームの最適化

[Apple ArcadeデバイスでFPS目標を達成するためのSonic Dreamチームの最適化 | Unity](https://unity.com/ja/resources/hardlight-sonic-dream-team)

Apple Arcade向けにリリースされた「Sonic Dream Team」のローエンドからハイエンドデバイスで同じパフォーマンス目標（60fps）達成するための最適化事例について紹介しています。

主にレンダリングやパーティクルシステム、CPU（物理演算）、GPUボトルネックのための各種最適化や、Addressablesやシェーダーバリアントのメモリサイズの削減方法についてそれぞれ解説しています。

### Audio status update Q3 2025

[Audio status update Q3 2025 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/audio-status-update-q3-2025/1681867)

オーディオ周りの2025年 Q3のアップデートを紹介しています。

主にUnityのオーディオ周りで課題になっていた、処理のブラックボックスや次世代のオーディオハードウェアを搭載するデバイスに対応するための機能として、
Unity 6.3から追加される「Scriptable Audio Pipeline」や「Enhanced Audio Foundation」について、その機能の概要を説明しています。

### Feedback request: Custom Shaders and Post-Processing Filters

[Feedback request: Custom Shaders and Post-Processing Filters - Unity Engine - Unity Discussions](https://discussions.unity.com/t/feedback-request-custom-shaders-and-post-processing-filters/1680973)

Unity 6.3にUI toolkitでシェーダグラフによるカスタムシェーダーと、USSを介したポストエフェクトフィルターを掛けられる機能が実装されたことをアナウンスしています。

またこの機能に関して、アンケートを通じたフィードバックを募集しています。

### Native desktop screen reader support now available in Unity 6.3!

[Native desktop screen reader support now available in Unity 6.3! - Unity Engine - Unity Discussions](https://discussions.unity.com/t/native-desktop-screen-reader-support-now-available-in-unity-6-3/1681788)

プラットフォーム固有のテキストリーダーを呼び出す「Native screen reader」が、Unity6.3で WindowsとmacOSをサポートしました。WindowsではNarratorを、macOSではVoiceOverを呼び出す実装が追加されています。

また、Unity 6.3で追加された機能について言及しています。

### Multiplayer Play Mode 1.6.0 and Roadmap update

[Multiplayer Play Mode 1.6.0 and Roadmap update - Unity Engine - Unity Discussions](https://discussions.unity.com/t/multiplayer-play-mode-1-6-0-and-roadmap-update/1680660)

マルチプレイヤーパッケージの1.6.0のリリースを告知するディスカッションです。

このバージョンで追加された、マルチプレイヤーの各インスタンスの動作モードを設定できる機能と、通常の挙動と別インスタンスと独立して動作する「Manual Control」について紹介しています。

### 実は重要！？レンズ歪みエフェクトを使って広い視野を自然に見せよう！

[実は重要！？レンズ歪みエフェクトを使って広い視野を自然に見せよう！ #gamedev #unity #unity3d - YouTube](https://www.youtube.com/shorts/JOnFG_Lk-K0)

広い視野を自然に見せるために便利なURPのLens Distortionについて紹介しています。

### Seat Addition is now available

[Seat Addition is now available - Getting Started - Unity Discussions](https://discussions.unity.com/t/seat-addition-is-now-available/1681691)

Unity Proのサブスクリプションに、新しいシート（新しいユーザー）を簡単に追加できる機能が追加された旨がアナウンスされています。

### Investigating Memory issues in Unity

[Investigating Memory issues in Unity - Technical Articles - Unity Discussions](https://discussions.unity.com/t/investigating-memory-issues-in-unity/1680721)

Unityのメモリーに関する問題を調査する際に役立つTipsを紹介するディスカッションです。

Memory Profilerで表示されるそれぞれのメモリーの内訳から、Unityのエンジンコード側が確保するメモリであるNative Memoryのアロケーションに関する設定やアロケーション時のコールバックを受け取る方法、各種アロケーターのデバッグ方法などについてそれぞれ解説しています。

## Articles

### UI Test Helper パッケージ v1.0.0 リリース

[UI Test Helper パッケージ v1.0.0 リリース - やらなイカ？](https://www.nowsprinting.com/entry/2025/09/01/091451)

このブログの著者が開発するTest FrameworkでUIを操作するためのヘルパーライブラリ「[UI Test Helper](https://github.com/nowsprinting/test-helper.ui)」の1.0.0がリリースに際して、
このバージョンの主要な機能であるGameObjectの検索や操作、モンキーテスト、エディター拡張、カスタムUIフレームワークなどについて紹介しています。

### AssetBundleを解析してくれるMCP Server「AssetBundleMCP」をOSSとして公開しました

[【Unity】AssetBundleを解析してくれるMCP Server「AssetBundleMCP」をOSSとして公開しました - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2025/09/01/120000)

このブログの著者が開発する、AssetBundleをMCP Serverを介して解析する「[AssetBundleMCP](https://github.com/hanachiru/AssetBundleMCP)」について、このライブラリの概要や基本的な使い方を紹介しています。

### Unity 6.2で、Editor上からAndroidManifest.xmlのappCategoryを指定できるようになった

[Unity 6.2で、Editor上からAndroidManifest.xmlのappCategoryを指定できるようになった #Android - Qiita](https://qiita.com/RyotaMurohoshi/items/68711ef8436870fc5bfb)

Unity6.2から追加された、Androidの `AndroidManifest.xml` 上で設定できる `appCategory` を指定するためのプレイヤー設定について紹介しています。

### メモリ使用量の大きな変化を検知するApplication.memoryUsageChanged

[メモリ使用量の大きな変化を検知するApplication.memoryUsageChanged【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Application_memoryUsageChanged)

メモリ使用量の変化を通知する `Application.memoryUsageChanged` の紹介と、ラットフォームごとの挙動の違いについても言及しています。

## Repositories

### NativeCompressions

[Cysharp/NativeCompressions: NativeCompressions is the native ZStandard and LZ4 compression library and managed binding for .NET and Unity.](https://github.com/Cysharp/NativeCompressions)

LZ4の高速なストリーミング処理や、.NETのモダンAPIとマルチスレッド対応にしたメソッドを提供するライブラリ。現在はプレビューリリースで、Unity対応については今後予定しているとのことです。

### UnityToolbarExtension

[Yusuke57/UnityToolbarExtension: Customizable Unity Editor toolbar](https://github.com/Yusuke57/UnityToolbarExtension)

Unityのツールバーを拡張子、独自のボタンやスライダーなどを表示できるエディター拡張。

### AssetBundleMCP

[hanachiru/AssetBundleMCP: MCP Server for easily and efficiently analyzing Unity AssetBundles.](https://github.com/hanachiru/AssetBundleMCP)

AIアシスタント（gemini-cliなど）との対話を通じて、UnityのAssetBundleを簡単かつ効率的に分析するためのMCP (Model-Context-Protocol) サーバー。
