<template>
	<div style="height: 100%;width: 100%;background: #F7F7F7;">
		<!--登录-->
		<div class="login-wrap">
			<p class="login_logo"><img src="../../common/logo.png" /></p>
			<ul>
				<li><i></i><input type="text" placeholder="请输入用户名" v-model="username"></li>
				<li><i></i><input type="password" placeholder="请输入密码" v-model="password"></li>
			</ul>
			<div style="text-align: center;"><button class="login_btn1" v-on:click="login">登录</button></div>
			<div class="login-wrapbtn"><span v-on:click="Togetuser">忘记密码？</span><span v-on:click="ToRegister">快速注册</span></div>
		</div>
 	
       
	</div>
</template>

<style>
	.password_else li{
		width: 100%;
		height: 40px;
		line-height: 40px;
		background: white;
		border-bottom: 1px solid #F7F7F7;
		padding-left: 30px;
	}
	.password_else li p{
		width: 30%;
		float: left;
	}
	.password_else li input{
		border: 0;
		padding-left: 10px;
		width: 40%;
		height: 100%;
	}
	.service{
		text-align: right;
		padding-right: 30px;
		height: 40px;
		line-height: 40px;
		color: rgb(33, 150, 243);
	}
	.password_else_btn{
		width: 80%;
		margin-top: 50px;
		line-height: 40px;
		text-align: center;
		border: none;
		background-color: #f84d4d;
		color: #fff;
		border-radius: 6px;
	}
	.password_else_service_bg{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
	}
	
	.password_else_service{
				width: 70%;
				height: 160px;
				border-radius: 6px;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				margin: auto;
				z-index: 10;
				background: white;
			}
			.password_else_service h3{
				text-align: center;
				height: 40px;
				line-height: 40px;
				border-bottom:1px solid #F7F7F7;
				margin-bottom: 0px;
			}
			.password_else_service p{
				text-align: center;
				height: 33px;
				line-height: 33px;
			}
			.password_else_service ul{
				position: absolute;
				bottom: 0;
				width: 100%;
				border-top:1px solid #F7F7F7;
			}
			.password_else_service ul li{
				float: left;
				width: 49%;
				height: 40px;
				line-height: 40px;
				text-align: center;
				list-style: none;
			}
			.password_else_service ul li:nth-child(1){
				border-right: 1px solid #ccc;
			}
			.password_else_service ul li a{
				color: #333;
				text-decoration: none;
			}
	/*passwordsuccess*/
	.login_logo {
		text-align: center;
		padding-top: 100px;
		margin-bottom: 50px;
		padding-right: 30px;
	}
	
	.login_logo img {
		width: 130px;
		height: 50px;
	}
	
	.login-wrap ul li,
	.register-wrap ul li {
		width: 80%;
		margin: auto;
		height: 50px;
		line-height: 50px;
		list-style: none;
		position: relative;
	}
	
	.login-wrap ul li:nth-child(1) i,
	.register-wrap ul li:nth-child(1) i {
		width: 20px;
		height: 20px;
		background: url(../../common/login1.png);
		background-size: 100% 100%;
		position: absolute;
		left: 10px;
		top: 13px;
	}
	
	.login-wrap ul li:nth-child(2) i{
		width: 20px;
		height: 20px;
		background: url(../../common/login3.png);
		background-size: 100% 100%;
		position: absolute;
		left: 10px;
		top: 13px;
	}
	.register-wrap ul li:nth-child(2) i {
		width: 20px;
		height: 20px;
		background: url(../../common/login2.png);
		background-size: 100% 100%;
		position: absolute;
		left: 10px;
		top: 13px;
	}
	.register-wrap ul li:nth-child(3) i,.register-wrap ul li:nth-child(4) i {
		width: 20px;
		height: 20px;
		background: url(../../common/login3.png);
		background-size: 100% 100%;
		position: absolute;
		left: 10px;
		top: 13px;
	}
	.login_con_password div{
		position: absolute;
		right: 30px;
        top: 0;
        color:#2196F3 ;
	}
	.login_con_password div button{
		border: 0;
		background: white;
        color:#2196F3 ;
	}
	.login-wrap button,
	.login_btn {
		width: 80%;
		height: 40px;
		border-radius: 6px;
	}
	
	.login-wrapbtn {
		position: relative;
	}
	
	.login-wrapbtn span:nth-child(1) {
		position: absolute;
		left: 50px;
	}
	
	.login-wrapbtn span:nth-child(2) {
		position: absolute;
		right: 50px;
	}
	
	.login-wrap,
	.register-wrap {
		text-align: center;
	}
	
	.login-wrap input,
	.register-wrap input {
		display: block;
		width: 100%;
		height: 100%;
		line-height: 50px;
		margin: 0 auto;
		outline: none;
		border: 1px solid #F7F7F7;
		padding: 10px;
		padding-left: 50px;
		box-sizing: border-box;
		border-radius: 6px;
	}
	
	.login-wrap p,
	.register-wrap p {
		color: red;
	}
	
	.login_btn1,
	.login_btn {
		margin-top: 50px;
		line-height: 40px;
		text-align: center;
		border: none;
		background-color: #f84d4d;
		color: #fff;
		font-size: 16px;
		margin-bottom: 5px;
	}
	
	.login-wrap span,
	.login-wrapbtn {
		cursor: pointer;
	}
	
	.login-wrap span:hover {
		color: #41b883;
	}
	
	.register-wrap span:hover {
		color: #41b883;
	}
	.login-wrap li button{
		width: 100%;
	}
	.historiyto img{
				width: 33px;
				height: 33px;
				position: absolute;
				left: 33px;
				top: 15px;
			}
			.historiyto{
				font-size: 16px;
				line-height: 63px;
				color: #f38331;
			}
</style>

<script>
	import commonsum from '../../vuex/common.vue'
	import { getHeader } from '../../vuex/header'
	import Vuex from 'vuex'
	import { Toast } from 'vant'
	import message from './message.vue'
	import { setCookie, getCookie } from '../../assets/cookie.js'
	export default {
		data() {
			return {
				username: '',
				password: '',
				newUsername: '',
				newPassword: '',
				phonemessege: ''
			}
		},
		mounted() {
			/*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
//			store.commit('changeLogin')
//			console.log(store.state.data)
//			if(getCookie('username')) {
//				this.$router.push('/')
//			}
		},
		methods: {
			toRegister() {
				// TODO: add it
			},
          //登录
			login() {
				var headers = getHeader();
				if(this.username == "" || this.password == "") {
					Toast("请输入用户名或密码")
				} else {
					let data = {
						'username': this.username,
						'password': this.password
					}
					var _self = this;
					$.ajax({
						type: 'post',
						data,
						url: commonsum.web_url+'/mobile/user/actlogin',
						headers:headers,
						success: (data) => {
//							console.log(typeof(data), data)
							if(typeof(data) === 'string') data = JSON.parse(data)
//							console.log(data.data.token)
							if(data.status === 200) {
								Toast("登录成功")  
								this.$store.commit('changeLogin','1')   
								setCookie('name', data.data.token)
								 sessionStorage.setItem("name", data.data.token)
								 sessionStorage.setItem("username", this.username,1000 * 60)
								this.showTishi = true
								setTimeout(() => {
//									console.log(this.$router)
									this.$router.push('/mine')
								}, 1000)
							} else {
								Toast("用户名或密码错误")
							}

						}
					});

				}
			},
			Togetuser(){
				this.$router.push('/forget_login')
			},
			ToRegister(){
				this.$router.push('/register')
			}
	},
	 components: {
        
        }
	}
</script>