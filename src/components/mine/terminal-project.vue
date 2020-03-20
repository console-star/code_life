<template>
	<div class="hello terminal1_con" style="background: #F7F7F7;height: 90%;overflow: scroll;">
		<div class="terminal1_con_tabcon">
			<div class="no_reimbursement" v-show="no_reimbursement">
				<div class="terminal1_d_tab">
					<p class="active" v-on:click="no_reimbursement1">未还款</p>
					<p v-on:click="in_the_payment1">还款中</p>
					<p v-on:click="has_been_payment1">已还款</p>
				</div>
				<div class="terminal1_con_tabcon1_con">
					<router-link :to="{ name: 'Terminaldetail', params: {borrow_title: terminal1.borrow_title,investor_status: terminal1.investor_status,borrow_interest_rate:terminal1.borrow_interest_rate,investor_capital:terminal1.investor_capital,investor_duration:terminal1.investor_duration,expired_time:terminal1.expired_time,all_income:terminal1.all_income,unreceived_money:terminal1.unreceived_money,received_money:terminal1.received_money,unreceived_capital:terminal1.unreceived_capital,reward:terminal1.reward,borrow_info:terminal1.borrow_info,borrow_log:terminal1.borrow_log,file_info:terminal1.file_info,investor_log:terminal1.investor_log,borrow_id:terminal1.borrow_id}}"  v-for="terminal1 in terminal1show">
					<li class="terminal1_con_tabcon1_con_li">
						<div class="terminal1_con_tabcon1_con_t"><span class="biao_num"></span>{{terminal1.borrow_title}}<span class="rong_type">{{terminal1.investor_status}}</span></div>
						<ul>
							<li><p><span>{{Math.round(terminal1.borrow_interest_rate)}}</span>%</p><p>约定年化借款利率</p></li>
							<li><p><span>{{terminal1.investor_capital}}</span>元</p><p>出借金额</p></li>
							<li><p><span>{{terminal1.investor_duration}}</span>月</p><p>期限</p></li>
						</ul>
						<div class="terminal1_con_tabcon1_con_li_b"><span>{{terminal1.add_time | formatDate}}</span><span v-if="terminal1.rate_type==1">即投计息</span><span v-if="terminal1.rate_type==2">满标计息</span></div>
					</li>
					</router-link>
				</div>
			</div>
			<div class="in_the_payment" v-show="in_the_payment">
				<div class="terminal1_d_tab">
					<p v-on:click="no_reimbursement1">未还款</p>
					<p class="active" v-on:click="in_the_payment1">还款中</p>
					<p v-on:click="has_been_payment1">已还款</p>
				</div>
				<div class="terminal1_con_tabcon1_con">
					<router-link :to="{ name: 'Terminaldetail', params: {borrow_title: terminal2.borrow_title,investor_status: terminal2.investor_status,borrow_interest_rate:terminal2.borrow_interest_rate,investor_capital:terminal2.investor_capital,investor_duration:terminal2.investor_duration,expired_time:terminal2.expired_time,all_income:terminal2.all_income,unreceived_money:terminal2.unreceived_money,received_money:terminal2.received_money,unreceived_capital:terminal2.unreceived_capital,reward:terminal2.reward,borrow_info:terminal2.borrow_info,borrow_log:terminal2.borrow_log,file_info:terminal2.file_info,investor_log:terminal2.investor_log,borrow_id:terminal2.borrow_id}}" v-for="terminal2 in terminal1show1">
					<li class="terminal1_con_tabcon1_con_li">
						<div class="terminal1_con_tabcon1_con_t"><span class="biao_num"></span>消费金融-2017<span class="rong_type">{{terminal2.investor_status}}</span></div>
						<ul>
							<li><p><span>{{Math.round(terminal2.borrow_interest_rate)}}</span>%</p><p>约定年化借款利率</p></li>
							<li><p><span>{{terminal2.investor_capital}}</span>元</p><p>出借金额</p></li>
							<li><p><span>{{terminal2.investor_duration}}</span>月</p><p>期限</p></li>
						</ul>
						<div class="terminal1_con_tabcon1_con_li_b"><span>{{terminal2.add_time | formatDate}}</span><span v-if="terminal2.rate_type==1">即投计息</span><span v-if="terminal2.rate_type==2">满标计息</span></div>
					</li>
					</router-link>
				</div>
			</div>
			<div class="has_been_payment" v-show="has_been_payment">
				<div class="terminal1_d_tab">
					<p v-on:click="no_reimbursement1">未还款</p>
					<p v-on:click="in_the_payment1">还款中</p>
					<p class="active" v-on:click="has_been_payment1">已还款</p>
				</div>
				<div class="terminal1_con_tabcon1_con">
					<router-link :to="{ name: 'Terminaldetail', params: {borrow_title: terminal3.borrow_title,investor_status: terminal3.investor_status,borrow_interest_rate:terminal3.borrow_interest_rate,investor_capital:terminal3.investor_capital,investor_duration:terminal3.investor_duration,expired_time:terminal3.expired_time,all_income:terminal3.all_income,unreceived_money:terminal3.unreceived_money,received_money:terminal3.received_money,unreceived_capital:terminal3.unreceived_capital,reward:terminal3.reward,borrow_info:terminal3.borrow_info,borrow_log:terminal3.borrow_log,file_info:terminal3.file_info,investor_log:terminal3.investor_log,borrow_id:terminal3.borrow_id}}" v-for="terminal3 in terminal1show2">
					<li class="terminal1_con_tabcon1_con_li">
						<div class="terminal1_con_tabcon1_con_t"><span class="biao_num"></span>消费金融-2017<span class="rong_type">{{terminal3.investor_status}}</span></div>
						<ul>
							<li><p><span>{{Math.round(terminal3.borrow_interest_rate)}}</span>%</p><p>约定年化借款利率</p></li>
							<li><p><span>{{terminal3.investor_capital}}</span>元</p><p>出借金额</p></li>
							<li><p><span>{{terminal3.investor_duration}}</span>月</p><p>期限</p></li>
						</ul>
						<div class="terminal1_con_tabcon1_con_li_b"><span>{{terminal3.add_time | formatDate}}</span><span v-if="terminal3.rate_type==1">即投计息</span><span v-if="terminal3.rate_type==2">满标计息</span></div>
					</li>
					</router-link>
				</div>
			</div>
		
		</div>
	</div>

