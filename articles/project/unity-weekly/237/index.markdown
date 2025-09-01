---
type: "unity-weekly"
title: "Unity Weekly 237"
description: "2025/09/01週のUnity Weeklyです。Unity 6.3の新機能紹介、サバイバルキッズ描画最適化、CA.unityなどについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2025-09-01T00:00:01"
---

## Unity Officials

### Introducing the UnifiedRayTracing API

[Introducing the UnifiedRayTracing API - Unity Engine - Unity Discussions](https://discussions.unity.com/t/introducing-the-unifiedraytracing-api/1680597)

Unity 6.3 から利用できる UnifiedRayTracing APIについて紹介しています。

このAPIは、ハードウェアアクセラレーションを必須としないGPU上でのレイトレーシングを実行するAPIで、アクセラレーション可能ならそれを使い、利用できない場合はコンピュートシェーダーによるフォールバックを行うとのことです。

エディター上のライトベイクの近代化の一環で開発されていたものがユーザーも利用できる形で公開され、プレイヤーとエディターの両方で動作します。

### Lightmap packing with xAtlas in Unity 6.3

[Lightmap packing with xAtlas in Unity 6.3 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/lightmap-packing-with-xatlas-in-unity-6-3/1670184)

Unity 6.3から、UVパッキングライブラリ「xAtlas」に基づいたライトマップのパッキングアルゴリズムが追加されたことがアナウンスされています。

このアルゴリズムは、多くの場合に効率的で高密度なライトマップを生成し、いくつかテストシーンにおいて ~27% メモリ使用量が削減されたとのことです。

### Graphics and rendering tips from Survival Kids

[Graphics and rendering tips from Survival Kids](https://unity.com/blog/graphics-and-rendering-tips-from-survival-kids)

KONAMIとUnityが共同開発するSwitch2向けの[サバイバルキッズ](https://www.konami.com/games/survival_kids/)において、ターゲットフレームを維持する為に行なったスタイライズなレンダリングの最適化として、海岸沿いの波やライトニングやGI、描画パイプラインや影、UIやポストエフェクトなどの最適化についての解説しています。

### Unity’s Ad Quality Tool is Now FREE for All Game Developers!

[Unity’s Ad Quality Tool is Now FREE for All Game Developers! - Unity Services - Unity Discussions](https://discussions.unity.com/t/unity-s-ad-quality-tool-is-now-free-for-all-game-developers/1680922)

ゲーム内広告を監視および管理するためのツールが、メディエーションプラットフォーム関係なく全てのパブリッシャー向けに無料のスタンドアロンSDKとして利用できるようになったことがアナウンスされました。

## Events

### CA.unity #10

[CA.unity #10 - connpass](https://cyberagent.connpass.com/event/366674/)

2025/09/30に株式会社サイバーエージェントが主催するUnityに関する勉強会「CA.unity」の第10回が開催されます。

今回は株式会社ディー・エヌ・エーとのコラボ回で、オフライン（AbemaTowers）とオンラインのハイブリッド開催となります。

現在、オンラインとオフラインの両枠の参加を募集しています。

## Articles

### Instant Replay for Unity でリアルタイムに動画をエンコードできるようになりました

[Instant Replay for Unity でリアルタイムに動画をエンコードできるようになりました - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2025/08/27/115747)

このブログを執筆する、コアテク開発する「[Instant Replay for Unity](https://github.com/CyberAgentGameEntertainment/InstantReplay)」に新たに実装されたリアルタイムモード（録画中に動画エンコードを同時に行う仕組み）について、その概要から使い方、内部実験にあたって必要な動画のフレームについての知識やプラットフォーム抽象化のために採用したRustによるネイティブプラグインの実装について解説しています。

### iOS アプリ上から Metal Debugger のキャプチャを行う

[【Unity】iOS アプリ上から Metal Debugger のキャプチャを行う #Unity3D - Qiita](https://qiita.com/mao_/items/6aef6d00c1c01b0b4ee7)

Metal Debugger APIを、Unityアプリからコードで呼び出すことで、アプリ側で指定した区間のキャプチャを自動で撮るような実装を紹介しています。

### Unity SceneLoad 入門

[Unity SceneLoad 入門 – 株式会社ロジカルビート](https://logicalbeat.jp/blog/21077/)

シーンのロード時間の解析や最適化のために、Unityの提供するサンプルプロジェクト「[Fantasy Kingdom](https://unity.com/ja/demos/fantasy-kingdom)」をプロファイラーで分析して、シーンロードでどのような処理が行われているのかや、その上でシーンロード短縮のために効果的なオブジェクトやメッシュの扱いなどを紹介しています。

### GCP Artifact RegistryでPrivateなUPMレジストリを構築する

[【Unity】GCP Artifact RegistryでPrivateなUPMレジストリを構築する](https://zenn.dev/cover_corp/articles/f8f3f447565729)

Google Cloudの[Artifato Registry](https://cloud.google.com/artifact-registry/docs/overview?hl=ja)を用いて、プライベートなUPMレジストリを構築する方法について紹介しています。

### Unity 6.3 LTSのシステム要件は、Androidは7.1(API 25)以上に、iOS/iPadOSは15以上になりそう

[Unity 6.3 LTSのシステム要件は、Androidは7.1(API 25)以上に、iOS/iPadOSは15以上になりそう #Unity - Qiita](https://qiita.com/RyotaMurohoshi/items/d8268a1ffd1d8bbcfa72)

Unity6.3のAndroidとiOSのバージョン下限が上がったことについて紹介しています。