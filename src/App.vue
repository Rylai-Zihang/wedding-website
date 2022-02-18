<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Loading from './pages/Loading.vue'
import Home from './pages/Home.vue'
import { ref } from 'vue'

const showLoading = ref(true)
// TODO fix loading toggle logic
setTimeout(() => {
  showLoading.value = false
}, 3000)
</script>

<template>
  <Transition name="fade">
    <Loading v-show="showLoading" />
  </Transition>
  <Transition name="show">
    <Home v-show="!showLoading" />
  </Transition>
</template>

<style>
#app {
  /* font-family: 'Noto Sans SC'; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active,
.show-enter-active,
.show-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.show-enter-from,
.show-leave-to {
  opacity: 1;
}
</style>
