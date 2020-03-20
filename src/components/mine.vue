<template>
	<div class="hello" style="height: 90%;overflow-y:scroll;">
		<div class="jinlingdai_mine">
			<div class="jinlingdai_mine_top">
				<p class="lingdang" v-on:click="information"><span></span></p>
				<div class="jinlingdai_mine_top_tou">
					<p class="jinlingdai_mine_top_tou_rou" v-on:click="jinlingdai_mine_top_tou_rou"><img v-bind:src="getpersondetailshow.head" /></p>
				</div>
				<p class="userphone" v-show="ok">未登录</p>
				<p class="userphone">{{name}}</p>
				<p class="user_allmoney">资产总额：<span>{{minezhanghu.total_balance}}</span></p>
				<div class="user_moneyfind">
					<ul>
						<li>
							<p>{{minezhanghu.active_balance}}</p>
							<p>可用余额</p>
						</li>
						<li>
							<p>{{minezhanghu.total_interest}}</p>
							<p>累计收益</p>
						</li>
						<li>
							<p>{{minezhanghu.total_interest}}</p>
							<p>待收收益</p>
						</li>

					</ul>
				</div>
			</div>
			<div class="withdrawal_top_up">
				<div v-on:click="withdrawdeposit">
					<p style="color: #7db3da;">提现</p>
				</div>
				<div v-on:click="rechargeto">
					<p style="color: #f35e3e;">充值</p>
				</div>
			</div>
			<div class="mine_cont">
				<ul>
					<li v-on:click="terminal1">
						<p class="mine_icon1"></p>
						<div>定期项目</div>
					</li>
					<li v-on:click="runningwater">
						<p class="mine_icon2"></p>
						<div>账户流水</div>
					</li>
					<li v-on:click="moneystatistics">
						<p class="mine_icon3"></p>
						<div>资金统计</div>
					</li>
					<li v-on:click="my_award">
						<p class="mine_icon4"></p>
						<div>我的奖励</div>
					</li>
					<li v-on:click="setting">
						<p class="mine_icon5"></p>
						<div>设置</div>
					</li>
					<li>
						<p class="mine_icon6"></p>
						<div>联系客服</div>
					</li>
					<li>
						<p class="mine_icon7"></p>
						<a href="mqqwpa://im/chat?chat_type=wpa&uin=2730407005&version=1&src_type=web&web_src=oicqzone.com">
							<div>QQ群</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	//	import { setCookie, getCookie, delCookie } from '../assets/cookie.js'
	import commonsum from '../vuex/common.vue'
	import { getHeader } from '../vuex/header'
	export default {
		name: 'home',
		data() {

			return {
				alexa: "10000",
				name: '',
				ok: true,
				minezhanghu: '',
				getpersondetailshow: ''
			}

		},
		created() {
			this.getpersondetail()
		},
		mounted() {
			/*页面挂载获取保存的cookie值，渲染到页面上*/
			let uname = sessionStorage.getItem('username')
			this.name = uname
			/*如果cookie不存在，则跳转到登录页*/
			if(uname == null) {
				this.ok = true
			} else {
				var headers = getHeader();
				this.ok = false
				var data1 = {
					'token': sessionStorage.getItem('name')
				}
				console.log(data1)
				var _self = this;
				console.log(data1)
				$.ajax({
					type: 'post',
					data: data1,
					url: commonsum.web_url + '/mobile/user/fundinfo',
					headers: headers,
					success: function(data) {
						var minezhanghu = eval('(' + data + ')');
						_self.minezhanghu = minezhanghu.data;
						//						var borrow_info = _self.borrowdetail.borrow_info
					}

				});
			}
		},
		methods: {
			//获取个人信息
			getpersondetail() {
				var headers = getHeader();
				var datatoken = {
					'token': sessionStorage.getItem('name')
				}
				var _self = this;
				$.ajax({
					type: 'post',
					data: datatoken,
					url: commonsum.web_url + '/mobile/user/userinfo',
					headers: headers,
					success: function(data) {
						var getpersondetail = eval('(' + data + ')');
						console.log(getpersondetail.data);
						_self.getpersondetailshow = getpersondetail.data

						//						var borrow_info = _self.borrowdetail.borrow_info
					}

				});
			},
			jinlingdai_mine_top_tou_rou() {
				let uname = sessionStorage.getItem('username')
				this.name = uname
				/*如果cookie不存在，则跳转到登录页*/
				if(uname == null) {
					this.$router.push('/login')
				} else {
					this.$router.push('/personal')
				}
			},
			withdrawdeposit() {
				let uname = sessionStorage.getItem('username')
				this.name = uname
				/*如果cookie不存在，则跳转到登录页*/
				if(uname == null) {
					this.$router.push('/login')
				} else {
					var headers = getHeader();
					var data1 = {
						'token': sessionStorage.getItem('name')
					}
					var _self = this;
					$.ajax({
						type: 'post',
						data: data1,
						url: commonsum.web_url + '/mobile/user/userinfo',
						headers: headers,
						success: function(data) {
							var user_yourself = eval('(' + data + ')');
							console.log(user_yourself.data);
							if(user_yourself.data.bind_status == 0) {
								_self.$router.push('/Bindingcard')
							} else if(user_yourself.data.bind_status == 1) {
								_self.$router.push('/Withdrawdeposit')
							} else if(user_yourself.data.bind_status == 3) {
								Toast('审核中');
							}

							//						var borrow_info = _self.borrowdetail.borrow_info
						}

					});
				}

			},
			information() {
				this.$router.push('/Inform_information')
			},
			my_award() {
				let uname = sessionStorage.getItem('username')
				this.name = uname
				/*如果cookie不存在，则跳转到登录页*/
				if(uname == null) {
					this.$router.push('/login')
				} else {
					this.$router.push('/myaward')
				}
			},
			setting() {
				let uname = sessionStorage.getItem('username')
				this.name = uname
				/*如果cookie不存在，则跳转到登录页*/
				if(uname == null) {
					this.$router.push('/login')
				} else {
					this.$router.push('/setting')
				}
			},
			rechargeto() {
				let uname = sessionStorage.getItem('username')
				this.name = uname
				/*如果cookie不存在，则跳转到登录页*/
				if(uname == null) {
					this.$router.push('/login')
				} else {
					var headers = getHeader();
					var data1 = {
						'token': sessionStorage.getItem('name')
					}
					var _self = this;
					$.ajax({
						type: 'post',
						data: data1,
						url: commonsum.web_url + '/mobile/user/userinfo',
						headers: headers,
						success: function(data) {
							var user_yourself = eval('(' + data + ')');
							if(user_yourself.data.bind_status == 0) {
								_self.$router.push('/Bindingcard')
							} else if(user_yourself.data.bind_status == 1) {
								_self.$router.push('/Recharge')
							}

							//						var borrow_info = _self.borrowdetail.borrow_info
						}

					});
				}
			},
			runningwater() {
				let uname = sessionStorage.getItem('username')
				this.name = uname
				/*如果cookie不存在，则跳转到登录页*/
				if(uname == null) {
					this.$router.push('/login')
				} else {
					this.$router.push('/runningwater')
				}
			},
			terminal1() {
				let uname = sessionStorage.getItem('username')
				this.name = uname
				/*如果cookie不存在，则跳转到登录页*/
				if(uname == null) {
					this.$router.push('/login')
				} else {
					this.$router.push('/terminal')
				}
			},
			moneystatistics() {
				let uname = sessionStorage.getItem('username')
				this.name = uname
				/*如果cookie不存在，则跳转到登录页*/
				if(uname == null) {
					this.$router.push('/login')
				} else {
					this.$router.push('/moneystatistics')
				}

			},
			quit() {
				/*删除cookie*/
				delCookie('username')
			},
			See(e) {
				window.location.href = e
			},
			user() {
				//因为在main.js中已经全局注册了store，所以这里直接用this.$直接使用。
				return this.$store.state.user
			},
			toggle: function() {
				this.isShow = !this.isShow;
			}
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.jinlingdai_mine_top_tou_rou img {
		width: 100%;
		height: 100%;
		border-radius: 4rem;
	}
	
	.jinlingdai_mine_top {
		width: 100%;
		height: 180px;
		background: #5d4459;
		position: relative;
	}
	
	.jinlingdai_mine_top_tou {
		width: 100%;
		padding-top: 1.6rem;
	}
	
	.jinlingdai_mine_top_tou p {
		width: 4rem;
		height: 4rem;
		background: url(../common/tou.png) no-repeat;
		background-size: 100% 100%;
		margin: auto;
	}
	
	.userphone {
		text-align: center;
		color: white;
		margin-top: 0.3rem;
	}
	
	.user_allmoney {
		text-align: center;
		color: white;
		margin-top: 0.5rem;
	}
	
	.user_allmoney span {
		font-size: 18px;
	}
	
	.user_moneyfind {
		width: 100%;
		height: 3.3rem;
		list-style: none;
		position: absolute;
		bottom: 0;
	}
	
	.user_moneyfind ul {
		list-style: none;
	}
	
	.user_moneyfind li {
		float: left;
		width: 33%;
		border-right: 1px solid #8e7c8b;
	}
	
	.user_moneyfind li:nth-child(3) {
		border-right: 0;
	}
	
	.user_moneyfind li p {
		text-align: center;
		color: white;
	}
	
	.lingdang {
		width: 2rem;
		height: 2rem;
		position: absolute;
		right: 1.3rem;
		top: 1rem;
		background: url(../common/lingdang.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.lingdang span {
		padding: 0.2rem;
		background: rgb(240, 20, 20) !important;
		position: absolute;
		right: 0.2rem;
		border-radius: 0.3rem;
	}
	
	.withdrawal_top_up {
		height: 2.4rem;
		width: 100%;
		margin-top: 0.8rem;
		border-bottom: 5px solid #F7F7F7;
	}
	
	.withdrawal_top_up p {
		float: left;
		width: 49%;
		text-align: center;
		height: 2.3rem;
		line-height: 2.3rem;
	}
	
	.withdrawal_top_up p:nth-child(1) {
		border-right: 2px solid #f7f7f7;
		color: #7db3da;
	}
	
	.withdrawal_top_up p:nth-child(2) {
		color: #f35e3e;
	}
	
	.mine_cont ul li {
		width: 100%;
		height: 3rem;
		line-height: 3rem;
		border-bottom: 1px solid #F7F7F7;
		position: relative;
	}
	
	.mine_cont ul li:nth-child(4) {
		border-bottom: 6px solid #F7F7F7;
	}
	
	.mine_cont ul li p {
		width: 1.2rem;
		height: 1.4rem;
		margin-top: 0.7rem;
		display: inline-block;
		margin-left: 1.3rem;
	}
	
	.mine_icon1 {
		background: url(../common/mine_icon1.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.mine_icon2 {
		background: url(../common/mine_icon2.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.mine_icon3 {
		width: 1.5rem !important;
		background: url(../common/mine_icon3.png) no-repeat;
		background-size: 1.5rem 100%;
	}
	
	.mine_icon4 {
		width: 1.3rem !important;
		background: url(../common/mine_icon4.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.mine_icon5 {
		width: 1.4rem !important;
		background: url(../common/mine_icon5.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.mine_icon6 {
		background: url(../common/mine_icon6.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.mine_icon7 {
		background: url(../common/mine_icon7.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.mine_cont ul li a div {
		color: #333 !important;
	}
	
	.mine_cont ul li div {
		height: 100%;
		display: inline-block;
		position: absolute;
		top: 0;
		left: 40px;
	}
</style>