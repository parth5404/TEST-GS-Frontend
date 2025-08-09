#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the folder path from command-line argument
const folderPath = process.argv[2];

if (!folderPath) {
  console.error('❌ Please provide a folder path:');
  console.error('Usage: node rename-to-jsx.js <folder-path>');
  process.exit(1);
}

function renameFilesRecursively(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      renameFilesRecursively(fullPath);
    } else if (entry.isFile() && path.extname(entry.name) === '.js') {
      const newPath = fullPath.slice(0, -3) + '.jsx';
      fs.renameSync(fullPath, newPath);
      console.log(`✅ Renamed: ${fullPath} → ${newPath}`);
    }
  }
}

try {
  renameFilesRecursively(path.resolve(folderPath));
  console.log('🎉 Done renaming all .js files to .jsx');
} catch (err) {
  console.error('❌ Error:', err.message);
}