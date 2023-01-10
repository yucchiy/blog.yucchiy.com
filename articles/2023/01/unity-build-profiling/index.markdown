---
type: "tech"
title: "Unity 2021でビルドのプロファイリングを行う"
description: "Unity 2021からビルド時に出力されるbuildreport.jsonを用いて、ビルドのプロファイリングを行う方法について紹介します。"
tags: ["Unity", "アプリビルド"]
date: "2023-01-10T00:00:00"

---

Unity 2021あたりからビルドシステムがBeeビルドシステムに切り替わり（？）、あわせてビルド時のイベントが`Libraries/Bee/buildreport.json`へ書き出されるようになりました。このデータを用いてビルドパイプラインのプロファイリングを簡単に行えます。（参考: [インクリメンタルビルドパイプラインによるプレイヤーのビルドの高速化 | Unity Blog](https://blog.unity.com/ja/technology/accelerating-player-builds-with-incremental-build-pipeline)）

この記事では、具体的なプロファイリング方法を紹介します。

また、下記環境で検証しています。

* Unity 2021.3.14f1
* iOSビルド
* MacBook Pro（2018）
    * OS: macOS Monterey
    * CPU: Intel Core i9 2.9GHz 6-Core
    * Memory: 32GB

## ビルドのプロファイリング

`buildreport.json`には、ビルド時にどのような処理がどのタイミングで実行されたかというイベント情報がChromeの[Trace Event Format](https://www.google.com/search?q=chrome+trace+event+format&oq=Chrome+Trace+Event+format&aqs=chrome.0.0i512j0i390l4.4329j0j7&sourceid=chrome&ie=UTF-8/)で書き出されています。

この形式のデータはGoogle Chromeを用いて可視化できます。具体的にはGoogle Chromeを開き、アドレスに`chrome://tracing`を入力すると下図のようにビューワーが開きます。

![Trace Viewer](2023-01-10-05-16-20.png)

次にUnityプロジェクト配下の`Libraries/Bee`ディレクトリを開いて、その中の`buildreport.json`をChrome上にドラッグアンドドロップするか、画面左上の「Load」ボタンをクリックして`buildreport.json`を開きます。

すると、下図のような画面が開きます。

![buildreport.jsonを開いた様子](2023-01-10-05-24-54.png)

Unityでのビルド時はまずビルドに必要なタスクを洗い出して、そこからBeeビルドシステム（上図では中段のBeeDriverおよび下段bee_backend）にそれぞれのタスクを投げます。
とくにスクリプトのコンパイルは、下段bee_backendを介して並列に処理されていることがわかります。

ここでそれぞれ矩形が、ビルド時のイベントとかかった時間を表します。矩形を選択すると下図のようにイベントの詳細を確認できます。

![イベントの詳細の確認](2023-01-10-09-21-20.png)

ちなみに、同じビルドをクリーンビルドせずに2度実行したときの`buildreport.json`を比べてみます。

![2度目のビルドのbuildreport.json](2023-01-10-09-28-17.png)

1度目と比べてスクリプトのコンパイル等がbee_backendに渡っていないことから、C#スクリプトのコンパイル等がキャッシュを用いることで省略されていることが確認できます。

## まとめ

かんたんではありますが、Unity 2021でのビルドパイプラインのプロファイリング方法について紹介しました。
今回はほぼ空のプロジェクトで検証しているので、旨みが分かりづらいですが、規模が大きくなったプロジェクトでアプリビルドの時間が気になる場合は、一度覗いてみると良いかもしれません。

CI/CDを回している場合は、ビルド成果物に`buildreport.json`を含めて解析しやすくしておくのも手かもしれません。