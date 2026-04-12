---
type: unity-weekly
title: Unity Weekly 268
description: >-
  2026/04/13週のUnity Weeklyです。RenderGraph移行チュートリアル、Unity Build Automationのコンソールビルド拡大、Unite 2026 Tokyo、Unityゲーム開発オンラインセミナーなどを紹介しています。
pubDatetime: 2026-04-13T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Migrating to Render Graph tutorial: Understanding the RenderGraph samples

[Migrating to Render Graph tutorial: Understanding the RenderGraph samples - Technical Articles - Unity Discussions](https://discussions.unity.com/t/migrating-to-render-graph-tutorial-understanding-the-rendergraph-samples/1715833)

RenderGraphに移行するためのチュートリアルシリーズで、Render Graphについて用意されているサンプルについて、それぞれ用意されているサンプルについて構築されているRenderGraphやそのコードについてそれぞれ解説しています。

### Migrating to Render Graph tutorial: The Render Graph viewer 

[Migrating to Render Graph tutorial: The Render Graph viewer - Technical Articles - Unity Discussions](https://discussions.unity.com/t/migrating-to-render-graph-tutorial-the-render-graph-viewer/1715694)

RenderGraphに移行するためのチュートリアルシリーズで、Render Graphが構築するグラフの状態を確認できるRender Graph viewerの使い方について解説する記事です。

ビューワーの基本的な使い方からパスの状態の確認方法についてそれぞれ解説しています。

### Unity Build Automation Console Support Available

[Unity Build Automation Console Support Available - Unity Services - Unity Discussions](https://discussions.unity.com/t/unity-build-automation-console-support-available/1716022)

Unity Build Automationのコンソールサポートに、Xbox Series X|SおよびPlayStation®5のサポートが追加されることを発表しています。

### PubMatic Bidding now on LevelPlay

[🛠 PubMatic Bidding now on LevelPlay - Unity Services - Unity Discussions](https://discussions.unity.com/t/pubmatic-bidding-now-on-levelplay/1715977)

LevelPlayの入札機能が拡張され、サポートネットワークにPubMaticが追加されたことがアナウンスされています。

この機能が使えるSDKバージョンの下限は9.0.0で、[こちらに導入に関するドキュメントが公開されています](https://docs.unity.com/ja-jp/grow/levelplay/sdk/flutter/networks/guides/pubmatic)。

### ユナイト2026：ゲーム開発者・クリエイター向けカンファレンス

[ユナイト2026：ゲーム開発者・クリエイター向けカンファレンス | Unity](https://unity.com/ja/events/unite-2026?utm_source=twitter&utm_medium=social&utm_campaign=x-unity-japan-2026-4-unite-tokyo-2026)

2026/11/17にUnite Tokyo 2026が開催されることが発表されまし

### Unityゲーム開発オンラインセミナー2026 ＃2 〜Unity 6を使いこなすためには！【続編】～

[Unityゲーム開発オンラインセミナー2026 ＃2 〜Unity 6を使いこなすためには！【続編】～](https://create.unity.com/unity-gaming-webinar-jp-20260422)

Unityのゲーム開発に関するオンラインセミナーが2026/04/22(水) 16:00 ～ 17:15で開催されます。

今回のセミナーでは、Unity WebランタイムのプロファイリングおよびPlatform Toolkitによるクロスプラットフォーム開発がテーマになっています。

### 産業分野のための Unity オンラインセミナー 2026 #1

[産業分野のための Unity オンラインセミナー 2026 #1 | Unity Learning Materials](https://learning.unity3d.jp/11020/)

2026/02/26に開催された、「産業分野のための Unity オンラインセミナー 2026 #1」の講演動画がUnity Learning Materialsにて公開されています。

### Unity と Meta、複数年にわたるパートナーシップを延長し次世代 VR エクスペリエンスを強化

[Unity と Meta、複数年にわたるパートナーシップを延長し次世代 VR エクスペリエンスを強化](https://unity3d.jp/news/unity-meta-partnership-extended/?utm_source=twitter&utm_medium=social&utm_campaign=x-unity-japan-2026-4-unity-meta-partnership)

UnityがMetaと複数年にわたるプラットフォームサポートおよびエンタープライズ契約の延長を発表しました。

## Articles

### TimelineとCinemachineを連携して使ってみよう

[【Unity】TimelineとCinemachineを連携して使ってみよう – 株式会社ロジカルビート](https://logicalbeat.co.jp/blog/24869/)

TimelineとCinemachineを用いて、オブジェクトの演出とカメラワークがセットになった演出をタイムラインを用いて作成する方法について紹介しています。

### File.WriteAllでセーブデータの書き込みを行っていると、書き込み中にクラッシュした際にファイルが破損することがある

[File.WriteAllでセーブデータの書き込みを行っていると、書き込み中にクラッシュした際にファイルが破損することがある - きゅぶろぐ](https://blog.kyubuns.dev/entry/2026/04/12/091258)

`File.WriteAll` の処理途中でクラッシュした際にファイルを破損させる可能性がある挙動と、それを解消するための一時ファイルに書き出し＆ファイルコピーによる回避方法について紹介しています。

### ImageEffectの様にシンプルにBlit()するだけのRenderGraph対応済みRendererFeature

[ImageEffectの様にシンプルにBlit()するだけのRenderGraph対応済みRendererFeature #Unity - Qiita](https://qiita.com/ScreenPocket/items/1265122cb86130a57460)

RenderGraphで、バッファにBlitしてマテリアルを適用し(記事中ではモノクロ化)、再度Blitによって書き戻すような `RendererFeature` の実装について紹介しています。
