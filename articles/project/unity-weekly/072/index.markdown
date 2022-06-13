---
type: "unity-weekly"
title: "HDRP & URP - Unity Weekly #072"
tags: ["Unity Weekly","Unity"]
date: "2022-06-12T19:00:00"

---

# Unity Officials

## Unity 2021 LTS 版に更新された HD レンダーパイプラインの決定版ガイドのご紹介

[Unity 2021 LTS 版に更新された HD レンダーパイプラインの決定版ガイドのご紹介 | Unity Blog](https://blog.unity.com/ja/games/updated-for-2021-lts-the-definitive-guide-to-lighting-in-the-high-definition-render-pipeline)

去年公開された[HDRP（High Definition Render Pipeline）の包括的ガイド](https://blog.unity.com/ja/technology/it-begins-with-light-the-definitive-guide-to-the-high-definition-render-pipeline)にUnity 2021 LTSにおけるアップデート内容が加えられました。

主に、ライトアンカーやクラウドレイヤーやボリュメトリククラウドなどの雲の描画、レンズフレア、動的解像度、レイトレーシングなどの内容が更新されています。

## Plastic SCMよくある質問集

[Plastic SCMよくある質問集 – Unity for Pro](https://forpro.unity3d.jp/unity_pro_tips/2022/06/06/3764/)

バージョン管理ツールPlastic SCMでよくある質問についてまとめられています。

# Articles

## Android Studio を利用して C++ のスタティックライブラリ（.a）をUnity（C#）向けに作成する

[Android Studio を利用して C++ のスタティックライブラリ（.a）をUnity（C#）向けに作成する](https://zenn.dev/meson/articles/make-library-for-unity-for-android)

Android StudioでのC++で実装したコードをスタティックライブラリとしてビルドして、作成したライブラリをC#側で呼び出す方法について紹介しています。



スタティックライブラリとしてビルドする際のCMakeの記述方法、作成したCMakeの設定をGradleで呼び出すための `build.gradle` の設定の記述方法についても合わせて紹介されています。

## Writing Unity URP Shaders with Code Part 1: The Graphics Pipeline and You

[Writing Unity URP Shaders with Code Part 1: The Graphics Pipeline and You | by NedMakesGames | Medium](https://nedmakesgames.medium.com/writing-unity-urp-shaders-with-code-part-1-the-graphics-pipeline-and-you-798cbc941cea)

URP（Universal Render Pipeline）でシェーダーを記述するためのチュートリアルシリーズで、URPプロジェクトのセットアップ方法からURPによる基本的なシェーダーコードの記述方法、グラフィックスパイプライン、頂点情報やテクスチャマッピングについてそれぞれ解説しています。



このチュートリアルシリーズは今後も更新予定で、下記コンテンツを予定しているとのことです。

1. *Introduction to shaders*: simple unlit shaders with textures.
    * シンプルなUnlit Shaderとテクスチャ
1. *Simple lighting and shadows*: directional lights and cast shadows.
    * ディレクショナルライトとキャストシャドウ
1. *Transparency and optimization*: blended and cut out transparency and using the SRP batcher.
    * 透明度と最適化、SRP batcher
1. *Physically based rendering*: normal maps, metallic and specular workflows, and additional blend modes.
    * PBR
1. *Advanced lighting*: spot, point, and baked lights and shadows.
    * 発展的なライト: スポットライト・ポイントライト・ライトとシャドウのベイク
1. *Advanced URP features*: depth, depth-normals, screen space ambient occlusion, single pass VR rendering and more.
    * 発展的なURP機能: depth, depth-normal, SSAO, VRのためのシングルパスレンダリングなど
1. *Custom lighting models*: accessing and using light data to create your own lighting algorithms.
    * カスタムライト: ライト情報にアクセスして独自のライティングの実装
1. *Vertex animation*: animating meshes in a shader.
    * シェーダーによる頂点アニメーション
1. *Gathering data from C#*: additional vertex data, global variables and procedural colors.
    * C#からデータを渡す方法、追加の頂点データ、グロバール変数など
## TryGetComponent() と比べたら GetComponent() を使う理由がなくなった件

[TryGetComponent() と比べたら GetComponent() を使う理由がなくなった件](https://zenn.dev/fuqunaga/articles/61705dbe0f7680)

Unity 2019.2 から利用できる、 `GetComponent()` と同様の機能をもつ `TryGetComponent()` について、コンポーネントの有無でのそれぞれのメソッドのパフォーマンス（GCと実行速度）をエディターと実機ビルド（Windows10）での比較結果を紹介しています。

## WebGL + iOSで動画が閲覧できない場合に試してみること

[【Unity】WebGL + iOSで動画が閲覧できない場合に試してみること - Qiita](https://qiita.com/kazuki_kuriyama/items/2b66c3976abdf070566d)

動画再生機能を実装したアプリのWebGLビルドにおいて、iOSで動画が閲覧できないときの原因として考えられる点としてCORSや動画フォーマット、JSのvideoタグの設定など、８つ紹介しています。

## Cinemachineカメラの俯瞰・アオリ角の最大値を制限する / CinemachineExtension のススメ

[【Unity】Cinemachineカメラの俯瞰・アオリ角の最大値を制限する / CinemachineExtension のススメ - Qiita](https://qiita.com/tsukimi_neko/items/7bf90ef69b199aed699b)

`CinemachineExtension` を用いてVirtual Cameraの挙動を調整する方法と、この拡張を用いて俯瞰・ピッチ角を制限する実装、インスペクターでの設定方法についてそれぞれ紹介しています。

## Unity2021から追加されたil2CppCodeGenerationを適切に設定するとIL2CPPビルドが最大50%早くなる

[Unity2021から追加されたil2CppCodeGenerationを適切に設定するとIL2CPPビルドが最大50%早くなる - きゅぶろぐ](https://blog.kyubuns.dev/entry/2022/06/06/180005)

Unity 2021から追加されたil2CppCodeGenerationの設定と、UniTaskとUniRxを導入したサンプルプロジェクトでの検証結果について紹介しています。

## 数十行で書くなんちゃってIK

[数十行で書くなんちゃってIK - Qiita](https://qiita.com/120byte/items/e7171de0ddeca1e20d81)

腕や足、頭などを動かすための簡単なIKライクな実装について紹介しています。

## UnityにあるURP Decal Projector使ってみた

[UnityにあるURP Decal Projector使ってみた - Qiita](https://qiita.com/unnbabo/items/c02c93421a6c28129f4a)

Unity 2020のURPから導入された[デカール表現](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@12.0/manual/renderer-feature-decal.html)のためのDecal Projectionの使い方について、Shader Graphを用いたデカール用のシェーダーとマテリアルの作成方法と、Decal Projectionの各種設定について解説しています。

## ReSharper の Type Dependency Diagram でクラスの依存関係が一目瞭然

[ReSharper の Type Dependency Diagram でクラスの依存関係が一目瞭然 - Qiita](https://qiita.com/mhama/items/e93a15ff3ba873a8ec71)

ReSharperのType Dependency Diagramを用いて、プロジェクト内の特定のクラスに関連している型を可視化する方法や、名前空間やプロジェクト構造によるグルーピングやレイアウト調整によってグラフを見やすくする方法についてそれぞれ紹介しています。

## 【URP】ポイントライトの影を落とす方法とパフォーマンスのお話 (Unity2021.1から)

[【Unity】【URP】ポイントライトの影を落とす方法とパフォーマンスのお話 (Unity2021.1から) - LIGHT11](https://light11.hatenadiary.com/entry/2022/06/06/193335)

Unity 2021.1 から 利用できる URPのポイントライトによって影を落とす機能について紹介しています。

またシャドウマップの設定と使用されるテクスチャアトラスのサイズ（メモリ使用量）、ポイントライトによるシャドウにより、実機でどの程度負荷がかかるのかについて触れています。

## シェーダーでひびを入れる［その4：PN-Triangles編］

[【Unity】シェーダーでひびを入れる［その4：PN-Triangles編］ - Qiita](https://qiita.com/masamin/items/595f5bb8a85e04fc4c09)

頂点の座標と法線から曲面を求める PN-Triangles とこのアルゴリズムによるポリゴン分割方法、このアルゴリズムを用いたHull-Shader Stage および Domain-Shader Stageによるテッセレーションの実装方法と、これによるポリゴンへのひびの表現を解説しています。

また、今回の実装と[前回までの実装](https://qiita.com/masamin/items/9646ab3a469b4ac6b87a)について、見た目の変化を考察しています。

## ProjectビューにおいてTwo Columnレイアウトの左側のパネルで選択中しているフォルダとファイルを取得する

[【Unity】【エディタ拡張】ProjectビューにおいてTwo Columnレイアウトの左側のパネルで選択中しているフォルダとファイルを取得する - LIGHT11](https://light11.hatenadiary.com/entry/2022/06/09/201939)

プロジェクトビューの左側パネル（ プロジェクト内のアセットやパッケージ、お気に入りを選択できるパネル）で選択中のフォルダやファイルの情報を取得する公開APIが存在しないため、Unity InternalなAPIをリフレクション経由で叩いて取得する実装を紹介しています。

## Colorとカラーコードの相互変換【Unity】

[Colorとカラーコードの相互変換【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/ColorUtility)

UnityでColorについての操作を提供する `ColorUtility`と、このクラスを用いたカラーコードとUnity標準の `Color` 構造体の相互変換の方法を紹介しています。

## MRTK3のエディタでのInput simulationを試してみる

[MRTK3のエディタでのInput simulationを試してみる - Qiita](https://qiita.com/hachicomb/items/d4b37dd2f9d8ee11a234)

先日Public Previeが公開されたMRTK3（Mixed Reality Toolkit 3）についての簡単な紹介と、MRTK3で強化されたエディタでのInput simulationについて解説しています。

## JsonUtilityでオブジェクトをシリアライズしたりデシリアライズしたりする

[JsonUtilityでオブジェクトをシリアライズしたりデシリアライズしたりする | Yucchiy's Note](https://blog.yucchiy.com/2022/06/jsonutility-serialize-deserialize-unity-object/)

`JsonUtility`の基本的から使い方やシリアライズをサポートされていない型をシリアライズする方法、Unity標準型のシリアライズ、 `MonoBehaviour` などのデシリアライズの挙動と `JsonUtility.FromJsonOverride`、 `UnityEngine.Object` などの参照のシリアライズ挙動と `EditorJsonUtility` についてそれぞれ解説しています。

# Repositories

## apple / unityplugins

[apple/unityplugins](https://github.com/apple/unityplugins)

Apple公式が提供するAppleの各種フレームワークのUnityプラグインです。現在下記のフレームワークのUnityプラグインを提供しています。

* Apple.Core
    * Appleプラットフォームの各種設定を行うためのエディタUIやビルドスクリプト、各種プラグイン実装のためのコアライブラリ。
* Apple.Accesibility
    * [Accessibilityフレームワーク](https://developer.apple.com/documentation/accessibility/) のUnityプラグイン
* Apple.CoreHaptics
    * [Core Haptics](https://developer.apple.com/documentation/corehaptics) のUnityプラグインとサンプルシーンの実装
* Apple.GameController
    * Apple製品経由でDualShock4やXboxのコントローラーやマウス、キーボードなどを入力として受け付けることのできる [Game Controller](https://developer.apple.com/documentation/gamecontroller) のUnityプラグイン。
* Apple.GameKit
    * アチーブメントやリーダーボードなどを実装できる GameKit のUnityプラグイン。Taskベースで非同期にリクエストが行えるように実装されている。
* Apple.PHASE
    * [PHASE](https://developer.apple.com/documentation/phase/)（Physical Audio Spatialization Engine）のUnityプラグイン




ical Audio Spatialization Engine）のUnityプラグイン




