<template>
	<div id="app">
		<!--<div class="topmoney">
			<p>交易总额：5354666657</p>
			<p>为用户赚取：4667567564</p>
		</div>
		-->

		<!-- for example router view -->
		<!-- set progressbar -->
		<vue-progress-bar></vue-progress-bar>

		<div class="tab">
			<router-link to="/" exact>
				<div class="tab-item tab-item1">
					<i></i>
					<span>首页</span>
				</div>
			</router-link>
			<router-link to="/product">
				<div class="tab-item tab-item2">
					<i></i>
					<span>产品</span>
				</div>
			</router-link>
			<router-link to="/find">
				<div class="tab-item tab-item3">
					<i></i>
					<span>资产</span>
				</div>
			</router-link>
			<router-link to="/mine">
				<div class="tab-item tab-item4">
					<i></i>
					<span>个人</span>
				</div>
			</router-link>
		</div>
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive">
				<!-- 这里是会被缓存的视图组件，比如 Home！ -->
			</router-view>
		</keep-alive>

		<router-view v-if="!$route.meta.keepAlive">
			<!-- 这里是不被缓存的视图组件，比如 Edit！ -->
		</router-view>
	</div>
</template>

<script>
//	export default {
//		methods: {
//			start() {
//				this.$Progress.start()
//			},
//			set(num) {
//				this.$Progress.set(num)
//			},
//			increase(num) {
//				this.$Progress.increase(num)
//			},
//			decrease(num) {
//				this.$Progress.decrease(num)
//			},
//			finish() {
//				this.$Progress.finish()
//			},
//			fail() {
//				this.$Progress.fail()
//			},
//			test() {
//				this.$Progress.start()
//
//				this.$http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=7waqfqbprs7pajbz28mqf6vz')
//				.then((response) => {
//					this.$Progress.finish()
//				}, (response) => {
//					this.$Progress.fail()
//				})
//			}
//		}
//	}
</script>

<style>
	* {
		font-size: 12px;
	}
	
	#app {
		font-family: "微软雅黑";
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/*text-align: center;*/
		color: #2c3e50;
		padding: 0;
		margin: 0;
	}
	
	html,
	body {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		padding: 0;
		margin: 0;
	}
	
	.topmoney {
		width: 100%;
		height: 20px;
		line-height: 20px;
		position: absolute;
		top: 136px;
		z-index: 2;
		background: rgba(255, 255, 255, 0.5);
	}
	
	.topmoney p {
		width: 50%;
		font-size: 12px;
		float: left;
		text-align: center;
	}
	
	.tab {
		display: flex;
		width: 100%;
		height: 50px;
		line-height: 50px;
		position: absolute;
		bottom: 0;
		z-index: 10000000;
		background: white;
	}
	
	.tab-item {
		width: 80%;
		color: #333;
		font-size: 12px;
		position: relative;
	}
	
	.tab a {
		width: 33%;
		justify-content: center;
		flex: 1;
		text-align: center;
		text-decoration: none;
	}
	
	.tab-item a {
		color: #333;
		text-decoration: none;
	}
	
	.router-link-active .tab-link {
		color: red;
		background: pink;
	}
	
	.router-link-active .tab-item {
		color: rgb(240, 20, 20) !important;
	}
	
	.progress-circle {
		position: relative;
	}
	
	.circle {
		stroke-width: 20px;
		transform-origin: center;
	}
	
	.progress-background {
		transform: scale(0.9);
		stroke: rgba(255, 205, 49, 0.5);
	}
	
	.progress-bar {
		transform: scale(0.9) rotate(-90deg);
		stroke: #ffcd32;
	}
	
	.__cov-progress {
		width: 30% !important;
		height: 10px !important;
		opacity: 1 !important;
	}
	
	.tab-item1 i {
		width: 2rem;
		height: 2rem;
		background: url(common/bottom_icon2.png) no-repeat;
		background-size: 2rem 2rem;
		position: absolute;
		margin-top: 0.5rem;
		margin-left: 0.1rem
	}
	
	.router-link-active .tab-item1 i {
		width: 2rem;
		height: 2rem;
		background: url(common/bottom_icon1.png) no-repeat;
		background-size: 2rem 2rem;
		position: absolute;
		margin-top: 0.5rem;
		margin-left: 0.1rem
	}
	
	.tab-item2 i {
		width: 2rem;
		height: 2rem;
		background: url(common/bottom_icon4.png) no-repeat;
		background-size: 2rem 2rem;
		position: absolute;
		margin-top: 0.5rem;
		margin-left: 0rem;
	}
	
	.router-link-active .tab-item2 i {
		width: 2rem;
		height: 2rem;
		background: url(common/bottom_icon3.png) no-repeat;
		background-size: 2rem 2rem;
		position: absolute;
		margin-top: 0.5rem;
		margin-left: 0.1rem
	}
	
	.tab-item3 i {
		width: 2rem;
		height: 2rem;
		background: url(common/bottom_icon6.png) no-repeat;
		background-size: 2rem 2rem;
		position: absolute;
		margin-top: 0.5rem;
		/*     margin-left: -0.1rem;*/
	}
	
	.router-link-active .tab-item3 i {
		width: 2rem;
		height: 2rem;
		background: url(common/bottom_icon5.png) no-repeat;
		background-size: 2rem 2rem;
		position: absolute;
		margin-top: 0.5rem;
	}
	
	.tab-item4 i {
		width: 2rem;
		height: 2rem;
		background: url(common/bottom_icon8.png) no-repeat;
		background-size: 2rem 2rem;
		position: absolute;
		margin-top: 0.5rem;
		margin-left: 0rem;
	}
	
	.router-link-active .tab-item4 i {
		width: 2rem;
		height: 2rem;
		background: url(common/bottom_icon7.png) no-repeat;
		background-size: 2rem 2rem;
		position: absolute;
		margin-top: 0.5rem;
	}
	
	.tab-item span {
		height: 0.1rem;
		position: absolute;
		bottom: -1.45rem;
	}
</style>