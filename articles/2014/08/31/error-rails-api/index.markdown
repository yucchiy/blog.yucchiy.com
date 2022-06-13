---

title: "RailsでAPIを作るときのエラー処理について"
date: 2014-08-31T20:20:00+09:00
comments: true
categories: api rails ruby

---

[RailsでAPIを雑に書いていたんだけど](http://blog.yucchiy.com/2014/08/20/delivery-api-with-rails/), コントローラとかをどう書くとエラー処理しやすくなっていいかなーと考えていて, 個人的に考えがまとまったのでブログ書いた.

※9/1に追記書いた.

良いエラー処理について
----------------------

個人的にAPIを書く上で(API書くに限らない気はするけど)どういうふうにエラー処理を行うと良いかなーと考えてみると

- コントローラ内では基本的に, **ある関数の処理が失敗して, 次の処理が行えない場合はすべて例外を投げる**
- 例外は各々のコントローラ内で例外のキャッチは行わず, すべてApplicationControllerなど, **親コントローラ内の1メソッドで完結させる**

かなーと思う. APIのエラー処理は, [Envelopeにステータスコードとエラーメッセージを書いて](http://instagram.com/developer/endpoints/), APIのフォーマットを統一するほうがクライアントが作りやすそうだし, またこのように処理することで, **エラー処理での条件分岐の必要がなくなり**, コントローラの可読性の向上にもつながる. 


Grape vs Rails
---------------

APIつくるんだったら, [Grapeサイコー](https://www.google.co.jp/search?q=rails+api&oq=rails+api+&aqs=chrome..69i57j69i60l3j69i59j69i61.9488j0j1&sourceid=chrome&es_sm=119&ie=UTF-8)という意見が多い.


確かにGrapeのDSLは直感的に書けるし, バリデーションなど便利メソッドが多いけど, 個人的には素のRailsでAPIを書くほうがセンスが良いと感じる. というのもRackベースなので, ルーティングなど独自のものが多く, せっかくRailsが提供してるRakeのタスクや, ジェネレータがそのまま使えないからである.


SinatraとかでAPI納品するんだったら, Grapeとかいれるのはすごい良さそう.


ただ, そのままのRailsではJSONやXMLをいい感じの構造で返す仕組みが貧弱なので, [RABL](https://github.com/nesquena/rabl)を導入するのが便利. これはJSONやXMLをいい感じに生成するためのテンプレートエンジンで, DSLを用いて直感的にAPI出力を定義できる.


また, [RailsのLayoutsにも対応しており](https://github.com/nesquena/rabl/wiki/Using-Layouts), `views/layouts/application.rabl`とかを定義しておくことで, [Envelope](http://instagram.com/developer/endpoints/)みたいなのを簡単に実現できる.


コントローラ内でのエラー処理
----------------------------

上記に上げたとおり, コントローラ内でモデルのCRUDなどの**処理が失敗した場合**は例外を投げてApplicationControllerに処理を渡す.


例えば`show`メソッドでは以下のように処理する.

```ruby
def show
  @piyo = Piyo.find_by!(:id, params[:id])
end
```


ApplicationControllerでのエラー処理
-----------------------------------

以下のようなConcernを定義し, ApplicationControllerから読み込むことでエラー処理を行う.


```ruby
module Api::ErrorHandlers
  extend ActiveSupport::Concern

  attr_accessor :status, :message

  included do
    before_filter :setup
    rescue_from StandardError, :with => :rescue_exception
  end

  private

  def rescue_exception(e)
    @message = e.message
    if rescuable?(e)
      re = e.is_a?(Api::Exceptions::RescuableException) ? e : RESCUABLE_EXCEPTIONS[e.to_s.to_sym]
      @status = re.status
    else
      @status = 500
      @message = e.message
    end

    render 'api/errors/base'
  end

  def rescuable?(e)
    return e.is_a?(Api::Exceptions::RescuableException) || RESCUABLE_EXCEPTIONS.has_key?(e.to_s.to_sym)
  end

  def setup
    @status = 200
    @message = "OK"
  end
end
```

ポイントはすべての例外処理を`rescue_exception`で受け取るところである. この`rescue_exception`は投げられた例外によって, 適切なステータスコードとエラーメッセージをビューに渡すメソッドで, それらはEnvelopeとして出力される. 例えばRablのLayoutsで以下のように定義することでエラー出力する.


```erb
{
  "status": <%= @status.to_json.html_safe %>,
  "message": <%= @message.to_json.html_safe %>,
  "data": <%= yield %>
}
```

ここで, 例外に対応するステータスコードを以下のように引く.

1. 独自の例外の場合は, その**例外クラスにステータスを保持させる**
2. 組み込みの例外（例えばActiveRecordのNotFoundException）の場合は, 例外に対応する**ステータスコードの対応表から**引く
3. それ以外の例外の場合は500を返す


1の場合は, `Api::Exceptions::RescuableException`を作成して, それを継承した独自の例外クラスを投げて対応する.

```ruby
module Api::Exceptions
  class RescuableException < StandardError
    attr_accessor :status

    def initialize(status = 500, message = "Error")
      super(message)
      @status = status
    end
  end

  class UnAuthenticationException < RescuableException
    def initialize(message = "Unauthorized")
      super(401, message)
    end
  end
end
```

2の場合は, `RESCUEABLE_EXCEPTIONS`みたいなハッシュを作って対応する.

```ruby
RESCUABLE_EXCEPTIONS = {
  ActiveRecord::RecordNotFound.to_s.to_sym => Api::Exceptions::RescuableException.new(404, "Record Not Found")
}
```

3の場合は, 上に2つの条件を満たさない場合に500を返すように`rescue_exception`メソッドを書くことで対応する.


まとめ
------

ApplicationControllerで`Api::ErrorHandlers`を定義し, `rescue_exception`で例外処理することで, 開発速度が上がって良さそうだという個人的なエラー処理のまとめを書いてみた.

追記
----

[@r7kamura](https://twitter.com/r7kamura)さんに, 以下のリプライを頂いて

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr"><a href="http://t.co/mcjKTWmnr7">http://t.co/mcjKTWmnr7</a> コントローラで積極的に例外投げるの, わりと自分の中ではしっくりきてるけど, きっと違う局面に遭遇したら違うことしてる気がする</p>&mdash; ゆっち〜 (@yucchiy_) <a href="https://twitter.com/yucchiy_/status/506088286457057280?ref_src=twsrc%5Etfw">2014年8月31日</a></blockquote>

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr"><a href="https://twitter.com/yucchiy_?ref_src=twsrc%5Etfw">@yucchiy_</a> 例えばありがちな問題として、RailsにContent-Type: application/jsonを指定しながら誤ったJSONを送ると、パース部分はRack middlewareで実装されているので、例外が発生して500が返ります (400とかにしたい)</p>&mdash; r7kamura (@r7kamura) <a href="https://twitter.com/r7kamura/status/506094476809367552?ref_src=twsrc%5Etfw">2014年8月31日</a></blockquote>


確かに, **Rack middlewareのこととか全く考慮できてなくてダメダメ**って感じだった.


そして起きたら[RailsでAPIをつくるときのエラー処理](http://qiita.com/r7kamura/items/2e88adbdd1782277b2e7)っていうすごい知見がまとめられていた.

