---
date: "2021-02-12T10:00:00+12:00"
draft: false
title: "UnityのRaycastCommandでレイキャストをジョブシステムで実行する"
tags: ["Unity", "Physics", "Job System"]

---

PhysicsのレイキャストをC# Job Systemで実行する[RaycastCommand](https://docs.unity3d.com/2020.2/Documentation/ScriptReference/RaycastCommand.html)について検証します。


## Physicsの当たり判定メソッドについて

`RaycastCommand`を説明する前に、まずは、通常のPhysicsを用いた当たり判定について説明します。

Physicsでレイキャストによる当たり判定を行うには[Physics.Raycast](https://docs.unity3d.com/2020.2/Documentation/ScriptReference/Physics.Raycast.html)というAPIが用意されています。

ちなみにレイキャストは線分による当たり判定ですが、Physicsにはその他の形状による当たり判定を行うメソッドも用意されています。

- [Physics.BoxCast](https://docs.unity3d.com/2020.2/Documentation/ScriptReference/Physics.BoxCast.html)
- [Physics.CapsuleCast](https://docs.unity3d.com/2020.2/Documentation/ScriptReference/Physics.CapsuleCast.html)
- [Physics.SphereCast](https://docs.unity3d.com/2020.2/Documentation/ScriptReference/Physics.SphereCast.html)

上記のAPIでは、当たったかどうかを戻り値で取得できます。さらに当たり判定の結果を１つ、`RaycastHit`型の変数で取得することも出来ます。

例えば、`Physics.Raycast`を用いて当たり判定を行うコードは下記のとおりです。

```cs
var origin = new Vector3(1f, 2f, 3f);
var direction = Vector3.forward;
var distance = 3f;
// ワールド座標(1f, 2f, 3f)から、(0f, 0f, 1f)方向に、
// 距離3でレイを飛ばして当たり判定を行います
if (Physics.Raycast(origin, direction, out var hit, distance))
{
    // レイがコリジョンに当たった場合はここに入ります
    // hitという変数に当たり判定の結果が格納されるので
    // これを利用することもできます
}
```

もちろん複数個のコライダーと当たる可能性があります。すべての当たり判定の情報を取得したい場合は[Physics.RaycastAll](https://docs.unity3d.com/2020.2/Documentation/ScriptReference/Physics.RaycastAll.html)というメソッドが用意されています。

また、他の形状の当たり判定メソッドも同様に用意されています。

- [Physics.BoxCastAll](https://docs.unity3d.com/2020.2/Documentation/ScriptReference/Physics.BoxCastAll.html)
- [Physics.CapsuleCastAll](https://docs.unity3d.com/2020.2/Documentation/ScriptReference/Physics.CapsuleCastAll.html)
- [Physics.SphereCastAll](https://docs.unity3d.com/2020.2/Documentation/ScriptReference/Physics.SphereCastAll.html)

```cs
var origin = new Vector3(1f, 2f, 3f);
var direction = Vector3.forward;
var distance = 3f;
// ワールド座標(1f, 2f, 3f)から、(0f, 0f, 1f)方向に、
// 距離3でレイを飛ばして当たり判定を行い、
// 当たったコライダーの当たり情報をすべて返却します
var hits = Physics.RaycastAll(origin, direction, distance);
for (int i = 0; i < hits.Length; i++)
{
    var hit = hits[i];
    // ここで当たり判定の結果をもとに処理を行います
}
```

ただし上記のAPIでは、当たり判定の結果を格納する配列を都度を確保してしまいます。
これを毎フレーム行うとGCによるスパイクの原因になるため、事前に用意した結果を格納する配列を引数に渡して、
その中に当たり判定の結果を書き込む[Physics.RaycastNonAlloc](https://docs.unity3d.com/2020.2/Documentation/ScriptReference/Physics.RaycastNonAlloc.html)というメソッドも合わせて用意されています。

利用方法は下記のとおりです。

```cs
// 当たり判定の結果を格納する変数を事前に確保しておきます
// 実際にゲームで利用する場合は当たり判定を取る
// 最大数分配列を確保しておき利用することが多いです(この場合は10)
var hits = new RaycastHit[10];

var origin = new Vector3(1f, 2f, 3f);
var direction = Vector3.forward;
var distance = 3f;
// ワールド座標(1f, 2f, 3f)から、(0f, 0f, 1f)方向に、
// 距離3でレイを飛ばして当たり判定を行い、
// 当たったコライダーの当たり情報を書き込み、戻り値に当たり数を返却します

// 結果は事前に確保したhitに前方から順番に書き込みされます
var hitCount = Physics.RaycastNonAlloc(origin, direction, hits, distance);
for (int i = 0; i < hitCount; i++)
{
    var hit = hits[i];
    // ここで当たり判定の結果をもとに処理を行います
}
```

他の形状による当たり判定メソッドも同様に用意されています。

- [Physics.BoxCastNonAlloc](https://docs.unity3d.com/2020.2/Documentation/ScriptReference/Physics.BoxCastNonAlloc.html)
- [Physics.CapsuleCastNonAlloc](https://docs.unity3d.com/2020.2/Documentation/ScriptReference/Physics.CapsuleCastNonAlloc.html)
- [Physics.SphereCastNonAlloc](https://docs.unity3d.com/2020.2/Documentation/ScriptReference/Physics.SphereCastNonAlloc.html)


## C# Job Systemで当たり判定を行う

上記で紹介したAPIに加えてUnityでは`Physics.Raycast`をC# Job Systemで実行する`RaycastCommand`というAPIが用意されています。もちろんそれぞれの形状ごとに用意されています。

- [BoxcastCommand](https://docs.unity3d.com/2020.2/Documentation/ScriptReference/BoxcastCommand.html)
- [CapsulecastCommand](https://docs.unity3d.com/2020.2/Documentation/ScriptReference/CapsulecastCommand.html)
- [SpherecastCommand](https://docs.unity3d.com/2020.2/Documentation/ScriptReference/SpherecastCommand.html)

まずは利用方法を示します。

```cs
// 一度に実行するレイキャスト数
const int kTestCount = 10;
// レイキャストコマンドと当たり結果を格納する配列を確保します
var hits = new NativeArray<RaycastHit>(kTestCount, Allocator.Persistent);
var commands = new NativeArray<RaycastCommand>(kTestCount, Allocator.Persistent);

// 実行するレイキャスト一覧をコマンド化します
for (var i = 0; i < kTestCount; ++i)
{
    // _origins, _directions, _maxDistancesは
    // それぞれの要素がi番目のレイキャスト情報を表します
    commands[i] = new RaycastCommand(
        _origins[i],
        _directions[i],
        _maxDistances[i]
    );
}

// レイキャストコマンドを一括実行するジョブを作成します
// 1ジョブで実行する最小コマンド数は20とします
var handle = RaycastCommand.ScheduleBatch(
    commands, hits, 20, default(JobHandle));

// ジョブを実行して結果をまちます
handle.Complete();

// ここではすべてのレイキャストの実行が完了していて
// 結果がhits配列に格納されています
for (var i = 0; i < hits.Length; ++i)
{
    var hit = hits[i];
    // ここで当たり判定の結果をもとに処理を行います
}
```

まず前提として、ジョブシステムを用いて高速に行うためには、**複数の当たり判定を一括でジョブシステムに投げる**必要があります。
**当たり判定を複数のコアに割り当てて並列に当たり判定を実行**して、複数の当たり判定の実行を高速化するためです。

そのため上記コードでは、事前にレイキャストによる当たり判定のパラメータであるレイの原点や方向、
レイの距離をそれぞれ `_origins`と`_directions`、`_maxDistances`変数に格納しています。その情報から`RaycastCommand`を生成します。

```cs
for (var i = 0; i < kTestCount; ++i)
{
    // commandsはNativeArray<RaycastCommand>型
    commands[i] = new RaycastCommand(
        _origins[i],
        _directions[i],
        _maxDistances[i]
    );
}
```

レイキャスト命令の一覧は事前に確保しておきます（`commands`配列が該当します）。ジョブシステムでは通常の配列は利用できないので、かわりに`NativeArray`を利用します。
この配列はレイキャストコマンド実行前に都度確保しても良いですが、都度配列を確保するのも効率が悪いため、可能であれば事前に確保できることが望ましいです。

その都度確保する場合は`NativeArray`のコストラクタ呼び出しの第２引数に`Allocator.Temp`を指定します。
事前に確保してクラスのフィールド変数で保持しておく場合は、`Allocator.Persistent`を指定します。

```cs
// commandsは事前確保します
const int kTestCount = 10;
var commands = new NativeArray<RaycastCommand>(
    kTestCount, Allocator.Persistent);
```

`NativeArray`は、確保したあと不要になったら、必ず`Dispose`を呼び出して破棄を行います。

```cs
// 不要になったら必ず破棄のためにDisposeを呼び出します
commands.Dispose();
```

レイキャストの一覧を用意したら、あとはジョブシステムに当たり判定の実行を依頼します。具体的には下記のように記述します。

```cs
// hitsは事前確保します
var hits = new NativeArray<RaycastHit>(kTestCount, Allocator.Persistent);

// レイキャストの一括実行をスケジュールします
var handle = RaycastCommand.ScheduleBatch(
    commands, hits, 20, default(JobHandle));

// 完了待ち
handle.Complete();

// このタイミングでは当たり判定はすべて実行済み

for (var i = 0; i < hits.Length; ++i)
{
    var hit = hits[i];
    // ここで当たり判定の結果をもとに処理を行います
}
```

[RaycastCommand.ScheduleBatch](https://docs.unity3d.com/2020.2/Documentation/ScriptReference/RaycastCommand.ScheduleBatch.html)でジョブシステムに対してレイキャストの一括実行をスケジュールします。
第１引数にはレイキャスト一覧を、第２引数にはその結果を格納する配列を、第３引数には１ジョブあたりで実行する最小のコマンド数を指定します。

あとは`handle.Complete()`を呼び出すことで、レイキャスト実行の完了を待ちます。
完了すると`hits`配列に結果が書き込まれます。ちなみに`commands`と同様に`hits`配列も事前に確保しておきます。

## パフォーマンス検証

それでは、`Physics.Raycast`と`RaycastCommand`のパフォーマンスを検証します。

著者は下記の環境で検証を行いました。

- Unity 2020.2.3f1
- MacBook Pro 2.9GHz 6-Core Intel Core i9

テストシーンとして、下図のように左下が`(-30f, -30f, -30f)`、右上`(30f, 30f, 30f)`の立方体の空間に半径`0.5f ~ 2f`の`SphereCollider`を1000個ランダムに配置します。

![テストシーン。緑色の球がSphereCollider表す。](./testscene.png)

また、レイキャストは立方体内のランダムな位置から、ランダムな方向に1000回行います。

具体的には、下記のコードでシーンを用意します。

```cs
// _rootTransform下にSphereColliderを配置する
_rootTransform = new GameObject("root").transform;
_rootTransform.transform.position = Vector3.zero;
// _sphereCountはSphereColliderの数
for (var i = 0; i < _sphereCount; ++i)
{
    var sphereObject = new GameObject(string.Format("sphere-{0:0000}", i));
    sphereObject.transform.SetParent(_rootTransform, false);
    var sphereCollider = sphereObject.AddComponent<SphereCollider>();
    // _minRadiusは最小半径、_maxRadiusが最大半径
    sphereCollider.radius = Random.Range(_minRadius, _maxRadius);
    // _leftBottomは左下、_rightTopは右上
    sphereObject.transform.localPosition = new Vector3(
        Random.Range(_leftBottom.x, _rightTop.x),
        Random.Range(_leftBottom.y, _rightTop.y),
        Random.Range(_leftBottom.z, _rightTop.z)
    );
}

// それぞれレイキャストの位置、方向、距離
_testOrigins = new Vector3[_testCount];
_testDirections = new Vector3[_testCount];
_testMaxDistances = new float[_testCount];
for (var i = 0; i < _testCount; ++i)
{
    _testOrigins[i] = new Vector3(
        Random.Range(_leftBottom.x, _rightTop.x),
        Random.Range(_leftBottom.y, _rightTop.y),
        Random.Range(_leftBottom.z, _rightTop.z)
    );
    _testDirections[i] = new Vector3(
        Random.Range(-1f, 1f),
        Random.Range(-1f, 1f),
        Random.Range(-1f, 1f)
    );
    _testMaxDistances[i] =
        Random.Range(0f, (_rightTop - _leftBottom).magnitude);
}
```

また、`RaycastCommand.ScheduleBatch`のジョブあたりの最小コマンド実行数はそれぞれ`100`、`500`、`1000`を試します。
これはそれぞれジョブのワーカー数を`1`、`2`、`10`で検証するためです。(例えばレイキャストコマンド数が`1000`なので、最小コマンド実行数`500`とすると、ジョブを実行するワーカー数が`2`となります。）

下記が実行結果です。

| レイキャスト種類                                    | 実行時間(ms) |
| :-------------------------------------------------- | -----------: |
| `Raycast`                                           |         1.11 |
| `RaycastCommand-min1000` (最小コマンド実行数`1000`) |         1.00 |
| `RaycastCommand-min500` (最小コマンド実行数`500`)   |         0.65 |
| `RaycastCommand-min100` (最小コマンド実行数`100`)   |         0.15 |

`Raycast`と`RaycastCommand-min1000`が同程度、`RaycastCommand-min500`が`RaycastCommand-min1000`より2倍弱高速、`RaycastCommand-min100`が`RaycastCommand-min1000`より10倍程度高速になり、概ね期待通りの検証結果になることを確認できました。
また、プロファイルのタイムラインを確認してジョブが並列に実行されているか確認します。

![RaycastCommand-min1000のタイムライン](./raycastcommand-tl-1000-1000.png)

![RaycastCommand-min100のときのタイムライン](./raycastcommand-tl-1000-100.png)

`RaycastCommand-min1000`のタイムラインではジョブの実行が１並列（`RaycastCommand`がメインスレッドのみでしか実行されていない）ですが、`RaycastCommand100`のタイムラインではジョブが並列に実行されていることが確認できます。（JobのWorkerに`RaycastCommand`が割り当てられていることが確認できます）

## まとめ

`Physics.Raycast`をジョブシステムで実行する`RaycastCommand`についてその利用方法を紹介し、また`Physics.Raycast`と`RaycastCommand`についてそのパフォーマンスを検証しました。
