---
type: "unity-weekly"
title: "Unity Weekly 122"
description: "2023/05/22週のUnity Weeklyです。UI Mask、Memory Profiler 1.1.0-pre.1、Dev Blitz Dayなどについて取り上げています。"
tags: ["Unity Weekly","Unity"]
date: "2023-05-22T00:00:01"

---

## Unity Officials

### 3通りのUI Maskとその使い分けを今更解説！

[3通りのUI Maskとその使い分けを今更解説！ - YouTube](https://www.youtube.com/watch?v=N-iAru1hOxQ)

UIコンポーネントのマスク方法について、RectMask2DやMaskコンポーネントの使い方と特徴、カスタムシェーダーとPosition as UVを用いたソフトマスクの実装と補足としてカスタムシェーダーのベースに利用したUI Detail Shaderについてそれぞれ解説しています。

### Memory Profiler 1.1.0-pre.1 Released 

[Official - Memory Profiler 1.1.0-pre.1 Released - Unity Forum](https://forum.unity.com/threads/memory-profiler-1-1-0-pre-1-released.1436764/)

Memory Profiler 1.1.0-pre.1がリリースされました。1.1.0-exp.1からバグフィックスやパフォーマンス改善が行われています。

### Dev Blitz Day Schedule

[Official - Dev Blitz Day Schedule - Unity Forum](https://forum.unity.com/threads/dev-blitz-day-schedule.1435837/)

Unityの開発者がその日質問に答えるDev Blitz Dayの今後の開催予定についてアナウンスしています。

### Using DevOps to scale multiplatform

[Using DevOps to scale multiplatform | Unity Blog](https://blog.unity.com/games/using-devops-to-scale-multiplatform)

Unity Gaming Servicesで提供されるDevOpsツールを活用したマルチプラットフォームの立ち上げについてのラウンドテーブル形式の[Webinar](https://resources.unity.com/games/using-devops-to-scale-multiplatform-webinar)の中から、いくつかの内容をピックアップして紹介しています。

### How to make killer creatives for your hypercasual game 

[How to make killer creatives for your hypercasual game | Unity Blog](https://blog.unity.com/games/how-to-make-killer-creatives-for-your-hypercasual-game)

ハイパーカジュアルゲームでCPIを下げて規模の拡大につなげるためのクリエイティブ制作のヒントを紹介しています。

## Articles

### Knot Puzzle 解説

[Knot Puzzle 解説 - Imaginantia](https://phi16.hatenablog.com/entry/2023/05/21/230737)

VRChatのワールド「Knot Puzzle」についてその制作やパズルの実装ロジックについて解説しています。

### Cinemachineカメラをスプラインに沿って動かす 

[【Unity】Cinemachineカメラをスプラインに沿って動かす | ねこじゃらシティ](https://nekojara.city/unity-cinemachine-splines)

CinemachineのカメラをSplineパッケージを用いて曲線上に動かす実装を、Cinemachine 2.xによる実装と、Cinemachine 3から利用できる標準のスプラインパッケージを用いた実装の2通り紹介しています。

### キャラクタートゥーンシェーダの表現手法をまとめる(Lambert二値化)

[【Unity URP】キャラクタートゥーンシェーダの表現手法をまとめる(Lambert二値化)](https://zenn.dev/inpro/articles/84a72e5ebe3c33)

トゥーンシェーディングで用いられるLambert反射の2値化について、その考え方から実装を紹介しています。また、MainLightのdirection（Light構造体のdirectionフィールド）がどのようなベクトルを返すのかについても言及しています。

### 残像が残るカメラを実装する

[【URP14】残像が残るカメラを実装する](https://zenn.dev/r_ngtm/articles/urp14-dont-clear-camera)

オブジェクトの残像を残すようなカメラを、レンダーテクスチャとURPのRendererFeatureを用いて実装する方法について紹介しています。

### How to Enhance Your Game Project Using the ObjectPool Pattern 

[How to Enhance Your Game Project Using the ObjectPool Pattern (A Unity Guide) | HackerNoon](https://hackernoon.com/how-to-enhance-your-game-project-using-the-objectpool-pattern-a-unity-guide?source=rss)

オブジェクトプールパターンがプロジェクトに必要な理由の紹介とオブジェクトプールの実装方法とその利用方法について紹介しています。

### Unityでノーマルマッピング (バンプマッピング)

[Unityでノーマルマッピング (バンプマッピング) - 3Dゲーム開発備忘録](https://daiki-eguchi.hatenablog.com/entry/2023/05/17/094939)

Unityでバンプマッピングを実装する方法について紹介しています。

### そろそろShaderをやるパート89　-URP編- LEDディスプレイっぽい表現 

[そろそろShaderをやるパート89　-URP編- LEDディスプレイっぽい表現](https://zenn.dev/kento_o/articles/08e83802ebcb91)

URPでLEDパネルに出力されたような映像を表現する方法について、その実装を紹介しています。

### WheelColliderを自作した

[【Unity】WheelColliderを自作した - Qiita](https://qiita.com/TLabAltoh/items/3985867cc99fcb031d26)

車のタイヤを表現する`WheelCollider`を独自で実装する方法について、タイヤの各特性（摩擦カーブやスリップのしやすさ、サスペンションなど）の紹介とその実装についてまとめています。

### Unity の各バージョンがいつ LTS 入りしたのかを調べてみた

[Unity の各バージョンがいつ LTS 入りしたのかを調べてみた](https://zenn.dev/monry/articles/20230516-research-unity-lts)

UnityのLTSバージョンが、いつリリースされたのをまとめています。

### TypeScriptを使ったコーディングや(P)Reactを使ったUI構築ができるOneJSの紹介と導入

[【Unity】TypeScriptを使ったコーディングや(P)Reactを使ったUI構築ができるOneJSの紹介と導入 - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/05/15/120000)

TypeScriptやReactなどのWebで用いられる技術スタックでUnityを操作するOneJSというライブラリについて、その概要やインストール方式、基本的な使い方について解説しています。

### UI Toolkitの基本であるFlexboxベースのレイアウトをちゃんと理解する

[【Unity】UI Toolkitの基本であるFlexboxベースのレイアウトをちゃんと理解する - LIGHT11](https://light11.hatenadiary.com/entry/2023/05/18/195017)

UI Toolkitのレイアウト組みで利用できるFlexboxについて、それぞれのプロパティの概要の紹介と、それぞれの挙動をスクリーンショット付きでまとめています。

### 今更だけどYouTube LiveのメッセージをUnityで取得してみる

[今更だけどYouTube LiveのメッセージをUnityで取得してみる - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/youtube_api_unity)

Unity上でYouTube Data API v3とYouTube Live Streaming APIを叩いてYouTube Liveの視聴者のメッセージを取得する方法について、その仕組みを紹介しています。

### 単調なノイズアニメーションを回避するためのTips

[単調なノイズアニメーションを回避するためのTips 【シェーダー,ShaderGraph #ポケテク】｜ポケラボ](https://note.com/pokelabo/n/nb71bb098b060)

ノイズを複数用いて複雑なノイズを表現する方法を、ShaderGraphを用いて実現する方法について紹介しています。

## Repositories

### dmitry-ivashenko/StatefulUI

[dmitry-ivashenko/StatefulUI: A library for structured state-based UI development in Unity.](https://github.com/dmitry-ivashenko/StatefulUI)

Unity上で複数の状態を持つウィンドウを実装するためのライブラリ。利用方法の詳細は下記ブログにて紹介されています。

[StatefulUI: A Unity UI Library Based on States and Markup | HackerNoon](https://hackernoon.com/statefului-a-unity-ui-library-based-on-states-and-markup?source=rss)

### pzmudzinski/UnitySpeechRecognizer

[pzmudzinski/UnitySpeechRecognizer](https://github.com/pzmudzinski/UnitySpeechRecognizer)

Unityで、iOSとAndroidのそれぞれのOSの音声認識を利用するためのネイティブプラグイン実装。

### Post-Processing-Wireframe-Outlines

[MirzaBeig/Post-Processing-Wireframe-Outlines: A simple post-processing outline effect that uses depth-based edge detection.](https://github.com/MirzaBeig/Post-Processing-Wireframe-Outlines)

ポストプロセッシングワイヤフレームとアウトラインをレンダリングするUnity用ワイヤフレームとアウトライン（2in1）エフェクト。

### Macoron/whisper.unity

[Macoron/whisper.unity: Bindings of whisper.cpp speech to text model for Unity3d running on your local machine](https://github.com/Macoron/whisper.unity)

whisper.cppをUnity上で実行するネイティブラッパー。

https://github.com/alisahanyalcin/UnitySkinnedMeshTransferTool

### alisahanyalcin/UnitySkinnedMeshTransferTool

[alisahanyalcin/UnitySkinnedMeshTransferTool: Unity Skinned Mesh Transfer Tool for Vroid Models](https://github.com/alisahanyalcin/UnitySkinnedMeshTransferTool)

Vroidモデル用のスキンメッシュトランスフォームツール。あるモデルの一分のパーツを別モデルへ転写できる。
