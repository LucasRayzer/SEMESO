import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      utils: '/src/utils/',
      services: '/src/services/',
      constants: '/src/constants/',
      components: '/src/components/'
    }
  }
});
