/*
 * @Author: linbin
 * @Date: 2021-10-27 16:41:03
 * @LastEditTime: 2021-10-28 17:57:50
 * @LastEditors: linbin
 * @Description:
 * @FilePath: /linbin/ob-components/packages/index.js
 */
import 'element-plus/dist/index.css'
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = (Vue) => {
    // 判断是否可以安装
    if (install.installed) return
    // 遍历注册全局组件
    const componentsContext = require.context('./', true, /index\.js$/)
    componentsContext.keys().forEach((component) => {
        const componentConfig = componentsContext(component)
        /**
         * 兼容 import export 和 require module.export 两种规范
         */
        const ctrl = componentConfig.default || componentConfig
        Vue.component(ctrl.name, ctrl)
    })
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
}
