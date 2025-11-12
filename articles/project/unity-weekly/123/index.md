---
type: unity-weekly
title: Unity Weekly 123
description: >-
  2023/05/29週のUnity Weeklyです。Unity 2022 LTS、テクスチャデータアクセスAPI、モントリオール Developer
  Day 2023などのついてまとめています。
pubDatetime: 2023-05-28T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity 2022 LTS が 6 月に公開されます

[Unity 2022 LTS が 6 月に公開されます | Unity Blog](https://blog.unity.com/ja/engine-platform/unity-2022-lts-is-coming-in-june)
[Unity 2022 LTS is coming in June | Unity Blog](https://blog.unity.com/engine-platform/unity-2022-lts-is-coming-in-june)

Unity 2022 LTSが6月にリリースされる予定です。この記事では、2022 LTSの主要なアップデートを紹介しています。

また、2022 LTSのアップデートを紹介する数時間にわたるライブストリーミングが[2023/06/22に開催予定](https://create.unity.com/2022-lts-interest-sign-up)とのことです。

### Accessing texture data efficiently 

[Accessing texture data efficiently | Unity Blog](https://blog.unity.com/engine-platform/accessing-texture-data-efficiently)

UnityのテクスチャデータにアクセスするためのAPIが、CPU・GPU間でどのように働くのか、それぞれのAPIの特徴とトレードオフについて解説しています。

### Montreal Developer Day 2023

[Official - Montreal Developer Day 2023 - Unity Forum](https://forum.unity.com/threads/montreal-developer-day-2023.1439842/)

2023/06/23にモントリオールでDeveloper Day 2023が開催されます。セッションの詳細や参加登録は下記リンクから確認できます。

[Journée des développeurs Unity : MontréalUnity Developer Day: Montreal](https://unitydeveloperdaymontreal.splashthat.com/)

## Articles

### Input Systemからマウスカーソルを操作する

[【Unity】Input Systemからマウスカーソルを操作する | ねこじゃらシティ](https://nekojara.city/unity-input-system-virtual-mouse)

Input SystemのVirtual Mouseを用いたマウスカーソルの設定から、CanvasのScale ModeがConstant Pixel以外を指定した場合に発生する座標の位置ずれ問題を解消するためのCustom Processorの実装について紹介しています。

### Unityシーン容量削減勉強会 第2回 ～テクスチャ編～ 

[Unityシーン容量削減勉強会 第2回 ～テクスチャ編～ - Qiita](https://qiita.com/segur/items/4559edc2e0d4353204d9)

Unityのメモリ使用量を削減するためのテクスチャの設定についてまとめています。

### キャラクタートゥーンシェーダの表現手法をまとめる その２(明暗境界線の彩度上げ)

[【Unity URP】キャラクタートゥーンシェーダの表現手法をまとめる その２(明暗境界線の彩度上げ)](https://zenn.dev/inpro/articles/6e380445a3f98f)

キャラクターのトゥーンシェーダー表現として、明暗境界線の彩度上げの表現の実用例と実装の考え方についてそれぞれ紹介しています。

### MultiColumnTreeViewを使ってマルチカラムのツリービューを実装する

[【Unity】【UI Toolkit】TreeViewを使ってシングルカラムのツリービューを実装する - LIGHT11](https://light11.hatenadiary.com/entry/2023/05/23/192515)
[【Unity】【UI Toolkit】MultiColumnTreeViewを使ってマルチカラムのツリービューを実装する - LIGHT11](https://light11.hatenadiary.com/entry/2023/05/24/190709)

UI ToolkitのTreeViewやMultiColumnTreeViewｗ用いて、シングルカラムやマルチカラムのツリービューを実装する方法について紹介しています。

### 2Dで楕円や多角形のコライダーを実装する

[2Dで楕円や多角形のコライダーを実装する【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/EllipseCollider2D)

`PolygonCollider2D`を用いて、2D上で楕円や多角形のコライダーを実装する方法について紹介しています。

## Repositories

### Unity-Technologies/UnityTextureAccessApiExamples

[Unity-Technologies/UnityTextureAccessApiExamples: Example project for Unity 2020.1+ texture data access APIs](https://github.com/Unity-Technologies/UnityTextureAccessApiExamples)

Unity 2020.1以降で利用できる`Texture2D.GetPixelData`とその周辺のAPIやC# Jobによるテクスチャへのアクセスの方法をまとめたサンプルプロジェクト。

### witchpot-studio/stable-diffusion-for-unity

[witchpot-studio/stable-diffusion-for-unity: Plugin to use Stable Diffusion in Unity](https://github.com/witchpot-studio/stable-diffusion-for-unity)

Stable Diffusion Web UIをUnityから扱えるようにしたアセット。

### NewBloodInteractive/com.newblood.lighting-internals

[NewBloodInteractive/com.newblood.lighting-internals: Provides access to internal lighting APIs.](https://github.com/NewBloodInteractive/com.newblood.lighting-internals)

インターナルなライトAPIへのアクセスを提供するライブラリ。
