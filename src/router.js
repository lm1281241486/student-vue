import Vue from 'vue'
import Router from 'vue-router'
import addStu from './views/addStudent.vue'
import stuList from './views/studentList.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
       path: '/addStudent',
       component:addStu
    },
    {
      path: '/studentList',
      component: stuList
    },
    {
      path: '*',
      redirect: '/studentList'
    }
  ],
  linkExactActiveClass: 'active'
})
