import Vue from 'vue'
import VueRouter from 'vue-router'

import RootView from '@root/RootView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: RootView,
  },

  // modules

  // unrecognized path
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'root' },
    component: null,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
