---
title: .NET 6に入ったPriorityQueueの紹介と、ダイクストラ法を書いてみる
description: ''
pubDatetime: 2021-12-22T01:00:00.000Z
tags:
  - .NET
  - C#
---

この記事は、[C# Advent Calendar 2021](https://qiita.com/advent-calendar/2021/csharplang)の22日目の記事です。
昨日は[WiZLite](https://qiita.com/WiZLite)さんによる[自作UIフレームワークExprazorの紹介と仮想DOMの実装方法 - Qiita](https://qiita.com/WiZLite/items/6448185e5156efa348e2)でした。

.NET 6 Preview 2に PriorityQueueの実装が追加されました。いままでC#には標準で優先度付きキューの実装はなかったのですが、.NET 6から標準でこのデータ構造がサポートされました。

[Announcing .NET 6 Preview 2 | .NET Blog](https://devblogs.microsoft.com/dotnet/announcing-net-6-preview-2/#priorityqueue)

[Add PriorityQueue to System.Collections.Generic (#43957) by pgolebiowski · Pull Request #46009 · dotnet/runtime](https://github.com/dotnet/runtime/pull/46009/files)

本記事では、PriorityQueueの基本的な利用方法を紹介と、優先度付きキューを用いたアルゴリズムとしてポピュラーなダイクストラ法を実装して、簡単な重み付きグラフに対しての最短経路問題を解いてみようと思います。

## 優先度付きキューとは？

簡単にですが、今回紹介するPriorityQueue、優先度付きキューのデータ構造について簡単に触れておきます。

通常のキューはFIFO（First-In First-Out）、つまりキューに入れたものは、それを入れた順番に取り出されます。

実際のコードをみつつ、挙動を見てみましょう。

```csharp
var queue = new Queue<string>();

// この順番にデータを入れる
queue.Enqueue("Item A");
queue.Enqueue("Item B");
queue.Enqueue("Item C");
queue.Enqueue("Item D");

// データが取り出される順番を確認
// TryDequeueは、キューが空ならfalse
// 空でなくて取り出せる状態なら、trueを返して
// 引数に取り出した要素が代入されている
while (queue.TryDequeue(out string item))
{
    Console.WriteLine($"Popped Item : {item}");
}
```

この結果は下記となります。

```csharp
Popped Item : Item A
Popped Item : Item B
Popped Item : Item C
Popped Item : Item D
```

キューに入れた（Enqueueした）順番に、データが取り出せている（Dequeueできている）ことが確認できます。

では優先度付きキューと通常のキューの違いなのですが、通常のキューに対して優先度をつけてデータを取り出せるデータ構造になります（そのままですが...）。つまりキューの中身が優先度によって常にソートされているようなデータ構造、という感じでしょうか（ただし内部実装によるので常にそうなってるとは限らないですが）。

実際にPriorityQueueを使いつつ挙動を確かめてみます。

```csharp
var priorityQueue = new PriorityQueue<string, int>();

priorityQueue.Enqueue("Item A", 0);
priorityQueue.Enqueue("Item B", 60);
priorityQueue.Enqueue("Item C", 10);
priorityQueue.Enqueue("Item D", 3);

while (priorityQueue.TryDequeue(out string item, out int priority))
{
    Console.WriteLine($"Popped Item : {item}. Priority Was : {priority}");
}
```

PriorityQueueは２つの型をテンプレートのパラメータとして取ります。１つ目が要素（先程のキューで扱ったデータそのもの）、２つ目が優先度になります。このコードの実行結果は下記のようになります。

```
Popped Item : Item A. Priority Was : 0
Popped Item : Item D. Priority Was : 1
Popped Item : Item C. Priority Was : 2
Popped Item : Item B. Priority Was : 60

```

このように、優先度の値が小さい順に値が取り出されていることが確認できます。

## 基本的なPriorityQueueの操作

### Enqueue

PriorityQueueに要素を挿入したい場合は`Enqueue`を利用します。

```csharp
queue.Enqueue("Item A", 0);

```

ちなみに`EnqueueRange`という要素を範囲で一括で挿入するメソッドも用意されています。

```csharp
// 下記と一緒
// queue.Enqueue("Item A", 0);
// queue.Enqueue("Item B", 60);
// queue.Enqueue("Item C", 10);
// queue.Enqueue("Item D", 3);
queue.EnqueueRange(new (string, int)[] {
    ("Item A", 0),
    ("Item B", 60),
    ("Item C", 10),
    ("Item D", 3),
});

// すべての要素に同じ優先度をつけてEnqueue
queue.EnqueueRange(new string[] {
    "Item A",
    "Item B",
    "Item C",
    "Item D",
}, 100);

```

### Dequeue / Peek

要素を取り出すには`Dequeue`を利用します。先述したとおりキューに挿入されたもののうち、最も優先度の小さいものが取り出されます。

```csharp
var element = queue.Dequeue();

```

ただしキューが空の場合は`InvalidOperationException`を吐きます（実装をみたら現状キューが空の場合のみ例外を吐いていましたが、何かしらの理由で要素が取得できない場合は例外を吐く挙動をします）。
この挙動が不便な場合`TryDequeue`という要素取得の成功可否を返却するメソッドも合わせて用意されています。

```csharp
// 第１引数に要素、第２引数に優先度を返す。
// 戻り値がtrueの場合のみ有効な値が入っている。
// falseの場合は要素が取れなかった場合。
while (queue.TryDequeue(out string item, out int priority))
{
    // キューが空になるまで要素を取得して、表示する
    Console.WriteLine($"Popped: {item}, priority = {priority}");
}

```

要素を取得したいが、キューから取り除きたくない場合は`Peek`が利用できます。`Dequeue`と同様にキューが空の場合などで例外を吐くので`TryPeek`もあわせて用意されています。

```csharp
// Peek。戻り値は要素。こちらは例外を吐く可能性がある。
var ret = queue.Peek();
// TryPeekは例外を吐かず戻り値に取得成功可否を返す
if (queue.TryPeek(out var element, out var priority))
{
    // ここでは要素のPeekに成功している
    // elementおよびpriorityには有効な値が入る
    Console.WriteLine($"Peek: {item}, priority = {priority}");
}

```

### Custom Comparator

今までの例では優先度が整数のもののみ紹介しましたが、PriorityQueueのコンストラクタ呼び出し時に、 `IComparer<T>` を実装したクラスを渡すことで、任意の優先度をつけることができます。

アプリケーションによっては、優先度の算出が複雑になってしまう場合があると思うので、必要に応じて利用すると良いかもしれません。

独自に定義した型 `NantokaPriority` をPriorityQueueの優先度として渡して、 `NantokaComparer` によって優先度を算出する例を下記に示します。

```csharp
var nantokaQueue = new PriorityQueue<string, NantokaPriority>(new NantokaComparer());
nantokaQueue.Enqueue("Item A", new NantokaPriority(1, 1));
nantokaQueue.Enqueue("Item B", new NantokaPriority(1, 2));
nantokaQueue.Enqueue("Item C", new NantokaPriority(1, -1));
nantokaQueue.Enqueue("Item D", new NantokaPriority(3, -1));
nantokaQueue.Enqueue("Item E", new NantokaPriority(2, -1));

// Item C
// Item A
// Item B
// Item E
// Item D
while (nantokaQueue.TryDequeue(out var item, out var priority))
{
    Console.WriteLine($"{item}");
}

class NantokaPriority
{
    public int A;
    public int B;

    public NantokaPriority(int a, int b)
    {
        A = a;
        B = b;
    }
}

class NantokaComparer : IComparer<NantokaPriority>
{
    public int Compare(NantokaPriority? x, NantokaPriority? y)
    {
        if (x == null || y == null) return 0;

        // Aで優先度をつけて、同じだったらBで優先度をつける例
        if (x.A == y.A)
        {
            if (x.B < y.B)
            {
                return -1;
            }
            else if (x.B == y.B)
            {
                return 0;
            }
            else
            {
                return 1;
            }
        }
        else
        {
            if (x.A < y.A)
            {
                return -1;
            }
            else
            {
                return 1;
            }
        }
    }
}
```

## ダイクストラ法を実装してみる

ここまでで、PriorityQueueの基本的な利用方法について紹介したので、最後に優先度付きキューを用いたアルゴリズムの一つであるダイクストラ法と、このアルゴリズムを用いて、単一始点の、重み付きグラフに対しての最短経路問題を解いてみます。

[Single Source Shortest Path II](https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_12_C&lang=jp)

上記の問題のサンプルを例に解くべき問題を説明すると、

![上記サンプルを図示した様子](https://user-images.githubusercontent.com/325819/146997589-0aa2de92-ac41-4351-8a28-806f9ebafa33.jpeg)


このようなグラフがあったときに、開始地点を0として、開始地点以外のノード（図中の丸）に行き着く最短コストを求める問題となっています。ちなみに矢印がそのノードから矢印が向いているノードに移動できることを表し、矢印の上についている値がコストで、移動するとそのコストがかかることを表しています。ちなみにコストは非負の整数であることが保証されます。（移動したらコストが減る、ということはない）

この場合、0から1までが2（0 →1）、2までが2（0 → 3 → 2）、3までが1（0 → 3）、4までが3（0 → 3 → 2 → 4）が答えになります。

この問題は、ダイクストラ法を用いると解くことができます。

ダイクストラ法は、昔自分が大学時代に講義を受けていたときにきいた利用用途としては、たとえばカーナビでの目的地などを算出、みたいなことを聞きました（いまは多分もっと複雑なきもしますが）。

移動コストがすべて同じ値であれば、通常のキューを用いた幅優先探索によって最短経路が求まるのですが、この問題ではノード間の移動コストがそれぞれ違う値になっています（それゆえに重み付きグラフの最短経路問題となります）。

重みが付いたグラフの場合は、優先度付きキューを用いて幅優先探索を行うことで最短経路が求まります。これがダイクストラ法になります。

この方法で、上記の問題を解いてみます。いきなり全行貼ると長いので、解法のメインとなるコードを下記に示します。

```csharp
    // ここからダイクストラ法で重み付きの有向グラフに対して
    // 最短経路を出す
    var priorityQueue = new PriorityQueue<int, int>();
    // スタート位置初期化（スタートは0から）
    priorityQueue.Enqueue(0, 0);

    // スタート位置となる頂点から、
    // それぞれの頂点に対しての最短経路
    var costs = new int[graph.NodeCount];
    var visited = new bool[graph.NodeCount];
    for (var i = 0; i < graph.NodeCount; i++)
    {
        // でかい値で初期化しとく
        costs[i] = int.MaxValue;
        visited[i] = false;
    }

    // 探索開始
    while (priorityQueue.TryDequeue(out int nodeIndex, out int currentCost))
    {
        // 探索候補をポップ。なくなったらこのループを抜ける

        // すでに訪問済みの場合は最短経路が見つかっている
        // その先を探索しても最短経路が見つからないので
        // ここで打ち切り
        if (visited[nodeIndex])
        {
            continue;
        }

        // その頂点への最短経路のコストを更新
        costs[nodeIndex] = currentCost;
        visited[nodeIndex] = true;

        // 今いる頂点から、
        // 隣接リストを元に次の探索候補を
        // PriorityQueueに追加
        foreach (var edge in graph.GetEdgesFrom(nodeIndex))
        {
            // 次の探索候補のコストは、現在のコスト+ そのエッジのコスト
            priorityQueue.Enqueue(edge.To, currentCost + edge.Cost);
        }
    }
```

解法自体はかなりシンプルで、前述の通り、幅優先探索に使うキューを移動コストを優先度にした優先度付きキューを用いて探索候補を出している、という感じになります。

一応これでサンプル入力に対しての出力が正しいことは確認できました。（が、上記AOJが.NET 6対応していないので、上記のコードは通らずで。新しいのでしょうがない！）

最後に上記の問題を解くコードの全容を記載しておきます。

```csharp
var streamWriter = new StreamWriter(Console.OpenStandardOutput()) { AutoFlush = false };
Console.SetOut(streamWriter);
Solve(new Scanner(Console.In, ' '));
// 確実に標準出力へ出力するために手動でフラッシュ
Console.Out.Flush();

void Solve(Scanner scanner)
{
    // 入力を受け取ってグラフを構築する

    // n（グラフの頂点数）
    var n = scanner.ReadInt();
    var graph = new Graph(n);
    for (var i = 0; i < n; i++)
    {
        // 頂点
        var u = scanner.ReadInt();
        // 隣接リストの数（出次数）
        var k = scanner.ReadInt();
        // 隣接リストの一覧を入力として、

        // グラフのエッジを構築
        for (var j = 0; j < k; j++)
        {
            // 到着先の頂点
            var v = scanner.ReadInt();
            // エッジのコスト
            var c = scanner.ReadInt();
            // グラフにエッジ追加
            graph.AddEdge(u, v, c);
        }
    }

    // ここからダイクストラ法で重み付きの有向グラフに対して
    // 最短経路を出す
    var priorityQueue = new PriorityQueue<int, int>();
    // スタート位置初期化（スタートは0から）
    priorityQueue.Enqueue(0, 0);

    // スタート位置となる頂点から、
    // それぞれの頂点に対しての最短経路
    var costs = new int[graph.NodeCount];
    var visited = new bool[graph.NodeCount];
    for (var i = 0; i < graph.NodeCount; i++)
    {
        // でかい値で初期化しとく
        costs[i] = int.MaxValue;
        visited[i] = false;
    }

    // 探索開始
    while (priorityQueue.TryDequeue(out int nodeIndex, out int currentCost))
    {
        // 探索候補をポップ。なくなったらこのループを抜ける

        // すでに訪問済みの場合は最短経路が見つかっている
        // その先を探索しても最短経路が見つからないので
        // ここで打ち切り
        if (visited[nodeIndex])
        {
            continue;
        }

        // その頂点への最短経路のコストを更新
        costs[nodeIndex] = currentCost;
        visited[nodeIndex] = true;

        // 今いる頂点から、
        // 隣接リストを元に次の探索候補を
        // PriorityQueueに追加
        foreach (var edge in graph.GetEdgesFrom(nodeIndex))
        {
            priorityQueue.Enqueue(edge.To, currentCost + edge.Cost);
        }
    }

    // 結果出力
    Console.WriteLine(
        string.Join("\n", costs.Select((cost, index) => $"{index} {cost}"))
    );
}

class Edge
{
    public readonly int From;
    public readonly int To;
    public readonly int Cost;

    public Edge(int from, int to, int cost)
    {
        From = from;
        To = to;
        Cost = cost;
    }
}

class Graph
{
    public readonly int NodeCount;
    readonly List<Edge>[] Edges;

    public Graph(int nodeCount)
    {
        NodeCount = nodeCount;
        Edges = new List<Edge>[NodeCount];
        for (var i = 0; i < NodeCount; i++)
        {
            Edges[i] = new List<Edge>();
        }
    }

    public void AddEdge(int from, int to, int cost)
    {
        Edges[from].Add(new Edge(from, to, cost));
    }

    public List<Edge> GetEdgesFrom(int from) => Edges[from];
}

class Scanner
{
    readonly TextReader Reader;
    readonly char Separator;
    readonly Queue<string> Buffer;

    public Scanner(TextReader reader, char separator = ' ')
    {
        Reader = reader;
        Separator = separator;
        Buffer = new Queue<string>();
    }

    /// <summary>
    /// <c>Reader</c>からの入力を、<c>Separator</c>で区切った１要素を返す
    /// </summary>
    string Read()
    {
        if (Buffer.Any())
        {
            return Buffer.Dequeue();
        }

        var line = Reader.ReadLine();
        if (line == null)
        {
            // この例外、どこでも処理してないけど、
            // 基本入力が正しく入ってくると仮定して
            // このプログラム内では何も行わない
            throw new InvalidOperationException("reader is empty");
        }

        var parsedElements = line.Split(Separator);
        foreach (var parsedElement in parsedElements)
        {
            Buffer.Enqueue(parsedElement);
        }

        return Read();
    }

    /// <summary>
    /// <c>Read</c>で受け取った要素を更にintとしてパースして返す
    /// </summary>
    public int ReadInt() => int.Parse(Read());
}
```
