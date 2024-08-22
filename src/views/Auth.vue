<template>
  <div
    class="flex flex-col gap-y-4 w-96 h-fit m-auto backdrop-blur-md px-8 py-6 border-2 rounded-lg custom-bg text-slate-50 duration-300"
    :class="{ 'border-[#b0b0b0]': started == false, 'border-yellow-400': started == true && success != true, 'border-green-400': success == true, 'border-red-400': error == true }"
  >
    <label
      class="flex flex-col gap-y-1 capitalize text-xl"
      v-for="item in ['name', 'password']"
    >
      {{ item }}
      <input
        class="border w-full px-2 py-1 custom-bg duration-300 rounded text-slate-50 font-light hover-lighten-base-color"
        :type="item == 'password' ? 'password' : 'text'"
        :value="creds[item]"
        @input="creds[item] = $event.target.value"
      >
    </label>
    <div class="flex flex-row gap-x-4 justify-center">
      <div
        class="btn text-slate-50 border custom-border hover-lighten-base-color"
        @click="reg"
      >Register</div>
      <div
        class="btn text-slate-50 border custom-border hover-lighten-base-color"
        @click="login"
      >Log in</div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toast-notification';

const store = useAuthStore(),
  router = useRouter(),
  creds = reactive({ name: '', password: '' }),
  started = ref(false),
  success = ref(false),
  error = ref(false)

const reset = () => {
  started.value = true;
  success.value = false;
  error.value = false;

  useToast().open({
    message: 'Wait...',
    type: 'info'
  })
}

const reg = async () => {
  if (creds.name.length == 0 || creds.password.length == 0) return useToast().open({
    message: 'Name or password is missing',
    type: 'error'
  })

  reset();
  let res

  try {
    res = await store.register(creds)
    useToast().open({
      message: 'Register successful!<br/>Redirecting to home page.'
    })
    success.value = true;
    setTimeout(() => router.push('/'), 1000)
  }
  catch (e) {
    useToast().open({
      message: e,
      type: 'error'
    })
    started.value = false;
    error.value = true;
  }
}

const login = async () => {
  if (creds.name.length == 0 || creds.password.length == 0) return useToast().open({
    message: 'Name or password is missing',
    type: 'error'
  })

  reset();
  let res

  try {
    res = await store.login(creds)
    success.value = true;
    useToast().open({
      message: 'Login successful!<br/>Redirecting to home page.'
    })
    setTimeout(() => router.push('/'), 1000)
  }
  catch (e) {
    useToast().open({
      message: e,
      type: 'error'
    })
    started.value = false;
    error.value = true;
  }
}
</script>