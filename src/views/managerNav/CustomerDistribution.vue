<template>
    <section class="chart-container">
        <el-row v-loading="loading">
            <transition name="el-zoom-in-top">
                <div v-show="show2" class="transition-box">
                    <el-col :span="20">
                      <el-tabs v-model="activeName2" size="small" type="card" @tab-click="handleClick">
                        <el-tab-pane label="Region" name="region"></el-tab-pane>
                        <el-tab-pane label="Type" name="type"></el-tab-pane>
                        <el-tab-pane label="Booking Entity" name="booking"></el-tab-pane>
                        <el-tab-pane label="Age" name="age"></el-tab-pane>
                      </el-tabs>
                    </el-col>
                    <el-col :span="20">
                        <el-form ref="form" :model="sizeForm" class="form-box" label-width="120px" size="mini">
                            <el-form-item label="Region:" v-show="activeName2 == 'region' ? false : true">
                                <el-checkbox-group v-model="sizeForm.region" :min=0>
                                    <!-- <el-checkbox-button label="All" name="type"></el-checkbox-button> -->
                                    <el-checkbox-button label="CN" name="type">China</el-checkbox-button>
                                    <el-checkbox-button label="HK" name="type">HongKong</el-checkbox-button>
                                    <el-checkbox-button label="SG" name="type">Singapore</el-checkbox-button>
                                    <el-checkbox-button label="UK" name="type">United Kingdom</el-checkbox-button>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="Type:" v-show="activeName2 == 'type' ? false : true">
                                <el-checkbox-group v-model="sizeForm.type">
                                    <el-checkbox label="I" border>Individual</el-checkbox>
                                    <el-checkbox label="E" border>Entity</el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="Booking Entity:" v-show="activeName2 == 'booking' ? false : true">
                                <el-checkbox-group v-model="sizeForm.bookingEntity" :min=0>
                                    <!-- <el-checkbox-button label="All" name="type"></el-checkbox-button> -->
                                    <el-checkbox-button label="CN" name="type"></el-checkbox-button>
                                    <el-checkbox-button label="HK" name="type"></el-checkbox-button>
                                    <el-checkbox-button label="SG" name="type"></el-checkbox-button>
                                    <el-checkbox-button label="UK" name="type"></el-checkbox-button>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="Age:" v-show="activeName2 == 'age' ? false : true">
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

export default {
    data() {
        return {
            loading: true,
            show2: true,
            activeName2: 'region',
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

    watch: {

    },
    computed: {

    },
    filters: {



    },
    methods: {
        onSubmit() {
            let Vm = this;

        },
        handleClick(tab, event) {
           // console.log(tab, event);
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
                case 'booking':
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

            Vm.changePieDataJSON();


        },
        changePieDataJSON() {
            let Vm = this;

            let CN = Vm.filterType.filter(item => item.region == 'CN');
            let HK = Vm.filterType.filter(item => item.region == 'HK');
            let SG = Vm.filterType.filter(item => item.region == 'SG');
            let UK = Vm.filterType.filter(item => item.region == 'UK');

            // charts data json
            let temp = [
                { "value": 0, "name": "CN" },
                { "value": 0, "name": "HK" },
                { "value": 0, "name": "SG" },
                { "value": 0, "name": "UK" }
            ];

            let total = 0;

            Vm.pieData = temp.filter(item => {

                if (item.name == 'CN' && CN) {
                    item.value = CN.length;
                    total += CN.length;
                }
                if (item.name == 'HK' && HK) {
                    item.value = HK.length;
                    total += HK.length;
                }
                if (item.name == 'SG' && SG) {
                    item.value = SG.length;
                    total += SG.length;
                }
                if (item.name == 'UK' && UK) {
                    item.value = UK.length
                    total += UK.length;
                }

                return true;
            })

            Vm.valTotal = total;

            function filterRegion(val) {
                return Vm.filterType.filter(item => item.region == val);
            }

            Vm.drawPieChart();
            Vm.loading = false; // loading start

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
                    data: ['CN', 'HK', 'SG', 'UK'],
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