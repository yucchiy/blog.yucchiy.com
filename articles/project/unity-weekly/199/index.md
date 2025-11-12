---
type: unity-weekly
title: Unity Weekly 199
description: >-
  2024/11/18週のUnity Weeklyです。Unity 6の学習コンテンツ、Unity 6最適化
  E-book、ILPostProcessor、WebGLビルドで独自HLS動画再生、Anjinなどについて取り上げています。
pubDatetime: 2024-11-18T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity 6 Graphics Learning Resources

[Unity 6 Graphics Learning Resources | Unity Blog](https://unity.com/ja/blog/unity-6-graphics-learning-resources)

Unity 6でURPやHDRP、VFX Graph、Shader Graphなどのグラフィックについて学ぶための資料やゲームサンプル、各種ドキュメント、動画やウェビナーなどのコンテンツ、URPやHDRPの実活用事例、各種コミュニティについてそれぞれ紹介しています。

### Unity 6 Optimization Guides for console, PC, mobile, web and XR

[Unity 6 Optimization Guides for console, PC, mobile, web and XR | Unity](https://unity.com/blog/unity-6-game-optimization-guides)

Unityで制作されたモバイルやXR、Webアプリなどの最適化手法をまとめたE-book「[Optimize your game performance for mobile, XR, and the web in Unity](https://unity.com/resources/mobile-xr-web-game-performance-optimization-unity-6)」 と、PCやコンソールゲームの最適化手法をまとめたE-book「[Optimize your game performance for consoles and PCs in Unity](https://unity.com/resources/console-pc-game-performance-optimization-unity-6)」が、それぞれUnity 6向けのアップデートが行われました。

## Articles

### ILPostProcessor 入門 第5回目「様々なテクニック」

[ILPostProcessor 入門 第5回目「様々なテクニック」 - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2024/11/15/170621)

ILPostProcessorの入門連載記事で、ILPostProcessorの開発を手助けするツールとその使い方、開発するうえで参考になる資料、トラブルシューティングについてまとめています。

### hls.jsを用いてWebGL環境でHLS動画を再生する

[【Unity】hls.jsを用いてWebGL環境でHLS動画を再生する | ねこじゃらシティ](https://nekojara.city/unity-webgl-play-hls-video)

WebGLビルドされたUnityアプリケーション上で、hls.jsを用いてHLS（HTTP Live Streaming）動画を再生する実装について解説しています。

### Unity Multiplayer Play Mode (MPPM) のVirtual PlayerをAnjinで自動プレイさせてみた

[Unity Multiplayer Play Mode (MPPM) のVirtual PlayerをAnjinで自動プレイさせてみた - やらなイカ？](https://www.nowsprinting.com/entry/2024/11/12/080000)
Unity 6以降で利用できる Multiplayer Play Mode と Anjin を用いたマルチプレイヤーゲームの自動プレイを、Unity社が公開するマルチプレイヤーの2Dシューターサンプル「[GalacticKittens](https://github.com/UnityTechnologies/GalacticKittens)」Unityを題材に、その実現方法を紹介しています。
### ゲームの起動時にベンチマークを走らせることにした

[ゲームの起動時にベンチマークを走らせることにした [Unityゲームグラフィックス実践] #gamedev - Qiita](https://qiita.com/suzuna-honda/items/72928d6e2f28683fe914)

ゲームのデフォルト画質設定などのためのモバイル端末のスペックの把握のために、ゲーム起動時にベンチマークを走らせることで、その結果からスペックを類推するシステムについて、その仕組みやシステム運用時に発生した課題や解決方法について紹介しています。

### Unityのクォータニオンの掛け算 ～順番によって結果が変わる理由と対策～

[Unityのクォータニオンの掛け算 ～順番によって結果が変わる理由と対策～ #Quaternion - Qiita](https://qiita.com/segur/items/0b8e3d74c7d11c60436a)

Unity上でクォータニオンの掛け算を行う際の順序とその計算結果について紹介しています。

### Pull RequestコメントでUnity Cloud BuildをトリガーするCI

[Pull RequestコメントでUnity Cloud BuildをトリガーするCI](https://zenn.dev/matuyuhi/articles/9e12bc86fc4495)

GitHub Actionsで、Pull Request に対するコメントをトリガーに Unity Cloud Buildでアプリビルドを行う方法について紹介しています。
