---
type: unity-weekly
title: Unity Weekly 280
description: >-
  2026/07/13週のUnity Weeklyです。Unity Hub 3.19.4/3.19.5、CEDEC 2026でのUnity関連セッション、Unity 6.7のCoreCLR Playerの性能検証、Reactのモデルを参考にした宣言的UIフレームワークvelvet、Unity 6時代のR3運用ルールなどを紹介しています。
pubDatetime: 2026-07-13T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### Now Available: Unity Hub 3.19.5

[Now Available: Unity Hub 3.19.5 - Unity Engine - Unity Discussions](https://discussions.unity.com/t/now-available-unity-hub-3-19-5/1724580)

Unity Hub 3.19.5のリリースを告知するディスカッションです。3.19.4分の変更点も合わせて記載されています。

- 3.19.4（July 7, 2026）
    - Bug fixes and improvements
        - Projects
            - Custom project templatesに削除済みのパッケージが含まれてしまう問題を修正
            - GitHub / GitLabのソースコントロール使用時の`.gitignore`ファイルを更新
        - Installs
            - WindowsでEditorをアンインストールした際にファイル・フォルダが残る問題を修正
        - General
            - Microsoft Visual C++ Redistributable未導入環境で起動に失敗する問題を修正
            - プロキシ環境でサインインとEditorダウンロードに失敗する問題を修正
            - 切断後もGitHub / GitLabのトークン接続状態表示が残る問題を修正
- 3.19.5（July 10, 2026）
    - Bug fixes and improvements
        - General
            - プロキシ環境でEditor情報・サインイン情報・アップデート情報の読み込みに失敗する問題を修正
            - Windowsパッケージ署名を改善し、バンドルされたネイティブ依存関係に対応

## Events

### Unity「CEDEC 2026」で Unity AI 活用事例、グラフィックス最新機能、CoreCLR 移行など3セッションを実施

[Unity「CEDEC 2026」で Unity AI 活用事例、グラフィックス最新機能、CoreCLR 移行など3セッションを実施 - ユニティ・テクノロジーズ・ジャパン株式会社](https://unity3d.jp/news/unity-cedec-2026/)

2026年7月22日（水）〜24日（金）にパシフィコ横浜ノースで開催されるCEDEC 2026にて、Unityが実施する3セッションと展示ブース（E23, E24）を案内するプレスリリースです。

- Unity 3D&2Dグラフィックス最新情報（7月23日 10:50-11:50）
    - 3Dのグラフィックス機能・レンダリング改善と、Unity 6.5での2D機能強化をまとめて紹介
- Unity AIを活用したゲーム開発の実際（7月23日 13:20-14:20）
    - 「AIエージェント活用の第一歩を踏み出したい開発者に最適」な内容
- CoreCLR移行事例セッション（7月23日 14:40-15:40）
    - 「C#や.NETの基礎知識を持つ中〜上級者の開発者に向けた」内容で、スマイルゲートのMMORPG「ロードナイン」での先行適用事例を紹介

## Articles

### Unity ECSでEventを使いたかった話

[Unity ECSでEventを使いたかった話 - Qiita](https://qiita.com/seikasan/items/2602b4e0fe8b7b1692ce)

Unity ECS（Entities 1.4.7以上、Unity 6000.0以上）でSystem間のメッセージングを行うため、[annulusgames/EntitiesEvents](https://github.com/annulusgames/EntitiesEvents) をフォークして改良した経緯を紹介しています。

Source Generatorまわりの整理、cleanup systemのunmanaged ISystem化、イベントの寿命管理、Readerのキャッシュや読み取り時のスナップショット、並列書き込み対応など、`EventWriter<T>` / `EventReader<T>` / `EventParallelWriter<T>`まわりの実装上の工夫を扱っています。

### Unity 6.7 の CoreCLR Player が爆速しすぎて笑ってしまった件

[Unity 6.7 の CoreCLR Player が爆速しすぎて笑ってしまった件 - Qiita](https://qiita.com/hez2010/items/4c608360c73fc6293bf1)

Unity 6.7 Alpha 2で実験的に導入されたCoreCLR（.NET 10）プレイヤーの性能を、CPUパストレーサーを用いてMono 6.13.0・IL2CPPと比較したベンチマーク結果を紹介しています。

マルチスレッド実行時間ではCoreCLRがMono比で約9.4倍、IL2CPP比で約1.78倍高速だったとしており、シングルスレッド、シーン生成、BVH構築、メモリ使用量についても比較しています。

### なぜUnityのUIは書きづらいのか — Reactに学んで宣言的UIフレームワークを作った話

[なぜUnityのUIは書きづらいのか — Reactに学んで宣言的UIフレームワークを作った話 - Zenn](https://zenn.dev/s4k1/articles/6c29073680ff21)

uGUI / UI Toolkitでの命令的なUI構築や、Rx前提の状態管理の書きづらさを指摘した上で、Reactのモデルを参考にした「UIは状態を受け取って構造を返す関数である」という考え方をUI Toolkit上に実装した独自フレームワーク「velvet」を紹介しています。

### Unity 6時代のR3運用ルール：SubscribeAwait・EveryUpdate・禁止パターンを整理する

[Unity 6時代のR3運用ルール：SubscribeAwait・EveryUpdate・禁止パターンを整理する - Zenn](https://zenn.dev/gamedev_toollab/articles/88cbe9d9110202)

約10人規模のチーム開発を前提に、R3（1.2.0以降）を導入した後の運用ルールを整理しています。
`SubscribeAwait(Drop)`は処理中の多重実行防止であり同時押しや一回限り制御とは分けること、`EveryUpdate`など時間系処理は目的と寿命を明示すること、R3は通知と配線に寄せてドメインロジックや重要な排他制御は普通のC#として読める場所に置くことを持ち帰るべきルールとして挙げ、publicなReactivePropertyやSubjectの禁止など具体的な禁止パターンもまとめています。

### UnityでハンドルコントローラをCGの座標系に一致させる方法

[UnityでハンドルコントローラをCGの座標系に一致させる方法 - Zenn](https://zenn.dev/izm/articles/b98535429ea1c9)

XRコンテンツで、Vive Trackerなどの物理的なハンドルコントローラの位置とCG上のハンドルの位置を一致させるキャリブレーション手法を提案しています。

ユーザーがハンドルを約90度回したときの手の軌跡から3D円をMSAC（RANSACの改良版）で推定し、既知のCGハンドル姿勢と組み合わせてモデルビュー行列を算出する方法を扱っています。

### Unity向けの軽量FPSカウンターを作りました

[Unity向けの軽量FPSカウンターを作りました](https://blog.kyubuns.dev/entry/2026/07/11/211623)

Unity向けの軽量FPSカウンター「LightweightFpsCounter」を実装したことを紹介しています。
`FrameTimingManager`による計測を採用し、実行時のGCアロケーションをゼロにすることを目標に、桁数固定による頂点更新の削減、ラベルと数値の別メッシュ化、UV更新のみで済ませる通常更新、フレーム終端での描画といった最適化を扱っています。

あわせて、Claude Fable 5を使った開発の進め方にも触れています。

### Unity AndroidでのローカルLLM API実行とFunction Calling風レスポンス処理

- [Unity Androidアプリ内でローカルLLM APIを実行する方法 - Qiita](https://qiita.com/kazuki_kuriyama/items/a892c9f40193b107ab80)
- [Unity AndroidのローカルLLMでFunction Calling風の構造化レスポンスを扱う方法 - Qiita](https://qiita.com/kazuki_kuriyama/items/65fc8dbc4d799e0a03fc)

Unity Androidアプリでllama.cppベースのローカルLLM（GGUFモデル）を動かす2本立ての記事です。

前者は、HTTPサーバー方式ではなくNative Plugin（AAR）経由でllama.cppを直接呼び出す構成を提案し、モデルの初回ダウンロード、SHA256による破損チェック、manifest.jsonでのモデル管理、メモリ・発熱対策までを解説しています。

後者では、ローカルLLMの出力を「呼び出すべき関数と引数の提案」として扱い、Unity側で検証・実行する設計を扱っており、OpenAI互換のtools / tool_calls構造を使ってツール呼び出しをパースし、実行前に検証する流れを紹介しています。

### Unityのセーブデータ書き込みで気を付けたい小ネタ：壊れにくく、復旧しやすくするために

[Unityのセーブデータ書き込みで気を付けたい小ネタ：壊れにくく、復旧しやすくするために - Zenn](https://zenn.dev/gamedev_toollab/articles/08f9e3418bb125)

Unityでローカルセーブやオプション設定を保存する際、保存失敗の確率を下げ、失敗時に復旧しやすくするための実践的なノウハウを整理しています。

PlayerPrefsは小さな用途に留めて基本はpersistentDataPathへ保存すること、直書きせず一時ファイルへ書いてから置き換えること、起動時に`.tmp` / `.bak`を見て復旧すること、`version`フィールドを最初から持たせることなどを扱っています。

### UI Toolkitで自作するUnityランタイムデバッグツールの設計と実装

[UI Toolkitで自作するUnityランタイムデバッグツールの設計と実装 - Sumzap Engineering Blog](https://tech.sumzap.co.jp/entry/unity-debugger-design-and-implementation)

自社のUnity向けアプリケーション基盤「Spica」に含まれるランタイムデバッグツール「Spica.Debugger」について、自作した理由とUI Toolkit採用の理由、設計を紹介しています。

ScriptableObjectベースの設定アーキテクチャ、Trigger / Report Senderという2つの拡張ポイント、ページベースのUI構成、Editor Windowでも動かせる作りに触れており、Console、Profiler、System Info、Report、Optionsの機能を備えるとしています。

## Repositories

### Shader-Core

[lilxyzw/Shader-Core](https://github.com/lilxyzw/Shader-Core)

シェーダー本体はプラットフォームやレンダーパイプラインに依存する一方、各モジュールは基本的な処理であれば非依存に記述できるモジュール型シェーダーシステム。マテリアルエディタの多言語対応(.po形式)、モジュール固有IDによる変数名重複回避、テキストベースでプラットフォーム非依存なマテリアル設定のコピー&ペーストといった機能を持つ。

### NonToon

[lilxyzw/NonToon: A shader combining PBR and NPR](https://github.com/lilxyzw/NonToon)

PBRとNPRの手法を組み合わせたシェーダー。上記の[lilxyzw/Shader-Core](https://github.com/lilxyzw/Shader-Core)を採用したモジュール型構成で、不透明・カットアウト・ディザ・半透明・ファーレンダリングなど多数のレンダリングモードや、共有マスクテクスチャ、頂点カラー制御のアウトライン、SDF / マットキャップ / ヘアスペキュラーといった機能を備える。
