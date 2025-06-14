import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
  "theme_color": "#191b6b",
  "background_color": "#030014",
  "icons": [
  {
    "src": "/logo-192.png",
    "sizes": "192x192",
    "type": "image/png"
  },
  {
    "src": "/logo-512.png",
    "sizes": "512x512",
    "type": "image/png"
  }
],
  "orientation": "any",
  "display": "standalone",
  "dir": "auto",
  "lang": "en-GB",
  "name": "Movies Night",
  "short_name": "MoviesNight",
  "start_url": "/"
}

,
    }),
  ],
})