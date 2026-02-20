import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      appType: 'spa',
      plugins: [
        react(),
        VitePWA({
          registerType: 'autoUpdate',
          manifest: {
            id: '/',
            name: 'Quick Transfer',
            short_name: 'QuickTransfer',
            start_url: '/',
            display: 'standalone',
            theme_color: '#2563eb',
            background_color: '#ffffff',
            icons: [
              { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
              { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' }
            ],
            screenshots: [
              { src: '/icons/screenshots/screenshot-wide.png', sizes: '1280x720', type: 'image/png', form_factor: 'wide' },
              { src: '/icons/screenshots/screenshot-mobile.png', sizes: '412x915', type: 'image/png' }
            ],
            display_override: ['window-controls-overlay', 'standalone']
          }
        })
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