</template>

<script>
	import { formatDate } from '../../lib/time1'
	export default {
		name: 'app',
		data() {
			return {
				counter: 0,
				name: "开始",
				terminal1show:'',
				terminal1show1:'',
				terminal1show2:'',
				no_reimbursement: true,
				in_the_payment: false,
				has_been_payment: false,
				huankuan: false,
			}
		},
		created() {
			this.inviteRewardDetail()
		},
		methods: {			
			in_the_payment1() {
				this.in_the_payment = true
				this.no_reimbursement = false
				this.has_been_payment = false
				this.inviteRewardDetail1()
			},
			no_reimbursement1() {
				this.in_the_payment = false
				this.no_reimbursement = true
				this.has_been_payment = false
			},
			has_been_payment1() {
				this.in_the_payment = false
				this.no_reimbursement = false
				this.has_been_payment = true
				this.inviteRewardDetail2()
			},
			inviteRewardDetail() {
				var _self = this;
				var tokendata={
					'token':sessionStorage.getItem('name'),
					'status':2
				}
				$.ajax({
					type: 'post',
					data: tokendata,
					url: 'https://develop.jinlingdai.cn/mobile/user/investlist',
					success: function(data) {
						var terminal1 = eval('(' + data + ')');
						_self.terminal1show=terminal1.data.list
						 
                         console.log(_self._self.terminal1show)
                        

					}
				});
			},
			inviteRewardDetail1() {
				var _self = this;
				var tokendata={
					'token':sessionStorage.getItem('name'),
					'status':6
				}
				console.log(tokendata)
				$.ajax({
					type: 'post',
					data: tokendata,
					url: 'https://develop.jinlingdai.cn/mobile/user/investlist',
					success: function(data) {
						var terminal2 = eval('(' + data + ')');
						_self.terminal1show1=terminal2.data.list 
                         console.log(terminal2)
					}
				});
			},
			inviteRewardDetail2() {
				var _self = this;
				var tokendata={
					'token':sessionStorage.getItem('name'),
					'status':7
				}
				$.ajax({
					type: 'post',
					data: tokendata,
					url: 'https://develop.jinlingdai.cn/mobile/user/investlist',
					success: function(data) {
						var terminal3 = eval('(' + data + ')');
						_self.terminal1show2=terminal3.data.list						 
                         console.log(terminal3)
					}
				});
			}

		},
		filters: {
        formatDate(time) {
            return formatDate(new Date(time * 1000),'yyyy-MM-dd');
        }
    }
	}
