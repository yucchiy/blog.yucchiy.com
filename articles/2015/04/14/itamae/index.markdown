---
date: "2015-04-14T23:16:57+09:00"
title: "Itamaeを用いてRedmineの環境構築を行う"
description: "Redmine構築を行う機会があったので, 興味があったItamaeを用いて環境構築を行った."
tags: ["itamae", "infra"]

---

某研修でRedmineなどのツールを構築し, それを自動化するような演習課題が与えられた.
そのような課題を解決するためにはシェルスクリプトやPuppet, 最近流行りのツールではChefやAnsibleなどがあるので
それらを用いても良いが, 今回はItamaeというツールを用いた.

## なぜItamaeか

ChefやAnsibleがあるなかで, Itamaeを用いた理由について軽く触れておく.
Chefは, DSLの提供によりシェルスクリプトより可読性の向上したり, デフォルトで提供しているリソースを用いることで,
わざわざ自分で`test -e`みたいな分岐を書かなくても冪等性を担保してれる点はとても良い.
また, シェルスクリプトの記述から大きく乖離しないため, 直感的にレシピを記述できる.

一方で, レシピを書くためのひな形を作成するためにKnife soloなどのツールを覚えない点や,
Cookbookの管理に(Gemがあるのに)Berkshelfを用いる点だ. これらは, ツールに対する複雑さを増していると思っている.

ところで, Ansibleがyamlだから便利・シンプルで便利という話を聞くが(?), 個人的にはyamlでplaybookを記述が直感的でないと感じる.
例えばplaybook内で繰り返しを書くときの以下のシンタックスなどである. 素直にeach文を書かせてほしい.

```
- apt: pkg={{ item }}
  with_items:
    - php5
    - php5-mysql
```

このような点からItamaeの導入を試みた. 個人的なItamaeのメリットの良さは以下のとおり.

- Chefのような直感的なDSL
- 学習コストが低い
    - Chefのrecipesとnodesだけ持ってきた感じ?
    - やりたいこと(例えばrolesとか)は全部recipesで実現する
- Berkshelfなどの独自のエコシステムがない
    - gemの枠組みでBerkshelfとかを実現する
- 動作が軽い

Itamaeは環境構築に特化しているため, Chef ServerやAnsibleのようなデプロイ機構を持たないため, その辺は自分で面倒を見る必要がある.

## 実装

[https://gist.github.com/yucchiy/ef7f82c873d7a5c77790](https://gist.github.com/yucchiy/ef7f82c873d7a5c77790)

### 改善したい点

サーバーの環境構築のとき, ある設定ファイルを書き換えたいというニーズがあり,
よく`sed`などを用いて行の書き換えを行うが, 文字のエスケープ問題だったりで地味にハマることが多いので, このへんをコマンドでなく,
rubyの枠組みでできると良さそう. gemなどでいい感じのやつがあるといいと思う(すでにありそう).

## 参考ページ

- [https://speakerdeck.com/ryotarai/itamae-infra-as-code-xian-zhuang-que-ren-hui](https://speakerdeck.com/ryotarai/itamae-infra-as-code-xian-zhuang-que-ren-hui)
- [http://qiita.com/sawanoboly/items/355288c4592bdf4a3550](http://qiita.com/sawanoboly/items/355288c4592bdf4a3550)
