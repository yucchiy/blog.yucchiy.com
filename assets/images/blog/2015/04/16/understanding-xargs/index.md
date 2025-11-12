---
title: Understanding xargs
description: '研修中に同期からxargsの使い方について聞かれて, 僕も理解が曖昧だなーと思って調べてみたので備忘録代わりにブログに書いてみた.'
pubDatetime: 2015-04-16T10:00:00.000Z
tags:
  - unix
---

某社の新卒研修のLinux研修中にxargsについて同期から質問されてふと,
僕もfindとxargsを組み合わせて何かするくらいしか活用していないと気づいた.
せっかく研修中だしこのへんの理解を深めようと思い調べてみた.

## 概要

`xargs`の基本的な動作と, 便利なオプションを幾つか紹介する.
以下の環境で動作確認を行った.

- Mac OSX 10.10 Yosemite
- xargs

## xargsの動作

xargsは標準入力を受け取って, それを指定したコマンドに渡して実行するコマンドである.

```
$ seq 10 | xargs echo
1 2 3 4 5 6 7 8 9 10
```

seqコマンドは, 標準出力に連番の数字を改行付きで出力するコマンドである.
上記は以下のコマンドの実行と同じである.

```
echo 1 2 3 4 5 6 7 8 9 10
```

このようにxargsは, `seq 10`の標準出力を受け取ってechoの引数として
展開するというコマンドになる. 

## xargsのオプション

ここからは覚えておくと便利なオプションについて述べる.

### -n max-args

xargsの注意点として, 標準入力をすべて引数として展開してしまうことだ.
引数は渡せる数に上限があり(`ARG_MAX`で指定されている), 例えば以下の様な
操作をするときに問題がある.

```
$ find . -name '*.txt' | wc -l
   100000
$ find . -name '*.txt' | xargs rm
```

つまり, findコマンドが出力したすべてのファイルパスをrmコマンドに引数として
渡してしまい, 上記の上限に達したことでrmコマンドが実行できなくなってしまう.
この問題を解決する方法として, `-n`オプションで, xargsが渡す引数の数を指定する.

```
$ seq 9 | xargs -n 3 echo
1 2 3
4 5 6
7 8 9
```

上記の例ではxargsが渡す引数の上限を3とする. つまり以下のコマンドを実行される.

```
echo 1 2 3
echo 4 5 6
echo 7 8 9
```

上記を利用することで, 引数を渡しすぎないように調整することができる.

### -P max-procs

`-P`オプションでは, 並列実行するプロセス数を指定することができる.

```
$ find . -name '*.txt' | xargs -P 4 -n 1 ./omotaiscript
```

xargsで簡単に並列実行できて便利である. 例えば動画のエンコードなどを並列に
実行したい場合などに便利かもしれない.

### -I replace-str

xargsでは, 指定したコマンドの末尾に引数を追加するが, コマンドによっては
引数を渡す場所を指定したい場合もある. これは`-I`オプションを用いることで
実現できる.
`-I replace-str`で設定した文字列`replace-str`は, コマンド中で引数に置き換える.

```
$ ls
$ seq 10 | xargs -I {} touch "{}.txt"
$ ls
1.txt  10.txt 2.txt  3.txt  4.txt  5.txt  6.txt  7.txt  8.txt  9.txt
```

## 参考ページ

- [http://www.thegeekstuff.com/2013/12/xargs-examples/](http://www.thegeekstuff.com/2013/12/xargs-examples/)
- [http://tagomoris.hatenablog.com/entry/20110513/1305267021](http://tagomoris.hatenablog.com/entry/20110513/1305267021)
