import { computed } from 'vue'
import { query } from './store'
export const queryString = computed({
  get() {
    return query.value
  },
  set(value: string) {
    query.value = value
  },
})
