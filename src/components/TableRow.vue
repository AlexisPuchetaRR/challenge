<template>
  <tr class="h-18 border-gray-50 border-b-1">
    <td class="pl-6 flex">
      <img src="assets/avatar.png" class="ml-6 mr-4">
      <div class="flex flex-col py-auto">
        <p class="text-gray-900">
          {{ contact.first_name + " " + contact.last_name }}
        </p>
        <p class="text-gray-500 break-normal  md:break-all">
          {{ contact.email }}
        </p>
      </div>
    </td>
    <td class="pl-6">
      <p class="text-gray-900 xs:hidden md:block">
        {{ contact.job_title }}
      </p>
      <p class="text-gray-500 xs:hidden md:block">
        {{ contact.area }}
      </p>
    </td>
    <td class="pl-6 xs:hidden md:block">
      <div v-if="contact.is_active">
        <img src="assets/active.svg" alt="Active">
      </div>
      <div v-else-if="contact.is_active === false">
        <img src="assets/busy.svg" alt="Busy">
      </div>
    </td>
  </tr>
</template>

<script lang="ts">

export default {
  props: {
    contact: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
