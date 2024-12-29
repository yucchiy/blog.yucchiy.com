---
type: "unity-weekly"
title: "Unity Weekly 205"
description: "2024/12/30週のUnity Weeklyです。Advent Calendar、Unite2024日本語吹き替え動画、Unity お・と・なのLT大会などについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-12-30T00:00:01"
---

## Unity Officials

### Deutsche Bahn（ドイツ鉄道）: 1日700万人の乗客の旅に革命をもたらす ｜Unite 2024

[【日本語吹き替え】Deutsche Bahn（ドイツ鉄道）: 1日700万人の乗客の旅に革命をもたらす｜Unite 2024 | Unity Learning Materials](https://learning.unity3d.jp/10635/)

Unite 2024の「[Deutsche Bahn: Revolutionizing travel for 7M daily passengers | Unite 2024](https://www.youtube.com/watch?v=yYsMZ0jADFA) 」の日本語吹き替え動画が公開されています。

### BMW: AR（拡張現実）でイノベーションを推進｜Unite 2024

[【日本語吹き替え】BMW: AR（拡張現実）でイノベーションを推進｜Unite 2024 | Unity Learning Materials](https://learning.unity3d.jp/10633/)

Unite 2024の「[BMW: Fueling innovation with the AR ride | Unite 2024](https://www.youtube.com/watch?v=c-KzCfvydx4) 」の日本語吹き替え動画が公開されています。

### About Support 16 KB page sizes on Android 15

[About Support 16 KB page sizes on Android 15 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/about-support-16-kb-page-sizes-on-android-15/950036/7)

Android 15における[16 KB page sizes](https://developer.android.com/guide/practices/page-sizes?hl=en#ndk-build)のサポートについてのスレッド。

2022 LTSでは [2022.3.55f1](https://unity.com/ja/releases/editor/whats-new/2022.3.55) でこの対応がサポートされました。

## Slides

### 【年末だよ】 Unity お・と・なのLT大会 2024

[【年末だよ】 Unity お・と・なのLT大会 2024【ポロリもあるかもよ】 - connpass](https://unity-bu.connpass.com/event/337633/)

2024/12/28に「【年末だよ】 Unity お・と・なのLT大会 2024」が開催されました。一部発表の資料が公開されています。

- [VitalRouterで行うイベント伝達 | ドクセル](https://www.docswell.com/s/naninunenoy/5R2849-2024-12-28-151902)
- [VOICEVOXでVRMを喋らせるライブラリの紹介 | ドクセル](https://www.docswell.com/s/torisoup/K22731-voicevoxclientsharp)
- [UnityおとなのLT大会2024: MPPM - Google Slides](https://docs.google.com/presentation/d/1YHKV828w-_TYWxjRsrvRKUCIwI68ePPnMX6GqAm0IYI/edit#slide=id.g322184e33f2_0_0)
- [20241228UnityおとなのLT大会 | ドクセル](https://www.docswell.com/s/enpel/5QR2J7-2024-12-28-153825)
- [MasterMemory v3 最速確認会 - Speaker Deck](https://speakerdeck.com/yucchiy/mastermemory-v3-zui-su-que-ren-hui)

## Articles

### Photon Quantumの何がうれしいのか

[Photon Quantumの何がうれしいのか](https://zenn.dev/photon_japan/articles/bc38219f18685c)

[Photon Quantum](https://www.photonengine.com/ja-jp/quantum)の概要からオンラインゲームを開発する上での課題やライブラリが工夫すべきポイント、Photon Quantumの特徴や適したゲームジャンルについて解説しています。

### 文字列の最適化手法について

[【C#】文字列の最適化手法について - Annulus Games](https://annulusgames.com/blog/cs-string-optimization/)

C#における文字列操作の最適化手法について、string型の基本から `ReadOnlySpan<char>` によるアロケーション削減や `string.Create` での効率的な文字列生成、 `StringBuilder` などによる文字列結合、 .NET 9における最適化までを解説しています。

### NavMesh(AI Navigation)完全理解

[【Unity】NavMesh(AI Navigation)完全理解](https://zenn.dev/ambr_inc/articles/bf2d02c87a8b44)

Unity公式のAI Navigationについて基本的な使い方から概念、それぞれのコンポーネントについて解説と、逆引き形式でTipsを紹介しています。

### MaterialのRenderQueueが2000に戻る罠

[【Unity】MaterialのRenderQueueが2000に戻る罠](https://zenn.dev/r_ngtm/articles/unity-material-renderqueue-2000)

特定の条件下でMaterialのRenderQueueの値に `2000` が設定される問題の紹介や RenderQueue の情報をスクリプト経由で取得する方法について紹介しています。

### PlayerInputを用意しなくてもInputActionAssetの入力を取得できる話

[PlayerInputを用意しなくてもInputActionAssetの入力を取得できる話 #Unity - Qiita](https://qiita.com/tsubaki_t1/items/ffb1c56e71b110f8b229)

Input System 1.8.0 で追加された `InputSystem.actions` を用いて、`PlayerInput` を用意せずに `InputActionAsset` の入力を取得する方法を紹介しています。

### UnityECS NavMeshで経路探索

[UnityECS NavMeshで経路探索 #C# - Qiita](https://qiita.com/C-Sharp_is_GOD/items/6d423e939688efca77b3)

Unity ECS上でNavMeshを用いて経路探索を実現する方法について紹介しています。

### ImageやText(TMPも)にアニメーションエフェクトが簡単に付けられる UIEffectTweener

[ImageやText(TMPも)にアニメーションエフェクトが簡単に付けられる UIEffectTweener【Unity】【uGUI】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/UIEffectTweener)

uGUI上でアニメーションエフェクトを実装できる [UIEffect](https://github.com/mob-sakai/UIEffect) に内包されている UIEffectTweenerについて、基本的な使い方を紹介しています。

### MagicOnion + NATS + LogicLooperでC#大統一！やってみた

[MagicOnion + NATS + LogicLooperでC#大統一！やってみた #.NET - Qiita](https://qiita.com/Euglenach/items/bbafa918f114f51e4104)

MagicOnionとLogicLooperを用いて、Unityゲームとサーバーの実装をC#のみで実装する方法についてその実例を紹介しています。

### 行列(Matrix4x4)の世界を垣間見る

[【Unity】行列(Matrix4x4)の世界を垣間見る #数学 - Qiita](https://qiita.com/hikoalpha/items/6612c3704c3c9610a08a)

Matrix4x4の基礎やこの型による行列変換などを用いたアフィン変換などについて紹介しています。

### URPを拡張する方法（RenderGraph版）

[【超基本編】URPを拡張する方法（RenderGraph版） - 渋谷ほととぎす通信](https://shibuya24.info/entry/unity-urp-add-pass-rendergraph)

Unity 6のRender Graph上でのURPの描画を拡張する方法について紹介しています。

### 表示範囲からオーバーフローしたテキストをスクロールしてループ表示させる

[【Unity】表示範囲からオーバーフローしたテキストをスクロールしてループ表示させる【TextMeshPro】 - Raspberlyのブログ](https://raspberly.hateblo.jp/entry/UnityTextScroller)

TextMeshProで、表示範囲からオーバーフローしてるテキストをスクロールしてループ表示する仕組みの実装方法について紹介しています。

## Repositories

### LitMotion v2.0.0

[Release v2.0.0 · AnnulusGames/LitMotion](https://github.com/AnnulusGames/LitMotion/releases/tag/v2.0.0)

LitMotion v2.0.0がリリースされました。

`MotionHandle.Time` による手動での制御や `Sequence` のサポート、ビジュアルエディタでアニメーションを作成できる`LitMotion.Animation`パッケージなど、が追加されています。
