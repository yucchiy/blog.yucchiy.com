---
type: unity-weekly
title: Unity Weekly 269
description: >-
  2026/04/20週のUnity Weeklyです。Unity 6.5 UI Toolkitアップデート、PanelRenderer、Project Auditor 2.0、Unity Hubアップデート、Spring Sale - UnityAsset Storeなどを紹介しています。
pubDatetime: 2026-04-20T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### PanelRenderer: Evolution of the UIDocument Component in 6.5+

[PanelRenderer: Evolution of the UIDocument Component in 6.5+ - Unity Engine - Unity Discussions](https://discussions.unity.com/t/panelrenderer-evolution-of-the-uidocument-component-in-6-5/1715909)

Unity 6.5以降のUI Toolkitにおいて、 [UIDocumentコンポーネント](https://docs.unity3d.com/6000.5/Documentation/Manual/UIE-create-ui-document-component.html)の代替として[PanelRendererコンポーネント](https://docs.unity3d.com/6000.5/Documentation/Manual/ui-systems/panel-renderer-component.html) が提供されることをアナウンスしています。

PanelRendererコンポーネントは、Unityのレンダリングパイプラインに直接接続されることで隠れたコンパニオンコンポーネントを必要とせず、またバッチ処理が改善されています。SRP統合などの将来の機能の基盤になるとのことです。

このディスカッションでは、主にUIDocumentコンポーネントからPanelRendererコンポーネントへの移行方法について紹介しています。

UIDocumentは近い将来に削除する予定はなく、既存のプロジェクトでは引き続きこのコンポーネントが利用できることを伝えています。

### UI Toolkit Performance Update in 6.5

[UI Toolkit Performance Update in 6.5 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/ui-toolkit-performance-update-in-6-5/1716685)

Unity 6.5におけるUI Toolkitのパフォーマンスに関するアップデートを紹介しています。

主に下記のアップデートをアナウンスしています。

- Reduction in GC Allocs for Computed Styles
    - スタイル解決のために、計算済みスタイルと関連データをオブジェクトとして生成・管理して同USSクラスに一致する要素間で共有していたが、大量のGC.Allocが発生していたが、このデータをネイティブメモリ（Unmaanged memory）で管理するように変更
    - GCへのプレッシャを減らすだけでなく、ネイティブ側のレイアウトライブラリが直接データを参照できるようになったため、余計なコピーが発生しなくなった
    - これによりGC割り当てが大幅に削減された（UI Builderで〜73%、Shader Graphで〜50%、App UIで〜42%）
- USS Stats Profiler
    - USS Stats Profilerという、現在のパネル内にある全ての要素に対して、各スタイルシートとその中の各セレクタに関する統計情報を出力するウインドウが追加された
- New VisualElement.Clear() Options
    - VisualElementのオプションに `VisualElementClearOptions` が追加され、VisualElementの階層全体を即座に再利用できるようになった
    - UIを多用するプロジェクトでは、このオプションを利用することで、メモリ使用量のピークを抑えることができる場合がある
- Additional Memory Profiler Visibility
    - UI Toolkitにおいて可視されていないメモリが、メモリプロファイラーの _Native > UI Subsystems > UIElements_ で確認できるようになった
    - この対応のために、メモリ割り当てをメモリプロファイラーで可視化するためのAPIとして[MemoryLabel](https://docs.unity3d.com/6000.3/Documentation/ScriptReference/Unity.Collections.MemoryLabel.html)が追加された
- Improved Mesh Update Performance
    - WebGLのメッシュ更新のパフォーマンスが向上し、一部のパフォーマンステストでは20倍の改善になった
    - UIメッシュ（頂点＋インデックスバッファ）の更新の度にバッファ全体を更新する必要があったが、ステージングバッファとGPUコピーを使用することでメッシュ更新のパフォーマンスを向上させた
    - WebGPUビルドではこの方式が採用されており、最大4倍のパフォーマンス向上が見られた
    - システムにおける部分的なメッシュ更新の登録および処理を調整することで、一部プラットフォームでは最大3倍のパフォーマンス向上を確認
- Improved GPU Performance
    - MSAAが利用できないオーバーレイの場合で滑らかなエッジを表示するためにエッジアンチエイリアシングを利用していたが、テッセレーションを変更して一部大きいジオメトリにおいてエッジに近い部分のみをアンチエイリアシングを適用するように変更
    - 一部低スペックプラットフォームにおいて、フラグメントシェーディングのコストを最大40%削減した

### Advanced Text Generator (ATG) Now Default in 6.5

[Advanced Text Generator (ATG) Now Default in 6.5 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/advanced-text-generator-atg-now-default-in-6-5/1715871)

Unity 6.5から、UI ToolkitのデフォルトのテキストシステムがAdvanced Text Generator（ATG）に置き換わることをアナウンスしています。

ATGは、既存で利用されているTextCoreと同等の機能を有しつつ、包括的なフォント機能やユニコードをサポートしており、IMGUIも6.4でATGに移行しています。

またベンチマークにおいて、CPUパフォーマンスが10〜40%程度向上することも紹介しています。

ATGは6.3にもバックポートされ、6.3でも利用できるとのことです。

ATGの詳細については、[Announcing Full RTL Language Support](https://discussions.unity.com/t/announcing-full-rtl-language-support/1544214) にて確認できます。

### Now Available: Unity Hub 3.17.2

[Now Available: Unity Hub 3.17.2 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/now-available-unity-hub-3-17-2/1716556)

Unity Hubのv3.17.2のリリースがアナウンスされています。

このバージョンでは、GitHubとGitLabのネイティブサポートや、Windows ARM64のネイティブサポートが行われています。

詳細なリリースノートは[こちらから確認できます](https://unity.com/ja/unity-hub/release-notes#3.17.2)。

### Project Auditor helping you to Upgrade your Unity version

[Project Auditor helping you to Upgrade your Unity version - Unity Engine - Unity Discussions](https://discussions.unity.com/t/project-auditor-helping-you-to-upgrade-your-unity-version/1716833)

Project Auditorの2.0にて、Unityのバージョンアップをのサポートを目的として、そのプロジェクトのバージョンを上げた際に非推奨になるAPIの一覧を解析する機能が追加されたことをアナウンスしています。

このバージョンは、Unity6.5以降ではエディターのビルトインとして、6.0または6.3の場合は2.0以降のバージョンをインストールすることで利用できます。

### Burst Compiler & Job System Multithreading — Official Web Support in Unity 6.4

[🎉 Burst Compiler & Job System Multithreading — Official Web Support in Unity 6.4 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/burst-compiler-job-system-multithreading-official-web-support-in-unity-6-4/1716721)

Unity 6.4以降で、ウェブビルドにおいてBurst Compilerによるマルチスレッドとジョブシステムを完全にサポートする（検証済みかつ本番環境で使用可能なサポートを提供するようになった）ことをアナウンスしています。

このディスカッションでは、コードをジョブシステムに対応するための基本的な実装について紹介しています。

### Spring Sale - Unity Asset Store

- [ゲーム制作に最適なアセット | Unity Asset Store](https://assetstore.unity.com/ja-JP?utm_campaign=x-unity-japan-2026-4-asset-store-spring-sale)
- [Xユーザーのユニティ・テクノロジーズ・ジャパンさん: 「本日よりUnity Asset Store最大級の「Spring Sale」を開催🌸 300点以上の人気アセットが50%OFF！さらに24時間限定で最大95%OFFになるフラッシュディールも必見です。システム、VFX、環境パックなど開発を加速させるツールが勢揃い。この機に理想のゲーム制作を✨ ⏰日本時間5月7日(木)23時59分まで https://t.co/L9U1J1k8MY」 / X](https://x.com/unity_japan/status/2043886711386628567)

Unity Asset Storeにて、300点以上の人気アセットが50%OFF、24時間限定で最大95%OFFとなるフラッシュディールがある「Spring Sale」が、日本時間の2026/05/07 23:59まで開催されています。

### Action Required: Preparing for LevelPlay SDK Compliance Modernization (v9.4.0)

[Action Required: Preparing for LevelPlay SDK Compliance Modernization (v9.4.0) - Unity Services - Unity Discussions](https://discussions.unity.com/t/action-required-preparing-for-levelplay-sdk-compliance-modernization-v9-4-0/1716807)

LevelPlay SDK v9.4.0のリリースで新しく追加されたAPIについてアナウンスしています。

このバージョンでは、GDPR・CCPA・COPPAへの対応を統一的に対応できるAPI `LevelPlay.PrivacySettings` の追加やGDPRへのより詳細な対応のためにbool値で設定を行う `setConsent` の非推奨化と新しいAPIの提供などが行われています。

このバージョンで非推奨になったAPIは、2026年の8月までに完全な廃止が予定されているため、該当のAPIを利用している場合は早めの更新を推奨しています。

### Feedback wanted - Addressables Survey

[Feedback wanted - Addressables Survey - Unity Engine - Unity Discussions](https://discussions.unity.com/t/feedback-wanted-addressables-survey/1716835)

Addressablesパッケージの利用状況や利用満足度や使いやすさについてのアンケートが実施されています。

アンケートは[こちらからアクセスできます](https://unitysoftware.co1.qualtrics.com/jfe/form/SV_djpfRS1J0NmOWz4?source=blog.yucchiy.com)。


## Articles

### Lighting & Shadows | Unity Shader Code Basics 06 

[Lighting & Shadows | Unity Shader Code Basics 06](https://danielilett.com/2026-04-17-tut10-06-lighting/)

URP環境での、HLSLを用いたライティングおよびシャドウの実装手法について解説しています。

### Unity Build Layout Viewer — Addressablesのビルド結果を可視化するセルフホスト型Webツール

[Unity Build Layout Viewer — Addressablesのビルド結果を可視化するセルフホスト型Webツール - Akatsuki Hackers Lab | 株式会社アカツキ（Akatsuki Inc.)](https://hackerslab.aktsk.jp/2026/04/17/152852)

