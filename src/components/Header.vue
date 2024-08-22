<template>
  <div
    class="flex flex-row justify-between items-center w-full h-20 py-3 px-8 text-slate-50 custom-bg backdrop-blur-md">
    <div class="text-3xl font-medium">Post Creator</div>

    <div
      class="flex flex-row gap-4 justify-between text-xl font-light"
      v-if="currentUser"
    >
      <div
        class="cursor-pointer"
        @click="store.logout"
      >
        <span class="font-medium">{{ currentUser.name }}</span>
        <span> (Logout)</span>
      </div>

      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/settings">Settings</RouterLink>
    </div>

    <div class="flex flex-row gap-x-4 justify-center items-end text-xl">
      by
      <img
        class="h-9"
        src="@/assets/images/illusion_logo_text+head.svg"
        alt="logo-expanded"
      >
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const store = useAuthStore(),
  currentUser = computed(() => store.currentUser)
</script>