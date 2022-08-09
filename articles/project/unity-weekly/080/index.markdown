---
type: "unity-weekly"
title: "YAML、マテリアルバリアント、SYNC 2022 - Unity Weekly 080"
description: "2022/08/08週のUnity Weeklyです。 Unityシリアライズ言語のYAML、マテリアルバリアント、SYNC 2022などについてなどについてとりあげました。"
tags: ["Unity Weekly","Unity"]
date: "2022-08-08T15:00:00"

---

## Unity Officials

### Unity のシリアライズ言語 YAML を理解する

[Unity のシリアライズ言語 YAML を理解する | Unity Blog](https://blog.unity.com/ja/technology/understanding-unitys-serialization-language-yaml)

Unityのプレハブやメタデータなどのデータをシリアライズする際に利用されるYAMLについて、その基本的な構造から、アニメーションカーブを例にしたYAMLのレベルでのデータのリファクタリング方法、YAMLファイルのファイルの参照について（ローカル参照）、ファイル間のオブジェクトを参照する際のGUIDの利用方法とYAMLでのデータの持ち方、プレハブ・ネストプレハブ・プレハブバリアントでのデータの持ち方、古くなった参照のUnityでの扱いなど、それぞれ解説しています。

### マテリアルバリアント：複雑なマテリアルライブラリを管理するためのソリューション

[マテリアルバリアント：複雑なマテリアルライブラリを管理するためのソリューション | Unity Blog](https://blog.unity.com/ja/games/material-variants-the-solution-for-managing-complex-material-libraries)

Unity 2022.1から利用できる、ベースマテリアルを元にマテリアルのバリエーションを管理できるマテリアルバリアントについて、その使い方から利点、マテリアルバリアントの仕組み、スクリプトでの操作方法についてそれぞれ解説しています。

### SYNC 2022

[SYNC 2022](https://events.unity3d.jp/sync/)

2022年10月25日〜26日に開催されるUnityの最新事例・情報共有に関するカンファレンス「SYNC 2022」のセッションの公開と参加申し込みが開始されました。

### Unity IAP 4.4.0 is now available

[Official - Unity IAP package 4.4.0 is now available, and deprecated Asset Store v2.3.0 | Page 2 - Unity Forum](https://forum.unity.com/threads/unity-iap-package-4-4-0-is-now-available-and-deprecated-asset-store-v2-3-0.415517/page-2#post-8319519)

Unity IAPの4.4.0が公開されました。メインのアップデートとして Google Play Billing Library の 4.0.0をサポートしています。

Google Playへのアプリ公開でアプリ内課金を行う場合、新規アプリは 2022/08/02から、既存アプリは 2022/11/01 までに対応が必須となるので（[参考](https://developer.android.com/google/play/billing/deprecation-faq)）、Google Playアプリの課金対応をUnity IAPで行っている場合はパッケージのアップデートが必須となります。

## Articles

### Unity 2021の2Dゲーム向け新機能紹介

[Unity 2021の2Dゲーム向け新機能紹介 – Unity for Pro](https://forpro.unity3d.jp/unity_pro_tips/2022/06/27/3798/)

Unity 2021で利用できる2Dゲーム向けの新異能として、URP（Universal Render Pipeline）の2D Renderer、2D Project TemplateおよびFeature set、Pixel Perfects、2D Animation、2D PSD Importer、2D Physics、Tilemapについてそれぞれ解説しています。

### Melee attacks and AI combat mechanic in 2D games

[Melee attacks and AI combat mechanic in 2D games - Pav Creations](https://pavcreations.com/melee-attacks-and-ai-combat-mechanic-in-2d-unity-games/)

2Dゲームの近接攻撃の実装と、敵AIに近接攻撃の能力を実装する方法について紹介しています。



近接攻撃の実装（当たり判定やアニメーション）や攻撃を呼び出すコマンドの実装、敵AIのステートマシンの実装などについてそれぞれ解説しています。

### DeviceSimulatorPluginを使ってDevice Simulatorの機能を拡張する

[【Unity】DeviceSimulatorPluginを使ってDevice Simulatorの機能を拡張する - うどんてっくメモ](https://myudon.hatenablog.com/entry/2022/08/01/191934)

DeviceSimulatorPluginを用いてDevice Simulatorを拡張する方法を紹介しています。



公式の提供するDeviceSimulatorPluginのサンプルを覗きつつ、Device SimulatorのUIを拡張して、タッチ操作の合計回数を計算する拡張する実装について解説しています。

### C# 9 in Unity (2021.2 and up)

[C# 9 in Unity (2021.2 and up) — Sunny Valley Studio](https://www.sunnyvalleystudio.com/blog/unity-csharp-9-features)

Unity 2021.2以降で利用できる C# 9の構文について、Target typing、Pattern Matching、Record（とこれを使うためのワークアラウンド）についてそれぞれ紹介しています。

### Logo Dissolve with Particles

[Logo Dissolve with Particles – Mirza’s Realm](http://www.mirzabeig.com/tutorials/logo-dissolve-with-particles/)

Unity標準のパーティクルシステム（Shuriken）を用いて、ゲームのロゴ画像をディゾルブエフェクトによりフェードアウトする方法を紹介しています。

ロゴ画像のフェードアウト、Read/Write Enabledによるテクスチャからパーティクルの生成、ロゴのパーティクルを分散するためのノイズやパーティクルモジュールの設定などについてそれぞれ解説しています。

