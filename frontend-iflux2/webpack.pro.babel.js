/**
 * @flow
 */
import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  // 要打包的入口文件
  entry: './apps/Root.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[chunkhash].js',
    chunkFilename: '[id]-bundle-[chunkhash].js'
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'web_modules')],
    alias: {
      fetch: 'whatwg-fetch/fetch.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: 'babel-loader?cacheDirectory'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: false
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dist/vendor-manifest.json')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new HtmlWebpackPlugin({
      dev: false,
      favicon: './favicon.ico',
      filename: 'index.html',
      template: './index.ejs'
    })
  ]
}