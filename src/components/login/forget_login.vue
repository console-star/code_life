<template>
	<!--忘记密码-->
	<div style="height: 100%;width: 100%;background: #F7F7F7;">
		<div class="login-wrap">
			<!--<div class="historiyto" style="text-align: center;position: absolute;width: 100%;"><img src="../../common/historiyto.png"/>找回密码</div>-->
			<p class="login_logo"><img src="../../common/logo.png" /></p>
			<ul>
				<li><i></i><input type="text" placeholder="请输入用户名" v-model="newUsername"></li>
				<li class="login_con_password">
						<i></i><input type="text" placeholder="请输入短信验证码" v-model="phonemessege" />
						<message :start='start' @countDown ='start=false' @click.native='sendCode1'></message>
			    </li>
			</ul>
			<div class="login-wrapbtn"><p style="height: 50px;line-height:50px;padding-right: 60px;text-align: right;color: #2196F3;" v-on:click="password_elseto">其它方式找回>></p></div>
			<div style="text-align: center;"><button class="login_btn1" v-on:click="newpasswordnext">下一步</button></div>
		</div>
	</div>
		
</template>

<script>
	import commonsum from '../../vuex/common.vue'
	import { getHeader } from '../../vuex/header'
	import { Toast } from 'vant';
	import message from './message.vue'
	import { setCookie, getCookie } from '../../assets/cookie.js'
	export default {
		data() {
			return {
				start : false,
				phonemessege: '',
				newUsername:'',
			}
		},
		mounted() {
			/*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
			if(getCookie('username')) {
				this.$router.push('/')
			}
		},
		methods: {
          //修改密码验证码
			sendCode1 (value) {
				var headers = getHeader();
				var _self = this;
				 if(this.newUsername == ""){
			        alert("请输入用户名")
			    }else{
				let data = {
					'tel':this.newUsername,
					'type':2
				}
				$.ajax({
						type: 'post',
						data,
						url: commonsum.web_url+'/mobile/user/commitphone',
						headers: headers,
						success: (data) => {
							console.log(typeof(data), data)
							if(typeof(data) === 'string') data = JSON.parse(data)
							console.log(data)
							if(data.status === 200) {
								
								Toast("发送成功！");
								_self.start = true
								sessionStorage.setItem("tel",this.newUsername)
								
							} else {
								Toast(data.message);
							}

						}
					});
			    }
			    
//              //前面发送ajax请求成功之后调用this.start = true开始短信倒计时
//              this.start = true
          },
          newpasswordnext(){
          	    var headers = getHeader();
				var _self = this;
				 if(this.newUsername == "" || this.phonemessege == "") {
					Toast("请输入用户名或密码")
				} else {
				let mess = {
						'tel': this.newUsername,
						'verify_code': this.phonemessege
				}
				$.ajax({
						type: 'post',
						data: mess,
						url: commonsum.web_url+'/mobile/user/verifycode',
						headers: headers,
						success: (data) => {
//							console.log(typeof(data), data)
							if(typeof(data) === 'string') data = JSON.parse(data)
							console.log(data)
							if(data.status === 200) {
								Toast(data.message)
								sessionStorage.setItem("verify_code", this.phonemessege)
								_self.$router.push('/forget_login1')
							} else {
								Toast(data.message)
							}

						}
					});
			    }
			},
			password_elseto(){
				this.$router.push('/else_find')
			}
	},
	 components: {
          message 
        }
	}
</script>

<style>
</style>