# ob-components-ui

基于[Element Plus](https://element-plus.gitee.io/zh-CN/) 封装的一部分组件，逐渐完善中

## 安装引入

```yaml
安装：npm i -S ob-components-ui

引入：import obComponents from 'ob-components-ui'
```

## 组件
### 1.Input输入框
```html
仅数字输入：<ob-input v-model="inputValue" typeValue="number"  />
```
|  Attribute   |  Description  |  Type  |  Accepted Values	|  Default  |
|  ----  | ----  |  ----  | ----  | ----  |
| typeValue  | 类型 | string / number | int：整数，cen：中文、整数、英文，noText：字母,整数,下划线，number：数字，noWord：不能输入汉字，en：字符整数，ce：字符整数，onlyE：英文下划线 |-|
| minValue  | 最小值 | string / number | - |-|
| maxValue  | 最大值 | string / number | - |-|