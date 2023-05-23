module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  // 开启代理服务器 (方式一)
  // devServer: {
  //   proxy: 'http://localhost:3000'
  // }
  // 开启代理服务器 (方式二)
  devServer: {
    proxy: {
      '/pig': {
        target: 'http://localhost:3000',
        pathRewrite:{'^/pig':''},
        ws: true, // 用于支持 websocket
        changeOrigin: true // 用于控制请求头中host的值
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
      '/xiaom': {
        target: 'http://localhost:3000',
        pathRewrite:{'^/pig':''},
        ws: true, // 用于支持 websocket
        changeOrigin: true // 用于控制请求头中host的值
      },
    }
  }
 }
