<template>
  <div>
    <el-table
      ref="dragTable"
      :data="list"
      border
      fit
      highlight-current-row
      row-key="date"
      style="width: 100%"
    >
      <el-table-column prop="date1" label="日期" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" align="center"></el-table-column>
      <el-table-column prop="address" label="地址" align="center"></el-table-column>
      <el-table-column prop="date" label="date" align="center">
        <template slot-scope={row}>
          <span>{{row.date | parseTime('{y}-{m}-{d} {h}:{i}')}}</span>
        </template>
      </el-table-column>
    </el-table>
    <dragUl></dragUl>
  </div>
</template>
 <script>
import Sortable from "sortablejs"; // 引入拖拽js
import dragUl from "./dragUl";
export default {
  data() {
    return {
      list: [
        {
          date1: "1111111",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          date:1163998508000
        },
        {
          date1: "22222222222",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          date:1163998508456
        },
        {
          date1: "333333333",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          date:1163998508111
        },
        {
          date1: "44444444444",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          date:1163998508222
        },
        {
          date1: "555555555",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          date:1163998508445
        },
        {
          date1: "6666666666",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          date:1163998508890
        },
        {
          date1: "777777777777",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          date:1163998508433
        },
        {
          date1: "888888888",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          date:1163998508432
        }
      ],
      sortable: null
    };
  },
  components: {
    dragUl
  },
  mounted() {
    this.setSort();
    
  },
  methods: {
    setSort() {
      const el = this.$refs.dragTable.$el.querySelectorAll(
        ".el-table__body-wrapper > table > tbody"
      )[0];
      this.sortable = new Sortable(el, {
        ghostClass: "blue-background-class", // Class name for the drop placeholder,// 抓取的元素的类名，简单来说就是抓取元素的时候给他加一个类名blue-background-class
        setData: function(dataTransfer) {
          console.log("dataTransfer", dataTransfer);
          dataTransfer.setData("Text", "");
        },
        onEnd: evt => {
          
          const targetRow = this.list.splice(evt.oldIndex, 1)[0];
          this.list.splice(evt.newIndex, 0, targetRow);
        }
      });
    }
  }
};
</script>
<style lang="scss" >
.blue-background-class {
  background: skyblue !important;
}
</style>