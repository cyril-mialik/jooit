import type { ComputedRef, DeepReadonly } from 'vue'

import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { usePageStore } from './page'

import { TOP } from '../constants/components'


interface State {
  component: string | null
}

const state = reactive<State>({
  component: null
})

interface TopModule {
  state: DeepReadonly<typeof state>

  component: ComputedRef<string | null>
  getComponent: (name: string) => string | null
  setComponent: (name: string) => void

  initTop: () => void
}

export const useTopStore = defineStore('top', (): TopModule => {
  const {
    initComponents,
    getComponents,
    setComponents
  } = usePageStore()

  const component = computed<string | null>(() => state.component)

  function initTop() {
    initComponents(TOP)
  }

  function getComponent(name: string): string | null {
    return getComponents(TOP, name)
  }

  function setComponent(name: string): void {
    setComponents(TOP, name)
  }


  return {
    state,

    component,
    getComponent,
    setComponent,

    initTop
  }
})

