---
type: "unity-weekly"
title: "CoreCLR、SYNC2022 - Unity Weekly 093"
description: "2022/10/31週のUnity Weeklyです。"
tags: ["Unity Weekly","Unity"]
date: "2022-10-30T15:00:00"

---

## Officials

## SYNC 2022

SYNC 2022が2022/10/25〜2022/10/26に開催されました。

講演動画及びスライドは [https://learning.unity3d.jp/event/sync-2022/](https://learning.unity3d.jp/event/sync-2022/) にて確認できます。

### Making AnimationEvent safe for the CoreCLR garbage collector

[Making AnimationEvent safe for the CoreCLR garbage collector | Unity Blog](https://blog.unity.com/technology/making-animationevent-safe-for-the-coreclr-garbage-collector)

MonoからCoreCLRへの移行について、特にマネージドとネイティブコードの相互運用とGCHandleの活用について焦点を当てて説明しています。

### Unite 2022 Ask the Experts

[Official - Unite 2022 Ask the Experts - Unity Forum](https://forum.unity.com/threads/unite-2022-ask-the-experts.1354913/)

2022/11/01午前9時から午後2時（EDT）にかけて、[こちらのDiscord](https://discord.com/invite/unity)でAsk the Expertが開催されます。

## Articles

### Unityプログラミングパターン12種を公式デモから読み取る

[Unityプログラミングパターン12種を公式デモから読み取る - Qiita](https://qiita.com/KyoheiOkawa/items/17bbd352671c8e5f1944)

先日Unityがリリースした「[Level up your code with game programming patterns](https://github.com/Unity-Technologies/game-programming-patterns-demo)」のデモを触りつつ、それぞれのパターンを解説しています。

### Unity Test Framework v1.3で非同期テスト

[Unity Test Framework v1.3で非同期テスト - やらなイカ？](https://www.nowsprinting.com/entry/2022/10/29/055523)

Unity Test Frameworkのv1.3へのアップデートと、 `Test` 属性をつけるだけで非同期のテストが行えるアップデートについて取り上げています。

### 【GameCI】指定した複数のUnityバージョンでテストを走らせるワークフロー【GitHub Actions】

[【GameCI】指定した複数のUnityバージョンでテストを走らせるワークフロー【GitHub Actions】 - Qiita](https://qiita.com/su10/items/24897f3a09b88c83cf2d)

GitHub Actions上でGameCIのアクションを活用して複数プラットフォームかつPlayModeとEditMode両方のテストをまとめて実行するワークフローについて紹介しています。

### Building a wireframe shader with Unity and Unity Shader Graph

[Building a wireframe shader with Unity and Unity Shader Graph - LogRocket Blog](https://blog.logrocket.com/building-wireframe-shader-unity/)

ジオメトリシェーダーを用いたワイヤーフレームシェーダーの実装について紹介しています。

### そろそろShaderをやるパート82 海洋表現

[そろそろShaderをやるパート82 海洋表現](https://zenn.dev/kento_o/articles/f46ad02867cf9d)

フレネル反射による色計算と乱数で頂点を動かすことで水面を表現する方法について紹介しています。

### ミップマップとテクスチャフィルタリング

[【Unity】ミップマップとテクスチャフィルタリング - シェーダーTips](https://ny-program.hatenablog.com/entry/2022/10/30/140911)

ミップマップとテクスチャフィルタリングについて基本的な原理の説明と、Unity上でのこれらの設定について説明しています。

### C#8.0から追加されたIAsyncEnumerableを使って非同期ストリームを実装する

[【C#】C#8.0から追加されたIAsyncEnumerableを使って非同期ストリームを実装する - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2022/10/24/120000)

C# 8.0から利用できる `IAsyncEnumrable` による非同期ストリームの簡単な利用方法について紹介しています。

## Repositories

[EricHu33/uPlayableAnimation: An animation plugin based on Playables API](https://github.com/EricHu33/uPlayableAnimation)

AnimatorControllerの複雑化を避けることを目的としたアニメーションプラグイン実装。



Playables APIをベースに実装していて、AnimatorControllerにトランジションを設定せずに別のAnimationClipの再生やランタイムでのアニメーションの割り当てや繊維、AnimatorController間の遷移などをサポートしています。

### Markup Attributes

[gasgiant/Markup-Attributes: A Unity Editor extension for customizing inspector layout with attributes.](https://github.com/gasgiant/Markup-Attributes)

属性によるマークアップベースでUnityEditorのインスペクタのレイアウトをカスタマイズするライブラリ。

### MaxMath

[MrUnbelievable92/MaxMath: A C# SIMD math library for use with Unity only, substantially extending Unity.Mathematics by new types and functions, using Unity.Burst](https://github.com/MrUnbelievable92/MaxMath)

Unity.Mathematicsを補完するC# SIMDライブラリ。



Unity.Mathematicsで提供されていない (s)byte・(s)short・(s)longの ベクトルと行列のSIMDサポートやビット数え上げやいくつかの便利な関数実装が追加されています。

### Unity Volume Rendering

[mlavik1/UnityVolumeRendering: Volume rendering, implemented in Unity3D. Want to support my project? Donate some money to Red Cross and send me a screenshot/message/issue, and I'll be greatly motivated! :) Any amount is welcome!](https://github.com/mlavik1/UnityVolumeRendering)

UnityのVolume Rendering実装。

### EasyIK

[joaen/EasyIK: Simple and fast IK solver for Unity](https://github.com/joaen/EasyIK?utm_source=pocket_mylist)

UnityのシンプルなFABRIK実装。

### UI Toolkit Plus

[ErnSur/UI-Toolkit-Plus: Vault for reusable UI Toolkit features](https://github.com/ErnSur/UI-Toolkit-Plus)

UI Toolkitで再利用可能なコンポーネントを提供するライブラリ。



`ReorderableManipulator` や `TabGroup` 、UXMLからC#のボイラープレートの生成やスタイルシートのエクスポートなどの実装を含んでいます。

