import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Silence deprecation warnings from external libraries like bootstrap
        silenceDeprecations: ['color-functions', 'global-builtin', 'import', 'if-function'],
      },
    },
  },
})