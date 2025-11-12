---
type: unity-weekly
title: Unity Weekly 185
description: 2024/08/12週のUnity Weeklyです。Adaptive Performance、ILPostProcessorなどについて取り上げています。
pubDatetime: 2024-08-12T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Adaptive Performance Package 5.1.0

[Adaptive Performance Package - Unity Engine - Unity Discussions](https://discussions.unity.com/t/adaptive-performance-package/737426/150)

[Adaptive Performance Package 5.1.0](https://docs.unity3d.com/Packages/com.unity.adaptiveperformance@5.1/manual/index.html)と[Android Provider 1.3.1](https://docs.unity3d.com/Packages/com.unity.adaptiveperformance.google.android@1.3/manual/index.html)がリリースされました。


## Articles

### ILPostProcessor 入門 第1回目「はじめに + 最小実装」

[ILPostProcessor 入門 第1回目「はじめに + 最小実装」 - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2024/08/06/165144)

ILPostProcessorについての基本的な説明と、ILPostProcessorを用いた簡単な実装例として、特定のアノテーションを付けたメソッドを`Object.Destroy`を呼び出したあとに呼び出すと例外を吐くILPostProcessorを作成する方法について紹介しています。

この記事は連載形式で、この記事を含めて5つの記事の投稿が予定されています。

### Unityを触れるようになろう〜〜〜

[Unityを触れるようになろう〜〜〜](https://zenn.dev/izm/articles/48b8027b70a2ea)

Unity初学者がUnityを学ぶための基本的な学習ルートについて紹介しています。

### Rider2024.2から登場したExtracting common codeを用いて重複したコードを抜き出す

[【Rider】Rider2024.2から登場したExtracting common codeを用いて重複したコードを抜き出す - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2024/08/12/120000)

Rider 2024.2で利用できる[Extracting common code](https://blog.jetbrains.com/dotnet/2024/08/07/escape-character-extract-common-code-params-modifier-out-vars-csharp-language-support-in-2024-2/#extract-common-code)用いて重複コードを抜き出す方法について紹介しています。

### DefaultInterpolatedStringHandler for .netstandard2.1

[DefaultInterpolatedStringHandler for .netstandard2.1](https://gist.github.com/Akeit0/0ac9a82ecbe952287bae694a10a7a7d0)

Unityで`DefaultInterpolatedStringHandler`を利用するための実装。

### Unity のメインツールバーをカスタマイズ（2024年版）

[Unity のメインツールバーをカスタマイズ（2024年版） #Editor拡張 - Qiita](https://qiita.com/sator_imaging/items/f1bdf82016117cd6c7bd)

Unityのメインツールバーのカスタマイズを、UI Toolkitに寄せてカスタマイズする方法について紹介しています。

### NativeContainerを自作したい

[NativeContainerを自作したい](https://zenn.dev/singup_009/articles/dfbbc98dc192fb)

2次元配列のNativeContainerを自作する方法について紹介しています。

### マルチプレイの確認に便利なUnity Multiplayer Play Modeパッケージ！にて、ソースコードを編集してもVirtual Playerに反映されないバグの対処法

[マルチプレイの確認に便利なUnity Multiplayer Play Modeパッケージ！にて、ソースコードを編集してもVirtual Playerに反映されないバグの対処法 - きゅぶろぐ](https://blog.kyubuns.dev/entry/2024/08/11/162819)

Unity6から利用できる[Multiplayer Play Mode](https://docs.unity3d.com/Packages/com.unity.multiplayer.playmode@1.3/manual/index.html)パッケージの1.3.0-pre.1時点でも発生している、ソースコードの編集がVirtual Playerに反映されないバグの対処法について紹介しています。

### StreamingAssetsに配置したファイルをAndroidで実行時に読み込む

[【Unity】StreamingAssetsに配置したファイルをAndroidで実行時に読み込む #解説 - Qiita](https://qiita.com/dessermuhine/items/e2ed17b86aa24164b00a)

StreamingAssetsに配置したファイルを、Androidの実機上で読み込む方法について紹介しています。

### 簡単にUIを良い感じに盛れるシェーダー Deco-UI

[簡単にUIを良い感じに盛れるシェーダー Deco-UI【Unity】【uGUI】【Shader】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Deco_UI?utm_source=feed)

UIを簡単にリッチにできる[Deco-UI](https://booth.pm/ja/items/2826022)というシェーダーアセットについて紹介しています。


## Repositories

### Presolver

[Akeit0/Presolver: Dependency injection container for .NET to resolve dependencies at compile time](https://github.com/Akeit0/Presolver)

コンパイル時に依存関係を解決する .NET向けのDIコンテナ。
