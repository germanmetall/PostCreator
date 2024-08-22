<template>
  <div class="flex flex-col lg:flex-row gap-6 mx-20 lg:mx-auto my-10 max-w-screen-lg text-slate-50 font-medium text-xl">
    <div
      class="w-full min-w-0 lg:min-w-[600px] min-h-40 border-2 border-[#b0b0b0] flex flex-col gap-6 px-6 py-4 rounded-md backdrop-blur-md custom-bg"
    >
      <div class="flex flex-row w-fit overflow-auto gap-2">
        Images
        <template v-if="store.textToImage?.length">
          <img
            v-for="img in store.textToImage"
            :src="img"
            class="w-56 pb-2 aspect-square object-cover rounded"
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
          class="w-full h-20 border-2 border-[#b0b0b0] px-2 py-1 custom-bg duration-300 rounded-md text-slate-50 font-light hover-lighten-base-color"
          v-model="text"
        ></textarea>
      </div>

      <div
        class="btn text-slate-50 border custom-border hover-lighten-base-color"
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
      <br/>
      <span class="font-light">[DOES NOT WORK YET]</span>
    </div>

    <Teleport to="body">
      <TextToImg />
    </Teleport>
  </div>
</template>

<script setup>
import { useAPI } from '@/composables/API';
import { ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import TextToImg from "@/components/modals/TextToImg.vue"
import { useModalsStore } from '@/stores/modals';

const text = ref(),
  images = ref(),
  options = ref(),
  store = useModalsStore()

const addImage = async () => {
  useToast().open({
    message: 'Е, не клікай',
    type: 'info'
  })
}

const generate = async () => {
  if (!text.value && !images.value) return useToast().open({
    message: 'Е, нічо немає',
    type: 'error'
  });
  else if (!text.value && images.value) return useToast().open({
    message: 'Е, цього поки не буде, тільки text-to-image',
    type: 'error'
  });

  textToImages()
}

const textToImages = async () => {
  console.log(text.value)
  store.open('TextToImg')
  return;
  let resp = await useAPI().textToImage(text.value);
  let body = await resp.json();
  console.log(resp, body);
}

const imagesToText = async () => { }

const post = async () => { }
</script>