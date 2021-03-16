<template>
  <div>
    <div class="w-full flex bg-white h-16 flex-shrink items-center">
      <div class="mx-4 xs:inline-block md:hidden">
        <button class="w-4" @click="showSideBar">
          <img src="assets/menu.svg" class="w-full">
        </button>
      </div>
      <img src="assets/search.svg" class="ml-8 w-4">
      <input class="w-full pl-3.5 my-6 leading-5 text-sm font-normal text-gray-500 outline-none" placeholder="Search">
      <img src="assets/bell.svg" class="ml-8 w-4">
      <img src="assets/avatar.png" class="ml-8 w-8 h-8 mr-4">
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    show: {
      type: Boolean,
      default() {
      },
    },
  },
  setup() {
    const showSideBar = () => {
      show = true
      console.log(show)
    }
    return { showSideBar }
  },
}
</script>
