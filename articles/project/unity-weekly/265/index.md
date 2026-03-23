---
type: unity-weekly
title: Unity Weekly 265
description: >-
  2026/03/23週のUnity Weeklyです。Unity6.4リリース、Cinemachine2の今後のサポート、Unity Ads SDK 4.17.0、Unity Studioなどを紹介しています。
pubDatetime: 2026-03-23T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity 6.4 is now available

[Unity 6.4 is now available - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-6-4-is-now-available/1713245)

Unity 6.4の正式版のリリースをアナウンスするディスカッションです。

このディスカッションでは、このバージョンでの主要なアップデートを紹介しています。

- ECS is now a Core packages
    - EntitiesやMathematics、Entities GraphicsといったECS関連のパッケージがコアパッケージとしてエディターに内包
    - CoreCLR、シリアライズの近代化、Entityの完全統合といったエンジンアップデートの一環として実施される
- Project Auditor is built-in by default
    - プロジェクトの静的解析パッケージ「Project Auditor」がエディターに内包
- Multiplayer Matchmaker
    - Multiplayerに関する機能が4つ追加
    - ダッシュボードからのMatchmakerへのログアクセス、プールとフィルターのCEL式にOR演算のサポート、Matchmakerの設定履歴管理、Matchmakerのサードパーティホスティングのサポート
- Unity Core Standards: New Prompts for Unsigned Packages
    - パッケージのインストール時に、Unity Core Standardsに基づいたパッケージ情報を表示するように
