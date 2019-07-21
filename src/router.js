import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Users from '@/views/pages/Users.vue'
import Get from '@/views/pages/Get.vue'
import Post from '@/views/pages/Post.vue'
import Edit from '@/views/pages/Edit.vue'
import Delete from '@/views/pages/Delete.vue'
import Login from '@/views/pages/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/get',
      name: 'get',
      component: Get
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/delete',
      name: 'delete',
      component: Delete
    }
  ]
})
