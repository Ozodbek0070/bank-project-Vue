import { createRouter, createWebHistory } from 'vue-router'
import ViewHome from '../views/ViewHome.vue'
import store from '../store'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: ViewHome,
    meta:{
      layout:'main',
      auth: true
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/ViewHelp.vue'),
    meta:{
      layout:'main',
      auth: true,
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/ViewAuth.vue'),
    meta:{
      layout:'auth',
      auth: false,
    }
  },
  {
    path: '/request/:id',
    name: 'Request',
    component: () => import('../views/ViewRequest.vue'),
    meta:{
      layout:'main',
      auth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass:"active",
  linkActiveClass:"active"
})

router.beforeEach((to,from,next)=>{
  const requireAuth = to.meta.auth
  if(requireAuth && store.getters['auth/isAuthenticated']){
    next()
  }
  else if(requireAuth && !store.getters['auth/isAuthenticated']){
    next("/auth?message=auth")
  }
  else if (!requireAuth && store.getters['auth/isAuthenticated']){
    next("/")
  }
  else{
    next()
  }
})

export default router
