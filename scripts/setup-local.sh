#!/bin/bash
set -e

echo "Setting up local development environment..."

# blogv4が存在しない場合はclone
if [ ! -d "system" ]; then
    echo "Cloning blogv4..."
    git clone git@github-personal:yucchiy/blogv4.git system
fi

cd system

# src/data のシンボリックリンク作成
echo "Creating symlinks for src/data..."
rm -rf src/data
mkdir -p src/data
ln -sf ../../articles src/data/blog
ln -sf ../../articles/project src/data/projects

# public/assets のシンボリックリンク作成
echo "Creating symlinks for public/assets..."
rm -rf public/assets
mkdir -p public/assets/images
ln -sf ../../../articles public/assets/images/blog
ln -sf ../../../articles/project public/assets/images/projects

echo "✓ Local development environment setup complete!"
