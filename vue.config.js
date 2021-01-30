module.exports = {
  devServer: {
    /* 自动打开浏览器 */
    open: true,
    host: '0.0.0.0', // 局域网和本地访问
    port: 8888,
    https: false,
    hotOnly: false,
    /* 使用代理 */
    proxy: {
      '/api': {
        /* 目标代理服务器地址 */
        target: 'http://10.10.8.137:9999/',
        /* 允许跨域 */
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
