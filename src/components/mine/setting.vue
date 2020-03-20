<template>
	<div class="setting" style="height: 100%;background: white;">
		 <ul class="setting_list">
		 	<li v-on:click="modification">修改登录密码<img src="../../common/right_jian.png"/></li>
		 	<li v-on:click="Modification_deal">修改交易密码<img src="../../common/right_jian.png"/></li>
		 	<li>关于我们<img src="../../common/right_jian.png"/></li>
		 	<li v-on:click="Suggestion">意见反馈<img src="../../common/right_jian.png"/></li>
		 </ul>
	</div>
</template>

<script>
	export default {
		name: 'mine',
		data() {

			return {
				
			}

		},
		mounted() {
			
		},
		methods: {
			modification(){			
					this.$router.push('/modification')
			},
			Modification_deal(){
				this.$router.push('/modification_deal')
			},
			Suggestion(){
				this.$router.push('/suggestion')
			}
		
		
		}

	}
</script>

<style>
	.setting_list li{
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #F7F7F7;
		background: white;
		position: relative;
		padding-left: 20px;
	}
	.setting_list li img{
	    position: absolute;
	    right: 20px;
	    height: 20px;
	    width: 13px;
	    top: 10px;
	}
</style>