import type { ComputedRef, DeepReadonly } from 'vue'
import type { Component } from '@/types/components'

export interface State {
  name: string
}

export interface Module {
  state: DeepReadonly<State>
  components: ComputedRef<Component[]>
  desiredComponent: ComputedRef<Component | null>
  fallbackComponent: ComputedRef<Component>
  isComponent: ComputedRef<boolean>
}

