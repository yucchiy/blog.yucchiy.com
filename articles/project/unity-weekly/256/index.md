---
type: unity-weekly
title: Unity Weekly 256
description: >-
  2026/01/19週のUnity Weeklyです。Unity AI Beta 2026、Boost Disks、Tilemap with Entity Id Tiles、Low-Level 2D Physics、Unity 6ウェビナーなどを紹介しています。
pubDatetime: 2026-01-19T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Unity AI Beta 2026 is here!

[Unity AI Beta 2026 is here! - Unity Engine - Unity Discussions](https://discussions.unity.com/t/unity-ai-beta-2026-is-here/1703625)

Unity AI 2026ベータがリリースをアナウンスするディスカッションです。

このリリースでは、アシスタントとアセット生成を提供していて、アシスタントはAsk（ユーザーの質問にプロンプトベースで返答する）とAgent（プロンプトの内容から個別のエージェントにタスクをアサインする）の2モデルが用意されています。

アシスタントには他にも下記の機能が用意されています。

- Vision: プロジェクトの画像やシーンを解析してエージェントに適切なコンテキストを渡す
- Safer Code: プロジェクトの依存関係に基づいてより安全なコードを生成する
- Focued Context: プロジェクトをインデックス化してナレッジグラフを構築することで、賢いコンテキストを共有でき、複雑なプロジェクトに対してもエージェントが的確な回答を行うことができる


また、アセット生成では、下記の機能が提供されます。

- コア機能: Sprite・Texture・Animation・Audio・Materialがこれまで通り提供され、より強力なジェネレーターとして拡張された
- UI Toolkit Layout: プロンプトからUI Toolkitのレイアウトを生成する
- Skybox Cubemap: プロンプトや画像からSkybox用のCubemapを生成する
- 3D Mesh & Texture: テキストプロンプトや参照画像から3Dモデルを生成する

新しいベータ版は[こちらのサインアップフォームから申し込むことができます](https://unity.com/features/ai)。
また、2025 Betaは2026/01/12に無効になったとのことです。

### Boost Disks: Persistent Caching for Faster Windows Builds

[Boost Disks: Persistent Caching for Faster Windows Builds - Unity Services - Unity Discussions](https://discussions.unity.com/t/boost-disks-persistent-caching-for-faster-windows-builds/1703993)

Build Automationに、Windowsビルドを高速化するための仕組みとして「Boost Disks」オプションが追加されたことをアナウンスしています。

Boost Disksは、ビルドマシンに直接接続できる512GBの永続ブロックストレージで、ビルド間で再利用される高性能のディスクキャッシュとのことです。

このディスカッションでは、価格や請求の仕組み、要件、設定方法などを紹介しています。

### Tilemap with Entity Id Tiles

[Tilemap with Entity Id Tiles - Unity Engine - Unity Discussions](https://discussions.unity.com/t/tilemap-with-entity-id-tiles/1703546)

Tilemapの、Entitiesによるパフォーマンス向上が見込めるEntity Id対応が行われたTilemap Extras packages 8.0.0-exp.1がリリースされたことをアナウンスしています。

ディスカッションでは、このパッケージの導入方法からEntity Id Tilesの設定方法、既存のアセットのコンバーターの利用方法などについて紹介しています。

### Unityゲーム開発オンラインセミナー2026 ＃1 〜Unity 6を使いこなすためには！【続編】～

[Unityゲーム開発オンラインセミナー2026 ＃1 〜Unity 6を使いこなすためには！【続編】～](https://create.unity.com/unity-gaming-webinar-jp-20260129)

Unity 6の2D Animationの内部構造や最新アップデート、Render Graph APIの導入背景や目的について学べるウェビナーが1/29(水) 16:00 ~ 17:30に開催されます。

参加には事前登録が必要で、[こちらのフォームより申し込むことができます](https://create.unity.com/unity-gaming-webinar-jp-20260129)。

### keijiro/LowLevelDigger: Low-Level 2D Physics (Unity 6.3) mini game sample project

[keijiro/LowLevelDigger: Low-Level 2D Physics (Unity 6.3) mini game sample project](https://github.com/keijiro/LowLevelDigger)

UTJの高橋 啓治郎氏が、Unity 6.3から利用できるLow-Level 2D Physicsを用いたミニゲームをGitHubで公開しています。

### 2026年の5つの業界トレンド：AI、XR、その他

[2026年の5つの業界トレンド：AI、XR、その他 | Unity](https://unity.com/ja/blog/top-trends-redefining-industry-in-2026)

Unity Technologiesが、業界の専門家による知見に基づいて特定した、産業系のキートレンドのトップ5を紹介しています。
トレンドレポートの詳細は、「[2026 Industry Trends Report](https://unity.com/resources/industry-trends-report-2026)」より確認できます。


## Articles

### Unityでドンキーコングバナンザみたいにボクセルを扱う(メッシュ生成編) 

[Unityでドンキーコングバナンザみたいにボクセルを扱う(メッシュ生成編) #C# - Qiita](https://qiita.com/0ali8hi26/items/22c391addbdb74e7ace3)

Unity上でドンキーコングバナンザのような地形を扱うためのメッシュ生成編として、MagicaVoxelで制作したボクセルデータを、VoxReaderを用いて読み込んでUnity上に描画する方法を紹介しています。

### IAnimationClipSourceという神インターフェースについて

[IAnimationClipSourceという神インターフェースについて #Unity - Qiita](https://qiita.com/nemuke_cs/items/307b277b9202ab553bc2)

Unity6から利用できる、ゲームオブジェクトを選択した時のAnimation Windowsで編集できるAnimationClipを独自で設定できるインターフェイス `IAnimationClipSource` について、この概要や使い方を紹介しています。

### Unity Android で環境ごとにGraphics APIを切り替える方法

[Unity Android で環境ごとにGraphics APIを切り替える方法 #UnityEditor - Qiita](https://qiita.com/matsu_r11/items/10c5d73d4c66c19ecf67)

Unity6.3から使える、Androidの端末ごとにグラフィックAPIを変更するVulkan Device Filtering Assetの使い方について紹介しています。

### Unity 6.3でUPMパッケージ作成する"Create package"を試す

[Unity 6.3でUPMパッケージ作成する"Create package"を試す #Unity - Qiita](https://qiita.com/Miyakovsky/items/358d064b0b95a1d08acf)

Unity6.3から使えるようになった、Unityエディター上でのUPMパッケージの作成から署名付きのパッケージわ書き出す方法についてそれぞれ紹介しています。

### Vertex Shaders & Tessellation

[Vertex Shaders & Tessellation | Unity Shader Code Basics 05](https://danielilett.com/2026-01-03-tut10-05-vertex-waves/)

頂点変位の実装からモデルの頂点数が少ない時に解像度が荒く見える問題、この問題を解決するためにテッセレーションによる頂点密度を増やすことでこの問題を解決する方法や、パフォーマンス最適化のために、カメラからの距離によって動的に頂点密度を変更する方法などをそれぞれ説明しています。

### Unity 6.4でTilemap関連の構造体とそれらを使ったメソッドが増えそう

[Unity 6.4でTilemap関連の構造体とそれらを使ったメソッドが増えそう #Unity6.4 - Qiita](https://qiita.com/RyotaMurohoshi/items/7b0aad1cafa52e5edf5a)

Unity 6.4に追加される、TilemapのAPIについて紹介しています。

### タイリングモデルに陰影を追加してクオリティを向上させよう

[【Unity】タイリングモデルに陰影を追加してクオリティを向上させよう – 株式会社ロジカルビート](https://logicalbeat.co.jp/blog/24156/)

タイリングテクスチャにAOテクスチャによって陰影をつけて描画する方法について、この実装の概要からUVマップからAOマップのベイク方法、ShaderGraphを用いたシェーダーの作成方法を紹介しています。

### 触りたくなる3D表示：Unityで作るCADライク強調輪郭

[触りたくなる3D表示：Unityで作るCADライク強調輪郭](https://zenn.dev/wogo_techblog/articles/c7f20164e5266f)

CADのようなエッジを描画するための方法を、深度と法線からエッジを検出して描画する方法からこの方法を採用することによってでてきた課題やその打ち手についてそれぞれ紹介しています。
