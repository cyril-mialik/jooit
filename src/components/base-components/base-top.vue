<script setup lang="ts">
  import { defineProps, defineExpose } from 'vue'
  
  interface Props {
    props: any
  }

  const props = defineProps<Props>()

  defineExpose({
    props,
  })
</script>

<template>
  <div class="base-top">
    <slot :props="props.props" />
  </div>
</template>

<style>
.base-top {
  flex: auto;
  display: flex;
}
</style>

