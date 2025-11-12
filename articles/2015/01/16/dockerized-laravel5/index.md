---
title: Laravel5をDockerで動かす
description: ''
pubDatetime: 2015-01-16T00:00:00.000Z
tags: []
---

Laravel5で構築したアプリケーションの開発環境をDocker化するための方法を紹介する.

サンプルアプリケーションは[こちら](https://github.com/yucchiy/dockerized-laravel5)で確認できる.

## 準備

以下の環境でLaravel5が動作するように, 環境を構築する.

- OS
    - Ubuntu 14.04
- ミドルウェア
    - Nginx
    - php-fpm 5.5
    - MySQL 5.5

### Laravel5のインストール

まず, laravel5をインストールする. インストールにはcomposerを用いる. create-projectの時に, `dev-develop`を指定するとインストールできる.

```
mkdir dockerized-laravel5
cd dockerized-laravel5
composer create-project laravel/laravel application dev-develop
```

## PHPコンテナ

nginx+php-fpmな環境で, laravelが動作するようにDockerfileを記述する.

Dockerでは, １コンテナ１プロセスにするのが好ましいが, 今回はnginxとphp-fpmを１コンテナで動かすために, `supervisord`をもちいる.

Dockerfileは以下のとおり.

```
FROM ubuntu:14.04

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update

RUN apt-get install -yq --force-yes build-essential wget curl git ssh nginx nodejs-legacy npm mysql-client supervisor

RUN apt-get install -yq --force-yes  php5-cli php5 php5-fpm php5-mysql php5-curl php5-mcrypt php5-memcached && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN php5enmod mcrypt

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN mkdir -p /app
WORKDIR /app

ADD ./application/database /app/database
ADD ./application/tests /app/tests
ADD ./application/composer.json /app/composer.json
ADD ./application/composer.lock /app/composer.lock
RUN composer install --no-scripts

ADD ./application /app
RUN php artisan clear-compiled
RUN php artisan optimize

RUN usermod -u 1000 www-data
RUN groupmod -g 1000 www-data

RUN chown -R www-data:www-data /app

RUN echo "daemon off;" >> /etc/nginx/nginx.conf
ADD docker/nginx-site.conf /etc/nginx/sites-available/default

ADD docker/supervisord.conf /etc/supervisord.conf

EXPOSE 80

CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisord.conf"]
```

supervisord.conf

```
[unix_http_server]
file=/tmp/supervisor.sock

[supervisord]
logfile=/tmp/supervisord.log
pidfile=/tmp/supervisord.pid
nodaemon=false

[rpcinterface:supervisor]
supervisor.rpcinterface_factory = supervisor.rpcinterface:make_main_rpcinterface

[supervisorctl]
serverurl=unix:///tmp/supervisor.sock ; use a unix:// URL  for a unix socket

[program:php5-fpm]
command=/usr/sbin/php5-fpm -c /etc/php5/fpm --nodaemonize

[program:nginx]
command=/usr/sbin/nginx
```

このDockerfileのポイントについて説明する.

### composer.jsonを先にADDする

`ADD ./application /app`を行ったあとに`RUN composer install`とすると, `composer.json`の変更の有無にかかわらず, **`./application`内のどれかのファイルが変更されるごとに** `composer install`が走る.
そこで, 先に`ADD ./application/composer.json /app/composer.json`と`RUN composer install`を行って, その後に`/application`を`ADD`することで, `composer.json`に変更がない場合は, その行がキャッシュされる.
これは, [RubyのBundlerで紹介されているテクニック](http://ilikestuffblog.com/2014/01/06/how-to-skip-bundle-install-when-deploying-a-rails-app-to-docker/)をそのまま用いている.

ただし, composerの場合はそのままではうまくいかない. 問題は２つある.

- `composer.json`の`autoload`に指定された`classmap`に対応するクラスは, `composer install`時に存在する必要がある.
- `composer install`後に, `composer.json`内の`scripts`に記述された処理が実行される.

この対処方法について述べる.

#### composerのautoloadに対応する

まず, `composer.json`のautoloadに対応する. といっても, `composer install`時にautoloadが必要とするクラスが存在するだけでOKなので,
`application`内の, **`database`と`tests`ディレクトリをADD**すれば良い.

```
ADD ./application/database /app/database
ADD ./application/tests /app/tests
```

#### composerのscriptsに対応する

comopserは, 実行後に特定の処理を実行するためのフックが存在する. 具体的には`composer.json`内の`scripts`の項目の処理が実行される.

laravelでは, `composer install`後に, 以下の処理が実行される.

```
php artisan clear-compiled
php artisan optimize
```

`artisan`は, laravelのコマンドラインツールだが, これは**laravelのアプリケーションディレクトリが存在しないと実行できない**.
上記のテクニックでは, `composer install`時には`./application`内のすべてのファイルが存在しないため, `artisan`が正常に実行できずにエラーとなる.

この問題は, `composer install`実行後に, `scripts`に記述された処理を行わず, **laravelのアプリケーションディレクトリを追加後に, `scripts`の処理を行う**ことで対処できる.

具体的には, `composer install`を`--no-scripts`付きで実行し, `./application`をADDした後に, scriptsの項目の処理を実行する.

```
RUN composer install --no-scripts

ADD ./application /app
RUN php artisan clear-compiled
RUN php artisan optimize
```

### .dockerignore

Dockerfileとは直接は関係ないが, Dockerコンテナに含める必要のないファイルやディレクトリは, `.dockerignore`に記述することで, ADDやCOPYの対象から外れる.

`.git`などは省いておくのと, laravelアプリケーションディレクトリ内の, **`vendor`と`composer.lock`も対象から省いて**おかないと, Dockerコンテナ側でビルドした内容と, Dockerホスト側のディレクトリには差異が生じて, アプリケーションが動かない可能性がある.


## MySQLコンテナ

[この記事](http://blog.yucchiy.com/2014/12/30/rails-docker-fig/)と同様に, Docker Hub公式の[https://registry.hub.docker.com/_/mysql/](https://registry.hub.docker.com/_/mysql/)を用いる.

`dockerized-laravel5`直下に`fig.xml`を用意し, 以下のように記述する.

環境変数を`environment:`に設定することで, MySQLの設定を変更することができる. 

また, `my.cnf`などの設定を変更したい場合は, Dockerコンテナ内の`/etc/mysql`に, **ローカルのディレクトリをマウントする**ことで設定を置き換える方法もある(`/path/to/mysql:/etc/mysql`をvolumesに追記する).

## fig.yml

以上のDockerfileからPHPコンテナを立ち上げるためのFigの設定を示す. `dockerized-laravel5`ディレクトリ直下に, 以下の様な内容の`fig.yml`を設置する.

```yaml
db:
  image: mysql:5.5
  environment:
    - MYSQL_ROOT_PASSWORD=himitsunopassword
  ports:
    - "3306"
  volumes:
    - /var/lib/mysql
web:
  build: .
  ports:
    - "8080:80"
  volumes:
    - ./application:/app
  links:
    - db
```

開発用途で利用するために, `volumes`項目に, `./application:/app`と記述する. こうすることで, ローカルでファイルを編集した内容が即座にDockerコンテナ内に反映される.


### PHPコンテナとMySQLコンテナのリンクと設定

上記の設定では, Dockerのlink機能を用いて, PHPコンテナからMySQLコンテナ内のデータベースを利用できるようになっている.

アプリケーションからMySQLコンテナのDBに接続するための設定は, 環境変数を経由して取得できる.

環境変数の一覧は, 以下のように確認できる.

```
$ docker exec -it dockerizedlaravel5_web_1 env

DB_1_PORT_3306_TCP_ADDR=172.17.0.13
DB_1_PORT_3306_TCP_PORT=3306
DB_1_NAME=/dockerizedlaravel5_web_1/db_1
DB_1_ENV_MYSQL_ROOT_PASSWORD=himitsunopassword
```

laravelのデータベースの設定は, `env`関数を利用して行う.

```php
    'mysql' => [
        'driver'    => 'mysql',
        'host'      => env('DB_1_PORT_3306_TCP_ADDR', 'localhost'),
        'database'  => env('DB_DATABASE', 'forge'),
        'username'  => env('DB_USERNAME', 'root'),
        'password'  => env('DB_1_ENV_MYSQL_ROOT_PASSWORD', ''),
        'charset'   => 'utf8',
        'collation' => 'utf8_unicode_ci',
        'prefix'    => '',
        'strict'    => false,
    ],
```

## 開発環境として利用する

figで管理しているコンテナの状態は, `fig ps`で確認できる.

```
$ fig ps
          Name                        Command               State             Ports
--------------------------------------------------------------------------------------------
dockerizedlaravel5_db_1    /entrypoint.sh mysqld            Exit 0   0.0.0.0:49153->3306/tcp
dockerizedlaravel5_web_1   /usr/bin/supervisord -n -c ...   Exit 0
```

起動は, `fig up`で行う.
```
$ fig up
Recreating dockerizedlaravel5_db_1...
Recreating dockerizedlaravel5_web_1...
Attaching to dockerizedlaravel5_db_1, dockerizedlaravel5_web_1
```

起動中のコンテナでコマンドを実行するには`docker exec`を利用する.

```
$ docker exec dockerizedlaravel5_web_1 ./artisan route:list
+--------+--------------------------------+-------------------------------------------------------+------+------------------------------------------------------------+------------+
| Domain | Method                         | URI                                                   | Name | Action                                                     | Middleware |
+--------+--------------------------------+-------------------------------------------------------+------+------------------------------------------------------------+------------+
|        | GET|HEAD                       | /                                                     |      | App\Http\Controllers\WelcomeController@index               |            |
|        | GET|HEAD                       | home                                                  |      | App\Http\Controllers\HomeController@index                  |            |
|        | GET|HEAD                       | auth/register/{one?}/{two?}/{three?}/{four?}/{five?}  |      | App\Http\Controllers\Auth\AuthController@getRegister       |            |
|        | POST                           | auth/register/{one?}/{two?}/{three?}/{four?}/{five?}  |      | App\Http\Controllers\Auth\AuthController@postRegister      |            |
|        | GET|HEAD                       | auth/login/{one?}/{two?}/{three?}/{four?}/{five?}     |      | App\Http\Controllers\Auth\AuthController@getLogin          |            |
|        | POST                           | auth/login/{one?}/{two?}/{three?}/{four?}/{five?}     |      | App\Http\Controllers\Auth\AuthController@postLogin         |            |
|        | GET|HEAD                       | auth/logout/{one?}/{two?}/{three?}/{four?}/{five?}    |      | App\Http\Controllers\Auth\AuthController@getLogout         |            |
|        | GET|HEAD|POST|PUT|PATCH|DELETE | auth/{_missing}                                       |      | App\Http\Controllers\Auth\AuthController@missingMethod     |            |
|        | GET|HEAD                       | password/email/{one?}/{two?}/{three?}/{four?}/{five?} |      | App\Http\Controllers\Auth\PasswordController@getEmail      |            |
|        | POST                           | password/email/{one?}/{two?}/{three?}/{four?}/{five?} |      | App\Http\Controllers\Auth\PasswordController@postEmail     |            |
|        | GET|HEAD                       | password/reset/{one?}/{two?}/{three?}/{four?}/{five?} |      | App\Http\Controllers\Auth\PasswordController@getReset      |            |
|        | POST                           | password/reset/{one?}/{two?}/{three?}/{four?}/{five?} |      | App\Http\Controllers\Auth\PasswordController@postReset     |            |
|        | GET|HEAD|POST|PUT|PATCH|DELETE | password/{_missing}                                   |      | App\Http\Controllers\Auth\PasswordController@missingMethod |            |
+--------+--------------------------------+-------------------------------------------------------+------+------------------------------------------------------------+------------+
```

また, コンテナ内にログインしたい場合は, `docker exec`で, `/bin/bash`などを実行する.

```
$ docker exec -it dockerizedlaravel5_web_1 /bin/bash
root@c489f074bb66:/app# ls
app  artisan  bootstrap  composer.json  composer.lock  config  database  gulpfile.js  package.json  phpspec.yml  phpunit.xml  public  readme.md  resources  storage  tests  vendor
```


## まとめ

LaravelをDockerで動かすための方法を紹介した.

また [このテクニック](http://ilikestuffblog.com/2014/01/06/how-to-skip-bundle-install-when-deploying-a-rails-app-to-docker/)をcomposerに応用するためのテクニックをいくつか示した.

次に, 用意したDockerfileを用いて, テスト・CI・デプロイについて紹介していきたい.


