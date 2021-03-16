<template>
  <main class="flex text-center text-gray-700 dark:text-gray-200">
    <!--<router-view /> -->
    <div class="h-full">
      <SideBar />
    </div>
    <div class="w-full">
      <SearchBar />
      <PinnedContacts />
      <Table />
    </div>
    <!--<Footer />
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      [Home Layout]
    </div>-->
  </main>
</template>