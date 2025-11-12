---
type: unity-weekly
title: Unity Weekly 135
description: >-
  2023/08/21週のUnity Weeklyです。HDR、DOTS Dev Blitz Day、モバイルWebGLゲーム開発、Photon
  Fusion、IEnableableComponentなどについて取り上げています。
pubDatetime: 2023-08-20T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Cross-platform HDR display support in Unity 2023

[Cross-platform HDR display support in Unity 2023 | Unity Blog](https://blog.unity.com/engine-platform/cross-platform-hdr-display-support)

Unity 2023の、各プラットフォームのHDR出力の対応状況や設定方法について解説しています。

### How Rubber Duck Games developed a boss fight in Evil Wizard

[The development process of an Evil Wizard boss fight | Unity Blog](https://blog.unity.com/games/how-rubber-duck-games-developed-evil-wizard-boss-fight)

GDC 2023のBest in Playを受賞したRubber Duck Gamesの開発するEvil Wizardの 風システム や AIの実装のためのBehaviour Designer利用、アニメーションの組み込み、VFXについてそれぞれ紹介しています。

## DOTS Dev Blitz Day - 2023

[Official - DOTS Dev Blitz Day - 2023 - Unity Forum](https://forum.unity.com/threads/dots-dev-blitz-day-2023.1480143/)

Unityの中の人が開発者の質問に答えるイベント Dev Blitz Day が 2023/08/24 に開催されます。今回は DOTS チームが参加します。

前日の23日から専用の [QAフォーラム](https://forum.unity.com/forums/dots-dev-blitz-day-2023-q-a.972/) と [Discord](https://discord.gg/unity) で質問を受け付け、24日に回答を開始します。

### Join Unity at gamescom and devcom August 22–25

[Official - Join Unity at gamescom and devcom August 22–25 - Unity Forum](https://forum.unity.com/threads/join-unity-at-gamescom-and-devcom-august-2225.1472871/)

ケルンで開催されるdevconとgamesconにUnity公式が参加する予定とのことです。このアナウンスではdevconおよびgamesconで参加予定のセッションのタイムテーブルおよびその概要を紹介しています。

## Articles

### UnityでモバイルWebGLゲーム開発を頑張る話

[UnityでモバイルWebGLゲーム開発を頑張る話 - Mirrativ Tech Blog](https://tech.mirrativ.stream/entry/2023/08/14/105252?utm_source=feed)

Unityでモバイルプラットフォーム向けのWebGLゲームを開発する上で直面した主な課題「パフォーマンス編」・「キャッシュ編」・「モバイルアプリとの違い編」とその対応方法についてあわせて紹介しています。

### This Free Tool Lets You Peel 3D Meshes in Unity

[This Free Tool Lets You Peel 3D Meshes in Unity](https://80.lv/articles/this-free-tool-lets-you-peel-3d-meshes-in-unity/)

様々な形状やサイズの3Dメッシュを剥がすことのできる [Mesh-Peeling](https://github.com/bunszr/Mesh-Peeling) について紹介しています。

### Photon Fusionの入門の入門

- [Photon Fusion 入門の入門](https://zenn.dev/photon_japan/articles/313c4325bb347b)
- [【Photon Fusion】位置の同期 基本編](https://zenn.dev/photon_japan/articles/0ff7a5b9171666)
- [【Photon Fusion】位置の同期 自作編](https://zenn.dev/photon_japan/articles/82a0acc2a03e91)
- [【Photon Fusion】共有モードのチュートリアル](https://zenn.dev/photon_japan/articles/8b6cf800df9bc8)
- [【Photon Fusion】ホストモードのチュートリアル](https://zenn.dev/photon_japan/articles/c5218f06215d88)

Photon運営事務局によるPhoton Fusionの解説記事です。

Photon Fusionの導入方法から位置同期のための各種機能の紹介から位置同期の自作、共有モードとホストモードについてそれぞれ解説しています。

### A simple example of using IEnableableComponent

[A simple example of using IEnableableComponent – COFFEE BRAIN GAMES](https://coffeebraingames.wordpress.com/2023/08/21/a-simple-example-of-using-ienableablecomponent/)

Entities 1.0で追加された、コンポーネントの有効・無効を表す `IEnableableComponent` について、その概要から簡単なコンポーネントを題材にしたこのインターフェイスの実装方法とその挙動についてまとめています。

### ShaderGraphで作る竜巻エフェクト

[ShaderGraphで作る竜巻エフェクト｜G2 Studios株式会社](https://note.g2-studios.net/n/n15c66416baba)

ShaderGraphで竜巻エフェクトを制作する方法について、その制作過程からノードの組み方について紹介しています。

### Photon Fusion for Unityのオブジェクトインタレスト機能の基礎と注意点

[Photon Fusion for Unityのオブジェクトインタレスト機能の基礎と注意点 - Qiita](https://qiita.com/nimushiki/items/e45f2eea77b0ca5cae37)

Photon Fusionの、同期する必要があるオブジェクトが増えた際の対策として利用できるインタレストマネジメントについて、機能概要から設定方法、利用する際の注意点についてまとめています。

### 秒で使えるタイピングゲームのエンジンを作りました

[秒で使えるタイピングゲームのエンジンを作りました - 実践ゲーム製作メモ帳2](https://eiki.hatenablog.jp/entry/2023/08/14/203318)

現在の入力中文字表示や（複数の入力が存在した場合などの）柔軟な入力への対応がされた、シンプルな自作タイピングゲームエンジンについて紹介しています。

### 平行投影(Orthographic)でリムライト

[[Unity]平行投影(Orthographic)でリムライト - Qiita](https://qiita.com/flankids/items/4e0dfdbaec0a5e8db687)

リムライトを例に、平行投影でライティングを行う際の注意点をまとめています。

### LevelPlay(IronSource)を導入後に、Androidビルドが上手くいかない時の解決方法

[LevelPlay(IronSource)を導入後に、Androidビルドが上手くいかない時の解決方法 - Qiita](https://qiita.com/ScreenPocket/items/d82df562b6cc27a4d741)

Unityの広告システムLevelPlayの導入で、Androidビルドが正常に行えない場合のトラブルシューティングについてまとめています。
