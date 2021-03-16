<template>
  <div class="mx-4 text-left py-3 mr-8 text-gray-900">
    Pinned Contacts
    <div class="flex flex-row flex-wrap justify-between py-2.5 ml-6 mr-6">
      <PinnedContact v-for="personal in team" :key="personal.id" :personal="personal" class="my-6" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    team: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
