---
type: unity-weekly
title: URP eBook、グラフィックス新常識、Unity パフォーマンスチューニングバイブル - Unity Weekly 082
description: >-
  2022/08/22週のUnity Weeklyです。 URP eBook、グラフィックス新常識、Unity
  パフォーマンスチューニングバイブルなどについて取り上げました。
pubDatetime: 2022-08-22T06:00:00.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Move on over to the Universal Render Pipeline with our advanced guide

[Move on over to the Universal Render Pipeline with our advanced guide | Unity Blog](https://blog.unity.com/technology/move-on-over-to-the-universal-render-pipeline-with-our-advanced-guide)

Unityが、上級者向けのURP（Universal Render Pipeline）入門書をeBookとしてリリースしました。



125ページを超えるボリュームとなっていて、Built-in Render Piepeline（Built-in RP）で制作されたプロジェクトのレンダリングパイプラインをURPへ移行する方法や Built-in RP と URPの各種設定の比較、URPにおけるライト、シェーダーの移植やカスタムシェーダーを実装する際に知っておくと便利な関数やタグなどのチートシート、パイプラインの各種コールバックの受け取り方、ポストプロセッシングエフェクトなどそれぞれ解説しています。

### 今から始めて差をつける、Unityグラフィックスの新常識

[今から始めて差をつける、Unityグラフィックスの新常識 | Unity Learning Materials](https://learning.unity3d.jp/8383/)

最新のUnityで、目的のグラフィックス表現を行うためのレンダリングパイプラインを

## Articles

### RiderFlow徹底解説

[RiderFlow徹底解説](https://zenn.dev/yuji_ap/books/ec72d9c7bfadfb)

JetBrainsが提供するUnityプラグイン「RiderFlow」の各機能の紹介から利用方法を紹介しています。



導入方法からプロジェクトの検索やヒエラルキー拡張、シーンビュー操作のためのツールバー、Unityエディター上の簡易コードエディタなど、提供されている機能についてそれぞれ詳細を解説しています。

### Unity URPでGrabPassっぽいことをやる (2D対応版)

[Unity URPでGrabPassっぽいことをやる (2D対応版)](https://zenn.dev/ruccho/articles/cda6d291ed9947)

URPでBuilt-in Render PipelineにあるGrabPassを実現する方法について、URPのパスの調査から解決方法、実際の対応コード、シェーダーから利用する方法について紹介しています。



`CommandBuffer.DrawRenderer()` などのAPIではSRP（Scriptable Render Pipeline）のバッチングやソーティングの機能にアクセスできないことから、UniversalRendererを直接改造して、SortingLayerごとに描画する画面をコピーするような `ScriptableRenderPass` およびそれを利用する `ScriptableRenderer` を実装する方法について解説しています。

### fluentui-emojiの絵文字をUnityで読み込む

[fluentui-emojiの絵文字をUnityで読み込む](https://zenn.dev/fumo/articles/9f101ce4b47ad7)

Microsoftが提供する [Fluent Emoji](https://github.com/microsoft/fluentui-emoji) をTextMeshProで使うための方法について紹介しています。



元データ（SVG）をPNGに変換する方法からPythonスクリプトを用いたアトラスデータの作成、 [Full Emoji Support Api](https://forum.unity.com/threads/full-emoji-support-api-emoji-sequen.660310/#post-4420162) というパッケージを用いて作成したアトラスデータからTextMeshPro用のSpriteAssetを生成する方法と、それを実際に利用する方法についてそれぞれ解説しています。

### TextMesh Proで禁則処理を実現する

[【Unity】TextMesh Proで禁則処理を実現する | ねこじゃらシティ](https://nekojara.city/unity-textmesh-pro-line-breaking)

TextMesh Proでの禁則処理（日本語の句読点などが行頭に来ないように改行処理を行う）の特徴からデフォルトの挙動、行頭禁則と行末禁則の対象となる文字列のデフォルトの定義場所と編集方法などについてそれぞれ解説しています。

### Varjo XR-3 + MRTK Unity開発環境(URP)構築

[Varjo XR-3 + MRTK Unity開発環境(URP)構築](https://zenn.dev/jin_kei/articles/fe3601d77be57a)

Varjo XR-3を用いたハンドトラッキング機能を実装するための環境を整える手順について紹介しています。

VarjoUnityXRPluginとUltraleapTrackingPlugin、MRTKのそれぞれのインポートからMRTKで利用するレンダリングパイプラインをURPに変更する方法、入力にLeapMotionを利用する方法、Varjo XR-3のLiDARセンサーによる深度推定を有効にする方法についてそれぞれ解説しています。

### VisualScriptingとUniTaskを組み合わせる

[VisualScriptingとUniTaskを組み合わせる](https://zenn.dev/fumo/articles/930b4b5993b117)

VisualScriptingで、遅延を表現するカスタムユニットを UniTask を用いて実装する方法について紹介しています。

### UTFで「UNITY_INCLUDE_TESTS」があると通常のビルドにはテストコードが含まれないようになっているらしい

[【Unity】UTFで「UNITY_INCLUDE_TESTS」があると通常のビルドにはテストコードが含まれないようになっているらしい - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2022/08/15/120000)

asmdefに `UNITY_INCLUDE_TESTS` という Define Constraints を設定することで、テストコードが成果部に含まれないことを実験的に検証しています。

## Repositories

### Aim-IK

[ehsan-mohammadi/Aim-IK: A Unity package, to procedurally orientate the character's head (and spine) in a direction without using any animation data.](https://github.com/ehsan-mohammadi/Aim-IK)

キャラクターのHeadとSpineの向きをプロシージャルに調整するためのIKパッケージ。2Dと3Dでそれぞれ実装が用意されていて、角度制限やオフセット、補完ありのなめらかなLook atが行える。

### SafeValues

[ookii-tsuki/SafeValues: A simple Unity library for cheating prevention](https://github.com/ookii-tsuki/SafeValues)

チート対策用パッケージ。メモリ内の変数隠蔽やPlayerPrefsの暗号化、スピードハックの検知などが実装されている。

### **LWGUI (Light Weight Shader GUI)**

[JasonMa0012/LWGUI: A Lightweight, Flexible, Powerful Shader GUI System for Unity.](https://github.com/JasonMa0012/LWGUI)

軽量かつ拡張可能なShader GUIシステム。マテリアルインスペクターのグループ化やMinMaxSlider、Rampなど、独自のMaterialPropertyDrawerを用いた操作しやすいGUIが提供されている。

### RaycastVisualization

[nomnomab/RaycastVisualization: This asset allows users to view raycasts as the user fires them.](https://github.com/nomnomab/RaycastVisualization)

様々なレイキャストの結果を可視化するためのライブラリ。 `Raycast` や `CapsuleCast` など単体のレイキャストの可視化だけでなく、 `RaycastAll` や `CapsuleCast` など複数の当たり判定を取るようなレイキャスト、Closest PointやCompute PenetrationなどのAPIの可視化もサポート。

### Nav Mesh Avoidance

[OlegDzhuraev/NavMeshAvoidance: Custom Nav Mesh Avoidance to replace default one in Unity.](https://github.com/OlegDzhuraev/NavMeshAvoidance?)

`NavMeshAgent` 同士が近づき過ぎないようにするための実装。

## Others

### **社内研修書籍『Unity パフォーマンスチューニングバイブル』のPDF公開&オープンソース化しました！**

[【無料公開】社内研修書籍『Unity パフォーマンスチューニングバイブル』のPDF公開&オープンソース化しました！ | CyberAgent Developers Blog](https://developers.cyberagent.co.jp/blog/archives/37085/)

サイバーエージェントのゲーム・エンターテイメント事業部（SGE）から、研修用として社内公開していた「Unity パフォーマンスチューニングバイブル」が公開されました。



下記レポジトリからPDFのダウンロードが可能です。

[https://github.com/CyberAgentGameEntertainment/UnityPerformanceTuningBible](https://github.com/CyberAgentGameEntertainment/UnityPerformanceTuningBible)

