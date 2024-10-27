import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://blog-api-kj8x.onrender.com', // A URL da sua API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Reescreve o caminho removendo o "/api"
      },
    },
  },
})
