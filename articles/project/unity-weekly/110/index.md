---
type: unity-weekly
title: Unity Weekly 110
description: 2023/02/27週のUnity Weeklyです。
pubDatetime: 2023-02-26T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### MeshFilterの"Filter"って何！？Unityの名前に関するトリビア集

[MeshFilterの"Filter"って何！？Unityの名前に関するトリビア集 - YouTube](https://www.youtube.com/watch?v=Z3ew_WUa5C0)

Unityで使われているAPI名のスペルの由来や過去のドキュメントのちょっとしたユーモア、英語綴り間違い、MeshFilterなど、Unityの名前に関するトリビアが紹介されています。

## Articles

### 文章サイズの取得と自動レイアウト機能を使用してみた

[【Unity】文章サイズの取得と自動レイアウト機能を使用してみた – 株式会社ロジカルビート](https://logicalbeat.jp/blog/11059/)

TextMeshProのテキストで、文章の長さからテキストボックスのサイズを決める方法と、それを自動でやるための自動レイアウト機能と調整のためのパラメーターについて解説しています。。

### ShaderGraphで作るセル調爆発エフェクト

[ShaderGraphで作るセル調爆発エフェクト｜G2 Studios株式会社](https://note.g2-studios.net/n/nb55403db9c4a)

セルルック調の爆発エフェクトを制作をBlendarとShaderGraphを用いて実装する方法について紹介しています。
Blendarで制作した炎と煙メッシュでの制作方法と、ShaderGraphでのセルルック調な見た目やリムライト、ディゾルブの実現方法とその調整方法についてそれぞれ解説しています。

### UnityWebRequestのDownloadHandler.nativeDataを用いたコピーの回避による最適化について

[UnityWebRequestのDownloadHandler.nativeDataを用いたコピーの回避による最適化について | Yucchiy's Note](https://blog.yucchiy.com/2023/02/unitywebrequest-nativearray-optimization/)

UnityWebRequestの`DownloadHandler.nativeData`と`Span<T>`を用いて、シリアライザーなどへ渡すデータのコピーを回避する最適化手法について紹介しています。

### コルーチンからUniTaskに乗り換えるときに気をつけるべきところ

[【Unity】コルーチンからUniTaskに乗り換えるときに気をつけるべきところ - Qiita](https://qiita.com/toRisouP/items/14bae006f7604a118df6)

コルーチンの実装をUniTaskへ置き換える際に気をつけておいたほうが良い、処理の寿命の管理と処理を合わせるためのCancellationTokenの扱いとキャンセル処理の書き方について解説しています。

### 接空間を用いたInteriorMapを幾何的に理解する

[接空間を用いたInteriorMapを幾何的に理解する(Unity)](https://zenn.dev/norainu/articles/00f6be924feee1)

接空間を用いたinterior mappingについて、[G2 studio さんの元記事](https://note.g2-studios.net/n/n4d8035653aa5)のShaderGraphの実装を解説する形で紹介しています。

## Hot Reload For Unity

[How to build Hot Reload For Unity - Immersive VR Tools](https://immersivevrtools.com/Blog/how-to-build-hot-reload-functionality-for-unity)
[How to build Hot Reload For Unity and run it on device - Immersive VR Tools](https://immersivevrtools.com/Blog/how-to-build-unity-hot-reload-on-device)

UnityでC#コードのホットリロードを実現する手法と、実機上で動くUnityアプリケーションに対してホットリロードを実現する方法についてそれぞれ紹介しています。

実装は[handzlikchris/BuildingHotReloadForUnity](https://github.com/handzlikchris/BuildingHotReloadForUnity)にて公開しています。

### ログのスタックトレースから関数を除外できるようになった

[【Unity】2022.2 新機能 - ログのスタックトレースから関数を除外できるようになった - コガネブログ](https://baba-s.hatenablog.com/entry/2023/02/24/090000)

Unity2022.2に入った、コンソール表示のスタックトレースの非表示オプションについて紹介しています。

### Wind Waker Style Stencil Buffer Lights (URP & BIRP)

[Wind Waker Style Stencil Buffer Lights (URP & BIRP) | Minions Art](https://www.patreon.com/posts/wind-waker-style-78831006)

風のタクトのようなライト（たいまつの光が壁を照らすようなライティング）をステンシルバッファーを用いてどのように実現するかについて紹介しています。

### Regex.Matchはインスタンスメソッドを使うとGC.Allocと処理速度の面で有利

[【C#, Unity】Regex.Matchはインスタンスメソッドを使うとGC.Allocと処理速度の面で有利 - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/02/20/120000)

Regex.Matchの静的メソッド呼び出しとインスタンスメソッド呼び出しの違いと、インスタンスを使い回すことによるGC.Alloc削減の最適化について紹介しています。

### Procedural Stylized Sky & Clouds Set Up in Unity

[Procedural Stylized Sky & Clouds Set Up in Unity](https://80.lv/articles/procedural-stylized-sky-clouds-set-up-in-unity/)

Amplify Shader Editorを用いて、プロシージャルに空と雲を描画する方法を紹介しています。

### C# List<T>.Contains()の罠（間抜けなだけです）

[C# List<T>.Contains()の罠（間抜けなだけです） - Qiita](https://qiita.com/Narinii/items/9e8db766fc6f88069afe)

Containsに参照型を渡す際の挙動の注意点とrecord利用による`IEquatable<T>`の自動実装についてそれぞれ紹介しています。

### Refactoring Bloated Code in C#

[Refactoring Bloated Code in C# - Code Maze](https://code-maze.com/csharp-refactoring-bloated-code/?)

いくつかのBloatedなコード（ここでは不必要にコードベースが大きくなってしまうようなコードを指す）を、可読性・保守性を高めるためのリファクタリング手法について紹介しています。


### モバイルゲームを全画面で全機種対応させる

[【Unity】モバイルゲームを全画面で全機種対応させる - Qiita](https://qiita.com/kiku09020/items/7c4a66d6c8ea7c500a09)

アプリを複数解像度およびSafeAreaに対応する一手法とDevice Simulatorによるデバック方法についてそれぞれ紹介しています。

### Fake 3D Parallax Effect using Shader & (Pre-generated) Depth Map

[Fake 3D Parallax Effect using Shader & (Pre-generated) Depth Map](https://unitycoder.com/blog/2023/02/22/fake-3d-parallax-effect-using-shader-pre-generated-depth-map/)

事前に生成してあるデプスマップを利用して、視差効果を実装する方法についてその実装を動画付きで紹介しています。


### ParticleSystem の再生位置を簡単に変えられる拡張メソッド

[【Unity】ParticleSystem の再生位置を簡単に変えられる拡張メソッド - Qiita](https://qiita.com/Yamara/items/221868b0decc6364b56f)

ParticleSystemの再生を任意秒進めるSkipメソッドの実装について、ParticleSystemのSimulateメソッドの挙動と合わせて紹介しています。

### パスに沿った円柱(Cylinder)状のメッシュ生成

[[Unity] パスに沿った円柱(Cylinder)状のメッシュ生成 - Qiita](https://qiita.com/okome184/items/1c790f0924dcb824b888)
[[Unity] ドローイングでキューブ状のメッシュ生成 - Qiita](https://qiita.com/okome184/items/6da40073f033d6fb6e8c)

パスに沿って円柱の形をしたメッシュを生成する方法について紹介しています。またこの実装を利用して、ドローイングアプリのように、マウスの軌跡に沿ってメッシュを生成する方法についても合わせて触れています。

### Depth of field

[Depth of field](https://echoesofsomewhere.com/2023/02/23/depth-of-field/)

標準のSSAOがPostProcessVolumeのDoFで利用するデプステクスチャを上書きすることで、DoFの効果が効かない不具合の共有と、DoFの距離をマウス入力を元にレイキャストを発行し、その衝突した距離から計算する方法について触れています。

### ランタイムで指定したフォルダをファイラーで開く（Mac/Windows）

[【Unity】ランタイムで指定したフォルダをファイラーで開く（Mac/Windows） - Qiita](https://qiita.com/nkjzm/items/7a3bac223a8ad89fb520)

Unityアプリ上で、WindowsおよびmacOSの特定フォルダーをエクスプローラーやFinderで開く方法について紹介しています。

## Repositories

### VContainer

[hadashiA/VContainer: The extra fast, minimum code size, GC-free DI (Dependency Injection) library running on Unity Game Engine.](https://github.com/hadashiA/VContainer)

高速なUnity用DIライブラリ。

v1.13.0で、事前生成コードをILによるコード生成からSource Generatorへの実装の置き換えが行われ、あわせてIL生成機能はdeprecated扱いになりました。

### BodyPixSample

[keijiro/BodyPixSample: Unity BodyPix samples](https://github.com/keijiro/BodyPixSample)

[BodyPixBarracuda](https://github.com/keijiro/BodyPixBarracuda)を用いたサンプル実装。[BodyPixBarracuda](https://github.com/keijiro/BodyPixBarracuda)は、[BodyPix](https://blog.tensorflow.org/2019/11/updated-bodypix-2.html)というリアルタイムな人物領域と姿勢推定アルゴリズムのモデルをBarracuda上で動作させたもの。

### kShading

[Kink3d/kShading: Shading models for Unity’s Universal Render Pipeline.](https://github.com/Kink3d/kShading?)

URPのためのシェーディングモデル。異方性フィルターやクリアコート、サブフェース散乱などを含む物理ベースなLitシェーダーと、Litシェーダー＋近似BSDFを使用するセルスタイルシェーダーToon Litの2つのシェーダー実装を含みます。

### Unity-Texture-Packer

[JMargevics/Unity-Texture-Packer: Pack any color data into texture channels.](https://github.com/JMargevics/Unity-Texture-Packer?)

任意の色情報をテクスチャのチャンネルに埋め込めるエディター拡張。

### YukataScript

[Akeit0/YukataScript: Very Fast Pure C# Script Language for Unity/C# (IL2CPP is supported)](https://github.com/Akeit0/YukataScript)

Unity/C#向けの高速なスクリプト言語。

このライブラリ著者によるこのスクリプトの解説は、「[Unity/C#のための静的型付けスクリプト言語「YukataScript」](https://zenn.dev/aakei/articles/006ffaf494c3ae)」より確認できます。

### StateMachineUnity

[nicholas-maltbie/StateMachineUnity: State Machine Utility Package for Unity Projects](https://github.com/nicholas-maltbie/StateMachineUnity)

Unity向けのStateMachine実装。

[こちらのように](https://github.com/nicholas-maltbie/StateMachineUnity/blob/main/Assets/Samples/ExampleFSM/Scripts/ExampleSMAnim.cs#L57)クラスとアトリビュートを用いてステートマシンを構築する。

それぞれの状態に対するAnimatorControllerの制御も合わせて用意されています。
