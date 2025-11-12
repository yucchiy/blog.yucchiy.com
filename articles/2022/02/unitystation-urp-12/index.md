---
title: 'メモ: URP総点検！〜最近こんなの増えてました〜 - Unityステーション'
description: ''
pubDatetime: 2022-02-27T00:00:00.000Z
tags:
  - Unity
  - Unity Station
  - URP
  - Unity 2021.2
---

[URP総点検！〜最近こんなの増えてました〜 - Unityステーション](https://www.youtube.com/watch?v=kchozuXTf4c)の動画のメモ。

# オープニングトーク

- Project Kaya
    - [https://github.com/UnityKorea/ProjectKaya](https://github.com/UnityKorea/ProjectKaya)
    - この動画で利用しているアセット
    - URPのためのサンプルプロジェクトでUnity Koreaが制作
    - 実際のゲームで使われてそうな（ハイエンドモバイルぐらい）現実的なプロジェクト

# URP更新内容をチェック！

Unity 2021.2（URP 12）における更新内容について

# アーティスト目線から（大下さん）

## Decal System

- ワールド空間上でマテリアルを投影
- HDPRではもともとあったが、URPにも実装された
- Renderer FeaturesにDecalを追加することで利用できる
- 実際に利用する際は「Decal Projector」と「Decal Shader Graph」で設定する
- Q: URPのデカールの処理負荷は
    - 数と種類次第

## Lens Flare System

- Lens Flare（SRP）コンポーネント + Lens Flare Data SRPアセット で設定する
- サンプルはPackage Managerに「URP Package Samples」があり、その中の「Sample」をインポートすると確認できる
- ライト以外のオブジェクトにも付加できる → 特定のオブジェクトに対してつけて、「隠す」表現ができそう

## Scene Debug View Modes

- URPのレンダリング要素を分解して確認するための機能
- Editor / Play mode / **Development builds**で動作する
- 確認できる項目一覧
    - Material
        - Material Override
        - Lighting Complexity
        - Vertex Attribute
        - Material Validation
    - Lighting
        - Normal map
        - Smoothness
        - Main Light
        - Additional Light
        - Vertex Lighting
        - Emission
        - Ambient Occlusion
    - Rendering
        - Map Overlays
        - HDR
        - MASS
        - Post Effects
        - WireFrame Mode
        - Over Draw
        - Pixel Validation
        - Channels

# 技術的ポイント（高橋さん）

サンプルプロジェクト: [https://github.com/keijiro/URPTestbed](https://github.com/keijiro/URPTestbed)

## レンダリング方式が充実した

3つが紹介された

- Depth Prepass
- Deferred Rendering
- Forward+

### Depth Prepass

- URPの設定に「Depth Priming Mode」が増えた
    - Disable / Auto / Force
- Zバッファを先に作ることで、オーバードローの付加を減らすのが主な用途
    - 通常は、Zバッファとカラーバッファを同時に描画する
- 最近のGPUではDepth Prepassを高速化する仕組みが備わっている
    - 通常の描画よりもかなり高速になる
- ベンチマーク
    - 4K解像度、GeForce RTX 2060 SUPER
    - 10万ポリゴン、極端なオーバードローが起きるシーンで検証
    - Depth Prepassなし: 45fps
    - Depth Prepassあり: 200fps
- モバイル向けのGPUの場合、殆どの場合は効果がない、むしろ処理負荷が上がる
    - MacBook Pro（M1 Max, 2021）では、ポリ数をふやすと Depth Prepass 有りのほうが重くなっていく
    - モバイル向けGPUの場合は、一番手前のピクセルだけをシェーディングする機能がGPUに搭載されている（Depth Prepass的な機能がすでに備わっている）

### Deferred Rendering Path

- Deferred Rendering Pathが完成した
    - URPの設定の「Rendering > Rendering Path」で DeferredとForwardが選択できる
    - ライトがたくさん置ける（Forwardだと影響するライト数に制限がかかる）
    - MSAAが利用できない、半透明が利用できない

### Forward+

- 実験的機能。Fowardに多ライト対応が入った。
- Deferred とは違った、ライト数の絞り込み手法
    - 視錐台をグリッド上に区切り、それぞれのグリッドにかかるライトの一覧を予め列挙する
    - レンダリングの際には、グリッドごとに上記の列挙されたライト情報を利用してライティングを行う
    - Scripting Define Symbolsに「URP_ENABLE_CLUSTERED_UI」を設定すると、Forward+の設定UIが表示される

## SwapBuffer

- Renderer Featureを使ってポストエフェクトを組むのが楽になる機能
- いままでRenderer Featureでポストエフェクトを実装しようと思うと、レンダーバッファに対して自分でレンダーテクスチャを確保してBlitし、ポストエフェクトを適用してからレンダーバッファに対してBlitし直し、確保したレンダーテクスチャを破棄する必要があった（複雑になりがち）
- SwapBufferでは、SRP内でレンダーバッファとは別にレンダーテクスチャを保持している
    - ユーザーは、マテリアルを渡すだけでよい（レンダーテクスチャの確保やBlitは勝手にやってくれる）

# その他の更新内容

## Reflection probe blending and box projection support

- reflection probe blending: ２つのプローブのブレンドをサポート
- box projection: プローブの領域をboxで定義できる。一部領域のリフレクションの精度を上げるなどができる
- Q: BoxProjectionの設定が有効にならない
    - A: QualitySettingsで有効にしないと効かない

## Light Cookies

- テクスチャを使って、ライトの影響範囲にマスクがかけられる

## Render Pipeline Converter

- Built-inプロジェクトをURPアセットにコンバートできる

## Motion Vectors

- モーションブラーエフェクトブラーなどに利用するためのMotion Vectorが利用できるようになった
- エフェクトを組むための下地が整えられた

## URP Volume system update frequency

- ボリュームを配置したとき、ボリューム判定の定期処理の頻度を切り替えることができるようになった
- Every Frame / Via Script / Use Pipeline Settings

## URP Global Settings

- プロジェクト共有の設定
- 現在はLight Layersの設定しか無い
    - 今後増える予定？

## Light Layers

- ライトの影響をレイヤーで定義できるようになった

## Enlighten Realtime GI

- URPのEnlighten対応
- UnityのGIは、今後Enlightenを利用していく方針になった

## SpeedTree 8 vegetation

- SpeedTreeのSub Graph Assets

## Shader Graph: Override Material Properties

- ShaderGraphの設定をマテリアルの設定で行えるようになった

## Improvements

- SSAO improvements
    - Normal mapsに表現されている凹凸がSSAOに出てくるようになった
    - パーティクルシステムのサーフェイスにも利用できるようになった
    - パフォーマンスが改善された
- SRP settings workflow improvements
    - HDRPとURPのUXができるだけ同じになるように調整が行われている（UIなど）
- More optimal handing of the depth buffer with MSAA enabled
- URP 2D Renderer improvements
