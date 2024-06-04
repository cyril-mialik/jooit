import type { ComputedRef, DeepReadonly } from 'vue'
import type { Component } from '@/types/components'

export interface State {
  name: string
}

export interface Module {
  state: DeepReadonly<State>
  components: ComputedRef<Component[]>
  component: ComputedRef<Component>
}

