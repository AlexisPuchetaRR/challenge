<template>
  <div
    :class="[
      !isShowSideBar &&
        'hidden md:block',
    ]"
  >
    <div class="flex flex-col min-w-64 bg-indigo-700 h-screen">
      <router-link to="/">
        <div class="h-10 flex flex-row items-center pl-2 my-5 hover:bg-indigo-800 ">
          <img src="assets/logo.svg" class="ml-5">
          <img src="assets/brand.svg" class="ml-2.5">
        </div>
      </router-link>
      <div class="h-10 flex flex-row items-center mt-3.5 mx-2 hover:bg-indigo-800 cursor-not-allowed">
        <img src="assets/dashboard.svg" class="ml-5">
        <span class="pl-4">Dashboard</span>
      </div>
      <router-link to="/teams">
        <div class="h-10 flex flex-row items-center mt-3.5 mx-2 hover:bg-indigo-800">
          <img src="assets/team.svg" class="ml-5">
          <span class="pl-4">Team</span>
        </div>
      </router-link>
      <div class="h-10 flex flex-row items-center mt-3.5 mx-2 hover:bg-indigo-800 cursor-not-allowed">
        <img src="assets/projects.svg" class="ml-5">
        <span class="pl-4">Projects</span>
      </div>
      <div class="h-10 flex flex-row items-center mt-3.5 mx-2 hover:bg-indigo-800 cursor-not-allowed">
        <img src="assets/calendar.svg" class="ml-5">
        <span class="pl-4">Calendar</span>
      </div>
      <div class="h-10 flex flex-row items-center mt-3.5 mx-2 hover:bg-indigo-800 cursor-not-allowed">
        <img src="assets/documents.svg" class="ml-5">
        <span class="pl-4">Documents</span>
      </div>
      <div class="h-10 flex flex-row items-center mt-3.5 mx-2 hover:bg-indigo-800 cursor-not-allowed">
        <img src="assets/reports.svg" class="ml-5">
        <span class="pl-4">Reports</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { isShowSideBar } from '~/logics'
export default {
  setup() {
    return { isShowSideBar }
  },
}
</script>
