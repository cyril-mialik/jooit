import type { Module, State } from '@/types/top'
import type { Component } from '@/types/components'

import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

import { NAVIGATION, EMPTY } from '@/constants/components'
import { MENU } from '@/constants/menu'
import { COMPONENTS } from '@/constants/top'

const state = reactive<State>({
  name: EMPTY
})

export const useTopStore = defineStore('top', (): Module => {
  const name = computed(() => state.name || EMPTY)

  const components = computed(() => COMPONENTS.map((component) => {
    let result = { ...component }

    if (component.name === NAVIGATION) {
      result = {
        ...result,
        props: {
          list: MENU
        }
      }
    }

    if (component.name === EMPTY) {
      result = {
        ...result,
        props: {
          list: MENU
        }
      }
    }

    return result
  }))

  const desiredComponent = computed(() =>
    components.value.find((component) => 
      component.name === name.value && component.name !== EMPTY
    ) ?? null
  )

  const fallbackComponent = computed(() =>
    components.value.find(({ name }) => name === EMPTY) as Component
  )

  const isComponent = computed(() => Boolean(desiredComponent.value))

  return {
    state,
    components,
    desiredComponent,
    fallbackComponent,
    isComponent
  }
})

