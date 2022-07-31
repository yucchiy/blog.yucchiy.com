---
type: "unity-weekly"
title: "モザイクフェード、URP Depth Prepass、Spline パッケージ - Unity Weekly 079"
description: "2022/08/01週のUnity Weeklyです。モザイクフェード、URP Depth Prepass、Spline パッケージなどについてとりあげました。"
tags: ["Unity Weekly","Unity"]
date: "2022-07-31T21:00:00"

---

## Articles

### レトロゲームの様なモザイクフェードを実装してみた

[【Unity】レトロゲームの様なモザイクフェードを実装してみた – 株式会社ロジカルビート](https://logicalbeat.jp/blog/11034/)

URP（Universal Render Pipeline）でモザイク効果をかけるようなシェーダーの実装と、そのシェーダーを用いて画面のフェードアウト・フェードインを行う方法について紹介しています。



ビルトインパイプラインで利用できるGrabPassの代替として、Opaque Texture及び `_CameraOpaqueTexture` を用いて描画された画面出力を取得しています。

### Halftone Effect in Shader Graph and VFX Graph

[Halftone Effect in Shader Graph and VFX Graph](https://danielilett.com/2022-07-28-tut6-1-halftone/)

陰影を色の付いたドットパターンを用いて表現するハーフトーンエフェクトをShader GraphとVFX Graphを用いて実装する方法を紹介しています。



メインラインをShader Graphで扱うためのカスタムファンクションの実装からそれを用いてハーフトーンシェーダーを実装するグラフの構築についてそれぞれ解説しています。

### uRaymarching の Depth Prepass 対応をした

[uRaymarching の Depth Prepass 対応をした - 凹みTips](https://tips.hecomi.com/entry/2022/07/30/230728)

著者が開発する uRaymarching の、URP Depth Prepass対応についてまとめています。



uRaymarchingが `SV_Depth` セマンティクスを使って、Depth Prepassで用いるデプスをいじっているため、計算結果のデプスと色決定時のデプスでずれてしまう問題とその解決方法、デプスの精度が非線形なゆえに発生する問題とその解決方法についてそれぞれ解説しています。

### スプラインに沿ってオブジェクトを配置する

[【Unity2022】スプラインに沿ってオブジェクトを配置する | ねこじゃらシティ](https://nekojara.city/unity-splines-instantiate)

2022 TECH ストリームから利用できる Splinesパッケージを用いて、曲線にそってオブジェクトを配置する方法について紹介しています。



Splineコンポーネントで描いた曲線上に、Spline Instantiateコンポーネントを用いて、指定したゲームオブジェクトを規定した規則の位置・回転・スケールで配置する方法について解説しています。

### **The Fundamentals of Unity 2D colliders**

[The Fundamentals of Unity 2D colliders | Giacomelli | C# programmer and Unity 3D gamedev](https://diegogiacomelli.com.br/the-fundamentals-of-unity-2d-colliders/)

2D Colliderについての説明から2D Colliderのコンポーネントと設定方法、コリジョンコールバックの使い方、Physics2Dのプロジェクト設定などについてまとめています。

### URPでUnityのフォグに対応したシェーダを書く

[【Unity】URPでUnityのフォグに対応したシェーダを書く - LIGHT11](https://light11.hatenadiary.com/entry/2022/07/25/191829)

URPで、Unity内部で計算されているフォグを、自身で記述したシェーダーに適用する方法について紹介しています。

### GeoSpatialAPIの基礎理解～空間共有コンテンツ作成まで

[【Unity】GeoSpatialAPIの基礎理解～空間共有コンテンツ作成まで - Qiita](https://qiita.com/OKsaiyowa/items/c2a2da503d71eb3af5bd)

Googleの提供するVPS（Visual Positioning Service/System）のGeoSpatialAPIでできることやアンカーオブジェクトの作成方法や位置合わせ、空間共有（ユーザー間でアンカーを基準としたコンテンツの共有）の方法について、コードを踏まえて解説しています。

## Repositories

### Custom Timeline Keyframes and Data Painter Tools

[needle-tools/custom-timeline-editor: custom keyframes for Unity's timeline 🎞 (interpolate lists of anything) with visual tools 🖌 and more](https://github.com/needle-tools/custom-timeline-editor)

任意の型のキーフレームアニメーションを行うためのカスタムトラックとキーフレーム編集ツール。

### DMotion - A High Level Animation Framework and State Machine for DOTS

[gamedev-pro/dmotion: DMotion - A high level Animation Framework for Unity DOTS](https://github.com/gamedev-pro/dmotion)

DOTSアニメーションのためのハイレベルなフレームワーク。ステートマシンや1次元のブレンドツリー、アニメーションイベントやルートモーションなどを実装。

### Unity Simple File Browser

[yasirkula/UnitySimpleFileBrowser: A uGUI based runtime file browser for Unity 3D (draggable and resizable)](https://github.com/yasirkula/UnitySimpleFileBrowser)

Unityランタイムで利用できる、Windowsのファイル選択ウインドウのようなファイルブラウザー。

