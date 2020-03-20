<template>
	<!--忘记密码1-->
	<div style="height: 100%;width: 100%;background: #F7F7F7;">
		<div class="login-wrap">
			<!--<div class="historiyto" style="text-align: center;position: absolute;width: 100%;"><img src="../../common/historiyto.png"/>找回密码</div>-->
			<p class="login_logo"><img src="../../common/logo.png" /></p>
			<ul>
				<li><i></i><input type="password" placeholder="请输入密码" v-model="newpassword"></li>
				<li><i></i><input type="password" placeholder="请确认密码" v-model="newpassword1"></li>
			</ul>
			<div style="text-align: center;"><button class="login_btn1" v-on:click="newpasswordform">确定</button></div>
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
          
           newpasswordform () {
             	var headers = getHeader();
             	var _self = this;
				if(this.newpassword == "" || this.newpassword1 == "") {
					Toast("请输入密码")
				}else if(this.newpassword!=this.newpassword1){
					Toast("两次密码不一致")
				}else{
				    let data = {
						'tel': sessionStorage.getItem("tel"),
						'new_pwd': this.newpassword1,
						'verify_code':sessionStorage.getItem("verify_code")
					}
				$.ajax({
						type: 'post',
						data:data,
						url: commonsum.web_url+'/mobile/user/resetpwd',
						headers:headers,
						success: (data) => {
							console.log(typeof(data), data)
							if(typeof(data) === 'string') data = JSON.parse(data)
							console.log(data)
							if(data.status === 200) {	
		                         Toast(data.message)
		                        _self.$router.push('/amend_sucess') 
							} else {
								Toast(data.message)
							}

						}
					});
			  }
          }
	},
	 components: {
         
        }
	}
</script>

<style>
</style>