const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const rootAssetPath = path.join(__dirname, 'public/assets')

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'public/application.html')
  }),
  new webpack.ProvidePlugin({
    _: ['lodash']
  })
]

const jsxLoader = {
  test: /\.js(x)?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader'
  }
}

const resolve = {
  modules: ['node_modules', 'src'],
  extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.sass'],
  alias: {}
}

const cssLoader = {
  test: /\.(s)?css$/,
  exclude: /node_modules/,
  use: ['css-loader', 'postcss-loader', 'sass-loader']
}

const fileLoader = {
  test: /\.(wav|webm|mp3|woff|woff2|ttf|eot|svg|png|jpe?g|gif|ico)(\?.*)?$/i,
  use: {
    loader: 'file-loader',
    options: {
      name: '[path][name].[hash].[ext]',
      context: rootAssetPath
    }
  }
}

module.exports = {
  mode: 'development',
  entry: {
    polyfills: path.join(__dirname, 'src/utils/polyfills.js'),
    application: path.join(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve,
  module: {
    rules: [jsxLoader, cssLoader, fileLoader]
  },
  devtool: 'eval-source-map',
  plugins,
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    hot: true,
    compress: true,
    historyApiFallback: true
  }
}
