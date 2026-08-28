import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // served from https://lzhcoroda.github.io/MC/
  base: '/MC/',
})
