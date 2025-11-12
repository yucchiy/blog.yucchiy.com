---
type: unity-weekly
title: Unity Weekly 196
description: >-
  2024/10/28週のUnity Weeklyです。Time Ghost、Unity
  Awards、PNGテクスチャからASTCテクスチャ置き換え、内製UIフレームワークなどについて取り上げています。
pubDatetime: 2024-10-28T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Making of Time Ghost: Using DOTS ECS for more complex environments

[Making of Time Ghost: Using DOTS ECS for more complex environments - Technical Articles - Unity Discussions](https://discussions.unity.com/t/making-of-time-ghost-using-dots-ecs-for-more-complex-environments/1537850)

Unite 2024で発表されたUnity 6向けのリアルタイムシネマティックデモ「Time Ghost」について、このデモのシーンを制作する際の開発環境やワークフロー、ツールについてそれぞれ解説しています。

### 第16回ユニティ・アワード

[第16回ユニティ・アワード](https://unity.com/ja/awards)

Unity Awardsの各部門の最優秀賞および優秀賞が発表されています。

## Articles

### REALITYのUnity部分で使っているPNGテクスチャをASTCに置き換える大作戦

[REALITYのUnity部分で使っているPNGテクスチャをASTCに置き換える大作戦 Now In REALITY Tech #126｜REALITY](https://note.com/reality_eng/n/nc00349128840)

サービスでPNGテクスチャを利用している箇所を、AssetBundle化していない素のASTCテクスチャで置き換える施策について、UnityでASTCテクスチャをAssetBundleを介さずに直接読み込む方法や、非アセットバンドルで配信されているPNGテクスチャをASTCテクスチャに置き換えるワークフローについて解説しています。

### 内製のUnity UI Frameworkの開発から導入・運用

[内製のUnity UI Frameworkの開発から導入・運用 - Cluster Tech Blog](https://tech-blog.cluster.mu/entry/2024/10/18)

クラスターで開発・導入が進めれているUIフレームワーク「shiranui」について、基本的な機能の紹介や実際の使い方、開発の進め方について紹介しています。

### 配列やリストを使わないオブジェクトプール

[配列やリストを使わないオブジェクトプール #C# - Qiita](https://qiita.com/sator_imaging/items/2a387a54a01e91e5d71d)

連結リストを用いたオブジェクトプール実装について、基本的な実装や、lockの取り方についてUnityで使える実装と.NET9で使える実装、ベンチマーク結果についてそれぞれ紹介しています。

### ポーズ近似を維持するモーションブレンドの実装

[ポーズ近似を維持するモーションブレンドの実装 - えんじにあ雑記！](https://www.mum-meblog.com/entry/research-detail/pose-search-motion-blend)

Humanoidのモーションの遷移を、現在のポーズから遷移後のモーションのうち最も近いポーズを選択して、モーションをブレンドしながら遷移する方法について、その実装を解説しています。

### テキストのアニメーションを簡単に実装出来る Text Animator

- [テキストのアニメーションを簡単に実装出来る Text Animator【Unity】【TextMesh Pro】【アセット】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/TextAnimator)
- [TextAnimatorで最終的な表示に合わせて1文字ずつ文字送りする【Unity】【TextMesh Pro】【アセット】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/TextAnimator_Typewriter)
- [TextAnimatorの文字送りで、特定の文字の時だけ待ち時間を変えて溜めを作る方法【Unity】【TextMesh Pro】【アセット】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/TextAnimator_Typewriter_Speed)

テキストアニメーションの実装を簡単に行うことができる「Text Animator」アセットについて、導入方法から基本的な使い方、実践的な使い方としてゲームでよくあるタイプライターの実装やタイプライターのウェイトタイムの設定などを紹介しています。

### UnityでVisionProのVolume(Bounded)コンテンツのxボタンは閉じるボタンではなかった件

[【Unity】UnityでVisionProのVolume(Bounded)コンテンツのxボタンは閉じるボタンではなかった件【VisionPro】 #visionOS - Qiita](https://qiita.com/Cova8bitdot/items/94ee0e2bb0c859683afa)

UnityにおいてvisionProのVolumeコンテンツのxボタンがPlay To Device経由での動作と実機上での動作が異なる点について、その挙動の調査方法や実際の挙動の差について紹介しています。

### VFX Graphをご紹介！

[【Unity】VFX Graphをご紹介！｜G2 Studios株式会社](https://note.g2-studios.net/n/nae174f691080)

VFX Graphについて、機能の概要からVFX Graphを用いたパーティクルの制作や制御の作例について紹介しています。
