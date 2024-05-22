<template>
  <div class="base-page base-page--wrapper">
    <div class="base-page__inner">
      <div class="base-page__container">
        <div class="base-page__content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.base-page {
  flex: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.base-page--wrapper {
  position: relative;
}

.base-page__inner {
  position:absolute;
  display: inherit;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.base-page__container {
  position: relative;
  flex: auto;
  display: inherit;
  flex-direction: column;
  padding-inline: 10px;
}


.base-page__container::after,
.base-page__container::before {
  content: "";
  display: block;
  min-height: 10px;
}

.base-page__content {
  flex: auto;
  display: inherit;
  flex-direction: column;
}
</style>

