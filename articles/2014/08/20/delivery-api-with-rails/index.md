---
title: RailsでAPIを書いたときの雑な感想
description: ''
pubDatetime: 2014-08-20T06:35:00.000Z
tags:
  - ruby
  - rails
  - api
---

某インターンのメンターをしながら, メンターたちと空いてる時間を使ってネイティブアプリを書いていた.
その時バックエンドをRailsで書いて思ったことを夏休みの感想文としてまとめてみた.


ライブラリの選定
----------------

### Grape

RailsでAPIといえば, [Grape](https://github.com/intridea/grape)というライブラリが有名だけど, 特にRailsのデフォルトのコントローラで困ることが少なかったのと, Railsとの記法の違いっぽいところがあって, 導入しなかった.

ただいま考えてみれば, [パラメータのバリデーション](https://github.com/intridea/grape#parameter-validation-and-coercion)や, (どう管理するのかしらんけど)[Cookie](https://github.com/intridea/grape#cookies)をサポートしていたり, [エラーハンドリング](https://github.com/intridea/grape#exception-handling)もいい感じだし, 導入してみたら楽だったかもしれない.

各アクションに`desc`を書いておけば, ドキュメントの自動生成とかできたりするし. 実はとても便利かもしれない.(反省終わり)

### Rabl

Grapeのかわりに[Rabl](https://github.com/nesquena/rabl)というJSONとかの記述を楽にするDSLを提供するテンプレートエンジンを導入した. 単純にRailsの`render :json`とかで出力してしまってもいいのだが, コントローラでJSONの構造を構築するのはスマートではないし, InstagramやTwitterのAPIでは, すべてのAPIレスポンスに[Envelope](http://instagram.com/developer/endpoints/)と呼ばれる, APIのコールにステータスコードやメッセージをのせるケースが多く, そういうのに対応させようと思うとRablがいいかな, と思って導入した.

例えば, ビューで

```ruby
# app/views/posts/index.rabl
collection @posts
attributes :id, :title, :subject
child(:user) { attributes :full_name }
node(:read) { |post| post.read_by?(@user) }
```

って書くと

```javascript
[{  "post" :
  {
    "id" : 5, "title": "...", "subject": "...",
    "user" : { "full_name" : "..." },
    "read" : true
  }
}]
```

って出力される(公式丸パクリ). 便利.


RailsでAPIを書くときの知見
------------------------

Rails+RablでAPI書いてたまった知見を書いていく.

### CSRF対策

APIリクエストの場合, CSRF対策が特に必要ないので, `ApplicationController`に以下のように記述することで, CSRFを回避する.

```ruby
skip_before_action :verify_authenticity_token, if: :json_request?

protected

def json_request?
  request.format.json?
end
```

### Strong Parameters

RailsのForm+Strong Parametersだと, よく以下のような記述を見る.

```ruby
def article_params
   params.require(:article).permit(:headline, :content)
end
```

ただAPIのクエリは, `{article:{ headline: "hoge", content: "piyo" }}`みたいなネストした感じでクエリ送ることってあんまりないと思う. ということでStrong Parametersを利用するために以下のように書いた.

```ruby
def article_params
  ActionController::Parameters.new(params).permit(:headline, :content)
end
```

### 基底コントローラの活用

RailsでAPI書いてると, 多分`/api`以下はデフォルトでJSONで返したいニーズとかあると思う. そういう場合は, `ApplicationController`を継承した`Api::ApplicationController`とか定義して`/app/controllers/api/application_controller.rb`とし, そこに`respond_to :json`とか, `default_format :json`とかしておくと何かと便利.


不満点とか
----------

不便だと思った点とか上げていく.

### 例外の扱い

Railsのコントローラ内で投げられる例外は, すべてそのステータスコードをもってほしいと思った. またコントローラ内でモデルのCRUDを行って失敗した時は, 直ちに例外を投げるように実装を行うべきだと思った.

明示的にキャッチしなかった例外は, `ApplicationController`でハンドルし, 例外が持っているメッセージとステータスコードを出力することで, 一貫したエラー処理が行えるし, 各コントローラでは基本例外を投げるので, 分岐が減り, 読みやすいコントローラが書けるのではと思った.

あと, No route errorは例外でキャッチしたい.

### RablのLayoutsがうまく動かない

最初に書いたEnvelopeの対応は[RablのLayouts](https://github.com/nesquena/rabl/wiki/Using-Layouts)を使うと綺麗にかけて良さそうだけど, 以下のサンプルのソースを書いてもうまくいかなかった. 具体的には`yield`の部分が`nil`になってしまった.

```ruby
node(:status) { response.status }
node(:error)  { @error.to_json.html_safe }

node(:result) do
  case content_type
  when :json
    Yajl::Parser.parse(yield)
  when :xml
    Nori.new.parse(yield)
  end
end
```

直し方募集中.


まとめ
------

Railsで雑にAPIを納品した時の感想として, 概ねRailsでいい感じにかけていいけど, 多少不満とかあったのでまとめてみた. たぶんGrape導入したら解決しそうだし皆さんGrape使いましょう(完).

