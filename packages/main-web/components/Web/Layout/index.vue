<template>
  <div class="layout-wrapper">
    <Header></Header>
    <div class="contents">
      <slot></slot>
    </div>
    <Footer></Footer>
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