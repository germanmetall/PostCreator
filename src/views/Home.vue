<template>
  <div
    class="flex flex-col md:flex-row gap-6 w-11/12 md:w-auto mx-auto md:mx-20 md:mx-auto my-10 max-w-screen-lg text-slate-50 font-medium text-xl"
  >
    <div
      class="w-full min-w-0 md:min-w-[600px] min-h-40 border-2 border-[#b0b0b0] flex flex-col gap-6 px-6 py-4 rounded-md backdrop-blur-md custom-bg"
    >
      <div class="flex flex-col w-fit overflow-auto gap-2">
        Images
        <div
          v-if="store.textToImage?.length"
          class="flex flex-row gap-[inherit] overflow-auto w-fit"
        >
          <img
            v-for="img in store.textToImage"
            :src="img"
            class="w-56 pb-2 aspect-square object-cover rounded"
          />
        </div>
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

    <div class="w-full h-fit border-2 border-[#b0b0b0] px-6 py-4 rounded-md backdrop-blur-md custom-bg">
      <!--
      <div>
        Preview for
        <select class="px-4 py-2 text-[#101010] rounded-md mx-4">
          <option v-for="option in ['Telegram', 'Instagram', 'Facebook', 'LinkedIn', 'Twitter']">{{ option }}</option>
        </select>
      </div>
      <br />
      -->
      <div
        class="cursor-pointer"
        @click="openPreview"
      >Open telegram preview in new page</div>
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
import { usePreviewsStore } from '@/stores/previews';
import { useRouter } from 'vue-router';

const text = ref(),
  images = ref(),
  options = ref(),
  store = useModalsStore(),
  router = useRouter()

const openPreview = () => {
  // for Telegram
  usePreviewsStore().setPreview('telegram', {
    channelIcon: store.textToImage[0],
    channelName: 'TEST_NAME',
    images: store.textToImage,
    text: `TEST_TEXT<br/><br/>It also supports <i>this</i> <b>kind</b> <code>of things</code>.`,
    postId: 'TEST_POST_ID',
    channelId: 'TEST_CHANNEL_NAME',
    dateTime: new Date().toLocaleString()
  })
  router.push('preview/telegram')
}

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
  let resp = await useAPI().textToImage(text.value);
  let body = await resp.json();
  console.log(resp, body);
  useModalsStore().fillImagesToChooseFrom(body.data.map(el => el.url))
  store.open('TextToImg')
}

const imagesToText = async () => { }

const post = async () => { }
</script>