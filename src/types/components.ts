import type { Component as VueComponent } from 'vue'

export interface Component {
  name: string
  self: VueComponent | Promise<VueComponent>
  props?: Record<string, any>
}

