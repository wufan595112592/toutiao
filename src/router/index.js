import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Layout = () => import('./views/layout')
const home = () => import('./views/home')
const question = () => import('./views/question')
const video = () => import('./views/video')
const user = () => import('./views/user')
const chat = () => import('./views/user/chat')
const login = () => import('./views/login')
const profile = () => import('./views/user/profile')
const search = () => import('./views/search')
const searchresult = () => import('./views/search/result')
const article = () => import('./views/article')
const routes = [
  {
    path: '/',
    component: Layout,
    children: [{
      path: '',
      component: home
    }, {
      path: '/question',
      component: question
    }, {
      path: '/video',
      component: video
    }, {
      path: '/user',
      component: user
    }]
  },
  {
    path: '/user/chat',
    component: chat
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/user/profile',
    component: profile
  },
  {
    path: '/search',
    component: search
  },
  {
    path: '/search/result',
    component: searchresult
  },
  {
    path: '/article',
    component: article
  }

]

const router = new VueRouter({
  routes
})

export default router
