<template>
	<div class="hello" style="height: 100%;background: #efeff5;padding-top: 50px;">
		<div class="deal_password_box" v-show="deal_password">
			<div style="position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;">
				<van-password-input
			  :value="value"
			  info=""
			  @focus="showKeyboard = true"/>
	          <p class="showkey_num_ti">支付密码为六位数字</p>
	          <button class="put_recharge_money" v-on:click="put_money_sure">确认充值</button>
			<!-- 数字键盘 -->
			<van-number-keyboard
			  :show="showKeyboard"
			  @input="onInput"
			  @delete="onDelete"
			  @blur="showKeyboard = false"/>
			</div>
			
	    </div>
		<ul class="recharge_box">
			<li class="recharge_top"><i><img src="https://www.jinlingdai.cn/Style/new/images/web/money.png"/></i>账户余额<span>{{personalfunshow.total_balance}}</span>元</li>
			<li class="recharge_card">
				<p class="recharge_card_img"><img v-bind:src="personaldetalshow.bank_img"/></p>
				<div>
					<p>{{personaldetalshow.bank_name}}</p>
					<p>*************{{personaldetalshow.bank_num.substr(-4)}}</p>
				</div>
			</li>
			<li class="recharge_money"><span>充值金额：</span><input type="text" placeholder="输入充值金额" v-model="recharge_money"/></li>
			<li class="login_con_password2">
				<span>短信验证码：</span><input type="text" placeholder="请输入短信验证码" v-model="phonemessege" />
				<message :start='start' @countDown='start=false' @click.native='sendCode'></message>
			</li>
		</ul>
		<p class="recharge_money_ti">温馨提示：{{limit.str_limit}}充值前清闲阅读<a>《充值说明》</a></p>
		<div class="recharge_money_btn" style="text-align: center;"><button v-on:click="recharge_money_btn">充值</button></div>
		<div :class="loading"><div class="loading_show_con"><img style="display: block;" src="../common/5-121204194032.gif" /><p>正在努力为您充值.....</p></div></div>
		</div>
		
</template>

<script>
	import {Toast} from 'vant'
	import message from './login/message.vue'
	import commonsum from '../vuex/common.vue'
	import { getHeader } from '../vuex/header'
	export default {
		data() {
			return {
				deal_password:false,
				start : false,
				recharge_money:'',
				personaldetalshow:'',
				personalfunshow:'',
				limit:'',
				phonemessege:'',
				value: '',
                showKeyboard: true,
                loading:'loading_no'
			}
		},
		created() {
			this.personaldetail(),
			this.personalfundinfo(),
			this.personallimit()
		},
		methods: {
			onInput(key) {
		      this.value = (this.value + key).slice(0, 6);
		    },
		    onDelete() {
		      this.value = this.value.slice(0, this.value.length - 1);
		    },
			toRegister() {
				// TODO: add it
			},
			//注册发送短信验证码
			sendCode (value) {
				var username=sessionStorage.getItem('username')
				var _self = this;
				 if(this.recharge_money == ""){
			        Toast("请输入充值金额")
			    }else{
			    var headers = getHeader();
				let data = {'tel':username}
				$.ajax({
						type: 'post',
						data,
						url:  commonsum.web_url+'/mobile/user/commitphone',
						headers: headers,
						success: (data) => {
							console.log(typeof(data), data)
							if(typeof(data) === 'string') data = JSON.parse(data)
							console.log(data)
							if(data.status === 200) {
								Toast("发送成功")
								_self.start = true
								
							} else {
								Toast("发送失败")
							}

						}
					});
			    }
			    
//              //前面发送ajax请求成功之后调用this.start = true开始短信倒计时
//              this.start = true
        },
        personaldetail(){
        	        var headers = getHeader();
					var data1 = {
						'token': sessionStorage.getItem('name')
					}
					var _self = this;
					$.ajax({
						type: 'post',
						data: data1,
						url:  commonsum.web_url+'/mobile/user/userinfo',
						headers: headers,
						success: function(data) {
							var personaldetail = eval('(' + data + ')');
//							console.log(personaldetail.data);
							_self.personaldetalshow=personaldetail.data.bank_data[0]
							//console.log(_self.personaldetalshow)
					}
				});
			},
			 personalfundinfo(){
			 	    var headers = getHeader();
					var data1 = {
						'token': sessionStorage.getItem('name')
					}
					var _self = this;
					$.ajax({
						type: 'post',
						data: data1,
						url:  commonsum.web_url+'/mobile/user/fundinfo',
						headers: headers,
						success: function(data) {
							var personalfun = eval('(' + data + ')');
//							console.log(personaldetail.data);
							_self.personalfunshow=personalfun.data
							//console.log(_self.personalfunshow)
					}
				});
			},
			 personallimit(){
			 	    var headers = getHeader();
					var data1 = {
						'token': sessionStorage.getItem('name')
					}
					var _self = this;
					$.ajax({
						type: 'post',
						data: data1,
						url:  commonsum.web_url+'/mobile/bank/get_limit_money',
						headers: headers,
						success: function(data) {
							var get_limit_money = eval('(' + data + ')');
//							console.log(personaldetail.data);
							_self.limit= get_limit_money.data
							console.log(_self.limit)
					}
				});
			},
			recharge_money_btn(){
				if(this.recharge_money==''){
			        Toast("请输入充值金额")
				}else if(this.phonemessege==''){
					Toast("请输入短信验证码")
				}else{
					this.deal_password=true
					this.showKeyboard=true
//					var data1 = {
//						'token': sessionStorage.getItem('name'),
//						'amount':this.recharge_money,
//						'tel':sessionStorage.getItem('username'),
//						'mcode':this.phonemessege
//					}
//					var _self = this;
//					$.ajax({
//						type: 'post',
//						data: data1,
//						url: 'https://develop.jinlingdai.cn/mobile/bank/get_limit_money',
//						success: function(data) {
//							var get_limit_money = eval('(' + data + ')');
////							console.log(personaldetail.data);
//							_self.limit= get_limit_money.data
//							console.log(_self.limit)
//					}
//				});
				}
					
		},
		put_money_sure(){
			var headers = getHeader();
			var data1 = {
						'token': sessionStorage.getItem('name'),
						'amount':this.recharge_money,
						'tel':sessionStorage.getItem('username'),
						'mcode':this.phonemessege,
						'tradepwd':this.value
					}
			       console.log(data1)
					var _self = this;
					$.ajax({
						type: 'post',
						data: data1,
						url:  commonsum.web_url+'/mobile/bank/actcharge_quick',
						headers: headers,
						beforeSend:(res)=>{
						 	 _self.loading='loading_show'
						},
						success: function(data) {
							 _self.loading='loading_no'
							var get_money_chong_type = eval('(' + data + ')');
							Toast(get_money_chong_type.message)
							console.log(get_money_chong_type)
							if(get_money_chong_type.status==200){
								setTimeout(_self.$router.push('/mine'),2000)
							}
							
//							 _self.$router.push('/mine')
					}
				});
		}
			
	},
	 components: {
          message 
        }
	}
