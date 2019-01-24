// vue.config.js
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/', //部署应用包时的基本 URL
  outputDir: 'dist', //当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  assetsDir: 'assets', //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  lintOnSave: false, // eslint-loader 是否在保存的时候检查   安装@vue/cli-plugin-eslint有效
  runtimeCompiler: true, //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  productionSourceMap: true,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // webpack-dev-server 相关配置
  devServer: { // 设置代理
    host: '0.0.0.0',
    port: 8085,
    https: false,
    open: true,
    hotOnly: false,
    proxy: {
      '/api': { //本地                                        
        target: 'xxx',
        // 如果要代理 websockets
        ws: true,
        changeOrigin: true
      },
      '/test': { //测试
        target: 'xxx'
      },
      '/pro': { //正式
        target: 'xxx'
      }
    }
  },
  pluginOptions: { // 第三方插件配置
    // ...
  }
}