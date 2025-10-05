---
type: "unity-weekly"
title: "Unity Weekly 242"
description: "2025/10/06週のUnity Weeklyです。Unityのセキュリティ脆弱性、PolySpatialのvisionOS 26対応、Unity Towerアセット、CA.unity #10資料一部公開などを紹介しています。"
tags: ["Unity Weekly", "Unity"]
date: "2025-10-06T00:00:01"
---

## Unity Officials

### Unity セキュリティの脆弱性: 開発者向け修正ガイド

[Unity セキュリティの脆弱性: 開発者向け修正ガイド](https://unity.com/ja/security/sept-2025-01/remediation)

Unity2017以降でビルドされたアプリケーションに対して、任意のコードをロードして実行することが可能なコマンドラインに起因する脆弱性が報告されました。
脆弱性が報告されているプラットフォームはAndroid、Windows、macOSになります。

これによってUnityからアプリケーションの脆弱性を修正するためのパッチおよびこの脆弱性を修正した各バージョンのUnityエディターがリリースされています。
そのため開発者は、アプリケーションに対して修正パッチを当てるか、修正済みのUnityエディターにアップデートをした上でアプリをビルドし直して、アプリを各プラットフォームに再提出してリリースする必要があります。

この記事では、脆弱性の概要からアプリケーションの脆弱性の修正の仕方、各プラットフォームごとの脆弱性についてのテクニカルノートが公開されています。

### visionOS Release Notes 1.3.13 and 2.4.3

[visionOS Release Notes 1.3.13 and 2.4.3 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/visionos-release-notes-1-3-13-and-2-4-3/1688296)

PolySpatialの1.3.13と2.4.3がリリースされました。2.4.3においては、visionOS26がサポートされるようになりました。

### Our high-tech building model for Unity Industry demos is now available

[Our high-tech building model for Unity Industry demos is now available - Unity Services - Unity Discussions](https://discussions.unity.com/t/our-high-tech-building-model-for-unity-industry-demos-is-now-available/1687837)

Unity Industry向けのデモアセットとして新しい高階層ビルモデルのUnity Towerが一般公開されました。

このモデルは建築家のSamuel McAlister氏によってデザインされ、実際のAECプロジェクトの複雑さを反映するよう構築されているため、大規模なデータ処理に最適なテストベットになっているとのことです。

## Slides

### CA.unity #10

[CA.unity #10 - connpass](https://cyberagent.connpass.com/event/366674/)

2025/09/30に開催された、CA.unity #10の動画資料および一部スライド資料が公開されています。

- [CA.unity #10 | CyberAgent Developers - YouTube](https://www.youtube.com/watch?v=KDEkMd-uPJE)
- [iOSプラットフォーム向けの開発Tips | ドクセル](https://www.docswell.com/s/mao/KQXQ7M-2025-10-04-095131)

## Articles

### Unity6.3の目玉であるAudioPipelineでチップチューンサウンドジェネレーターを作ってみた

[【Unity】Unity6.3の目玉であるAudioPipelineでチップチューンサウンドジェネレーターを作ってみた【Audio】 #audio - Qiita](https://qiita.com/Cova8bitdot/items/07bf2e0f7ab6fa029e82)

Unity 6.3から導入されたAudioPipelineのIGeneratorDefinitionについて、この機能の基本的な概念から、この機能を拡張して正弦波や矩形波によって音を作る簡単なサウンドジェネーターを実装して組み込む方法を紹介しています。

### Unity6.3のScriptableAudioPipelineとMIDI入力でUnityアプリを楽器化してみた【MIDI楽器】

[【Unity】Unity6.3のScriptableAudioPipelineとMIDI入力でUnityアプリを楽器化してみた【MIDI楽器】 #audio - Qiita](https://qiita.com/Cova8bitdot/items/285ddcaaf7309cb89133)

キーボードによるMIDI入力をInputSystemで受け取って、その入力をAudio pipelineの独自のIGeneratorDefinitionで受け取って音を鳴らす実装について紹介しています。

### Instant Replay for Unity v1.0.0 正式版をリリースしました

[Instant Replay for Unity v1.0.0 正式版をリリースしました - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2025/10/03/121108)

Instant Replayのv1.0.0のリリースに際して、このリリースで入ったリアルタイムレコードのデフォルト化やLinuxサポートについての紹介と、その技術的な詳細を説明しています。

### Unityのライセンス費用に向き合う

[Unityのライセンス費用に向き合う Now In REALITY Tech #153｜REALITY株式会社](https://note.com/reality_eng/n/n01c8cfec4f5d)

Unityエディターを使わなくても行える作業について専用のビューワーやエディターを開発することで、Unityのライセンス費用を削減する取り組みについて紹介しています。

### ステンシルを利用したトランジション表現

[【Unity】ステンシルを利用したトランジション表現](https://zenn.dev/matrixsoftware/articles/649027fbed6e36)

ステンシルを用いた二つの世界の遷移演出について、シェーダーでのステンシルの使い方から実現方法を紹介しています。

### Unity Application Patcherで "Patch hash not found." と表示された時はUnityに連絡しよう

[Unity Application Patcherで "Patch hash not found." と表示された時はUnityに連絡しよう - きゅぶろぐ](https://blog.kyubuns.dev/entry/2025/10/04/080508)

Unityの提供する脆弱性パッチ Unity Application Patcherで、「Patch hash not found.」と表示された場合の対処について紹介しています。

### Meta Questでパススルー時に境界（Guardian）をオフにする方法

[Meta Questでパススルー時に境界（Guardian）をオフにする方法【Unity】](https://zenn.dev/sysys/articles/a7cf3debd02773)

Meta Questでパススルー時に境界をオフにするためのAndroidアプリとしての設定項目や、OpenVRのAPI（OVRPassthroughLayerやOVRManager）の設定方法について紹介しています。