import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/register': {
        target: 'https://petapp-backend-abg7.onrender.com', // Your backend URL
        changeOrigin: true, // Ensures the origin of the request is updated
        secure: true, // Set to true if you're using https on the backend
      },
      '/login': {
        target: 'https://petapp-backend-abg7.onrender.com',
        changeOrigin: true,
        secure: true,
      },
      // Add other API routes if needed
    },
  },
})

