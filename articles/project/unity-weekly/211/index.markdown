---
type: "unity-weekly"
title: "Unity Weekly 211"
description: "2025/02/18週のUnity Weeklyです。Rewarded ad system、R3、パストレーシング、Unity ECS、Incremental Source Generatorなどについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2025-02-18T00:00:01"
---

## Unity Officials

### Rewarded ad systems: Are they right for your game and how to implement them

[Rewarded ad systems: Are they right for your game and how to implement them | Unity](https://unity.com/blog/rewarded-ad-systems)

どのようなゲームがリワード広告の導入に適しているかや、リワード広告システムの効果的な実装方法などについて紹介しています。

### How to Leverage On-Device Advertising for Q1 Growth

[How to Leverage On-Device Advertising for Q1 Growth | Unity](https://unity.com/blog/leverage-on-device-advertising-q1-growth)

第一四半期が、モバイルアプリの成長にとって重要な理由や、オンデバイス広告を用いて成長を最大化させる方法について紹介しています。

### 48時間でゲームを作る！ ゲームデザイン編

[48時間でゲームを作る！ ゲームデザイン編 | Unity Learning Materials](https://learning.unity3d.jp/10684/)

Global Game Jam 2025で制作したゲームを題材に、短期間でゲームデザインを構築する過程を紹介しています。

### Core CLR移行チームのディレクターの辞職

Unity の Core CLRのディレクターをつとめていた [xoofx氏](https://mastodon.social/@xoofx/113997304444307991) が辞職することを自身のmastdonにて発表しています。

また[Unity Discussion上で](https://discussions.unity.com/t/coreclr-and-net-modernization-unite-2024/1519272/428) Core CLRの移行作業や担当については変更がない旨が伝えられています。

## Articles

### R3 オペレーター/ファクトリーメソッド まとめ

[R3 オペレーター/ファクトリーメソッド まとめ #C# - Qiita](https://qiita.com/toRisouP/items/3d045aa248824571b809)

次世代Rx [R3](https://github.com/Cysharp/R3) の各種オペレーターの挙動を、一部gif動画も交えつつ解説しています。

また、ファクトリーの一覧の紹介やR3とUniRxの挙動の違い、R3ですこしややこしい挙動をするオペレーターについても触れています。

### Unity6 + URP で動くパストレーサーを実装してみよう Part3

[Unity6 + URP で動くパストレーサーを実装してみよう Part3 - シリコンスタジオBlog ｜ CG・ゲームエンジン・機械学習・ビジュアライゼーション](https://blog.siliconstudio.co.jp/2025/02/2189/)

Unity 6 & URPのカスタムレンダーパス上に独自のパストレーサーを実装する連載記事で、本記事では実際にパストレーシングを実装するための乱数生成やモンテカルロ積分によるパストレーシングのロジック実装について解説しています。

前回の記事は、下記より確認できます。

- [Unity6 + URP で動くパストレーサーを実装してみよう Part 1 - シリコンスタジオBlog ｜ CG・ゲームエンジン・機械学習・ビジュアライゼーション](https://blog.siliconstudio.co.jp/2024/12/1923/)
- [Unity6 + URP で動くパストレーサーを実装してみよう Part 2 - シリコンスタジオBlog ｜ CG・ゲームエンジン・機械学習・ビジュアライゼーション](https://blog.siliconstudio.co.jp/2025/02/2146/)

### Incremental Source Generator入門

[【C#】Incremental Source Generator入門 – yn01](https://yn01.dev/blog/introduction-to-incremental-source-generator/)

Incremental Source Generatorによるソースコード生成について、プロジェクトの作成方法から通常のSource Generatorとの違い、実際にコード生成をするための各種説明や最適化まで取り上げています。

### Unity の ECS を使って Apple Vision Pro でパーティクルを操作してみた

[Unity の ECS を使って Apple Vision Pro でパーティクルを操作してみた](https://zenn.dev/meson/articles/ecs-for-polyspatial)

PolySpatial上でUnity ECSを動作させるための設定（おもにレンダリング周り）と、Unity ECSを用いて独自のパーティクルシステムを実装する方法について解説しています。

### V24制作事例紹介

- [V24 – 巨大モンスターモデル制作 – │ Aiming 開発者ブログ](https://developer.aiming-inc.com/design/post-11828/)
- [V24 – キャラクター「トワリカ」のモデル制作 │ Aiming 開発者ブログ](https://developer.aiming-inc.com/design/post-11689/)

Aimingが制作する、デザイナーだけで構成されたハイエンド向けのUnityデモプロジェクト「V24」について、モデル制作からUnity上でのシェーダーの追加機能について紹介しています。

### AnimationClipをダブルクリックするだけでプレビューできるエディタ拡張 

[AnimationClipをダブルクリックするだけでプレビューできるエディタ拡張 #Unity - Qiita](https://qiita.com/ScreenPocket/items/000ea4ba53a744621524)

Playable APIを用いて、エディター上でAnimationClipをモデルつきでプレビューするエディター拡張の実装を紹介しています。

### Android XR の UnitySDKについて調べてみた【2025年1月時点】

[Android XR の UnitySDKについて調べてみた【2025年1月時点】](https://zenn.dev/hololab/articles/714f232ea176ac)

[Unity OpenXR: Android XR](https://docs.unity3d.com/Packages/com.unity.xr.androidxr-openxr@0.4/manual/index.html) および [Android XR Extensions for Unity](https://developer.android.com/develop/xr/unity?hl=ja) で提供されている機能についてまとめています。

### 自作パッケージの dependencies の gitベースの依存関係を解決する

[Unity - 自作パッケージの dependencies の gitベースの依存関係を解決する - yotiky Tech Blog](https://yotiky.hatenablog.com/entry/unity_gitdependencyresolver?utm_source=feed)

Unity Package Managerで制作した自作のパッケージを、[GitDependencyResolverForUnity](https://github.com/mob-sakai/GitDependencyResolverForUnity)を用いてgit経由で参照する方法と、サブモジュールなどで配置した自作パッケージへのディレクトリ参照を解決した[フォーク実装](https://github.com/yotiky/GitDependencyResolverForUnity)について紹介しています。

### Vision Pro開発にも役立つApple公式Unityプラグインの紹介

[Vision Pro開発にも役立つApple公式Unityプラグインの紹介](https://zenn.dev/hololab/articles/6fea13ae43e903)

AppleがUnity向けに開発している、iOSの一部機能を提供する Unityネイティブプラグイン「[apple/unityplugins](https://github.com/apple/unityplugins)」について、その概要を紹介しています。

### Needle EngineでマルチプレイヤーWebXRアプリをVercelにセルフホストする 

[Needle EngineでマルチプレイヤーWebXRアプリをVercelにセルフホストする #Unity - Qiita](https://qiita.com/yanosen_jp/items/8362f1ca36f9012ac923)

[Needle Engine](https://engine.needle.tools/docs/) を用いて、Unity上のコンテンツをWebXRアプリとしてビルドして、Vercel経由でホスティングする方法を紹介しています。
