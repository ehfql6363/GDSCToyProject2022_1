import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
// import SignUp from '../components/SignUp.vue'
// import LonIn from '../components/LogIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/components/SignUp.vue')
  },
  {
    path: '/login',
    name: 'lonin',
    component: () => import('@/components/LogIn.vue')
  },
  {
    path: '/infinite',
    name: 'infinite',
    component: () => import('@/components/InfiniteLoading.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/components/KakaoMap.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
