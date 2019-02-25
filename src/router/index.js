import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/index'
// import newList from '@/components/new_list'
// import songPlay from '@/components/song_play'
// import album from '@/components/album'
// import mvPlay from '@/components/mv_play'
// import playList from '@/components/play_list'
// import bangdan from '@/components/bangdan'
// import search from '@/components/search'
// import gedan from '@/components/gedan'
// import bangdanList from '@/components/bangdan_list'
// import bangdanMv from '@/components/bangdan_mv'

Vue.use(Router)
export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['@/components/index'], resolve)
    },
    {
      path: '/newList/:type/:page',
      name: 'newList',
      component: resolve => require(['@/components/new_list'], resolve)
    },
    {
      path: '/bangdanMv',
      name: 'bangdanMv',
      component: resolve => require(['@/components/bangdan_mv'], resolve)
    },
    {
      path: '/songPlay/:id',
      name: 'songPlay',
      component: resolve => require(['@/components/song_play'], resolve)
    },
    {
      path: '/album/:id',
      name: 'album',
      component: resolve => require(['@/components/album'], resolve)
    },
    {
      path: '/gedan/:id',
      name: 'gedan',
      component: resolve => require(['@/components/gedan'], resolve)
    },
    {
      path: '/mvPlay/:id',
      name: 'mvPlay',
      component: resolve => require(['@/components/mv_play'], resolve)
    },
    {
      path: '/playList',
      name: 'playList',
      component: resolve => require(['@/components/play_list'], resolve)
    },
    {
      path: '/bangdan',
      name: 'bangdan',
      component: resolve => require(['@/components/bangdan'], resolve),
      children: [{
        path: 'bangdanList',
        name: 'bangdanList',
        component: resolve => require(['@/components/bangdan_list'], resolve)
      }]
    },
    {
      path: '/search/:keywords',
      name: 'search',
      component: resolve => require(['@/components/search'], resolve)
    },
    {
      path: '/dj',
      name: 'dj',
      component: resolve => require(['@/components/dj'], resolve),
      children: [
        {
          path: 'dt1',
          name: 'dt1',
          component: resolve => require(['@/components/dt1'], resolve)
        },
        {
          path: 'dt2',
          name: 'dt2',
          component: resolve => require(['@/components/dt2'], resolve)
        }
      ]
    },
    {
      path: '/dtDetail/:id',
      name: 'dtDetail',
      component: resolve => require(['@/components/dt_detail'], resolve)
    },
    {
      path: '/dtVipList',
      name: 'dtVipList',
      component: resolve => require(['@/components/dtVip_list'], resolve)
    }
  ]
})
