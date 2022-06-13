---
type: "unity-weekly"
title: "Unity Weekly #009"
date: "2021-04-12T09:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

## Enter the Boss Room: our new multiplayer sample game

![](./Boss-Room-Blog-Banner-2.png)

[Enter the Boss Room: our new multiplayer sample game『Boss Room』のご紹介 ― マルチプレイヤーゲームの新しいサンプル - Unity Technologies Blog](https://blogs.unity3d.com/jp/2021/04/08/enter-the-boss-room-our-new-multiplayer-sample-game/)

- GDC Showcase 2021で予告されていた、小規模なネットワーク協力型RPGである「Boss Room」が公開されました。
    - レポジトリは[こちら](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop)
    - [Getting Started with Boss Room | Unity Multiplayer Networking](https://docs-multiplayer-sandbox.unity3d.com/docs/learn/bossroom/index.html)
- 「Boss Room」はただのネットワーク協力型RPGのサンプルだけではなく、マルチプレイヤーゲームを開発する上での基本的なコンセプトとパターンを開発者に提供することを目的に開発されています。
    - アクションのアニメーションの先読みやロビー実装、ステートとRPCのどちらを選ぶか、などについてのノウハウが共有されています。詳細はドキュメントサイト（[Unity Multiplayer Networking | Unity Multiplayer Netpworking](https://docs-multiplayer.unity3d.com/)）にて公開されていく予定です。
- コードはUCL（Unity Companion License）で公開されているため、アセットの再利用やプロジェクトへの導入が可能です。

## Arm Mobile StudioでAndroidのパフォーマンス測定をDeepなレベルでしよう！

![](./unity-station-arm-mobile-studio.png)

[Arm Mobile StudioでAndroidのパフォーマンス測定をDeepなレベルでしよう！ - Unityステーション - YouTube](https://www.youtube.com/watch?v=dqaESkutxug)

- Arm社が提供するArm Mobile Studioを用いて、実際にAndroid実機でプロファイリングを行う様子を紹介する動画です。動画ではMaliを搭載したGalaxy A20を用いてUnity公式のサンプルプロジェクトである[Boat Attack](https://github.com/Unity-Technologies/BoatAttack)を実際に計測しています。
- Arm Mobile Studioの説明から実際に実機でプロファイリングする方法、プロファイリングした各項目の見方について説明されています。
- 実際に発行された描画コマンドやその時のフレームバッファ、デプスやステンシルバッファの状態、オーバードローの状況、シェーダーの詳細やシェーダーのそれぞれの命令のサイクル数などもプロファイルできることが確認できます。
- 補足ブログも公開されています。[Arm Mobile Studioについて｜黒河優介｜note](https://note.com/wotakuro/n/n7c40ef5faa6d)


## 鬼弾幕！新Mesh APIで本気出したら凄いことになった…

![](./advanced-mesh-api-sugoi.png)

[鬼弾幕！新Mesh APIで本気出したら凄いことになった…【Unity】 - YouTube](https://www.youtube.com/watch?v=u51C_sNZsyA)

- この動画では、Unity2020から導入されているAdvanced Mesh APIについて紹介しています。
- 今までのAPIでは`SetVertices`や`SetNormals`で頂点情報を設定し、その後内部で描画用の(インターリーブ形式の）頂点データに書き出し直してました。新しいAPIではその頂点データをそのまま設定することができるようになったため書き出す処理を省くことができるため、パフォーマンスが向上するとのことです。
- Advanced Mesh APIの簡単な利用方法（頂点フォーマットの定義方法、C# Job Systemでの頂点データの設定方法）が紹介されています。
- それぞれ参考資料は下記のとおりです。
    - 今回利用したデモプロジェクト
        - [keijiro/DanmakuBenchmark: Shmup-style benchmark for the Unity advanced mesh API](https://github.com/keijiro/DanmakuBenchmark)
    - 公式ドキュメント
        - [2019.3 Mesh API Improvements - Google Docs](https://docs.google.com/document/d/1I225X6jAxWN0cheDz_3gnhje3hWNMxTZq3FZQs5KqPc/edit)
        - [2020.1 Mesh API Improvements - Google Docs](https://docs.google.com/document/d/1QC7NV7JQcvibeelORJvsaTReTyszllOlxdfEsaVL2oA/edit#heading=h.vyksohcynwk5)
    - 公式サンプル
        - [Unity-Technologies/MeshApiExamples: Example project for Unity 2020.1 Mesh API improvements](https://github.com/Unity-Technologies/MeshApiExamples)
    - keijiroさんのサンプル
        - [keijiro/NoiseBall5: Example with Unity 2019.3 new Mesh API](https://github.com/keijiro/NoiseBall5)

## Create a Sand Dune Shader Graph in Unity URP! No Textures Needed! ✔️ 2020.3 | Game Dev Tutorial

![](./create-a-sand-dune-shader-graph-in-unity-urp.png)

[Create a Sand Dune Shader Graph in Unity URP! No Textures Needed! ✔️ 2020.3 | Game Dev Tutorial - YouTube](https://www.youtube.com/watch?v=KqWfo6EPjCw)

- この動画では、Universal Render Pipeline(URP)とShader Graphを用いてテクスチャなしで上記のような砂漠のような表現をするシェーダーを作成する方法について紹介しています。
- ハイトマップ（起伏）はUV値とSin波と回転で波模様を生成し、さらにパーリンノイズをかけてより自然な起伏を生成しています。パーリンノイズはCustom Functionを用いて実装されています。
- カラーリングはハイトマップの値に対してLow ColorとHigh Colorを定義してその二色をブレンドした色で色付けしています。またセルラーノイズ（この動画ではボロノイノイズと呼ばれています）をブレンドすることで、砂粒のような表現を加えています。
- ノーマルマップは先程のボロノイノイズを元に計算されています。

## Device Simulatorで複数の端末でのプレビューを爆速で検証する

![](./20210403154744.png)

[【Unity】Device Simulatorで複数の端末でのプレビューを爆速で検証する - うどんてっくメモ](https://myudon.hatenablog.com/entry/2021/04/04/193043)

- この記事では、エディタで様々な解像度やセーフエリアをシミュレートできるDevice Simulatorについての紹介しています。Device Simulatorのドキュメントは[こちら](https://docs.unity3d.com/Packages/com.unity.device-simulator@2.2/manual/index.html)から確認することができます。
- Device Simulatorについてとその導入方法、基本的な利用方法について説明されています。
- [Screen](https://docs.unity3d.com/ScriptReference/Screen.html)や[SystemInfo](https://docs.unity3d.com/ScriptReference/SystemInfo.html)、[Application](https://docs.unity3d.com/ScriptReference/Application.html)の端末情報に関する設定を上書きすることができるSimulation Scopeについてその使用方法、また独自で定義した端末情報を設定する方法についても合わせて紹介されています。

## Generating Meshes of a Sphere

![](./generating_spheres_teaser.png)

[Generating Meshes of a Sphere - Daniel Sieger](https://www.danielsieger.com/blog/2021/03/27/generating-spheres.html)

- この記事では、スフィアメッシュを生成する方法について、４手法をそれぞれコード付きで紹介しています。
- 紹介されている手法はそれぞれ、UV sphereとIcosphere、Quad sphereとGoldberg polyhedraで、それぞれの特徴についても簡単に説明されています。

## uGUIをTimelineで制御できる「Unity UI Playables」を公開しました 

![](./20210401104447.gif)

[【Unity】uGUIをTimelineで制御できる「Unity UI Playables」を公開しました - LIGHT11](https://light11.hatenadiary.com/entry/2021/04/06/195727)

- この記事ではUnityのuGUIコンポーネントのプロパティTimelineのTrackから制御できる[UnityUIPlayables](https://github.com/Haruma-K/UnityUIPlayables)について作者である[Haruma:K](https://twitter.com/harumak_11)さんが導入方法から利用方法について説明されています。
- このライブラリではUIコンポーネントの大体のプロパティが操作できるようです（制御できるコンポーネントは[こちら](https://github.com/Haruma-K/UnityUIPlayables#controllable-parameters)）。また、トラック間のブレンドやアニメーションカーブによる制御にも対応しています。

## Generate a Maze using Compute Shaders in Unity 

![](./256x256-3.jpg)

[Generate a Maze using Compute Shaders in Unity – Bronson Zgeb](https://bronsonzgeb.com/index.php/2021/04/03/generate-a-maze-using-compute-shaders-in-unity/)

- この記事ではCompute Shaderを用いて迷路を生成する方法について紹介しています。
- 迷路の生成には[二分木アルゴリズム](http://weblog.jamisbuck.org/2011/2/1/maze-generation-binary-tree-algorithm)を用いています。また、Compute Shaderの計算結果は`RWTexture2D`を用いて`RenderTexture`に書き出し、その結果をそのまま`Graphics.Blit`によって描画しています。