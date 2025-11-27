import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/ygo": {
        target: "https://db.ygoprodeck.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ygo/, "")
      }
    }
  }
})

