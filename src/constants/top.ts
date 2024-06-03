import type { Component } from '@/types/components'
import { defineAsyncComponent } from 'vue'
import { NAVIGATION, EMPTY } from './components'

export const PageNavigation = defineAsyncComponent(() =>
  import('@/components/page-components/page-navigation.vue')
)

export const NAVIGATION_COMPONENT: Component = {
  name: NAVIGATION,
  self: PageNavigation
}

export const EMPTY_COMPONENT: Component = {
  name: EMPTY,
  self: PageNavigation
}

export const COMPONENTS: Component[] = [
  NAVIGATION_COMPONENT,
  EMPTY_COMPONENT
]

