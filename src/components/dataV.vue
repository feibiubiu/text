
<template>
  <div class="mod-dataV">
    <div class="box">
      <dv-border-box-1>
        <dv-active-ring-chart :config="config" style="width:300px;height:300px" />
      </dv-border-box-1>
    </div>
    <div class="box2">
      <dv-border-box-11>
        <dv-charts :option="option" />
      </dv-border-box-11>
    </div>
    <div class="box3">
      <dv-border-box-11>
        <dv-capsule-chart :config="config1" style="width:300px;height:200px" />
      </dv-border-box-11>
    </div>
  </div>
</template>
<script>
/**
 * 缺点：这个组件虽然展示很好，但是使用的人太少，遇到bug太少人，并且这个组件有一个缺点，就是
 * 不可以动态更新，就是我一开始写死了数据，我通过settimeout进行修改，图表数据没有修改，视图
 * 没有修改，并且已经使用this.$set()
 */
export default {
  data() {
    return {
      config: {
        data: [
          {
            name: "周口",
            value: 55
          },
          {
            name: "南阳",
            value: 120
          },
          {
            name: "西峡",
            value: 78
          },
          {
            name: "驻马店",
            value: 66
          },
          {
            name: "新乡",
            value: 80
          }
        ]
      },
      option: {
        title: {
          text: "剩余油量表",
          style: {
            fill: "#fff"
          }
        },
        activeTimeGap: 2000,
        series: [
          {
            type: "gauge",
            data: [{ name: "itemA", value: 80 }],
            center: ["50%", "55%"],
            axisLabel: {
              formatter: "{value}%",
              style: {
                fill: "#fff"
              }
            },
            axisTick: {
              style: {
                stroke: "#fff"
              }
            },
            animationCurve: "easeInOutBack"
          }
        ]
      },
      config1: {
        data: [
          {
            name: "南阳",
            value: 167
          },
          {
            name: "周口",
            value: 67
          },
          {
            name: "漯河",
            value: 123
          },
          {
            name: "郑州",
            value: 55
          },
          {
            name: "西峡",
            value: 98
          }
        ]
      }
    };
  },
  mounted() {
    // setInterval(() => {
    //   this.$set(this.config1.data[0],'value',this.config1.data[0].value-3)
    //   console.log(this.config1.data[0].value)
    // }, 2000);
  }
};
</script>
<style lang="scss">
.mod-dataV {
  .box {
    width: 400px;
    height: 400px;
    background: #282c34;
    float: left;
    margin-right: 20px;
  }
  .box2 {
    width: 800px;
    height: 400px;
    background: #282c34;
    float: left;
    margin-right: 20px;
  }
  .box3 {
    width: 400px;
    height: 400px;
    background: #282c34;
    float: left;
		margin-right: 20px;
		position: relative;
		.dv-capsule-chart{
			position: absolute;
			left:50%;
			top:50%;
			transform: translate(-50%,-50%);
		}
  }
}
</style>