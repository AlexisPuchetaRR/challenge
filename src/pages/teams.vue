<template>
  <div class="w-full">
    <PinnedContacts :team="team" />
    <Table />
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
        is_pinned: true,
      }, {
        id: 2,
        first_name: 'Wain',
        last_name: 'Valeri',
        email: 'wvaleri1@dion.ne.jp',
        job_title: 'Director of Sales',
        area: 'Human Resources',
        is_active: false,
        is_pinned: true,
      },
      {
        id: 3,
        first_name: 'Wain',
        last_name: 'Valeri',
        email: 'wvaleri1@dion.ne.jp',
        job_title: 'Director of Sales',
        area: 'Human Resources',
        is_active: false,
        is_pinned: true,
      },
      {
        id: 4,
        first_name: 'Wain',
        last_name: 'Valeri',
        email: 'wvaleri1@dion.ne.jp',
        job_title: 'Director of Sales',
        area: 'Human Resources',
        is_active: false,
        is_pinned: true,
      },
    ]

    return {
      team,
    }
  },
}
</script>

<route lang="yaml">
meta:
  layout: home
</route>
