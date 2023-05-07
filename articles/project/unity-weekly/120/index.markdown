---
type: "unity-weekly"
title: "Unity Weekly 120"
description: "2023/05/08週のUnity Weeklyです。"
tags: ["Unity Weekly","Unity"]
date: "2023-05-08T00:00:01"

---

## Unity Officials

### Building the ‘Ōhi’a lehua tree with SpeedTree, part 1

[Building the ‘Ōhi’a lehua tree with SpeedTree, part 1 | Unity Blog](https://blog.unity.com/games/building-the-ohia-lehua-tree-with-speedtree-part-1)

UnityがGDC 2023で発表したセッションからSpeedTreeに関するチュートリアルセッションを紹介しています。

このセッションでは、ハワイの「'Ohi'a lehua Tree」をSpeedTreeを用いて作る方法からゲームのための最適化やそのための新機能について紹介しています。

[Building the 'Ohi'a lehua Tree in SpeedTree Games | Unity at GDC 2023 - YouTube](https://www.youtube.com/watch?v=vYj4e7TYx4I)

### 6 community videos to get you started with multiplayer in Unity

[6 community videos to get you started with multiplayer in Unity | Unity Blog](https://blog.unity.com/games/6-community-videos-to-get-you-started-with-multiplayer)

Netcode for GameObjectsやUnity Gaming Servicesを用いたマルチプレイヤーゲームの開発のために役立つコミュニティー動画を6本紹介しています。

### Native GPU Profiling Webinar on May 24

[Official - Accelerate Success - Native GPU Profiling Webinar - Unity Forum](https://forum.unity.com/threads/accelerate-success-native-gpu-profiling-webinar.1433008/)

UnityのSenior software development consultantによる、iOS/Android/PCにおけるGPUプロファイリングに関するウェビナーが5/24に開催予定です。下記のフォームから参加登録できます。

[Native GPU Profiling Webinar | Unity](https://create.unity.com/accelerate-success-native-gpu-profiling-webinar)

### Update about the future of Unity Answers

[Official - Update about the future of Unity Answers - Unity Forum](https://forum.unity.com/threads/update-about-the-future-of-unity-answers.1432777/)

[Unity Answer閉鎖のアナウンス発表](https://forum.unity.com/threads/unity-answers-shutdown-canceled.1293360/)後の、Unity Answerの今後の計画についてアナウンスしています。

Unity AnswerはコミュニティープラットフォームをDiscourseに移行し、Unity Discussionsという名前の新しいプラットフォームとしてリリースする予定のようです。Unity Discussionsは5月後半にパブリックベータの開始を目指しているとのことです。

このフォーラムでは、移行の理由や長期的なビジョン、Unity AnswerからUnity Discussionsの移行に際して実施されるステップについて説明しています。

## Articles

### Actionの指定を便利にするInputActionPropertyの使い方

[【Unity】Actionの指定を便利にするInputActionPropertyの使い方 | ねこじゃらシティ](https://nekojara.city/unity-input-system-action-property)

Input Actionの設定値やアセットの参照をフィールドで保持できるInputActionPropertyの使い方や内部実装などについて解説しています。

### Addlistenerした後GameObjectを破棄するとRemoveListenerしてくれるUnityEvent拡張メソッド

[【Unity】Addlistenerした後GameObjectを破棄するとRemoveListenerしてくれるUnityEvent拡張メソッド - 武0武/blog](https://bravememo.hatenablog.com/entry/2023/05/03/100000)

UnityEventの購読解除を、IDisposableを用いて行う実装と、UniRxのAddToを用いてGameObjectの破棄でイベントの購読解除を行う方法について紹介しています。

### Time.deltaTimeによる移動の原理

[【Unity】Time.deltaTimeによる移動の原理 | ねこじゃらシティ](https://nekojara.city/unity-deltatime-movement)

`Time.deltaTime`と速度を元に位置を足し込むことでフレームレートに依存しない移動処理の実現方法について解説しています。

また、経過時間をパラメーターとした現在位置を算出する計算式を用いることで、フレームレートのばらつきがあったとしても移動値に誤差の出ない移動処理の実現方法についても言及しています。