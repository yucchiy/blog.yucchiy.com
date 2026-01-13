---
type: unity-weekly
title: Unity Weekly 255
description: >-
  2026/01/12週のUnity Weeklyです。On-Tile Post Processing for Untethered XR、DirectStoragesサポートなどを紹介しています。
pubDatetime: 2026-01-12T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---


## Unity Officials

### Performant and Energy-Efficient Rendering with Render Graph and On-Tile Post Processing for Untethered XR in Unity 6.3

[Performant and Energy-Efficient Rendering with Render Graph and On-Tile Post Processing for Untethered XR in Unity 6.3 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/performant-and-energy-efficient-rendering-with-render-graph-and-on-tile-post-processing-for-untethered-xr-in-unity-6-3/1703007)

Untethered XRデバイス（PCに有線されてないXRデバイス）を含むモバイルGPUで、エネルギー効率の良い描画をRender Graphで行うために、Render Graph Viewerを用いてレンダリングパスを確認＆最適化する方法や、Unity 6.3からUntethered XRデバイス向けで利用できるOn-Tile Post Processingについてそれぞれ紹介しています。

### Unity announces DirectStorage support in Unity 6.4 Beta, enabling accelerated asset loading on Windows

[Unity announces DirectStorage support in Unity 6.4 Beta, enabling accelerated asset loading on Windows - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-announces-directstorage-support-in-unity-6-4-beta-enabling-accelerated-asset-loading-on-windows/1703061)

Unity 6.4ベータ版から、Microsoft DirectStorageがWindowsビルドでサポートされたことをアナウンスしています。

このディスカッションでは、DirectStorageのサポートによってどのような恩恵が得られるのかや、その設定方法についてそれぞれ紹介しています。


## Articles

### SkinnedMeshRendererのテクスチャ空間上におけるしわのシミュレーション

[【Unity6.0 URP/HDRP】SkinnedMeshRendererのテクスチャ空間上におけるしわのシミュレーション #C# - Qiita](https://qiita.com/GossiperLoturot/items/919d88a5a9337c6a2b4c)

SkinnedMeshRendererのテクスチャ上に動的に「しわ」を描画するための基本的な仕組みの紹介からRenderGraphでの実装方法、しわ描画の実現方法について、それぞれ解説しています。

### InputActionAssetがシーン遷移で動かなくなる問題と対策

[InputActionAssetがシーン遷移で動かなくなる問題と対策](https://zenn.dev/tang3cko/articles/75e0363079aac3)

Unity6.2以降で発生する、UIDocumentをシーン全体で全て非アクティブにしたときの、InputActionAssetの挙動について紹介しています。

### オープンソースソフトウェア「UniDx」の公開

[オープンソースソフトウェア「UniDx」の公開](https://zenn.dev/tankenzuki/articles/unidx_2025_open)

ブログの著者が開発する、Unity経験者でDirectXやゲームフレームワークを学びたい方をメインターゲットにした、Unityのような書き心地のゲームフレームワークについて紹介しています。


### Unity6.3から利用できるPlatform Toolkitについて

[Unity6.3から利用できるPlatform Toolkitについて | Yucchiy's Note](https://blog.yucchiy.com/2026/01/intro-platform-toolkit)

Unity6.3から利用できる、プラットフォームの提供するアカウントやアチーブメントなどの機能を統一的なAPIで扱うことのできるパッケージ「Platform Toolkit」のパッケージの概要から基本的な使い方について紹介しています。

### Platform Toolkitのアカウントシステムについて

[Platform Toolkitのアカウントシステムについて | Yucchiy's Note](https://blog.yucchiy.com/2026/01/platform-toolkit-acccount-system)

Platform Toolkitのアカウント管理の仕組みに焦点を当てて、プライマリアカウントの取得、ユーザー情報や属性の取得、複数アカウントの扱いなどを紹介しています。

### Unity as a LibraryのXCFrameworkを生成するGitHub Actionsの紹介

[Unity as a LibraryのXCFrameworkを生成するGitHub Actionsの紹介 #Swift - Qiita](https://qiita.com/uhooi/items/688a6b63dcd239db66b1)

UaaLのXCFrameworkを生成するGitHub Actionsのワークフローについて、その実装を紹介しています。

### UnityFrameworkをSwiftで使う方法

- [UnityFrameworkをSwiftで使う方法 #iOS - Qiita](https://qiita.com/uhooi/items/abad38ed531919740417)
- [Unity as a LibraryでUnityからSwiftの処理を呼ぶ方法 #iOS - Qiita](https://qiita.com/uhooi/items/8514caffd39d1599b608)

「[Unity as a LibraryのXCFrameworkを生成するGitHub Actionsの紹介](https://qiita.com/uhooi/items/688a6b63dcd239db66b1)」で作成した `UnityFramework.XCframework` をSwiftから利用するためのSwift Package Managerの記述からUnityの起動から終了までの記述、Unity側でSwiftの処理を呼び出すためのモジュールマップの記述からSwift側のデリゲートを登録する方法を紹介しています。

### Web ビルド用 Wasm プラグインを Rust で作る

[Unity：Web ビルド用 Wasm プラグインを Rust で作る](https://zenn.dev/ruccho/articles/a5d994f3ce118c)

Unityのwebビルド用で使えるwasmプラグインを、Rustで作りビルドする方法から、C#からの呼び出し方法まで紹介しています。

### AIとUnityだけでどこまでできるか

[AIとUnityだけでどこまでできるか](https://zenn.dev/dsgarage/articles/ai-unity-what-can-you-do)

Unityによるゲーム開発でのAI活用について、得意不得意な作業についてのまとめと、不得意であるUnityのデータ生成を解決するためのMCPの立ち位置について説明しています。

### Unityを描画装置として用いて物理エンジンを自作してみた

- [Unityを描画装置として用いて物理エンジンを自作してみた(Part1)](https://zenn.dev/enari_k/articles/f21bc592f87a7a)
- [Unityを描画装置として用いて物理エンジンを自作してみた(Part2)](https://zenn.dev/enari_k/articles/06bb21c4a10069)
- [Unityを描画装置として用いて物理エンジンを自作してみた(Part3)](https://zenn.dev/enari_k/articles/9e2066b7c4e6c9)

Unity上で独自の物理エンジンを実装し、球体同士や立方体の衝突や摩擦をシミュレーションまでの実装を紹介しています。

### Reducing Assets Import times in Unity

[Reducing Assets Import times in Unity - DEV Community](https://dev.to/attiliohimeki/reducing-assets-import-times-in-unity-2kn2)

インポート時間を計測・重たいアセット特定するためのImport Activityやエディターログの見方、アセットインポートのバッチ処理の書き方などを紹介しています。

### Transparency | Unity Shader Code Basics 03

[Transparency | Unity Shader Code Basics 03](https://danielilett.com/2026-01-01-tut10-03-transparency/)

Unityのシェーダーにおける透明の扱いについて、アルファブレンドによる半透明からブレンドモードの挙動、アルファクリッピングについてその基本からシェーダーでの実装方法について紹介しています。

### The Depth Buffer | Unity Shader Code Basics 04

[The Depth Buffer | Unity Shader Code Basics 04](https://danielilett.com/2026-01-02-tut10-04-depth/)

Unityのシェーダーにおける深度バッファについて、シェーダーパスでの深度テストや深度バッファでの書き出し方法から、深度テクスチャを用いてシルエットを描画するための深度テクスチャの値の扱い方、深度テクスチャとURPのRender Objectsを用いたX-ray効果を実装する方法についてそれぞれ紹介しています。
