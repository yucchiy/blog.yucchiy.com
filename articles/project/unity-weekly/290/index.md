---
type: unity-weekly
title: Unity Weekly 290
description: >-
  2026/10/05週のUnity Weeklyです。Unity 7でのレンダーパイプラインのURPへの一本化、DirectX Shader Compiler、iPadOS 27とiPhone Duo、Unity CLI 1.0.0-beta.12、Unity Pipeline 0.8.0-exp.1、Unity Hub 3.22.0、Grok Build向けの公式Unityプラグインなどを紹介しています。
pubDatetime: 2026-10-05T09:00:00+09:00
tags:
  - Unity Weekly
  - Unity
---

## Unity Officials

### The path to a single render pipeline in Unity 7

[The path to a single render pipeline in Unity 7 - Graphics Product Updates - Unity Discussions](https://discussions.unity.com/t/the-path-to-a-single-render-pipeline-in-unity-7/1737908)

Unity 7でレンダーパイプラインをURPに一本化する方針と、Built-In Render PipelineとHDRPの非推奨化および削除のスケジュールを説明するディスカッションです。

まず、Unity 6.7 LTSにてURPに入る機能として、Ground Truth Ambient Occlusion（GTAO）、Screen Space Reflections（SSR）、AgX Tonemapper、on-tile post processing、NVIDIA DLSS 4.5 Super Resolution、リアルタイムのSurface Cache Global Illumination、Unified Ray Tracing API、WebAssembly64によるWebGPU対応を挙げています。
詳細は[Unity 6.7 betaのグラフィックス更新のスレッド](https://discussions.unity.com/t/graphics-updates-with-the-unity-6-7-beta-release-we-want-to-hear-your-feedback/1737140)と[Unite Seoulの基調講演](https://youtu.be/n-3XvhUzMc0?t=1197)を参照するよう案内しています。

また、Unity 7.0のURPでは物理ライトユニット、自動露出、ダイナミックスカイが新しいライティング基盤になり、2027年の7.xサイクルでは新しいマテリアル、リフレクションプローブの改善、シャドウの進化、ボリュメトリックフォグ、Unity Neuralによる最適化、レイトレーシングベースのライティング効果を予定しているとのことです。

Built-In Render Pipelineは、Unity 7.0でobsoleteになり削除されるとのことです。
6.7 LTSのライフサイクルである2028年末まではフルサポートされ、Extended Supportでは2029年まで使える予定です。

URPにはBuilt-Inと同一のQuadratic Light Falloffが入り、Unity 6.7（6000.7.0b3以降）では `Window > Analysis > Project Auditor` から移行ウィザードを使えるとしています。
関連ドキュメントとして[Migrate to URP](https://docs.unity3d.com/Manual/urp/upgrading-from-birp.html)、[Project Auditor](https://docs.unity3d.com/Manual/project-auditor/project-auditor.html)、[Render Pipeline Converter](https://docs.unity3d.com/Manual/urp/features/rp-converter.html)を紹介しています。。

HDRPは、Unity 7.0でdeprecatedになりますが、最初のUnity 7 LTS（2027年末の見込み）までフルサポートされる予定とのことです。
そのLTSのサポート期間により2029年まで、さらにExtended Supportでは2030年まで利用でき、その後はobsoleteになり削除されます。

移行手順は[Migrating from HDRP to URP](https://docs.unity3d.com/Manual/urp/migrating-from-hdrp.html)を参照するよう案内しており、非推奨化と削除の時期を示すタイムラインも掲載しています。

### DirectX Shader Compiler support for DX12

[DirectX Shader Compiler support for DX12 - Graphics - Unity Discussions](https://discussions.unity.com/t/directx-shader-compiler-support-for-dx12/1738167)

Unity 6.6でDX12向けにDirectX Shader Compiler（DXC）が公式サポートされたことを紹介するディスカッションです。

- Configuring the target compiler with Shader Build Settings
    - 従来のshader model 6のpragmaでシェーダー単位に指定する方法に加え、プロジェクト設定で互換性のある全シェーダーをDXCでコンパイルできるようになった
        - `File > Build Profiles` でWindowsのビルドプロファイルを作り、`Add Settings > Graphics Settings` の `Shader Compiler Backend Selection` を `DirectX12 Shader Compiler (DXC)` にすることで利用できる
    - `UNITY_DEVICE_SUPPORTS_NATIVE_16BIT` を宣言すると `half` 型を明示的な16ビット型 `float16_t` に変換し、レジスタ使用量の削減につながる
    - Shader Model 6のwave intrinsicsにより、同じwave（warp）内のスレッドがgroup shared memoryを経由せずにデータを共有できるように
        - 32スレッドのwaveに処理を分散する `WaveGetLaneIndex()` や `WaveActiveSum()` のような関数をcompute shaderで使える
    - [NVIDIA Nsight Graphics](https://docs.nvidia.com/nsight-graphics/UserGuide/shader-profiler.html)のような最近のGPUプロファイラと互換性があり、HLSLソースのライブデバッグやシェーダーのフレームグラフを使える
- Platform support
    - 現時点ではDirectX12を使うWindowsビルドターゲットに限られる
- Guidelines and limitations
    - DX9/10/11向けの古いHLSLは修正が必要になることがあり、[Porting shaders from FXC to DXC](https://github.com/microsoft/DirectXShaderCompiler/wiki/Porting-shaders-from-FXC-to-DXC)を参照するよう案内している
    - DXCはDX11とは互換性がない

ドキュメント（[Compile shaders with the DirectX 12 compiler](https://docs.unity3d.com/6000.7/Documentation/Manual/shader-dxc-compiler.html)）にて詳細が確認できます。試したうえでのフィードバックを求めています。

### [INFO] iPadOS 27 & SDK 27 adaptability changes & iPhone Duo updates

[\[INFO\] iPadOS 27 & SDK 27 adaptability changes & iPhone Duo updates - Mobile - Unity Discussions](https://discussions.unity.com/t/info-ipados-27-sdk-27-adaptability-changes-iphone-duo-updates/1737980)

SDK 27でビルドしたiPadOS 27アプリにおける `UIRequiresFullScreen` の扱いの変更と、折りたたみ端末iPhone Duoへの対応状況を知らせるディスカッションです。

Appleは2027年4月下旬までに全アプリへSDK 27でのビルドを求める見込みとしています。

- What's changing
    - iPadOS: iPadOS 26から非推奨の `UIRequiresFullScreen` を、SDK 27でビルドしたアプリでは尊重しなくなり、動的なリサイズと向きの変化に対応する必要がある
        - SDK 26 / 27とフラグの有無による挙動の差を紹介している
        - SDK 27では、iPadの向きがアプリの許可する向きと異なる時に横倒しや上下逆に描画される
            - Appleが文書化していない挙動としている
    - iPhone Duo: 複数画面と並列マルチタスクに対応する初のiOS折りたたみ端末で、外側画面のフルスクリーン、内側画面のフルスクリーン、並列マルチタスクの3構成を持つ
        - 外側画面は通常のiPhone、内側画面はiPadのように振る舞う
        - 側面（自撮りカメラ）と下部にsafe areaの除外領域がある
- What projects may be affected
    - iPadOS: SDK 26でビルドし `UIRequiresFullScreen=true` のアプリは、フラグを尊重する互換レイヤーで2027年4月まで動作する
        - SDK 27でビルドしたアプリは自動的に動的なシナリオへ入り、ゲーム向けの例外は発表されていない
    - iPhone Duo: 全iPhoneアプリが対象になり、アスペクト比が約20:9から4:3に変わり、safe areaにカメラの除外領域が加わる
- What you should do
    - iPad: SDK 27.1でビルドしてシミュレーターと実機で確認し、2027年4月までにuGUIやUI Toolkitを動的レイアウトへ対応させる
        - 対応が難しい場合はレターボックス表示を検討する
    - iPhone Duo: 27.1のiPhoneシミュレーターで、カメラ側の除外領域を含むsafe areaの扱いを確認する
- Known issues
    - iPhone DuoのDPIを両画面とも489と計算しているが、実際は外側430 DPI、内側460 DPIで、調査中

参考として、Appleの[TN3192](https://developer.apple.com/documentation/technotes/tn3192-Migrating-your-app-from-the-deprecated-UIRequiresFullScreen-key)と[Get Ready for iPhone Duo](https://developer.apple.com/iphone-duo/)、UnityマニュアルのiOS Player SettingsとCanvas Scaler、`Screen.safeArea` のスクリプトリファレンスを挙げています。

### Unity CLI 1.0.0-beta.12 is rolling out

[Unity CLI 1.0.0-beta.12 is rolling out - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-cli-1-0-0-beta-12-is-rolling-out/1738085)

Unity CLI 1.0.0-beta.12のリリースを告知するディスカッションです。

- Heads up
    - 引数なしの `unity command` が160以上のコマンド一覧ではなく約50のタグ一覧を表示するよう
        - `unity command --tag <tag>` で絞り込む
        - `--format json` で全コマンドを読んでいたスクリプトは `--detail full` を付ける必要があり、[com.unity.pipeline 0.8.0-exp.1](https://discussions.unity.com/t/unity-pipeline-package-0-8-0-exp-1-is-available-now/1737832)が必要
    - `--format ndjson` の一覧系コマンドの末尾に `data.count` を持つ `{"type":"result"}` 行が付き、結果の欠落を検出できる
    - `unity open` と `unity projects open` がJSON / NDJSON形式で成功を出力するようになった
- Added
    - `unity projects create --with-pipeline`、`unity status --until-ready`、`unity commands --grep <pattern>`
    - `unity skill disable / enable / list` と、Claude Codeのプラグインとskillを入れる `unity setup claude`
    - Unity 6.6以降で署名に対応した `unity assets export`（`--no-sign` あり）
    - `unity pipeline cloud-build` と `unity pipeline automation`（読み取り専用の24コマンド）
    - `unity install --no-wait` と `--wait-timeout`、`unity bug --area` と `unity bug mcp`、`unity changelog --target <version>`
- Changed
    - `--editor-version` に6.6のような部分指定をすると、一致する最新パッチで実行する
    - `unity command <name>` はEditorがビジーの間待つようになり、`unity ugs` はUnity Gaming Services CLI 2.0.0に更新された
- Fixed
    - Unity Hubとのサインインの共有、Windowsでの `unity self-update`、ダウンロードの再開、`unity releases` の応答性、Ctrl-Cの扱い（終了コード130）などを修正
- Security
    - `unity bug` が資格情報とアカウント名をマスクし、プラグインのダウンロードURLの検証、macOSネイティブライブラリの署名検証、パイプ経由のシェル入力の保護を強化

### Unity Pipeline package 0.8.0-exp.1 is available now!

[Unity Pipeline package 0.8.0-exp.1 is available now! - Unity Editor Product Updates - Unity Discussions](https://discussions.unity.com/t/unity-pipeline-package-0-8-0-exp-1-is-available-now/1737832)

Unity CLIから使うPipelineパッケージ0.8.0-exp.1のリリースを告知するディスカッションです。

- 追加
    - `CommandRegistry` の `RegisterCommand` / `UnregisterCommand` が公開され、独自アセンブリからランタイムコマンドを登録できる
    - ILインタープリターが、インタープリター上のクラスのメソッドを対象にしたデリゲート、`new string(char[])`、`BitConverter` のビットキャストに対応
    - `/api/commands?detail=tags` がコマンド数付きのタグ一覧を返す
- 変更
    - ライセンスがUnity Package Distribution LicenseからUnity Terms of Serviceに変わった
    - サンプルが `com.unity.pipeline.samples` パッケージに分離された
    - サーバーのバインドが `127.0.0.1` だけになり、localhostではなくIPで接続する
    - `[CliCommand]` と `[CliArg]` 属性が `Unity.Pipeline.Attributes` 名前空間へ移動した
    - Developmentビルドのプレイヤーにコードリロード用の `link.xml` を含めなくなり、`capture_game_view` の既定が `source=screen` になった
    - Editorサーバーの設定が `Project Settings > Pipeline > Editor` に移り、プレイヤーのコマンドはEditorサーバー上で `runtime` タグ付きで一覧される
- 修正
    - 9つの `*_status` コマンドがJSON文字列ではなくJSONを返すようになり、`build_status` のタイムゾーン、コードリロードの対象、`codereload_status` と `cleanup_codereload` の利用可否を修正
    - Play Mode時のアセンブリ走査を `TypeCache` で高速化し、`RuntimePipelineDriver.Update` のアロケーションを解消
    - ランタイムサーバーの有効化条件を `ENABLE_PROFILER` に修正し、Unity 6000.3.0a1〜a4と6000.7以降でのコンパイルエラーを解消

詳細はパッケージの `Documentation~/` を参照し、不具合は[GitHubのissue](https://github.com/Unity-Technologies/com.unity.pipeline/issues)へ報告するよう案内しています。

### Now Available: Unity Hub 3.22.0

[Now Available: Unity Hub 3.22.0 - Unity Hub - Unity Discussions](https://discussions.unity.com/t/now-available-unity-hub-3-22-0/1737927)

Unity Hub 3.22.0の一般提供を告知するディスカッションで、インストールの信頼性を主な焦点としています。
macOS 12 Montereyのサポートは終了し、macOS 13 Ventura以降が必要です。

- What's New
    - General: Settingsに、Electron、Chromium、Node.js、V8、同梱のUnity CLIのバージョンとオープンソースの表記を一覧する「About」タブを追加
    - General: Editorの展開や走査、大きなダウンロードの間もHubのウィンドウが応答し続け、中断したダウンロードは途中から再開し、ダウンロードはリリースマニフェストのチェックサムで検証する
    - General: Unity CLIから始めたダウンロード、インストール、プロジェクト、モジュールの操作が再起動なしでHubに表示される
    - Licenses: フローティングライセンスサーバーの設定をURL付きのバナーで示し、到達できない時は警告する
- Bug Fixes & Improvements
    - Projects: Hub起動直後に別バージョンのEditorが開く問題、綴りの異なるパスで同じプロジェクトが重複する問題、大文字小文字を区別するボリュームでのパス比較などを修正
    - Installs: 失敗したインストールが権限不足などの原因を表示するようになり、Windowsの非特権インストールでの昇格失敗を修正
    - Custom Templates: Unity 6000.6.0a4以降のテンプレートでの「UDSFilesystem failed to acquire read handle」エラーを修正
    - Source Control: macOSでUnity Version Controlクライアントのインストールが止まる問題を修正
    - General: Electronを44に更新し、Unity CLI実行中にEditorからサインアウトされる問題、Windowsの古い `unityhub://` リンクによるサインイン失敗、Linuxのデバッガーのアタッチなどを修正
        - アナリティクスはIPアドレスや付随的な操作を記録しなくなった
    - Security: HTTPクライアントライブラリundiciを8.9.0に更新し、CR / LF文字を拒否するようにした

リリースノートは[Unity Hub release notes](https://unity.com/unity-hub/release-notes#3.22.0)にあります。

### Meta Quest 3 & Meta Quest 3S are now available in Platform Toolkit!

[Meta Quest 3 & Meta Quest 3S are now available in Platform Toolkit! - Target Platforms - Unity Discussions](https://discussions.unity.com/t/meta-quest-3-meta-quest-3s-are-now-available-in-platform-toolkit/1738006)

Platform Toolkit 1.2.0でMeta Quest 3とMeta Quest 3Sに対応したことを告知するディスカッションです。最小のEditorバージョンは6000.7.0b1です。

Platform Toolkitは、サインインのAccounts、Achievements、進行状況を保存するSavingをプラットフォーム横断で統合できるパッケージです。

今回のリリースには、Meta Quest 3 / 3Sのサポート、Play mode controlsのPlay mode persistence、不具合修正が含まれています。
Play mode persistenceは `Play Mode Controls > Test Account Data > Settings` にあり、実績とセーブデータをディスクに書かずメモリ上に保持し、終了時に変更を破棄します。

### UnityDataTools support for SerializeReference

[UnityDataTools support for SerializeReference - Asset & Content Management - Unity Discussions](https://discussions.unity.com/t/unitydatatools-support-for-serializereference/1738160)

[UnityDataTools](https://github.com/Unity-Technologies/UnityDataTools) 2.4で、ビルド出力内の `SerializeReference` の使用状況を確認できるようになったことを紹介するディスカッションです。

AssetBundle、Content directories、Playerビルドに対して `analyze` コマンドを実行すると、`SerializeReference` でシリアライズされたC#オブジェクトを一覧する `managed_references` テーブルが新たに出力されます。
クラスを削除またはリネームしてよいかをAssetBundle内のシリアライズ状況から判断したり、それらのオブジェクトの数とサイズを把握したりでき、個々のMonoBehaviourやScriptableObjectの参照を広く走査する必要がなくなるとしています。

### The Official Unity Plugin for Grok Build

- [The Official Unity Plugin for Grok Build - AI & Machine Learning Product Updates - Unity Discussions](https://discussions.unity.com/t/the-official-unity-plugin-for-grok-build/1738062)
- [Official Unity Plugin for Grok Build Is Now Available - Unity Blog](https://unity.com/blog/unity-plugin-grok)

コーディングエージェントGrok Build向けのUnity公式プラグインの公開を告知するディスカッションとブログ記事です。

[Claude Code](https://unity.com/blog/unity-plugin-for-claude-code)、[Codex](https://unity.com/blog/unity-plugin-codex)に続く3つ目のコーディングエージェントで、同じ30以上のskillを提供します。
UI ToolkitとuGUI、2Dとタイルマップ、URPとShader Graph、オーディオ、ナビゲーションと物理、IAPとLevelPlay、マルチプレイヤー、Web、ローカライズをカバーし、Unity 6以降で動作します。

インストールはターミナルで次の1コマンドを実行します。

```
grok plugin install Unity-Technologies/unity-agent-plugin --trust
```

詳細は[ドキュメント](https://docs.unity.com/en-us/ai/unity-plugin/grok)にあり、どのskillが役に立ち、どれが期待に届かなかったかのフィードバックを求めています。
ブログ記事では、10月に利用データを公開し、さらに別のコーディングエージェントへの対応も検討するとしています。

### Unity External Dependency Manager: What You Need to Know About the Change

[Unity External Dependency Manager: What You Need to Know About the Change - Unity Blog](https://unity.com/blog/external-dependency-manager)

[前号](https://discussions.unity.com/t/introducing-external-dependency-manager-edm-unitys-official-package-for-mobile-native-dependencies/1737255)で取り上げたUnity公式のExternal Dependency Manager（EDM）について、移行手順と背景を説明するブログ記事です。
GoogleがEDM4Uを2026年10月26日に非推奨にすると発表したことに触れています。

- How to Get Started with EDM
    - ゲーム開発者は、Package ManagerのUnity Registryから「External Dependency Manager」を入れ、アクティブな依存マネージャーとして選び、準備ができたらEDM4Uを削除する。EDMはUnity 2022.3以降で無料で、SDKがEDM4U向けに使っている同じXML依存ファイルを読む。
    - SDK保守者は[plug-in distributor guide](https://docs.unity3d.com/Packages/com.unity.external-dependency-manager@2.1/manual/get-started-with-edm.html#plug-in-distributor-guide)に従い、自分のUnity SDKにEDMを推奨する
- Why Mobile Dependencies Matter
    - モバイルゲームは広告、分析、収益化、プッシュ通知のSDKに依存しており、EDMは手作業の統合の複雑さとSDK間の依存の衝突の2つを解決する
- What Unity Owning EDM Means
    - 公式EDMパッケージはモバイル依存管理をエンジンの第一級機能にする最初の一歩で、CocoaPods / Rubyとの連携やユーザー体験を改善している

[ドキュメント](https://docs.unity3d.com/Packages/com.unity.external-dependency-manager@2.1/manual/index.html)と[Getting Started](https://docs.unity3d.com/Packages/com.unity.external-dependency-manager@2.1/manual/get-started-with-edm.html)を案内し、不具合はEditorの `Help > Report a Bug` から報告するよう求めています。

### Games made with Unity: September 2026 in review

[Games made with Unity: September 2026 in review - Unity Blog](https://unity.com/blog/games-made-with-unity-september-2026-releases)

2026年9月にリリースされたUnity製ゲームをジャンル別に紹介するブログ記事です。

『Valheim』『ENDLESS Legend 2』『Moonlighter 2: The Endless Vault』『TOEM 2』『TCG Card Shop Simulator』『Princess Maker: Children of Revelation』などを含む、early accessまたは正式リリースされたタイトルを一覧しています。


## Events

### Unity Shader 完全に理解した 勉強会

[Unity Shader 完全に理解した 勉強会 - connpass](https://unity-fully-understood.connpass.com/event/403229/)

2026/10/02に開催された「Unity Shader 完全に理解した 勉強会」の講演動画と、LTの発表資料や補足記事が公開されています。
ショートセッション「シェーダーの歩き方」とLT 3本で構成されています。

- 講演動画
    - [Unity Shader 完全に理解した 勉強会 - YouTube](https://www.youtube.com/live/UXFB4WtfdVw)
- 発表資料
    - [AR合成では実写をToonに寄せる ― V1nStudio の World モードと AR モード、2 つのシェーダー実装を比べる - Zenn](https://zenn.dev/dsgarage/articles/ar-composite-real-to-toon)
    - [Unity6 URPによる海底をテーマにしたVJシステムの解説 | Unity Shader 完全に理解した 勉強会 - Speaker Deck](https://speakerdeck.com/gam0022/unity-vj-draw-tokyo4)
    - [TGSのために半年でShaderLabHLSLを完全に理解した〜Shadow編〜 - ドクセル](https://www.docswell.com/s/5unad0ke1/54NWMY-2026-10-02-201532)


## Articles

### キャラクターを画面内の指定領域に収めるカメラ位置の計算方法

[キャラクターを画面内の指定領域に収めるカメラ位置の計算方法 - Zenn](https://zenn.dev/reality_tech/articles/camera-auto-framing-algorithm)

3Dキャラクター撮影アプリで、カメラの向きと画角を固定したまま位置だけを動かし、被写体を画面内の指定した矩形領域に収めるオートフレーミングの計算方法を解説する記事です。

`Renderer.bounds` のAABBでは透視投影でシルエットより外側に投影されて余白が生じるため、メッシュの全頂点を使っているとのことです。
NDCで領域と余白を表し、各頂点を基準座標系へ変換して左右上下のエッジ制約値を計算し、全頂点の最小値と最大値の4つに集約したうえで、奥行きのオフセットと横縦のオフセットを反復計算なしで直接求めています。

毎フレーム追従する場合はOne Euro Filterで基準点と制約値を平滑化し、実装は[CinematicCameraToolkit 0.2.0](https://github.com/sotanmochi/CinematicCameraToolkit/tree/0.2.0)の `AutoFramingSolver` として公開しています。

### RenderGraphのメモリ帯域削減 ― SoCのメモリ階層から実機計測まで

[RenderGraphのメモリ帯域削減 ― SoCのメモリ階層から実機計測まで - Zenn](https://zenn.dev/applibot_tech/articles/rendergraph-memory-bandwidth)

Unity 6のURPに入ったRenderGraphの効果のうちメモリ帯域の削減を、SoCのメモリ階層の説明から実機計測まで掘り下げる記事です。

モバイルSoCではDRAMとGPU内部のSRAM（タイルメモリ）の速度差が大きいことを前提に、Load / Store Actionと、RenderGraphでそれを決める `AccessFlags`（`Read` / `Write` / `ReadWrite` / `Discard` / `WriteAll`）の意味を整理しています。
そのうえで、複数のpassをタイルメモリ上で続けて実行するNativeRenderPassのマージ条件（`AddRasterRenderPass` であること、解像度とMSAAサンプル数の一致、Textureとしてサンプリングしないこと）、InputAttachment、FrameBufferFetch、Memorylessを、RenderGraph Viewerでの確認方法とともに解説しています。

計測はUnity 6000.3.6f1とURP 17.3.0のURP 3D Sample Gardenを、iPhone 11 Pro MaxでDeferredのMobile_Low_Rendererを使って行っています。

`Disable Pass Merging` のオンオフをXcodeのGPU Frame Captureで比較すると、マージ時はG-BufferがMemorylessになってDRAMの24.45 MiBが不要になり、GPUの書き込み帯域が28%、読み込み帯域が25%減ったものの、ALUが律速のためGPU時間は変わらなかったとしています。
パスマージの効果は時間ではなく転送量とDRAM使用量に出るため、`AccessFlags` を正確に宣言して `AddRasterRenderPass` を使うことを基本にし、細かい最適化は帯域が律速と分かってから行うよう勧めています。

### MacのトラックパッドでUnityを気持ちよく操作できるパッケージ作りました

[MacのトラックパッドでUnityを気持ちよく操作できるパッケージ作りました - きゅぶろぐ](https://blog.kyubuns.dev/entry/2026/10/01/100000)

ブログの著者が開発する、MacBookのトラックパッドだけでUnity Editorを操作できるようにするパッケージ[UnityTrackpadNavigation](https://github.com/kyubuns/UnityTrackpadNavigation)を紹介する記事です。

2本指スライドでパン、ピンチで拡大縮小、2本指ダブルタップでカーソル下の対象へフォーカス、Option + 2本指スライドでカーソル下の対象を中心に回転でき、Shader Graph、VFX Graph、Timeline、Animation、UI Builder、Sprite Editor、Curve Editorにも対応しています。
Apple SiliconのMac向けでEditor専用のためビルドには含まれず、Editorが非アクティブな時は動かない制約があり、設定は `Preferences > Trackpad Navigation` から調整できるとのことです。

### Unity 6.7で追加されるEntityIdTileについて

[Unity 6.7で追加されるEntityIdTileについて - Qiita](https://qiita.com/RyotaMurohoshi/items/eae7a0015e83c43cf06d)

Unity 6.7で追加される、TilemapへのTile設定のパフォーマンス改善を目的としたEntityIdTileを紹介する記事です。

EntityIdは32ビットの `InstanceID` に代わる64ビットの `EntityId` 構造体でUnity Objectを識別するもので、EntityIdTileは `GetTileData` でデータを渡す従来の `Tile` と違いUnity JobsとBurstでTileからデータを取得できます。

Inspector、Tile Palette、Tilemap APIの基本的なワークフローは同じで、2D Tilemap Extras 10.0.0ではTile Paletteの設定でEntityIdTileと従来のTileのどちらを作るかを選べ、`Window > 2D > Tile Asset Converter` で既存のTile Assetを変換できます。
Tilemap上の全TileがEntityIdTileBaseから派生している必要があり、混在するとJobs / Burstを使わない処理にフォールバックするとのことです。

### MagicOnionで弾幕エンジンFsBulletML2を使おう — UnityとGodotは受けた座標を描画するだけ(おまけJev)

[MagicOnionで弾幕エンジンFsBulletML2を使おう — UnityとGodotは受けた座標を描画するだけ(おまけJev) - Zenn](https://zenn.dev/zecl/articles/4c33881b221006)

2013年のF#製弾幕エンジンFsBulletMLをリブートした[FsBulletML2](https://github.com/zecl/FsBulletML-2)を、MagicOnionのサーバー上で動かし、UnityとGodotのクライアントは受け取った座標を描画するだけにする構成を解説する記事です。

旧設計ではエンジンがフロント側のオブジェクトを途中で呼び返す必要がありましたが、新設計では1フレーム進める関数1本のインターフェイスになったためサーバーに置けるようになったとしています。

StreamingHubは弾のIdと座標、向き、種別だけを配信し、ゲームループは `PeriodicTimer` で駆動するRoomがHubの外で回し、当たり判定は下りと上りの通信量や複数プレイヤーの観点からサーバー側で一元管理しています。
エンジンのコアはReader / State / Writerを1つに畳んだSimモナドで駆動し、旧エンジン比で5倍の性能とヒープ確保47%削減を達成したほか、Cloudflare Workers AIのモデルで弾幕の特性を返させてBulletMLを組み立てるJevと、ブラウザで動く[Danmaku Gallery](https://danmaku.gallery/)も紹介しています。

### Shaderlyn - 大規模開発に対応するシェーダー静的解析ツール

[Shaderlyn - 大規模開発に対応するシェーダー静的解析ツール - Zenn](https://zenn.dev/omojip/articles/253bcbf23c444b)

ShaderLabとHLSLを構文解析し、プリプロセッサの条件分岐を考慮して問題を指摘する静的解析ツール[Shaderlyn](https://github.com/OmojiP/shaderlyn)を紹介する記事です。

`#if` や `#pragma multi_compile` の全組み合わせを試すのは現実的でないため（Unity 6000.3.0f1のHDRPの `LayeredLitTessellation.shader` では118シンボル）、トークン列に条件を付けて解析する方式を採り、上限を超えた分だけ組み合わせを試して解析しきれない時は診断を出します。
これにより、ある分岐の組み合わせでだけ未宣言になる変数や、ShaderLabのプロパティとHLSLの宣言との型の不一致を検出でき、Roslyn風のAPIでプロジェクト固有のルールも書けます。

配布はCLI（GitHub ReleaseとNuGet）と、ホバー、リネーム、定義ジャンプ、参照検索に対応するVSCode拡張で、出力はjson、github、sarif形式を選べるためCIに組み込めます。
v0.1.1でAPIはv1まで不安定であり、Unity以外のシェーダー環境は今後の課題としています。

### Unity6.6からFast Enter Play Mode(ドメインリロード無し)がデフォルトになって再生が爆速になった話と、staticな値がリセットされない場合の対処法【Unity】

[Unity6.6からFast Enter Play Mode(ドメインリロード無し)がデフォルトになって再生が爆速になった話と、staticな値がリセットされない場合の対処法【Unity】](https://kan-kikuchi.hatenablog.com/entry/FastEnterPlayMode_Default)

Unity 6.6の新規プロジェクトでEnter Play Mode Settingsの既定が「Reload Scene only」になり、ドメインリロードなしで再生が始まるようになったことと、static値が持ち越される時の対処法を紹介する記事です。

既存プロジェクトの設定は自動では変わりません。

持ち越されるstatic値は、Unity 6.5で追加された `[OnEnteringPlayMode]` と `[AutoStaticsCleanup]` で再生開始時に初期化でき、Project AuditorのRoslyn Analyzersで対象を洗い出せるとのことです。

### UnityでなぜC# 10以降を使うライブラリが動くのか

[UnityでなぜC# 10以降を使うライブラリが動くのか - Zenn](https://zenn.dev/s4k1/articles/ba87c0ff3c1d47)

Unity 6.6の公式対応がC# 9.0であるにもかかわらず、ZLogger、R3、MemoryPackのようなC# 10以降の機能を使うライブラリが動く理由を、コンパイラ、BCL、ランタイムの3層に分けて解説する記事です。

同梱のRoslyn 4.3.1はC# 10まで（`preview` でC# 11の一部も）コンパイルでき、構文糖はコンパイラだけで、`init` のような機能はPolyfillで補えるため古いランタイムでも動くと説明しています。

ランタイムの対応が必要な機能は別に確認が要るとし、EditorとIL2CPPでの動作確認結果と `csc.rsp` の設定方法もまとめています。

### Unity 6.3のメモリ解放で気を付けること：GC・Destroy・Disposeの使い分け

[Unity 6.3のメモリ解放で気を付けること：GC・Destroy・Disposeの使い分け - Zenn](https://zenn.dev/gamedev_toollab/articles/950890b96bed32)

Unity 6.3 LTS、Addressables 2.10系、Collections 2.6系を対象に、メモリの解放方法は型ではなく取得方法で決まるという原則で、`null` 代入、`Destroy`、`Dispose` の役割を整理する記事です。

`renderer.material` を読むだけで複製が生まれる所有権の問題、Addressablesのロードと `Release` の対応、`UnloadSceneAsync` や `Resources.UnloadUnusedAssets()` で消えないもの、`NativeArray` の構造体コピーが同じメモリを指すこと、`RenderTexture.Release()` と `GetTemporary()` の返却、イベント購読やプールが参照を残すケースを扱っています。

検証は同じ状態へ繰り返し戻してMemory Profilerでスナップショットを比較する手順を勧めています。

### UnityのPipelineサーバーとは何か、起動や停止の方法と各種設定【Unity】【AI】

[UnityのPipelineサーバーとは何か、起動や停止の方法と各種設定【Unity】【AI】](https://kan-kikuchi.hatenablog.com/entry/Unity_Pipeline_Server)

Unity CLIからの命令を受け取ってEditorを操作するPipelineサーバーについて、起動と停止の方法と設定項目を解説する記事です。

Unity 6000.5.10f1とUnity Pipeline 0.7.0-exp.1で確認しています。

`Window > Pipeline` メニューからの起動と停止、既定の自動起動、設定アセットにあるPortやWatchdog、ログ記録などの各項目の意味を順に説明しています。

