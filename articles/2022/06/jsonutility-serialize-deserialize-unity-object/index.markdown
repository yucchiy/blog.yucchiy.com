---
type: "tech"
title: "JsonUtilityでオブジェクトをシリアライズしたりデシリアライズしたりする"
description: "JsonUtilityの基本的な使い方について紹介します。"
tags: ["Unity","JsonUtility","Serialize","C#"]
date: "2022-06-10T04:00:00"

---

`JsonUtility` を用いると、シリアライズ可能なオブジェクトをJSONとして文字列に変換（シリアライズ）し、またはJSON文字列から対応するオブジェクトを生成（デシリアライズ）できます。



サーバーと通信するときのフォーマットとしてJSONがよく用いられるため、これらの用途だったり、シリアライズできるということはつまりクラスインスタンスを文字列として表現できるということなので、たとえばゲームの状態を表す型をJSONに変換してファイル保存することでセーブデータの保存が実装できます。



よく知られたクラスで、たくさんブログが書かれているんですが、改めて便利に感じたことがあったので、個人の備忘録として残しておきたいと思います。

## 基本的な使い方

`JsonUtility` の基本的な使い方を抑えておきます。JSON文字列としてシリアライズしたいクラスは、シリアライズ可能な型として定義します。



具体的にはクラスに `System.Serializable` 属性をつけることでシリアライズ可能な型として定義します。通常シリアライズできるフィールドは `public` なフィールドのみですが、フィールドに `UnityEngine.SerializeField` 属性をつけておくことで、 `private` なフィールドなどもシリアライズできます。

```csharp
[Serializable]
public class TestClass1
{
    public int PublicField;
    private int PrivateField;
    [SerializeField] private int PrivateSerializeField;

    public int PrivateFieldGetter => PrivateField;
    public int PrivateSerializeFieldGetter => PrivateSerializeField;

    public TestClass1(int publicField, int privateField, int privateSerializableField)
    {
        PublicField = publicField;
        PrivateField = privateField;
        PrivateSerializeField = privateSerializableField;
    }
}
```




上記の型に対して、下記のような操作でJSONシリアライズとデシリアライズが行なえます。まずはじめにシリアライズとデシリアライズの一連の流れを示します。

```csharp
var test１ = new TestClass1(10, 20, 30);
// JSON文字列にシリアライズ
var test1Json = JsonUtility.ToJson(test1, true);
Debug.Log($"test1: \n{test1Json}");
// test1: 
// {
//     "PublicField": 10,
//     "PrivateIntSerializeField": 30
// }

// JSON文字列からクラスとしてデシリアライズする
var newTest1
    = JsonUtility.FromJson<TestClass1>(test1Json);
Debug.Log($"PublicField = {newTest1.PublicField}");
// PublicField = 10

// Privateなのでシリアライズされずにデフォルト値が入る
Debug.Log($"PrivateField = {newTest1.PrivateFieldGetter}");
// PrivateField = 0

// SerializeFieldをつけたのでこっちは大丈夫
Debug.Log($"PrivateSerializeField = {newTest1.PrivateSerializeFieldGetter}");
// PrivateSerializeField = 30
```




クラスインスタンスからJSON文字列へシリアライズを行うには `JsonUtility.ToJson` メソッドを用います。

