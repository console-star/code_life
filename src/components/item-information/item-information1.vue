<template>
	<div class="item-information" style="height: 90%;overflow-y: scroll;">
		<div class="item-information_title">相关资料</div>
		<iframe style="width: 100%;height:100%;border: 0;" :src="this.$route.params.file_info"></iframe>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				
			}
		},
		created() {
		},
		methods: {
			
		},
		mounted() {
			console.log(this.$route.params.borrow_info) //
			//我想在这里得到参数,会报下面这个错误
			//$route is not defined
		},
		computed: {
		},
		components: {
		}

	}
</script>

<style>
</style>