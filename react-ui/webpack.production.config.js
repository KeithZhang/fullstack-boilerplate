var path = require('path');
var webpack = require('webpack');
var packageJson = require('./package.json')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [ 
    './src/index.js'
  ],
  output: {
    filename: packageJson.name + '.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    library: packageJson.name,
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("[name].css"),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?cacheDirectory'
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css!less')
      }
    ]
  }
};
