<template>
    <div id="circlechart">
       
        <div class="flex-fill" style="padding-bottom: 10rem">
            <div class="mb5 center" style="max-width: 57rem">              
                <div class="pt5 nb5" id="custom-options">
                    <!--自定义两条路径宽度-->
                    <div :class="box_cls" :style="box_style">
                        <div :class="label_cls">Custom Wide ranging <span
                                class="normal"> varyStrokeArray (自定义两条路径宽度) ([30,15])</span></div>
                        <div class="tc">
                            <progress-bar value="100" :options="{radius:129,circleLineCap: 'round',varyStrokeArray: [20,20]}"></progress-bar>
                        </div>
                    </div>           
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import progressBar from './vircle-bar.vue'
  export default {
    name: 'circlechart',
    data () {
      return {
        
       
      }
    },
    methods: {},
    components: {
      progressBar
    }
  }
</script>

<style lang="scss">
	
	
    .flex-fill {
        -ms-flex: 1 1;
        flex: 1 1;
    }
    .options {
        width: 300px;
        font-size: 15px;
        margin-right: 60px;
        p {
            color: #000;
            margin-bottom: 30px;
            b {
                font-size: 16px;
                font-style: italic;
            }
        }
    }
    .wd800 {
        width: 800px;
        margin: 30px auto;
    }
    .warp {
        height: 260px;
        width: 360px;
        overflow: hidden;
        ul {
            list-style: none;
            padding: 0;
            margin: 0 auto;
            li {
                height: 30px;
                line-height: 30px;
                display: flex;
                justify-content: space-between;
                font-size: 15px;
            }
        }
    }
   
</style>