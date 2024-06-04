import type { Module, State } from '@/types/top'
import type { Component } from '@/types/components'

import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

import { EMPTY } from '@/constants/components/common'
import { NAVIGATION } from '@/constants/components/top'
import { NAVIGATION as MENU_NAVIGATION } from '@/constants/components/navigation'
import { COMPONENTS } from '@/constants/components/top'

const state = reactive<State>({
  name: EMPTY
})

export const useTopStore = defineStore('top', (): Module => {
  const name = computed(() => state.name || EMPTY)

  const components = computed(() => COMPONENTS.map((component) => {
    let result = { ...component }

    if ([NAVIGATION, EMPTY].includes(component.name)) {
      result = {
        ...result,
        props: {
          list: MENU_NAVIGATION
        }
      }
    }

    return result
  }))

  const component = computed(() => {
    const desiredComponent = components.value.find((component) => 
      component.name === name.value
    )

    if (desiredComponent) {
      return desiredComponent
    }
    
    return components.value.find((component) =>
      component.name === EMPTY
    ) as Component
  })

  return {
    state,
    components,
    component
  }
})

