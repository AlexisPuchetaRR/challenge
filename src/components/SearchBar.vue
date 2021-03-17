<template>
  <div>
    <div class="w-full flex bg-white h-16 flex-shrink items-center">
      <div class="mx-4 xs:inline-block md:hidden">
        <button class="w-4" @click="toggleSideBar">
          <img src="assets/menu.svg" class="w-full">
        </button>
      </div>
      <img src="assets/search.svg" class="ml-8 w-4">
      <input class="w-full pl-3.5 my-6 leading-5 text-sm font-normal text-gray-500 outline-none" placeholder="Search" @keyup="handleInputChange($event.target.value)">
      <img src="assets/bell.svg" class="ml-8 w-4">
      <img src="assets/avatar.png" class="ml-8 w-8 h-8 mr-4">
    </div>
  </div>
</template>

<script lang="ts">
import { isShowSideBar, queryString } from '~/logics'

export default {

  setup() {
    const toggleSideBar = () => {
      isShowSideBar.value = !isShowSideBar.value
      console.log(isShowSideBar.value)
    }
    const handleInputChange = (value: string) => {
      queryString.value = value
    }
    return { toggleSideBar, handleInputChange }
  },
}
</script>
