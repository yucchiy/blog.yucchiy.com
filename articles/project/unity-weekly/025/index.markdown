---
type: "unity-weekly"
title: "Unity Weekly #025"
date: "2021-08-03T09:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

## 「IDOLY PRIDE」における描画最適化術

![](./logo.webp)

[「IDOLY PRIDE」における描画最適化術 | QualiArtsエンジニアブログ](https://technote.qualiarts.jp/article/23)

- この記事では、「[IDOLY PRIDE](https://idolypride.jp/)」における主に描画にでの最適化手法について紹介しています。
- MetalとVulkanをメインターゲットとして、C# Job SystemとComputeShaderを用い、更に頂点シェーダーとのデータの受け渡しにShader Storage Buffer Objectを用いることでより最適化を図っているとのことです。また、最適化の例としてレンズフレアとボリュームライト、ペンライトについてそれぞれ説明しています。

## Unity Burst での Neon intrinsics の使用に関する新しいガイド

![](./image1_0.jpg)

[Unity Burst での Neon intrinsics の使用に関する新しいガイド | Unity Blog](https://blog.unity.com/ja/games/updated-guide-for-using-neon-intrinsics-in-unity-burst)

- この記事では、Burst 1.5で追加された Arm社のNeonの組み込み関数を活用してパフォーマンスを最大化するための方法について紹介しています。
- コードの記述方法やデータの渡し方を工夫することで自動ベクトル化を容易にし高速化が見込めます。さらに`IsNeonSupported`によってBrustでNeon組み込み関数がサポート端末かを判定して、直接組み込み関数を呼び出すことでより高速化することが可能であることを解説しています。完全なガイドは[こちら](https://developer.arm.com/documentation/102556/latest/)から、また実際に当たり判定を最適化したプロジェクトを[こちら](https://assetstore.unity.com/packages/essentials/tutorial-projects/optimizing-collisions-with-burst-and-neon-intrinsics-196303)からダウンロードできます。

## Create an item management editor window with UI Toolkit

![](./SetupItem-1.gif)

[Create an item management editor window with UI Toolkit - GameDev Resources](https://gamedev-resources.com/create-an-item-management-editor-tool-with-ui-toolkit/)

- この記事では、UI Toolkitを用いてゲームのアイテム管理のエディタ機能を作成する方法を解説しています。
- リストビューの作成方法やIconPickerやObjectPickerの設定方法などUIの作成方法から、ScriptableObjectを用いてアイテムを管理する方法、追加・削除機能の実装まで、実践的に解説されています。

##  Pixelate Filter in URP/HDRP using Compute Shaders

![](./Example.png)

[Pixelate Filter in URP using Compute Shaders – Bronson Zgeb](https://bronsonzgeb.com/index.php/2021/07/25/pixelate-filter-in-urp-using-compute-shaders/)
https://bronsonzgeb.com/index.php/2021/08/01/pixelate-filter-in-hdrp-using-compute-shaders/

- この記事では、[以前取り上げたコンピュートシェーダーでピクセレートフィルター](https://bronsonzgeb.com/index.php/2021/07/17/pixelate-filter-post-processing-in-a-compute-shader/)実装を、URPおよびHDPRでどのように実現するかについて紹介しています。
- URPではScriptable Renderer Featuresによって独自のレンダーパスを足すことで、HDPRではCustomPostProcessVolumeComponentにより独自のポストプロセス処理としてフィルター処理を挟んでいます。それぞれの実装方法について説明しています。

## asmdefのVersion Definesを使って特定のPackageがインストールされていたら自動的に処理を変える

[【Unity】asmdefのVersion Definesを使って特定のPackageがインストールされていたら自動的に処理を変える - LIGHT11](https://light11.hatenadiary.com/entry/2021/07/19/200401)

- この記事では、asmdefのVersion Definesを使って特定のパッケージのインストールの有無で処理を切り替える方法について紹介しています。
- asmdefのVersion Definesでは、特定のアセンブリが入っている場合にのみDefine Symbolを定義することができるため、そのシンボルを用いて処理を振り分ける方法について説明しています。

## ミクシィの21新卒技術研修の資料と動画を公開します！ 

[ミクシィの21新卒技術研修の資料と動画を公開します！ - mixi developers](https://mixi-developers.mixi.co.jp/21-technical-training-a0bcdbf9bca0)

- この記事では、ミクシィ社の21年度新卒向けの技術研修で利用した講義資料および講義動画が公開しています。
- Unity研修のセクションでは、Unityの基礎からPhoton Engineを用いたマルチプレイの実装、Unityでの開発事例、Unity DOTSについて解説されています。
