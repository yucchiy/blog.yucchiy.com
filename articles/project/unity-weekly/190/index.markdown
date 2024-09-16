---
type: "unity-weekly"
title: "Unity Weekly 190"
description: "2024/09/16週のUnity Weeklyです。Runtime Fee撤回、DOTS Ebook日本語翻訳、Unity 産業 DX カンファレンス 2024資料公開などについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-09-17T00:00:01"
---

## Unity Officials

### ゲーム領域向け Runtime Fee の撤回について

[ゲーム領域向け Runtime Fee の撤回について](https://unity.com/ja/blog/unity-is-canceling-the-runtime-fee)

Runtime Feeの撤回がアナウンスされました。また、この撤回と合わせてUnityライセンスの料金体系や一部ライセンスの価格変更についてもあわせてアナウンスされています。

### Unity の上級開発者向けData-Oriented Technology Stack (DOTS)

[Unity の上級開発者向けData-Oriented Technology Stack (DOTS) | ユニティ・テクノロジーズ・ジャパン株式会社](https://unity3d.jp/game/game-ebooks/unity-dots/)

「[Introduction to the Data-Oriented Technology Stack for advanced Unity developers](https://unity.com/ja/resources/introduction-to-dots-ebook)」が日本語翻訳されて公開されました。


## Slides

### Unity 産業 DX カンファレンス 2024

[Unity 産業 DX カンファレンス 2024 | Unity Learning Materials](https://learning.unity3d.jp/event/dxconference2024/)

2024/07/19に開催された「Unity 産業 DX カンファレンス 2024」のスライドおよび動画が公開されています。

## Articles

### Unity6からRenderGraphを使いこなそう ー 実装応用編 その1

[Unity6からRenderGraphを使いこなそう ー 実装応用編 その1 - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2024/09/11/105032)

色反転のBlit操作を題材に、Unity6のRenderGraphの従来のシステムからの変更点（または変更がされてない点）やRenderGraphを用いたBlit操作の実装方法について解説しています。

### HttpClient と YetAnotherHttpHandler で AssetBundle のダウンロードを HTTP/2 化してみる

[HttpClient と YetAnotherHttpHandler で AssetBundle のダウンロードを HTTP/2 化してみる](https://zenn.dev/happy_elements/articles/eb64dd0a472a38)

C#標準のHttpClientとCysharpが提供するYetAnotherHttpHandlerを使い、Addressablesの独自の`IResourceProvider`を実装することでHTTP/2を用いたAssetBundleのダウンロードを行うための方法の紹介とそのパフォーマンスについて検証しています。

### ゲームロジックを複数のアプリケーションで共有する

[ゲームロジックを複数のアプリケーションで共有する │ Aiming 開発者ブログ](https://developer.aiming-inc.com/unity/post-10909/)

ゲーム中のバトルなどのロジックを、たとえばAIによる勝率検証やサーバー上でのバトル検知のためにUnity以外の環境上でも動作させるための設計やその実装方法について解説しています。

### UnityでAndroidのCameraX APIを利用して動画撮影する

[UnityでAndroidのCameraX APIを利用して動画撮影する](https://zenn.dev/meson/articles/android-camerax-library-for-unity)

AndroidのCameraX APIを用いた動画撮影の録画機能のネイティブプラグイン実装と、そのプラグインをUnityから呼び出す方法について紹介しています。

### GL.GetGPUProjectionMatrix による変換

[(Unity) GL.GetGPUProjectionMatrix による変換 - ネコのために鐘は鳴る](https://ikorin2.hatenablog.jp/entry/2024/09/05/165405)

Projection行列を取得するための `GL.GetGPUProjectionMatrix` について、このメソッドが必要な背景や各グラフィックAPIで取得できるProjection行列の中身について解説しています。

### URP 17, RenderGraph】Invalid version: 20

[【URP 17, RenderGraph】Invalid version: 20](https://zenn.dev/ruccho/articles/41337c11ee3615)

URP14からURP17にアップデートした際に発生したエラー`Invalid version: 20`について、その原因と解決方法について解説しています。

### アロケーションなしで文字列を分割（Split）

[アロケーションなしで文字列を分割（Split） #C# - Qiita](https://qiita.com/sator_imaging/items/1393aa0efa3b064d77ec#%E4%B8%80%E7%95%AA%E3%83%91%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%B3%E3%82%B9%E3%81%8C%E8%89%AF%E3%81%8B%E3%81%A3%E3%81%9F%E5%AE%9F%E8%A3%85)

文字列を分割する`Split`メソッドをアロケーションなしで実装する方法と、そのパフォーマンスについて紹介しています。

### AndroidアプリにUnity as a Libraryを導入する

[AndroidアプリにUnity as a Libraryを導入する #Java - Qiita](https://qiita.com/hayato-c18/items/ee04bb320161e3c09d1d)

UaaL（Unity as a Library）のAndroidアプリへの導入方法について、おもにAndroidプロジェクト側への組み込み方法を紹介しています。


### 数字を高速に変更している時のテキストのガタツキは、mspaceを使って一部分だけ等幅にする事で改善出来る

[数字を高速に変更している時のテキストのガタツキは、mspaceを使って一部分だけ等幅にする事で改善出来る【Unity】【TextMesh Pro】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/TMP_mspace)

TextMesh Proで、一部の文字のみをmspaceで描画して等幅にする方法を紹介しています。
