import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './modules/home'

const routes = [
  ... Home
]


const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes
});

export default router

