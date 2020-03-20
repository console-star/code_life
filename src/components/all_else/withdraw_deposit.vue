<template>
	<div class="hello get_money" style="height: 100%;background: #efeff5;padding-top: 50px;">
		<ul class="withdraw_deposit">
			<li><span class="bank_find_img"><img :src="imgUrl_bank"></span>
				<p class="bank_find">{{userpersont.bank_name}}<span>(尾号:<span>{{bank_num}}</span>)</span>
				</p>
			</li>
			<li class="withdraw_deposit_write">
				<p>提现金额(元)</p>
				<h1>¥</h1>
				<input type="number" placeholder="请输入提现金额" v-model="amount" />
			</li>
			<li>手续费：<span style="color: #f84d4d;">{{shouxufei}}</span>元</li>
			<li class="remaining_sum">
				<p><img :src="imgUrl1">账户余额<span>{{zhanghuyue}}</span>元</p>
				<p v-show="showit"><img :src="imgUrl2"><span>账户余额不足</span></p>
			</li>
			<li class="auth_code">
				<span>短信验证码：</span><input type="text" placeholder="请输入短信验证码" v-model="phonemessege" />
				<message :start='start' @countDown='start=false' @click.native='sendCode'></message>
			</li>
			<router-link to="/Myaward">
				<li class="red_pack_tixian">
					您还有<span style="color: #f84d4d;margin-left: 5px;margin-right: 5px;">{{my_redpack_num}}</span>个红包
					<p class="red_pack_tixian_go">去看看<img src="../../common/right_jian.png" /></p>
				</li>
			</router-link>
			<router-view></router-view>
		</ul>
		<p style="margin-top: 10px;padding-left: 15px">温馨提示：提现请先阅读
			<a style="color: red;" href="http://www.jinlingdai.cn/mobile/user/tixian">《提现数说明》</a>
		</p>
		<p class="withdraw_deposit_btn"><button v-on:click="withdraw_deposit_btn">提现</button></p>
		<!--交易密码-->
		<div class="deal_password_box" v-show="deal_password">
			<div style="position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;">
				<van-password-input :value="value" info="" @focus="showKeyboard = true" />
				<p class="showkey_num_ti">支付密码为六位数字</p>
				<button class="put_recharge_money" v-on:click="get_money_sure">确认提现</button>
				<!-- 数字键盘 -->
				<van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false" />
			</div>
		</div>
	</div>
</template>

<script>
	import commonsum from '../../vuex/common.vue'
	import { getHeader } from '../../vuex/header'
	import { Toast } from 'vant'
	import message from '../login/message.vue'
	export default {
		name: 'app',
		data() {
			return {
				deal_password: false,
				imgUrl_bank: '',
				imgUrl1: 'http://www.jinlingdai.com/Style/new/images/web/money.png',
				imgUrl2: 'http://www.jinlingdai.com/Style/new/images/web/money.png',
				value: '',
				amount: '',
				phonemessege: '',
				my_redpack_num: '',
				userpersont: '',
				zhanghuyue: '',
				bank_num: '',
				shouxufei: '0',
				showit: false,
				start: false,
				showKeyboard: true,
				loading: 'loading_no'
			}
		},
		created() {
			this.userzhang();
			this.userperson()
		},
		computed: {

		},
		watch: {
			amount: function(Value) {
				var headers = getHeader();
				var _self = this;
				let data = {
					'amount': Value,
					'token': sessionStorage.getItem("name")
				}
				$.ajax({
					type: 'post',
					data: data,
					url: commonsum.web_url+'/mobile/user/withdraw',
					headers:headers,
					success: (data) => {
						if(typeof(data) === 'string') data = JSON.parse(data)
						console.log(data.data.fee)
						if(data.status === 200) {
							//							_self.start = true
							_self.shouxufei = data.data.fee;

						} else if(data.status != 200) {
							Toast(data.message)
						}
						//else if(data.status == 200) {
						//							this.shouxufei=data.data.fee
						//							console.log(this.shouxufei)
						//						}

					}
				});
			}

		},
		methods: {
			onInput(key) {
				this.value = (this.value + key).slice(0, 6);
			},
			onDelete() {
				this.value = this.value.slice(0, this.value.length - 1);
			},
			toRegister() {
				// TODO: add it
			},
			withdraw_deposit_btn() {
				var _self = this;
				
				if(this.amount == '') {
					Toast("请输入提现金额")
				} else if(this.phonemessege == '') {
					Toast("请输入短信验证码")
				} else {
					this.deal_password = true
					this.showKeyboard = true

				}

			},
			get_money_sure() {
				var headers = getHeader();
				var token = sessionStorage.getItem("name")
				if(this.value == '') {
					Toast("请输入交易密码")
				} else {
					let data = {
						'token': token,
						'trade_pwd': this.value,
						'bank_num': this.userpersont.bank_num,
						'amount': this.amount
					}
					console.log(data)
					$.ajax({
						type: 'post',
						data: data,
						url: commonsum.web_url+'/mobile/user/withdraw_cash',
						headers:headers,
						success: (data) => {
							if(typeof(data) === 'string') data = JSON.parse(data)
							if(data.status === 200) {
								_self.zhanghuyue = data.data.active_balance;
								_self.my_redpack_num = data.data.expand_count
							} else {
								Toast("状态异常")
							}

						}
					});
				}

			},
			//短信验证码
			sendCode(value) {
				var headers = getHeader();
				var username = sessionStorage.getItem('username')
				var _self = this;
				if(this.amount == "") {
					alert("请输入提现金额")
				} else {
					let data = {
						'tel': username
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
								Toast("发送成功")
								_self.start = true

							} else {
								Toast("发送失败")
							}

						}
					});
				}

				//              //前面发送ajax请求成功之后调用this.start = true开始短信倒计时
				//              this.start = true
			},
			userzhang() {
				var headers = getHeader();
				var _self = this;
				var token = sessionStorage.getItem("name")
				let data = {
					'token': token
				}
				$.ajax({
					type: 'post',
					data: data,
					url: commonsum.web_url+'/mobile/user/fundinfo',
					headers:headers,
					success: (data) => {
						if(typeof(data) === 'string') data = JSON.parse(data)
						if(data.status === 200) {
							_self.zhanghuyue = data.data.active_balance;
							_self.my_redpack_num = data.data.expand_count

						} else {
							Toast("状态异常")
						}

					}
				});
			},
			userperson() {
				var headers = getHeader();
				var _self = this;
				var token = sessionStorage.getItem("name")
				let data = {
					'token': token
				}
				$.ajax({
					type: 'post',
					data: data,
					url: commonsum.web_url+'/mobile/user/userinfo',
					headers:headers,
					success: (data) => {
						if(typeof(data) === 'string') data = JSON.parse(data)
						if(data.status === 200) {
							console.log(data.data.bank_data[0])
							_self.userpersont = data.data.bank_data[0]
							var banknum = data.data.bank_data[0].bank_num
							console.log(banknum.slice(-4))
							_self.bank_num = banknum.slice(-4)
							_self.imgUrl_bank = data.data.bank_data[0].bank_img
						} else {
							Toast("状态异常")
						}

					}
				});
			},
			go_myred_pack() {
				this.$router.push('/myaward')
				console.log(111)
			}
		},
		components: {
			message
		}
	}
