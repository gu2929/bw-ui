import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const index = () => import('@/views/index.vue')
// const RouterView = {
//   name: 'RouteView',
//   render: h => h('router-view')
// }
const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/main' },
  {
    path: '/main',
    name: 'index',
    component: index
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
