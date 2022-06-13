---
date: "2020-09-28T09:00:00+09:00"
draft: false
title: "Unity2019.1から導入されたEditorToolの紹介"
tags: ["Unity", "Editor Tools", "エディタ拡張"]

---

UTJが主催する[「ゆるふわLT大会」という勉強会の第1回目](https://www.youtube.com/watch?v=2lFZRROZ5cw)が、2020年の7月17日に開催されていました。
この勉強会で、Editor Toolsと呼ばれるAPIについての紹介がありました。

こちらのAPIは2019.1から正式に利用可能になっていたようですが、リリースノートにその記載はなく、また、情報自体も少ないです。

簡単に触ってみたので、備忘録としてブログに綴りたいと思います。

## Editor Toolsとは

まず、そもそもEditor Toolsとはなんなのかについておさえていきましょう。先述の勉強会の1スライドから引用すると、「SceneView上でGameObjectやComponentを操作しやすくする機能を実装するためのAPI」とのことです。

![Editor Toolsについて](./whats-editor-tools.png)

これだけではイメージが付きづらいので、実際にEditor Toolsが利用されている箇所を示すスライドを下図に引用します。

![Editor Toolsのエディタでの利用箇所](./editor-tools-in-unityeditor.png)

どうやら普段から頻繁に利用している、GameObjectを移動させるツール（MoveTool）などもこのAPIを利用して実装されていそうです。
勉強会中では「いままでもこのAPIを利用しなくてもこのような機能は実装できた」といわれていましたが（自分は作ったことがないのでわからないですが）、規格を整備するためにAPI化してリリースし直したというような文脈のようです。

## Editor Toolsに触れてみる

Editor Toolsが何者かなんとなく理解できたところで、このAPIになれるため、標準機能である「MoveTool」を自作してみたいと思います。

早速ですが、実装した「MyMoveTool」のコードの全容を示します。

```cs
using UnityEditor;
using UnityEditor.EditorTools;

/// <summary>
/// Move Toolをスクラッチ実装してみる
/// </summary>
[EditorTool("Examples/My Move Tool")]
public class MyMoveTool : EditorTool
{
    public override void OnToolGUI(EditorWindow window)
    {
        // これ以降に定義されるGUIの変更を監視する
        EditorGUI.BeginChangeCheck();

        // ハンドルの現在のワールド座標を取得する
        var position = Handles.PositionHandle(Tools.handlePosition, Tools.handleRotation);

        // 監視してたGUIが変更されていればこのif内に入る
        if (EditorGUI.EndChangeCheck())
        {
            // この移動をUndoしたときに戻せるように履歴を保存しておく
            Undo.RecordObjects(Selection.transforms, "MyMoveTool");

            // 直前のハンドル位置からどれだけ移動したかを計算する
            var deltaPosition = position - Tools.handlePosition;
            // そしてその差分を現在ヒエラルキーで選択しているすべてのオブジェクトに対して適用する
            foreach (var selectionTransform in Selection.transforms)
            {
                selectionTransform.position += deltaPosition;
            }
        }
    }
}
```

エディター上での動作は、下図のとおりです。まずはじめに「MyMoveTool」によってCube_0 ~ 3のPositionをまとめて操作して、その後に同じ動作を標準で用意されている「MoveTool」で行っています。標準のツールと同様の挙動が実現できていることが確認できるかと思います。

![エディター上でのMyMoveToolの動作](./mymovetool-vs-movetool.gif)

こちらの実装について、順を追って説明します。

### EditorToolの定義

独自のEditor Toolsを実装するには、実装するクラスが[EditorTool](https://docs.unity3d.com/ScriptReference/EditorTools.EditorTool.html)を継承する必要があります。
また、エディターにそのクラスを登録するために、[EditorToolAttribute](https://docs.unity3d.com/ScriptReference/EditorTools.EditorToolAttribute.html)を設定します。

```cs
[EditorTool("Examples/My Move Tool")]
public class MyMoveTool : EditorTool
{
}
```

`EditorToolAttribute`の第1引数には`displayName`を設定します。これはエディター中の下図の箇所での表示に利用される文字列です。
`/`（スラッシュ）で区切ると（`MenuItem`などと同様で）階層的に表示できます。プロジェクトによって独自のEditor Toolsの数が増える場合はルールを決めておくと管理がしやすくなるでしょう。

![MyMoveToolがエディターに認識される様子](./recognizing-mymovetools-in-unityeditor.png)

第2引数に`targetType`を指定します。このEditorToolが編集できるクラスの型を指定できます。この引数は省略することが可能で、その場合はすべての型を編集対象として扱うことを意味します。

この引数を指定すると、後述する`OnToolGUI`内で`target`および`targets`プロパティに入るオブジェクトは、その型のインスタンスが設定されます。指定しない場合は`GameObject`が渡されます。

### OnToolGUIによる定期処理

ボタンを押すなどしてツールがアクティブになると、`OnToolGUI(EditorWindow window)`が毎フレーム呼び続けられます。つまりツールの実装は、このメソッド内に記述していくことになります。

標準の「Move Tool」では、下図のように、[Handles.PositionHandle](https://docs.unity3d.com/ScriptReference/Handles.PositionHandle.html)を用いてオブジェクトの位置をユーザーに操作させて、ヒエラルキー上で選択中のすべてのオブジェクトに対してその位置更新を適用させます。

![標準のMove Toolの操作の様子](./movetool-description.png)

ハンドルの位置および回転は「ピボットモード」が「Pivot」か「Center」か、「ピボットローテーション」が「Local」か「World」によって異なります。
具体的には、オブジェクトが複数選ばれた場合、「ピボットモード」が「Pivot」の場合は、はじめに選択したオブジェクトの位置にハンドルが設置されます。一方「Center」の場合は複数オブジェクトの位置の重心にハンドルが設定されます。
また、「ピボットローテーション」が「Local」の場合はローカル座標の回転がハンドルに設定され、「Global」の場合はワールド座標の回転がハンドルに設定されます。

それぞれのモードを考慮したハンドルの位置および回転は、[UnityEditor.Tools](https://docs.unity3d.com/ScriptReference/Tools.html)に実装されている、[handlePosition](https://docs.unity3d.com/ScriptReference/Tools-handlePosition.html)と[handleRotation](https://docs.unity3d.com/ScriptReference/Tools-handleRotation.html)から取得できます。

`MyMoveTool`では下記のように、`PositionHandle`の引数である位置と回転をそれぞれ`Tools.handlePosition`および`Tools.handleRotation`を指定しています。

Editor Toolsは直接関係ないのですが、`MyMoveTool`では`EditorGUI.BeginChangeCheck()`と`EditorGUI.EndChangeCheck()`を利用してGUIでの値変更を監視して、実際に値が変化した場合のみ、位置の更新処理を行っています。

```cs
// これ以降に定義されるGUIの変更を監視する
EditorGUI.BeginChangeCheck();

// -- ここから変更監視 ---

// PositionHandleを描画して、ユーザがハンドルを移動させた位置を取得する
var position = Handles.PositionHandle(Tools.handlePosition, Tools.handleRotation);

// --- ここまで変更監視 ---
// 監視してたGUIが変更されていればこのif内に入る
if (EditorGUI.EndChangeCheck())
{
    // ここで更新処理
}
```

あとは、ヒエラルキー上で選択されているすべてのオブジェクトに対してハンドルの移動を適用します。
ヒエラルキーで選択されている`Transform`の一覧は[Selection.transforms](https://docs.unity3d.com/ScriptReference/Selection-transforms.html)で取得できるので、すべてのオブジェクトに対して`（ユーザーによって移動されたハンドル位置 - その前のハンドル位置）`を足し合わせることで移動を適用します。Undoにも対応できるように、`Undo.RecordObjects`を呼び出して直前の位置を記録しておきます。

ちなみに`Selection.transforms`の代わりに[EditorTool.targets](https://docs.unity3d.com/ScriptReference/EditorTools.EditorTool-targets.html)で代用することも可能です。 `EditorTool.targets`には、ヒエラルキー上で指定したオブジェクトの、`GameObject`の一覧が格納されています。なので、`GameObject`にキャストした後、`transform`プロパティを経由して`position`を更新することで同様のことができますが、わざわざそれらの処理をするのも手間なので（あと、EditorToolのドキュメントのサンプルコードがこのような実装にしてたため）、今回は`Selection.transforms`を用いました。

```cs
// この移動をUndoしたときに戻せるように履歴を保存しておく
Undo.RecordObjects(Selection.transforms, "MyMoveTool");

// 直前のハンドル位置からどれだけ移動したかを計算する
var deltaPosition = position - Tools.handlePosition;
// そしてその差分を現在ヒエラルキーで選択しているすべてのオブジェクトに対して適用する
foreach (var selectionTransform in Selection.transforms)
{
    selectionTransform.position += deltaPosition;
}
```

以上で、標準の「Move Tool」スクラッチで実装することができました。コード量はかなり少なく実装できました。

## Editor Tools（シーンビュー）中でGUIを使う

勉強会では、下図のようにEditor ToolsとGUIを組み合わせて、コンポーネントのプロパティをシーンビュー上で編集する機能が紹介されていました。

![Editor Tools内でGUIを呼び出してコンポーネントのプロパティをシーン上で編集させる様子](./editortools-with-gui.png)

こちらはEditor Toolsがこのような機能を持っているわけではないので、直接関係ないのですが、かなり便利な使い方だと感じたので、（これが正攻法なのかはわかりませんが）紹介したいと思います。

今回は、以下の`Player`クラスのプロパティを、シーンビュー上で編集するEditor Toolsを実装してみます。

```cs
using UnityEngine;

public class Player : MonoBehaviour
{
    [SerializeField] private string _name;
    [SerializeField] private int _power;
    [SerializeField] private PlayerType _playerType;

    public enum PlayerType
    {
        Attacker,
        Defender,
    }
}
```

具体的には、下記のようなプロパティ編集用のGUIを表示し、シーンビュー上で`Player`ビヘイビアーのプロパティを編集するツールを作成します。

![今回作成するPlayerプロパティ編集ツール](./playerleveleditotool.png)

このツールのエディター上での動作は下図のとおりです。

![Playerのプロパティをシーン上で編集する様子](./playerleveledittool.gif)

このツールは「PlayerLevelEditTool」と名付けます。このクラスの実装は下記のとおりです。

```cs
using System;
using UnityEditor;
using UnityEditor.EditorTools;
using UnityEngine;

[EditorTool("Example/Player/Level Edit", typeof(Player))]
public class PlayerLevelEditTool : EditorTool
{
    public override void OnToolGUI(EditorWindow window)
    {
        foreach (var obj in targets)
        {
            var player = obj as Player;
            var guiPoint = HandleUtility.WorldToGUIPoint(player.transform.position);

            var serializedObject = new SerializedObject(obj);

            Handles.BeginGUI();

            var nameProperty = serializedObject.FindProperty("_name");
            EditorGUI.PropertyField(new Rect(guiPoint + new Vector2(0, 20), new Vector2(200, 20)), nameProperty);

            var powerProperty = serializedObject.FindProperty("_power");
            EditorGUI.PropertyField(new Rect(guiPoint + new Vector2(0, 40), new Vector2(200, 20)), powerProperty);

            var playerTypeProperty = serializedObject.FindProperty("_playerType");
            EditorGUI.PropertyField(new Rect(guiPoint + new Vector2(0, 60), new Vector2(200, 20)), playerTypeProperty);

            serializedObject.ApplyModifiedProperties();

            Handles.EndGUI();
        }
    }
}
```

順を追って説明します。

### EditorToolAttributeで型を指定する

前述しましたが、`EditorToolAttribute`の第2引数で編集できる型を指定しています。具体的には下記のように記述します。

```cs
// 第２引数に typeof(Player) を渡すことで、Playerクラスのビヘイビアが
// アタッチされたオブジェクトを選択した場合のみこの拡張は有効になる
[EditorTool("Example/Player/Level Edit", typeof(Player))]
public class PlayerLevelEditTool : EditorTool
{
// ...
```
ここで型を指定することで、下記のように`OnToolGUI`内の`targets`には、`Player`クラスのインスタンスが格納されるようになります。

```cs
public override void OnToolGUI(EditorWindow window)
{
    // targetsにはヒエラルキーで選択している全Playerクラスのインスタンス
    // がObjectとしてダウンキャストされて格納されている
    foreach (var obj in targets)
    {
        // Objectなので、対象の型（この場合はPlayer）にアップキャストして利用する
        var player = obj as Player;

        // playerクラスのインスタンスが取れたので、あとはプロパティ編集GUIを描画する
    }
```

### シーンビュー上でGUIを描画する方法

今回のツールのおもしろい点として、プロパティ編集のGUIを、その**オブジェクトの位置に合わせて**描画しています。
つまり、**オブジェクトのワールド座標をシーンビューのスクリーン座標に変換**して、**シーンビュー上にGUIを描画**する必要があります。

まず、ワールド座標からシーンビューのスクリーン座標の変換を行うには、[HandleUtility.WorldToGUIPoint](https://docs.unity3d.com/ScriptReference/HandleUtility.WorldToGUIPoint.html)を利用します。

```cs
var guiPoint = HandleUtility.WorldToGUIPoint(player.transform.position);
```

次にシーンビュー上にGUIを描画します。`OnToolGUI`でGUIを描画するには、[Handles.BeginGUI()](https://docs.unity3d.com/ScriptReference/Handles.BeginGUI.html)を呼び出して、GUIを描画することを宣言する必要があります。
GUIの描画を終了する場合は、[Handles.EndGUI()](https://docs.unity3d.com/ScriptReference/Handles.EndGUI.html)を呼び出します。これを呼び出さないと`Handles.PositionHandle`などの3Dハンドルの描画が行えなくなります。

```cs
Handles.BeginGUI();
// --- ここからGUI描画ができる ---

// ただし3Dハンドルの描画は行えない

// --- ここまでGUI描画ができる ---
Handles.EndGUI();
// --- ここから3Dハンドルの描画がおこなえる
```

あとは、プロパティ編集GUIを描画します。今回は`SerializedObject`および`EditorGUI.PropertyField`用いて実装します。GUIの位置は、さきほど計算した`guiPoint`を利用しています。

```cs
var nameProperty = serializedObject.FindProperty("_name");
EditorGUI.PropertyField(new Rect(guiPoint + new Vector2(0, 20), new Vector2(200, 20)), nameProperty);

var powerProperty = serializedObject.FindProperty("_power");
EditorGUI.PropertyField(new Rect(guiPoint + new Vector2(0, 40), new Vector2(200, 20)), powerProperty);

var playerTypeProperty = serializedObject.FindProperty("_playerType");
EditorGUI.PropertyField(new Rect(guiPoint + new Vector2(0, 60), new Vector2(200, 20)), playerTypeProperty);

// プロパティの変更を適用する
serializedObject.ApplyModifiedProperties();
```

実装は以上です。プロパティ編集のために`SerializedObject`を利用するのはよく知られていると思いますが、ワールド座標からシーンビューのスクリーン座標の変換や、GUIと3Dハンドルの描画の共存は意外にあまり知られてないのではと思います。

## まとめ

2019.1から導入されたEditor Toolsについて、ツールの基本的な実装方法や、応用例としてシーンビュー上にGUIを描画してプロパティを編集するツールの実装方法を紹介しました。
アイデア次第では、ゲーム開発を便利にするさまざまなツールを作ることができそうで、とてもおもしろいAPIだと感じました。