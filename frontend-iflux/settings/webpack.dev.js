module.exports = {
  entry: {
    hello: './apps/hello/index.js'
  },
  output: {
    path: './build',
    filename: 'bundle-[name].js'
  },
  resolve: {
    modulesDirectoires: ['', 'web_modules', 'node_modules'] 
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?stage=1'}
    ]
  }
};
