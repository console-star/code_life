<template>
	<div class="hello home" style="">
		<div class="toplunbo" style="width: 100%;">
			<swiper1></swiper1>
		</div>
		<div class="firsticontent">
			<div class="firsticontent_item firsticontent1">
				<p>1581天</p>
				<p>安全运营天数</p>
			</div>
			<div class="firsticontent_item firsticontent2">
				<p>5.68亿元</p>
				<p>累计成交金额</p>
			</div>
			<div class="firsticontent_item firsticontent3">
				<p>8600万元 </p>
				<p>为用户赚取</p>
			</div>
			<div class="firsticontent_item firsticontent4">
				<p>8000万人</p>
				<p>累计注册用户</p>
			</div>
		</div>
		<announcement></announcement>
		<div class="index_sign">
			<dl>
				<dt><img src="../common/index_invit.png"/></dt>
				<dd>邀请</dd>
			</dl>
			<dl>
				<dt><img src="../common/sign_in.png"></dt>
				<dd>邀请</dd>
			</dl>
			<dl>
				<dt><img src="../common/index_activity.png"/></dt>
				<dd>邀请</dd>
			</dl>
		</div>
		<p style="background: #f5f6f8;width: 100%;height: 3em;line-height:3em;text-align: center;">平台资金由银行存管，安全收益更放心</p>
		<div class="shujuyuan" style="position: relative;">
			<swiper :options="swiperOption1">
				<swiper-slide v-for="item in datalist">
					<router-link :to="{ name: 'Borrowdetail', params: { id: item&&item.id,borrow_interest_rate:item&&item.borrow_interest_rate,rest_borrow_money:item&&item.rest_borrow_money,borrow_duration:item&&item.borrow_duration,progress:item&&item.progress,borrow_money:item&&item.borrow_money,borrow_name:item&&item.borrow_name,expired_time:item&&item.expired_time}}">
						<div class="recommend">
							<p>推荐标</p>
							<p>{{item&&item.borrow_name}}</p>
						</div>
						<div class="circlechart_gai">
							<p class="circlechart_gai_lv">{{item&&item.borrow_interest_rate}}<span>%</span></p>
							<p>预期年化收益率</p>
							<div>
								<p>项目期限<span>{{item&&item.borrow_duration}}</span></p><i style="width: 1px;height: 1em;float: left;background: #333;margin-left: 5px;margin-top: 3px;"></i>
								<p><span>100</span>元起购</p>
							</div>
							<button class="circlechart_gai_btn">立即投资</button>
							<p style="height: 3em;line-height: 3em;color: #c1c1c1;">理财非储蓄，投资有风险</p>
						</div>
					</router-link>
				</swiper-slide>
			</swiper>
			<div style="width: 100%;position: absolute;bottom: 0.5em;" class="swiper-pagination" slot="pagination"></div>
		</div>
		<div class="country_qiye">
			<dl>
				<dt><img src="../common/country.png"/></dt>
				<dd>国企全资控股</dd>
			</dl>
			<dl>
				<dt><img src="../common/country.png"/></dt>
				<dd>国企全资控股</dd>
			</dl>
			<dl>
				<dt><img src="../common/country.png"/></dt>
				<dd>国企全资控股</dd>
			</dl>
			<dl>
				<dt><img src="../common/country.png"/></dt>
				<dd>国企全资控股</dd>
			</dl>
		</div>
	</div>
</template>

