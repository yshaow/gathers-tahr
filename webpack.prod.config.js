const pkg = require('./package.json')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./config/prod.env')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./config/webpack.base.config')

module.exports = merge(baseConfig, {
  entry: {
    // 将第三方依赖 单独打包
    vendor: Object.keys(pkg.dependencies)
  },

  output: {
    path: `${__dirname}/build`,
    filename: 'js/[name].[hash:8].js',
    publicPath: config.PUBLIC_PATH
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|gif|jpg|jpeg|bmp|ico)$/i,
        include: /images/,
        loader: ['url-loader?limit=5000&name=images/[name].[hash:8].[ext]',
          {
            loader: 'image-webpack-loader', // 压缩图片以及参数配置
            query: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      }
    ]
  },

  plugins: [
    // webpack内置的banner-plugin
    new webpack.BannerPlugin('Copyright by yshaow@126.com'),

    // 定义生产环境
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: config.NODE_ENV,
        PUBLIC_PATH: JSON.stringify(config.PUBLIC_PATH)
      }
    }),

    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurrenceOrderPlugin(),

    // 压缩js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    // 分离css和js
    new ExtractTextPlugin('css/[name].[hash:8].css'),

    // 提供公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/[name].[hash:8].js'
    }),

    // 删除以前的文件
    new CleanWebpackPlugin(['build'], {
      root: __dirname,
      verbose: true,
      dry: false
    })
  ]
})
