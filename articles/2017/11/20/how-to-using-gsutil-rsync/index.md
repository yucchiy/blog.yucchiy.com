---
title: gsutil rsync についての簡単なメモ
description: ''
pubDatetime: 2017-11-19T15:25:57.000Z
tags:
  - GCP
  - gsutil
  - GCS
---

生成したアセットデータなどを配信するためにGCS上にアップロードする時に、gsutilコマンドのrsyncを使うと便利だったので、備忘録としてブログにメモ。

## Synopsis
    gsutil rsync [-a] [-c] [-C] [-d] [-e] [-n] [-p] [-r] [-U] [-x] src_url dst_url

### コマンド説明

`gsutil rsync`コマンドは、`dst_url`下のコンテンツを、`src_url`下に存在しないファイルやオブジェクトのコピーによって、(`-d`オプションを指定すると)その他のファイルやオブジェクトを削除することで、コンテンツを同等にする。

`src_url`には、ディレクトリかバケットか、バケットのサブディレクトリを指定する必要がある。


## 使用例

ローカルの`data` ディレクトリを、`gs://mybucket/data`に同期するには、以下のコマンドを実行する。


    gsutil rsync -d data gs://mybucket/data

ディレクトリを再帰的に同期するには、`-r`オプションを指定する。


    gsutil rsync -d -r data gs://mybucket/data

上記のコマンドは、コンテンツの追加・更新のみにとどめている。削除も行いたい場合は`-d`オプションを指定する。


    gsutil rsync -d -r data gs://mybucket/data

大量のファイルを同期する必要があるときは、`-m`オプションを用いることで、並列に同期を行ってくれる。


    gsutil -m rsync -d -r data gs://mybucket/data

