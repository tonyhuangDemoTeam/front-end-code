<template>
    <section class="chart-container">
        <el-row v-loading="loading">
            <transition name="el-zoom-in-top">
                <div v-show="show2" class="transition-box">
                    <el-col :span="20">
                      <el-tabs v-model="activeTab" size="small" type="card" @tab-click="handleClick">
                        <el-tab-pane label="Region" name="region"></el-tab-pane>
                        <el-tab-pane label="Type" name="type"></el-tab-pane>
                        <el-tab-pane label="Booking Entity" name="bookingEntity"></el-tab-pane>
                        <!-- <el-tab-pane label="Age" name="age"></el-tab-pane> -->
                      </el-tabs>
                    </el-col>
                    <el-col :span="20">
                        <el-form ref="form" :model="sizeForm" class="form-box" label-width="120px" size="mini">
                            <el-form-item label="Region:" v-show="activeTab == 'region' ? false : true">
                                <el-checkbox-group v-model="sizeForm.region" :min=0>
                                    <!-- <el-checkbox-button label="All" name="type"></el-checkbox-button> -->
                                    <el-checkbox-button label="CN" name="type">China</el-checkbox-button>
                                    <el-checkbox-button label="HK" name="type">HongKong</el-checkbox-button>
                                    <el-checkbox-button label="SG" name="type">Singapore</el-checkbox-button>
                                    <el-checkbox-button label="UK" name="type">United Kingdom</el-checkbox-button>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="Type:" v-show="activeTab == 'type' ? false : true">
                                <el-checkbox-group v-model="sizeForm.type">
                                    <el-checkbox label="I" border>Individual</el-checkbox>
                                    <el-checkbox label="E" border>Entity</el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="Booking Entity:" v-show="activeTab == 'bookingEntity' ? false : true">
                                <el-checkbox-group v-model="sizeForm.bookingEntity" :min=0>
                                    <!-- <el-checkbox-button label="All" name="type"></el-checkbox-button> -->
                                    <el-checkbox-button label="CN" name="type"></el-checkbox-button>
                                    <el-checkbox-button label="HK" name="type"></el-checkbox-button>
                                    <el-checkbox-button label="SG" name="type"></el-checkbox-button>
                                    <el-checkbox-button label="UK" name="type"></el-checkbox-button>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="Age:" v-show="activeTab == 'age' ? false : true">
                                <el-slider v-model="sizeForm.ageValue" range :step="10" show-stops>
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
                <div id="cuschartPie" style="width:80%; height:400px;"></div>
            </el-col>
        </el-row>
    </section>
</template>
<script>
import echarts from 'echarts'
import { getDataUrl } from '@/api/api';

let  tabTxt = ['Region', 'Type', 'Booking Entity', 'Age'],
     currentTxt = tabTxt[0];

 let  tabList = {
        region: ['CN', 'HK', 'SG', 'UK'],
        regionTxt: ['China', 'HongKong', 'Singapore', 'United Kingdom'],
        bookingEntity: ['CN', 'HK', 'SG', 'UK'],
        type: ['I', 'E'], //Individual
        typeTxt: ['Individual', 'Entity'], //Individual
    };
let showTxt;         

