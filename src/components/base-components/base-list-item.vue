<script setup lang="ts" generic="T extends Item">
  import { computed } from 'vue'

  interface Item {
    name: string
  }

  interface Props {
    item: T
  }

  const props = defineProps<Props>()
</script>

<template>
  <li class="base-list-item">
    <slot :item />
  </li>
</template>

<style>
.base-list-item {
  flex: auto;
  display: flex;
}
</style>

