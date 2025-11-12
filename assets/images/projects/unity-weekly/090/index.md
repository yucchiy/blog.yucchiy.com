---
type: unity-weekly
title: >-
  Game Focus、Expert tips for indie mobile success、MessagePipe、Boss Room v2.0 -
  Unity Weekly 090
description: >-
  2022/10/10週のUnity Weeklyです。Games
  Focusのプラットフォーム特集、インディ開発におけるモバイル開発Tips、MessagePipe、Boss Room
  v2.0リリースなどについて取り上げました。
pubDatetime: 2022-10-10T06:00:00.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Games Focus: Reach more players over multiple platforms and form factors

[Games Focus: Reach more players over multiple platforms and form factors | Unity Blog](https://blog.unity.com/preview/U6Q3i43y-VSO0xZvz6w0TPCnrEvsQWjh5mCAzeQSokQ)

Unityブログの連載「Games Focus」の第４段で、今回はプラットフォーム対応についてフォーカスしています。



新しいプラットフォームに対するUnityの対応状況としてAppleシリコンのネイティブサポートやPlayStation VR2の事例の紹介や、モバイルプラットフォーム（iOS/Android）のツールチェーンのアップデート、WebGLのタッチキーボードサポート・デプロイ先のサポートに基づくテクスチャ圧縮フォーマット・WASMとJSのメモリ使用量を測定する新しい診断オーバーレイツールの紹介、DirectX12バックエンドについてそれぞれ解説しています。

### Robot Squid と Superplus Games のエキスパートに聞く、インディ開発者がモバイル市場で成功するためのヒント

[Robot Squid と Superplus Games のエキスパートに聞く、インディ開発者がモバイル市場で成功するためのヒント | Unity Blog](https://blog.unity.com/ja/games/expert-tips-for-indie-mobile-success-with-robot-squid-and-superplus-games)

Robot SquidとSuperplus Games社を招いて『King of Crabs』と『Hills of Steel 2』におけるモバイルゲーム開発体験についてインタビューしています。



インディ開発者としてモバイルプラットフォームでの展開を選択した理由からモバイル向けとしてゲームをデザインする際のビジョン、プロトタイピングのプロセス、モバイル展開を考慮した開発アプローチの変化、モバイル向けのゲーム開発の技術的課題、モバイル向けにゲームをリリースする際のコツについてそれぞれ解説しています。

### ゲーム開発スキルをレベルアップさせる 5 つの教材

[ゲーム開発スキルをレベルアップさせる 5 つの教材 | Unity Blog](https://blog.unity.com/ja/games/level-up-your-game-development-skills)

Unity公式が提供するゲーム開発をレベルアップさせるのに役立つ教材を、「アクセシビリティ」・「ビジュアルスクリプティング」・「3D入門」・「中級レベルのC#スクリプティング」・「初心者向けVR開発」の５つ紹介しています。

### Unity for Humanity Summit で学び、つながり、そして祝おう

[Unity for Humanity Summit で学び、つながり、そして祝おう | Unity Blog](https://blog.unity.com/ja/news/learn-connect-and-celebrate-at-the-unity-for-humanity-summit)

2022/11/02に開催される[Unity for Humanity Summit](https://unity.com/ja/unity-humanity-summit)について講演内容が紹介されています。

## Articles

### MessagePipeを触ってみる2 さまざまなIPublisher/ISubscriber編 

[【Unity】MessagePipeを触ってみる2 さまざまなIPublisher/ISubscriber編 - Qiita](https://qiita.com/toRisouP/items/b8198df81603f628a09e?utm_campaign=post_article&utm_medium=twitter&utm_source=twitter_share)

ハイパフォーマンスなメッセージングライブラリ「[MessagePipe](https://github.com/Cysharp/MessagePipe)」の IPublisherとISubscriberについて解説しています。



基本的な `IPublisher<T>` と `ISubscriber<T>` の利用方法からメッセージを送信する相手をグルーピングするといった用途での `IPublisher<TKey, T>` や `ISubscriber<TKey, T>` の利用方法、 `IBufferedPublisher<T>` や `IBufferedSubscriber<T>` の挙動についての説明、`IAsyncPublisher<T>`と`IAsyncSubscriber<T>` を用いてメッセージを送ったあとの処理の完了を待つ方法について簡単なサンプルコード付きで解説しています。

### コンポーネントやその値のコピーとペーストをプログラムから行う方法

[コンポーネントやその値のコピーとペーストをプログラムから行う方法【Unity】【エディタ拡張】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/UnityEditorInternal_ComponentUtility)

エディターのインスペクターから利用できるコンポーネントのコピーやペーストを `UnityEditorInternal.ComponentUtility` を介してプログラムから実行する方法について紹介しています。

### Sorting a million sprites

[Sorting a million sprites – COFFEE BRAIN GAMES](https://coffeebraingames.wordpress.com/2022/10/04/sorting-a-million-sprites/)

100万個のスプライトをGPUインスタンシングで高速に描画する方法について考察しています。



スプライトの前後関係のために頂点をソートするのではなく、シェーダー側にz値として前後関係を渡してGPU側でソートすることで、より高速に描画を行っています。

### Magica Cloth最速入門

[【Unity】Magica Cloth最速入門【揺れ物】 - Qiita](https://qiita.com/GONBEEE_project/items/1e906bed210138ef88e6)

Magica Clothを用いて髪の毛やスカートを揺らす揺れものを仕込む方法について、Magica Clothの導入から各種コンポーネントの説明、当たり判定を取るためのColliderコンポーネントの設定方法などを解説しています。

### プロジェクトをNetcode for GameObjectsのリリース版にアップデートする

[プロジェクトをNetcode for GameObjectsのリリース版にアップデートする - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/ngo-release-version-update)

先日のEntities 1.0実験版リリースに伴ってリリースされたNetcode for GameObjectsのリリースバージョンに、古いバージョンからアップデートする手順と、そのアップデート間の破壊的変更とその対応方法について紹介しています。

### デフォルトのカスタムエディタを実装可能なisFallbackフラグの紹介【CustomEditor】

[【Unity】デフォルトのカスタムエディタを実装可能なisFallbackフラグの紹介【CustomEditor】 - Qiita](https://qiita.com/su10/items/9d83b6b5c6ee43b08e4d)

UI Toolkitを用いて Custom Property Drawer を実装する際に必ず各クラスのCustom Editorを実装しないとインスペクターが描画できないという問題と、 `CustomEditor.isFallback` フラグを用いてデフォルトのCustom Editorを実装する方法について解説しています。

### URPでDepthだけを書き込むシェーダー&影だけを描画するシェーダー

[【Unity】URPでDepthだけを書き込むシェーダー&影だけを描画するシェーダー - Qiita](https://qiita.com/aa_debdeb/items/d39b0ea8cbfcdc464c02)

URP（Universal Render Pipeline）でDepthだけを書き込むシェーダーおよび影だけを描画するシェーダーの実装方法について解説しています。

### ノーマルマップで凹凸を表現しよう

[ノーマルマップで凹凸を表現しよう - Cluster Creators Guide](https://creator.cluster.mu/2022/10/05/normalmap/?utm_source=feedly&utm_medium=rss&utm_campaign=normalmap)

ノーマルマップをWebやBlenderで作成する方法から、Unityでノーマルマップを取り込んで凹凸を表現する方法について紹介しています。

### CSVファイルを読み込むシンプルな汎用ロジックを書いた

[#unity CSVファイルを読み込むシンプルな汎用ロジックを書いた - 土屋つかさの技術ブログは今か無しか](https://someiyoshino.info/entry/2022/10/08/111156?utm_source=feed)

Unityでローカルアセットとして格納されたCSVを外部ライブラリなどを利用せずに実装する方法について紹介しています。

## Repositories

### Boss Room v2.0 Released

[Release v2.0.0 · Unity-Technologies/com.unity.multiplayer.samples.coop · GitHub](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop/releases/tag/v2.0.0)

Unityのマルチプレイヤーゲームサンプル「Boss Room」のv2.0がリリースされました。



NetworkRigidbodyベースな挙動を行う敵の追加やアイテムのピックアップアクション（オブジェクトのプレイヤーアニメーションの追従）、プロジェクトのアーキテクチャのリファクタリング、NetworkTransformの更新メッセージにおいて不要なデータを削減によるNetcodeのパフォーマンス改善などが行われました。

### Unity URP Temporal Anti-Aliasing

[CMDRSpirit/URPTemporalAA: Temporal AA solution for Unity's Universal render pipeline](https://github.com/CMDRSpirit/URPTemporalAA)

URPのためのTemporary Anti-Aliasing（TAA）実装。

### Unity-Hierarchical-Finite-State-Machine

[AlexBlackfrost/Unity-Hierarchical-Finite-State-Machine: Hierarchical Finite State Machine](https://github.com/AlexBlackfrost/Unity-Hierarchical-Finite-State-Machine)

Unityでの階層型ステートマシン実装。

