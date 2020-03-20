import Vue from 'vue'
import VueRouter from 'vue-router'
import Resource from 'vue-resource'
import Vuex from 'vuex'
import Store from '../vuex/store'
import Home from '@/components/home'
import Product from '@/components/product'
import Find from '@/components/find'
import Mine from '@/components/mine'
import Borrowdetail from '@/components/borrowdetail'
import Login from '@/components/login/login'
import Withdrawdeposit from '@/components/all_else/withdraw_deposit'
import Recharge from '@/components/recharge'
import Terminal from '@/components/mine/terminal-project'
import Terminaldetail from '@/components/mine/terminal-detail'
import Refundplan from '@/components/mine/refund-plan'
import Runningwater from '@/components/mine/running_water'
import Moneystatistics from '@/components/mine/Money-statistics'
import Bindingcard from '@/components/mine/binding-card'
var state = {
  isLogin:0,     //初始时候给一个 isLogin=0 表示用户未登录
};
 
const mutations = {
  changeLogin(state,data){
    state.isLogin = data;
  }
 
};
Vue.use(VueRouter)

 const router = new VueRouter({
 	mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Product',
      name: 'Product',
      component:Product
    },
    {
      path: '/Find',
      name: 'Find',
      component: Find
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Withdrawdeposit',
      name: 'Withdrawdeposit',
      component: Withdrawdeposit,
      meta: {
        navShow: false,
        requireAuth: true,// 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/Borrowdetail/:id',  
      name: 'Borrowdetail',
      component: Borrowdetail
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
     {
      path: '/Recharge',
      name: 'Recharge',
      component: Recharge
    },
   {
      path: '/Terminal',
      name: 'Terminal',
      component: Terminal
    },
    {
      path: '/Terminaldetail',
      name: 'Terminal',
      component: Terminaldetail
    },
    {
      path: '/Refundplan',
      name: 'Refundplan',
      component: Refundplan
    },
    {
      path: '/Runningwater',
      name: 'Runningwater',
      component: Runningwater
    },
    {
      path: '/Moneystatistics',
      name: 'Moneystatistics',
      component: Moneystatistics
    },
    {
      path: '/Bindingcard',
      name: 'Bindingcard',
      component: Bindingcard
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to, from)
  next()
//if (to.path === '/login') {
//  next ()
//} else {
//	  next({
//	    path: '/login',  // 跳转到登录页面
//	    query: { redirect: to.fullPath }, // 将跳转的路由path作为参数，用于登录成功后回到登录前页面
//	  });
//}
//
//if(to.meta.requireAuth){ // 判断该路由是否需要登录权限
//  if(Store.state.sessionToken){ // 通过vuex state获取当前的token是否存在
//  	console.log(3333)
//    next();
//  }else{
//  	console.log(2222)
//    next({
//      path: '/login',  // 跳转到登录页面
//      query: { redirect: to.fullPath }, // 将跳转的路由path作为参数，用于登录成功后回到登录前页面
//    });
//  }
//}else{
//	console.log(3333)
//  next();
//}
})



export default router;