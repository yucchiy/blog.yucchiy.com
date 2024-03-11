---
type: "unity-weekly"
title: "Unity Weekly 163"
description: "2024/03/11週のUnity Weeklyですなどについて取り上げています。Unity Muse、マツダパートナーシップ契約、GDC2024、CAGC2024などについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-03-11T00:00:01"

---

## Unity Officials

### AI Model Improvements for Higher-quality Muse Textures

[AI Model Improvements for Higher-quality Muse Textures | Unity Blog](https://blog.unity.com/engine-platform/ai-model-improvements-higher-quality-muse-textures)

Unity Museのアップデートされ、既存のテクスチャモデル「Photo-Real-Unity-Texture-1」の改良版「Photo-Real-Unity-Texture-2」がリリースされたことを発表しています。

「Photo-Real-Unity-Texture-2」ではゲームで一般的な木材やレンガ、コンクリート、金属などの多くのマテリアルの品質向上やプロンプトベースの色の一貫性の向上、ハイトマップがデフォルトで16bitで生成されるなどの改良が行われています。

記事では、改良されたテクスチャのサンプル画像をあわせて公開しています。

### Unity、マツダとパートナーシップ契約を締結

[Unity、マツダとパートナーシップ契約を締結 | ユニティ・テクノロジーズ・ジャパン株式会社](https://unity3d.jp/news/unitywithmazda/)

Unityとマツダが、コックピットHMI（HMI: Human Machine Interface, 自動車の運転席周りの空間におけるインターフェース）におけるGUI（Graphical User Interface）の開発共創を支えるパートナーシップ契約を締結したことが発表されました。

### 近日予定されている為替レート変更に伴うUnity 有償プランの新価格設定について

[近日予定されている為替レート変更に伴うUnity 有償プランの新価格設定について | ユニティ・テクノロジーズ・ジャパン株式会社](https://unity3d.jp/news/price-revision/)

為替レートの変更に伴ってUnityの有償プランの新価格の更新が発表されています。

### Official - Unity x GDC 2024

[Official - Unity x GDC 2024 - Unity Forum](https://forum.unity.com/threads/unity-x-gdc-2024.1554620/)

3/18から開催されるGDC 2024におけるUnityの出展についてのアナウンスです。

詳細は[こちらのリンク](https://unity.com/ja/events/gdc)にて、GDC期間中のUnityのセッションは[こちらのページ](https://unityatgdc2024.splashthat.com/)より確認できます。

## Events

### CAGC 2024

[CAGC 2024 公式サイト](https://cagc.cyberagent.co.jp/2024/)

CyberAgentのゲーム開発者向けカンファレンス「CAGC 2024」の発表のアーカイブが公開されています。

## Articles

### Adobe's USD Plugins Are Officially Open-Source Now

[Adobe's USD Plugins Are Officially Open-Source Now](https://80.lv/articles/adobe-s-usd-plugins-are-officially-open-source-now/)

Adobeが、USD（Universal Scene Description）とFBXやglTFなど各種フォーマットの相互変換可能なプラグインをオープンソースとして公開したことを紹介しています。

### Unity PolySpatial 1.1.4を使ってC#とSwiftUIを連携させる

[Unity PolySpatial 1.1.4を使ってC#とSwiftUIを連携させる](https://zenn.dev/meson/articles/polyspatial-swiftui)

Unity PolySpatial 1.1.4から利用できるSwiftUI連携について、SwiftUIによるシーンとビューの実装からC#コードとの連携方法を解説しています。

### Burstコードからマネージドコードを呼ぶ

[【Unity】Burstコードからマネージドコードを呼ぶ](https://zenn.dev/ruccho/articles/d935da18222bed)

Unity Loggingパッケージのコードを参考にして、BurstコードからC#のマネージドコードを呼び出す方法を紹介しています。

### UnityのRenderGraphSystem(URP17)に対応した一番シンプルなCustom RPを作ってみる

[UnityのRenderGraphSystem(URP17)に対応した一番シンプルなCustom RPを作ってみる その2](https://zenn.dev/sansyoku_gyokai/articles/8be79741b25fb1)

「[UnityのRenderGraphSystem(URP17)に対応した一番シンプルなCustom RPを作ってみる](https://zenn.dev/sansyoku_gyokai/articles/bdce53aa0f2f5a)」の続きで、URP上で、LayerMaskとShaderTagによってオブジェクト描画をフィルタリングする `RenderPass` を、従来の実装とURP17のRender Graph Systemを利用した実装を比較しつつ紹介しています。

### UnityのManaged Code Strippingで消されたコードを知る

[UnityのManaged Code Strippingで消されたコードを知る](https://zenn.dev/waz/articles/2f9c62c2742622)

ビルド後にManaged Code Strippingによって実際に削除されたクラスの一覧をレポートするための設定について紹介しています。

### Using 3D gameobject prefabs with Unity Tilemap + NavMesh Surface

[Using 3D gameobject prefabs with Unity Tilemap + NavMesh Surface « Unity Coding – Unity3D](https://unitycoder.com/blog/2024/03/09/using-3d-gameobjects-with-unity-tilemap-navmesh-surface/)

NavMesh Surfaceコンポーネントを用いて、タイルマップ上でNavMeshAgentが移動できるようにするセットアップを紹介しています。

### 複数のGameObjectグループ化して扱えるパッケージ

[複数のGameObjectグループ化して扱えるパッケージ SelectionGroups【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/SelectionGroups)

Unity公式のGameObjectをグループ化する [Selection Groups](https://docs.unity3d.com/ja/Packages/com.unity.selection-groups@0.9/manual/index.html) パッケージについて紹介しています。

### IFilterBuildAssemblies でビルドから .dll を除外する

[【Unity】IFilterBuildAssemblies でビルドから .dll を除外する - コガネブログ](https://baba-s.hatenablog.com/entry/2024/03/06/080000)

`IFilterBuildAssembiles` を用いて、アプリビルド時に特定のdllをアプリに含めない方法を紹介しています。

### 周回するParticle

[周回するParticle #Unity - Qiita](https://qiita.com/_Nats_/items/90024e3f4192404d9db8)

UnityのParticle Systemで円周上を周回するパーティクルを作成するためのParticle Systemの各種パラメーターについて説明しています。


## Repositories

### MemorySnapshotAnalyzer

[facebookexperimental/MemorySnapshotAnalyzer: Analysis tooling for memory snapshots of managed code runtimes, specifically, Unity Memory Snapshots.](https://github.com/facebookexperimental/MemorySnapshotAnalyzer)

`MemoryProfiler.TakeSnapshot` から得られるスナップショットを解析するツール。

### Raymarched Fog Volumes for Unity's Universal RP

[sinnwrig/URP-Fog-Volumes: Implementation of Raymarched Volumetric Fog in Unity's Universal Render Pipeline](https://github.com/sinnwrig/URP-Fog-Volumes?)

URP向けのsingle-bounce raymarchied volumetric fog実装。
