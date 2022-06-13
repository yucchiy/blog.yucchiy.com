---
type: "unity-weekly"
title: "Unity Weekly #011"
date: "2021-04-26T09:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

## On-Demand QA Testing with Unity Automated QA

![](./Automated_QA_blog-header-1280x720.jpg)

[Unity Automated QA によるオンデマンドな QA テスト - Unity Technologies Blog](https://blogs.unity3d.com/jp/2021/04/16/on-demand-qa-testing-with-unity-automated-qa/)

- Unity公式で自動QAの開発が進められていて、Experimentalなパッケージとして[Automated QA](https://docs.unity3d.com/Packages/com.unity.automated-testing@0.2/manual/index.html)の提供が開始されました。
- Automated QAでは事前にゲームプレイを記録しておき、iOSやAndroid、エディタ上でその操作をリプレイすることができます。
- 現在では[Unity UI](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/index.html)のUI要素のクリックおよびタッチの自動化をサポートしています。Assertの機能についてはまだ実装されていないようです。
- [Unity Automated QA 雑感 - やらなイカ？](https://www.nowsprinting.com/entry/2021/04/19/084342)　や [【Unity】アプリケーションの検証を自動化しQAを効率化する新機能「Unity Automated QA」の紹介 - うどんてっくメモ](https://myudon.hatenablog.com/entry/2021/04/18/180232) などの検証記事が有志により公開されています。

## ccache で Unity の生成する Xcode プロジェクトのビルドを高速化する

[ccache で Unity の生成する Xcode プロジェクトのビルドを高速化する](https://zenn.dev/pobo380/articles/1a5d838ee857e1)

- この記事では [ccache/ccache: ccache – a fast compiler cache](https://github.com/ccache/ccache) を用いて、UnityのiOSビルドを高速化する方法について紹介されています。記事で紹介されているサンプルプロジェクトでは、ビルド時間を50%にすることができたそうです。
- ccacheのインストール方法から`IPostprocessBuildWithReport`を用いてUnityプロジェクトでccacheを利用する方法、プロジェクト中でCocoapodsを利用する際や`Enable Modules`の有無での設定方法の注意点についてが述べられています。
- 元記事である[ccacheを導入してUnityのiOSビルドを高速化出来ないか検証してみた - Qiita](https://qiita.com/mao_/items/96795c1e734129430310)にもccacheのUnity組み込みが紹介されています。

## How to speed up 2D art workflows with 2D PSD Importer

![](./image8-2.png)

[How to speed up 2D art workflows with 2D PSD Importer](https://blogs.unity3d.com/jp/2021/04/20/how-to-speed-up-2d-art-workflows-with-2d-psd-importer/)

- この記事ではPSBファイル（PSDとほぼ機能は同じで、より大きい画像を扱えるフォーマット）を 2Dアセットとしてインポートすることのできる[2D PSD Importer](https://docs.unity3d.com/Packages/com.unity.2d.psdimporter@4.0/manual/index.html)についての説明と、インポーターを用いたワークフローの効率化のユースケースを紹介しています。
- PSBをインポートすると、全てのPhotoshopレイヤーを子オブジェクトにしたプレハブを自動的に作成します。全てのオブジェクトはSprite Rendererコンポーネントが付加され、元データのトランスフォーム及び深度データを保持しています。またこの挙動はインポート設定により変更することができます。
- 元データにボーンまたはウェイトデータがある場合、2D PSD Importerは2DアニメーションのためにSprite Skinコンポーネントを自動で追加します。これはスキニングエディターと連携して機能するため、2Dアニメーションを作成するワークフローを簡単に構築することができます


## ShaderQuest Part 5: Shader code syntax & Colors

![](./SQ_Part_5.png)

[ShaderQuest Part 5: Shader code syntax & Colors – Harry Alisavakis](https://halisavakis.com/shaderquest-part-5-shader-code-syntax-colors/)

- Harry Alisavakisさんによるシェーダーチュートリアルである[ShaderQuest](https://halisavakis.com/shaderquest-part-0-series-introduction/)の第5弾です。今回はシェーダーの構文（データ型やベクターの扱い方、Swizzlingなど）とシェーダーにおける色の扱い方、乗算および加算とはなにかについて説明しています。
- シェーダーでの色の加算について、ShaderLabとShaderGraph、また他のゲームエンジンでどのように実現するかについて説明されています。

## Holofoil Card Shader Breakdown

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Pretty happy with the result of these holographic foil trading card experiments! I&#39;m also working on a breakdown of the shader (&amp; stencil window effect), should have it finished &amp; released sometime this week ✨<a href="https://twitter.com/hashtag/unity3D?src=hash&amp;ref_src=twsrc%5Etfw">#unity3D</a> <a href="https://twitter.com/hashtag/shaders?src=hash&amp;ref_src=twsrc%5Etfw">#shaders</a> <a href="https://t.co/L3FH6hZ3Qh">pic.twitter.com/L3FH6hZ3Qh</a></p>&mdash; Cyan ✨ (@Cyanilux) <a href="https://twitter.com/Cyanilux/status/1383873492920115202?ref_src=twsrc%5Etfw">April 18, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

[Holofoil Card Shader Breakdown | Cyanilux](https://www.cyanilux.com/tutorials/holofoil-card-shader-breakdown/)

- この記事では上記動画のような見た目を実現する「Holofoil Card Shader」を実装する方法について紹介されています。
- カードが虹色に輝く演出（Holographic Foil Effect）は、接空間の`ViewDirection`ベクトルから虹色の繰り返しパターンテクスチャをサンプリングすることで実装しています。トレーディングカードのような効果を出すために、座標をディストーションテクスチャを用いるなどして歪めています。
- 上記の演出の影響度をカードの場所によって変更するために、マスク画像を用いています。またカード上部には3Dモデルをそのまま表示していますが、これはステンシルによりカードをくり抜くことで表現しています。

## Unity Mesh API Compute Shader Access

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Oy! So at <a href="https://twitter.com/hashtag/unity3d?src=hash&amp;ref_src=twsrc%5Etfw">#unity3d</a> we&#39;re looking into exposing Mesh vertex &amp; index buffers for compute shader access (without slow/cumbersome hacks). Here&#39;s a google doc with current thoughts: <a href="https://t.co/Gusm0CUL9A">https://t.co/Gusm0CUL9A</a> -- feedback is welcome here on in the doc.</p>&mdash; Aras Pranckevičius (@aras_p) <a href="https://twitter.com/aras_p/status/1384519124479528962?ref_src=twsrc%5Etfw">April 20, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

- Unity 2021.2でMesh APIが改善され、Computer Shader内でメッシュの頂点とインデックスデータにアクセスすることができるようになりました。
- 具体的には`Mesh`および`SkinnedMeshRenderer`に`GetVertexBuffer`や`GetIndexBuffer`というようなAPIが追加されます。戻り値として`GraphicBuffer`がかえるためそれをCompute Bufferに渡すことでメッシュ情報にアクセスすることができます。
- [Unity-Technologies/MeshApiExamples at mesh-compute-access](https://github.com/Unity-Technologies/MeshApiExamples/tree/mesh-compute-access)にてサンプルプロジェクトを確認することができます。