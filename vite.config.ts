import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const url = require('url')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // Web服务API 代理
    proxy: {
      '^/_AMapService/': {
        target: 'https://restapi.amap.com/',
        changeOrigin: true,
        configure: proxy => {
          proxy.on('proxyReq', function(proxyReq, req, res, options) {
            const parsed = url.parse(proxyReq.path, true)
            parsed.query['jscode'] = 'eb5d6408738ad135b112313761657512'
            const updatedPath = url.format({
              pathname: parsed.pathname,
              query: parsed.query
            })
            proxyReq.path = updatedPath
            console.log({ updatedPath })
          })
        }
      }
    }
    // host: '0.0.0.0'
  }
})
