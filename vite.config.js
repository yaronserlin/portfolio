import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // השתקת האזהרות המיושנות שמגיעות מספריות חיצוניות כמו בוטסטראפ
        silenceDeprecations: ['color-functions', 'global-builtin', 'import', 'mixed-decls'],
      },
    },
  },
})