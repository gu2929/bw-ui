<template>
  <div id="loading">
    <div class="loading">
      <img src="@/assets/loading.png" alt="" class="rocket">
      <div class="loadingContent">
        <img src="@/assets/loading_07.png" alt="" class="lineLeft">
        数据加载中, 请稍后
        <img src="@/assets/loading_07.png" alt="" class="lineRight">
      </div>
      <div id="ddr">
        <div class="ddr ddr1"></div>
        <div class="ddr ddr2"></div>
        <div class="ddr ddr3"></div>
        <div class="ddr ddr4"></div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Loading'
})
</script>
<style lang="less" scoped>
  #loading {
    position: absolute;
    width: 100%;
    height:100%;
    z-index: 3001;
    .loading {
      width: 424px;
      height: 234px;
      background: white;
      border-radius: 4px;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      opacity: 0.8 !important;
      .rocket{
        position: relative;
        left: 10%;
        transform: translateX(-50%);
        top:30px
      }
      .loadingContent{
        position: relative;
        text-align: center;
        top: 50px;
        font-size: 16px;
        color: #333;
        .lineLeft{
          position: absolute;
          left: 44px;
          top: 8px
        }
        .lineRight{
          position: absolute;
          transform: rotate(180deg);
          right: 44px;
          top:8px;
        }
      }
    }
  }
  #ddr{
    width:200px;
    position: relative;
    left: 177px;
    top:60px
  }
  .ddr{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    float: left;
    margin: 1px;
    background-color: #666;
    animation: loading 1s infinite ease-in-out;/*animation：动画名称 持续时间 动画速度曲线 延迟 执行多少次 是否正反方向轮流播放*/
  }
  .ddr2{
    animation-delay: -0.9s;/*定义开始执行的地方，负号表示直接从第900ms开始执行*/
  }
  .ddr3{
    animation-delay: -0.8s;
  }
  .ddr4{
    animation-delay: -0.7s;
  }
  .ddr5{
    animation-delay: -0.6s;
  }
  @keyframes loading {
    0%,40%,100%{ /*定义每帧的动作*/
      -webkit-transform: scale(0.5);
    }
    20%{
      -webkit-transform: scale(1,);
    }
  }
</style>
