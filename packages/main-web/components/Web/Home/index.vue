<template>
  <div>Device: {{ deviceType }}</div>
</template>
<script lang="ts" setup>
const { deviceType } = useWebHome()
</script>