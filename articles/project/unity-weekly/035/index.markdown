---
type: "unity-weekly"
title: "Unity Weekly #035"
date: "2021-10-18T09:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

# Unity Official

## カメラの使い方を工夫してゲームのパフォーマンスを最適化する方法：パート 2

![](./Untitled-2.png)

[カメラの使い方を工夫してゲームのパフォーマンスを最適化する方法：パート 2 | Unity Blog](https://blog.unity.com/ja/games/part-2-optimize-game-performance-with-camera-usage)

Universal Render Pipeline（URP）のレンダリングパイプラインにおいてカメラを複数利用したときのパフォーマンスへの影響を、シンプルな検証環境および複数のiOS・Android端末で計測した結果と、複数カメラにおいて避けたいパターンと使うべきケースをまとめています。

避けたい複数カメラ利用パターンでは、UIカメラとキャンバスの使い方の正しい使い方と、視点切り替えで複数カメラを利用するケースの注意点について触れています。

複数カメラを使うべきケースの紹介では、カメラの出力先やパラメータ・解像度を変更したい場合にはカメラを複数用意する必要があることと、具体例としてディスプレイが高解像度な端末においてシーンカメラとUIカメラを複数用意してパフォーマンスを向上させる方法や、画面分割やRenderTextureを用いる場合に複数カメラを利用する必要があることを述べています。

## Made with Unity：ロボットのデジタルツインの制作とトレーニング

![](./Untitled-8.png)

[Made with Unity：ロボットのデジタルツインの制作とトレーニング | Unity Blog](https://blog.unity.com/ja/technology/made-with-unity-creating-and-training-a-robot-digital-twin)

OpenCV Spatial AI Competitionに Gerard Esponna氏とKaudaチームが提出した論文でのUnityの利用事例を紹介しています。この論文ではコンピュータービジョンモデルの学習には[Perception Package](https://github.com/Unity-Technologies/com.unity.perception)を、機械学習モデルの学習には[ML-Agents ツールキット](https://github.com/Unity-Technologies/ml-agents)を用いてロボットアームのsim2realデモンストレーションを行っています。

Unity内にKauda Studioという、Kauda（3Dプリント可能な5軸ロボットアーム）を正確にシミュレーションする環境を用意してその中でKaudaのデジタルツインに対して、合成データを用いて強化学習を行っています。学習には[ML-Agents ツールキット](https://github.com/Unity-Technologies/ml-agents)を、合成データの生成や統合には学習済みのTiny-YOLO v3モデルと[Perception Package](https://github.com/Unity-Technologies/com.unity.perception)を活用しています。

## Unityで寿司エフェクトでも作りながらVFXの新機能について語っていきたい

![](./Untitled-4.png)

[Unityで寿司エフェクトでも作りながらVFXの新機能について語っていきたい - Unityステーション - YouTube](https://www.youtube.com/watch?v=B9VTmQ_CQSg)

寿司をネタにしながらVFXの新機能を解説する動画です。下記の内容を紹介しています。

- Output Particle Meshノードでの複数メッシュ指定、
- スキンメッシュも含む）メッシュサンプリングによりモデルの頂点位置を用いてメッシュ生成（メッシュサンプリングをポイントキャッシュ変換なしでランタイムで行う）とメッシュのモーフィング実装
- Signed Distance Field（SDF）のサンプルと活用方法・SDFデータのベイクツールの利用方法
- Shader Graphで頂点更新（VFX内でVFX Shader GraphだけでなくURP Shader GraphやHDPR Shader Graphを使えるようになり、それらの機能の Vertex Modifierを活用する方法）
- VFXのアップデートの追い方と最近のアップデートの紹介
- VFXのバウンディングボックスヘルパーの紹介とレコードモードによるエフェクトの実際の動きを記録してバウンディングボックスを設定する方法

## 最新のメガバンドルでツールボックスを充実させよう

![](./Untitled-6.png)

[最新のメガバンドルでツールボックスを充実させよう | Unity Blog](https://blog.unity.com/ja/games/fill-your-toolbox-with-the-latest-mega-bundles)

2021/11/01 までメガバンドルのセールを実施しています。49.50ドル以上を支払うことで、18のツール系アセットを最大95%OFFで購入できます。


# Articles

## Using the Terrain Tools in Unity

![](./Untitled-5.png)

[Using the Terrain Tools in Unity | raywenderlich.com](https://www.raywenderlich.com/21911888-using-the-terrain-tools-in-unity)

UnityのTerrainツールである[Terrain Toolbox API](https://docs.unity.cn/Packages/com.unity.terrain-tools@4.0/api/index.html) についてのチュートリアルです。

Terrain Toolbox のインストール方法から、Terrain Toolboxを用いた地形制作のワークフローの説明、ツールを用いた地形の作成、Height Map及びSplat Mapの利用方法、レイヤーとTerrainのペイント処理、新しいブラシとマスクの利用方法についてそれぞれ詳細に解説しています。

## Custom Lighting in Shader Graph

![](./Untitled-1.png)

[Custom Lighting in URP with Shader Graph – Bronson Zgeb](https://bronsonzgeb.com/index.php/2021/10/04/custom-lighting-in-urp-with-shader-graph/)
[Custom Lighting in Shader Graph Part 2 – Bronson Zgeb](https://bronsonzgeb.com/index.php/2021/10/11/custom-lighting-in-shader-graph-part-2/)

Universal Render Pipeline（URP）およびShader Graphという環境で、Shader Graphの生成するシェーダーファイルを改変することで、独自のライティング処理を追加する方法について解説しています。

この記事の[前半（パート１）](https://bronsonzgeb.com/index.php/2021/10/04/custom-lighting-in-urp-with-shader-graph/)では、Shader Graphが生成するシェーダーファイルの分析と、ビルトインの`PBRForwardPass.hlsl`をコピーしてプロジェクト独自のライティングパスを実装し、そのパスをエディターツールを介することでShader Graphが生成するシェーダーファイルに独自のライティングパスを差し込みます。

[後半（パート２）](https://bronsonzgeb.com/index.php/2021/10/11/custom-lighting-in-shader-graph-part-2/)では、 `AssetPostprocessor` からShaderGraphの保存タイミングを検知して、前半で実装した独自のライティングパスの差し込み処理をファイルの保存時に自動で行う方法を紹介しています。

## Unity Shader Graph Procedural Planet Water Tutorial

![](./Untitled.png)

[Unity Shader Graph Procedural Planet Water Tutorial – Coster-Graphics](https://timcoster.com/2021/09/24/unity-shader-graph-procedural-planet-water-tutorial/)

Shader Graphを用いて、画像のような惑星の水を表現するシェーダーを実装する方法について説明しています。

水面の深さを計算で求めて水の色を決定するデプス値として利用する方法、求めたデプス値とノイズを利用してエッジ付近の泡を表現する方法、
法線マップテクスチャとノイズを用いてで水面の波を生成する方法について、ステップ・バイ・ステップで解説しています。


## Unity Draw Call Batching: The Ultimate Guide [2021]

![](./Untitled-3.png)

[Unity Draw Call Batching: The Ultimate Guide [2021] | The Gamedev Guru](https://thegamedev.guru/unity-performance/draw-call-optimization/?utm_source=pocket_mylist)

ドローコールについての説明と、描画最適化のためにドローコールをバッチングさせるためのテクニックを紹介しています。

ドローコールが増えることでゲームにどのような兆候が現れるのかについての紹介と、Unityにおけるドローコールは具体的にどのようなものなのかとマテリアルとの関係、同マテリアルをもつオブジェクトではバッチ処理によりドローコールがグループ化まとめられてドローコールが削減される可能性があることの説明、ドローコールをバッチングするためのテクニックとして静的バッチ処理とGPUインスタンス化、ダイナミックバッチング、 `StaticBatchingUtility.Combine` や `Mesh.CombineMeshes` を利用した削減テクニックについて解説しています。


## Unityの機能だけでローポリ3Dモデルを簡単に滑らかにする方法【Untiy】

![](./Untitled-7.png)

[Unityの機能だけでローポリ3Dモデルを簡単に滑らかにする方法【Untiy】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Smoothing_Angle?utm_source=feed)

Unityの標準機能でメッシュを加工する機能の紹介と、その機能を用いてローポリ3Dモデルをなめらかに加工する方法を紹介しています。

Meshのインポート設定で、 `Normal` や `Normals Mode`、`Smoothing Angle` を用いてローポリ3Dモデルをなめらかにする方法についてそれぞれ解説しています。

