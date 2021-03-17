<template>
  <div class="w-full">
    <div v-if="isLoading">
      Loading ...
    </div>
    <div v-else-if="error">
      {{ error.message }}
      <button class="btn m-3 text-sm mt-8" @click="getContacts">
        Try again
      </button>
    </div>
    <div v-else>
      <PinnedContacts :team="pinnedContacts" />
      <Table :contacts="unpinnedContacts" />
    </div>
  </div>
</template>
<script lang="ts">
import { watch, ref } from 'vue'

import axios, { AxiosResponse } from 'axios'
import { queryString } from '~/logics'
import Contact from '~/interfaces/contact'

export default {
  setup() {
    const isLoading = ref(false)
    const error = ref()
    const pinnedContacts = ref()
    const unpinnedContacts = ref()
    let filteredContacts: Contact[] = []
    let response: AxiosResponse<Contact[]> | any = []
    const getContacts = async() => {
      isLoading.value = true
      try {
        response = await axios.get<Contact[]>(
          'http://localhost:3000/contacts',
        )
        watch(
          queryString,
          () => {
            filteredContacts = response.data.filter((contact: Contact) => {
              if (queryString.value) {
                return contact.first_name.toLowerCase().includes(queryString.value.toLowerCase())
                  || contact.last_name.toLowerCase().includes(queryString.value.toLowerCase())
                  || contact.email.toLowerCase().includes(queryString.value.toLowerCase())
                  || contact.job_title.toLowerCase().includes(queryString.value.toLowerCase())
                  || contact.area.toLowerCase().includes(queryString.value.toLowerCase())
              }
              else { return true }
            },
            )
            pinnedContacts.value = []
            unpinnedContacts.value = []
            filteredContacts.map(contact => contact.is_pinned ? pinnedContacts.value.push(contact) : unpinnedContacts.value.push(contact))
          },
          { immediate: true },
        )
        error.value = null
      }
      catch (e) {
        error.value = e
      }
      finally {
        isLoading.value = false
      }
    }
    getContacts()
    // expose to template
    return {
      isLoading, error, pinnedContacts, unpinnedContacts, getContacts,
    }
  },
}
</script>
<route lang="yaml">
meta:
  layout: home
</route>
