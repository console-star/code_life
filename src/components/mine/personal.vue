<template>
	<div id="demo" style="height: 90%;overflow: scroll;background: #F7F7F7;">
		<!-- 遮罩层 -->
		<div class="personal_con">
			<ul>
				<li>
					头像
					<div style="position: absolute;top: 0;right: 0;">
						<div class="show">
				<div class="picture" :style="'backgroundImage:url('+headerImage+')'">
				
				</div>
			</div>
			<div>
				<input type="file" id="change" accept="image" @change="change">
				<label for="change"></label>
			</div>
					</div>
				<!--<img class="headimanges" v-bind:src="headimages" />-->
				<img class="headimanges" v-bind:src="personaldetalshow_head" />
					<img class="personal_con_jian" src="../../common/right_jian.png" />
				</li>
				<li>用户名
					<div class="personal_con_right">{{personaldetalshow.username}}</div>
					<img class="personal_con_jian" src="../../common/right_jian.png" />
				</li>
				<li>手机号
					<div class="personal_con_right">{{personaldetalshow.tel}}</div>
					<img class="personal_con_jian" src="../../common/right_jian.png" />
				</li>
				<li>
					真实姓名
					<div class="personal_con_right">{{personaldetalshow.real_name}}</div>
					<img class="personal_con_jian" src="../../common/right_jian.png" />
				</li>
				<li>
					身份证号
					<div class="personal_con_right">**************{{personaldetalshow_idcard}}</div>
					<img class="personal_con_jian" src="../../common/right_jian.png" />
				</li>
				<li v-on:click="card">
					银行卡
					<div class="personal_con_right" v-model="bank_num_show">{{bank_num_show}}</div>
					<img class="personal_con_jian" src="../../common/right_jian.png" />
				</li>
				<!--<router-link to="/Riskevaluating">-->
				    <li v-on:click="riskevaluating">
						风险评测
						<div class="personal_con_right">稳健型</div>
						<img class="personal_con_jian" src="../../common/right_jian.png" />
					</li>
				<!--</router-link>-->
					
			</ul>
		</div>

		<div class="container" v-show="panel">
			<div>
				<img id="image" :src="url" alt="Picture">
			</div>

			<button type="button" id="button" @click="crop">确定</button>

		</div>

		
		<div :class="loading"><div class="loading_show_con"><img style="display: block;" src="../../common/5-121204194032.gif" /><p>头像上传中...</p></div></div>
	</div>
</template>

