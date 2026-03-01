---
type: unity-weekly
title: Unity Weekly 262
description: >-
  2026/03/02週のUnity Weeklyです。Unity Version Control・Build Automation価格改定、Unity Vector MMP Checklist、U/Day Tokyo 2025一部資料公開などを紹介しています。
pubDatetime: 2026-03-02T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---


## Unity Officials

### Unity Version ControlおよびBuild Automationの従量課金制の価格改定に関するご案内

[Unity Version ControlおよびBuild Automationの従量課金制の価格改定に関するご案内](https://unity3d.jp/news/uvcs-uba-pricing-changes/)

2026/03/01からUnity Version Control（UVCS）およびUnity Build Automation（UBA）の従量課金制料金体系の価格変更が実施されることをアナウンスしています。
以下に変更内容を抜粋します。

- パブリッククラウド版におけるUnity Version Controlのライセンスに対して、ユーザーシートごとの課金の廃止
- 標準ストレージ料金の引き下げと、エグレスのスタンドアロン型メータとしての導入
- 無料プランのストレージ容量の拡大：
    - 組織あたり基本ストレージ 25GB/月（従来5GBからの変更）
     無料エグレス 100GB/月
- UBAのUnity Editor同時接続数 1から2に増加
- 含まれる毎月のUBAコンピューティング分数：Windows 200分（Micro）、Mac 100分（Standard）、Linux 100分（Micro）
- 請求と名称の明確化：ストレージとデータ転送量はGB単位で計測（月間平均ストレージ）、Unity Editor同時接続数は定額制、分単位の料金体系を標準化

詳細については[こちらのFAQ](https://unity.com/ja/products/pricing-updates#unity-devops)にて確認できます。
また、今後提供予定の機能についても一部言及しています。

### U/Day Tokyo 2025講演資料の一部公開

- [【英語講演・日本語同時通訳】Unity エンジンロードマップ | U/Day Tokyo 2025 | Unity Learning Materials](https://learning.unity3d.jp/10932/)
- [Unity 6.3グラフィックス機能の活用 | U/Day Tokyo 2025 | Unity Learning Materials](https://learning.unity3d.jp/10948/)
- [ShaderGraph最新機能で広がる表現の世界 | U/Day Tokyo 2025 | Unity Learning Materials](https://learning.unity3d.jp/10950/)
- [ドット絵もボーンもお任せを！Unity 2Dアニメーションワークフロー × Unity 6.3特集 | U/Day Tokyo 2025 | Unity Learning Materials](https://learning.unity3d.jp/10952/)

2025/12/11に開催された[U/Day Tokyo 2025](https://unity3d.jp/u-day-tokyo-2025/)の一部セッションの講演動画が公開されています。

### Better Precision, Smarter Spend: The MMP Checklist

[Better Precision, Smarter Spend: The MMP Checklist - Unity Services - Unity Discussions](https://discussions.unity.com/t/better-precision-smarter-spend-the-mmp-checklist/1709576)

Unity Vectorで収益をあげるための重要なポイントを５つ紹介しています。

### Unity Tutorial: Prefabs, Prefab Variants, and Nested Prefabs

[Unity Tutorial: Prefabs, Prefab Variants, and Nested Prefabs - YouTube](https://www.youtube.com/watch?v=JiJUo3rRwEA)

Unity公式のチュートリアル動画で、PrefabやPrefab Variants、Nested Prefabsなどについて、その概念から具体的な利用方法について紹介しています。


## Articles

### Unity Graph Toolkit(experimental版)を使ってみました

[Unity Graph Toolkit(experimental版)を使ってみました](https://zenn.dev/happy_elements/articles/ba4a2b2c60123b)

Graph Toolkitを自社のビヘイビアツリーシステムのグラフツールとして採用した所感について紹介しています。

### MCP Server Extension for Unity v1.0.0 リリース

[MCP Server Extension for Unity v1.0.0 リリース - やらなイカ？](https://www.nowsprinting.com/entry/2026/02/27/080000)

このブログの著者の開発するUnityEditor向けの「[MCP Server Extension for Unity](https://plugins.jetbrains.com/plugin/30357-mcp-server-extension-for-unity)」について、この機能の概要や利用方法、アーキテクチャについてそれぞれ紹介しています。

### Unity 6.4で追加予定のTilemap.GetTilesのwithinBounds引数の説明と挙動を調べる

[Unity 6.4で追加予定のTilemap.GetTilesのwithinBounds引数の説明と挙動を調べる #Unity6.4 - Qiita](https://qiita.com/RyotaMurohoshi/items/15d4229337e867abd15e)

Unity 6.4で追加予定のTilemap.GetTilesのwithinBoundsについての説明と、このAPIの引数とその挙動が一致しないことについて指摘しています。

