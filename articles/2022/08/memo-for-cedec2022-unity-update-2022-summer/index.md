---
title: CEDEC 2022 -「Unity最新情報まとめ！2022年夏版！」のメモ
description: CEDEC 2022の「Unity最新情報まとめ！2022年夏版！」の備忘録です。
pubDatetime: 2022-08-28T06:00:00.000Z
tags:
  - CEDEC2022
  - Unity
---

[Unity最新情報まとめ！2022年夏版！ | Unity Learning Materials](https://learning.unity3d.jp/8392/)



* URP（Universal Render Pipeline）のアップデート情報
    * Temporal Antialiasing
    * Forward+ Rendering
    * Custom Postprocess（fullscreen material type）
        * 独自のポストプロセッシングを実装できるようになる
    * Render Graph
        * レンダリングエンジン内部の実装が、コマンドを積み立てる方式からRender Graphを用いる方式に変更される。厳密なメモリ管理と最適化が行われる。
* URP・HDPR（High Definition Render Pipeline）共通の新機能
    * Material Variants
        * ワークフローの改善。親マテリアルを子マテリアルが継承するようなデータが作成できる
    * Frame Timing Manager
        * 描画の処理負荷を正確に把握できるようになるAPI。SRP（Scriptable Render Pipeline）のコアパッケージのRendering Debuggerで確認できる情報は、このAPIの情報を利用している。
* HDRPの新機能
    * HDRディスプレイ対応
    * Water System
    * Volumetric Material
        * プロシージャルなフォグをShader Graphで行えるように
    * DXR Path Tracing
        * De-noiserとしてNvidia OptiXとIntel Open Image Denoiseに対応
* Built-in Render Pipeline
    * メンテナンスがメイン
    * Shader GraphのBuilt-in対応
* Direct3D 12 正式対応
    * Direct3D 12の機能を利用できるように。また、使わなくても切り替えることでCPU負荷が軽減する傾向にある
* UI Toolkit
    * スタイルによる自動トランジション
        * 秒数を指定すると自動でトランジションする
    * バッチング処理
        * １シェーダーに対して最大テクスチャは7枚まで指定される
        * Dynamic Atlas
    * Transform更新の最適化
        * UI変化時の再構築範囲を（可能な限り）限定
        * UsageHintsを使用した最適化
            * DynamicTransformを指定するとGPUで頂点変換が行われるように
    * できないこと
        * ワールドスペースUI
        * アニメーションクリップを用いたアニメーション
        * カスタムシェーダー
* Overlay
    * コンテキストに沿ったオブジェクトの操作を提供できるようにしたい
        * いままではInspectorを選択して操作が主流だが、これを置き換えていきたい
    * 直感的な操作UIの提供する
    * コンポーネントのデバッグ。複数コンポーネントを跨いでもデバッグできる。
    * ショートカットツールの提供として
* Spline
    * 2022.1から標準提供。曲線に沿ったオブジェクトの配置などに使える。
* C# 9.0・.NET Standard 2.1サポート
    * 一部は使えない
    * `Span<T>` が使える
    * ランタイム移行（Mono → Core CLR）
* プロファイリング
    * Frame Timing Manager
    * Memory Profiler 1.0.0 が Unity 2022.2から公式提供
* その他
    * Package Manager 2022.1
        * キャッシュディレクトリのパスの指定、複数インストール、Unity標準パッケージの署名の検証
    * WebGL Player
        * モバイル対応に向けた ASTCテクスチャ圧縮、モバイルキーボード対応、警告ダイアログ廃止
        * WebGL 2.0 への移行
            * ほぼすべての主要なプラットフォームが、GLES 3.0以降をベースにできる。
