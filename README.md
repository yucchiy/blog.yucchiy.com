# blog.yucchiy.com

[Yucchiy's Note](https://blog.yucchiy.com/) のコンテンツリポジトリです。

## 概要

このリポジトリは技術ブログ「Yucchiy's Note」の記事データとデプロイ設定を管理しています。
ブログシステム本体は [yucchiy/blogv4](https://github.com/yucchiy/blogv4) で管理されており、システムとコンテンツを分離することで保守性を高めています。

## リポジトリ構造

```
blog.yucchiy.com/
├── articles/                         # 記事データ（メインコンテンツ）
│   ├── 2014/～2024/                 # 年別の技術記事
│   ├── project/                     # プロジェクト記事
│   │   ├── unity-weekly/            # Unity Weekly（週次まとめ）
│   ├── profile/                     # プロフィールページ
│   └── styleguide/                  # スタイルガイド
├── scripts/                         # ビルド・セットアップスクリプト
│   ├── setup-local.sh               # ローカル開発環境セットアップ
│   ├── setup-ci.sh                  # CI環境セットアップ
│   └── migrate-frontmatter.js       # frontmatter移行スクリプト
├── .github/workflows/               # GitHub Actionsワークフロー
│   └── deployment.yml               # デプロイ設定
├── package.json                     # npm scripts定義
└── README.md                        # このファイル
```

### 記事の構造

各記事は以下の構造で管理されています。

```
articles/YYYY/MM/article-slug/
├── index.md                    # 記事本文
└── [images]                    # 記事内で使用する画像
```

プロジェクト記事は以下のとおりです。

```
articles/project/
├── unity-weekly/NNN/
│   └── index.md                # Unity Weekly #NNN の記事
├── directx12-csharp/
│   └── index.md                # DirectX 12 C#チュートリアル
└── opentk-opengl-tutorial/
    └── index.md                # OpenTK OpenGLチュートリアル
```

## 開発環境のセットアップ

### 前提条件

- Node.js 20.x
- Git

### ローカル開発

```bash
# リポジトリのクローン
git clone https://github.com/yucchiy/blog.yucchiy.com.git
cd blog.yucchiy.com

# 依存関係のインストール
npm install

# ローカル開発サーバーの起動
# blogv4を自動でcloneし、記事データをコピーして起動します
npm run dev
```

開発サーバーが起動したら http://localhost:4321 でブログにアクセスできます。

> **Note**: `npm run dev`を実行すると、`scripts/setup-local.sh`が自動的に実行され、blogv4リポジトリのクローンと記事データのコピーが行われます。記事を編集した場合は、再度`npm run dev`を実行して変更を反映してください。

### ビルド

```bash
# 本番ビルド
npm run build

# ビルド結果のプレビュー
npm run preview
```

## デプロイ

mainブランチへのpushで自動的にGitHub Pagesへデプロイされます。

### デプロイフロー

1. `main`ブランチにpush
2. GitHub Actionsが起動（`.github/workflows/deployment.yml`）
3. blogv4リポジトリをチェックアウト
4. `scripts/setup-ci.sh`を実行して記事データ（articles/）をblogv4にコピー
   - ブログ記事は`src/data/blog/`にコピー（projectディレクトリを除く）
   - プロジェクト記事は`src/data/projects/`にコピー
   - 画像などのアセットは`public/assets/images/`にコピー
5. Astroでビルド
6. GitHub Pagesにデプロイ

## システムとコンテンツの分離

このブログは以下のように管理されています。

- **システム** ([blogv4](https://github.com/yucchiy/blogv4)): Astroベースのブログシステム
- **コンテンツ** (このリポジトリ): 記事データとデプロイ設定

この分離により、下記を実現しようとしています。

- システムの更新が容易
- コンテンツの管理がシンプル
- 再利用性の向上

## 記事の追加

新しい記事を追加する場合、下記のように追加します。

1. `articles/`以下に適切なディレクトリを作成
2. `index.md`ファイルを作成
3. frontmatterを記述
4. 記事を執筆
5. コミット & push

### frontmatter

**技術記事の場合:**

```yaml
---
title: "記事のタイトル"
description: "記事の説明"
pubDatetime: 2024-12-09T00:00:00
tags: ["Unity", "C#"]
---
```

**プロジェクト記事の場合:**

Unity Weekly:

```yaml
---
type: "unity-weekly"
title: "Unity Weekly #247"
description: "2025/11/10週のUnity Weeklyです。"
pubDatetime: 2025-11-10T00:00:01
tags: ["Unity Weekly", "Unity"]
---
```

> **Note**: `draft: true`を設定すると、記事はビルドされますがリストには表示されません。公開する場合は`draft: false`に変更するか、フィールドを削除してください。
