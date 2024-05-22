<script lang="ts" setup>
const getTransitionName = (route): string => {
  const { name = 'fade' } = route.meta.transition || {};

  return 'the-center__' + name
}

const getTransitionMode = (route): string => {
  return route.meta.transition?.mode || 'out-in'
}
</script>

<template>
  <main class="the-center">
    <router-view v-slot="{ Component, route }">
      <transition
        :name="getTransitionName(route)"
        :mode="getTransitionMode(route)"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style>
.the-center {
  flex: auto;
  display: flex;
}

.the-center__fade-enter-active,
.the-center__fade-leave-active {
  transition: opacity 0.5s ease;
}

.the-center__fade-enter-from,
.the-center__fade-leave-to {
  opacity: 0;
}
</style>

