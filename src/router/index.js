import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mobile from '../views/Mobile.vue'
import Desktop from '../views/Desktop.vue'
import Tabuleiro from '../views/Tabuleiro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Mobile',
    name: 'Mobile',
    component: Mobile
  },
  {
    path:'/Desktop',
    name:'Desktop',
    component: Desktop
  },
  {
    path:'/Tabuleiro',
    name:'Tabuleiro',
    component: Tabuleiro
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
