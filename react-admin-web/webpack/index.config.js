const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      pages: path.resolve(__dirname, './src/pages')
    },
    extensions: ['*', '.tsx', '.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              //这里需要在less的配置规则里打开javascriptEnabled
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            limit: '1024'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|mp4)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'test',
      favicon: path.resolve(__dirname, '../public', 'favicon.ico'),
      template: path.resolve(__dirname, 'index.ejs')
    }),
    new AntDesignThemePlugin({
      antDir: path.join(__dirname, '../node_modules/antd'), //antd包位置
      stylesDir: path.join(__dirname, '../src/styles/theme'), //指定皮肤文件夹
      varFile: path.join(__dirname, '../src/styles/theme/variables.less'), //自己设置默认的主题色
      indexFileName: path.resolve(__dirname, 'index.ejs'),
      mainLessFile: path.join(__dirname, '../src/styles/theme/index.less'),
      // outputFilePath: path.join (__dirname, '../dist/theme/color.less'), //输出到什么地方
      themeVariables: [
        //这里写要改变的主题变量
        '@primary-color',
        '@btn-primary-bg',
        '@text-color',
        '@table-header-bg',
        '@border-color-base'
      ],
      generateOnce: false
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};
