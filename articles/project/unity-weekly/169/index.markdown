---
type: "unity-weekly"
title: "Unity Weekly 169"
description: "2024/04/22週のUnity Weeklyです。AssetBundle Tips、URP & HDRP e-books、Project TCCなどについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-04-22T00:00:01"

---

## Unity Officials

### Unity Asset Bundles tips and pitfalls

[Unity Asset Bundles tips and pitfalls | Unity Blog](https://blog.unity.com/engine-platform/unity-asset-bundles-tips-pitfalls)

アセットバンドルのパフォーマンス向上やランタイム中のメモリ使用量を削減させるためのヒントやバージョン間の互換性や異なるプラットフォーム間での扱い、
あまり知られていないアセットバンドルの内部構造について解説しています。

### Unity 2022 LTS URP and HRDP e-books for advanced users

[Unity 2022 LTS URP and HRDP e-books for advanced users| Unity Blog | Unity Blog](https://blog.unity.com/engine-platform/unity-2022-lts-updates-urp-hdrp-e-books)

Unity 2022 LTSに対応したURPとHRDPの電子書籍「[Introduction to the Universal Render Pipeline for advanced Unity creators](https://unity.com/ja/resources/introduction-universal-render-pipeline-for-advanced-unity-creators-2022lts)」と「[Lighting and environments in the High Definition Render Pipeline](https://unity.com/ja/resources/hdrp-lighting-environments-2022-lts-ebook)」について、それぞれの書籍の概要とアップデート内容について紹介しています。

### Unityでゲームを動かす仕組みが満載！ Project TCCのサンプルシーン紹介

[Unityでゲームを動かす仕組みが満載！ Project TCCのサンプルシーン紹介 - YouTube](https://www.youtube.com/watch?v=OwdzfSm9VRo)

Project TCCのサンプルシーンとしてどのようなシーンがあるのかを紹介しています。

### Deprecating BitTorrent as a download option for Unity

[Official - Deprecating BitTorrent as a download option for Unity - Unity Forum](https://forum.unity.com/threads/deprecating-bittorrent-as-a-download-option-for-unity.1579203/)

2024/05/01にBitTorrent経由でのUnityのダウンロードを廃止されます。このフォーラムではその理由について紹介しています。

### Valeo unveils in-car XR racing game at SXSW

[Valeo unveils in-car XR racing game at SXSW | Unity Blog](https://blog.unity.com/industry/valeo-xr-racing-game-sxsw)

Valeo社がSXSWで発表した車載XRレーシングゲームについて紹介しています。

## Articles

### Input Systemでプレイヤーに複数デバイスを割り当てる

[【Unity】Input Systemでプレイヤーに複数デバイスを割り当てる | ねこじゃらシティ](https://nekojara.city/unity-input-system-multiple-devices-per-player)

Input SystemのINput Action Assetの中のControl Schemeを用いて、1人のプレイヤーに対して複数のデバイスを割り当てる方法について解説しています。

また、意図しないControl Schemeの切り替わり挙動やローカルマルチの際の挙動についても言及しています。

### Privacy Manifests対応

[Privacy Manifests対応 #iOS - Qiita](https://qiita.com/K0uhe1D/items/bb3b5818ae54069118a4)

Privacy Manifests対応の概要からUnityでの対応方法、よく利用されるSDKの対応状況、現時点での懸念事項等をまとめています。　

### 【Unity2020】material.HasPropertyの挙動について

[【Unity2020】material.HasPropertyの挙動について](https://zenn.dev/r_ngtm/articles/unity2020-material-hasproperty)

Unity 2020（Unity 2020.3.32f1）環境での `material.HasProperty` の挙動について、存在しないプロパティに対して `material.SetXXX` を呼び出した状態での挙動や、その後マテリアルを複製した状態での挙動などを検証しています。

### Rider で ContractAnnotation が動かなくなっちゃった！？

[Rider で ContractAnnotation が動かなくなっちゃった！？](https://zenn.dev/monry/articles/20240420-contractannotation-notworking)

RiderのConstractAnnotationが動作しなくなった件についての原因の調査と、代替の対応方法として `[NotNullWhen(bool)]` と `[DoesNotReturnIf(bool)]` を組み合わせる方法や、外からアノテーションを設定する[External Annotations](https://www.jetbrains.com/help/rider/Code_Analysis__External_Annotations.html) についてそれぞれ紹介しています。

### AppUI×ClaudiaでMVVMを意識してチャットアプリをつくる 5章 Middleware編

[【Unity】AppUI×ClaudiaでMVVMを意識してチャットアプリをつくる 5章 Middleware編 #C# - Qiita](https://qiita.com/garume/items/3f4c2f4b2de04b602e58)

このブログ著者の開発する「[Unity Redux Middleware](https://github.com/Garume/Unity-Redux-Middleware)」を用いてAppUIにReduxのMiddlewareを導入し、ロジックをビューと分離する方法について紹介しています。

### ゼルダBOTW風トゥーンシェーダーの調整

[【Unity Shader Graph】ゼルダBOTW風トゥーンシェーダーの調整 #Unity - Qiita](https://qiita.com/tetsulee/items/f006a5639580cf94346b)

Roystan氏の「[Toon Shader](https://roystan.net/articles/toon-shader/)」という記事を参考にShader GraphでゼルダBOTW風のトゥーンシェーダーを作成し、その調整方法について紹介しています。

### Awaitable 使いづらそう問題

[Awaitable 使いづらそう問題 #C# - Qiita](https://qiita.com/sator_imaging/items/76fdd84373fca79269e2)

Unity 2023から導入されたAwaitableの挙動やブログ著者の使いづらく感じる点について紹介しています。

### UnityのPackages内のコードをRider管理下に置く

[UnityのPackages内のコードをRider管理下に置く](https://zenn.dev/waz/articles/a1d6218023c999)

リモートから取得したパッケージをローカルパッケージとしてRiderの管理下におく方法について紹介しています。
