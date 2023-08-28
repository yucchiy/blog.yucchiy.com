---
type: "unity-weekly"
title: "Unity Weekly 136"
description: "2023/08/28週のUnity Weeklyです。Unity 2023.3、ボリュームレンダリング、TestRunnerApi、Custom SRPなどについて取り上げています。"
tags: ["Unity Weekly","Unity"]
date: "2023-08-28T00:00:01"

---

2023/08/23〜2023/08/25に [CEDEC 2023](https://cedec.cesa.or.jp/2023)が開催されました。Unityに関連する公演も数多くありました。

## Unity Officials

### Unity 2023.3 coming April 2024 with updates for graphics and performance

[Unity 2023.3 coming April 2024 with updates for graphics and performance | Unity Blog](https://blog.unity.com/engine-platform/2023-3-coming-april-2024-with-updates)

Unity 2023のLTSに関するアナウンス記事です。

Unity 2023は現状のUnity LTSのリリースサイクルのように .2が出たあとにLTSがリリースされるのではなく、2023.3がテックストリームにリリースされ、そのあと2023 LTSがリリースされる予定とのことです。 2023.3は 2024/04 頃に、LTSは 2024年の終わり頃にリリースされる予定です。

この記事では、そのようなリリースサイクルに変更された経緯や、Unity 2023.3 のアップデート内容の概要について紹介しています。

### How creators launch and scale multiplayer games with Unity

[How creators launch and scale multiplayer games with Unity | Unity Blog](https://blog.unity.com/games/how-creators-launch-scale-multiplayer-games-with-unity)

[Apex Legends](https://unity.com/case-study/apex) のようなAAAタイトルから [Among Us](https://unity.com/case-study/innersloth-among-us) のようなインディーズ作品まで、Unity Gaming Servicesのゲームサーバーホスティングを利用したマルチプレイヤーのスケール方法について、その事例を紹介しています。

## Articles

### Unity でボリュームレンダリングをしてみる - vol.6 ボリュームの内部

[Unity でボリュームレンダリングをしてみる - vol.6 ボリュームの内部 - 凹みTips](https://tips.hecomi.com/entry/2023/08/27/185303)

ボリュームレンダリングにおいて、ボリュームの内部に（ポリゴンの内部に）カメラが入ったときに、カリングされずに正しく描画する方法について解説しています。

ブログ著者のボリュームレンダリングに関する記事は、下記リンクより確認できます。

- [Unity でボリュームレンダリングをしてみる - vol.5 遮蔽とループの最適化 - 凹みTips](https://tips.hecomi.com/entry/2020/05/27/012539)
- [Unity でボリュームレンダリングをしてみる - vol.4 プロシージャル - 凹みTips](https://tips.hecomi.com/entry/2020/04/26/185548)
- [Unity でボリュームレンダリングをしてみる - vol.3 色付け / シェーディング - 凹みTips](https://tips.hecomi.com/entry/2018/01/28/134115)
- [Unity でボリュームレンダリングをしてみる - vol.2 レイの衝突判定 - 凹みTips](https://tips.hecomi.com/entry/2018/01/08/211937)
- [Unity でボリュームレンダリングをしてみる - vol.1 データ表示 - 凹みTips](https://tips.hecomi.com/entry/2018/01/05/192332)

### Unity BatchModeでテストを実行する

[Unity BatchModeでテストを実行する - Qiita](https://qiita.com/toRisouP/items/9b8c6e0a35fb8fe71fea)

[TestRunnerApi](https://docs.unity3d.com/Packages/com.unity.test-framework@1.1/manual/reference-test-runner-api.html) を用いたUnityのBatchMode経由でテストの実行方法の紹介と、このAPIを利用する際の注意点（ `ExecutionSettings.runSynchronously` の扱いや テスト対象の限定方法 ）、[async/awaitを用いる方法などについて](https://qiita.com/toRisouP/items/5f5807097a5d44be672f)も言及しています。

### Custom SRP 2.0.0

[Custom SRP 2.0.0](https://catlikecoding.com/unity/custom-srp/2-0-0/)

Render Graphを用いた独自のSRP（Scriptable Render Pipeline）を実装する方法について解説しています。

### How to create a Space Portal with HLSL in Unity

[How to create a Space Portal with HLSL in Unity | Jettelly](https://www.jettelly.com/blog/how-to-create-a-space-portal-with-hlsl-in-unity/)

Space PortalをHLSLシェーダーを記述して実装する方法について紹介しています。

### Input SystemのInteractive RebindingをUniTaskで実装する

[【Unity】Input SystemのInteractive RebindingをUniTaskで実装する | ねこじゃらシティ](https://nekojara.city/unity-input-system-await-rebinding)

Input SystemのInteractive Rebindingを用いてユーザーからの特定の入力を待つ実装を、UniTaskを用いてasync/awaitで記述するための方法について解説しています。

### 透明な板ポリゴンに影を落として2D背景に3Dキャラを馴染ませる

[[Unity]透明な板ポリゴンに影を落として2D背景に3Dキャラを馴染ませる - Qiita](https://qiita.com/flankids/items/52eae45305464926f91e)

3Dキャラクターの影を透明なポリゴン下に落とすことで、2Dで表現される背景となじませるテクニックの紹介とその実装方法について紹介しています。

### タップやドラッグなどのUIの入力処理をスクリプトから実行する【EventSystems】

[【Unity】タップやドラッグなどのUIの入力処理をスクリプトから実行する【EventSystems】 - うどんてっくメモ](https://myudon.hatenablog.com/entry/2023/08/27/114026)

uGUIのタップやドラッグ処理を、 `EventSystems.ExecuteEvents` を用いてスクリプト経由で実行する方法について紹介しています。

### WebGLで動画再生のフォールバックを実現する

[【Unity】WebGLで動画再生のフォールバックを実現する | ねこじゃらシティ](https://nekojara.city/unity-webgl-video-fallback)

WebGLにおいて複数のフォーマットの動画から再生可能なものを再生する実装を、ブラウザでのサポートを  `HTMLMediaElement.canPlayType` を用いたチェック、 `VideoPlayer.errorReceived` のハンドリングなどを用いて実現する方法について紹介しています。

### エディタ拡張でPrefabStageUtilityを用いてPrefab ModeでPrefab Assetを開いたりPrefab stageを取得したりする

[【Unity】エディタ拡張でPrefabStageUtilityを用いてPrefab ModeでPrefab Assetを開いたりPrefab stageを取得したりする - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/08/21/120000)

Unity 2021.2で追加された `PrefabStageUtility` を用いて、現在プレハブモードで開いているプレハブアセットを取得したり、プレハブアセットをプレハブモードで開く方法など紹介しています。