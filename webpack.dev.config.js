const webpack = require('webpack')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const config = require('./config/dev.env')
const merge = require('webpack-merge')
const baseConfig = require('./config/webpack.base.config')

module.exports = merge(baseConfig, {
  output: {
    filename: 'bundle.js',
    publicPath: config.PUBLIC_PATH
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.(png|gif|jpg|jpeg|bmp|ico)$/i,
        include: /images/,
        loader: 'url-loader?limit=5000'// 限制大小5k
      }
    ]
  },

  plugins: [
    // 热加载插件
    new webpack.HotModuleReplacementPlugin(),

    // 打开浏览器
    new OpenBrowserPlugin({url: 'http://localhost:8082'}),

    // 向js中暴露当前环境可在业务js代码中使用（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: config.NODE_ENV,
        PUBLIC_PATH: JSON.stringify(config.PUBLIC_PATH)
      }
    })
  ],

  devServer: {
    historyApiFallback: true, // 不跳转在开封单页面应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    inline: true, // 实时刷新
    hot: true, // 使用热加载插件HotModuleReplacementPlugin
    port: 8082,
    proxy: { // 代理
      '/api/': {
        target: 'http://192.168.1.10:3001/',
        secure: false,
        pathRewrite: {
          '^/api/': ''
        }
      }
    }
  }
})
