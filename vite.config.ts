import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // The app ships large, lazy-loaded question-bank chunks. They are data-heavy by
    // design and gzip well; keep warnings for anything materially larger than today's
    // biggest catalog bundle while avoiding noise on every production build.
    chunkSizeWarningLimit: 16000,
  },
})
