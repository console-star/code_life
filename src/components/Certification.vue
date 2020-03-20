<template>
	<div class="hello">
		<p class="Certification_ti">认证实名身份信息是您投资的必要条件，为保障您的资金安全，请务必保证信息的正确有效</p>
		<ul class="Certification">
			<li>真实姓名：<input type="text" placeholder="请输入姓名"/></li>
			<li>身份证号：<input type="text" placeholder="请输入身份证号码"/></li>
		</ul>
		<div style="text-align: center;"><button class="Certification_btn">认证</button></div>
	</div>
</template>

<script>
</script>

<style>
	.Certification {
				background: white;
			}
			.Certification li{
				height: 40px;
				line-height: 40px;
				list-style: none;
				font-size: 12px;
				background: white;
				padding-left: 13px;
			}
			.Certification li:nth-child(1){
				border-bottom: 1px solid #F7F7F7;
			}
			.Certification_ti{
				color: #ccc;
				font-size: 12px;
				padding: 13px;
			}
			.Certification li input{
				width: 60%;
				font-size: 12px;
				border:0;
				padding-left: 13px;
			}
			.Certification_btn{
				width: 80%;
				height: 40px;
				margin-top: 100px;
				border: 0;
				color: white;
				background: #f84d4d;
				border-radius: 5px;
			}
</style>