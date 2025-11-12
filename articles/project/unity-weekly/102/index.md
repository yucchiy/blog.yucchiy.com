---
type: unity-weekly
title: Unity Weekly 102
description: >-
  2023/01/02週のUnity Weeklyです。Unity
  UI開発のeBook、Questパススルー、URPモーションブラー、Unity2022でのProfilerアップデート、MemoryPackなどについて取り上げています。
pubDatetime: 2023-01-01T15:00:00.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### すべてがここに：Unity の UI 開発に関する究極のガイド 

[すべてがここに：Unity の UI 開発に関する究極のガイド | Unity Blog](https://blog.unity.com/ja/games/ultimate-guide-to-creating-ui-interfaces)

UnityのUI開発のためのeBook「[User interface design and implementation in Unity](https://resources.unity.com/games/user-interface-design-and-implementation-in-unity)」が公開され、
またこのeBookのためのデモプロジェクト「[UI Toolkit sample - Dragon Crashers](https://assetstore.unity.com/packages/essentials/tutorial-projects/ui-toolkit-sample-dragon-crashers-231178)」も合わせて公開されました。

この記事ではUI制作から実装について基礎知識からワイヤーフレーム制作、Unity UI使いこなしのためのヒントや最適化テクニック、UI Toolkitなどについての情報やリソースなど幅広く紹介しています。

## Articles

###  QuestのパススルーとVR Room機能を利用してMixed Realityを実現する

[QuestのパススルーとVR Room機能を利用してMixed Realityを実現する - e.blog](https://edom18.hateblo.jp/entry/2023/01/01/162510)

Questのパススルー機能の設定と利用方法からVR Room機能で設定した壁や壁をUnityのシーン要素として扱う方法、設定した壁を透過させてVRのように見せる方法についてなど紹介しています。

### URPのモーションブラー実装を読んでみる

[URPのモーションブラー実装を読んでみる](https://zenn.dev/r_ngtm/articles/urp-motion-blur)

URP（Universal Render Pipeline）に実装されているモーションブラーの大まかな仕組みの紹介と、該当シェーダーのうちをとくに重要な`GatherSample`と`DoMotionBlur`メソッドを重点的に解説しています。

### MemoryPackでシリアライズ・デシリアライズをカスタマイズするいくつかの方法

[MemoryPackでシリアライズ・デシリアライズをカスタマイズするいくつかの方法 | Yucchiy's Note](https://blog.yucchiy.com/2023/01/memorypack-custom-serialize-deserialize/)

MemoryPackで独自型のシリアライズとデシリアライズをカスタマイズする方法について紹介しています。

### How to use Rule Tile in Unity 2022

[How to use Rule Tile in Unity 2022 — Sunny Valley Studio](https://www.sunnyvalleystudio.com/blog/rule-tile-in-unity-2022)

2D Tilemap Extrasパッケージを導入することで利用できるRule Tileの設定方法および利用方法について紹介しています。

### Unity2022でのProfiler更新周り

[Unity2022でのProfiler更新周り｜黒河優介｜note](https://note.com/wotakuro/n/ndfe69d11324a)

Unity2022でのProfiler周辺のアップデートとして、FrameTimingManagerのアップデート・MemoryProfiler v1.0・Objectのインスタンス化や削除した際の情報がProfilerに乗った件などについて紹介しています。

### Input Systemでガイド用のボタンアイコンを出す

[【Unity】Input Systemでガイド用のボタンアイコンを出す](https://zenn.dev/ruccho/articles/9b9f7fd63b921c)

Input Systemで操作に対して説明を出すガイド用のボタンアイコン表示を、`InputAction`の情報をもとに表示する方法について紹介しています。

### uLipSync で Animator を使ったリップシンクができるように更新してみた

[uLipSync で Animator を使ったリップシンクができるように更新してみた - 凹みTips](https://tips.hecomi.com/entry/2022/12/28/233803)

ブログ著者が開発するuLipSyncのAnimator対応について、その概要と`uLipSyncAnimator`コンポーネントの設定、開発中にハマった`Animator`の挙動についてまとめています。

### エディタ拡張でメニューバーにチェックを付ける(Menu.SetChecked)

[【Unity】エディタ拡張でメニューバーにチェックを付ける(Menu.SetChecked) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/01/02/120000)

エディター拡張でメニューバーを拡張する際に、「Burst > Enable Burst Compilation」のような、メニューバー横にチェックをつける方法について紹介しています。

### UnityのShaderGraphでインクシェーダーを作る

[UnityのShaderGraphでインクシェーダーを作る | gam0022.net](https://gam0022.net/blog/2022/12/25/unity-ink-shader/)

ShaderGraphを用いてスプラトゥーンのインクを表現するシェーダーを実装する方法について、各ノードの解説を交えながら説明しています。

### Timelineの拡張をわかりやすく解説してみる

[【アドカレ】Timelineの拡張をわかりやすく解説してみる - YAMADA TAISHI’s diary](https://orotiyamatano.hatenablog.com/entry/TimeLine)

Timelineでカスタムトラックを実装する際に利用する `PlayableTrack`・`PlayableMixer`・`PlayableClipAsset`および`PlayableClipBehaviour`についてそれぞれの役割の紹介とスクリプトの記述方法を解説しています。

### Unity Netcode for GameObjectsを使ったオンラインマルチプレイゲーム開発Tips

[Unity Netcode for GameObjectsを使ったオンラインマルチプレイゲーム開発Tips【Advent Calendar 12/23】｜Colorful Palette](https://media.colorfulpalette.co.jp/n/n08799dd4ae7e?magazine_key=m753f507dae79)

Unity Netcode for GameObjectsを用いて簡単なマルチプレーヤーゲームを実装する際の開発Tipsを紹介しています。

### TextMeshProのOutlineを使ってみた

[TextMeshProのOutlineを使ってみた - KAYAC engineers' blog](https://techblog.kayac.com/2022-group-calendar-textmesh-pro-outline)

TextMeshProのアウトライン描画を使う方法と、Material Presetを用いてアウトラインをつけたいテキスト用のプリセットを作成し設定する方法とこれをMaterial Presetを用いず`IMaterialModifier`を用いてマテリアルを新しく生成することで対応する方法について紹介しています。

## Repositories

### AKGWSB/RealTimeAtmosphere

[AKGWSB/RealTimeAtmosphere: real-time atmosphere rendering in Unity URP](https://github.com/AKGWSB/RealTimeAtmosphere)

URPによるリアルタイムな大気のレンダリング。

### AmplifyOcclusion-URP

[neon-age/AmplifyOcclusion-URP: Amplify Occlusion V2 ported to URP 2022.2](https://github.com/neon-age/AmplifyOcclusion-URP)

著者が以前作成した[Amplify Occlusion](https://github.com/AmplifyCreations/AmplifyOcclusion)のURP実装。

### Safe Area Layout

[gilzoide/unity-safe-area-layout: uGUI layout group that makes children respect the Safe Area. It drives children's anchors and supports LayoutElement.ignoreLayout](https://github.com/gilzoide/unity-safe-area-layout)

自身の子オブジェクトをSafe Areaに則ったレイアウトを行うためのuGUIの[Layout Group](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/UIAutoLayout.html#layout-groups)実装。

### sxm-sxpxxl/procedural-mesh-generator

[sxm-sxpxxl/procedural-mesh-generator: A simple Unity editor tool of procedural mesh generating, modifying and exporting.](https://github.com/sxm-sxpxxl/procedural-mesh-generator)

プロシージャルなメッシュ生成から更新、エクスポートまでを行えるエディター拡張。
