---
type: unity-weekly
title: Games Focus - Unity Weekly 086
description: >-
  2022/09/19週のUnity Weeklyです。Games Focus連載、高度なプロファイリングヒント、Thread Group Shared
  Memoryなどについて取り上げました。
pubDatetime: 2022-09-19T06:00:00.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Games Focus：これからの展開

[Games Focus：これからの展開 | Unity Blog](https://blog.unity.com/ja/technology/games-focus-whats-next)

「Games Focus」という、Unityのゲームに関する機能にフォーカスして、その機能の現在と今後の展開について紹介するブログシリーズが開始されました。



初回は「Stable, fast, unified platform and core（安定していて高速な、統合されたプラットフォームとコア）」というお題で、URP（Universal Render Pipeline）とコード記述と実行（C#スクリプティング環境やIL2CPPなど）、ユーザーインターフェイスのそれぞれの現状と、今後の展開について解説しています。

### Games Focus: Rendering that scales with your needs

[Games Focus: Rendering that scales with your needs | Unity Blog](https://blog.unity.com/technology/games-focus-rendering-that-scales-with-your-needs)

「Games Focus」シリーズの第2段は「Rendering that scales with your needs」というお題で主にグラフィックスに関する機能について紹介しています。



URPとHDRP（High Definition Render Pipeline）の現在と今後の展開、2023年以降にSRP（Scriptable Render Pipeline）に期待されるURPとHDRPの両方を使用するためのオーサリングツールや両パイプラインを1プロジェクトで利用できるようにするための[Render Pipeline Coexistence](https://portal.productboard.com/unity/1-unity-platform-rendering-visual-effects/c/1841-scriptable-render-pipeline-coexistence)などについて触れています。

### 高度なプロファイリングに役立つヒント集

[高度なプロファイリングに役立つヒント集 | Unity Blog](https://blog.unity.com/ja/technology/pick-up-these-helpful-tips-on-advanced-profiling)

2022年6月にArm・Unity Accelerate Solutionsチーム・「Subway Surfers」の制作にあたったSYBO Gamesチームを招いて開催されたウェビナーのラウンドテーブル中で、モバイルゲームのプロファイリングについて議論の、質問のフォローアップが紹介されています。



Unity Profilerについてのロードマップやローエンドデバイスをターゲットにするためのヒント、Android端末をターゲットにする際に注意すべき点、Unity Profilerを用いてプロファイリングを行うためのヒントについてそれぞれまとめられています。

### メッセージングを改善して API 利用要件を明確にする

[メッセージングを改善して API 利用要件を明確にする | Unity Blog](https://blog.unity.com/ja/technology/clarifying-api-usage-requirements-via-improved-messaging)

アセットをエディター内で操作するAPIの内部的な改善として、APIの特定条件下以外での呼び出しの制限と、呼び出した際のメッセージ表示についての事例を紹介しています。



C#とC++間のネイティブバインディングの際に、内部状態に基づくC++関数の呼び出し制限と不正呼び出し時にメッセージを表示するための `PreventExecuteInState` 属性の紹介と、これによって自動生成されるC++コードとエディター上での動作の様子についてそれぞれ解説しています。

### Compute Shader をスレッドグループ共有メモリで最適化してみよう

[【Unity】Compute Shader をスレッドグループ共有メモリで最適化してみよう - YouTube](https://www.youtube.com/watch?v=qoUfZV682fg)

UnityのCompute Shaderでスレッドグループ間でメモリを共有する「Thread Group Shared Memory」を用いた最適化について紹介しています。



画像中の輝度値ヒストグラムを作成するサンプルを例に、愚直な実装とPixを用いたプロファイリング、「Thread Group Shared Memory」を用いた実装の最適化と、愚直な実装との比較とその分析をそれぞれ解説しています。

## Articles

### CEDEC2022 登壇しました

[CEDEC2022 登壇しました｜cluster - メタバースプラットフォーム｜note](https://note.com/cluster_official/n/n54407a864cd8?magazine_key=m2ad487750b4e)

[CEDEC2022-xyx-3Dデータを持ち込めるcross-platformメタバースの技術的挑戦.pdf - Speaker Deck](https://speakerdeck.com/clustervr/cedec2022-xyx-3ddetawochi-tiip-merucross-platformmetabasunoji-shu-de-tiao-zhan)

CEDEC 2022で登壇された「[3Dデータを持ち込めるcross-platformメタバースの技術的挑戦](https://cedec.cesa.or.jp/2022/session/detail/20)」のスライド資料がSpeaker Deckにて公開されています。



メタバースプラットフォーム cluster での技術的挑戦として「3Dデータをどう扱うか」(自動リダクション・配信パイプライン)、「位置情報をどう扱うか」(データ形式と通信でのLOD)の設計事例や、サーバー・クライアント全体のアーキテクチャの変遷、未来における改善余地などについて解説しています。

### Unityでどこまでノーコーディングでカメラワークを実現できるか

[Unityでどこまでノーコーディングでカメラワークを実現できるか – Unity for Pro](https://forpro.unity3d.jp/unity_pro_tips/2022/09/14/3923/)

Cinemachineの基本的な利用方法からCinemachineを用いたカメラワーク設計、Visual Scriptingを用いてノーコディングでカメラワークを実装する方法について解説しています。

### Unity で AOP(アスペクト指向プログラミング) をしよう

[[C#の黒魔術 IL Weaving] Unity で AOP(アスペクト指向プログラミング) をしよう │ Aiming 開発者ブログ](https://developer.aiming-inc.com/programming/aop-and-il-weaving/)

UnityでのAOP（アスペクト指向プログラミング）の活用事例とC#でのAOPの実現方法のためのIL Weaving（ILの後加工）とその実装、Unityでの実現方法についてそれぞれ紹介しています。

### Input Fieldの入力形式を制限する

[【Unity】Input Fieldの入力形式を制限する | ねこじゃらシティ](https://nekojara.city/unity-input-field-content-type)

uGUIのInput Fieldで入力される文字列の形式を制限する方法について紹介しています。



テキストコンポーネントの「Content Type」による入力形式の設定とそれぞれの設定項目の説明、設定例と実行結果、独自の入力形式を定義する「Custom」とそれぞれの設定項目、「Content Type」以外の方法としてスクリプトで入力文字を制限する方法を２手法紹介しています。

### SRP Batcherについて勉強してみる

[【Unity】SRP Batcherについて勉強してみる](https://zenn.dev/r_ngtm/articles/unity-study-srpbatcher)

SRPでドローコールを最適化するためのSRP Batcherについて、その仕組みからSRP Batcherに対応させるためのシェーダーの書き方、バッチングがONとOFF時の処理負荷をCPU負荷とドローコール数での比較について解説しています。

### UnityのAddressablesのRemoteコンテンツ運用 - ContentCatalog

[UnityのAddressablesのRemoteコンテンツ運用 - ContentCatalog - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/unity_addressables_catalog)

AddressablesのContentCatalogについてその役割から中身、ロード方法から運用についてまとめています。



コンテンツのアドレスから実際のデータをロードするために、ContentCatalogがどのようなデータを保持しているのか、ローカルとリモートアセットでそれぞれどのようにContentCatalogがロードされているのかについて、実際のカタログデータを例に解説しています。

## Repositories

### Visual Profiler

[microsoft/VisualProfiler-Unity: The Visual Profiler provides a drop in solution for viewing your mixed reality Unity application's frame rate, scene complexity, and memory usage.](https://github.com/microsoft/VisualProfiler-Unity)

主にMR向けの、Unityアプリケーションのフレームレートやメモリ使用量、シーンの複雑さ（ドローコールや頂点数）をランタイムで表示するためのプロファイリングライブラリ。ターゲットフレームレートに達していないフレームを時系列で確認できます。



プロファイラ自身が邪魔にならないように、GameObjectを作成しない、単一の描画呼び出しでレンダリングするなどの最適化が行われています。

### Procedural Toolkit

[Syomus/ProceduralToolkit: Procedural generation library for Unity](https://github.com/Syomus/ProceduralToolkit)

メッシュからランダムなデータ、ギズモなどの様々なデータをプロシージャルに生成するためのツールキット。



プリミティブな形状や建物や椅子、ローポリな地形などのメッシュ、Signed Distance Fieldやノイズなどのテクスチャ、デバッグ用のギズモ、その他ベクトルやメッシュ操作などのための様々な拡張メソッドを提供しています。

### SpriteDicing

[Elringus/SpriteDicing: Unity extension for lossless sprite texture compression](https://github.com/Elringus/SpriteDicing)

スプライトテクスチャのセットを分割して同一のものを省いたうえでアトラステクスチャとして焼き直すことで、元のスプライトのアセットサイズを削減しつつシームレスに再構築するためライブラリ。



たとえばビジュアルノベルのようなゲームで利用するテクスチャで、キャラクターの表情差分を表現するためにテクスチャの大部分は同じデータが利用されている場合に、大幅なアセットサイズの削減が期待できます。

### Unity Dynamic Lightmaps

[MahmoudKanbar/Unity-Dynamic-Lightmaps: This API allows you to create multiple lightmaps "atmospheres" for the same scene and switch between them in runtime dynamically, or you can make multiple environments as dynamic gameobjects where you can enable, disable or instantiate it at runtime and switch between the previously baked lightmaps "atmospheres" for these environments when needed.](https://github.com/MahmoudKanbar/Unity-Dynamic-Lightmaps)

同じシーン内で複数のライトマップを作成して、実行時に動的に切り替えることのできるAPIを提供するライブラリ。

