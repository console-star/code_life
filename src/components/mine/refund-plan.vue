<template>
	<div class="hello" style="width: 100%;height:100%;background: #F7F7F7;">
		<div class="refund_plan_title">
			<p>还款日期</p>
			<p>本金(元)</p>
			<p>利息(元)</p>
			<p>状态</p>
		</div>
        <div class="refund_plan_con">
			<p>2017-08-13</p>
			<p>0.00</p>
			<p>0.68</p>
			<p>未还</p>
		</div>
		</div>

</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				chujiedetail: false,
				chujiedetail_two: false,
				img: true,
				img1: false,
				img2: true,
				img3: false
			}
		},
		methods: {

		}
	}
</script>

<style>
.refund_plan_title {
	width: 90%;
	height: 40px;
	line-height: 40px;
	background: white;
	text-align: center;
	margin: auto;
}
.refund_plan_title p{
	float: left;
	width: 25%;
	text-align: center;
}
.refund_plan_con{
	width: 90%;
	height: 40px;
	line-height: 40px;
	text-align: center;
	margin: auto;
	border-bottom:2px solid #ccc;
}
.refund_plan_con p{
	float: left;
	width: 25%;
	text-align: center;
}
</style>