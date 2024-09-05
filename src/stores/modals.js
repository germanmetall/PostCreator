import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalsStore = defineStore('modals', () => {
  const openedId = ref(null),
    textToImage = ref([
      'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
    ]),
    imagesToChooseFrom = ref([])

  function open(id = null) {
    openedId.value = id;
  }

  function addImage(url) {
    textToImage.value.push(url)
  }

  function fillImagesToChooseFrom(images) {
    console.log(images)
    imagesToChooseFrom.value = images;
  }

  return { openedId, textToImage, imagesToChooseFrom, open, addImage, fillImagesToChooseFrom }
})