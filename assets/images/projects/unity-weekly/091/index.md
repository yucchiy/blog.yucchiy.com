---
type: unity-weekly
title: >-
  Level up your code with game programming patterns、MemoryPack - Unity Weekly
  091
description: >-
  2022/10/17週のUnity Weeklyです。Level up your code with game programming
  patterns、MemoryPackのUnity対応などについて取り上げました。
pubDatetime: 2022-10-16T06:00:00.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### ゲームプログラミングパターンでコードをレベルアップさせよう

[ゲームプログラミングパターンでコードをレベルアップさせよう | Unity Blog](https://blog.unity.com/ja/games/level-up-your-code-with-game-programming-patterns)

Unityプロジェクトでスケーラブルなアーキテクチャを構築するためのプラクティスとして「[Level up your code with game programming patterns](https://resources.unity.com/games/level-up-your-code-with-game-programming-patterns)」というebookが公開されました。



Unityでのゲーム開発における設計として、KISS（keep it simple, stupid）やSOLID原則、デザインパターンやMVPについて触れています。



ebookと合わせて[サンプルプロジェクト](https://github.com/Unity-Technologies/game-programming-patterns-demo)も公開しています。

## Articles

### Transparent and Crystal Clear: Writing Unity URP Shaders with Code, Part 3

[Transparent and Crystal Clear: Writing Unity URP Shaders with Code, Part 3 | by NedMakesGames | Sep, 2022 | Medium](https://nedmakesgames.medium.com/transparent-and-crystal-clear-writing-unity-urp-shaders-with-code-part-3-f6ccd6686507)

URP（Universal Render Pipeline）で独自のシェーダーを記述する方法を紹介するブログシリーズの第3段で、本記事では Transparent の扱いかたやアルファブレンド、カットオフなどについて詳細に解説しています。



本記事はYoutubeにて[動画も公開](https://www.youtube.com/watch?v=4zw6Vq5CzLY)されています。

### Unityの設定を一括で切り替えるContextSwitcherの実装

[Unityの設定を一括で切り替えるContextSwitcherの実装 - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/2022/10/12/212056)

アプリビルドで開発とリリースで設定を一部切り替えたいなどの用途のために自社で開発しているEnvironmentContextSwitcher について、利用用途や設計、実例について紹介しています。

### Unityで開発用に「どこでもセーブ」を実現してみる

[Unityで開発用に「どこでもセーブ」を実現してみる - きゅぶろぐ](https://blog.kyubuns.dev/entry/2022/10/15/215215)

現在のシーンの状態を保存・復元できる「どこでもセーブ」機能の試作について紹介しています。



[Unity Runtime Scene Serialization](https://docs.unity3d.com/Packages/com.unity.runtime-scene-serialization@0.6/manual/index.html) を用いたシーンの保存・復元や、シーン中のアセット参照の復元方法などそれぞれ解説しています。

### 背景を低負荷かつ良い感じにボカす Translucent Image

[背景を低負荷かつ良い感じにボカす Translucent Image【Unity】【uGUI】【アセット】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Translucent_Image?utm_source=feed)

uGUIで背景を低負荷でぼかすことのできる[Translucent Image](https://assetstore.unity.com/packages/tools/gui/translucent-image-fast-ui-background-blur-78464?aid=1101lGoY&utm_campaign=unity_affiliate&utm_medium=affiliate&utm_source=partnerize-linkmaker)について、その基本的な使い方を紹介しています。

### TextMeshProで一部の文字だけ精度を上げて綺麗に描画したい時の工夫

[【Unity】TextMeshProで一部の文字だけ精度を上げて綺麗に描画したい時の工夫 - うどんてっくメモ](https://myudon.hatenablog.com/entry/2022/10/16/180400)

TextMeshProで、一部文字だけ「Sampling Point Size」を大きく設定したFontAssetを利用しつつ、フォールバックに普段使いのFontAssetを利用することで、フォントテクスチャのサイズを節約しつつ一部文字だけ綺麗に表示する工夫について紹介しています。

## Repositories

### MemoryPack

[Cysharp/MemoryPack: Zero encoding extreme performance binary serializer for C# and Unity.](https://github.com/Cysharp/MemoryPack)

C# / .NET に特化したバイナリー形式(メモリー表現のまま)のシリアライズを行うハイパフォーマンスなシリアライザー。



[v1.4.0](https://github.com/Cysharp/MemoryPack/releases/tag/1.4.0)では .NET Standard 2.1（.NET 5, 6とUnity）がサポートされ、2021.2以降のUnityでも利用できるようになりました。

### UnityDataTools

[Unity-Technologies/UnityDataTools: Experimental tools and libraries for reading and analyzing Unity data files.](https://github.com/Unity-Technologies/UnityDataTools)

UnityFileSystemApiでなにができるのかについて紹介するコマンドラインツールセット。



UnityFileSystemApiはWebExtractとbinary2textというUnityが内部で利用しているツールの機能を公開することを目的にしていて、WebExtractはAssetBundleの内容を確認でき、binary2textはSerializeFileの内容を人が読みやすい形式に変換できます。

### UnityLauncherPro

[unitycoder/UnityLauncherPro: Unity Hub Alternative Project Launcher with time saving features!](https://github.com/unitycoder/UnityLauncherPro)

Unity Hubの代替ツールのC#実装。

### Randomation Vehicle Physics

[JustInvoke/Randomation-Vehicle-Physics: Vehicle physics system for the Unity engine.](https://github.com/JustInvoke/Randomation-Vehicle-Physics)

Unity向けの車両物理システム。



