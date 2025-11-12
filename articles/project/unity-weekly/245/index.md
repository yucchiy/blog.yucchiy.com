---
type: unity-weekly
title: Unity Weekly 245
description: >-
  2025/10/27週のUnity Weeklyです。U/Day Tokyo 2025、Unity
  6.4プレリリースやアーティファクトの依存関係の破壊的変更、Jobs Profilersの実験的パッケージリリースなどを紹介しています。
pubDatetime: 2025-10-26T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unityのゲーム開発者向けカンファレンス 「U/Day Tokyo 2025」12月11日(木) 開催決定

[Unityのゲーム開発者向けカンファレンス 「U/Day Tokyo 2025」12月11日(木) 開催決定](https://unity3d.jp/news/u-day-tokyo-2025/?utm_source=twitter&utm_medium=social&utm_campaign=x-unity-japan-2025-10-u-day-tokyo-2025)

Unityのゲーム開発者向けカンファレンス「U/Day Tokyo 2025」が2025年12月11に開催されることがアナウンスされています。

公演一覧や参加の事前登録、懇親会への申し込みが案内されています。

### Unity 6.4 pre-release - engagement guidelines & release announcements

[Unity 6.4 pre-release - engagement guidelines & release announcements - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-6-4-pre-release-engagement-guidelines-release-announcements/1690610)

Unity 6.4のプレリリースをアナウンスするディスカッションです。
現状6.3と比べて大きな変更はないものの、ベータ版のリリースに向けて機能が増える旨や、このバージョンを評価したりバグレポートを送る方法などについて説明しています。

### Narrowing Artifact Dependencies in Unity 6.4

[Narrowing Artifact Dependencies in Unity 6.4 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/narrowing-artifact-dependencies-in-unity-6-4/1690877)

Unity 6.4で計画されているアセット間の依存関係の解決に関するAssetDatabaseの破壊的変更について紹介するディスカッションです。

UnityのAssetDatabaseによってインポートされた際に生成される「アーティファクト」の依存関係を管理する`ImportResultID`は、そのデータを生成するための入力と設定によって算出されていましたが、
Unity6.4からはインポートの際に生成された出力データに基づいた`ImportResultOutputID`と識別子によって管理されるようになるとのことです。

このディスカッションでは、このような破壊的変更が行われる問題の背景や影響範囲について解説しています。

### Introducing the Jobs Profiler Package

[Introducing the Jobs Profiler Package - Experimental Release - Unity Engine - Unity Discussions](https://discussions.unity.com/t/introducing-the-jobs-profiler-package-experimental-release/1691249)

Unity 6.0以降で使える、ジョブシステムのパフォーマスやその動作の詳細を解析するための新しい「Job Profiler」パッケージが実験的にリリースされたことをアナウンスするディスカッションです。

このパッケージでは、ジョブの依存会計の詳細な検査や、フレームごとの統計情報の強化、デバッグワークフローの改善などの様々な対応が行われているとのことです。

パッケージ名は `com.unity.jobsprofiler` としてインストールでき、またドキュメントは[こちらより](https://docs.unity3d.com/Packages/com.unity.jobsprofiler@0.0/manual/jobs-profiler-introduction.html)確認できます。

### Behavior Package 1.0.13 Released!

[Behavior Package 1.0.13 Released! - Unity Engine - Unity Discussions](https://discussions.unity.com/t/behavior-package-1-0-13-released/1691898)

Behaviour Packageの 1.0.13がリリースされたことをアナウンスするディスカッションです。

このディスカッションでは、このバージョンでリリースされた`SerializeReference`でシリアライズされたもののうち欠落して解決できなくなったものを検知する機能や、グラフアセットのシリアライズのアップデートなどについて紹介しています。

### Announcing Unity Commerce Management Platform for IAP (Early Access)

[Announcing Unity Commerce Management Platform for IAP (Early Access) - Unity Services - Unity Discussions](https://discussions.unity.com/t/announcing-unity-commerce-management-platform-for-iap-early-access/1691594)

Unityの単一のダッシュボードから、クロスプラットフォームなアプリ内課金を管理できるようになったことをアナウンスするディスカッションです。

ディスカッションでは、この対応によって追加された機能の概要を説明しています。

### Unityが世界のゲーム開発者に向けたクロスプラットフォームのネイティブなコマース管理機能を発表

[Unityが世界のゲーム開発者に向けたクロスプラットフォームのネイティブなコマース管理機能を発表](https://unity3d.jp/news/unity-crossplatform-commerce-management/)

Unityが、Stripeとの提携を発表しました。
この提携により、複数のプラットフォームでの課金システムを統一的に管理できるようになるとのことです。

### Unity が Samsung「Galaxy XR」のローンチタイトルの開発をサポート、Android XR エコシステムを加速

[Unity が Samsung「Galaxy XR」のローンチタイトルの開発をサポート、Android XR エコシステムを加速](https://unity3d.jp/news/android-xr-support/)

Unityが、Unity 6でのAndroid XRサポートの一般提供開始を発表しました。
また、SumsungのGalaxy XRのローンチタイトルに、Unityで開発されたタイトルが複数リリースされたことも併せて発表しています。

## Articles

### unityroomでパフォーマンスよくStreamingAssets/Addressablesを使えるライブラリを作った

[unityroomでパフォーマンスよくStreamingAssets/Addressablesを使えるライブラリを作った](https://zenn.dev/aakei/articles/embedded-streaming-assets)

unityroomなどのStreamingAssetをアップロードできないウェブビルド環境において、StreamingAssetsフォルダの内容を`TextAsset`として保存し、実行時に`Resources`経由でメモリ上に展開する「[EmbeddedStreamingAssets](https://github.com/Akeit0/EmbeddedStreamingAssets)」について、このパッケージの実装の詳細を解説しています。


### Addressablesをもっと便利にする②

[【Addressables】Addressablesをもっと便利にする② - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2025/10/22/104150)

Addressablesのアセットをアドレスを介して参照する`AssetAddressReference`を実装することで、カタログのサイズを削減する最適化と、これを実装する際の注意点についてまとめています。

### Unity × VContainer : 手っ取り早く使おう

[【もぉん流】Unity × VContainer : 手っ取り早く使おう](https://zenn.dev/matsu_friends/articles/b088a9f0f4c04b)

VContainerをUnityプロジェクトに簡単に導入するための手順やテスト方法、VContainerを扱う上でのいくつかのTipsを紹介しています。

### Unity as a Libraryを用いて3Dアプリを作成しよう！

[Unity as a Libraryを用いて3Dアプリを作成しよう！【Android】【Unity 2022】 #Compose - Qiita](https://qiita.com/kei-1111/items/556ea8d0d2ad92cb021c)

AndroidアプリにUnity as a Library（UaaL）で制作したライブラリを導入して3Dを描画するアプリを実装する方法について、UaaLの組み込み方や、AndroidアプリとUnityアプリ間で疎通する方法についてそれぞれ紹介しています。
