<template>
  <div
    class="fixed left-0 top-0 w-[100dvw] h-[100dvh] flex justify-center items-center bg-[#00000080] cursor-pointer duration-300"
    :class="{ 'opacity-0 -z-10': store.openedId !== 'TextToImg', 'opacity-100 z-10': store.openedId == 'TextToImg' }"
    @click="store.open()"
  >
    <div
      class="min-w-96 w-[50dvw] max-w-[800px] flex flex-col gap-6 px-8 py-6 bg-[#f0f0f0] rounded-2xl cursor-auto duration-300"
      :class="{ 'scale-50': store.openedId !== 'TextToImg', 'scale-100': store.openedId == 'TextToImg' }"
      @click.stop
    >
      <span class="text-2xl text-center font-medium">Choose generated images</span>
      <div class="grid grid-cols-2 gap-2 justify-center items-center min-h-96 max-h-[50dvh] overflow-y-auto">
        <img
          v-for="(item, counter) in imagesMock"
          :src="item"
          @click="select(counter)"
          class="w-96 aspect-square object-cover border-8 border-transparent rounded-lg duration-300 cursor-pointer"
          :class="{ 'custom-border': selectedIndexes.includes(counter) }"
        />
      </div>
      <div
        class="btn mx-auto"
        :class="{ '!cursor-not-allowed': !selectedIndexes?.length, 'hover-lighten-base-color': selectedIndexes.length }"
        @click="add"
      >Add</div>
    </div>
  </div>
</template>

<script setup>
import { useModalsStore } from '@/stores/modals';
import { ref } from 'vue';
import { useToast } from 'vue-toast-notification';

const selectedIndexes = ref([]),
  store = useModalsStore(),
  imagesMock = ref([
    'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg',
    'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630'
  ])

const select = (index) => {
  if (selectedIndexes.value.includes(index)) selectedIndexes.value = selectedIndexes.value.filter(el => el !== index)
  else selectedIndexes.value.push(index);
}

const add = () => {
  if (!selectedIndexes.value?.length) useToast().open({
    type: 'warning',
    message: 'No images selected'
  })

  else {
    store.textToImage = []
    selectedIndexes.value.forEach(el => {
      store.addImage(imagesMock.value[el])
      console.log(imagesMock.value[el])
    })
    console.log(store.textToImage)
    store.open();
  }
}
</script>