<script setup lang="ts">
  import { computed, defineExpose } from 'vue'
  import { MENU } from '@/constants/menu'
  import BaseBottom from '@/components/base-components/base-bottom.vue'

  const components = computed(() => [])
  const mappedComponents = computed(() => components.value)
  const filteredComponents = computed(() => mappedComponents.value)
  const areComponents = computed(() => Boolean(filteredComponents.length))

  defineExpose({
    filteredComponents,
    areComponents,
  })
</script>

<template>
  <footer class="the-bottom">
    <template v-if="areComponents">
      <Suspense>
        <template #default>
          <base-top
            v-for="component in filteredComponents"
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
    </template>

    <template v-else>
      There's no content yet.
    </template>
  </footer>
</template>

<style>
.the-bottom {
  flex: auto;
  display: flex;
}
</style>

