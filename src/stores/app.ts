import { reactive, computed, type ComputedRef, type DeepReadonly } from 'vue'
import { defineStore } from 'pinia'

export interface State {
  top: boolean
  bottom: boolean
}

const state = reactive<State>({
  top: true,
  bottom: true,
});

export interface AppModule {
  state: DeepReadonly<typeof state>

  isTop: ComputedRef<boolean>
  isBottom: ComputedRef<boolean>
}

export const useAppStore = defineStore('app', (): AppModule => {
  const isTop = computed<boolean>(() => state.top)
  const isBottom = computed<boolean>(() => state.bottom)

  return {
    state,

    isTop,
    isBottom,
  }
})

