#!/bin/bash
set -e

echo "Setting up CI build environment..."

cd system

# src/data にコピー
echo "Copying articles to src/data..."
rm -rf src/data
mkdir -p src/data

# ブログ記事をコピー
cp -r ../articles src/data/blog

# プロジェクト記事をコピー
mkdir -p src/data/projects
if [ -d "../articles/project" ]; then
    cp -r ../articles/project/* src/data/projects/
fi

# public/assets にコピー
echo "Copying assets to public/assets..."
rm -rf public/assets
mkdir -p public/assets/images

# 記事の画像をコピー
cp -r ../articles public/assets/images/blog

# プロジェクトの画像をコピー
if [ -d "../articles/project" ]; then
    cp -r ../articles/project public/assets/images/projects
fi

echo "✓ CI build environment setup complete!"
