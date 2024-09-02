---
type: "unity-weekly"
title: "Unity Weekly 188"
description: "2024/09/02週のUnity Weeklyです。TextMesh Pro、Plateau SDK Toolkit、Random Extensions、R3、Native Textureなどについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-09-02T00:00:01"
---

## Unity Officials

### 初心者向け！ TextMesh Proで日本語を使おう

[初心者向け！ TextMesh Proで日本語を使おう | Unity Learning Materials](https://learning.unity3d.jp/10380/)

TextMesh Proで日本語を扱うためのフォントのインストールからフォントアセットの構築方法までを紹介しています。

### Plateau SDK Toolkitでさくっと作る花火大会のシミュレーター

[Plateau SDK Toolkitでさくっと作る花火大会のシミュレーター | Unity Learning Materials](https://learning.unity3d.jp/10382/)

国交省が提供するPlateau SDK Toolkitを使って町並みを再現し、花火が見える位置を確認する簡易的な花火大会シミュレーターを実現する方法について紹介しています。

## Articles

### Random Extensions – .NET / Unity用の乱数ライブラリ

[【C#】Random Extensions – .NET / Unity用の乱数ライブラリ - Annulus Games](https://annulusgames.com/blog/random-extensions/)

ブログの著者が開発する .NET/Unity用の乱数ライブラリ「[Random Extensions](https://github.com/AnnulusGames/RandomExtensions)」について、ライブラリの開発の経緯や基本的な使い方や提供される機能について紹介しています。

### Unity の Native Texture を利用して visionOS のカメラ映像を高速に描画する

[Unity の Native Texture を利用して visionOS のカメラ映像を高速に描画する](https://zenn.dev/meson/articles/visionos-native-camera-texture-unity)

visionOS 2.0のエンタープライズ向けのアプリでのみ提供されるカメラアクセスをUnityでできるだけ少ないオーバーヘッドで利用するために、ネイティブのテクスチャを `Texture2D.CreateExternalTexture` で参照、 `Graphic.Blit` を用いて別のテクスチャーへコピーして利用する方法について解説しています。

### UniRxで課題だったRxとasync/awaitの連携がR3では楽になった件

[UniRxで課題だったRxとasync/awaitの連携がR3では楽になった件 │ Aiming 開発者ブログ](https://developer.aiming-inc.com/csharp/post-10773/)

UniRxで課題となっていたRxとasync/awaitの連携がR3でどのように改善されたのかを、Single Observable問題やSubscribeAsyncなどの観点から解説しています。

### WebGLビルドのStreamingAssetsパスを変更する

[【Unity】WebGLビルドのStreamingAssetsパスを変更する | ねこじゃらシティ](https://nekojara.city/unity-webgl-customize-streaming-assets-path)

WebGLビルドにおけるStreamingAssetsのパスを別ドメインのパスに書き換えるための方法を複数方法紹介しています。また、別ドメインのアセットをロードする際に注意すべきCORSの設定についても言及しています。

### Unityで安全にGameObjectをDestroyする

[Unityで安全にGameObjectをDestroyする](https://zenn.dev/allways/articles/9e1a2494dbb171)

Fake nullやManaged Leaked Shellなどの問題を考慮した安全なGameObjectの破棄方法を紹介しています。

### アセットが使われている(参照されている)場所をシーン上やプロジェクト内から簡単に検索する方法

[アセットが使われている(参照されている)場所をシーン上やプロジェクト内から簡単に検索する方法【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Find_Reference)

アセットが利用されている場所を特定するためのライブラリを紹介しています。

## Repositories

### UnitySSGIURP

[jiaozi158/UnitySSGIURP: Screen Space Global Illumination for Unity URP (Universal Render Pipeline).](https://github.com/jiaozi158/UnitySSGIURP)

URPによるScreen Space Global Illumination実装。

### RandomExtensions

[AnnulusGames/RandomExtensions: Provides better random number utilities and weighted collections for .NET and Unity.](https://github.com/AnnulusGames/RandomExtensions)

.NET/Unity向けの疑似乱数ライブラリ。