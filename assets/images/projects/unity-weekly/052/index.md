---
type: unity-weekly
title: 'The latest in Search: Unity 2021.2 - Unity Weekly #052'
description: ''
pubDatetime: 2022-01-24T05:00:00.000Z
tags:
  - Unity
  - Unity Weekly
---

# Unity Official

## Unity 2021.2 における Search 機能の最新情報

[Unity 2021.2 における Search 機能の最新情報 | Unity Blog](https://blog.unity.com/ja/technology/the-latest-in-search-unity-20212)

Unity 2021.1で[Quick Search](https://docs.unity3d.com/Packages/com.unity.quicksearch@3.0/manual/index.html)パッケージのSearchワークフローがコアに取り込まれ、手動インストールする必要がなくなりました。また、2021.2では大幅な改良が行われました。

本記事では2021.2で改善されたSearch機能のうち、「インデキシングのパフォーマンス向上」に関してその設定項目の紹介や「保存済み検索の整理」、「Search Table」ビュー、「Search Picker」によるObject Pickerの代替や「Search Expression」による複雑なアセットへのクエリ構築などを取り上げています。

## **Unity Hub で生産性を大きく向上させよう**

[Unity Hubで生産性を大きく向上させよう | Unity Blog](https://blog.unity.com/ja/technology/speed-up-your-productivity-with-the-unity-hub)

新しいバージョンのUnity Hubについて、ワークフローやユーザー体験の向上、エディターのApple シリコン対応、Linux向けの体験向上について触れています。

## **Unity アセットストアでパブリッシャーとなる世界に踏み出そう**

[Unity アセットストアでパブリッシャーとなる世界に踏み出そう | Unity Blog](https://blog.unity.com/ja/games/explore-the-world-of-publishing-on-the-unity-asset-store)

Unityのアセットストアでライブラリやアセットを公開するメリットの紹介と、アセットストアで販売を行う方法、またPublisher Portalについて触れています。

## 「2022年Unityを頑張りたい！」と意気込むあなたに読んでほしい、おすすめアドベントカレンダー記事9選

[「2022年Unityを頑張りたい！」と意気込むあなたに読んでほしい、おすすめアドベントカレンダー記事9選｜Unity Japan（ユニティ・テクノロジーズ・ジャパン）｜note](https://note.com/unityjapan/n/naa38afa43bdc?utm_source=feedly&utm_medium=webfeeds)

「2022年Unityを頑張りたい！」と題して、2021年のアドベントカレンダーの記事の中から、9記事厳選して紹介しています。

# Articles

## Unity 2022.1 の HDR ディスプレイ出力機能を試す

[Unity 2022.1 の HDR ディスプレイ出力機能を試す](https://zenn.dev/tan_y/articles/fa4b0b708166a7)

Unity 2022.1でサポートされたHDRP（High Definition Render Pipeline）とAndroidのHDR対応について解説しています。

従来でのUnity上のHDRディスプレイの対応方法とあわせてわかりやすく説明されています。また、「Bit Depth 10 における色空間変換」や「UnityEditor上でのHDR出力の対応」についても触れています。

## Drawing with SDFs in Unity

[Drawing with SDFs in Unity – Bronson Zgeb](https://bronsonzgeb.com/index.php/2022/01/15/drawing-with-sdfs-in-unity/)

UnityでSDFs（Signed Distance Functions）で記述されたプリミティブ形状を描画する方法について紹介しています。

記事中ではSDFについてその基礎から、UnityでSDFを描画するための方法2Dでの実際のSDFの描画の実装についてそれぞれ紹介しています。

## コンパイル後やUnity再生開始時のリロードで時間がかかっている所(ボトルネック)を可視化する Editor Iteration Profiler

[コンパイル後やUnity再生開始時のリロードで時間がかかっている所(ボトルネック)を可視化する Editor Iteration Profiler【Unity】【最適化】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Editor_Iteration_Profiler?utm_source=feed)

Unity公式が提供するコンパイル後などのリロード時間を可視化する「[Editor Iteration Profiler](https://github.com/Unity-Technologies/com.unity.editoriterationprofiler)」について、インストール方法から使い方を解説しています。

## 【Plask】AIが動画から3Dモーションを作成してくれるサービスの紹介と、それをUnityで使用する方法

[【Plask】AIが動画から3Dモーションを作成してくれるサービスの紹介と、それをUnityで使用する方法 - Qiita](https://qiita.com/salt-k2t/items/0d8742da2425aea88f70)

Plask上で、動画からモーションを作成して、VRM形式のアバターに対してモーションを流す方法について紹介しています。

VRM形式のアバターはUniVRMを用いて利用しています。また、モーションはHumanoid形式でインポートすることでVRMアバターに対して対応させています。

## 【Unity】Unity 2021.2 から Inspector で参照を設定する時に Object Picker ではなく Unity Search を使用できる

[【Unity】Unity 2021.2 から Inspector で参照を設定する時に Object Picker ではなく Unity Search を使用できる - コガネブログ](https://baba-s.hatenablog.com/entry/2022/01/21/120000?utm_source=feed)

2021.2からInspectorの参照の設定方法に、標準のObject Picker以外にUnity Searchが利用できるようになりました。

本記事では、Object PickerではなくUnity Searchを利用するためのコードの記述方法および検索クエリの指定方法について解説しています。

## Tweening Animations in Unity with LeanTween

[Tweening Animations in Unity with LeanTween | raywenderlich.com](https://www.raywenderlich.com/27209746-tweening-animations-in-unity-with-leantween)

LeanTweenというアニメーションライブラリを用いて、オブジェクトやUI要素の移動・回転などの補完アニメーション（Tweening Animation）を実装する方法について紹介しています。

LeanTweenについてその概要とAnimatorによるアニメーションとのパフォーマンス比較、基本的な補完アニメーションを付ける方法、ボールのバウンドなどのモーションを付ける方法、UIのアニメーションをつける方法についてそれぞれ解説しています。

## 【Unity】Android実機でブレークポイントを置いてデバッグする

[【Unity】Android実機でブレークポイントを置いてデバッグする - Qiita](https://qiita.com/tak001/items/7f501924db6e93108f61)

Unityで作成したAndroidアプリを、実機上でVisual Studioを用いてブレークポイントデバッグを行う方法について、その設定方法について解説しています。

## Unityタイムラインでベジェ曲線に沿ってオブジェクトを移動する

[Unityタイムラインでベジェ曲線に沿ってオブジェクトを移動する - Qiita](https://qiita.com/KyoheiOkawa/items/8d0a275dcd12a1de1660)

タイムライン上で、ゲームオブジェクトをベジェ曲線に沿って動かす独自のタイムライントラックの実装について紹介しています。
