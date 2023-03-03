<template>
  <div>
    <!-- <div>Device: {{ deviceType }}</div>
    <br />
    <h1>下面这些是 fetch ssr 异步请求测试</h1> -->
    <!-- <h1 style="color: red;">下面这些时 axios ssr 异步请求测试</h1> -->
    <!-- <div>{{ resDataAxios }}</div> -->
    <!-- <br />
    <h1>下面这些是遍历 fetch ssr 异步请求渲染测试</h1> -->
    <div v-for="item of resDataFetch" :key="item.name">
      {{ item.name }}
    </div>
  </div>
</template>
<script lang="ts" setup>
const {resDataFetch} =  await useWebHome()
</script>