</script>

<style>
	.put_recharge_money{
	    width: 70%;
	    height: 3em;
	    background: #2196F3;
	    border: 0;
	    color: white;
	    display: block;
	    margin: auto;
	    border-radius: 0.4em;
	    margin-top: 8em;
	}
	.showkey_num_ti{
		text-align: center;
	    color: rgb(248, 77, 77);
	    font-size: 14px;
	    margin-top: 30%;
	}
	.van-password-input{
		margin: 0 58px !important;
		border-radius: 0.66em;
	}
	.van-password-input__security{
		height: 40px !important;
	}
	.van-password-input__security li{
		
	}
	.deal_password_box{
		height: 100%;
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 10000000;
		background: rgba(0,0,0,0.5);
	}
	.van-number-keyboard{
		position: fixed;
		z-index: 10000000;
		bottom: 7% !important;
	}
	
	.van-password-input{
		top:30% !important;
		background: white;
	}
	.van-password-input__info{
	    height: 15px;
	    margin-top: 0;	
	}
	.recharge_box{
		background: white;
	}
	.recharge_box li{
		height: 40px;
		line-height: 40px;
		list-style: none;
		position: relative;
		border-bottom: 1px solid #F7F7F7;
	}
	.recharge_box li input{
		border: 0;
	}
	.login_con_password2{
		padding-left: 23px;
	}
	.login_con_password2 input{
		position: absolute;
		left: 100px;
		height: 100%;
	}
	.login_con_password2 div{
		width: 70px;
		text-align: center;
		border-radius: 3px;
		position: absolute;
	    right: 30px;
    	top: 3px;
    	padding: 3px;
    	/*border:1px solid #2196F3;*/
    	height: 60%;
	}
	.login_con_password2 div button{
		border: 0;
	    width: 100%;
	    background: white;
	    color: #2196F3;
	    position: absolute;
	    left: 0;
	    top: -4px;
	    height: 10%;
	    outline: none;
		}
	.recharge_top {
		height: 30px;
		line-height: 30px;
		padding-left: 53px;
		border-bottom: 1px solid #F7F7F7;
	}
	.recharge_top i img{
		width: 20px;
		height: 20px;
		position: absolute;
		left: 20px;
		top: 10px;
	}
	.recharge_top span {
		margin-left: 6px;
		margin-right: 6px;
		color: #f38331;
	}
	
	.recharge_card {
		height: 100px !important;
		line-height: 100px !important;
		border-bottom: 1px solid #F7F7F7;
		position: relative;
	}
	
	.recharge_card_img {
		width: 26%;
		height: 100%;
		float: left;
	}
	
	.recharge_card img {
		width: 50px;
		float: left;
		margin-top: 23px;
		margin-left: 23px;
	}
	
	.recharge_card div {
		width: 70%;
		float: left;
		height: 100%;
		margin-top: 21px;
	}
	.recharge_card div p {
		line-height: 25px;
	}
	.recharge_money span{
		position: absolute;
		left: 23px;
	}
	.recharge_money input{
		position: absolute;
		left: 100px;
		height: 100%;
	}
	.recharge_money_ti{
		color:#868788 ;
		padding-left: 23px;
		padding-right: 23px;
		line-height: 20px;
		margin-top: 10px;
	}
	.recharge_money_ti a{
		color: #259ff6;
	}
	.recharge_money_btn button{
		width: 85%;
		height: 40px;
		border-radius: 5px;
		color: white;
		border: 0;
		background: #ff5449;
		margin-top: 100px;
	}
</style>