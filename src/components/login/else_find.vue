<template>
	<!--其他方式找回-->
	<div style="height: 100%;width: 100%;background: #F7F7F7;">
		<div>
			<ul class="password_else_wei">
			<li><p>请输入手机号：</p><input type="text" placeholder="请输入手机号" v-model="newUsername"/></li>
			<li><p>请输入交易密码：</p><input type="text" placeholder="请输入交易密码" v-model="newpasswordjiao"/></li>
			<li><p>设置新密码：</p><input type="text" placeholder="请输入新密码" v-model="newpassword"/></li>
			<li><p>请确认新密码：</p><input type="text" placeholder="请输入新密码" v-model="newpassword1"/></li>
		</ul>
		<p class="service" style="margin-top: 1em !important;"><span v-on:click="password_else_service">联系客服找回</span></p>
		<p style="text-align: center;"><button class="password_else_btn" v-on:click="password_else_btn">确认修改</button></p>
		
		<div class="password_else_service_bg" v-show="password_else_service_bg">
			<div class="password_else_service">
			<h3>客服电话</h3>
			<p>400-889-7650</p>
			<p>工作日：9：00-17：00</p>
			<ul>
				<li class="defalt" v-on:click="deletepassword_else_service_bg">取消</li>
				<li class="service_phone"><a href="tel:13161658668">确定</a></li>
			</ul>
		</div>
		</div>
		</div>
	</div>
		
</template>

<script>
	import commonsum from '../../vuex/common.vue'
	import { getHeader } from '../../vuex/header'
	import { Toast } from 'vant';
	import { setCookie, getCookie } from '../../assets/cookie.js'
	export default {
		data() {
			return {
				newUsername: '',
				newpasswordjiao:'',
				newpassword:'',
				newpassword1:'',
				password_else_service_bg:false
			}
		},
		mounted() {
			/*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
			if(getCookie('username')) {
				this.$router.push('/')
			}
		},
		methods: {
          
          password_else_btn(){
				var _self = this;
				 if(this.newUsername == "" || this.newpasswordjiao == ""||this.newpassword == ""||this.newpassword1 == "") {
					Toast("请输入用户名或密码")
				} else if(this.newpassword != this.newpassword1){
					Toast("两次密码不一致")
				}else{
				var headers = getHeader();
				let mess = {
						'new_pwd': this.newpassword,
						'trade_pwd': this.newpasswordjiao,
						'username': this.newUsername,
				}
				$.ajax({
						type: 'post',
						data: mess,
						url: commonsum.web_url+'/mobile/user/findpwd',
						headers: headers,
						success: (data) => {
//							console.log(typeof(data), data)
							if(typeof(data) === 'string') data = JSON.parse(data)
							console.log(data)
							if(data.status === 200) {
								Toast(data.message)	
								this.$router.push('/login')
							} else {
								Toast(data.message)
							}

						}
					});
			    }
			},
			password_else_service(){
				this.password_else_service_bg=true
			},
			deletepassword_else_service_bg(){
				this.password_else_service_bg=false
			}
	},
	 components: {
         
        }
	}
</script>

<style>
	.password_else_wei{
		background: white;
	}
	.password_else_wei li{
		width: 100%;
		height: 4em;
		line-height: 4em;
		position: relative;
		padding-left: 1em;
	}
	.password_else_wei li input{
		width: 50%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 11em;
		border: 0;
	}
</style>