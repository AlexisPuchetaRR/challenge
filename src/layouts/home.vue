<template>
  <main class="h-screen flex text-center text-gray-700 dark:text-gray-200 bg-gray-100">
    <div class="h-full">
      <SideBar :show="show" class="w-full xs:hidden md:block" />
    </div>
    <div class="w-full overflow-auto">
      <SearchBar />
      <router-view />
    </div>
  </main>
</template>
<script lang="ts">
export default {
  data() {
    return {
      show: true,
    }
  },
}
</script>
