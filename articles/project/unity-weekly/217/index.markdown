---
type: "unity-weekly"
title: "Unity Weekly 217"
description: "2025/04/07週のUnity Weeklyです。GDC 2025、Nintend Switch 2、Unityエディタ拡張完全に理解した勉強会資料公開 などについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2025-04-08T00:00:01"
---

## Unity Officials

### Unity 2025 GDC ロードマップ

[【日本語字幕】Unity 2025 GDC ロードマップ | Unity Learning Materials](https://learning.unity3d.jp/10729/)

GDC 2025で発表されたUnity 2025のロードマップを日本語字幕付き動画が公開されています。

### GDC 2025 Recap: Trends, Engine Roadmap, & Celebrating Games

[GDC 2025 Recap: Trends, Engine Roadmap, & Celebrating Games | Unity](https://unity.com/ja/blog/gdc-2025-recap)

GDC 2025でUnityが発表した内容をまとめた記事です。Unity6のロードマップやこのバージョンにおいての対応項目の優先度、Independent Game Festivalのアワードの受賞作品などが紹介されています。

### Unity Announces Development of Nintendo Switch 2 Launch Title Survival Kids in Close Partnership with KONAMI

[Unity Announces Development of Nintendo Switch 2 Launch Title Survival Kids in Close Partnership with KONAMI](https://unity.com/news/unity-announces-development-of-nintendo-switch-2-launch-title-survival-kids-in-close-partnership-with-konami)

UnityがNintendo Switch 2のローンチタイトル「Survival Kids」を自社開発し、コナミから開発することを発表しました。

このタイトルではURPや、Netcode・Lobby・Relayなどを用いたマルチプレイヤーが実装されていることが発表されています。


## Slides

### Unity エディタ拡張完全に理解した 勉強会

[Unity エディタ拡張完全に理解した 勉強会 - connpass](https://unity-fully-understood.connpass.com/event/347805/)

2025/04/04に「Unity エディタ拡張完全に理解した 勉強会」が開催されました。

この勉強会の登壇資料や、有志によるまとめ記事が公開されています。

- [WindowActionを使って 「あの場所」にボタンを作る - Google Slides](https://docs.google.com/presentation/d/1keSwXofyZF18a6__sJfV2TvUrmTe8dtkNNMlgZyGr54/edit#slide=id.p)
- [スキル演出のプレビューをエディタの右下でやってみた！ - Google Slides](https://docs.google.com/presentation/d/e/2PACX-1vSpM4a7NDUqRg__AbRhYXgI7JYo7xxYOVFhI8Qa3bE8V_BTR6Z0VQsv-h9bFITBoMymt3jRA9Do5sWu/pub?start=false&loop=false&delayms=3000&slide=id.p)
- [Experimentalでも使いたい！GraphView実践導入Tips - Speaker Deck](https://speakerdeck.com/th1209/experimentaldemoshi-itai-graphviewshi-jian-dao-ru-tips)
- [Experimentalでも使いたい！ Unity GraphViewを実践で導入するための解説記事 #C# - Qiita](https://qiita.com/th1209/items/f27ee8da7783adce3552)
- [【勉強会レポ】: Unity エディタ拡張完全に理解した 勉強会 - Raspberlyのブログ](https://raspberly.hateblo.jp/entry/UnityEditorExtensionComplete)


## Articles

### NRandom - .NET / Unity向けの擬似乱数生成ライブラリ

[【C#】NRandom - .NET / Unity向けの擬似乱数生成ライブラリ](https://zenn.dev/nuskey/articles/59eb9fcf3a9f75)

ブログの著者が開発する「RandomExtensions」のv2として開発されている「[NRandom](https://github.com/nuskey8/NRandom)」について、基本的な使い方を前身のライブラリからの差分にも言及しつつ紹介しています。

### シェーダーでひびを入れる［その4：PN-Triangles編］

[【Unity】シェーダーでひびを入れる［その4：PN-Triangles編］](https://zenn.dev/lilytechlab/articles/1b0772f6175c34)

シェーダーでひび表現を実装する方法を検討するシリーズ記事の第4回目で、今回の記事ではテセレーションシェーダーにおけるポリゴン分割の際にPN-Trianglesを適用する方法や、その効果について解説しています。

### ゲームグラフィックス入門

- [【Unity】ゲームグラフィックス入門 前編｜G2 Studios株式会社](https://note.g2-studios.net/n/n77f94111694c)
- [【Unity】ゲームグラフィックス入門 後編｜G2 Studios株式会社](https://note.g2-studios.net/n/n6a4aac663da3)

G2 Studiosの新卒研修で実施しているグラフィックス講義の内容を、前後半に分けて公開しています。

グラフィックスエンジニアの立ち位置やシェーダーのの基礎、グラフィック表現においてシェーダー開発が必要なケースから実装方法、各種グラフィック表現についてそれぞれ解説しています。

### RenderGraphを使ったURPのカスタム例 ―Custom Bloom Passの作成―

[【Unity】RenderGraphを使ったURPのカスタム例 ―Custom Bloom Passの作成―](https://zenn.dev/yohawing/articles/1b348e5455a080dbb8eefea6512ef7f5)

独自のブルーム表現の実装を題材に、RenderGraph環境下でURPのカスタムパスの実装方法について解説しています。

### LoadAction と StoreAction の最適化について

[LoadAction と StoreAction の最適化について - シェーダーTips](https://ny-program.hatenablog.com/entry/2025/04/04/133758)

RenderBufferLoadActionやRenderBufferStoreActionを用いて、不要なデータを転送しないようにする最適化手法について紹介しています。

### Hex Map 4.0.0

[Hex Map 4.0.0](https://catlikecoding.com/unity/hex-map/4-0-0/)

Catlike Codingの「Hex Map」シリーズ記事で、この記事ではいままで実装してきたHex MapのマップエディターをUI Toolkitを用いて実装する方法が紹介されています。

### 仮想マウスの実装で詰まった点

[[Unity, InputSystem] 仮想マウスの実装で詰まった点](https://zenn.dev/void2610/articles/virtualmouse-4f5e1381d9cc4a)

InputSystemで仮想マウスを実装する際に、特定の`CanvasScaler`の設定で正しい位置にマウスが表示されない問題や、仮想マウスON・OFFを切り替える実装などについて紹介しています。

### BlenderとUnityのMCPをClaudeとClineから使ってみた

[BlenderとUnityのMCPをClaudeとClineから使ってみた - トマシープが学ぶ](https://bibinbaleo.hatenablog.com/entry/2025/03/28/213109)

BlenderとUnityのMCP（Model Context Protocol）をClaudeやClineから利用する方法や実際の操作について紹介しています。

### V24 – 2D主体のUIデザイナーが3DUIを制作した話

[V24 – 2D主体のUIデザイナーが3DUIを制作した話 │ Aiming 開発者ブログ](https://developer.aiming-inc.com/design/post-12452/)

Aimingが制作するデザイナーだけで構成されたハイエンド向けのUnityデモプロジェクト「V24」の3DUI（ワールドスペースでのUI表現）について、お題からラフデザイン、Unityへの組み込みについてそれぞれ解説しています。

### Unityの古いバージョンでiOSのApplication.OpenURLが効かない場合の対処法

[【Unity】Unityの古いバージョンでiOSのApplication.OpenURLが効かない場合の対処法](https://zenn.dev/yasunomono/articles/yasunomono_20250405)

Unityの古いバージョンで、iOSに限り`Application.OpenURL`が効かない不具合と、ネイティブプラグインを介して直接ネイティブのAPIを呼び出す実装について紹介しています。

### Unity6で追加されたGPU Resident Drawerとは何者なのか？セットパスコールから振り返り

[【Unity】Unity6で追加されたGPU Resident Drawerとは何者なのか？セットパスコールから振り返り - LIGHT11](https://light11.hatenadiary.com/entry/2025/03/25/195943)

Unity6で追加された「GPU Resident Drawer」について、この機能が誕生した背景から、どのような機能なのか、どのように使うのかを説明しています。

### Unity Package Manager(upm) で git repository の ブランチやタグをURLで指定する

[Unity Package Manager(upm) で git repository の ブランチやタグをURLで指定する](https://zenn.dev/hololab/articles/6479775933d889)

UPMで特定のブランチやタグを指定してパッケージをインストールする方法について紹介しています。