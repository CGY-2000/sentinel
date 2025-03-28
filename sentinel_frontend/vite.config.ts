import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(() => {
  console.log("__dirname: ", __dirname)
  console.log("@components/: ", resolve(__dirname, 'src/components'))
  return {
    plugins: [vue()],
    server: {
      proxy: {
        '/api': {
          target: "http://192.168.1.53:8000",
          changeOrigin: true,
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      }
    }
  }
})
