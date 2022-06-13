---
type: "unity-weekly"
title: "Unity Weekly #050"
date: "2022-01-10T10:00:01+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

## グラフィックス最適化

[グラフィックス最適化](https://www.notion.so/02e7fcdecd234cb9acaaaecd8171446e)

3Dの描画を最適化するための詳細なチェックリストと関連リンクが紹介されています。

また、パーティクルシステム、UI、アセットについてもそれぞれの最適化方法のリンクがまとめられています。

## Meta Avatars SDK for Unity

[Meta Avatars SDK for Unity (1)｜インストール・サンプル動作確認などの初期環境構築 - デニッキ！](https://xrdnk.hateblo.jp/entry/2022/01/04/004851)

[Meta Avatars SDK for Unity (2)｜サンプルシーンを動かしてみる - デニッキ！](https://xrdnk.hateblo.jp/entry/meta_avatars_sdk_for_unity_2)

[Meta Avatars SDK for Unity (3)｜OVRPlayerController 連携の実装方法（コントローラ操作版） - デニッキ！](https://xrdnk.hateblo.jp/entry/meta_avatars_sdk_for_unity_3)

Meta社が提供するアバターシステム「Meta Avatars SDK for Unity」について、導入方法からSDKに用意されているサンプルシーンの紹介、 `OVRPlayerController` を用いたアタバーの動作制御まで紹介しています。

導入については Newtonsoft.Json.dll に関するコンパイルエラーの解決方法や、 `OVRPlayerController` を用いたアバター制御の実装については、空のシーンからスクラッチでHMDとコントローラーの位置をトラッキングする実装までを行っています。

## Impossible Geometry with Stencils in Unity URP

[Impossible Geometry with Stencils in Unity URP](https://danielilett.com/2022-01-05-tut5-22-impossible-geom-stencils/)

[Antichamber](https://store.steampowered.com/app/219890/Antichamber/?l=japanese) に登場するような、それぞれの側面を見たときに別々の空間を描画するようなレンダリングテクニックを、StencilとUniversal Render Pipeline（URP）のRenderer Featuresを用いて実装する方法について紹介しています。

シェーダーにおけるStencilの基本的な使い方と、側面ごとにRenderer Featuresを用意して描画対象をレイヤーマスクによりフィルタとStencil値の上書きすることで、これを実現する方法について解説しています。

## AudioSourceの音声データをUnity上でVisualizeする

[AudioSourceの音声データをUnity上でVisualizeする - Qiita](https://qiita.com/mattak/items/44180c107ee6554c02cd)

AudioSourceの音声データと、FFTされたデータを取得して、 `LineRenderer`を用いて波形を描画する方法について解説しています。

## 選択項目に吸いつくポインターを実装する

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">選択項目に吸いつくポインターの検証🙆‍♂️ <a href="https://t.co/uGVOJgQzhf">pic.twitter.com/uGVOJgQzhf</a></p>&mdash; KENTO⚽️XRエンジニア😎Shader100記事マラソン挑戦中50/100 (@okprogramming) <a href="https://twitter.com/okprogramming/status/1475486398195331074?ref_src=twsrc%5Etfw">December 27, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

[【Unity(C#)】選択項目に吸いつくポインターを実装する - Qiita](https://qiita.com/OKsaiyowa/items/6ecded40fe8926c976d4)

上記のような選択項目に吸い付くポインターを実装する方法について解説しています。

ポインター自身の描画は`LineRenderer`で行い、吸い付く曲線は、選択項目の直線と実際にポインターが飛ぶ直線の2直線をベジエ曲線を用いて補完する形で制御しています。

また、この実装を、 `OVRInputModule` を用いて実装する方法についても触れています。

## 【ShaderGraph】デプスからワールド座標を復元するカスタムノード

[【ShaderGraph】デプスからワールド座標を復元するカスタムノード](https://zenn.dev/r_ngtm/articles/shadergraph-reconstruct-wpos-depth)

ShaderGraphのSceneDepthノードから得られるデプス値を元にワールド座標を復元する方法について紹介しています。

このデプス値がクリップ空間のZ座標に相当することから、View Projectionの逆変換を適用することでワールド座標を復元できるため、その計算をおこなうCustom Functionノードを実装し、ワールド座標を復元します。

## Unityを実行せずにアニメーションを再生する

[Unityを実行せずにアニメーションを再生する - Qiita](https://qiita.com/salt-k2t/items/cb2527245dba857fb2fc)

PlayableAPIを用いて、エディター上でPlayModeに入らずにアニメーションを再生する方法を紹介しています。

シンプルな1アニメーション再生以外に `AnimationMixerPlayable` を用いて、2アニメーションをブレンドして再生する方法についても触れています。

## Unity2022でさらに進化したSearch Windowが便利だった

[Unity2022でさらに進化したSearch Windowが便利だった - うどんてっくメモ](https://myudon.hatenablog.com/entry/2022/01/04/000000)

プロジェクト内のアセットを検索できるSearch Windowに、Unity 2022で進化した「Query Builder Mode」について紹介しています。

「Query Builder Mode」に Unity 2022で追加されたGUI機能の使い方から、パラメータのフィルタ機能についてそれぞれ解説しています。

## VFX in Unity: Getting Started

[VFX in Unity: Getting Started | raywenderlich.com](https://www.raywenderlich.com/23120977-vfx-in-unity-getting-started)

UnityのParticleSystemによるVFX制作の基礎を、銃から弾丸を発射して、対象に着弾する際のそれぞれのパーティクルエフェクトを制作しながら学んでいくチュートリアル記事です。

パーティクルエフェクトにおいて、サイズ、形状、色、タイミングといった主要なパラメータの説明と、発砲時の銃口効果や着弾時のインパクト効果、弾丸のトレイル効果を実例にあげて、それらのパラメータをどのように調整すると、どのような効果が実現できるかについて解説しています。