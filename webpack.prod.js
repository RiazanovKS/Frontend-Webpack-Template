const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name][hash].css'
  })
];

const cssLoader = {
  test: /\.(s)?css$/,
  use: [MiniCssExtractPlugin.loader]
};

module.exports = merge.smart(
  {
    mode: 'production',
    module: {
      rules: [cssLoader]
    },
    plugins,
    optimization: {
      minimizer: [new OptimizeCssAssetsPlugin(), new UglifyJsPlugin()]
    }
  },
  common
);
