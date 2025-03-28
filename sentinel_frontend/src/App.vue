<script setup lang="ts">
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<style scoped>
.fade-enter-active {
  transition: opacity .5s ease-in;
}

.fade-leave-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
