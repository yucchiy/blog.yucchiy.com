---
type: unity-weekly
title: Unity Weekly 296
description: >-
  2026/11/16週のUnity Weeklyです。カリングの現状と今後の方針、Unity Hub 4.0.0、Unity Pipeline 1.0.0、Unity Multiplayerの最近の機能追加、iPadOS 27向けのUISceneSizeRestrictions対応の提供時期、Unite Tokyo 2026のライブ配信などを紹介しています。
pubDatetime: 2026-11-16T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
draft: false
---

## Unity Officials

### Culling Update - now and next

[Culling Update - now and next - Graphics Product Updates - Unity Discussions](https://discussions.unity.com/t/culling-update-now-and-next/1741459)

Unityのカリングの現状と今後の改善方針を紹介するディスカッションです。
今後は新機能の追加よりも、既存機能の改善を優先するとしています。

Umbraを使ったベイク済みのオクルージョンカリングは、Unity 6.7で非推奨になります。
新規プロジェクトでは設定UIを表示しなくなる一方、利用中のプロジェクトは引き続き動作し、6.7のライフサイクルを通じてUmbraをサポートすると説明しています。
後継となる仕組みは検討中とのことです。

GPU occlusion cullingは開発を継続中の機能と位置づけています。
インスタンシングを多用する高密度なシーンでなければ、可視性の判定コストが削減効果を上回る場合があるため、基本的に無効にすることを推奨しています。

Unity 6.6では、画面上のサイズが小さいメッシュをGPU Resident Drawerの描画対象から除外できるようになりました。
シャドウを投影するオブジェクトも対象で、カスケードごとにしきい値を設定できます。

今後の検討項目として、モバイルGPU向けのオクルージョンカリング、複数カメラやXRのビューでのカリング処理の共有、独自の可視性判定を組み込めるスクリプトからの制御を挙げています。

- What would help us
    - Baked occlusion culling: 利用している場合、対象のコンテンツと代替手段に必要なものを知りたい
    - Custom or third-party visibility systems: 独自実装やアセットストアの製品を使っている場合、その内容と必要になった理由を知りたい
    - Mobile: カリングに求める要件とプロジェクトの特徴を知りたい
    - GPU occlusion culling: 利用している場合、使用感とプロジェクトの種類を知りたい

### [INFO] iPadOS 27 & SDK 27 adaptability changes & iPhone Duo updates

[\[INFO\] iPadOS 27 & SDK 27 adaptability changes & iPhone Duo updates - Mobile - Unity Discussions](https://discussions.unity.com/t/info-ipados-27-sdk-27-adaptability-changes-iphone-duo-updates/1737980/23)

iPadOS 27とSDK 27への対応を案内するスレッドで、`UISceneSizeRestrictions`対応の提供時期を回答した2026年11月13日の投稿です。
横向き固定のゲームを開発する利用者からの質問に、Unityのスタッフが答えています。

`UISceneSizeRestrictions`の実装は進行中で、まず最新のUnityバージョンで提供し、その後まもなく6000.3へバックポートする計画だとしています。
App Storeへの提出にSDK 27が必要になる見込みの2027年4月より前に、確実に提供すると説明しています。

横向き固定のゲームでレターボックスを使う対応がApp Storeの審査を通るかという質問には、判断するのはAppleでありいつでも変わりうるため、100%の確証はないと答えています。
そのうえで、現時点ではレターボックスは許容される方法であり、審査の妨げにならないと強く確信しているとのことです。

同じ日の[別の返信](https://discussions.unity.com/t/info-ipados-27-sdk-27-adaptability-changes-iphone-duo-updates/1737980/22)では、公式対応の前に`UISceneSizeRestrictions`を独自に設定する場合の既知の問題を説明しています。
最小サイズに大きな値を設定すると、画面の向きを変えたときなどにOSがウィンドウをリサイズしても、描画ビューがサイズを再計算しない場合があります。
その結果、Unityの表示の一部が見えなくなり、片側に黒い帯が出るとのことです。
妥当な最小サイズであれば問題にならないはずだとしています。

### In Case You Missed It - Unity Multiplayer

[In Case You Missed It - Unity Multiplayer - Multiplayer & Networking Product Updates - Unity Discussions](https://discussions.unity.com/t/in-case-you-missed-it-unity-multiplayer/1741798)

Unity Multiplayerの最近の機能追加と告知をまとめたディスカッションです。

- Cloud Code - Introducing Stateful Cloud Code, CloudBehaviours & Local Development
    - Stateful Cloud Code、Editor内でのモジュール作成、ローカルのデバッグ用サーバー、Multiplayer Play Modeとの連携を紹介している
    - 詳細は[Cloud Code 3.0のディスカッション](https://discussions.unity.com/t/module-state-and-streamlined-development-with-cloud-code-3-0/1741157)などで案内している
- Added support for local server allocators through Matchmaker
    - Local Server Allocatorを使うと、ホスティングプロバイダーを決める前に、ローカルで起動したサーバーをMatchmakerから割り当てて検証できる
- View & Manage active Sessions on the Dashboard
    - Dashboardの`Lobby > Sessions`で、稼働中のセッションの詳細表示、設定の編集、プレイヤーのキック、セッションのロックと削除ができる
- Improved Package Release Communications
    - Multiplayer Servicesのパッケージのリリースと今後のbreaking changesは、DiscussionsのMultiplayer & Networking Product UpdatesカテゴリとDiscordで告知する

### Unity Pipeline 1.0.0 is out

[Unity Pipeline 1.0.0 is out - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-pipeline-1-0-0-is-out/1741740)

Unity Pipeline（`com.unity.pipeline`）1.0.0の正式リリースをアナウンスするディスカッションです。

1.0.0-pre.1をコードの変更なしで正式版にしたもので、pre.1を使っている場合はほかの変更なしで更新できます。
今後の変更では後方互換性を保ち、適切な非推奨化の仕組みを設けてAPIを安定させるとしています。
次のリリースは不具合の修正に重点を置く予定で、再現手順を添えたフィードバックを募集しています。

### Now Available: Unity Hub 4.0.0

[Now Available: Unity Hub 4.0.0 - Unity Hub - Unity Discussions](https://discussions.unity.com/t/now-available-unity-hub-4-0-0/1741866)

Unity Hub 4.0.0の正式リリースをアナウンスするディスカッションです。
Hubをネイティブアプリとして作り直しており、Unityのテストでは起動が約10倍速くなり、メモリ使用量も減ったとしています。
ダウンロードサイズはUnity Hub 3の約4分の1で、Windowsでは248 MBから58 MBになりました。
更新するとUnity Hub 3を置き換えます。

- The Unity CLI replaces the Hub’s command-line mode.
    - Hubの`--headless`コマンドを使うスクリプトは、Unity CLIへの移行が必要になる
    - Hub自身のコマンドラインモードが必要な場合に向けて、Unity Hub 3の最終版である3.22.6を引き続きダウンロードできる
- Git, the way you already sign in.
    - OSの認証情報マネージャーに保存したGitHubとGitLabのサインイン情報を使い、ターミナルやIDEと共有する
    - SSHのリモートを使うプロジェクトに対応し、OrganizationやプロジェクトごとにGitアカウントを選べる
- Fewer warnings you’ve already seen.
    - `Settings > Notifications`の`Warnings`から、プロジェクトとテンプレートの警告を非表示にできる
- More ways to run it on Linux.
    - AppImage、.deb、.rpmに加えて、Flatpakでも配布する
- Crash reports and usage analytics
    - `Settings > Security & Privacy`の`Send crash reports`で、Hubと同梱のUnity CLIによるクラッシュレポートの送信を無効にできる
    - サインイン中は利用状況分析の設定をUnityアカウントに保存し、HubやCLIを使うすべての端末で共有する

### Unite Tokyo 2026: Watch the Keynote and Roadmap live on November 17

[Unite Tokyo 2026: Watch the Keynote and Roadmap live on November 17 - News & General Discussion - Unity Discussions](https://discussions.unity.com/t/unite-tokyo-2026-watch-the-keynote-and-roadmap-live-on-november-17/1741819)

Unite Tokyo 2026の基調講演とロードマップ講演を、YouTubeのライブ配信で視聴できることを案内するディスカッションです。
配信は2026年11月17日で、日本時間の10:00から基調講演、11:15からロードマップ講演が始まります。

- [Unite Tokyo Keynote](https://youtube.com/live/ZWX5TfR1UAI)
    - Unity 6.7とUnity 7で予定している内容を、チーム間の共同作業、イテレーションの高速化、グラフィックス、処理速度の向上をテーマに紹介する
- [Unite Tokyo Roadmap](https://youtube.com/live/gJV4fZ7dpQw)
    - Unity 7に向けたロードマップとして、MonoからCoreCLRへの移行と、Unity 7でのBuilt-in Render Pipelineの非推奨化を見据えたURPへの移行を解説する

## Articles

### MemoryPackで同じ値をシリアライズしてもバイト列が変わる原因と対処法

[MemoryPackで同じ値をシリアライズしてもバイト列が変わる原因と対処法 - きゅぶろぐ](https://blog.kyubuns.dev/entry/2026/11/14/220959)

MemoryPackで同じ値をシリアライズしても出力のバイト列が変わる原因と、その対処法を紹介しています。
MemoryPackが`int?`などのパディング領域もそのまま書き込むことが原因で、v1.22.0で追加された`SafeNullable<T>`へ置き換える方法を説明しています。
独自のunmanaged構造体の内部にあるパディングは、`SafeNullable<T>`で包んでも除去されない点にも注意を促しています。

### Unity6.6からLayout ElementでUIの最大サイズを指定出来るように【Unity】【uGUI】

[Unity6.6からLayout ElementでUIの最大サイズを指定出来るように【Unity】【uGUI】 - (:3[kanのメモ帳]](https://kan-kikuchi.hatenablog.com/entry/LayoutElement_MaxSize)

Unity 6.6でLayout Elementに追加された、UIの最大サイズを指定する`Max Width`と`Max Height`を紹介しています。
`Max Width`とContent Size Fitterの`Preferred Size`を組み合わせ、文字量に応じて幅を変えつつ、上限に達したら折り返す設定を説明しています。
Content Size Fitterに追加された、現在のサイズをMinとMaxの範囲に収める`Clamped`も取り上げています。
