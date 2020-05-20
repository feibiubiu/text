<template>
  <div id="app">
    <el-row style="margin:20px 2px;">
      <el-button type="primary" @click="toHome">复制首页</el-button>
      <el-button type="primary" @click="toDragTable">dragTable</el-button>
      <el-button type="success" @click="fullScreen">全屏展示</el-button>
      <el-button type="info" id="cccc" @click="buttonFull">按钮全屏</el-button>
      <el-button type="warning" @click="control">控制大小</el-button>
      <el-button type="danger" @click="dragUPLOAD">拖拽上传</el-button>
      <el-button v-changeColor:foo.a="'message'" type="danger" @click="myDirective">自定义指令</el-button>
      <el-button type="success" @click="pdf">打印pdf</el-button>
    </el-row>
    <router-view />
  </div>
</template>

<script>
import screenfull from "screenfull"; // 引入全屏显示
export default {
  name: "App",
  mounted() {
    console.log("ffffffffff", this.$el.getBoundingClientRect());
  },
  methods: {
    toDragTable() {
      this.$router.push("/dragTable");
    },
    toHome() {
      this.$router.push("/");
    },
    fullScreen() {
      if (!screenfull.isEnabled) {
        this.$message.error("当前该浏览器不支持全屏展示");
        return false;
      }
      screenfull.toggle();
    },
    buttonFull() {
      screenfull.request(document.getElementById("cccc"));
      //screenfull.exit(); 关闭全屏展示
    },
    control() {
      var a = this.$ELEMENT;
      this.$ELEMENT.size = "mini";
      //console.log(a)
    },
    dragUPLOAD() {
      this.$router.push("/dragUpload");
    },
    myDirective() {
      console.log("你讲咩啊");
    },
    pdf() {
      setTimeout(() => {
        
        this.$nextTick(() => {
          window.print();
        });
      }, 3000);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
