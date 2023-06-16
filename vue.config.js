const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    host:'localhost',
    proxy: {
      '/api': {
        //target: 'http://nps.togis.top:7001/', // 后台接口域名
        target: 'https://nps.togis.top:7001/', // 统一使用公网地址，保证一致性 'http://nps.togis.top:7001/'
        changeOrigin: true, // 是否跨
      }
    },
  }
})
