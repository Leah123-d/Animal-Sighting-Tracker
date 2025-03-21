import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  test: {
    environment: 'jsdom',  // Ensure this is set
  },
  plugins: [
    react(),
    tailwindcss(),
    ],
    server: {
      //setting up a proxy to direct all API calls to nodejs API
      proxy: {
        '/species': {
        target: 'http://localhost:3000',
        changeOrigin: true
        },
        '/individuals': {
        target: 'http://localhost:3000',
        changeOrigin: true
        },
        '/sightings': {
        target: 'http://localhost:3000',
        changeOrigin: true
        },
      },
    },  
      
  })
