---
type: "unity-weekly"
title: "Unity Weekly #033"
date: "2021-10-05T09:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

# Unity Official

## プログラマーのワークフローを高速化しよう

![](./AR_BlogHeader_1230X410_A.jpg)

[プログラマーのワークフローを高速化しよう | Unity Blog](https://blog.unity.com/ja/technology/speed-up-your-programmer-workflows)

- この記事では、プログラマーの作業効率を向上させるための機能および設定の紹介しています。
- Enter Play Mode設定によるドメイン再ロードおよびシーン再ロードの短縮や注意点、UnityによるC#アセンブリとAssembly Definitionによるコンパイルのコントロール、Addressablesを用いたコンテンツ管理の簡略化、スクリプトデバッグのヒントについてのヒントなどを紹介しています。

##

Unityをもっと使いやすく！Unityカイゼン委員会！

![](./Screenshot_2021-10-05_030239.png)

[Unityをもっと使いやすく！Unityカイゼン委員会！ - Unityステーション - YouTube](https://www.youtube.com/watch?v=uhxZQ9jY1GU)

- この動画では、最近のUnityで追加されたエディターの機能改善について紹介しています。
- 動画で紹介された機能や改善項目の個人メモを共有します。
    - Reorderable Listの改善
        - `NonReorderable`のインスペクタの改善
    - インスペクター内で数式表現が利用できる
        - https://docs.unity3d.com/2021.2/Documentation/Manual/EditingValueProperties.html
    - 細かな調整
        - スケーリングのリンクスイッチ
        - テクスチャインポート設定にオーバーライドがある場合に青線
        - `[InspectorOrder]` アトリビュート
            - InspectorSort.ByValue/Name
            - InspectorSortDirection.Ascending / Descending
            - InspectorName Attribute
        - 巨大テキストファイルの表示改善
        - コピペ機能強化
            - インスペクタの情報をほぼなんでもコピペできるようになった
            - 平文テキスト化してシステムクリップボード上で行われる
                - 単純型はそのまま
                - ベクトルは `Vector3(1, 2, 3)` のようになる。
                - 回転はクオータニオンとオイラー角のいづれかが選べる
                - カラーはHexコード
                - 複雑な型（というか上記などに当てはまらない型）はJSONになる
                - プロパティパスやオブジェクトGUIDのコピーCopy Property Pathでプロパティのパスがコピーできる
                    - エディタスクリプトで `SerializedObject` の RelativePathにわたすパラメータをこれで作ると便利
                - Transformのコピペメニューを階層化して整理
        - プレビュー機能の強化
            - Texture3Dのプレビュー
                - ボリュームビュー、スライスビュー、SDFビュー
            - Meshのプレビューが大幅に強化
                - 頂点フォーマット情報
                - サブメッシュ視覚化
                - UVチェッカー
                - 法線・接線ベクトル視覚化
            - ブレンドシェイププレビュー
            - Cubemap Arrayのプレビュー
            - マテリアルプレビュー
                - メッシュの選択情報を記憶するように
    - ヒエラルキービューの改善
        - 新規ゲームオブジェクトの作成時、名前変更状態から始まる
        - Default Parent: 指定しておくと、新規生成するゲームオブジェクトの親がこのゲームオブジェクトになる
        - 選択中のゲームオブジェクトの数が表示される
        - 複製時の命名規則がEditor Settingsで設定可能
    - 親子関係のコンテキストメニューの改善
        - ドラック＆ドロップの改善
        - Make Parent: 複数オブジェクトを選択して「Make Parent」すると、一番下のオブジェクト（？）を親としてそれ以外のオブジェクトを子要素にする
        - Clear Parent: ゲームオブジェクトがルートに移動する
        - Select Children: あるゲームオブジェクトとすべての子要素を選択済みにする
        - Paste as Child: ゲームオブジェクトのペーストを、選択済みのゲームオブジェクトの子要素としてペーストする
    - コンテキストメニューから下記機能が呼び出し可能に
        - Move To View
        - Aligh With View
        - Aligh View To Selected
    - ゲームビュー改善
        - 解像度リストを更新して、「4:3」や「5:4」などあまり使われないものを外して、QHDや4K UHDなど最近使われるものを追加
        - Play Unfocused追加: ゲーム再生してもGame Viewにフォーカスされない設定
    - コンソールビュー改善
        - Clear on Recompileオプション追加
        - 複数行選択が可能に
        - Monospaceフォント: 等幅フォントが利用可能に


# Articles

## Unity で DICOM 画像をレンダリングしてみる

![](./20210927001311.gif)

[Unity で DICOM 画像をレンダリングしてみる - 凹みTips](https://tips.hecomi.com/entry/2021/09/27/002049)

- この記事では、DICOM（Digital Imaging and COmmunications in Medicine）というCTやMRIなどのデータを保存する標準規格をボリュームレンダリングするための方法を紹介しています。Githubのレポジトリは[こちら](https://github.com/hecomi/UnityDICOMVolumeRendering)。
- アセットインポーターでdcmフォーマットのデータから複数枚の `Texture2D` をインポートして、さらにツールで `Texture3D` を生成、 [ボリュームレンダリング](https://tips.hecomi.com/entry/2018/01/28/134115)で `Texture3D` を描画しています。dcmフォーマットの `Texture2D` 化には [fo-dicom](https://github.com/fo-dicom/fo-dicom)（Unity Asset Storeは[こちら](https://assetstore.unity.com/packages/tools/integration/fo-dicom-60902)）を用いています。

## 【Unity VFXGraph】稲妻を作ってみた]

![](./Screenshot_2021-10-05_030828.png)

[【Unity VFXGraph】稲妻を作ってみた](https://zenn.dev/r_ngtm/articles/visual-effect-graph-lightning)

- この記事では、VFXGraphを用いて稲妻のようなエフェクトを実装する方法について紹介しています。
- 稲妻を表現する方法をステップ・バイ・ステップで解説しています。ラインの生成からラインをうねらせる、根本の揺らぎの抑制、太さにムラをもたせる、点滅して発光感を強める方法についてそれぞれどのような方法で実装しているか、VFXGraphでどのように実現しているかを説明しています。


## Version Numbering for Games in Unity and Git

![](./1_RS3WsZCcYHGNFeIlGqxwZQ.gif)

[Version Numbering for Games in Unity and Git | by Edward Rowe | Red Blue Games](https://blog.redbluegames.com/version-numbering-for-games-in-unity-and-git-1d05fca83022)

- この記事では、[Sparklite](http://redbluegames.com/games/sparklite/) におけるバージョン管理方法について紹介しています。Sparkliteではセマンティックバージョニングを採用していますが、gitを用いてバージョン管理を行い、Unityプロジェクトへのバージョンの反映は自動化されています。
- バージョニングのプラクティスとしてSemantic Versioning（v1.0.0のようなmajor.minor.patchの形式を取るバージョン）とDate Versioning（YYYY.MM.DDのような形式を取るバージョン）とそれぞれのメリットの解説、セマンティックバージョニングを採用した理由およびバージョン更新の基準、エディタコードでビルド時にGitの情報をもとに自動で `ProjectSettings.bundleVersion` を設定する方法について紹介しています。


## The Command pattern with Scriptable Objects

![](./Commands.png)

[The Command pattern with Scriptable Objects – Bronson Zgeb](https://bronsonzgeb.com/index.php/2021/09/25/the-command-pattern-with-scriptable-objects/)

この記事では、Unityでコマンドパターンの実装する方法と実装したコマンドパターンをScriptableObjectによりコマンドをデータ化することで例えばプレイヤーの利用できるスキル一覧をコマンドとして保持する方法について紹介しています。


## 【Unity】Unity2020.2からTexture2DArrayやTexture3Dがインポート設定で作れるようになってた

![](./20210816195716.png)

[【Unity】Unity2020.2からTexture2DArrayやTexture3Dがインポート設定で作れるようになってた - LIGHT11](https://light11.hatenadiary.com/entry/2021/09/27/195737)

この記事では、Unity 2020.2で利用できるようになったTexture2DArrayおよびTexture3Dがインポート設定について紹介しています。
