<template>
  <div class="fade-in">
    <TelegramPreview />
  </div>
</template>

<script setup>
import TelegramPreview from '@/components/previews/telegram.vue';
</script>

<style lang="scss" scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
    scale: .5;
    height: 0;
    max-height: 0;
    max-width: 0;
  }

  1% {
    height: auto;
    max-height: unset;
    max-width: unset;
  }

  100% {
    height: auto;
    max-height: unset;
    max-width: unset;
    opacity: 1;
    scale: 1;
  }
}

.fade-in {
  height: 0;
  max-height: 0;
  max-width: 0;
  scale: 0.75;
  opacity: 0;
  animation-name: fade-in;
  animation-duration: .3s;
  animation-timing-function: ease-in-out;
  animation-delay: .3s;
  animation-fill-mode: forwards;
}
</style>