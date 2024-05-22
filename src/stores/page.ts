import type { UseScrollOptions, UseScrollReturn } from '@vueuse/core'
import type { ComputedRef } from 'vue'

import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'
import { useScroll } from '@vueuse/core'

interface PageOptions {
  scrollElement: HTMLElement | null
  scrollOptions: UseScrollOptions | null
}

interface PageModule {
  name: ComputedRef<string>

  scrollData: UseScrollReturn

  init: (options: PageOptions) => void
}

export const usePageStore = defineStore('page', (): PageModule => {
  const route = useRoute()

  const scrollElement = ref<HTMLElement | null>(null)
  const scrollOptions = ref<UseScrollOptions | undefined>(undefined)
  const scrollData: UseScrollReturn = useScroll(scrollElement.value, scrollOptions.value)

  const name = computed<string>(() => (route?.name as string) ?? 'page')

  const init = (options: PageOptions) => {
    scrollElement.value = options.scrollElement
    scrollOptions.value = options.scrollOptions
  }

  return {
    name,
    scrollData,
    init,
  }
})

