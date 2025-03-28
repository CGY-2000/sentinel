<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps({
    msg: Number
})

const data = ref(0)

onMounted(() => {
    data.value = props.msg
})

const emits = defineEmits<{
    (e: 'change', data: number)
}>()

const chagneCb = () => {
    data.value += 1
    emits('change', data.value)
}
</script>

<template>
    <div>
        <h1>测试</h1>
        <span>msg: {{ props.msg }}</span>
        <br>
        <span>data: {{ data }}</span>
        <br>
        <button @click="chagneCb">改变</button>
    </div>
</template>

<style scoped>

</style>