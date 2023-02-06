---
type: "tech"
title: ".NET Standard 2.1のArrayPool<T>を用いたレイキャスト（Physics.RaycastNonAlloc）の最適化"
description: ".NET Standard 2.1のArrayPool<T>を用いてPhysics.RaycastNonAllocに渡す配列を事前確保＆再利用する方法について紹介します。"
tags: ["Unity",".NET Standard 2.1","Physics"]
date: "2023-02-06T00:00:00"

---

UnityのPhysicsが提供するレイキャストは、大まかに分けて当たった1点を返す`Physics.Raycast`と、指定したレイに当たったコリジョンをすべて返す`Physics.RaycastAll`の2つがあります。

複数の結果を返す、という観点では、`Physics.RaycastAll`と`Physics.RaycastNonAlloc`というAPIが利用できます。

`Physics.RaycastAll`はクエリの結果をすべて返却します。結果は`RaycastHit[]`を返しますが、この配列は呼び出し時に**都度確保**されます。

`Physics.RaycastNonAlloc`はすでに確保された`RaycastHit[]`に対して結果の書き込みを行うことで、`GC.Alloc`を回避します。
結果を格納する配列を、レイキャストを利用するコンポーネントやクラスの初期化時に確保しておくなどしておくと、レイキャスト呼び出し時は`GC.Alloc`を一切発生させないことができます。

そのため、レイキャストの結果を複数取得したい場合、パフォーマンスを考慮すると大抵の場合は`Physics.RaycastNonAlloc`を使うことになります。

ただし、この配列をレイキャストを行うコンポーネントやクラスのフィールドとして確保すると、複数コンポーネント間で重複した配列を確保することになり、地味ではありますがメモリ確保の効率が悪いです。
また、Unity標準ではArrayPoolの実装がないため、プロジェクトで独自の実装が必要になります。
（ちなみにVisual ScriptingパッケージやGraphicsパッケージにはArrayPool実装がそれぞれ用意されていますが、あくまでもパッケージ側のクラスなので、それらはノーカウント。）

.NET Standard 2.1には`ArrayPool<T>`が用意されているので、今回はこれを用いて`Physics.RaycastNonAlloc`に渡す配列を事前確保＆再利用する方法について紹介します。

## `ArrayPool<T>`について

.NET Standard 2.1で実装された配列のプール実装です。

