---
type: "unity-weekly"
title: "What's new for 2D creators in Unity 2021.2 - Unity Weekly #048"
date: "2021-12-27T10:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

## Unity 2021.2 の 2D クリエイター向け新機能

![](./00.png)

[Unity 2021.2 の 2D クリエイター向け新機能 | Unity Blog](https://blog.unity.com/ja/games/whats-new-for-2d-creators-in-unity-20212)

Unity 2021.2で追加された、主に2D向けの機能として下記を紹介しています。

- 2D Animation
    - スキニングエディタのUX向上、Sprite Influenceで選択ボーンの影響を与えるスプライトを検出できるように。機能についての議論は[こちらのフォーラム](https://forum.unity.com/threads/2d-animation-7-0-released-for-unity-2021-2.1187770/)で確認できる。
- 2D PSD Importer
    - Photoshopファイルのレイヤー名に対してSprite Rectをマッピングする機能が追加
    - Photoshopファイルのレイヤーグループ内のレイヤーを折りたたむと、複数レイヤーまとめてUnityの1スプライトを生成できるように → Photoshop内での統合が不要に
- Universal Render Pipeline（URP）の2Dグラフィックス
    - 2D URP プロジェクトテンプレートが追加され、URPの2D Rendererに合わせた2Dプロジェクトをすぐに作成可能に
    - Shader Graphに 2D Light Textureが追加され、Sprite Custom Litマテリアルと組み合わせることで2Dライトとの相互作用を調整する必要のあるシェーダーの最終出力をカスタマイズできるように。
    - 詳細は[こちらのフォーラム](https://forum.unity.com/threads/2d-graphics-urp-12-released-for-unity-2021-2.1187761)で
    - 2D Rendererのサンプルは[こちら](https://github.com/Unity-Technologies/2d-renderer-samples/tree/21.2)から確認できる
- 2D Pixel Perfect Camera
    - 設定方法が刷新されて、オプション名が Crop Frame と Grid Snapping に変更された
- タイルマップ
    - パフォーマンスの改善
    - APIの改善
        - `TileChangeData` 構造体に `SetTile/SetTiles` が追加
        - `GetAnimationFrameCount` 、 `GetAnimationFrame` 、 `SetAnimationFrame` などのアニメーションタイミングを調整するAPIの追加
        - `GetTilesRangeCount` と `GetTilesRangeNonAlloc` APIでタイルマップの指定された開始位置と終了位置の間の位置とタイルを決定できる
- 2D物理
    - Custom Collider 2Dでは円やカプセル、多角形、エッジなどのプリミティブ形状を組み合わせて形状を生成できる
    - Physics Shape Group 2Dではプリミティブ形状をグルーピングできる
    - この2つの機能は [2D Physics Samples](https://github.com/Unity-Technologies/PhysicsExamples2D/tree/master/Assets/Scenes/Colliders) から確認できる
- 2Dグラフィックスサンプル
    - [Lost Crypt](https://assetstore.unity.com/packages/essentials/tutorial-projects/lost-crypt-2d-sample-project-158673) と [Dragon Crashers](https://assetstore.unity.com/packages/essentials/tutorial-projects/dragon-crashers-2d-sample-project-190721) がアップデートされて、2021.2で動作するように

# Articles

## 【Unity】GPUで3Dモデルをリアルタイムにボクセル化する

![](./01.png)

[【Unity】GPUで3Dモデルをリアルタイムにボクセル化する - Qiita](https://qiita.com/seyakara/items/b635939f6c6106a15d40)

3Dモデルをリアルタイムにボクセル化するための実装を紹介しています。

低解像度なレンダーテクスチャに対象モデルを平行投影して、1ピクセルを1ボクセルとしてボクセルモデルを配置することでボクセル化を実装しています。

レンダーテクスチャからボクセル情報生成までのシェーダーの実装からボクセル描画をGPUインスタンシングで行う方法についてそれぞれ紹介しています。

また、上記の方法をそのまま行うと発生する穴あき問題とその対処方法についても触れています。

## AnimationEventで地面に合わせた足音を鳴らす

[AnimationEventで地面に合わせた足音を鳴らす](https://zenn.dev/satoken_sp/articles/55153433c621bf)

足が着地したときの効果音再生の実装を、着地タイミングをAnimationEventで組み込んでおき、その情報をもとにUnity標準のAudioで再生する方法について紹介しています。

## Puerts を使って TypeScript で Unity する方法

[Puerts を使って TypeScript で Unity する方法 - Qiita](https://qiita.com/katai5plate/items/8ef3e8a29565af928f00)

Tencentが公開しているTypeScriptからUnityを操作できる [Puerts](https://github.com/Tencent/puerts) について、基本的な設定方法から使い方、使っていく上でのトラブルシューティングについてそれぞれ紹介しています。

## Unity Asset "All Platforms Save"の使い方 (和訳)

[Unity Asset "All Platforms Save"の使い方 (和訳) - Qiita](https://qiita.com/ebitaigames/items/a78d221333ec0b666b04)

Unity上でセーブ・ロード処理を行う [All Platforms Save](https://assetstore.unity.com/packages/tools/integration/all-platforms-save-115960) アセットについて紹介しています。

保存するセーブデータの型定義から基本的なセーブ・ロード方法、データの削除方法についてそれぞれ解説しています。

## UniTaskに対応したStateMachine、UniTaskStateMachineを公開しました！

[UniTaskに対応したStateMachine、UniTaskStateMachineを公開しました！ - Qiita](https://qiita.com/KyoheiOkawa/items/5470febb3e8d2b349e97)

ステートマシンの各種イベントの同期待ちを UniTaskで行える [UniTaskStateMachine](https://github.com/k-okawa/UniTaskStateMachine) について紹介しています。

## ちょっと便利になるUnityEditor Attribute

[ちょっと便利になるUnityEditor Attribute](https://zenn.dev/mattak/articles/190597dc279fb6)

RangeやHeader、ColorUsageなど、インスペクター表示を便利にする、UnityEditor標準のAttributeについて10個紹介しています。

## Unity で Dear ImGui する

[Unity で Dear ImGui する](https://zenn.dev/ousttrue/books/71e5e14aaf1026)

UnityでDear ImGui（Unity標準のIMGUIではない）を利用するための [uimgui](https://github.com/psydack/uimgui) について導入方法からウインドウの表示、フォントの変更方法などについてそれぞれ紹介しています。

## ARFoundation×CloudVisionAPIで現実空間のオブジェクトにタグ付けする

[ARFoundation×CloudVisionAPIで現実空間のオブジェクトにタグ付けする](https://zenn.dev/nekomimi_daimao/articles/d803fa5fa010c2)

カメラに映る情報をCloudVisionAPI経由で物体認識し、さらにARFoundationで認識した情報と合わせて、現実世界のオブジェクトをタグ付け実装する方法について紹介しています。

## macroのカジュアル多用は危険 ⚠️

[macroのカジュアル多用は危険 ⚠️](https://zenn.dev/mattak/articles/3ef65fd8c9db63)

C#などのマクロ（ `#if` など）を多用しすぎると、どのようなデメリットが発生するかについての紹介と、それを解決するための代替案についてそれぞれ紹介しています。