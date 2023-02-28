<template>
  <div>Device: {{ deviceType }}</div>
  <br/>
  <h1>下面这些时 fetch ssr 异步请求测试</h1>
  <div>{{ resDataFetch }}</div>
  <h1 style="color: red;">下面这些时 axios ssr 异步请求测试</h1>
  <div>{{ resDataAxios }}</div>
</template>
<script lang="ts" setup>
const { deviceType, resDataFetch, resDataAxios } = useWebHome()
</script>