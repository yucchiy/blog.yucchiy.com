---
type: "unity-weekly"
title: "Unity Weekly #027"
date: "2021-08-16T09:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

## Five ways to speed up your workflows in the Editor

![](./image21.jpg)

[Five ways to speed up your workflows in the Editor | Unity Blog](https://blog.unity.com/technology/five-ways-to-speed-up-your-workflows-in-the-editor)

- この記事では、エディターでのワークフローを高速化するための方法を５つ紹介しています。
- ショートカットマネジャー、プリセット、シーンの可視設定（ヒエラルキービューの左側の目のアイコン）、シーン上のオブジェクトピッキングの設定、エディタの検索機能およびQuickSerachについてそれぞれ紹介しています。
- この記事は、[70+ tips to increase productivity with Unity 2020 LTSというe-book](https://create.unity3d.com/ebook-improve-workflow)の一部を紹介する記事で、全３回にわたって投稿される予定です。


## Unity で URP 向けのファーシェーダを書いてみた

![](./20210814000146.gif)

[Unity で URP 向けのファーシェーダを書いてみた（毛ポリゴン生成） - 凹みTips](https://tips.hecomi.com/entry/2021/08/12/155948)

[Unity で URP 向けのファーシェーダを書いてみた（動き・アニメーション連携） - 凹みTips](https://tips.hecomi.com/entry/2021/08/14/115756)

- この記事では、UPR向けのファーシェーダを実装する方法について紹介しています。
- 毛を表すポリゴンをジオメトリシェーダで生成することで毛を表現しています。また、減衰バネの運動方程式をもとに毛の揺れを毛の揺れをシミュレーションします。計算にはコンピュートシェーダを用いています。
- ソースコードは[hecomi/UnityFurURP](https://github.com/hecomi/UnityFurURP)にて公開されています。


## Unity Editor Tools: The Place Objects Tool part 2

![](./PlaceObjectsTool-2048x1316.png)

[Unity Editor Tools: The Place Objects Tool part 2 – Bronson Zgeb](https://bronsonzgeb.com/index.php/2021/08/14/unity-editor-tools-the-place-objects-tool-part-2/)

- この記事では、EditorTool APIで独自のオブジェクト配置ツールを実装する方法について解説しています。全２回で構成されていて、前回の記事は[こちら](https://bronsonzgeb.com/index.php/2021/08/08/unity-editor-tools-the-place-objects-tool/)から閲覧できます。
- UIToolkitを用いた配置オブジェクトの選択UIの実装、EditorTool上でのマウスイベントなどの入力イベントの購読方法、オブジェクトを選択済みの場合に、右クリックメニューを拡張して配置オブジェクトとして選択するメニューの作成方法（Context Menu）についてそれぞれ説明しています。
- ソースコードは[bzgeb/PlaceObjectsTool](https://github.com/bzgeb/PlaceObjectsTool)にて公開されています。

