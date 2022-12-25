---
type: "unity-weekly"
title: "Unity Weekly 101"
description: "2022/12/19週のUnity Weeklyです。Splinesパッケージ、UGSのバックエンド機能、DirectX12 and Graphics Job Improvements、アドカレ2022などについて取り上げています。"
tags: ["Unity Weekly","Unity"]
date: "2022-12-26T00:00:00"
---

## Unity Officials

### Games Focus：2022 年を振り返って | Unity Blog

[Games Focus：2022 年を振り返って | Unity Blog](https://blog.unity.com/ja/technology/games-focus-2022-in-review)

Unityの製品開発の主要な取り組みを紹介するブログシリーズGame Focusシリーズの最終回で、これまでのシリーズ振り返りとUnite2022の振り返りについてまとめています。

### Unity 2022.2 以降のグローバルイルミネーションのアップデート | Unity Blog

[Unity 2022.2 以降のグローバルイルミネーションのアップデート | Unity Blog](https://blog.unity.com/ja/technology/global-illumination-updates-in-2022-2)

Unity 2022.2以降のGI（Global Illumination）のアップデートについて紹介しています。

Enlighten Baked GIの非推奨化とベイク済みGIソリューションとして後継となるGPUライトマッパーとそれぞれの設定についての紹介、Adaptive Probe Volumes、HDRP パストレーシングデノイジング、2022.2までに入っているGIに関する修正や改善点について説明しています。

### Unity Asset Store パブリッシャーからのゲーム開発のヒント：2022 年のまとめ

[Unity Asset Store パブリッシャーからのゲーム開発のヒント：2022 年のまとめ | Unity Blog](https://blog.unity.com/ja/games/tips-from-asset-store-publishers-2022-roundup)

Unity Asset StoreのトップパブリッシャーであるMore Mountains（FEEL）、Sirenix（Odin Validator）、Daniel Zeller（Fluffy Grooming Tool）氏の、ゲーム開発のための実用的なヒントを#UnityTipsからまとめています。

### 無料のゲーム開発ツールやアートパックで、新しいプロジェクトをスタートさせよう

[無料のゲーム開発ツールやアートパックで、新しいプロジェクトをスタートさせよう | Unity Blog](https://blog.unity.com/ja/games/free-asset-store-tools-to-kick-start-your-next-project)

Unity Asset Storeの中から、おすすめの無料アセットをカテゴリ別で紹介しています。

### Multiplayer Play Mode Experimental Release Now Available

[Official - [MPPM] Multiplayer Play Mode Experimental Release Now Available - Unity Forum](https://forum.unity.com/threads/mppm-multiplayer-play-mode-experimental-release-now-available.1372998/)

Multiplayer Play Mode（MPPM）v0.1.0が実験パッケージとして利用可能になりました。

MPPMはUnityエディター上でマルチプレイヤー機能をテストできる機能で、同じディスク上のプロジェクトを使用して、同じマシン上で最大4人のプレイヤーでのテストが行えます。

この機能は、Unity 2023.1.a22以降で利用できます。

### 【Unity】開発効率アップ！ Enter Play Mode オプション解説

[【Unity】開発効率アップ！ Enter Play Mode オプション解説 - YouTube](https://www.youtube.com/watch?v=ThoWjnNR6F4)

Enter Play Modeオプションを用いることでPlay Modeを開始するまでの時間を短縮する方法と、このオプションによって起動速度が早くなる原理を「Reloaded Domain」と「Reloaded Scene」でそれぞれどのような処理を省略するのかについての解説、これらを省くことによって発生する不具合やその対処法について紹介しています。

### 【Unity】シェーダーグラフがフルスクリーンエフェクトに対応しました！

[【Unity】シェーダーグラフがフルスクリーンエフェクトに対応しました！ - YouTube](https://www.youtube.com/watch?v=7Cd7kQl6N50)

Unity 2022.2で追加されたShaderGraphのフルスクリーンエフェクト対応の紹介と、URP（Universal Render Pipeline）とHDRP（High Definition Render Pipeline）での利用方法についてまとめています。

### 今日からはじめるAnime Toolbox

[今日からはじめるAnime Toolbox｜Unity Japan（ユニティ・テクノロジーズ・ジャパン）｜note](https://note.com/unityjapan/m/m8c2f91f09445)

Unityでリッチな映像制作を行うためのパッケージをまとめたテンプレート「Anime Toolbox」についのUnityスタッフによる連載記事です。

Anime Toolboxの概要から導入方法、利用例として「3Dモデルと2D素材の合成」・「歩くSDユニティちゃんのシーン制作」について紹介しています。

### 【v2.2対応版】Unity ML-Agents実践ゲームプログラミング 出版記念トーク

[【v2.2対応版】Unity ML-Agents実践ゲームプログラミング 出版記念トーク | Unity Learning Materials](https://learning.unity3d.jp/9426/)

ユニティ・テクノロジーズ・ジャパンのスタッフが主催の配信チャンネルUnity Stationの、[【v2.2対応版】Unity ML-Agents実践ゲームプログラミング](https://www.borndigital.co.jp/book/28311.html)出版記念回です。

書籍の概要から、この書籍の扱う強化学習の最近のホットトピックスや、Unity ML-Agentsの新機能について紹介しています。

## Articles

### ShaderVariant番外編その２
[[Unity]ShaderVariant番外編その２｜黒河優介｜note](https://note.com/wotakuro/n/nd482241bd389)


### NativeArray<T>からSpan<T>へ変換する方法(2022.2以前はunsafe, 2022.2以降はAsSpan)

[【Unity】NativeArray<T>からSpan<T>へ変換する方法(2022.2以前はunsafe, 2022.2以降はAsSpan) - はなちるのマイノート](https://www.hanachiru-blog.com/entry/2022/12/19/120000)

`NativeArray<T>`から`Span<T>`を取得する方法について、2022.2以前での方法と、2022.2以降で利用できるAPIについてそれぞれ紹介しています。

### BuildPlayerのBuildOptions

[【Unity】BuildOptions.ShowBuiltPlayer を使うとビルド後に成果物が保存されているフォルダが開く - コガネブログ](https://baba-s.hatenablog.com/entry/2022/12/19/090000)
[【Unity】BuildOptions.CleanBuildCache を使うと Clean Build できる - コガネブログ](https://baba-s.hatenablog.com/entry/2022/12/20/090000)
[【Unity】BuildOptions.DetailedBuildReport を使用するとビルド時に Unity エディタが強制終了するようになった - コガネブログ](https://baba-s.hatenablog.com/entry/2022/12/21/090000)

アプリケーションのビルドをスクリプトから行える[BuildPlayer](https://docs.unity3d.com/ScriptReference/BuildPipeline.BuildPlayer.html)で指定できるオプション`BuildPlayerOptions`で指定したオプションの挙動について紹介しています。

### 商用可能な日本全国の3D都市モデルが無料で使えるPLATEAU(プラトー)のUnity&UE向けSDK公開！

[商用可能な日本全国の3D都市モデルが無料で使えるPLATEAU(プラトー)のUnity&UE向けSDK公開！【Unity】【ゲーム素材】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/PLATEAU__SDK)

国土交通省が主導する日本全国の3D都市モデルの整備・活用・オープンデータ化プロジェクト PLATEAU で利用できる都市の3DモデルをUnity上使う方法について、SDKのインストールからUnityへの3Dモデルのインポート方法など紹介しています。

### Unity公式パッケージ『Dependency Viewer』でアセットの依存関係を簡単に可視化する

[【Unity】Unity公式パッケージ『Dependency Viewer』でアセットの依存関係を簡単に可視化する - LIGHT11](https://light11.hatenadiary.com/entry/2022/12/21/193109)

Unity公式が提供する[Search Extensions](https://github.com/Unity-Technologies/com.unity.search.extensions)の１機能である「Dependency Viewer」によって、アセットの参照・被参照アセットの一覧を表示する方法などの基本的な使い方について紹介しています。

### Fake Liquid Shader Graph (URP) 

[Fake Liquid Shader Graph (URP) | Minions Art](https://www.patreon.com/posts/fake-liquid-urp-75665057)

URPとShader Graphで、Fake Liquid Shader（物理的シミュレーションは行わない、シェーダーでの容器の中の液体を表現するシェーダー）を実装する方法について、Shader Graphの実際のグラフと、それぞれのノードがどのような表現に利用されているかについて解説しています。

### JSON advanced parsing in Unity

[JSON advanced parsing in Unity - Pav Creations](https://pavcreations.com/json-advanced-parsing-in-unity/)

Unity C#でJSONファイルを扱うための方法として、`JsonUtility`と`Newtonsoft.Json`の利用方法をそれぞれ紹介しています。

## Repositories

### Zibra Compression

[Zibra Compression - Zibra AI / Zibra AI](https://zibra.ai/zibra-compression/)

VDBボリュームをリアルタイムに描画するためのZibraAIのソリューション。
OpenVDBフォーマットで保存されたVFXを、最大20倍圧縮できる。

## Advent Calendar
