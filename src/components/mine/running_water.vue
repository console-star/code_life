<template>
	<div class="hello">
		<div class="running_water">
			<div class="running_water_all" v-show="running_water_all">
				<div class="running_water_title">
					<ul class="running_water_title_t">
						<li v-on:click="running_water_allto">
							<p></p>
							<div class="active">全部</div>
						</li>
						<li v-on:click="running_water_chongto">
							<p></p>
							<div>充值</div>
						</li>
						<li v-on:click="running_water_tito">
							<p></p>
							<div>提现</div>
						</li>
						<li v-on:click="running_water_chujieto">
							<p></p>
							<div>出借</div>
						</li>
						<li v-on:click="running_water_huikuanto">
							<p></p>
							<div>回款</div>
						</li>
						<li v-on:click="running_water_dongjieto">
							<p></p>
							<div>冻结</div>
						</li>
					</ul>
				</div>
				<div class="running_water_all_box">
					<ul>
						<li class="running_water_all_li" v-for="item2 in runningwaterall">
							<div class="running_water_all_li_title"><span>{{item2&&item2.date_time | formatDate}}</span><!--<span style="margin-left: 10px;">14:365:03</span>--></div>
							<div class="typespan running_water_all_li_type">
								<p style="display: inline-block;"></p>
								<span>{{item2&&item2.type}}</span>
							</div>
							<p class="running_water_all_li_money"><span>{{item2&&item2.balance}}</span>元</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="running_water_chong" v-show="running_water_chong">
				<div class="running_water_title">
					<ul class="running_water_title_t">
						<li v-on:click="running_water_allto">
							<p></p>
							<div>全部</div>
						</li>
						<li v-on:click="running_water_chongto">
							<p></p>
							<div class="active">充值</div>
						</li>
						<li v-on:click="running_water_tito">
							<p></p>
							<div>提现</div>
						</li>
						<li v-on:click="running_water_chujieto">
							<p></p>
							<div>出借</div>
						</li>
						<li v-on:click="running_water_huikuanto">
							<p></p>
							<div>回款</div>
						</li>
						<li v-on:click="running_water_dongjieto">
							<p></p>
							<div>冻结</div>
						</li>
					</ul>
				</div>
				<div class="running_water_all_box">
					<ul>
						<li class="running_water_all_li" v-for="item3 in runningwaterall1">
							<div class="running_water_all_li_title"><span>{{item3&&item3.date_time | formatDate}}</span><!--<span style="margin-left: 10px;">14:365:03</span>--></div>
							<div class="typespan running_water_chong_li_type">
								<p style="display: inline-block;"></p>
								<span>{{item3&&item3.type}}</span>
							</div>
							<p class="running_water_all_li_money"><span>{{item3&&item3.balance}}</span>元</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="running_water_ti" v-show="running_water_ti">
				<div class="running_water_title">
					<ul class="running_water_title_t">
						<li v-on:click="running_water_allto">
							<p></p>
							<div>全部</div>
						</li>
						<li v-on:click="running_water_chongto">
							<p></p>
							<div>充值</div>
						</li>
						<li v-on:click="running_water_tito">
							<p></p>
							<div class="active">提现</div>
						</li>
						<li v-on:click="running_water_chujieto">
							<p></p>
							<div>出借</div>
						</li>
						<li v-on:click="running_water_huikuanto">
							<p></p>
							<div>回款</div>
						</li>
						<li v-on:click="running_water_dongjieto">
							<p></p>
							<div>冻结</div>
						</li>
					</ul>
				</div>
				<div class="running_water_all_box">
					<ul>
						<li class="running_water_all_li" v-for="item4 in runningwaterall2">
							<div class="running_water_all_li_title"><span>{{item4&&item4.date_time | formatDate}}</span><!--<span style="margin-left: 10px;">14:365:03</span>--></div>
							<div class="typespan running_water_ti_li_type ">
								<p style="display: inline-block;"></p>
								<span>{{item4&&item4.type}}</span>
							</div>
							<p class="running_water_all_li_money"><span>{{item4&&item4.balance}}</span>元</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="running_water_chujie" v-show="running_water_chujie">
				<div class="running_water_title">
					<ul class="running_water_title_t">
						<li v-on:click="running_water_allto">
							<p></p>
							<div>全部</div>
						</li>
						<li v-on:click="running_water_chongto">
							<p></p>
							<div>充值</div>
						</li>
						<li v-on:click="running_water_tito">
							<p></p>
							<div>提现</div>
						</li>
						<li v-on:click="running_water_chujieto">
							<p></p>
							<div class="active">出借</div>
						</li>
						<li v-on:click="running_water_huikuanto">
							<p></p>
							<div>回款</div>
						</li>
						<li v-on:click="running_water_dongjieto">
							<p></p>
							<div>冻结</div>
						</li>
					</ul>
				</div>
				<div class="running_water_all_box">
					<ul>
						<li class="running_water_all_li" v-for="item5 in runningwaterall3">
							<div class="running_water_all_li_title"><span>{{item5&&item5.date_time | formatDate}}</span><!--<span style="margin-left: 10px;">14:365:03</span>--></div>
							<div class="typespan running_water_all_li_type">
								<p style="display: inline-block;"></p>
								<span>{{item5&&item5.type}}</span>
							</div>
							<p class="running_water_all_li_money"><span>{{item5&&item5.balance}}</span>元</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="running_water_huikuan" v-show="running_water_huikuan">
				<div class="running_water_title">
					<ul class="running_water_title_t">
						<li v-on:click="running_water_allto">
							<p></p>
							<div>全部</div>
						</li>
						<li v-on:click="running_water_chongto">
							<p></p>
							<div>充值</div>
						</li>
						<li v-on:click="running_water_tito">
							<p></p>
							<div>提现</div>
						</li>
						<li v-on:click="running_water_chujieto">
							<p></p>
							<div>出借</div>
						</li>
						<li v-on:click="running_water_huikuanto">
							<p></p>
							<div class="active">回款</div>
						</li>
						<li v-on:click="running_water_dongjieto">
							<p></p>
							<div>冻结</div>
						</li>
					</ul>
				</div>
				<div class="running_water_all_box">
					<ul>
						<li class="running_water_all_li" v-for="item6 in runningwaterall4">
							<div class="running_water_all_li_title"><span>{{item6&&item6.date_time | formatDate}}</span><!--<span style="margin-left: 10px;">14:365:03</span>--></div>
							<div class="typespan running_water_all_li_type">
								<p style="display: inline-block;"></p>
								<span>{{item6&&item6.type}}</span>
							</div>
							<p class="running_water_all_li_money"><span>{{item6&&item6.balance}}</span>元</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="running_water_dongjie" v-show="running_water_dongjie">
				<div class="running_water_title">
					<ul class="running_water_title_t">
						<li v-on:click="running_water_allto">
							<p></p>
							<div>全部</div>
						</li>
						<li v-on:click="running_water_chongto">
							<p></p>
							<div>充值</div>
						</li>
						<li v-on:click="running_water_tito">
							<p></p>
							<div>提现</div>
						</li>
						<li v-on:click="running_water_chujieto">
							<p></p>
							<div>出借</div>
						</li>
						<li v-on:click="running_water_huikuanto">
							<p></p>
							<div>回款</div>
						</li>
						<li v-on:click="running_water_dongjieto">
							<p></p>
							<div class="active">冻结</div>
						</li>
					</ul>
				</div>
				<div class="running_water_all_box">
					<ul>
						<li class="running_water_all_li" v-for="item7 in runningwaterall5">
							<div class="running_water_all_li_title"><span>{{item7&&item7.date_time | formatDate}}</span><!--<span style="margin-left: 10px;">14:365:03</span>--></div>
							<div class="typespan">
								<p class="classA" v-if="item7.type='提现冻结'" style="display: inline-block;"></p>
								<p class="classB" v-else="item7.type='投标冻结'" style="display: inline-block;"></p>
								<span>{{item7&&item7.type}}</span>
							</div>
							<p class="running_water_all_li_money"><span>{{item7&&item7.balance}}</span>元</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
