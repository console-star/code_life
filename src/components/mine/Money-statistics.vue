<template>
	<div class="hello">
		<div class="Money_statistics" style="height: 90%;overflow: scroll;">
			<div class="money_statistics_top_t">
				<p></p>
				<p>资金总览</p>
			</div>
			<p class="user_allmoney_zi">资金总额<span>{{draw_all_money_showit.total_balance}}</span></p>
			<ul>
				<li>
					<p style="background: #f35e3d;"></p>
					<p>待收本金¥</p>
					<p><span>{{draw_all_money_showit.coming_captial}}</span>元</p>
				</li>
				<li>
					<p style="background: #ffdd58;margin-left: 0;"></p>
					<p style="margin-left: 20px;">账户余额¥</p>
					<p><span>{{draw_all_money_showit.active_balance}}</span>元</p>
				</li>
				<li>
					<p style="background: #eba871;"></p>
					<p>待收利息¥</p>
					<p><span>{{draw_all_money_showit.coming_interest}}</span>元</p>
				</li>
				<li>
					<p style="background: #ec1614;margin-left: 0;"></p>
					<p style="margin-left: 20px;">冻结金额¥</p>
					<p><span>{{draw_all_money_showit.money_freeze}}</span>元</p>
				</li>
			</ul>
			<div id="myChart" :style="{width: '300px',height:'300px'}"></div>
			<div class="money_statistics_top_t">
				<p></p>
				<p>账户资产信息</p>
			</div>
			<div class="my_xiangmu">
				<p>项目</p>
				<p>测试08-041</p>
			</div>
			<div class="Money_statistics_tong">
				<div>
					<p>单月收益</p>
					<p>0</p>
				</div>
				<div>
					<p>单月收益</p>
					<p>0</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				draw_all_money_showit: '',
				coming_captial:'',
				active_balance:'',
				coming_interest:'',
				money_freeze:''
			}
		},
		mounted() {
			var _self = this;
				let data = {
					'token': sessionStorage.getItem("name")
				}
				console.log(data)
				$.ajax({
					type: 'post',
					data: data,
					url: 'https://develop.jinlingdai.cn/mobile/user/fundinfo',
					success: (data) => {
						var draw_all_money_show = eval('(' + data + ')');
						_self.coming_captial=draw_all_money_show.data.coming_captial
						_self.active_balance=draw_all_money_show.data.active_balance
						_self.coming_interest=draw_all_money_show.data.coming_interest
						_self.money_freeze=draw_all_money_show.data.money_freeze
						_self.draw_all_money_showit = draw_all_money_show.data;
						console.log(_self.draw_all_money_showit)
						//						var borrow_info = _self.borrowdetail.borrow_info			
			            this.drawLine()												
					}

				});

		    
		},
		methods: {
			
//			draw_all_money_show() {
//				
//			},
			drawLine() {
				console.log('%c test', 'background: red',this.coming_captial)
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChart'))
				// 绘制图表
				myChart.setOption({
					color: ['#f35e3d', '#ffdb5c', '#ffa356', '#ec1614'],
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					grid: {
						top: -100, //距离容器上边界40像素
						bottom: 20 //距离容器下边界30像素
					},
					//  legend: {
					//  	orient:'horizontal',
					//  	itemWidth: 10,
					//      itemHeight: 10,
					//      itemGap: 10,
					//      x: 'center',
					//      data:['待收本金','邮件营销','联盟广告','视频广告'],
					//  },
					series: [{
						name: '类型',
						type: 'pie',
						radius: ['50%', '70%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center'
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '20',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data: [{
								value: this.coming_captial,
								name: '待收本金¥'
							},
							{
								value: this.active_balance,
								name: '账户余额¥'
							},
							{
								value: this.coming_interest,
								name: '待收利息¥'
							},
							{
								value: this.money_freeze,
								name: '冻结金额¥'
							}
						]
					}]
				})
				window.onresize = myChart.resize;
			}
		}
	}
</script>

<style>
	.Money_statistics_tong div {
		width: 50%;
		float: left;
		margin-top: 16px;
		text-align: center;
	}
	
	.Money_statistics_tong div p {
		line-height: 27px;
	}
	
	.my_xiangmu p {
		height: 30px;
		line-height: 30px;
		float: left;
		margin-left: 20px;
	}
	
	.my_xiangmu p:nth-child(2) {
		width: 76%;
		text-align: center;
		border: 1px solid #aaa;
	}
	
	#myChart {
		margin: auto;
	}
	
	#myChart div:nth-child(2) {
		position: absolute;
		left: 70px !important;
		top: 60 !important;
	}
	
	.Money_statistics .money_statistics_top_t {
		height: 30px;
		line-height: 30px;
		padding-left: 20px;
		padding-top: 10px;
	}
	
	.Money_statistics .money_statistics_top_t p:nth-child(1) {
		width: 3px;
		height: 20px;
		background: #f35e3e;
		display: inline-block;
		float: left;
	}
	
	.Money_statistics .money_statistics_top_t p:nth-child(2) {
		float: left;
		height: 20px;
		line-height: 20px;
		padding-left: 6px;
		font-size: 16px;
		color: #f35e3e;
	}
	
	.Money_statistics .user_allmoney_zi {
		padding-left: 20px;
		height: 30px;
		line-height: 30px;
		border-bottom: 1px solid #F7F7F7;
	}
	
	.Money_statistics .user_allmoney_zi span {
		font-size: 16px;
		margin-left: 16px;
		color: #f35e3e;
		font-weight: 600;
	}
	
	.Money_statistics ul li {
		width: 50%;
		height: 30px;
		line-height: 30px;
		float: left;
		text-align: center;
		position: relative;
		list-style: none;
	}
	
	.Money_statistics ul li:nth-child(3),
	.Money_statistics ul li:nth-child(4) {
		border-bottom: 1px solid #F7F7F7;
	}
	
	.Money_statistics ul li p {
		float: left;
		margin-left: 6px;
	}
	
	.Money_statistics ul li p:nth-child(1) {
		height: 30px;
		line-height: 30px;
		width: 10px;
		height: 10px;
		background: #f35e3d;
		position: absolute;
		top: 9px;
		margin-left: 30px;
	}
	
	.Money_statistics ul li p:nth-child(2) {
		margin-left: 50px;
	}
	
	#myChart {
		border-bottom: 1px solid #F7F7F7;
	}
	
	#myChart div:nth-child(1) {
		top: -30px;
	}
</style>