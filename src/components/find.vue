<template>
	<!--<vue-event-calendar :events="demoEvents">
      <template scope="props">
        <div v-for="(event, index) in props.showEvents" class="event-item">-->
	<!-- 这里拿到的是传入的单个event所有数据 -->
	<!--{{event}}
        </div>
      </template>
    </vue-event-calendar>-->
	<div class="hello" style="background: #F7F7F7;height: 100%;">
		<div class="property_zong">
			<div class="property_zong_top">
				<div class="property_zong_top_t">
					<p>总资产(元)<img src="../common/property_zong_jian.png" /></p>
					<p>{{minezhanghu.total_balance}}</p>
				</div>
				<div class="property_zong_top_b">
					<div class="left">
						<p>昨日收益(元)<img src="../common/property_zong_jian.png" /></p>
						<p>102.5</p>
					</div>
					<div class="right">
						<p>累计收益(元)<img src="../common/property_zong_jian.png" /></p>
						<p>{{minezhanghu.total_interest}}</p>
					</div>
				</div>
			</div>
			<div class="chong_or_ti">
				账户余额：<span>{{minezhanghu.active_balance}}</span>
				<div>
					<button v-on:click="withdrawdeposit">提现</button>
					<button class="active" v-on:click="rechargeto">充值</button>
				</div>
			</div>
			<div class="property_zong_con">
				<ul>
					<li v-on:click="tender_details">
						<img class="icon" src="../common/property_zong_03.png" /> 投标详情
						<img class="jian" src="../common/right_jian.png" />
					</li>
					<li v-on:click="calendar">
						<img class="icon" src="../common/property_zong_06.png" /> 回款日历
						<img class="jian" src="../common/right_jian.png" />
					</li>
					<li>
						<img class="icon" src="../common/property_zong_08.png" /> 我的福利
						<div>
							<p>可用红包<span>×5</span></p>
							<p>可用加息券<span>×3</span></p>
						</div>
						<img class="jian" src="../common/right_jian.png" />
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	//export default {
	//data () {
	//  return {
	//    demoEvents: [{
	//      date: '2016/12/15',
	//      title: 'eat',
	//      desc: 'longlonglong description'
	//    },{
	//      date: '2016/11/12',
	//      title: 'this is a title'
	//    }]
	//  }
	//}
	//}
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
				this.ok = false
				var data1 = {
					'token': sessionStorage.getItem('name')
				}
				var headers = getHeader();
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
					var data1 = {
						'token': sessionStorage.getItem('name')
					}
					var _self = this;
					$.ajax({
						type: 'post',
						data: data1,
						url: 'https://develop.jinlingdai.cn/mobile/user/userinfo',
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
			tender_details() {
				let uname = sessionStorage.getItem('username')
				this.name = uname
				/*如果cookie不存在，则跳转到登录页*/
				if(uname == null) {
					this.$router.push('/login')
				} else {
					this.$router.push('/Tender_details')
				}
			},
			calendar() {
				let uname = sessionStorage.getItem('username')
				this.name = uname
				/*如果cookie不存在，则跳转到登录页*/
				if(uname == null) {
					this.$router.push('/login')
				} else {
					this.$router.push('/calendar')
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
<style>
	.property_zong_con li div {
		position: absolute;
		right: 40px;
		top: 0;
	}
	
	.property_zong_con li div p {
		display: inline-block;
		margin-left: 5px;
		color: #CACACA;
	}
	
	.property_zong_con li div p span {
		color: #fb6055;
	}
	
	.property_zong_con .jian {
		position: absolute;
		right: 20px;
		top: 10px;
		width: 13px;
	}
	
	.property_zong_con ul {
		margin-top: 10px;
	}
	
	.property_zong_con ul li {
		height: 40px;
		line-height: 40px;
		background: white;
		position: relative;
		padding-left: 50px;
		border-bottom: 1px solid #F7F7F7;
	}
	
	.property_zong_con ul li .icon {
		width: 25px;
		height: 25px;
		position: absolute;
		left: 20px;
		top: 8px;
	}
	
	.property_zong_top {
		height: 170px;
		background: url(../common/property_zong_top_bg.png) no-repeat;
		background-size: 100% 100%;
		text-align: center;
		color: white;
		position: relative;
	}
	
	.property_zong_top_t {
		padding-top: 30px;
	}
	
	.property_zong_top_t p img {
		width: 10px;
		height: 13px;
		position: absolute;
		right: 39%;
		top: 36px;
	}
	
	.property_zong_top_t p {
		line-height: 25px;
	}
	
	.property_zong_top_t p:nth-child(2) {
		font-size: 20px;
	}
	
	.property_zong_top_b {
		width: 100%;
		position: absolute;
		bottom: 20px;
	}
	
	.property_zong_top_b div {
		width: 50%;
		float: left;
		position: relative;
	}
	
	.property_zong_top_b div p {
		line-height: 25px;
	}
	
	.property_zong_top_b div p img {
		width: 10px;
		height: 13px;
		position: absolute;
		top: 5px;
		margin-left: 3px;
	}
	
	.property_zong .chong_or_ti {
		height: 50px;
		line-height: 50px;
		background: white;
		padding-left: 20px;
		position: relative;
	}
	
	.property_zong .chong_or_ti div {
		position: absolute;
		right: 20px;
		top: 0;
	}
	
	.property_zong .chong_or_ti button {
		height: 30px;
		width: 70px;
		line-height: 29px;
		background: white;
		border: 1px solid #fb493e;
		border-radius: 5px;
		color: #fb493e;
		margin-left: 10px;
	}
	
	.property_zong .chong_or_ti .active {
		color: white;
		background: #fb493e;
	}
</style>