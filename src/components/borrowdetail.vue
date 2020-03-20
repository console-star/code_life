<template>
	<div class="hello" style="height: 90%;background: #F7F7F7;overflow: scroll;">

		<!--版本更新-->
		<div class="borrow_detail">
			<div class="borrow_detail_top">
				<p class="borrow_detail_top_title">{{borrowdetail.borrow_name}}</p>
				<div class="borrow_detail_top_con">
				    <p class="borrow_detail_top_con_lv">{{borrowdetail.borrow_interest_rate}}<span>%</span></p>
				    <p>预期年化收益率</p>
				    <p class="borrow_detail_limit">限投{{borrowdetail.borrow_max}}元</p>
				    <div class="borrow_detail_top_con_time">
				    	<p>借款期限{{borrowdetail.borrow_duration}}{{borrowdetail.duration_unit}}</p>
				    	<p>{{borrowdetail.repayment_type}}</p>
				    	
				    </div>
				</div>
			</div>
			<div class="borrow_detail_top1" style="padding-left: 2em;padding-right: 3em;">
				<!--<div class="tc" style="position: relative;">
					<span class="baifenhao">%</span>
					<progress-bar :value="30" type="rect" :options="options2"></progress-bar>
				</div>-->
				<p class="borrowdetailprogress">{{borrowdetail.progress}}<span>%</span></p>
				<van-progress :percentage="borrowdetailprogress" show-pivot="false"  pivot-text="" color="#ffffff"/>
				<div class="borrow_detail_top1_down">
					<div>
                        <p>募集截止</p>
                        <p>{{borrowdetail.expired_time | formatDate}}</p>
					</div>
					<div>
                        <p>起投金额</p>
                        <p>{{borrowdetail.borrow_min}}元</p>
					</div>
					<div>
                        <p>借款总额</p>
                        <p>{{borrowdetail.borrow_money}}元</p>
					</div>
				</div>
			</div>
			<div class="borrow_detail_red_pack_img">
				<img src="../common/borrow_detail_red_pack_img.png" />
			</div>
			<div class="borrow_detail_step">
				<van-steps :active="active" active-color="#ff4d46">
				  <van-step>项目上线</van-step>
				  <van-step>投标中</van-step>
				  <van-step>回款中</van-step>
				  <van-step>已结清</van-step>
				</van-steps>
			</div>
			<div class="borrow_detail_list">
				   <ul>
				   	 <router-link :to="{ name: 'Information', params: { borrow_info: borrowdetail.borrow_info}}"><li>项目信息  <p>信息资料100%</p><img src="../common/right_jian.png"/></li></router-link>
				     <router-link :to="{ name: 'Information1', params: { file_info: borrowdetail.file_info}}"><li>相关资料  <p>信息资料100%</p><img src="../common/right_jian.png"/></li></router-link>
				     <router-link :to="{ name: 'Information2', params: { borrow_log: borrowdetail.borrow_log}}"><li>出借记录  <p>信息资料100%</p><img src="../common/right_jian.png"/></li></router-link>
				     <router-link :to="{ name: 'Information3', params: { investor_log: borrowdetail.investor_log}}"><li>还款记录  <p>信息资料100%</p><img src="../common/right_jian.png"/></li></router-link>
				   </ul>
			</div>
			<div class="borrow_detail_btn">
				<router-link :to="{ name: 'borrowdetailto', params: { id: this.$route.params.id }}"><button v-on:click="changeeventbus">立即投资</button></router-link>
				<p></p>
			</div>
		</div>
	</div>

</template>

<script>
	import commonsum from '../vuex/common.vue'
	import { getHeader } from '../vuex/header'
	import eventbus from './eventBus'
	import { Toast } from 'vant'
//	import progressBar from './vircle-bar.vue'
	//	import urltab from '../common/else/taburl.vue'
	import filter from '../lib/filter'
