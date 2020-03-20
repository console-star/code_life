<template>
	<div class="hello" style="height: 100%;">
		<div class="my_award" style="height: 100%;">
			<div class="my_award_title"><p class="my_award_title_left" v-on:click="$router.back(-1)"></p>我的奖励<span>兑换码</span></div>
			<div class="radio-wrap" style="height: 100%;">
				<div class="radio-group" v-model="tabView">
					<span v-for="(tab ,index) in tabs" :class="{cur:iscur==index}" @click="iscur=index,tabChange('select' + (index + 1))">{{tab.name}}</span>
				</div>
				<div style="margin:10px 0;"></div>
				<keep-alive>
					<component v-bind:is="tabView"></component>
				</keep-alive>
			</div>

		</div>
	</div>
</template>

<style>
	.radio-group {
		font-size: 1;
		height: 3rem;
		line-height: 3rem;
	}
	
	.radio-group>span {
		cursor: pointer;
		display: inline-block;
		font-size: 14px;
		text-align: center;
		width: 100px;
	}
	
	.cur {
		color: #ff5c4b;
		border-bottom: 2px solid #ff5c4b;
	}
	
	.radio-group span {
		width: 50%;
		text-align: center;
	}
	
	.my_award_title {
		position: relative;
		height: 40px;
		line-height: 40px;
		font-size: 15px;
		text-align: center;
		border-bottom: 1px solid #ccc;
	}
	
	.my_award_title_left {
		width: 12px;
		height: 20px;
		background: url(../../common/jian_left.png) no-repeat;
		background-size: 100% 100%;
		position: absolute;
		left: 20px;
		top: 10px;
	}
	
	.my_award_title span {
		position: absolute;
		right: 20px;
		color: #aaa;
		top: 5px;
	}
	
	.my_award_tab {
		height: 30px;
		border-bottom: 1px solid #F7F7F7;
	}
	
	.my_award_tab p {
		width: 33.3%;
		height: 30px;
		line-height: 30px;
		float: left;
		text-align: center;
	}
	
	.my_award_list li {
		width: 100%;
		height: 116px;
		background: white;
		margin-top: 30px;
		position: relative;
	}
	
	.my_award_list_bg {
		width: 90%;
		height: 116px;
		margin: auto;
		border-radius: 6px;
		background: url(../../common/red_pack_listbg.png) no-repeat;
		background-size: 100% 100%;
		padding-top: 13px;
	}
	
	.myaward_list_icon {
		width: 38px;
		height: 38px;
		background: url(../../common/myaward_list_icon.png) no-repeat;
		background-size: 100% 100%;
		margin-left: 20px;
	}
	
	.my_award_list_bg p:nth-child(3) {
		position: absolute;
		left: 80px;
		top: 48px;
		font-weight: 600;
		color: #f35e3e;
	}
	
	.my_award_list_num p {
		float: left;
	}
	
	.my_award_list_num p:nth-child(2) {
		margin-top: -10px;
		display: inline-block;
		font-size: 21px;
		line-height: 60px;
		color: #f35e3e;
	}
	
	.myaward_list_icon_xian {
		display: inline-block;
		position: absolute;
		margin-left: 10px;
		margin-top: 3px;
	}
	
	.myaward_list_icon_xian p {
		font-size: 13px;
	}
	
	.my_award_list_bg_bott {
		padding-left: 23px;
		height: 30px;
		line-height: 30px;
		font-size: 13px;
		border-top: 1px dashed #aaa;
		width: 90%;
		margin: auto;
		position: relative;
	}
	
	.my_award_list_bg_bott span {
		font-size: 13px;
	}
	
	.my_award_list_bg_bott span:nth-child(2) {
		position: absolute;
		right: 20px;
	}
	
	.my_award_list li {
		background: white;
	}
	
	.my_award_list li .describe {
		float: left;
	}
	
	.my_award_list li .describe p {
		height: 30px;
		line-height: 30px;
	}
	
	.my_award_list li .red_pack {
		width: 60%;
		height: 90px;
		line-height: 90px;
		background: url(../../common/system_red_pack.png) no-repeat;
		background-size: 100% 100%;
		margin-left: 10px;
		float: left;
		position: relative;
	}
	
	.my_award_list li .red_pack span:nth-child(1) {
		margin-left: 20px;
		font-size: 23px;
		color: #ffe241;
	}
	
	.my_award_list li .red_pack span:nth-child(2) {
		color: white;
		position: absolute;
		right: 30px;
		font-size: 16px;
	}
	.my_award .radio-group {
		width: 70%;
		margin: auto;
		font-size: 0;
		height: 26px;
		line-height: 26px;
	}
	
	.my_award .radio-group>span {
		width: 25%;
		cursor: pointer;
		display: inline-block;
		font-size: 14px;
		text-align: center;
		line-height: 40px;
		margin-left: 3.8rem;
	}
	
	.my_award .cur {
		border-bottom: 1px solid #ff5c4b;
	}
</style>
<script>
//	import select1 from '../mine/my-award/invite-redpack.vue'
	import select1 from '../mine/my-award/system-redpack.vue'
	import select2 from '../mine/my-award/add-interest.vue';
	export default {
		name: 'app',
		data() {
			return {
				tabView: 'select1',
				tabs: [ {
					name: "系统红包"
				}, {
					name: "加息券"
				}],
				iscur: 0
			}
		},
		components: {
//			select1,
			select1,
			select2
		},
		methods: {
			tabChange: function(tab) {
				this.tabView = tab;
			}
		}
	}
</script>