[ArrayPool<T> クラス (System.Buffers) | Microsoft Learn](https://learn.microsoft.com/ja-jp/dotnet/api/system.buffers.arraypool-1?view=net-5.0)

.NET Standard 2.1はUnity2021.2から利用可能なので、2021 LTS以降で標準的に利用できるAPIになります。 利用方法を下記に示します。

```csharp
var aryLength = 16;
// 配列をプールから借りてくる
var rentAry = ArrayPool<int>.Shared.Rent(aryLength);

// なにか配列に対して処理
// 試しに配列に対して適当な値をつっこんで
// その合計を取る
for (var i = 0; i < aryLength; i++)
{
    rentAry[i] = i;
}

for (var i = 0; i < aryLength; i++)
{
    sum += rentAry[i];
}

Debug.Log($"sum = {sum}");

// 借りた配列を返却する
ArrayPool<int>.Shared.Return(rentAry);
```

使い方はとてもシンプルで、`ArrayPool<T>.Shared.Rent(length)`でプールから配列を借りてきて、使い終わったら`ArrayPool<T>.Shared.Return(array)`で返却します。

`ArrayPool<T>`について、さらに詳細について知りたい方は[(C#) ArrayPool<T>.Shared 解体新書 - ネコのために鐘は鳴る](https://ikorin2.hatenablog.jp/entry/2020/07/25/113904)などが参考になります。

## `ArrayPool<T>`と`Physics.RaycastNonAlloc`を組み合わせる

`ArrayPool<T>`を利用して事前確保された配列プールを利用できることがわかったので、`Physics.RaycastNonAlloc`と組み合わせてみます。下記のように画面をクリックすると、クリック情報に対応するレイを生成して、そのレイに当たったオブジェクトをすべて非表示にするような実装を考えます。

![画面をクリックしたら、レイが当たったオブジェクトを削除するやつ](./sample.gif)

対象となるオブジェクトは下記のようにランダムに配置するものとします。

```csharp
// 配置するオブジェクト数は_collisionCountで定義
for (var i = 0; i < _collisionCount; ++i)
{
    // スフィアコリジョンが格納されたプレハブをターゲットする
    var sphereObject = Instantiate(_collisionPrefab);
    sphereObject.name = $"sphere-{i:D4}";
    sphereObject.transform.SetParent(_root, false);
    
    // 半径をランダムに設定
    var radius = Random.Range(_minRadius, _maxRadius);
    sphereObject.transform.localScale = Vector3.one * radius * 2f;
    // 位置をランダムに設定
    // _leftBottomおよび_rightTopはVector3で、
    // 配置する領域の左下と右上を定義し、その２点の示す直方体内にスフィアを配置する
    sphereObject.transform.localPosition = new Vector3(
        Random.Range(_leftBottom.x, _rightTop.x),
        Random.Range(_leftBottom.y, _rightTop.y),
        Random.Range(_leftBottom.z, _rightTop.z)
    );
}
```

上記のコリジョンに対して、`ArrayPool<T>`と`Physics.RaycastNonAlloc`を組み合わせて下記のように`GC.Alloc`なしのレイキャストを実現します。

```csharp
// レイキャストの最大数を定義。仕様で決める。
const int MaxHitCount = 128;
// クリックした画面座標とカメラの情報を元に、レイキャストで使うレイを生成する
var ray = GetClickRay(_camera);
// プールから配列を借りてくる
// 
var hits = ArrayPool<RaycastHit>.Shared.Rent(MaxHitCount);
// プールから借りてきた配列に結果を書き込む
var count = Physics.RaycastNonAlloc(ray, hits, _camera.farClipPlane);
if (count > 0)
{
    for (var i = 0; i < count; i++)
    {
        var hit = hits[i];
        // hitを元になにか処理する

        if (hit.transform.TryGetComponent<MeshRenderer>())
        {
            // 今回はとりあえず描画をオフにする実装
            // 本当は、以後レイキャストの対象から外すなどするとよい
            meshRenderer.enabled = false;
        }

        // 事前にInstanceIdから対応するMeshRendererの一覧を割り当てて
        // hit.colliderInstanceIDを用いて、MeshRendererを引いたほうが速いかも？
        // (未検証)
        // if (_meshRenderers.TryGetValue(hit.colliderInstanceID, out var meshRenderer))
        // {
        //     meshRenderer.enabled = false;
        // }
    }
}
// 最後に配列をプールに戻す
ArrayPool<RaycastHit>.Shared.Return(hits, true);
```

`ArrayPool<T>`の使い方は先述の利用方法と大きく変わりませんが、`RaycastHit`が`Collider`の参照を保持するので、参照をクリアするために返却の際に`Return`の第2引数に`true`を指定しています。`true`を指定することで、返却時にゼロクリアを実施します。


また、配列を列挙する際に（配列の要素数ではなく）必ず`Physics.RaycastNonAlloc`の戻り値を最大数としてループを回します。この戻り値は実際にレイキャストで当たったコリジョン数を返し、その個数分配列の先頭要素から結果を書き込みます。
それ以外は無効な値になるので、これを利用しないために戻り値の個数でループを回します。

さらにいうと`Rent`で実際に返ってくる配列の要素数は、必ず指定した要素数と同数返ってくる保証がない（2のべき乗の要素が確保される）といった`ArrayPool<T>`側の実装の都合があります。（が、これは`Physics.RaycastNonAlloc`の戻り値でループを回していれば問題にならないため今回は詳細を割愛します。）

## まとめ

`ArrayPool<T>`と`Physics.RaycastNonAlloc`を用いて、複数個の結果を取るレイキャストを`GC.Alloc`なしで実行する方法について紹介しました。

.NET Standard 2.1から利用できるAPIは、Unityでも効率的・効果的に利用できるケースが多そうなので、いろいろ試してみたいなと思います。