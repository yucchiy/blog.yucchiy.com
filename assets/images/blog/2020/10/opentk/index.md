---
title: OpenTKを用いてOpenGLプログラミングする
description: ''
pubDatetime: 2020-10-29T00:00:00.000Z
tags:
  - OpenTK
  - C#
  - OpenGL
---

ゲームエンジンの内部実装に興味があったので、[思い切ってはじめてみた](https://github.com/yucchiy/Minity)。
実装言語は自分が書き慣れているC#で、グラフィックライブラリは、VulkanやMetalなどモダンな物はあるものの、まずはOpenGLではじめることにした。

C#でOpenGLを扱うライブラリとして、調べると[OpenGL.Net](luca-piccioni/OpenGL.Net)・[Silk.NET](https://github.com/Ultz/Silk.NET)・[OpenTK](https://github.com/opentk/opentk)・[opengl4csharp](https://github.com/giawa/opengl4csharp)あたりが引っかかったが、今でも開発が頻繁そうな[OpenTK](https://opentk.net/learn/index.html)を利用することにした。

OpenTKのTKは**T**ool**k**itの頭文字で、OpenGLやOpenAL、OpenCLの薄いラッパーを提供するライブラリ。

GUIを作る上で面倒なウインドウシステムや、マウスやキーボードなどの入力処理も提供されていて、これらの実装は最新のバージョンであるv4では[GLFW](https://www.glfw.org/)ベースで書かれている。

## 環境構築

先述の通り、最新のOpenTKはglfwベースで書かれているので、glfwのインストールが必要になる。homebrewでは下記のようにインストールできる。

```
$ brew install glfw
```

あとは、C#のプロジェクトを作成して、そのプロジェクトにNuGetなどのパッケージマネジャーで[OpenTK](https://www.nuget.org/packages/OpenTK/_をインストールする。.NET CLIでは下記のようにインストールできる。

```
$ dotnet add package OpenTK --version 4.0.6
```

余談だが.NET CLIでプロジェクトは下記のコマンドで作成できる。下記はコンソールアプリケーションの空プロジェクトを作成している。

```
$ dotnet new console
```

## ウインドウの表示

[公式ドキュメント](https://opentk.net/learn/chapter1/1-creating-a-window.html)はv3のAPIで書かれているのでサンプルがそのまま動かないが、概ねそのまま動く。[自身のプロジェクトでは](https://github.com/yucchiy/Minity)では下記で空ウインドウを表示できた。

```cs
using OpenTK.Windowing.Common;
using OpenTK.Windowing.Desktop;

namespace Minity
{
    public class MinityWindow : GameWindow
    {
        public MinityWindow() : base(
            new GameWindowSettings()
            {
                RenderFrequency = 60.0,
                UpdateFrequency = 60.0,
            },
            new NativeWindowSettings()
            {
                APIVersion = new System.Version(3, 2),
                Flags = ContextFlags.ForwardCompatible,
            }
        )
        {
        }
    }
}
```

ウインドウの基底クラスの`GameWindow`の名前空間が`OpenTK.Windowing.Desktop`に移動している。また著者はmacOSなので、基底のコンストラクタに`NativeWindowSettings`でOpenGLのバージョンを指定している点が異なる。
macOSではOpenGLのバージョンを3.2に指定し、かつ`ContextFlags.ForwardCompatible`を指定（前方互換プロファイル、つまり古い機能を使えないよう指定）しないと起動できない。

ちなみに、macOSで利用できる(厳密にはマシンに搭載されているグラフィックボードに依存している)OpenGLのバージョンは、[https://developer.apple.com/opengl/OpenGL-Capabilities-Tables.pdf](https://developer.apple.com/opengl/OpenGL-Capabilities-Tables.pdf)で確認できる。

あとは、上記のウインドウをエントリポイントから呼び出す。

```cs
using System;

namespace Minity
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var window = new MinityWindow())
            {
                window.Run();
            }
        }
    }
}
```

全容は[こちら](https://github.com/yucchiy/Minity/tree/4d934a8202fac24423fb6a8379e37ef30bab45e4)。

## 参考

- [(3) OpenGL のバージョンとプロファイルの指定 - 床井研究室](http://marina.sys.wakayama-u.ac.jp/~tokoi/?date=20120908)
