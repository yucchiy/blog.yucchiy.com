---

title: "Rubyで簡単にバッチ処理の並列化を行う"
date: 2014-10-14T12:22:00+09:00
categories: ruby

---

研究のプログラムで, さくっと結果出したいけど, パラメータのチューニングも面倒なので,
適当に指定したパラメータの組み合わせを与えて, プログラムを回したいことは結構多いと思う.

その時に同じプログラムに異なるパラメータを投げて, そのバッチ実行を並列化したい, ということをRubyだと簡単にできるので紹介.
ちなみに動作環境は, Mac OS X Mavericksで, Rubyは2.1.3を利用している.


```ruby
#!/usr/bin/env ruby

require 'rubygems'
require 'parallel'

num_process = 4


ps1 = [1, 2, 3]
ps2 = [2, 3, 4]
ps3 = [3, 4, 5]

Parallel.each(ps1.product(ps2, ps3), :in_processes => num_thread) do |e|
  p1 = e[0]
  p2 = e[1]
  p3 = e[2]

  cmd = "./hoge #{p1} #{p2} #{p3}"
  system cmd
end
```

ポイントは, `Parallel#each`に渡す配列を`Array#product`メソッドを用いて組み合わせを生成しているところで, こうすると, `ps1`, `ps2`, `ps3`のパラメータの組み合わせを簡単に列挙できる.
