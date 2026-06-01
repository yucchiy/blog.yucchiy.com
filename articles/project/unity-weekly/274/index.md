---
type: unity-weekly
title: Unity Weekly 274
description: >-
  2026/06/01週のUnity Weeklyです。Surface Cache GI Preview、Behaviour Package 1.0.16 Released などを紹介しています。
pubDatetime: 2026-06-01T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Surface Cache GI Preview

[Surface Cache GI Preview - Unity Engine - Unity Discussions](https://discussions.unity.com/t/surface-cache-gi-preview/1720494)

6000.6.0a5からPreviewとして利用できる、新しいGlobal Illuminationバックエンド「Surface Cache GI」について紹介しています。

Surface Cache GIは、シーン内の静的メッシュに対して自動でSurface Cacheを生成し、その情報を用いて照明効果を提供する機能で、動的ライティングやジオメトリの変更に対応しています。

このディスカッションでは、この機能の使い方から提供する機能、設計のゴールについてそれぞれ紹介しています。

この機能の詳細については「[Unity Surface Cache GI - Getting Started](https://docs.google.com/document/d/1QkYO3IF4G9kWV5swcOP4R3C1U3mkujeTONJcP2ECPzw/edit?tab=t.0)」というドキュメントが別途提供されています。

また、この機能に関するフィードバックを [Surface Cache GI - Product Experience Feedback](https://docs.google.com/forms/d/e/1FAIpQLSe3sunZa40ZX9YIL0tw5IMIZDD89y1zq2jRz8qHhMNAfSnqyA/viewform) にて募集中とのことです。

### Behavior Package 1.0.16 Released

[Behavior Package 1.0.16 Released! - Unity Engine - Unity Discussions](https://discussions.unity.com/t/behavior-package-1-0-16-released/1721488)

Behavior Package 1.0.16が公開されています。

このディスカッションでは、このバージョンに入ったUnity 6.5対応やPrefab workflowまわりの更新、Behavior Graphの編集・実行に関する修正やQuality of Lifeなどが紹介されています。


## Articles

### Intel Mac版のUnity Editorは、Unity 6.6でDeprecatedになり、Unity 6.7 LTSが最後のバージョンとなりそう

[Intel Mac版のUnity Editorは、Unity 6.6でDeprecatedになり、Unity 6.7 LTSが最後のバージョンとなりそう - Qiita](https://qiita.com/RyotaMurohoshi/items/2bc43503796d921d4b5f)

Unity 6000.6.0a6のリリースノートとUnity 6.6 alphaのシステム要件をもとに、Intel Mac版Unity Editorの非推奨化について整理しています。

### 〖Unity〗iOS 向けアプリの UIScene ライフサイクル対応を行う

[〖Unity〗iOS 向けアプリの UIScene ライフサイクル対応を行う - Qiita](https://qiita.com/mao_/items/60c4f90ce0b380b9e3a6)

iOS26の次のメジャーリリース以降に対応が必須となっている「[UIScene ライフサイクルへの移行](https://developer.apple.com/documentation/technotes/tn3187-migrating-to-the-uikit-scene-based-life-cycle)について、Unityの対応前後の `UnityAppController.mm` などのファイルを見比べつつ、Unityをアップデートによる対応が行えない場合に手動でどうやってアップデートするのかや対応済みかを確認する方法について解説しています。

### 制作支援ツールはその場で組む時代に - Claude Code で作った AI 生成アセットのレビュー用 4本

[制作支援ツールはその場で組む時代に - Claude Code で作った AI 生成アセットのレビュー用 4本 (Unity個人ゲーム開発) - Zenn](https://zenn.dev/marvelousu/articles/anemora-dev-tools)

個人制作のゲーム開発において、AIが生成したアセットのレビュー作業を効率化するためにClaude Codeで作成した制作支援ツールについて紹介しています。

実際に制作した支援ツールの概要やどういう問題を解決したかや、これらのツールを具体的にどういうふうに制作したのかをそれぞれ説明しています。

### Unityプロジェクトでテスト設計+テストファースト開発のための Agent Skills

[Unityプロジェクトでテスト設計+テストファースト開発のための Agent Skills - やらなイカ？](https://www.nowsprinting.com/entry/2026/05/31/223835)

ブログの著者がUnityプロジェクト向けに公開したテスト設計＆テストファーストのための Agent Skills「[unity-coding-skills
](https://github.com/nowsprinting/unity-coding-skills)」について、代表的なスキルである`/plan-feature <SPEC>` の動作や特徴、スキルのインストール方法とMCP連携、使用感について紹介しています。

### Project Auditorでバージョンアップで廃止されるクラスやメソッド等(Obsolete API)を検出出来るように

[Project Auditorでバージョンアップで廃止されるクラスやメソッド等(Obsolete API)を検出出来るように - kanのメモ帳](https://kan-kikuchi.hatenablog.com/entry/Project_Auditor_obsolete_API)

Unity 6.3から利用できるProject Auditorのv2で、Unityのバージョンアップ時に廃止されるクラスやメソッドなどのObsolete APIを検出する機能を紹介しています。

Obsolute APIを確認する具体的な操作方法の紹介と、自動修正非対応である点や全てのObsolute APIに対応できてない点などについてそれぞれ言及しています。

### 【Unity】NavMeshAgentが動作しない場合の原因と対応内容

[【Unity】NavMeshAgentが動作しない場合の原因と対応内容 - Zenn](https://zenn.dev/sumcol03/articles/67a6b94dd457f5)

NavMeshAgentを設定した敵が生成後に移動しない問題について、目的地となる自拠点がNavMeshSurfaceのBake対象に含まれていたことが原因だったケースについて、その原因や対応方法、問題の切り分け方法などそれぞれ紹介しています。

### 【Unity】モバイル環境でFloatテクスチャをサンプルする方法

[【Unity】モバイル環境でFloatテクスチャをサンプルする方法 - Qiita](https://qiita.com/yuri_tsukimi/items/236fc4b89083f1ccb672)

AndroidやQuestなどのモバイル環境で、`R32G32B32A32_SFloat` のようなFloatテクスチャをシェーダーからサンプルする際の精度問題について紹介しています。

### 「uGUI」と「UIToolkit」のつかいわけ(Unity)

[「uGUI」と「UIToolkit」のつかいわけ(Unity) - Qiita](https://qiita.com/tangentkoh/items/57d5a8c19fbe73c9b806)

UnityのUI制作における技術選定としてuGUIとUI Toolkitの特徴を比較し、それぞれの向き不向きを整理しています。

### 【初心者向け】Windows版Codex appからUnityを無料で操作する手順（CoplayDev/unity-mcp）

[【初心者向け】Windows版Codex appからUnityを無料で操作する手順（CoplayDev/unity-mcp） - Zenn](https://zenn.dev/lunalunacollege/articles/56ba21326eea81)

[`CoplayDev/unity-mcp`](https://github.com/CoplayDev/unity-mcp) 用いて、Windows版Codex appからUnity Editorを操作する環境構築手順を紹介しています。

Windows 11とUnity 6.3の環境を前提に、MCPに必要なツールのインストール方法からCodexへのMCPの登録方法、トラブルシューティングなどをそれぞれ説明しています。
