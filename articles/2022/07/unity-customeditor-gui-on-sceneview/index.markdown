---
type: "tech"
title: "Custom EditorでシーンビューにHandleやGUIを出して調整作業を効率化する"
description: "シーンビュー上に調整用のGUIを表示することでコンポーネントの調整作業を効率化する方法について紹介します。"
tags: ["Unity","エディタ拡張"]
date: "2022-07-03T09:00:00"
eyecatch: "./B6E112218E097436E6296A58FE2039A7.png"

---

Unityでコンポーネントのプロパティ値を調整するとき、特に座標値などを扱う場合は、インスペクター上の値とにらめっこしながら調整するより、シーンビュー上にGUIなどを出して直接調整するほうが効率的に作業できることがあります。また、シーンビュー上に調整用のGUIが出ていると何かと便利なこともあります。



下記のようなコンポーネントの編集を例にとって、これをシーンビュー上で編集するようなGUIを検討してみることにします。

```csharp
using UnityEngine;

public class Enemy : MonoBehaviour
{
    public string Name => _name;
    public Vector3 CameraFollowOffset => _hpBarOffset;

    [SerializeField]
    [Header("敵の名前")]
    private string _name;
    [SerializeField]
    [Header("敵のHPバーを表示する位置オフセット")]
    private Vector3 _hpBarOffset;
}
```


## Custom Editorの基本形

コンポーネントを編集するGUIを制作する方法は様々ですが、今回はCustom Editorを利用してみます。