</script>

<style>
	.terminal1_con a{
		color: #333;
	}
	.terminal1_con_tabcon1_con a{
		text-decoration: none;
		color: #333;
	}
	.terminal1_d_tab{
		background: white;
		height: 43px;
	}
	.terminal1_con_tabcon1_con_li_b{
		padding-left: 23px;
		position: relative;
		height: 40px;
		line-height: 40px;
		border-top: 1px solid #F7F7F7;
	}
	.terminal1_con_tabcon1_con_li_b span:nth-child(2){
		position: absolute;
		right: 60px;
	}
	.terminal1_con_tabcon1_con_li ul{
		height: 67px;
	}
	.terminal1_con_tabcon1_con_li ul li{
		width: 33.3%;
		float: left;
		margin-top: 6px;
	}
	.terminal1_con_tabcon1_con_li ul li p{
		height: 30px;
		line-height: 27px;
		text-align: center;
	}
	.terminal1_con_tabcon1_con_li ul li p span{
		font-size: 16px;
	}
	/*.terminal1_con_tabcon1_con{
		padding-top:50px ;
	}*/
	.terminal1_con_tabcon1_con li{
		list-style: none;
		margin-top: 10px;
		background: white;
	}
.terminal1_con_tabcon1_con .terminal1_con_tabcon1_con_t{
	height: 40px;
	line-height: 40px;
	position: relative;
	border-bottom:1px solid #F7F7F7;
	color: #333 !important;
} 
.terminal1_con_tabcon1_con .biao_num{
	margin-left: 20px;
	margin-right: 0px;
}
.terminal1_con_tabcon1_con .rong_type{
	position: absolute;
	right: 23px;
	color: #f35e3e;
}
.terminal1_con {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: white;
	}
	
	.terminal1_con .terminal1_d_tab p {
		float: left;
		width: 33.3%;
		text-align: center;
		height: 40px;
		line-height: 40px;
	}
	
	.terminal1_d_tab p.active {
		border-bottom: 2px solid #2196f3;
		color: #2196f3;
	}
	
	.terminal1_con_tabcon div {
		width: 100%;
		color: #333 !important;
	}
	
	.no_reimbursement_toptitle {
		position: absolute;
		top: 60px;
	}
	
	.no_reimbursement_toptitlecon p {
		line-height: 23px;
		padding-left: 20px;
	}
	
	.no_reimbursement_toptitle p:nth-child(1) {
		width: 3px;
		height: 16px;
		background: #f84d4d;
		float: left;
		margin-left: 20px;
	}
	
	.no_reimbursement_toptitle p:nth-child(2) {
		width: 100%;
		line-height: 18px;
		margin-left: 30px;
	}
</style>