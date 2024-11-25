import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/register': {
        target: 'https://petapp-backend-abg7.onrender.com', // Your backend URL
        changeOrigin: true,
        secure: true,
      },
      '/login': {
        target: 'https://petapp-backend-abg7.onrender.com',
        changeOrigin: true,
        secure: true,
      },
      '/pets': {
        target: 'https://petapp-backend-abg7.onrender.com', // Add pets route
        changeOrigin: true,
        secure: true,
      },
    },
  },
});

