var webpack = require('webpack');
var entry = require('./webpack.dev').entry;

module.exports = {
  entry: entry,
  output: {
    path: './dist',
    filename: 'bundle-[name]-[chunkhash].js'
  },
  module: {
    loaders: [
     {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?stage=1'}
    ]
  },
  resolve: {
    modulesDirectories: ['', 'web_modules', 'node_modules']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
