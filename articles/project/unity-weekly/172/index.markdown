---
type: "unity-weekly"
title: "Unity Weekly 172"
description: "2024/05/13週のUnity Weeklyです。DOTS & Multiplayer development status and next milestones、Unity Timeline/Playable API 完全に理解した 勉強会
などについて取り上げています。"
tags: ["Unity Weekly", "Unity"]
date: "2024-05-13T00:00:01"

---

## Unity Officials

### DOTS development status and next milestones - May 2024

[Official - DOTS development status and next milestones - May 2024 - Unity Forum](https://forum.unity.com/threads/dots-development-status-and-next-milestones-may-2024.1591548/)

Unity DOTSの2024/05時点での開発状況と、次のマイルストーンについて説明しています。

直近のリリースであるEntities 1.2から`UnityObjectRef<>`のシリアル化によるUnityアセットのアンマネージド参照などの紹介、新しい学習リソースとして[Megacity Metro](https://unity.com/demos/megacity-competitive-action-sample)やGDC2024でのUnityの発表のうちDOTSに関わるもの、[Unity Learnでの新しいDOTSの学習サンプル](https://learn.unity.com/project/basics-dots-jobs-entities)などの紹介、次以降のロードマップについてそれぞれ解説しています。

### Multiplayer development status and next milestones - May 2024

[Official - Multiplayer development status and next milestones - May 2024 - Unity Forum](https://forum.unity.com/threads/multiplayer-development-status-and-next-milestones-may-2024.1591566/)

Multiplayerの2024/05時点での開発状況と、次のマイルストーンについて説明しています。

Multiplayerを用いて開発されたゲームや新しい学習サンプルの紹介と、Unity 6のMultiplayerとしてNetcode for GameObjectsライセンスが2.0.0以降からUnity Companion Licenseに変更される旨やビルドやテストプレイのスケールに関する機能、実験的な分散権限モードの対応、実験的なマルチプレイヤーサービスパッケージ（`com.unity.services.multiplayer`）の機能などを解説しています。

### Unity wants to learn about your LiveOps needs

[Official - Unity wants to learn about your LiveOps needs - Unity Forum](https://forum.unity.com/threads/unity-wants-to-learn-about-your-liveops-needs.1590948/)

UnityがLiveOpsゲームを開発するクリエイター向けにLiveOpsテクノロジースタックをどのように評価し使用しているかの理解のためのアンケートを実施しています。

## Slides

### Unity Timeline/Playable API 完全に理解した 勉強会

[Unity Timeline/Playable API 完全に理解した 勉強会 - connpass](https://unity-fully-understood.connpass.com/event/315521/)

「Unity Timeline/Playable API 完全に理解した 勉強会」が5/12に開催されました。動画アーカイブや登壇資料、有志による勉強会まとめが公開されています。

- 動画アーカイブ
    - [Unity Timeline/Playable API 完全に理解した勉強会 - YouTube](https://www.youtube.com/watch?v=yUL8V2HSR-g)
- 登壇資料
    - [Timelineでゲームスタート演出](https://zenn.dev/dsgarage/articles/1e58181bf007ca)
    - [Timeline エディター拡張入門 - Speaker Deck](https://speakerdeck.com/yucchiy/timeline-edeitakuo-zhang-ru-men)
- まとめブログ
    - [【勉強会レポ】: Unity Timeline/Playable API 完全に理解した 勉強会 - Raspberlyのブログ](https://raspberly.hateblo.jp/entry/UnityTimelinePlayableComplete)

## Articles

### UnityでRenderTextureのコピーを爆速にしたい件

[UnityでRenderTextureのコピーを爆速にしたい件 #Unity - Qiita](https://qiita.com/ogix/items/f0d799da2ca16805acf8)

UnityのRenderTextureのコピーをShaderを介して高速に実行するためのテクニックについて解説しています。

### Adventures serializing absolutely everything in C#

[Adventures serializing absolutely everything in C# – isadora](https://isadorasophia.com/articles/serialization/)

[ブログ著者が実装するゲームエンジン](https://github.com/isadorasophia/murder)のシリアライザーで利用しているNewtonsoft.Jsonを、System.Text.Jsonに手作業なしかつデータ損失なしで移植した方法について解説しています。

### FastEnumというライブラリを用いて列挙型関連のメソッドを爆速+ゼロアロケーションで実行させる(Static Type Cachingによる高速化)

[【C#】FastEnumというライブラリを用いて列挙型関連のメソッドを爆速+ゼロアロケーションで実行させる(Static Type Cachingによる高速化) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2024/05/06/120000)

ゼロアロケーションかつ高速なEnumユーティリティ「[FastEnum](https://github.com/xin9le/FastEnum)」の基本的な使い方について紹介しています。

### UnityのInput SystemでUSB接続のゲームパッドを使用できるようにする手順

[UnityのInput SystemでUSB接続のゲームパッドを使用できるようにする手順 #Unity - Qiita](https://qiita.com/8ga3/items/fd8c2149465a054b5ec3)

USB接続された特定のゲームパッド（本記事ではF310）がジョイスティックなどに誤認識してしまう問題を修正する方法について紹介しています。

### Let's Apple Vision Pro! Sampleから学ぶPolySpatialのXR機能紹介

[Let's Apple Vision Pro! Sampleから学ぶPolySpatialのXR機能紹介](https://zenn.dev/iwaken71/articles/avp-polyspatial-sample)

PolySpatialのXR機能について、このパッケージのサンプルを元に紹介しています。

### Unity 6でGameObjectにGetComponentCount、GetComponentAtIndex、GetComponentIndexメソッドが追加された

[Unity 6でGameObjectにGetComponentCount、GetComponentAtIndex、GetComponentIndexメソッドが追加された #Unity - Qiita](https://qiita.com/RyotaMurohoshi/items/e4454e13b850395fe795)

Unity 6でGameObjectに追加された、コンポーネント取得に関するメソッドを紹介しています。

### Unity Shader Graph Basics (Part 7 - Custom Lighting)

[Unity Shader Graph Basics (Part 7 - Custom Lighting)](https://danielilett.com/2024-05-07-tut7-11-intro-to-shader-graph-part-7/)

Shader Graphの基礎を紹介するチュートリアルで、組み込みの`Fresnel Effect`ノードを用いたフレネルライティングや、簡単なセルシェーディングの実装について紹介しています。`

### UnityでPicture in Pictureを実装する方法(Android編)

[UnityでPicture in Pictureを実装する方法(Android編) - 渋谷ほととぎす通信](https://shibuya24.info/entry/unity-pip-android)

AndroidビルドされたUnityアプリを、AndroidManifests.xmlを手で編集することでPicture in Pictureを実現させる方法について紹介しています。

### Unity標準のObjectPoolを汎用的に使うクラスの作成

[【Unity】Unity標準のObjectPoolを汎用的に使うクラスの作成 #C# - Qiita](https://qiita.com/KeichiMizutani/items/ca46a40de02e87b3d8a8)

`MonoBehaviour`を継承したクラスのオブジェクトプーリングを簡単に実現するためのクラスを、Unity標準のObjectPoolラップするかたちで実装する方法について紹介しています。

## Repositories

### UGizmo

[harumas/UGizmo: Highly efficient gizmo drawer for Unity](https://github.com/harumas/UGizmo)

ランタイム呼び出し可能な、効率的に描画可能なGizmo。