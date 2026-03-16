---
type: unity-weekly
title: Unity Weekly 264
description: >-
  2026/03/16週のUnity Weeklyです。CoreCLRアップデート、Graph Toolkit、Netcode for Entities & GameObjectsアップデート、Unityゲーム開発レポート2026などを紹介しています。
pubDatetime: 2026-03-16T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### CoreCLR, Scripting, and ECS Status Update - March 2026

[CoreCLR, Scripting, and ECS Status Update - March 2026 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/coreclr-scripting-and-ecs-status-update-march-2026/1711852)

2026/03時点での、CoreCLRやスクリプティング、ECSの状態を紹介するディスカッションです。

このディスカッションでは、6.5・6.6・6.7 LTS・6.8以降において、それぞれどのような変更が行われるかを紹介しています。

- 6.5: CoreCLR化に向けていくつかの準備が行われる
    - Editor Lifecycle API: コードを効率的に処理するための新しいライフサイクルAPIが提供される
    - EntityIDへの移行: Entityの統合に向けて、InstanceIDの使用が（段階的に）EntityIdに置き換えられる
    - [新しいヒエラルキーウインドウの提供](https://docs.unity3d.com/6000.5/Documentation/Manual/new-hierarchy.html)
- 6.6: ワークフロー効率化
    - Fast Enter Play Mode (FEPM) がデフォルトで有効に
- 6.7 LTS
    - 実験的なCoreCLRのDesktopプレイヤーの提供
    - Monoランタイムが提供される最後のUnityバージョン
- 6.8 alpha
    - CoreCLR Editor
    - 非実験的なCoreCLRのDesktopプレイヤー
    - IL2CPPの .NET 10 & C#14 サポート

### Graph Toolkit Update in Unity 6.5 alpha

[Graph Toolkit Update in Unity 6.5 alpha - Unity Engine - Unity Discussions](https://discussions.unity.com/t/graph-toolkit-update-in-unity-6-5-alpha/1712169)

Unity 6.5 alphaにおけるGraph Toolkitのアップデートを紹介するディスカッションです。

このバージョンでは、コードからグラフを構築するAPIやノードや型情報の見た目をカスタマイズする機能、コレクション型のサポート、QoL向上のための改善などが含まれています。

また、Graph Toolkitのパッケージが6.5 alphaから、エンジン側のパッケージとして取り込まれているようです。

### 🎉 Netcode for Entities v1.13.0 is now publicly available

[🎉 Netcode for Entities v1.13.0 is now publicly available - Unity Engine - Unity Discussions](https://discussions.unity.com/t/netcode-for-entities-v1-13-0-is-now-publicly-available/1712461)

Netcode for Entities v1.13.0のリリース内容を紹介するディスカッションです。

このバージョンでは、予測と補完のバグの修正と、実験的なGameObject側との機能の統合についての対応などが含まれています。

### 🎉 Netcode for GameObjects v2.10.0 is now publicly available

[🎉 Netcode for GameObjects v2.10.0 is now publicly available - Unity Engine - Unity Discussions](https://discussions.unity.com/t/netcode-for-gameobjects-v2-10-0-is-now-publicly-available/1712120)

Netcode for GameObjects v2.10.0のリリース内容を紹介するディスカッションです。

このバージョンでは、メトリクスのための公開APIや、接続や同期の安定性や信頼性を向上させるためのバグ修正などが含まれています。

### LevelPlay SDK 9.3.0: Boost revenue and improve user experience with transparent rewards

[LevelPlay SDK 9.3.0: Boost revenue and improve user experience with transparent rewards - Unity Services - Unity Discussions](https://discussions.unity.com/t/levelplay-sdk-9-3-0-boost-revenue-and-improve-user-experience-with-transparent-rewards/1712270)

LevelPlay SDK 9.3.0のリリースをアナウンスするディスカッションです。

このバージョンでは、広告回復機能の改善や、Get Reward APIという広告表示前にプレイヤーへの報酬情報を正確に取得できるAPIの実装、Voodoo Bidderが広告ネットワークとして利用できるようになるなどの対応が行われています。

### Unity ゲーム開発レポート 2026: 開発者の知見とトレンド

[Unity ゲーム開発レポート 2026: 開発者の知見とトレンド | Unity](https://unity.com/ja/resources/gaming-report)

Unity公式による、ゲーム開発者300人を対象にした調査および、Unityエンジンおよびエコシステムに携わった500万人近い開発者が保有する独自のデータに基づいた、ゲームトレンドレポートが公開されています。

### 【U/Day Tokyo 2025】講演動画公開中

[【U/Day Tokyo 2025】講演動画公開中](https://unity3d.jp/news/u-day-tokyo-2025-videos-published/)

U/Day Tokyo 2025の全講演が、YouTubeチャンネルやUnity Learning Materialsにて公開されました。

- [U/Day Tokyo 2025 プレイリスト - YouTube](https://www.youtube.com/playlist?list=PLFw9ryLdiLzY4kgEfk7RpNl84DCNZ2Y93)
- [U/Day Tokyo 2025 - Unity Learning Materials](https://learning.unity3d.jp/event/u-day-tokyo-2025/)

### wotakuro/UnityRuntimeCompressedTexturePacker

[wotakuro/UnityRuntimeCompressedTexturePacker: A Unity runtime utility that dynamically packs compressed textures to atlases to optimize VRAM and draw calls.(currently .astc only support)](https://github.com/wotakuro/UnityRuntimeCompressedTexturePacker)

ASTCテクスチャをASTCのままランタイム上で結合するユーティリティ。


## Events

### Unity 1週間ゲームジャム

[Unity 1週間ゲームジャム | フリーゲーム投稿サイト unityroom](https://unityroom.com/unity1weeks)

Unity 1週間ゲームジャム「うら」というお題で3/15 ~ 3/22にかけて開催中です。


## Articles

### Unityアップデートにより発生する差分を先に全部出すスクリプト

[Unityアップデートにより発生する差分を先に全部出すスクリプト - きゅぶろぐ](https://blog.kyubuns.dev/entry/2026/03/13/140029)

Unity上のアセットを明示的に保存し直すことで、Unityアップデート時に発生する差分を列挙するスクリプトの実装を紹介しています。

### 小さな手間と事故を減らすAttributeの使い方

[【Unity】小さな手間と事故を減らすAttributeの使い方 – 株式会社ロジカルビート](https://logicalbeat.co.jp/blog/24635/)

Unityが標準で提供する、インスペクター上での見た目やバリデーションをなどを行う属性をいくつか紹介しています。

### GraphToolkitでユニバーサルトランジション用のルール画像を作成してみる

[GraphToolkitでユニバーサルトランジション用のルール画像を作成してみる](https://zenn.dev/village_nago/articles/5979e7196c07be)

Graph Toolkitを用いて、画面遷移用のテクスチャ画像を生成するツールの制作方法について紹介しています。

### Claude CodeでUnity開発を並列化する方法【git worktree×複数セッション】

[Claude CodeでUnity開発を並列化する方法【git worktree×複数セッション】](https://zenn.dev/ohbashunsuke/articles/20260310_unity-parallel-dev-with-claude-code#%E4%B8%A6%E5%88%97%E9%96%8B%E7%99%BA%E3%81%AE%E5%85%A8%E4%BD%93%E5%83%8F)

Coding Agentを用いて、同じUnityプロジェクトを並行して開発する際のworktreeの活用や、並行開発の際に注意したいUnity固有の観点などを紹介しています。

### 【Unity】「なんとなく」を卒業する。4種類のブラーシェーダーの処理を紐解いてみた。

[【Unity】「なんとなく」を卒業する。4種類のブラーシェーダーの処理を紐解いてみた。](https://zenn.dev/zero_0r0/articles/c26827e7aa5e81)

ブラーの原理からその種類、それぞれのブラーの実装方法や軽量化の工夫などを紹介しています。

### MainToolbarにRiderを呼び出すボタンを追加する 

[MainToolbarにRiderを呼び出すボタンを追加する #Unity - Qiita](https://qiita.com/ScreenPocket/items/47cdba5256fbc2806b2f)

Unity 6.3のMainToolbarを用いて、Riderを起動するボタンを追加する実装を紹介しています。

