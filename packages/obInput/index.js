/*
 * @Author: linbin
 * @Date: 2021-10-27 16:45:57
 * @LastEditTime: 2021-10-27 18:01:58
 * @LastEditors: linbin
 * @Description:
 * @FilePath: /ob-components/packages/obInput/index.js
 */
// 导入的组件必须在vue文件中声明 name, 否则组件无法注册使用
import ObInput from './ObInput'

// 为组件提供 install 安装方法，供按需引入
ObInput.install = (Vue) => {
    Vue.component(ObInput.name, ObInput)
}

// 默认导出组件
export default ObInput
