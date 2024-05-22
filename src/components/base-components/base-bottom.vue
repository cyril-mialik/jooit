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
  <div class="base-bottom">
    <slot :props="props.props" />
  </div>
</template>

<style>
.base-bottom {
  flex: auto;
  display: flex;
}
</style>

