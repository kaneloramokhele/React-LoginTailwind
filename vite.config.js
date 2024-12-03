// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: './postcss.config.js',  // Make sure this points to your PostCSS config
  },
  plugins: [react()],
})
