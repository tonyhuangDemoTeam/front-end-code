<template>
    <section class="chart-container">
        <el-row> 
            <el-col :span="24">
                <!-- <div class="total-txt">Total GPB Customer : 879 </div> -->
                <div id="chartPie" style="width:100%; height:400px;"></div>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import echarts from 'echarts'

    export default {
        data() {
            return {
                myChart: null,
                show2: true,
                chartPie: null,
                sizeForm: {
                  regionAll: true,
                  name: '',
                  region: [],
                  booking: [],
                  ageValue:[0, 100],
                  ageMark:['',10,20,30,40,50,60,70,80,90],
                  delivery: false,
                  type: '', //Individual
                  resource: '',
                  desc: ''
                },
                valTotal: 0,
                pieData: null,
            }
        },
        watch: {
            sizeForm: {
              deep: true,
              handler(curVal, oldVal) {
                var _region = curVal.region;
                if (_region.length == 0) {
                  _region = ['China', 'HongKong', 'Singapore', 'United Kingdom']
                }
                
                let _pieData = [], _total = 0;
                _region.forEach((item, index)=>{
                    let max = 666,
                        min=333,
                        _val = parseInt(Math.random()*(max-min+1)+min,10);
                    let tempObj = {value: _val, name: item};
                    _total+=_val;
                    _pieData.push(tempObj);
                })
                this.valTotal = _total;
                this.pieData = _pieData;
              },
              immediate: true
            }
        },

        computed: {

        },
        methods: {
            onSubmit() {

                let _seft = this;
                
            },
            regionAllbtn(){
                this.sizeForm.regionAll = !this.sizeForm.regionAll;
            }, 
            drawPieChart() {
                let _seft = this;

                let treeData = {
                   "name": "analytics",
                   "children": [
                    {
                     "name": "cluster",
                     "children": [
                      {"name": "AgglomerativeCluster", "value": 3938},
                      {"name": "CommunityStructure", "value": 3812},
                      {"name": "HierarchicalCluster", "value": 6714},
                      {"name": "MergeEdge", "value": 743}
                     ]
                    },
                    {
                     "name": "graph",
                     "children": [
                      {"name": "BetweennessCentrality", "value": 3534},
                      {"name": "LinkDistance", "value": 5731},
                      {"name": "MaxFlowMinCut", "value": 7840},
                      {"name": "ShortestPaths", "value": 5914},
                      {"name": "SpanningTree", "value": 3416}
                     ]
                    },
                    {
                     "name": "optimization",
                     "children": [
                      {"name": "AspectRatioBanker", "value": 7074}
                     ]
                    }
                   ]
                  };

                this.myChart = echarts.init(document.getElementById('chartPie'));
                let option = {};

                this.myChart.setOption(option);
            },
            drawCharts() {
                this.drawPieChart()
            },
        },

        mounted() {
            this.drawCharts()
        },
        updated() {
            this.drawCharts()
        }
    }
</script>

<style  scoped lang="scss">
    .chart-container {
        width: 100%;
        float: left;
    }
    .showbtn {
        width: 100%;
        height: 20px;
        text-align: center;
        color: #666;
        cursor: pointer;
        border-bottom: 1px solid  #999;
        i {
           
        }
        &:hover {
            i {
                color: #DA0010;
            }
        }
    }
    /*.chart div {
        height: 400px;
        float: left;
    }*/

    .form-box {
        /*color: #a58683;*/
        /*border-bottom: 1px solid #a58683;*/
        // padding-bottom: 15px;

    }
    .slider-mark {
        width: 100%;margin-bottom: 10px;
       
    }
    .slider-mark ul {
       list-style: none;
       margin: 0;
      line-height: 0;padding: 0;
      color: #606266;
    }
    .slider-mark ul li {
       display: inline-block;
       width: 9.88%;
    }

    .total-txt{
        color: #484848;
        width:80%;text-align: right;
        margin-left: 15px;
        /*margin-bottom: 10px;*/
    }

    .el-col {
        padding: 10px 20px;
    }
    .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{
        margin-bottom: 5px !important;
    }
</style>
