import type { ComputedRef } from 'vue'
import type { Component as GlobalComponent } from '@/types/components'

export type Component = GlobalComponent

export interface HelperModule {
  components: ComputedRef<Component[]>
  desiredComponent: ComputedRef<Component | null>
  fallbackComponent: ComputedRef<Component>
  isComponent: ComputedRef<boolean>
}

