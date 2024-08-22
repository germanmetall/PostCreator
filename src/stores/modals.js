import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalsStore = defineStore('modals', () => {
  const openedId = ref(null),
    textToImage = ref([])

  function open(id = null) {
    openedId.value = id;
  }

  function addImage(url) {
    textToImage.value.push(url)
  }

  return { openedId, textToImage, open, addImage }
})