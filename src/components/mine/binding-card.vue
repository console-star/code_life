<template>
	<div class="hello" style="height: 100%;background: #F7F7F7;">
		<div class="bind_card">
			<p class="bind_card_top">资金存管到厦门国际银行</p>
			<ul>
				<li>
					<p>真实姓名:</p><input type="text" placeholder="请输入姓名" v-model="truename"/>
				</li>
				<li>
					<p>身份证号:</p><input type="text" placeholder="请输入您的证件号" v-model="truenum"/>
				</li>
				<li>
					<p>银行卡号:</p><input type="text" placeholder="请输入银行卡号" v-model="truecard"/>
				</li>
				<li v-on:click="openPicker">
					<p>开户银行:<p style="padding-left: 0;">{{value1}}</p><p class="xialajiao"></p></p>
				</li>
				<li>
					<p>预留手机号:</p><input type="text" placeholder="请输入手机号" v-model="truephoneyou"/>
				</li>
				<li class="login_con_password" style="padding-left: 20px;">
					短信验证码：
						<i></i><input style="position: absolute;left: 115px;" type="text" placeholder="请输入短信验证码" v-model="phonemessege" />
						<message :start='start' @countDown ='start=false' @click.native='sendCode'></message>
			    </li>
			</ul>
		</div>
		<p>{{bank_store}}</p>
		<van-popup v-model="show" position="bottom" :overlay="false">
		<button class="bindcardbtn" v-on:click="flowselet">确定</button>
		<van-picker :columns="columns" v-on:change="onChange" />
		</van-popup>
		<div class="wenti">温馨提示：如果银行卡是二类账户，将会影响您的提现，具体账户类型可咨询发卡银行。老用户数据会自动获取，但不可变更信息，否则会影响您的提现和充值。</div>
		<div style="text-align: center;"><button class="bind_card_btn" v-on:click="bind_card_btn">确认绑卡</button></div>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	import message from '../login/message.vue'
	export default {
		data() {
			return {
				truename:'',
				truenum:'',
				truecard:'',
				start : false,
				show: false,
				columns: '',
				value1:'中国工商银行',
				bank_code:'100002',
				bank_store:'',
				phonemessege:'',
				truephoneyou:''
			};
		},
		mounted(){
			this.bank_list()
		},
		methods: {
			onChange(picker, value, index) {
//				console.log(value)
                this.value1=value.bank_name
                this.bank_code=value.bank_code
                console.log(value.bank_code)
                console.log(value.bank_name)
			},
			openPicker(){
				this.show=true
			},
			flowselet(){
				this.show=false
			},
			bank_list() {
				var _self = this;
				$.ajax({
					type: 'post',
					data: '',
					url: 'https://develop.jinlingdai.cn/mobile/bank/getbanks',
					success: function(data) {
						var columns = eval('(' + data + ')');
						console.log(columns.data);
						_self.columns = columns.data.map(item => {
							item.text = item.bank_name
							item.key = item.bank_code
							return item
						})
//						console.log(item)
					}
					
				});
			},
			//绑卡发送短信验证码
			sendCode (value) {
				var _self = this;
				 if(this.truename == ""||this.truenum == ""||this.truecard==''||this.truephoneyou==''){
			        Toast("信息不能为空!");
			    }else{
				let data = {'token':sessionStorage.getItem('name'),
							'idcard':this.truenum,
							'name':this.truename,
							'bankname':this.bank_code,
							'banknum':this.truecard,
							'tel':this.truephoneyou,

				            }
				console.log(data)
				$.ajax({
						type: 'post',
						data:data,
						url: 'https://develop.jinlingdai.cn/mobile/bank/apply_openaccount',
						success: (data) => {
							if(typeof(data) === 'string') data = JSON.parse(data)
							Toast(data.message);
							this.bank_store=data.data.bank_store_order_no
//							 console.log(this.bank_store)
							if(data.status === 200) {
								_self.start = true
								
							} else {
								Toast(data.message);
							}

						}
					});
			    }
			    
//              //前面发送ajax请求成功之后调用this.start = true开始短信倒计时
//              this.start = true
          },
          bind_card_btn(){
          	var _self = this;
				 if(this.truename == ""||this.truenum == ""||this.truecard==''||this.truephoneyou==''){
			        alert("请输入用户名")
			    }else{
				let data = {'token':sessionStorage.getItem('name'),
				'idcard':this.truenum,
				'name':this.truename,
				'banknum':this.truecard,
				'bankname':this.bank_code,
				'tel':this.truephoneyou,
				'mcode':this.phonemessege,
				'bank_store_order_no':this.bank_store
				}
				$.ajax({
						type: 'post',
						data,
						url: 'https://develop.jinlingdai.cn/mobile/bank/confirm_openaccount',
						success: (data) => {
							console.log(typeof(data), data)
							if(typeof(data) === 'string') data = JSON.parse(data)
							console.log(data)
							if(data.status === 200) {
								Toast(data.message);
								this.$router.push('/mine')
							} else {
								Toast(data.message);
							}

						}
					});
			    }
          }
          
		},
		components: {
		          message 
		        }		
		}
</script>

<style>
	.bind_card_btn{
		width: 80%;
		height: 40px;
		border: 0;
		border-radius: 6px;
		color: white;
		background: #f35e3d;
		margin-top: 30px;
	}
	.wenti{
		padding: 20px;
		line-height: 20px;
		color:#358acd ;
	}
	.xialajiao{
		width: 30px;
		height: 30px;
		background: url(../../common/downjian.png) no-repeat;
		position: absolute;
		right: -30px;
		top: 15px;
	}
	.van-picker__columns{
		background: white;
		position: relative;
	}
	.van-popup--bottom .bindcardbtn{
		position: absolute;
		right: 30px;
		z-index: 100;
		background: white;
		color: #358acd;
		border:0;
		width: 60px;
		height: 50px;
	}
	.bind_card .bind_card_top {
		height: 30px;
		line-height: 30px;
		background: #f5e1da;
		color: #ff5d4f;
		text-align: center;
	}
	
	.bind_card ul {
		background: white;
	}
	
	.bind_card ul li {
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #F7F7F7;
		position: relative;
	}
	
	.bind_card ul li p {
		float: left;
		width: 26%;
		padding-left: 18px;
	}
	
	.bind_card ul li input {
		border: 0;
	}
</style>