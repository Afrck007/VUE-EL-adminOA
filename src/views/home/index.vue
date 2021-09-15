<template>

  <div>
    <el-container>
      <el-aside width="200px">
        <asidenav />
      </el-aside>
      <el-container>
        <el-header>
          <el-button type="primary" size="default" @click="goback">退出</el-button>
          <breadhumb />
        </el-header>
        <el-main>
          <!-- 定义路由出口 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>

  </div>

</template>



<script>
  import breadhumb from "@/components/breadhumb.vue"
  import asidenav from "@/components/asidenav.vue"
  export default {
    components: {
      breadhumb,
      asidenav
    },
    data() {
      return {}
    },
    methods: {
      goback() {
        sessionStorage.removeItem("username");
        this.$router.push('/login')
      }
    },
  }

</script>



<style scoped>
.el-container{
  height: 600px;
}
  .el-header,
  .el-footer {
    background-color: #ffffff;
    color: #333;
    text-align: right;
  }

  .el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 600px;
  }



  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body>.el-container {
    margin-bottom: 40px;
  }


</style>
