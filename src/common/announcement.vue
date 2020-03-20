<template>
  <div id="gongaolababox">
  	<p class="gongaolaba"></p>
    <ul id="con1" ref="con1" :class="{anim:animate==true}">
      <a v-for='item in items'><a :href="item.link"><li>{{item.title}}</li></a></a>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      animate:false,
      items:''
    }
  },
  created(){
  	this.datatime(),
    setInterval(this.scroll,2500)
  },
  methods: {
    scroll(){
      this.animate = true
      if(this.items[0]){
      	setTimeout(() => {
	        this.items.push(this.items[0]);
	        this.items.shift();
	        this.animate= false;  // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
	      },1500)
      }
    },
	datatime() {
			var _self = this;
			$.ajax({
				type: 'post',
				data: '',
				url: 'http://192.168.1.14/mobile/annouce/lists',
				success: function(data) {
					var listData = eval('(' + data + ')');
					_self.items = listData.data.list
//					console.log(_self.items)
				}

			});
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	*{
		margin: 0;
		padding: 0;
	}
  #gongaolababox{
  	position: relative;
    width: 100%;
    height: 33px;
    line-height: 33px;
    overflow: hidden;
    border-bottom: 1px solid #F7F7F7;
    transition: all 0.5s;
    background: white;
    
  }
  .anim{
    transition: all 1.5s;
    margin-top: -33px;
  }
  #con1{
  	position: absolute;
  	top: 0;
  }
  #con1 li{
    list-style: none;
    line-height: 33px;
    height: 33px;
    padding-left: 50px;
    color: #333;
  }
  .gongaolaba{
  	width: 2rem;
  	height: 2rem;
  	background: url(gonggaolaba.png) no-repeat;
  	background-size: 100% 100%;
  	position: absolute;
  	left: 1rem;
  	top: 0.3rem;
  }
</style>