import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config from './webpack.dev.config'

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(9000, 'localhost', (err, result) => {
  if (err) {
    return console.log(err)
  }

  console.log('Listening at http://localhost:9000/')
});