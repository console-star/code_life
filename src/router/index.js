import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Home from '@/components/home'
import Product from '@/components/product'
import Find from '@/components/find'
import Mine from '@/components/mine'
import Inform_information from '@/components/inform_information.vue'
import Informdetailto from '@/components/inform_information_detail.vue'
import Information from '@/components/item-information/item-information.vue'
import Information1 from '@/components/item-information/item-information1.vue'
import Information2 from '@/components/item-information/item-information2.vue'
import Information3 from '@/components/item-information/item-information3.vue'
import Borrowdetail from '@/components/borrowdetail'
import borrowdetailto from '@/components/borrowdetail-to'
import Withdrawdeposit from '@/components/all_else/withdraw_deposit'
import Tender_details from '@/components/all_else/tender_details'
import Calendar from '@/components/all_else/calendar'
import Can_use_redpack from '@/components/mine/can_use_redpack.vue'  //可用红包列表
import Login from '@/components/login/login'
import Register from '@/components/login/register'
import Forget_login from '@/components/login/forget_login'
import Forget_login1 from '@/components/login/forget_login1'
import Else_find from '@/components/login/else_find'
import Amend_sucess from '@/components/login/amend_sucess'
import Recharge from '@/components/recharge'
import Terminal from '@/components/mine/terminal-project'
import Terminaldetail from '@/components/mine/terminal-detail'
import Runningwater from '@/components/mine/running_water'
import moneystatistics from '@/components/mine/Money-statistics.vue'
import Bindingcard from '@/components/mine/binding-card.vue'
import Myaward from '@/components/mine/my-award.vue'
import Refundplan from '@/components/mine/refund-plan.vue'
import Personal from '@/components/mine/personal.vue'
import Riskevaluating from '@/components/mine/risk_evaluating'
import Riskresult from '@/components/mine/risk_result.vue'
import Card from '@/components/mine/card.vue'
import Setting from '@/components/mine/setting.vue'
import Modification from '@/components/login/modification.vue'
import Modification_deal from '@/components/login/modification_deal.vue' //修改交易密码
import Suggestion from '@/components/mine/set/suggestion.vue' //修改交易密码
import Project_detail from '@/components/mine/project_detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path: '/Find',
      name: 'Find',
      component: Find,
      meta:{auth:true}
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine,
      meta:{auth:true}
    },
    {
      path: '/Withdrawdeposit',
      name: 'Withdrawdeposit',
      component: Withdrawdeposit
    },
    {
      path: '/Borrowdetail/:id',
      name: 'Borrowdetail',
      component: Borrowdetail,
      meta:{auth:true}
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
     {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Forget_login',
      name: 'Forget_login',
      component: Forget_login
    },
    {
      path: '/Forget_login1',
      name: 'Forget_login1',
      component: Forget_login1
    },
    {
      path: '/Else_find',
      name: 'Else_find',
      component: Else_find
    },
    {
      path: '/Amend_sucess',
      name: 'Amend_sucess',
      component: Amend_sucess
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
      path: '/Terminaldetail/:borrow_title/:investor_status/:borrow_interest_rate/:investor_capital/:investor_duration/:expired_time/:reward/:all_income/:received_money/:borrow_info/:borrow_log/:file_info/:investor_log/:borrow_id',
      name: 'Terminaldetail',
      component: Terminaldetail
    },
    {
      path: '/Runningwater',
      name: 'Runningwater',
      component: Runningwater
    },
    {
      path: '/moneystatistics',
      name: 'moneystatistics',
      component: moneystatistics
    },
    {
      path: '/Bindingcard',
      name: 'Bindingcard',
      component: Bindingcard
    },
    {
      path: '/Myaward',
      name: ' Myaward',
      component: Myaward
    },
     {
      path: '/Refundplan',
      name: ' Refundplan',
      component: Refundplan
    },
    {
      path: '/Personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/Riskevaluating',
      name: 'Riskevaluating',
      component: Riskevaluating
    },
     {
      path: '/Riskresult',
      name: 'Riskresult',
      component: Riskresult
    },
    {
      path: '/Card',
      name: 'Card',
      component: Card
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/Modification',
      name: 'Modification',
      component: Modification
    },
    {
      path: '/Modification_deal',
      name: 'Modification_deal',
      component: Modification_deal
    },
     {
      path: '/Suggestion',
      name: 'Suggestion',
      component: Suggestion
    },
    {
      path: '/Project_detail',
      name: 'Project_detail',
      component: Project_detail
    },
    {
      path: '/borrowdetailto/:id/:name/:invest_money/:expect_earnings_num/:coupon_id',
      name: 'borrowdetailto',
      component: borrowdetailto,
      meta:{
      	auth:true,  	
//      keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/Information/:borrow_info',
      name: 'Information',
      component: Information,
      meta:{auth:true}
    },
    {
      path: '/Information1/:file_info',
      name: 'Information1',
      component: Information1,
      meta:{auth:true}
    },
    {
      path: '/Information2/:borrow_log',
      name: 'Information2',
      component: Information2,
      meta:{auth:true}
    },
    {
      path: '/Information3/:investor_log',
      name: 'Information3',
      component: Information3,
      meta:{auth:true}
    },
    {
      path: '/Inform_information',
      name: 'Inform_information',
      component: Inform_information,
    },
    {
      path: '/Informdetailto',
      name: 'Informdetailto',
      component: Informdetailto,
    },
     {
      path: '/Tender_details',
      name: 'Tender_details',
      component: Tender_details,
    },
    {
      path: '/Calendar',
      name: 'Calendar',
      component: Calendar,
    },
    {
      path: '/Can_use_redpack/:invest_id/:invest_money/:id/:expect_earnings_num', //可用红包列表
      name: 'Can_use_redpack',
      component: Can_use_redpack,
    }
    
  ]
})
