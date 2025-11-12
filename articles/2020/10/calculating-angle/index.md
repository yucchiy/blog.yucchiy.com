---
title: 2ベクトルの成す角度を時計回りで計算する
description: ''
pubDatetime: 2020-10-27T00:00:00.000Z
tags:
  - C#
  - Math
  - Unity
---

2ベクトル間の成す角度を計算したことが多くあります(例: [【Unity】キャラクターから見て対象への角度を「-180～180度」の範囲で求める - テラシュールブログ](http://tsubakit1.hateblo.jp/entry/2018/02/05/235634))。
単純に2ベクトルの成す角度を求めたい場合、(Unityでは)下記のように求めることができます。

```cs
// ベクトルa, bの成す角度を計算する
var angle = Vector3.Angle(a, b);
```

[Vector3.Angle](https://docs.unity3d.com/ScriptReference/Vector3.Angle.html)を用いずに計算すると下記のように求められます。

```cs
// a, bは単位ベクトルとする
// cosTheta = dot(a,  b) / |a||b|
//          = dot(a, b) / 1x1 = dot(a, b)
var cosTheta = Vector3.Dot(a, b);
var angle = Mathf.Acos(cosTheta) * Mathf.Rad2Deg;
```

状況によっては自分から見て右向きなのか、左向きなのかも必要になることがあります。
自分からみて右回り（時計回り）の場合正の角度、左向きの場合は負の角度で角度を計算したい場合は、下記のように求めます。

```cs
// a, bは単位ベクトルとする
var cosTheta = Vector3.Dot(a, b);
var cross = Vector3.Cross(a, b - a);
// upは世界の上向きを表す単位ベクトルとする
var isClockwise = Vector3.Dot(cross, up) > 0f;
var angle = isClockwise ? 
    Mathf.Acos(cosTheta) * Mathf.Rad2Deg :
    - Mathf.Acos(cosTheta) * Mathf.Rad2Deg;
```

`cross`は、`a`と`b`が貼る平面の上方向のベクトルを表すことになります。
この方向と世界の上方向(`up`)のが同じ方向を向いているかを調べることで、`b`が`a`に対して右回り（時計回り）に回転しているかどうかがわかります(`isClockwise`変数に結果を格納している)。
調べるには内積の値が正(`up`と`cross`の成す角が0 ~ 90度に収まる)かどうかを調べれば十分です。

また、上記を応用して時計回りに何度かを求めることもできます。

```cs
// a, b, upは単位ベクトルとする
var cosTheta = Vector3.Dot(a, b);
var cross = Vector3.Cross(a, b - a);
var angle = (Vector3.Dot(cross, up) > 0f) ? 
    Mathf.Acos(cosTheta) * Mathf.Rad2Deg :
    - (Mathf.PI * 2f - Mathf.Acos(cosTheta)) * Mathf.Rad2Deg;
```
