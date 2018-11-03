<template>
    <section class="chart-container">
        <el-row> 
            <el-col :span="16" v-laoding="loading">
                <div id="chartPie" style="width:100%; height:500px;"></div>
            </el-col>
            <el-col :span="8">
                 <el-table
                    size="small" 
                    :data="tableData"
                    style="width: 100%; margin-top: 30%"
                    :show-summary='true'
                    sum-text="Total">
                    <el-table-column
                      prop="date"
                      width="auto">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      width="60">
                    </el-table-column>
                  </el-table>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import echarts from 'echarts'

    export default {
        data() {
            return {
                loading: false,
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
                tableData: [{
                    date: '>20 Years',
                    name: '5000',
                  }, {
                    date: '>10 Years && <20 Years',
                    name: '4567',
                  }, {
                    date: '>5 Years && <10 Years',
                    name: '1300',
                  }, {
                    date: '>1 Years && <5 Years',
                    name: '1980',
                  }, {
                    date: '<1 Years',
                    name: '3000',
                  }
                ]
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
                let _data = []
                let _series = [];

                _seft.tableData.forEach((item, value) => {
                    _data.push(item.date);
                    let temp = {
                        name: item.date,
                        type:'bar',
                        barWidth: '13%', 
                        data:[ item.name ],
                        label: {
                          normal:{
                            show: true,
                            position: 'top',
                          }
                        }
                    }
                    _series.push( temp );
                });

                let option = {
                    title: {
                        text: "Customer Trends Report",
                        // position: "center",
                        left: "center",
                        textStyle:{
                          fontSize: 14,
                          color: '#666'
                        }
                    },
                    grid: {
                        left: '1%',
                        right: '4%',
                        bottom: '20%',
                        containLabel: true
                    },
                    legend: {
                       data : _data,
                       bottom: '20'
                    },
                    xAxis : [
                        {
                            data : ['0 ~ 100 Years'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : _series,
                   
                };

                this.myChart = echarts.init(document.getElementById('chartPie'));

                this.myChart.setOption(option)
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
