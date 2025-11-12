---
title: Chrome Extension generatorを使ってChrome Extensionを開発する
description: ''
pubDatetime: 2014-08-10T23:59:00.000Z
tags: []
---

Chrome Extensionの開発について今っぽくgruntとかbowerとか使って開発しようと思って調べていたら,
Yeomanに[generator-chrome-extension](https://github.com/yeoman/generator-chrome-extension)というgeneratorがあって, これを使うとサクッとChrome Extension
のテンプレートが作れたので, メモ代わりにブログに書いてみた.

インストール
------------

インストールする前に, 当然yeomanが必要なので, yeomanをインストールする. node.js, npmがインストールされていれば
以下のコマンドでyeomanをインストールする.

```
npm install -g yo mocha
```

`generator-chrome-extension`では, デフォルトのテストフレームワークとして`mocha`を採用しているので, ついでにインストールしておくと良い.
次に, `generator-chrome-extension`をインストールする. インストールは至って簡単で, 以下のコマンドでインストールする.

```
npm install -g generator-chrome-extension
```

使い方
------

まず, アプリのひな形を作成する. yeomanのコマンドを用いて作成する.

```
mkdir path-to-my-chrome-extension
cd  path-to-my-chrome-extension
yo chrome-extension
```

この時, アプリ名や初期アプリの構成を聞かれるので, 必要に応じてチェックをいれる.


### ディレクトリ構成

ひな形作成時にすべてのチェックを外すと, 概ね以下のディレクトリ構成となる.


```
.
├── Gruntfile.js
├── app
│   ├── _locales
│   │   └── en
│   │       └── messages.json
│   ├── bower_components
│   ├── images
│   │   ├── icon-128.png
│   │   ├── icon-16.png
│   │   ├── icon-19.png
│   │   └── icon-38.png
│   ├── manifest.json
│   ├── popup.html
│   ├── scripts
│   │   ├── background.coffee
│   │   ├── background.js
│   │   ├── chromereload.coffee
│   │   ├── chromereload.js
│   │   ├── popup.coffee
│   │   └── popup.js
│   └── styles
│       └── main.scss
├── bower.json
├── dist
│   ├── _locales
│   │   └── en
│   │       └── messages.json
│   ├── images
│   │   ├── icon-128.png
│   │   ├── icon-16.png
│   │   ├── icon-19.png
│   │   └── icon-38.png
│   ├── manifest.json
│   ├── popup.html
│   ├── scripts
│   │   ├── background.js
│   │   ├── popup.js
│   │   └── vendor.js
│   └── styles
│       └── main.css
├── package
│   └── password generator-0.0.4.zip
├─node_modules
├── package.json
└── test
    ├── bower.json
    ├── index.html
    └── spec
        └── test.js
```

### Gruntタスク

ひな形作成時に, 様々なタスクが追加されているが, 主に開発で利用するタスクを紹介する.

#### debug

debugタスクは`grunt-contrib-watch`を用いて, 各ファイルの変更を監視し,
bowerでインストールした外部ライブラリの自動ロード, SassやCoffeeScriptのコンパイル,
エクステンションのリロードまで自動で行ってくれる.
開発中はずっと起動しっぱなしになると思う.

また, `http://localhost:4000`に`/app`ディレクトリの内容を配信するローカルのサーバーが立ち上がるため,
そちらでデバッグすることもできる. (もちろんlivereloadも行ってくれる)


#### build

buildタスクは`/app`ディレクトリから, エクステンションをリリースするときに必要なzipの生成を行うタスク.
この時, 各種ファイルのコンパイルやjs・cssの結合と圧縮など, 静的ファイルの最適化は自動で行ってくれる.

生成されたzipファイルは`/package`に, `{appname}-{version}.zip`という名前で保存される.
ちなみにバージョンは, その時の`manifest.json`のバージョンに, ビルドバージョンがインクリメントされたものとなる(同時に`manifest.json`も更新される).

zip圧縮前のアプリは`/dist`に保存されている. リリース前には, 念の為にこちらのディレクトリをエクステンションとして読み込んで動作確認をした方がいいかもしれない.


Tips
-----

エクステンションを開発していて気づいたTipsを上げていく.


### 外部ライブラリの読み込み

外部ライブラリの読み込みは, `bower`を通じて行う. 例えば[underscore.js](http://underscorejs.org/)を利用したい場合は以下のようにする.

```
bower install --save underscore
```

すると`/app`ディレクトリにライブラリがインストールされ, 同時にライブラリを自動でロードされる.
具体的には, `bower install`後に, `/app`ディレクトリ直下にあるHTMLファイルの, `<!-- bower:css --> <!-- endbower -->`, または`<!-- bower:js --> <!-- endbower -->`と記述された場所に追記が行われる.
なので自分でHTMLファイルを追加する際には, `<!-- bower:css -->`と`<!-- bower:js -->`を適切な箇所に記述しておく必要がある.
だいたいyeomanが作ったHTMLファイルを参考に(というかコピペ)すれば良い.

ちなみにこれは`grunt-bower-install`を用いてgruntが処理を行っている.

### HTMLファイルの手動追加

HTMLファイルを`/app`内に作成したら, `Gruntfile.js`の`userminPrepare`タスクの`html`の配列に, 作成したHTMLファイルを追記しておく.
こうしないと, `/dist`ディレクトリにコピーが行われなく, パッケージ時にこまる.

### Chromeに読み込んだエクステンションのデバッグ

Chromeに読み込んだエクステンションのコンソールは, 設定画面の`Extensions > デバッグしたいエクステンション > Inspect views`から確認できる.


参考リンク
----------

- [DevTools Extensions API](https://developer.chrome.com/devtools/docs/integrating)
- [YeomanをつかったChrome extension開発のメモ](http://kazu69.net/blog/tec/1969)

