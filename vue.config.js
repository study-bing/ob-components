// vue.config.js 文件配置如下
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = {
    // pages: {
    //     index: {
    //         entry: 'packages/index.js',
    //         template: 'public/index.html',
    //         filename: 'index.html',
    //     },
    // },
    configureWebpack: {
        devtool: 'source-map',
    },
    // 强制内联CSS
    css: {
        extract: false,
    },
    // 扩展 webpack 配置，使 components 加入编译
    chainWebpack: (config) => {
        config.module
            .rule('js')
            .include.add('/packages')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap((options) => {
                // 修改它的选项...
                return options
            })
    },
    // configureWebpack: (config) => {
    //     config.plugins.push(
    //         Components({
    //             resolvers: [ElementPlusResolver()],
    //         })
    //     )
    // },
}
