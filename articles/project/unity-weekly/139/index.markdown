---
type: "unity-weekly"
title: "Unity Weekly 139"
description: "2023/09/18週のUnity Weeklyです。Unity Runtime Feeなどについて取り上げています。"
tags: ["Unity Weekly","Unity"]
date: "2023-09-19T00:00:01"

---


## Unity Officials

### Unity plan pricing and packaging updates | Unity Blog

- [Unity plan pricing and packaging updates | Unity Blog](https://blog.unity.com/news/plan-pricing-and-packaging-updates)
- [Unity のプランの価格設定とパッケージの更新 | Unity Blog](https://blog.unity.com/ja/news/plan-pricing-and-packaging-updates)

Unityが、インストール数に応じて利用料が発生する「Unity Runtime Fee」を、2024/01/01から導入することを9/12に発表しました。

「Unity Runtime Fee」はインストール数と収益と現在契約中のプランによって利用料の1インストールあたりの単価が決まるものです。しかし、料金体系そのもの（特に無料プレイな収益モデルのゲームなどにとって不利な点）やインストール計測が不明な点（インストール数を正確に計測する方法はない点や海賊版アプリ・リセマラなどをインストール数に含むのかなどが不明だった点など）など、急な料金体系の変更などのさまざまな理由で、開発者やコミュニティから批判が相次いでいました。

それらの理由から、Unityは9/18に混乱や懸念を招いた点についての謝罪と、近日中に「Unity Runtime Fee」のポリシー変更を行う予定の旨の発言をしました（[リンク](https://twitter.com/unity/status/1703547752205218265)）。

## Articles

### 【Unity2022】スプラインをCompute Shaderから扱う方法 | ねこじゃらシティ

[【Unity2022】スプラインをCompute Shaderから扱う方法 | ねこじゃらシティ](https://nekojara.city/unity-splines-compute-shader)

Splineパッケージに含まれる、ベジェ曲線をCompute Shader上で計算するための各種関数や、スプライトの情報をCompute Shader に転送する際に便利な `SplineComputeBufferScope<T>` などの利用方法を解説しています。

### Unity製ゲームをWebGLビルドしてGitHub Pagesに公開するワークフロー - やらなイカ？

[Unity製ゲームをWebGLビルドしてGitHub Pagesに公開するワークフロー - やらなイカ？](https://www.nowsprinting.com/entry/2023/09/17/221651)

Unityで制作したゲームをGithub Actionsを用いてWebGLアプリとしてビルドしてGithub Pagesにデプロイして公開するワークフローを紹介しています。

### Photon Fusionのシミュレーションを理解しよう

[Photon Fusionのシミュレーションを理解しよう](https://zenn.dev/photon_japan/articles/c7cc3e6244444f)

オンラインマルチプレイゲームを開発する上で登場するラグ補償やクライアントサイド予測などの概念の説明から、Photon Fusionがどのような実装をしているのかについて、各種APIの仕様を踏まえて解説しています。

### Unity向けの簡易的なVADライブラリの紹介 - Synamon’s Engineer blog

[Unity向けの簡易的なVADライブラリの紹介 - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/vad_unity)

Unityで利用できる発話区間を検知するための VAD（Voice Activity Detection）を実装したライブラリを紹介しています。

### ボタンを押すと特定のパッケージをまとめてAddするためのエディタ拡張 - Qiita

[ボタンを押すと特定のパッケージをまとめてAddするためのエディタ拡張 - Qiita](https://qiita.com/ScreenPocket/items/fa302f2e7bd74dcd7968)

指定したパッケージを一括でインストールするためのエディター拡張の実装や、その中で利用しているパッケージを操作するためのAPIやUnity 2023.1から利用できる Awaitable API の使い方について紹介しています。