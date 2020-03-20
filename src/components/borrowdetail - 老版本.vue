<template>
	<div class="hello" style="height: 100%;">
		<div class="borrow_detail" ref='remove' v-swipeup="{fn:vuetap,name:'上滑'}" v-swipedown="{fn:vuetap1,name:'下滑'}">
			<div class="borrow_detail_top">
				<p>{{borrowdetail.borrow_name}}</p>
				<p>{{borrowdetail.expired_time | time}}到期</p>
			</div>
			<div class="borrow_detail_con">
				<ul>
					<li>
						<p>{{borrowdetail.rest_borrow_money}}元</p>
						<p>剩余金额</p>
					</li>
					<li>
						<p class="yield">{{borrowdetail.borrow_interest_rate}}%</p>
						<p>借款年化</p>
					</li>
					<li>
						<p>{{borrowdetail.borrow_duration}}</p>
						<p>出借期限(月)</p>
					</li>
				</ul>
				<div class="tc" style="position: relative;">
					<span class="baifenhao">%</span>
					<progress-bar :value="borrowdetail.progress" type="rect" :options="{rectWidth:260,rectHeight:5,rectRadius:5}"></progress-bar>
				</div>
				<p class="borrow_money">出借金额：<span>{{borrowdetail.borrow_money}}</span>元</p>
				<div class="borrow_money_shuo" style="height: 40px;">
					<p>100.0元起投</p>
					<p>先息后本</p>
					<p>即投计息</p>
				</div>
				<div class="borrow_money_shu">
					<p>出借金额（元）</p>
					<div class="borrow_money_shuru">
						<div class="minnum" name="" v-on:click="minnum">-</div>
						<input class="text-box" name="pricenum" type="number" v-model="counter" maxlength="12 " />
						<div class="addnum" name="" v-on:click="addnum">+</div>
					</div>
					<div class="want_shou">预期收益：<span>{{formatMonth(borrowdetail.borrow_duration) * counter*borrowdetail.borrow_interest_rate/100/12 | money}}</span>元</div>
					<div class="account_balance">账户余额：<span>0.00</span>元<label><input type="checkbox"/>全投</label></div>
				</div>
			</div>
			<div style="width: 100%;height: 150px;position: fixed;bottom: 130px;" ref='remove' class="box" v-swipeup="{fn:vuetap,name:'上滑'}" v-swipedown="{fn:vuetap1,name:'下滑'}">
				<div class="red_pack_can_use">
					
				</div>
				
				<p style="position: absolute;bottom: 0;text-align: center;width: 100%;">☝☝☝向上拖动查看详情</p>
			</div>

		</div>

		<div class="borrow_detail_d" v-show="detail_info" ref='remove' v-swipeup="{fn:vuetap,name:'上滑'}" v-swipedown="{fn:vuetap1,name:'下滑'}">
			<div class="borrow_detail_d_tabcon">
				<div class="xiamhmuxin" v-show="xiamhmuxin" style="height: 90%;overflow: scroll;position: fixed; 
				  right: 0; 
				  bottom: 0; 
				  left: 0;
				  top: 0;
				  -webkit-overflow-scrolling: touch;
				  overflow-y: scroll;
				">
					<div class="borrow_detail_d_tab">
						<p class="active" v-on:click="xiamhmuxin1">项目信息</p>
						<p v-on:click="xiamhmuneirong1">相关内容</p>
						<p v-on:click="xiamhmujilu1">出借记录</p>
						<p v-on:click="huankuan1">还款记录</p>
					</div>
					<iframe style="width: 100%;height: 100%" id="show-iframe" frameborder=0 name="showHere" scrolling=auto :src="borrowdetail.borrow_info">111</iframe>
				</div>
				<div class="xiamhmuneirong" v-show="xiamhmuneirong" style="height: 90%;overflow: scroll;position: fixed; 
				  right: 0; 
				  bottom: 0; 
				  left: 0;
				  top: 0;
				  -webkit-overflow-scrolling: touch;
				  overflow-y: scroll;
				">
					<div class="borrow_detail_d_tab">
						<p v-on:click="xiamhmuxin1">项目信息</p>
						<p class="active" v-on:click="xiamhmuneirong1">相关内容</p>
						<p v-on:click="xiamhmujilu1">出借记录</p>
						<p v-on:click="huankuan1">还款记录</p>
					</div>
					<iframe style="width: 100%;height: 100%;" id="show-iframe" frameborder=0 name="showHere1" scrolling=auto :src="borrowdetail.file_info">111</iframe>
				</div>
				<div class="xiamhmujilu" v-show="xiamhmujilu" style="height: 90%;overflow: scroll;position: fixed; 
				  right: 0; 
				  bottom: 0; 
				  left: 0;
				  top: 0;
				  -webkit-overflow-scrolling: touch;
				  overflow-y: scroll;
				">
					<div class="borrow_detail_d_tab">
						<p v-on:click="xiamhmuxin1">项目信息</p>
						<p v-on:click="xiamhmuneirong1">相关内容</p>
						<p class="active" v-on:click="xiamhmujilu1">出借记录</p>
						<p v-on:click="huankuan1">还款记录</p>
					</div>
					<iframe style="width: 100%;height: 100%;" id="show-iframe" frameborder=0 name="showHere1" scrolling=auto :src="borrowdetail.borrow_log">111</iframe>
				</div>
				<div class="huankuan" v-show="huankuan" style="height: 100%;overflow: scroll;position: fixed; 
				  right: 0; 
				  bottom: 0; 
				  left: 0;
				  top: 0;
				  -webkit-overflow-scrolling: touch;
				  overflow-y: scroll;
				">
					<div class="borrow_detail_d_tab">
						<p v-on:click="xiamhmuxin1">项目信息</p>
						<p v-on:click="xiamhmuneirong1">相关内容</p>
						<p v-on:click="xiamhmujilu1">出借记录</p>
						<p class="active" v-on:click="huankuan1">还款记录</p>
					</div>
					<iframe style="width: 100%;height: 100%;" id="show-iframe" frameborder=0 name="showHere1" scrolling=auto :src="borrowdetail.investor_log">111</iframe>
				</div>
			</div>
		</div>
		<div style="text-align: center;position: fixed;bottom: 80px;width: 100%;"><button class="borrow_detail_btn" v-on:click="user_yourself">出借</button></div>
	</div>

