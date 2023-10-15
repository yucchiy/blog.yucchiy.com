---
type: "unity-weekly"
title: "Unity Weekly 143"
description: "2023/10/16週のUnity Weeklyです。ECSキャラクターコントローラー、XPDB、Render Graph、UI Toolkitなどについて取り上げています。"
tags: ["Unity Weekly","Unity"]
date: "2023-10-10T00:00:01"

---

## Unity Officials

### ECS キャラクターコントローラーでキャラを動かしてみよう！

[【Unity】 ECS キャラクターコントローラーでキャラを動かしてみよう！ - YouTube](https://www.youtube.com/watch?v=0-guDZ5K5M0)

ECS向けのキャラクターコントローラーパッケージについて、機能概要から組み込み方、二段ジャンプを題材に挙動の拡張方法についてそれぞれ解説しています。

## Articles

### 街づくりゲームの住民管理システムを設計した話

[街づくりゲームの住民管理システムを設計した話 - Qiita](https://qiita.com/john95206/items/968bfeefccb469a682f1)

[ヘレの海底都市計画 ～箱庭に空気を植えるSLG～](https://store.steampowered.com/app/2502940/_SLG/)の、住民と建築・生産などの各システムの連携に採用したObservableパターンや、住民の状態を管理するために採用したステートマシンについてそれぞれ解説しています。

### 論文を読んで紐物理を実装してみよう(XPBD:eXtended Position Based Dynamics)

[[Unity] 論文を読んで紐物理を実装してみよう(XPBD:eXtended Position Based Dynamics)](https://zenn.dev/nrdev/articles/68ff50a19d91b9)

eXtended Position Based Dynamics（XPBD）について、元研究のPBDとの違いから手法の説明、Unity上での実装についてそれぞれ解説しています。

### Custom SRP 2.2.0

[Custom SRP 2.2.0](https://catlikecoding.com/unity/custom-srp/2-2-0/)

独自のSRP実装におけるレンダーテクスチャの管理を、Render Graphが管理するレンダーテクスチャを利用する実装に置き換える方法について解説しています。

### Cloth Sim

[Cloth Sim - Echoes of Somewhere](https://echoesofsomewhere.com/2023/10/09/cloth-sim/)

Magica Cloth2を利用した衣服や髪の毛、背景内の布製の小道具のクロスシミュレーションのセットアップについて紹介しています。

### Unityの新UIシステムUI ToolkitをREALITYアプリの配信画面に導入した話

[Unityの新UIシステムUI ToolkitをREALITYアプリの配信画面に導入した話　Now in REALITY Tech #85｜REALITY](https://note.com/reality_eng/n/nd32e0304c253)

REALITYアプリへのUI Toolkitを導入について、導入の経緯やUI Toolkitのメリット、課題点についてそれぞれ紹介しています。

### 【UI Toolkit】Toolbar系のUI要素を使ってツールバーを構成する

[【Unity】【UI Toolkit】Toolbar系のUI要素を使ってツールバーを構成する - LIGHT11](https://light11.hatenadiary.com/entry/2023/10/12/190927)

UI Toolkitを用いてエディターのツールバーを実装する方法を紹介しています。

### Unityを複数バージョンで並列ビルドしている際にGradleビルドエラーになった

[Unityを複数バージョンで並列ビルドしている際にGradleビルドエラーになった](https://zenn.dev/masaki_mori72/articles/e6062c13b06a8c)

1マシン上で、複数のUnityバージョンのAndroidビルドを行う際に発生するビルドエラーとその解決方法について紹介しています。

### UnityのPreferences項目をCLIから更新する

[UnityのPreferences項目をCLIから更新する](https://zenn.dev/masaki_mori72/articles/5c5bb6ebfc398e)

macOS上で、UnityのPreferencesをコマンドライン経由で更新する方法について紹介しています。

### RequireComponentとReset関数を組み合わせてコンポーネント追加時に必要な参照を自動で設定する

[RequireComponentとReset関数を組み合わせてコンポーネント追加時に必要な参照を自動で設定する - MRが楽しい](https://bluebirdofoz.hatenablog.com/entry/2023/10/10/231047)

`RequireComponent`属性と`Reset`メソッドを用いて、コンポーネントが追加されたタイミングで依存するコンポーネントの参照を設定する方法を紹介しています。

## Repositories

### Motion Matching

[JLPM22/MotionMatching: Motion Matching implementation for Unity](https://github.com/JLPM22/MotionMatching)

Motion MatchingのUnity実装。

### HonkaiStarRailToonShader

崩壊スターレイルのようなトゥーンシェーダー実装。

[Gaolingx/HonkaiStarRailToonShader: This is a Honkai StarRail ToonLike Shader for unity（for URP)](https://github.com/Gaolingx/HonkaiStarRailToonShader)

### Entities Events

[AnnulusGames/EntitiesEvents: Provides inter-system messaging functionality to Unity ECS](https://github.com/AnnulusGames/EntitiesEvents?#features)

ECS向けにイベントシステムライブラリ。