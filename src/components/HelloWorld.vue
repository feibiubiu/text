<template>
  <div class="hello">
    <div v-if="!showLoading">
      <button @click="copy1($event)">我就是要复制你</button>
      <button>我就是要复制你谁谁谁谁谁谁</button>
    </div>
    <transition name="loading">
      <loading v-show="showLoading"></loading>
    </transition>
  </div>
</template>

<script>
import clipboard from "../utils/clipboard";
import loading from "./loading";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      showLoading: true
    };
  },
  components: {
    loading
  },
  mounted() {
    setTimeout(() => {
      this.showLoading = false
    },2000)
  },
  methods: {
    copy1(event) {
      clipboard("1234", event);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
