<template>
	<div class="hello borrowdeyaito_pwd" style="height: 100%;">
		<div class="deal_password_box" v-show="deal_password">
			<div style="position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;">
				<van-password-input :value="value" info="" @focus="showKeyboard = true" />
				<p class="showkey_num_ti">支付密码为六位数字</p>
				<button class="put_recharge_money" v-on:click="put_money_sure">确认充值</button>

				<van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false" />
			</div>

		</div>

		<div class="borrow_detail_to">
			<div class="borrow_detail_to_top">
				<p class="borrow_detail_to_top_title">{{borrowdetail.borrow_name}}</p>
				<div class="borrow_detail_to_top_con">
					<p>预计年化：<span>{{borrowdetail.borrow_interest_rate}}</span>%</p>
					<p>投资期限：<span>{{borrowdetail.borrow_duration}}</span>{{borrowdetail.duration_unit}}</p>
					<p>投资总额：<span>{{borrowdetail.borrow_money}}</span>元</p>
					<p>起投金额：<span>100</span>元</p>
					<p>计息方式：<span>{{borrowdetail.repayment_type}}</span></p>
					<p>手续费：<span>3</span>元</p>
				</div>
			</div>
			<div class="borrow_detail_con">
				<p class="borrow_detail_con_title">剩余可投金额：<span>{{borrowdetail.rest_borrow_money}}</span>元</p>
				<div class="borrow_detail_con_input">
					<input type="number" v-model="borrow_detail_con_input" />
					<button v-on:click="borrow_detail_con_inputyu">余额全投</button>
				</div>
				<div class="expect_earnings">
					<p>预计收益：<span v-model="expect_earnings_num">{{expect_earnings_num}}</span><span>元</span></p>
				</div>
				<router-link :to="{ name: 'Can_use_redpack', params: { invest_id: this.$route.params.id,invest_money:this.borrow_detail_con_input,id:this.$route.params.id,expect_earnings_num:this.expect_earnings_num}}">
				<div class="invest_welfare">
					
						投资福利：
					<p v-model="red_pack_backshow1" v-show="pack_num_show">{{red_pack_backshow}}个可用红包</p>
					<p v-model="red_pack_backshow1" v-show="pack_num_show_money">{{this.$route.params.name}}</p>
					<img src="../common/right_jian.png" />
					
					
				</div>
				</router-link>
			</div>
			<div class="account_balance">
				账户余额：
				<p><span>{{user_yourselfshow.active_balance}}</span>元</p>
				<p class="account_balance_ti" v-show="account_balance_ti">
					<router-link to='/recharge'>余额不足，请充值>></router-link>
				</p>
			</div>
			<p class="agreement"><input type="checkbox" v-model="pick" v-bind:value="1">我已阅读并同意
				<a>《借款协议》</a>
			</p>
			<div class="borrow_detail_to_btn"><button v-on:click="immediately" v-show="borrow_detail_to_btn">立即投资</button></div>
			<div class="borrow_detail_to_btn borrow_detail_to_btn1" v-show="borrow_detail_to_btn1"><button>立即投资</button></div>
		</div>
	</div>

</template>

