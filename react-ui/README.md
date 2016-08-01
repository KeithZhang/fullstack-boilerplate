供写纯react ui组件的使用的模板，
类似ant-design,react-bootstrap等

暴露出一个包含多个组件index.js,
一个完整的index.css和各个单个css如：Button.css, Table.css

样式也同样支持less和sass 

### 该项目最后发布到npm的目录和文件：  
        
    ├── README.md  
    ├── package.json  
    ├── dist  
    │   └── react-ui.less
    │   └── react-ui.js  
    ├── src  
    │   ├── component  
    │   │   ├── QmIcon  
    │   │   │   ├── index.js  
    │   │   │   └── style  
    │   │   │       └── index.less  
    │   │   └── style  
    │   │       └── theme.less  
    │   └── index.js  


### 使用方法
`npm install react-ui`

##### 组件引用
`import {Icon} from 'react-ui'`

##### 如果你想单独引用某个组件也可以
`import {Icon} from 'react-ui/src/compnent/Icon’`

##### 样式引用
`import 'react-ui/src/style/theme.less’`

### 源码项目结构及各个文件作用：

    ├── README.md                               说明文档  
    ├── .babelrc                                配置babel的文件  
    ├── .gitignore                              配置git不需要提交的文件或者目录  
    ├── dist                                    执行npm run dist，webpack会把src中入口文件index.js打包到该目录下  
    │   └── react-ui.js                         向外面暴露一个统一的js，供别人使用  
    ├── example                                 本地例子项目为了本地开发方便  
    │   ├── app.js                              可以引用src下面自己开发的组件  
    │   └── index.js                            例子项目的入口文件，主要作用是把react组件渲染到页面上  
    ├── index.html
    ├── package.json
    ├── server.js                               本地server，为了本地开发写的简易的server  
    ├── src                                     源码目录  
    │   ├── component                           组件目录  
    │   │   ├── Icon                          组件名称  
    │   │   │   ├── index.js                    组件入口文件  
    │   │   │   └── style                       组件的样式目录  
    │   │   │       └── index.less              组件的样式入口文件  
    │   │   └── style                           公用的样式目录  
    │   │       └── theme.less
    │   └── index.js                            源码js入口文件，目的是把所有的组件统一打包出去  
    ├── webpack.dev.config.js                   本地开发npm run start会执行该文件  
    └── webpack.production.config.js            发布的时候npm run dist 会执行该文件  
