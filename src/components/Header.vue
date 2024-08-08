<template>
  <div class="flex flex-row justify-between items-center w-full h-20 py-3 px-8 text-white header-bg backdrop-blur-md">
    <div class="text-3xl font-medium">Post Creator</div>
    <div class="flex flex-row gap-x-4 justify-center items-end text-xl">
      by
      <img
        class="h-9"
        src="@/assets/images/logo-expanded.png"
        alt="logo-expanded"
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  &-bg {
    background-image: linear-gradient(to bottom, #00004040, transparent 90%);
  }
}
</style>