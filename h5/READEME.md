#### 使用 react 很久了，目前也有[create-react-app](https://github.com/facebook/create-react-app)这种脚手架项目，但总是和自己选择的技术搭配不太匹配，索性把自己用到的技术搭配方案所需要的全部配置都一一写一遍，保证项目每个模块都是我知晓的，都是我需要的

#### 目前主要模块版本是`react 16+`, `typescript 3+`, `webpack 4`, `babel 7`，后续会使用 react hook 重构

##### _基础环境_

确保已经安装了[nodejs](https://nodejs.org),安装完成后使用 npm 或者[yarn](https://yarnpkg.com/en/docs/install)初始化项目：
`npm init`或者`yarn init`

#### _基础依赖_

1. 生产环境依赖
   - react
   - react-dom
2. 开发环境依赖
   - @babel/core
   - @babel/preset-env
   - @babel/preset-react
   - @babel/preset-typescript
   - webpack
   - webpack-cli
   - webpack-dev-server
   - babel-loader
   - less-loader
   - style-loader
   - css-loader
   - html-webpack-plugin
   - typescript
   - @types/react、@types/react-dom

#### 配置

1. **babel**

   - @babel/core、@babel/preset-env、@babel/preset-react、@babel/preset-typescript
   - 这里有很多种配置方式,如.babelrc、.babelrc.js、babel.config.js，我们选择直接在根目录下使用 babel.config.js，既有编程能力，又支持各种场景（单仓库，配置覆盖等），官方就使用的这种配置

2. **typescript**
   - typescript
   - babel 7 开始只要使用@babel/preset-typescript 就支持直接转换 typescript
   - 根目录新建 tsconfig.json
   - 注意配置 baseUrl,为了拆分 ui、biz、kit 模块，拆分出来的模块都要包含 package.json 文件代表单独的模块
   - 如果 ui、biz、kit 不在跟目录，要在 tscofnig.json 中配置 paths 属性，这样方便 ts 解析到，并能直接引用模块，如：`import { Header } from 'ui'`
3. **webpack**
   - webpack、webpack-cli、webpack-dev-server、babel-loader、less-loader、style-loader、css-loader、html-webpack-plugin
   - 根目录新建 webpack.config.js
   - tsconfig.json 只是为了类型检测不报错，如上所说的 ui、biz、kit 模块，真正能被直接引用到还需要配置
   ```javascript
   resolve: {
     alias: {
       ui: path.resolve(__dirname, 'ui');
     }
   }
   ```
