<script lang="ts" setup>
import ThePage from '@/components/the-components/the-page.vue'
import TheTop from '@/components/the-components/the-top/index.vue'
import TheCenter from '@/components/the-components/the-center.vue'
import TheBottom from '@/components/the-components/the-bottom.vue'
</script>

<template>
  <div class="app app--wrapper">
    <div class="app__inner">
      <the-page class="app__container">
        <template #top>
          <the-top />
        </template>
        <template #center>
          <the-center />
        </template>
        <template #bottom>
          <the-bottom />
        </template>
      </the-page>
    </div>
  </div>
</template>

<style>
.app {
  flex: auto;
  display: flex;
}

.app--wrapper {
  position: relative;
  overflow: hidden;
}

.app__inner {
  flex: auto;
  display: inherit;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: linear-gradient(to top, #9796f0, #fbc7d4);
}

.app__container {
  position: relative;
  display: inherit;
  flex-direction: column;
  max-width: 700px;
  max-height: 700px;
  width: 100%;
  height: 100%;
  background: rgb(255 255 255 / 50%);
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;
}
</style>

