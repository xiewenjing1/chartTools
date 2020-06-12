<template>
  <div id='app'>
    <!-- <img src='./assets/bg.jpg'> -->
    <!-- <div ref='chartBox' class='chartBox'></div> -->
    <!-- <div class='mapBox' ref='mapBox'></div> -->
    <!-- <div class='bigBox'>
      <div class='box'>
        <div class="smallBox">121321</div>
      </div>
      <div class="testBox"></div>
    </div> -->
    <!-- <router-view /> -->
    <!-- <div class="way">
      <div class="left-top"></div>
      <div class="right-top"></div>
      <div class="left-bottom"></div>
      <div class="right-bottom"></div>
    </div> -->
    <!-- <div class="ways"></div>
    <div class="cricle"></div> -->
    <div class="text">
      <div class="text1">1</div>
      <div class="text1">2</div>
      <div class="text1">3</div>
      <div class="text1">4</div>
      <div class="text2">5</div>
    </div>
  </div>
</template>

<script>
// import chart from './components/echarts/index';
// import boxRend from './components/boxUi/index';

export default {
  name: 'App',
  mounted () {
    this.createChart();
  },
  methods: {
    createChart () {
      // chart(this.$refs.mapBox, {
      //   type: 'bar3D',
      //   size: 'big'
      // });
      const a = 1;
      const b = 2;
      console.log(a + b);
      console.log(111111);
    }
  }
};
</script>

<style lang='scss'>
body{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .bigBox {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    background-color: black;
    border: solid 1px  transparent;
    .box {
      width: 200px;
      height: 200px;
      background-color: darkblue;
      margin: 50px auto;
      position: relative;
      .smallBox{
        width: 200px;
        height: 200px;
        background-color: yellow;
      }
      // 第一步画三角形
      &::before{
        content: '';
        width: 0px;
        height: 0px;
        position: absolute;
        top: 0px;
        left: 0px;
        // 取和画布相同的颜色遮住
        border: solid 20px  black;
        border-right-color: transparent;
        border-bottom-color: transparent;
      }
    }
    .testBox{
      width: 200px;
      height: 200px;
      border: solid 1px lightblue;
      background:
      // 2、没有to, 右边表示是出发地，从右到左，从黑到白
      linear-gradient(right, black, #fff);
    }
  }
  .way{
    position: relative;
    height: 400px;
    width: 400px;
.left-top{
  height: 200px;
  width: 200px;
  background-color: lightcyan;
  position: absolute;
  top: 0px;
  left: 50%;
  background:
    linear-gradient(135deg, transparent 20px, darkblue 0) top left;
}
.right-top{
  height: 200px;
  width: 200px;
  position: absolute;
  top: 0px;
  left: 100%;
  background:
    linear-gradient(-135deg, transparent 20px, darkblue 0) top right,
}
.left-bottom{
  height: 200px;
  width: 200px;
  position: absolute;
  top: 50%;
  left: 100%;
  background:
    linear-gradient(-45deg, transparent 20px, darkblue  0) bottom right,
}
.right-bottom{
  height: 200px;
  width: 200px;
  position: absolute;
  bottom: 0%;
  right: 0%;
  background:
    linear-gradient(45deg, transparent 20px, darkblue  0) bottom right,
}
  }
  .ways{
    width: 400px;
    height: 400px;
    background:
    linear-gradient(135deg, transparent 20px, lightcyan 0) top left,
    linear-gradient(-135deg, transparent 20px, lightcyan 0) top right,
    linear-gradient(-45deg, transparent 20px, lightcyan 0) bottom right,
    linear-gradient(45deg, transparent 20px, lightcyan 0) bottom left;
  background-size: 50% 50%;
  background-repeat: no-repeat;
  }
  .cricle{
     width: 400px;
    height: 400px;
    margin: 20px auto;
  background:
      radial-gradient(circle at top left, transparent 30px, lightPink 0) top left,
      radial-gradient(circle at top right, transparent 30px, lightPink 0) top right,
      radial-gradient(circle at bottom right, transparent 30px, lightPink 0) bottom right,
      radial-gradient(circle at bottom left, transparent 30px, lightPink 0) bottom left;
  background-size: 50% 50%;
  background-repeat: no-repeat;
  }
  .text{
    background-color: royalblue;
    display: flex;
    .text1{
      flex: 200px 1 1;
      text-align: center;
      border: 1px solid gold;
    }
    .text2{
      flex: 45px 1 1;
      text-align: center;
      border: 1px solid gold;
    }
  }
}
</style>
