---
type: unity-weekly
title: Unity Weekly 113
description: >-
  2023/03/20週のUnity Weeklyです。 2023 Unity Gaming
  Report、UGS、HLSL、Async/Await、csbindgen などについて取り上げています。
pubDatetime: 2023-03-19T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials


### Unity at GDC 2023

[Unity at GDC 2023](https://unityatgdc2023.splashthat.com/)

GDC 2023でのUnityに関する発表のタイムスケジュールがまとめられています。

### 2023 Unity Gaming Report: Gaming Trends & Insights

[2023 Unity Gaming Report: Gaming Trends & Insights | Unity](https://create.unity.com/gaming-report)

Unityゲーミングレポート2023が発表されました。このレポートでは2022年のゲーム産業のキートレンドや成功するゲームスタジオの紹介、2023年度のゲームトレンド予測について取り上げています。


### AIがシェーダーを書く！？ChatGPT APIを使ってみよう！

[【Unity】AIがシェーダーを書く！？ChatGPT APIを使ってみよう！](https://www.youtube.com/watch?v=gPQpVgbBz58)

ChatGPTのAPIを用いて自然言語からシェーダーを自動生成する [AIShader](https://github.com/keijiro/AIShader) についてその基本的な使い方からその内部実装の解説、使用してみた所感についてまとめています。

## Unity Packages

### Release Release 1.9.0 · Unity-Technologies/com.unity.services.samples.use-cases

[Release Release 1.9.0 · Unity-Technologies/com.unity.services.samples.use-cases](https://github.com/Unity-Technologies/com.unity.services.samples.use-cases/releases/tag/release-1.9.0)

「[Serverless Multiplayer Game](https://github.com/Unity-Technologies/com.unity.services.samples.use-cases/blob/release-1.9.0/Assets/Use%20Case%20Samples/Serverless%20Multiplayer%20Game/README.md)」というサンプルが追加されました。

UGSの [Authentication](https://docs.unity.com/authentication/en/manual/IntroUnityAuthentication)・[Cloud Save](https://docs.unity.com/cloud-save/en/manual#Implementation)・[Lobby](https://docs.unity.com/lobby/en/manual/lobby-sdk-installation)・[Netcode for GameObjects](https://docs-multiplayer.unity3d.com/netcode/current/installation/install/index.html)・[Relay](https://docs.unity.com/relay/en/manual/get-started)・[Remote Config](https://docs.unity3d.com/Packages/com.unity.remote-config@3.3/manual/index.html)を組み合わせたマルチプレイゲームのデモプロジェクト担っています。


### Release v1.0.0-beta.3 · Unity-Technologies/unity-gaming-services-cli

[Release v1.0.0-beta.3 · Unity-Technologies/unity-gaming-services-cli](https://github.com/Unity-Technologies/unity-gaming-services-cli/releases/tag/v1.0.0-beta.3)

UGSの操作をCLI上で行えるライブラリ「UGS CLI」のv1.0.0-beta.3がリリースされました。

プレイヤー管理サービスやアクセスモジュールサービス、C#のクラウドコードモジュールを操作するためのサブコマンドの追加やデプロイコマンドにいくつかの機能が追加されました。

また、[こちらのページ](https://services.docs.unity.com/guides/ugs-cli/latest/general/overview)にてドキュメントがホストされるようになりました。

## Articles

### Visual Studio 2022 v17.6 Preview 2 is now available

[Visual Studio 2022 v17.6 Preview 2 is now available - Visual Studio Blog](https://devblogs.microsoft.com/visualstudio/visual-studio-2022-v17-6-preview-2-is-now-available/)

Visual Studio 2022. v17.6 Preview 2に「HLSL Tools Extensions」が追加されました。シンタックスハイライトやステートメント補完、定義ジャンプなどが利用できます。


### How Async/Await Really Works in C#

[How Async/Await Really Works in C# - .NET Blog](https://devblogs.microsoft.com/dotnet/how-async-await-really-works/)

C#のasync/awaitについて、非同期の実装がそこに至るまでの背景や、async/awaitが内部的にどのようなコードに展開されるのかその動作原理について詳細に解説しています。


### Unity DOTS support in Rider 2023.1

[Unity DOTS support in Rider 2023.1 | The .NET Tools Blog](https://blog.jetbrains.com/dotnet/2023/03/16/unity-dots-support-in-rider-2023-1/)

Rider 2023.1でUnity DOTSがサポートされました。

DOTS向けの新しいファイルテンプレートやボイラープレートコードの生成、インスペクションやクイックフィックスなどの機能が追加されています。

### csbindgen - C#のためのネイティブコード呼び出し自動生成、或いはC#からのネイティブコード呼び出しの現代的手法について

[neue cc - csbindgen - C#のためのネイティブコード呼び出し自動生成、或いはC#からのネイティブコード呼び出しの現代的手法について](https://neue.cc/2023/03/09-csbindgen.html)

Cで書かれているネイティブライブラリのバインドコードを、RustのFFIから自動生成する[csbindgen](https://github.com/Cysharp/csbindgen)について、このライブラリのモチベーションやRustを選択した経緯について紹介しています。

また、csbindgenの基本的な利用方法や、C#とネイティブコード間のコールバックの相互受け渡し、コンテキストの受け渡し、Stringや配列のマーシャリングなどについても解説しています。


### UnityのShader(ShaderLab/HLSL)入門その1 : Shaderの書き方

[UnityのShader(ShaderLab/HLSL)入門その1 : Shaderの書き方 - Qiita](https://qiita.com/Yumuru/items/77a642004d015b83e0ce)

UnityのBuilt-in RPにおけるシェーダーの記述方法について、描画の流れからUnityのShaderの記法、Shaderで絵をかくための色・時間・UV座標・三角関数の扱い方などについて解説しています。


### エディタのツールバーとステータスバーを非表示にできる「Editor-View-Modules」紹介  

[【Unity】エディタのツールバーとステータスバーを非表示にできる「Editor-View-Modules」紹介 - コガネブログ](https://baba-s.hatenablog.com/entry/2023/03/13/090000)

エディターのツールバーとステータスバーを非表示にできる「[Editor-View-Modules](https://github.com/neon-age/Editor-View-Modules)」について、その利用方法を紹介しています。


### FigmaからUnityの画面を作りたい

[FigmaからUnityの画面を作りたい](https://zenn.dev/happy_elements/articles/66c199160b017d)

Figmaで作成した画面をUnityに取り込むためのライブラリをいくつか紹介し、その中から「Figma Converter for Unity」と「UnityFigmaBridge」をピックアップして良い点や足りない点をまとめています。


### Unity 2023.1より登場したAwaitableの使い方まとめ(Unity公式版UniTask??)

[【Unity】Unity 2023.1より登場したAwaitableの使い方まとめ(Unity公式版UniTask??) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/03/13/120000)

Unity 2023.1で実装された、Unityメインスレッドでのawaitを行うことができるAwaitable APIについて、その概要と利用方法を紹介しています。


### UI ToolkitによるランタイムUIの基本から実践的なテクニックまで詳しく解説

[[Unity]UI ToolkitによるランタイムUIの基本から実践的なテクニックまで詳しく解説 - Qiita](https://qiita.com/uminohiyoko/items/73d366ec35154d301baa)

UI Toolkitを用いてランタイムUI（ゲーム上のUI）を実装する方法についてまとめています。

プロジェクトの準備からUI BuilderによるUI作成、ランタイムUIを作成する上での基本的なスクリプト操作、ListViewの扱いやドラッグ＆ドラッグを実現する方法などのいくつか実践的なTipsなどをそれぞれ解説しています。


### 3D 物理演算が Update で演算できるようになりました【2022.2 から】

[【Unity】3D 物理演算が Update で演算できるようになりました【2022.2 から】  - Qiita](https://qiita.com/tsukimi_neko/items/6bce0351780ac4e2d9bc)

Unity 2022.2から導入されたPhysicsのSimulation Modeの「Update」について紹介しています。


### Unity Searchをオブジェクトセレクター(ピッカー)でも使う方法

[Unity Searchをオブジェクトセレクター(ピッカー)でも使う方法【Unity】【Unity Search】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Object_Selector_Advanced)

Unityのオブジェクトセレクター（SerializeFieldでオブジェクトを指定する際に表示されるウィンドウ）をUnity Searchに切り替える方法を、Preferences > Searchから設定する方法とアトリビュートでコードから指定する方法の２つの方法を紹介しています。

またアトリビュートで指定する際に、検索コマンドを指定する方法やウィンドウの状態を指定する引数についても言及しています。


### Unity URPでの画面キャプチャ用パスを用いたCameraCaptureBridgeについて

[Unity URPでの画面キャプチャ用パスを用いたCameraCaptureBridgeについて - げぇむぷろぐらみんぐ](https://siguma-sig.hatenablog.com/entry/2023/02/24/232233)

URPでカメラに写っている画面をキャプチャして処理を行うことのできる CameraCaptureBridge について、その基本的な使い方を紹介しています。

また、その実装をURPのコードを追いながら解説しています。


## Repositories

### nhh3

[https://github.com/TakeharaR/nhh3](https://github.com/TakeharaR/nhh3)

UnityでHTTP/3通信を行うためのライブラリ。[cloudflare/quiche](https://github.com/cloudflare/quiche) を独自のC/C++ラッパーqwfsでラップし、qwfsをC#から操作している。現在、Windows（x64）とAndroid（arm64-v8a）に対応。


### AICommand

[keijiro/AICommand: ChatGPT integration with Unity Editor](https://github.com/keijiro/AICommand)

ChatGPTを用いて、自然言語によるプロンプトでUnity Editorを操作するパッケージ。

### Borderless-Unity

[https://github.com/lilxyzw/lilAvatarUtils](https://github.com/lilxyzw/lilAvatarUtils)

アバター改変補助ツール。アバターのテクスチャやマテリアルの一覧表示、セーフティー発動時の見た目確認、不要なアセット・プロパティの削除機能などが実装されている。


### Editor-View-Modules

[neon-age/Editor-View-Modules: Customize Toolbars and any EditorWindow with contextual modules](https://github.com/neon-age/Editor-View-Modules)

ツールバーやエディターウインドウをコンテキストモジュールでカスタマイズできる。これを用いてステータスバーとメインのツールバーを隠すことができる。


### Borderless-Unity

[neon-age/Borderless-Unity: Hide white toolbars in Unity on Windows. Get some space, save your eyes.](https://github.com/neon-age/Borderless-Unity)

Windowsプラットフォームで、ツールバーを隠すツール。


### FixMath

[https://github.com/Unity-X/FixMath](https://github.com/Unity-X/FixMath)

固定小数点の実装。32ビットの固定小数点実装の他に、Unity.Mathematicsライクな各種ベクターや行列の実装も含む。


### Unity-Movement

[https://github.com/oculus-samples/Unity-Movement](https://github.com/oculus-samples/Unity-Movement)

OpenXRのトラッキングレイヤーAPIを用いてMeta Quest Proのボディトラッキングやアイトラッキング、フェイストラッキングなどを行うためのコードサンプル。


### Alternative Source Generator for Unity

[https://github.com/sator-imaging/Unity-AltSourceGenerator](https://github.com/sator-imaging/Unity-AltSourceGenerator)

Unity向けのSource Generatorによるコードの自動生成を簡単に行うためのフレームワーク。