<script>
	import commonsum from '../vuex/common.vue'
	import { getHeader } from '../vuex/header'
	import eventbus from './eventBus'
	import { Toast } from 'vant'
	import { formatDate } from '../lib/time'
	export default {
		name: 'app',
		data() {
			return {
				pack_num_show:true,
				pack_num_show_money:false,
				serverSrc:this.redpack.serverSrc,
				red_pack_backshowor:'',
				deal_password: false,
				borrow_detail_con_input: '100',
				expect_earnings_num: '0',
				name: "开始",
				active: 1,
				borrowdetail: '',
				user_yourselfshow: '',
				pick: '1',
				value: '',
				red_pack_backshow:'0',
				red_pack_backshow1: '',
				account_balance_ti: false,
				borrow_detail_to_btn: true,
				borrow_detail_to_btn1: false,
				showKeyboard: true
			}
		},
		
		created() {
			console.log(this.redpack.http)
			this.Borrowlistshowit();
			this.user_yourself_num();
//			console.log(this.$route.params)
			if(this.serverSrc==1){
				this.pack_num_show=true
				this.pack_num_show_money=false
			}else if(this.serverSrc==2){
				this.borrow_detail_con_input=this.$route.params.invest_money
//				this.expect_earnings_num = this.$route.params.expect_earnings_num
//				console.log(this.expect_earnings_num)
				this.pack_num_show=false
				this.pack_num_show_money=true
			}
		},
		mounted() {
			this.Borrowlistshowit();
			
		},
		methods: {
			borrow_detail_con_inputyu() {
				this.borrow_detail_con_input = this.user_yourselfshow.active_balance
			},
			onInput(key) {
				this.value = (this.value + key).slice(0, 6);
			},
			onDelete() {
				this.value = this.value.slice(0, this.value.length - 1);
			},
			immediately() {
				if(this.borrow_detail_con_input == '') {
					Toast("请输入充值金额")
				} else if(this.borrow_detail_con_input > this.user_yourselfshow.active_balance) {
					Toast("余额不足，请去充值")
				} else {
					this.deal_password = true
					this.showKeyboard = true

				}
			},
			investto() {
				var headers = getHeader();
				var messdata = {
					'token': sessionStorage.getItem('name'),
					'borrow_id': this.$route.params.id,
					'coupon_id': this.$route.params.coupon_id,
					'invest_money': this.borrow_detail_con_input
				}
				var _self = this;
				$.ajax({
					type: 'post',
					data: messdata,
					url: commonsum.web_url+'/mobile/user/invest',
					headers: headers,
					beforeSend: (res) => {
						_self.loading = 'loading_show'
					},
					success: function(data) {
						_self.loading = 'loading_no'
						var inverstmoney = eval('(' + data + ')');
						Toast(inverstmoney.message)
//						console.log(inverstmoney)
						_self.deal_password = false

						//							 _self.$router.push('/mine')
					}
				});
			},
			put_money_sure() {
				if(this.value == '') {
					Toast('请输入交易密码')
				} else {
					var data1 = {
						'token': sessionStorage.getItem('name'),
						'trade_pwd': this.value
					}
					var headers = getHeader();
					var _self = this;
					$.ajax({
						type: 'post',
						data: data1,
						url: commonsum.web_url+'/mobile/user/verifytradepwd',
						headers: headers,
						beforeSend: (res) => {
							_self.loading = 'loading_show'
						},
						success: function(data) {
							_self.loading = 'loading_no'
							var get_money_chong_type = eval('(' + data + ')');
							Toast(get_money_chong_type.message)
//							console.log(get_money_chong_type)
							if(get_money_chong_type.status == 200) {
								_self.investto();
							}
						}
					});
				}

			},
			goBack() {
				this.goBackState = false;
				this.iframeState = false;
			},
			showIframe() {
				this.goBackState = true;
				this.iframeState = true;
			},
			Borrowlistshowit() {
				var headers = getHeader();
				var data1 = {
					'borrow_id': this.$route.params.id
				}
				var _self = this;
				$.ajax({
					type: 'post',
					data: data1,
					url: commonsum.web_url+'/mobile/borrow/detailinfo',
					headers:headers,
					success: function(data) {
						var borrowdetail = eval('(' + data + ')');
						_self.borrowdetail = borrowdetail.data;
//						console.log(_self.borrowdetail)
						//						console.log(borrowdetail);
						//						var borrow_info = _self.borrowdetail.borrow_info
					}

				});
			},
			user_yourself() {
				var headers = getHeader();
				if(sessionStorage.getItem('name') == null) {
					this.$router.push('/login')
				} else {
					var data1 = {
						'token': sessionStorage.getItem('name')
					}
					var _self = this;
					$.ajax({
						type: 'post',
						data: data1,
						url: commonsum.web_url+'/mobile/user/userinfo',
						headers:headers,
						success: function(data) {
							var user_yourself = eval('(' + data + ')');
//							console.log(user_yourself.data.bind_status);
//							console.log(_self.user_yourselfshow)
							if(user_yourself.data.bind_status == 0) {
								_self.$router.push('/Bindingcard')
							} else if(user_yourself.data.bind_status == 2) {
								Toast('审核中');
							} else {
								//								alert(111)
							}
						}

					});
				}

			},
			user_yourself_num() {
				var headers = getHeader();
				var data1 = {
					'token': sessionStorage.getItem('name')
				}
				var _self = this;
				$.ajax({
					type: 'post',
					data: data1,
					url: commonsum.web_url+'/mobile/user/fundinfo',
					headers:headers,
					success: function(data) {
						var user_yourself = eval('(' + data + ')');
//						console.log(user_yourself.data.bind_status);
						_self.user_yourselfshow = user_yourself.data
      
					}

				});
			},
			formatMonth: function(value) {
				return value.replace(/个月/g, '')
			},

		},
//		 beforeRouteLeave(to, from, next) {
//       // 设置下一个路由的 meta
//      to.meta.keepAlive = true;  // 让 A 缓存，即不刷新
//      next();
//  },
		mounted() {
//			console.log(this.$route.params)

		},
		watch: {
			$route: {
			    handler: function(){
			      this.redpack.serverSrc=1
			    },
			    // 深度观察监听
			    deep: true
			 },
			
			  
			
			borrow_detail_con_input: function(Value) {
				var headers = getHeader();
				console.log(Value)
				this.expect_earnings_num = (Value * this.borrowdetail.borrow_duration * this.borrowdetail.borrow_interest_rate / 100 / 12).toFixed(2)

				var data = {
					'token': sessionStorage.getItem('name'),
					'invest_id': this.$route.params.id,
					'invest_money': Value
				}
				var _self = this;
				$.ajax({
					type: 'post',
					data: data,
					url: commonsum.web_url+'/mobile/reward/activelists',
					headers:headers,
					success: function(data) {
						var red_pack_back = eval('(' + data + ')');
//						if(red_pack_back.data.length !=0){
							_self.red_pack_backshow = red_pack_back.data.length
							
//						}else if(red_pack_back.data.length ==0){
//							_self.red_pack_backshow=111
//						}
						
//						console.log(red_pack_back.data.length)
					}
				});

				if(Value > this.user_yourselfshow.active_balance) {
					this.account_balance_ti = true
				} else {
					this.account_balance_ti = false
				}
//				console.log(this.expect_earnings_num)
			},
			pick: function() {
				if(this.pick == 1) {
					this.borrow_detail_to_btn = true
					this.borrow_detail_to_btn1 = false
				} else {
					this.borrow_detail_to_btn1 = true
					this.borrow_detail_to_btn = false
				}
			}
		},
		
		computed: {

		},
		components: {}

	}
