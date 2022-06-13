---
date: "2021-09-24T09:00:00+08:00"
draft: false
title: "Performance Testing Extensionを用いてUnityで実機でパフォーマンス計測をおこなう"
tags: ["Unity", "Performance", "Unity Test Runnner"]

---

[Unity Test Runner](https://docs.unity3d.com/2020.3/Documentation/Manual/testing-editortestsrunner.html) と [Performance Testing Extension for Unity Test Framework](https://docs.unity.cn/Packages/com.unity.test-framework.performance@2.8/manual/index.html)を利用して、実機でパフォーマンス計測を行う方法について紹介します。

## 概要

[Performance Testing Extension for Unity Test Framework](https://docs.unity.cn/Packages/com.unity.test-framework.performance@2.8/manual/index.html)は[Unity Test Runner](https://docs.unity3d.com/2020.3/Documentation/Manual/testing-editortestsrunner.html)上でパフォーマンス計測を行うためのライブラリで、特定の属性（`PerformanceAttribute`）を付与したテストに対してパフォーマンスを計測し、その結果を集計して結果をわかりやすく表示します。

さらにUnity Test Runnerにはテストを実機上で実行するための機能があります。これを組み合わせることで実機上でパフォーマンスを計測することができます。

## パッケージのインストール

まず今回利用する「Performance Testing API」パッケージをインストールします。インストール手順は下記のとおりです。

1. `Packages`以下に格納されている`manifest.json`をテキストエディタなどで開きます
2. `dependencies`項目に`"com.unity.test-framework.performance": "2.8.0-preview",`を追記します
    ```json
    {
      "dependencies": {
        "com.unity.test-framework.performance": "2.8.0-preview",
        "com.unity.2d.animation": "5.0.5",
        "com.unity.2d.pixel-perfect": "4.0.1",
    ```
3. `manifest.json`を保存してUnityを開くと、パッケージがインストールされます

「メニューのWindow > Package Manager」の「In Project」を開いて、下記のように「Performance testing API」の項目が入っていればインストールが成功です。

![](2021-09-24-02-27-50.png)


## テスト用のアセンブリの作成

テストを記述するには（Unity Test Runnerを利用するには）テスト用のアセンブリを作成してテストに必要なアセンブリを参照する必要があります。
具体的にはAssembly Definitionを定義して、そのAssembly Definition References内で `UnityEngine.TestRunner` を参照し、更に`nunit.framework.dll`を Assembly Referencesに追加します。

Unityでは上記を「Project Viewで右クリック > Create > Testing > Tests Assembly Folder」を実行すると、テスト用を格納するためのフォルダ及び`asmdef`を生成します。

![](2021-09-24-03-40-51.png)

さらに「Performance testing Extension」を利用するために Assembly Definition Referencesに `Unity.PerformanceTesting` を追加します。

![作成されたテスト用のasmdefにUnity.PerformanceTestingを追加](2021-09-24-03-44-25.png)

これで「Performance testing Extension」を利用する準備が整いました。

## パフォーマンス計測用のテストをかく

先程作成したフォルダ内にパフォーマンス計測スクリプトを記述していきます。今回は特定のメソッド（アクション）のパフォーマンス計測を行ってみます。また実機上で動作させることを前提にしているので「Play Mode」テストを記述します。

テストを記述するにはメソッドを定義して`Test`または`UnityTest`属性をします。合わせて`Performance`属性を指定すると「Performance testing API」がそのテストがパフォーマンスを計測する対象であることを認識します。

特定メソッドのパフォーマンス計測には`Unity.PerformanceTesting.Measure.Method`を利用します。`Measure.Method`に計測したいメソッドを渡して、`Run`を実行することでパフォーマンス計測が行えます。具体的には下記のように記述します。


```cs
using NUnit.Framework;
using Unity.PerformanceTesting;
using UnityEngine;

public class HelloPerformanceCheck
{
    [Test, Performance]
    public void FirstPerformanceCheck()
    {
        var a = Vector2.one;
        var b = Vector2.zero;

        Measure.Method(() =>
        {
            Vector2.MoveTowards(a, b, 0.5f);
            Vector2.ClampMagnitude(a, 0.5f);
            Vector2.Reflect(a, b);
            Vector2.SignedAngle(a, b);
        })
            .Run();
    }
}
```

あとはUnity Test Runnerを実行することでパフォーマンスを計測できます。「メニューのWindow > General > Test Runner」でTest Runnerウインドウを起動して、画面左上の「Run All」ないし計測したいテストを単体で実行することでテストを実行しておきます。

![Test Runnerを起動してテストを実行する](2021-09-24-04-06-25.png)

結果を確認するには「メニューWindow > Analysis > Performance Test Report」でTest Reportウインドウを開きます。「Test View」内に集計したテストとその結果が表示されています。またそれぞれ選択すると「Sample Group View」に計測結果の詳細（パフォーマンス計測は通常複数回メソッドを実行して、その平均や分散を集計しますがその内訳）などが確認できます。

![](2021-09-24-04-08-29.png)


## パフォーマンス計測を実機上で行う

最後に、上記のパフォーマンス計測をiOSやAndroidなどの実機上で行います。

前述の通りUnity Test RunnerにはPlay Mode Testsを実機上で行う機能が備わっています。先程のTest Runnerウインドウ画面右上の「Run All Tests」をクリックすることで実機でテストが実行でき、そのテストのパフォーマンスの集計結果をTest Reportウインドウから確認できます。

テストを実行する実機を切り替えるには、「メニューのFile > Build Settings」でBuild Settingsウインドウを開いて、画面左のPlatformで実行したいプラットフォームをクリックして画面右下の「Switch Platform」をクリックします。

![](2021-09-24-04-30-50.png)

すると、下図のようにTest Reportウインドウの画面右上の「Run All Tests」のカッコ内が実行したいプラットフォームに切り替わっています。あとはこれをクリックすることで実機用のビルドが作成され、対象の実機へアプリがインストールされてテストが実行されてパフォーマンスの集計までを自動で行ってくれます。

![](2021-09-24-04-31-49.png)

このへんはBuild Settingsウインドウの「Build And Run」と同じような挙動で、PCに繋いでいる端末に対して自動で実行されますが、iOSの場合は開発者端末でないと実行が行われないなどプラットフォームによって挙動が異なります。詳しくはこちらの[Unity Test RunnerのPlay Mode testsを実機上で実行する #UniteTokyo - やらなイカ？](https://www.nowsprinting.com/entry/2019/10/02/092313) が参考になります。


## 参考

- [Performance Testing Extension for Unity Test Framework | Performance testing API | 2.8.0-preview](https://docs.unity.cn/Packages/com.unity.test-framework.performance@2.8/manual/index.html)
- [【Unity】Unity Test Runner（Test Framework）の使い方を総まとめ - インストールから自動化まで - LIGHT11](https://light11.hatenadiary.com/entry/2020/07/01/200253)
- [Unity使いは全員Unity Test Runnerを使え！爆速のトライ＆エラー環境だぞ！ - Qiita](https://qiita.com/su10/items/67a4a90c648b1ef68ab9)
- [Unityでテストを書くのが当然になる時代に今から備えよう - Qiita](https://qiita.com/naninunenoy/items/b5092774fed30739adbc)
- [Unity Test RunnerのPlay Mode testsを実機上で実行する #UniteTokyo - やらなイカ？](https://www.nowsprinting.com/entry/2019/10/02/092313)