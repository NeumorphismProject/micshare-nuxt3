<template>
  <div class="layout-wrapper">
    <IpadHeader></IpadHeader>
    <div class="contents">
      <slot></slot>
    </div>
    <IpadFooter></IpadFooter>
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