<template>
  <div class="w-full">
    All contacts
    <table class="w-full bg-white text-cool-gray-900 text-left px-5">
      <tr class="font-medium text-xs leading-4 h-10 text-gray-500 bg-gray-50 rounded-lg">
        <th class="w-2/4 pl-6">
          Name
        </th>
        <th class="w-1/3 pl-6">
          Title
        </th>
        <th class="pl-6">
          Status
        </th>
      </tr>
      <tr v-for="personal in team" :key="personal.id">
        <TableRow :personal="personal" />
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const team = [
      {
        id: 1,
        first_name: 'Andy',
        last_name: 'Toke',
        email: 'atoke0@bizjournals.com',
        job_title: 'VP Product Management',
        area: 'Human Resources',
        is_active: true,
      }, {
        id: 2,
        first_name: 'Wain',
        last_name: 'Valeri',
        email: 'wvaleri1@dion.ne.jp',
        job_title: 'Director of Sales',
        area: 'Human Resources',
        is_active: false,
      },
    ]

    // expose to template
    return {
      team,
    }
  },
}
</script>