//	import filter from '../../lib/filter'
	import { formatDate } from '../../lib/time1'
	export default {
		name: 'home',
		data() {
			return {
//				classA: 'classA',
				runningwaterall: '',
				runningwaterall1:'',
				runningwaterall2:'',
				runningwaterall3:'',
				runningwaterall4:'',
				runningwaterall5:'',
				running_water_all: true,
				running_water_chong: false,
				running_water_ti: false,
				running_water_chujie: false,
				running_water_huikuan: false,
				running_water_dongjie: false
			}
		},
		created() {
			this.running_water_allto();
		},
		methods: {
			running_water_allto() {
				this.running_water_all = true
				this.running_water_chong = false
				this.running_water_ti = false
				this.running_water_chujie = false
				this.running_water_huikuan = false
				this.running_water_dongjie = false
				var _self = this;
				var type = {
					'type': 0,
					'token': sessionStorage.getItem('name')
				}
				$.ajax({
					type: 'post',
					data: type,
					url: 'https://develop.jinlingdai.cn/mobile/user/tradelog',
					success: function(data) {
						var runningwaterall = eval('(' + data + ')');
						_self.runningwaterall = runningwaterall.data.list;
						console.log(runningwaterall);

					}

				});
			},
			running_water_chongto() {
				this.running_water_all = false
				this.running_water_chong = true
				this.running_water_ti = false
				this.running_water_chujie = false
				this.running_water_huikuan = false
				this.running_water_dongjie = false
				var _self = this;
				var type = {
					'type': 1,
					'token': sessionStorage.getItem('name')
				}
				$.ajax({
					type: 'post',
					data: type,
					url: 'https://develop.jinlingdai.cn/mobile/user/tradelog',
					success: function(data) {
						var runningwaterall1 = eval('(' + data + ')');
						_self.runningwaterall1 = runningwaterall1.data.list;
						console.log(runningwaterall1);

					}

				});
			},
			running_water_tito() {
				this.running_water_all = false
				this.running_water_chong = false
				this.running_water_ti = true
				this.running_water_chujie = false
				this.running_water_huikuan = false
				this.running_water_dongjie = false
				var _self = this;
				var type = {
					'type': 2,
					'token': sessionStorage.getItem('name')
				}
				$.ajax({
					type: 'post',
					data: type,
					url: 'https://develop.jinlingdai.cn/mobile/user/tradelog',
					success: function(data) {
						var runningwaterall2 = eval('(' + data + ')');
						_self.runningwaterall2 = runningwaterall2.data.list;
						console.log(runningwaterall2);

					}

				});
			},
			running_water_chujieto() {
				this.running_water_all = false
				this.running_water_chong = false
				this.running_water_ti = false
				this.running_water_chujie = true
				this.running_water_huikuan = false
				this.running_water_dongjie = false
				var _self = this;
				var type = {
					'type': 3,
					'token': sessionStorage.getItem('name')
				}
				$.ajax({
					type: 'post',
					data: type,
					url: 'https://develop.jinlingdai.cn/mobile/user/tradelog',
					success: function(data) {
						var runningwaterall3 = eval('(' + data + ')');
						_self.runningwaterall3 = runningwaterall3.data.list;
						console.log(runningwaterall3);

					}

				});
			},
			running_water_huikuanto() {
				this.running_water_all = false
				this.running_water_chong = false
				this.running_water_ti = false
				this.running_water_chujie = false
				this.running_water_huikuan = true
				this.running_water_dongjie = false
				var _self = this;
				var type = {
					'type': 4,
					'token': sessionStorage.getItem('name')
				}
				$.ajax({
					type: 'post',
					data: type,
					url: 'https://develop.jinlingdai.cn/mobile/user/tradelog',
					success: function(data) {
						var runningwaterall4 = eval('(' + data + ')');
						_self.runningwaterall4 = runningwaterall4.data.list;
						console.log(runningwaterall4);

					}

				});
			},
			running_water_dongjieto() {
				this.running_water_all = false
				this.running_water_chong = false
				this.running_water_ti = false
				this.running_water_chujie = false
				this.running_water_huikuan = false
				this.running_water_dongjie = true
				var _self = this;
				var type = {
					'type': 5,
					'token': sessionStorage.getItem('name')
				}
				$.ajax({
					type: 'post',
					data: type,
					url: 'https://develop.jinlingdai.cn/mobile/user/tradelog',
					success: function(data) {
						var runningwaterall5 = eval('(' + data + ')');
						_self.runningwaterall5 = runningwaterall5.data.list;
						console.log(runningwaterall5);

					}

				});
			}

		},
		filters: {
        formatDate(time) {
            return formatDate(new Date(time * 1000),'yyyy-MM-dd hh:mm');
        }
    }
	}
