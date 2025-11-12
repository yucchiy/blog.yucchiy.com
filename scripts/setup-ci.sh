#!/bin/bash
set -e

echo "Setting up CI build environment..."

cd system

# src/data にコピー
echo "Copying articles to src/data..."
rm -rf src/data
mkdir -p src/data/blog

# ブログ記事をコピー（projectディレクトリを除く）
cp -r ../articles/* src/data/blog/
rm -rf src/data/blog/project

# プロジェクト記事をコピー
mkdir -p src/data/projects
if [ -d "../articles/project" ]; then
    cp -r ../articles/project/* src/data/projects/
fi

# public/assets にコピー
echo "Copying assets to public/assets..."
rm -rf public/assets
mkdir -p public/assets/images/blog

# 記事の画像をコピー（projectディレクトリを除く）
cp -r ../articles/* public/assets/images/blog/
rm -rf public/assets/images/blog/project

# プロジェクトの画像をコピー
if [ -d "../articles/project" ]; then
    mkdir -p public/assets/images/projects
    cp -r ../articles/project/* public/assets/images/projects/
fi

echo "✓ CI build environment setup complete!"
