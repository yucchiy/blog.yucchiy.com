---
title: Androidエンジニアになった僕の開発環境と学習法
description: ''
pubDatetime: 2014-08-14T14:43:00.000Z
tags:
  - android
---


3,4年ウェッブエンジニアだった僕が, Androidエンジニアにジョブチェンして1週間経った(もちろん今まで通りウェブエンジニアは続けるけど). そんな僕がどういうふうにAndroidについて学習してるか記事にしてみた.

まだAndroidエンジニアになってから間もないので, この記事を見た方で, これは間違ってるよとか, このやり方が良いよって意見がある方は, ぜひコメントとか[@yucchiy_](https://twitter.com/yucchiy_)までリプライとかしてもらえると嬉しいです.


## 開発環境

まず学習法とかの前に環境どうしてるかについて. 結論は**Android Studio**をベースとして開発環境を整えるのがしっくりきてる.

### Eclipse vs Android Studio

Eclipse vs Android Studioだけど, 普段からWebStormとかPHPStormを使うことが多かったのでInteliJ PlatformなAndroid Studioを開発環境として選択した.


#### Android Studioのインストール

Android Studioは, Caskからコマンド一つでインストールできる.

```
brew cask install android-studio
```

またAndroid SDKは, Android Studioに入ってるものもあるが, スタンドアロンなSDKを用意しておく方が検証が楽そう. Homebrewを使ってる場合は, 以下のコマンドでインストールできる.

```
brew install android-studio
```

Android StudioからスタンドアロンなSDKにパスを通すには`Project Structure`(多分`Cmd + `で立ち上がるやつ)から,SDK Location > Android SDK Locationで設定できる. BrewでインストールしたSDKは`/user/local/Cellar/android-studio`に配置されている.


#### Android Studioの便利なショートカット

多分Eclipseにもあるんだろうけど**便利なショートカットが豊富**で, `Cmd + b`でクラスの定義元に飛んだり, Can't resolve errorが出てて, importするだけで解決するような場合は, 該当行に移動して`Alt + Shift`すると勝手にimportを行ってくれたり, クラスとかゲッター・セッターを自動で定義したかったら`Cmd + n`でいい感じにやってくれる. 多分他にもいろんな便利ショートカットが存在すると思うのでどんどん調べていきたい.


### 動作確認

手元に端末があったら, 特にこだわりがない限りは実機に転送して検証した方が良い. Androidデフォルトの端末は重たいし, 起動に時間がかかってストレスフルだった.

複数端末検証でエミュレータ使うなら[Genymotion](http://www.genymotion.com/)一択だと思う. しかし手元の環境ではまだ動かせてない.

## 学習法

前提として僕はJavaのコーディング経験が半年弱くらい(?)有り, 主に[プログラミングコンテストでJavaを利用していた](https://gist.github.com/yucchiy/2885090). なので, Javaの基本的なコーティングとCollectionの使い方はなんとなく分かる. このへんの基本的な文法をしっかり抑えておかないと, Android開発は難しいと思うので, まず先にその辺をおさえておくのが良さそう.


### MixiのAndroidTrainingの基礎編を流し読み

何もわからない状態だと簡単な画面遷移さえもままならないので, 軽く参考資料を流し読みした. ウェブの資料では, Mixiの[Androidのテキスト](https://github.com/mixi-inc/AndroidTraining)が情報がまとまっていてよかった. ただし**全部理解しようとするのではなく**, どんなことをするのにこういうものを使えばいい, くらいを抑えておくので十分そう. ActivityとFragmentがどうなってるとか, Intent使うと画面遷移できるとか, Viewの作り方とかどうするかとか, その辺を抑えるだけでも十分だと思う.

特にAndroidは覚えることが多そうで, それらをちゃんと把握しきるのは大変なので, 作りながら**困ったときやリファクタリング時に**はじめて詳しく調べるのが効率が良さそう.


### 作りたいものを決めてGithubを漁る

僕がAndroidアプリで作ろうものは, とあるウェブサービスからOAuth連携して, APIからデータを引っ張ってきてデータを表示するビュワーアプリである. まずやったこととして, 「android oauth」でGithubで調べて, なんとなく**スターが多いライブラリ**を見つけてその**サンプルのソースを写経**することをした.

具体的には, [wuman/android-oauth-client](https://github.com/wuman/android-oauth-client)というライブラリがあって, その[サンプル](https://github.com/wuman/android-oauth-client/tree/master/samples)がかなり充実していたので, それを写経したり, さらにサンプルをいじって遊んだした.

この時**動作検証のサイクルをこまめに行なう**ということを注意して行った.

というのも, まだ慣れてない状態でまとめて写経して検証を行うと, 写経をミスっていたり, そのサンプルを更にいじったりするときに, 問題の切り分けが難しくなる. そのため, こまめに動作検証を行なったほうが学習効率が良い. 細かく動作検証を行うには, そのサンプルがどの順番で動くかをちゃんと把握しないといけないので, **Androidのライフサイクルの理解が深まったり**とか一石二鳥だと思う.

このように学習することで, APIの連携にはどういうライブラリを使えばいいとか, [APIとクラスのインスタンスの紐付け](https://github.com/wuman/android-oauth-client/blob/master/samples/src/main/java/com/wuman/oauth/samples/twitter/api/model/Tweet.java)をどうするとか, AsyncTaskLoaderは[独自のローダを定義しておく](https://github.com/wuman/android-oauth-client/blob/master/samples/src/main/java/com/wuman/oauth/samples/twitter/TwitterActivity.java#L137)と何かと便利そうだとか, ListViewへアダプタ渡すときは[Decoratorパターン用意してアダプタとローダをセットで渡す](https://github.com/wuman/android-oauth-client/blob/master/samples/src/main/java/com/wuman/oauth/samples/twitter/TwitterActivity.java#L206)とスッキリかけて良いし再利用しやすそうだとか, 様々な知見が得られるし, アプリを作る上で必要な知見を効率よく学習できると思う.


### 復習として作ったあとに情報整理

作りたいものがある程度作れたら, 使ったクラスを詳しく調べなおしたり, Mixiのテキストで使った箇所を詳しく読んでみたり, 冗長になってしまった箇所をリファクタリングしてみたりすると, やったことを深く理解できると思うし忘れにくい知識が身につくと思う.


## まとめ

ざっくり, Androidエンジニアになって1週間の僕の実践している学習法について書いてみた. まとめると, Githubとかで先人の知恵を得ることと, 必要になったクラスとか機能を学ぶことで, 効率的に実践的なコーディングができるんではということを長々と書いた.

冒頭にも書いたけどもっと良いやり方があるとか, これはおかしいと思うことがアレば, コメントとか[@yucchiy_](https://twitter.com/yucchiy_)へどうぞ.
