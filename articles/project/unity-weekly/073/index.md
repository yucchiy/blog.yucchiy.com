---
type: unity-weekly
title: >-
  AssetRegulationManager、selective-profiling、ParticleEffectForUGUI
  4.0.0-preview.1、Metawire - Unity Weekly #073
description: >-
  2022/06/20週のUnity
  Weeklyです。AssetRegulationManagerやselective-profiling、ParticleEffectForUGUI
  4.0.0-preview.1、Metawireなどについて取り上げました。
pubDatetime: 2022-06-19T12:00:00.000Z
tags:
  - Unity Weekly
  - Unity
---

# Unity Officials

## Unity ゲーミングサービス Use Cases を使ってゲーム難易度の A/B テスト手法を学ぼう

[Unity ゲーミングサービス Use Cases を使ってゲーム難易度の A/B テスト手法を学ぼう | Unity Blog](https://blog.unity.com/ja/games/how-to-ab-test-game-difficulty-with-ugs-use-cases)

UGS（Unity Gaming Service）のRemote ConfigとGame Overrides、Analyticsを組み合わせてA/Bテストを行う方法やその実装方法について紹介しています。

# Articles

## 大量のSD制作を支える「IDOLY PRIDE」におけるSpine活用事例

[大量のSD制作を支える「IDOLY PRIDE」におけるSpine活用事例② 〜アイテム付与/モーション合成編〜 | QualiArtsエンジニアブログ](https://technote.qualiarts.jp/article/36)

[大量のSD制作を支える「IDOLY PRIDE」におけるSpine活用事例③ 〜バリエーションの実現/データ分割編〜 | QualiArtsエンジニアブログ](https://technote.qualiarts.jp/article/37)

ミニキャラをSpineで実装する際の、スロットの分割を用いた小物の前後関係の表現やモーション合成のためのモーショントラックの設計や口パクの実装例、キャラクターの性格や利き手、シチュエーションなどによるモーションの出し分けとそのためのデータ分割の設計についてそれぞれまとめています。

## Command design pattern for flexible controls schemes

[Command design pattern for flexible controls schemes - Pav Creations](https://pavcreations.com/command-design-pattern-for-flexible-controls-schemes/)

ゲームの実装において、ある操作が入力に強く紐づくような実装を行うと複雑かつスケールしづらいコードになるという問題と、これを解決するためにCommandパターンをベースにしたCommand design patternを用いて、コードを整理する方法について紹介しています。

## 常に同じ太さのアウトラインを作る

[【ShaderLab】常に同じ太さのアウトラインを作る](https://zenn.dev/r_ngtm/articles/shaderlab-outline)

2passで後ろにアウトライン用モデルを描画するようなアウトライン描画で、カメラから遠い座標に配置されたモデルのアウトラインが細くなる（近いと太くなる）現象の、これがMVP座標変換による同時座標から通常座標に戻す際に発生する原理の説明と、これを対応するシェーダーコードを紹介しています。

## Unity 2021 LTS で紹介されたCode Coverage Packageを試してみる

[Unity 2021 LTS で紹介されたCode Coverage Packageを試してみる – てっくぼっと！](https://blog.applibot.co.jp/2022/06/15/code_coverage/)

Unityの提供するCode Coverage Packageについて、インストール方法から基本的な使い方、テストを記述しながらカバレッジを上げていく方法、CLI経由での実行方法などそれぞれ紹介しています。

## モンハンのようなパイメニュー（パレット）の実装

[【Unity】モンハンのようなパイメニュー（パレット）の実装 - Qiita](https://qiita.com/iroha71/items/1cfd961fa3324a46a97e)

特定領域を押すとメニューが開き、そのままドラッグしてメニューを選択、手を離すとメニュー選択を決定する、パレットUIの実装方法について、UIのハンドリングから、メニューアイテムを円形に表示する実装について解説しています。

## Androidでマウス使用時にカーソルを非表示＆左クリック以外も取得

[【Unity】Androidでマウス使用時にカーソルを非表示＆左クリック以外も取得 - iwasiblog](https://iwasi.hatenablog.jp/entry/2022/06/13/022026)

Unityで制作したAndroidアプリでマウスを接続したときのマウスカーソルの挙動や、制御のためのAPIについてそれぞれ紹介しています。

## 最後のビルドをエディタから実行する

[【Unity】最後のビルドをエディタから実行する - Qiita](https://qiita.com/_udonba/items/35deb83e966191901e73)

`IPostprocessBuildWithReport` インターフェイスを実装したクラスを用意することで、Untityビルド後のタイミングをフックして独自の処理を差し込む方法とこの機能を用いて成果物の保存方法、Unityパッケージ制作でのアセット読み込みのパスの注意点についてそれぞれ紹介しています。

## Unity ShaderLabのVisualStudioデバッグ

[Unity ShaderLabのVisualStudioデバッグ](https://zenn.dev/panda_nakami/articles/20220616-shaderlab-debug)

Windows環境で、Visual Studioのグラフィックスデバッグ機能によってUnityのShaderLabをデバッグする方法（描画コマンドの確認や頂点・ピクセルシェーダーの入出力確認、ブレークポイントやステップ実行）について紹介しています。

## ARCore Geospatial APIを使ったセッションをRecording and Playback APIを使って記録・再生する

[ARCore Geospatial APIを使ったセッションをRecording and Playback APIを使って記録・再生する](https://zenn.dev/drumath2237/articles/c6c0241b9ba2ae)

ARCore Geospatial APIのARセッションを記録・再生する ARCore Recording and Playaback APIについて、その使い方や実装について紹介しています。

## Unity パッケージにおけるパスの扱いについて

[Unity パッケージにおけるパスの扱いについて | Yucchiy's Note](https://blog.yucchiy.com/2022/06/path-in-unity-package/)

Unityのパッケージ内のアセットやデータを参照するためのパスの扱い方についてまとめています。

# Repositories

## CyberAgentGameEntertainment/AssetRegulationManager

[CyberAgentGameEntertainment/AssetRegulationManager: Tool for Unity to create and run tests of Asset Regulations (texture size, number of vertices, etc.), and automate running.](https://github.com/CyberAgentGameEntertainment/AssetRegulationManager)

設定ファイルベースでプロジェクト内のアセットのレギュレーション（例えばテクスチャサイズやメッシュの頂点数、ファイル名）をチェックするツール。レギュレーションチェックの実行を自動化するためのCLIも用意されています。

## needle-tools/selective-profiling

[needle-tools/selective-profiling: Selectively deep profile single methods in Unity's Profiler](https://github.com/needle-tools/selective-profiling/)

実行中に、プロファイラで選択したメソッドのみを（プロジェクト全体のディーププロファイリングをONにせずとも）ディーププロファイリングするためのエディタ拡張。

## keijiro/Metawire

[keijiro/Metawire: Unity primitive mesh generator as an asset importer (for wireframe primitives)](https://github.com/keijiro/Metawire)

設定ファイルをベースにラインプリミティブによるワイヤーメッシュを生成するライブラリ。

## Release 4.0.0-preview.1 - mob-sakai/ParticleEffectForUGUI

[Release 4.0.0-preview.1 · mob-sakai/ParticleEffectForUGUI](https://github.com/mob-sakai/ParticleEffectForUGUI/releases/tag/4.0.0-preview.1)

uGUI上にパーティクルエフェクトを描画する mob-sakai/ParticleEffectForUGUIの4.0.0-preview.1がリリースされました。

パフォーマンス改善のための「mesh shareing group」やパーティクルを特定の場所に惹きつけるような挙動を実装するための「particle attractor component」などの機能が追加されています。

