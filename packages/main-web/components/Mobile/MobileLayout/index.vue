<template>
  <div class="layout-wrapper">
    <MobileHeader></MobileHeader>
    <div class="contents">
      <slot></slot>
    </div>
    <MobileFooter></MobileFooter>
  </div>
</template>
<style scoped>
.layout-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.contents {
  flex: 1
}
</style>