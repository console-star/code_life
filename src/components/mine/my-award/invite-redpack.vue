<template>
	<div class="system-redpack">
		<ul class="my_award_list">
				<li>
					<div class="my_award_list_bg">
						<p style="text-align: right;padding-right: 20px;color: #f35e3e;height: 30px;line-height: 30px;font-size: 13px;">未使用</p>
						<div class="my_award_list_num" style="display: inline-block;">
							<p class="myaward_list_icon"></p>
							<p>18元</p>
						</div>	
						<div class="myaward_list_icon_xian"><p>单笔投资≥1000元</p><p>无标期限制</p></div>
						<div class="my_award_list_bg_bott">期限：<span>15</span>天<span>邀请红包</span></div>
					</div>
				</li>
	    </ul>
	</div>
</template>

<script>
	export default {
		name: 'redpack',
		data() {
			return {
				inviteRewardDetailshow: ''

			}
		},
		created() {
			this.inviteRewardDetail()
		},
		methods: {
			inviteRewardDetail() {
				var _self = this;
				var tokendata={
					'token':sessionStorage.getItem('name')
				}
				$.ajax({
					type: 'post',
					data: tokendata,
					url: 'https://develop.jinlingdai.cn/mobile/reward/inviteRewardDetail',
					success: function(data) {
						var reward_invit = eval('(' + data + ')');
                         console.log(reward_invit)

					}
//					eerror:function(){
//						console.log('请求失败')
//					}
					
				});
			}
		},
		computed: {

		},
		components: {
		
		}
	}
</script>

<style>
		.my_award_list li{
		width: 100%;
		height: 116px;
		background: white;
		margin-top:30px;
		position: relative;
	}
	.my_award_list_bg{
		width: 90%;
		height: 116px;
		margin: auto;
		border-radius: 6px;
		background: url(../../../common/red_pack_listbg.png) no-repeat;
		background-size: 100% 100%;
		padding-top: 13px;
	}
	.myaward_list_icon{
		width: 38px;
		height: 38px;
		background: url(../../../common/myaward_list_icon.png) no-repeat;
		background-size:100% 100%;
		margin-left: 20px;
	}
	.my_award_list_bg p:nth-child(3){
		position: absolute;
		left: 80px;
		top: 48px;
		font-weight: 600;
		color: #f35e3e;
	}
	.my_award_list_num p{
		float: left;
	}
	.my_award_list_num p:nth-child(2){
		margin-top: -10px;
		display: inline-block;
		font-size: 21px;
		line-height: 60px;
		color: #f35e3e;
	}
	.myaward_list_icon_xian{
		display: inline-block;
		position: absolute;
		margin-left: 10px;
		margin-top: 3px;
	}
	.myaward_list_icon_xian p{
		font-size: 13px;
	}
	.my_award_list_bg_bott{
		padding-left: 23px;
		height: 30px;
		line-height: 30px;
		font-size: 13px;
		border-top:1px dashed #aaa;
		width: 90%;
		margin: auto;
		position: relative;
	}
	.my_award_list_bg_bott span{
		font-size: 13px;
	}
	.my_award_list_bg_bott span:nth-child(2){
		position: absolute;
		right: 20px;
	}
	.my_award_list li{
		background: white;
	}
	.my_award_list li .describe{
		float: left;
	}
	.my_award_list li .describe p{
		height: 30px;
		line-height: 30px;
	}
	.my_award_list li .red_pack{
		width: 60%;
		height: 90px;
		line-height: 90px;
		background: url(../../../common/system_red_pack.png) no-repeat;
		background-size: 100% 100%;
		margin-left: 10px;
		float: left;
		position: relative;
	}
	.my_award_list li .red_pack span:nth-child(1){
		margin-left: 20px;
		font-size: 23px;
		color: #ffe241;
	}
	.my_award_list li .red_pack span:nth-child(2){
		color: white;
		position: absolute;
		right: 30px;
		font-size: 16px;
	}
</style>