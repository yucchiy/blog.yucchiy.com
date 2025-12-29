---
type: unity-weekly
title: Unity Weekly 254
description: >-
  2025/12/29週のUnity Weeklyです。2025年テクニカルコンテンツラウンドアップ、HDRP電子書籍、mocopiインタビュー、デジタルサイネージ活用事例などを紹介しています。
pubDatetime: 2025-12-29T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---


## Unity Officials

### 2025 Unity Technical Content Roundup

[2025 Unity Technical Content Roundup | Unity](https://unity.com/blog/2025-technical-content-round-up)

Unity社がリリースした電子書籍やサンプル、動画コンテンツなどのテクニカルコンテンツを紹介しています。

### HD レンダーパイプラインにおけるライティングと環境 (HDRP) ー Unity 6 版

[HD レンダーパイプラインにおけるライティングと環境 (HDRP) ー Unity 6 版](https://unity3d.jp/game/lighting-environments-hdrp-unity-6-jp/?utm_source=twitter&utm_medium=social&utm_campaign=x-unity-japan-2025-12-hdrp-lighting-ebook)

HDRPにおけるライティングや環境についての電子書籍が日本語翻訳され公開されています。

### Unityのエコシステムが牽引する、ソニーの次世代モーションキャプチャー「mocopi」の製品成長ストーリーと新局面

[Unityのエコシステムが牽引する、ソニーの次世代モーションキャプチャー「mocopi」の製品成長ストーリーと新局面 | ユニティ・テクノロジーズ・ジャパン株式会社](https://unity3d.jp/industry/sony-mocopi/)

mocopiの事業室長と開発責任者へのUnity公式のインタビュー記事で、mocopi誕生の経緯からUnityを採用した理由、開発者コミュニティとの向き合い方、SDKのオープンソース化に至るまでの道程についてインタビューしています。


## Articles

### 目に見えない気流・空気質を可視化したデジタルサイネージ プログラマーによるUnity Industry 活用事例

[目に見えない気流・空気質を可視化したデジタルサイネージ プログラマーによるUnity Industry 活用事例](https://cgworld.jp/special-feature/2512-wow-unity-industry.html)

[WOW inc.](https://www.w0w.co.jp/) の制作するデジタルサイネージ「AIR HUB TOKYO」について、このプロダクトの特徴であるバックエンドからフロントまで一貫したUnity利用からUIデザインやHoudini x VFXGraphによるビジュアル表現などについてのインタビュー記事です。

### 「一番メモリを消費するキャラクターは誰？」に即答したい。Unity アセットの静的解析と自動通知で実現したアセット肥大化を未然に防ぐ仕組み

[「一番メモリを消費するキャラクターは誰？」に即答したい。Unity アセットの静的解析と自動通知で実現したアセット肥大化を未然に防ぐ仕組み - Akatsuki Hackers Lab | 株式会社アカツキ（Akatsuki Inc.)](https://hackerslab.aktsk.jp/2025/12/22/164740)

キャラクターとそれに紐付くアセットの使用メモリ量を推定して報告するツールを運用することで、チーム全体でアセットの最適化を意識する事例を紹介しています。

### ハイパー省メモリかつ高速なreadonly組み込みDBをUnityにぶちこもう

[ハイパー省メモリかつ高速なreadonly組み込みDBをUnityにぶちこもう - HADASHIKICK LAND](https://hadashikick.land/tech/vkv-preview)

組み込みデータベースの各種ソリューションの紹介から、readonlyを前提としたゲームのマスターデータの組み込みデータベースについて、著者が開発する「[KVK](https://github.com/hadashiA/VKV)」の特徴や実装について解説しています。

### はじめてのRenderGraph

[【Unity】はじめてのRenderGraph #Unity - Qiita](https://qiita.com/hikoalpha/items/b502f457bdad8389212f)

RenderGraphを用いたグラフィックプログラミングの概要を掴むために、U/DAY Tokyo 2025で公開されたサンプルやUnityの[グラフィックレポジトリ](https://github.com/Unity-Technologies/Graphics)のサンプル実装を抜粋して、パスの記述方法を説明しています。

また、公式ドキュメントの中から注意した方が良いAPI仕様などにも言及しています。

### UnityのProfilerで場所を特定できないGCAllocの発生源を特定してみる

[UnityのProfilerで場所を特定できないGCAllocの発生源を特定してみる #C# - Qiita](https://qiita.com/Lunco/items/7dad6f1b21c366a71a82)

Profilerの `BeginSample` と `EndSample` を用いるだけでは検知できない、変数キャプチャやasyncによる `GC.Alloc` の発生原因や、その対処方法についてそれぞれ紹介しています。

### ステップアップさせていくMatCap実装

[ステップアップさせていくMatCap実装 #Unity - Qiita](https://qiita.com/takemode/items/092f8d28eccaa59456ba)

最低限のMatCapの実装からはじめ、テクスチャ境界のノイズの対応やフレネル、ノーマルマップなどの対応をステップバイステップに実装しています。

### Unity Studioを使ってARのデザインを共有する

[Unity Studioを使ってARのデザインを共有する｜アップフロンティア株式会社](https://note.com/upfrontier/n/n53edae9654fc)

Unityが2025/11にリリースした、ウェブベースのノーコード3Dデザインエディタ（旧: Unity Lite）の「Unity Studio」について、その概要から実際の使い方を紹介しています。

### DOTextで日本語を1文字ずつ表示したとき"途中で改行位置が変わる"問題の対処法

[【Unity】DOTextで日本語を1文字ずつ表示したとき"途中で改行位置が変わる"問題の対処法【TextMeshPro】 - Raspberlyのブログ](https://raspberly.hateblo.jp/entry/UnityDOMaxVisibleCharacters)

DOTweenの提供する、Tweenベースでテキストアニメーション扱えるDOTextで、文字が追加される時に改行位置が変化してしまう問題の対処方法を紹介しています。

### Unity(iOS)でメッセージアプリみたいなPush通知を送る

[Unity(iOS)でメッセージアプリみたいなPush通知を送る #iOS - Qiita](https://qiita.com/Akome/items/8e768ba1842feddb9636)

Communication Notificationsのネイティブプラグインを実装して、Unity上でメッセージングアプリであるようなローカルプッシュ通知を送信する方法を紹介しています。

### iOS でアプリのライフサイクルイベントやビューのイベントを受け取れるようにする

[【Unity】iOS でアプリのライフサイクルイベントやビューのイベントを受け取れるようにする #iOS - Qiita](https://qiita.com/mao_/items/21aa621b677f80f39573)

Unityが出力するXcodeプロジェクトの、`Classes/PluginBase` 配下にある `UnityViewControllerListener` や `LifeCycleListener`、`AppDelegateListener` を用いて、iOS独自のライフサイクルイベントをUnityアプリでハンドリングする方法を紹介しています。

### Unity as a Library を Expo Module で楽に運用する

- [Unity as a Library を Expo Module で楽に運用する (Android 編)](https://zenn.dev/livetoon/articles/expo-uaal-android)
- [Unity as a Library を Expo Module で楽に運用する (iOS 編)](https://zenn.dev/livetoon/articles/expo-uaal-ios)

React Nativeのフレームワーク「Expo」で、Expo Moduleを用いてUaaLの管理を行う方法を、AndroidとiOSでそれぞれ紹介しています。

### Unity as a LibraryでXCFrameworkを生成する方法(Swift)

[Unity as a LibraryでXCFrameworkを生成する方法(Swift) #UnityasaLibrary - Qiita](https://qiita.com/uhooi/items/22de35a7aa0ef8f7fe43)

SwiftからUaaLを使うためのXCFrameworkを生成する方法について、そのビルドパイプラインや自動化のためのMakefileの実装を紹介しています。

### UnityでなぜMCPが必要なのか

[UnityでなぜMCPが必要なのか](https://zenn.dev/dsgarage/articles/2cd3e51b3cdfcd)

UnityでAIを用いてゲームを制作する際に、MCPが必要になる理由について説明しています。

### Unity 6.3 で新しくなったToolbarを試す

[Unity 6.3 で新しくなったToolbarを試す #Unity - Qiita](https://qiita.com/shirokuma1101/items/496e1fb539bf5de1890d)

Unity 6.3から利用できる、Toolbarを独自に拡張するための `MainToolbarElement` の基本的な使い方について紹介しています。

### PlayableGraphはどのようにAnimatorのCulling Modeの影響を受けるのか

[【Unity】PlayableGraphはどのようにAnimatorのCulling Modeの影響を受けるのか - したかみ ぶろぐ](https://shitakami.hateblo.jp/entry/2025/12/22/030543)

PlayableGraphの出力に指定したAnimatorが画面外に移動した時に、AnimatorのCulling ModeがPlayableGraphにどう影響を与えるか、実験的に検証しています。

### コーディング規約に違反したらコンパイルエラーにしたい

[コーディング規約に違反したらコンパイルエラーにしたい #C# - Qiita](https://qiita.com/satotin/items/ca3523d6352669a72cf6)

コーディング規約に違反したら警告を出す独自の `RoslynAnalyzer` を実装し、規約に違反したらコンパイルエラーとするような環境を構築する方法を紹介しています。

### Unity Version Control をサービスに紐づけず、ローカルサーバーで使用する方法

[Unity Version Control をサービスに紐づけず、ローカルサーバーで使用する方法 #Unity6 - Qiita](https://qiita.com/tsubaki_t1/items/9df5fad2839584a50a51)

Unity Version Controlを、Unity Gaming Servicesに紐付けずにローカルサーバーを使用して、ローカルのみでバージョン管理を行うための設定方法を紹介しています。

### Unity 6（URP 17）で RenderGraph に対応した独自ポストエフェクトを差し込む最小構成

[Unity 6（URP 17）で RenderGraph に対応した独自ポストエフェクトを差し込む最小構成 #Unity6 - Qiita](https://qiita.com/kida_hironari/items/0412260ab67f937b484e)

RenderGraph対応の `ScriptableRenderPass` および `ScriptableRenderFeature` で、独自のポストエフェクトを実装する方法を紹介しています。

### MPPMでPlayerの起動順を制御する

[MPPMでPlayerの起動順を制御する #Unity - Qiita](https://qiita.com/housei/items/c78bbaa36a704116ff9a)

Unity Multiplayerにおいて、複数のプレイヤーのプレイヤーモードの起動順を制御する実装について紹介しています。

### ScriptableObjectからShaderへの同期

[ScriptableObjectからShaderへの同期](https://zenn.dev/tang3cko/articles/2140b60097fcd1)

ScriptableObjectで設定した値を、自動的にShaderの変数に同期する仕組みの実装方法を紹介しています。

