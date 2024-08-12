<template>
  <div class="flex flex-col lg:flex-row gap-6 mx-20 lg:mx-auto my-10 max-w-screen-lg text-slate-50 font-medium text-xl">
    <div
      class="w-full min-w-0 lg:min-w-[600px] min-h-40 border-2 border-[#b0b0b0] flex flex-col gap-6 px-6 py-4 rounded-md backdrop-blur-md custom-bg"
    >
      <div class="flex flex-col gap-2">
        Images
        <template v-if="images">
          <img
            v-for="img in images"
            :src="img.src"
            class="w-56 h-56 object-contain"
          />
        </template>
        <template v-else>
          <div
            class="w-56 h-56 border-2 border-[#b0b0b0] rounded-xl custom-bg flex justify-center items-center text-6xl cursor-pointer"
            @click="addImage"
          >+</div>
        </template>
      </div>

      <div class="flex flex-col gap-2">
        Text
        <textarea
          class="w-full h-20 border-2 border-[#b0b0b0] px-2 py-1 custom-bg duration-300 rounded-md text-slate-50 hover-lighten-base-color"
          v-model="text"
        ></textarea>
      </div>

      <div
        class="btn text-slate-50 custom-border hover-lighten-base-color"
        @click="generate"
      >
        Generate!
      </div>
    </div>

    <div class="w-full h-40 border-2 border-[#b0b0b0] px-6 py-4 rounded-md backdrop-blur-md custom-bg">
      <div class="">
        Preview for
        <select class="px-4 py-2 text-[#101010] rounded-md mx-4">
          <option v-for="option in ['Telegram', 'Instagram', 'Facebook', 'LinkedIn', 'Twitter']">{{ option }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toast-notification';

const text = ref(),
  images = ref(),
  options = ref()

const addImage = async () => {
  useToast().open({
    message: 'Е, не клікай',
    type: 'info'
  })
}

const generate = async () => {
  useToast().open({
    message: 'Е, не клікай',
    type: 'info'
  })
}

const textToImages = async () => { }

const imagesToText = async () => { }

const post = async () => { }
</script>