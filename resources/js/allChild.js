// 月收入
var monthIncome = {
	props: ['sendParams'],
	data: function() {
		return {
      dom: undefined,
      isActive:"1",
      value1: "2016",
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
                  color: "#30C8FD",
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
                  color: "#ECC223",
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
  props: ['send-params'],
  data: function() {
		return {
      dom:undefined,
      basicData:{}
		}
  },
	mounted: function() {
    var self = this;
    $.ajax({
      type:"GET", 
      url:"http://10.26.14.25:8087/microservice-ui/jlscMap/getDataForOneInfo",
      data: {
        JsonParam: JSON.stringify({buildCode:this.sendParams})
      },
      success:function(ret){
        var data = JSON.parse(ret);
        console.log(data);
        if(data.resultData.length>0){
          self.basicData = data.resultData[0];
        }
        self.drawLine('monthLine',"#77b653",data.resultNetwork.ACCT_MONTH,data.resultNetwork.OWE_FEE_M);
        self.drawLine('yearLine',"#a95bcc",data.resultNetwork.ACCT_MONTH,data.resultNetwork.OWE_FEE_Y);
      }
    });
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
    drawLine(id,color,xAxis,valueArr) {
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
          data: xAxis
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
            data: valueArr
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
            name: "FTTH资源",
            type: "pie",
            radius: ["30%", "70%"],
            avoidLabelOverlap: true,
            color: [
              "#9F57EB",
              "#4F7AED",
              "#5AE9A9",
              "#71D9F4",
              "#F2D464",
              "#EA9B58",
              "#ED544C"
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
                    name: "客户数(户)",
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
                    color: "#2CEB99",
                    itemStyle: {
                        normal: {
                          barBorderRadius: [10, 10, 0, 0],
                          label:{
                            show: true, //开启显示
								          	position: 'top', //在上方显示
                          }
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
      isActive:'1',
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
    this.draw();
	},
	// watch: {
	// 	echartsData: function(newl, old){
	// 		this.draw(newl);
	// 	}
	// },
	methods: {
		draw: function() {
            var series = [
                {
                  name: "本月",
                  type: "bar",
                  data: [100, 200, 300, 400, 500, 100, 200, 300, 400, 500, 100, 200, 300],
                  barWidth: 10, //柱子宽度
                  barGap: '10%', //柱子之间间距
                  color: "#56E7AA",
                  itemStyle: {
                      normal: {
                        barBorderRadius: [10, 10, 0, 0]
                      }
                    }
                },
                {
                  name: "去年同期",
                  type: "bar",
                  data: [500, 400, 300, 200, 100, 500, 400, 300, 200, 100, 500, 400, 300],
                  barWidth: 10,
                  barGap: '10%',
                  color: "#EC504C",
                  itemStyle: {
                      normal: {
                        barBorderRadius: [10, 10, 0, 0]
                      }
                    }
                }
              ];
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
                  data: ["本月", "去年同期"],
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
                      interval:0,
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
                    // name: "完成值(元)",
                    // nameTextStyle: {
                    //   color: "#24FAFF",
                    //   fontSize: 14
                    // },
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
        {floor:"8F",info:[],up:true},
        {floor:"7F",info:[{name:"分光器",num:5},{name:"占用端口",num:5},{name:"FTTH端口",num:5},{name:"楼层终端盒",num:5},{name:"用户终端盒",num:5}],up:true},
        {floor:"6F",info:[],up:true},
        {floor:"5F",info:[],up:true},
        {floor:"4F",info:[],up:true},
        {floor:"3F",info:[],up:true},
        {floor:"2F",info:[],up:true},
        {floor:"1F",info:[],split:true,up:true},
        {floor:"B1",info:[{name:"楼内光交",num:5},{name:"楼外光交",num:5}],up:false,split:false}
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