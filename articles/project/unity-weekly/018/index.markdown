---
type: "unity-weekly"
title: "Unity Weekly #018"
date: "2021-06-22T09:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

## Unity道場2021.1

![](./b7badfe14800ea2363736536e03150b0231ae35f.png)

[Unity道場 2021.1 - Unity Meetup](https://meetup.unity3d.jp/jp/events/1277)

2021/06/17に「Unity道場2021.1」がオンラインで開催されました。

[YouTube](https://www.youtube.com/watch?v=GD_WnUzjl-k)上で当日のアーカイブを閲覧できます。
また、Unity Learning Materials上でそれぞれの講演の動画およびスライドを確認できます。

- [Unity新機能まとめ2021 | Unity Learning Materials](https://learning.unity3d.jp/7218/)
- [ごっこランドに於ける Addressables 活用事例のご紹介 | Unity Learning Materials](https://learning.unity3d.jp/7220/)
- [async/await,disposableを使って素直で読みやすいコードを書く | Unity Learning Materials](https://learning.unity3d.jp/7224/)
- [インディーゲーム開発の現状と未来 2021 | Unity Learning Materials](https://learning.unity3d.jp/7241/)
- [FANTASIANの明日使えない特殊テクニック教えます | Unity Learning Materials](https://learning.unity3d.jp/7244/)
- [Unityの基本機能を使用したグラフィック向上テクニック | Unity Learning Materials](https://learning.unity3d.jp/7251/)
- [「原神」におけるコンソールプラットフォーム開発 | Unity Learning Materials](https://learning.unity3d.jp/7260/)


## The Secret Behind Valve’s Flickering Lights

![](./flickering-lights.png)

[The Secret Behind Valve's Flickering Lights - Alan Zucconi](https://www.alanzucconi.com/2021/06/15/valve-flickering-lights)

- この記事では、「Quake」や「Half-Life」などで見られるライトのちらつき効果の起源と、それらのゲームで実際に利用されているちらつき効果の実装方法について説明しています。
- 「Quake」や「Half-Life」などのちらつき効果実装で実際に利用されている`lightstyle`という関数の説明と、どのようにちらつき効果を定義するかについて解説しています
- 上記の関数を実装したコンポーネントが入ったunitypackageを記事中からダウンロードできます。


## Archery combat mechanic in 2D pixel-perfect Unity game

![](./archery-main-feature-image-at-pav-creations.png)

[Archery combat mechanic in 2D pixel-perfect Unity game - Pav Creations](https://pavcreations.com/archery-combat-mechanic-in-2d-pixel-perfect-unity-game/)

- この記事では、2Dゲームでアーチェリーのような武器を用いた戦闘システムを実装する方法について解説しています。
- プレイヤーのアーチェリー発射準備モーションにアニメーションイベントを仕込み、そのイベントをベースにキャラクターやHUDの制御を行っています。
- 発射する矢に `CircleCollider2D` をアタッチして当たり判定を取ります。また、`RigidBody2D` により矢の物理挙動をシミュレーションしています。

## Tutorial: How to Make a Game Like Space Invaders 

![](./challenge.gif)

[Unity Tutorial: How to Make a Game Like Space Invaders | raywenderlich.com](https://www.raywenderlich.com/21535339-unity-tutorial-how-to-make-a-game-like-space-invaders)

- この記事は、スペースインベーダーのようなゲームをUnityで実装するためのチュートリアルです。
- プレイヤーおよびエネミーの実装から配置、レーザーの発射の実装、エフェクトや効果音の実装、ゲームロジック、画面遷移までの、ゲームの実装方法をひととおり解説しています。


## GPU Mesh Voxelizer

![](./2021-06-19-13_07_41-Clipboard.png)

[GPU Mesh Voxelizer Part 4: Mesh Translation and Rotation – Bronson Zgeb](https://bronsonzgeb.com/index.php/2021/06/13/gpu-mesh-voxelizer-part-4/)
[GPU Mesh Voxelizer Part 5: Filling the inner voxels – Bronson Zgeb](https://bronsonzgeb.com/index.php/2021/06/19/gpu-mesh-voxelizer-part-5/)

- BronsonさんによるGPU Mesh Voxelizerに関する連載のパート4とパート5です。過去記事はこちらから確認できます: [パート1](https://bronsonzgeb.com/index.php/2021/05/22/gpu-mesh-voxelizer-part-1/)、[パート2](https://bronsonzgeb.com/index.php/2021/05/29/gpu-mesh-voxelizer-part-2/)、[パート3](https://bronsonzgeb.com/index.php/2021/06/05/gpu-mesh-voxelizer-part-3-render-tons-of-voxels-with-drawmeshinstancedindirect/)
- [パート4](https://bronsonzgeb.com/index.php/2021/06/13/gpu-mesh-voxelizer-part-4/)では、回転と平行移動をサポートします。Unityの座標システムに則って、このシステムが保持するローカル座標をもとにボクセルをワールド座標で描画します。また、コンピュートシェーダーの構造体を用いてリファクタリングを実施します。
- [パート5](https://bronsonzgeb.com/index.php/2021/06/19/gpu-mesh-voxelizer-part-5/)では、ボクセル化されたメッシュの内側を塗りつぶします。レイとトライアングルの交差にはMöller-Trumboreアルゴリズムを用います。


## Deferred Frag Shaders

![](./ScreenHunter12216.png)

[Deferred Frag Shaders | Team Dogpit on Patreon](https://www.patreon.com/posts/deferred-frag-52476692)

- この記事では、Unityの提供する遅延レンダリングパスと互換性のあるフラグメントシェーダーの実装方法について説明しています。
- 既存の「Unlit Shader」テンプレートから作成したシェーダーを、デバッグオーバービューなどを用いてデバッグしながら改良して、遅延シェーディングに対応させます。
- フラグメントシェーダーでGBufferに値を書き込む方法について解説しています。また、既存のフォワードシェーディングとも互換性を保つためのパスの記載方法と`#pragmamulti_compile_fwdbase`についても言及しています。
