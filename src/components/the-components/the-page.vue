<template>
  <div class="the-page">
    <div class="the-page__top">
      <slot name="top" />
    </div>
    <div class="the-page__center">
      <slot name="center" />
    </div>
    <div class="the-page__bottom">
      <slot name="bottom" />
    </div>
  </div>
</template>

<style>
.the-page {
  flex-direction: column;
}

.the-page__top {
  flex: 0 0 60px;
  display: inherit;
  background: rgb(255 255 255 / 80%);
  border-radius: 0 0 10px 10px;
  box-shadow: -2px 5px 5px -2px rgb(0 0 0 / 10%);
}

.the-page__center {
  flex: auto;
  display: inherit;
}

.the-page__bottom {
  flex: 0 0 60px;
  display: inherit;
  background: rgb(255 255 255 / 80%);
  border-radius: 10px 10px 0 0;
  box-shadow: -2px -5px 5px -2px rgb(0 0 0 / 10%);
}
</style>
