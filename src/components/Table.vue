<template>
  <div class="text-left mx-2">
    <span class="text-gray-900 pl-6.5">
      All contacts
    </span>
    <table class="w-full bg-white text-cool-gray-900 text-left px-5 ">
      <tr class="font-medium text-xs leading-4 h-10 text-gray-500">
        <th class="w-2/4 pl-6">
          Name
        </th>
        <th class="w-1/3 pl-6 xs:hidden md:inline-block">
          Title
        </th>
        <th class="pl-6 xs:hidden md:inline-block">
          Status
        </th>
      </tr>
      <TableRow v-for="contact in contacts" :key="contact.id" class="border-b-1 border-gray-200" :contact="contact" />
    </table>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
}
</script>
