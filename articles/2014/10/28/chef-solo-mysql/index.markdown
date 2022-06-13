---

title: "ChefのMySQLクックブックでNoMethodError: undefined method `sensitive' for Chef::Resource::Executeの対処"
date: 2014-10-28T04:38:00+09:00
comments: true

---

## 問題

Chef-soloで, MySQLを[このクックブック](http://api.berkshelf.com/cookbooks/mysql)からインストールしようとしたら,
**NoMethodError: undefined method `sensitive' for Chef::Resource::Template** というエラーが発生した.

軽くググッたら, `sensitive`は2014/10/28現在でchefの最新版である11.16.4で追加されているResourceらしく,
そこでサーバーのchefをアップデートすれば解決なんだけど, knife-solo経由でどのようにサーバー側のchef-soloのバージョンを指定すれば良いかわからなかったので, 調べたのでメモ.

## 解決法

knife-soloでは, bootstrap時に`--bootstrap-version`が指定できる. 以下のようにすることでバージョンを指定できた.

```
bundle exec knife solo bootstrap hoge@piyo --bootstrap-version 11.16.4
```

## 参考URL

- [https://docs.getchef.com/knife_bootstrap.html](https://docs.getchef.com/knife_bootstrap.html)
- [http://takeyuweb.hatenablog.com/entry/2014/10/15/093854](http://takeyuweb.hatenablog.com/entry/2014/10/15/093854)

