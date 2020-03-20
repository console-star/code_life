<template>
	<div class="hello">
		<ul class="password_else">
			<li><span>请输入原密码：</span><input v-model="old_password" type="text" placeholder="请输入原密码"/></li>
			<li><span>请输入新密码：</span><input v-model="new_password" type="text" placeholder="请输入新密码"/></li>
			<li><span>请确认新密码：</span><input v-model="new_password1" type="text" placeholder="请确认新密码"/></li>
		</ul>
		<p style="text-align: center;"><button class="password_else_btn" v-on:click="changeuserpass">确认修改</button></p>
	</div>
</template>

<script>
	import commonsum from '../../vuex/common.vue'
	import { getHeader } from '../../vuex/header'
	import {Toast} from 'vant';

	export default {
		name: 'pasword',
		data() {

			return {
				old_password:'',
				new_password:'',
				new_password1:''
			}
		},
		created() {
		},
		mounted() {
			
		},
		methods: {
			changeuserpass() {
				var headers = getHeader();
				if(this.old_password==''){
					Toast("请输入原密码")
				}else if(this.new_password==''){
					Toast("请输入新密码")
				}else if(this.new_password==''){
					Toast("请输确认新密码")
				} else if(this.new_password!=this.new_password1){
					Toast("两次密码不一致")
				}else{
					var data1 = {
						'token': sessionStorage.getItem('name'),
						'oldpwd':this.old_password,
						'newpwd':this.new_password
					}
					var _self = this;
					$.ajax({
						type: 'post',
						data: data1,
						url: commonsum.web_url+'/mobile/user/changeuserpass',
						headers:headers,
						success: function(data) {
							var changeuserpass = eval('(' + data + ')');
						    Toast(changeuserpass.message)
							
							//						var borrow_info = _self.borrowdetail.borrow_info
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
	.password_else li{
				width: 100%;
				height: 40px;
				line-height: 40px;
				border-bottom: 1px solid #F7F7F7;
				padding-left:20px ;
				position: relative;
			}
			.password_else li input{
				position: absolute;
				left: 130px;
				top: 0;
			}
			.service{
				text-align: right;
				height: 0.8rem;
				line-height: 0.8rem;
				color: #5d9dff;
				padding-right: 0.3rem;
			}
			.password_else_btn{
				width: 70%;
				height: 40px;
				color: white;
				background: #f84d4d;
				border: 0;
				margin: auto;
				border-radius: 5px;
				margin-top: 80px;
			}
</style>