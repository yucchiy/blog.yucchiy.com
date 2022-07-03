---
type: "unity-weekly"
title: "Adaptive Performance 4.0、CppSharp、Photon Fusion - Unity Weekly 075"
description: "2022/07/04週のUnity Weeklyです。Adaptive Performance 4.0やCppSharp、Photon Fusionなどについて取り上げました。"
tags: ["Unity Weekly","Unity"]
date: "2022-07-03T21:00:00"

---

## Unity Officials

### Adaptive Performance 4.0 によるモバイルパフォーマンスの最適化

[Adaptive Performance 4.0 によるモバイルパフォーマンスの最適化 | Unity Blog](https://blog.unity.com/ja/technology/mobile-performance-optimization-with-adaptive-performance-40)

Unity 2022 TECHストリームに導入されているAdaptive Performance 4.0で追加された機能について紹介しています。

Adaptive Performanceはモバイルデバイスの熱や電力などの状態のフィードバックを受けてアプリケーションの挙動を変更することで、サーマルスロットリング防ぎ、アプリケーションのパフォーマンスを維持するための仕組みです。Samsung端末のみで利用できます。

Adaptive Performance 4.0では主に、ビジュアルスクリプティングサポートと４つのスケーラーが新たに追加されました。

ビジュアルスクリプティングサポートでは、Adaptive Performanceの提供するメトリクスやイベント、スケーラーなどにアクセスできます。詳細は[こちらのドキュメント](https://docs.unity3d.com/Packages/com.unity.adaptiveperformance@4.0/manual/visual-scripting.html)から確認できます。

また、下記４つのスケーラーが追加されました。

* レイヤーカリングスケーラー
    * レイヤーカリングを行う距離を処理負荷に応じて動的に変更します
        * 変更するプロパティは具体的には [Camera.layerCullingDistances](https://docs.unity3d.com/ScriptReference/Camera-layerCullDistances.html)
* デカールスケーラー
    * パーティクル数やデカールプロジェクターなどを処理負荷に応じて動的に減少・重要度の低いものはオフにしたりデカール距離を短縮することで、パフォーマンスを安定させます
* カスタムスケーラー
    * 独自のスケーラーを実装するための仕組み
    * 標準のスケーラーには存在しないフォグやポストプロセッシングなどのスケーラーを独自に実装する方法を紹介しています
* 物理スケーラー
    * 物理エンジンが更新処理を行う [Time.fixedDeltaTime](https://docs.unity3d.com/ScriptReference/Time-fixedDeltaTime.html) を動的に調整することでパフォーマンスを安定化させます
## Articles

### CppSharp で Native Binding を楽に行う

[CppSharp で Native Binding を楽に行う](https://zenn.dev/tan_y/articles/70d9dc73f8e663)

C/C++で開発したプラグインをC#から呼び出す際のP/Invokeの記述（バインディング）を自動生成する [CppSharp](https://github.com/mono/CppSharp) の基本的な使い方からポインタや関数ポインタ、文字列の扱い方、Unityでの利用方法などについて解説しています。

### uLipSync の Timeline エディタのパフォーマンス改善を行ってみた

[uLipSync の Timeline エディタのパフォーマンス改善を行ってみた - 凹みTips](https://tips.hecomi.com/entry/2022/06/30/005251)

ブログの著者が開発する [uLipSync](https://github.com/hecomi/uLipSync) のタイムラインクリップ上の波形描画機能が重たい件をどう改善したかについて紹介しています。



具体的には波形テクスチャの生成を `AudioCurveRendering.DrawMinMaxFilledCurve` で行っていて、これがパフォーマンスのボトルネックであった問題を、自前でテクスチャ生成とそのテクスチャを使い回せるときにはキャッシュすることで改善しています。



`Color[]` に値を詰めて `Texture2D.SetPixels` を呼び出してテクスチャを生成する方式と、 `Texture2D.GetPixelData` で `NativeArray` を受け取って直接その配列に書き出しを行う方法、さらに `NativeArray` へのテクスチャの書き込みをBurst + Job化することで高速化する方法についてそれぞれ検証しています。

### Photon Fusion for Unityの新機能　描画補間、ラグ補償、同期範囲設定

[Photon Fusion for Unityの新機能　描画補間、ラグ補償、同期範囲設定 - Qiita](https://qiita.com/nimushiki/items/c82763817a8c7c4f2278?utm_campaign=post_article&utm_medium=twitter&utm_source=twitter_share)

Photon Fusionの新機能のうち、スナップショット補間・ラグ補償ヒットボックス・レプリケーションシステムについて、機能が必要となる背景からその仕組み、Unity上での利用方法についてそれぞれ解説しています。

### Cinemachine 内部処理 完全解説

[【Unity】Cinemachine 内部処理 完全解説 - Qiita](https://qiita.com/tsukimi_neko/items/664ebce4a2a4344b8032)

Cinemachineの内部挙動について、 `CinemachineVirtualCameraBase` ・ `CameraState` ・ `CinemachineBrain` の３つの要素がどのように連携してメインカメラに描画するのかについて解説しています。



また、Cinemachineの拡張処理の概要と独自の拡張処理の書き方についても言及しています。

### URPで丸影を真下に落とす方法の検討

[URPで丸影を真下に落とす方法の検討 - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/2022/06/28/125334)

URP（Universal Render Pipeline）で大量な描画を前提としてキャラクターの直下に丸影を落とす方法について、Shadow Mapの拡張とデカールによる丸影を検証しています。



Shadow Mapの拡張では、キャラクターのCast Shadowsはオフにして、キャラクター直下にCast ShadowsをShadows Onlyなスフィアを配置してすることで実現しています。また、丸影をメインラインとの向きを無視してオブジェクトの真下への投影を、URPの `ShadowCasterPass.hlsl` を参考にShaderGraphで実現する方法を解説しています。



デカールを用いた手法では、同様にキャラクターのCast Shadowsをオフにして、子オブジェクトに「URP Decal Projector」コンポーネントを追加して、丸影用のマテリアルをデカールとして配置しています。



また、２手法のパフォーマンス検証も行っています。

### ShaderGraphで複数マテリアルをひとつにまとめる

[[Unity]ShaderGraphで複数マテリアルをひとつにまとめる - Qiita](https://qiita.com/takashi_kawamura/items/2188b7072d1affae96c6)

１つのオブジェクトを複数の質感を表現する手法の比較と、１つのオブジェクトを１マテリアルで複数の質感を表現するようなシェーダーをShaderGraphで作成する方法を検討しています。



記事ではオブジェクトのどのポリゴンをどの質感で表現するかをテクスチャに書き込み、そのテクスチャの情報を元に質感を出し分ける手法と、それをShaderGraphを構築する方法について解説しています。

### UGUIのOutlineを元に綺麗なアウトラインを描画する

[UGUIのOutlineを元に綺麗なアウトラインを描画する - Qiita](https://qiita.com/ScreenPocket/items/9b11a9b31aa982cb1871)

uGUIのアウトライン描画で「尖った形状に弱い」といった問題と、それを解決する方法として通常４方向に元画像をずらしてアウトラインを描画する方法を８方向、１６方向に増やす方法の紹介しています。



また、uGUI標準のアウトラインコンポーネントの実装を読み解きつつ、これを実現するために標準のアウトラインコンポーネントを継承する形で実装方法について解説しています。

### ShaderGraphで視差マッピングを使用して立体感のある地割れを作成する

[【Unity】ShaderGraphで視差マッピングを使用して立体感のある地割れを作成する - 武0武/blog](https://bravememo.hatenablog.com/entry/2022/07/01/120000)

URP（Universal Render Pipeline）の[視差マッピング](https://docs.unity3d.com/Packages/com.unity.shadergraph@12.0/manual/Parallax-Occlusion-Mapping-Node.html)を使用して、地割れのようなテクスチャマッピングに立体感をもたせる方法を紹介しています。

### Unityで流体シミュレーションことはじめ

[Unityで流体シミュレーションことはじめ – 株式会社ロジカルビート](https://logicalbeat.jp/blog/11019/)

Rigidbody2Dによる簡易的な流体表現と、ナビエ・ストークス方程式を解析的に解くことで流体シミュレーションを実装する方法について紹介しています。

## Repositories & Tools

### ProjectAuditor

[Unity-Technologies/ProjectAuditor: Project Auditor is an experimental static analysis tool for Unity Projects.](https://github.com/Unity-Technologies/ProjectAuditor)

Unityプロジェクトのアセットや設定、スクリプトを静的解析して、問題のあるスクリプティングや、アセットやShader、Shader Variantなどの一覧のレポートを作成するツール。

### Unity Editor Toolbox

[arimger/Unity-Editor-Toolbox: Tools, custom attributes, drawers, hierarchy overlay, and other extensions for the Unity Editor.](https://github.com/arimger/Unity-Editor-Toolbox)

Unity Editorのインスペクターを拡張するようなAttributeやDrawer、ヒエラルキー拡張などを提供するライブラリ。

