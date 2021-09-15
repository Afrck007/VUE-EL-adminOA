<template>
  <!-- 左侧侧边栏 -->
  <div>
    <!--刷新保持样式不变=> “是否激活”默认类名的依据是包含匹配。
      举个例子，如果当前的路径是 /a 开头的，那么 也会被设置 CSS 类名。
      按照这个规则，每个路由都会激活 ！想要链接使用“精确匹配模式”，则使用 exact 属性 -->
<!-- :default-active="$route.path" 动态绑定可以保持样式刷新依然保持 -->
    <!--router   启用该模式会在激活导航时以 index 作为 path 进行路由跳转  路径是根据数据里的URL    -->
    <el-menu :default-active="$route.path" exact class="el-menu-vertical-demo" router>
      <naveitem v-for="(v,i) in items" :key="i" :item="v" :path="v.url" />
    </el-menu>
  </div>

</template>

<script>
  import naveitem from '@/components/naveitem.vue'
  export default {
    components: {
      naveitem
    },
    data() {
      return {
        items: [{
            name: "首页",
            url: "/index"
          },
          {
            name: "数据统计",
            url: "/stats"
          },
          {
            name: "信息管理",
            url: "/wms",
            child: [{
              name: "列表展示",
              url: "/wms/list"
            }]
          },
          {
            name: "用户管理",
            url: "/user",
            child: [{
                name: "用户统计",
                url: "/user/stats"
              }, {
                name: "角色统计",
                url: "/user/role"
              },
              {
                name: "深层数据",
                child: [{
                  name: "用户统计222",
                  url: "/user/stats"
                }]
              }
            ]
          },
        ]
      }
    },
    mounted() {
      this.getnav();
    },
    methods: {
      getnav() {
        this.$http.get('/get_nav').then(res => {
          console.log(res);
          let {
            code,
            result
          } = res.data;
          if (code == 200) {
            this.item = result;
          }
        })
      }
    },
  }

</script>


