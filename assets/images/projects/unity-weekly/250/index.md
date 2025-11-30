---
type: unity-weekly
title: Unity Weekly 250
description: >-
  2025/12/01週のUnity Weeklyです。Netcode for GameObjects 2.7.0、DOTS Content Management Sample、Unity6.3開発思想についてのインタビューなどを紹介しています。
pubDatetime: 2025-12-01T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Netcode for GameObjects v2.7.0 is now publicly available

[🎉 Netcode for GameObjects v2.7.0 is now publicly available - Unity Engine - Unity Discussions](https://discussions.unity.com/t/netcode-for-gameobjects-v2-7-0-is-now-publicly-available/1693625)

Netcode for GameObjectsのv2.7.0がリリースされたことがアナウンスされています。

このバージョンでは、`RpcAttribute` で指定されたRPCメソッドに対して `RpcInvokePermission` による呼び出し権限の制御や Unity 6.3の `SceneHandle` サポート、`NetworkRigidbody` のドキュメンテーションなどを含む多くの変更が適用されています。

### We are pleased to announce a new release of Content Management Sample!

[We are pleased to announce a new release of Content Management Sample! - Learn Content - Unity Discussions](https://discussions.unity.com/t/we-are-pleased-to-announce-a-new-release-of-content-management-sample/1696460)

[DOTS Samples](https://github.com/Unity-Technologies/EntityComponentSystemSamples)レポジトリにコンテンツ管理に関するサンプルが追加されたことをアナウンスしています。

このサンプルは、Entities パッケージのコンテンツ管理APIを用いて、Unityアセットとサブシーンを実行時にダウンロードやロード、アンロードを行なっています。

またこのサンプルでは、ローカルとリモートの両方のコンテンツパイプラインをサポートしています。

サンプルの詳細は[こちらから](https://github.com/Unity-Technologies/EntityComponentSystemSamples/blob/master/Dots101/ContentManagement101/README.md)確認できます。

## Events

### CA.unity #10 アーカイブ公開

- [iOSプラットフォーム向けの開発Tips | Unity Learning Materials](https://learning.unity3d.jp/10827/)
- [TextMesh Proカスタムシェーダー開発入門 | Unity Learning Materials](https://learning.unity3d.jp/10839/)
- [開発現場で試行錯誤した、Unityでのゲーム開発におけるAIエージェント活用術 | Unity Learning Materials](https://learning.unity3d.jp/10833/)
- [Sentisだけじゃない！Unity上で高速なオンデバイス推論を実現するアプローチのご紹介 | Unity Learning Materials](https://learning.unity3d.jp/10845/)

2025/09/30に開催された[CA.unity](https://cyberagent.connpass.com/event/366674/)の当日の発表資料および動画が、[Unity Learning Materials](https://learning.unity3d.jp/)にて公開されています。

## Articles

### Unityのエンジン開発最高責任者Adam Smith氏に訊く、2026年を見据えた「Unity 6.3」開発構想とは【メールインタビュー】

[Unityのエンジン開発最高責任者Adam Smith氏に訊く、2026年を見据えた「Unity 6.3」開発構想とは【メールインタビュー】｜ゲームメーカーズ](https://gamemakers.jp/article/2025_11_27_124119/)

ゲームメーカーズが、Unityエンジン開発の最高責任者 Adam Smith氏に対して、Unity 6.3の最新機能や今後のUnityの展望についてメールインタビューを実施した内容を公開しています。

### UnityでMatrix4x4を理解する

[UnityでMatrix4x4を理解する](https://zenn.dev/dsgarage/articles/32114f2a3d7cf9)

行列がどのような役割を果たすのかをUnityやCG・各分野での活用事例を紹介し、またTRS行列を題材にこの行列の概要や行列の計算順序、簡易的な実験を交えつつ行列について説明しています。

また、Unityで `Matrix4x4` を用いて行列を扱う上での基本や `Transform` との関連についても言及しています。

### タスクキルを救う！安定動作を支える「中断再開」の仕組み

[タスクキルを救う！安定動作を支える「中断再開」の仕組み | QualiArtsエンジニアブログ](https://technote.qualiarts.jp/article/99)

モバイルゲームで、ゲーム中にタスクキルなどでゲームを中断した場合にも、途中復帰を行うための機能の仕様策定や実装方法について紹介しています。

### 3DとUIのハイブリッド解像度を実現する「Reso Dynamix」を公開しました

[3DとUIのハイブリッド解像度を実現する「Reso Dynamix」を公開しました - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2025/11/28/145018)

SGEコア技術本部が開発する、3D空間とUI空間の描画解像度を別々に扱うことのできるライブラリ「[Reso Dynamix](https://github.com/CyberAgentGameEntertainment/ResoDynamix)」について、その仕組みの概要や機能についてそれぞれ紹介しています。

### これからのUnity、どうなる！？ Unite 2025 ロードマップまとめ

[これからのUnity、どうなる！？ Unite 2025 ロードマップまとめ](https://zenn.dev/m_hatayama/articles/ba4990c542a47c)

[Unite 2025のロードマップの講演](https://www.youtube.com/watch?v=rEKmARCIkSI)を、文字起こしベースでまとめられています。

### Unity 6.3からAndroidビルド設定で「Data Location」項目が追加された

[Unity 6.3からAndroidビルド設定で「Data Location」項目が追加された #Unity6.3 - Qiita](https://qiita.com/RyotaMurohoshi/items/6ec8f27c3e09dc332203)

Unity 6.3でAndroidビルド向けに追加された「Data Location」設定について、この設定によってAndroidビルドでの `Application.persistentDataPath` と `Application.temporaryCachePath` がどのように変化するのか紹介しています。

### Project Settingsを上から見ていきつつ自分の言葉で書いてみる　Adaptive Performance、Audio編

[Project Settingsを上から見ていきつつ自分の言葉で書いてみる　Adaptive Performance、Audio編 #Unity - Qiita](https://qiita.com/ScreenPocket/items/aaf77a7d9290bd6dcf47)

Project Settingsのそれぞれの設定（今回はAdaptive PerformanceとAudio）が、具体的にどのような影響を与えるのかについて、著者自身の解釈を含めて説明しています。