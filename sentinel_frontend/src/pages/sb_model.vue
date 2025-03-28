<script setup lang="ts">
import sbCom from '@/components/sbCom.vue'
import { ref } from 'vue';
const data = ref(0)

const onChange = (e: number) => {
    console.log('send data: ', e)
    data.value = e
}

const writeData = ref('123123')

const inputOnChange = (e: Event) => {
    console.log(e.currentTarget.value)
    writeData.value = e.currentTarget.value
}
</script>

<template>
    <div>
        <h1>本来</h1>
        <button @click="data += 1">改变</button>
        <span>{{ data }}</span>
        <sbCom :msg="data" @change="onChange"></sbCom>
        <h3>{{ writeData }}</h3>
        <input type="text" :value="writeData" @input="inputOnChange">
        <br>
        <input type="text" v-model="writeData">
        <br>
        <button @click="console.log(writeData)">显示</button>
    </div>
</template>

<style scoped>

</style>