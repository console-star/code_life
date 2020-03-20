<template>
	<!--注册-->
	<div style="height: 100%;width: 100%;background: #F7F7F7;">
		<div class="register-wrap">
			<p class="login_logo"><img src="../../common/logo.png" /></p>
			<p v-show="showTishi">{{tishi}}</p>
			<div class="login_con">
				<ul>
					<li class="login_con_phone">
						<i></i><input type="text" placeholder="请输入手机号" v-model="newUsername" />
					</li>
					<li class="login_con_password">
						<i></i><input type="text" placeholder="请输入短信验证码" v-model="phonemessege" />
						<message :start='start' @countDown='start=false' @click.native='sendCode'></message>
					</li>
					<li class="login_con_phone login_con_suo1">
						<i></i><input type="password" placeholder="请设置登录密码" v-model="newPassword" />
					</li>
					<li class="login_con_phone login_con_suo2">
						<i></i><input type="password" placeholder="请再次确认登录密码" v-model="newPassword1" />
					</li>
				</ul>
			</div>
			<button class="login_btn" v-on:click="register">立即注册</button>
			<p class="login_register_tishi" style="color: #ccc;">注册表示同意金陵贷
				<a style="color: #2196F3;">《用户服务协议》</a>条款</p>
			<p v-on:click="ToLogin" style="height: 30px;line-height: 30px;">已有账号？马上登录</p>
		</div>
	</div>

</template>

<script>
	import commonsum from '../../vuex/common.vue'
	import { getHeader } from '../../vuex/header'
	import message from './message.vue'
	import { setCookie, getCookie } from '../../assets/cookie.js'
	export default {
		data() {
			return {			
				showTishi: false,
				start : false,
				password_else_service_bg:false,
				tishi: '',
				newUsername: '',	
				phonemessege: '',
				newPassword:'',
				newPassword1:''
			}
		},
		mounted() {
			/*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
			if(getCookie('username')) {
				this.$router.push('/')
			}
		},
		methods: {
          //注册发送短信验证码
			sendCode1 (value) {
				var headers = getHeader();
				var _self = this;
				 if(this.newUsername == ""){
			        alert("请输入用户名")
			    }else{
				let data = {
					'tel':this.newUsername,
					'type':1
				}
				$.ajax({
						type: 'post',
						data,
						url: commonsum.web_url+'/mobile/user/commitphone',
						headers:headers,
						success: (data) => {
							console.log(typeof(data), data)
							if(typeof(data) === 'string') data = JSON.parse(data)
							console.log(data)
							if(data.status === 200) {
								this.tishi = "发送成功"
								this.showTishi = true
								_self.start = true
								
							} else {
								alert("发送失败")
							}

						}
					});
			    }
			    
//              //前面发送ajax请求成功之后调用this.start = true开始短信倒计时
//              this.start = true
          },
             
         
			//注册
			register(){
				var headers = getHeader();
			    if(this.newUsername == ""||this.newPassword==""||this.newPassword1==""){
			        alert("请输入用户名或密码")
			    }else if(this.phonemessege == ""){
			    	alert("请输入短信验证码")
			    }else if(this.newPassword !=this.newPassword1){
			    	alert("两次密码不一致")
			    }else{
			        let data = {'tel':this.newUsername,'verify_code':this.phonemessege,'password':this.newPassword}
					var _self = this;
					$.ajax({
						type: 'post',
						data,
						url: commonsum.web_url+'/mobile/user/regaction',
						headers:headers,
						success: (data) => {
							console.log(typeof(data), data)
							if(typeof(data) === 'string') data = JSON.parse(data)
							console.log(data)
							if(data.status === 200) {
								_self.tishi = "注册成功"
								_self.showTishi = true
								_self.username = ''
			                    _self.password = ''
							    _self.showRegister = false
							   _self.showLogin = true
							} else {
								alert(data.message)
							}

						}
					});
			    }
			},
			ToLogin(){
				this.$router.push('/login')
			}
	},
	 components: {
          message 
        }
	}
</script>

<style>

</style>