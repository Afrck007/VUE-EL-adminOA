<template>
  <!-- 侧边栏组件 -->
  <div>

    <!-- 无子集 -->
    <el-menu-item :index="path" v-if="!item.child">
      <i class="el-icon-menu"></i>
      <span slot="title">{{item.name}}</span>
    </el-menu-item>

    <!-- 有子集 -->
    <el-submenu :index="path" v-else>
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{item.name}}</span>
      </template>
      <!-- 根据名字循环自己 -->
      <naveitem v-for="(child,i) in item.child" :key="i" :item="child" :path="child.url" />
    </el-submenu>
  </div>

</template>



<script>
  export default {
    name: "naveitem",
    components: {},
    props: ['item', 'path'],
    data() {
      return {}
    },
    mounted() {},
    methods: {},
  }

</script>



<style scoped>

</style>
