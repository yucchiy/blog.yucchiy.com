---
date: "2020-02-10T07:00:00+09:00"
draft: false
title: "ModelImporterのdefaultClipAnimationsとclipAnimationsについて"
tags: ["Tips", "Unity", "ModelImporter", "Animation", "C#"]

---

モーションデータをアニメーションfbxで受け取る際、そのデータが大量に存在する場合するにはヒューマンエラーを防ぐ目的で、自動的にUnityのアニメーションのインポート設定を行いたいことがあります。
例えば、読み込んだアニメーションクリップのループ設定をファイル名から自動で指定するなどです。

その場合Unityでは、[`AssetPostprocessor.OnPreprocessAnimation()`](https://docs.unity3d.com/ScriptReference/AssetPostprocessor.OnPreprocessAnimation.html)などのメソッドをフックして、アニメーションをインポートタイミング時に処理を差し込みます。

インポート設定は[`ModelImporter`](https://docs.unity3d.com/ScriptReference/ModelImporter.html)クラスを介して行います。
このプロパティ中に[`clipAnimations`](https://docs.unity3d.com/ScriptReference/ModelImporter-clipAnimations.html)と[`defaultClipAnimations`](https://docs.unity3d.com/ScriptReference/ModelImporter-defaultClipAnimations.html)が存在するのですが、この違いがぱっとドキュメントを読んだだけではわからなかったので、実験的に検証しつつまとめました。

## TL;DR

`defaultClipAnimations`は **fbx** のTakeInfoで、`clipAnimations`は **Unity設定（メタデータ）** のTakeInfo。

## TakeInfoとは

まず前提として、fbxでは１つのアニメーションデータに対して複数の区切り情報をつけて出力することができます(実際には１fbxファイルです)。これをTakeInfoといいます。

例えば、走るモーションがあったとして、データ上は走り開始、走りループ、走り終了が１つのモーションデータで作っている(こちらのケースのほうがアーティストさんがデータを確認しやすいためこういうデータづくりをするケースが有る)が、
ゲームで扱う場合は、走り中のループが行動によって不定なため、３つのモーションに分割したい場合などに、このTakeInfoをもとにモーションを分割することもできます。

TakeInfoはMotionBuilderなどで編集してfbxにTakeInfoを合わせて出力することが可能で、Unityでは設定した情報をfbx上から読み込むことができます。

![Unityのインスペクタ上でのTakeInfo - 画像は https://docs.unity3d.com/Manual/Splittinganimations.html より](./takeinfo-in-animation-tab.png)

UnityではTakeInfoを元に**Take名と同名のアニメーションクリップを出力します**。

## defaultClipAnimationsとclipAnimations

fbxに保存されているTakeInfoは前述した`ModelImporter`の`defaultClipAnimations`に格納されています。
`defaultClipAnimations`はfbxのデータのため更新することができません(UnityはDCCツールなどで出力されたデータを基本は書き換えず、Unity独自の設定はメタデータで行う)。

UnityではさらにTakeInfoを上書きすることができ、このデータはfbxファイルのメタデータ内に書き込まれます。その情報を`clipAnimations`で取得することができます。

当然、`clipAnimations`は下記のようにスクリプトで編集することもできます。

```cs
void OnPreprocessAnimation(ModelImporter importer)
{
    var importer = assetImporter as ModelImporter;

    var clips = importer.defaultClipAnimations;
    foreach (var clip in clips)
    {
        // defaultClipAnimationsに対して設定を上書きを行う
        // 例えば Root Transform Position(Y)の設定を自動で行う
        // reference by https://gist.github.com/keijiro/fde84ff347a6747bcf6b
        clip.lockRootHeightY = true;
        clip.keepOriginalPositionY = false;
        clip.heightFromFeet = true;
        clip.heightOffset = -0.1f;
    }
    
    importer.clipAnimations = clips;
}
```

ちなみに`clipAnimations`は自動で作成されるわけではなく、設定を変更したタイミングでデータが取得できます。デフォルトでは空配列となっています。
なので、すでに上書き設定が行われている場合に、上書き設定に対して処理を行いたい場合は、下記のように`clipAnimations`が空でないかの判定を行います。

```cs
void OnPreprocessAnimation(ModelImporter importer)
{
    var importer = assetImporter as ModelImporter;

    var clips = importer.clipAnimations;
    // 上書き設定が行われていなければ、fbxの設定を持ってくる
    // 空でなければ上書き設定を更新する
    if (clips.Length == 0) clips = importer.defaultClipAnimations;

    // ここからは一緒
    //...
}
```

１つ注意点なのが、fbxのデータが更新されるケースです。
例えばfbx側でモーションの尺を調整した場合、その設定自体`defaultClipAnimations`の[ModelImporterClipAnimation](https://docs.unity3d.com/ScriptReference/ModelImporterClipAnimation.html)の`firstFrame`および`lastFrame`で取得できるのですが、
上記のスクリプトでは一度上書き設定をしてしまうと、**以後`defaultClipAnimations`を参照していないため、fbx側の尺の変更を反映させることができません**。

モーションの尺変更を反映させたい場合は、`defaultClipAnimations`も参照しつつ、というスクリプトが必要です。

```cs
void OnPreprocessAnimation(ModelImporter importer)
{
    var importer = assetImporter as ModelImporter;

    var clips = importer.clipAnimations;
    // 上書き設定が行われていなければ、fbxの設定を持ってくる
    if (clips.Length == 0) clips = importer.defaultClipAnimations;

    for (var i = 0; i < clips.Length; ++i)
    {
        if (i >= defaultClipAnimations.Length)
        {
            continue;
        }

        // モーション尺の情報はfbxデータを正としておく
        clips[i].firstFrame = importer.defaultClipAnimations[i].firstFrame;
        clips[i].lastFrame = importer.defaultClipAnimations[i].lastFrame;

        // ...
    }
}
```

ただし、TakeInfoはその分割数さえもUnity側で上書きできるので、その場合はモーション尺の更新も必要ないでしょう(分割設定をUnityでやるということは分割をUnity側に委ねているはずなのでfbx側のTakeInfoを持ってくる必要はない)。

つまり用途ごとにこの辺の実装は異なるかと思います。

## まとめ

`defaultClipAnimations`と`clipAnimations`の違いについて説明しました。アニメーションのインポータはこの違いとデータの更新タイミングを理解し実装することが必要かと思います。

_ちなみに著者は最後に紹介したミスをやらかしました..._

