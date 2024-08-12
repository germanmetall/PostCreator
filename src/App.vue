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
  //background-color: darken(#232E37, 5%);

  --s: 123px;
  /* control the size*/
  --c1: #1d1d1d;
  --c2: #00000a;
  --c3: #3c3c3c;

  background:
    repeating-conic-gradient(from 30deg, #0000 0 120deg, var(--c3) 0 180deg) calc(.5*var(--s)) calc(.5*var(--s)*0.577),
    repeating-conic-gradient(from 30deg, var(--c1) 0 60deg, var(--c2) 0 120deg, var(--c3) 0 180deg);
  background-size: var(--s) calc(var(--s)*0.577);
}
</style>
