---
type: unity-weekly
title: >-
  Unity Search、CinemachineBlendListCamera、Unityシェーダープログラミングの教科書５ - Unity Weekly
  076
description: >-
  2022/07/11週のUnity Weeklyです。Unity
  Search、ChinemachineBlendListCamera、Unityシェーダープログラミングの教科書5などについてとりあげました。
pubDatetime: 2022-07-10T12:00:00.000Z
tags:
  - Unity Weekly
  - Unity
---

## Articles

### Unity Searchでアセットの依存関係を確認する

[【Unity】Unity Search ですべてのアセットの依存関係を簡単かつ高速に確認できる - コガネブログ](https://baba-s.hatenablog.com/entry/2022/07/05/090000?utm_source=feed)

[【Unity】Unity Search でアセットの依存関係をグラフにして確認できる - コガネブログ](https://baba-s.hatenablog.com/entry/2022/07/06/090000?utm_source=feed)

プロジェクト内のアセットを検索するUnity公式パッケージ Unity Search に、拡張機能の「Dependency Viewer」を導入して、Unity Search内でアセットの依存関係を高速に確認したり、アセットの依存関係をグラフビューで表示する方法について紹介しています。

### Timelineよりもお手軽に強力にカメラワークを作る、CinemachineBlendListCameraの使い方とハマリポイントについて

[[#Unity][#Cinemachine]Timelineよりもお手軽に強力にカメラワークを作る、CinemachineBlendListCameraの使い方とハマリポイントについて - Qiita](https://qiita.com/nattuhan/items/1be6f19bbdec8370cc6b)

Cinemachineで、複数のVirtual Cameraを順番にブレンドしてカメラワークを作成できるCinemachineBlendListCameraの基本的な使い方と、インスペクター上でドラッグアンドドロップでVirtual Cameraの順番を切り替えたときに、手前で設定したブレンド時間が利用されて期待したカメラワークにならないハマリポイントと、これを修正する方法について解説しています。

### FoVによらずに一定の太さのアウトラインを作る

[【ShaderLab】FoVによらずに一定の太さのアウトラインを作る](https://zenn.dev/r_ngtm/articles/shaderlab-outline-2)

この記事の著者が以前に投稿した「[【ShaderLab】常に同じ太さのアウトラインを作る](https://zenn.dev/r_ngtm/articles/shaderlab-outline)」の実装で、カメラのFoVを変化させるとアウトラインの太さが変化してしまう現象を、プロジェクション座標とスクリーン座標間のどの要因によって発生しているのかを実験的に検証し、対応方法を解説しています。

### Unityエディタがバックグラウンドに行ったこと・戻ってきたことを検知する

[【Unity】【エディタ】Unityエディタがバックグラウンドに行ったこと・戻ってきたことを検知する - LIGHT11](https://light11.hatenadiary.com/entry/2022/07/07/195342)

Unityエディタが、バックグラウンド（OSに依存するが、フォーカスが別アプリケーションなどに移った状態）に行った状態、またはバックグラウンドから戻ってきた状態をかえす、`UnityEditorInternal.InternalEditorUtility.isApplicationActive` というプロパティと、このプロパティを利用してバックグラウンドへの遷移を検知するイベントをハンドリングする方法について紹介しています。

### そろそろShaderをやるパート74　Phong鏡面反射

[そろそろShaderをやるパート74　Phong鏡面反射](https://zenn.dev/kento_o/articles/fc4c8773a0b752)

フルスクラッチでPhong鏡面反射を実装する方法について紹介しています。

### K4os.Compression.LZ4を使ってLZ4の圧縮・展開をしてみる

[【Unity, C#】K4os.Compression.LZ4を使ってLZ4の圧縮・展開をしてみる - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2022/07/07/120000)

[K4os.Compression.LZ4](https://github.com/MiloszKrajewski/K4os.Compression.LZ4)というライブラリを用いてUnity上で[LZ4](https://ja.wikipedia.org/wiki/LZ4)アルゴリズムによる `byte[]` 配列を圧縮する方法と、圧縮レベルによるパフォーマンスの検証（圧縮効率と処理速度）について比較しています。

### ベクトルAPIの内部計算式まとめ | ねこじゃらシティ

[【Unity】ベクトルAPIの内部計算式まとめ | ねこじゃらシティ](https://nekojara.city/unity-vector-math)

UnityEngineの算術系のメソッド（MathfやVector2、Vector3など）の実際の計算を、数式を交えつつ解説しています。

### エラーやクラッシュを記録し、バグ特定の手助けになるUnity公式の無料サービス Unity Cloud Diagnostics

[エラーやクラッシュを記録し、バグ特定の手助けになるUnity公式の無料サービス Unity Cloud Diagnostics【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Unity_Cloud_Diagnostics?utm_source=feed)

Unity公式のエラー・クラッシュ監視ツールの [Unity Cloud Diagnostics](https://unity.com/ja/products/cloud-diagnostics) について、導入方法と基本的な使い方について紹介しています。

## Books

### Unityシェーダープログラミングの教科書５ SRP[2]UniversalRP ＵＲＰ拡張カメラ／ＨＤＲ／ポストプロセス編

[Unityシェーダープログラミングの教科書５ SRP[2]UniversalRP ＵＲＰ拡張カメラ／ＨＤＲ／ポストプロセス編 - 土屋つかさの技術ブログは今か無しか](https://someiyoshino.info/entry/2022/07/05/151959?utm_source=feed)

[Unityシェーダープログラミングの教科書５ SRP[2]UniversalRP ＵＲＰ拡張カメラ／ＨＤＲ／ポストプロセス編 - 染井吉野ゲームズ - BOOTH](https://s-games.booth.pm/items/3981890)

「Unityシェーダープログラミングの教科書」シリーズの第５巻の販売が販売されました。



この書籍では、URP（Universal Render Pipeline）の中の、特にポストプロセス処理に関する技術について網羅的に解説しています。

