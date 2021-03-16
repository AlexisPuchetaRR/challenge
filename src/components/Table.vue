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
      <div v-if="isLoading">
        Loading ...
      </div>
      <div v-else-if="error">
        {{ error.message }}
        <button class="btn m-3 text-sm mt-8" @click="getContacts">
          Try again
        </button>
      </div>
      <TableRow v-for="contact in data" v-else :key="contact.id" class="border-b-1 border-gray-200" :contact="contact" />
    </table>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import axios, { AxiosResponse } from 'axios'
import Contact from '~/interfaces/contact'
export default {
  setup() {
    const isLoading = ref(false)
    const error = ref()
    const data = ref()
    let response: AxiosResponse<Contact[]> | any = []
    const getContacts = async() => {
      isLoading.value = true
      try {
        response = await axios.get<Contact[]>(
          'http://localhost:3000/contacts',
        )
        data.value = response.data
        error.value = null
      }
      catch (e) {
        error.value = e
      }
      finally {
        isLoading.value = false
      }
    }
    response = getContacts()
    // expose to template
    return {
      isLoading, error, data, getContacts,
    }
  },
}

</script>
