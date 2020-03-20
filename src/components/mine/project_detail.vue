<template>
	<div class="project_detail">
		<div class="borrow_detail_d_tabcon">
				<div class="xiamhmuxin" v-show="xiamhmuxin">
					<div class="borrow_detail_d_tab">
						<p class="active" v-on:click="xiamhmuxin1">项目信息</p>
						<p v-on:click="xiamhmuneirong1">相关内容</p>
						<p v-on:click="xiamhmujilu1">出借记录</p>
						<p v-on:click="huankuan1">还款记录</p>
					</div>
					<iframe style="width: 100%;height: 300px;" id="show-iframe" frameborder=0 name="showHere" scrolling=auto :src="borrowdetail.borrow_info">111</iframe>
				</div>
				<div class="xiamhmuneirong" v-show="xiamhmuneirong">
					<div class="borrow_detail_d_tab">
						<p v-on:click="xiamhmuxin1">项目信息</p>
						<p class="active" v-on:click="xiamhmuneirong1">相关内容</p>
						<p v-on:click="xiamhmujilu1">出借记录</p>
						<p v-on:click="huankuan1">还款记录</p>
					</div>
					<iframe style="width: 100%;height: 330px;" id="show-iframe" frameborder=0 name="showHere1" scrolling=auto :src="borrowdetail.file_info">111</iframe>
				</div>
				<div class="xiamhmujilu" v-show="xiamhmujilu">
					<div class="borrow_detail_d_tab">
						<p v-on:click="xiamhmuxin1">项目信息</p>
						<p v-on:click="xiamhmuneirong1">相关内容</p>
						<p class="active" v-on:click="xiamhmujilu1">出借记录</p>
						<p v-on:click="huankuan1">还款记录</p>
					</div>
					<iframe style="width: 100%;height: 330px;" id="show-iframe" frameborder=0 name="showHere1" scrolling=auto :src="borrowdetail.borrow_log">111</iframe>
				</div>
				<div class="huankuan" v-show="huankuan">
					<div class="borrow_detail_d_tab">
						<p v-on:click="xiamhmuxin1">项目信息</p>
						<p v-on:click="xiamhmuneirong1">相关内容</p>
						<p v-on:click="xiamhmujilu1">出借记录</p>
						<p class="active" v-on:click="huankuan1">还款记录</p>
					</div>
					<iframe style="width: 100%;height: 330px;" id="show-iframe" frameborder=0 name="showHere1" scrolling=auto :src="borrowdetail.investor_log">111</iframe>
				</div>
			</div>
	</div>
</template>

<script>
</script>

<style>
</style>