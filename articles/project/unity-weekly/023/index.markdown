---
type: "unity-weekly"
title: "Unity Weekly #023"
date: "2021-07-19T09:00:00+09:00"
draft: false
tags: ["Unity", "Unity Weekly"]

---

## モバイルゲームのパフォーマンスを最適化しよう：専門家が語る物理演算、UI、オーディオの設定に関するヒント 

![](./Optimizeyourmobilegameperformanceimage7.jpg)

[モバイルゲームのパフォーマンスを最適化しよう：専門家が語る物理演算、UI、オーディオの設定に関するヒント | Unity Blog](https://blog.unity.com/ja/technology/optimize-your-mobile-game-performance-get-expert-tips-on-physics-ui-and-audio-settings)

- この記事は、[Accelerate Solutions](https://unity.com/ja/success-plan)チームによるモバイルゲーム最適化についての2本目の記事です。1本目は[こちら](https://blog.unity.com/ja/technology/optimize-your-mobile-game-performance-tips-on-profiling-memory-and-code-architecture)から、完全な内容は[こちらのeBook](https://create.unity3d.com/optimize-mobile-game-eBook)からダウンロードできます。
- 今回はUIや物理演算、オーディオの最適化のための各種設定や、処理負荷を軽減するためのuGUIの設定や実装方針、モバイル端末におけるオーディオの圧縮やロードについて述べています。


## ドッジボールをプレイする ML-Agents  

![](./DodgeBallHeaderImage.jpg)

[ドッジボールをプレイする ML-Agents | Unity Blog](https://blog.unity.com/ja/technology/ml-agents-plays-dodgeball)

- この記事では、ML-Agentsに追加された[MA-POCA](https://blog.unity.com/ja/technology/ml-agents-v20-release-now-supports-training-complex-cooperative-behaviors)アルゴリズムを用いてエージェントグループの協調行動を学習するDodgeBall環境について紹介しています。
- DodgeBall環境とゲームルールの概要やエージェントの情報源、エージェントに協調した行動を取らせるための`SimpleMultiAgentGroup`の利用方法、セルフプレイを用いて過去の自エージェントと対戦して学習する方法について説明しています。


## FidelityFX Super Resolution @GPUOpen will be available in Unity 2021.2b soon

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">FidelityFX Super Resolution <a href="https://twitter.com/GPUOpen?ref_src=twsrc%5Etfw">@GPUOpen</a> will be available in Unity 2021.2b soon 🎉<br><br>Can&#39;t wait? Get your hands on <a href="https://twitter.com/hashtag/FSR?src=hash&amp;ref_src=twsrc%5Etfw">#FSR</a> now with the latest release on Github: <a href="https://t.co/pKYe9zYREy">https://t.co/pKYe9zYREy</a> <a href="https://t.co/yitN3cr7Kn">pic.twitter.com/yitN3cr7Kn</a></p>&mdash; Unity (@unity3d) <a href="https://twitter.com/unity3d/status/1415688281203879936?ref_src=twsrc%5Etfw">July 15, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

- GPUOpenのポストプロセスエフェクトベースな超解像技術である[FidelityFX Super Resolution](https://www.amd.com/en/technologies/radeon-software-fidelityfx-super-resolution)をUnityでも利用できるようになります。
- 2021.2bで導入される予定です。GitHubでは[HDPR/FSR](https://github.com/Unity-Technologies/Graphics/tree/HDRP/FSR)ブランチ上で開発されていて、HDPRのポストプロセス処理として[実装されています](https://github.com/Unity-Technologies/Graphics/commit/2955294c65988ad555d703e231af122f59290e8d#diff-617165acfec9a5b4c1b26809291f30938d7a152b8e9fec0e5ae2c661078201dbR525-R528)。


## 【Unity】URPのComplex Litシェーダでクリアコーティングされたマテリアルを作る

![](./20210714123131.png)

[【Unity】URPのComplex Litシェーダでクリアコーティングされたマテリアルを作る - LIGHT11](https://light11.hatenadiary.com/entry/2021/07/14/192838)

- この記事では、URPの10.1.0で導入されたComplex Litを用いてクリアコーディングなマテリアルを作成する方法について紹介しています。
- クリアコーティングについての概要から[Complex Litシェーダー](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@12.0/manual/shader-complex-lit.html)の設定方法、Clear Coatのパラメーターについて、パフォーマンスについてそれぞれ説明しています。


## 【 Unity/URP】深度テクスチャを使って簡単にレンズフレアを実装する  

![](./170854_ed3bf63f-c99c-43dd-9245-9ca6d57fb8c3.webp)

[【Unity/URP】深度テクスチャを使って簡単にレンズフレアを実装する - Qiita](https://qiita.com/togucchi/items/e203311d0287fe883855)

- この記事では、Universal Render Pipeline上で深度テクスチャを用いて簡易なレンズフレアを実装する方法について紹介しています。
- ビルボードによるフレアの角度の固定方法、前方に物体がある場合フレアを非表示にするため深度テクスチャを用いた実装方法について解説しています。


## Unity as a Libraryをあなたのプロジェクトにおいて採用すべきか

[Unity as a Libraryをあなたのプロジェクトにおいて採用すべきか](https://zenn.dev/n0mimono/articles/f1e9dc9e55d43c)

- この記事では、Unity as a Library（UaaL）についての概要と、どのようなプロジェクトに導入するとよいかについて紹介しています。
- ネイティブプラグインとUaaLを比較して、それぞれの特徴と用いるメリットやデメリットについて説明しています。


## Pixelate filter: post-processing in a compute shader  

![](./Example.png)

[Pixelate filter: post-processing in a compute shader – Bronson Zgeb](https://bronsonzgeb.com/index.php/2021/07/17/pixelate-filter-post-processing-in-a-compute-shader/)

- この記事では、コンピュートシェーダーを用いてポストプロセスを実装する方法について紹介しています。
- コンピュートシェーダーでピクセレートフィルターを実装し、`OnRenderImage`で出力画像に対してポストプロセスする方法について説明しています。


## Azure Pipelines で iOS ビルドの設定について

[Azure Pipelines で iOS ビルドの設定について - Qiita](https://qiita.com/gremito/items/81d595e8282a91bbfd8d)

- この記事では、UnityのiOSビルドをAzure Pipelinesで行うための、p12プロビジョニングプロファイルの設定方法について紹介しています。
- yamlファイルによるビルドパイプラインの記述方法からモバイルプロビジョニングの作成方法および配置方法について説明しています。


## Unityプロジェクトのディレクトリ構成と .gitignore - やらなイカ？

[Unityプロジェクトのディレクトリ構成と .gitignore - やらなイカ？](https://www.nowsprinting.com/entry/2020/07/02/064315)

- この記事では、Unityの特にアセットを提供する際のディレクトリの構成と.gitignoreの内容について紹介しています。
- アセット提供の際に気をつけるべきことと、ディレクトリ構成のプラクティスの1つの紹介、.gitignoreのボイラープレートを配置する[gibo](https://github.com/simonwhitaker/gibo)というツール、プロジェクト固有の.gitignoreについてそれぞれ解説しています。


## Unity Event systems interfaces for Customized GUI behavior

![](./gui-uniy-tutorial-joshua.jpg)

[Unity Event systems interfaces for Customized GUI behavior - IndieWatch](https://indiewatch.net/2021/02/04/unity-event-systems-interfaces-for-customized-gui-behavior/)

- この記事では、UnityEngine.EventSystems下のインターフェイスを用いて独自のGUI挙動を実装する方法について紹介しています。
- `IPointerClickHandler`などのインターフェイスで独自のGUIイベントをハンドリングする方法と、それらを用いて独自のボタンを実装する方法を解説しています。