</script>

<style>
	.classA{
		width: 33px;
		height: 33px;
		margin-top: 10px;
		background: url(../../common/running_water10.png) no-repeat;
		background-size: 100% 100%;
	}
	.classB{
		width: 33px;
		height: 33px;
		margin-top: 10px;
		background: url(../../common/running_water5.png) no-repeat;
		background-size: 100% 100%;
	}
	.running_water_all_li {
		margin-top: 10px !important;
		background: white;
		width: 90%;
		margin: auto;
		padding: 6px;
		list-style: none;
	}
	
	.running_water_all_li_money {
		height: 40px;
		line-height: 40px;
		/*color: #f35e3e;*/
	}
	.typespan{
		position: relative;
	}
	.typespan span{
		position: absolute;
		top: 18px;
		margin-left: 10px;
	}
	
	.running_water_all_li_type {
		position: relative;
	}
	.running_water_chong_li_type p{
		width: 33px;
		height: 33px;
		margin-top: 10px;
		background: url(../../common/running_water1.png) no-repeat;
		background-size: 100% 100%;
	}
	.running_water_all_li_type p {
		width: 33px;
		height: 33px;
		margin-top: 10px;
		background: url(../../common/running_water.png) no-repeat;
		background-size: 100% 100%;
	}
	.running_water_ti_li_type p{
		width: 33px;
		height: 33px;
		margin-top: 10px;
		background: url(../../common/running_water10.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.running_water_all_li_title {
		height: 30px;
		line-height: 30px;
		border-bottom: 1px solid #F7F7F7;
	}
	
	.running_water_all_box, .running_water_chong_box,.running_water_ti_box,.running_water_chujieto{
		height: 77%;
		overflow: scroll;
		width: 100%;
		position: absolute;
		top: 90px;
		background: #F7F7F7;
	}
	
	.running_water_title_t .active {
		border-bottom: 2px solid #2196F3;
	}
	
	.running_water_title_t {
		width: 100%;
		padding-top: 10px;
	}
	
	.running_water_title_t li {
		width: 16.6%;
		text-align: center;
		float: left;
		list-style: none;
	}
	
	.running_water_title_t li div {
		height: 30px;
		line-height: 30px;
	}
	
	.running_water_title_t li:nth-child(1) p {
		height: 30px;
		width: 30px;
		text-align: center;
		background: url(../../common/running_water8.png) no-repeat;
		background-size: 100% 100%;
		margin: auto;
	}
	
	.running_water_title_t li:nth-child(2) p {
		height: 30px;
		width: 30px;
		text-align: center;
		background: url(../../common/running_water.png) no-repeat;
		background-size: 100% 100%;
		margin: auto;
	}
	
	.running_water_title_t li:nth-child(3) p {
		height: 30px;
		width: 30px;
		text-align: center;
		background: url(../../common/running_water9.png) no-repeat;
		background-size: 100% 100%;
		margin: auto;
	}
	
	.running_water_title_t li:nth-child(4) p {
		height: 30px;
		width: 30px;
		text-align: center;
		background: url(../../common/running_water2.png) no-repeat;
		background-size: 100% 100%;
		margin: auto;
	}
	
	.running_water_title_t li:nth-child(5) p {
		height: 30px;
		width: 30px;
		text-align: center;
		background: url(../../common/running_water4.png) no-repeat;
		background-size: 100% 100%;
		margin: auto;
	}
	
	.running_water_title_t li:nth-child(6) p {
		height: 30px;
		width: 30px;
		text-align: center;
		background: url(../../common/running_water6.png) no-repeat;
		background-size: 100% 100%;
		margin: auto;
	}
</style>