[Unity - Manual: Custom Editors](https://docs.unity3d.com/Manual/editor-CustomEditors.html)



先程の `Enemy` コンポーネントのCustom Editorの基本形を示します。

```csharp
using UnityEditor;

[CustomEditor(typeof(Enemy))]
public class EnemyEditor : Editor
{
    private SerializedProperty _name;
    private SerializedProperty _cameraFollowPosition;

    private void OnEnable()
    {
        // serializedObjectは、ヒエラルキーで選択中の
        // EnemyコンポーネントのSerializedObject
        _name = serializedObject.FindProperty("_name");
        _cameraFollowPosition = serializedObject.FindProperty("_cameraFollowPosition");
    }

    public override void OnInspectorGUI()
    {
        // インスペクターの表示をカスタマイズしたいときはこっちで行う

        // これを呼び出すと、標準で用意されるインスペクターがそのまま表示される
        base.OnInspectorGUI();

        // 独自のインスペクター表示を行いたいときは、上記を呼び出さずに
        // 自前でビューをつくるなどする
    }

    public void OnSceneGUI()
    {
        // シーンビューでGUIを描画したいときはこっちで行う
    }
}
```


Custom Editorは編集したいコンポーネントに対して1対1で作成します。今回は `Enemy` コンポーネントと対となる `EnemyEditor` を作成しています。`UnityEditor.Editor` クラスを継承し、さらに `CustomEditor` 属性を指定しておきます。



`OnEnable` でCustom Editorで編集したいシリアライズ可能なフィールドから `SerializedProperty` を初期化しておきます。フィールドやセッターが `public` であれば直接して編集しても良いのですが、エディター実装だけのためにそれらを `public` にするのは良くないので、特別な理由がない限りは `SerializedProperty` でフィールドを編集するようにします。

```csharp
private void OnEnable()
{
    // serializedObjectは、ヒエラルキーで選択中の
    // EnemyコンポーネントのSerializedObject
    _name = serializedObject.FindProperty("_name");
    _cameraFollowPosition = serializedObject.FindProperty("_cameraFollowPosition");
}
```


あとは `OnInspectorGUI` や `OnSceneGUI` を実装してインスペクターなどの見た目をカスタマイズしていきます。今回は、シーンビュー上でコンポーネントを編集するビューを作成していきたいので、 `OnSceneGUI` に処理を記述していきます。

## Handles

Unityにはシーンビュー上で座標値やスケールなどを調整する3D GUIを描画する Handles という機能が標準で提供されています。



[Unity - Scripting API: Handles](https://docs.unity3d.com/ScriptReference/Handles.html)



名前を聞くと馴染みがないかもしれませんが、ゲームオブジェクトの位置や回転などを調整するときに出てくるxyz方向に向いた矢印のGUIもHandlesによって提供されています。

（コードそのものを確認できていませんが、Handlesに同じGUIを描画する機能があるのでおそらく同じ機能を呼び出しているはず…）

![](./87882D94D5CE8A33DE6DADFE614712B0.png)

この機能はユーザーも利用できます。さきほどの `Enemy` クラスの `_hpBarOffset` の位置調整を、上図の位置調整用のHandleを用いて行えるようにしてみます。まずはコード全文を示します。

```csharp
public void OnSceneGUI()
{
    // シーンビューでGUIを描画したいときはこっちで行う
    var enemy = target as Enemy;

    serializedObject.Update();

    var hpBarOffsetWorldPosition =
        enemy.transform.position +
        enemy.transform.localToWorldMatrix.MultiplyVector(enemy.HPBarOffset);

    EditorGUI.BeginChangeCheck();
    var newHPBarOffset = Handles.PositionHandle(
        hpBarOffsetWorldPosition,
        enemy.transform.rotation
    );
    if (EditorGUI.EndChangeCheck())
    {
        Undo.RecordObject(target, "Change Hp Bar Offset Position");
        _hpBarOffset.vector3Value =
            enemy.transform.worldToLocalMatrix.MultiplyVector(
                newHPBarOffset - enemy.transform.position
            );
    }

    serializedObject.ApplyModifiedProperties();
}
```


位置調整のGUIは `Handles.PositionHandle` を呼び出すことで利用できます。



[Unity - Scripting API: Handles.PositionHandle](https://docs.unity3d.com/ScriptReference/Handles.PositionHandle.html)



引数として現在の位置とGUIの回転をそれぞれ**ワールド座標**で取り、戻り値としてユーザー操作によって移動した後の位置をワールド座標で返却します。



このとき、実際に移動したかどうかを `EditorGUI.BeginChangeCheck` と `EditorGUI.EndChangeCheck` によって判定できるので、移動後のみ値を更新するようにします。また、Undo用の設定も合わせて行います。

```csharp
var hpBarOffsetWorldPosition =
    enemy.transform.position +
    // 現在のenemyの位置+オフセットにenemyの位置を反映させる
    enemy.transform.localToWorldMatrix.MultiplyVector(
        enemy.HPBarOffset
    );

var newHPBarOffset = Handles.PositionHandle(
    hpBarOffsetWorldPosition,
    enemy.transform.rotation
);
// 更新検知
if (EditorGUI.EndChangeCheck())
{
    // Undo用のコマンドをつんでおく
    Undo.RecordObject(target, "Change Hp Bar Offset Position");
    // ローカルオフセットに戻す
    // hpBarOffsetWorldPositionの逆操作
    _hpBarOffset.vector3Value =
        enemy.transform.worldToLocalMatrix.MultiplyVector(
            newHPBarOffset - enemy.transform.position
        );
}
```


これで実装ができました。実際に `Handles.PositionHandle` によってオフセットを調整する様子を下図に示します。

![](./FD71B4E6371BED9DE7192F19CC2A8ADB.gif)

### `Handles.DrawingScope` でオブジェクトのローカル座標で処理を記述する

オフセット更新のために `Handles.PositionHandle` に渡す引数の位置や回転、戻り値の位置がすべてワールド座標なのでオフセットからワールド座標に変換して、また、受け取る座標もワールド座標なのでそこからローカル座標に戻してオフセットに代入していました。

```csharp
// PositionHandleの座標値はワールド座標なので座標変換
var hpBarOffsetWorldPosition =
    enemy.transform.position +
    // 現在のenemyの位置+オフセットにenemyの位置を反映させる
    enemy.transform.localToWorldMatrix.MultiplyVector(
        enemy.HPBarOffset
    );
var newHPBarOffset = Handles.PositionHandle(
    hpBarOffsetWorldPosition,
    enemy.transform.rotation
);

// オフセットはそのオブジェクトのローカル座標なので
// ワールド座標からローカル座標に変換して代入
_hpBarOffset.vector3Value =
    enemy.transform.worldToLocalMatrix.MultiplyVector(
        newHPBarOffset - enemy.transform.position
    );
```


上記のコードのように**ローカルとワールド座標の変換を意識してコードを書くと煩雑になって**分かりづらくなります。



これを解決するために `Handles` には `Handles.matrix` というstaticな変数が用意されています。ここに値を代入しておくと、 `Handles` の操作に `Handles.matrix` の行列（または逆行列）が乗算されます。



利用例としてはゲームオブジェクトの `Transform.localToWorldMatrix` を代入すると、ハンドルに渡す座標や回転を、そのゲームオブジェクトのローカル座標で扱われるようになるなどです。



ちょっとややこしいのですが、さきほどのオフセットの編集の実装を `Handles.matrix` を用いると、下記コードで置き換えることができます。

```csharp
using (new Handles.DrawingScope(enemy.transform.localToWorldMatrix))
{
    // このusingスコープ中は、Handles.matrixに
    // enemy.transform.localToWorldMatrixが代入されている

    // 座標・回転・スケールは enemy のローカル空間で扱う事ができる
    EditorGUI.BeginChangeCheck();
    var newHpBarOffset = Handles.PositionHandle(
        _hpBarOffset.vector3Value,
        Quaternion.identity
    );
    Handles.Label(_hpBarOffset.vector3Value, "HP Bar Offset");
    if (EditorGUI.EndChangeCheck())
    {
        Undo.RecordObject(target, "Change Hp Bar Offset Position");
        _hpBarOffset.vector3Value = newHpBarOffset;
    }
}
```


usingスコープ中はハンドルの操作がすべて `enemy` のローカル座標で行われるため、**ワールド座標とローカル座標の変換がコード中から消えて**、かなりすっきりとしたかと思います。

## シーンビューにGUIを出す

次に、シーンビュー上にGUIを出して、コンポーネント編集の効率化してみたいと思います。



シーンビュー上にGUIを出す方法もいくつかありますが、 `OnSceneGUI` 中  `Handles.BeginGUI` を呼び出すと、 `Handles.EndGUI` を呼び出す間はIMGUIの表示を行えるようになります。



試しに、下図のような `Enemy._name` をシーンビュー上で直接編集するGUIを作ってみます。

![](./CD0FC504D4750897F4D5192355C3AF76.png)

まずはコード全文を示します。

```csharp
// ワールド座標からGUI座標を取得する
var enemyGUIPosition = HandleUtility.WorldToGUIPoint(
    enemy.transform.position
);

// BeginGUI~EndGUI間ではGUI描画を行うことができる
Handles.BeginGUI();
// 試しにEnemy._nameを編集するGUIをシーンビュー上に配置
_name.stringValue = EditorGUI.TextField(
    new Rect(
        // 3Dの位置から少し下に表示してみる
        enemyGUIPosition + new Vector2(-100, 100),
        new Vector2(200, 20)
    ),
    _name.stringValue
);
Handles.EndGUI();
```


GUIで、3Dオブジェクトの位置を基準になにか出す、ということを行うには、3Dオブジェクトのワールド座標から対応するGUI座標の位置を取得する必要があります。



`HandleUtility.WorldToGUIPoint` を用いると、ゲームオブジェクトの位置から対応するGUI座標上の位置を取得できます。

```csharp
// 対象のenemyのワールド座標からGUI座標上の位置を取得している
var enemyGUIPosition = HandleUtility.WorldToGUIPoint(
    enemy.transform.position
);
```


あとはGUI描画を行います。 テキストフィールドを描画して `Enemy._name` を編集できるようにしてみます。

```csharp
// BeginGUI~EndGUI間ではGUI描画を行うことができる
Handles.BeginGUI();
_name.stringValue = EditorGUI.TextField(
    new Rect(
        // 3Dの位置から少し下に表示してみる
        enemyGUIPosition + new Vector2(-100, 100),
        new Vector2(200, 20)
    ),
    _name.stringValue
);
Handles.EndGUI();
```


上記の実装で、下図のように名前編集のテキストフィールドをシーンビュー上に表示することができました。

![](./12F37EC3646DB75018DAA502D8521842.gif)

## まとめ

シーンビュー上で調整用のGUIや3Dを表示する方法や、Handlesを扱うときの座標の扱いを少し簡単にする `Handles.DrawingScope` の使い方などについて解説しました。



調整用のビューの実装にこだわるのはなかなか大変で時間もかかりますが、上手に作るとコンテンツ制作の効率化に大きく貢献します。



そのための手助けとして、この記事が役に立つと幸いです。

