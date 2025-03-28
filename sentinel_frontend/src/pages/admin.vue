<script setup lang="ts">
import { reactive } from 'vue';
import { SidebarMenu } from 'vue-sidebar-menu'
import type {SidebarItem} from 'vue-sidebar-menu'

const menuData = reactive<SidebarItem[]>([
    {
        title: 'Home',
    },
    {
        title: 'About',
    },
    {
        title: 'Admin',
        child: [
            {
                title: '测试'
            }
        ]
    }
])

</script>

<template>
    <div class="container">
        <sidebar-menu :menu="menuData" theme="white-theme" hideToggle></sidebar-menu>
    </div>
</template>

<style scoped>
.container {
    height: 100vh;
    margin: 0;
    padding: 0;
}
</style>