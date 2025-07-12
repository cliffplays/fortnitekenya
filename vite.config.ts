import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.100.254', // 👈 Your actual IP here
    port: 5173
  }
})
