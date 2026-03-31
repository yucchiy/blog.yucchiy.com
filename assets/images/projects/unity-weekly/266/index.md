---
type: unity-weekly
title: Unity Weekly 266
description: >-
  2026/03/30週のUnity Weeklyです。Unity 6.5リリース、Swift Xcode project、Path to CoreCLR、Netcode for GameObjects v2.11.0 などを紹介しています。
pubDatetime: 2026-03-31T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---


## Unity Officials

### Unity 6.5 Beta is now available

[Unity 6.5 Beta is now available - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-6-5-beta-is-now-available/1714274)

Unity 6.5のベータ版がリリースされたことをアナウンスしています。

このバージョンでは、レガシーAPIの削除やBiRPの非推奨化、EntitiesとGameObjectの連携強化、iOS Swiftプロジェクト対応などが含まれます。

### 6.5 Beta Sweepstakes - Your chance to win a GPU!

[6.5 Beta Sweepstakes - Your chance to win a GPU! - Unity Engine - Unity Discussions](https://discussions.unity.com/t/6-5-beta-sweepstakes-your-chance-to-win-a-gpu/1712648)

Unity 6000.5のリリースに合わせて、6.5ベータ期間中にオリジナルのバグをレポートすると応募できる懸賞が開催されています。

2026/03/26 6:00(PST) ~ 2021/6/1 11:59(PST) の期間に開催されており、景品は下記の通りです。

- First winner - NVIDIA GeForce RTX 5070 Ti
- Second winner - AMD Radeon RX 9070 XT
- Third winner - ASUS Dual GeForce RTX 4070 Super

[ルールの詳細などはこちらに記載されています](https://unity.com/legal/6-5-beta-sweepstakes)。

### Swift Xcode Project Type for iOS, iPadOS, and tvOS available in Unity 6.5

[[Apple] Swift Xcode Project Type for iOS, iPadOS, and tvOS available in Unity 6.5 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/apple-swift-xcode-project-type-for-ios-ipados-and-tvos-available-in-unity-6-5/1713471)

Unity 6.5で、Unityの出力するiOS・iPadOS・tvOSプロジェクトとしてSwiftプロジェクトを出力できる機能が追加されたことをアナウンスしています。

Unity 6000.5.0a9以降のプロジェクトで、_Project Settings > Player > iOS > Configuration > Xcode Project Type_ で **Swift** を選択することで、SwiftUIベースのXcodeプロジェクトが出力されます。
SwiftベースのXcode Projectの詳細については、[]こちらのドキュメントから詳細を確認できます](https://docs.unity3d.com/6000.5/Documentation/Manual/ios-swift-xcode-project-type.html)。

Swiftベースのプロジェクトでは、iOSプロジェクトのminimum development targetがiOS 16+に引き上げられます。

合わせて、ゲーム開発者向けとiOSプラグイン開発者向けのアナウンスも行われており、とくにプラグイン開発者向けにはSwiftへの移行を促しています。

### Path to CoreCLR, 2026: Upgrade Guide

[Path to CoreCLR, 2026: Upgrade Guide - Technical Articles - Unity Discussions](https://discussions.unity.com/t/path-to-coreclr-2026-upgrade-guide/1714279)

CoreCLRへのアップグレードガイドが公開されています。

エンジン側のCoreCLRへのアップグレードマイルストーンの紹介からUnity6.8から利用できる.NET 10 APIの動作や主要な変更点、コード再読み込みに関する仕様などについてそれぞれ解説しています。

### 🎉 Netcode for GameObjects v2.11.0 is now publicly available

[🎉 Netcode for GameObjects v2.11.0 is now publicly available - Unity Engine - Unity Discussions](https://discussions.unity.com/t/netcode-for-gameobjects-v2-11-0-is-now-publicly-available/1713978)

Netcode for GameObjects v2.11.0のリリースをアナウンスしています。

このバージョンでは、いくつかのバグフィックスや、トランスポート層に関する改善が追加されています。

[アップデートの詳細はこちらから確認できます](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects/releases/tag/v2.11.0)。

### Unity Studio – Exploring the Interface: Basic UI Elements

[Unity Studio – Exploring the Interface: Basic UI Elements - YouTube](https://www.youtube.com/watch?v=T6OoI34dIT4)

Unity Studioについて、3Dモデルの追加や調整を題材に、Unity Studioのユーザーインターフェイスの基本的な使い方を紹介しています。

### Unityの「色」の基本を学ぼう！

[Unityの「色」の基本を学ぼう！ - YouTube](https://www.youtube.com/watch?v=F-SMEYVXOvU)

Unityでの色のついて、カラーピッカーによる色の調整方法から`Color`・`Color32`型の特徴からスクリプトからの調整、`Color.HSVToRGB`メソッドの使い方などそれぞれ紹介しています。


## Articles

### R3入門 1 〜基礎編〜

[【Unityユーザー向け】 R3入門 1 〜基礎編〜 #UniRx - Qiita](https://qiita.com/toRisouP/items/eae3e71c55e8ea4fd09e)

C#のリアクティブプログラミングのためのライブラリ「[R3](https://github.com/Cysharp/R3)」について、この前身のライブラリであるUniRxとの違いからリアクティブプログラミングの基礎やR3の基本的な使い方、簡単なゲームを題材にした実践的な活用方法など、それぞれ解説しています。

### Instant Replay for Unity が WebGL / WebGPU での画面録画に対応しました

[Instant Replay for Unity が WebGL / WebGPU での画面録画に対応しました - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2026/03/24/120401)

サイバーエージェントコア技術本部の開発する「[Instant Replay](https://github.com/CyberAgentGameEntertainment/InstantReplay/blob/main/README.ja.md)」のウェブビルド対応（WebGL・WebGPUビルド）での録画対応について、Webにおけるネイティブプラグインの記述やビデオのエンコード・デコードのために利用したWebCodecs API、非同期対応、動画の書き出しなどをそれぞれ紹介しています。

### Unity 6.5でTilemapのSetTilesとSetTilesBlockにオーバーロードが増える

[Unity 6.5でTilemapのSetTilesとSetTilesBlockにオーバーロードが増える #Unity6.5 - Qiita](https://qiita.com/RyotaMurohoshi/items/411d9f6e2a9a3a92329d)

Unity 6.5で `Tilemap` クラスに追加された `SetTiles` や `SetTilesBlock` の `NativeArray` を引数に取れるオーバーロードについて紹介しています。

