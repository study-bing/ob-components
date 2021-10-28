<template>
    <div>
        <el-button @click="updateVal">updateVal</el-button>
    </div>
</template>
<script>
export default {
    name: 'obTest',
    props: {
        modelValue: {
            type: [String, Number], //String | Number
            default: '',
        },
        typeValue: {
            type: [String, Number], //String | Number
            default: '',
        },
    },
    setup(props, context) {
        // 输入更新值
        const updateVal = () => {
            console.log('aaa')
            context.emit('update:typeValue', 222)

            context.emit('update:modelValue', 111)
            console.log('bbb')
            console.log('props.typeValue', props.typeValue)
            console.log('props.modelValue', props.modelValue)
        }
        return {
            updateVal,
        }
    },
}
</script>
