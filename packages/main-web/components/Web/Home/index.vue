<template>
  <div>Device: {{ deviceType }}
    <div>
      <input class="my-input" type="text" value="iiiiiillllll">
    </div>
  </div>
</template>
<script lang="ts" setup>
const { deviceType } = useWebHome()
function selectText() {
  const input = document.querySelector('.my-input') as any;
  input.focus();
  // 设置选区
  // input.setSelectionRange(2, 5);
  input.setSelectionRange(-1, -1);
  // input.setSelectionRange(4, 7);
}

onMounted(() => {
  selectText()
})
</script>
<style scoped>
.my-input {
  text-align: right;
  padding-right: 15px;
  font-size: 16px;
}
input {
  letter-spacing: 2px;
}
</style>