<template>
  <div>
    <ul ref="ul1">
      <li class="mylist">我的列表1</li>
      <li class="mylist">我的列表2</li>
      <li class="mylist">我的列表3</li>
      <li class="mylist">我的列表4</li>
      <li class="mylist">我的列表5</li>
      <li class="mylist">我的列表6</li>
    </ul>
    <ul ref="ul2">
      <li class="mylist2">内容1</li>
      <li class="mylist2">内容2</li>
      <li class="mylist2">内容3</li>
      <li class="mylist2">内容4</li>
      <li class="mylist2">内容5</li>
      <li class="mylist2">内容6</li>
    </ul>
  </div>
</template>
<script>
import Sortable from "sortablejs"; // 引入拖拽js
export default {
  data() {
    return {};
  },
  mounted() {
    this.drag1();
  },
  methods: {
    drag1() {
      const el1 = this.$refs.ul1;
      const el2 = this.$refs.ul2;
      var sortable = new Sortable(el1, {
        ghostClass: "dragUlli",
        animation: 150, // 动画时间
        group: {
          name: "shared",
          pull: "clone" // To clone: set pull to 'clone'
        },
        setData: function(dataTransfer) {
          dataTransfer.setData("Text", "");
        }
      });
      var sortable = new Sortable(el2, {
        ghostClass: "dragUlli",
        animation: 150, // 动画时间
        group: {
          name: "shared",
          pull: "clone" // To clone: set pull to 'clone'
        },
        setData: function(dataTransfer) {
          // 为了防止火狐浏览器出bug
          dataTransfer.setData("Text", "");
        }
      });
    }
  }
};
</script>
<style lang="scss">
ul {
  list-style-type: none;
  float: left;
  li {
    padding: 10px 20px;
    cursor: pointer;
  }
  .dragUlli {
    background: skyblue;
  }
}
</style>