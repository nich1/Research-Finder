import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Use polling to detect changes in environments where file watching may fail
      usePolling: true,
    },
    hmr: {
      // This should force hot updates, you can modify the port if needed
      protocol: 'ws',
      host: 'localhost',
    },
  },
})
