<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useTopStore } from '@/stores/top'
  import BaseTop from '@/components/base-components/base-top.vue'

  const top = useTopStore()
  const {
    component
  } = storeToRefs(top)
</script>

<template>
  <header class="the-top">
      <Suspense>
        <template #default>
          <base-top
            v-slot="{ props }"
            :key="component.name"
            :props="component.props"
          >
            <component
              :is="component.self"
              v-bind="props"
            />
          </base-top>
        </template>

        <template #fallback>
          Content is loading...
        </template>
      </Suspense>
  </header>
</template>

<style>
.the-top {
  flex: auto;
  display: flex;
}
</style>

