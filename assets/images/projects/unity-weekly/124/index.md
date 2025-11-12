---
type: unity-weekly
title: Unity Weekly 124
description: >-
  2023/06/05週のUnity Weeklyです。Unity 2022 LTS、CEDEC 2023、Unityデザイナーズ・バイブル
  Reboot、Entities 1.0などについてまとめています。
pubDatetime: 2023-06-04T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

6/1にUnity 2022 LTSがリリースされました。2022 LTSは、2024年の半ばまで隔週で更新され、その後2025年の半ばまで毎月更新されます。合わせて2020 LTSは今年の中旬ごろにサポート切れとなります。

また、CEDEC 2023のセッション一覧が[6/1に公開されました](https://cedec.cesa.or.jp/2023/session)。Unityに関するセッションも多数公開されています。

## Unity Officials

### Released Unity 2022 LTS

[2022 LTS Long Term Support Release Overview | Unity](https://unity.com/releases/lts)

Unity 2022 LTSが、2023/06/01にリリースされました。このページでは、2022 LTSの主要なアップデートについて紹介しています。

### Advanced tips for character art production in Unity

[Advanced tips for character art production in Unity | Unity Blog](https://blog.unity.com/games/advanced-tips-for-character-art-production-in-unity)

[@Sakura_Rabbiter](https://twitter.com/Sakura_Rabbiter)氏のゲスト投稿で、アート制作へのアプローチと、Unityでリアルなキャラクターを作成するための高度なヒントを紹介しています。

### Building the ‘Ōhi’a lehua tree with SpeedTree, part 2

[Building the ‘Ōhi’a lehua tree with SpeedTree, part 2 | Unity Blog](https://blog.unity.com/games/building-the-ohia-lehua-tree-with-speedtree-part-2)

UnityがGDC 2023で発表したセッションからSpeedTreeに関するチュートリアルセッションの中から、枝や幹の形の制御やLODの設定や風の効果、SpeedTree9の新機能についてピックアップして紹介しています。

### DOTS development status and next milestones - June 2023

[Official - DOTS development status and next milestones - June 2023 - Unity Forum](https://forum.unity.com/threads/dots-development-status-and-next-milestones-june-2023.1443250/)

Entities 1.0の正式リリースに際して、改めてDOTSとは何か、これまでの開発の流れ、プレリリース版から正式版の変更点、ECSを学ぶためのリソース、今後のマイルストーンについて紹介しています。

### Dropping support for Windows 7 as a target for the Unity Standalone Windows Player in Unity 2023.2

[Official - Dropping support for Windows 7 as a target for the Unity Standalone Windows Player in Unity 2023.2 - Unity Forum](https://forum.unity.com/threads/dropping-support-for-windows-7-as-a-target-for-the-unity-standalone-windows-player-in-unity-2023-2.1443097/)

Unity 2023.2以降にWindows Standalone Player（Windows向けのアプリビルド）についてWindows 7がサポート対象外になるアナウンスしています。

最小サポートが21H1 （build 19043）になる点や、この背景としてOSのシェア数やセキュリティアップデートをWindows 7では受け取らない点などについて説明しています。

### 「Unityデザイナーズ・バイブル Reboot」出版記念トーク 

[「Unityデザイナーズ・バイブル Reboot」出版記念トーク - YouTube](https://www.youtube.com/watch?v=k4tb3GrSv4g)

「Unityデザイナーズ・バイブル Reboot」の出版に際して、本書籍の魅力やおすすめのセッションをゲストを招きつつ紹介しています。

## Articles

### Waterfall Shader Breakdown 

[Waterfall Shader Breakdown | Cyanilux](https://www.cyanilux.com/tutorials/waterfall-shader-breakdown/)

インタラクティブな滝シェーダーの実装について紹介しています。

オブジェクト（球体）が干渉した時の滝の裂け目を表現するためのSDFやメッシュのアルファクリッピング、滝の流れを表現するUVスクロールやノイズ表現をShaderGraphで実現する方法についてそれぞれ解説しています。

### Gaussian Blur Post Process in Unity URP

[Gaussian Blur Post Process in Unity URP](https://danielilett.com/2023-06-01-tut6-6-gaussian-blur/)

ガウシアンブラーをポストプロセスで画面全体に適用する方法について、ガウシアンブラーの概要からURPの `VolumeComponent`・`IPostProcessComponent`・`ScriptableRenderPass`を用いた実装について、それぞれ解説しています。

### Input Systemでローカルマルチを実装する

[【Unity】Input Systemでローカルマルチを実装する | ねこじゃらシティ](https://nekojara.city/unity-input-system-local-multiplayer)

Input Systemでローカルマルチ（1アプリ上で複数のプレイヤーの入力を受け取る）を実現するための`PlayerInputManager`の利用方法と、マルチプレイのための画面分割方法、画面分割で利用するカメラにCinemachine Brainを用いる方法についてそれぞれ解説しています。

### UnityプロジェクトのGitHub Actions実行を高速化する事例紹介

[UnityプロジェクトのGitHub Actions実行を高速化する事例紹介 | QualiArtsエンジニアブログ](https://technote.qualiarts.jp/article/55)

Github Actionsのself-hosted runnerを用いたUnityビルドで、Libraryディレクトリをキャッシュすることで高速化するテクニックの紹介しています。

複数アクション間でLibraryを共有する方法やLibraryのロック、古いLibraryを自動で削除する方法などについて解説しています。

### Serpensquares

[Serpensquares](https://catlikecoding.com/unity/tutorials/prototypes/serpensquares/)

Serpensquaresと呼ばれる、最大4人であそべるターンベースのゲームのプロトタイプについて、そのロジックから見た目の実装について解説しています。

### Unity バージョンの選び方のヒント

[Unity バージョンの選び方のヒント - 実践ゲーム製作メモ帳2](https://eiki.hatenablog.jp/entry/unityupdate)

Unityでどのバージョンを用いて開発を行うと良いかのヒントを、Unityのバージョンの特徴や、コンシュマー機やモバイル向けのゲーム開発事情など、複数の観点でまとめています。

### How to use RaycastCommand

[How to use RaycastCommand – COFFEE BRAIN GAMES](https://coffeebraingames.wordpress.com/2023/05/22/how-to-use-raycastcommand/)

`RaycastCommand`を用いたレイキャスト処理を行う方法とそのパフォーマンスについてまとめています。

### Unityシーン容量削減勉強会 第3回 ～モデル編～

[Unityシーン容量削減勉強会 第3回 ～モデル編～ - Qiita](https://qiita.com/segur/items/550af881e7e8d5470b92)

Unity上でのモデルのメモリ使用量やアプリサイズを削減するための、頂点とメッシュの圧縮設定、モデルの各種設定についてそれぞれ解説しています。

### New Input System をバッチリ使う

[【Unity】New Input System をバッチリ使う - 実践ゲーム製作メモ帳2](https://eiki.hatenablog.jp/entry/inputsystem)

Input SystemをPlayer Inputを介さずC#スクリプティングで直接クラスをnewして利用する方法と、ゲームで必要な主要な機能を実装する方法について解説しています。

### 6 useful extensions for IEnumerable

[6 useful extensions for IEnumerable](https://steven-giesel.com/blogPost/1b8eaaef-01a3-4799-9a96-f0d37197d175?)

`IEnumerable`の操作に便利な拡張メソッドの実装を6つ紹介しています。

### 変数の値(数値)を表示するShaderの作り方

[変数の値(数値)を表示するShaderの作り方](https://zenn.dev/dimebag29/articles/1aa7189dd8d954)

指定した変数の値を表示するシェーダーを実装する方法を、その概要と実際のシェーダーコードを交えつつ解説しています。

完成品は[こちら](https://drive.google.com/file/d/1foiHOz4G_1eIlK9UiUhmhK98m2ozbMiq/view)で公開されています。

### キャラクタートゥーンシェーダの表現手法をまとめる その３(アウトライン\[背面法\])

[【Unity URP】キャラクタートゥーンシェーダの表現手法をまとめる その３(アウトライン\[背面法\])](https://zenn.dev/inpro/articles/8fa14af34f56a7)

トゥーンシェーダーでのアウトライン表現について、背面法によるアウトライン描画の概要とその実装を紹介しています。

### Unityで視差マッピング・視差遮蔽マッピング 

* [Unityで視差マッピング - 3Dゲーム開発備忘録](https://daiki-eguchi.hatenablog.com/entry/2023/05/24/094203)
* [Unityで視差遮蔽マッピング - 3Dゲーム開発備忘録](https://daiki-eguchi.hatenablog.com/entry/2023/05/29/192039)

視差マッピングや視差遮蔽マッピングについて、それぞれの概要からシェーダー実装を解説しています。

### Understanding and implementing regular Matcaps in Unity

[Understanding and implementing regular Matcaps in Unity | by Kumo Kairo | May, 2023 | Medium](https://medium.com/@kumokairo/understanding-and-implementing-regular-matcaps-in-unity-10c6b78c6827)

Matcapについて、その概要からシェーダー実装を解説しています。


### Unityで構図のための補助線を表示する

[Unityで構図のための補助線を表示する - Qiita](https://qiita.com/shirokuma1101/items/6af3f2bbeb62fd879c1d)

Unityのシーンビュー上で構図のための補助線を表示する実装を紹介しています。

### Feel でヒットストップを作る

[【アセット紹介】Feel でヒットストップを作る【Unity】 - Raspberlyのブログ](https://raspberly.hateblo.jp/entry/Feel_HitStop)

Feelというアセットを用いてヒットストップを実装する方法について解説しています。

### 【URP】あらゆる描画のデバッグをできるRendering Debuggerの概要&よく使う機能まとめ

[【Unity】【URP】あらゆる描画のデバッグをできるRendering Debuggerの概要&よく使う機能まとめ - LIGHT11](https://light11.hatenadiary.com/entry/2023/05/30/193111)

URPで提供されている描画デバッグ用の機能Rendering Debuggerを紹介しています。

### SpeechSynthesisUtterance(Web Speech API)をiOS Safariで利用できるようにする

[【UnityWebGL】SpeechSynthesisUtterance(Web Speech API)をiOS Safariで利用できるようにする - Qiita](https://qiita.com/kazuki_kuriyama/items/42e496ad3d25dd6b9436)

UnityのWebGLビルドにおいて、Web Speech APiをiOSのSafariで利用するための実装を紹介しています。

### ゲーム開発につながる近道「ThunderFire UX Tool」を紹介

[ゲーム開発につながる近道「ThunderFire UX Tool」を紹介](https://zenn.dev/thunderfireux/articles/f3e1cc2802a411)

NetEase社の提供する、UI開発のためのツールセット「ThunderFire UXTool」の概要について紹介しています。

### uLipSync の不具合修正（VRM / .NET Standard 2.0 関連）をしました

[uLipSync の不具合修正（VRM / .NET Standard 2.0 関連）をしました - 凹みTips](https://tips.hecomi.com/entry/2023/05/30/215345)

ブログの著者が開発するuLipSyncのv3.0.2におけるVRMや.NET Standard 2.0に関する不具合修正の内容と、それに関する開発メモを紹介しています。


## Repositories

### ccontinisio/zelda-botw-toon-shader

[ccontinisio/zelda-botw-toon-shader: Toon shader for Unity, in the style of Zelda: Breath of the Wild / Tears of the Kingdom](https://github.com/ccontinisio/zelda-botw-toon-shader)

Zelda: Breath of the Wild/Tears of the Kingdomのようなトゥーンシェーダー実装。

### letharqic/InstantPipes

[letharqic/InstantPipes: Unity editor tool for quickly generating pipes — with pathfinding](https://github.com/letharqic/InstantPipes)

プロシージャルなパイプジェネレータ実装。エディタで始点と終点決めたら、他パイプに重ならないような形でパイプを生成する。

### creativeIKEP/UniCamEx

[creativeIKEP/UniCamEx: UniCamEx is a virtual camera for MacOS that can display textures output from Unity.](https://github.com/creativeIKEP/UniCamEx)

Unityから任意の画像をMacの仮想カメラに出力するためのアセット。

### apilola/tension-tools

[apilola/tension-tools: The project contents contain the code necessary to calculate tension data on inside Unity Shaders. It also contains some other tools like the nodes required to re-create the "Skin" material that you see in the showcase above. The following implementation will work with Rigged Geometry as well as BlendShapes/MorphTargets.](https://github.com/apilola/tension-tools?)

シェーダーで張力を計算するためのツールやシェーダーコード。

### henrihanot/unity-procedural-cables

[henrihanot/unity-procedural-cables: Components for make procedural cables and curved shapes](https://github.com/henrihanot/unity-procedural-cables?)

プロシージャルにケーブルや曲線形状を生成するためのコンポーネント。

### ikpil/DotRecast

[ikpil/DotRecast: C# Recast & Detour is a navigation mesh toolkit for games, Unity3D and servers.](https://github.com/ikpil/DotRecast?)

Unityおよびサーバーのためのナビゲーションメッシュツールキット。
