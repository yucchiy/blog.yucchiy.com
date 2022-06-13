---

title: "Hubot+Herokuでbot入門+Slack連携"
date: 2014-07-17T22:49:00+09:00
comments: true
categories: hubot heroku coffee slack

---

業務関係で少しHubotを触ったので, 備忘録代わりにブログに書いてみた.

インストール
------------

以下の環境が必要になるので予めインストールする.

- Node.js, npm
- CoffeeScript
- Redis(データ永続化に必要. 必要に応じてインストールする)

Macの場合は, HomeBrewでインストールするのが楽.

```
brew install node redis-server
```

`Hubot`は, npmからインストールできる.

```
npm install -g coffee-script hubot
```

Botを作成してみる
-----------------

```
hubot --create mybot
cd mybot
npm install --save
```

### Gitでバージョン管理

はじめから`.gitignore`が用意されているので, おもむろにInitial commit.

```
cd mybot
git init
git add .
git commit -m "Initial commit."
```

### 動作確認

```
./bin/hubot
Hubot> hubot hi
Hubot> hi
Hubot> exit
```

自作スクリプトを書く
--------------------

`scripts`ディレクトリ以下にスクリプトを設置する.

### 特定の文字列に反応してつぶやく

`robot.hear`を用いる. 第1引数に正規表現を, 第2引数に行いたい処理を関数で渡す.
この時関数に, `msg`オブジェクトが渡ってくるので, `msg.send`でBotを喋らせることができる.

以下, `hoge`とつぶやいたら`piyo`とつぶやくBotの例.

```coffee
util = require 'util'↲
↲
module.exports = (robot) ->↲
  robot.hear /hoge/i, (msg) ->↲
    msg.send 'piyo'
```

### 特定の時間につぶやく(Cron)

node-cronモジュールを用いると, 簡単に定期実行処理をHubotに行わせることができる.
node-cronはnpmからインストールできる.

```
npm install cron --save
```

以下, 日本時間の8時に, `おはよう朝だYo`とつぶやくスクリプト例.

```coffee
cron = require('cron').CronJob
module.exports = (robot) ->
  new cron('0 0 8 * * *', () ->
    robot.messageRoom "#general", "おはよう朝だYo"
  , null, true, 'Asia/Tokyo').start()
```

### 環境変数の受け取り方

`process.env`を使う

BotをHerokuで運用する
-----------------------

Hubotは普通, そこまでサーバーのスペックを要求しないので(?)運用するには
Herokuが気軽で良いと判断し, Herokuをホスティングサーバーとしてみた.

まずHerokuを利用するの必要なツールをbrewインストールする.

```
brew install heroku-toolbelt
```

#### HerokuにHubotをデプロイ

`git push`でデプロイを行う.

```
heroku create --stack cedar
git push heroku master
heroku addons:add rediscloud # Heroku上でVerifyしていないとエラー
heroku ps:scale web=1
```

#### Herokuで運用してるHubotとSlackを連携

まず, SlackのIntegrationsからHubot連携して, `HUBOT_SLACK_TOKEN`を控えておく.
次に, herokuコマンドで設定.

```
heroku config:add HUBOT_SLACK_TOKEN=xxxx
heroku config:add HUBOT_SLACK_TEAM=yucchiy
heroku config:add HUBOT_SLACK_BOTNAME=yucchiy-bot
heroku config:add HEROKU_URL=http://yucchiy.herokuapp.com/
```

他にも, 監視チャンネルを制御する設定もある.

- `HUBOT_SLACK_CHANNELMODE`
    - 後述する, `HUBOT_SLACK_CHANNELS`と併用する. `whitelist`と`blacklist`が選択できる.
- `HUBOT_SLACK_CHANNELMODE`
    - カンマ区切りでチャンネル名を指定する.
    - `HUBOT_SLACK_CHANNELS`に`whiltelist`と指定すると, 指定したチャンネルのみを監視し, `blacklist`を指定すると, 指定したチャンネルは監視しないようになる

詳細は[https://github.com/tinyspeck/hubot-slack](https://github.com/tinyspeck/hubot-slack)より確認できる.

次に, `Procfile`をslackのアダプタをロードするように変更する.

```
web: bin/hubot --adapter slack
```

上記を設定の上, herokuのmasterブランチにデプロイすることで, slack連携が行われるようになる.


参考URL
-------

- [node.jsで環境変数を受け取る。herokuでの設定方法。](http://hilott.hateblo.jp/entry/2012/07/09/004115)
- [Hubotを使ったirc-bot作成メモ](http://sojiro14.github.io/blog/2014/04/19/irc-bot-by-hubot/)
- [github社製ボットフレームワーク、hubotをIRCボットとして導入した話(修正あり](http://d.hatena.ne.jp/anatoo/20120204/1328368042)
- [Slack上のボットをHubotで作ってHerokuにデプロイしてみた](http://nanapi.co.jp/blog/2014/06/04/slack_with_hubot/)

