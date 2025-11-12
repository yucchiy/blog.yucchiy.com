---
type: unity-weekly
title: Unity Weekly 191
description: >-
  2024/09/23週のUnity Weeklyです。Unite 2024、Unity Engine
  Roadmap、ILPostProcessingなどについて取り上げています。
pubDatetime: 2024-09-23T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---


## Unity Officials

### Unity Engine Roadmap

Unite 2024にて、UnityEngineのロードマップが発表されました。

[The Unity Engine Roadmap - YouTube](https://www.youtube.com/watch?v=pq3QokizOTQ)

この中で各機能のロードマップが公開され、各機能が紹介されました。主要な機能については、下記のようにUnity Discussionにてスレッドが立てられています。

- [Unite 2024 Roadmap - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unite-2024-roadmap/1519260)
    - ディスカッション上で公開されているUnite 2024のロードマップのスレッド一覧
- [DOTS development status and milestones + ECS for all (September 2024) - Unity Engine - Unity Discussions](https://discussions.unity.com/t/dots-development-status-and-milestones-ecs-for-all-september-2024/1519286)
    - EntityとGameObjectのワークフローの統合がUnity 6に入る。GameObjectの中にEntityを持つことで気軽にECSを利用できたり、Unified Transformsという、EntityとGameObjectのTransformを統合する実装が入る
    - Entity 1.3のアップデートについて紹介
- [Animation Status Update (Q3 2024) Unite Announcement - Unity Engine - Unity Discussions](https://discussions.unity.com/t/animation-status-update-q3-2024-unite-announcement/1519289)
    - Unity上でのアニメーションプレビュー強化、スケルトン編集、（武器などを装備する目的のための）ソケットの追加、クリップマークアップ、リマッピングツールが実装される予定
    - アニメーションの制御についても、階層型のステートマシン、グラフベースでのモーション制御の実装や、それをデバッグするためのデバッグツールが実装される
    - ECS上で構築することで、パフォーマンス懸念の解決を狙う
- [CoreCLR and .NET Modernization - Unite 2024 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/coreclr-and-net-modernization-unite-2024/1519272)
    - CoreCLR統合上の一番と課題となるGC・メモリ管理周りは一部最適化を残して対応が完了。.NET 8.0のAPIを完全に利用できることをマイルストーンに開発が進行中
    - IL2CPPの.NET 8.0対応を進めており、.NET 8 BCLの導入を今後数ヶ月で対応予定。その後、.NET hardware intrinsicsをサポートすることでIL2CPPのパフォーマンスを向上させる予定
    - それぞれの対応によって、.NETのバージョンスイッチが簡単になった。.NET9やそれ以降のバージョンへのスイッチは簡単になる予定
    - .NET 8のhardware intrinsicsによってBurstのパフォーマンスが向上を予定
    - Unityの内部ビルドパイプラインとユーザーのビルドパイプラインをMSBuildに完全に統合することを予定。これによりIDE体験の向上やNuGetのサポートを予定
    - Domain Reloadに変わってCode Reloadが導入される予定で、これによってユーザーコードのみリロードが可能に。また、Code Reloadのライフサイクルを購読できるAPIが提供される予定
- [Multiplayer development status and next milestones - September 2024 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/multiplayer-development-status-and-next-milestones-september-2024/1521688)
    - Netcode for GameObjectsのv2.0以降のライセンスがMITからUCLに変更される
    - ビルドからテスト、デプロイ、テストプレイ、スケールを用意にするための各種ツールやサービスが提供される予定
    - Dedicated Serverの導入を容易にすることを目的に、Dedicated ServerパッケージにてでDecicated Serverのワークフローをエディターに統合する実装が進行中
    - [Distributed authority](https://docs-multiplayer.unity3d.com/netcode/current/terms-concepts/distributed-authority/)モードがNetcode for GameObjects2.0に導入された
    - 複数のマルチプレイヤー向けパッケージやサービスを構築するための新しいMultiplayer Services package（`com.unity.services.multiplayer`）が提供された
- [New Worldbuilding Update (Q3 2024) Info Revealed at Unite - Unity Engine - Unity Discussions](https://discussions.unity.com/t/new-worldbuilding-update-q3-2024-info-revealed-at-unite/1519292)
    - Terrainに変わる新しいワールド構築ツールの実装が予定されている。
    - Quadspinner’s GaeaやHoudiniなどからのインポートに重点をおいたシステムを検討しており、またUnity上に取り込んだあとは非破壊なレイヤースタック（non-destructive layer stack）によってコンテンツを編集できるようになる。
    - Shader Graphとのインテグレーション
    - Virtual Textureや独自のテッセレーションシステム、ECS上でシステムを構築することでランタイムのパフォーマンスを担保する
- [Content Pipeline Modernization - Unity Engine - Unity Discussions](https://discussions.unity.com/t/content-pipeline-modernization/1519283)
    - コンテンツのインポート周りのアップデートが予定されており、必要なコンテンツのみのインポート、インポート高速化、インポート時のノンブロッキング化の実装が予定されている
- Unified Renderer
    - URPとHDRPのパイプライン統合
    - スレッドはまだ公開されていない

## Articles

### ILPostProcessor 入門 第3回目「IL編集の基本」

[ILPostProcessor 入門 第3回目「IL編集の基本」 - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2024/09/18/120605)

ILPostProcessorによって既存のILを編集するに必要なスタックマシンやオペランド、スタック上での数値の扱い方の基本的な知識から、Mono.Cecilを用いてIL命令を編集する実装について解説しています。

### AndroidStudioが意外と便利だった

[AndroidStudioが意外と便利だった](https://zenn.dev/happy_elements/articles/dfb6bbe41f8757)

Android Studioを用いて、Unityで制作したAndroid向けのアプリのメモリ使用量やAndroidManifest、Apkのサイズを確認する方法について紹介しています。

### Maya ツールのテスト環境を整備してユニットテストを書いた話 Now In REALITY Tech #124

[Maya ツールのテスト環境を整備してユニットテストを書いた話 Now In REALITY Tech #124｜REALITY](https://note.com/reality_eng/n/n3576690a326f)

Maya向けのツールをPythonのunittestをもちいてユニットテストを記述する方法やMac向けにC++で記述したプラグインをMac向けにビルドする方法やその注意点について紹介しています。

### .asmrefはCore CLRがくると動作しなくなるよという話

[【Unity】.asmrefはCore CLRがくると動作しなくなるよという話 - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2024/09/19/120000)

Unity Disscussionで議論になっていた、UnityのC#実行環境をCore CLRに移行する際の `.asmref` を廃止する予定についてと、Unityの中の人による代替案の提案について紹介しています。

### MasterMemoryの文字列自動インターン化の挙動を確認する

[【Unity】MasterMemoryの文字列自動インターン化の挙動を確認する - LIGHT11](https://light11.hatenadiary.com/entry/2024/09/17/191029)

MasterMemoryにおける、文字列のインターン化の扱いについて紹介しています。
