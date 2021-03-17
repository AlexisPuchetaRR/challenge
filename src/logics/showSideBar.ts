import { computed } from 'vue'
import { showSideBar } from './store'

export const isShowSideBar = computed({
  get() {
    return showSideBar.value
  },
  set(value: Boolean) {
    showSideBar.value = value
  },
})
