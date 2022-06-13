---
type: "unity-weekly"
title: "Sharing your feedback with Unity - Unity Weekly #051"
date: "2022-01-17T14:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

## Unity 合成データを用いた人間中心型のコンピュータービジョン

[Unity 合成データを用いた人間中心型のコンピュータービジョン | Unity Blog](https://blog.unity.com/ja/technology/human-centric-computer-vision-with-unity-synthetic-data)

人間中心のコンピュータービジョンにおいて実世界のデータセットは、プライバシーや法律・安全性や倫理面での問題や、データ収集時のバイアスやコンテンツの偏りが生じやすく、モデルに悪影響を与えることがありました。

この問題を軽減するためにUnityがリリースした人間中心型のデータ生成器である [PeopleSansPeople](https://github.com/Unity-Technologies/PeopleSansPeople) について、その機能からドメインランダム化、生成されたデータセットについての統計解析を COCOデータセットと比較して行っています。

## Unity とフィードバックをシェアする

[Unity とフィードバックをシェアする | Unity Blog](https://blog.unity.com/ja/community/sharing-your-feedback-with-unity)

Unityのバグ報告や製品に対しての意見など、なにかしらのフィードバックを行いたいときに、どこに、どのように送るのが適切なのかを解説しています。

[Unity Pulse](https://unity.com/ja/unity-pulse)と[フォーラム](https://forum.unity.com/)、[製品ロードマップ](https://unity.com/ja/roadmap)の３つがそれぞれどういうもので、なにができるのか（またはできないのか）、フィードバックをどのように提供するのかについてまとめられています。

## シェーダーグラフを語ろうぜ！ Vol.1 - Unityステーション

[https://www.youtube.com/watch?v=Jv6GcNYYKeI](https://www.youtube.com/watch?v=Jv6GcNYYKeI)

Unity Technologies Japan（UTJ）配信のUnityステーションのシェーダーグラフ特集回です。配信では前半に Unity 2021.2のシェーダーグラフ新機能を、後半にシェーダーグラフTIPSをそれぞれ紹介しています。

- Unity 2021.2における新機能紹介
    - Changelog: [https://docs.unity3d.com/Packages/com.unity.shadergraph@12.1/changelog/CHANGELOG.html](https://docs.unity3d.com/Packages/com.unity.shadergraph@12.1/changelog/CHANGELOG.html)
    - **ビルトイン・レンダーパイプライン**に対応（いままではSurfaceShaderのみ利用可能）
        - グラフインスペクターの「Target Settings > Active Targets」でBuilt-inを選択すると利用できる
        - 経緯としてScriptable Render Pipeline（SRP）を「Built-in」と「Universal Render Pipeline（URP）」を機能的に互換であることを保証していくという方針に
            - SurfaceShaderをSRPでも利用できるようにする予定
            - それよりも先にShaderGraphをBuilt-in、URP、HDRP（High-Definition Render Pipeline）すべてに対応することを先にすすめることに
        - 該当フォーラム: [https://forum.unity.com/threads/what-is-next-for-us-at-unity-with-scriptable-render-pipelines.924218/](https://forum.unity.com/threads/what-is-next-for-us-at-unity-with-scriptable-render-pipelines.924218/)
        - ただし、BuiltinをURPへの移行は引き続き推奨に
    - UIの改善
        - Category
        - Vector2・Vector3・Vector4のMaterial Inspectorの改良（どれでも4枠確保されているのが、要素数に適用するようになった）
    - Custom Interpolator
        - VertexからFragmentに受け渡すパラメータを自由に増やせるようになった
        - パーリンノイズの計算をFragmentでやっていたのをVertexで行って、それをCustom Interpolator経由で渡す実装を例に
    - Split Texture Transform Node
        - テクスチャプロパティからタイリング設定を抽出するノード
        - 他のテクスチャのタイリング設定を借りてきて、別のテクスチャに適用する実装を例に
    - Branch on Input Node
        - サブグラフの拡張機能で、サブグラフに入力があればこっちの処理を、なければ別の処理を、という場合分けができるようになった
        - サブグラフのデフォルト挙動を実装できる
- TIPS
    - URP Surface Options
        - Shader Graphでは通常グラフ単位（つまりシェーダー単位）でパラメーターを設定するが、この機能を使うと、マテリアル単位でパラメーターを設定できる
        - Graph Inspectorの「Allow Material Override」をチェックすると、マテリアルをInspectorで開いて「Surface Options」の項目に設定項目の一覧が出てくるように
    - ある値を、「Power」で値を2乗する vs「Multiply」ノードで同じ値を与えて2乗する
        - 「Multiply」のほうが高速。また「Power」の場合は、入力にマイナスを与えることができないので、可能な限り「Multiply」を使うほうがいい
    - 「Saturate」 vs 「Clamp」
        - どちらでもよいが「Saturate」が使えるならこっちが良い
        - 「Saturate」は一部のGPUで他の計算のついでに行うのでコストがゼロになる可能性がある
    - （ハーフランバートなどで）「2で割って0.5足してその結果を2乗」vs 「-1 ~ 1 → 0 ~ 1へのRemap」
        - 「Remap」はほぼ同じ処理で実装されている（相当する命令はない）ので、気にしなくてもいいかも
        - 強いていうと2で割るより0.5に掛けるのほうが速いが、最近のコンパイラは乗算に置き換えるので、それさえも同じになりそう
    - 「Swizzle」ノードが意外に便利
        - 入力したベクトルの順序を入れ替えてくれるノード。実は入力ベクトルを減らすこともできる。
        - xyzw → xyだけにしたいとかに使える
    - 「Tile and Offset」ノードが意外に便利
        - UVにTilingとScalingを同時に行って計算してくれる
        - UVを使いたいケースではよく使うので、このノードを使うとリファクタリングできるはず
    - Float To Label
        - https://github.com/keijiro/ShaderGraphAssets 内に公開されている
        - Shader Graph中の入力を可視化してくれる

# Articles

## ライトプローブの影響を受ける雪エフェクトを作ってみた

[【Unity】ライトプローブの影響を受ける雪エフェクトを作ってみた](https://zenn.dev/r_ngtm/articles/particle-system-lightprobe)

この記事では、Particle Systemにライトプローブを適用するとParticle Systemがアタッチされているゲームオブジェクトに最も近いライトプローブのみが適用されるため、パーティクル全体に同じような色のライティングが適用される問題について取り上げています。

また、それを回避する方法として、ライトが届く領域を格子で区切って、その格子ごとにライトプローブからライティング情報をサンプリングしてテクスチャに書き込んでおき、そのテクスチャ情報をライト情報としてパーティクルの色に反映させることで擬似的にライティングを行う方法を紹介しています。

## Outline Shader

[Unity Outline Shader Tutorial - Roystan](https://roystan.net/articles/outline-shader.html)

ポストプロセスによるスクリーンスペースでのアウトラインシェーダーについてのチュートリアル記事です。

法線と深度、またはその双方を用いたRoberts Crossアルゴリズムによるエッジ検出の実装について紹介しています。

また、この手法だとカメラに対して鋭角な面がエッジとして誤検出されてしまう問題と、この問題を解決するために法線とカメラ方向の角度に対してしきい値を設けて誤検出を防ぐ手法について紹介しています。

## アセンブリごとのコンパイル時間を計測&可視化し、依存関係の確認も出来る Compilation Time Visualizer

[アセンブリごとのコンパイル時間を計測&可視化し、依存関係の確認も出来る Compilation Time Visualizer 【Unity】【最適化】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/Compilation_Time_Visualizer?utm_source=feed)

アセンブリごとのコンパイル時間を可視化と依存関係の確認ができる「[needle-tools/compilation-visualizer](https://github.com/needle-tools/compilation-visualizer)」について、そのインストール方法から基本的な利用方法について解説しています。

## 【Unity,2D】プルプルしようぜ！【軟体】

[【Unity,2D】プルプルしようぜ！【軟体】｜iroiro｜note](https://note.com/iroiro_unity/n/n370e16b4ec14)

2D Physicsに標準で用意されているコンポーネントのみを用いて、ソフトボティを擬似的に実装する方法を紹介しています。

SprineにBoneを割り振ることでスキニングし、それぞれの骨にRigidbody 2Dを配置して、Spring Joint 2Dによってバネ制約を設定することでソフトボディを再現しています。

それぞれの設定方法についてスクリーンショット付きで解説しています。

## Unity2021でVRテンプレートを使ってOculusQuest2の開発環境を構築してみる

[Unity2021でVRテンプレートを使ってOculusQuest2の開発環境を構築してみる - Synamon’s Engineer blog](https://synamon.hatenablog.com/entry/quest2_develop_environment)

Unity2021.2のVRテンプレートプロジェクトを用いて、空プロジェクトからOculus Quest2の開発環境を構築する方法について紹介しています。

Unity Hubを用いたAndroid SDKなどの必要なモジュールのインストール方法からプロジェクトの作成、VR開発に必要なUnityパッケージのインストール、プロジェクト設定からOculus LinkやQuest2へのビルド方法、コントローラーからの入力のとり方についてそれぞれ紹介しています。

## 【Unity】Unity 2021.2 でアセットの並列インポートを有効にする方法

[【Unity】Unity 2021.2 でアセットの並列インポートを有効にする方法 - コガネブログ](https://baba-s.hatenablog.com/entry/2022/01/11/150000)

Unity 2021.2で実装されているアセットの並列インポートについて、設定方法と、設定項目の詳細についてそれぞれ解説しています。

## Meta Avatars SDK for Unity

[Meta Avatars SDK for Unity (4)｜ハンドトラッキングでアバターの腕・手・指を動かす - デニッキ！](https://xrdnk.hateblo.jp/entry/meta_avatars_sdk_for_unity_4)

[Meta Avatars SDK for Unity (5)｜バージョン9.1 のリリースノート確認 - デニッキ！](https://xrdnk.hateblo.jp/entry/meta_avatars_sdk_for_unity_5)

Meta社が提供するアバターシステム「Meta Avatars SDK for Unity」について、ハンドトラッキングでアバターの腕・手・指を動かす実装の紹介と、ver9.1のリリースノートについてまとめています。

ハンドトラッキングでは `OvrAvatarInputManager` を実装して、自前で入力でハンドトラッキングを行う例を紹介しています。