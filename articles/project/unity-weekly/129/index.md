---
type: unity-weekly
title: Unity Weekly 129
description: 2023/07/10週のUnity Weeklyです。
pubDatetime: 2023-07-09T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity 2023.1 Tech Stream is now available

[Unity 2023.1 Tech Stream is now available | Unity Blog](https://blog.unity.com/engine-platform/2023-1-tech-stream-now-available)

Unity 2023.1のテックストリームへのリリースに際して、このバージョンで新たに追加された機能（グラフィックスやプラットフォーム、マルチプレイ、スクリプト、エディターなど）について紹介しています。

### Happy Harvest demo: See the latest 2D techniques

[Happy Harvest demo: See the latest 2D techniques | Unity Blog](https://blog.unity.com/games/happy-harvest-demo-latest-2d-techniques)

Happy Harvestという2Dゲームのデモアセット公開に際し、このデモに盛り込まれている2D向けのテクニック（2Dのライトやシャドウ、タイルマップ、キャラクターリグなど）の解説や、参考記事を紹介しています。

### Your First Encounter with Unity ECS: A Basic Tutorial

[Your First Encounter with Unity ECS: A Basic Tutorial - YouTube](https://www.youtube.com/watch?v=vzF00Wb6wNY)

ECS（Entiti Component System）の基礎を理解し、ECSによって簡単な実装を行うためのチュートリアル動画です。

ECSの概要から簡単なサンプル実装、従来のUnityのGameObjectとコンポーネントによるアーキテクチャとECSによるアーキテクチャの違いについて整理、ECSによる高速化の原理についてそれぞれ解説しています。

## Articles

### Rain Effects Breakdown

[Rain Effects Breakdown | Cyanilux](https://www.cyanilux.com/tutorials/rain-effects-breakdown/)

雨を表現するVFXとして、雨そのものを表現するパーティクルや雨が地面に落ちたときの水の波紋の表現、雨粒がサーフェイス上を垂れるような表現についてそれぞれ実装方法を解説しています。

### Unity・C#を簡単に最適化できるTips集

[Unity・C#を簡単に最適化できるTips集 | ゆいブロ](https://www.yui-tech-blog.com/entry/unity%e3%83%bbc%e3%82%92%e7%b0%a1%e5%8d%98%e3%81%ab%e6%9c%80%e9%81%a9%e5%8c%96%e3%81%a7%e3%81%8d%e3%82%8btips%e9%9b%86/)

UnityのC#スクリプティングにおける最適化テクニックを紹介しています。

### Source Generatorでスクリプト以外のファイルにアクセスする

[【Unity】Source Generatorでスクリプト以外のファイルにアクセスする](https://zenn.dev/ruccho/articles/e201fcf1a11b8d)

Source Generatorでコード生成時に、C#コード以外のファイルを参照する方法について紹介しています。

### Unityでマーシャリングを利用してDLLの関数を呼び出してみよう！

[【Unity】Unityでマーシャリングを利用してDLLの関数を呼び出してみよう！ – 株式会社ロジカルビート](https://logicalbeat.jp/blog/15418/)

C言語で記述した処理をC#から呼び出す方法と、引数や戻り値のC言語とC#間での型変換（マーシャリング）について　Blittable型と非Blittable型の変換についてそれぞれ触れています。

### Line Rendererで破線を描画する

[【Unity】Line Rendererで破線を描画する | ねこじゃらシティ](https://nekojara.city/unity-dashed-line)

Line RendererとShaderGraphによるカスタムマテリアルを用いて、破線を描画する方法について解説しています。


### Photo Fusion for UnityのサンプルSocial HubとProjectilesをあわせてシューターを作る

[Photo Fusion for UnityのサンプルSocial HubとProjectilesをあわせてシューターを作る - Qiita](https://qiita.com/nimushiki/items/f753196ff9014e080ab6)

### ShaderGraphでTextureを作成できるShaderGraphBakerの紹介

[【Unity】ShaderGraphでTextureを作成できるShaderGraphBakerの紹介 - 武0武/blog](https://bravememo.hatenablog.com/entry/2023/07/05/080000)

ShaderGraphのノードで計算される出力をテクスチャとして書き出せるShaderGraphBakerについて、その使い方を紹介しています。

### .apk を Android 端末にインストールする MenuItem の例

[【Unity】.apk を Android 端末にインストールする MenuItem の例 - コガネブログ](https://baba-s.hatenablog.com/entry/2023/07/07/095100?utm_source=feed)

UnityにインストールしたAndroidModuleを用いて.apkをインストールするエディター拡張を実装する方法について紹介しています。

### "Distortion"で画面を歪ませよう 【Unity/URP/ShaderGraph #ポケテク】

["Distortion"で画面を歪ませよう 【Unity/URP/ShaderGraph #ポケテク】｜ポケラボ](https://note.com/pokelabo/n/n0cf2400e33f7)

歪み効果をShaderGraphで実装する方法について紹介しています。

### 基本的には同じだけどちょっと違うマテリアルが欲しい時に便利なMaterial Variant

[基本的には同じだけどちょっと違うマテリアルが欲しい時に便利なMaterial Variant【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Material_Variant)

Unity 2022.1から利用できるMaterial Variantについて、その概要と利用方法を紹介しています。

## Repositories

### derekShaheen/SkToolbox

[derekShaheen/SkToolbox: This toolbox is used for designing overlay menus in Unity Games. Typically used for creating a custom menu for use with existing projects. Includes loader module.](https://github.com/derekShaheen/SkToolbox)

独自コンソール実装のためのフレームワーク。

### leth4/Colorlink

[leth4/Colorlink: Unity editor tool for quickly changing the game's color palette](https://github.com/leth4/Colorlink?)

ゲーム全体のカラーパレットを管理するエディターツール。マテリアルやコンポーネント、プレハブ、アセットに対して動作し、シリアライズされたプロパティとマテリアルプロパティに対してパレットを調節リンクできる。

### cdmvision/authentication-unity

[cdmvision/authentication-unity: OAuth 2.0 Client for Unity](https://github.com/cdmvision/authentication-unity?)

Unity向けのOAuth2.0クライアント。ビルトインクライアントとしてGitHubとGoogle、Facebookの実装やディープリンク経由のブラウザ認証やiOSの `ASWebAuthenticationSession` や `WKWebView` の実装などをサポートする。

### omid3098/ShaderGraphBaker

[omid3098/ShaderGraphBaker: Use ShaderGraph as a texture creation tool!](https://github.com/omid3098/ShaderGraphBaker)

ShaderGraphの出力をテクスチャとして書き出すツール。

### jiaozi158/UnitySSReflectionURP

[jiaozi158/UnitySSReflectionURP: Screen Space Reflection for Unity URP (Universal Render Pipeline).](https://github.com/jiaozi158/UnitySSReflectionURP?)

URPでのScreen Space Reflection実装。
