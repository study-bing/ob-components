/*
 * @Author: linbin
 * @Date: 2021-10-27 16:45:57
 * @LastEditTime: 2021-10-28 18:08:42
 * @LastEditors: linbin
 * @Description:
 * @FilePath: /linbin/ob-components/packages/ob-test/index.js
 */
// 导入的组件必须在vue文件中声明 name, 否则组件无法注册使用
import ObTest from './ObTest'

// 为组件提供 install 安装方法，供按需引入
ObTest.install = (Vue) => {
    Vue.component(ObTest.name, ObTest)
}

// 默认导出组件
export default ObTest
