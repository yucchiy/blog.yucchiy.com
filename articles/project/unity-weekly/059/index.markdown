---
type: "unity-weekly"
title: "Introducing Funnels & SQL Data Explorer: Meaningful insights to grow your game - Unity Weekly #059"
date: "2022-03-14T09:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

# Unity Official

## ファネルと SQL Data Explorer のご紹介：ゲームの成長に役立つ知見を得よう

[ファネルと SQL Data Explorer のご紹介：ゲームの成長に役立つ知見を得よう | Unity Blog](https://blog.unity.com/ja/games/introducing-funnels-sql-data-explorer-meaningful-insights-to-grow-your-game)

Unity Gaming Services（UGS）の中で、ゲームのパフォーマンスやプレイヤーの行動を分析するためのサービスである [Unity Analytics](https://unity.com/products/unity-analytics) に追加された、「ファネル」と「SQL Data Explorer」について紹介しています。

「ファネル」は、ゲーム内のプレイヤーのゲームプレイの流れや進捗を可視化する機能で、ゲーム内のステップを定義することで、プレイヤーのステップごとの進捗や所要時間、離脱率などが分析できます。

「SQL Data Explorer」は、いままで Analyticsに実装されていたdeltaDNAとSQL Data Miningを再構築したもので、Analytics内の情報に対して開発者がクエリを実行や各種ビジュアライゼーション、データのエクスポートが可能です。

## Twitch でワクワクしながら「Unity Showcase - Live at GDC」を視聴しよう

[Twitch でワクワクしながら「Unity Showcase - Live at GDC」を視聴しよう | Unity Blog](https://blog.unity.com/ja/games/twitching-with-excitement-for-our-unity-showcase-live-at-gdc)

Unityは３月中に「Creator Spotlight」というセッションをTwitchでストリーム配信します。またGDCの開催に合わせて3/23〜3/25はライブ放送を行います。

このセッションでは、それぞれのセッションで１つのインディーズゲームのタイトルを取り上げる予定とのことです。またセッションの共同ホストとして[HarryAlisavakis](https://twitter.com/HarryAlisavakis)氏や[Code Monkey](https://twitter.com/UnityCodeMonkey)氏などが参加予定です。

## Memory Profiler 0.6 Released

[Unity - Memory Profiler 0.6 Released - Unity Forum](https://forum.unity.com/threads/memory-profiler-0-6-released.1251543/)

Memory Profilerの0.6がリリースされました。主に下記の機能が追加されました。

- Scene Roots And Asset bundles
    - メモリスナップショット中のどのオブジェクトがルートオブジェクト（そのオブジェクトの参照元を辿り、参照元がないオブジェクト？）かを確認できるようになりました。また、オブジェクトがどのシーンに属しているかを確認できるようになりました。
    - この機能は、「Referenced By」および「References To」で確認できます。
- References To
    - そのオブジェクトが、どのオブジェクトを参照しているかを一覧できるようになりました。
- Memory Breakdowns
    - メモリスナップショットの内訳を確認できるようになりました。項目として「Unity Object」と「Potential Duplicates」、「All Tracked Memory」が実装されています。
    - 「Unity Object」は、そのオブジェクトおよびアセットが、マネージドおよびネイティブメモリがをどの利用しているかを１画面で確認できます。
    - 「Potential Duplicates」は、複製されているであろうUnity Objectsの一覧を確認できます。
    - 「All Tracked Memory」は、Unityが把握しているすべてのメモリ利用をグループごとに確認できます
    

## 2D Path Package deprecated from 2022.1 onwards

[Unity - 2D Path Package deprecated from 2022.1 onwards - Unity Forum](https://forum.unity.com/threads/2d-path-package-deprecated-from-2022-1-onwards.1247944/)

2DポリゴンやBスプライン曲線を編集するための[2D Path Package](https://docs.unity3d.com/Packages/com.unity.2d.path@5.0/manual/index.html)が、2022.1以降に非推奨となり、最終サポートバージョンが2021.2および今後リリースされる予定の2021.3 LTSになります。

代わりに、Unity 2022.1から利用できる[Spline Package](https://docs.unity3d.com/Packages/com.unity.splines@1.0/manual/getting-started-with-splines.html)（現在プレビュー版を提供）を利用することを推奨しています。

# Articles

## NPRなライティングを実装してみる

[【Unity ShaderLab】NPRなライティングを実装してみる](https://zenn.dev/r_ngtm/articles/unity-shader-npr)

ShaderLabによるNon Photorealtstic Rendering（NPR）の実装として、環境光と拡散反射光（Phong反射）鏡面反射光（Bling-Phong鏡面反射）のライティング実装を紹介しています。

Unityが用意しているPoint LightやDirectional Lightなどの標準のライトを利用するために、それぞれのライトを計算するパス（ForwardBaseとForwardAdd）や複数パス間のライティングのブレンディング、Point Lightの光の減衰を計算するためのForwardAddパス上でのライトの位置や色などの取得方法や減衰を計算するマクロについて解説しています。

## Unityを使って初めてのNreal Airアプリを作ってみよう！

[Unityを使って初めてのNreal Airアプリを作ってみよう！](https://zenn.dev/meson/articles/get-started-with-nreal-air)

この記事では、ARグラス [Nreal Air](https://www.nreal.ai/air/) のアプリをUnityで開発する方法について紹介しています。

Unityを用いた開発環境の構築方法からNRSDK（Nreal Air開発SDK）のインストール、 `NRCameraRig` および `NRInput` を用いたかんたんなサンプルアプリの実装方法、Nreal Air実機アプリビルドのためのapkビルドについてそれぞれ解説しています。

また、Unity上で動くNreal Airエミュレーターの、開発時に知っておくと便利なtipsについても言及しています。

## Zelda Breath of the Wild Remote Bomb in Shader Graph and VFX Graph

[Zelda Breath of the Wild Remote Bomb in Shader Graph and VFX Graph](https://danielilett.com/2022-03-05-tut5-23-botw-bomb/)

ゼルダの伝説ブレスオブザワイルドに登場するリモコンバクダンの爆発効果を、Shader GraphおよびVFX Graphで再現する方法について紹介しています。

ゲーム内の映像をコマ送りして爆発効果がどのようなエフェクトで実装されているのかについてのブレイクダウンと、その方法をShader GraphおよびVFX Graphで実装する方法を、それぞれのノードの機能の解説付きで紹介しています。

## Unity UnlitシェーダーでのPhong反射モデルの実装

[Unity UnlitシェーダーでのPhong反射モデルの実装](https://zenn.dev/aielement/articles/afdb8b7fd2e107)

この記事では、UnityのUnlitシェーダーに対してPhong反射モデルを実装する方法について解説しています。

拡散反射としてLambert拡散反射モデルおよびHalf Lambert、鏡面反射としてPhong鏡面反射モデルそれぞれの紹介と、フラグメントシェーダー上でHalf LambertとPhong鏡面反射を実装する例を解説しています。

## Unity WebGLビルドメモ

[Unity WebGLビルドメモ - フレームシンセシス](https://framesynthesis.jp/tech/unity/webgl/)

この記事では、UnityアプリをWebGLビルドする際のtipsを紹介しています。

出力ファイルの圧縮設定と配信時のContent-Encodingヘッダー指定やスクリプト経由での圧縮設定の変更方法、WebGL特有のテクスチャーフォーマットについて解説しています。

また、WebGLビルドの現状の不具合や描画品質やオーディオなどに関するトラブルシューティングも紹介しています。

## ライトの光をマスクするLight Cookieの使い方まとめ

[【Unity】【URP】ライトの光をマスクするLight Cookieの使い方まとめ - LIGHT11](https://light11.hatenadiary.com/entry/2022/03/08/194054)

Unity2021.2のUniversal Render Pipeline（URP）で利用できる、テクスチャによって放出されるライトの強さをマスクまたはフィルタリングするための [Light Cookie](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@12.0/manual/whats-new/urp-whats-new.html#urp-light-cookies) について、その使い方とディレクショナルライトを実際にマスクする方法を解説しています。

## DOTS Snippets: Using EntityCommandBuffer in parallel

[DOTS Snippets: Using EntityCommandBuffer in parallel – COFFEE BRAIN GAMES](https://coffeebraingames.wordpress.com/2022/03/12/dots-snippets-using-entitycommandbuffer-in-parallel/)

DOTSのEntityCommandBufferを並列に実行する際のtipsを紹介しています。

単にEntityCommandBufferを利用するだけではジョブを並列実行できないため、 `EntityCommandBuffer.ParallelWriter` を用いて並列にジョブを実行する方法や、EntityCommandBufferと `IJobEntityBatchWithIndex` を利用したジョブの書き方について解説しています。

## コンポーネントをタブ表示し作業効率をアップする Smart Inspector

[コンポーネントをタブ表示し作業効率をアップする Smart Inspector【Unity】【アセット】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Smart_Inspector)

インスペクター上の各コンポーネントを、タブによるグループ表示することで見やすくする [Smart Inspector](https://github.com/neon-age/Smart-Inspector) の紹介とそのインストール方法について解説しています。

## TextMeshProにRectMask2Dのsoftnessを反映させる

[【Unity】TextMeshProにRectMask2Dのsoftnessを反映させる - うどんてっくメモ](https://myudon.hatenablog.com/entry/2022/03/13/012343)

この記事では、UnityとTextMeshProの特定のバージョン（Unity 2021.2.0f1およびTextMeshPro 3.0.6）だとRectMask2Dコンポーネントのsoftnessによるソフトマスクが正常に反映されない不具合とプレビュー版（3.2.0-pre.2）でのバグフィックスの[Issue](https://issuetracker.unity3d.com/issues/rectmask2d-softness-property-has-no-effect-when-used-on-textmeshpro-text)について紹介しています。

また、実際にプレビュー版を導入して不具合が改善されていることを確認しています。