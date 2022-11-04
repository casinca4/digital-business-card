import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/casinca4/digital-business-card',
  plugins: [react()]
})

// server.hmr.overlay = false;