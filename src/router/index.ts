import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LocalCache from '../utils/cache'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue'),
    name: 'login'
  },
  {
    path: '/main',
    component: () => import('../views/main/main.vue'),
    name: 'main'
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/notFound/notFound.vue'),
    name: 'notFound'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = LocalCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
  console.log('-------------')
  console.log(router.getRoutes())
  console.log(to)
  console.log('-------------')
})

export default router
