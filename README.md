# micshare-nuxt3
基于Nuxt3搭建的个人网站，主要为了记录下我对SSR的技术探索成果，顺便分享

## 技术涉及
* SSR 网站的多端设备实现方案（根据当前浏览器所属设备[主机，平板，手机]进行分配对应的页面）
* SSR 如何确保首次渲染的异步请求在服务端进行（即使用 Nuxt3 的 useAsyncData() 实现）--【代码待加入】
* SSR 如何判断当前运行时的所处环境：process.client 和 process.server


## 一些实战小笔记

* 1 - 路由重定向一定要确保只做一次，多次重定向在 ios 移动端的 Safari 等某些浏览器上是不允许的；

* 2 - input 光标在 ios 移动设备的 Safari 浏览器里遮挡了输入的文字(特别是某些因为字母i l j这种)
* * 2.1 -- 解决方案：把 input 中的输入文字间距通过 css 的 letter-spacing 属性设置大一些即可
```vue
<template>
  <input class="my-input" type="text" value="iiiiiillllll">
</template>
<style scoped>
input {
  letter-spacing: 2px;
}
</style>
```

* 3 - 异步请求时，响应式变量获取异步数据一定要写在 setup 下，不要包在一个函数中
* （如果是自定义 hooks 里的响应式变量，那么必须直接写在 hooks 下，不能在这 hooks 的内部函数中）
* * 网游参考链接：[nuxt3 一个奇怪的问题 -- ([Vue warn]: Hydration children mismatch in <div>警告)](https://huyu.info/blog/detail/213)
* * 涉及知识点：
* * * 【1】vue3 async setup 的限制问题(虽然支持 async setup 但是存在缺陷)：https://cn.vuejs.org/api/sfc-script-setup.html#top-level-await
* * 具体说明案例：
* * 这种是错误的写法：
```typescript
export default useWebHome() {
  const uidata = ref<any>([])
  const queryData = async ()=>{
    const {data} = await useAsyncData(()=>$fetch('/api/aaa/bbb'))
    // Warning!!! 在函数中异步去操作ui的响应式变量会导致服务端渲染报一些警告的，这么做是不对的
    uidata.value = data.value
  }
  queryData()
  return { uidata }
}
```
* * 正确的写法是：
```typescript
// 既然是异步请求渲染ui，那么这个hooks也必须是 async的（即返回 Promise）
export default async useWebHome() {
  const uidata = ref<any>([])
  const queryData = async ()=>{
    const {data} = await useAsyncData(()=>$fetch('/api/aaa/bbb'))
    return data.value
  }
  // 对响应式变量的赋值必须直接写在 hooks 下（不能跟上面一样写在一个异步函数中）
  // (当然如果是直接在 setup 里写，也同样要按照这个规则)
  const apidata = await queryData()
  uidata.value = apidata

  return { uidata }
}
```
* * 在 setup 中这样使用即可
```vue
<template>
<div>
  <div v-for="item of uidata" :key="item.id"></div>
</div>
</template>
<script>
import useWebHome from './useWebHome'

// 注： 这里既然用了异步ssr渲染，在 setup 中写 await，那就意为着这个是 async setup，那么按照vue3的特性，其实这就是异步组件
// 按照 vue3 的官方说法是，async setup 必须配合内置组件 <Suspense></<Suspense> 使用
// 但是我们通过浏览器的 F12 打开调试工具在 Console 栏中可以发现有这么一条信息：<Suspense> is an experimental feature and its API will likely change.
// 这就说明了 nuxt3 已经为我们自动把带有异步响应式变量渲染的组件，加上了 <Suspense>
// 虽说 <Suspense> 在 vue3 官方说明了这是个实验品，但是我们不必担心，因为没有别的方案去处理异步ssr，只能这么写
const {uidata} = await useWebHome()
</script>
```