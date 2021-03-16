<template>
  <div class="h-18 border-gray-50 border-b-1">
    <td class="w-2/4 pl-6">
      <p>
        {{ personal.first_name + " " + personal.last_name }}
      </p>
      <p>
        {{ personal.email }}
      </p>
    </td>
    <td class="w-1/3 pl-6">
      <p>
        {{ personal.job_title }}
      </p>
      <p>
        {{ personal.area }}
      </p>
    </td>
    <td class="pl-6">
      <div v-if="personal.is_active">
        Active
      </div>
      <div v-else>
        Busy
      </div>
    </td>
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
