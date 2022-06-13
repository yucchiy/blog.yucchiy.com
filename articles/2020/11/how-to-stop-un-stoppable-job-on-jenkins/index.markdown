---
date: "2020-11-17T09:00:00+09:00"
draft: false
title: "Jenkinsで停止しないジョブを確実に停止させる"
tags: ["Jenkins"]

---

業務ではUnityでのアプリビルドサーバーをJenkinsで構築・管理も担当しているのですが、たまにJenkinsジョブを停止しようとしても停止しないことがあり、その都度調べて対応するのでメモ代わりにブログに書きます。

## 特定のジョブを確実に停止させる

早速本題で、StackOverflowの[How to stop an unstoppable zombie job on Jenkins without restarting the server?](https://stackoverflow.com/questions/14456592/how-to-stop-an-unstoppable-zombie-job-on-jenkins-without-restarting-the-server)が参考になりました。

確実にジョブを停止させるには、_Manage Jenkins > Script Console_ から、スクリプトコンソールを利用して、下記のスクリプトを実行します。

```groovy
Jenkins.instance
  .getItemByFullName("JobName")
  .getBuildByNumber(JobNumber)
  .finish(
    hudson.model.Result.ABORTED,
    new java.io.IOException("Aborting build")
); 
```

ビルドURLが https://YOURJENKINSHOST/job/testjobname/21/ とすると、`JobName`が`testjobname`に、`JobNumber`が`21`になります。つまり下記を実行します。

```groovy
Jenkins.instance
  .getItemByFullName("testjobname")
  .getBuildByNumber(21)
  .finish(
    hudson.model.Result.ABORTED,
    new java.io.IOException("Aborting build")
); 
```

これで確実にジョブを停止させることができるようです。（手元で数回試す機会があったが、失敗したことはとりあえずなかった。）

## すべてのゾンビジョブを停止させる方法

[https://stackoverflow.com/a/47540001](https://stackoverflow.com/a/47540001)の方法ですべてのゾンビジョブを停止できるようです。(試してない。)

`build.getResult().equals(null)`で、ビルドがゾンビかどうかを判定しているようです。

```groovy
Jenkins.instance
  .getItemByFullName("JobName")
  .getItems().each { repository->
    repository.getItems().each { branch->
      branch.builds.each { build->
        if (build.getResult().equals(null)) {
          build.doKill()
        }
      }
    }
  }
```