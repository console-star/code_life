<template>
	<div style="height: 100%;width: 100%;background: #F7F7F7;">
		<!--修改成功-->
       
       <div class="successful" style="position: relative;top:0;text-align: center;">
        	<!--<div class="historiyto" style="text-align: center;position: absolute;width: 100%;"><img src="../../common/historiyto.png"/>找回密码</div>-->
        	<img style="width: 27%;height: 20%;margin-top: 90px;" src="../../common/passwordsuccess.png" />
        	<p style="height: 50px;line-height: 50px;font-size: 16px;color: #f38331;">恭喜您设置密码成功</p>
        	<div style="text-align: center;"><button class="login_btn1" style="width: 80%;border-radius: 5px;" v-on:click="ToLogin1">立即登录</button></div>
        </div>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	import { setCookie, getCookie } from '../../assets/cookie.js'
	export default {
		data() {
			return {
				start : false,
				newpassword: '',
				newpassword1:'',
			}
		},
		mounted() {
			/*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
			if(getCookie('username')) {
				this.$router.push('/')
			}
		},
		methods: {
          
          ToLogin1(){
          	this.$router.push('/login')
          }
	},
	 components: {
         
        }
	}
</script>

<style>
</style>