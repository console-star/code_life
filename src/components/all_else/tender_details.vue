<template>
	<div class="hello" style="background: #F7F7F7;height: 100%;">
		<div class="tender_details">
			<div class="tender_details_top">
				<div class="tender_details_top_t">
					<p>总资产(元)</p>
					<p>{{minezhanghu.total_balance}}</p>
				</div>
				<div class="tender_details_top_b">
					<div class="left">
						<p>昨日收益(元)</p>
						<p>102.5</p>
					</div>
					<div class="right">
						<p>累计收益(元)</p>
						<p>{{minezhanghu.total_interest}}</p>
					</div>
				</div>
			</div>
			<div class="tender_details_con">
				<p class="title">投标详情</p>
				<ul>
					<li>
						<div class="detail_title">非常大大V
							<p>状态：<span>未结清</span></p>
						</div>
						<div class="tender_details_con_detail">
							<p>起息日期：<span>2018-06-15</span></p>
							<p>回款日期：<span>2018-06-15</span></p>
							<p>预期年化：<span>5%</span></p>
							<p>加息福利：<span>15%</span></p>
							<p>投资金额：<span>8000</span>元</p>
							<p>投资期限：<span>30</span>天</p>
						</div>
						<div class="tender_details_con_detail_btn">
							<button class="active">回款计划</button>
							<button>查看合同</button>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'tender_details',
		data() {
			return {
				minezhanghu: '',
				getinvestlistshow: ''
			}
		},
		created() {
//			console.log(111)
			this.getinvestlist()
		},
		mounted() {
//			console.log(11111)
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
				var _self = this;
				$.ajax({
					type: 'post',
					data: data1,
					url: 'https://develop.jinlingdai.cn/mobile/user/fundinfo',
					success: function(data) {
						var minezhanghu = eval('(' + data + ')');
						_self.minezhanghu = minezhanghu.data;
						//						var borrow_info = _self.borrowdetail.borrow_info
					}

				});
			}
			this.getinvestlist()
		},
		methods: {
			//获取个人信息
			getinvestlist() {
//				console.log(111)
				var datatoken = {
					'token': sessionStorage.getItem('name')
				}
				var _self = this;
				$.ajax({
					type: 'post',
					data: datatoken,
					url: 'https://develop.jinlingdai.cn/mobile/user/investlist',
					success: function(data) {
						var getpersoninvestlist = eval('(' + data + ')');
						console.log(getpersoninvestlist);
						_self.getinvestlistshow = getpersoninvestlist.data
					}

				});
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
	.tender_details_con_detail_btn .active {
		background: #ff4d46;
		color: white;
	}
	
	.tender_details_con_detail_btn {
		text-align: center;
	}
	
	.tender_details_con_detail_btn button:nth-child(1) {
		margin-left: 0px;
	}
	
	.tender_details_con_detail_btn button {
		width: 39%;
		height: 30px;
		margin-left: 20px;
		border: 0;
		border-radius: 5px;
		background: white;
		color: #ff4d46;
		border: 1px solid #ff4d46;
		margin-top: 10px;
	}
	
	.tender_details_con_detail p {
		line-height: 36px;
		padding-left: 20px;
		float: left;
		width: 43%;
		color: #7b7b7b;
	}
	
	.tender_details_con_detail p span {
		color: #333;
	}
	
	.tender_details_con ul li .detail_title p span {
		color: #ff4d46;
	}
	
	.tender_details_con ul li .detail_title p {
		display: inline-block;
		position: absolute;
		right: 20px;
		color: #7b7b7b;
	}
	
	.tender_details_con ul li .detail_title {
		height: 36px;
		line-height: 36px;
		padding-left: 20px;
		font-size: 13px;
		border-bottom: 1px solid #F7F7F7;
		position: relative;
	}
	
	.tender_details_con ul li {
		width: 90%;
		height: 200px;
		background: white;
		margin: auto;
		border-radius: 10px;
	}
	
	.tender_details_con .title {
		line-height: 30px;
		padding-left: 40px;
		margin-top: 13px;
	}
	
	.tender_details_top {
		height: 170px;
		background: url(../../common/Tender_details_top_bg.png) repeat-x;
		/*background-size:100% 100%;*/
		text-align: center;
		color: white;
		position: relative;
	}
	
	.tender_details_top_t {
		padding-top: 30px;
	}
	
	.tender_details_top_t p img {
		width: 10px;
		height: 13px;
		position: absolute;
		right: 39%;
		top: 36px;
	}
	
	.tender_details_top_t p {
		line-height: 25px;
	}
	
	.tender_details_top_t p:nth-child(2) {
		font-size: 20px;
	}
	
	.tender_details_top_b {
		width: 100%;
		position: absolute;
		bottom: 20px;
	}
	
	.tender_details_top_b div {
		width: 50%;
		float: left;
		position: relative;
	}
	
	.tender_details_top_b div p {
		line-height: 25px;
	}
	
	.tender_details_top_b div p img {
		width: 10px;
		height: 13px;
		position: absolute;
		top: 5px;
		margin-left: 3px;
	}
</style>