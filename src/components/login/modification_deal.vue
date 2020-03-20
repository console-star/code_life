<template>
	<div class="modification_deal">
		<ul class="password_else">
			<li><span>银行卡后8位：</span><input type="number" oninput="if(value.length > 8)value = value.slice(0, 8)" v-model="bank_card_last_eight" placeholder="请输入已绑定的银行卡后8位"/></li>
			<li><span>设置新密码：</span><input type="password" oninput="if(value.length > 6)value = value.slice(0, 6)" v-model="set_new_password" placeholder="请输入6位数字交易密码"/></li>
			<li><span>确认新密码：</span><input type="password" oninput="if(value.length > 6)value = value.slice(0, 6)" v-model="set_new_password1" placeholder="请再次输入交易密码"/></li>
			<li class="getsecond"><span>设置验证码：</span><input type="text" v-model="get_second_code" placeholder="请输入验证码"/><p> <message :start='start' @countDown ='start=false' @click.native='sendCode'></message></p></li>
		</ul>
		<p style="text-align: center;"><button class="password_else_btn" v-on:click="changeuserpass">确认修改</button></p>
	</div>
</template>

<script>
	import commonsum from '../../vuex/common.vue'
	import { getHeader } from '../../vuex/header'
	import {Toast} from 'vant';
    import message from './message.vue'
	export default {
		name: 'pasword',
		data() {

			return {
				bank_card_last_eight:'',
				set_new_password:'',
				set_new_password1:'',
				get_second_code:''
			}
		},
		created() {
		},
		mounted() {
			
		},
		methods: {
			sendCode (value) {
				var headers = getHeader();
				var _self = this;
				 if(this.bank_card_last_eight == ""){
			        Toast("请输入银行卡号")
			    }else if(this.set_new_password == ""){
			    	Toast("请输入交易密码")
			    }else if(this.set_new_password1 == ""){
			    	Toast("请确认交易密码")
			    }else if(this.set_new_password != this.set_new_password1){
			    	Toast("密码不一致")
			    }else{
				let data = {
					'tel':sessionStorage.getItem('username'),
				    'type':3	
				}
				console.log(data)
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
								Toast("发送成功")
								_self.start = true
								
							} else {
								Toast(data.message)
							}

						}
					});
			    }
			    
//              //前面发送ajax请求成功之后调用this.start = true开始短信倒计时
//              this.start = true
          },
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
						'bank_last_num':this.bank_card_last_eight,
						'new_trade_pwd':this.set_new_password,
						'verify_code':this.get_second_code
					}
					console.log(data1)
					var _self = this;
					$.ajax({
						type: 'post',
						data: data1,
						url: commonsum.web_url+'/mobile/user/changetradepwd',
						headers:headers,
						success: function(data) {
							var changeuserpass = eval('(' + data + ')');
							console.log(changeuserpass)
						    Toast(changeuserpass.message)
							if(changeuserpass.status==200){
								_self.$router.push('/mine')
							}
							//						var borrow_info = _self.borrowdetail.borrow_info
						}

					});
				}
				
			}
			
		},
		components: {
          message 
        }
	}
</script>

<style>
	.getsecond button{
		height: 90%;
		background: white;
		border: 0;
		color: #5d9dff;
	}
	.password_else li{
				width: 100%;
				height: 40px;
				line-height: 40px;
				border-bottom: 1px solid #F7F7F7;
				padding-left:20px;
				position: relative;
			}
			.password_else li input{
				position: absolute;
				left: 100px;
				top: 0;
			}
			.password_else li p{
				position: absolute;
				right: 20px;
				top: 0;
				color: #5d9dff;
			}
			.service{
				text-align: right;
				height: 30px;
				line-height: 30px;
				color: #5d9dff;
				padding-right: 30px;
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