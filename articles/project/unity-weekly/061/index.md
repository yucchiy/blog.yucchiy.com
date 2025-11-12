---
type: unity-weekly
title: >-
  Introducing Enemies: The latest evolution in high-fidelity digital humans from
  Unity - Unity Weekly #061
description: ''
pubDatetime: 2022-03-28T00:00:00.000Z
tags:
  - Unity
  - Unity Weekly
---

# Unity Official

## 『Enemies』のご紹介：Unity が送る、現実に迫るデジタルヒューマンの最新進化形

[『Enemies』のご紹介：Unity が送る、現実に迫るデジタルヒューマンの最新進化形 | Unity Blog](https://blog.unity.com/ja/news/introducing-enemies-the-latest-evolution-in-high-fidelity-digital-humans-from-unity)

Unityの新しいデジタルヒューマンのシネマティックティザー「[Enemies](https://unity.com/ja/demos/enemies)」が公開されました。

この記事では、「Enemies」で利用されているグラフィックスの機能やUnityの新しいヘアソリューションなどについて紹介しています。

「Enemies」プロジェクトの詳細については[こちらのページ](https://unity.com/ja/demos/enemies)で確認できます。また、このデモで利用しているアップデートやヘアーソリューションは、2022年のQ2に[デジタルヒューマンパッケージ](https://github.com/Unity-Technologies/com.unity.demoteam.digital-human)にて公開予定です。

## Unity の最新サンプルゲーム『Gigaya』のご紹介

[Unity の最新サンプルゲーム『Gigaya』のご紹介 | Unity Blog](https://blog.unity.com/ja/games/introducing-unitys-latest-sample-game-gigaya)

Unityは[GDC 2022](https://unity.com/ja/events/gdc2022)で近日公開予定のパズルプラットフォーマーのサンプルゲーム「Gigaya」を紹介しました。

「Gigaya」を開発するチームはどのような構成なのか、どのような目的をもったチームなのかについて紹介しています。

また、グラフィックスに利用されているUniversal Render Pipeline（URP）やキャラクターを制御するプラットフォーマーキャラクターコントローラーにも言及しています。

「Gigaya」は2022年の公開を目指して開発中とのことです。またこのサンプルはアセットやソースコード含めて無料でダウンロードでき、ゲームはStreamストアにも無料で公開予定です。

## Unity ゲーミングサービス：6 月のローンチまでのロードマップ

[Unity ゲーミングサービス：6 月のローンチまでのロードマップ | Unity Blog](https://blog.unity.com/ja/games/unity-gaming-services-the-road-to-launch-in-june)

Unity Gaming Serviceの中から2020年の6月にベータリリースを終えて正式リリースされる予定のサービスについて紹介しています。

## 『Syberia: The World Before』の技術スタックを構築する

[『Syberia: The World Before』の技術スタックを構築する | Unity Blog](https://blog.unity.com/ja/games/building-the-tech-stack-for-syberia-the-world-before)

「[Syberia: The World Before](https://store.steampowered.com/app/1410640/Syberia_The_World_Before/)」はUnity5.5からプロジェクトがスタートし、2021年夏に Unity 2020 LTSに固定してリリースされています。

このゲームで導入された、High Definition Render Pipeline（HDRP）やC# Job System、Unity Input Systemなどの技術スタックについて解説しています。

# Articles

## Skybox tutorial part 1

[Skybox tutorial part 1 | Kelvin van Hoorn](https://kelvinvanhoorn.com/2022/03/17/skybox-tutorial-part-1/)

独自のSkyboxシェーダーの実装について紹介しています。

この記事のスカイボックスは、太陽や月の位置を天文的に正しくシミュレーションしているため、太陽の位置などの要因から複数のグラデーションテクスチャをサンプリングすることで大気の色味を表現しています。また、太陽や月の位置が正確なので日食や月食などの天文現象も正しい時間や場所で発生します。

この記事では、太陽の位置とメインカラーや地平線近くの霞の色などの複数枚のグラデーションテクスチャを用いたスカイボックスの色味表現や太陽と月の描画および月のライティング、星や星座の描画、日食と月食の表現について解説しています。

## Rendering realtime caustics

[Rendering realtime caustics](https://alexanderameye.github.io/notes/realtime-caustics/)

リアルタイムで制御可能な水面コースティクスの実装方法について紹介しています。コースティクスを表す複数枚のテクスチャを、ワールド空間に復元した深度値などの情報をもとにマッピングし、いくつかのコースティクス効果を適用することで見栄えを良くしています。

デプスバッファの値をワールド空間に変換する方法からコースティクステクスチャのマッピング方法、色収差・マッピングした箇所の輝度値に基づいたコースティクスのマスク・エッジフェードなどによるコースティクス効果の実装、カメラ設定についてそれぞれ解説しています。

## Toolbar Overlays in Unity

[Toolbar Overlays in Unity](https://www.carbidefunction.co.uk/post/toolbar-overlays-in-unity)

Unity 2021.2から、シーンビュー上に独自のツールバーを作成できる[Overlay](https://docs.unity3d.com/2021.2/Documentation/ScriptReference/Overlays.Overlay.html)という機能が導入されました。この記事では、独自のOverlayを実装する方法について紹介しています。

IMGUIを使用して独自のOverlayのUIを実装できる [IMGUIOverlay](https://docs.unity3d.com/2021.2/Documentation/ScriptReference/Overlays.IMGUIOverlay.html) を使ったOverlayの実装方法Overlayのライフサイクルの解説、や特定のMonoBehaviourがアタッチされたオブジェクトをシーンビュー上でクリックしたときOverlayを表示・選択を解除したときに非表示する方法、OverlayをツールバーにドラッグしてドッキングしたときのUIの制御について解説しています。

## 【Unity ガンマ補正】フェードアニメーションの色の歪みについて考えてみる

[【Unity ガンマ補正】フェードアニメーションの色の歪みについて考えてみる](https://zenn.dev/r_ngtm/articles/gamma-fade-animation)

色空間の設定（Project Settings > Other Settings > Color Space）がガンマのとき、リニアなRGBフェードアニメーションでは色変化がリニアに行われない現象と、対応としてガンマ補正を行う方法について紹介しています。

また、アルファもフェードするときにアルファ値もガンマ補正をかけると不自然な緩急がつく（ガンマ補正が二重にかかったような挙動）現象が発生する件の原因の解説と、その問題を回避するために、RGBのみガンマ補正をかけ、アルファには補正をかけない方法について解説しています。

## Photon Realtimeのネットワーク上でNetcode for GameObjectsで作ったアプリケーションを利用してみる

[Photon Realtimeのネットワーク上でNetcode for GameObjectsで作ったアプリケーションを利用してみる - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/ngo-photon-network)

Netcode for GameObjects上で構築したマルチプレイヤーゲームをPhoton Realtime上で動かす方法について紹介しています。

Netcode for GameObjectsは[Transports](https://docs-multiplayer.unity3d.com/docs/transport-utp/about-transport-utp/index.html)を用いてアプリケーションのトランスポート層の実装を差し替えることができます。[Multiplayer Community Contributions](https://github.com/Unity-Technologies/multiplayer-community-contributions)という有志によるTransportsの実装を用いてPhoton Realtime上でアプリケーションを動かすためのパッケージの導入や各種設定について解説しています。

## Shader bits: World space reconstruction, orthographic camera texture projection & fake perspective UVs

[Shader bits: World space reconstruction, orthographic camera texture projection & fake perspective UVs – Harry Alisavakis](https://halisavakis.com/shader-bits-world-space-reconstruction-orthographic-camera-texture-projection-fake-perspective-uvs/)

この記事ではシェーダーtipsとして、シェーダー内でワールド空間の座標系を復元する方法と、 `_OrthographicCamPosition` と `_OrthograhicCamSize` を用いてテクスチャを正投影カメラ上でのUV値を算出する方法、2D上で擬似的な遠近法の深さをUVとして計算する方法について紹介しています。

## 最近Editorでのみキャッシュして起動高速化したいものが増えてきたのでEditorPrefsWrapperでも作った

[最近Editorでのみキャッシュして起動高速化したいものが増えてきたのでEditorPrefsWrapperでも作った - きゅぶろぐ](https://blog.kyubuns.dev/entry/2022/03/19/171627)

`UnityEditor.EditorPrefs` をより便利に利用するためのラッパー実装について紹介しています。

実機で呼び出してもコンパイルエラーとせず空実装を返す方法や、EditorPrefsは文字列の格納のみをサポートしているが任意の型の情報を格納する方法について解説しています。

## System.Xml.Serialization.XmlSerializerで色々なXMLをデシリアライズするサンプル

[System.Xml.Serialization.XmlSerializerで色々なXMLをデシリアライズするサンプル](https://zenn.dev/ail/articles/41127d2fad1c80)

この記事では、 `System.Xml.Serialization.XmlSerializer` を用いてXMLをデシリアライズする方法について紹介しています。

`XmlRoot` や `XmlElement` を用いたデシリアライズ用の型の記述方法から、入れ子構造、 `XmlArray` と `XmlArrayItem` を用いたリスト構造、 `XmlText` を用いたテキスト内のXMLマークアップの記述方法について解説しています。

## Graphics.DrawMeshInstancedを使う

[【Unity】Graphics.DrawMeshInstancedを使う - Qiita](https://qiita.com/8March/items/930cf2a30a2f41b1a605)

`Graphics.DrawMeshInstanced` を用いて、大量のQuadを少ないバッチ数で（Instancingｗ用いて）まとめて描画する方法について紹介しています。

`Graphics.DrawMeshInstanced` の使い方から `SetVectorArray` を用いてインスタンスごとにプロパティを設定する方法、1024個以上のインスタンスを描画する方法（独自のバッチ）について解説しています。

## 【Android】Unityのアプリでadbを使ったクラッシュレポートの確認方法

[【Android】Unityのアプリでadbを使ったクラッシュレポートの確認方法 – 株式会社ロジカルビート](https://logicalbeat.jp/blog/8220/)

Unityで作成したAndroidアプリを実機で動かした際のログを、adbを用いて収集する方法について紹介しています。

ログを収集するためのAndroid端末の設定からadb logcatコマンドの基本的な利用方法、ログをタグや優先度などで絞り込む方法、ログをファイルへ書き出す方法について解説しています。
