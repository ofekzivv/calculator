import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'registerUser',
    component: () => import('../views/register')
  },

  {
    path: '/HomePage',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/salaryCalculator',
    name: 'salary',
    component: () => import('../views/salaryCalculator')
  },
  {
    path: '/calculations',
    name: 'calculations',
    component: () => import('../views/calculations')
  },
  {
    path: '/employeePage/:id',
    name: 'employeePage',
    component: () => import('../views/employeePage')
  },
  {
    path: '/sumReports',
    name: 'sumReports',
    component: () => import('../views/sumReports')
  },
  {
    path: '/backOffice',
    name: 'backOffice',
    component: () => import('../views/backOffice')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/update/:id',
    name: 'update',
    component: () => import('../views/update')
  }

]

const router = new VueRouter({
  routes
})

export default router
