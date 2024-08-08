<template>
  <main class="main">
    <Header />
    <RouterView />
  </main>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  width: 100dvw;
  height: 100dvh;
  background-color: #e5e5f7;
  background-image: 
    repeating-radial-gradient(circle at 18px 18px, #0000000a 10px, #00000040 40px, #00000010 160px),
    repeating-linear-gradient(#{$base-color}20, #{$base-color}80);
}
</style>
