---
type: "unity-weekly"
title: "Unity Weekly #028"
date: "2021-08-23T09:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

## Announcements - MLAPI becomes Netcode for GameObjects

[Unity - Announcements - MLAPI becomes Netcode for GameObjects - Unity Forum](https://forum.unity.com/threads/announcements-mlapi-becomes-netcode-for-gameobjects.1147601/)

- UnityのマルチプレイヤーネットワークライブラリであるMLAPIが、「Netcode for GameObjects」として改名されることがアナウンスされました。Github上のレポジトリは[Unity-Technologies/com.unity.netcode.gameobjects](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects)として名前が変更されています。
- 名前変更の理由として、「開発者がアーキテクチャをよりよく理解できるように、簡単に識別ができるようにわかりやすい名前が必要である。GameObjectを他のアーキテクチャと区別しやすくするため。」としています。


## Unity is adding a new "DXC" HLSL compiler backend option

[Unity - Unity is adding a new "DXC" HLSL compiler backend option - Unity Forum](https://forum.unity.com/threads/unity-is-adding-a-new-dxc-hlsl-compiler-backend-option.1086272/)

- Unity 2021.2からシェーダーのコンパイラバックエンドにDXCが追加されました。ドキュメントは[こちら](https://docs.google.com/document/d/1yHARKE5NwOGmWKZY2z3EPwSz5V_ZxTDT8RnRl521iyE/edit#)から閲覧できます。
- 現在はMetalとVulkan、DirectX12限定なのと`#pragma use_dxc`の指定が必要ですが、コンパイル速度が現在利用しているFXCとくらべて約4倍高速になるとのことです。


## ROS 2 と Unity でロボットにより進んだ自律性を与える  

![](./image4_3.jpg)

[ROS 2 と Unity でロボットにより進んだ自律性を与える | Unity Blog](https://blog.unity.com/ja/manufacturing/advance-your-robot-autonomy-with-ros-2-and-unity)

- UnityがROS2を公式にサポートすることになりました。Unityの[Robotics](https://github.com/Unity-Technologies/Unity-Robotics-Hub)パッケージを用いてROSやROS 2と簡単にやり取りすることができます。
- [URDF Importer](https://github.com/Unity-Technologies/URDF-Importer)を用いることで、URDFフォーマットをUnityのシーンに直接取り込めます。また、[ROS TCP Connector](https://github.com/Unity-Technologies/ROS-TCP-Connector)を用いるとROSおよびROS 2のプロトコルをUnityが利用できます。
- サンプルレポジトリとして[Navigation 2 SLAM Example](https://github.com/Unity-Technologies/Robotics-Nav2-SLAM-Example)が用意されています。これは、[(SLAM) Navigationg While Mapping](https://navigation.ros.org/tutorials/docs/navigation2_with_slam.html)というチュートリアルをUnityで使用できるようにしたもので、必要なコンポーネントの実装などが含まれています。


## Made with Unity：ML-Agents を使ったサッカーロボット  

![](./MLA_Soccer_Robotsimage6.jpg)

[Made with Unity：ML-Agents を使ったサッカーロボット | Unity Blog](https://blog.unity.com/ja/games/made-with-unity-soccer-robots-with-ml-agents)

- この記事では、[ML-Agentsによるサッカー環境](https://blog.unity.com/ja/technology/training-intelligent-adversaries-using-self-play-with-ml-agents)を使って訓練したエージェントを[toio](https://toio.io/)とよばれるロボットに移植して、実世界のロボットにサッカーをさせる事例を紹介しています。
- ML-Agentsのモデルを実世界のロボットへ移植する方法からハードウェアのセットアップ、報酬設計、実世界への適用で難しかったことなどが説明されています。
- このプロジェクトの詳細については「[Unity ML-Agents と toio によるサッカーロボットの強化学習](https://note.com/npaka/n/n05368fec4551)」で確認できます。


## Plastic SCM for Unity：ワークフローを改善してコラボレーションを強化しよう

![](./image8.png)

[Plastic SCM for Unity：ワークフローを改善してコラボレーションを強化しよう | Unity Blog](https://blog.unity.com/ja/technology/plastic-scm-for-unity-better-workflows-for-stronger-collaboration)

- この記事では、バージョン管理システムであるPlastic SCMの利用方法について解説しています。
- Plastic SCM for UnityはTECHストリームおよび2019.4と2020.3のLTSバージョンをサポートしています。[Version Control パッケージ](https://docs.unity3d.com/Packages/com.unity.collab-proxy@1.7/manual/index.html)を介して利用できます。
- Plastic SCMの利用例として、保留中の変更表示、プロジェクト同期、履歴の確認、ブランチの活用方法など基本的な利用方法が紹介されています。

## Oculus Questのビデオパススルーを試す 

![](./20210813135625.png)

[Oculus Questのビデオパススルーを試す - e.blog](https://edom18.hateblo.jp/entry/2021/08/13/135715)

- この記事では、Oculus Questで公開された[ビデオパススルーAPI](https://developer.oculus.com/experimental/passthrough-api/)をUnityで利用するためのセットアップ方法を紹介しています。
- Passthroughを有効にするためのPlayer Settingの設定、adb経由でのexperimentalの有効化、AndroidManifest.xmlの編集、Show Splash Screen、パッケージの更新など、ハマりどころの多い各種項目を説明しています。


## Lit Toon Shader Graph 

![](./2021-08-13-14-22-57.gif)

[PatreonでのLit Toon Shader Graph | Minions Art](https://www.patreon.com/posts/lit-toon-shader-54740865)

- この記事では、Shader Graphでトゥーン調なLit Shaderを作成する方法を紹介しています。
- カスタムノードの利用方法からテクスチャの貼り付け、リムライト、（目などの）モデルの一部をUnlitにするためのマスク実装についてそれぞれ解説しています。

## 5 ways to draw an outline

![](./final.png-600w.webp)

[5 ways to draw an outline](https://alexanderameye.github.io/notes/rendering-outlines/)

- この記事では、アウトラインを描画する方法を５つ紹介しています。
- リムライト、頂点押し出し、ブラーバッファー、Jump Floodingアルゴリズム、エッジ検出について、それぞれ実装方法とその考察がされています。


## Scene Selector Tool

![](./SceneSelectorTool.png)

[Scene Selector Tool – Bronson Zgeb](https://bronsonzgeb.com/index.php/2021/08/21/scene-selector-tool/)

- この記事では、開発効率化のためにシーンセレクターツールをエディタ機能として実装する方法について紹介しています。
- `EditorWindow`によるウインドウの作成、UI ToolkitによるUIの実装、`EditorSceneManager`を用いたシーンの開き方、`ScriptableSingleton`を用いたシングルトンなスクリプタブルオブジェクトの作成方法についてそれぞれ説明しています。