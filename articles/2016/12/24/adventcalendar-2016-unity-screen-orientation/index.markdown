---
date: "2016-12-24T00:25:57+09:00"
draft: false
title: "Unityにおける画面姿勢の縦横対応について"
tags: ["Unity", "C#"]

---

この記事は[CyberAgent Developers Advent Calendar 2016](http://www.adventar.org/calendars/1620)の19日目の記事となります。

現在は、株式会社アプリボットでUnityエンジニアをしています。
今回は、関わっているプロジェクトで検討した**スマホアプリにおける画面姿勢の縦横対応**について、そのノウハウについて共有したいと思います。

## 画面姿勢の縦横対応の必要性について

今日のスマホゲームでは、Portrait(縦画面)またはLandscape(横画面)に固定して提供するアプリが多いです。

私が関わっているプロジェクトでは、画面姿勢が縦・横に応じてUIを出し分け、幅広くのユーザ体験に応えたいということで、画面姿勢の縦横対応をすることになりました。

## RectTransformを用いた画面姿勢の縦横対応

今回は、**縦と横画面の配置情報をUnityのアニメーションのステートとして保持しておき**、
姿勢変更時には各要素の各姿勢の配置情報を元に、**それぞれの姿勢をリニアに補完し**、要素の移動を実現しました。

### RectTransformのアンカーポイントについて

まず、RectTransformのアンカーについて軽く触れておきます。

アンカーとは親のRectTransformに対して、自身のRectTransformをどの位置に固定するかを表すパラメータです。
このパラメータは、**Anchor Min**と**Anchor Max**がx, yの4つ存在し、0~1で正規化されていて、
それぞれ親の幅・高さに対して、左下端(Anchor Min)と右上端(Anchor Max)をどの位置に固定するかを表します。

下記jの図は、Anchor Minに(0.2, 0.2)を、Anchor Maxに(0.8, 0.8)を指定し、親のRectTransformを変形した様子です。
親(半透明な白の矩形)に対して自身(緑色の矩形)のアンカーポイントを元に引き伸ばされている(ストレッチ)ことがわかるかと思います。


![Minに(0.2, 0.2)、Maxに(0.8, 0.8)を指定](./stretch-inspector.png)

![Minに(0.2, 0.2)、Maxに(0.8, 0.8)を指定](./stretch.gif)


またアンカーポイントの指定にはもう一つ方法があり、MinとMaxに同じ場所を指定することで、幅・高さを固定することができます。
以下はの図は、Anchor Minに(0.0, 0.0)を、Anchor Maxに(1.0, 0.0)を指定(つまりy座標は0で固定)し、高さに100を指定し、親のRectTransformを変形した様子です。
幅や高さを固定したい場合にはこのように指定できます。

![Minに(0.0, 0.0)、Maxに(1.0, 0.0)を指定](./rect-inspector.png)

![Minに(0.0, 0.0)、Maxに(1.0, 0.0)を指定](./rect.gif)

これらを組み合わせてレイアウトを組み立てていきます。

## 画面姿勢の変更

画面姿勢が変化したときには、今の姿勢から変更後の姿勢の配置情報に置き換えます。
縦横の配置情報をもとに、縦なら横の配置情報に、横から縦ならその逆に、アンカーポイントを変換します。

この時の間のアンカーポイントはリニアに補完し、いい感じ動くようにアニメーションを実現しました。

### Unityにおける姿勢変更の検知

Unityでは、[UnityEngine.Input.deviceOrientation](https://docs.unity3d.com/ScriptReference/Input-deviceOrientation.html)により現在の端末の姿勢が取得できます。

また、[UnityEngine.Screen](https://docs.unity3d.com/ScriptReference/Screen.html)の`autorotateTo`の`orientation`プロパティを`AutoRotation`に変更した上で、
`autorotateTo`の真偽値を変更することにより、それぞれの姿勢を許可するかどうかを指定します。

```
Screen.autorotateToLandscapeLeft = true;
Screen.autorotateToLandscapeRight = true;
Screen.autorotateToPortrait = true;
Screen.autorotateToPortraitUpsideDown = true;
Screen.orientation = ScreenOrientation.AutoRotation;
```

上記のコードを記述することで、任意の姿勢の変更を許可します。

### エディタ上での姿勢変更のデバッグ

Unityエディタ上で姿勢変更のデバッグを行うためには、[Unity Remote](https://itunes.apple.com/us/app/unity-remote-5/id871767552?mt=8)を用いると便利かと思います。
Untiy Remoteは姿勢変更の入力を受け付けるため、Project Settings > PlayerのDefault OrientationsをAutoRotationに設定しておくと、
その姿勢が`UnityEngine.Input.deviceOrientation`により受け取れ、デバッグが容易になります。

#### エディタ上の画面サイズの変更

Unity Remoteにより姿勢の変更は受け取れますが、エディタ上の解像度の変更は出来ません。
エディタ上では、Sceneビューの左上から手動で解像度の変更を行うことが出来ますが、APIは公開していません。

ですが、リフレクションを用いて無理やりエディタのAPIを呼び出し、解像度を選択することができます。

`UnityEditor.GameView.selectedSizeIndex`プロパティに、画面サイズ一覧のインデックスを指定することで、エディタ上のゲームビューのサイズを変更できます。
インデックスに対応するオブジェクトは`UnityEditor.GameView.GetGameViewSize`で取得することができます。
実相の詳細は、[このページ](http://answers.unity3d.com/questions/956123/add-and-select-game-view-resolution.html)が参考になります。