</template>

<script>
	import { Toast } from 'vant'
	import progressBar from './rect-bar.vue'
	//	import urltab from '../common/else/taburl.vue'
	import filter from '../lib/filter'
	import touch from './vue-touch'
	import { formatDate } from '../lib/time'

	export default {
		name: 'app',
		data() {
			return {
				counter: '100',
				name: "开始",
				currentView: 'child1',
				xiamhmuxin: true,
				xiamhmuneirong: false,
				xiamhmujilu: false,
				huankuan: false,
				iframeState: true,
				borrowdetail: '',
				iframeState: false,
				goBackState: false,
				detail_info: false
			}
		},
		created() {
//			this.user_yourself();
			this.Borrowlistshowit();
			//			count(val, num)
		},
		mounted() {
			const oIframe = document.getElementById('show-iframe');
			const deviceWidth = document.documentElement.clientWidth;
			const deviceHeight = document.documentElement.clientHeight;
			oIframe.style.width = deviceWidth + 'px';
			oIframe.style.height = deviceHeight + 'px';
			this.Borrowlistshowit();
		},
		methods: {
			goBack() {
				this.goBackState = false;
				this.iframeState = false;
			},
			showIframe() {
				this.goBackState = true;
				this.iframeState = true;
			},
			Borrowlistshowit() {
				var data1 = {
					'borrow_id': this.$route.params.id
				}
				var _self = this;
				console.log(data1)
				$.ajax({
					type: 'post',
					data: data1,
					url: 'https://develop.jinlingdai.cn/mobile/borrow/detailinfo',
					success: function(data) {
						var borrowdetail = eval('(' + data + ')');
						_self.borrowdetail = borrowdetail.data;
						//						console.log(borrowdetail);
						//						var borrow_info = _self.borrowdetail.borrow_info
					}

				});
			},
			user_yourself() {
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
						url: 'https://develop.jinlingdai.cn/mobile/user/userinfo',
						success: function(data) {
							var user_yourself = eval('(' + data + ')');
							console.log(user_yourself.data.bind_status);
							if(user_yourself.data.bind_status == 0) {
								_self.$router.push('/Bindingcard')
							} else if(user_yourself.data.bind_status == 2) {
								Toast('审核中');
							} else {
								//								alert(111)
							}

							//						var borrow_info = _self.borrowdetail.borrow_info
						}

					});
				}

			},
			toggle(i, v) {
				this.active = i
				this.currentView = v
			},
			formatMonth: function(value) {
				return value.replace(/个月/g, '')
			},
			//			Borrowlistshow() {
			//				var _self = this;
			//				$.ajax({
			//					type: 'post',
			//					data: '',
			//					url: 'https://develop.jinlingdai.cn/mobile/borrow/lists',
			//					success: function(data) {
			//						var borrowlist = eval('(' + data + ')');
			//						_self.borrowlist = borrowlist.data.list;
			//						console.log(borrowlist);
			//
			//					}
			//				});
			//			},
			addnum: function() {
				this.counter = parseInt(this.counter) + 100;
			},
			minnum: function() {
				if(this.counter > 0) {
					this.counter = parseInt(this.counter) - 100;
				}
			},
			vuetap: function(s) {
				this.detail_info = true
			},
			vuetap1: function(s) {
				this.detail_info = false
			},
			xiamhmuneirong1() {
				this.xiamhmuneirong = true
				this.xiamhmuxin = false
				this.xiamhmujilu = false
				this.huankuan = false
			},
			xiamhmuxin1() {
				this.xiamhmuneirong = false
				this.xiamhmuxin = true
				this.xiamhmujilu = false
				this.huankuan = false
			},
			xiamhmujilu1() {
				this.xiamhmuneirong = false
				this.xiamhmuxin = false
				this.xiamhmujilu = true
				this.huankuan = false
			},
			huankuan1() {
				this.xiamhmuneirong = false
				this.xiamhmuxin = false
				this.xiamhmujilu = false
				this.huankuan = true
			}

		},
		mounted() {
			console.log(this.$route.params) //
			//我想在这里得到参数,会报下面这个错误
			//$route is not defined
		},
		computed: {

		},
		components: {
			progressBar
		}

	}
