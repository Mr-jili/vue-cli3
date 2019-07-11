  ## 代理另一种方法
  > vue.config.js不用配置proxy
  > 直接在.env.test / .env.pre-release / .env.production 中配置如下：
  ```
  // 以测试为例 其它环境如同
  NODE_ENV = 'test'
  VUE_APP_API_URL='http://172.22.0.62:8082/'
  VUE_APP_CURRENTMODE= 'test'
  ```
  直接在API中process.env.VUE_APP_API_URL就能获取
  
  ## 文件作用
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


## vue.config.js配置
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
<table border="1">
    <thead>
      <tr>文件</tr>
      <tr>主要作用</tr>
    </thead>
    <tbody>
      <tr>
        <td>baseUrl</td>
        <td>从vue-cli3.3起已弃用，请使用publicPath</td>
      </tr>
      <tr>
        <td>publicPath</td>
        <td>部署应用包时的基本URL。如：<span style="color:red;">process.env.NODE_ENV === 'production' ? '/online/' : './'</span></td>
      </tr>
      <tr>
        <td>outputDir</td>
        <td>打包后生成的文件夹</td>
      </tr>
      <tr>
        <td>assetsDir</td>
        <td>放置生成的静态资源的目录</td>
      </tr>
      <tr>
        <td>lintOnSave</td>
        <td>代码校验，安装@vue/cli-plugin-eslint有效</td>
      </tr>
      <tr>
        <td>runtimeCompiler</td>
        <td>是否使用包含运行时编译器的Vue构建版本。设置为true就可以使用template</td>
      </tr>
      <tr>
        <td>productionSourceMap</td>
        <td>生产环境是否生成sourceMap文件。<br />
          sourceMap：针对打包后代码进行处理，就是一个信息文件，里面存储着位置信息。也就是说，转换后的代码的每一个位置，所对应的转换前的位置。有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码。</td>
      </tr>
      <tr>
        <td>chainWebpack</td>
        <td>是一个函数，会接收一个基于webapck-chain实例，对内部的webpack配置进行更细粒度的修改。如：<br /><span style="color:red;">chainWebpack: config
            => {<br />
            config.module.rule("images").use("url-loader")<br />
            .tap(options =>merge(options, {<br />
            limit: xxx<br />
            }));<br />
            }</span>//允许我们更细粒度的控制 webpack 的内部配置,例如：<br />以上操作我们可以成功修改 webpack 中 module 项里配置 rules 规则为图片下的 url-loader
          值，将其 limit 限制改为 xxxM</td>
      </tr>
      <tr>
        <td>configureWebpack</td>
        <td>针对开发阶段、上线后配置的不同之处做出处理。比如去除代码中的console.log、关闭错误报告。如：<br /><span></span>
          configureWebpack: config => {<br />
          if (process.env.NODE_ENV === 'production') {<br />
          // 为生产环境修改配置...<br />
                config.plugins.push(<br />
                    new BundleAnalyzerPlugin() //webpack打包性能分析插件 <br />      
                );<br />
          } else {<br />
          // 为开发环境修改配置...<br />
          }<br />
          }<br />
          </span></td>
      </tr>
      <tr>
        <td>css.extract</td>
        <td>是否将组件中的CSS提取至一个独立的CSS文件中（而不是动态注入到javascript中的inline代码）。</td>
      </tr>
      <tr>
        <td>css.sourceMap</td>
        <td>是否为CSS开启sourceMap。</td>
      </tr>
      <tr>
        <td>css.loaderOptions</td>
        <td>向CSS相关的loader传递选项。可配置loader,支持loader有：css-loader、less-loader、scss-loader...</td>
      </tr>
      <tr>
        <td>css.modules</td>
        <td>可以将*.(less/scss/stylus)文件视为CSS Modules模块。</td>
      </tr>
      <tr>
        <td>devServer</td>
        <td>代理配置参数，所有webpack-dev-server的选项都支持。hot(热加载)、host(ip)、port(端口)、https(https协议)、open(自动打开浏览器)</td>
      </tr>
      <tr>
        <td>devServer.proxy</td>
        <td>代理配置。前端应用和后端API服务器没有运行在同一主机上，你需要在开发环境下将请求代理到API服务器。与vue-cli2.x代理配置类似。如：<span style="color:red;">
            proxy: {<br/>
            '/api': { //本地<br/>
            target: 'http://192.168.102.13:8080/',<br/>
            // 如果要代理 websockets<br/>
            ws: true,<br/>
            changeOrigin: true<br/>
            },<br/>
            '/test': { //测试<br/>
            target: 'http://172.22.0.58:8082/'<br/>
            },<br/>
            '/pre-release': { //预发布<br/>
            target: 'http://xxx.com/'<br/>
            },<br/>
            '/production': { //正式<br/>
            target: 'http://xxx.com/'<br/>
            }<br/>
            }<br/>
          </span></td>
      </tr>
    </tbody>
  </table>
  
## 打包环境
#### 环境配置注意事项
> 1.环境名应该与环境文件统一 (根目录创建的.env.xxx需要与各环境变量相同。)

> 2.环境文件放置根目录下

> 3.除了baseUrl和NODE_ENV其他环境使用VUE_APP开头  


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
