QuickTransfer Electron scaffold

How this works:
- `electron/main.cjs` starts an Electron BrowserWindow and loads the built Vite app from `dist/index.html`.
- During development you can set `ELECTRON_START_URL=http://localhost:5173` (or the dev server port) and run `npm run electron:dev` to load the local app.

Build steps (recommended on Windows machine):

1. Install dependencies:

   npm install

2. Build the web app:

   npm run build

3. Build the Windows installer:

   npm run electron:build

Notes:
- `electron-builder` will produce outputs in `dist_electron/`.
- Add application icons into `build/` if you want a custom .ico for Windows (place `icon.ico` inside `build/`).
