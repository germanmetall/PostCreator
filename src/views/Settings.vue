<template>
  <div class="flex flex-col lg:flex-row gap-6 mx-20 lg:mx-auto my-10 max-w-screen-lg text-slate-50">
    <div
      class="w-full min-w-0 lg:min-w-[600px] min-h-40 border-2 border-[#b0b0b0] flex flex-col gap-6 px-6 py-4 rounded-md backdrop-blur-md custom-bg"
    >
      <span class="text-3xl text-center font-medium">Settings</span>

      <span class="text-xl text-center">Socials to connect</span>

      <div class="flex flex-col gap-2 text-lg font-light capitalize">
        <div
          class="flex flex-row gap-4 items-center px-4 py-2 rounded-md duration-300 border cursor-pointer hover-lighten-base-color hover:border-transparent"
          v-for="social in store.optionsToConnect"
          :class="{ 'border-green-400': social.connected, 'border-red-400': !social.connected }"
          @click="store.toggleSocial(social.type);"
        >
          <component
            v-if="social.icon"
            :is="social.icon"
            :alt="`${social.type} icon`"
            class="w-8 h-8 object-contain"
          ></component>
          {{ social.type }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings';
import { onMounted } from 'vue';

const store = useSettingsStore()

onMounted(() => store.getConnectedSocials())
</script>