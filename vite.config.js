import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'


export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname,'src')
    }
  },
  plugins: [
    react(),
    WindiCSS()
  ]
})