<script>
	import Cropper from 'cropperjs'
	export default {
		components: {

		},
		data() {
			return {
				headerImage: '',
				headimages:'',
				picValue: '',
				cropper: '',
				personaldetalshow:'',
				personaldetalshow_head:'https://develop.jinlingdai.cn/Style/new/images/head_img.png',
				personaldetalshow_idcard:'',
				bank_num_show:'未绑卡',
				croppable: false,
				panel: false,
				url: '',
				loading:'loading_no'
			}
		},
		created() {
			this.personaldetail();
		},
		mounted() {
			//初始化这个裁剪框
			var self = this;
			var image = document.getElementById('image');
			this.cropper = new Cropper(image, {
				aspectRatio: 1,
				viewMode: 1,
				background: false,
				zoomable: false,
				ready: function() {
					self.croppable = true;
				}
			});
		},
		methods: {
			riskevaluating(){
				if(this.personaldetalshow.risk_level=="未测评"){
					this.$router.push('/riskevaluating')
				}else{
				   this.$router.push('/riskresult')	
				}
			},
			getObjectURL(file) {
				var url = null;
				if(window.createObjectURL != undefined) { // basic
					url = window.createObjectURL(file);
				} else if(window.URL != undefined) { // mozilla(firefox)
					url = window.URL.createObjectURL(file);
				} else if(window.webkitURL != undefined) { // webkit or chrome
					url = window.webkitURL.createObjectURL(file);
				}
				return url;
			},
			change(e) {
				let files = e.target.files || e.dataTransfer.files;
				if(!files.length) return;
				this.panel = true;
				this.picValue = files[0];

				this.url = this.getObjectURL(this.picValue);
				console.log(this.url)
				//每次替换图片要重新得到新的url
				if(this.cropper) {
					this.cropper.replace(this.url);
				}
				this.panel = true;

			},
			crop() {
				this.panel = false;
				var croppedCanvas;
				var roundedCanvas;

				if(!this.croppable) {
					return;
				}
				// Crop
				croppedCanvas = this.cropper.getCroppedCanvas();
				// Round
				roundedCanvas = this.getRoundedCanvas(croppedCanvas);

				this.headerImage = roundedCanvas.toDataURL('image/jpeg');
				console.log(this.headerImage)
				var dataurl=this.headerImage
				this.postImg()

			},
			getRoundedCanvas(sourceCanvas) {

				var canvas = document.createElement('canvas');
				var context = canvas.getContext('2d');
				var width = sourceCanvas.width;
				var height = sourceCanvas.height;

				canvas.width = width;
				canvas.height = height;

				context.imageSmoothingEnabled = true;
				context.drawImage(sourceCanvas, 0, 0, width, height);
				context.globalCompositeOperation = 'destination-in';
				context.beginPath();
				context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
				context.fill();

				return canvas;
			},
			 dataURLtoFile(dataurl, filename) {//将base64转换为文件
			    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
			    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
			    while(n--){
			        u8arr[n] = bstr.charCodeAt(n);
			    }
			    return new File([u8arr], filename, {type:mime});
			},
			 personaldetail(){
					var data1 = {
						'token': sessionStorage.getItem('name')
					}
					var _self = this;
					$.ajax({
						type: 'post',
						data: data1,
						url: 'https://develop.jinlingdai.cn/mobile/user/userinfo',
						success: function(data) {
							var personaldetail = eval('(' + data + ')');
//							console.log(personaldetail.data);
							_self.personaldetalshow=personaldetail.data
							_self.personaldetalshow_head=personaldetail.data.head
							_self.personaldetalshow_idcard=personaldetail.data.idcard.substr(-4)
							console.log(_self.bank_num_show)
							if(personaldetail.data.bank_data[0].length == 0){
								_self.bank_num_show='未绑卡'
							}else{
								_self.bank_num_show='**************'+personaldetail.data.bank_data[0].bank_num.substr(-4)
							}
							console.log(personaldetail)
					}
				});
			},
			postImg() {
				var _self = this;
				var imgbase={
					'token': sessionStorage.getItem('name'),
					'image': _self.headerImage
				}
				$.ajax({
						type: 'post',
						data: imgbase,
						dataType : "json",
						url: 'https://develop.jinlingdai.cn/mobile/user/changepic',
						beforeSend:(res)=>{
						 	 _self.loading='loading_show'
						},
						success: (res) => {
							if(typeof(res) === 'string') res = JSON.parse(res)
							if(res.status === 200) {
								 _self.loading='loading_no'
								 _self.personaldetail()
								 _self.headimages=res.data.picurl
								console.log(_self.headimages)
							} else {
								console.log(res.message)
							}
						}
				})
			},
			
			card(){
					this.$router.push('/card')
			}
			
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	.headimanges{
		width: 40px;
	    height: 40px;
	    border-radius: 30px;
	    position: absolute;
	    right: 34px;
	    top: 6px;
	}
	.loading_no{
		display: none;
	}
	.loading_show{
		width: 100%;
		height: 100%;
		text-align: center;
		font-size: 15px;
		color: white;
		/*background: rgba(0,0,0,0.5);*/
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10000000;
	}
	 .loading_show_con{
		position: absolute;
		width: 100%;
		height: 100px;
		text-align: center;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}
	.loading_show_con img{
		margin: auto;
	}
	.loading_show_con p{
		margin: auto;
		height: 40px;
		line-height: 40px;
		color: #333;
	}
	.personal_con ul li .picture{
		width: 30px;
		height: 30px;
		opacity: 0;
	}
	.personal_con ul li #change{
		width: 40px;
		height: 40px;
		position: absolute;
		right: 40px;
		opacity: 0;
		z-index: 3;
	}
	.handle {
		text-align: center;
		position: relative;
		width: 100%;
		position: fixed;
		z-index: 10000000000;
		background: white;
		height: 40px;
		line-height: 40px;
		font-size: 14px;
	}
	
	.handle .delete {
		position: absolute;
		left: 20px;
		top: 5px;
	}
	
	.handle .delete img {
		width: 12px;
	}
	
	.personal_con ul li {
		line-height: 50px;
		border-bottom: 1px solid #F7F7F7;
		position: relative;
		padding-left: 20px;
		font-size: 13px;
		background: white;
	}
	
	.personal_con ul li:nth-child(4) {
		margin-top: 10px;
	}
	
	.personal_con .personal_tou img {
		width: 45px;
		position: absolute;
		right: 30px;
		top: 2px;
	}
	
	.personal_con_jian {
		position: absolute;
		right: 10px;
		height: 20px;
		top: 16px;
	}
	
	.personal_con_right {
		position: absolute;
		right: 35px;
		top: 0;
	}
	
	#demo #button {
		position: absolute;
		right: 10px;
		top: 10px;
		width: 80px;
		height: 40px;
		border: none;
		border-radius: 5px;
		background: white;
	}
	
	#demo .show {
		width: 40px;
		height: 40px;
		overflow: hidden;
		position: absolute;
		right: 33px;
		top: 5px;
		border-radius: 50%;
	}
	
	#demo .picture {
		width: 40px;
		height: 40px;
		overflow: hidden;
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	
	#demo .container {
		z-index: 99;
		position: fixed;
		padding-top: 60px;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 1);
	}
	
	#demo #image {
		max-width: 100%;
	}
	
	.cropper-view-box,
	.cropper-face {
		border-radius: 50%;
	}
	/*!
 * Cropper.js v1.0.0-rc
 * https://github.com/fengyuanchen/cropperjs
 *
 * Copyright (c) 2017 Fengyuan Chen
 * Released under the MIT license
 *
 * Date: 2017-03-25T12:02:21.062Z
 */
	
	.cropper-container {
		font-size: 0;
		line-height: 0;
		position: relative;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		direction: ltr;
		-ms-touch-action: none;
		touch-action: none
	}
	
	.cropper-container img {
		/* Avoid margin top issue (Occur only when margin-top <= -height) */
		display: block;
		min-width: 0 !important;
		max-width: none !important;
		min-height: 0 !important;
		max-height: none !important;
		width: 100%;
		height: 100%;
		image-orientation: 0deg
	}
	
	.cropper-wrap-box,
	.cropper-canvas,
	.cropper-drag-box,
	.cropper-crop-box,
	.cropper-modal {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	
	.cropper-wrap-box {
		overflow: hidden;
	}
	
	.cropper-drag-box {
		opacity: 0;
		background-color: #fff;
	}
	
	.cropper-modal {
		opacity: .5;
		background-color: #000;
	}
	
	.cropper-view-box {
		display: block;
		overflow: hidden;
		width: 100%;
		height: 100%;
		outline: 1px solid #39f;
		outline-color: rgba(51, 153, 255, 0.75);
	}
	
	.cropper-dashed {
		position: absolute;
		display: block;
		opacity: .5;
		border: 0 dashed #eee
	}
	
	.cropper-dashed.dashed-h {
		top: 33.33333%;
		left: 0;
		width: 100%;
		height: 33.33333%;
		border-top-width: 1px;
		border-bottom-width: 1px
	}
	
	.cropper-dashed.dashed-v {
		top: 0;
		left: 33.33333%;
		width: 33.33333%;
		height: 100%;
		border-right-width: 1px;
		border-left-width: 1px
	}
	
	.cropper-center {
		position: absolute;
		top: 50%;
		left: 50%;
		display: block;
		width: 0;
		height: 0;
		opacity: .75
	}
	
	.cropper-center:before,
	.cropper-center:after {
		position: absolute;
		display: block;
		content: ' ';
		background-color: #eee
	}
	
	.cropper-center:before {
		top: 0;
		left: -3px;
		width: 7px;
		height: 1px
	}
	
	.cropper-center:after {
		top: -3px;
		left: 0;
		width: 1px;
		height: 7px
	}
	
	.cropper-face,
	.cropper-line,
	.cropper-point {
		position: absolute;
		display: block;
		width: 100%;
		height: 100%;
		opacity: .1;
	}
	
	.cropper-face {
		top: 0;
		left: 0;
		background-color: #fff;
	}
	
	.cropper-line {
		background-color: #39f
	}
	
	.cropper-line.line-e {
		top: 0;
		right: -3px;
		width: 5px;
		cursor: e-resize
	}
	
	.cropper-line.line-n {
		top: -3px;
		left: 0;
		height: 5px;
		cursor: n-resize
	}
	
	.cropper-line.line-w {
		top: 0;
		left: -3px;
		width: 5px;
		cursor: w-resize
	}
	
	.cropper-line.line-s {
		bottom: -3px;
		left: 0;
		height: 5px;
		cursor: s-resize
	}
	
	.cropper-point {
		width: 5px;
		height: 5px;
		opacity: .75;
		background-color: #39f
	}
	
	.cropper-point.point-e {
		top: 50%;
		right: -3px;
		margin-top: -3px;
		cursor: e-resize
	}
	
	.cropper-point.point-n {
		top: -3px;
		left: 50%;
		margin-left: -3px;
		cursor: n-resize
	}
	
	.cropper-point.point-w {
		top: 50%;
		left: -3px;
		margin-top: -3px;
		cursor: w-resize
	}
	
	.cropper-point.point-s {
		bottom: -3px;
		left: 50%;
		margin-left: -3px;
		cursor: s-resize
	}
	
	.cropper-point.point-ne {
		top: -3px;
		right: -3px;
		cursor: ne-resize
	}
	
	.cropper-point.point-nw {
		top: -3px;
		left: -3px;
		cursor: nw-resize
	}
	
	.cropper-point.point-sw {
		bottom: -3px;
		left: -3px;
		cursor: sw-resize
	}
	
	.cropper-point.point-se {
		right: -3px;
		bottom: -3px;
		width: 20px;
		height: 20px;
		cursor: se-resize;
		opacity: 1
	}
	
	@media (min-width: 768px) {
		.cropper-point.point-se {
			width: 15px;
			height: 15px
		}
	}
	
	@media (min-width: 992px) {
		.cropper-point.point-se {
			width: 10px;
			height: 10px
		}
	}
	
	@media (min-width: 1200px) {
		.cropper-point.point-se {
			width: 5px;
			height: 5px;
			opacity: .75
		}
	}
	
	.cropper-point.point-se:before {
		position: absolute;
		right: -50%;
		bottom: -50%;
		display: block;
		width: 200%;
		height: 200%;
		content: ' ';
		opacity: 0;
		background-color: #39f
	}
	
	.cropper-invisible {
		opacity: 0;
	}
	
	.cropper-bg {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');
	}
	
	.cropper-hide {
		position: absolute;
		display: block;
		width: 0;
		height: 0;
	}
	
	.cropper-hidden {
		display: none !important;
	}
	
	.cropper-move {
		cursor: move;
	}
	
	.cropper-crop {
		cursor: crosshair;
	}
	
	.cropper-disabled .cropper-drag-box,
	.cropper-disabled .cropper-face,
	.cropper-disabled .cropper-line,
	.cropper-disabled .cropper-point {
		cursor: not-allowed;
	}
</style>