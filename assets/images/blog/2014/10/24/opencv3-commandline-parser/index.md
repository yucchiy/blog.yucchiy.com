---
title: OpenCV3のCommandLineParserを使って簡単にコマンドライン引数を受け取る
description: ''
pubDatetime: 2014-10-23T21:00:00.000Z
tags: []
---

OpenCVには`CommandLineParser`というクラスが2.3.0以降から実装されており, これを用いることで特にオプション引数を簡単にパースすることができる.
ただOpenCVの`CommandLineParser`は, **頻繁にその仕様が変わっており**, 特に日本語で調べると2.3, 2.4系の仕様について出てくるので,
今回はOpenCV3の`CommandLineParser`を紹介する.

## 使い方

`cv::CommandLineParser`は, `opencv2/core.hpp`で定義されているのでインクルードするようにする. (ただ, ほぼ確実にインクルードするファイルなのでまず忘れないと思う.)

サンプルは以下のとおり.

```cpp
#include <iostream>

#include <opencv2/core.hpp>

const cv::String keys =
    "{help h usage |      | print this message   }"
    "{@image1      |      | image1 for compare   }"
    "{@image2      |      | image2 for compare   }"
    "{@repeat      |1     | number               }"
    "{path         |.     | path to file         }"
    "{fps          | -1.0 | fps for output video }"
    "{N count      |100   | count of objects     }"
    "{ts timestamp |      | use time stamp       }"
    ;

int main(int argc, char* argv[]) {

    cv::CommandLineParser parser(argc, argv, keys);
    parser.about("A Sample of CommandLineParser");

    if (parser.has("h")) {
        parser.printMessage();
        return 0;
    }

    int N = parser.get<int>("N");
    double fps = parser.get<double>("fps");
    cv::String path = parser.get<cv::String>("path");

    bool use_time_stamp = parser.has("timestamp");

    cv::String img1 = parser.get<cv::String>(0);
    cv::String img2 = parser.get<cv::String>(1);

    if (!parser.check()) {
        parser.printErrors();
        return 1;
    }

    return 0;
}
```

以下のように使う.

```
/app -N=200 1.png 2.jpg 19 -ts
```

### 引数の指定

引数の指定は, `cv::String`で特定のフォーマットでコンストラクタに渡してやることで行う.
フォーマットは以下のとおり.

```cpp
"{ オプション名 | デフォルト引数 | オプションの説明 }"
```

オプション名には, スペース区切りでオプションを複数指定できる. `cv::CommandLineParser`にはショートオプションとロングオプションの
区別はなく, 例えば上の例だと`-h`でも`--h`でもヘルプが呼び出される.

オプション名の先頭の@をつけると普通の引数として解釈される.

デフォルト引数はそのままで, 何も指定しないとこの値が返却される.

オプションの説明は, `printMessage`メソッドを呼び出した時に表示される説明. 例えば上記の例で`printMessage`を呼び出すと以下のようなメッセージが表示される.

```
A Sample of CommandLineParser
Usage: cmd [params] image1 image2 repeat

        -N, --count (value:100)
                count of objects
        --fps (value:-1.0)
                fps for output video
        -h, --help, --usage (value:true)
                print this message
        --path (value:.)
                path to file
        --timestamp, --ts
                use time stamp

        image1
                image1 for compare
        image2
                image2 for compare
        repeat (value:1)
                number
```


### 引数の受け取り

引数の受け取りは, `get`メソッドを用いて行う. 引数に文字列を渡すと, それに対応したオプション引数の値を, int値を渡すと対応した引数を取得できる.
テンプレート引数には受け取りたい型を指定する.

オプション引数が指定されたかどうかを確認したい場合は, `has`メソッドを用いる事もできる. これはオプション引数が存在するかどうかをbool値で返すメソッドである.


### 引数のチェック

`check`メソッドを実行すると, `get`メソッドで指定した型について, 正しい引数の値を渡したかどうかをチェックして, その結果をbool値で受け取ることができる.

例えば上記のプログラムを, 以下のように実行した場合(つまり, 本来はint値を渡すところを文字列を渡した)

```
./cmd -N=hoge
```

以下の様なエラーを, `printErrors`メソッドにより出力することができる.

このメソッドには1点注意が必要で, **必ず`get`メソッドを呼び終わったあとに実行**しないとチェックの結果が正しく返却されない.


### まとめ

`cv::CommandLineParser`を用いると, 簡単にコマンドライン引数を解析することができる.
もちろんこれよりも高機能(?)なライブラリは存在するが, OpenCVのみの環境でコマンドラインツールを開発する際は手軽で良い.

ただ個人的に, 引数の指定の際に必須であるかというチェックを行えて, かつ`check`メソッドでチェックできると良いなーと思った.


### 参考

- [http://docs.opencv.org/trunk/modules/core/doc/command_line_parser.html](http://docs.opencv.org/trunk/modules/core/doc/command_line_parser.html)

