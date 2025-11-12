import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import matter from 'gray-matter';

const ARTICLES_DIR = './articles';

// ブログ記事のfrontmatter変換
function convertBlogFrontmatter(data, filePath) {
  const newData = {
    title: data.title,
    description: data.description || '',
    pubDatetime: new Date(data.date),
    tags: data.tags || [],
  };

  // draft判定
  if (data.draft) {
    newData.draft = true;
  }

  return newData;
}

// Unity Weeklyのfrontmatter変換
function convertProjectFrontmatter(data, filePath) {
  const newData = {
    type: 'unity-weekly',
    title: data.title,
    description: data.description || '',
    pubDatetime: new Date(data.date),
    tags: data.tags || [],
  };

  if (data.draft) {
    newData.draft = true;
  }

  return newData;
}

async function migrateArticles() {
  console.log('Starting frontmatter migration...\n');

  let blogCount = 0;
  let projectCount = 0;

  // ブログ記事を処理
  console.log('Processing blog articles...');
  const blogFiles = await glob(`${ARTICLES_DIR}/20*/**/*.markdown`, { nodir: true });

  for (const file of blogFiles) {
    try {
      const content = fs.readFileSync(file, 'utf-8');
      const { data, content: body } = matter(content);

      const newData = convertBlogFrontmatter(data, file);
      const newContent = matter.stringify(body, newData);

      // .markdown を .md に変更
      const newFile = file.replace('.markdown', '.md');
      fs.writeFileSync(newFile, newContent);

      if (file !== newFile) {
        fs.unlinkSync(file);
      }

      blogCount++;
      console.log(`  ✓ ${file}`);
    } catch (error) {
      console.error(`  ✗ Error processing ${file}:`, error.message);
    }
  }

  // Unity Weeklyを処理
  console.log('\nProcessing project articles...');
  const projectFiles = await glob(`${ARTICLES_DIR}/project/**/*.markdown`, { nodir: true });

  for (const file of projectFiles) {
    try {
      const content = fs.readFileSync(file, 'utf-8');
      const { data, content: body } = matter(content);

      const newData = convertProjectFrontmatter(data, file);
      const newContent = matter.stringify(body, newData);

      const newFile = file.replace('.markdown', '.md');
      fs.writeFileSync(newFile, newContent);

      if (file !== newFile) {
        fs.unlinkSync(file);
      }

      projectCount++;
      console.log(`  ✓ ${file}`);
    } catch (error) {
      console.error(`  ✗ Error processing ${file}:`, error.message);
    }
  }

  console.log(`\n✓ Migration complete!`);
  console.log(`  Blog articles: ${blogCount}`);
  console.log(`  Project articles: ${projectCount}`);
  console.log(`  Total: ${blogCount + projectCount}`);
}

migrateArticles().catch(error => {
  console.error('Migration failed:', error);
  process.exit(1);
});
