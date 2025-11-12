---
type: unity-weekly
title: 'IL2CPP runtime performance improvements in Unity 2021.2 - Unity Weekly #056'
description: ''
pubDatetime: 2022-02-21T05:00:00.000Z
tags:
  - Unity
  - Unity Weekly
---

# Unity Official

## 機能ハイライト：Unity 2021.2 における IL2CPP ランタイムのパフォーマンス改善

[機能ハイライト：Unity 2021.2 における IL2CPP ランタイムのパフォーマンス改善 | Unity Blog](https://blog.unity.com/ja/technology/feature-highlight-il2cpp-runtime-performance-improvements-in-unity-20212)

この記事では、Unity 2021.2でのIL2CPPの改善項目を解説しています。

「デリゲートの呼び出し」、「不必要なボックス化のチェック」、「ジェネリック仮想メソッドの呼び出し」、「Enum.HasFlag」、「制約された呼び出し」それぞれのパフォーマンス改善の概要とそのベンチマークを紹介しています。

## IMPORTANT: Upcoming changes to the Graphics repository

[Unity - IMPORTANT: Upcoming changes to the Graphics repository - Unity Forum](https://forum.unity.com/threads/important-upcoming-changes-to-the-graphics-repository.1239826/)

Githubで公開されている[グラフィックスレポジトリ](https://github.com/Unity-Technologies/Graphics)の管理が、今後はUnityの内部レポジトリ上で開発が行われ、Github上のグラフィックスレポジトリは内部レポジトリのミラーとなる変更がアナウンスされました。

開発速度の向上や、開発プロセスの複雑さの軽減などを目的として、この変更を採用したことを説明しています。ミラーリングの頻度は、目標として遅延を3週間を超えないことを目指し、また、Scriptable Render Pipeline（SRP）のソースコードは公開状態を保ちます。

2022/02/18までにGithubの公開レポジトリ上での開発は停止され、03/11頃にミラーリングを開始するとのことです。

## Adaptive Probe Volumes (APVs) experimental release for HDRP in 2021.2

[Unity - Adaptive Probe Volumes (APVs) experimental release for HDRP in 2021.2 - Unity Forum](https://forum.unity.com/threads/adaptive-probe-volumes-apvs-experimental-release-for-hdrp-in-2021-2.1238824/)

SPRのためのLight ProbeシステムであるAdaptive Probe Volumes（APVs）の実験バージョンがUnity2021.2のHigh Definition Render Pipeline（HDRP）向けにリリースされました。

ドキュメントは[Github上](https://github.com/Unity-Technologies/Graphics/blob/2021.2/staging/com.unity.render-pipelines.high-definition/Documentation~/Probe-Volumes.md)で確認できます。また、インストールのため[の簡単なスライド](https://docs.google.com/presentation/d/1f5hTNg8XClSYaOxHNj-8NjDhE6Wn4LRxa3lV5xFmJHM/edit#slide=id.g114c4392fa9_0_43)も公開されています。

次のステップとして、Universal Render Pipeline（URP）サポートやライトプローブのバリアント管理、時間帯シナリオのためのライトプローブのブレンディングなどの対応を予定しているとのことです。

# Articles

## VRChat ライトベイク事始め

[OpenKnowledge/VRChat ライトベイク事始め - esa-pages.io](https://esa-pages.io/p/sharing/15655/posts/7/0840e2139dc804a351a5.html)

この記事では、Unityでライトベイクを行うための基本的な知識から、ライトベイクのための各種設定、ライトベイクの実行方法や確認方法について解説しています。

また、ライトベイクのチューニング方法や、トラブルシューティングについても言及しています。

## UniRxアンチパターン集

[UniRxアンチパターン集 - Qiita](https://qiita.com/toRisouP/items/91b7860af5e3eab037fc)

この記事では、UniRxを使う際のアンチパターンについて解説しています。

Dispose忘れ、不得意な処理のUniRxでの記述、オペレーター内での副作用、整理されていないイベントフローなど、それぞれのアンチパターンの紹介と、そのようなアンチパターンをどのように対策するのか、について説明しています。

## Cube Sphere

[Cube Sphere](https://catlikecoding.com/unity/tutorials/procedural-meshes/cube-sphere/)

この記事はCatlike Codingの[Procedural Meshチュートリアルシリーズ](https://catlikecoding.com/unity/tutorials/procedural-meshes/)の記事で、はじめに立方体のメッシュを生成して、その立方体メッシュを球に変換する方法について解説しています。

## uLipSync にアニメーションベイク機能を追加してみた

[uLipSync にアニメーションベイク機能を追加してみた - 凹みTips](https://tips.hecomi.com/entry/2022/02/19/202558)

このブログの著者が開発する[uLipSync](https://github.com/hecomi/uLipSync)に実装されている、解析した音声情報からブレンドシェイプを動かすアニメーションを出力する（ベイクする）仕組みについて、その機能の利用方法と、その実装の仕組みについて解説しています。

## プログラム変更後の待ち時間(コンパイル、ドメインリロード)を短縮する9つの方法

[プログラム変更後の待ち時間(コンパイル、ドメインリロード)を短縮する9つの方法【Unity】【最適化】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Reload_Optimization?utm_source=feed)

UnityEditor上でコードを編集した後の待ち時間（コンパイルやドメインリロード）を短縮するための方法を9選紹介しています。

## UPM経由でNuGetパッケージを扱えるUnityNuGetについて

[UPM経由でNuGetパッケージを扱えるUnityNuGetについて](https://zenn.dev/drumath2237/articles/01a760cac9f4bc)

この記事では、Unity Package Manager（UPM）経由でNuGetのパッケージをインストールするための[UnityNuGet](https://github.com/xoofx/UnityNuGet)というライブラリについての説明と、このライブラリを用いて実際にSignalR ServiceやAzure Kinect Sensor SDKをインストールする使用例を紹介しています。

また、Unityのパッケージ管理システムとしてunitypackageやUPMや、Open UPMについても解説しています。

## Tutorial How To Make An Interactive Grass Shader In Unity

[Tutorial How To Make An Interactive Grass Shader In Unity](https://gamedev.center/tutorial-how-to-make-an-interactive-grass-shader-in-unity/)

この記事では、[Roystan氏のジオメトリシェーダーによる草表現のチュートリアル記事](https://roystan.net/articles/grass-shader.html)で取り扱っているグラスシェーダーに、オブジェクトの移動に対してのインタラクションを実装する方法を紹介しています。

## Unity エディタが重い・Hold on や Unity is busy が長い時に試すこと 30 選

[【Unity】Unity エディタが重い・Hold on や Unity is busy が長い時に試すこと 30 選 - コガネブログ](https://baba-s.hatenablog.com/entry/2022/02/16/090000)

UnityEditorの動作を軽くするために確認しておきたい設定項目や実装について、30項目紹介しています。

## ****MRTK2.7.3 + AzureSpatialAnchorsSDK2.12をHoloLens2、Android、iOSで動かす****

[MRTK2.7.3 + AzureSpatialAnchorsSDK2.12をHoloLens2、Android、iOSで動かす - Qiita](https://qiita.com/h_koya/items/8ddffdff6f01842cec41)

MixedRealityToolKit（MRTK）とAzureSpatialAnchorsSDKをUnityプロジェクトに導入して、サンプルシーンをHoloLens2とAndroid、iOSの実機でそれぞれ動かす方法を、スクリーンショット付きで解説しています。

## Cloud Build APIを使って最終ビルドの一覧を表示する

[【Unity】Cloud Build APIを使って最終ビルドの一覧を表示する - Qiita](https://qiita.com/IShix/items/f220d88ddfb650320bfd)

Unityの提供するUnityプロジェクトのCIサービスである[Cloud Build](https://unity.com/features/cloud-build)のAPIから、最終ビルドの情報を取得し、ダウンロード用URLを生成する方法を、PHP実装で解説しています。
