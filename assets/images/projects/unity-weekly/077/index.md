---
type: unity-weekly
title: Unity 2021 LTSにおけるSerializeReference、ironSource、ハーフトーンシェーダー - Unity Weekly 077
description: >-
  2022/07/19週のUnity Weeklyです。Unity 2021
  LTSにおけるSerializeReference、ironSource、ハーフトーンシェーダーなどについてとりあげました。
pubDatetime: 2022-07-18T12:00:00.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity 2021 LTS における SerializeReference の改善点

[Unity 2021 LTS における SerializeReference の改善点 | Unity Blog](https://blog.unity.com/ja/technology/serializereference-improvements-in-unity-2021-lts)

Unity 2021 LTSでの SerializeReference の改善点である Stable IDの導入と欠落している型について紹介しています。



2021 LTSで導入されたStable IDについて導入された背景や、実際のコードと参照の保存のされ方の 2020 LTSと2021 LTSでの違い、欠落している型の解決方法の詳細についてそれぞれ解説しています。

### Unity Announces Intent to Join Forces with ironSource

[Welcome, ironSource! | Unity Blog](https://blog.unity.com/news/welcome-ironsource)

[Official - Unity Announces Intent to Join Forces with ironSource - Unity Forum](https://forum.unity.com/threads/unity-announces-intent-to-join-forces-with-ironsource.1308219/)

Unityとアプリ収益化プラットフォームを提供するironSourceの合弁が合意されたことが発表されました。

## Articles

### ハーフトーンシェーダーでコミック風の表現(URP)

[【Unity】ハーフトーンシェーダーでコミック風の表現(URP)](https://zenn.dev/flankids/articles/75b407d868382a)

漫画などのメディアで利用される、水玉模様によって陰影を表現する「ハーフトーン」をURP（Universal Render Pipeline）で実装する方法について紹介しています。



ハーフトーンシェーダーのアルゴリズムの概要と、それをフラグメントシェーダーによって実装する方法、陰の濃さをドットの大きさで表現する方法についてそれぞれ解説しています。

### Cast ShadowsのTwo Sidedとは

[【Unity】Cast ShadowsのTwo Sidedとは - Qiita](https://qiita.com/TakayukiKiyohara/items/5fa308ab9a68b8911717)

MeshRendererの「Lighting > Cast Shadows」にある「Two Sided」という設定についてまとめています。



「Two Sided」と背面カリング、背面カリングによって影に違和感が出るケース、RenderDocによって「Two Sided」を設定した場合のグラフィックスAPIのCull Modeの状態についてそれぞれ解説しています。

### NuGet importer for Unityを使って簡単にNuGetパッケージをUnityに導入する(NuGetForUnityの後継者になりうるか)

[【Unity】NuGet importer for Unityを使って簡単にNuGetパッケージをUnityに導入する(NuGetForUnityの後継者になりうるか) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2022/07/14/120000)

NuGetに公開されているパッケージをUnityにインストールする「[NuGet importer for Unity](https://github.com/kumaS-nu/NuGet-importer-for-Unity)」というパッケージの導入方法と基本的な使い方についてまとめています。

### macOSでバックグラウンド(非フォーカス)時にキーボードの入力を受け取る

[[Unity]macOSでバックグラウンド(非フォーカス)時にキーボードの入力を受け取る - Qiita](https://qiita.com/fuziki/items/a4295b2c71184742bd90)

macOSで、バックグラウンド中でもキーボード入力を受け取る、Unityネイティブプラグインの実装方法について紹介しています。



`NSEvent.addGlobalMonitorForEvents` をSwiftで呼び出すネイティブプラグインの実装方法からUnityから呼び出すためのインターフェイスの定義、Swiftのネイティブプラグインを.bundleとしてビルドする方法、Unity C#からネイティブプラグインを呼び出す方法についてそれぞれ解説しています。

### Googleドライブとスプレッドシートでお知らせ機能実装（専用サーバー不要）

[【Unity】Googleドライブとスプレッドシートでお知らせ機能実装（専用サーバー不要） - Qiita](https://qiita.com/vestman/items/7ef86a853fe76f369193)

スプレッドシートで管理されているゲームのお知らせ情報をUnityから読み込むことで、自身でホスティングサーバーを用意せずに、ゲームのお知らせ機能を実装する方法について紹介しています。

### Making a mobile game with motion sensors in Unity

[Making a mobile game with motion sensors in Unity - LogRocket Blog](https://blog.logrocket.com/making-mobile-game-motion-sensors-unity/)

新しいInputSystemでジャイロスコープや加速度センサーなどの値を読み取って、その値を元にゲーム中のプレイヤーを操作（移動やカメラの回転の制御）を行う実装について紹介しています。

### AWS Device Farm で Airtest を動かす方法

[AWS Device Farm で Airtest を動かす方法 - Akatsuki Hackers Lab | 株式会社アカツキ（Akatsuki Inc.)](https://hackerslab.aktsk.jp/2022/07/15/154102)

AWSのDevice Farm（AWS上にホストされたiOSやAndroidの物理的なデバイス）とAirtestを用いて、Unityで作成したアプリケーションの自動テストをクラウド上で行う方法について紹介しています。

### Unityプロジェクトをあらゆる観点から静的解析してくれる公式ツール『Project Auditor』の使い方まとめ

[【Unity】Unityプロジェクトをあらゆる観点から静的解析してくれる公式ツール『Project Auditor』の使い方まとめ - LIGHT11](https://light11.hatenadiary.com/entry/2022/07/11/194208)

Unityプロジェクトのスクリプト・リソース・シェーダー・各種設定などを解析して、レポートを出力する「Project Auditor」の基本的な使い方について紹介しています。

### Triangle Grids

[Triangle Grids | rasie1's blog](https://kvachev.com/blog/posts/triangular-grid/)

ターンベースなどのゲームで利用される2Dマップのグリッドとして、三角形で表現されるグリッドについて紹介しています。



三角形グリッドの座標表現、三角形グリッド座標からグリッドインデックス、ワールド座標への変換、三角形グリッドのタイル距離の計算方法についてそれぞれ解説しています。

## Repositories

### Unity-URP-Outlines

[Robinseibold/Unity-URP-Outlines: A custom renderer feature for screen space outlines](https://github.com/Robinseibold/Unity-URP-Outlines)

[Erik Roystan Ross Outline Shader](https://roystan.net/articles/outline-shader.html)を元にした、URPでのアウトライン描画シェーダー。

### RossettaUI

[fuqunaga/RosettaUI: Code-based GUI library for development menus for Unity](https://github.com/fuqunaga/RosettaUI)

開発用のメニューのためのGUIを、コードベースで記述することのできるライブラリ。

### **AnimMap Baker For Animated Characters**

[chenjd/Render-Crowd-Of-Animated-Characters: Animation Baker and Instancing for Animated ](https://github.com/chenjd/Render-Crowd-Of-Animated-Characters)

大量のキャラクターのアニメーション再生を、アニメーションマップテクスチャによるバーテックスシェーダーでの頂点位置更新やGPU Instancingによるドローコール削減などによって、効率的に行うライブラリ。

### Unity Grass Instancer

[MangoButtermilch/Unity-Grass-Instancer: Unity C# script and shader for GPU instanced grass](https://github.com/MangoButtermilch/Unity-Grass-Instancer)

GPU Instancingを用いたグラスシェーダーと制御スクリプト。

### Loxodon Framework

[vovgou/loxodon-framework: An MVVM & Databinding framework that can use C# and Lua to develop games](https://github.com/vovgou/loxodon-framework)

MVVMおよびデータバインディングフレームワーク。

### Stylised Character Controller

[joebinns/stylised-character-controller: A stylised physics based character controller made in Unity 3D.](https://github.com/joebinns/stylised-character-controller)

物理ベースなキャラクターコントローラの実装。
