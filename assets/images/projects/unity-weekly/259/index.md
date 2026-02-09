---
type: unity-weekly
title: Unity Weekly 259
description: >-
  2026/02/09週のUnity Weeklyです。VFX Grass Livestream、Behaviour Package 1.0.15、Netcode for Entities v1.12.0、グラフィックスウェビナー、UI Toolkitチュートリアル動画などを紹介しています。
pubDatetime: 2026-02-09T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### VFX Grass with VFX Graph

- [VFX Grass with VFX Graph | Unity Livestream - Unity Engine - Unity Discussions](https://discussions.unity.com/t/vfx-grass-with-vfx-graph-unity-livestream/1706554)
- [VFX Grass with VFX Graph in 10 Minutes/1 Hour/1 Day | Clocked - YouTube](https://www.youtube.com/watch?v=4nrv6RK2KNk)

VFX Graphを用いてVFXによる草を作成する方法を紹介するライブ配信をUnityが公開しています。

VFX Graphによる草の制作過程を、10分/1時間/1日という様々な制限時間の中で作成し、比較・解説しています。

実際のプロジェクトは [OrsonFavrel/VFXGraph-ClockedAndLoaded](https://github.com/OrsonFavrel/VFXGraph-ClockedAndLoaded) にて公開されています。

### Behavior Package 1.0.15 Released!

[Behavior Package 1.0.15 Released! - Unity Engine - Unity Discussions](https://discussions.unity.com/t/behavior-package-1-0-15-released/1707046)

Behaviour Packageの 1.0.15がリリースがアナウンスされています。

このバージョンでは、下記のような機能追加および改善が行われています。

- ObserverAbortのサポート: 監視対象の状態の変更時に実行中のブランチを中止することで、応答性や予測性に優れたビヘイビアを構築できる
- QoLの向上:
    - エージェントインスペクターでのブラックボードのオーバーライド
    - プレイモードでのデバッグターゲットの自動接続
    - `ConditionalGuardAction` で切り捨てオプションの切り替え表示を追加
    - エディターの再生モード中、ノードへのブレークポイントは、IDEデバッガーに接続されていない場合に実行を一時停止するようになった
- リグレッションの修正
    - 1.0.14: ビヘイビアグラフの条件分岐またはスイッチ出力に接続されている場合にノード接続を削除できない問題を修正（[Unity Issue Tracker - Node connections cannot be removed when connected to Conditional Branch or Switch outputs in Behavior Graph](https://issuetracker.unity3d.com/issues/node-connections-cannot-be-removed-when-connected-to-conditional-branch-or-switch-outputs-in-behavior-graph)）
    - 1.0.13: 列挙型のブラックボード変数を共有としてマークするときに発生する NullReferenceException を修正

このバージョンのCHANGELOGは[こちらから確認できます](https://docs.unity3d.com/Packages/com.unity.behavior@1.0/changelog/CHANGELOG.html#1015---2026-02-02)。

### Netcode for Entities v1.12.0 is now publicly available

[Netcode for Entities v1.12.0 is now publicly available - Unity Engine - Unity Discussions](https://discussions.unity.com/t/netcode-for-entities-v1-12-0-is-now-publicly-available/1707385)

Netcode for Entitiesのv1.12.0のリリースがアナウンスされています。

このバージョンでは、Network Profiler Toolの追加や、`GhostAuthoringComponent` や `GhostField` に対しての動作についての破壊的な変更が行われています。

Network Profiler Toolについては[こちらにドキュメントが公開されています](https://docs.unity3d.com/Packages/com.unity.netcode@1.12/manual/testing/network-profiler.html)。

### visionOS Release Notes 3.0

[visionOS Release Notes 3.0 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/visionos-release-notes-3-0/1707297)

PolySpatial 3.0がリリースがアナウンスされています。

このバージョンでは、主にUnity 6.3上でのvisionOS 26以降の対応が行われています。

### Made with Unity ゲーム：2026年1月のレビュー

[Made with Unity ゲーム：2026年1月のレビュー | Unity](https://unity.com/ja/blog/games/games-made-with-unity-january-2026-releases)

2026年1月にリリースされたタイトルのうち、Unityで作られたゲームを紹介しています。

### Free Webinar – Smooth Mobile Games: Optimizing Graphics for Peak Performance

[Free Webinar – Smooth Mobile Games: Optimizing Graphics for Peak Performance - Unity Engine - Unity Discussions](https://discussions.unity.com/t/free-webinar-smooth-mobile-games-optimizing-graphics-for-peak-performance/1707604)

Unity 6向けのモバイルゲームのグラフィックス最適化についてのウェビナーが、2026/02/13 2:00（JST）で開催予定です。

グラフィックスの開発経験がある中級者から上級者を対象としたウェビナーで、下記のような内容となっています。

- PC/コンソールとモバイルのグラフィックレンダリングの高レベルの違い
- パフォーマンスを低下させる一般的なグラフィックのミス
- 品質を犠牲にせずにビジュアルを最適化するためのベストプラクティス
- モバイルプラットフォーム間でGPUプロファイリングツールを使用して問題を診断する方法
- ローエンドデバイスのバッテリー消費とサーマルスロットリングを軽減するテクニック

ウェビナーへの登録は[こちらから行うことができます](https://unity3d.zoom.us/webinar/register/1017700306608/WN_ryz7HytrTK6CbH-xRMVfjw#/registration)。

### UI Toolkit Tutorial: Custom Shaders for UI Toolkit (6.3)

[UI Toolkit Tutorial: Custom Shaders for UI Toolkit (6.3) - YouTube](https://www.youtube.com/watch?v=xAOBBW9hsjA)

Unity 6.3のUI Toolkit使えるようになったCustom Shaderについて、ヘルスバーUIを例にカスタムシェーダーの適用方法やスクリプトを用いたランタイムでの制御について紹介しています。

### UI Toolkit Tutorial: World Space Render Mode

[UI Toolkit Tutorial: World Space Render Mode - YouTube](https://www.youtube.com/watch?v=GgO2LF_ZMvM)

UI Toolkitの「ワールドスペース」モードについて、この概要から設定方法、基本的な使い方を紹介しています。

### UI Toolkit Series: SVG Support in Unity 6.3 LTS

[UI Toolkit Series: SVG Support in Unity 6.3 LTS - YouTube](https://www.youtube.com/watch?v=cDN-VW3McfQ)

Unity 6.3のUI ToolkitのSVGサポートについて、ビットマップとの違いからインポートと設定、SVGの実用性についてそれぞれ紹介しています。

### UI Toolkit Series: UI Toolkit Events

[UI Toolkit Series: UI Toolkit Events - YouTube](https://www.youtube.com/watch?v=IBdj-OSEM3E)

UI Toolkitのイベントシステムについて、このイベントシステムの概要からイベントの種類、イベントをハンドリングする方法やイベントの伝播、イベントデバッガーによるデバッグ方法などそれぞれ紹介しています。


## Articles

### UnityエディタやUnity Hubに対するディープリンク(Deeplinking)

[UnityエディタやUnity Hubに対するディープリンク(Deeplinking)【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Unity_Hub_Deeplinking)

Unity Hub 3.15およびUnity6.3以降から利用できる、UnityエディターやHubに対して何かしらの操作を行うためのディープリンク機能について、この機能の概要から、リンク経由での各種Unityの操作について紹介しています。

### Test Helper v1.4.0 : FLIPによるTexture2D比較子

[Test Helper v1.4.0 : FLIPによるTexture2D比較子 - やらなイカ？](https://www.nowsprinting.com/entry/2026/02/06/080000)

ブログの著者が開発する「[Test helper library for Unity Test Framework](https://github.com/nowsprinting/test-helper)」のv1.4.0で追加された、NVIDIAが提供する画像比較アルゴリズムFLIP によるテクスチャ差分比較ができる `FlipTexture2dEqualityComparer` について紹介しています。

### 遠回りする経路の球面線形補間（Slerp）を実装する

[【Unity】遠回りする経路の球面線形補間（Slerp）を実装する | ねこじゃらシティ](https://nekojara.city/unity-long-slerp)

球面線形補完において、遠回りな経路を補完するためのUnityの実装の紹介と、この実装の正しさを計算式の導出により示しています。

### Platform Toolkitのセーブシステムについて

[Platform Toolkitのセーブシステムについて | Yucchiy's Note](https://blog.yucchiy.com/2026/02/platform-toolkit-save-system)

Platform Toolkitのセーブシステムの仕組みに焦点を当てて、この概要から基本的な操作方法、DataStore APIなどについて説明しています。

### Input Systemによる入力管理

[【Unity】Input Systemによる入力管理 – 株式会社ロジカルビート](https://logicalbeat.co.jp/blog/24360/)

Input Systemのパッケージや基本的な要素の紹介から基本的な使い方、タッチ操作の検知方法についてそれぞれ説明しています。

### スプライトアトラスを解析して無駄や問題を発見する公式パッケージ Sprite Atlas Analyzer

[スプライトアトラスを解析して無駄や問題を発見する公式パッケージ Sprite Atlas Analyzer 【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/SpriteAtlasAnalyzer_)

Unity 6.3から利用できる、Sprite Atlasの解析を行うパッケージ「Sprite Atlas Analyzer」について、この概要から基本的な使い方を紹介しています。
