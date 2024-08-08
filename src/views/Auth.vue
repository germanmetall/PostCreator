<template>
  <div
    class="flex flex-col gap-y-4 w-96 h-fit m-auto backdrop-blur-md px-8 py-6 bg-[#00004040] border-2 border-[#e0e0e0] rounded-tr-3xl rounded-bl-3xl text-white"
  >
    <label
      class="flex flex-col gap-y-1 capitalize text-xl"
      v-for="item in ['name', 'password']"
    >
      {{ item }}
      <input
        class="border w-full px-2 py-1 opacity-75 duration-300 hover:opacity-100 focus:opacity-100 active:opacity-100 rounded text-black"
        :type="item == 'password' ? 'password' : 'text'"
        :value="creds[item]"
        @input="creds[item] = $event.target.value"
      >
    </label>
    <div class="flex flex-row gap-x-4 justify-center">
      <div
        class="btn border"
        @click="reg"
      >Register</div>
      <div
        class="btn border"
        @click="login"
      >Log in</div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { reactive, ref } from 'vue';

const store = useAuthStore(),
  creds = reactive({ name: '', password: '' })

const reg = () => {
  store.register(creds)
}

const login = () => {
  store.login(creds)
}
</script>