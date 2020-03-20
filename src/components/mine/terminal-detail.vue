<template>
	<div class="hello" style="width: 100%;height:100%;background: #F7F7F7;">
		<div class="terminal-detail_top">{{this.$route.params.borrow_title}}<span>{{this.$route.params.investor_status}}</span></div>
		<div class="chujiedetail_box">
			<div class="chujiedetail">
				<div class="chujiedetail_top">
					<p v-on:click="showToggle" style="margin-left: 23px;margin-top: 10px;margin-bottom: 10px;">出借详情</p>
					<p class="img" v-show="img"></p>
					<p class="img1" v-show="img1"></p>
				</div>
			</div>
			<ul class="chujiedetail_ul" v-show="chujiedetail">
				<li>
					<p>约定年化借款利率</p>
					<p>{{Math.round(this.$route.params.borrow_interest_rate)}}%</p>
				</li>
				<li>
					<p>出借金额</p>
					<p>{{this.$route.params.investor_capital}}元</p>
				</li>
				<li>
					<p>项目期限</p>
					<p>{{this.$route.params.investor_duration}}月</p>
				</li>
				<li>
					<p>结束日期</p>
					<p>{{this.$route.params.expired_time | formatDate}}</p>
				</li>
				<li>
					<p>使用优惠</p>
					<p>{{this.$route.params.reward}}</p>
				</li>
				<li>
					<p>预期收益</p>
					<p>{{Math.round(this.$route.params.all_income)}}元</p>
				</li>
			</ul>
		</div>
		<div class="chujiedetail_box">
			<div class="chujiedetail">
				<div class="chujiedetail_top">
					<p v-on:click="showToggle1" style="margin-left: 23px;">回款详情</p>
					<p class="img" v-show="img2"></p>
					<p class="img1" v-show="img3"></p>
				</div>
			</div>
			<ul class="chujiedetail_ul" style="height: 80px;padding-top: 5px;" v-show="chujiedetail_two">
				<li>
					<p>约定年化借款利率</p>
					<p>{{Math.round(this.$route.params.borrow_interest_rate)}}%</p>
				</li>
				<li>
					<p>出借金额</p>
					<p>{{this.$route.params.investor_capital}}元</p>
				</li>
				<li>
					<p>项目期限</p>
					<p>{{this.$route.params.investor_duration}}月</p>
				</li>
				
			</ul>
		</div>
		
		<div class="chujiedetail" v-on:click="showprojectshow">
				<div class="chujiedetail_top">
					<p style="margin-left: 23px;">项目信息</p>
					<p class="img" v-show="img4"></p>
					<p class="img1" v-show="img5"></p>
				</div>
			</div>
			
			<div class="chujiedetail chujiedetail_roter">
				<!--<router-link to="/refundplan">-->
				<div class="chujiedetail_top" v-on:click="bargain">
					<p style="margin-left: 23px;">项目合同</p>
					<p class="img" v-show="img6"></p>
					<p class="img1" v-show="img7"></p>
				</div>
				<!--</router-link>-->
			</div>
			
			<div class="project_detail_box" style="height: 85%;" v-show="showproject">
				<div class="project_detail_box_top_title"><span v-on:click="hiddenme"><img src="../../common/jian_left.png"/></span>项目信息</div>
					<div class="borrow_detail_d_tabcon">
				<div class="xiamhmuxin" v-show="xiamhmuxin">
					<div class="borrow_detail_d_tab">
						<p class="active" v-on:click="xiamhmuxin1">项目信息</p>
						<p v-on:click="xiamhmuneirong1">相关内容</p>
						<p v-on:click="xiamhmujilu1">出借记录</p>
						<p v-on:click="huankuan1">还款记录</p>
					</div>
					<iframe style="width: 100%;height: 300px;" id="show-iframe" frameborder=0 name="showHere" scrolling=auto :src="this.$route.params.borrow_info">111</iframe>
				</div>
				<div class="xiamhmuneirong" v-show="xiamhmuneirong">
					<div class="borrow_detail_d_tab">
						<p v-on:click="xiamhmuxin1">项目信息</p>
						<p class="active" v-on:click="xiamhmuneirong1">相关内容</p>
						<p v-on:click="xiamhmujilu1">出借记录</p>
						<p v-on:click="huankuan1">还款记录</p>
					</div>
					<iframe style="width: 100%;height: 330px;" id="show-iframe" frameborder=0 name="showHere1" scrolling=auto :src="this.$route.params.file_info">111</iframe>
				</div>
				<div class="xiamhmujilu" v-show="xiamhmujilu">
					<div class="borrow_detail_d_tab">
						<p v-on:click="xiamhmuxin1">项目信息</p>
						<p v-on:click="xiamhmuneirong1">相关内容</p>
						<p class="active" v-on:click="xiamhmujilu1">出借记录</p>
						<p v-on:click="huankuan1">还款记录</p>
					</div>
					<iframe style="width: 100%;height: 330px;" id="show-iframe" frameborder=0 name="showHere1" scrolling=auto :src="this.$route.params.borrow_log">111</iframe>
				</div>
				<div class="huankuan" v-show="huankuan">
					<div class="borrow_detail_d_tab">
						<p v-on:click="xiamhmuxin1">项目信息</p>
						<p v-on:click="xiamhmuneirong1">相关内容</p>
						<p v-on:click="xiamhmujilu1">出借记录</p>
						<p class="active" v-on:click="huankuan1">还款记录</p>
					</div>
					<iframe style="width: 100%;height: 330px;" id="show-iframe" frameborder=0 name="showHere1" scrolling=auto :src="this.$route.params.investor_log">111</iframe>
				</div>
			</div>
			</div>
	</div>

