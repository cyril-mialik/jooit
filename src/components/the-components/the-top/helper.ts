import type { HelperModule, Component } from './types'
import { computed } from 'vue'
import { MENU, NAVIGATION, EMPTY, TOP_COMPONENTS } from './constants'

export const useHelper = (): HelperModule => {
  const components = computed(() => TOP_COMPONENTS.map((component) => {
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
    components.value.find(({ name }) => name === NAVIGATION) ?? null
  )

  const fallbackComponent = computed(() =>
    components.value.find(({ name }) => name === EMPTY) as Component
  )

  const isComponent = computed(() => Boolean(desiredComponent.value))

  return {
    components,
    desiredComponent,
    fallbackComponent,
    isComponent
  }
}

