// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import Vuex from 'vuex'
import Resource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import vueProgressBar from 'svg-progress-bar'
import axios from 'axios'
import Vant from 'vant'
import Croppa from 'vue-croppa'
import 'vant/lib/vant-css/index.css'
import 'vue-event-calendar/dist/style.css' //1.1.10之后的版本，css被放在了单独的文件中，方便替换
import vueEventCalendar from 'vue-event-calendar'
// 引入echarts
import echarts from 'echarts'
import $ from 'jquery'
//引入加密文件
import sha1 from './vuex/sha1.js'
import md5 from './vuex/md5.js'
import common from './vuex/common.vue'
const formatTime = date => {
  const year = date.getFullYear()  
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


import redpack from './components/eventBus.vue'
Vue.prototype.redpack = redpack
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)
Vue.use(Resource)
Vue.use(Vant)
Vue.use(vueEventCalendar, {
	locale: 'en',
	color: '#ff4d46'
}) //可以设置语言，支持中文和英文(日历)
Vue.prototype.$echarts = echarts
Vue.prototype.$ajax = axios
Vue.config.productionTip = false

Vue.http.interceptors.push(function(request, next) {
	var timestamp = Date.parse(new Date())
	timestamp = timestamp / 1000
	var md5_str = $.md5('b64MD5' + timestamp)
	request.headers.set('content-Type', 'application/x-www-form-urlencoded');
	request.headers.set('APPKEY', common.appkey);
	request.headers.set('CURTIME', timestamp);
	request.headers.set('MD5',md5_str);
	request.headers.set('CHECKSUM', hex_sha1(common.appsecret + md5_str + timestamp));
	next();
});

router.beforeEach((to, from, next) => {
	if(to.matched.some(m => m.meta.auth)) {
		// 对路由进行验证
		if(store.state.isLogin == '1') { // 已经登陆
			next() // 正常跳转到你设置好的页面
		} else {
			// 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
			next({
				path: '/login',
				query: {
					Rurl: to.fullPath
				}
			})
		}
	} else {
		next()
	}
})
/* eslint-disable no-new */
new Vue({
	store,
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})