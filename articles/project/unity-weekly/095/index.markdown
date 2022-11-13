---
type: "unity-weekly"
title: "Advanced Editor scripting hacks、Removing support for GLES2 and WebGL1 in 2023.1a、Plastic SCM ウェブ体験 - Unity Weekly 095"
description: "2022/11/14週のUnity Weeklyです。エディタスクリプトハック、2023.1aのGLES2・WebGL1サポート終了、Plastic SCM ウェブUI、パストレーシング、グラフィックスサンプルプロジェクトなどについて取り上げました。"
tags: ["Unity Weekly","Unity"]
date: "2022-11-13T15:00:00"

---

## Unity Officials

### Advanced Editor scripting hacks to save you time, part 2

[Advanced Editor scripting hacks to save you time, part 2 | Unity Blog](https://blog.unity.com/technology/advanced-editor-scripting-hacks-to-save-you-time-part-2)

エディタスクリプトの高度な利用方法について紹介するブログシリーズの第2弾。

`RequireComponent` によるコンポーネント追加順序を保証する性質、 [Preset](https://docs.unity3d.com/ScriptReference/Presets.Preset.html) と `PrefabUtility` の `GetPropertyModifications` ・ `GetCorrespondingObjectFromSource` を活用したベースプレハブ経由でのデータの共有、CSVやTSVのインポート時 ScriptableObject 生成、 `IProcessSceneWithReport` を用いてエディタ再生時やビルド時をフックしたデータの生成などエディタスクリプトを活用した開発効率を向上させるためのTipsについて紹介しています。

### Removing support for GLES2 and WebGL1 in 2023.1a

[Official - Removing support for GLES2 and WebGL1 in 2023.1a - Unity Forum](https://forum.unity.com/threads/removing-support-for-gles2-and-webgl1-in-2023-1a.1360090/)

Unity 2023.1 alpha以降でGLES2 と WebGL1 のサポートを終了を予定が告知されました。

### Plastic SCM ウェブ体験のオープンベータが開始されました

[Plastic SCM ウェブ体験のオープンベータが開始されました | Unity Blog](https://blog.unity.com/ja/technology/plastic-scm-web-experience-now-in-open-beta)

バージョン管理ツールPlatstic SCMのウェブ版クライアントが組み込まれた [Plastic SCM Cloud Edition](https://unity.com/ja/products/plastic-scm) が、オープンベータというかたちで公開されました。

これによってユーザー追加やファイル・レポジトリ操作、コードレビューをウェブ上で行う事ができるようになりました。

### Games Focus：皆さんのフィードバックがどのように製品開発を推進させているか

[Games Focus：皆さんのフィードバックがどのように製品開発を推進させているか | Unity Blog](https://blog.unity.com/ja/technology/games-focus-how-feedback-drives-product-development)

ユーザーによるUnityへのフィードバックによって改善された項目や機能について紹介しています。

### Unity と ironSource の合併により、優れたモバイルゲームのローンチと成長がさらに実現しやすい世界に

[Unity と ironSource の合併により、優れたモバイルゲームのローンチと成長がさらに実現しやすい世界に | Unity Blog](https://blog.unity.com/ja/news/unity-ironsource-merger-growing-great-mobile-games)

2022/11/07にUnityの[ironSourceとの合弁](https://techcrunch.com/2022/11/07/unity-and-ironsources-4-4b-merger-is-now-complete/)の完了が発表されました。この合弁の意図やメリットなどについて紹介しています。

### Unityのパストレーシングを実際に仕事で使ってみた話をしようじゃないか…

[Unityのパストレーシングを実際に仕事で使ってみた話をしようじゃないか… - YouTube](https://www.youtube.com/watch?v=YeuI45vUU6g&t=23s)

Unite 2022のキーアートを実装する際に利用したパストレーシングの機能と利用して得られた知見について紹介しています。

デノイザの選択からサンプル数の決定、レンダリング設定、実装した際に発覚したGPUメモリリーク、メモリリークを考慮した編集から納品までのワークフロー、利用しての感想について紹介しています。

### グラフィック機能の習得をサポートする、サンプルプロジェクトの一挙紹介

[グラフィック機能の習得をサポートする、サンプルプロジェクトの一挙紹介 - YouTube](https://www.youtube.com/watch?v=Ud9a05vajwY)

Unity公式が提供する、グラフィックス機能の学習に向いているサンプルプロジェクトを紹介しています。

## Articles

### Input Systemでピンチやマルチスワイプを実現する

[【Unity】Input Systemでピンチやマルチスワイプを実現する | ねこじゃらシティ](https://nekojara.city/unity-input-system-pinch-and-multi-swipe)

新しいInput SystemのInput ActionとCustom Composite Binding用いて、それぞれの機能でピンチ操作（ピンチイン・ピンチアウト・マルチスワイプ）の実装する方法について解説しています。

### ScriptableRendererでURPを一から

[【Unity】ScriptableRendererでURPを一から – 株式会社ロジカルビート](https://logicalbeat.jp/blog/11022/)

URP（Universal Render Pipeline）の ScriptableRendererを１から実装してレンダリングパイプラインをカスタマイズする方法と、そのメリットやデメリットについて紹介しています。

### Dragging And Dropping 3D Cards

[Dragging And Dropping 3D Cards 🃏 | Dawn Of The Cards - Fronkon Games](https://fronkongames.github.io/Dawn-Of-The-Cards/article/dragging_and_dropping_3d_cards/)

カードゲームであるようなカードのドラッグアンドドロップ操作の実装方法について、Physicsによる実装からインターフェイス設計、パフォーマンス最適化のためのTipsについて紹介しています。

### Unity Automated QAのInput Systemサポートによる自動テスト

[Unity Automated QAのInput Systemサポートによる自動テスト - やらなイカ？](https://www.nowsprinting.com/entry/2022/11/11/084915)

Unity Automated QAの新しいInput Systemサポートについて、その設定方法と正常に動作させるためのパッケージ側のコード修正、Unity公式の2D Game Kitでの動作確認、テストコード生成などについて紹介しています。

### A Custom Leaf Physics Solution for Unity

[A Custom Leaf Physics Solution for Unity](https://80.lv/articles/a-custom-leaf-physics-solution-for-unity/)

DrawMeshInstanced APIとBurstコンパイラによる最適化を行ったLeaf Physicsについて紹介しています。

### Webブラウザ＆OS毎の割り当て可能なメモリサイズ

[Webブラウザ＆OS毎の割り当て可能なメモリサイズ - Qiita](https://qiita.com/kazuki_kuriyama/items/39a508f7c9ea5d08082b)

Unityが出力するWebGLアプリが割り当てられるメモリサイズを[フォーラム](https://forum.unity.com/threads/android-chromium-unable-to-grow-allocated-memory-above-256mb-confirmed.1014475/#post-6574876)で紹介されているツールを用いて計測する方法と、いくつかのブラウザとOSの組み合わせで計測した結果を紹介しています。

### BoatAttackの崖シェーダー【1】 #121

[【Unity Shader】BoatAttackの崖シェーダー【1】 #121 - 知識0からのUnityShader勉強](https://soramamenatan.hatenablog.com/entry/2022/10/30/210441)

Unityが提供するサンプルゲーム [BoatAttack](https://github.com/Unity-Technologies/BoatAttack) の崖のシェーダーの実装についてShaderGraphの処理を解説しています。

## Repositories

### Package: com.unity.demoteam.mesh-to-sdf

[Unity-Technologies/com.unity.demoteam.mesh-to-sdf: A light and fast real-time SDF generator, primarily for animated characters. The dynamic SDF can be used for all sorts of VFX. Also enables hair-to-character collisions in the new hair package.](https://github.com/Unity-Technologies/com.unity.demoteam.mesh-to-sdf)

SkinnedMeshから3D SDF（Signed Distance Field）テクスチャをリアルタイムに生成するジェネレータ。メッシュの形状を考慮したVFXの実装を行うことができます。

### GPU Accelerated Diamond-Square

[ssell/GPU-Accelerated-Diamond-Square: Implementation of GPU Accelerated Diamond-Square](https://github.com/ssell/GPU-Accelerated-Diamond-Square)

Diamond-SquareアルゴリズムのGPU高速化実装。CPUのシングルスレッド実装と比べて17倍、マルチスレッド実装と比べて4倍高速に動作する。

### URP (LWRP)-Shaders

[marcozakaria/URP-LWRP-Shaders: A Collection of Shader For URP(LWRP) Render Pipeline](https://github.com/marcozakaria/URP-LWRP-Shaders)

URP（Universal Render Pipeline）のシェーダーコレクション。

### Auto-Level

[Al-Asl/AutoLevel: Free procural level generator for unity](https://github.com/Al-Asl/AutoLevel)

WFC（WaveFunctionCollapse）アルゴリズムに基づくプロシージャルなレベルエディタ実装。

### PrimoToon

[festivize/PrimoToon: Shader for Unity (Built-in Rendering Pipeline) attempting to replicate the shading of Genshin Impact developed by miHoYo. This is for datamined assets, not custom-made ones nor the MMD variants.](https://github.com/festivize/PrimoToon)

ビルトインレンダリングパイプラインでの原神ライクなシェーディング実装。

### HiLog: The extensions of unity's log plugin

[https://github.com/hiram3512/HiLog_unity](https://github.com/hiram3512/HiLog_unity)

外部依存なしのログライブラリ。ログのファイル書き出しやアプリ上でのログコンソールの実装も備えている。



