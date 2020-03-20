<template>
	<div class="system-redpack" style="height: 100%;">
		<ul class="system_redpack_list" style="height: 80%;overflow:scroll;">
			<li v-for="redpack in system_redpack_list">
				<div :class="system_redpack">
					<p class="system_redpack_money">¥<span>{{Math.round(redpack.money)}}</span></p>
					<!--<p>红包</p>-->
					<div class="system_redpack_bg_right">
						<div class="top"><span>{{Math.round(redpack.money)}}</span>元新手红包</div>
						<div><span>{{redpack.invest_money}}</span>元起投</div>
						<div><span>{{redpack.min_borrow_duration}}</span>月标及以上可用</div>
						<div>有效期至：<span>{{redpack.end_date | formatDate}}</span></div>
				    </div>
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
				system_redpack:'system_redpack_bg',
				system_redpack_list:''
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
					'type':1
				}
				$.ajax({
					type: 'post',
					data: tokendata,
					url: 'https://develop.jinlingdai.cn/mobile/user/reward',
					success: function(data) {
						var reward_system = eval('(' + data + ')');
						_self.system_redpack_list=reward_system.data.list
                         console.log(_self.system_redpack_list)

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
	.system_redpack_list li{
		height: 110px;
		padding-left: 10px;
		position: relative;
	}
	.system_redpack_list li .system_redpack_bg{
		height: 100%;
		width: 98%;
		background: url(../../../common/system_red_pack.png) no-repeat;
		background-size: 100% 100%;
		float: left;
		margin-top: 10px;
		position: relative;
	}
	.system_redpack_list li .system_redpack_bg .system_redpack_money{
		float: left;
		line-height: 96px;
	}
	.system_redpack_list li .system_redpack_bg p:nth-child(1){
		color: white;
		font-size:18px;
		width: 30%;	
	    text-align: center;
			}
	.system_redpack_list li .system_redpack_bg p:nth-child(1) span{
		color: white;
		font-size:33px;
	}
	.system_redpack_list li .system_redpack_bg p:nth-child(2){
		position: absolute;
		right: 30px;
	}
	.system_redpack_bg_right{
		float: left;
		margin-left: 19px;
		margin-top: 10px;
	}
	.system_redpack_bg_right div{
		height: 22px;
		line-height: 22px;
		color: #aaa;
	}
	.system_redpack_bg_right .top{
		font-size: 15px;
		font-weight: 600;
		color: #333;
	}
</style>