<template>
  <div class="hello">
    <button @click="copy1($event)">我就是要复制你</button>
    <button >我就是要复制你谁谁谁谁谁谁</button>
  </div>
</template>

<script>
import clipboard from "../utils/clipboard";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  // mounted() {
  //   let xxx = new Clipboard(' ', {
  //       text: () => ''
  //   });
  // },
  methods: {
    copy1(event){
      clipboard("1234",event)
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