</script>

<style>
	.borrow_detail_d {
		width: 100%;
		height: 90% !important;
		overflow: auto;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 101;
		background: white;
	}
	
	.borrow_detail_d .borrow_detail_d_tab p {
		float: left;
		width: 25%;
		text-align: center;
		height: 40px;
		line-height: 40px;
	}
	
	.borrow_detail_d_tab p.active {
		border-bottom: 2px solid #2196f3;
		color: #2196f3;
	}
	
	.borrow_detail_d_tabcon {
		height: 100%;
	}
	
	.borrow_detail_d_tabcon div {
		width: 100%;
	}
	
	.xiamhmuxin_toptitle {
		position: absolute;
		top: 60px;
	}
	
	.xiamhmuxin_toptitlecon p {
		line-height: 23px;
		padding-left: 20px;
	}
	
	.xiamhmuxin_toptitle p:nth-child(1) {
		width: 3px;
		height: 16px;
		background: #f84d4d;
		float: left;
		margin-left: 20px;
	}
	
	.xiamhmuxin_toptitle p:nth-child(2) {
		width: 100%;
		line-height: 18px;
		margin-left: 30px;
	}
	
	.borrow_detail {
		position: relative;
	}
	
	.borrow_detail_top {
		border-bottom: 1px solid #F7F7F7;
		height: 40px;
		background: white;
	}
	
	.borrow_detail_top p {
		height: 40px;
		line-height: 40px;
		float: left;
		width: 45.3%;
	}
	
	.borrow_detail_top p:nth-child(1) {
		text-align: left;
		padding-left: 15px;
	}
	
	.borrow_detail_top p:nth-child(2) {
		text-align: right !important;
		padding-right: 10px;
		color: #f35e3e;
	}
	
	.borrow_detail_con {
		background: white;
	}
	
	.borrow_detail_con ul li {
		width: 33.3%;
		float: left;
		padding-top: 15px;
		list-style: none;
	}
	
	.borrow_detail_con ul li p {
		height: 25px;
		line-height: 25px;
		text-align: center;
	}
	
	.borrow_detail_con ul li p:nth-child(2) {
		color: #aaa;
	}
	
	.borrow_detail_con ul li p:nth-child(1) {
		font-size: 18px;
	}
	
	.borrow_money {
		height: 40px;
		line-height: 40px;
		text-align: center;
	}
	
	.borrow_money_shuo p {
		width: 33.3%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		float: left;
		border-top: 1px solid #F7F7F7;
		border-bottom: 1px solid #F7F7F7;
	}
	
	.borrow_money_shu {
		border-top: 5px solid #F7F7F7;
	}
	
	.borrow_money_shu p {
		height: 30px;
		line-height: 30px;
		text-align: center;
	}
	
	.borrow_money_shu .minnum {
		font-size: 36px;
		position: absolute;
		top: 10px;
		text-align: center;
		width: 30px;
		height: 30px;
		line-height: 25px;
		border: 1px solid rgb(243, 94, 62);
		border-radius: 5px;
		color: rgb(243, 94, 62);
	}
	
	.borrow_money_shu .addnum {
		font-size: 36px;
		position: absolute;
		top: 10px;
		right: 0px;
		text-align: center;
		width: 30px;
		height: 30px;
		line-height: 25px;
		border: 1px solid rgb(243, 94, 62);
		border-radius: 5px;
		color: rgb(243, 94, 62);
	}
	
	.borrow_money_shu input {
		width: 63%;
		height: 30px;
		margin-top: 9px;
		border: 0;
		border-bottom: 3px solid #ccc;
		text-align: center;
		font-size: 27px !important;
		color: rgb(243, 94, 62);
	}
	
	.borrow_money_shuru {
		width: 56%;
		height: 60px;
		position: relative;
		margin: auto;
		text-align: center;
	}
	
	.want_shou {
		width: 50%;
		margin: auto;
	}
	
	.want_shou span {
		margin-left: 10px;
		margin-right: 10px;
		color: rgb(243, 94, 62);
		font-size: 27px;
	}
	
	.circles-decimals1 {
		display: none;
		list-style: none !important;
	}
	
	.borrow_detail_con .circles-wrap1 {
		margin-left: -40px;
	}
	
	.borrow_detail .baifenhao {
		position: absolute;
		right: 1.7rem;
		top: 5.5rem;
	}
	
	.account_balance {
		padding-left: 20px;
		position: relative;
		height: 40px;
		line-height: 40px;
		border-top: 1px solid #F7F7F7;
		margin-top: 10px;
	}
	
	.account_balance label {
		position: absolute;
		right: 20px;
		z-index: 100;
	}
	
	.account_balance input {
		width: 15px;
		height: 15px;
		padding-left: 20px;
		position: absolute;
		right: 30px;
		top: 3px;
	}
	
	.borrow_detail_btn {
		width: 80%;
		height: 40px;
		border-radius: 5px;
		border: 0;
		color: white;
		background: #f84d4d;
	}
</style>