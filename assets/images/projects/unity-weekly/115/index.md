---
type: unity-weekly
title: Unity Weekly 115
description: >-
  2023/04/03週のUnity Weeklyです。 Unity roadmap for 2023、 Memory Profiler
  1.1、Cinemachine 3、Scripting Dev Blitz Dayなどについてまとめています。
pubDatetime: 2023-04-01T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Analyzing your application’s physical memory footprint using Memory Profiler

[Analyzing your application’s physical memory footprint using Memory Profiler | Unity Blog](https://blog.unity.com/engine-platform/analyzing-physical-memory-footprint-using-memory-profiler)

近日中に正式版がリリースされる予定のMemory Profiler 1.1で追加された機能のうち、メモリーフットプリントの分析について説明しています。

常駐メモリとアプリケーションのメモリーフットプリントの計算方法、メモリーフットプリントを分析するためのMemory Profilerの新しい機能についてそれぞれ紹介しています。


### See what’s new with Cinemachine 3

[See what’s new with Cinemachine 3 | Unity Blog](https://blog.unity.com/engine-platform/see-whats-new-with-cinemachine-3)

Cinemachine 3について、そのアップデート内容を紹介しています。

Cinemachine 3が必要になった背景やこのリリースが機能更新メインではなくワークフローやUXなどをUnity標準にあわせるための再設計がメインである旨の紹介、Cinemachine 3での各コンポーネントの名前の変更やコンポーネントの機能的な分散、Unity Splinesとのインテグレーションなどについてそれぞれ解説しています。


### Unityの C# 最新情報満載！？ Scripting Dev Blitz Dayまとめ

[Unityの C# 最新情報満載！？ Scripting Dev Blitz Dayまとめ](https://youtu.be/6sio1yGhk6E)

Unityの中の人が開発者の質問に答えるDev Blitz Dayの紹介と、2/23に行われたスクリプティングシステム開発者チームの回答の中から、SpanやCoreCLR移行、SIMD対応、async/await に関する回答をいくつかピックアップして紹介しています。


### Unity roadmap for 2023

[Unity roadmap for 2023 | Unity at GDC 2023](https://www.youtube.com/watch?v=I7YYC796PEs&t=2015s)

GDC 2023で発表されたUnityの2023年のロードマップに関するセッションの動画が公開されています。


### 【4/1〜4/30】この春に、Unityの勉強を始めませんか？Unityイベント情報まとめ

[【4/1〜4/30】この春に、Unityの勉強を始めませんか？Unityイベント情報まとめ｜Unity Japan（ユニティ・テクノロジーズ・ジャパン）｜note](https://note.com/unityjapan/n/n44fd5b65ad48)

2023/04中に開催予定の、ユーザー主催のUnityイベントについてまとめています。

[Anime Toolboxのあそびかた 第3回：カットイン｜Yazuker｜note](https://note.com/yazuker/n/n1028a527d6e3)

Anime Toolboxでカットイン・ワイプ（メインの絵に対して他のキャラクターのリアクションが割り入ってくる演出）を実装する方法について紹介しています。


## Unity Repositories

### Add URP analyzer · Unity-Technologies/ProjectAuditor

[Add URP analyzer by IgorMaliukh · Pull Request #186 · Unity-Technologies/ProjectAuditor](https://github.com/Unity-Technologies/ProjectAuditor/pull/186)

Project AuditorにURPに関する項目の追加に関する対応がマージされました。

モバイルプラットフォームでURPを利用する際に「HDRが有効な場合」と「MSAAが有効な場合に4xか8xが指定されている場合」に警告を出すような解析が追加されています。


### NEW: Added custom InputBinding validation and editor UI drawing interface · Unity-Technologies/InputSystem

[NEW: Added custom InputBinding validation and editor UI drawing interface by jamesmcgill · Pull Request #1656 · Unity-Technologies/InputSystem](https://github.com/Unity-Technologies/InputSystem/pull/1656)

Input Systemに `InputSystem.customBindingPathValidator` というインターフェイスが追加されました。特定の InputBindingに対して `InputAsset` エディター上で警告を表示したり、プロパティパネルにカスタムUIを描画できるようになりました。


## Articles

### Unityプロジェクト向けオートパイロットフレームワークの運用Tips

[Unityプロジェクト向けオートパイロットフレームワークの運用Tips - DeNA Testing Blog](https://swet.dena.com/entry/2023/03/31/140000)

DeNA社が開発するゲームプレイを自動化するオートパイロットフレームワーク [Anjin](https://github.com/DeNA/Anjin) を安定して運用するためのTipsをまとめています。


### UnityプロジェクトにおけるGitHub Actions活用

[UnityプロジェクトにおけるGitHub Actions活用](https://technote.qualiarts.jp/article/52)

QualiArts社での、UnityプロジェクトでのGitHub Actionsを活用について紹介しています。

Jenkins利用の課題感とGitHub Actionsを選択した理由についての説明と、実行環境、実際に運用しているGitHub Actionsのワークフロー、Composite Actionsを用いた処理の共通化、self-hosted runner下でのUnityのLibraryフォルダーのキャッシュ方法についてそれぞれ解説しています。


### Unityに最適化した音声デコードライブラリを自作する上で工夫したこと

[Unityに最適化した音声デコードライブラリを自作する上で工夫したこと - Synamon’s Engineer blog](https://t.co/tvsov8k60i)

記事の著者が開発する[mochi-neko/simple-audio-codec-unity](https://github.com/mochi-neko/simple-audio-codec-unity)の紹介と、その実装で工夫した処理負荷とメモリ負荷について解説しています。


### uLipSync のアルゴリズム改善を行ってみた

[uLipSync のアルゴリズム改善を行ってみた - 凹みTips](https://tips.hecomi.com/entry/2023/03/31/022324)

uLipSyncのアルゴリズムを、リファレンスとしてLibrosaというPythonライブラリのMFCCの計算結果と比較しつつ改善する方法を解説しています。


### The Complete Asynchronous Programming Primer for Unity Development

[The Complete Asynchronous Programming Primer for Unity Development | HackerNoon](https://hackernoon.com/the-complete-asynchronous-programming-primer-for-unity-development?source=rss)

Unityでの非同期プログラミングの主な手法について、Coroutines・Promises・Task・UniTask・Awaitable APIを利用可能なUnityバージョンと合わせて網羅的に解説しています。


### 自然なまばたきのアニメーションをプロシージャルに生成する

[自然なまばたきのアニメーションをプロシージャルに生成する](https://zenn.dev/mochineko/articles/b39ee8fb8a4824)

自然なまばたき（Blink）アニメーションをプログラム制御でプロシージャルに生成する方法について、まばたきの動きをモデル化とUnity実装についてそれぞれ解説しています。

また、VRMモデルへの適用例について紹介しています。


### 【Unity2022】スプラインに最も近い点を取得する

[【Unity2022】スプラインに最も近い点を取得する](https://nekojara.city/unity-splines-nearest-point)

ある位置から、Unity Splinesで示された曲線から、もっとも近い点を算出する方法を紹介しています。


### ShaderGraphでFlowMapを使用する

[【Unity】ShaderGraphでFlowMapを使用する - 武0武/blog](https://bravememo.hatenablog.com/entry/2023/04/02/100000)

ShaderGraphでFlowMapを用いて、水流のような表現を行う方法について紹介しています。


### Compute Shaderの基礎 

[【Unity】Compute Shaderの基礎 - シェーダーTips](https://ny-program.hatenablog.com/entry/2023/03/30/181232)

UnityでComputeShaderを利用する方法について、定義やスレッド・スレッドグループを指定する方法、セマンティクス、値やバッファーの受け渡し方法などについて紹介しています。


### Debug.Logを便利にするために工夫していること

[Debug.Logを便利にするために工夫していること](https://zenn.dev/happy_elements/articles/38be21755773e0)

`Debug.Log` をより見やすく、使いやすくするための工夫やリリースビルド時にストリップする方法、Riderを用いたログのスニペット出力について紹介しています。


## Slides

### ゲームエンジンからステップアップ！”オブジェクト指向”早わかりガイド

[アカツキゲームス 田﨑 大也氏による「ゲームエンジンからステップアップ！”オブジェクト指向”早わかりガイド」の講演動画・スライドを公開！【ゲームメーカーズ スクランブル】](https://gamemakers.jp/article/2023_03_20_34370/)

ゲームメーカーズが2023/03/04に開催した「[ゲームメーカーズ スクランブル](https://gamemakers.jp/scramble2023/)」の、「ゲームエンジンからステップアップ！"オブジェクト指向"早わかりガイド」のスライド資料と動画が公開されています。

## Repositories

### keijiro/UnityMLStableDiffusion

[keijiro/UnityMLStableDiffusion: Core ML Stable Diffusion on Unity](https://github.com/keijiro/UnityMLStableDiffusion)

AppleのCoreMLを用いた、Unity向けのStableDiffusionプラグイン。


### SainaKey/timeline-previz

[SainaKey/timeline-previz](https://github.com/SainaKey/timeline-previz)

ランタイム上で動作するタイムラインアセット。


### jiaozi158/UnitySSPathTracingURP

[jiaozi158/UnitySSPathTracingURP: Screen Space Path Tracing for Unity's URP (Universal Render Pipeline). Using the full screen pass renderer feature in URP 14.](https://github.com/jiaozi158/UnitySSPathTracingURP?)

URP用のScreenSpacePathTracing実装。URP14のFull Screen Pass Renderer Featureを用いて実装されている。


### Akeit0/ZimGui-Unity

[Akeit0/ZimGui-Unity: ZimGui: Fast and GC Free Immediate Mode GUI for Unity](https://github.com/Akeit0/ZimGui-Unity)

高速かつゼロアロケーションなIMGUI実装。


### AnnulusGames/TweenPlayables

[AnnulusGames/TweenPlayables: Tween Animation Library for Unity Timeline](https://github.com/AnnulusGames/TweenPlayables)

TimelineでTweenアニメーションの機能を追加するライブラリ。


### thekiwicoder0/UnityBehaviourTreeEditor

[thekiwicoder0/UnityBehaviourTreeEditor: Behaviour Tree Editor for Unity built with UIToolkit](https://github.com/thekiwicoder0/UnityBehaviourTreeEditor?)

UI ToolkitでエディターUIを実装したBehaviour Tree実装。


### bustedbunny/com.bustedbunny.mvvmtoolkit

[bustedbunny/com.bustedbunny.mvvmtoolkit: Model-View-ViewModel Toolkit for Unity UIToolkit.](https://github.com/bustedbunny/com.bustedbunny.mvvmtoolkit?utm_source=pocket_saves)

UI ToolkitのためのModel-View-ViewModel（MVVM）フレームワーク。
