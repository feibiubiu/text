import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import dragTable from '@/components/dragTable'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/redirect',
      redirec:'/dragTable',
      component: dragTable
    },
    {
      path: '/dragTable',
      name: 'dragTable',
      component: dragTable
    },
    {
      path: '/dragUpload',
      name: 'dragUpload',
      component: () => import('@/components/dragUpload.vue')
    },
    {
      path: '/styick',
      name: 'styick',
      component: () => import('@/components/styick-demo.vue')
    },
    {
      path: '/loading',
      name: 'loading',
      component: () => import('@/components/loading.vue')
    },
    {
      path: '/dataV',
      name: 'dataV',
      component: () => import('@/components/dataV.vue')
    }

  ]
})
