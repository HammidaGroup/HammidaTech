import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: [
      'nakita-unthundering-calmingly.ngrok-free.dev'
    ]
    // historyApiFallback: true // <-- isko hata dein
  },
})
