<template>
  <div class="w-77 h-36.5 bg-white">
    <div class="flex justify-around h-23 items-center">
      <div class="text-left">
        <div class="text-gray-900 flex">
          {{ personal.first_name + " " + personal.last_name }}
          <span v-if="personal.is_active" class="pl-3"><img src="assets/active.svg"></span>
          <span v-else-if="!personal.is_active" class="pl-3"><img src="assets/busy.svg"></span>
        </div>
        <p class="text-gray-500">
          {{ personal.job_title }}
        </p>
      </div>
      <div>
        <img src="assets/avatar.png" alt="">
      </div>
    </div>
    <div class="flex justify-around h-12.5 border-t-1">
      <div class="flex w-1/2 border-r-1 justify-center items-center h-full">
        <img src="assets/email.svg" width="16" class="h-3">
        <span class="ml-3.5 text-gray-700">Email</span>
      </div>
      <div class="flex w-1/2  justify-center items-center h-full">
        <img src="assets/phone.svg" width="16" class="h-3">
        <span class="ml-3.5 text-gray-700">Call</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    personal: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
