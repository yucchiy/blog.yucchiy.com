---

title: "FigでRailsの開発環境を構築する"
date: 2014-12-30T13:27:00+09:00
comments: true
categories: docker fig rails ruby

---

## はじめに

個人で運用しているサービスをGKEにのせるついでに, 開発環境もDockerで統一しようと思い, FigでRailsの開発環境を構築したときのメモ.
基本的には, [Perlはもう古い、これからはDocker](http://yuuki.hatenablog.com/entry/next-is-docker) のRails版である.

以下の環境で動作確認を行った.

- OS・パッケージ管理
    - Mac OSX Yosemite 10.10.1
    - Homebrew 0.9.5
- ソフトウェア
    - Docker 1.4.1
    - Boot2docker 1.4.1
    - Fig 1.0.1


今回はサンプルに, [Ruby on Rails Tutorial](http://railstutorial.jp/) のサンプルソースを用いた. ただし, データベースの設定の都合,
[いくつか変更を加えたもの](https://github.com/yucchiy/sample_app_rails_4)を用いた.

サンプルコードは, [https://github.com/yucchiy/dockerized-rails-app](https://github.com/yucchiy/dockerized-rails-app) より確認できる.

## 準備

Railsアプリを開発するときにRedisやMySQLなどのミドルウェアが必要になった時, Railsアプリケーションのはいったコンテナに
ミドルウェアを導入しないほうが良い. これは, Dockerでは[1コンテナ1デーモンを前提に](http://yuuki.hatenablog.com/entry/next-is-docker)していることなどがあげられる.

しかし, 複数コンテナになると, **コンテナ間のリンクなどの管理が面倒**になるので, Figを用いる.

### ベースとなるRubyのコンテナイメージを作成

まず, dockerでRailsの実行環境を構築する. 上記のサンプルを動作させるには, ruby 2.0.0 の実行環境が必要である.
Ubuntu14.04上でそのような環境を構築するために, 以下の`Dockerfile`を用意し, ベースとなるイメージを用意する.

```
FROM ubuntu:14.04
ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && \
    apt-get install -yq --force-yes build-essential wget curl git ssh

RUN apt-get install -yq --force-yes zlib1g-dev libssl-dev libreadline-dev libyaml-dev libxml2-dev libxslt-dev && \
    apt-get clean

RUN git clone https://github.com/sstephenson/rbenv.git /root/.rbenv
RUN git clone https://github.com/sstephenson/ruby-build.git /root/.rbenv/plugins/ruby-build
RUN /root/.rbenv/plugins/ruby-build/install.sh
ENV PATH /root/.rbenv/bin:$PATH
RUN echo 'eval "$(rbenv init -)"' >> /etc/profile.d/rbenv.sh # or /etc/profile
RUN echo 'eval "$(rbenv init -)"' >> .bashrc

ENV CONFIGURE_OPTS --disable-install-doc
ENV RUBY_VERSION 2.0.0-p598

RUN rbenv install $RUBY_VERSION
RUN echo 'gem: --no-rdoc --no-ri' >> /.gemrc
RUN bash -l -c 'rbenv global $RUBY_VERSION; gem install bundler;'
```

以下のコマンドでビルドを行う.

```
$ docker build --tag=yucchiy/ruby:2.0.0 .
```

このような用途のイメージは使いまわしやすいので, 上記のようにして, イメージを分割しておくと良い(更にいうと ベースとなるOSに
gitやsshといった, どこでも使いそうなパッケージをインストールしたベースパッケージを用意しておくとGood).
この時, [イメージサイズを小さくする工夫しておく](https://github.com/y-uuki/dockerfiles/blob/master/perl/5.20.1/Dockerfile)
と, シュッとしてなにかと便利です.

(余談だが, 特にMySQLなど, サーバーとクライアントで実行するコマンドが異なったり, 実行するコマンドが長くなると,
[Makefileでタスクを管理](https://github.com/yucchiy/dockerfiles/blob/master/mysql/Makefile)すると, 何かと便利である.)


### アプリケーションを実行するためのコンテナの作成

上記のRubyコンテナを用いて, サンプルの実行環境を構築する. 具体的には以下の`Dockerfile`を用意する.

```
FROM yucchiy/ruby:2.0.0

RUN \
    apt-get install -yq --force-yes mysql-client-5.5 libmysqlclient-dev libssl-dev nodejs && \
    apt-get clean

RUN mkdir -p /app
WORKDIR /app
COPY ./sample_app_rails_4/Gemfile /app/Gemfile
RUN bash -l -c 'bundle install'

COPY ./sample_app_rails_4 /app

EXPOSE 3000
CMD bash -l -c 'bundle exec rails s'
```

ポイントは`COPY ./sample_app_rails_4/Gemfile /app/Gemfile`で, 先に`Gemfile`をCOPYすることで,
`Gemfile`に変更がない時は, `bundle install`のフルインストールを行わない
[テクニック](http://ilikestuffblog.com/2014/01/06/how-to-skip-bundle-install-when-deploying-a-rails-app-to-docker/)を利用している.

## Figによる複数コンテナの管理

Figを用いて, 複数コンテナの管理をする. 具体的には`fig.yml`を用意する. 以下に, サンプルソースを, MySQLを用いて
実行するための`fig.yml`の例を示す.

```yaml
db:
  image: mysql:5.6
  environment:
    - MYSQL_ROOT_PASSWORD=himitsunopassword
  ports:
    - "3306"
  volumes:
    - /storage/mysql:/var/lib/mysql
web:
  build: .
  command: bash -l -c 'bundle exec rails server --port=3000 --binding=0.0.0.0'
  ports:
    - "3000:3000"
  volumes:
    - ./sample_app_rails_4:/app
  links:
    - db
```

 [公式ドキュメント](http://www.fig.sh/yml.html)と, [公式のRails環境の構築方法](http://www.fig.sh/rails.html)を参考にした.

今回, MySQLのコンテナとして, [https://registry.hub.docker.com/_/mysql/](https://registry.hub.docker.com/_/mysql/)を用いた.
設定を変更するにはいくつか方法があるが, `/etc/mysql`が`VOLUME`に登録されているらしく, 
複数の設定を変更したいときは, `/home/my-etcmysql:/etc/mysql`という感じで`/etc/mysql`に自分のディレクトリをマウントすることで,
ごっそり設定ファイルを入れ替えることができる.

次に, 以下のコマンドでコンテナのビルドを行う.

```
$ fig build
```

### データベースの設定

figで管理しているデータベースの設定は, [環境変数を介して取得できる](https://docs.docker.com/userguide/dockerlinks/).
アプリケーションのコンテナに設定されている環境変数は, 以下のコマンドで確認できる.

```
$ fig run web env
```

これを用いてデータベースの接続先を設定するには, 以下のように記述する.

```yaml
development:
  adapter: mysql2
  encoding: utf8
  database: sample_app_rails_4_development
  user: root
  password: <%= ENV['DB_ENV_MYSQL_ROOT_PASSWORD'] %>
  host: <%= ENV['DB_PORT_3306_TCP_ADDR'] %>
  port: <%= ENV['DB_PORT_3306_TCP_PORT'] %>
  timeout: 5000
```


### データベースの作成・マイグレーション

`fig run`を用いて, 以下のように行う.

```
$ fig run web bash -l -c 'bundle exec rake db:create db:migrate'
```

### Figによるコンテナの起動

`fig up`で, 管理しているコンテナをまとめて起動できる. また, 個別に起動をすることも可能である.


## まとめ

Figを用いて, 複数コンテナを管理する方法を紹介した. 今後は, 実際に開発する際のノウハウ(テストなど)や, 本番環境での運用についてまとめたい.


## 参考(環境構築)

### Homebrewによるツールのインストール

今回想定する環境では, 今回利用するDocker・Boot2docker・Figは, いずれもHomebrewでインストールできる.

```
$ brew install docker boot2docker fig
```

### Boot2dockerのセットアップ

boot2dockerを利用するためには, まず初期化を行う.

```
$ boot2docker init
```

次に, boot2dockerに環境変数を設定する. 以下のコマンドを実行することで, 一括で設定を行うことができる.

```
$(boot2docker initshell)
```

以下を実行することで出力される設定をそのまま`.bashrc`に書いても良いが,
[このコマンドをシェル起動時都度実行する](http://qiita.com/deeeet/items/518704402e9bc5995ecc)ほうが良い.


設定後は, 以下のコマンドでboot2dockerを操作できる.

```
$ boot2docker start # 起動
$ boot2docker stop  # 終了
```

### 参考ページ

- [Perlはもう古い、これからはDocker](http://yuuki.hatenablog.com/entry/next-is-docker)
- [【翻訳】DockerとVagrantによるRails開発環境](http://qiita.com/cieux1@github/items/b2294f8adddefb357a37)
- [Dockerコンテナ接続パターン (2014年冬)](http://deeeet.com/writing/2014/12/01/docker-link-pattern/)
