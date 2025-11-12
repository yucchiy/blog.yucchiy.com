---
title: Composer管理のPHPプロジェクトから実行可能なpharを作る
description: >-
  phar-composerというComposerプロジェクトから実行可能なpharを作ることで、気軽に持ち運べるコマンドラインツールをPHPで手軽に作れて便利
pubDatetime: 2017-05-08T01:00:00.000Z
tags:
  - PHP
  - Composer
  - Phar
---

普段私は、Bashなどで書くには少し複雑なスクリプトをPHPで書くこと多いです。ところで今日のPHPは、[Composer](https://getcomposer.org/)を用いてパッケージの管理をすることが普通かと思います。

Composerには[vendor binary](https://getcomposer.org/doc/articles/vendor-binaries.md#what-is-a-vendor-binary-)と呼ばれる、コマンドラインツールとして利用するスクリプトを管理するための仕組みが存在します。
これを使うことPHPで作成するコマンドラインツールで外部ライブラリの利用などが簡単にでき、ツールの実装が楽になります。

ですが、上記で作成したコマンドラインツールを実行するには、ツールが利用している外部ライブラリの[Autoload](https://getcomposer.org/doc/01-basic-usage.md#autoloading)のために、**プロジェクトのディレクトリをそのままコピーしない**といけなく、持ち運びは若干不便かと思います。

今回紹介する[phar-composer](https://github.com/clue/phar-composer)は、vendor binaryを実行可能な1ファイルのphar(PHP Archive)に変更してくれるツールです。
これを用いることで**利用する外部ライブラリを埋め込んだ**スクリプトを作成してくれるため、上記の不便さを解消できます。

## インストール

2つの方法があります。

1. `phar-composer.phar`を利用する
2. `composer.json`に依存関係を書く

1は[Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx)のように、それ単体で実行可能なpharを落としてきて利用する方法で、2はプロジェクトの依存関係として、`phar-composer`を定義し、vendor binaryとして利用する方法です。
公式では1を推奨しています。

## 利用方法

HTTP Clientの[Guzzle](http://docs.guzzlephp.org/en/latest/)を利用するスクリプトを書いて、pharを作ってみます。

```
$ mkdir sample-phar-compose
$ cd sample-phar-compose
$ composer.phar init # composer.jsonが作られる
$ vim composer.json # composer.jsonを編集して、requireとbinの項目を追記する
$ cat composer.json 
{
    "name": "yucchiy/sample-phar-composer",
    "description": "phar-composer sample",
    "authors": [
        {
            "name": "Yuichiro MUKAI"
        }
    ],
    "bin": [
        "bin/sample.php"
    ],
    "require": {
        "guzzlehttp/guzzle": "~6.0"
    }
}
$ composer.phar update # 依存するライブラリをダウンロードし、vendor/autoload.php を作る
```

`bin/sample.php`をvendor binaryとして登録したので、このファイルを編集します。
今回は、Guzzleの[サンプル](http://docs.guzzlephp.org/en/latest/)をそのまま動かしてみます。

```
<?php

use GuzzleHttp\Client;

$client = new GuzzleHttp\Client();

// Send an asynchronous request.
$request = new \GuzzleHttp\Psr7\Request('GET', 'http://httpbin.org');
$promise = $client->sendAsync($request)->then(function ($response) {
    echo 'I completed! ' . $response->getBody();
});

$promise->wait();
```

そのまま実行してみます。

```
$ php bin/sample.php 
I completed! <!DOCTYPE html>
... 
```

### pharファイルを作成する

スクリプトが作成できたので、pharファイルを作成してみます。`phar-composer`は前述した1の方法でのインストールを前提とします。

```
$ phar-composer.phar build . 
$ phar-composer.phar build .
Your configuration disabled writing phar files (phar.readonly = On), please update your configuration or run with "php -d phar.readonly=off /Users/a13946/bin/phar-composer.phar", trying to re-spawn with correct config
[1/1] Creating phar sample-phar-composer.phar
  - Remove existing file sample-phar-composer.phar (620.5 KiB)
  - Adding main package
    Adding whole project directory "/Users/a13946/Desktop/hoge/"
  - Adding composer base files
  - Adding dependency "guzzlehttp/promises" from "vendor/guzzlehttp/promises/"
    Adding whole project directory "/Users/a13946/Desktop/hoge/vendor/guzzlehttp/promises/"
  - Adding dependency "psr/http-message" from "vendor/psr/http-message/"
    Adding whole project directory "/Users/a13946/Desktop/hoge/vendor/psr/http-message/"
  - Adding dependency "guzzlehttp/psr7" from "vendor/guzzlehttp/psr7/"
    Adding whole project directory "/Users/a13946/Desktop/hoge/vendor/guzzlehttp/psr7/"
  - Adding dependency "guzzlehttp/guzzle" from "vendor/guzzlehttp/guzzle/"
    Adding whole project directory "/Users/a13946/Desktop/hoge/vendor/guzzlehttp/guzzle/"
  - Setting main/stub
    Using referenced chmod 0644
    Applying chmod 0644

    OK - Creating sample-phar-composer.phar (620.5 KiB) completed after 0.3s
```

pharファイルの作成には、サブコマンドの`build`を用います。第2引数にはビルド対象を指定します。結構[いろいろな指定方法](https://github.com/clue/phar-composer#phar-composer-build)があるのですが、`composer.json`が存在するディレクトリを指定すればよい、ということを覚えておけば十分そうです。

これで生成される`sample-phar-composer.phar`が、お目当てのスクリプトファイルになります。
実行してみます。(http通信が成功していれば&外部のコンテンツが変わってなければ)先程と同じ結果が得られます。

```
php sample-phar-composer.phar
I completed! <!DOCTYPE html>
... 

```

## スクリプト作成のコツ

コマンドラインツールとしてpharを作成する場合、そのpharファイルはサイズが小さいことが望ましいかと思います。

(実装を追っていないのではっきりしたことは言えないのですが、依存関係を足してみたりして試した限りでは)phar-composerではautoloadしているPHPファイルをスクリプトに埋め込む際に、そのスクリプト内での利用に関わらず、Composerで解決したパッケージを埋め込んでそうです。

なので

- 1スクリプト1プロジェクトにしておく
- 必要ない依存関係は書かない。または依存するパッケージが少なくなるように心がける

とすることで、作成されるpharを小さくできそうです。

## まとめ

phar-composerを用いることで、vendor binaryを1ファイルの実行可能なpharにビルドでき、気軽に持ち運べるPHPスクリプトを簡単に作ることができました。
