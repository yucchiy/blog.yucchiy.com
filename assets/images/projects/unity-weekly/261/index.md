---
type: unity-weekly
title: Unity Weekly 261
description: >-
  2026/02/23週のUnity Weeklyです。2Dゲームebooks、Render Pipelines strategy for 2026、XR Updates、Unite2025資料一部公開、完全に理解した勉強会資料公開などを紹介しています。
pubDatetime: 2026-02-24T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---


## Unity Officials

### How to make a 2D game: art, animation, and lighting for artists (Unity 6.3 LTS edition)

[How to make a 2D game: art, animation, and lighting for artists (Unity 6.3 LTS edition) | Unity](https://unity.com/resources/2d-game-art-animation-lighting-unity-6-3-lts)

Unityで2Dゲームを制作する際のプラクティスがまとめられている電子書籍「2D game art, animation, and lighting for artists」がUnity 6.3に対応したことを告知しています。

### Render Pipelines strategy for 2026

[Render Pipelines strategy for 2026 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/render-pipelines-strategy-for-2026/1710004)

2026年のレンダリングパイプライン周辺の戦略について共有するディスカッションです。

主に、3つの戦略を予定しているとのことです。

1. Advancing the Universal Render Pipeline (URP)
    - 物理ライトユニット, 事前・自動露出, フィジカルスカイとダイナミックスカイマネージャ、リアルタイムグローバルイルミネーション, スクリーンスペースリフレクション, モバイル端末でのオンタイルポストプロセスなどを含む開発への投資
2. Maintaining HDRP, focusing only on expanding platform reach with Nintendo Switch™ 2 support and stability
3. Starting the official Built-in Render Pipeline deprecation process in 6.5
    - 6.5で組み込みレンダリングパイプラインを非推奨に（削除日は未定、6.7LTSでは利用可能であることを保証）

### Unity XR Updates - February 2026

[Unity XR Updates - February 2026 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-xr-updates-february-2026/1709764)

Unity XRの2026/02のアップデートを共有するディスカッションです。

主に、Unity6.3に入ったXR関連のアップデートとして下記を紹介しています。

- OpenXR: Meta
    - Environment Raycast: 環境のシーン構造に直接レイキャストすることでインタラクションチェックのパフォーマンスを向上できる
    - Room Mesh: AR Foundationを通じた、Room Mesh(Global mesh data)のネイティブサポート
    - Image Capture: デバイスカメラでキャプチャした画像にアクセスできるようになった
- OpenXR: Android XR
    - Face Tracking: リアルタイムにアバターに表情をマッピング可能に
    - Object Trackables
    - Automated Dynamic Resolution: フレームレートを一定に保つために、自動で解像度を調整する機能
- XR Hands v1.7
    - ハンドポーズのレコードとプレイバック

### Update your editor to receive UIScene lifecycle support

[[INFO][APPLE] Update your editor to receive UIScene lifecycle support - Unity Engine - Unity Discussions](https://discussions.unity.com/t/info-apple-update-your-editor-to-receive-uiscene-lifecycle-support/1709065)

iOS26の次以降のバージョンにて、[UIKitのシーンベースのライフサイクル管理への移行](https://developer.apple.com/documentation/technotes/tn3187-migrating-to-the-uikit-scene-based-life-cycle)が義務付けられる対応に際して、Unityの対応方針を共有するディスカッションです。

Unityの各バージョンにて、下記のバージョンにて対応を予定、または完了しているとのことです。

- Unity 6.5: 6000.5.0a3 + Released December 16th 2025
- Unity 6.4: 6000.4.0b8+ Expected by Mid-February 2026
- Unity 6.3 LTS: 6000.3.8f1+ Released February 11th 2026
- Unity 6.0 LTS : 6000.0.68f1+ Expected end of February 2026
- Unity 2022 xLTS: 2022.3.72f1+ Released February 11th 2026

また、Unityのバージョンをあげるのが難しいプロジェクト向けに、この対応で変更・追加したファイルについても言及しています。

### Android Gradle 9.1.0 & AGP 9.0.0 Update in Unity 6.5+

[[INFO] Android Gradle 9.1.0 & AGP 9.0.0 Update in Unity 6.5+ - Unity Engine - Unity Discussions](https://discussions.unity.com/t/info-android-gradle-9-1-0-agp-9-0-0-update-in-unity-6-5/1709062)

Unity 6000.5.0a7でAndroidのGradleのバージョンが、Gradle 9.1.0 とAndroid Gradle Plugin (AGP) 9.0.0にそれぞれアップデートされることをアナウンスしています。

このアップデートでの変更点や、移行の際の注意点を紹介しています。

### In Case You Missed It - January 2026

[In Case You Missed It - January 2026 - News & General Discussion - Unity Discussions](https://discussions.unity.com/t/in-case-you-missed-it-january-2026/1709465)

2026/01にUnity公式が投稿したディスカッションやブログ、電子書籍やビデオなどを共有するディスカッションです。

### Big Farm Homestead – Inside the Tech Behind a 3D Mobile World

[Big Farm Homestead – Inside the Tech Behind a 3D Mobile World | Unity](https://unity.com/blog/new-moon-production-big-farm-homestead)

「Big Farm: Homestead」の開発事例に関するインタビューです。

Big Farmシリーズでのコード共有やTimelineによるゲームのシーケンスやイベントトリガーの管理、Cinemachineによるカメラ制御、URP・ShaderGraphの活用から、
ECS＆Burstによる最適化からUnity6の活用、パフォーマンスチューニングやAddressablesによるアプリサイズ最適化から配信について紹介しています。

### Unite 2025資料公開

- [UI テストを簡単にする UI Toolkit Test Framework | Unite 2025 | Unity Learning Materials](https://learning.unity3d.jp/10892/)
- [グラフィックスを輝かせるだけじゃない Unity 6.3 LTS の活用法 | Unite 2025 | Unity Learning Materials](https://learning.unity3d.jp/10896/)
- [勝つための広告戦略プレイアブル広告でゲームインストールを加速する | Unite 2025 | Unity Learning Materials](https://learning.unity3d.jp/10898/)
- [プレイヤー第一の収益化 | Unite 2025 | Unity Learning Materials](https://learning.unity3d.jp/10903/)
- [開かれた成長可能性 | Unite 2025 | Unity Learning Materials](https://learning.unity3d.jp/10905/)
- [産業用 3D データパイプラインに没入型技術をスケールする方法 | Unite 2025 | Unity Learning Materials](https://learning.unity3d.jp/10907/)
- [Asset Manager を活用したエンジニアリングの未来 | Unite 2025 | Unity Learning Materials](https://learning.unity3d.jp/10910/)
- [産業用製品のビジョンとロードマップ | Unite 2025 | Unity Learning Materials](https://learning.unity3d.jp/10912/)

Unite 2025の講演資料が、講演動画および日本語翻訳されたスライドで8講演分 Unity Learning Materialsにて公開されています。


## Slides

### Unity 6.3 完全に理解した 勉強会

[Unity 6.3 完全に理解した 勉強会 - connpass](https://unity-fully-understood.connpass.com/event/382040/)

2026/02/20に開催された「Unity 6.3 完全に理解した 勉強会」の講演動画および一部スライド資料が公開されています。

また、有志によるまとめ記事も投稿されています。

- 講演動画
    - [Unity 6.3 完全に理解した 勉強会 - YouTube](https://www.youtube.com/watch?v=p7FQGYA59KY)
- スライド資料
    - [Unity6.3で今こそ Vector Graphics入門 - Google Slides](https://docs.google.com/presentation/d/1ZUR70xvqkXHOVtFUO8CzJH2XIhwGKnU5Z5HhlTHn-8w/edit?slide=id.p#slide=id.p)
    - [Platform Toolkit 入門 | ドクセル](https://www.docswell.com/s/yucchiy/5M6438-unity-kanzenrikai-platform-toolkit-intro)
    - [UI Toolkitはいいぞ.pdf - Google Drive](https://drive.google.com/file/d/1kAXySFVvSVSaat06yum_8hgm02Ftzu8w/view)
- まとめブログ
    - [【勉強会レポ】: Unity 6.3 完全に理解した 勉強会 - Raspberlyのブログ](https://raspberly.hateblo.jp/entry/Unity6_3Complete)


## Articles

### 【もぉん流】Unity × Pixel Perfect : サクッとやったれ！

[【もぉん流】Unity × Pixel Perfect : サクッとやったれ！](https://zenn.dev/matsu_friends/articles/c4a5d36b1de94e)

Unity + URP（2D Renderer）環境で、Spriteやライト、UI含めてPixel Perfectに描画するための、Sprite・RenderTexture・カメラ・フォントなどの設定からカメラ最終出力の設定を紹介しています。

また、ポストプロセスの適用箇所や、Pixel Perfectを実現する上でTransformのRotationやScaleを扱わないようにするなど、注意点についても言及しています。

### Unity6.3からHierarchy上でレイヤーやタグなどを直接表示、変更が出来るように

[Unity6.3からHierarchy上でレイヤーやタグなどを直接表示、変更が出来るように【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/NewHierarchyWindow)

Unity 6.3から利用できる、Hierarchy上にレイヤーやタグなどを表示・変更するためのビューの設定について紹介しています。

### iOS/Android共通で使える！MobileHapticFeedbackの紹介

[【Unity】iOS/Android共通で使える！MobileHapticFeedbackの紹介](https://zenn.dev/tsyk5/articles/0a001613a09d)

このブログの作者が開発するiOS/AndroidクロスプラットフォームなHapticライブラリ「[tsyk5/MobileHapticFeedback](https://github.com/tsyk5/MobileHapticFeedback)」について、ライブラリの特徴や基本的な使い方を紹介しています。

### Application.versionの値がビルド後に変わることがある【内部アプリ共有（Internal app sharing）

[【Unity】Application.versionの値がビルド後に変わることがある【内部アプリ共有（Internal app sharing）】 #GooglePlay - Qiita](https://qiita.com/su10/items/447cc427d742c8ef0157)

`Application.version` が、Androidの内部アプリ共有を行った時に、配信時にGooglePlayコンソールで設定したバージョン名が返却される挙動について紹介しています。

### Unity Build Automationに毎月100分のMac無料利用枠が追加される

[Unity Build Automationに毎月100分のMac無料利用枠が追加される #UnityBuildAutomation - Qiita](https://qiita.com/RyotaMurohoshi/items/ee563fbc83b05067629c)

Build Automationの、Macマシンでのビルドにおける無料枠の内訳について紹介しています。

