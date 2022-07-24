---
type: "unity-weekly"
title: "Adobe Substance 3D、Mesh Deformation、Overlay - Unity Weekly 078"
description: "2022/07/25週のUnity Weeklyです。 Adobe Substance 3Dプラグイン、シェーダー内でスクリーン上の色や深度を取得する際の注意点、メッシュ変形、アバターのランタイムロード、オーバーレイなどについてとりあげました。"
tags: ["Unity Weekly","Unity"]
date: "2022-07-24T21:00:00"

---

## Unity Officials

[Unity 向けの新しい Adobe Substance 3D プラグインのご紹介 | Unity Blog](https://blog.unity.com/ja/games/introducing-the-new-adobe-substance-3d-plug-in-for-unity)

[Adobe Substance](https://www.adobe.com/jp/products/substance3d/3d-augmented-reality.html)上で作成したマテリアルをUnity上に取り込んで、Unityのマテリアルとして利用したり、公開されているパラメーターをUnityエディター上で調整することで見た目を調整できる[Adobe Substance 3D プラグイン](https://assetstore.unity.com/packages/tools/utilities/substance-3d-for-unity-213208?locale=ja-JP#publisher)について紹介しています。

## Articles

### Unity のシェーダ内でスクリーンの色と深度を取得するときの注意点

[Unity のシェーダ内でスクリーンの色と深度を取得するときの注意点 | おいもログ](https://blog.oimo.io/2022/07/19/unity-ss/)

シェーダー内でスクリーン上の色や深度を取得する際の、特にプラットフォームに結果が依存しないように値を取得するための注意点をまとめています。



スクリーン上の色を取得する際に[GrabPass](https://docs.unity3d.com/ja/2018.4/Manual/SL-GrabPass.html)からテクスチャ経由で取得したり、深度を [_CameraDepthTexture](https://docs.unity3d.com/ja/2018.4/Manual/SL-CameraDepthTexture.html) テクスチャ経由で取得するときに、 `ComputeGrabScreenPos` や `ComputeScreenPos` を利用する必要性や、これらの関数から得られる値を加工して利用する際の注意点について解説しています。

### Unityでアバターを外部からいい感じにロードしたい

[Unityでアバターを外部からいい感じにロードしたい - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/unity_avatar_runtime_load)

Unityでアバターを外部からロードする方法（アバターをResourcesやアセットバンドルなどに変換せずにランタイムで直接ファイルを読み込んで利用する方法）についてまとめています。



VRM・glTF・FBX形式のアバターをUniVRMとTriLibの２つのライブラリを使い分けて読み込むことで、3DモデルのロードからHumanoidとしてアニメーションのセットアップまでを行う方法について解説しています。

### Sand Balls Mechanics Implementation: The Best Way To Deform A Mesh In Unity

[Sand Balls Mechanics: The Best Way To Deform A Mesh In Unity](https://gamedev.center/sand-balls-mechanic-implementation-how-to-deform-a-mesh-the-most-performant-way-part-1/)

ランタイムでメッシュを変形させる方法として、 `MeshFilter` で取得できるメッシュの頂点を直接編集する方法、ジョブ経由で並列に実行する方法、 `AsyncGPUReadback` を用いてCompute Shader実行する方法と、それぞれの手法のパフォーマンスについて検証しています。

### コンテクスト・オーバーレイの使い方

[コンテクスト・オーバーレイの使い方](https://zenn.dev/brainvader/articles/c5c2b3bd57c17e)

シーンビュー上にUIを表示するOverlayの基本的な使い方と、特定の EditorWindow に対してのみOverlayを表示する方法、コード上からOverlayを呼び出す方法、 [ITransientOverlay](https://docs.unity3d.com/2021.2/Documentation/ScriptReference/Overlays.ITransientOverlay.html)を用いて特定の状況下でOverlayを表示する方法についてそれぞれ解説しています。

### Unityの自作パッケージリリースに関するあれこれを自動化する

[Unityの自作パッケージリリースに関するあれこれを自動化する](https://zenn.dev/fuqunaga/articles/332f1d2fb37e6c)

GitHubにコミットをプッシュしたときに、Unityの自作パッケージをリリース作業として、CHANGELOG.mdの更新やpackage.jsonのバージョン更新、npmへのプッシュ、tag打ち、GitHubのリリースページの作成などを自動化するGitHub Actionの作成方法について解説しています。

### Time Travel - Rewinding Hexahedra, Part Two

[Time Travel - Rewinding Hexahedra, Part Two](https://www.sidequestninja.com/blog/time-travel-rewinding-hexahedra-part-two/)

ブログ著者が開発している [Hexahedra](https://store.steampowered.com/app/1248420/Hexahedra/) におけるタイムトラベル（時間の巻き戻し）機能の実装について、アニメーション再生の巻き戻しや、キューブの見た目の巻き戻し、 `Time.timeScale` を 0にしたときの物理シミュレーションのアップデートなどの実装についてまとめています。

### Microsoft.Unity.Analyzersを制御する

[#unity Microsoft.Unity.Analyzersを制御する - 土屋つかさの技術ブログは今か無しか](https://someiyoshino.info/entry/2022/07/22/211056?utm_source=feed)

Microsoft.Unity.AnalyzersによるUnityプロジェクトの解析方法の紹介と導入方法、UnityアナライザーやVisual Studio標準のアナライザーのカスタマイズ方法についてそれぞれ紹介しています。

### longをfloatにキャストしたときの丸め誤差について

[【小ネタ】longをfloatにキャストしたときの丸め誤差について](https://zenn.dev/r_ngtm/articles/unity-rounding-error)

C#でlongで保持している値をfloatにキャストし、さらにlongに戻したときに発生する丸め誤差を、浮動小数点での値の持ち方を交えつつ解説しています。

### Stylized Puffy Clouds Shader

[☁️ Puffy Clouds Shader - Nokdef](https://nokdef.com/Articles/Stylized-Puffy-Clouds-Shader/#making-the-puffiness)

Amplify Shader Editorを用いて、ふわふわとしたアニメ風な雲シェーダーを簡単なノイズと頂点操作で実装する方法について紹介しています。

### **スプラインとタイムラインを同期させる**

[【Unity2022】スプラインとタイムラインを同期させる | ねこじゃらシティ](https://nekojara.city/unity-splines-timeline)

Unity 2022から利用できる[Spline](https://docs.unity3d.com/ja/2022.1/Manual/com.unity.splines.html)パッケージをタイムラインで操作する方法について紹介しています。



タイムラインの `ITimeControl` を実装するスクリプトで スプラインの位置を計算し、このスクリプトを Control Track 経由でタイムラインから操作する方法を解説しています。

### Unityのカメラ画角は垂直画角

[Unityのカメラ画角は垂直画角](https://zenn.dev/ai2playgame/articles/unity-camera-fieldofview)

`UnityEngine.Camera` の画角が垂直画角であることの実験的な確認と、カメラの画角を水平画角での固定に変更するスクリプトについて紹介しています。

### InternalsVisibleToを用いて特定アセンブリからinternalにアクセスできるようにする

[【Unity, C#】InternalsVisibleToを用いて特定アセンブリからinternalにアクセスできるようにする - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2022/07/18/120000)

特定のアセンブリから `internal` にアクセスを許可する `InternalsVisibleTo` 属性について紹介しています。

Unity公式パッケージでの利用例、この属性を用いてテスト用のアセンブリからの参照を許可する方法についても言及しています。

## Repositories

### Runtime Unity Editor / Debugging Tools

[ManlyMarco/RuntimeUnityEditor: In-game inspector and debugging tools for applications made with Unity3D game engine](https://github.com/ManlyMarco/RuntimeUnityEditor)

ランタイム上で動作するデバッグツール。ゲームオブジェクトやコンポーネントブラウザ、オブジェクトインスペクター、C# REPLコンソールなどが実装されています。

### ExtraLINQUnity

[kyubuns/ExtraLINQUnity: Useful extension methods for .NET sequence and collection types.](https://github.com/kyubuns/ExtraLINQUnity)

LINQに存在しないがUnityでLINQを使う際にあると便利な拡張メソッドを実装したライブラリ。



最近追加されたメソッドについては、下記ブログ記事にて著者が解説しています。

[Unityでも便利なLINQメソッドを色々使いたかったのでExtraLINQをさらに便利にしました - きゅぶろぐ](https://blog.kyubuns.dev/entry/2022/07/20/122245)

