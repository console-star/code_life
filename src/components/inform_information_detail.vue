<template>
	<div class="inform_information_detail">
	<h2>{{this.$route.params.title}}</h2>
	<p class="time">{{this.$route.params.send_time | formatDate}}</p>
      <div class="content">
         {{this.$route.params.msg}}
      </div>
	</div>
	
</template>

<script>
	import commonsum from '../vuex/common.vue'
	import { getHeader } from '../vuex/header'
	import { formatDate } from '../lib/time1'
	import touch from './vue-touch'
	
	export default {
		name: 'home',
		data() {
			return {
				
			}
		},
		created() {
			this.getMsgFromChild()
		},
		mounted() {
          console.log(this.$route.params.id)
		},
		methods: {
			getMsgFromChild() {
				var headers = getHeader();
				var data1 = {
					'token': sessionStorage.getItem('name'),
					'mid': this.$route.params.id
				}
				console.log(data1)
				var _self = this;
				$.ajax({
					type: 'post',
					data: data1,
					url: commonsum.web_url+'/mobile/user/change_msg_status',
					headers: headers,
					success: function(data) {
//						console.log(111)

					}

				});
			}
		},
		components: {

		},
		filters: {
			formatDate(time) {
				return formatDate(new Date(time * 1000), 'yyyy-MM-dd hh:mm');
			}
		}

	}
</script>

<style>
.inform_information_detail{
	padding: 20px;
}
.inform_information_detail h2{
	font-size: 15px;
	line-height: 23px;
}
.inform_information_detail .time{
	line-height: 33px;
	color: deepskyblue;
	border-bottom: 1px solid #F7F7F7;
	margin-top: 6px;
}
.inform_information_detail .content{
	line-height: 23px;
	
}
</style>