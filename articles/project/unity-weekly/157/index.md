---
type: unity-weekly
title: Unity Weekly 157
description: >-
  2024/01/29週のUnity Weeklyです。Hugging Face x Unity Sentis、glTFast、Live Capture
  stYpe パッケージ、Editor Foundations、Unity URP
  完全に理解した勉強会、Unityプログラミングバイブルなどについて取り上げています。
pubDatetime: 2024-01-28T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Find the right AI model for your game

[Find the right AI model for your game | Unity Blog](https://blog.unity.com/games/hugging-face-ai-models-and-more-sentis-updates)

Hugging FaceとUnity SentisのインテグレーションとしてUnity上で利用できる[検証済みモデル](https://huggingface.co/models?library=unity-sentis&sort=trending)や独自のSentisのモデルの追加方法、Unity Sentisの今後のアップデートとしてGraph UIやハードウェアアクセラレーション、クラウド上での推論などをそれぞれ紹介しています。

### Unity で glTF 形式が使えるようになりました！ “glTFast” を使ってみよう！

[Unity で glTF 形式が使えるようになりました！ “glTFast” を使ってみよう！ - YouTube](https://www.youtube.com/watch?v=858YlvA6OKw)

glTFの概要とUnityでglTFフォーマットを扱うための公式パッケージのglTFastの紹介、インストール方法、基本的な利用方法としてglTFのファイルのエディター・ランタイム上でのそれぞれのインポート・エクスポート、パッケージの注意点についてそれぞれ解説しています。

### Open-sourcing of Live Capture stYpe package

[Official - Open-sourcing of Live Capture stYpe package - Unity Forum](https://forum.unity.com/threads/open-sourcing-of-live-capture-stype-package.1540298/)

UTF（Unity Technologies Japan）が開発する[stYpe RedSpy](https://stype.tv/)用の[Unity Live Captureパッケージ](https://github.com/Unity-Technologies/com.unity.live-capture.stype)の公開についてアナウンスしています。

### Editor Foundations Design System

[Unity | Editor Foundations Design System](https://www.foundations.unity.com/)

Unity公式の、エディターUIデザインシステムのガイドラインページ。

### Knowledge unboxed: The top learning tools of 2023

[Knowledge unboxed: The top learning tools of 2023 | Unity Blog](https://blog.unity.com/games/top-learning-tools-of-2023)

2023年にもっとも人気のあった[Unity Learn](https://learn.unity.com/)のコンテンツを紹介しています。

### Tomas Sala on building an indie IP with award-winning Bulwark: Falconeer Chronicles

[Tomas Sala on building an indie IP with award-winning Bulwark: Falconeer Chronicles | Unity Blog](https://blog.unity.com/games/tomas-sala-on-indie-game-bulwark-falconeer-chronicles)

BAFTAなどの受賞歴のある「Bulwark: Falconeer Chronicles」を開発するTomas Sala氏の、このゲームの制作背景などについてのインタビュー記事です。

## Events

### Unity URP 完全に理解した勉強会

[Unity URP 完全に理解した勉強会 - Unity Meetup](https://meetup.unity3d.jp/jp/events/1416)

Unityユーザコミュニティ主導で開催される勉強会「Unity 〇〇完全に理解した勉強会」のURP回が2024/02/02に開催されます。

## Books

### Unityプログラミング・バイブル R6号

[Unityプログラミング・バイブル R6号](https://www.amazon.co.jp/dp/4862465900)

Unityプログラミング・バイブルの第2号が2/29に発売されます。

- 特集記事
    - NetCodeでリアルタイムネットワークゲーム
    - ECS入門
    - Unityの新しい非同期処理async/awaitによる「Awaitable」入門と「UniTask」
    - ARFoundationのImageTrackingについて詳しくなろう
    - Unityで使えるC#8.0とC#9.0の機能
- 一般記事
    - UnityProfiler
    - iOS向けのネイティブプラグイン開発
    - .NET向けIDE「JetBrains Rider」の活用【後編】
    - 効果的な流体エフェクト
    - ログの価値を高めるUnity LoggingとCrash And Exception Reporting

## Articles

### GPU Run-time Procedural Placement on Terrain

[GPU Run-time Procedural Placement on Terrain | by Kacper Szwajka | Jan, 2024 | Medium](https://medium.com/@kacper.szwajka842/gpu-run-time-procedural-placement-on-terrain-cc874e39bbfb)

GPU上での地形のプロシージャル配置についてのテクニックを紹介しています。

### Unity の WebGL ビルドでマイク入力を扱えるライブラリを作ってみた 

[Unity の WebGL ビルドでマイク入力を扱えるライブラリを作ってみた - 凹みTips](https://tips.hecomi.com/entry/2024/01/28/010109)

ブログ著者の公開した[uMicrophoneWebGL](https://github.com/hecomi/uMicrophoneWebGL)について、このライブラリを制作した背景から設計や実装の方針、ライブラリの基本的な使い方を紹介しています。

### Unity LoggingでSinkを自作する

[Unity LoggingでSinkを自作する - imog](https://adarapata.hatenablog.com/entry/2024/01/23/010658)

「Logの行数をカウントするSink」という簡単な題材を通して、Unity LoggingのSinkを自作するための`SinkSystemBase`や`SinkConfiguration`の基本的な実装からBurst Compile対応の方法などを実際のコードを交えて解説しています。

### Incremantal SourceGenerator プロジェクトの作り方

- [【Unity用】Incremantal SourceGenerator プロジェクトの作り方 #C# - Qiita](https://qiita.com/amenone_games/items/762cbea245f95b212cfa)
- [【Rider】SourceGeneratorをデバッグする方法 #C# - Qiita](https://qiita.com/amenone_games/items/0a99f38fd08911b62c3a)

Unity上でIncremental SourceGeneratorプロジェクトの作成方法から、基本的な実装方法やAPI、SourceGeneratorのRider上でのデバッグ方法を紹介しています。

### System.Text.JsonをUnityの型に対応させるライブラリの作り方

[System.Text.JsonをUnityの型に対応させるライブラリの作り方 | BLOG - DeNA Engineering](https://engineering.dena.com/blog/2024/01/unity-system-text-json/)

Unity上で `System.Text.Json` を用いてUnityの型をシリアライズ・デシリアライズするためのカスタムコンバーターの実装方法について紹介しています。

### ゲーム開発に所謂なアプリケーション設計パターンを適用するのは難しい

[ゲーム開発に所謂なアプリケーション設計パターンを適用するのは難しい - hadashiA](https://scrapbox.io/hadashiA/%E3%82%B2%E3%83%BC%E3%83%A0%E9%96%8B%E7%99%BA%E3%81%AB%E6%89%80%E8%AC%82%E3%81%AA%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E8%A8%AD%E8%A8%88%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E3%82%92%E9%81%A9%E7%94%A8%E3%81%99%E3%82%8B%E3%81%AE%E3%81%AF%E9%9B%A3%E3%81%97%E3%81%84)

ゲーム開発において、MVVMなどのアプリケーション設計パターンをそのまま適用するのは難しい理由を考察しています。

### Input Systemで独自デバイスを実装する

[【Unity】Input Systemで独自デバイスを実装する | ねこじゃらシティ](https://nekojara.city/unity-input-system-custom-device)

Input Systemで仮想的なコントローラーを実現するためのカスタムデバイスについて、その基本的な実装方法からその利用方法を紹介しています。

### GitHub Copilot ChatをUnity×Riderで使う方法と、コードについての質問を直接AIに出来ると生産性爆上がりするという話

[GitHub Copilot ChatをUnity×Riderで使う方法と、コードについての質問を直接AIに出来ると生産性爆上がりするという話【Unity】【JetBrains Rider】【AI】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/GitHub_Copilot_Chat_Unity_Rider)

Rider上でGitHub Copilot Chatを利用するための方法や実際の利用方法について紹介しています。

### UnityアプリでのApple Privacy Manifests対応まわりについて

[UnityアプリでのApple Privacy Manifests対応まわりについて | Yucchiy's Note](https://blog.yucchiy.com/2024/01/apple-privacy-manifests-unity/)

UnityアプリにおけるApple Privacy Manifestsの対応について、対応の概要からUnityが現在進行で対応を予定している各種対応についてまとめています。

### UnityでのAppleのPrivacy Manifestへの対応方法

[UnityでのAppleのPrivacy Manifestへの対応方法 - 強火で進め](https://nakamura001.hatenablog.com/entry/2024/01/24/Unity%E3%81%A7%E3%81%AEApple%E3%81%AEPrivacy_Manifest%E3%81%B8%E3%81%AE%E5%AF%BE%E5%BF%9C%E6%96%B9%E6%B3%95)

AppleのPrivacy Manifestの概要と、この対応が行われたUnityが出力する `PrivacyInfo.xcprivacy` を実際に書き出して確認しています。

### Figma→UnityのToolを試す

[Figma→UnityのToolを試す【UnityFigmaBridge】 - トマシープが学ぶ](https://bibinbaleo.hatenablog.com/entry/2024/01/26/174745)

Figmaで制作した画面のデザインをUnityにインポートする[UnityFigmaBridge](https://github.com/simonoliver/UnityFigmaBridge)の基本的な利用方法を紹介しています。

### java.lang.NoSuchMethodException - com.unity3d.player.x.<init> []

[【Unity】java.lang.NoSuchMethodException - com.unity3d.player.x.<init> [] - コガネブログ](https://baba-s.hatenablog.com/entry/2024/01/23/090705)

ブログ著者が遭遇した、Unity 2022.3.16f1とFirebaseを使用しているアプリ上で発生した `java.lang.NoSuchMethodException - com.unity3d.player.x.<init> []` というエラーとその対処方法について紹介しています。

### Painter2Dにおいてパス同士の内外判定を決めるFill Rulesの使い方

[【Unity】【UI Toolkit】Painter2Dにおいてパス同士の内外判定を決めるFill Rulesの使い方 - LIGHT11](https://light11.hatenadiary.com/entry/2024/01/22/195458)

UI Toolkitでベクター画像の重なりからぬりつぶし領域を決定するFill Rulesについて、その基本的な利用方法を紹介しています。

### Unityの-nographicsオプションの影響について

[Unityの-nographicsオプションの影響について - Activ8 Tech Blog](https://synamon.hatenablog.com/entry/2024/01/27/202520)

Unityをコマンドライン経由で起動する際に指定できる `-nographics` オプションの概要と、このオプションを指定した場合のおもにグラフィックスAPI周辺の挙動について紹介しています。

### Overdrawを数値化してみた

[Overdrawを数値化してみた #Unity - Qiita](https://qiita.com/haw2fregel/items/be5df21237113e5f3110)

描画のオーバードローを可視化・数値化するための方法を紹介しています。

## Repositories

### Hugging Face API for Unity

[huggingface/unity-api](https://github.com/huggingface/unity-api)

UnityでHugging Face Inference APIを扱いやすく提供するためのパッケージ。

### uMicrophoneWebGL

[hecomi/uMicrophoneWebGL: Enable microphone input buffer access in Unity WebGL builds](https://github.com/hecomi/uMicrophoneWebGL)

Unity WebGLビルドでマイク入力バッファーへのアクセスを可能にするためのパッケージ。
