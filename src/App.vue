<script lang="ts" setup>
import ThePage from '@/components/the-components/the-page.vue'
import TheTop from '@/components/the-components/the-top/index.vue'
import TheCenter from '@/components/the-components/the-center.vue'
import TheBottom from '@/components/the-components/the-bottom.vue'
</script>

<template>
  <div class="app app--wrapper">
    <div class="app__inner">
      <div class="app__container">
        <div class="app__sidebar">
          <div class="app__sidebar-profile">
            <div class="app__sidebar-profile-image"></div>
            <div class="app__sidebar-profile-name">
              <div class="app__sidebar-profile-first-name"></div>
              <div class="app__sidebar-profile-last-name"></div>
            </div>
          </div>
          <div class="app__sidebar-menu">
            <div class="app__sidebar-menu-item"></div>
            <div class="app__sidebar-menu-item"></div>
            <div class="app__sidebar-menu-item"></div>
          </div>
          <div class="app__sidebar-settings">
            <div class="app__sidebar-settings-item"></div>
            <div class="app__sidebar-settings-item"></div>
            <div class="app__sidebar-settings-item"></div>
          </div>
        </div>
        <div class="app__content">
          <div class="app__top">
            <div class="app__top-name"></div>
            <div class="app__top-search"></div>
          </div>
          <div class="app__center">
            <div class="app__box"></div>
            <div class="app__box"></div>
          </div>
        </div>
      </div>
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
  flex: 0 0 1240px;
  position: relative;
  display: inherit;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background: rgb(255 255 255 / 50%);
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  overflow: hidden;
}

.app__sidebar {
  flex: 0 1 400px;
  display: flex;
  flex-direction: column;
  background: rgb(255 255 255 / 100%);
}

.app__content {
  flex: 1 1 700px;
  display: flex;
  flex-direction: column;
}


.app__center {
  display: flex;
  flex: auto;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  overflow: auto;
}

.app__top {
  flex: 0 0 70px;
  display: flex;
  background: rgb(255 255 255 / 100%);
  padding: 5px 10px;
  align-items: center;
  justify-content: space-between;
}

.app__top-name {
  flex: 0 1 200px;
  display: flex;
  height: 100%;
  background: gray;
  border-radius: 10px;
}

.app__top-search {
  flex: 0 1 300px;
  display: flex;
  height: 100%;
  background: gray;
  border-radius: 10px;
}

.app__sidebar-profile {
  flex: 0 1 70px;
  display: flex;
  padding: 5px 10px;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
}

.app__sidebar-profile-verification {
  width: 55px;
  height: 55px;
  border-radius: 10px;
  background: grey;
}

.app__sidebar-profile-image {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: grey;
}

.app__sidebar-profile-name {
  flex: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 5px;
  padding: 0 10px;
}

.app__sidebar-profile-first-name,
.app__sidebar-profile-last-name {
  flex: auto;
  width: 150px;
  height: 100%;
  background: gray;
  border-radius: 5px;
}

.app__sidebar-menu {
  flex: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}

.app__sidebar-menu-item {
  flex: 0 0 55px;
  display: flex;
  background: gray;
  border-radius: 10px;
}

.app__sidebar-settings {
  flex: 0 1 70px;
  display: flex;
  padding: 5px 10px;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid gray;
  gap: 5px;
}

.app__sidebar-settings-item {
  display: flex;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: grey;
}

.app__box {
  flex: 0 1 300px;
  background: white;
  border-radius: 10px;
}
</style>