- Platforms - Adaptive Performance & DirectStorage
    - [Custom Scalerの設定画面が一新され](https://docs.unity3d.com/6000.4/Documentation/Manual/adaptive-performance/provider-settings-reference.html)、ScriptableObjectベースのCustom Scalerの設定をスケールウインドウで設定できるように
    - 下記のコンソールプラットフォームに対して、[Basic Provider](https://docs.unity3d.com/6000.4/Documentation/Manual/adaptive-performance/basic-provider.html)がサポートされた（Basic Providerは `FrameTimingManager` APIベースのApaptive Performance実装）
        - PlayStation®4
        - PlayStation®5
        - Xbox One
        - Xbox Series X|S
    - [TextureやMesh、ECS/DOTSデータに対してDirectStorageをサポート](https://docs.unity3d.com/6000.4/Documentation/Manual/windows-directstorage.html)

### End of support of Cinemachine 2, from Unity 6.5 and beyond

[End of support of Cinemachine 2, from Unity 6.5 and beyond - Unity Engine - Unity Discussions](https://discussions.unity.com/t/end-of-support-of-cinemachine-2-from-unity-6-5-and-beyond/1712821)

Cinemachine 2がUnity 6.5以降にサポートを終了することアナウンスしています。

このバージョンは引き続き[com.unity.cinemachineレポジトリ](https://github.com/Unity-Technologies/com.unity.cinemachine)経由で利用可能ですが、Unity6.5以降での動作は保証されず、またバグ修正も行われないとのことです。

ただし、Unity 6.3 LTSのサポート期間中はこのパッケージもサポートされる予定とのことです。

Cinemachine2から3へのアップグレードは、「[Upgrade a Project from Cinemachine 2.x](https://docs.unity3d.com/Packages/com.unity.cinemachine@3.1/manual/CinemachineUpgradeFrom2.html)」にて具体的な以降手順が紹介されています。

### 🛠 Performance Upgrade: Unity Ads SDK 4.17.0 is Live

[🛠 Performance Upgrade: Unity Ads SDK 4.17.0 is Live - Unity Services - Unity Discussions](https://discussions.unity.com/t/performance-upgrade-unity-ads-sdk-4-17-0-is-live/1713354)

Unity Ads SDK 4.17.0がリリースされたことをアナウンスしています。

このバージョンでは高速化とそれに伴う広告のパフォーマンス向上がアップデートに含まれています。

- 初期化時間が最大5倍高速になり、プレイヤーが準備できた時点で広告が表示可能になる
    - 初期ベンチマークで平均純利益が14%、インプレッション数が22%程度の増加が示された
    - 広告の再生完了率が21%程度向上し、報酬の提供も向上

### ノーコードで産業向け3Dアプリケーション制作を可能にするUnity Studio提供開始

[ノーコードで産業向け3Dアプリケーション制作を可能にするUnity Studio提供開始](https://unity3d.jp/news/unity-studio-ga/)

インタラクティブな3Dアプリケーションを作成・共有できるウェブベースのエディター「Unity Studio」の提供開始についてアナウンスしています。

### GhostFields in GameObject Netcode - DevLog Entry 3

[GhostFields in GameObject Netcode - DevLog Entry 3 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/ghostfields-in-gameobject-netcode-devlog-entry-3/1713506)

Netcode for Entitiesに新しく実装された、フィールドのレプリケーションを行うための `GhostField` 属性の紹介から、この実装が内部的にECSコンポーネントを使用しているため、GameObjectとの連携を行いやすくするために用意された `GhostBehaviour` や `GhostField<T>`、`GhostComponentRef` についてや、これらの実装のパフォーマンスやマルチスレッドでの動作などを紹介しています。

### Survey: Help Shape Unity’s Roadmap for the Web Platform

[Survey: Help Shape Unity’s Roadmap for the Web Platform - Unity Engine - Unity Discussions](https://discussions.unity.com/t/survey-help-shape-unity-s-roadmap-for-the-web-platform/1712703)

[GDCでのプロダクトロードマップの紹介](https://www.youtube.com/watch?v=BtObK0arD_M)に伴って、[Webプラットフォーム内での開発優先度の決定に役立てるためのアンケートへの協力を募集しています](https://forms.gle/cyN9gAYJRFpfAu5Q8)。

## Articles

### FBXのアニメーションをUnityランタイムで読み込んでキャラクターに適用する

[FBXのアニメーションをUnityランタイムで読み込んでキャラクターに適用する](http://zenn.dev/reality_tech/articles/2fec8f0752e5b9)

FBXファイルのランタイムロードに「[Lightweight FBX Importer](https://assetstore.unity.com/packages/tools/modeling/lightweight-fbx-importer-318963)」を用いつつ、ランタイム上で読み込んだGenericアニメーションをHumanoidアニメーションに変換し、そのアニメーションをランタイム上で適用する方法について紹介しています。

### ECS の性能を引き出すデータ設計の勘所

[Unity: ECS の性能を引き出すデータ設計の勘所](https://zenn.dev/ruccho/articles/unity-ecs-data-optimization)

ECS（Entity Component System）がなぜ高速なのかや適用が有効な箇所の勘所、ECSをより高速に実行するためのChunk内のデータ密度、並列化やJob依存関係の解消、マネージドとの連携などそれぞれ解説しています。

### Unity 6.4から、Destroyされた孫オブジェクト以下でも直後にOnDisableが呼ばれるようになった

[Unity 6.4から、Destroyされた孫オブジェクト以下でも直後にOnDisableが呼ばれるようになった #Unity6.4 - Qiita](https://qiita.com/RyotaMurohoshi/items/ca8081ed68a2fa3e639f)

Unity 6.4で入った、`UnityEngine.Object.Destroy` を呼び出した際の、孫オブジェクト以下の `MonoBehaviour.OnDisable` の呼び出しタイミングの変更について紹介しています。

### Unity6.0からPixel6シリーズでVulkanが使われなくなった

[Unity6.0からPixel6シリーズでVulkanが使われなくなった - きゅぶろぐ](https://blog.kyubuns.dev/entry/2026/03/19/134335)

Unity 6.0からはいった、Pixel 6におけるグラフィックAPIの選択に関する挙動の変更を紹介しています。

### 「なんとなく」を卒業する。Bloom（ブルーム）の基本処理を紐解いてみる。

- [【Unity】「なんとなく」を卒業する。Bloom（ブルーム）の基本処理を紐解いてみる。](https://zenn.dev/zero_0r0/articles/b8460bed827b60)
- [【Unity】「なんとなく」を卒業する。Blur, Bloom応用編](https://zenn.dev/zero_0r0/articles/e235a8aa535800)

Bloomの概念から基本的な計算手順、またBlurの計算をより軽量に行うための「Dual Kawase Blur」やBloomを指定したオブジェクトのみに適用する方法などをそれぞれ紹介しています。

### 10年前のiGPUで動く！海を丸ごと表現するAPIC-SWE-FFTハイブリッド流体

- [【Unity/Compute Shader】10年前のiGPUで動く！海を丸ごと表現するAPIC-SWE-FFTハイブリッド流体　前編](https://zenn.dev/quickbrush/articles/0b5c77222bf078)
- [【Unity/ Compute Shader】10年前のiGPUで動く！海を丸ごと表現するAPIC-SWE-FFTハイブリッド流体　後編](https://zenn.dev/quickbrush/articles/fafedf2726bf47)

プレイヤー付近ではAPICとSWEを用いて海の飛沫・巻き込みや波のインタラクションを表現しつつ、プレイヤーより遠い海の波をFFT（より遠いほど低い周波数成分のみの計算でLODのような仕組みを実現）で計算することで、古いiGPUでも動くようなインタラクティブな海を表現する方法を紹介しています。

