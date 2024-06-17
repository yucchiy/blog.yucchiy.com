---
type: "unity-weekly"
title: "Unity Weekly 177"
description: "2024/06/17週のUnity Weeklyです。Unityアニメーションe-book、URP 3D sample deep dive webinarなどについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-06-17T00:00:01"
---

## Unity Officials

###  Our first-ever guide about animation in Unity

[Our first-ever guide about animation in Unity | Unity Blog](https://blog.unity.com/games/first-guide-animation-in-unity)

Unityのアニメーションに関するe-book「[The definitive guide to animation in Unity](https://unity.com/ja/resources/definitive-guide-animation-unity-2022-lts-ebook)」が公開されました。

このe-bookはアーティストやテクニカルアーティスト向けに、MayaやBlenderからUnityへアニメーションをインポートする方法からUnityのアニメーションの各種機能、Animation Riggingパッケージを用いたリグやIK、CinemachineやTimelineを用いたカットシーンでのアニメーションの制御などを解説しています。

このe-bookの公開に合わせて、「[How to work with humanoid animations in Unity](https://www.youtube.com/watch?v=s5lRq6-BVcw)」というチュートリアルも公開しています。

### URP 3d sample deep dive webinar: Configuring for VR

[Official - URP 3d sample deep dive webinar: Configuring for VR - Unity Forum](https://forum.unity.com/threads/urp-3d-sample-deep-dive-webinar-configuring-for-vr.1603107/)

URPのVRプロジェクト向けのウェビナーが2024/06/26  12:00 pm ET / 9:00 am PTに開催されます。

URPの3Dサンプルプロジェクトの作者が講師として、VR開発の要点やプロジェクトのセットアップ、Meta Questでの最適化やパフォーマンスチューニングについて解説する予定です。

ウェビナーへの登録は、[こちらのリンク](https://create.unity.com/urp-3d-sample-configure-vr-project)から行うことができます。

## Articles

### AddressableによりWebGLゲームのクラッシュ率が改善した話

[AddressableによりWebGLゲームのクラッシュ率が改善した話 - Mirrativ Tech Blog](https://tech.mirrativ.stream/entry/2024/06/12/104608)

Addressablesの `AssetReferenceGameObject` を介してアセットを参照・ロードすることで、（直接アセットを `SerializeField` で保持する実装と比べて利用していないアセットの読み込みを減らすことで）メモリ使用量を削減し、WebGLビルドでのクラッシュ率を改善した事例について紹介しています。

### 球体上に波エフェクトを実装する

[球体上に波エフェクトを実装する](https://zenn.dev/meson/articles/bubble-wave-effect)

シャボン玉のような色の見た目をした球体上の表現と、指定した位置を起点に波エフェクトを適用する方法についてそれぞれ解説しています。

### ShaderGraphのTargetを追加する

[ShaderGraphのTargetを追加する #Unity - Qiita](https://qiita.com/haw2fregel/items/cad7d2b2abfd2dc5730e)

ShaderGraphに対してasmrefを介して独自のTargetを追加する方法を紹介しています。

### UnityNetcodeでマルチプレイヤーを試してみる記事

- [[Unity]UnityNetcodeでマルチプレイヤーを試してみる記事 #NetCode - Qiita](https://qiita.com/kazuma_f/items/e8b0fd9bb6a8069f3d36)
- [[Unity]UnityNetcodeのマルチプレイヤーで位置を同期してみる #NetCode - Qiita](https://qiita.com/kazuma_f/items/bd57bc2c18fd0dfa9c71)
- [[Unity]UnityNetcodeのマルチプレイヤーで変数を同期してみる #NetCode - Qiita](https://qiita.com/kazuma_f/items/907b01705e78bd199fdd)

Netcodeによるマルチプレイヤーの実装についていくつかの機能の検証を紹介しています。

### 2Dゲームで対象を追いかける動き(Steering Behaviour)

[【Unity】2Dゲームで対象を追いかける動き(Steering Behaviour) #C# - Qiita](https://qiita.com/mojomojopon/items/5b1905d46050e7e52b76)

2Dゲームで、対象を追いかける動きを実装するアルゴリズムについてその実装を紹介しています。

### Riderでnamespaceのフォルダ粒度を変える

[Riderでnamespaceのフォルダ粒度を変える](https://zenn.dev/qemel/articles/ed2dfde5bb2f04)

Riderでnamespaceから無視したいフォルダーを設定する方法について紹介しています。

### Particle Plexus

- [Unity Tutorial: Particle Plexus (Part 1)](https://mirzabeig.substack.com/p/unity-tutorial-particle-plexus-part-1)
- [Unity Tutorial: Particle Plexus (Part 2)](https://mirzabeig.substack.com/p/unity-tutorial-particle-plexus-part-2)

Plexusと呼ばれるエフェクトを実装について、その基本的なアルゴリズムから実装方法までを紹介しています。

### 学園アイドルマスターのバックグラウンド再生が凄い

[学園アイドルマスターのバックグラウンド再生が凄い　という話 #iOS - Qiita](https://qiita.com/ryo_hara_/items/34381dee6f5aff54cee1)

学園アイドルマスターにおける音楽のバックグラウンド再生の実装について考察しています。
