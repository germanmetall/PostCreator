<template>
  <div
    class="flex flex-col md:flex-row justify-between items-center w-full h-fit mg:h-20 py-3 px-4 md:px-8 text-slate-50 custom-bg backdrop-blur-md">
    <div class="text-3xl font-medium">Post Creator</div>

    <div
      class="flex flex-row flex-wrap gap-2 md:gap-4 justify-between items-center w-full md:w-auto text-xl font-light order-2 md:order-[unset] mt-4 md:mt-0"
      v-if="currentUser && $route.path !== '/auth'"
    >
      <div
        class="cursor-pointer"
        @click="logout"
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
import { RouterLink, useRouter } from 'vue-router';

const store = useAuthStore(),
  currentUser = computed(() => store.currentUser),
  router = useRouter()

const logout = async () => {
  let success = await store.logout();
  if (success) router.push('/auth');
}
</script>