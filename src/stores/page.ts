import { defineStore, storeToRefs } from 'pinia'
import { computed, reactive } from 'vue'
import type { ComputedRef, DeepReadonly } from 'vue'

interface State {
  components: Map<string, Set<string>>
}

const state = reactive<State>({
  components: new Map()
})

interface PageModule {
  state: DeepReadonly<typeof state>

  components: ComputedRef<Map<string, Set<string>>>
  initComponents: (name: string) => void
  getComponents: (name: string, value: string) => string | null
  setComponents: (name: string, value: string) => void
}

export const usePageStore = defineStore('page', (): PageModule => {
  const components = computed(() => state.components)

  function initComponents(name: string): void {
    components.value.set(name, new Set())
  }

  function getComponents(name: string, value: string): string | null {
    const desiredComponents = components.value.get(name)

    if (!desiredComponents) {
      return null
    }

    return desiredComponents.has(value) ? value : null
  }

  function setComponents(name: string, value: string): void {
    const desiredComponents = components.value.get(name)

    if (!desiredComponents) {
      initComponents(name)
    }

    desiredComponents!.add(value)
  }

  return {
    state,

    components,
    initComponents,
    getComponents,
    setComponents,
  }
})

