<template>
  <tr class="h-18 border-gray-50 border-b-1">
    <td class="w-2/4 pl-6">
      <p class="text-gray-900">
        {{ contact.first_name + " " + contact.last_name }}
      </p>
      <p class="text-gray-500">
        {{ contact.email }}
      </p>
    </td>
    <td class="w-1/3 pl-6">
      <p class="text-gray-900">
        {{ contact.job_title }}
      </p>
      <p class="text-gray-500">
        {{ contact.area }}
      </p>
    </td>
    <td class="pl-6">
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
