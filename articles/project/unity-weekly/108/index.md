---
type: unity-weekly
title: Unity Weekly 108
description: >-
  2023/02/13週のUnity Weeklyです。UGSまとめ、Crying SunsのVFX、Anime
  Toolbox、Unityプラットフォーム対応状況まとめ、Magica Cloth 2などについてまとめています。
pubDatetime: 2023-02-12T15:00:00.000Z
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity ゲーミングサービスの 2022 年の総括

[Unity ゲーミングサービスの 2022 年の総括 | Unity Blog](https://blog.unity.com/ja/games/unity-gaming-services-2022-year-in-review)

Unity Gaming Services（UGS）で2022年にリリースした製品やサンプルプロジェクトについてまとめています。

### より深く暗い宇宙をデザインする：Alt Shift 『Crying Suns』のビジュアルエフェクト

[より深く暗い宇宙をデザインする：Alt Shift 『Crying Suns』のビジュアルエフェクト | Unity Blog](https://blog.unity.com/ja/games/designing-a-deeper-space-visual-effects-in-alt-shifts-crying-suns)

Alt Shift社の「[Crying Suns](https://store.steampowered.com/bundle/13917/Crying_Suns__Deluxe_Edition/)」の宇宙の描画についてそれぞれのレイヤーと、より宇宙らしさを表現するための「宇宙かすみ」についてそれぞれ解説しています。

### Anime Toolbox の Visual Compositor 拡張 - カスタムエフェクト適用編

[Anime Toolbox の Visual Compositor 拡張 - カスタムエフェクト適用編｜sin@unity｜note](https://note.com/sin_unity/n/n0439ace15b1d)

Visual Compositorの拡張ノードを制作する手順と、例としてグレースケールに変換するノードを制作する方法を解説しています。

### GLES2サポート終了？Unityプラットフォーム最新情報！【2023年・春版】

[GLES2サポート終了？Unityプラットフォーム最新情報！【2023年・春版】- YouTube](https://www.youtube.com/watch?v=289yVbbyeSk)

Unityの2023年におけるプラットフォームサポート状況について、AndroidとWebGL1におけるGLES2、UnityEditor上でのWindows 7のサポート終了とDirextX 12の正式サポートをそれぞれまとめています。

## Articles

### async/awaitのキャンセル処理まとめ

[【C#】async/awaitのキャンセル処理まとめ - Qiita](https://qiita.com/toRisouP/items/60673e4a39319e69fbc0?utm_campaign=post_article&utm_medium=twitter&utm_source=twitter_share)

C#のasync/awaitのキャンセル処理について、意識すべきキャンセル処理の観点からasync/awaitのキャンセル処理の実装、キャンセル処理と例外処理の併用の際に気をつけるべき点などがまとめられています。

### UPMパッケージのテストワークフロー事例

[UPMパッケージのテストワークフロー事例 - やらなイカ？](https://www.nowsprinting.com/entry/2023/02/12/050619)

UPMパッケージをGitHub Actions上でテストするためのワークフローを、空プロジェクト作成から対象パッケージの依存解決とテスト実行、カバレッジ集計、複数バージョンでのUnity実行、Slack通知などまとめています。

### UniTask 処理のタイムアウトの書き方 まとめ

[UniTask 処理のタイムアウトの書き方 まとめ - Qiita](https://qiita.com/toRisouP/items/69dc07ba8d1c81b0e7ac)

UniTaskでタイムアウト処理を記述する際の方法を6パターンと、その中で推奨する処理を2パターン紹介しています。

### Energy Shield Hologram in Unity Shader Graph

[Energy Shield Hologram in Unity Shader Graph](https://danielilett.com/2023-02-09-tut6-3-energy-shield/)

Energy Shield Hologram（詳細はリンクにて）をShader Graphで実装する方法について解説しています。

また、盾にあたったときのVFXエフェクトもおまけとして紹介しています。

### レンダリングパイプラインをURPに移行した話

[レンダリングパイプラインをURPに移行した話 │ Aiming 開発者ブログ](https://developer.aiming-inc.com/unity/post-8722/)

プロジェクトのレンダリングパイプラインをBiRPからURPに移行することの負荷軽減などのメリットや移行に際して対応したシェーダーやポストエフェクト、スクリプティング、ライトの光の色の調整などについてまとめています。

### 流行りのメタバースでよく見るアバター着せ替えシステムを作ってみる

[【Unity(C#)】流行りのメタバースでよく見るアバター着せ替えシステムを作ってみる - Qiita](https://qiita.com/OKsaiyowa/items/cf63e59bc659d3b6cdd8)

アバターの衣装きせかえシステムを、衣装にボーンを持たせて、着用時にアバター側の指定のボーンに設定し直すことで実現する方法を紹介しています。

### Input Systemで連打防止を実現するInteraction 

[【Unity】Input Systemで連打防止を実現するInteraction | ねこじゃらシティ](https://nekojara.city/unity-input-system-prevent-button-mashing)

Input Systemの[Interaction](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/manual/Interactions.html)を用いて、ボタン連打を防止する機能の実装について紹介しています。

### Localizing Unity Games As An Indie Dev

[Localizing Unity Games As An Indie Dev | BJ Malicoat](https://www.bjmalicoat.com/projects/localizingunitygames)

インディーゲームにおけるローカライゼーションについて、Google spreadsheet上での翻訳側のデータの用意から、翻訳データをUnityで扱えるデータとしてエクスポートする方法、フォントアセットの生成、ゲーム側での文字列の表示などについてまとめています。

また、ストアのローカライゼーション対応のために複数言語・複数解像度でスクリーンショットを取る機能や翻訳のアウトソーシングやそのためのローカライゼーションガイドなどについても言及しています。

### Adding life to a simple 2D scene

[Adding life to a simple 2D scene – Echoes of Somewhere](https://echoesofsomewhere.com/2023/02/04/adding-life-to-a-simple-2d-scene/)

3D空間上に2Dスクリーンを投影するためのShaderGraphの構築やパーティクルエフェクトのワークフロー、キャラクターのマテリアルにビデオレイヤーを追加する方法などについてまとめています。

### 【Addressable】複数のAsyncOperationHandleを一つに結合して取り扱う方法

[【Unity】【Addressable】複数のAsyncOperationHandleを一つに結合して取り扱う方法 - LIGHT11](https://light11.hatenadiary.com/entry/2023/02/06/191548)

Addressablesの`ResourceManager.CreateGenericGroupOperation`を用いて複数の`AsyncOperationHandle`を1つに統合して扱う方法や、統合を直列・並列に行う方法についてそれぞれまとめています。

### ShaderGraphで拡散反射/Phong鏡面反射/Bling-Phong鏡面反射を作成する

[【Unity】ShaderGraphで拡散反射(Diffuse)を作成する - 武0武/blog](https://bravememo.hatenablog.com/entry/2023/02/06/120000)
[【Unity】ShaderGraphでPhong鏡面反射を作成する - 武0武/blog](https://bravememo.hatenablog.com/entry/2023/02/07/073000)
[【Unity】ShaderGraphでBlinn-Phong鏡面反射を作成する - 武0武/blog](https://bravememo.hatenablog.com/entry/2023/02/08/073000)

ShaderGraphで、拡散反射（Diffuse）・Phong鏡面反射・Bling-Phong鏡面反射をそれぞれ実現するためのノード実装について紹介しています。

### Inspectorで参照を設定するときにUnitySearchを使う方法

[【ハルシオンブログ】Inspectorで参照を設定するときにUnitySearchを使う方法 - ハルシオンシステムの気ままBlog](http://halcyonsystemblog.jp/blog-entry-953.html)

Inspectorでオブジェクト参照を設定するときのポップアップを、ObjectPickerではなくUnitySearchを利用して設定する方法について紹介しています。

### Unity 2021.3.0f1でQuest開発している時に遭遇したUIが消える不具合について

[Unity 2021.3.0f1でQuest開発している時に遭遇したUIが消える不具合について - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/2023/02/10/174645)

Unity 2021.3.0f1上でQuest2のアプリケーションを開発する際に、スクロールビューをドラッグするとそのコンテンツが消えるという不具合の紹介とその原因の特定、対応バージョンとその具体的な対応方法をソースを追ってまとめています。

### PackageManagerの表示が崩れてしまう場合の対処法(Mac, Unity2020.3.5f1)

[【Unity】PackageManagerの表示が崩れてしまう場合の対処法(Mac, Unity2020.3.5f1) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2023/02/09/120000)

macOSでUnityEditorを開いたときに、文字表示が壊れる不具合の対処方法について紹介しています。

### Blenderの流体シミュレーションをVR（Quest2）で動かす

[Blenderの流体シミュレーションをUnityで動かす](https://zenn.dev/dami/articles/92b6177d1ff4be)
[【Unity】流体シミュレーションをVR（Quest2）で動かす](https://zenn.dev/dami/articles/56fa752d69c23c)

Blenderで作成した流体シミュレーションの結果をAlembicフォーマットで出力してUnityで取り込んで再生するための方法と、Quest2（Android）で再生するために、AlembicフォーマットをVAT（Vertex Animation Texture）に変換して再生する方法についてそれぞれ紹介しています。

### TextMeshProで絵文字をきちんと表示する

[TextMeshProで絵文字をきちんと表示する - Qiita](https://qiita.com/K0uhe1D/items/93ca4a397a16543f6f4c)

絵文字のUnicodeでの表現についての解説と、TextMeshProで絵文字を表示するための方法についてまとめています。


### Device Simulatorを使ってるかの判定と、何のデバイスやOSを使ってるか取得する方法

[Device Simulatorを使ってるかの判定と、何のデバイスやOSを使ってるか取得する方法【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/UnityEngine_Device?utm_source=feed)

Device Simulatorの利用有無やDevice Simulatorの利用情報込みでデバイス情報を取得するためのAPIについてそれぞれ紹介しています。

### アセットを複製した時にファイル名の連番が正しく計算されるようにする方法

[【Unity】アセットを複製した時にファイル名の連番が正しく計算されるようにする方法 - コガネブログ](https://baba-s.hatenablog.com/entry/2023/02/09/090000?utm_source=feed)

アセットを複製した際の連番の割り振りのルールを調整する方法について紹介しています。

## Repositories

### Magica Cloth 2 

[Magica Cloth 2 | Physics | Unity Asset Store](https://assetstore.unity.com/packages/tools/physics/magica-cloth-2-242307)

国産の高機能かつ高性能な[Magica Cloth](https://assetstore.unity.com/packages/tools/physics/magica-cloth-160144)の後続バージョンがリリースされました。

システムの最適化によるコンポーネント設定の改善、エッジコリジョン・バックストップ・セルフコリジョンなどの新しいコリジョンの追加、TransformとMesh両方のシミュレーションなどの機能が追加されています。

ただし、Ver1.Xとの互換性はありません。

### Unity Figma Bridge

[simonoliver/UnityFigmaBridge: Easily bring your Figma Documents, Components, Assets and Prototypes to Unity](https://github.com/simonoliver/UnityFigmaBridge?)

Figmaのドキュメントやコンポーネント、アセット、プロトタイプをUnity UIとして取り込むライブラリ。

### Unity Android Runtime Permissions

[yasirkula/UnityAndroidRuntimePermissions: A native Unity plugin to handle runtime permissions on Android M+](https://github.com/yasirkula/UnityAndroidRuntimePermissions?)

AndroidのRuntime PermissionsをUnityで扱うためのライブラリ。

### Alembic to VAT (Vertex Animation Texture) converter for Unity

[Gaxil/Unity-AlembicToVAT: Alembic to VAT (Vertex Animation Texture) mini tool](https://github.com/Gaxil/Unity-AlembicToVAT)

UnityのAlembicをVATに変換するライブラリ。

### Unity Refactor Tools

[acoppes/unity-refactoring-tools: Code + examples for Refactoring Data stored in Unity Prefabs, Scenes and other Assets](https://github.com/acoppes/unity-refactoring-tools?)

プロジェクト上のプレハブやシーン、その他のアセットをリファクタリングするためのライブラリ。

### Lucid Editor

[AnnulusGames/LucidEditor: Powerful Editor Extensions for Unity](https://github.com/AnnulusGames/LucidEditor)

Inspector拡張用の属性と独自拡張、SerializeReferenceのインターフェイスと抽象クラスを選択、EditorGUIを拡張する機能などを含む、Unityのエディター拡張ライブラリ。
