<!--<template>
	<div class="select01">
		<ul>
			<router-link :to="{ name: 'Borrowdetail', params: { id: item1&&item1.id,borrow_interest_rate:item1&&item1.borrow_interest_rate,rest_borrow_money:item1&&item1.rest_borrow_money,borrow_duration:item1&&item1.borrow_duration,progress:item1&&item1.progress,borrow_money:item1&&item1.borrow_money,borrow_name:item1&&item1.borrow_name,expired_time:item1&&item1.expired_time}}" v-for="item1 in borrowlist">
				<li>
				
					<div class="borrow_name">{{item1&&item1.borrow_name}}<p class="new">新手</p><p class="tui">推荐</p><p class="add">加息</p><p class="vip">vip</p></div>
					<div class="synthesize_con">
						<div class="border_right1">
							<p class="border_right1_lv"><span>{{item1&&item1.borrow_interest_rate}}</span><span>%</span></p>
							<p>预期年化利率</p>
							<p>投资总金额<span>400000</span></p>
						</div>
						<div class="surplus">
							<p>期限<span>1个月</span></p>
							<p>剩余金额<span>{{item1&&item1.rest_borrow_money}}</span></p>
						</div>
					</div>
					<div class="productcon">
					  <div>
                        <div class="tc">
                            <progress-bar :value="item1&&item1.progress" :options="options1"></progress-bar>
                        </div>
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
           options1 () {
        return {
          radius: 40,
          text: function (value) {
            return this.htmlifyNumber(value) + '<span style="font-size: 0.7em;">%</span>';
          },
          textColor: 'rgb(33, 150, 243)'
        }
      }
		},
		components: {
			progressBar
		}
	}
</script>

<style>
	.circles-decimals{
		display: none !important;
	}
	.select01 .circles-text span{
		font-size: 1em;
		color: #ff4d46;
	}
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
		background: white;
	}
	.select01 ul li .borrow_name{
		padding-left: 1em;
		height: 2.6em;
		line-height: 2.6em;
		font-size: 1.2rem;
		border-bottom: 1px solid #F7F7F7;
	}
	.select01 ul li .borrow_name p{
		display: inline-block;
		padding-left: 0.7em;
		padding-right: 0.7em;
		border-radius: 0.3em;
		font-size: 12px;
		line-height: 1.5em;	
		margin-left: 1em;
	}
	.select01 ul li .borrow_name .new{
		background: #ff4d46;
		color: white;
	}
	.select01 ul li .borrow_name .add{
		border: 2px solid #4db1fc;
		color: #4db1fc;
	}
	.select01 ul li .borrow_name .tui{
		border: 2px solid #91b937;
		color: #91b937;
	}
	.select01 ul li .borrow_name .vip{
		border: 2px solid #927bff;
		color: #927bff;
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
		height: 5rem;
		padding-left: 1.3em;
	}
	
	.synthesize_con div {
		width: 40%;
		line-height: 5rem;
		float: left;
		text-align: center;
		padding-top: 1rem;
	}
	
	
	.synthesize_con div p:nth-child(1) {
		color: #f35e3e;
		font-size: 1.3em;
	}
	.synthesize_con .surplus{
		margin-top: 3.1em;
	}
	.synthesize_con .surplus p{
		line-height: 1.8em;
		font-size: 12px !important;
		color: #7b7b7b !important;
	}
	.synthesize_con .surplus p:nth-child(1) span{
		color: #f35e3e;
		font-size: 1.3em;
	}
	.border_right1 p{
		text-align: left;
		line-height: 1.8em;
		color: #7b7b7b;
		font-size: 1em;
	}
	.border_right1 .border_right1_lv{
		font-weight: 600;
		font-size: 1em;
	}
	.border_right1 .border_right1_lv span{
		font-size: 1em;	
	}
	.border_right1 .border_right1_lv span:nth-child(2){
		font-size: 1.5em;		
	}
	.select01 .tc {
		position: absolute;
		right: 2em;
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