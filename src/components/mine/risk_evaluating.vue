<template>
	<div class="hello" style="height: 100%;">
		<div class="risk_evaluating" style="height: 100%;">
			<ul class="question-content">
				<li class="question">
					<p class="title">1、您的目前年龄？</p>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_1" value="A" v-model="one">  
					    <span class="demo--radioInput"></span>小于25岁 
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_1" value="B" v-model="one">  
					    <span class="demo--radioInput"></span>25-40岁之间
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_1" value="C" v-model="one">  
					    <span class="demo--radioInput"></span>41-60岁之间 
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_1" value="D" v-model="one">  
					    <span class="demo--radioInput"></span>大于60岁
					</label>
				</li>
				<li class="question">
					<p class="title">2、您当前的资产主要构成情况？</p>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_2" value="A" v-model="two">  
					    <span class="demo--radioInput"></span>只有银行存款（活期或者定期）
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_2" value="B" v-model="two">  
					    <span class="demo--radioInput"></span>主要是银行存款，还有少量国债和基金，蓝筹股
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_2" value="C" v-model="two">  
					    <span class="demo--radioInput"></span>既有股票、基金、理财产品，也有银行存款，前后两者各半
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_2" value="D" v-model="two">  
					    <span class="demo--radioInput"></span>以期货等金融衍生产品和股票投资为主
					</label>
				</li>
				<li class="question">
					<p class="title">3、您当前用家庭资产多少比例进行投资？</p>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_3" value="A" v-model="three">  
					    <span class="demo--radioInput"></span>10%之内的资产
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_3" value="B" v-model="three">  
					    <span class="demo--radioInput"></span>10-20%之间
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_3" value="C" v-model="three">  
					    <span class="demo--radioInput"></span>25-50%之间
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_3" value="D" v-model="three">  
					    <span class="demo--radioInput"></span>超过50%
					</label>
				</li>
				<li class="question">
					<p class="title">4、如果有个为期1年投资项目可参与，投资成功的概率是50%，一旦成功可获得4倍收益，一旦失败则本钱全部损失，对这样的投资您愿意投入的资金量是多少？</p>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_4" value="A" v-model="four">  
					    <span class="demo--radioInput"></span>一分也不投入
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_4" value="B" v-model="four">  
					    <span class="demo--radioInput"></span>1个月的收入
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_4" value="C" v-model="four">  
					    <span class="demo--radioInput"></span>3个月的收入 
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_4" value="D" v-model="four">  
					    <span class="demo--radioInput"></span>6个月或超过6个月的收入 
					</label>
				</li>
				<li class="question">
					<p class="title">5、往往高收益的基金或理财产品伴随着高风险您准备承担多大的风险？</p>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="demo-radio4" value="A" v-model="five">  
					    <span class="demo--radioInput"></span>不愿意让我的钱有任何损失 
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_5" value="B" v-model="five">  
					    <span class="demo--radioInput"></span>因为基金有潜在的增值功能，我愿意承担一定的风险
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_5" value="C" v-model="five">  
					    <span class="demo--radioInput"></span>很愿意通过长期投资使资产增值保值，也愿意在此过程中承担风险
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_5" value="D" v-model="five">  
					    <span class="demo--radioInput"></span>我愿意投资最具增长潜力的产品，也愿意为了更高的收益承受大幅度的风险变动
					</label>
				</li>
				<li class="question">
					<p class="title">6、请问您投资价格波动性的产品有多少年的经验？（具有价格波动的产品包括股票、基金、外汇、期权期货等金融产品）</p>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_6" value="A" v-model="six">  
					    <span class="demo--radioInput"></span>7-10年 
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_6" value="B" v-model="six">  
					    <span class="demo--radioInput"></span>4-7年
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_6" value="C" v-model="six">  
					    <span class="demo--radioInput"></span>1-3年
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_6" value="D" v-model="six">  
					    <span class="demo--radioInput"></span>从来没有或刚刚开始
					</label>
				</li>
				<li class="question">
					<p class="title">7、通常情况下您一笔投资预备持有的期限是多久？</p>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_7" value="A" v-model="seven">  
					    <span class="demo--radioInput"></span>长期--超过7年
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_7" value="B" v-model="seven">  
					    <span class="demo--radioInput"></span>中期--4年到7年
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_7" value="C" v-model="seven">  
					    <span class="demo--radioInput"></span>中短期--1年到3年
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_7" value="D" v-model="seven">  
					    <span class="demo--radioInput"></span>短期--1年内
					</label>
				</li>
				<li class="question">
					<p class="title">8、一年中您能最能接受的资产波动范围是</p>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_8" value="A" v-model="eight">  
					    <span class="demo--radioInput"></span>最多盈利10%，最大亏损5% 
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_8" value="B" v-model="eight">  
					    <span class="demo--radioInput"></span>最多盈利20%，最大亏损15%
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_8" value="C" v-model="eight">  
					    <span class="demo--radioInput"></span>最多盈利40%，最大亏损30%
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_8" value="D" v-model="eight">  
					    <span class="demo--radioInput"></span>最多盈利60%，最大亏损50% 
					</label>
				</li>
				<li class="question">
					<p class="title">9、您此次投资的目的是？</p>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_9" value="A" v-model="nine">  
					    <span class="demo--radioInput"></span>就希望能每年分红或者获得固定的收益 
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_9" value="B" v-model="nine">  
					    <span class="demo--radioInput"></span>希望能获得分红并实现资产的部分升值 
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_9" value="C" v-model="nine">  
					    <span class="demo--radioInput"></span>两者各半 
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_9" value="D" v-model="nine">  
					    <span class="demo--radioInput"></span>主要是为了资产升值 
					</label>
				</li>
				<li class="question">
					<p class="title">10、 如果您刚刚投资就遇到市场调整，您能承受的损失大概是多少？</p>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_10" value="A" v-model="ten">  
					    <span class="demo--radioInput"></span>5%以内
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_10" value="B" v-model="ten">  
					    <span class="demo--radioInput"></span>6-20% 
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_10" value="C" v-model="ten">  
					    <span class="demo--radioInput"></span>21-40%
					</label>
					<label class="demo--label">  
					    <input class="demo--radio" type="radio" name="test_10" value="D" v-model="ten">  
					    <span class="demo--radioInput"></span>超过40%
					</label>
				</li>
			</ul>
			<button class="risk_evaluating_btn" v-on:click="Number_of_Result">查看结果</button>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'vant'
	export default {
		components: {

		},
		data() {
			return {
				radio: '',
				result:'',
				uid:'',
				one: '',
				two: '',
				three:'',
				four:'',
				five:'',
				six:'',
				seven:'',
				eight:'',
				nine:'',
				ten:''
			}
		},
		created() {
			this.get_uid();
		},
		methods: {
			get_uid(){
				var data1 = {
					'token': sessionStorage.getItem('name')
				}
				var _self = this;
				console.log(data1)
				$.ajax({
					type: 'post',
					data: data1,
					url: 'https://develop.jinlingdai.cn/mobile/user/userinfo',
					success: function(data) {
						var getuid = eval('(' + data + ')');
						_self.uid = getuid.data.uid;
						
						console.log(_self.uid)
					}

				});
			},
			Number_of_Result() {
				if(this.one==""&&this.two==""&&this.three==""&&this.four==""&&this.five==""&&this.six==""&&this.seven==""&&this.eight==""&&this.nine==""&&this.ten==""){
					Toast("请先答完题目再查看结果")
				}else{
				var _self = this;
			    var mess={
			    	 "test_1":_self.one,
			    	 "test_2":_self.two,
			    	 "test_3":_self.three,
			    	 "test_4":_self.four,
			    	 "test_5":_self.five,
			    	 "test_6":_self.six,
			    	 "test_7":_self.seven,
			    	 "test_8":_self.eight,
			    	 "test_9":_self.nine,
			    	 "test_10":_self.ten
			    }
			   console.log(mess)
				var data1 = {     
					'uid':this.uid,
					'data':mess
				}
				console.log(data1)
				$.ajax({
					type: 'post',
					data: data1,
					url: 'https://develop.jinlingdai.cn/mobile/page/countscores',
					success: function(data) {
						var num_result = eval('(' + data + ')');
						_self.result = num_result.data;		
						_self.$router.push('/riskresult')
						console.log(num_result)
					}

				});
				}
				
			}
		}
	}
