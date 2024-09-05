import { defineStore } from "pinia";
import { ref } from "vue";

export const usePreviewsStore = defineStore('previews', () => {
  const previewType = ref(),
    previewObject = ref()

  function setPreview(type_ = null, object_ = null) {
    previewType.value = type_;
    previewObject.value = object_;
  }

  return { previewType, previewObject, setPreview }
})