<template>
	<swiper :options="swiperOption">
		<swiper-slide v-for="item3 in bannerlistshow">
			<a :href="item3.jump_url+'?id='+item3.id"><img v-bind:src="item3.pic" /></a>
		</swiper-slide>
		<!--<swiper-slide>Slide 2</swiper-slide>
				<swiper-slide>Slide 3</swiper-slide>
				<swiper-slide>Slide 4</swiper-slide>
				<swiper-slide>Slide 5</swiper-slide>
				<swiper-slide>Slide 6</swiper-slide>
				<swiper-slide>Slide 7</swiper-slide>
				<swiper-slide>Slide 8</swiper-slide>
				<swiper-slide>Slide 9</swiper-slide>
				<swiper-slide>Slide 10</swiper-slide>-->
	</swiper>
</template>

<script>
	import commonsum from '../../vuex/common.vue'
	import { getHeader } from '../../vuex/header'
	export default {
		name: 'HelloWorld',
		data() {
			return {
				name: '',
				bannerlistshow: '',
				datalist: '',
				token: '',
				swiperOption: {
					//        spaceBetween: 30,
					centeredSlides: true,
					autoplay: {
						delay: 2500,
						disableOnInteraction: false
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: false
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					}
				},
				swiperOption1: {
					//        spaceBetween: 30,
					centeredSlides: true,
					//        autoplay: {
					//          delay: 2500,
					//          disableOnInteraction: false
					//        },
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					}
				}
			}
		},
		created() {
			this.home_banner(),
				this.token = sessionStorage.getItem('name')
		},
		methods: {
			home_banner() {
				var headers = getHeader();
				var _self = this;
				$.ajax({
					type: 'post',
					data: '',
					url: commonsum.web_url+'/mobile/Main/bnlist',
					success: function(data) {
						var bannerlist = eval('(' + data + ')');
						_self.bannerlistshow = bannerlist.data.list
						console.log(_self.bannerlistshow);

					}
				});
			}
		},
	}
</script>

<style>
	.toplunbo .swiper-slide img {
		width: 100%;
		height: 100%;
	}
	
	.swiper-pagination {
		width: 100%;
		margin-top: -6.1em;
	}
	
	.swiper-pagination-bullet-active {
		background: #ff4c45;
	}
	
	.swiper-pagination span:nth-child(1) {
		margin-left: 1em;
	}
	
	.swiper-pagination-bullet {
		margin-left: 0.8em;
	}
</style>