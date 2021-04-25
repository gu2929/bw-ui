const webpack = require('webpack')
module.exports = {
  publicPath: '/', // 静态地址
  // baseUrl: '/', // 部署应用时的根路径
  assetsDir: 'assets',
  outputDir: process.env.outputDir, // 输出文件
  indexPath: 'index.html',
  productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
  pages: {
    index: {
      entry: 'src/main.ts',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  css: {
    extract: false, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps
    loaderOptions: {}, // css预设器配置项
    requireModuleExtension: true// 启用 CSS modules for all css / pre-processor files.
  },
  devServer: { // 环境配置
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    open: true // 配置自动启动浏览器
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        moment: 'moment'
      })
    ]
  }
}
