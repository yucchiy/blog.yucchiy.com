---
type: unity-weekly
title: Unity Weekly 272
description: >-
  2026/05/18週のUnity Weeklyです。Lighting Search、Preprocessor Directives in ShaderGraph、Android LTO、Albion Online開発事例、Ignitement開発事例などを紹介しています。
pubDatetime: 2026-05-18T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Introducing Lighting Search

[Introducing Lighting Search - Unity Engine - Unity Discussions](https://discussions.unity.com/t/introducing-lighting-search/1719676)

Unity 6.5から追加される、UnityEditor上で複雑なシーン上でのライト関連のデータの検索ができる「Lighting Search」について紹介しています。

このディスカッションではLighting Searchの基本的な使い方からビルトインで用意されている主要なクエリや検索インターフェイスの説明、この機能の実装に合わせて提供されるUnity Search FrameworkのLightmap providerについてそれぞれ説明しています。

### Preprocessor Directives in Graph Settings

[Preprocessor Directives in Graph Settings - Unity Engine - Unity Discussions](https://discussions.unity.com/t/preprocessor-directives-in-graph-settings/1719940)

Unity 6.6(6000.6.0a5)からShader GraphにPreprocessor Directivesという仕組みが追加され、カスタム関数ノードを利用せずにPragma・Define・Includeが定義できるようになりました。

Preprocessor Directivesは、Shader GraphのGraph Settingsの一番下から設定できます。

このディスカッションでは例として、Preprocessor DirectivesでパーティクルシェーダーのGPUインスタンスを有効にする例を紹介しています。

### ⚡ Boosting Android Performance with LTO optimizations in Unity 6.5

[⚡ Boosting Android Performance with LTO optimizations in Unity 6.5 - Technical Articles - Unity Discussions](https://discussions.unity.com/t/boosting-android-performance-with-lto-optimizations-in-unity-6-5/1720008)

Unity 6.5から入るAndroid向けのパフォーマンス改善としてLTO(Link Time Optimization)による最適化を紹介しています。

このディスカッションでは、LTOとこのアップデートで利用できる[ThinLTO](https://clang.llvm.org/docs/ThinLTO.html)や、この機能を有効にした場合のアプリ起動時間や実行時パフォーマンスの改善やビルド時間の増加のトレードオフ、この機能を有効にする方法についてそれぞれ説明しています。

### Prediction in GameObject Netcode

[Prediction in GameObject Netcode - DevLog Entry 4 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/prediction-in-gameobject-netcode-devlog-entry-4/1719927)

Netcode for Entitiesの新しいGameObjectレイヤーのGhostBehaviourで利用できる予測機能について紹介しています。

このディスカッションでは、`PredictedUpdate` によるGameObjectレイヤーでの予測コードの記述方法からこのメソッドが呼び出される頻度やロールバックなどに関する挙動（Tick Accuracy）、`PredictedUpdate`内でのオブジェクトの予測生成の挙動、所有者予測や挙動の補完、手動予測への切り替えなどについてそれぞれ説明しています。

### Albion Onlineの設計：プラットフォームを横断して拡張可能なPvP MMOの構築

[Architecting Albion Online: Building a PvP MMO to Scale Across Platforms | Unity](https://unity.com/blog/albion-online-cross-platform-pvp-mmo-architecture)

2017年にリリースされたPvP MMO「Albion Online」の、複数プラットフォームを跨いでコンテンツを提供し続ける開発アプローチについて紹介しています。

Unity Remoteを用いたプラットフォーム固有のUIの確認方法から視覚効果やレンダリング方法を切り替えることでのPC・コンソール・モバイルのパフォーマンスを維持する方法や全プラットフォームのビルドを安定化させるためのCI/CDの取り組み、MMOのためのシミュレーション層と可視化・入力層の分離、コンソール機固有の問題への対処法などについてそれぞれ説明しています。

### Making Fire Feel Alive: Real-time Fluid Simulation in Ignitement

[炎を生き生きと表現する：Ignitementでのリアルタイム流体シミュレーション | Unity](https://unity.com/ja/blog/real-time-fluid-simulation-fire-vfx-ignitement-breakdown)

2Dアクションローグライト「[Ignitement](https://store.steampowered.com/app/3845350/Ignitement/)」の炎の表現について、このゲームの開発者であるSørb氏が解説しています。

このゲームにおいて炎を表現するための2Dベースの流体シミュレーションの採用と`Graphic.Blit`によっていくつかのテクスチャを重ねがけ的に更新することでポストプロセスエフェクト程度のコストでシミュレーションを実現する方法やその擬似コード、炎・煙・燃えさしなどのレンダリングや炎のライティング方法、この設定で得られたライトマップを活用してUIなどへ炎による照明を反映など、それぞれ説明しています。

### Unity 産業 DX カンファレンス 2026 開催、 マツダ、ホンダ、竹中工務店が講演]

[Unity 産業 DX カンファレンス 2026 開催、 マツダ、ホンダ、竹中工務店が講演](https://unity3d.jp/news/announcement-sangyodx-2026/)

Unityの産業DXに特化したカンファレンス『Unity 産業DXカンファレンス 2026 』が、2026年6月9日(火)に東京・京橋のTODA HALL & CONFERENCE TOKYOで開催することが発表されました。

## Articles

### Unity Design Patterns

[Unity Design Patterns - C# Game Programming Patterns](https://www.unitydesignpatterns.com/)

21種類のデザインパターンを、アニメーション付きで図解しつつUnity &C#の実装付きで紹介しています。

また、それぞれのパターンのメリットとデメリットも合わせて説明しています。

### UnityでSteam実績を解除するはじめの一歩

- [UnityでSteam実績を解除するはじめの一歩: SetAchievementとStoreStatsを使う](https://zenn.dev/fatowl/articles/0e30bd281ea438)
- [UnityでSteam実績をリセットして何度でもテストする: ClearAchievementとResetAllStatsで開発用リセットU](https://zenn.dev/fatowl/articles/9f5aac4316c592)
- [UnityのSteam実績を実運用向けに整理する: Manager化、Callback、保存タイミング](https://zenn.dev/fatowl/articles/c3d0b8d8897be5)

Steamの実績を扱うためのSteamworkの導入から基本的なAPIの使い方として直接的な実績と累積的な実績解除、開発用途の実績クリアなどの実装から、実運用を考慮したコードの整理などをそれぞれ解説しています。

### Job System 大量のオブジェクトを並列処理で高速化しよう

[【Unity】Job System 大量のオブジェクトを並列処理で高速化しよう – 株式会社ロジカルビート](https://logicalbeat.co.jp/blog/25068/)

大量のミサイル（ターゲットに対して特定の軌道で着弾するGameObject）を、Job Systemをを用いて並列処理することで高速化するテクニックを紹介しています。

MonoBehaviourで計算される弾道の座標計算をJob Systemに置き換える方法から、Jobの同期タイミングを調整することで待機時間を減らすような最適化についてもProfilerで確認方法と合わせて説明しています。
