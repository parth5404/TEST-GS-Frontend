import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
//   define: {
//     'process.env': process.env
//   }
})