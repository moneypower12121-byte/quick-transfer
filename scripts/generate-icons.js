#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

async function run(){
  let sharp;
  try { sharp = require('sharp'); } catch(e) {
    console.error('sharp is not installed. Run: npm install --save-dev sharp');
    process.exit(1);
  }

  const inPath = path.join(__dirname, '..', 'public', 'favicon.svg');
  const outDir = path.join(__dirname, '..', 'public', 'icons');

  if(!fs.existsSync(inPath)){
    console.error('Source SVG not found:', inPath);
    process.exit(1);
  }
  if(!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  await sharp(inPath).resize(192, 192, { fit: 'contain' }).png().toFile(path.join(outDir, 'icon-192.png'));
  await sharp(inPath).resize(512, 512, { fit: 'contain' }).png().toFile(path.join(outDir, 'icon-512.png'));

  console.log('Generated public/icons/icon-192.png and public/icons/icon-512.png');
}

run().catch(err => { console.error(err); process.exit(1); });
