---
title: 京都 Android 勉強会
description: ''
pubDatetime: 2014-08-23T06:02:00.000Z
tags:
  - android
  - 勉強会
---

京都Android勉強会に参加したときのメモを, 参加記としてブログに公開.

Androidとアカウント @cockscomb さん
-----------------------------------

AccountManagerがひたすら便利だという話.

### AccountManager

- Androidのアカウント管理システム
- 認証トークンの取得を抽象化
    - iOSにないおもしろい機能
- アプリ間での共有
- 認証トークンを暗黙的に取得
    - 無効化されるまでキャッシュ・自動的に取得

### 使い方

- AndroidManifest.xmlに記述
    - account-authenticator という項目を追加
- `Service`を継承した, `AuthenticationService`
    - コピペで一瞬で書ける
- `AbstractAccountAuthenticaticator`を継承したクラスを作成
    - `addAccount`, `getAuthToken`メソッドが重要

サンプルコードは, [SampleSyncAdapter](https://github.com/android/platform_development/tree/master/samples/SampleSyncAdapter)にあるのでこれを見たらよい.

### VolleyとAccountManagerの連携

- 自動的に非同期に呼び出し
- 認証失敗時にはAuthFailureError
- AuthenticatorをMockしてテストが可能

クックパッドの業務の話 @rejasupotaro さん
----------------------------------------

一年で本体アプリにコミットする人が急増したので, いかにしてスケールするかみたいな発表.

### 開発環境

- Android Studio + Gradle
- Groovyで自動化
    - リリースエンジニアリングをコマンド一つでやったりできるっぽい
- Android Frontier

### イテレーション

- 二週間に1度リリース. タスクはすべてGithubのissueで管理.
    - だいたい100個くらい消化してる

### レビュー

- レビューがボトルネック
- レビュータイムを設ける
    - 10時に手付かずのPRがチャットに流れる
- レビュー系はBotでいろいろ自動化
    - 過去の経験からレビューにチェックリストをつける. 障害系のチェックに便利

#### UIテスト

- 自動化はコストに見合わなくて断念
- iOSは[Appium](http://appium.io/)でシナリオが100個ある

#### ドックフーディング

- PRをマージして, Jenkinsがテストして, ベータ版をDeployGateでリリース.
    - ただあんまりうまく行ってない

### エラー監視

- クラッシュリティクスでクラッシュ数と推移とクラッシュ確認(Crash Free Usersを99.n%以上にする)

### リリースしすぎ問題

- リリースし過ぎると, 毎回ダウンロードが入って不便.
    - レビューでディスられるっぽい
- LINEとFacebookは一ヶ月サイクル(?)

XML BY DESIGN デザイナがコードを書くとちょっと良いこと @yulily100 さん
---------------------------------------------------------------------

XMLをデザイナが書くといろいろ開発が幸せになる話.

{{< speakerdeck dd195b300fbd0132c8492abbbf00bf60 >}}

### UIをつくる

- ペーパープロトタイピング
    - プログラマとも相談する. 実装とかの兼ね合い
- ユーザビリティテスト
- プログラマと一緒にやって, 前提を共有する

### コードを書く

- Githubを使って, PRベースで進める
    - 細かい相談をコメントで
    - スクショはれるし便利
- 出し分けが必要になった時点で, pushしてエンジニアにやってもらう.
- 全部終わったらレビューをお願いする. 良かったらマージ.


### なにが良いか

- 動くものを触りながらデザインすることができる
    - 動かないとわからないこともある
- カンプを作らなくてもいいから, 無駄な時間を削減
- エンジニアとワイワイ出来る

オブジェクト指向やめましょう @kis さん
--------------------------------------

オブジェクト指向は, 語られるコンテキストがバラバラで腐ったBuzzWord.

オブジェクト指向を使ったからといって, 良いコードを書けるわけではないのでそんな夢は捨ててちゃんと勉強しましょうという話.

黒魔術 @\_kaiinui さん
----------------------

Javaの黒魔術: Annotationについて

{{< speakerdeck 45f2eb000cd301321e865e226fb19d76 >}}

### 良さ

- 宣言的
- コードと宣言を分離できる
- ミスを防止できる

### 作り方

AspectJを使うと作れる

### ライブラリ

紹介されたライブラリ. [JakeWharton](https://github.com/JakeWharton/hugo)さんは, Android Annotationのプロらしい.

- [Hugo](https://github.com/JakeWharton/hugo)
- [Icepick](https://github.com/frankiesardo/icepick)
- [Retrofit](https://github.com/square/retrofit)
- [Butter knife](https://github.com/JakeWharton/butterknife)

Android アプリ開発における Gradle ビルドシステム @nobuoka さん
-------------------------------------------------------------

Gradleについての知見.

{{< slideshare 38432268 >}}

### GradleとAndroid アプリ開発

#### Gradleとは

- ビルドシステム
- ビルド設定はGroovyによるDSL
- Mavenによる依存関係が組み込まれている
- 最近は C/C++/Objective-Cもサポートされ始めた

#### 利点と欠点

- 自由度が高い(Groovyの処理を書ける)
- Maven リポジトリが使える
- Groovyになれるまで難しい
    - デバッグとか難しい

### GradleやAndroid Gradle pluginの便利機能

- デバッグ時だけ機能を変化させることができる
- Build Variants
    - Build types
    - Product Flavors: 同じアプリから複数アプリ
- BuildConfigのプロパティをビルド時に決定

### Gradleプラグインの作り方

作り方も使い方も簡単

#### プラグインの利点

- 再利用可能
- Groovyでもかけるし, JavaやScalaでも書ける


感想とか
--------

久々に勉強会に参加したけど, 自分の知らない発見とかあってよかった.

個人的には, [@rejasupotaro](https://twitter.com/rejasupotaro)さんの業務の話が面白かった. リリースし過ぎるとレビューでdisられるとか, なるほどアプリって大変だって思った.

[@\_kaiinui](https://twitter.com/_kaiinui)さんのJava Annnotaion, 黒魔術だ〜全く便利じゃないって言っておられたけど普通に便利だなとおもった.

Android勉強会, 関西で定期的に開催されるらしいし次も是非参加したい. 今度は是非[この夏もっとおしゃれなTシャツ](https://twitter.com/yucchiy_/status/503061258065547264)をゲットしたい.


参考資料
--------

- [デザイナーがandroidのXMLコーディングをやる利点について発表しました - yulily100's blog](http://yulily100.hatenablog.jp/entry/2014/08/27/112604)
- [発表資料: Android アプリ開発における Gradle ビルドシステム (京都 Android 勉強会 2014.08) - ひだまりソケットは壊れない](http://vividcode.hatenablog.com/entry/study-meeting/kyoto-android-2014-08)

