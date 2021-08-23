import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import firebaseInstance from '../middleware/firebase'

Vue.use(VueRouter)

const routes = [
    //// outside app
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {authNotRequired: true}
  },
  {
    path: '/register',
    name: 'registerUser',
    component: () => import('../views/register'),
    meta: {authNotRequired: true}
  },
  //// inside app
  {
    path: '/HomePage',
    name: 'Home',
    component: () => import('../views/Home'),
    meta: {authNotRequired: false}
  },
  {
    path: '/salaryCalculator',
    name: 'salary',
    component: () => import('../views/salaryCalculator'),
    meta: {authNotRequired: false}
  },
  {
    path: '/calculations',
    name: 'calculations',
    component: () => import('../views/calculations'),
    meta: {authNotRequired: false}
  },
  {
    path: '/employeePage/:id',
    name: 'employeePage',
    component: () => import('../views/employeePage'),
    meta: {authNotRequired: false}
  },
  {
    path: '/sumReports',
    name: 'sumReports',
    component: () => import('../views/sumReports'),
    meta: {authNotRequired: false}
  },
  {
    path: '/backOffice',
    name: 'backOffice',
    component: () => import('../views/backOffice'),
    meta: {authNotRequired: false}
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {authNotRequired: false}
  },
  {
    path: '/update/:id',
    name: 'update',
    component: () => import('../views/update'),
    meta: {authNotRequired: false}
  }

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const user = firebaseInstance.firebase.auth().currentUser
  if (user && to.meta.authNotRequired || !user && !to.meta.authNotRequired) {
    const path = !user ? '/' : '/HomePage';
    return next(path)
  }
  next()
})

export default router
