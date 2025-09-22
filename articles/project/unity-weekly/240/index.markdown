---
type: "unity-weekly"
title: "Unity Weekly 240"
description: "2025/09/22週のUnity Weeklyです。Unity 6.3の新機能紹介やUnity 6.4における破壊的変更、サバイバルキッズの制作ノウハウ共有、Unity 6活用ウェビナーなどを紹介しています。"
tags: ["Unity Weekly", "Unity"]
date: "2025-09-22T00:00:01"
---

## Unity Officials

### Low-level 2D Physics in Unity 6.3 Beta

[Low-level 2D Physics in Unity 6.3 Beta - Unity Engine - Unity Discussions](https://discussions.unity.com/t/low-level-2d-physics-in-unity-6-3-beta/1683247)

Unity 6.3で2D Physicsで使っているBox2Dがv3にアップデートされ、合わせて開発者が利用できるより強力なLowLevel APIが提供されたことをアナウンスしています。

このAPIの大部分はメインスレッドから切り離されたC#ジョブで呼び出すことができ、合わせてゲームオブジェクトと連携するためのサポートが用意されています。

この実装に伴って[PhysicsExamples2Dレポジトリ](https://github.com/Unity-Technologies/PhysicsExamples2D)は 「HighLevel」（既存実装）と「LowLevel」（新しいAPIでの実装）に分割され、
さらに新しいAPIの使い方を紹介するサンプル集をホストする「Primer」プロジェクトも[こちらに用意されています](https://github.com/Unity-Technologies/PhysicsExamples2D/tree/master/LowLevel/Projects/Primer)。

また、[LowLevel Extras](https://github.com/Unity-Technologies/PhysicsExamples2D/tree/master/LowLevel/Packages/com.unity.2d.physics.lowlevelextras) という新しい物理演算機能を使用する際の補助ライブラリも合わせて用意されました。

APIは `UnityEngine.LowLevelPhysics2D` という名前空間の下に提供され、ドキュメントは [こちらに公開されています](https://docs.unity3d.com/6000.3/Documentation/ScriptReference/LowLevelPhysics2D.PhysicsWorld.html)。

今後の対応として、既存のコンポーネントを、LowLevel APIによって実装する予定があるとのことです。

### Terrain Shaders in Shader Graph - New in Unity 6.3

[Terrain Shaders in Shader Graph - New in Unity 6.3 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/terrain-shaders-in-shader-graph-new-in-unity-6-3/1683627)

Unity 6.3以降にTerrain ShaderをShader Graphによって記述できる機能が追加されたことがアナウンスされています。

このディスカッションでは、この機能の概要から基本的な使い方、サンプルで用意されたシェーダーについてそれぞれ説明しています。

### 2D Animation Performance Improvements in Unity 6.3 Beta

[2D Animation Performance Improvements in Unity 6.3 Beta - Unity Engine - Unity Discussions](https://discussions.unity.com/t/2d-animation-performance-improvements-in-unity-6-3-beta/1683239)

Unity 6.3の2D Animationsのパフォーマンスが改善されたことをアナウンスするディスカッションです。

この改善により、

- マルチスレッドとランタイム効率を向上させるためのIKリファクタリング
- JobSystemとBurstコンパイラを活用した2Dシャドウの計算改善
- デフォーメーション後のスプライトキャッシュ
- メモリオーバーヘッドを抑えるためのシングルボーンスプライト専用のコードパスの提供
- ボーンデータの冗長性やメモリーオーバーヘッドの最小化によるインスタンス化と破棄速度の改善
- デフォーメーション後の不要な処理の排除

などが行われました。これによりデフォーメーションの計算が、CPUで〜10%、GPUで〜30%改善されたとのことです。 

### Sprite Atlas Analyzer in Unity 6.3 Beta

[Sprite Atlas Analyzer in Unity 6.3 Beta - Unity Engine - Unity Discussions](https://discussions.unity.com/t/sprite-atlas-analyzer-in-unity-6-3-beta/1683242)

Sprite Atlas AnalyzerがUnity6.3に実装されることをアナウンスするディスカッションです。

このツールは、スプライトアトラスの最適化や管理を目的として開発されたツールで、現状下記が出力されます。

- プロジェクト上の全アトラス
- アトラス内の元テクスチャのうち圧縮設定が行われているテクスチャ
- Atlas Page Countが特定数以上のアトラス
- スプライトアトラス内の無駄な空間でのフィルタ
- 特定数以下しかテクスチャを含まないアトラス
- スプライトアトラス内の異なるセカンダリテクスチャ数をもつテクスチャ

### Rendering 3D as 2D in Unity 6.3 Beta

[Rendering 3D as 2D in Unity 6.3 Beta - Unity Engine - Unity Discussions](https://discussions.unity.com/t/rendering-3d-as-2d-in-unity-6-3-beta/1683244)

Unity6.3以降の2D URPワークフローで、3Dを2Dとして描画する機能が提供されたことをアナウンスするディスカッションです。

Mesh RendererまたはSkined Mesh Rendererに特定のシェーダーを利用することで、3Dオブジェクトが2Dライトから照明を受け取ったり、Sprite Maskのサポート、Spriteでソートすることができます。

### Planned breaking changes in Unity 6.4

[Planned breaking changes in Unity 6.4 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/planned-breaking-changes-in-unity-6-4/1682100)

Unity 6.4でくる予定の破壊的変更について事前にアナウンスするディスカッションです。

主な破壊的変更として、

- Unity 6.0から導入されたUxmlElement/UxmlAttributeに伴う、UxmlFactory/UxmlTraitsの削除
- SRP volumesのPhysicsパッケージ依存削除
- GameObjectsの削除時に孫オブジェクトのOnDisableが呼び出されるように
- SRP Compatibility Modeが削除され、カスタムレンダーパスの実装においてはRenderGraphの対応が必須に

が挙げられています。

### Finding out what is setting an Object as Dirty

[Finding out what is setting an Object as Dirty - Technical Articles - Unity Discussions](https://discussions.unity.com/t/finding-out-what-is-setting-an-object-as-dirty/1683759)

Unity2022以降に追加された、オブジェクトがDirtyになった際に、どのオブジェクトによってDirtyにされたかを出力するオプション ObjectSetDirty について、この使い方を解説しています。

### Level layout and terrain workflows in Survival Kids

[Level layout and terrain workflows in Survival Kids](https://unity.com/blog/level-layout-and-terrain-workflows-in-survival-kids)

KONAMIとUnityが共同開発するSwitch2向けの[サバイバルキッズ](https://www.konami.com/games/survival_kids/)における地形のレイアウトから、
制作のために構築した地形制作のワークフローとして、Houdiniで制作した地形メッシュに対してPolybrushを改良してマテリアルをペインティング、アンビエントオクルージョンのベイク、カスタムツールを用いた石や草、花などの小さなオブジェクトの配置についてそれぞれ説明しています。

### Inside Survival Kids: Tackling Split Screen and GameShare Networking

[Inside Survival Kids: Tackling Split Screen and GameShare Networking](https://unity.com/blog/split-screen-and-gameshare-networking-in-survival-kids)

KONAMIとUnityが共同開発するSwitch2向けの[サバイバルキッズ](https://www.konami.com/games/survival_kids/)におけるSwitch2でのゲームシェア機能（おすそわけ通信）の実現方法について紹介しています。

### Addressables documentation update: feedback wanted

[Addressables documentation update: feedback wanted - Web Resources - Unity Discussions](https://discussions.unity.com/t/addressables-documentation-update-feedback-wanted/1684146)

Addressables2.7以降のドキュメントが各情報にアクセスしやすいようにアップデートされた旨がアナウンスされています。

## Webinar

[Unityゲーム開発オンラインセミナー#1 ～Unity 6を使いこなすためには！～](https://create.unity.com/unity-gaming-webinar-jp-20250924)

Unity Technology Japanより、Web プラットフォーム拡張、Project Auditor、Unity Diagnostics など、Unity 6 の最新機能をエキスパートが解説するウェビナーが、 9/24 (水) 14:00 ~ 15:30 に開催予定です。

## Articles

### Jelly Troops におけるマルチタスクAI(Bot)

[https://zenn.dev/tankenzuki/articles/ai-jt-202509](https://zenn.dev/tankenzuki/articles/ai-jt-202509)

ゴール指向プランニングの紹介と、この記事の著者が開発する対戦型旗取りゲーム「Jello Troops」の敵AIをこの手法によって実現する方法について、ゲームへ導入する際の課題感や解決法、具体的な実装について解説しています。

### UnityでRayｍarchingを用いてVolumetricFogを実装する

[UnityでRayｍarchingを用いてVolumetricFogを実装する](https://zenn.dev/minaduki/articles/ab9b6aa709b6fa)

VolumetricFogをポストプロセス上でレイマーチングを用いて実現する方法や、見た目を担保するための光の減衰や散乱などの考慮について説明しています。

### Message Pipeで疎結合かつテスト可能なゲームマネージャーをつくる

[【Unity】Message Pipeで疎結合かつテスト可能なゲームマネージャーをつくる【MessagePipe】](https://zenn.dev/sumx21t/articles/48175272862608)

MessagePipeによってイベントドリブンかつ疎結合にゲームのロジックを実装する方法から、ユニットテストの記述例、デバッグ時にのみイベントを購読してデバッグログを出力するテクニックなどを紹介しています。

### Unity6.1でピクセルパーフェクトなUIとテキストの設定方法

[Unity6.1でピクセルパーフェクトなUIとテキストの設定方法](https://zenn.dev/esorasuika/articles/b1249032958668)

uGUIでピクセルパーフェクトなUIを実現するためのCanvasやSprite、Fontなどの設定方法について説明しています。