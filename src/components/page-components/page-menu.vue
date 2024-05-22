<script setup lang="ts" generic="T">
  import { defineExpose, computed } from 'vue'

  import BaseList from '@/components/base-components/base-list.vue'
  import BaseListItem from '@/components/base-components/base-list-item.vue'

  interface Props {
    list: T[]
  }

  const props = defineProps<Props>()

  defineExpose({ 
    props,
  })
</script>

<template>
  <base-list
    v-slot="{ list }"
    :list="props.list"
    class="page-menu"
    direction="row"
  >
    <base-list-item
      v-for="item in list"
      v-slot="{ item }"
      class="page-menu__item"
      :key="item"
      :item
    >
      <router-link
        class="page-menu__link"
        :to="item.url"
      >
        {{ item.name }}
      </router-link> 
    </base-list-item>
  </base-list>
</template>

<style>
.page-menu__link {
  flex: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 1.2rem;
  text-decoration: none;
}
</style>

