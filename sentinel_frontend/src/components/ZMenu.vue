<script setup lang="ts">
import { computed } from 'vue';
import ZMenuItem from './ZMenuItem.vue';

type menuPosition = 'left' | 'right'
type Menu = {
    path: string
    name: string
    icon?: string
    children?: Menu[]
}
const props = defineProps<{
    position?: menuPosition,
    data: Menu[]
}>()

const menuStyle = computed<string>(() => props.position === 'right' ? 'right: 0;' : 'left: 0;')

</script>

<template>
    <div class="z-menu" :style="menuStyle">
        <z-menu-item v-for="it in props.data">{{ it.name }}</z-menu-item>
    </div>
</template>

<style scoped>
.z-menu {
    position: fixed;

    display: flex;
    flex-direction: column;

    background-color: lightblue;

    padding: 10px;

    overflow-y: auto;

    min-width: 100px;

    height: 100%;

    /* 主轴居中 */
    justify-content: center;
    
    /* 无法被选中文字 */
    user-select: none;
}
</style>