</script>

<style>
	/*@import "../../common/css/reset.css";*/
	
	.get_money .van-number-keyboard {
		bottom: 0 !important;
	}
	
	.withdraw_deposit {
		background: white;
	}
	
	.withdraw_deposit .auth_code div {
		position: absolute;
		right: 50px;
		top: 0;
	}
	
	.withdraw_deposit .auth_code button {
		width: 90px;
		height: 30px;
		line-height: 30px;
		background: white;
		border: 0;
		/*border:1px solid #2196F3;*/
		color: #2196F3;
	}
	
	.red_pack_tixian {
		color: #333 !important;
	}
	
	.red_pack_tixian_go {
		position: absolute;
		right: 40px;
		top: 0;
	}
	
	.red_pack_tixian_go img {
		width: 13px;
		height: 21px;
		position: absolute;
		top: 9px;
		margin-left: 6px;
	}
	
	.withdraw_deposit li {
		width: 100%;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #F7F7F7;
		padding-left: 15px;
		position: relative;
	}
	
	.bank_find_img img {
		width: 30px;
		height: 30px;
		border-radius: 30px;
		margin-top: 5px;
	}
	
	.bank_find {
		display: inline-block;
		margin-left: 10px;
		position: absolute;
	}
	
	.withdraw_deposit li:nth-child(2) {
		height: 80px !important;
	}
	
	.withdraw_deposit_write input {
		height: 40px;
		border: 0;
		font-size: 16px;
		padding-left: 50px;
	}
	
	.withdraw_deposit_write h1 {
		font-size: 23px;
		position: absolute;
		left: 40px;
		top: 40px;
	}
	
	.remaining_sum p {
		float: left;
		/*width: 50%;*/
		padding-left: 28px;
		position: relative;
	}
	
	.remaining_sum p:nth-child(2) {
		width: 33%;
	}
	
	.remaining_sum p img {
		width: 20px;
		height: 20px;
		border-radius: 20px;
		position: absolute;
		left: 0px;
		top: 8px;
	}
	
	.remaining_sum p span {
		color: #f84d4d;
		margin-left: 0.8rem;
		margin-right: 0.8rem;
		width: 50px;
	}
	
	.auth_code input {
		border: 0;
	}
	
	.auth_code p {
		height: 30px;
		line-height: 30px;
		border: 1px solid #5d9dff;
		position: absolute;
		top: 5px;
		right: 25px;
		border-radius: 0.8rem;
		padding-right: 0.8rem;
		padding-left: 0.8rem;
		color: #5d9dff;
	}
	
	.withdraw_deposit_btn {
		text-align: center;
	}
	
	.withdraw_deposit_btn button {
		width: 85%;
		height: 40px;
		background: #ff5449;
		color: white;
		border-radius: 5px;
		border: 0;
		margin-top: 40px;
	}
</style>