</script>

<style>
	.van-toast--text {
		z-index: 1000000000000000000 !important;
	}
	
	.borrowdeyaito_pwd .van-number-keyboard {
		bottom: 0 !important;
	}
	
	.borrow_detail_to_btn1 button {
		background: #CACACA !important;
	}
	
	.borrow_detail_to_btn {
		position: absolute;
		width: 100%;
		bottom: 3%;
		text-align: center;
	}
	
	.borrow_detail_to_btn button {
		width: 90%;
		height: 3.3em;
		border: 0;
		background: #ff584a;
		color: white;
		border-radius: 0.5em;
	}
	
	.borrow_detail_to {
		position: relative;
	}
	
	.borrow_detail_to .agreement {
		height: 5em;
		line-height: 5em;
		padding-left: 2.3em;
		position: relative;
	}
	
	.borrow_detail_to .agreement input {
		position: absolute;
		left: 1em;
		top: 2em;
	}
	
	.borrow_detail_to .agreement a {
		color: #58b6fc;
	}
	
	.account_balance_ti {
		position: absolute;
		right: 1em;
		color: #58b6fc;
	}
	
	.account_balance p {
		display: inline-block;
	}
	
	.account_balance {
		height: 3em;
		line-height: 3em;
		background: white;
		margin-top: 1em;
		padding-left: 1em;
		position: relative;
	}
	
	.invest_welfare {
		height: 3em;
		line-height: 3em;
		padding-left: 1em;
		position: relative;
	}
	
	.invest_welfare p {
		position: absolute;
		right: 3em;
		top: 0;
		color: #ff584a;
	}
	
	.invest_welfare img {
		height: 2em;
		position: absolute;
		right: 1em;
		top: 0.58em;
	}
	
	.borrow_detail_con {
		background: white;
		margin-top: 1em;
	}
	
	.expect_earnings p span {
		color: #ff584a;
	}
	
	.expect_earnings {
		height: 3em;
		line-height: 3em;
		padding-left: 1em;
		border-bottom: 1px solid #F7F7F7;
	}
	
	.borrow_detail_con .borrow_detail_con_title {
		padding-left: 1em;
		height: 3em;
		line-height: 3.5em;
		color: #7b7b7b;
	}
	
	.borrow_detail_con_input {
		text-align: center;
	}
	
	.borrow_detail_con_input input {
		height: 2.3em;
		width: 90%;
		border-radius: 0.4em;
		border: 1px solid #ff584a;
		padding-left: 1em;
		font-size: 1.3em;
	}
	
	.borrow_detail_con_input button {
		height: 3.2em;
		border-radius: 0.4em;
		color: white;
		background: #ff584a;
		border: 0;
		padding-left: 1.8em;
		padding-right: 1.8em;
		margin-left: -7.9em;
		margin-top: 0em;
	}
	
	.borrow_detail_to {
		height: 90%;
		background: #F7F7F7;
	}
	
	.borrow_detail_to_top {
		background: white;
		height: 11em;
	}
	
	.borrow_detail_to_top_title {
		line-height: 3em;
		padding-left: 1em;
		font-size: 1.3em;
	}
	
	.borrow_detail_to_top .borrow_detail_to_top_con p {
		width: 45%;
		line-height: 2.3em;
		float: left;
		padding-left: 1em;
		color: #7b7b7b;
	}
</style>