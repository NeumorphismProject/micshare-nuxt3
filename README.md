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