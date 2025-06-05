import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Importe o módulo 'path' do Node.js

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Cria o alias '@' para a pasta src
    },
  },
});
