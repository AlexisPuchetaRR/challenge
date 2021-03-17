import { Ref } from 'vue'
import { useStorage } from '@vueuse/core'

export const colorSchema = useStorage('color-schema', 'auto') as Ref<'auto' | 'dark' | 'light'>
export const query = useStorage('query', '') as Ref<string>
export const showSideBar = useStorage('show-side-bar', true) as Ref<Boolean>
