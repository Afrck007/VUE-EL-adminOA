<template>
  <div>
    <div class="block">
      <el-carousel height="150px">
        <el-carousel-item v-for="item in items" :key="item">
          <img :src="item" alt="" style="height:200px">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div ref="main" style="width: 600px;height:400px;"></div>
  </div>


</template>

<script>
  export default {
    data() {
      return {
        items: [
          require("@/assets/304300.jpg"),
          require("@/assets/323417.jpg")
        ]
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(this.$refs.main);

        // 指定图表的配置项和数据
        var option = {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
    }
  }

</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

</style>
