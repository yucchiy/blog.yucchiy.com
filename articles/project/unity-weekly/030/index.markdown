---
type: "unity-weekly"
title: "Unity Weekly #030"
date: "2021-09-13T09:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

## Unity Official

### Unity 2020 LTS 以降の Visual Effect Graph が拓く新たな可能性

![](./01_0.jpg)

[Unity 2020 LTS 以降の Visual Effect Graph が拓く新たな可能性 | Unity Blog](https://blog.unity.com/ja/technology/new-possibilities-with-vfx-graph-in-2020-lts-and-beyond)

- Unity2020 LTS以降のVisual Effect Graphのアップデートについて紹介しています。Unity 2020 LTSおよび2021.1のアップデートでは主に安定化・パフォーマンス最適化・CPUイベント出力を利用したゲームプレイとの統合強化・メッシュからパーティクルをスポーンする機能の拡充に焦点を当てています。
    - またUnity 2021.2以降では、URPのサポート強化、2Dとの互換性を強化して計算性能の高いモバイル、Oculus Quest、Switchなどのプラットフォームへのサポートを拡大することを目標にしています。
- [Visual Effect Graphのサンプル](https://github.com/Unity-Technologies/VisualEffectGraph-Samples)の更新および[Spaceshipデモ](https://github.com/Unity-Technologies/SpaceshipDemo)の刷新が行われました。
- 新しく追加されたサンプル「Meteorite」は、隕石の衝突によって引き起こされる力の相互作用を表現しています。これには新たに追加された「VFX Output Event Handlers」を使って作られています
    - Output Event Handlerはカメラの揺れ、地面への衝撃、光アニメーションを表現するために利用しています
    - 爆発や燃焼をトリガーするためにその結果をレンダーテクスチャーに書き込んでおき、それを他のエフェクトが利用することで相互作用を実現できます。
    - VFXのタイムライン上での同期が強化されました。

### UnityグラフィックスAPI総点検！〜最近こんなの増えてました〜（YouTube）

![](./Screenshot2021-09-13041159.png)

[UnityグラフィックスAPI総点検！〜最近こんなの増えてました〜 - Unityステーション - YouTube](https://www.youtube.com/watch?v=7tjycAEMJNg)

- 最近のUnityのグラフィックス周辺で追加されたAPIなどについて紹介しています。動画で利用されているスライド資料は[こちら](https://docs.google.com/presentation/d/1JxDc7_lZ_2WqmckmX6Y1NfLHUg2BZWgZjVhq8hk1U7c/edit)に公開されています。
- シェーダーキーワードの無限化 (2021.2)
    - いままではゲームの中で合計128個(5.4まで) -> 256個(5.5) -> 384個(2019.4) -> 2^32(2021.2)に。詳しい実装は[フォーラム投稿](https://forum.unity.com/threads/shader-keyword-system-improvements-in-2021-2-alpha.1104865/)で。
- `Material.SetInt` -> `Material.SetInteger` (2021.1)
    - `void SetInt(string name, int value) => SetFloat(string name, (float)value);` ([実際のコード](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Runtime/Export/Shaders/Shader.cs#L111))
    - ビットフィールドとして渡している人は死ぬので結構致命的だった
- Meshインターリーブ配列アクセス ([ドキュメント](https://docs.unity3d.com/2021.2/Documentation/ScriptReference/Mesh.html))
    - [2019.3](https://docs.google.com/document/d/1I225X6jAxWN0cheDz_3gnhje3hWNMxTZq3FZQs5KqPc/edit)と[2020.1](https://docs.google.com/document/d/1QC7NV7JQcvibeelORJvsaTReTyszllOlxdfEsaVL2oA/edit)でそれぞれ変更があった。（リンクはそれぞれドキュメント）
    - Position, Normal, UVのような分離された配列ではなくインターリーブ配列に直接アクセスできる。CPUやメモリの節約になる
    - サンプル: [NoiseBall5](https://github.com/keijiro/NoiseBall5), [DanmakuBenchmark](https://github.com/keijiro/DanmakuBenchmark)
- Mesh GraphicsBufferへのアクセス
    - Compute ShaderからMeshを直接更新できるようになった ([ドキュメント](https://docs.google.com/document/d/1_YrJafo9_ZsFm4-8K2QlD0k3RgwZ_49tSA84paobfcY/edit))
    - サンプル: [NoiseBall6](https://github.com/keijiro/NoiseBall6), [ComputeMarchingCubes](https://github.com/keijiro/ComputeMarchingCubes)
- ComputeBuffer -> GraphicsBuffer
    - 頂点バッファやインデックスバッファも参照できるようになった上位互換的存在（[ドキュメント](https://docs.unity3d.com/2021.2/Documentation/ScriptReference/GraphicsBuffer.html)）
    - 今後は基本GraphicsBufferをしていく予定なので、基本こっちを使うでよい
- TextureFormat? GraphicsFormat?
    - [TextureFormat](https://docs.unity3d.com/2021.2/Documentation/ScriptReference/TextureFormat.html)・[GraphicsFormat](https://docs.unity3d.com/2021.2/Documentation/ScriptReference/Experimental.Rendering.GraphicsFormat.html)
    - TextureFormatはファイルの属性を表現するもの、GraphicsFormatはGPUメモリ上での属性を表現するもので、使い分けをしていく
    - RenderTextureはRenderTextureFormatがある（GraphicsFormatが使われる予定があるかも？）
- 最近知った便利機能（小話系）
    - Texture2D.PackTextures（[ドキュメント](https://docs.unity3d.com/ja/current/ScriptReference/Texture2D.PackTextures.html)）
    - Assembly DefinitionのVersion Define
        - 「他のパッケージのバージョンがxxx以上の場合にDefineを定義する」ができる
- IssuePluginCustomTextureUpdateV2
    - ネイティブプラグインを使ってテクスチャを書き換えるAPI。本来テクスチャの書き換えは描画スレッドとの連携が必要なので、本当は面倒でこれを使うと楽。
    - Unityがネイティブプラグインをコールバックで呼ぶという形。C++で画像を生成したい場合や外部ライブラリから画像を受け取りたい場合などに便利。
    - サンプル: [TextureUpdateExample](https://github.com/keijiro/TextureUpdateExample)
- GetRawTextureData<T>
    - 昔からあった `GetRawTextureData` はCPUに格納されているデータをC#配列としてコピーするが、こちらは `NativeArray<T>`として直接返すので余計なメモリ確保が生じない。（[マニュアル](https://docs.unity3d.com/ScriptReference/Texture2D.GetRawTextureData.html)）
-  VFX GraphのGraphicsBuffer対応
    - いままではプログラムで生成したデータを渡すには一度テクスチャにベイクする必要があったがそれがなくなった。（[マニュアル](https://docs.unity3d.com/2021.2/Documentation/ScriptReference/VFX.VisualEffect.SetGraphicsBuffer.html)）
    - [VfxGraphGraphicsBufferTest](https://github.com/keijiro/VfxGraphGraphicsBufferTest), [GeoVfx](https://github.com/keijiro/GeoVfx)
- DrawProcedural 系 APIおさらい
    - Meshデータを使わずに描画を行うためのAPI群。ただし今までは呼び出すと即座に描画がされるのでシーンのライティングなどを考慮できなかったが、新しいAPIでは考慮できるようになった（が、古いAPI名と新しいAPI名が被るので、破壊的な変更が行われていることになっている）
- Async GPU Readback
    - ComputeShaderを実行して作成したGPU側のデータをCPU上にコピーする処理を非同期に行えるようになった （[マニュアル](https://docs.unity3d.com/2021.2/Documentation/ScriptReference/Rendering.AsyncGPUReadback.html)）。
        - 内部的にはUnityがEarlyUpdateでポーリングしているらしい
    - 今まではUnityが用意した領域にコピーし次のフレームでは消えるといった状態だが、`RequestIntoNativeArray`ではコピー先をユーザーが用意したNativeArrayにできる。
    - `WaitAllRequests`: 終了処理を書くときになどに、すべての処理が終わるまで待つAPI
    - `CaptureScreenshotIntoRenderTexture`: スクリーンショット系の実装で便利。（[ドキュメント](https://docs.unity3d.com/2021.2/Documentation/ScriptReference/ScreenCapture.CaptureScreenshotIntoRenderTexture.html)）

### アーティストワークフローをスピードアップ 

[アーティストワークフローをスピードアップ | Unity Blog](https://blog.unity.com/ja/technology/speed-up-your-artist-workflows)

![](./blog-header.jpg)

- 「[70+ tips to increase productivity with Unity 2020 LTS](https://create.unity3d.com/ebook-improve-workflow)」というeBook紹介記事の第2段です。第1弾は[こちら](https://blog.unity.com/ja/technology/five-ways-to-speed-up-your-workflows-in-the-editor)。Unity機能のうちアーティスト向けのヒントを紹介しています。
- Nested PrefabやPrefab VariantsなどのPrefab Workflowを用いて入れ子や継承などを表現できます（[プレハブワークフロー - Unity](https://unity.com/ja/prefabs)）
- TextMeshProでは、文字、単語、行、段落のスペーシング、カーニング、テキストの両端揃え、リンク、30 種類以上のリッチテキストタグ、マルチフォントとスプライトのサポート、カスタムスタイルなど、uGUIのUI Textと比べて様々な機能が利用できます。
- スナップを用いることでトランスフォームの設定をより効率的に行えます。「Edit > Grid and Snap Settings」ではワールド空間でのグリッドのスナップを調整できます。また、表面スナップや頂点スナップを用いてコライダー表面や頂点上にもスナップできます。[ProGrids](https://docs.unity3d.com/Packages/com.unity.progrids@3.0/manual/grids.html)パッケージを用いることでスナップ挙動をより細かく制御できます。
- アニメーションウインドウ（Window > Animation > Animation）を用いることでUnityのあらゆるプロパティをアニメーション化することができます。また、[Animation Riggingパッケージ](https://docs.unity3d.com/Packages/com.unity.animation.rigging@1.1/manual/index.html)によりランタイムのリギングによってアニメーションを調整したり、物理ベースの制約によってダイナミックなセカンダリモーションを追加することもできます。
- カスタムギズモを利用してアセットの調整を効率化できます。([Creating Custom Gizmos for Development - 2019.2 - Unity Learn](https://learn.unity.com/tutorial/creating-custom-gizmos-for-development-2019-2)）
- ライトマップを高速化する手法として[プログレッシブライトマッパー](https://docs.unity3d.com/ja/current/Manual/progressive-lightmapper.html)を利用できます。また、プログレッシブライトマッパーにはCPUライトマッパー以外にGPUライトマッパー（プレビュー）が利用できます。使用しているマシンが要件を満たしていれば利用でき、場合によってはCPUに比べて10倍高速になります。
- GIの近似手法として[ライトプローブ](https://docs.unity3d.com/ja/current/Manual/LightProbes.html)を用いることもできます。（参考: [ライトプローブを使用した静的ライティング | Unity Blog](https://blog.unity.com/ja/technology/static-lighting-with-light-probes)）

### 合成データのための 3D コンテンツを使ってみよう 

![](./Hero.jpg)

[合成データのための 3D コンテンツを使ってみよう | Unity Blog](https://blog.unity.com/ja/technology/getting-started-with-3d-content-for-synthetic-data)

- Unity Perceptionを利用して合成データを作成することで、機械学習における学習を効率的に行うことができるようになります。この記事では合成データを作成するために必要な3Dコンテンツを調達する方法として、「Unityアセットストア」、「3Dスキャン」、「プロシージャルコンテンツ」をそれぞれ紹介しています。
- Unityアセットストアでは、ゲーム・映画などで利用するための3Dコンテンツが多く、安価で販売されています。
- 3Dスキャンを用いることで実世界の物体の正確な3Dモデルをできます。3Dスキャンの技術として主に「フォトグラメトリー」、「フラットベッドスキャナーと 3D モデリング」、「産業用3Dスキャナー」があります
    - フォトグラメトリでは異なる角度から撮影された写真のセットから 3D オブジェクトを合成します。[https://unity.com/ja/solutions/photogrammetry](https://unity.com/ja/solutions/photogrammetry)
    - [SynthDet](https://github.com/Unity-Technologies/SynthDet)で利用されるアセットはフラットベッドスキャナーと 3D モデリングで作成されています。（[参考](https://github.com/Unity-Technologies/SynthDet/blob/master/docs/CreatingAssets.md)）
    - 産業用 3D スキャナーは高精度かつ高速ですが、その分コストが高い傾向にあります。
- プロシージャルコンテンツではルールに基づいたアルゴリズムを利用して無数のバリエーションのコンテンツを生成できます。ツールとしてUnity のシェーダーグラフ、Adobe Substance 3D、Houdiniなどがあります。
    - [Getting Started with Houdini & Unity - Unity Learn](https://learn.unity.com/project/getting-started-with-houdini-unity)
    - [Introduction to ShaderGraph - Unity Learn](https://learn.unity.com/tutorial/introduction-to-shader-graph)


## Articles

### Volumetric Light Scattering as a Custom Renderer Feature in URP

![](./preview.gif)

[Volumetric Light Scattering as a Custom Renderer Feature in URP | raywenderlich.com](https://www.raywenderlich.com/22027819-volumetric-light-scattering-as-a-custom-renderer-feature-in-urp)

- URPでCustom Renderer Featureを用いてVolumetric Light Scattering（ゴッドレイやライトシャフトとも呼ばれる）を実装するための方法の解説しています。
    - 物理的に正確な計算ではないが、ポストプロセスとして効果を実現する。具体的には、スクリーンスペース上でoccluders mapと呼ばれる光源情報を表すテクスチャを生成して、そのテクスチャを元にラディアルブラーにより効果を表現して、もとのレンダリング結果にオーバーレイする方法を取ります。
- Custom Renderer Featureの作成方法からForward Rendererへの追加方法、上記のアルゴリズムを実際にRenderer Featureとして実装する方法を解説しています。
- Frame Debuggerを用いて、Custom Renderer Featureのデバッグ方法も紹介しています。

### 【Unity2021.2新機能】各アセットのインポート時間が一覧表示できるImport Activity Window 

[【Unity2021.2新機能】各アセットのインポート時間が一覧表示できるImport Activity Window - LIGHT11](https://light11.hatenadiary.com/entry/2021/09/06/201931)

- Unity 2021.2から導入された Import Activity Windowについて紹介しています。Import Activity Windowを用いることで、それぞれのアセットのインポートにかかった時間を確認できます。
- OnPostprocessAllAssetsで書かれたインポート処理は形状されないというハマりポイントにも言及されています。

### Unityのパッケージ取得にパスフレーズ付きの秘密鍵を使う

[Unityのパッケージ取得にパスフレーズ付きの秘密鍵を使う](https://zenn.dev/fumo/articles/30118fc5acfdbe)

- Unityのパッケージマネジャで、Githubなどのプライベートレポジトリをパスフレーズ付きの秘密鍵を用いて利用する方法の解説記事。
- Windows10環境でGit for Windowsを用いて、具体的にどのようにパスフレーズ付き秘密鍵を利用するかについて説明しています。

### Save Data with BinaryWriter and BinaryReader

![](./Screen-Shot-2021-08-27-at-21.52.14.png)

[Save Data with BinaryWriter and BinaryReader – Bronson Zgeb](https://bronsonzgeb.com/index.php/2021/08/28/save-data-with-binarywriter-and-binaryreader/)

- `BinaryReader`および`BinaryWriter`を利用してオブジェクトの状態をバイナリデータとして保存し、また読み込む方法を紹介しています。

### The Scriptable Object Asset Registry Pattern

![](./Scene.png)

[The Scriptable Object Asset Registry Pattern – Bronson Zgeb](https://bronsonzgeb.com/index.php/2021/09/11/the-scriptable-object-asset-registry-pattern/)

- 上記の`BinaryReader`と`BinaryWriter`によるセーブデータ保存機能を活用して、ゲーム中のプレハブや複雑なデータをシリアル化してディスクにゲームの状態を保存・読み込みするためのパターンである `Registry Pattern`について紹介しています。


### Pathfinding on a hexagonal grid

![](./post_imagepathfinding.png)

[Pathfinding on a hexagonal grid - A* Algorithm - The Knights of Unity](https://blog.theknightsofunity.com/pathfinding-on-a-hexagonal-grid-a-algorithm/)

- A*アルゴリズムによる経路探索を2Dグリッド空間を例に、C#のコード付きで紹介しています。
- ヘキサゴングリッドにおいてA*をどのように適用すればよいかについてもしています。

### Design a grid style inventory window with UI Toolkit

![](./image-12.webp)

[Design a grid style inventory window with UI Toolkit - GameDev Resources](https://gamedev-resources.com/create-a-spatial-inventory-with-ui-toolkit-part-1/)

- UI Toolkitを用いて、ランタイムで動作するグリッドスタイルなインベントリウインドウを実装する方法について解説する記事。デザインにはUI Builderパッケージを用いています。
- 各種パッケージの導入方法からUI Builderを用いてどのようにUIを構築していくかについて、順繰り解説しています。
- 次の記事で、スクリプトとUIを連動させる方法について解説される予定です。

### Material Property Blocks

![](./propertyBlocksCover-750x410.jpg)

[Material Property Blocks – Anton Semchenko](https://www.anton.website/material-property-blocks/)

- Material Property Blockの紹介と使い方について。`Renderer.material`を参照すると都度マテリアルをインスタンス化してしまいメモリ効率が悪かったり、ドローコールを増加させる可能性がある。
- [Material Property Blockについての解説](https://thomasmountainborn.com/2016/05/25/materialpropertyblocks/)

