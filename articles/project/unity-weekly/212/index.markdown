---
type: "unity-weekly"
title: "Unity Weekly 212"
description: "2025/02/24週のUnity Weeklyです。RenderGraph、GPU Resident Drawer、Addressablesなどについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2025-02-25T00:00:01"
---

## Articles

### Unity6のRenderGraphでのFrameBufferFetch活用法

[Unity6のRenderGraphでのFrameBufferFetch活用法 - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2025/02/21/165851)

Unity 6から利用できるRender Graphの FrameBufferFetch の基本的な概念の紹介から実装方法、パフォーマンス比較について紹介しています。

### GPU Resident Drawerを動かしてみた（備忘録）

[【Unity】GPU Resident Drawerを動かしてみた（備忘録） - したかみ ぶろぐ](https://shitakami.hateblo.jp/entry/2025/02/22/225329)

Unity 6から利用できる描画最適化ための「GPU Resident Drawer」について、その概要から動作確認、パフォーマンス比較について紹介しています。

### Addressablesをもっと便利にする①

[【Addressables】Addressablesをもっと便利にする① - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2025/02/18/161008)

Addressablesの動作モードに独自の動作モードを追加して、独自のアセット読み込みを実現する方法について紹介しています。

### シェーダーでひびを入れる［その2：ジオメトリシェーダー編]

[【Unity】シェーダーでひびを入れる［その2：ジオメトリシェーダー編］](https://zenn.dev/lilytechlab/articles/4b67cfbc44ad79)

ジオメトリシェーダーを用いて、実際にモデルをを変形することでシェーダーにヒビを入れる方法について解説しています。

前回の記事は「[【Unity】シェーダーでひびを入れる［その1：フラグメントシェーダー編］](https://zenn.dev/lilytechlab/articles/518b5e29738f9b)」より確認できます。

### Android 15以降で16KBページサイズのサポート必須になった場合に開発者は再ビルド等の対応をしないといけない話

[【Unity】Android 15以降で16KBページサイズのサポート必須になった場合に開発者は再ビルド等の対応をしないといけない話 - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2025/02/20/120000)

Android 15の16KBページサイズのUnityでの対応方法について紹介しています。

### 実行後のゲームウィンドウを制御する方法

[【Unity】実行後のゲームウィンドウを制御する方法【WinAPI】](https://zenn.dev/ail/articles/18ff2fffe1aa72)

Unity上からWinAPIを叩くことで、Unityで制作したWindowsアプリケーションのウインドウの挙動を制御する方法について紹介しています。

### Monkey Test Helper パッケージのトラブルシュート

[Monkey Test Helper パッケージのトラブルシュート - やらなイカ？](https://www.nowsprinting.com/entry/2025/02/19/080000)

この記事の著者が開発する、Unity上でモンキーテストを実行できる「[Monkey Test Helper](https://github.com/nowsprinting/test-helper.monkey)」のトラブルシュート資料の和訳記事です。

主に、このライブラリの `Monkey` や `GameObjectFinder` での `TimeoutException` の扱いについて紹介しています。

### Surface-Stable Fractal Ditheringをやってみた

[【Unity】【Shader】Surface-Stable Fractal Ditheringをやってみた #Unity3D - Qiita](https://qiita.com/ayaha401/items/10ceb9509608ee3746c5)

Unity上で Surface-Stable Fractal Dithering によるディザ抜きを実装する方法について紹介しています。

### Unity6でSpriteがImageにアサインできないとき

[Unity6でSpriteがImageにアサインできないとき](https://zenn.dev/tkada/articles/56133c09d3306f)

Unity 6におけるテクスチャインポートの際の `Sprite Mode` のデフォルト値が `Multiple` に変更されたことに伴う Sprite の uGUIの Image コンポーネントへのアサインの対応方法について紹介しています。
