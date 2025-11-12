---
title: Unityでパーソナルライセンスのシリアルナンバーを発行する
description: ''
pubDatetime: 2019-01-08T14:30:00.000Z
tags:
  - Unity
  - Tips
  - CI
  - u3d
---

Unityのパーソナルライセンスでコマンドライン経由でビルド環境のバッチのテストをしようとしたときに、ライセンス認証してくれというエラーがでた。

コマンドライン経由の場合、`-serial` オプションを指定することで、そのライセンス下で実行ができる。プロライセンスだったらシリアル番号が発行されてるけど、そもそもフリーライセンスの場合はどうしたらいいのかわからず、調べてもあまり情報が出てこなかったので備忘録としてメモ。

ただし、あまり情報もなく、ほんとに正しいのかどうか、そもそも別の方法で回避できるかもわからず。

より正確な情報や間違っている情報があれば、ぜひ[@yucchiy_](https://twitter.com/yucchiy_)までご連絡ください。

# シリアルナンバーを取得する手順

ライセンスリクエストファイル(`alf`拡張子)というものを生成して、そこからライセンスページより、ライセンスファイル(`ulf`拡張子)を作成します。

その後、作成したライセンスリクエストファイルをUnityで読み込むと、そのフリーライセンスがアクティベートされます。

あとは、アクティベートしたライセンスのシリアルナンバーを利用してコマンドラインを叩けるようになります。


## ライセンスリクエストファイルを作成する

alfファイルは、Unityのコマンドラインから作成することができます。アクティベートするマシンから、下記のコマンドを発行します。


    $ /path/to/Unity -quit -batchMode -createManualActivationFile

すると、コマンドを実行したディレクトリに`.alf`ファイルが作成されます。


## ライセンスファイルを作成する

センスファイルは、ライセンスリクエストファイルを元に作成できます。
作成は https://license.unity3d.com/manual より行います。


![](https://d2mxuefqeaa7sj.cloudfront.net/s_F35DF46920C3D3A7904CB909B7B3839233896E5DEA0D4F7248DC79588ED7E9B5_1546972346718_Screen+Shot+2019-01-09+at+3.25.16.png)


「Choose the license request file」をクリックすると、ファイルアップロードを要求される。ここでは、先ほど作成した`alf`ファイルを指定します。

すると下記の画面が出るので、「Unity Personal Edition」を指定する。次の選択肢は適切なものを選択し、「Next」をクリックします。

![](https://d2mxuefqeaa7sj.cloudfront.net/s_F35DF46920C3D3A7904CB909B7B3839233896E5DEA0D4F7248DC79588ED7E9B5_1546972561823_Screen+Shot+2019-01-09+at+3.35.10.png)


下記のページで「Download license file」をクリックするして、ライセンスファイルをダウンロードします

![](https://d2mxuefqeaa7sj.cloudfront.net/s_F35DF46920C3D3A7904CB909B7B3839233896E5DEA0D4F7248DC79588ED7E9B5_1546972716767_Screen+Shot+2019-01-09+at+3.37.59.png)

## ulfファイルを読み込む

下記のコマンドを実行します。

    $ /path/to/Unity -quit -batchMode -manualLicenseFile /path/to/licensefile

 すると、対象のUnityにライセンスがインストールされます。ここから、シリアルナンバーを知るためには、[先日紹介したu3d](https://blog.yucchiy.com/2019/01/04/setup-unity-build-environment-with-u3d-on-linux/)を用いると、以下のように確認できます。
 

    $ u3d licenses
    /root/.local/share/unity3d/Unity/Unity_lic.ulf: 6.x F4-XXXX-XXXX-XXXX-XXXX 2019-01-09T18:10:40

 
 `F4-XXXX-XXXX-XXXX-XXXX`がシリアルナンバーになります。
 
 シリアルナンバーをコマンドラインで利用するには`-serial`オプションを利用します。
 

    $  u3d run --trace  --unity_version 2018.2.7f1  --  -logFile './editor.log' -executeMethod U3d.EditorRun.Build -serial F4-XXXX-XXXX-XXXX-XXXX --quit -batchmode -nographics

また、一度認証したライセンスを返却する場合は下記のコマンドを利用します。


    $ /path/to/Unity -quit -batchmode -returnlicense

# まとめ

Unityのフリーライセンスにて、コマンドラインを経由してライセンスをアクティベーションし、シリアルナンバーを発行する方法を紹介しました。

もし間違っているよなどツッコミがあれば、ぜひ[@yucchiy_](https://twitter.com/yucchiy_)および、下のコメントフォームでお願いいたします。


# 参考

- https://docs.unity3d.com/ja/2018.3/Manual/CommandLineArguments.html
