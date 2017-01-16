
###***确保已经安装了[nodejs](https://nodejs.org), 安装完成后使用npm或者[yarn](https://yarnpkg.com/en/docs/install)初始化项目:***

```npm init 或者 yarn init```

---
###***安转基础依赖：***

1. 一些常用的依赖最好安装到全局，如：babel-cli、babel-core、flow-bin
 ```使用npm install -g 或者 yarn global add安装```</br>

2. 生产环境依赖
 - react
 - react-dom
 - [react-router](https://github.com/ReactTraining/react-router)：*路由*
 - [iflux2](https://github.com/QianmiOpen/iflux2)
 - [fetch](https://github.com/github/fetch)：*发送请求的库*
```npm install 或者 yarn add```
3. 开发环境依赖:
 - babel-loader：*webpack使用*
 - babel-preset-env
 - babel-preset-react
 - babel-jest
 - [webpack-dev-server](https://github.com/webpack/webpack-dev-server)：*开发环境使用的一个小型express server*
 - [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin)：*webpack打包生成html页的插件*
 - [webpack](https://webpack.github.io)：*打包管理库*
 - [babel-plugin-transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)：*代码中使用decorators要使用babel的插件，官方目前插件还不支持，使用第三方的*
 - [babel-plugin-transform-class-properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-class-properties)：*解析class中的properties，原来class中定义方法或者变量不可以写init = () => {}, 只能写成init(){}*
 - [babel-plugin-transform-runtime](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-runtime)：*比babel-polyfill更灵活*
 
 ```使用npm install --save-dev 或者 yarn add --dev安装```

 ---

###***配置babel***
在根目录下新建.babelrc文件
```
  {
    "presets": [
      "env",
      "react"
    ],
    "plugins": [
      "transform-decorators-legacy",
      "transform-class-properties",
      "transform-runtime"
    ]
  }
```
 ---
 
###***配置flow***
在根目录下新建.flowconfig文件:
 ``` 
 [ignore]
 .*/__tests__/.*
 [include]
 [libs]
 [options]
 # 允许使用@providesModule moduleName
 module.system=haste
 ``` 

---

###***配置jest***
在同级目录下创建__tests__

---

###***配置webpack***
在根目录下新建webpack.config.js，如果想使用es6去写配置，那么把文件名改为webpack.config.babel.js






