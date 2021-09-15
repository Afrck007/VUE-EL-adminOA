import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: "/home"
    },
    {
      path: '/home',
      meta: { title:"大首页" },
      // 输入的是home时定位到index
      redirect: "/index",
      component: () => import('../views/home/index.vue'),
      children: [
        {
          path: "/index", //首页
          meta: { title:"首页" },
          name: "index",
          component: () => import('../views/home/index/index.vue'),
        },
        {
          path: "/stats", //数据统计
          meta: { title:"数据统计" },
          name: "stats",
          component: () => import('../views/home/stats.vue'),
        },
        {
          path: "/wms", //信息管理
          meta: { title:"信息管理" },
          name: "wms",
          component: () => import('../views/home/wms/index.vue'),
          children: [{
            path: "/wms/list", //列表展示
            meta: { title:"列表展示" },
            name: "wmslist",
            component: () => import('../views/home/wms/list.vue'),
          }]
        }
      ]
    },

    {
      path: '/login',
      component: () => import('../views/login')
    },
  ],

})

// 解决router.beforeEach找不到router
// router文件夹下index.js文件中的默认生成export default new Router({})导致没有router这个对象 而这个函数只能通过router调用
// 于是将脚手架默认生router文件夹下index.js文件中的export default new Router({})改为const router = new Router({}} 在其后加上export default router就可运用router.beforeEach()调用该函数了


// 路由拦截导航守卫 to进入，next下一个，from离开
// 一般用来控制路由直接输入就略过登录漏洞
router.beforeEach((to, from, next) => {
  // 判断是否有username
 if(!sessionStorage.getItem("username")){
   if(to.path!=='/login'){
    //  不是登录进入登录
     next('/login')
   }
 };
//  没有符合条件进行下一步
 next();
})

export default router;