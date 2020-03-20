<template>
	<div class="hello" style="height: 90%;overflow: scroll;">
		<div class="system-redpack" style="height: 100%;">
			<ul class="system_redpack_list" style="height: 100%;">
				<li v-for="redpack in system_redpack_list" @click="getDescribe(redpack.name,redpack.id)">
					<div :class="system_redpack">
						<p class="system_redpack_money">¥<span>{{Math.round(redpack.money)}}</span></p>
						<!--<p>红包</p>-->
						<div class="system_redpack_bg_right">
							<div class="top"><span>{{Math.round(redpack.money)}}</span>元新手红包</div>
							<div><span>{{redpack.invest_money}}</span>元起投</div>
							<div><span>{{redpack.min_borrow_duration}}</span>月标及以上可用</div>
							<div>有效期至：<span>{{redpack.expired_time | formatDate}}</span></div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>

</template>

<script>
	import eventbus from '../eventBus'
	import { formatDate } from '../../lib/time1'
	export default {
		name: 'my_ward',
		data() {
			return {
				serverSrc:this.redpack.serverSrc,
				system_redpack: 'system_redpack_bg',
				system_redpack_list: ''
			}
		},
		created() {
			this.inviteRewardDetail()

		},
		mounted() {
			console.log(this.$route.params.invest_id)
			console.log(this.$route.params.expect_earnings_num)
		},
		methods: {
			getDescribe(name,id) {
				this.redpack.serverSrc=2
				this.$router.push({
		          name: 'borrowdetailto',
		          params: {
		            id: this.$route.params.invest_id,
		            name:name,
		            invest_money:this.$route.params.invest_money,
		            expect_earnings_num:this.$route.params.expect_earnings_num,
		            coupon_id:id
		          }
        })
			},
			inviteRewardDetail() {
				var _self = this;
				var tokendata = {
					'token': sessionStorage.getItem('name'),
					'invest_id': this.$route.params.invest_id,
					'invest_money': this.$route.params.invest_money
				}
				$.ajax({
					type: 'post',
					data: tokendata,
					url: 'https://develop.jinlingdai.cn/mobile/reward/activelists',
					success: function(data) {
						var reward_system = eval('(' + data + ')');
						_self.system_redpack_list = reward_system.data
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
				return formatDate(new Date(time * 1000), 'yyyy-MM-dd');
			}
		}
	}
</script>

<style>

</style>