</script>

<style>
	.risk_evaluating {
		padding-top: 10px;
	}
	
	.question-content {
		height: 80%;
		overflow: scroll;
		padding-left: 1em;
	}
	
	.risk_evaluating .question-content li .title {
		line-height: 30px;
		font-size: 14px;
		padding-right: 10px;
	}
	
	.risk_evaluating .question-content li label {
		display: block;
		margin-top: 0.5em;
		width: 95%;
		line-height: 2em;
	}
	
	.van-radio .van-icon-checked {
		color: #ef7815 !important;
	}
	
	.risk_evaluating .question-content li .van-radio__label {
		font-size: 14px;
		padding-left: 20px;
		width: 90%;
	}
	
	.risk_evaluating .question-content li .van-radio {
		margin-top: 8px;
		position: relative;
		padding-right: 10px;
	}
	
	.risk_evaluating .question-content li .van-radio:nth-child(1) {
		margin-top: 0;
	}
	
	.risk_evaluating .question-content li .van-radio .van-icon {
		font-size: 17px !important;
	}
	
	.risk_evaluating .question-content li {
		margin-top: 13px;
	}
	
	.risk_evaluating .question-content li .van-radio__input {
		position: absolute;
		top: 1px;
	}
	
	.risk_evaluating .risk_evaluating_btn {
		width: 80%;
		height: 3em;
		color: white;
		background: #ff5d4c;
		border: 0;
		display: block;
		margin: auto;
		border-radius: 0.4em;
		margin-top: 1em;
	}
	/*radio样式美化*/
	
	.demo--label {
		display: inline-block;
		font-size: 14px;
	}
	
	.demo--radio {
		display: none
	}
	
	.demo--radioInput {
		background-color: #fff;
		border: 2px solid rgba(0, 0, 0, 0.15);
		border-radius: 100%;
		display: inline-block;
		height: 1em;
		margin-right: 10px;
		margin-top: -0.5em;
		vertical-align: middle;
		width: 1em;
		line-height: 1;
	}
	
	.demo--radio:checked+.demo--radioInput:after {
		background-color: #ff5d4c;
		border-radius: 100%;
		content: "";
		display: inline-block;
		height: 0.6em;
		position: absolute;
		left: 0.2em;
		top: 0.2em;
		width: 0.6em;
	}
	
	.demo--checkbox.demo--radioInput,
	.demo--radio:checked+.demo--checkbox.demo--radioInput:after {
		border-radius: 0
	}
	
	.demo--radio:checked+.demo--radioInput {
		border: 2px solid #ff5d4c;
		position: relative;
	}
</style>