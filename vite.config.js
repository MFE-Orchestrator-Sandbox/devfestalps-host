import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app',
      remotes: {
        'devfestalpsdesignsystem': 'https://console.mfe-orchestrator.dev/api/serve/mfe/files/6921d18b21cd774797933d99/DEV/devfestalps-design-system/assets/remoteEntry.js'
      },
      shared: ['react','react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
