---
type: unity-weekly
title: Unity Weekly 230
description: 2025/07/07週のUnity Weeklyです。Dynamic GI、Unity IAP、Claude Codeなどについて取り上げています。
pubDatetime: 2025-07-06T15:00:01.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Feedback Request: Changes to Unity's Dynamic GI Roadmap

[Feedback Request: Changes to Unity's Dynamic GI Roadmap - Unity Engine - Unity Discussions](https://discussions.unity.com/t/feedback-request-changes-to-unitys-dynamic-gi-roadmap/1660897)

APVsの現状の動的なGI（ライトシナリオなど）の品質や堅牢性の課題についての説明から、この手法をレイトレのサーフェイスキャッシュを基礎とした方式に置き換えることで高速化やツールの使いやすさを向上 させる改善を予定している旨をアナウンスしています。

また、[こちらのアンケートにて](https://unitysoftware.co1.qualtrics.com/jfe/form/SV_d41YptBDUGxtqbc)UnityのGIについてのフィードバックを求めています。

### Unity IAP package 5.0.0-pre.7 is now available

[Unity IAP package 5.0.0-pre.7 is now available - Unity Services - Unity Discussions](https://discussions.unity.com/t/unity-iap-package-5-0-0-pre-7-is-now-available/632966/164)

Unity IAP 5.xでのみサポートされていたGooglePlay Billing Libraryのv7対応が、Unity IAP 4.xでもサポートされる予定とのことです。

### Cloud Project Linking: An Explanation and Some Changes

[Cloud Project Linking: An Explanation and Some Changes - Unity Engine - Unity Discussions](https://discussions.unity.com/t/cloud-project-linking-an-explanation-and-some-changes/1662525)

先日アップデートがあったUnity Hub上でのCloud Projectへのリンク対応について、その経緯を説明しています。


## Articles

### Unityプロジェクトでも Claude Code に自走させるワークフロー

[Unityプロジェクトでも Claude Code に自走させるワークフロー - やらなイカ？](https://www.nowsprinting.com/entry/2025/07/05/053055)

Claude Codeを用いてUnityプロジェクトを開発するためにブログ著者が整えているワークフローやそのワークフローに付随する各種コマンドやMCPなどを含む開発環境や設定などについて解説しています。

### C# Job System と GPU インスタンシングを使って高速に大量のオブジェクトを処理 & 描画する

[C# Job System と GPU インスタンシングを使って高速に大量のオブジェクトを処理 & 描画する](https://zenn.dev/agate_pris/articles/c410b036d32be7)

シューティングゲームなどの弾丸の管理を、`GameObject` を用いて管理している箇所を独自の構造体と `NativeList` による管理に置き換え、
さらに `IJobParallelFor` によるループに置き換え、かつ `SpriteRenderer` の描画を `Graphics.DrawMeshInstancedProcedural` にすることで、大量のオブジェクトを処理する方法について紹介しています。

### 統合テストの合否判定を Gemini API の画像解析で行なう Visual Verification Agent 実装サンプル

[統合テストの合否判定を Gemini API の画像解析で行なう Visual Verification Agent 実装サンプル - やらなイカ？](https://www.nowsprinting.com/entry/2025/07/01/080000)

オートパイロットフレームワーク「[Anjin](https://github.com/DeNA/Anjin)」の操作完了時の合否判定を、その時のスクリーンショットをGemini APIの結果を用いるAnjinのカスタムAgent実装について、その利用イメージや設定方法を紹介しています。

### SmartAddresserで「アドレス」や「Addressableのグループ」を基にラベルやバージョンを付与できるようになりました

[SmartAddresserで「アドレス」や「Addressableのグループ」を基にラベルやバージョンを付与できるようになりました - CORETECH ENGINEER BLOG](https://blog.sge-coretech.com/entry/2025/07/03/124437)

SGEコア技術本部（コアテク）が開発する[Smart Addresser](https://github.com/CyberAgentGameEntertainment/SmartAddresser)で、Addressableグループに基づいたラベル・バージョンを付与するアップデートについて、その概要や利用方法を紹介しています。

### Gemini CLIのソースコードをClaude Codeに入れてC#にポーティングした話

[Gemini CLIのソースコードをClaude Codeに入れてC#にポーティングした話](https://zenn.dev/hololab/articles/geminicli-002-90b19ff8c8c54e)

Gemini CLIを、Claude Codeを活用してC#にポーティングした実装について、その開発を行った経緯や進捗、今後のマイルストーンについてそれぞれ紹介しています。

### Dotsを利用したBoidsアルゴリズム

[Dotsを利用したBoidsアルゴリズム #C# - Qiita](https://qiita.com/Toshizabeth/items/7a7ac0e1e4360ab3145b)

大量のオブジェクトをBoidsアルゴリズムによって動かす実装を、GameObject を動かす実装から ComputeShader & GPU Instancing Indirect や DOTSに置き換えることによるパフォーマンスの検証や、
それぞれの手法についてメリット・デメリットを紹介しています。

### Incremental Source GeneratorでUnityに置いた設定ファイル(Additional files)を参照する方法

[【Unity】Incremental Source GeneratorでUnityに置いた設定ファイル(Additional files)を参照する方法 - LIGHT11](https://light11.hatenadiary.com/entry/2025/06/30/191731)

Incremental Source Generatorで、設定ファイルを「Additional files」として参照する方法を紹介しています。

### 爆速開発を実現できるImmediate Mode GUI(ImGui)の魅力

[爆速開発を実現できるImmediate Mode GUI(ImGui)の魅力](https://zenn.dev/tatarou/articles/65c8ee4990e03a)

Immediate Mode方式によるGUIの開発について、主に開発効率やAI活用に関するメリットや、複雑なアニメーションなどが開発しづらいデメリットをそれぞれ紹介しています。


## Repositories

### SimilarityCSharp

[Akeit0/similarity-csharp](https://github.com/Akeit0/similarity-csharp)

Roslyn Analyzerを用いた、Tree Structure Edit Distance（TSED）ベースのC#類似コード検出器。
