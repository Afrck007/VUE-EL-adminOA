<template>

  <div>
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item,index) in list" :key="index">
          <router-link :to="item.path">{{item.meta.title}}</router-link>
          </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>

</template>



<script>
  export default {
    components: {},
    data() {
      return {list:[]}
    },
    created () {
      // 获取路由信息
      this.list = this.$route.matched;
      console.log(this.list);
      // 打断点的方法点击console.log打印出的东西会转到sources里面，点击要显示的这一行断点，鼠标放到需要的地方即可显示
    },
    // 点击列表面包屑变化
    watch: { //监听路由to新的值，from旧的值
      $route(to, from) {
        console.log(to);
        this.list = to.matched;
      }
    },
    methods: {},
  }

</script>



<style scoped>

</style>
