<template>
	<div class="system-redpack">
		<ul class="add_interest">
				<li v-for="add in add_interest_list">
					<!--<p class="type">未使用</p>-->
					<div class="add_interest_bg" v-if="add.status==1">
						<p class="add_interest_baifen"><span>{{Math.round(add.money)}}</span>%</p>
						<p class="add_interest_tianshu">加息天数<span>{{add.add_rate_day}}</span>天</p>
					</div>
					<div class="add_interest_bg add_interest_bg_hui" v-if="add.status==4">
						<p class="add_interest_baifen"><span>{{Math.round(add.money)}}</span>%</p>
						<p class="add_interest_tianshu">加息天数<span>{{add.add_rate_day}}</span>天</p>
					</div>
					<div class="add_interest_bg add_interest_bg_hui" v-if="add.status==2">
						<p class="add_interest_baifen"><span>{{Math.round(add.money)}}</span>%</p>
						<p class="add_interest_tianshu">加息天数<span>{{add.add_rate_day}}</span>天</p>
					</div>
					<div class="add_interest_bg_right">
						<p><span>{{add.add_rate_day}}</span>天加息</p>
						<p><span>{{add.invest_money}}</span>元起投</p>
						<p><span>{{add.min_borrow_duration}}</span>月标及以上可用</p>
						<p>有效期至：<span>{{add.end_date | formatDate}}</span></p>
					</div>
				</li>
				
			</ul>
	</div>
</template>

<script>
	import { formatDate } from '../../../lib/time1'
	export default {
		name: 'my_ward',
		data() {
			return {
				add_interest:'add_interest_bg',
				add_interest_list:''
			}
		},
		created() {
			this.inviteRewardDetail()
		},
		methods: {
			inviteRewardDetail() {
				var _self = this;
				var tokendata={
					'token':sessionStorage.getItem('name'),
					'type':2
				}
				$.ajax({
					type: 'post',
					data: tokendata,
					url: 'https://develop.jinlingdai.cn/mobile/user/reward',
					success: function(data) {
						var reward_add = eval('(' + data + ')');
//						if(reward_add.data.list.status==1){
                       	console.log(reward_add.data.list)
//                       }
                         
						_self.add_interest_list=reward_add.data.list
						 
                         console.log(_self.add_interest_list)
                        

					}
//					eerror:function(){
//						console.log('请求失败')
//					}
					
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
	.add_interest_baifen{
		width: 30% !important;
		position: absolute;
		left: 0;
		opacity: 1;
	}
	.add_interest_bg_right{
		position: absolute;
		left: 31%;
		top: 26%;
	}
	.add_interest_bg_right p{
		line-height: 20px;
		margin-left: 10px;
	}
	.add_interest li{
		height: 100px;
		width: 100%;
		padding-left: 20px;
		padding-top: 20px;
		position: relative;
	}
	.add_interest li .type{
		line-height: 40px;
	}
	.add_interest_bg{
		width: 55%;
		height: 80%;
		background: url(../../../common/system_red_pack.png) no-repeat;
		background-size:100% 100%;
		position: relative;
		float: left;
	}
	.add_interest_bg_hui{
		width: 90%;
		height: 100%;
		background: url(../../../common/system_red_pack_guo.png) no-repeat;
		background-size:100% 100%;
		position: relative;
		float: left;
	}
    .add_interest_bg p{
    	width: 80%;
    	text-align: center;
    	color: white;
    	line-height: 20px;
    }
   .add_interest_bg p:nth-child(1){
    	padding-top: 20px;
    	font-size: 17px;
    }
    .add_interest_bg p:nth-child(1) span{
    	font-size: 17px;
    }
    .add_interest_bg p:nth-child(3){
    	position: absolute;
        left: 0px;
        width: 30%;
    	word-wrap: break-word;
    	top: 10px;
    }
</style>