<script setup lang="ts">
  import { computed, ref, defineExpose, onMounted, defineAsyncComponent } from 'vue'

  import BaseTop from '@/components/base-components/base-top.vue'

  import { MENU } from '@/constants/menu'

  const PageMenu = defineAsyncComponent(() =>
    import('@/components/page-components/page-menu.vue')
  )

  const components = computed(() => [
    {
      self: PageMenu,
      name: 'page-menu',
      props: {
        list: MENU
      }
    },
  ])
  const mappedComponents = computed(() => components.value)
  const filteredComponents = computed(() => mappedComponents.value)
  
  const areComponents = computed(() => Boolean(filteredComponents.value.length))

  defineExpose({
    filteredComponents,
    areComponents,
  })
</script>

<template>
  <header class="the-top">
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
  </header>
</template>

<style>
.the-top {
  flex: auto;
  display: flex;
}
</style>

