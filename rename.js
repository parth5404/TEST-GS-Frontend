#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const folderPath = process.argv[2];

if (!folderPath) {
  console.error('❌ Please provide a folder path:');
  process.exit(1);
}

function fixDoubleDots(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      fixDoubleDots(fullPath);
    } else if (entry.isFile()) {
      if (entry.name.includes('..tsx')) {
        const newName = entry.name.replace('..tsx', '.tsx');
        const newPath = path.join(dir, newName);
        fs.renameSync(fullPath, newPath);
        console.log(`✅ Fixed: ${fullPath} → ${newPath}`);
      }
    }
  }
}

fixDoubleDots(path.resolve(folderPath));
console.log('🎉 Done fixing file names');