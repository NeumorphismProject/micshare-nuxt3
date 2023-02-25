// API(router): https://nuxt.com/docs/api/configuration/nuxt-config
import { RouterOptions } from 'vue-router';

// 需要移除的nuxt自动生成的路由（集中写在这里，下面会filter掉）
const REMOVE_NUXT_ROUTES = [
  '/home/web',
  '/home/ipad',
  '/home/mobile',
];

const routesEx:RouterOptions['routes'] = [
  {
    path: '/home',
    name: 'home-web',
    component: () => import('../pages/home/web.vue')
  },
  {
    path: '/p.home',
    name: 'home-ipad',
    component: () => import('../pages/home/ipad.vue')
  },
  {
    path: '/m.home',
    name: 'home-mobile',
    component: () => import('../pages/home/mobile.vue')
  },
  {
    path: '/',
    name: '',
    redirect(){
      return '/home'
    }
  }
]

export default {
  routes: (nuxtRoutes:RouterOptions['routes']) => {
    const newRoutes = nuxtRoutes.filter((r) => !REMOVE_NUXT_ROUTES.includes(r.path)).concat(routesEx);
    return newRoutes;
  },
}
