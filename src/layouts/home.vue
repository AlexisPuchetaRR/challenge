<template>
  <main class="h-screen flex text-center text-gray-700 dark:text-gray-200 bg-gray-100">
    <div class="h-full">
      <SideBar />
    </div>
    <div class="w-full">
      <SearchBar />
      <router-view />
    </div>
  </main>
</template>
