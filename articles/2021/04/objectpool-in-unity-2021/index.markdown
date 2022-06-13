---
date: "2021-04-05T09:00:00+09:00"
draft: false
title: "Unity 2021から利用できるUnity標準のオブジェクトプールについて"
tags: ["Unity", "Unity 2021", "オブジェクトプール", "データ構造"]

---

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">へぇ、Unity 2021.1から、ObjectPoolって標準で実装されるのね。 <a href="https://t.co/MTG08LitSY">https://t.co/MTG08LitSY</a></p>&mdash; ゆっち〜 (Yuichiro MUKAI) (@yucchiy_) <a href="https://twitter.com/yucchiy_/status/1378202750089981956?ref_src=twsrc%5Etfw">April 3, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

先日Unity Weeklyの仕込みで記事を漁っていたら、たまたま[Unity標準のObjectPool](https://docs.unity3d.com/2021.1/Documentation/ScriptReference/Pool.ObjectPool_1.html)実装が2021.1以降利用できることを知ったのでつぶやいてみたら、思った以上に反響がありました。せっかくなので簡単に触ってみたので記事を書きました。

検証には2021.2.0a6を用いました。

アルファ版なためこの記事で取り扱っている内容についても今後変更される可能性がある点に注意していただければと思います。


## そもそもオブジェクトプールがなぜ必要なのか

銃の弾丸やパーティクルなど、ゲーム中で頻繁に登場と退場を繰り返す要素を大量に扱いたい場合に、その要素を愚直に、都度オブジェクトの生成と破棄を繰り返すような実装をすると、
Garbage Collectionの呼び出しによりスパイクが発生したり、またメモリのフラグメントによりゲームのパフォーマンスの低下を招き、ゲーム体験を低下させる可能性があります。

そのような問題を解決する手法の１つとして、**オブジェクトの生成自体は初期化中にまとめて行い、そのオブジェクトを使い回す**オブジェクトプールという手法がよく利用されます。

オブジェクトプールはUnity標準で用意されていないため、各々独自で実装していました。実装方法やサードパーティ製のツールについては下記のようなものがあります。

- [Reusing Objects | Catlike Coding](https://catlikecoding.com/unity/tutorials/object-management/reusing-objects/)
- [Unityマニアックス - fuji0k0 - BOOTH](https://booth.pm/ja/items/1040804)
- [Pooling Toolkit | Tools | Unity Asset Store](https://assetstore.unity.com/packages/tools/pooling-toolkit-23177?aid=1011l9AKa&utm_source=aff)


### UnityEngine.Poolの登場

オブジェクトプールはパフォーマンスを最適化をしていく上でよく利用されるテクニックなので、要望も多かったのか2021.1以降では`UnityEngine.Pool`という名前空間下でプール関係のクラスが実装されたようです。

- [Unity - Scripting API: ObjectPool<T0>](https://docs.unity3d.com/2021.1/Documentation/ScriptReference/Pool.ObjectPool_1.html)
- [Unity - Scripting API: LinkedPool<T0>](https://docs.unity3d.com/2021.1/Documentation/ScriptReference/Pool.LinkedPool_1.html)
- [Unity - Scripting API: CollectionPool<T0,T1>](https://docs.unity3d.com/2021.1/Documentation/ScriptReference/Pool.CollectionPool_2.html)
- [Unity - Scripting API: GenericPool<T0>](https://docs.unity3d.com/2021.1/Documentation/ScriptReference/Pool.GenericPool_1.html)


## ObjectPoolを使ってみる

まずは手を動かしながら[ObjectPool](https://docs.unity3d.com/2021.1/Documentation/ScriptReference/Pool.ObjectPool_1.html)の動作を追っていきます。

[こちら](https://docs.unity3d.com/2021.1/Documentation/ScriptReference/Pool.ObjectPool_1.html)に乗っているサンプル実装を一部改変しつつ動作を検証します。コード全文はそれぞれ下記で確認できます。

- [unity-sandbox/ObjectPoolExample.cs at main · yucchiy/unity-sandbox](https://github.com/yucchiy/unity-sandbox/blob/main/Assets/ObjectPoolCheck/Scripts/ObjectPoolExample.cs)
- [unity-sandbox/ReturnToPool.cs at main · yucchiy/unity-sandbox](https://github.com/yucchiy/unity-sandbox/blob/main/Assets/ObjectPoolCheck/Scripts/ReturnToPool.cs)

サンプルに登場するコンポーネントはそれぞれ下記を行います。

- `ObjectPoolExample`はオブジェクトプールの管理と、オブジェクトプールからパーティクルを取得しパーティクルを再生する。再生するパーティクルには`ReturnToPool`をアタッチする。
- `ReturnToPool`は自身が保持するパーティクルの終了を検知して、そのタイミングでパーティクルをオブジェクトプールに返却する。

下記にエディタでサンプルを再生する様子を示します。

![](./object-pool-example.gif)

このように再生後のパーティクルが使い回されていることが確認できます。（パーティクルがピンクなのはテクスチャを貼り付けてないからです...）

それではこのサンプルのコードを追っていきます。


### ObjectPoolの生成

まずObjectPoolの初期化は下記のように行います。

```cs
_pool = new ObjectPool<ParticleSystem>(
    OnCreatePoolObject,   // createFunc
    OnTakeFromPool,       // actionOnGet
    OnReturnedToPool,     // actionOnRelease
    OnDestroyPoolObject,  // actionOnDestroy
    true,                 // collectionCheck
    DefaultCapacity,      // defaultCapacity
    MaxSize               // maxSize
);
```

[Unity - Scripting API: Pool.ObjectPool_1.ObjectPool<T0>](https://docs.unity3d.com/2021.1/Documentation/ScriptReference/Pool.ObjectPool_1-ctor.html)

コンストラクタの型パラメータはプールするオブジェクトの型を指定します。（上記の場合は`ParticleSystem`を指定しています。）

コンストラクタは引数が多いので順に説明していきます。まずはじめの４つの引数はオブジェクトプールでオブジェクトを扱う際にそれぞれのフェーズで呼び出されるコールバックメソッドを指定します。
引数順にそれぞれオブジェクト生成時（`createFunc`）、取得時（`actionOnGet`）、解放時（`actionOnRelease`）、破棄時（`actionOnDestroy`）に呼び出されます。

1. プールから非アクティブな利用可能なオブジェクトを検索する。`createFunc`を用いてオブジェクトの生成を行う。
    - サンプルでは`OnCreatePoolObject`を指定しています
2. オブジェクトをプールから貸出状態に変更する。このとき`actionOnGet`が呼び出される。（2.は、1.で生成したか、プールから取得したかは関わらずに実施される）
    - サンプルでは`OnTakeFromPool`を指定しています
3. オブジェクトが不要になったらプールに返却する。このとき`actionOnRelease`が呼び出される。
    - サンプルでは`OnReturnedToPool`を指定しています
4. このときプールが最大量を超えていた場合（詳細は後述）、`actionOnDestroy`が呼び出されてオブジェクトが破棄される。
    - サンプルでは`OnDestroyPoolObject`を指定しています
5. プールを破棄する場合、プールされたオブジェクトもセットで、すべてのオブジェクトに対して`actionOnDestroy`を呼び出して破棄される。

`defaultCapacity`はプールで利用するコレクションの初期容量です。`maxSize`と合わせるで大きく問題にはならなそうです。

`collectionCheck`は`Release`時の二重解放のチェックを行うかどうか、`maxSize`はプールオブジェクトの最大保持数です。こちらは後述します。

それではサンプルでの実装を追っていきます。


#### OnCreatePoolObject

プールで利用するオブジェクトを生成するときに呼び出されます。戻り値として生成したオブジェクトを返却します。

```cs
ParticleSystem OnCreatePoolObject()
{
    // プールするパーティクルシステムの作成
    // _nextIdはオブジェクト名をユニークにするために
    // インクリメンタルなIDを保持している
    var go = new GameObject($"Pooled Particle System: {_nextId++}");
    var ps = go.AddComponent<ParticleSystem>();
    // パーティクルの終了挙動をエミッター停止 & エミッションのクリアとする
    ps.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);

    // パーティクルを1秒のワンショット再生とする
    // (ので約1秒後にパーティクルは停止する)
    var main = ps.main;
    main.duration = 1f;
    main.startLifetime = 1f;
    main.loop = false;

    // パーティクルが終了したらプールに返却するための
    // 挙動を実装したコンポーネントをアタッチ
    var returnToPool = go.AddComponent<ReturnToPool>();
    returnToPool.Pool = Pool;

    return ps;
}
```

パーティクルシステム用のゲームオブジェクトを生成してそのオブジェクトに`ParticleSystem`コンポーネントをアタッチし、設定を行った後に戻り値として返却しています。

サンプルでは簡単のために、パーティクルシステムをワンショット再生として設定しています（ループ再生を行わない場合`duration`期間後に再生が終了する）。
また、再生終了後に自動的にプールに戻すために、`ReturnToPool`（後述）コンポーネントをアタッチし、戻り先のプールとして自身の保持しているオブジェクトプールの参照を渡します。


#### OnTakeFromPool

プールからオブジェクトを取り出すときに呼び出されます。取り出す際になにかオブジェクトに対して共通の処理を行うことができるので、オブジェクトに対してセットアップ処理などを差し込むなどで利用できます。

```cs
void OnTakeFromPool(ParticleSystem ps)
{
    // プールからパーティクルシステムを借りるときに
    // そのオブジェクトのアクティブをONにする
    ps.gameObject.SetActive(true);
}
```

サンプルでは上記のようにゲームオブジェクトのアクティブをONにしています。（プールに入っているときにはアクティブをOFFにする実装のため。）


#### OnReturnedToPool

プールにオブジェクトを返却するときに呼び出されます。こちらも`OnTakeFromPool`と同様に解放時にオブジェクトに対して共通の処理を行うことができます。オブジェクトのリセット処理などを差し込むなどで利用できます。

```cs
void OnReturnedToPool(ParticleSystem ps)
{
   // 逆にプールにパーティクルシステムを返却するときに
   // そのオブジェクトのアクティブをOFFにする
   ps.gameObject.SetActive(false);
}
```

サンプルではゲームオブジェクトのアクティブをOFFにしています。


#### OnDestroyPoolObject

プールのオブジェクトを破棄するために呼び出されます。基本的に`OnCreatePoolObject`で生成したものを破棄する処理を書きます。

```cs
void OnDestroyPoolObject(ParticleSystem ps)
{
    // プールされたパーティクルの削除が要求されているので、
    // オブジェクトを破棄する。
    //
    // OnCreatePoolObjectでオブジェクトを生成しているので
    // ここで破棄する責務があるという解釈
    Destroy(ps.gameObject);
}
```

サンプルではゲームオブジェクトそのものを`GameObject.Destroy`で破棄しています。このゲームオブジェクトにアタッチしたコンポーネントは`GameObject.Destroy`中にまとめて破棄されるのでコンポーネントごとには破棄を書いていません。


### オブジェクトの取得

プールからオブジェクトを取得するには`Get`を利用します。

[Unity - Scripting API: Pool.ObjectPool_1.Get](https://docs.unity3d.com/2021.1/Documentation/ScriptReference/Pool.ObjectPool_1.Get.html)

```cs
// OnGUI中

// ボタンを押したらパーティクルを再生する
if (GUILayout.Button("Create Particles"))
{
    // プールからいくつかパーティクルを取得して再生する。
    // パーティクルはReturnToPoolコンポーネントにより
    // 再生終了後に自動的にプールへ返却される
    var amount = Random.Range(1, 10);
    for (var i = 0; i < amount; ++i)
    {
        // プールからオブジェクトを取得
        var ps = Pool.Get();
        // 適当な位置に移動させて
        ps.transform.position = Random.insideUnitSphere * 10f;
        // パーティクルを再生
        ps.Play();
    }
}
```

サンプルでは`var ps = Pool.Get();`によりプールからオブジェクトを取得しています。このとき**未貸し出しの利用可能なオブジェクトがプールに存在しない場合**、プールによりオブジェクトの生成が行われます。

ちなみにオブジェクトの取得には`public PooledObject<T> Get(out T v);`という`PooledObject`構造体を返却する`Get`メソッドも存在します。`PooledObject`は`System.IDisposable`を実装していて、`Dispose`メソッド内でオブジェクトの返却が呼び出される実装になっています。そのためusing statementと組み合わせるとスコープを抜けたら自動でオブジェクトをプールに返却できます（参考: [C#のUsing Statementと、C# 8.0で導入されたUsing Declarationについて | Yucchiy's Note](https://blog.yucchiy.com/2021/03/using-declaration-in-chsarp-8.0/)）。

```cs
// StringBuilderのプール
static ObjectPool<StringBuilder> stringBuilderPool
    = new ObjectPool<StringBuilder>(
    () => new StringBuilder(),
    (sb) => sb.Clear());

void Update()
{
    // StringBuilderをプールから借りる
    using (stringBuilderPool.Get(out var stringBuilder))
    {
        stringBuilder.AppendLine("Some text");
        Debug.Log(stringBuilder.ToString());
    }

    // ここではプールから借りたStringBuilderが
    // 自動的に返却される
}
```

上記は[こちらの公式ドキュメント](https://docs.unity3d.com/2021.1/Documentation/ScriptReference/Pool.ObjectPool_1.Get.html)から引用した実装で、`StringBuilder`をプールから取得することで、毎フレーム`StringBuilder`をアロケーションすることを防いでいます。


### オブジェクトの解放

プールから借りたオブジェクトを解放するには`Release`を利用します。

[Unity - Scripting API: Pool.ObjectPool_1.Release](https://docs.unity3d.com/2021.1/Documentation/ScriptReference/Pool.ObjectPool_1.Release.html)

```cs
// ReturnToPoolの実装から
void OnParticleSystemStopped()
{
    // パーティクルシステムが停止したときにここが呼び出される

    // プールから借りていたパーティクルを解放(返却)する
    Pool.Release(Particle);
}
```

上記は[ReturnToPool](https://github.com/yucchiy/unity-sandbox/blob/main/Assets/ObjectPoolCheck/Scripts/ReturnToPool.cs)のオブジェクト解放箇所を抜粋したものになります。
`ParticleSystem`は`main.stopAction`に`ParticleSystemStopAction.Callback`を指定すると、再生終了時に`OnParticleSystemStopped`が呼び出されるようになります。

サンプルではパーティクルシステム再生完了後にオブジェクトを返却したいため、`OnParticleSystemStopped`内で`Release`を呼び出しています。

`Release`を呼び出したときに**プールの最大数（コンストラクタの`maxSize`）を超えていた場合**、プールによってオブジェクトが破棄されます。このとき`OnDestroyPoolObject`を介して破棄が実施されます。

１点注意としてコンストラクタで`collectionCheck`に`true`を指定すると、すでに返却されたオブジェクトに対して`Release`を呼び出した場合に例外を吐きます。

```cs
// ReturnToPoolの実装から
void OnParticleSystemStopped()
{
    // パーティクルシステムが停止したときにここが呼び出される

    // プールから借りていたパーティクルを解放(返却)する
    Pool.Release(Particle);
    // 二度解放すると例外を吐く
    Pool.Release(Particle);
    // InvalidOperationException:
    // Trying to release an object that has already been released to the pool.
}
```

二重解放は場合によっては危険な処理の可能性があるためでしょうか。もし例外を吐きたくない場合は`collectionCheck`を`false`にします。
ただし、当然ですが`OnReturnedToPool`は都度呼び出されます。

### プールの破棄

プールを破棄したい場合は`Clear`を呼び出します。

```cs
if (GUILayout.Button("Clear Pool"))
{
    // プールを破棄する
    Pool.Clear();
}
```

プール内に存在するオブジェクトはそれぞれに対して`OnDestroyPoolObject`が呼び出されて破棄されます。

### Count Property

プール内のアクティブなオブジェクト数、非アクティブなオブジェクト数、トータルオブジェクト数を知りたい場合は、それぞれプロパティが用意されています。

- [Unity - Scripting API: Pool.ObjectPool_1.CountActive](https://docs.unity3d.com/2021.1/Documentation/ScriptReference/Pool.ObjectPool_1.CountActive.html)
- [Unity - Scripting API: Pool.ObjectPool_1.CountInactive](https://docs.unity3d.com/2021.1/Documentation/ScriptReference/Pool.ObjectPool_1.CountInactive.html)
- [Unity - Scripting API: Pool.ObjectPool_1.CountAll](https://docs.unity3d.com/2021.1/Documentation/ScriptReference/Pool.ObjectPool_1.CountAll.html)

```cs
GUILayout.Label($"All = {Pool.CountAll}, Inactive = {Pool.CountInactive}, Active = {Pool.CountActive}");
```

この中でも`CountInactive`が特に利用頻度が多いかもしれません。

### IObjectPoolとObjectPool、ListPool

紹介した`ObjectPool`以外にも`LinkedPool`というクラスが存在します。どちらのクラスも`IObjectPool`を実装しています。

違いはプールの内部のデータ構造です。`ObjectPool`はスタックで、`ListPool`は連結リストでプールが実装されています。

- [Unity - Scripting API: ObjectPool<T0>](https://docs.unity3d.com/2021.1/Documentation/ScriptReference/Pool.ObjectPool_1.html)
    > The ObjectPool uses a stack to hold a collection of object instances for reuse and is not thread-safe.
- [Unity - Scripting API: LinkedPool<T0>](https://docs.unity3d.com/2021.1/Documentation/ScriptReference/Pool.LinkedPool_1.html)
    > The LinkedPool uses a linked list to hold a collection of object instances for reuse. Note this is not thread-safe.

データ構造の違いにより`Get`や`Release`での参照や要素の追加の速度に影響がでそうです（未検証ですすいません。）。

ただしどちらも`IObjectPool`を実装しているので、参照は`IObjectPool`で持つような実装にしておけば、**実装を変更することなく、内部のデータ構造を入れ替えることが可能**です。


## CollectionPool

オブジェクトプール以外にも、配列や辞書、ハッシュをプールするためのAPIも合わせて実装されました。

- [Unity - Scripting API: CollectionPool<T0,T1>](https://docs.unity3d.com/2021.1/Documentation/ScriptReference/Pool.CollectionPool_2.html)
- [Unity - Scripting API: DictionaryPool<T0,T1>](https://docs.unity3d.com/2021.1/Documentation/ScriptReference/Pool.DictionaryPool_2.html)
- [Unity - Scripting API: HashSetPool<T0>](https://docs.unity3d.com/2021.1/Documentation/ScriptReference/Pool.HashSetPool_1.html)
- [Unity - Scripting API: ListPool<T0>](https://docs.unity3d.com/2021.1/Documentation/ScriptReference/Pool.ListPool_1.html)

利用シーンとして平均や合計を計算するための一時キャッシュなど、一時的にリストを用いてなにか計算したいケースがある場合などです。

```cs
void Update()
{
    var vec = new List<int>();

    // vecを用いてなにか計算する（たとえば平均など）
}
```

ただし、例えば上記のように`Update`で毎フレーム利用したい場合に毎フレームリストを確保するとアロケーションが毎フレーム発生して、GCによるパフォーマンス低下の原因となります。

そこでプロパティとして事前にリストを確保してそれを使い回す実装を行うことで、この問題を回避することができます。

```cs
private List<int> _vec = null;

void Start()
{

    _vec = new List<int>();
}

void Update()
{
    // _vecを用いて計算する
}
```

わざわざ一時的な計算のためにプロパティを持つと可読性が悪くなったりするため、このような場合にプールを使うとアロケーションなしでリストが利用できるので便利かもしれません。

```cs
void Update()
{
    using (CollectionPool<List<int>, int>.Get(out var vec))
    {
        // プールから借りたリストを利用して計算する

    }

    // ここではvecがプールに解放される
}
```

上記では`CollectionPool`を用いましたが、利用するコレクションが決まっていれば`DictionaryPool`や`HashSetPool`、`ListPool`をそれぞれ用いるのが良さそうです。

## GenericPool

コレクションではなく通常のクラスのインスタンスをプールしたい場合は、`GenericPool`が利用できます。

[Unity - Scripting API: GenericPool<T0>](https://docs.unity3d.com/2021.1/Documentation/ScriptReference/Pool.GenericPool_1.html)

```cs
using UnityEngine;
using UnityEngine.Pool;

public class GenericPoolExample
{
    class MyClass
    {
        public int someValue;
        public string someString;
    }

    void Start()
    {
        // プールから取得
        var instance = GenericPool<MyClass>.Get();

        // instanceを用いてなにか処理

        // オブジェクトの解放
        GenericPool<MyClass>.Release(instance);
    }
}
```

似たような実装に[UnsafeGenericPool](https://docs.unity3d.com/2021.1/Documentation/ScriptReference/Pool.UnsafeGenericPool_1.html)がありますが、違いとして二重解放時に例外を吐くかどうかです。
具体的にはObjectPoolで紹介した`collectionCheck`で型が違い、`true`の場合の挙動を利用したい場合は場合は`GenericPool`を利用しう、`false`の挙動を利用したい場合は`UnsafeGenericPool`を利用すると良いでしょう。


## 気になった点

ここまででObjectPoolの利用方法について簡単に説明しましたが、触っていていくつか気になった点を挙げておきます。

- プールされているオブジェクトが足りないときにはじめてオブジェクトをインスタンス化する挙動
    - ゲームでは初期化でまとめてオブジェクトをインスタンス化してプールして、`Get`では原則アロケーションしない実装のほうが好ましい。
    - 初期化フェーズで必要個数`Get`して、すぐに`Release`することで事前プールは可能なので問題ないか。
    - オブジェクトが足りない場合にインスタンス化したいのをやめたい場合は、取得前に`CountInactive`を確認する実装に倒せば良さそう。
        - そもそもオブジェクトが足りない場合は仕様を見直したほうがよさそう。
- `maxSize`を超えたオブジェクト生成を行った場合に、アクティブな要素数と`CountActive`が合わないケースがある
    - バグ？
    - サンプルで `Create Particles`ボタンを叩きまくると再現する。
- スレッドセーフではない点
    - 基本問題なさそうだが...、そういう処理を書く場合は`Get`と`Release`時にロックが必要かも？
    - Taskとか使うと場合によっては考慮が必要？


## まとめ

2021.1から利用できるUnity標準のオブジェクトプールについて紹介しました。
