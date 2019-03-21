# vuedemo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development   开发环境
```
yarn serve
```

### Compiles and minifies for production  生产环境
```
yarn build:production 
```

### Run your tests       测试环境     
```
yarn build:test
```

### Run your pre       预发布环境     
```
yarn build:pre-environment
```

### Lints and fixes files
```
yn run lint
```

### Run your unit tests
```
yarn run test:unit
```

文件	主要作用
dist	在执行”npm run build”的时候所打包的文件夹。
public/index.html	首页模板
src	源码目录。包括assets(模块资源)、components(公共组件)、App.vue(页面入口文件)、main.js(入口文件，加载组件)、router.js(路由配置)、store.js(状态管理)...
.env.test	测试环境配置文件。根据package.json中的配置项进行打包，这里是执行“npm run build:test”，详见5.5
.env.pre-release	预发布环境配置文件。根据package.json中的配置项进行打包，这里是执行“npm run build:pre-pelesae”，详见5.5
.env.production	正式环境配置文件。根据package.json中的配置项进行打包，这里是执行“npm run build:production”，详见5.5
vue.config.js	webpack配置文件，可用于修改默认的配置文件。 详见5.4
.eslintrc.js	ES-lint校验
.gitignore	git忽略上传的文件格式
babel.config.js	babel语法编译
package.json	项目基本信息，在”scripts“配置运行环境
postcss.config.js	css预处理器（此处默认启用autoprefixer）


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