export default {
    data() {
        return {
            loading: true,
            show2: true,
            activeTab: 'region',
            chartPie: null,
            sizeForm: {
                name: '',
                region: ['CN', 'HK', 'SG', 'UK'],
                bookingEntity: ['CN', 'HK', 'SG', 'UK'],
                ageValue: [0, 100],
                ageMark: ['', 10, 20, 30, 40, 50, 60, 70, 80, 90],
                delivery: false,
                type: ['I', 'E'], //Individual
                resource: '',
                desc: ''
            },
            allType: [],
            filterType: [],
            valTotal: 0,
            pieData: [],
        }
    },
    watch: {},
    computed: {},
    filters: {},
    methods: {
        onSubmit() {
            let Vm = this;
        },
        handleClick(tab, event) {
           let Vm = this, tabName = tab.name;
           switch(tabName){
                case 'region':
                    Vm.sizeForm.region = ['CN', 'HK', 'SG', 'UK'];
                    currentTxt = tabTxt[0];   
                    break;
                case 'type':
                    Vm.sizeForm.type = ['I', 'E'];
                    currentTxt = tabTxt[1]; 
                    break;
                case 'bookingEntity':
                    Vm.sizeForm.bookingEntity= ['CN', 'HK', 'SG', 'UK'];
                    currentTxt = tabTxt[2];
                    break;
                case 'age':
                    Vm.sizeForm.ageValue = [0, 100];
                    currentTxt = tabTxt[3];
                    break;        
                default:
                    break;

           };
        },
        initPage() {

            let Vm = this;

            Vm.loading = true; // loading start

            getDataUrl('/fos/cust/get', { type: 'all' }).then(data => {

                Vm.allType = Vm.filterType = data.data;
                Vm.filter(); 

            }).catch((data) => {
                console.log(data);
                return false;
            });
        },
        filter() {
            let Vm = this;

            Vm.filterType = Vm.allType.filter(item => {

                let f_region = Vm.sizeForm.region.includes(item.region),
                    f_type = Vm.sizeForm.type.includes(item.type),
                    f_bookingEntity = Vm.sizeForm.bookingEntity.includes(item.bookingEntity),
                    f_age = item.age >= Vm.sizeForm.ageValue[0] && item.age <= Vm.sizeForm.ageValue[1];

                return f_region && f_type && f_bookingEntity && f_age;

            });

         
            return Vm.changePieDataJSON( Vm.activeTab );
            
        },
        changePieDataJSON( tab ) {

            let Vm = this, 
                total = 0,
                currentTab = {},
                chartsData = []; 

            currentTab = {
                tag: tabList[tab],
                allType: [],
                length: tabList[tab].length
            }    

            for (var i = 0; i < currentTab.length; i++) {

                let _tag = currentTab.tag[i];

                let _filterTab = Vm.filterType.filter(item => item[tab] == _tag);
                currentTab.allType.push(_filterTab);

                let cell = {
                    "value": _filterTab.length, 
                    "name": _tag
                }

                chartsData.push(cell);

                total += _filterTab.length;
            }

            showTxt = currentTab.tag; // ['','',''] type Array

            if (tab == 'region') {
                chartsData.forEach((item,index) => {
                    item.name = tabList.regionTxt[index]
                })
                showTxt = tabList.regionTxt;
            }

            if (tab == 'type') {
                chartsData.forEach((item,index) => {
                    item.name = tabList.typeTxt[index]
                })
                showTxt =  tabList.typeTxt;
            } 

            Vm.pieData = chartsData;
            Vm.valTotal = total.toFixed(2);

            Vm.loading = false; // loading end

            return Vm.drawPieChart();

        },
        drawPieChart() {
            let Vm = this;
            let option = {
                title: {
                    text: 'Customer Distribution By ' + currentTxt,
                    subtext: 'Total GPB Customer : ' + Vm.valTotal,
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    showContent: true,
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical', //horizontal
                    left: 'right',
                    data: showTxt,
                    formatter: function(name) {
                        let num = '';
                        Vm.pieData.forEach((item, value) => {
                            if (item.name == name) {
                                num = item.value;
                            }
                        });
                        return name + ": " + num;
                    }
                },
                series: [{
                    name: 'distribution of data',
                    type: 'pie',
                    roseType: 'radius',
                    radius: ['10%', '70%'],
                    center: ['50%', '60%'],
                    data: Vm.pieData,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        normal: {
                            label: {
                                show: true,
                                formatter: '{b} : {c} ({d}%)'
                            },
                            labelLine: {
                                show: true
                            }
                        }
                    }

                }]
            }

            this.chartPie = echarts.init(document.getElementById('cuschartPie'));
            this.chartPie.setOption(option);
        },
        drawCharts() {
            this.drawPieChart()
        },
    },

    mounted() {
        this.initPage()
    },
    updated() {
        this.filter()
    }
}
</script>
<style scoped lang="scss">
.chart-container {
    width: 100%;
    float: left;
}

.showbtn {
    width: 100%;
    height: 20px;
    text-align: center;
    color: #999;
    cursor: pointer;
    border-bottom: 1px solid #e4e7ed;

    i {}

    &:hover {
        i {
            font-size: 24px;
            color: #DA0010;
        }
    }
}

.slider-mark {
    width: 100%;
    margin-bottom: 10px;

}

.slider-mark ul {
    list-style: none;
    margin: 0;
    line-height: 0;
    padding: 0;
    color: #606266;
}

.slider-mark ul li {
    display: inline-block;
    width: 9.88%;
}

.total-txt {
    color: #484848;
    width: 80%;
    text-align: right;
    margin-left: 15px;
    /*margin-bottom: 10px;*/
}

.el-col {
    padding: 10px 20px;
}

.el-form-item--mini.el-form-item,
.el-form-item--small.el-form-item {
    margin-bottom: 5px !important;
}
</style>