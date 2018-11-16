import Vue from 'vue'
import store from '../store'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Gallery from '../pages/Gallery.vue'
import Services from '../pages/Services.vue'
import Register from '../pages/Register.vue'
import Auth from '../pages/Auth.vue'
import Account from '../pages/Account.vue'
import Record from '../pages/Record.vue'

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/Auth')
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
      },
    {
      path: '/Gallery',
      name: 'gallery',
      component: Gallery
      },
    {
      path: '/Services',
      name: 'services',
      component: Services
      },
    {
      path: '/Register',
      name: 'register',
      component: Register,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/Auth',
      name: 'auth',
      component: Auth,
      beforeEnter: ifNotAuthenticated
    },
    {
    path: '/Account',
    name: 'Account',
    component: Account,
    beforeEnter: ifAuthenticated
  },  
    {
    path: '/Record',
    name: 'Record',
    component: Record,
    beforeEnter: ifAuthenticated
  },     
  ]
});

export default router;