</template>

<script>
	import { formatDate } from '../../lib/time1'
	export default {
		name: 'home',
		data() {
			return {
				terminal_detail:'',
				borrow_id:'',
				showproject:false,
				chujiedetail: false,
				chujiedetail_two: false,
				img: true,
				img1: false,
				img2: true,
				img3: false,
				img4: true,
				img5: false,
				img6: true,
				img7: false,
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
		mounted() {
			console.log(this.$route.params) //
			this.borrow_id=this.$route.params.borrow_id
		},
		methods: {
			showToggle() {
				this.chujiedetail = !this.chujiedetail
				this.img = !this.img
				this.img1 = !this.img1
			},
			showToggle1() {
				this.chujiedetail_two = !this.chujiedetail_two
				this.img2 = !this.img2
				this.img3 = !this.img3
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
			},
			showprojectshow(){
				this.showproject=true
			},
			hiddenme(){
				this.showproject=false
			},
			bargain() {
				var _self = this;
				var tokendata={
					'token':sessionStorage.getItem('name'),
					'borrow_id':_self.borrow_id
				}
				window.location.href = 'https://develop.jinlingdai.cn/mobile/Agreement/downfile?token='+sessionStorage.getItem('name')+'&borrow_id='+_self.borrow_id;
				console.log(tokendata)
				$.ajax({
					type: 'get',
					data: tokendata,
					url: 'https://develop.jinlingdai.cn/mobile/Agreement/downfile',
					success: function(data) {
						console.log(data)
//						var bargainshow = eval('(' + data + ')');						 
//                       console.log(bargainshow)
                        

					}
				});
			},
		},
		filters: {
        formatDate(time) {
            return formatDate(new Date(time * 1000),'yyyy-MM-dd');
        }
    }
	}
</script>

<style>
	.project_detail_box{
		width: 100%;
		height: 85%;
		background: white;
		overflow: scroll;
		position: absolute;
		top: 0;
	}
	.project_detail_box_top_title{
		text-align: center;
		height: 40px;
		line-height: 40px;
		background: white;
		border-bottom: 1px solid #F7F7F7;
		position: relative;
		font-size: 14px;
	}
	.project_detail_box_top_title img{
		width: 10px;
	    height: 20px;
	    position: absolute;
	    left: 20px;
	    top: 9px;
	}
	.borrow_detail_d_tab{
		background: white;
		width: 100%;
		height: 30px;
		border-bottom: 1px solid #F7F7F7;
	}
	.borrow_detail_d_tab p{
		float: left;
		width: 25%;
		text-align: center;
		line-height: 30px;
	}
	 .chujiedetail_box{
	 	border-bottom: 1px solid #F7F7F7;
	 }
	.chujiedetail_roter a{
		color: #333;
		text-decoration: none;
	}
	.chujiedetail_top {
		height: 40px;
		line-height: 40px;
	}
	
	.chujiedetail_top p:nth-child(1) {
		height: 40px;
		line-height: 40px;
	}
	
	/*.huaikuandetail {
		margin-top: 10px;
	}*/
	
	.chujiedetail_ul li p:nth-child(1) {
		margin-top: 5px;
	}
	
	.chujiedetail_ul li p {
		width: 100%;
		height: 25px;
		line-height: 30px;
		text-align: center;
	}
	
	.chujiedetail_ul {
		height: 120px;
	}
	
	.chujiedetail_ul li {
		width: 33%;
		height: 60px;
		float: left;
		list-style: none;
		/*border-right: 1px solid #ccc;
		border-bottom: 1px solid #ccc;*/
	}
	
	.chujiedetail_ul li:nth-child(3) {
		border-right: 0;
	}
	
	.chujiedetail_ul li:nth-child(6) {
		border-right: 0;
		border-bottom: 0;
	}
	
	.chujiedetail_ul li:nth-child(5) {
		border-bottom: 0;
	}
	
	.chujiedetail_ul li:nth-child(4) {
		border-bottom: 0;
	}
	
	.chujiedetail .img {
		width: 13px;
		height: 20px;
		background: url(../../common/right_jian.png) no-repeat;
		background-size: 100% 100%;
		position: absolute;
		right: 30px;
		top: 11px;
	}
	
	.chujiedetail .img1 {
		width: 13px;
		height: 20px;
		background: url(../../common/down_jian.png) no-repeat;
		background-size: 100% 100%;
		position: absolute;
		right: 30px;
		top: 11px;
	}
	
	.chujiedetail {
		width: 100%;
		/*padding-left: 23px;*/
		background: white;
		/*margin-top: 10px;*/
		position: relative;
	}
	
	.terminal_detail_box {
		width: 100%;
		height: 100%;
		background: #F7F7F7;
	}
	
	.terminal-detail_top {
		height: 40px;
		line-height: 40px;
		padding-left: 23px;
		position: relative;
		background: white;
	}
	
	.terminal-detail_top span {
		position: absolute;
		right: 23px;
		color: #f35e3e;
	}
</style>