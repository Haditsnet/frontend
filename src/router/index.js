import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import HadistDetail from '@/components/HadistDetail'
import HadistImam from '@/components/HadistImam'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hadist',
      component: Index,
      children: [
        {
          path: '/hadist/:imam_name/:hadist_number',
          component: HadistDetail
        },
        {
          path: '/hadist:/:imam_name',
          component: HadistImam
        }
      ]

    }
  ]
})
