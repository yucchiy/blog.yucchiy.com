---
date: "2015-05-09T10:00:00+09:00"
title: "Lumenを触った所感"
description: "LumenというLaravel5ベースなマイクロフレームワークがリリースされたので, 使ってみた所感といくつかハマりそうなポイントを備忘録がわりにメモ."
tags: ["php", "Lumen", "Laravel"]
---

![hello-lumen](./hello-lumen.png)

4月の中旬にLaravel5ベースなマイクロフレームワークである[Lumen](https://github.com/laravel/lumen)がリリースされた.
Lumenは, Laravel5から **ウェブフレームワークとして動作するために必要な機能のみを残した** 感じのフレームワークだが,
Laravel5のServiceProviderとして提供されているライブラリはほとんどそのまま利用できるため, **Laravel5の資産を使いまわせる仕組みになっている**.
また, 開発規模が大きくなった場合でも, **`app`ディレクトリ等をほぼそのままインポートすることでLaravel5にのせかえることができる** ため,
とりあえずミニマムにLumenでプロジェクトをスタートさせて, 大きくなったらLaravel5にのせかえる, なんてことも容易にできる.

## ディレクトリ構成と設定

実際にディレクトリ構造を見ていく. まずはLaravel5のディレクトリ構造.

```
% tree -L 1 -d
.
├── app
├── bootstrap
├── config
├── database
├── public
├── resources
├── storage
├── tests
└── vendor

9 directories
```

次にLumenのディレクトリ構造.

```
% tree -L 1 -d
.
├── app
├── bootstrap
├── database
├── public
├── resources
├── storage
├── tests
└── vendor

8 directories
```

Lumenでは, 基本的にはプロジェクトルート以下置いた`.env`を用いて設定を行うことが[推奨されている](http://lumen.laravel.com/docs/configuration#configuration-files)ため, `config`ディレクトリがデフォルトで存在しない.
Lumenのインストール時に, `.env.example`がサンプルファイルとして用意されており, これをリネームして利用すればよい.
ただし, 1点嵌りポイントとして, **デフォルトで`.env`を読み込む設定になっていない**. `.env`を読み込むようにするには`bootstrap/app.php`の以下のコメントアウトを外す必要がある.

```
<?php

require_once __DIR__.'/../vendor/autoload.php';

Dotenv::load(__DIR__.'/../'); // ここのコメントを外す
```

`.env`による設定を推奨しているが, もう少し柔軟に設定したいとか, 外部パッケージを導入したときの設定を書く必要があるときがある.
そういうときは, 今までどおりプロジェクトルートに`config`ディレクトリを作成して, そこの設定ファイルをおいて, `$app->configure('hoge')`を書くことで読み込まれる.
デフォルトの設定は`vendor/laravel/lumen-framework/config`にあるので, これをコピーすれば良い.

ここで`bootstrap/app.php`について触れるついでに追記しておくと, LumenではLaravel5でお馴染みのEloquentやFacadeが利用できるが, デフォルトではロードされていない.
これらを利用するには, `bootstrap/app.php`内の以下のコメントを外せば良い.

```
// $app->withFacades();

// $app->withEloquent();
```

また, デフォルトではセッションやCSRF関係の設定も無効になっている. これらはLumenではミドルウェアを差し込むことによって設定を有効にできる.
例えばセッションを有効にするには, 以下の`StartSession`のコメントを外せば良い.

```
// 必要に応じてコメントを外す

// $app->middleware([
//     // 'Illuminate\Cookie\Middleware\EncryptCookies',
//     // 'Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse',
//     // 'Illuminate\Session\Middleware\StartSession',
//     // 'Illuminate\View\Middleware\ShareErrorsFromSession',
//     // 'Laravel\Lumen\Http\Middleware\VerifyCsrfToken',
// ]);
```

Sessionは[Redirects](http://lumen.laravel.com/docs/responses#redirects)や[Old Input](http://lumen.laravel.com/docs/requests#old-input), 認証を書くときなどアプリケーションでよく使うものなので特に理由がなければ有効にしておけば良い.

次に`app`内のディレクトリ構成について見ていく. こちらはLaravel5.

```
% tree app -d
app
├── Commands
├── Console
│   └── Commands
├── Events
├── Exceptions
├── Handlers
│   ├── Commands
│   └── Events
├── Http
│   ├── Controllers
│   │   └── Auth
│   ├── Middleware
│   └── Requests
├── Providers
└── Services

15 directories
```

こちらはLumen.

```
% tree app -d
app
├── Console
│   └── Commands
├── Exceptions
├── Http
│   ├── Controllers
│   └── Middleware
├── Jobs
└── Providers

8 directorie
```

全体的にシュッっとしている. `Jobs`ディレクトリだけ見慣れないけど, 多分`Command`とかのかわりになる気がする.
必要になったら自分で好きにディレクトリ構造を足していくという感じで, ミニマムに保たれているという感じがする.

## 使ってみる

Lumenでは, PHPのビルドインサーバーがサポートされているため, apache+mod_phpやphp-fpmなどを利用しなくても, `artisan serve`だけで簡単にサーバーを立ち上げることができる.
開発時はビルドインサーバーでやって, 本番ではapacheやnginx + php-fpmみたいな構成にしてやればよい.

```
% composer global require "laravel/lumen-installer=~1.0"
% lumen new lumen-project
% cd lumen-project
% php artisan serve
```

先ほど紹介したように`.env`により設定を行う.

```
% cp .env.example .env
% vim bootstrap/app.php
<?php

require_once __DIR__.'/../vendor/autoload.php';

Dotenv::load(__DIR__.'/../'); // ここのコメントを外す
```

Lumenではデフォルトで本番環境用の設定となる. 具体的にはデバッグモードが無効になっており, エラーメッセージが出ない.
そのため, 開発時は`.env`内の`APP_DEBUG`を`true`にしておく方が何かと便利だと思う.

```
% cat .env
APP_ENV=local
APP_DEBUG=true
APP_KEY=SomeRandomString

DB_HOST=localhost
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret

CACHE_DRIVER=file
SESSION_DRIVER=file
QUEUE_DRIVER=sync

MAIL_DRIVER=smtp
MAIL_HOST=mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
```

設定ができたら, `app/routes.php`でルーティングを設定して開発していく. 基本はLaravel5と一緒で, 使ったことある人は違和感なく開発ができると思う.
コントローラは, `App\Http\Controllers\Controller`を継承するようにする. ビューはLaravel5と同様にbladeテンプレートが利用できる. 使い方も特に変わらない.

```
% cat app/routes.php
<?php

$app->get('/', ['uses' => '\App\Http\Controllers\WelcomeController@index']);
% cat app/Http/Controllers/WelcomeController.php
<?php namespace App\Http\Controllers;

class WelcomeController extends Controller {
    public function index()
    {
        return view('welcome_index');
    }
}
% cat resources/views/welcome_index.blade.php
<h1>Hello Lumen</h1>
```

ミニマムだなと感じたのは, ルーティングでは[グループがネスト出来なかったり](https://github.com/laravel/lumen-framework/issues/85),
`$router->controller(s)`がなかったりする点である.

> Lumen's routing is intentionally simpler so that performance is maximal. I don't think nested groups are supported.

上のIssueに上がっているように, **Lumen自体は小さく・パフォーマンスを重視をコンセプト** にしていて, それ以外は個人でよろしくやってくれってスタンスが感じられる.