<script>
	import commonsum from '../vuex/common.vue'
	import { getHeader } from '../vuex/header'
	import swiper1 from './all_else/home-top-swiper.vue'
	import { setCookie, getCookie, delCookie } from '../assets/cookie.js'
	var param = {
		type: '501',
		limit: '2'
	};
	import progressBar from './vircle-bar.vue'
	import announcement from '../common/announcement.vue'
	export default {
		name: 'circlechart',
		data() {

			return {
				name: '',
				datalist: '',
				bannerlistshow: '',
				swiperOption: {
					//        spaceBetween: 30,
					centeredSlides: true,
					autoplay: {
						delay: 2500,
						disableOnInteraction: false
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: false
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					}
				},
				swiperOption1: {
					//        spaceBetween: 30,
					centeredSlides: true,
					//        autoplay: {
					//          delay: 2500,
					//          disableOnInteraction: false
					//        },
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					}
				}
			}
		},
		created() {
			this.showData()
		},
		mounted() {
			/*页面挂载获取保存的cookie值，渲染到页面上*/
			let uname = getCookie('username')
			this.name = uname
			/*如果cookie不存在，则跳转到登录页*/
			if(uname == "") {
				this.$router.push('/')
			}
		},
		methods: {
			showData() {
				var headers = getHeader();
				var _self = this;
				$.ajax({
					type: 'post',
					data: param,
					url: commonsum.web_url+'/mobile/borrow/lists',
					headers: headers,
//					headers: {
//				        Accept: "application/x-www-form-urlencoded; charset=utf-8"
//				    },
//					beforeSend: function (XMLHttpRequest) {
//						XMLHttpRequest.setRequestHeader("APPKEY", headers.APPKEY);
//						XMLHttpRequest.setRequestHeader("CURTIME", headers.CURTIME);
//						XMLHttpRequest.setRequestHeader("MD5", headers.MD5);
//						XMLHttpRequest.setRequestHeader("CHECKSUM", headers.CHECKSUM);
//					},
					success: function(data) {
						var datalist = eval('(' + data + ')');
						_self.datalist = datalist.data.list;
						console.log(datalist);
					}
				});
		
//				this.$http.post(commonsum.web_url+'/mobile/borrow/lists', '').then((res) => {
//					console.log(res.data)
//				}, (res) => {
//					console.log(res.data)
//					var datalist = eval('(' + res + ')');
//					_self.datalist = datalist.res.list;
//					console.log(datalist);
//				})
			},
			quit() {
				/*删除cookie*/
				delCookie('username')
			}
		},
		components: {
			progressBar,
			announcement,
			swiper1
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	@import "../common/css/swiper-4.2.0.min.css";
	html,
	body {
		height: 100%;
	}
	
	#app {
		height: 100%;
		margin-bottom: 50px;
	}
	
	.home {
		height: 90%;
		overflow-y: auto;
		background: #F7F7F7;
		width: 100%;
	}
	
	.country_qiye {
		width: 100%;
		height: 7em;
		padding-top: 1em;
		background: white;
		text-align: center;
		margin-top: 1em;
		margin-bottom: 1em;
	}
	
	.country_qiye dl {
		width: 25%;
		text-align: center;
		float: left;
		background: white;
	}
	
	.country_qiye dl dt img {
		width: 4em;
	}
	
	.country_qiye dl dd {
		width: 100%;
		line-height: 2em;
		text-align: center;
	}
	
	.circlechart_gai_btn {
		color: white;
		width: 80%;
		height: 2.5em;
		border: 0;
		background: #ff594a;
		border-radius: 0.3em;
		margin-top: 1em;
		font-size: 1.2em;
	}
	
	.circlechart_gai {
		text-align: center;
	}
	
	.circlechart_gai p:nth-child(2) {
		line-height: 1em;
		font-size: 1em;
		color: #ff4c45;
	}
	
	.circlechart_gai div {
		width: 65%;
		margin: auto;
		margin-top: 1em;
	}
	
	.circlechart_gai div p {
		float: left;
		width: 45%;
		text-align: center;
		color: #333 !important;
	}
	
	.circlechart_gai div p span {
		color: #ff4c45;
	}
	
	.circlechart_gai .circlechart_gai_lv {
		color: #ff4c45;
		font-size: 4em;
		font-weight: 600;
		font-family: "微软雅黑";
	}
	
	.circlechart_gai .circlechart_gai_lv span {
		font-size: 0.3em;
	}
	
	.index_sign {
		height: 6em;
		background: white;
	}
	
	.index_sign dl {
		width: 33.3%;
		float: left;
		text-align: center;
		margin-top: 0.8em;
	}
	
	.index_sign dl dd {
		text-align: center;
		font-size: 1em;
	}
	
	.index_sign dl dt img {
		width: 3em;
		height: 3em;
	}
	
	.toplunbo .swiper-slide {
		height: 16em;
		background: #42B983;
	}
	
	.shujuyuan {
		width: 93%;
		margin: auto;
	}
	
	.shujuyuan .swiper-slide {
		width: 100% !important;
		height: 31%;
		background: white;
		padding-bottom: 1em;
	}
	
	.shujuyuan .swiper-container {
		width: 100% !important;
	}
	
	.shujuyuan .swiper-slide a {
		color: #333;
	}
	
	.tianchong {
		width: 100%;
		height: 1rem;
		position: absolute;
		background: white;
		top: 10.6rem;
	}
	
	.firsticontent {
		width: 100%;
		margin: auto;
		height: 6rem;
		background: white;
	}
	
	.firsticontent div {
		width: 25%;
		height: 100%;
		float: left;
		text-align: center;
		position: relative;
		margin-top: 1rem;
	}
	
	.firsticontent_item p:nth-child(1) {
		width: 100%;
		height: 2rem;
		line-height: 2rem;
		font-size: 14px;
	}
	
	.firsticontent_item p:nth-child(2) {
		font-size: 12px;
		height: 2rem;
		line-height: 2rem;
		color: #aaa;
	}
	/*.firsticontent1 p:nth-child(1) {
		background: url(../common/firstcont1.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.firsticontent2 p:nth-child(1) {
		background: url(../common/firstcont2.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.firsticontent3 p:nth-child(1) {
		background: url(../common/firstcont3.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.firsticontent4 p:nth-child(1) {
		background: url(../common/firstcont4.png) no-repeat;
		background-size: 100% 100%;
	}*/
	
	.tc div {
		text-align: center;
	}
	
	.recommend {
		position: relative;
		width: 100%;
		padding-left: 0.5rem;
		padding-top: 0.3rem;
		padding-bottom: 0.3rem;
	}
	
	.recommend p:nth-child(1) {
		color: white;
		width: 4em;
		height: 2.3em;
		line-height: 2.1em;
		text-align: center;
		background: url(../common/biao_bg.png) no-repeat;
		background-size: 100% 100%;
		position: absolute;
		right: 3em;
		top: 0em;
		padding-left: 0 !important;
	}
	
	.recommend p:nth-child(3) {
		color: #f35e3e;
	}
	
	.recommend p {
		height: 2em;
		line-height: 2em;
		padding-left: 1em;
		font-size: 13px;
	}
	
	.circleshuju {
		position: absolute;
		top: 4.4rem;
		width: 100%;
	}
	
	.circles-integer {
		opacity: 0;
	}
	
	.circleshuju p:nth-child(2) {
		font-size: 18px;
		color: #f35e3e;
	}
	
	.circleshuju p {
		width: 100%;
		height: 25px;
		line-height: 25px;
		text-align: center;
	}
	
	.tuzirulule {
		position: absolute;
		width: 100%;
		top: 12.8rem;
	}
	
	.qitou i {
		width: 1.5rem;
		height: 1.5rem;
		background: url(../common/qitou.png) no-repeat;
		background-size: 100% 100%;
		position: absolute;
		left: 2rem;
	}
	
	.xiben i {
		width: 1.5rem;
		height: 1.5rem;
		background: url(../common/xiben.png) no-repeat;
		background-size: 100% 100%;
		position: absolute;
		left: 2rem;
	}
	
	.jixi i {
		width: 1.5rem;
		height: 1.5rem;
		background: url(../common/jixi.png) no-repeat;
		background-size: 100% 100%;
		position: absolute;
		left: 2rem;
	}
	
	.tuzirulule p {
		width: 31%;
		text-align: center;
		float: left;
		position: relative;
	}
	
	.tuzirulule p span {
		margin-left: 3.4rem;
	}
	
	.gongaolababox {
		margin-top: rem !important;
	}
</style>