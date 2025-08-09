import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

process.env.BROWSER = "chromium";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/_variables.scss";
          @import "./src/styles/_base.scss";
        `
      }
    }
  },
  base: '/FrontendMentor/url-shortening-api-master/dist/',
  server: {
    open: true
  }
})
