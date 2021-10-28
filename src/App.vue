<template>
    <div id="app">
        <div>
            <el-tag>int 整数</el-tag>
            <ob-input v-model="inputValue" typeValue="int" minValue="0" maxValue="100" />
            <el-tag>cen 中文、数字、英文</el-tag>
            <ob-input v-model="inputValue2" typeValue="cen" />
            <el-tag>noText 字母,数字,下划线</el-tag>
            <ob-input v-model="inputValue3" typeValue="noText" />
            <el-tag>number 数字</el-tag>
            <ob-input v-model="inputValue4" typeValue="number" />
            <el-tag>noWord 不能输入汉字</el-tag>
            <ob-input v-model="inputValue5" typeValue="noWord" />
            <el-tag>en 字符数字</el-tag>
            <ob-input v-model="inputValue6" typeValue="en" />
            <el-tag>ce 字符中文</el-tag>
            <ob-input v-model="inputValue7" typeValue="ce" />
            <el-tag>onlyE 英文下划线</el-tag>
            <ob-input v-model="inputValue8" typeValue="onlyE" />
            <el-button @click="showValue">el-button</el-button>
            <ob-test v-model="modelValue" v-model:typeValue="typeValue" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'app',
    components: {},
    setup() {
        let inputValue = ref('')
        let inputValue2 = ref('')
        let inputValue3 = ref('')
        let inputValue4 = ref('')
        let inputValue5 = ref('')
        let inputValue6 = ref('')
        let inputValue7 = ref('')
        let inputValue8 = ref('')
        let modelValue = ref('9')
        let typeValue = ref('10')

        function showValue() {
            // console.log('inputValue', inputValue.value)
            // console.log('inputValue2', inputValue2.value)
            // console.log('inputValue3', inputValue3.value)
            // console.log('inputValue4', inputValue4.value)
            // console.log('inputValue5', inputValue5.value)
            // console.log('inputValue6', inputValue6.value)
            // console.log('inputValue7', inputValue7.value)
            // console.log('inputValue8', inputValue8.value)
            console.log('modelValue', modelValue.value)
            console.log('typeValue', typeValue.value)
            modelValue.value = 777
            typeValue.value = 666
            console.log('modelValue', modelValue.value)
            console.log('typeValue', typeValue.value)
        }
        return {
            showValue,
            inputValue,
            inputValue2,
            inputValue3,
            inputValue4,
            inputValue5,
            inputValue6,
            inputValue7,
            inputValue8,
            modelValue,
            typeValue,
        }
    },
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
