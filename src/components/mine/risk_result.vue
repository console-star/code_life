<template>
	<div class="risk_result" style="height: 90%;overflow: scroll;">
		<div class="top_type" style="position: relative;">
			<div class="top_type_wai"><img src="__ROOT__/Style/Mobile/images/icon_back.png" />风险等级评测
				<a v-on:click="dangerExplain_box_show">评测说明</a>
			</div>
			<!--积极-->
			<!--<p><img src="../../common/jiji.png"/></p>-->

			<!--稳健-->
			<!--<p><img src="../../common/wenjian.png"/></p>-->
			<!--保守-->
			<p><img src='../../common/baoshou.png' /></p>
			<p>{{result.risk_level}}</p>
			<p>评测时间：<span>{{result.risk_time | formatDate}}</span></p>
		</div>
		<div class="top_type_content">
			{{result.risk_info}}
		</div>
		<div class="dangerExplain_box" v-show="dangerExplain_box" v-on:click="dangerExplain_box_fide">
			<div class="dangerExplain">
				<h2>评测说明</h2>
				<p>1、问卷调查表旨在协助投资人了解自身的投资状况      主要包括投资偏好、风险承受能力及风险认知能力等方面，问卷结果不能完全呈现投资人自身投资状况及在面对投资风险时的真正态度，但是可以向投资人提供一些衡量自身风险属性的指标。</p>
				<p>2、本问卷包括10个问题，每个问题可根据具体情况只能选择一个选项。</p>
				<p>3、本问卷的最终解释权归金陵贷所有，您若对本问卷内容有任何疑问，请向金陵贷客服咨询。</p>
		    </div>
		</div>
		
		<div class="red_pack" v-show="red_pack">
			<a ><img src="../../common/red_pack.png" /></a>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'vant'
	import { formatDate } from '../../lib/time1'
	export default {
		components: {
   
		},
		data() {
			return {
				result:'',
				red_pack:false,
				dangerExplain_box:false
			}
		},
		created() {
			var self=this
			this.get_result();
			setTimeout(function (){
			    self.red_pack=true
			}, 3000);
		},
		methods: {
			get_result(){
				var data1 = {
					'token': sessionStorage.getItem('name')
				}
				var _self = this;
				console.log(data1)
				$.ajax({
					type: 'post',
					data: data1,
					url: 'https://develop.jinlingdai.cn/mobile/user/userinfo',
					success: function(data) {
						var getresult = eval('(' + data + ')');
						_self.result = getresult.data;
						
						console.log(_self.result)
					}

				});
			},
			dangerExplain_box_fide(){
				this.dangerExplain_box=false
			},
			dangerExplain_box_show(){
				this.dangerExplain_box=true
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
	.dangerExplain_box{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
		position: fixed;
		top: 0;
		z-index: 1000000000;
	}
	.dangerExplain{
		width: 83%;
		height: 60%;
		margin: auto;
		background: white;
		margin-top: 5em;
		padding: 0.8em;
		border-radius: 0.5em;
		border: 1px solid #ff5348;
	}
	.dangerExplain h2{
		text-align: center;
		line-height: 3em;
	}
    .dangerExplain p{
    	line-height: 2.5em;
    	
    }
	.top_type p {
		text-align: center;
		font-size: 13px;
		line-height: 20px;
	}
	
	.top_type p:nth-child(3) {
		color: #f35e3e;
		font-size: 15px;
	}
	
	.top_type p:nth-child(4) {
		line-height: 40px;
		border-bottom: 1px dashed #ccc;
		width: 88%;
		margin: auto;
	}
	
	.top_type p:nth-child(2) {
		text-align: center;
		margin-top: 0.8rem;
	}
	
	.top_type p img {
		width: 9rem;
		height: 9rem;
	}
	
	.top_type_content {
		line-height: 30px;
		padding: 20px;
		font-size: 14px;
	}
	
	.top_type_wai {
		background: white;
		height: 50px;
		line-height: 50px;
		text-align: center;
		position: relative;
		font-weight: 600;
		font-size: 16px;
	}
	
	.top_type_wai img {
		position: absolute;
		left: 20px;
		width: 0.5rem;
		height: 0.5rem;
		top: 0.13rem;
	}
	
	
	.top_type_wai a {
		position: absolute;
		right: 20px;
		font-size: 12px;
		color: #aaa;
	}
	
	.red_pack {
		text-align: center;
		/*display: none;*/
	}
	
	.red_pack img {
		width: 70%;
	}
</style>