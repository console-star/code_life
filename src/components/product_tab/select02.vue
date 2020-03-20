<!--<template>
	<div class="select01">
		<ul>
			<router-link :to="{ name: 'Borrowdetail', params: { id: item1&&item1.id,borrow_interest_rate:item1&&item1.borrow_interest_rate,rest_borrow_money:item1&&item1.rest_borrow_money,borrow_duration:item1&&item1.borrow_duration,progress:item1&&item1.progress,borrow_money:item1&&item1.borrow_money,borrow_name:item1&&item1.borrow_name,expired_time:item1&&item1.expired_time}}" v-for="item1 in borrowlist">
				<li>
					<div class="synthesize_top">
						<p class="kind">{{item1&&item1.borrow_duration}}</p>{{item1&&item1.borrow_name}}
						<div class="rob">
							<div v-if="item1&&item1.borrow_status==='1'">审核中</div>
							<div v-if="item1&&item1.borrow_status==='2'">抢购</div>
							<div v-if="item1&&item1.borrow_status==='3'">结束</div>
							<div v-if="item1&&item1.borrow_status==='4'">满标</div>
							<div v-if="item1&&item1.borrow_status==='5'">复审未通过</div>
							<div v-if="item1&&item1.borrow_status==='6'">还款中</div>
						</div>
					</div>
					<div class="synthesize_con">
						<div class="border_right1">
							<p class="border_right1_lv"><span>{{item1&&item1.borrow_interest_rate}}</span>%</p>
							<p>预期年化利率</p>
						</div>
						<div class="surplus">
							剩余金额<span>{{item1&&item1.rest_borrow_money}}</span>
						</div>
					</div>
					<div class="productcon">
					<div class="tc">
						<span class="baifenhao">%</span>
						<progress-bar :value="item1&&item1.progress" type="rect" :options="{rectWidth:260,rectHeight:5,rectRadius:5}"></progress-bar>
					</div>	
					</div>
					

				</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
	import progressBar from '../rect-bar.vue'
	export default {
		name: 'app',
		data() {
			return {
				borrowlist: '',

			}
		},
		created() {
			this.Borrowlistshow();
		},
		methods: {
			Borrowlistshow() {
				var _self = this;
				$.ajax({
					type: 'post',
					data: '',
					url: 'https://develop.jinlingdai.cn/mobile/borrow/lists',
					success: function(data) {
						var borrowlist = eval('(' + data + ')');
						_self.borrowlist = borrowlist.data.list;
						console.log(borrowlist);

					}
					
				});
			}
		},
		computed: {

		},
		components: {
			progressBar
		}
	}
</script>

<style>
	.select01 a {
		color: #333;
		text-decoration: none;
	}
	
	.select01 ul {
		width: 100%;
		height: 320px;
		overflow-y: scroll;
	}
	
	.select01 ul li {
		width: 100%;
		list-style: none;
		height: 150px;
		position: relative;
		overflow: hidden;
	}
	
	.select01 .synthesize_top {
		/*width: 100%;*/
		height: 4rem;
		line-height: 4rem;
		padding-left: 4rem;
		overflow: hidden;
		border-bottom: 2px dashed #F7F7F7;
		position: ;
		z-index: 10;
	}
	
	.select01 .synthesize_top .kind {
		width: 8.3rem;
		height: 1.8rem;
		line-height: 1.8rem;
		text-align: center;
		background: #f35e3e;
		color: white;
		position: absolute;
		left: -2.6rem;
		top: 0.7rem;
		transform: rotate(-40deg);
		-ms-transform: rotate(-40deg);
		-moz-transform: rotate(-40deg);
		-webkit-transform: rotate(-40deg);
		-o-transform: rotate(-40deg);
	}
	
	.select01 .synthesize_top .rob {
		position: absolute;
		width: 4rem;
		border: 1px solid #f35e3e;
		color: #f35e3e;
		height: 2rem;
		line-height: 2rem;
		border-radius: 2rem;
		text-align: center;
		z-index: 100;
		top: 0.8rem;
		right: 1.3rem;
	}
	
	.synthesize_con {
		position: absolute;
		top: 4rem;
		width: 100%;
		
	}
	
	.synthesize_con div {
		width: 33.3%;
		line-height: 5rem;
		float: left;
		text-align: center;
		padding-top: 1rem;
	}
	.synthesize_con div p:nth-child(1) {
		color: #f35e3e;
		font-size: 1.3em;
	}
	.border_right1 p{
		text-align: left;
		line-height: 1.8em;
		color: #7b7b7b;
	}
	.border_right1 .border_right1_lv{
		font-weight: 600;
	}
	.border_right1 .border_right1_lv span:nth-child(1){
		font-size: 3em;	
	}
	.border_right1 .border_right1_lv span:nth-child(2){
		font-size: 1.5em;		
	}
	.select01 .tc{
		position: absolute;
		right: 2em;
		bottom: 0.6em;
	}
	
	.circles-integer1 {
		position: absolute;
		right: -3.6rem;
		top: 0.5rem;
		text-align: center;
	}
	
	.select01 ul li {
		border-bottom: 5px solid #F7F7F7;
	}
	
	.baifenhao {
		position: absolute;
		right: -4.7rem;
		top: 0.1rem;
	}
	.productcon{
		list-style: none;
	}
	.productcon .circles-decimals1{
		display: none;
		list-style: none !important;
	}
	.select01 .circles-wrap1{
		margin-left: 20px;
	}
</style>-->