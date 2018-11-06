<template>
    <section class="chart-container">
        <el-row>
            <transition name="el-zoom-in-top">
            <div v-show="show2" class="transition-box">
            <el-col :span="20">
                <el-form ref="form" :model="sizeForm" class="form-box" label-width="120px" size="mini">
                    
                    <el-form-item label="Asset Calss:">
                        <el-checkbox-group v-model="sizeForm.asset" :min=0>
                          <el-checkbox-button label="EQ" name="type"></el-checkbox-button>
                          <el-checkbox-button label="BD" name="type"></el-checkbox-button>
                          <el-checkbox-button label="SP" name="type"></el-checkbox-button>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="Industry:" >
                        <el-checkbox-group v-model="sizeForm.booking" :min=0>
                          <el-checkbox-button label="Fim" name="type"></el-checkbox-button>
                          <el-checkbox-button label="Tech" name="type"></el-checkbox-button>
                          <el-checkbox-button label="Chemistng" name="type"></el-checkbox-button>
                          <el-checkbox-button label="HK" name="type"></el-checkbox-button>
                          <el-checkbox-button label="US" name="type"></el-checkbox-button>
                          <el-checkbox-button label="UK" name="type"></el-checkbox-button>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="Region:">
                        <el-checkbox-group v-model="sizeForm.region" :min=0>
                          <el-checkbox-button label="China" name="type"></el-checkbox-button>
                          <el-checkbox-button label="HongKong" name="type"></el-checkbox-button>
                          <el-checkbox-button label="Singapore" name="type"></el-checkbox-button>
                          <el-checkbox-button label="United Kingdom" name="type"></el-checkbox-button>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="Age:">
                        <el-slider
                            v-model="sizeForm.ageValue"
                            range
                            :step="10"
                            show-stops>
                        </el-slider>
                        <div class="slider-mark">
                            <ul>
                                <li v-for="item in sizeForm.ageMark">
                                    {{item}}
                                </li>
                            </ul>
                        </div>
                    </el-form-item>
                    <el-form-item size="large" style="display: none">
                        <el-button type="primary" size='small' @click="onSubmit">Sent</el-button>
                        <el-button size='small'>Reset</el-button>
                    </el-form-item>
                </el-form>
            </el-col> 
            </div>
            </transition>
            <el-col :span="20">
                <div @click="show2 = !show2" class="showbtn">
                     <i class="fa" :class="!show2 ? 'fa-angle-double-down':'fa-angle-double-up'"></i>
                </div>
            </el-col>
            <el-col :span="24">
                <!-- <div class="total-txt">Total GPB Customer : 879 </div> -->
                <div id="chartPie" style="width:80%; height:400px;"></div>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import echarts from 'echarts'

    export default {
        data() {
            return {
                show2: true,
                chartPie: null,
                sizeForm: {
                  name: '',
                  asset: [],
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
                pieData: [],
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
            drawPieChart() {
                let _seft = this;

                this.chartPie = echarts.init(document.getElementById('chartPie'));
                this.chartPie.setOption({
                    title: {
                        text: 'Customer Distribution By Asset',
                        subtext: 'Total GPB Customer : ' + _seft.valTotal,
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        showContent: true,
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',//horizontal
                        left: 'right',
                        data: ['China', 'HongKong', 'Singapore', 'United Kingdom'],
                        formatter: function(name) {
                            let num = '';
                            _seft.pieData.forEach((item,value) => {
                                if(item.name == name){
                                    num = item.value;
                                }
                            });
                            return name + ": " + num;
                         }
                    },
                    series: [
                        {
                            name: 'distribution of data',
                            type: 'pie',
                            roseType : 'radius',
                            radius: ['10%', '70%'],
                            center: ['50%', '60%'],
                            data: _seft.pieData,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                },
                                normal:{ 
                                   label:{ 
                                      show: true, 
                                      formatter: '{b} : {c} ({d}%)' 
                                    }, 
                                    labelLine:{
                                      show: true
                                    } 
                                } 
                            }
                                                
                        }
                    ]
                });
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
                font-size: 24px;
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
        // border-bottom: 1px solid #a58683;
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
