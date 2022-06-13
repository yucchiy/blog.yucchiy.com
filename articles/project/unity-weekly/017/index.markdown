---
type: "unity-weekly"
title: "Unity Weekly #017"
date: "2021-06-08T09:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---


## Arm の新しい Unity 用 Mobile Studio パッケージによる進化したモバイルパフォーマンス分析

![](2021-06-08-04-11-37.png)

[Arm の新しい Unity 用 Mobile Studio パッケージによる進化したモバイルパフォーマンス分析 | Unity Blog](https://blog.unity.com/ja/games/enhanced-mobile-performance-analysis-with-arms-new-mobile-studio-package-for-unity)

- この記事ではArm CPU および Mali GPU を搭載したモバイルデバイスのパフォーマンス計測ツールである[Arm Mobile Studio](https://developer.arm.com/tools-and-software/graphics-and-gaming/arm-mobile-studio)の紹介と、UnityでArm Mobile StudioのStreamlineに独自のアノテーションを組み込むためのUnityパッケージの導入方法について説明しています。
- Unityパッケージを用いてC#からStreamlineにマーカーアノテーションを設定する方法からリージョンやチャンネルの設定方法、カスタムアクティビティマップを組み込み方法について解説しています。
- また組み込んだアノテーションの確認方法と、リリースビルドからこのパッケージを取り除く方法についてもとりあげています。


## Level of Detail (LOD) Tutorial for Unity 2021+

![](2021-06-08-04-29-12.png)

[Level of Detail (LOD) Tutorial for Unity 2021+ | The Gamedev Guru](https://thegamedev.guru/unity-gpu-performance/lod-level-of-detail/)

- この記事では、UnityでLODを扱うの方法について解説しています。
- LODを作成する方法の紹介からUnityでLODを設定する方法、UnityのLODのプロジェクト設定について説明しています。
- また、LOD Poppingを回避するためのLODのクロスフェード手法の紹介とその設定方法、LODとライトマップ・ドローコールバッチ処理・オクルージョンカリングとの互換性、LODを用いたドローコールの削減方法についても取り上げています。


## Gotanda.unity #18

- Gotanda.unityの18回目が5/26に開催されました。アーカイブは[こちら](https://www.youtube.com/watch?v=p184TJ5L_88)から確認できます。
- [LT#1 (スポンサー枠) Mikito Yoshiya: 使われやすいライブラリのための「コ・ツ」〜社内Unityライブラリの思想と設計〜](https://www.youtube.com/watch?v=p184TJ5L_88&t=350s)
    - SimpleとEasyは違うということと、ライブラリを使われやすくするためにはSimpleを保つことが重要である
    - 「コンセプトを明確・責務を１つに」、「依存は厳選」、「抽象化し拡張に対して開く」などを気をつけることでSimpleを保つことができる
- [LT#2 tetsu: 個人開発でも使ってみようAddressable Asset System](https://www.youtube.com/watch?v=p184TJ5L_88&t=875s)
    - 「ビルトインとダウンロードの切り替え」、「CRI ADX2のアセット配信」、「Unity Cloud Buildでのリソースビルド」、「開発時のみのアセットの扱い方」などのAddressables実装について紹介
- [LT#3 yutopp: Unityで使えるglTFライブラリを作る話](https://www.youtube.com/watch?v=p184TJ5L_88&t=1385s)
    - UnityでglTFライブラリを作った話
    - シリアライザ自体は.NET単体（.NET Standard 2.0）で実装してUnity非依存にしている。また、そのためのプロジェクト設定などについての紹介
    - UnityとglTFでは座標系が違うので変換が必要。ただしskinningのinverseBindMatricesがアフィン変換行列なため、(exportでは)inverseBindMatricesが単位行列になるようにmeshに焼き込むことで解決した。
    - [yutopp/VGltf: A glTF and GLB serializer/deserializer library written in pure C# with Unity Editor/Runtime support](https://github.com/yutopp/VGltf)
- [LT#4 Cova@8bitdots: Unityサウンドでできる閉所表現](https://www.youtube.com/watch?v=p184TJ5L_88&t=1992s)
    - ルーティング（BUS）を考えてサウンドを設計する方法とAudioMixerを用いたUnityでの実現方法、実際にサウンドエフェクトを実装する方法の紹介
- [LT#5 らかん: 初めて1WeekGameJamに参加した話](https://www.youtube.com/watch?v=p184TJ5L_88&t=2517s)
    - 1WeekGameJamを通してのゲーム開発のち県の共有（モーション作成、UniRxによるGameStateの管理、Cinemachineによるカメラ制御など）
- [LT#6 (スポンサー枠) Kenta Nagai: Addressablesで大量のリソース管理・ 困りどころと解消法](https://www.youtube.com/watch?v=p184TJ5L_88&t=3360s)
    - 大量のアセットをAddressablesで管理する際の注意点の紹介。アセットの依存関係を最小限にする、命名規則をしっかり決めるてシートで管理する。また運用時での問題について事例共有とその解決方法について
- [LT#7 KENTO: withARハッカソンに参加した話](https://www.youtube.com/watch?v=p184TJ5L_88&t=4030s)
    - ARアプリ開発の知見共有。位置合わせの手法、NearClipへの対応、ScaniverseによるARアプリデバッグの効率化、スキャンエフェクトの実装
- [LT#8 ぶんぶん: VR自動テストの導入によるプロジェクトの改善と、新卒一年目の苦悩](https://www.youtube.com/watch?v=p184TJ5L_88&t=4680s)
    - AirtestとJenkinsを用いてVRアプリケーションに自動テストを導入した知見共有。
- [LT#9 小林拓: ネイティブアプリ作成のためのUI EditorツールとしてのUnity](https://www.youtube.com/watch?v=p184TJ5L_88&t=5272s)


## GPU Mesh Voxelizer Part3: Render tons of voxels with DrawMeshInstancedIndirect

![](2021-06-08-04-40-43.png)

[GPU Mesh Voxelizer Part 3: Render tons of voxels with DrawMeshInstancedIndirect – Bronson Zgeb](https://bronsonzgeb.com/index.php/2021/06/05/gpu-mesh-voxelizer-part-3-render-tons-of-voxels-with-drawmeshinstancedindirect/)

- この記事はBronsonさんによるGPU Mesh Voxelizerに関する連載のパート3で、ボクセル化されたデータを`DrawMeshInstancedIndirect`APIを用いて描画する方法について説明しています。過去記事はこちらから確認できます: [パート1](https://bronsonzgeb.com/index.php/2021/05/22/gpu-mesh-voxelizer-part-1/)、[パート2](https://bronsonzgeb.com/index.php/2021/05/29/gpu-mesh-voxelizer-part-2/)
- 無数のボクセルメッシュを描画する必要があるため、1ポクセルサイズの小さな立方体メッシュを作成して、そのメッシュを`DrawMeshInstancedIndirect`APIを用いて効率的に描画しています。
- また、このメッシュをGPU Instancingを用いて描画するためのサーフェイスシェーダーの実装方法についてもとりあげています。


## How to make a chunk system in Unity using addressables

![](./1_brpL7aeENv_8YVdp4QY-TA.gif)

[How to make a chunk system in Unity using addressables | by Anthelme Dumont | May, 2021 | Medium](https://anthelme-dumont.medium.com/how-to-make-a-chunk-system-in-unity-using-addressables-aff36956c546)

- この記事では、AddressablesとCullingGroup APIを用いてMinecraftのchunksのようなシステムを実現するための1手法について解説しています。
- chunk単位でAddressablesのアセットを分割して`AssetReference`を持ち、`CullingGroup`および`BoundingSphere`を用いてカリングの状態をもとにアセットのロードとアンロードを行っています。


## Cloud Content Delivery を使ってライブゲームコンテンツをデプロイする方法

![](2021-06-08-05-07-37.png)

[Cloud Content Delivery を使ってライブゲームコンテンツをデプロイする方法 | Unity Blog](https://blog.unity.com/ja/games/how-to-deploy-live-game-content-using-cloud-content-delivery)

- この記事では、Unityが提供するコンテンツ配信システムであるCloud Content Delivery（CCD）について、その紹介と利用方法について説明しています。
- Addressablesを導入しているプロジェクトではかんたんにCCDと連携しコンテンツをCDNにアップロードし、配信できることを紹介しています。
- デモプロジェクトは[こちら](https://github.com/UnityTechnologies/LoadyDungeons)からダウンロードできます。
