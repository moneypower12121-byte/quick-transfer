#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

async function run(){
  let sharp;
  try { sharp = require('sharp'); } catch(e) {
    console.error('sharp is not installed. Run: npm install --save-dev sharp --legacy-peer-deps');
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

  // Generate screenshots from a shared SVG source if present
  const screenshotsDir = path.join(outDir, 'screenshots');
  if(!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir, { recursive: true });
  const ssSvg = path.join(__dirname, '..', 'public', 'icons', 'screenshot-source.svg');
  if (fs.existsSync(ssSvg)) {
    await sharp(ssSvg).resize(1280, 720, { fit: 'cover' }).png().toFile(path.join(screenshotsDir, 'screenshot-wide.png'));
    await sharp(ssSvg).resize(412, 915, { fit: 'cover' }).png().toFile(path.join(screenshotsDir, 'screenshot-mobile.png'));
    console.log('Generated screenshots in public/icons/screenshots/');
  } else {
    console.log('No screenshot source found at', ssSvg, '; skipping screenshots.');
  }

  console.log('Generated public/icons/icon-192.png and public/icons/icon-512.png');
}

run().catch(err => { console.error(err); process.exit(1); });
