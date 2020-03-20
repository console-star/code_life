<template>
	<div class="hello" style="height: 90%;overflow-y:scroll;">
		<div class="allready_or_not">
      		<p>本月未收：<span>500000</span>元</p>
      		<p>本月已收：<span>500000</span>元</p>
      	</div>
		<vue-event-calendar :events="demoEvents">
			
      <template scope="props">
      	
        <div v-for="(event, index) in props.showEvents" class="event-item">
          <!-- 这里拿到的是传入的单个event所有数据 -->
          {{event.title}}
        </div>
      </template>
    </vue-event-calendar>
	</div>
</template>

<script>
	export default {
data () {
    return {
      demoEvents: [{
        date: '2016/12/15',
        title: 'eat',
        desc: 'longlonglong description'
      },{
        date: '2016/11/12',
        title: 'this is a title'
      }]
    }
}
}
</script>

<style>
	.allready_or_not{
		width: 92%;
		margin: auto;
		height: 50px;
		line-height: 50px;
		background: white;
		position: relative;
		top: 375px;
		z-index: 100;
		margin-left:14px ;
	}
	.allready_or_not p{
		float: left;
		width: 45%;
		margin-left: 2%;
		text-align: center;
	}
	.allready_or_not p span{
		color: rgb(255, 77, 70);
	}
	.events-wrapper{
		margin-top:50px !important ;
	}
	.__vev_calendar-wrapper{
		top: -50px;
	}
	.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item .is-today{
    content: "";
    background: #ffc9c7 !important;
    border-radius: 50% !important;
    width: 36px !important;
    height: 36px !important;
    position: absolute !important;
    left: 50% !important;
    top: 50% !important;
    z-index: 1;
    margin-left: -18px !important;
    margin-top: -18px !important;
	}
	.__vev_calendar-wrapper .arrow-right.icon:before{
      border-top: 1px solid rgb(255, 77, 70) !important;
      border-right: 1px solid rgb(255, 77, 70) !important;
      top: 0 !important;
	}
	.__vev_calendar-wrapper .arrow-left.icon:before{
	  border-top: 1px solid rgb(255, 77, 70) !important;
      border-right: 1px solid rgb(255, 77, 70) !important;
      top: 0 !important;
	}
	.__vev_calendar-wrapper .cal-wrapper .cal-header>div{
		line-height: 33px !important;
		font-size: 16px;
		color: rgb(255, 77, 70);
	}
	.__vev_calendar-wrapper .cal-wrapper{
		padding-top: 0 !important;
	}
	.__vev_calendar-wrapper .cal-wrapper .cal-header{
		width: 95% !important;
		margin: auto !important;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		font-weight: 600 !important;
	}
	.dates{
		width: 95% !important;
		background: white !important;
		margin: auto;
	}
	.weeks{
		background: white !important;
		color: rgb(255, 77, 70) !important;
	}
</style>