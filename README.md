  <table border="1">
    <thead>
      <tr>文件</tr>
      <tr>主要作用</tr>
    </thead>
    <tbody>
      <tr>
        <td>dist</td>
        <td>在執行“npm run build所打包的文件夾”</td>
      </tr>
      <tr>
        <td>public/index.html</td>
        <td>首页模板</td>
      </tr>
      <tr>
        <td>src</td>
        <td>源码目录。包括assets(模块资源)、components(公共组件)、App.vue(页面入口文件)、main.js(入口文件，加载组件)、router.js(路由配置)、store.js(状态管理)</td>
      </tr>
      <tr>
        <td>.env.test</td>
        <td>测试环境配置文件。根据package.json中的配置项进行打包，这里是执行“npm run build:test”</td>
      </tr>
      <tr>
        <td>.env.pre-release</td>
        <td>预发布环境配置文件。根据package.json中的配置项进行打包，这里是执行“npm run build:pre-pelesae”</td>
      </tr>
      <tr>
        <td>.env.production</td>
        <td>正式环境配置文件。根据package.json中的配置项进行打包，这里是执行“npm run build:production”</td>
      </tr>
      <tr>
        <td>vue.config.js</td>
        <td>webpack配置文件，可用于修改默认的配置文件。</td>
      </tr>
      <tr>
        <td>.eslintrc.js</td>
        <td>ES-lint校验</td>
      </tr>
      <tr>
        <td>.gitignore</td>
        <td>git忽略上传的文件格式</td>
      </tr>
      <tr>
        <td>babel.config.js</td>
        <td>babel语法编译</td>
      </tr>
      <tr>
        <td>package.json</td>
        <td>项目基本信息，在”scripts“配置运行环境</td>
      </tr>
      <tr>
        <td>postcss.config.js</td>
        <td>css预处理器（此处默认启用autoprefixer）</td>
      </tr>
    </tbody>
  </table>


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



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
