<template>
	<div class="hello my_bind_card" style="height: 100%;">
		<ul>
			<li v-for="cards in cardnum_list">
				<div class="my_bind_card_top">
					<p><img v-bind:src="cards.bank_img"></p>
					<p>{{cards&&cards.bank_name}}</p>
				</div>
				<div class="card_num">***************{{cards&&cards.bank_num.substr(-4)}}</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				cardnum_list: ''
			}
		},
		created() {
			this.mycardnum()
		},
		methods: {
			mycardnum() {
					var data1 = {
						'token': sessionStorage.getItem('name')
					}
					var _self = this;
				$.ajax({
					type: 'post',
					data: data1,
					url: 'https://develop.jinlingdai.cn/mobile/user/userinfo',
					success: function(data) {
						var cardnum_list = eval('(' + data + ')') || {};
						if(cardnum_list.data.bind_status==0){
							_self.$router.push('/bindingcard')
						}
                        console.log(cardnum_list.data.bind_status)
						console.log('%c tset', "color: red", cardnum_list)
						_self.cardnum_list = cardnum_list.data && cardnum_list.data.bank_data;
						console.log(_self.cardnum_list)
					}
					
				});
			}
		}
	}

</script>

<style>
	.my_bind_card ul{
		height: 90%;
		overflow: scroll;
	}
	.my_bind_card ul li {
		width: 80%;
		height: 80px;
		border-radius: 10px;
		margin: auto;
		background: blue;
		margin-top: 15px;
		color: white;
		background: url(../../common/card_bg.png) no-repeat;
		background-size: 100% 100%;
		padding: 20px;
	}
	.my_bind_card .card_num {
		text-align: center;
		line-height: 100%;
		line-height: 30px;
		font-size: 15px;
	    letter-spacing:3px;
	}
	
	.my_bind_card_top {
		height: 40px;
	}
	
	.my_bind_card ul li .my_bind_card_top img {
		width: 30px;
		height: 30px;
	}
	
	.my_bind_card ul li .my_bind_card_top p {
		font-size: 14px;
		float: left;
	}
	
	.my_bind_card ul li .my_bind_card_top p:nth-child(2) {
		height: 30px;
		line-height: 30px;
		margin-left: 8px;
	}
</style>
