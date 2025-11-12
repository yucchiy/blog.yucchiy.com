---
title: Railsでそこそこ真面目にSEO対策する
description: ''
pubDatetime: 2014-06-28T10:07:00.000Z
tags: []
---

個人でRailsで開発しているサービスのSEOを少しまじめに調べたので,
ブログにもアウトプットしてみた. 基本, 有名そうなGemを拾って対応した.

## MetaTags ##

[https://github.com/kpumuk/meta-tags](https://github.com/kpumuk/meta-tags)

SEOに重要そうなメタタグの管理を行ってくれるgem. 基本的なメタタグ以外に,
OpenGraph, Twitter Cards, などのタグもサポートしてくれている.
もちろん独自のメタタグも導入できる.

基本的にREADMEに書かれているメタタグを仕込んでおけば大丈夫そう.

### 使い方 ###

Bundleでインストールを行う. Gemfileに以下を記述する.

```
gem 'meta-tags'
```

次に, メタタグを仕込みたいビューファイルに以下を記述する.

```
<%= display_meta_tags %>
```

`display_meta_tags`には引数が渡せて, デフォルトで埋め込むメタタグを設定できる.
ただし, `set_meta_tags`で設定するとそのメタタグは上書きされる.

例えば, `:site`などは全ページで共通のものを利用することが多いはずなので,
以下の様に設定しておくと毎回設定しなくて良くて便利.

``` erb
<%= display_meta_tags({
  :site => 'HogePiyoSite',
  :reverse => true,
})
%>
```

メタタグを設定するには`set_meta_tags`をコントローラ内またはビューファイルで利用する.
例えばビューファイル内で設定するには以下のようにする.

``` erb
<% set_meta_tags :title => 'HogePiyoTitle' %>
```

### 設定しておくと良さそうなメタタグ ###

この辺は, テストでちゃんと設定されているかチェックしておけば
リリース直前で慌てるなんてことがなくなっていいかもしれない.

- 基本的なメタタグ
    - title (`:title`)
    - description (`:description`)
    - keywords (`:keywords`)
    - Canonical URL (`:canonical`)
- Open Graph (`:og`)
- Twiter Cards (`:twitter`)
- Google Plus (Author Rank)
    - Author links (`:author`)
    - Publisher links (`:publisher`)
- 必要に応じて
    - Pagination links (`:prev`, `:next`)
    - Noindex, Nofollow

## SitemapGenerator ##

[https://github.com/kjvarga/sitemap_generator](https://github.com/kjvarga/sitemap_generator)

サイトマップを簡単に作るためのgem. 地味にめんどくさいサイトマップのインデックスの作成や,
各検索エンジンにPing送信, 検索エンジン別にサイトマップを変更したりして便利.

### インストール ###

MetaTagsと同様Bundleでインストールを行う.

``` ruby
gem 'sitemap_generator'
```

次に, `config/sitemap.rb`を作成する. 以下のコマンドを実行する.

```
bundle exec rake sitemap:install
```

### 使い方 ###

`config/sitemap.rb`以下に追加したいURLを`add`メソッドで行う.

```
SitemapGenerator::Sitemap.create do
  Article.all.each do |article|
    add article_show_path(article), :priority => 0.7, :changefreq => 'weekly', :astmod => article.updated_at
  end
end
```

また, いろんな設定ができる.

詳細は[https://github.com/kjvarga/sitemap_generator#sitemap-configuration](https://github.com/kjvarga/sitemap_generator#sitemap-configuration)のSitemap Optionsより確認できる.


``` ruby
# ホストを設定する
SitemapGenerator::Sitemap.default_host = "http://example.com"
# サイトマップを配置するディレクトリを設定する
SitemapGenerator::Sitemap.sitemaps_path = 'sitemaps/'
# インデックスサイトマップを作成するかどうか設定する
SitemapGenerator::Sitemap.create_index = :auto
```

サイトマップの生成は, Rakeコマンドより行う.

```
rake sitemap:clean                      # サイトマップを削除する
rake sitemap:create                     # サイトマップを作成する(検索エンジンにpingを送らない)
rake sitemap:refresh                    # サイトマップを作成し, 検索エンジンにpingを送る
rake sitemap:refresh:no_ping            # サイトマップを作成する(検索エンジンにpingを送らない, たぶんsitemap:createと一緒?)
```
