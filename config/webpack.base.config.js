const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname.substring(0, __dirname.lastIndexOf('config')), 'test/main.js')
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
    alias: {
      '@': path.resolve(__dirname.substring(0, __dirname.lastIndexOf('config')), 'app/')
    }
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
        include: /fonts/,
        loader: 'url-loader?limit=5000&name=fonts/[name].[hash:8].[ext]'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname.substring(0, __dirname.lastIndexOf('config')), 'test/template/index.html')
    })
  ]
}
