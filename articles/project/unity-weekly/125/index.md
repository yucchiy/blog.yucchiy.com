---
type: unity-weekly
title: Unity Weekly 125
description: >-
  2023/06/12週のUnity Weeklyです。WWDC 2023、Apple Vision Pro、Unity Arm対応、Leaked
  Managed Shellなどについて取り上げています。
pubDatetime: 2023-06-11T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---


WWDC 2023が開催され、空間コンピュータApple Vision Proが発表されました。また、このアプリケーションをUnityで制作するためのベータプログラムの受け付けが開始されました。

また、ArmベースなWindowsへの対応状況についてのブログ記事の投稿がありました。2023.1からはArmネイティブなWindowsアプリが開発できるのと、近日中にArmネイティブなエディターもリリース予定とのことです。

## Unity Officials

### Unity runtime on Arm-based Windows devices

[Unity runtime on Arm-based Windows devices | Unity Blog](https://blog.unity.com/engine-platform/unity-runtime-on-arm-based-windows-devices)

UnityのArmベースなWindowsへの対応状況について紹介しています。
2023.1からWindowsアプリはARM 64bit向けに最適化されたビルドが行うことができ、高速に動作するようになりました。
また、近日中にARMネイティブなUnityEditorもリリース予定とのことです。

### Official - Unity at Apple WWDC 2023 - Learn to build for the Apple Vision Pro

[Official - Unity at Apple WWDC 2023 - Learn to build for the Apple Vision Pro - Unity Forum](https://forum.unity.com/threads/unity-at-apple-wwdc-2023-learn-to-build-for-the-apple-vision-pro.1446358/)

WWDC2023での発表のうち、UnityでApple Vision Proのアプリケーションを作成するためのセッションについて紹介しています。

また、UnityでVisionOSプラットフォーム向けのコンテンツを制作するためのベータプログラムへの申請を、下記リンクより行なえます。

[UNITY’S BETA PROGRAM FOR CREATING SPATIAL EXPERIENCES](https://create.unity.com/spatial)

### Unity でメモリリーク？ Memory Profiler で Leaked Managed Shell をチェックしてみよう！ 

[Unity でメモリリーク？ Memory Profiler で Leaked Managed Shell をチェックしてみよう！ - YouTube](https://www.youtube.com/watch?v=UIwQmpQTtA4)

`GameObject.Destroy`を行ったときに、ネイティブ側のメモリが破棄されているが、マネージド領域で参照が外れずにリークする問題（Leaked Managed Shell）についての概要やGameObjectのnull挙動、Memory Profiler1.1でこれを確認する方法などについてそれぞれ解説しています。

## Articles

### 【URP】キャラクターの透ける眉を実装してみる

[【URP】キャラクターの透ける眉を実装してみる](https://zenn.dev/r_ngtm/articles/urp-transparent-eyebrow)

手前に髪がかかっているときだけ眉を透けるような見た目にする実装を、URPのRendererFeatureを用いて実装する方法について紹介しています。

顔を回転させたときに、顔に隠れた眉が透けて見えたり、頭の後ろの眉が透けてしまって見えたりする問題などに対しての修正アプローチとその具体的な実装について解説しています。

### Input Actionをスクリプトから扱う方法まとめ

[【Unity】Input Actionをスクリプトから扱う方法まとめ | ねこじゃらシティ](https://nekojara.city/unity-input-actions-script)

Input Systemのアクションをスクリプトから扱う方法について、Input Action Assetのラッパークラスを生成する方法や、Player Inputコンポーネント経由で入力を扱う方法など、複数の方法をまとめています。

### 新しいUnity AnalyticsとUnity Cloud Diagnosticsの紹介と使い方

[新しいUnity AnalyticsとUnity Cloud Diagnosticsの紹介と使い方 - Mirrativ Tech Blog](https://tech.mirrativ.stream/entry/2023/06/05/175428)

ミラティブ社のUnity AnalyticsとCloud Diagnostics活用事例について紹介しています。

KPIやイベント計測のための機能の紹介やイベント組み込み、ダッシュボートでの確認方法、クラッシュ解析の方法、利用の際注意点などについてそれぞれ解説しています。

### インクが飛び散るエフェクトを作る

[【Unity / NovaShader】インクが飛び散るエフェクトを作る](https://zenn.dev/r_ngtm/articles/novashader-ink-splatter)

インクテクスチャに対してSubstance Designerで放射状にグラデーションをつけ、NovaShaderのAlpha TransitionとTransition ProgressをParticle Systemのカスタムデータに仕込むことで、インクが飛び散るような表現を実装する方法を解説しています。

### Mesh Rendererから卒業して爆速パフォーマンスをゲットしよう。BatchRendererGroup 2022の詳解

[【Unity】Mesh Rendererから卒業して爆速パフォーマンスをゲットしよう。BatchRendererGroup 2022の詳解｜技術ブログ｜北海道札幌市・宮城県仙台市のVR・ゲーム・システム開発 インフィニットループ](https://www.infiniteloop.co.jp/tech-blog/2023/06/unity_brg_06_2023/)

Unity 2022.1から正式に利用できるようになったBatchRendererGroupについて、その概要から実装の流れ、同じメッシュをMeshRendererとBatchRendererGroupを用いてそれぞれ描画したときのパフォーマンスについて比較しています。

### Input SystemのControl Pathの基本構造と使い方

[【Unity】Input SystemのControl Pathの基本構造と使い方 | ねこじゃらシティ](https://nekojara.city/unity-input-system-control-path)

Input SystemのControl情報を扱うControl Pathという文字列について、その構造やスクリプトからControl Pathを解析する方法や、Control Pathから実際のControlを取得する方法などについてまとめています。

### Compute Shaders in Unity

* [ArtStation - Compute Shaders in Unity: GPU Computing, First Compute Shader](https://www.artstation.com/blogs/degged/vVzZ/compute-shaders-in-unity-gpu-computing-first-compute-shader)
* [ArtStation - Compute Shaders in Unity: Shader Core Elements, First Compute Shader Review](https://www.artstation.com/blogs/degged/qjrg/compute-shaders-in-unity-shader-core-elements-first-compute-shader-review)
* [ArtStation - Compute Shaders in Unity: Multiple Kernels, ComputeBuffers, CPU - GPU data flow](https://www.artstation.com/blogs/degged/ZV2q/compute-shaders-in-unity-multiple-kernels-computebuffers-cpu-gpu-data-flow)

UnityでのCompute Shaderについてのシリーズ記事です。

GPUコンピューティングとCompute Shader、Compute Shaderを利用するうえで抑えておくべき要素、1シェーダーでの複数個のカーネル利用やCompute Bufferによるデータの共有方法など、UnityでのCompute Shaderの使い方を示しつつ解説しています。

### Unityシーン容量削減勉強会 第4回 ～アニメーション編～

[Unityシーン容量削減勉強会 第4回 ～アニメーション編～ - Qiita](https://qiita.com/segur/items/071e228258806f3e0113)

Unityでのアセットのメモリ使用量を削減するためアニメーションの圧縮設定について解説しています。

### Unityで視差遮蔽マッピングにセルフシャドウをつける

[Unityで視差遮蔽マッピングにセルフシャドウをつける - 3Dゲーム開発備忘録](https://daiki-eguchi.hatenablog.com/entry/2023/06/05/094627)

視差遮蔽マッピングの凹凸に対してセルフシャドウをつけるための手法の概要とその実装について解説しています。

### レイトレーシングで音響シミュレーション（Audio Raytracing）

[レイトレーシングで音響シミュレーション（Audio Raytracing） - なにか](https://suzuki-ith.hatenablog.com/entry/2023/06/06/213229)

音源をレイトレーシングして向きと距離をサンプリングし、HRTF（Head-Related Transfer Function）を畳み込み、よりリアルな音響をシミュレーションする実装についてその実装を解説しています。

### Photon Fusion for UnityでマルチピアモードとMultiplayer Play Modeの組み合わせを検証してみた

[Photon Fusion for UnityでマルチピアモードとMultiplayer Play Modeの組み合わせを検証してみた - Qiita](https://qiita.com/nimushiki/items/b6047a8b91f85a2f4bbf)

オンラインのマルチプレイゲームをデバッグする際に、1プロジェクトから複数の仮想プレイヤーを動かすことのできるMultiplayer Play Modeについて、その概要や利用方法について紹介しています。

### ガンマ色空間、リニア色空間とsRGB

[ガンマ色空間、リニア色空間とsRGB - Qiita](https://qiita.com/sshuv/items/87ea929e1a62c2f47503)

Unityで画面共有アプリを制作した際に、送信側と受信側での色味が再現できていなかった課題を題材に、それを改善するための方法を、それぞれの処理中における色空間の扱いやその原理について解説しています。

### Unity(URP)での自作ポストエフェクトの作り方をまとめてみた

[Unity(URP)での自作ポストエフェクトの作り方をまとめてみた - Qiita](https://qiita.com/Shu-Nogami/items/672abde25629583f78b8)

`VolumeComponent`および`ScriptableRenderPass`を用いて、URPで独自のポストエフェクトを実装する方法について紹介しています。

### Anjinを使ってシーン中のuGUIを自動で操作する仕組み作り

[【Unity】Anjinを使ってシーン中のuGUIを自動で操作する仕組み作り - うどんてっくメモ](https://myudon.hatenablog.com/entry/2023/06/05/000000)

DeNA社の開発するUnity向けオートパイロットフレームワークAnjinで、uGUIを操作するための独自エージェントを実装する方法について解説しています。

### UI Toolkitにおけるマウスのキャプチャの仕組みを理解する

[【Unity】UI Toolkitにおけるマウスのキャプチャの仕組みを理解する - LIGHT11](https://light11.hatenadiary.com/entry/2023/06/07/192047)

UI Toolkitにおけるマウスイベントのハンドリングの仕組みについて紹介しています。

### 【UI Toolkit】レイアウトが変更された時に呼ばれるGeometryChangedEventの使い方

[【Unity】【UI Toolkit】レイアウトが変更された時に呼ばれるGeometryChangedEventの使い方 - LIGHT11](https://light11.hatenadiary.com/entry/2023/06/06/193838)

UI Toolkitで、要素のレイアウトが変更をハンドリングするための`GeometryChangedEvent`について紹介しています。

### RectTransformの各プロパティis何？まとめ

[RectTransformの各プロパティis何？まとめ](https://zenn.dev/trs_game/articles/320df28f32a043)

RectTransformのanchorやsizeDeltaなどの各プロパティがどのような役割を担っているのかについて紹介しています。

## Repositories

### Huntrox/CommandConsole

[Huntrox/CommandConsole: Unity Runtime Command Console For Easy Cheat Codes and Developers Commands](https://github.com/Huntrox/CommandConsole)

デバッグコマンド実装などの用途で利用できる、ランタイムでのコマンドコンソールシステム。

### Gaolingx/GenshinCelShaderURP

[Gaolingx/GenshinCelShaderURP: 这是一个基于URP的开源仿原神卡通渲染项目](https://github.com/Gaolingx/GenshinCelShaderURP)

URPベースの原神ライクなルックのセルシェーダー。

### LibraStack/UnityUxmlGenerator

[LibraStack/UnityUxmlGenerator: Generates "UxmlFactory" and "UxmlTraits" source code for a custom VisualElement](https://github.com/LibraStack/UnityUxmlGenerator?)

クラスやプロパティに属性を設定することで、対応するUXMLを生成するコードジェネレーター。

### zambari/LayoutPanel.UI.Unity

[zambari/LayoutPanel.UI.Unity: Simple panel layout system, supporting drag and drop panel placement, panel folding and interactive resize](https://github.com/zambari/LayoutPanel.UI.Unity)

シンプルなパネルレイアウトシステムで、ドラッグアンドドロップによる配置やパネルの折りたたみ、インタラクティブなリサイズをサポート。

### somedeveloper00/UnityTodo

[somedeveloper00/UnityTodo](https://github.com/somedeveloper00/UnityTodo?)

Unityエディター上で動作するToDo管理ツール。
