# micshare-nuxt3
基于Nuxt3搭建的个人网站，主要为了记录下我对SSR的技术探索成果，顺便分享

## 技术涉及
* SSR 网站的多端设备实现方案（根据当前浏览器所属设备[主机，平板，手机]进行分配对应的页面）
* SSR 如何确保首次渲染的异步请求在服务端进行（即使用 Nuxt3 的 useAsyncData() 实现）--【代码待加入】
* SSR 如何判断当前运行时的所处环境：process.client 和 process.server
