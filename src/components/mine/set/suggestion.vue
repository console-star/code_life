<template>
	<div class="suggestion_con">
		<textarea v-model="suggestion_con" placeholder="您的反馈将是我们前进的最大动力">
			
		</textarea>
		<button v-on:click="suggestion_cons">提交</button>
	</div>
</template>

<script>
	import {Toast} from 'vant';
	export default {
		name: 'pasword',
		data() {

			return {
				suggestion_con:''
			}
		},
		created() {
		},
		mounted() {
			
		},
		methods: {
			suggestion_cons() {
			     if(this.suggestion_con==''){
					Toast("意见不能为空")
				}else{
					var data1 = {
						'token': sessionStorage.getItem('name'),
						'system':'wap',
						'new_trade_pwd':this.set_new_password,
						'message':this.suggestion_con
					}
					console.log(data1)
					var _self = this;
					$.ajax({
						type: 'post',
						data: data1,
						url: 'https://develop.jinlingdai.cn/mobile/app/feedback',
						success: function(data) {
							var suggestion_cons = eval('(' + data + ')');
							console.log(suggestion_cons.data)
							Toast(suggestion_cons.message)
							//						var borrow_info = _self.borrowdetail.borrow_info
						}

					});
				}
				
			}
			
		},
		components: {
 
        }
	}
</script>

<style>
	.suggestion_con{
		text-align: center;
	}
	.suggestion_con textarea{
		width: 85%;
		height: 170px;
		resize: none;
		border-radius: 10px;
		margin-top: 20px;
		padding: 10px;
		line-height: 30px;
	}
	.suggestion_con button{
		width: 81%;
		height: 40px;
		color: white;
		border: 0;
		border-radius: 6px;
		margin-top: 30px;
		background: #f35e3d;
	}
</style>