---
type: "unity-weekly"
title: "Unity Weekly 170"
description: "2024/04/29週のUnity Weeklyです。Unity Muse、New 2D puzzle match-3 game sample、C# パフォーマンス勉強会などについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-04-30T00:00:01"

---

## Unity Officials

### All Unity Muse AI capabilities are now available in the Editor, plus 3 new updates

[All Unity Muse AI capabilities are now available in the Editor, plus 3 new updates | Unity Blog](https://blog.unity.com/engine-platform/unity-muse-ai-capabilities-in-editor-plus-new-updates)

Unity Museのアップデートによって利用可能になったエディター機能として、Unityに特化したAIチャット、アニメーション生成、LLMによるキャラクター挙動の生成（Behaviour Treeの生成）について紹介しています。

### Gem Hunter Match: A 2D puzzle match-3 game sample

[Gem Hunter Match: A 2D puzzle match-3 game sample | Unity Blog](https://blog.unity.com/engine-platform/2d-puzzle-match-3-sample-gem-hunter-match)

Unity 2022 LTSのURPを用いた2Dパズルマッチ3ゲームのサンプルプロジェクト「Gem Hunter Match」について、その技術的な概要を紹介しています。

このサンプルは、[Asset Storeでダウンロード可能](https://assetstore.unity.com/packages/essentials/tutorial-projects/gem-hunter-match-2d-sample-project-278941)です。

### Mazda & Unity partnership: The future of automotive cockpit HMI

[Mazda & Unity partnership: The future of automotive cockpit HMI | Unity Blog](https://blog.unity.com/industry/mazda-unity-partnership-automotive-cockpit-hmi)

マツダとUnity Japanのパートナーシップ提携について紹介しています。

## Slides

### C# パフォーマンス勉強会

2024/04/27に開催された「C# パフォーマンス勉強会」のライブ動画および登壇スライドが公開されています。

- [#CSパフォーマンス勉強会 ライブ - YouTube](https://www.youtube.com/watch?v=wg3CibR0mWI)
- [.NET Profiler in 2024. - Speaker Deck](https://speakerdeck.com/kkamegawa/dot-net-profiler-in-2024)
- [ベクトルプログラミングとunsafe | ドクセル](https://www.docswell.com/s/binnmti/Z4Q8V8-2024-04-27-234152)
- [今日からできる！簡単 .NET 高速化 Tips -2024 edition- - Speaker Deck](https://speakerdeck.com/xin9le/jin-ri-karadekiru-jian-dan-net-gao-su-hua-tips-2024-edition)
- [R3のコードから見る実践LINQ実装最適化・コンカレントプログラミング実例 - Speaker Deck](https://speakerdeck.com/neuecc/r3nokodokarajian-rushi-jian-linqshi-zhuang-zui-shi-hua-konkarentopuroguramingushi-li)
- [GitLab CI/CD で C#/WPFアプリケーションのテストとインストーラーのビルド・デプロイを自動化する - Speaker Deck](https://speakerdeck.com/hacarus/wpfapurikesiyonnotesutotoinsutoranobirudodepuroiwozi-dong-hua-suru)

## Articles

### ShaderVariant StrictShaderVariantMatching の設定

[ShaderVariant StrictShaderVariantMatching の設定｜黒河優介](https://note.com/wotakuro/n/nb55619d0fc64)

Unity 2022から追加された「StrictShaderVariantMatching」という設定項目について、この設定の概要と、この設定の発生をプログラムで検知する方法について紹介しています。

### Editor 拡張のチートシート

[Unity - Editor 拡張のチートシート - yotiky Tech Blog](https://yotiky.hatenablog.com/entry/unity_editorextension-tips)

UnityEditor拡張のための各種APIについて、その使い方やどのような見た目になるかをまとめたチートシート。

### How To Fix Deep Link/Push Notifications Crashes On Unity iOS

[How To Fix Deep Link/Push Notifications Crashes On Unity iOS](https://gamedev.center/how-to-fix-deep-link-push-notifications-crashes-on-unity-ios-and-why-software-design-matters/)

iOSでFacebook SDKとディープリンクまたはプッシュ通知を利用しているプロジェクトで、Unity 2021.3.31f1から2021.3.36f1にアップデートした際に発生したクラッシュについて、その原因と解決方法について紹介しています。

### C#でQuaternionを32bitに圧縮する

[【Unity】C#でQuaternionを32bitに圧縮する #Unity - Qiita](https://qiita.com/NightOwl/items/3c2d099ec034056f5018)

[unity3d-jp/MeshSync](https://github.com/unity3d-jp/MeshSync)に実装されている`muQuat32`を参考に、C#の`BitVector32`を用いて`Quaternion`を圧縮する方法について紹介しています。

### Input Systemの仮想カーソルをローカルマルチで扱う方法

[【Unity】Input Systemの仮想カーソルをローカルマルチで扱う方法 | ねこじゃらシティ](https://nekojara.city/unity-input-system-multiple-virtual-mice)

Input SystemのVirtual ModeとPlayer Inputを組み合わせ、複数のプレイヤーが同一ゲーム上で仮想カーソルを操作できるようにする方法について紹介しています。

### TypeがKeyなDictionaryをStatic Type Cachingに置き換えて処理の高速化させる

[【C#】TypeがKeyなDictionaryをStatic Type Cachingに置き換えて処理の高速化させる(実験付き) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2024/04/22/120000)

`System.Type` をキーとする `Dictionary` の実装を、こちらの[スライド](https://www.slideshare.net/slideshow/cedec-2018-c-c/110967331)で言及されているStatic Type Cachingを用いて高速化させる方法とそのパフォーマンスの比較について紹介しています。

### Unity IAP完全攻略への道：消耗型編 #iOS

[Unity IAP完全攻略への道：消耗型編 #iOS - Qiita](https://qiita.com/Arihi/items/16f0e182f454749fd134)

Unity IAP（In App Purchasing）を用いた消費型アイテムの購入の実装方法について、基本的な実装からIAPにおけるトランザクションの扱い、異常系や遅延決済（コンビニ決済）の対応方法について紹介しています。

### Unityでの作業が快適に！シーン上でメニューを開けるContextCircleMenuの紹介

[Unityでの作業が快適に！シーン上でメニューを開けるContextCircleMenuの紹介](https://zenn.dev/garume/articles/af20324efbaabe)

この記事の著者の開発する[ContextCircleMenu](https://github.com/Garume/ContextCircleMenu)について、その機能や使い方、設計について紹介しています。

### 【UI Toolkit】Unityエディタ上でドラッグ&ドロップをハンドリングするイベントまとめ

[【Unity】【UI Toolkit】Unityエディタ上でドラッグ&ドロップをハンドリングするイベントまとめ - LIGHT11](https://light11.hatenadiary.com/entry/2024/04/17/195943)

UI Toolkitでドラッグ＆ドロップをハンドリングするためのイベントについて、その利用方法をまとめています。

### 【UI Toolkit】コピー&ペーストなどのショートカットをハンドリングするCommand Eventの使い方

[【Unity】【UI Toolkit】コピー&ペーストなどのショートカットをハンドリングするCommand Eventの使い方 - LIGHT11](https://light11.hatenadiary.com/entry/2024/04/23/200025)

UI Toolkitでコピー＆ペーストなどのショートカットをハンドリングできる `ValidateCommandEvent` や `ExecuteCommandEvent` について、その使い方を紹介しています。

## Repositories

### GhaUnityBuildReporter

[VeyronSakai/GhaUnityBuildReporter: Automatically reflects build report in GitHub Job Summary when building with Unity on GitHub Actions](https://github.com/VeyronSakai/GhaUnityBuildReporter)

GitHub Actions上で、Unityビルドを行った際のビルドレポートをJob Summaryに反映させるためのUnityパッケージ。