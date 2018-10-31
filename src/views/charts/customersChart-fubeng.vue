<template>
    <section>
    <div style="margin-top: 20px"></div>
    <el-row>
          <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
            <el-tab-pane label="Region" name="first">
                <el-col :span="24">
                    <div class="total-txt">Total GPB Customer : 879 </div>
                    <div id="regionChartPie" style="width:80%; height:400px;"></div>
                </el-col>
            </el-tab-pane>
            <el-tab-pane label="Type" name="second">
                <el-col :span="24">
                    <div class="total-txt">Total GPB Customer: 1021</div>
                    <div id="typeChartPie" style="width:80%; height:400px;"></div>
                </el-col>
            </el-tab-pane>
            <el-tab-pane label="Booking Center" name="third">
                <el-col :span="24">
                    <div class="total-txt">Total GPB Customer: 1021</div>
                    <div id="bookingCenterChartPie" style="width:80%; height:400px;"></div>
                </el-col>
            </el-tab-pane>
            <el-tab-pane label="Age" name="fourth">Age pie</el-tab-pane>
          </el-tabs>
    </el-row>
    </section>
</template>
<script>
    import echarts from 'echarts'

  export default {
    data() {
      return {
        activeTab: 'second',
        regionChartPie: null,
        typeChartPie: null

      };
    },
    methods: {
        handleClick(tab, event) {

           console.log(tab, event);

           let _seft = this;
          
            setTimeout(function(){
                _seft.regionChartPie.resize();
                _seft.typeChartPie.resize();
            },20);
          
        },
        regionChart() {
            this.regionChartPie = echarts.init(document.getElementById('regionChartPie'));
            this.regionChartPie.setOption({
                title: {
                    text: 'Customer Distribution By Region',
                    //subtext: 'show getCustomerList.json data',
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
                    data: ['China', 'HongKong', 'Singapore', 'Total'],
                    formatter: function(name) {
                        var index = 0;
                        var clientlabels = ['China','HongKong','Singapore', 'Total'];
                        var clientcounts = [335, 310, 234, 135];
                        clientlabels.forEach((value,i) => {
                            if(value == name){
                                index = i;
                            }
                        });
                        return name + ": " + clientcounts[index] ;
                     }
                },
                series: [
                    {
                        name: 'distribution of data',
                        type: 'pie',
                        roseType : 'radius',
                        radius: ['10%', '70%'],
                        center: ['50%', '60%'],
                        data: [
                            { value: 335, name: 'China' },
                            { value: 310, name: 'HongKong' },
                            { value: 234, name: 'Singapore' },
                        ],
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
        typeChart() {
            this.typeChartPie = echarts.init(document.getElementById('typeChartPie'));
            this.typeChartPie.setOption({
                title: {
                    text: 'Customer Distribution By Type',
                    subtext: 'show getCustomerList.json data',
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
                    data: ['Individual', 'Entity'],
                    formatter: function(name) {
                        var index = 0;
                        var clientlabels = ['Individual','Entity'];
                        var clientcounts = [588, 433];
                        clientlabels.forEach((value,i) => {
                            if(value == name){
                                index = i;
                            }
                        });
                        return name + ": " + clientcounts[index];
                     }
                },
                series: [
                    {
                        name: 'distribution of data',
                        type: 'pie',
                        roseType : 'radius',
                        radius: ['10%', '60%'],
                        center: ['50%', '60%'],
                        data: [
                            { value: 588, name: 'Individual' },
                            { value: 433, name: 'Entity' }
                        ],
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
            this.regionChart();
            this.typeChart();
        }
    },
    mounted() {
        this.drawCharts()
    },
    updated() {
        this.drawCharts()
    }
  };
</script>
<style scoped>
    .chart-container {
        width: 100%;
        float: left;
    }
    /*.chart div {
        height: 400px;
        float: left;
    }*/

    .total-txt{
        color: #484848;
        width:80%;text-align: right;
        margin-left: 15px;
        margin-bottom: 10px;
    }

    .el-col {
        padding: 30px 20px;
    }
</style>