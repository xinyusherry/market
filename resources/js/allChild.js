// 月收入
var monthIncome = {
	props: ['sendParams'],
	data: function() {
		return {
      dom: undefined,
      isActive:"1",
      value1: "",
      options: [
          {
              value: "rh",
              label: "融合"
          },
          {
              value: "dk",
              label: "单宽"
          },
          {
              value: "dy",
              label: "单移"
          }
      ],
      value: "rh"
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
                    // text: "同比分析",
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
                  textStyle: {
                    color: "#fff"
                  },
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
      window.addEventListener("resize", () => {
        this.dom.resize();
      });
		}
	},
  template:"#monthIncome"
}
// 网管大厦
var building = {
  template: "#building",
  props: ['headCall'],
  data: function() {
		return {
      dom: undefined
		}
	},
	mounted: function() {
    this.drawLine('monthLine',"#77b653");
    this.drawLine('yearLine',"#a95bcc");
    this.drawPieChart('pieChart');
	},
	methods: {
    goDetail(){
      const param = {
        dialogCompent: "buildingSed",
        dialogTitle: "天津市网管大厦"
      };
      this.headCall(param)
    },
    drawLine(id,color) {
      var thisChart = echarts.init(document.getElementById(id));
      thisChart.setOption({
        grid: {
          containLabel: true,
          top: "20%",
          bottom: "20%",
          left: "1%",
          right: "1%"
        },
        tooltip: {
          // trigger: "axis",
          // axisPointer:{
          //   type:"none"
          // }
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          data: [1,2,3,4,5]
        },
        yAxis: {
          type: "value",
          scale: true,
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            type: "line",
            symbolSize: 10,
            itemStyle: {
              borderWidth: 2
            },
            lineStyle: {
              width: 4
            },
            color: color,
            data: [20,30,25,40,35]
          }
        ]
      });
      window.addEventListener("resize", () => {
        thisChart.resize();
      });
    },
    drawPieChart(id) {
      var thisChart = echarts.init(document.getElementById(id));
      thisChart.clear();
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        title: [
          {
            left: "center",
            text: "",
            textStyle: {
              fontSize: 21,
              color: "#24FAFF"
            }
          }
        ],
        series: [
          {
            name: "产品结构",
            type: "pie",
            radius: ["30%", "70%"],
            avoidLabelOverlap: true,
            color: [
              "#F868AF",
              "#01C6FD",
              "#1749F9",
              "#E5621C",
              "#D70B20",
              "#19C072",
              "#F75C19"
            ],
            label: {
              normal: {
                show: true,
                position: "outside",
                formatter: "{b}\n{d}%",
                // formatter: function(params) {
                //   return (
                //     "{white|" + params.name + "}\n{per|" + params.percent + "%}"
                //   );
                // },
                rich: {
                  white: {
                    color: "#fff",
                    align: "center",
                    fontSize: 14,
                    padding: [21, 0]
                  },
                  per: {
                    color: "#fff",
                    fontSize: 15,
                    align: "center"
                  }
                }
              },
              emphasis: {
                show: true
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: [{name:"xx",value:123},{name:"xx2",value:1234},{name:"xx3",value:223},{name:"xx5",value:433}]
          }
        ]
      };
      thisChart.setOption(option);
      window.addEventListener("resize", () => {
        thisChart.resize();
      });
    },
	},
};
//客户数
var customer = {
	props: ['sendParams'],
	data: function() {
		return {
      dom: undefined,
      isActive:"1",
      value1: "",
      options: [
          {
              value: "rh",
              label: "融合"
          },
          {
              value: "dk",
              label: "单宽"
          },
          {
              value: "dy",
              label: "单移"
          }
      ],
      value: "rh"
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
		draw: function() {
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
                    // text: "同比分析",
                    textStyle: {
                      fontSize: 21,
                      color: "#24FAFF"
                    }
                  }
                ],
                legend: {
                  data: ["2018"],
                  left: "85%",
                  top: 30,
                  textStyle: {
                    color: "#fff"
                  },
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
                series:   [{
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
                  }]
              };
      this.dom.setOption(option);
      window.addEventListener("resize", () => {
        this.dom.resize();
      });
		}
	},
  template:"#customer"
}
//业务
var business = {
	props: ['sendParams'],
	data: function() {
		return {
      dom: undefined,
      isActive:"1",
      value1: "",
      options: [
          {
              value: "rh",
              label: "融合"
          },
          {
              value: "dk",
              label: "单宽"
          },
          {
              value: "dy",
              label: "单移"
          }
      ],
      value: "rh"
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
                    // text: "同比分析",
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
                  textStyle: {
                    color: "#fff"
                  },
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
      window.addEventListener("resize", () => {
        this.dom.resize();
      });
		}
	},
  template:"#business"
}
var buildingSed = {
  template: "#buildingSed",
  props: ['headCall'],
  data() {
    return {
      lists: [
        {floor:"8F",info:[{name:"分光器",num:5},{name:"分光器",num:5},{name:"分光器",num:5},{name:"分光器",num:5},{name:"分光器",num:5}]},
        {floor:"7F",info:[]},
      ]
    };
},
	mounted: function() {
	},
	methods: {
    goBack(){
      const param = {
        dialogCompent: "building",
        dialogTitle: "天津市网管大厦"
      };
      this.headCall(param)
    }
	},
};