---
type: unity-weekly
title: Games Focus、Unite 2022、Experimental Entities 1.0 - Unity Weekly 088
description: >-
  2022/10/03週のUnity Weeklyです。Games Focusのプロファイラ＆パフォーマンス最適化特集、Unite
  2022開催、Experimental Entities 1.0リリースなどについて取り上げました。
pubDatetime: 2022-10-03T06:00:00.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Games Focus: Profiling and performance optimization

[Games Focus: Profiling and performance optimization | Unity Blog](https://blog.unity.com/preview/NNvLTHvDS2ysIbI0K0EU5llxLdW60NBzr9NgVFF4eHY)

Unityブログの連載「Games Focus」の第３段で、今回はプロファイラーと、主にエディター環境のパフォーマンス最適化について取り上げています。



Unity 2022.2 betaから検証済みパッケージとなった Memory Profiler 1.0.0や2022.1で強化されたFrame Timing Manager、低レベルのGPUメトリクスを取得できるSYstem Metrics Maliパッケージ、Unity 2021 LTSにおけるアセットインポートの最適化、2022で利用可能な改善点について紹介しています。



また今後の取り組みとして、エディター起動の高速化やターゲットデバイス接続安定化、プラットフォーム固有のパフォーマンス改善などについて触れています。

### Unite 2022 を楽しもう

[Unite 2022 を楽しもう | Unity Blog](https://blog.unity.com/ja/news/get-your-game-on-at-unite-2022)

Unite 2022が2022/11/01に開催されることが発表されました。今回のUniteはオースティン、ブライトン、コペンハーゲン、モントリオール、サンフランシスコによる現地とバーチャルで参加できるとのことです。

### Experimental Entities 1.0 is available

[Official - Experimental Entities 1.0 is available - Unity Forum](https://forum.unity.com/threads/experimental-entities-1-0-is-available.1341065/)

Entities 1.0と、関連するECSベースのパッケージのの実験バージョンの公開がアナウンスされました。

現状このパッケージを利用するには、Unity 2022.0b8 を利用する必要があります。



また、1.0向けのインストールガイドとドキュメントも[合わせて公開されています](https://docs.unity3d.com/Packages/com.unity.entities@1.0/manual/getting-started-installation.html)。

### Asset Store で公開中の UI Toolkit の新しいサンプルを試そう

[Asset Store で公開中の UI Toolkit の新しいサンプルを試そう | Unity Blog](https://blog.unity.com/ja/games/try-the-new-ui-toolkit-sample-now-available-on-the-asset-store)

主に「[Dragon Crashers](https://assetstore.unity.com/packages/essentials/tutorial-projects/dragon-crashers-2d-sample-project-190721)」サンプルのUIを、UI Toolkitの機能を利用してどのように実現しているのかについて解説しています。



また、新しいUI実装に関するebook「User interface design and implementation in Unity」の[事前登録](https://create.unity.com/user-interface-design-implementation-in-unity)についても案内しています。

### ライトマッピングの一般的な 5 つの問題とその解決のためのヒント

[ライトマッピングの一般的な 5 つの問題とその解決のためのヒント | Unity Blog](https://blog.unity.com/ja/technology/5-common-lightmapping-problems-and-tips-to-help-you-fix-them)

Unityでライトマッピングを利用する際にハマりやすい問題を５つ取り上げ、またその対応方法についても言及しています。

### ペンライトの集団を数学的に制御する！簡単なプロシージャルアニメーションの例

[【Unity】ペンライトの集団を数学的に制御する！簡単なプロシージャルアニメーションの例 - YouTube](https://www.youtube.com/watch?v=iC3QKBW9EmA)

大量のペンライトの動きを、プロシージャルアニメーションによって実現する方法について紹介しています。



基本的なアニメーションの実装方法、ノイズや乱数を用いてより自然なペンライトの動きを実現する方法、またUnity.Mathematicsを用いた実装方法についてそれぞれ解説しています。

## Articles

### URPにおけるディファードレンダリング

[【Unity】【URP】URPにおけるディファードレンダリング - シェーダーTips](https://ny-program.hatenablog.com/entry/2022/09/30/232453)

Deferred Renderingの概要からメリット・デメリット、制約についての説明からURP（Universal Render Pipeline）でDeferred Renderingを利用する方法、URPのLit.ShaderでDeferred Renderingがどのように実装されているのかについて、コードを参照しつつ解説しています。

### UnityでPlayFabのロビー機能を使ってみよう

[UnityでPlayFabのロビー機能を使ってみよう - Qiita](https://qiita.com/Kousuke_Hiraki/items/9b43990549e16f34828d)

PlayFabのロビー機能についての説明と、ロビー機能の利用方法について逆引き形式、実装コード付きで解説しています。

### AsyncReadManagerMetrics クラスを使用した Unity のアセットロード計測

[AsyncReadManagerMetrics クラスを使用した Unity のアセットロード計測 - Qiita](https://qiita.com/tsukitsutsuki/items/33c48398bdcdcd284149)

`AsyncReadManagerMetrics` を用いてロード時間やアセットサイズなどののアセットロードに関する各種メトリクスを取得する方法について紹介しています。

### Unity の WebGL で動的にサウンドを生成・再生する方法を調べてみた

[Unity の WebGL で動的にサウンドを生成・再生する方法を調べてみた - 凹みTips](https://tips.hecomi.com/entry/2022/09/30/014115)

UnityのWebGLビルドで、動的にサウンドを生成・再生する方法について紹介しています。



Unity WebGLでは現状 `AudioClip.Create` による動的なサウンド生成・再生ができない経緯の紹介と、ブラウザのWeb Audio APIを直接呼び出してサウンドを再生する方法のJavaScript実装、UnityからJavaScriptを呼び出すためのjslibの利用方法についてそれぞれ解説しています。

### Deforming a mesh in Unity

[Deforming a mesh in Unity - LogRocket Blog](https://blog.logrocket.com/deforming-mesh-unity/)

UnityのメッシュをC# Job SystemやMesh Data、Compute Shader、Vertex Shaderなどを用いて変形する方法と、それぞれのパフォーマンスについて解説しています。

### WebGL ビルドされた Unity アプリケーションをローカルで実行するエディタ拡張作った

[WebGL ビルドされた Unity アプリケーションをローカルで実行するエディタ拡張作った - Qiita](https://qiita.com/frozenbonito/items/7be5a2ba714c1c2e3ece)

UnityのWebGLビルドをローカル環境で確認するためのエディタ拡張（[Unity Preview Server](https://github.com/frozenbonito/UnityPreviewServer)）について紹介しています。



インストール方法から利用方法、このエディタ拡張のプレビューサーバーの立ち上げで利用している [unisrv](https://qiita.com/frozenbonito/items/7be5a2ba714c1c2e3ece) についても言及しています。

### How to add Bullet Holes and Stickers in Unity (URP)

[How to add Bullet Holes and Stickers in Unity (URP) — Sunny Valley Studio](https://www.sunnyvalleystudio.com/blog/unity-decal-bullet-holes-stickers)

URPの[Decal Render Feature](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@12.0/manual/renderer-feature-decal.html)を用いて、ユーザーのインタラクションに対して動的にデカールを貼り付ける方法について紹介しています。

### 公式パッケージ「Editor Coroutines」を利用してエディタ内でCoroutineを扱う事ができるようにする(内部実装で説明)

[【Unity】公式パッケージ「Editor Coroutines」を利用してエディタ内でCoroutineを扱う事ができるようにする(内部実装で説明) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2022/10/03/120000)

エディターコードでコルーチンを利用するための [Editor Coroutines](https://docs.unity3d.com/Packages/com.unity.editorcoroutines@1.0/manual/index.html) パッケージについて基本的な利用方法を紹介しています。

### GitHub Actions × Game CIでWebGLのCI/CD環境構築(デプロイ先はNetlify)

[【Unity】GitHub Actions × Game CIでWebGLのCI/CD環境構築(デプロイ先はNetlify) - Qiita](https://qiita.com/OKsaiyowa/items/ac86f1a220652309890e)

GitHub Actions上でWebGLビルドのCI/CD環境を構築する方法について紹介しています。



Game CIを用いたUnityビルド環境の構築から `BuildPipeline.BuildPlayer` を用いたビルドパイプラインの構築、成果物をNetlifyへデプロイする方法、ビルド結果をSlackへ通知する方法などそれぞれ解説しています。

### UnityでVideoPlayerを使わずにネイティブ実装で動画を再生する方法

[UnityでVideoPlayerを使わずにネイティブ実装で動画を再生する方法 - Qiita](https://qiita.com/KyoheiOkawa/items/e262796db3cdb24fde28)

[DirectShow](https://learn.microsoft.com/ja-jp/windows/win32/directshow/directshow) を呼び出し、[Low-Level Native Plugin Interface](https://docs.unity3d.com/ja/2019.4/Manual/NativePluginInterface.html) を介してDirectX11上のテクスチャを直接参照することで、Windows環境でUnity標準のVideo Playerを用いずに動画を再生する方法について解説しています。

### UnityにおけるShift_JISのややこしすぎる事情たち

[UnityにおけるShift_JISのややこしすぎる事情たち](https://zenn.dev/ruccho/articles/a2996516338c01)

UnityでShift JISを扱う際に利用する `Encoding.GetEncoding("Shift_JIS")` が、ビルド後に利用できなくなる場合がある問題の原因の紹介と、このAPIが内部で利用するアセンブリについての調査結果についてまとめています。



また、CP932をUnityで正しく利用するために `System.Text.Encoding.CodePages.dll` を利用する方法についても言及しています。

### Unity公式の無料パッケージMobile Notificationsを使ってローカルプッシュ通知を実装する方法

[Unity公式の無料パッケージMobile Notificationsを使ってローカルプッシュ通知を実装する方法 【Unity】【iOS】【Android】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Mobile_Notifications?utm_source=feed)

Unityの提供するモバイル向けの通知ライブラリ [Mobile Notification](https://docs.unity3d.com/Packages/com.unity.mobile.notifications@2.0/manual/index.html) を用いて、iOSとAndroidでそれぞれローカルプッシュ通知（サーバーから通知を送るのではなく、アプリ上で通知を送る）を実装する方法について紹介しています。

### Unityのログ表示を気軽にちょっとだけ見やすくする

[Unityのログ表示を気軽にちょっとだけ見やすくする - きゅぶろぐ](https://blog.kyubuns.dev/entry/2022/09/28/151501)

Unityのコンソールログへの出力を、カテゴリごとに自動で色分けや変数出力を簡単に行えるロギングの実装について紹介しています。

### UnityHubをシンプルかつ軽量にしたUnityHubNative

[UnityHubをシンプルかつ軽量にしたUnityHubNative【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/UnityHubNative?utm_source=feed)

UnityHubの軽量実装（Unityのバージョン管理とプロジェクト一覧の管理）である[UnityHubNative](https://github.com/Ravbug/UnityHubNative)について紹介しています。

## Repositories

### Nova Shader

[CyberAgentGameEntertainment/NovaShader: Multi-functional shader for the Particle System that supports Universal Render Pipeline (URP) of Unity.](https://github.com/CyberAgentGameEntertainment/NovaShader)

URP向けパーティクルシステムの多機能シェーダー。



v1.4.0では、URPのPBR仕様に準拠したLit版のシェーダー実装が追加されました。

### Text To TextMesh Pro Upgrade Tool for Unity

[yasirkula/UnityTextToTextMeshProUpgradeTool: Upgrade Text, InputField, Dropdown and TextMesh objects to their TextMesh Pro variants in Unity](https://github.com/yasirkula/UnityTextToTextMeshProUpgradeTool)

Unity uGUIのレガシーTextコンポーネントをTextMesh ProのTextコンポーネントに一括で置き換えるためのエディター拡張。

### NaughtyAttributes

[dbrizov/NaughtyAttributes: Attribute Extensions for Unity](https://github.com/dbrizov/NaughtyAttributes)

Unityのインスペクターを拡張する機能を提供するライブラリ。アトリビュートをつけることで、`CustomPropertyDrawer` などを実装せずともインスペクターを強化できる。

### UnityDebugSheet

[Haruma-K/UnityDebugSheet: Hierarchical debug menu system for Unity that makes it easy to create intuitive and organized debug menus.](https://github.com/Haruma-K/UnityDebugSheet)

Unityの階層型デバッグメニューシステム。

### Rusty Hub

[Leinnan/rusty_hub: Very basic Unity Hub alternative](https://github.com/Leinnan/rusty_hub)

RustによるシンプルなUnity Hub実装。



