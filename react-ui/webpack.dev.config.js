var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [ 
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/only-dev-server',
    './example/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: 'http://localhost:9000/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?cacheDirectory']
      }
    ]
  }
};