参考: [JsonUtility-ToJson - Unity スクリプトリファレンス](https://docs.unity3d.com/ja/current/ScriptReference/JsonUtility.ToJson.html)



下記コードのように、シリアライズしたいインスタンスを第１引数に渡すと、戻り値としてJSONが返却されます。先述の通りprivateなフィールドはシリアライズ対象外なので、JSON文字列に `PrivateField` はJSON文字列に現れません（シリアライズされていません）。ただし、 `PrivateSerializeField` は `SerializeField` 属性を付けているのでシリアライズ対象になっているのが確認できます。

```csharp
var test１ = new TestClass1(10, 20, 30);
// JSON文字列にシリアライズ
var test1Json = JsonUtility.ToJson(test1, true);
Debug.Log($"test1: \n{test1Json}");
// test1: 
// {
//     "PublicField": 10,
//     "PrivateSerializeField": 30
// }
```


第２引数に `true` を渡すと、インデントや改行が入った読みやすいJSONが返却されます。デバッグ用にはこちらを `true` にすると見やすいですが、実際に使うときは改行やインデントが無駄なので `false` にします。



JSON文字列からクラスインスタンスの生成、つまりデシリアライズは `JsonUtility.FromJson` メソッドを用います。

[JsonUtility-FromJson - Unity スクリプトリファレンス](https://docs.unity3d.com/ja/current/ScriptReference/JsonUtility.FromJson.html)



引数にJSON文字列を渡し、かつ型パラメータに変換したい型を指定します。戻り値にデシリアライズしたインスタンスが返却されます。

```csharp

// JSON文字列からクラスとしてデシリアライズする
var newTest1
    = JsonUtility.FromJson<TestClass1>(test1json);
Debug.Log($"PublicField = {newTest1.PublicField}");
// PublicField = 10

// privateなのでシリアライズされてずデフォルト値が入る
Debug.Log($"PrivateField = {newTest1.PrivateFieldGetter}");
// PrivateField = 0

// SerializeFieldをつけたのでこっちは大丈夫
Debug.Log($"PrivateIntSerializeField = {newTest1.PrivateIntSerializeFieldGetter}");
// PrivateIntSerializeField = 30
```


先述の通り、privateなフィールドはシリアライズ対象外なのでデフォルト値が入っています。



このように `JsonUtility` を用いると、シリアライズは `ToJson` 、デシリアライズは `FromJson` を呼び出すだけと、かんたんにJSONシリアライズが実装できます。



ちなみに、シリアライズできる型には制限がありますが（よく挙げられる型としては `Dictionary`  がサポート外）、基本的なプリミティブ型やクラス・構造体はサポートしています。 実際にシリアライズされる型は概ね、 `MonoBehaviour` や `ScriptableObject` にフィールドを定義したときに、そのままインスペクターに表示されるフィールドだと考えて大きく齟齬はないです（そのはず…）。つまり `SerializeObject` および `SerializeProperty` クラスで扱える型がそのままサポートされる、といった感じでしょうか。

## シリアライズをサポートしない型のシリアライズ方法

サポートされていない型も `ISerializationCallbackReceiver` というインターフェイスをフックし、シリアライズ直前にシリアライズ可能な型のフィールドに格納するなどの工夫を行うことでサポートできます。

参考: [UnityでJSONデータを操作(JSONとクラスを変換)するために使えるJsonUtilityとは【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/JsonUtility#%E5%A4%89%E6%8F%9B%E3%82%B7%E3%83%AA%E3%82%A2%E3%83%A9%E3%82%A4%E3%82%BA%E3%83%87%E3%82%B7%E3%83%AA%E3%82%A2%E3%83%A9%E3%82%A4%E3%82%BA%E6%99%82%E3%81%AE%E5%87%A6%E7%90%86)



例として、 `Dictionary` をシリアライズする例を示します。

```csharp
using System;
using System.Collections.Generic;
using UnityEngine;

[Serializable]
public class TestClass6 : ISerializationCallbackReceiver
{
    // Dictはシリアライズできない
    public Dictionary<string, string> Dict { get; }

    public TestClass6()
    {
        Dict = new Dictionary<string, string>();
    }

    // DictのKeyをシリアライズするためのフィールド
    // インスペクターで見えなくてもいいので隠しておく
    [HideInInspector]
    [SerializeField]
    private List<string> _keys;

    // DictのValueをシリアライズするためのフィールド
    // インスペクターで見えなくてもいいので隠しておく
    [HideInInspector]
    [SerializeField]
    private List<string> _values;

    public void OnBeforeSerialize()
    {
        // Dictionaryはシリアライズできないため、
        // 代わりにList<T>でシリアライズする
        _keys = new List<string>(Dict.Count);
        _values = new List<string>(Dict.Count);
        foreach (var pair in Dict)
        {
            _keys.Add(pair.Key);
            _values.Add(pair.Value);
        }
    }

    public void OnAfterDeserialize()
    {
        // シリアライズしたデータからDictを復元
        Dict.Clear();
        for (var i = 0; i < _keys.Count; i++)
        {
            Dict.Add(_keys[i], _values[i]);
        }
    }
}
```


この例では、 `Dict` の キーとバリューを、それぞれシリアライズ可能な `_keys` と `_values` で保存してシリアライズし、またその値で `Dict` を復元しています。



下記コードで、正しくシリアライズとデシリアライズが行えることが確認できます。

```csharp
var test6 = new TestClass6();
test6.Dict.Add("1", "one");
test6.Dict.Add("2", "two");
test6.Dict.Add("3", "three");

var test6Json = JsonUtility.ToJson(test6, true);

var newTest6 = JsonUtility.FromJson<TestClass6>(test6Json);
Debug.Log($"test6.Dict[\"1\"] = {newTest6.Dict["1"]}");
// test6.Dict["1"] = one
Debug.Log($"test6.Dict[\"2\"] = {newTest6.Dict["2"]}");
// test6.Dict["2"] = two
Debug.Log($"test6.Dict[\"3\"] = {newTest6.Dict["3"]}");
// test6.Dict["3"] = three
```


## Unity標準型のシリアライズ

`JsonUtility` で地味に嬉しいのが、 `Vector3` や `AnimationCurve` などのUnity標準の型もシリアライズ可能という点です。



例えば下記の型をシリアライズすると

```csharp
using UnityEngine;

public class TestClass3 : MonoBehaviour
{
    public AnimationCurve Curve;
    public Vector3 Vector;
}
```


下記のようにJSONにシリアライズされます。

```csharp
test3: 
{
    "Curve": {
        "serializedVersion": "2",
        "m_Curve": [
            {
                "serializedVersion": "3",
                "time": 0.0,
                "value": 0.0,
                "inSlope": 0.0,
                "outSlope": 0.0,
                "tangentMode": 0,
                "weightedMode": 0,
                "inWeight": 0.0,
                "outWeight": 0.0
            },
            {
                "serializedVersion": "3",
                "time": 1.0,
                "value": 1.0,
                "inSlope": 0.0,
                "outSlope": 0.0,
                "tangentMode": 0,
                "weightedMode": 0,
                "inWeight": 0.0,
                "outWeight": 0.0
            }
        ],
        "m_PreInfinity": 2,
        "m_PostInfinity": 2,
        "m_RotationOrder": 4
    },
    "Vector": {
        "x": 1.0,
        "y": 2.0,
        "z": 3.0
    }
}
```


たとえばカーブ単体をテキストとして保存して管理したいなどのケースがあったときに、サクッとJSONにできるのは便利だと感じています。特に `AnimationCurve` のようなクラスは保持するデータも結構複雑なので、標準でシリアライズできるのは結構ありがたいと感じています（これは考えてみれば当たり前な話なんですが…）。



ちなみに、たとえば `AnimationCurve` オブジェクトそのままをシリアライザすることはできないようで、その場合は下記のように `AnimationCurve` だけを持つクラスのインスタンスにカーブを渡して、そのインスタンスを `JsonUtility.ToJson` でシリアライズすればよいです。

```csharp
[Serializable]
public class WrappedAnimationCurve
{
    public AnimationCurve Curve;
    public WrappedAnimationCurve(AnimationCurve curve)
    {
        Curve = curve;
    }
}

// カーブを（ほぼ）単体でJSON文字列化できる
var curveJson = JsonUtility.ToJson(new WrappedAnimationCurve(test3.Curve));
```


## MonoBehaviourやScriptableObjectを継承する型のデシリアライズ

`JsonUtility` では `MonoBehaviour` や `ScriptableObject` を継承する型もJSONにシリアライズできますが、特にデシリアライズ（JSONからオブジェクトを生成）する際に少し注意が必要です。



具体的には、 `MonoBehaviour` や `ScriptableObject` は `JsonUtility.FromJson` でデシリアライズできない点です。



下記コードを実行すると、

```csharp
// Test5Classコンポーネントがアタッチされている
// ゲームオブジェクト上でテストしている前提
var test5 = this.gameObject.GetComponent<TestClass5>();
// シリアライズは問題なくうごく
var test5Json = JsonUtility.ToJson(test5);
// ここでエラー
// ArgumentException: Cannot deserialize JSON to new instances of type 'TestClass5.'
var newTest5 = JsonUtility.FromJson<TestClass5>(test5Json);
```


下記のようなエラーが出ます。

```csharp
ArgumentException: Cannot deserialize JSON to new instances of type 'TestClass5.'
UnityEngine.JsonUtility.FromJson (System.String json, System.Type type) (at <e000c5ade9084c9c844e11c13b6c7613>:0)
UnityEngine.JsonUtility.FromJson[T] (System.String json) (at <e000c5ade9084c9c844e11c13b6c7613>:0)
```


おそらく `MonoBehaviour` は `GameObject.AddComponent` で、 `ScriptableObject` は `ScriptableObject.CreateInstance` で生成する必要があるため上記のエラーがでるのだと思います。



これを回避するには、インスタンス生成自体は自分で行って（具体的には `MonoBehaviour` の場合は `GameObject.AddComponent` で生成して）、そのインスタンスのフィールドを、シリアライズされたJSONで上書きするというアプローチを取ります。



具体的には `JsonUtility.FromJsonOverride` というメソッドを利用します。下記コードに実例を示します。

```csharp
var test5 = this.gameObject.GetComponent<TestClass5>();
test5.Name = "Test5";
var test5Json = JsonUtility.ToJson(test5);
var newTest5 = this.gameObject.AddComponent<TestClass5>();

// test5のプロパティでnewTest5を上書き
JsonUtility.FromJsonOverwrite(test5Json, newTest5);
Debug.Log($"newTest5.Name = {newTest5.Name}");
// newTest5.Name = Test5
```




ここで、JSONで設定したフィールド情報にインスタンスの初期化をしたくなると思いますが、`gameObject.AddComponent<TestClass5>()` を呼び出したタイミングで `Awake` も呼び出される可能性があるため、 `Awake` では `FromJsonOverwrite` で上書きしたプロパティをもとに初期化は行えません。一方で `Start` メソッドは、そのコンポーネントを作成した後の一番初めの Update メソッド前に呼び出されるため、JsonUtility経由でプロパティを上書きすることが前提のクラスの場合、 `AddComponent` 直後に `FromJsonOverwrite` でプロパティを上書きし、 `Start` メソッドで初期化するのが良いでしょう。

```csharp
using UnityEngine;

public class TestClass5 : MonoBehaviour
{
    public string Name;

    void Awake()
    {
        // ここでは Name はnullで来る可能性がある
    }

    void Start()
    {
        // AddComponent直後でFromJsonOverwriteで
        // 上書きすれば、ここでは値が入っている
        Debug.Log($"Name = {Name}");
    }
}
```


## Unity.Objectの参照のシリアライズとEditorJsonUtilityについて

最後に UnityEngine.Object の参照のシリアライズについて触れておきます。



具体的には下記のような型のインスタンスをシリアライズするケースです。

```csharp
using UnityEngine;

public class TestClass4 : MonoBehaviour
{
    // シーン中のゲームオブジェクトの参照や
    // プレハブの参照
    public GameObject Obj;
}
```


このようなクラスのインスタンスをシリアライズして生成されるJSONは下記のとおりです。

```json
{
    "Obj": {
        "instanceID": 24370
    }
}
```


このようにUnity.Object の参照は、参照先のオブジェクトのインスタンスIDをシリアライズします。

試しに、下記のようなコードでシリアライズとデシアライズを行ってみます。

```csharp
var test4 = GetComponent<TestClass4>();
var test4Json = JsonUtility.ToJson(test4, true);

Debug.Log($"test4: \n{test4Json}");

var newTest4 = this.gameObject.AddComponent<TestClass4>();
JsonUtility.FromJsonOverwrite(test4Json, newTest4);
```


上記コードによるデシリアライズによる結果を下図に示します。上が元となるコンポーネント（ `test4` ）で、下が生成したコンポーネント（ `newTest4` ）です。

![](./0D959DBE873822315E13FC4602DF5074.png)



`Main Camera` はシーン中のゲームオブジェクトです。このように正しく参照を復元できています。



しかしインスタンスIDはインスタンス生成時に生成されるため、特に参照にプレハブやテクスチャなどのアセットを参照する場合には問題になります。また、生成したJSONをファイルに書き出しておき、ゲームを再起動した状態で生成したJSONでインスタンスを復元したとしても、参照は正しく復元できません。



そのため、参照をシリアライズする場合はこの挙動を理解した上での対応が必要になります。状況によっては、独自のシリアライズを検討したほうが良いでしょう。



また、ここで似たようなクラスに `EditorJsonUtility` があり、こちらはアセットの参照を下記のようにGUIDを元に保持します。

```csharp
{
    "MonoBehaviour": {
        "m_Enabled": true,
        "m_EditorHideFlags": 0,
        "m_Name": "",
        "m_EditorClassIdentifier": "",
        "Obj": {
            "fileID": 2996958370322343278,
            "guid": "a8c4c077af349eb45ab8edbc6d1dcc29",
            "type": 3
        }
    }
}
```


そのため、アセットを参照する場合は `EditorJsonUtility.FromJsonOverwrite` を用いた方が良いでしょう。ただし、 `EditorJsonUtility` はエディタ限定機能で、また `EditorJsonUtility.ToJson` で生成したJSONは `JsonUtility.FromJson` で利用できない点も注意です。

参考: [【Unity】JsonUtilityとEditorJsonUtilityの違いをちゃんと理解する - LIGHT11](https://light11.hatenadiary.com/entry/2021/02/17/213232)

## まとめ

JsonUtilityの基本的な使い方についてまとめました。

## 参考

* [UnityでJSONデータを操作(JSONとクラスを変換)するために使えるJsonUtilityとは【Unity】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/JsonUtility#%E5%A4%89%E6%8F%9B%E3%82%B7%E3%83%AA%E3%82%A2%E3%83%A9%E3%82%A4%E3%82%BA%E3%83%87%E3%82%B7%E3%83%AA%E3%82%A2%E3%83%A9%E3%82%A4%E3%82%BA%E6%99%82%E3%81%AE%E5%87%A6%E7%90%86)
* [【Unity】JsonUtilityを使ったJson化 - nekosuko.jp](https://nekosuko.jp/1893/)
* [JSON 形式にシリアライズ - Unity マニュアル](https://docs.unity3d.com/ja/2018.4/Manual/JSONSerialization.html)
* [【Unity】JsonUtilityを触ってみた – 株式会社ロジカルビート](https://logicalbeat.jp/blog/8195/)
* [UnityのJsonUtilityの細かい10の疑問をいまさら検証した - Qiita](https://qiita.com/keidroid/items/24e03f82d74560dc557a)
* [JsonUtility をつかって Unity で JSON を取り扱う方法 - Qiita](https://qiita.com/sea_mountain/items/6513b330983ffa003959)
* [【Unity】JsonUtilityとEditorJsonUtilityの違いをちゃんと理解する - LIGHT11](https://light11.hatenadiary.com/entry/2021/02/17/213232)


