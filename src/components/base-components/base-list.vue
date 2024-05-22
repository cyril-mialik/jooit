<script setup lang="ts" generic="T extends List">
  import { defineProps, withDefaults, computed } from 'vue'

  interface List {
    name: string
  }

  type Direction = 'column' | 'row'

  interface Props {
    list: T[]
    direction?: Direction
  }

  const props = withDefaults(defineProps<Props>(), {
    direction: () => 'column'
  })

  const isDirectionRow = computed<boolean>(() => props.direction === 'row')
</script>

<template>
  <ul
    class="base-list"
    :class="{ 'base-list--direction-row': isDirectionRow }"
  >
    <slot
      :direction
      :list
    />
  </ul>
</template>

<style>
.base-list {
  flex: auto;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
}

.base-list--direction-row {
  flex-direction: row;
}
</style>

