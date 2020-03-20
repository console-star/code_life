<template>
	<div class="inform_information" style="height: 90%;overflow: scroll;" v-swipeup="{fn:vuetap,name:'上滑'}">
		<div class="inform_information_title">
			消息通知<span>全部已读</span>
		</div>
		<div class="inform_information_content">
				<ul>
					<li v-for="(item, index) in getinformation_list_show">
						
                        <p v-if='item.status==1' class="type_status"></p>
                        <p v-if='item.status==0' class="type_status1"></p>
						<van-cell-swipe :right-width="65">
							<router-link :to="{ name: 'Informdetailto', params: {id: item.id,msg: item.msg,send_time: item.send_time,title: item.title}}">
								<van-cell-group>
									<van-cell :title="item.title" :value="item.send_time | formatDate" />
								</van-cell-group>
							</router-link>
							<span slot="right" v-on:click="getMsgFromChild(index,item.id)">删除</span>
						</van-cell-swipe>
					</li>
				</ul>
				<p style="text-align: center;">没有更多数据了</p>
		</div>
	</div>
</template>

<script>
	import commonsum from '../vuex/common.vue'
	import { getHeader } from '../vuex/header'
	import BScroll from 'better-scroll'
	import { formatDate } from '../lib/time1'
	import touch from './vue-touch'
	
	export default {
		name: 'home',
		data() {
			return {
				getinformation_list_show: '',
				counter : 1, //默认已经显示出15条数据 count等于一是让从16条开始加载
			    num : 1000,  // 一次显示多少条
			    pageStart : 0, // 开始页数
			    pageEnd : 0, // 结束页数
			    listdata: [], // 下拉更新数据存放数组
			    downdata: [],  // 上拉更多的数据存放数组
			    type_status:'type_status1'
			}
		},
		created() {
			this.getinformation_list()
		},
		mounted() {

		},
		methods: {
			getinformation_list() {
				var headers = getHeader();
				var data1 = {
					'token': sessionStorage.getItem('name'),
					'limit': this.num
				}
				var _self = this;
				$.ajax({
					type: 'post',
					data: data1,
					url: commonsum.web_url + '/mobile/user/innermsg',
					headers: headers,
					success: function(data) {
						var getinformation_list = eval('(' + data + ')');
						_self.getinformation_list_show = getinformation_list.data.list
						console.log(_self.getinformation_list_show);
						if(getinformation_list.data.list.status==0){
							this.type_status='type_status'
						}else{
							this.type_status='type_status1'
						}
					}

				});
			},
			getMsgFromChild(index, id) {
				this.getinformation_list_show.splice(index, 1)
				console.log(index, id)
				var data1 = {
					'token': sessionStorage.getItem('name'),
					'mid': id
				}
				console.log(data1)
				var _self = this;
				$.ajax({
					type: 'post',
					data: data1,
					url: commonsum.web_url + '/mobile/user/deleteinnermsg',
					headers: headers,
					success: function(data) {
						

					}

				});
			},
//			vuetap: function(s) {
//				var data1 = {
//					'token': sessionStorage.getItem('name'),
//					'limit': this.num++
//				}
//				var _self = this;
//				$.ajax({
//					type: 'post',
//					data: data1,
//					url: 'https://develop.jinlingdai.cn/mobile/user/innermsg',
//					success: function(data) {
//						var getinformation_list = eval('(' + data + ')');
//						_self.getinformation_list_show = getinformation_list.data.list
//						console.log(_self.getinformation_list_show);
//					}
//
//				});
//			}
		},
		components: {

		},
		filters: {
			formatDate(time) {
				return formatDate(new Date(time * 1000), 'yyyy-MM-dd');
			}
		}

	}
</script>

<style>
	.inform_information .type_status1{
		width: 8px;
		height: 8px;
		border-radius: 8px;
		background: #ff5f4c;
		position: absolute;
		left: 20px;
		top: 20px;
		z-index: 100;
		
	}
	.inform_information .type_status{
		width: 8px;
		height: 8px;
		border-radius: 8px;
		background: #AAAAAA;
		position: absolute;
		left: 20px;
		top: 20px;
		z-index: 100;
	}
	.inform_information .van-cell-swipe__right{
		width: 65px;
		text-align: center;
		line-height: 45px;
		color: white;
		background: #ff5348;
	}
	.inform_information .van-cell__title{
	    white-space: nowrap; 
	    text-overflow:ellipsis;
	    overflow:hidden;
	    padding-left: 20px;
	}
	.inform_information_title {
		text-align: center;
		position: relative;
		height: 3em;
		line-height: 3em;
	}
	
	.inform_information_title span {
		position: absolute;
		right: 1em;
	}
	.inform_information_content{
		height: 100%;
		overflow: scroll;
	}
	.inform_information_content ul a {
		color: #333;
	}
	
	.inform_information_content ul li {
		width: 100%;
		/*height: 3em;*/
		line-height: 3em;
		background: white;
		/*padding-left: 2.5em;*/
		border-bottom: 1px solid #F7F7F7;
		position: relative;
	}
	
	.inform_information_content ul li .type {
		width: 0.5em;
		height: 0.5em;
		border-radius: 0.5em;
		background: #aaa;
		position: absolute;
		left: 1em;
		top: 1.3em;
	}
	
	.inform_information_content ul li .title {
		padding-left: 2em;
	}
	
	.inform_information_content ul li .time {
		position: absolute;
		right: 3em;
		top: 0;
		width: 20%;
	}
</style>
