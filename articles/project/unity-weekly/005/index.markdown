---
type: "unity-weekly"
title: "Unity Weekly #005"
date: "2021-03-16T15:00:00+09:00"
draft: false

---

## Unity 2020 LTS

![](./01.png)

[Unity - Unity 2020 LTS Is Now Available - Unity Forum](https://forum.unity.com/threads/unity-2020-lts-is-now-available.1072553/)

- Unity 2020.3がリリースされた。Unity 2020.3はUnity 2020ではLong Term Support(LTS)、つまり長期サポートバージョンに切り替わった。
    - 余談だが、その前のバージョンをUnity的にはTECHストリームというらしい。
    - [New plans for Unity releases: Introducing the TECH and Long-Term Support (LTS) streams새로운 Unity 릴리스 계획: 테크 스트림 및 LTS 스트림 소개Unity の新しいリリースプラン：TECH ストリームと長期サポート（LTS）ストリームの導入 - Unity Technologies Blog](https://blogs.unity3d.com/jp/2018/04/09/new-plans-for-unity-releases-introducing-the-tech-and-long-term-support-lts-streams/)
- Unity Japanからも記事がリリースされた。
    - [Unity 2020 LTSをリリースしました｜Unity Japan（ユニティ・テクノロジーズ・ジャパン）｜note](https://note.com/unityjapan/n/naf7bb0270aff)
- リリースノートはこちら
    - [What's new in Unity 2020.3.0 - Unity](https://unity3d.com/unity/whats-new/2020.3.0)

## In-Editor tutorials available to try in Unity 2021.1

![](./02.png)

[In-Editor tutorials available to try in Unity 2021.1](https://blogs.unity3d.com/2021/03/10/in-editor-tutorials-available-to-try-in-unity-2021-1/)

- インタラクティブにin-Editor Tutorial(IET)を実装するためのパッケージがUnity公式でリリースされた。
- エディターツールのチュートリアルを実装できる。下記の機能が提供される。
    - Createサブメニューにチュートリアルの各種機能のテンプレートを作成するメニュー
        - Welcome dialog、Tutorial windowなど
    - エディタUIに対してマスクやハイライト
        - 
    - ユーザー独自のチュートリアルロジックの差し込み
    - etc...
- 2つのパッケージが公開されている
    - [About Tutorial Framework | Tutorial Framework | 2.0.0-pre.4](https://docs.unity3d.com/Packages/com.unity.learn.iet-framework@2.0/manual/index.html?_ga=2.125602442.142086545.1615745437-1836058081.1529947313)
    - [About Tutorial Authoring Tools | Tutorial Authoring Tools | 1.0.0-pre.4](https://docs.unity3d.com/Packages/com.unity.learn.iet-framework.authoring@1.0/manual/index.html?_ga=2.92700957.142086545.1615745437-1836058081.1529947313)

## Interactive Snow w/ Tessellation for URP

![](./03.gif)

[Interactive Snow w/ Tessellation for URP | Minions Art on Patreon](https://www.patreon.com/posts/47452596)

- URPで利用できるテセレーションを利用した、インタラクティブな雪シェーダーの実装。
- 球が雪の上を転がると、雪の軌跡が反映される。

## Intro to Shader Graph

![](./05.png)

[Intro to Shader Graph | Cyanilux](https://www.cyanilux.com/tutorials/intro-to-shader-graph/)

- Shader Graphの利用方法について詳細に説明された記事。
- シェーダーグラフのインストールからグラフやノード、グラフのインスペクタ、マスタースタック、データ型、座標空間、プレビューウインドウ、Blackboard、ノードのグルーピング、サブノートについて詳細に説明されている。
- また、発展的なトピックスとしてCustom Functionについても説明されている。

## Particle Metaballs in Unity using URP and Shader Graph

![](./04.png)

[Particle Metaballs in Unity using URP and Shader Graph Part 1 – Bronson Zgeb](https://bronsonzgeb.com/index.php/2021/02/27/particle-metaballs-in-unity-using-urp-and-shader-graph-part-1/)

- メタボールを、URPとShader Graphを用いて実装するチュートリアル。Part1から3まで公開されている。
    - [Particle Metaballs in Unity using URP and Shader Graph Part 1 – Bronson Zgeb](https://bronsonzgeb.com/index.php/2021/02/27/particle-metaballs-in-unity-using-urp-and-shader-graph-part-1/)
    - [Particle Metaballs in Unity using URP and Shader Graph Part 2 – Bronson Zgeb](https://bronsonzgeb.com/index.php/2021/03/06/particle-metaballs-in-unity-using-urp-and-shader-graph-part-2/)
    - [Particle Metaballs in Unity using URP and Shader Graph Part 3 – Bronson Zgeb](https://bronsonzgeb.com/index.php/2021/03/13/particle-metaballs-in-unity-using-urp-and-shader-graph-part-3/)
- Shader GraphのCustom Functionを利用して、メタボールを実装している。
- Part2以降では、ParticleSystemを用いてメタボールを描画する方法、ライティングの実装、PBRベースのライティングについて説明している。

## Tackling profiling for mobile games with Unity and Arm

![](./07.png)

[Tackling profiling for mobile games with Unity and Arm](https://blogs.unity3d.com/2021/03/11/tackling-profiling-for-mobile-games-with-unity-and-arm/)

- モバイルゲームのプロファイリングを、Unityの各種プロファイラ及び[Arm Mobile Studio](https://developer.arm.com/tools-and-software/graphics-and-gaming/arm-mobile-studio)を用いて行い、最適化する方法の紹介記事。
- Arm Mobile Studioでは、Unityのプロファイリングツールよりより詳細なプロファイリングが行えることを説明している。
    - Performance Advisorでは大まかなパフォーマンスを提供し、大雑把にどこにボトルネックがあるか発見できる。またその問題をどのように解消するべきかも示してくれる。
    - Mali Offline Compilerはシェーダーの分析及びパフォーマンス向上の提案をしてくれる（例えば精度を落とすことでリーズナブルにパフォーマンスを向上させられるなど）。
    - Graphics Analyzerはフレームデバッガーをよりリッチにしたもので、ジオメトリやレンダーテクスチャ、フレームバッファなど詳細を確認できる。

## Performance optimization tips: Physics in Unity

![](./06.png)

[Performance optimization tips: Physics in Unity | Tutorial - YouTube](https://www.youtube.com/watch?v=pTz3LMQpvfA)

- Physicsの最適化についてのYoutubeビデオ。10分程度の動画だが、Physics最適化について網羅的に紹介している。
- Fixed Timestepやメッシュコライダー最適化（Cooking Optionsなど）、Auto Transform Sync、Reuse Collision Callbackとその挙動、Static Collider、NonAllocなクエリなどについて説明している。
