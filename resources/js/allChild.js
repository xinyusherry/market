Vue.component('bar-chart', {
	props: [],
	data: function() {
		return {
			dom: undefined
		}
	},
	mounted: function() {
		this.dom = echarts.init(this.$refs.echartsRef);
		this.draw(true);
		
	},
	// watch: {
	// 	echartsData: function(newl, old){
	// 		this.draw(newl);
	// 	}
	// },
	methods: {
		draw: function(isDubBar) {
            var series = isDubBar? [
                {
                  name: "2018",
                  type: "bar",
                  data: [100, 200, 300, 400, 500, 100, 200, 300, 400, 500, 100, 200, 300],
                  barWidth: 10, //柱子宽度
                  barGap: '10%', //柱子之间间距
                  color: "#3AA3F3",
                  itemStyle: {
                      normal: {
                        barBorderRadius: [10, 10, 0, 0]
                      }
                    }
                },
                {
                  name: "2019",
                  type: "bar",
                  data: [500, 400, 300, 200, 100, 500, 400, 300, 200, 100, 500, 400, 300],
                  barWidth: 10,
                  barGap: '10%',
                  color: "#F868AF",
                  itemStyle: {
                      normal: {
                        barBorderRadius: [10, 10, 0, 0]
                      }
                    }
                }
              ]:[
                {
                  name: "2018",
                  type: "bar",
                  data: [100, 200, 300, 400, 500, 100, 200, 300, 400, 500, 100, 200, 300],
                  barWidth: 10, //柱子宽度
                  barGap: '10%', //柱子之间间距
                  color: "#3AA3F3",
                  itemStyle: {
                      normal: {
                        barBorderRadius: [10, 10, 0, 0]
                      }
                    }
                }];
			var option = {
                tooltip: {
                  trigger: "axis",
                  axisPointer: {
                    type: "shadow"
                  }
                },
                title: [
                  {
                    left: "center",
                    text: "同比分析",
                    textStyle: {
                      fontSize: 21,
                      color: "#24FAFF"
                    }
                  }
                ],
                legend: {
                  data: ["2018", "2019"],
                  left: "85%",
                  top: 30,
                //   textStyle: {
                //     color: "#fff"
                //   },
                  itemWidth: 30,
                  itemHeight: 10,
                  itemGap: 35
                },
                grid: {
                  left: "3%",
                  right: "4%",
                  bottom: "3%",
                  containLabel: true
                },
                xAxis: [
                  {
                    type: "category",
                    data:[
                        "12月",
                        "1月",
                        "2月",
                        "3月",
                        "4月",
                        "5月",
                        "6月",
                        "7月",
                        "8月",
                        "9月",
                        "10月",
                        "11月",
                        "12月"
                      ],
                    axisLine: {
                      show: true,
                      lineStyle: {
                        color: "#3E6BCE",
                        width: 2,
                        type: "solid"
                      }
                    },
                    axisTick: {
                      show: false
                    },
                    axisLabel: {
                      show: true,
                      textStyle: {
                        color: "#2FD6D0"
                      }
                    }
                  }
                ],
                yAxis: [
                  {
                    type: "value",
                    axisTick: {
                      show: false
                    },
                    axisLine: {
                      show: true,
                      lineStyle: {
                        color: "#3E6BCE",
                        width: 2,
                        type: "solid"
                      }
                    },
                    axisLabel: {
                      show: true,
                      textStyle: {
                        color: "#2FD6D0"
                      }
                    },
                    name: "完成值(元)",
                    nameTextStyle: {
                      color: "#24FAFF",
                      fontSize: 14
                    },
                    splitLine: {
                      show: false
                    }
                  }
                ],
                series: series
              };
			this.dom.setOption(option);
		}
	},
	template: "<div ref='echartsRef' style='height:400px'></div>"
});