---
type: "unity-weekly"
title: "Unity Weekly 244"
description: "2025/10/20週のUnity Weeklyです。モダングラフィックスAPIメモリ最適化、Unity Core Standards、UGSチュートリアル動画などを紹介しています。"
tags: ["Unity Weekly", "Unity"]
date: "2025-10-20T00:00:01"
---

## Unity Officials

### Graphics memory optimizations for DX12, Vulkan and Metal

[Graphics memory optimizations for DX12, Vulkan and Metal - Technical Articles - Unity Discussions](https://discussions.unity.com/t/graphics-memory-optimizations-for-dx12-vulkan-and-metal/1689618)

Direct X12やVulkan、MetalなどのモダンなグラフィックスAPIについて、メモリ使用量の増加がGPUパフォーマンスを低下させる主な原因であることに対して、Unityが取り組んでいる最適化や、これを解決するための一般的なテクニックについて解説しています。

このディスカッションでは、GPUのメモリアーキテクチャの概要からメモリ使用量がGPUパフォーマンスを低下させる原因の説明から、メモリ使用量を増加させる主な原因からその対策、
Direct X12向けの対応としてTight Buffer Alignmentのサポートや最適化されたスクラッチバッファ、BLAS圧縮などを用いたレイトレーシング向けのメモリ使用量の削減、
各APIのネイティブレンダーパスレンダーパスの対応などを紹介しています。

また、グラフィックス周辺のメモリ使用量を確認するためのテクニックとしてMemoryProfierによる簡易的な確認からGPUベンダーが提供するプロファイラーの利用を紹介しています。

### Now Available: Unity Hub 3.15.0-beta.1

[Now Available: Unity Hub 3.15.0-beta.1 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/now-available-unity-hub-3-15-0-beta-1/1690711)

Unity Hub 3.15-beta.1のリリースをアナウンスするディスカッションです。

このバージョンでは、要望の多かったプロジェクトの表示名やプロジェクト検索の改善などの機能が改善されています。

### Announcing Unity Core Standards (Early Access)

[Announcing Unity Core Standards (Early Access) - Unity Engine - Unity Discussions](https://discussions.unity.com/t/announcing-unity-core-standards-early-access/1690385)

Unityのパッケージシステムに対して新たに導入される予定の「Unity Core Standards」について紹介するディスカッションです。

「Unity Core Standards」によってそれぞれのパッケージに署名が適用され、Unity 6.3以降のパッケージマネジャーではその署名情報を確認できます。

この仕組みは、Unity Asset Storeのアセットパブリッシャーにも新しく[UPMによるのパブリッシング形式](https://assetstore.unity.com/ja-JP/publishing/upm-publishing)を採用することで適用されるとのことで、これによりパッケージの互換性要件や依存関係が自動で解決されたり、パッケージに対しての署名がパッケージマネジャー上で確認できるようになります。

### Unity Gaming Services tutorial series, part 1: Introduction

[Unity Gaming Services tutorial series, part 1: Introduction - Technical Articles - Unity Discussions](https://discussions.unity.com/t/unity-gaming-services-tutorial-series-part-1-introduction/1685294)

Unity Gaming Services（UGS）の新しいチュートリアル動画を紹介するディスカッションです。

「Gem Hunter Match – Cloud Edition」というサンプルゲームに対して「プレイヤーログイン」や「アプリ内課金」、「リワード広告」などをUGSを用いて実装する方法を紹介していく動画で、YouTube上で全10パートに分けて公開される予定です。

ここで利用されるサンプルゲームは、[GitHub上でも公開されています](https://github.com/Unity-Technologies/com.unity.services.samples.use-cases/tree/main/GemHunterMatch3)

### 🎉 Netcode for GameObjects v2.6.0 is now publicly available!

[🎉 Netcode for GameObjects v2.6.0 is now publicly available! - Unity Engine - Unity Discussions](https://discussions.unity.com/t/netcode-for-gameobjects-v2-6-0-is-now-publicly-available/1690694)

Netcode for GameObjectsのv2.6.0のリリースをアナウンスするディスカッションです。

主な追加機能として、`SceneManager.Scene.handle`の内部ラッパーとして`NetworkSceneManager`が実装され、`Scene.handle`をintで表現していた箇所がすべて`NetworkSceneManager`に置き換えられています。

また、`NetworkList`に現在の値と前の値が等しい場合でも強制的に更新を処理するオプショナルパラメータを持つSet関数が追加されています。

パフォーマンス改善として、`NetworkVariable`と`NetworkBehaviour`コンポーネント周辺のパフォーマンスが向上しています。

CHANGELOG全文は[こちらから確認できます](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects/releases/tag/ngo%2F2.6.0)。

## Articles

### 2D で大量の草を生やす

[Unity: 2D で大量の草を生やす](https://zenn.dev/ruccho/articles/258b59603547d0)

2D Rendererで描画されている草を大量に効率よく描画するためのテクニックを紹介しています。

Unityにいくつか存在する大量描画を行うためのAPIについてそれぞれ概要と`BatchRendererGroup`を採用した理由の紹介から、
`BatchRendererGroup`の基本的な使い方、このAPIを2D Rendererに対応するための`Sprite Lit`シェーダーの改良、2D描画の整合性を担保するための描画タイミングの制御方法についてそれぞれ解説しています。

### Playable APIを使ってAnimationとUIを連携させてみる

[【Unity】Playable APIを使ってAnimationとUIを連携させてみる – 株式会社ロジカルビート](https://logicalbeat.jp/blog/21081/)

UIコンポーネントを制御する独自の `PlayableBehaviour` を実装し、Playable APIを用いて `AnimationClip` によるアニメーションとタイミングを同期して再生する方法について紹介しています。

### フキダシUIを作ろう、それもテキストに応じて伸びるやつな

[【Unity】フキダシUIを作ろう、それもテキストに応じて伸びるやつな【ハンズオン, LayoutGroup, LayoutElement】](https://zenn.dev/gameshitai/articles/0b35fe99012c6a)

文字数が可変した時にUIのサイズが動的に変わるような吹き出しUIを実装するための`LayoutGroup`や`LayoutElement`の各種設定方法について解説しています。

### switch式によるパターンマッチの網羅性チェック

[[Unity] switch式によるパターンマッチの網羅性チェック](https://zenn.dev/nonchalant0303/articles/6a243022201555)

`*.rsp`ファイルを編集することでswitch式に対しての網羅性チェックの警告をコンパイルエラーにして、ケースを網羅しないとコンパイルが通らないような設定方法について紹介しています。