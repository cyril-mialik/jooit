import type { Component } from '@/types/components'
import { defineAsyncComponent } from 'vue'

export const TOP = 'top'
export const BOTTOM = 'bottom'
export const PAGE = 'page'
export const NAVIGATION = 'navigation'
export const EMPTY = 'empty'

export enum PAGE_COMPONENTS {
  TOP,
  BOTTOM,
  EMPTY
}

export const TOP_COMPONENTS: Component[] = [
  {
    name: NAVIGATION,
    self: defineAsyncComponent(() => import('@/components/page-components/page-navigation.vue'))
  },
  {
    name: EMPTY,
    self: defineAsyncComponent(() => import('@/components/page-components/page-navigation.vue'))
  }
]

