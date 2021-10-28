/*
 * @Author: linbin
 * @Date: 2021-10-28 14:48:15
 * @LastEditTime: 2021-10-28 14:50:09
 * @LastEditors: linbin
 * @Description: 工具库
 * @FilePath: /ob-components/packages/uitils/utils.js
 */
export const isEmpty = function(data) {
    if (typeof data === 'undefined' || data === '' || data === null) {
        return true
    } else {
        return false
    }
}