//	import touch from './vue-touch'
//	import { formatDate } from '../lib/time'
	import { formatDate} from '../lib/time1'

	export default {
		name: 'app',
		data() {
			return {
				counter: '100',
				borrowdetailprogress:'',
				name: "开始",
				active:1,
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
			this.Borrowlistshowit();
		},
		methods: {
			changeeventbus(){
				this.redpack.serverSrc=1
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
				console.log(data1)
				$.ajax({
					type: 'post',
					data: data1,
					url: commonsum.web_url+'/mobile/borrow/detailinfo',
					headers: headers,
					success: function(data) {
						var borrowdetail = eval('(' + data + ')');
						_self.borrowdetail = borrowdetail.data;
						if(parseInt(borrowdetail.data.progress)==0){
							_self.borrowdetailprogress=0
						}else{
							_self.borrowdetailprogress=parseFloat(borrowdetail.data.progress)+10
						}
						
						console.log(_self.borrowdetail)
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
			formatMonth: function(value) {
				return value.replace(/个月/g, '')
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
		},
		filters: {
        formatDate(time) {
            return formatDate(new Date(time * 1000),'yyyy-MM-dd');
        }
    }

	}
</script>

<style>
	.borrow_detail_d_tab .active{
		border-bottom: 2px solid #f35e3e;
	}
	.borrow_detail_btn{
		height: 6em;
		background: white;
		text-align: center;
	}
	.borrow_detail_btn button{
		width: 90%;
		height: 3.3em;
		border-radius: 0.5em;
		border: 0;
		margin-top: 1em;
		background: #ff5147;
		color: white;
	}
	.borrow_detail_list ul li{
		height: 3em;
		line-height: 3em;
		background: white;
		position: relative;
		font-size:1.2em;
		padding-left: 1em;
		color: #333;
	}
	.borrow_detail_list ul li p{
		position: absolute;
		right: 2.5em;
		top: 0;
		color: #ccc;
	}
	.borrow_detail_list ul li img{
		height: 1.8em;
		position: absolute;
		right: 1em;
		top: 0.8em;
	}
	.borrow_detail_step{
		margin-top: 0.8em;
	}
	.van-step--horizontal.van-step--finish .van-step__circle, .van-step--horizontal.van-step--finish .van-step__line{
		background-color: #ff4d46 !important;
	}
	.van-step--horizontal:last-child .van-step__title{
		position: absolute;
		width: 3em;
		left: -2.2em;
	}
	.van-step--horizontal:first-child .van-step__title{
		margin-left: -1em !important;
	}
	.van-steps__items{
		overflow: visible !important;
	}
	.van-steps--horizontal{
		padding: 0 3em !important;
	}
	/*版本更新*/
	.van-steps__items--alone{
          height: 3em;		
	}
	.van-step__circle-container{
		top: 2em !important;
	}
	.van-step .van-step__circle{
		width: 1.3em !important;
		height: 1.3em !important;
		/*background-color: #ff4d46 !important;*/
	}
	.van-icon-checked{
		width: 1.3em !important;
		height: 1.3em !important;
		background-color: ;
	}
	.van-step--process .van-icon{
		width: 1.3em !important;
		height: 1.3em !important;
	    background-color: #ff4d46 !important;
	    border-radius: 50%;
	    display: block;
	}
	.an-steps__items,.van-steps__items--alone{
		width: 100%;
		/*padding-left: 0.5em;*/
		/*padding-right: 2em;*/
		margin: auto !important;
		margin-top:0.6em !important;
	}
	.borrow_detail_red_pack_img{
		margin-top: 1em;
	}
	.borrow_detail_red_pack_img img{
		width: 100%;
	}
	.borrowdetailprogress{
		position: absolute;
        right: 1em;
		color: white;
	}
	.van-progress{
		width: 90%;
		margin-top: 0.6em;
		background: #eda49f !important;
	}
	/*.van-progress__pivot{
		height: 4px;
		right: 0.1em !important;
		min-width: 2.2em !important;
		background: #ffffff !important;
	}*/
	
	.borrow_detail_top1_down div{
		display: inline-block;
		width: 32%;
		text-align: center;
		color: white;
		margin-top: 1em;
	}
	.borrow_detail_top1_down div p{
		line-height: 1.8em;
	}
	.borrow_detail_top1{
		height: 6em;
		background: #db463d;
		padding-top: 1em;
		position: relative;
	}
	.borrow_detail_top1 .circles-text1 span:nth-child(2){
		font-size: 0.7em;
	    position: absolute;
	    right: -2.6em;
	    top: 0.35em;
	}
	.borrow_detail_top1 .circles-integer1{
		position: absolute;
		right: -1.6em;
		font-size: 0.7em;
	}
	.borrow_detail_top{
		background: #ff5348;
		color: white;
		position: relative;
	}
	
	.borrow_detail_top .borrow_detail_top_title{
		text-align: center;
		width: 100%;
		height: 3em;
		line-height: 3em;
	}
	.borrow_detail_top_con p{
		text-align: center;
	}
	.borrow_detail_top_con_lv{
		font-size: 2.3em;
	}
	.borrow_detail_top .borrow_detail_limit{
		position: absolute;
		width: 8em;
		height: 2em;
		line-height: 2em;
		right: 15%;
		top: 30%;
		text-align: center;
		background: url(../common/borrow_detail_limit.png) no-repeat;
		background-size:100% 100%;
		color: #ff5348;
	}
	.borrow_detail_top_con_time{
		text-align: center;
		height: 3em;
		margin: auto;
	}
	.borrow_detail_top_con_time p{
		display: inline-block;
		width: 27%;
		text-align: center;
		margin-top: 0.8em;
	}
	.borrow_detail_top_con_time p:nth-child(1){
		border-right: 1px solid white;
	}
	/*老版本*/
	/*.borrow_detail_d {
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
	}*/
</style>