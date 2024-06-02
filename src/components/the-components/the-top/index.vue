<script setup lang="ts">
  import { computed, toRefs } from 'vue'
  import { useHelper } from './helper'
  import BaseTop from '@/components/base-components/base-top.vue'

  const helper = useHelper()
  const {
    desiredComponent,
    fallbackComponent,
    isComponent
  } = toRefs(helper)
</script>

<template>
  <header class="the-top">
    <template v-if="isComponent">
      <Suspense>
        <template #default>
          <base-top
            v-slot="{ props }"
            :key="desiredComponent.name"
            :props="desiredComponent.props"
          >
            <component
              :is="desiredComponent.self"
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
      <base-top
        v-slot="{ props }"
        :key="fallbackComponent.name"
        :props="fallbackComponent.props"
      >
        <component
          :is="fallbackComponent.self"
          v-bind="props"
        />
      </base-top>
    </template>
  </header>
</template>

<style>
.the-top {
  flex: auto;
  display: flex;
}
</style>

