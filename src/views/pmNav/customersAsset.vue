<template>
    <section class="chart-container">
        <el-row v-loading="allloading">
            <transition name="el-zoom-in-top">
                <div v-show="show2" class="transition-box">
                    <el-col :span="20">
                      <el-tabs v-model="activeTab" size="small" type="card" @tab-click="handleClick">
                        <el-tab-pane label="Asset Class" name="product"></el-tab-pane>
                        <el-tab-pane label="Region" name="region"></el-tab-pane>
                        <el-tab-pane label="Currency" name="currency"></el-tab-pane>
                        <el-tab-pane label="Industry" name="industry"></el-tab-pane>
                      </el-tabs>
                    </el-col>
                    <el-col :span="20">
                        <el-form ref="form" :model="sizeForm" class="form-box" label-width="120px" size="mini">
                            <el-form-item label="Asset Class:" v-show="activeTab == 'product' ? false : true">
                                <el-checkbox-group v-model="sizeForm.product">
                                    <el-checkbox label="share" border>Equity</el-checkbox>  
                                    <el-checkbox label="bond" border>Fixed Income</el-checkbox>    
                                    <el-checkbox label="fund" border>Structure Product</el-checkbox>       
                                    <el-checkbox label="depoist" border>FX</el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="Region:" v-show="activeTab == 'region' ? false : true">
                                <el-checkbox-group v-model="sizeForm.region" :min=0>
                                    <el-checkbox-button label="CN" name="type">China</el-checkbox-button>
                                    <el-checkbox-button label="HK" name="type">HongKong</el-checkbox-button>
                                    <el-checkbox-button label="SG" name="type">Singapore</el-checkbox-button>
                                    <el-checkbox-button label="UK" name="type">United Kingdom</el-checkbox-button>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="currency:" v-show="activeTab == 'currency' ? false : true">
                                <el-checkbox-group v-model="sizeForm.currency" :min=0>
                                    <el-checkbox-button label="HKD" name="type"></el-checkbox-button>
                                    <el-checkbox-button label="GBP" name="type"></el-checkbox-button>
                                    <el-checkbox-button label="USD" name="type"></el-checkbox-button>
                                    <el-checkbox-button label="SGD" name="type"></el-checkbox-button>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="Industry:" v-show="activeTab == 'industry' ? false : true">
                              <el-checkbox-group v-model="sizeForm.industry">
                                <el-checkbox label="Finance"></el-checkbox>
                                <el-checkbox label="IT"></el-checkbox>
                                <el-checkbox label="Chemistry"></el-checkbox>
                                <el-checkbox label="Patrol"></el-checkbox>
                              </el-checkbox-group>
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
                <div id="assetchartPie"  style="width:80%; height:400px;"></div>
            </el-col>
        </el-row>
    </section>
</template>
<script>
import echarts from 'echarts'
import { getDataUrl } from '@/api/api';

let  tabTxt = ['Asset Class','Region','Currency','Industry'],
     currentTxt = tabTxt[0];

 let  tabList = {
        product: ['share','bond','fund','depoist'],
        productTxt: ['Equity','Fixed Income','Structure Product','FX'],
        region: ['CN','HK','SG','UK'],
        currency: ['HKD','SGD','USD','GBP'],
        industry: ['Finance','IT','Chemistry','Patrol'],
    };     

export default {
    data() {
        return {
            allloading: true,
            show2: true,
            activeTab: 'product',
            chartPie: null,
            sizeForm: {
                name: '',
                product: ['share','bond','fund','depoist'],
                region: ['CN','HK','SG','UK'],
                currency: ['HKD','SGD','USD','GBP'],
                industry: ['Finance','IT','Chemistry','Patrol'],
                delivery: false,
                type: ['I', 'E'], 
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
                case 'product':
                    Vm.sizeForm.product = ['share','bond','fund','depoist'];
                    currentTxt = tabTxt[0];   
                    break;
                case 'region':
                    Vm.sizeForm.region = ['CN','HK','SG','UK'];
                    currentTxt = tabTxt[1]; 
                    break;
                case 'currency':
                    Vm.sizeForm.currency= ['HKD','SGD','USD','GBP'];
                    currentTxt = tabTxt[2];
                    break;
                case 'industry':
                    Vm.sizeForm.industry = ['Finance','IT','Chemistry','Patrol'];
                    currentTxt = tabTxt[3];
                    break;        
                default:
                    break;
           };

        },
        initPage() {

            let Vm = this;

            Vm.allloading = true; // loading start

            getDataUrl('/fos/asset/get',{}).then(data => {
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

                let f_product = Vm.sizeForm.product.includes(item.product),
                    f_region = Vm.sizeForm.region.includes(item.region),
                    f_currency = Vm.sizeForm.currency.includes(item.currency),
                    f_industry = Vm.sizeForm.industry.includes(item.industry);

                return f_product && f_region && f_currency && f_industry;

            });

            Vm.changePieDataJSON( Vm.activeTab );

        },

        changePieDataJSON(tab) {
            let Vm = this;

            let share = Vm.filterType.filter(item => item[tab] == tabList[tab][0]);
            let bond = Vm.filterType.filter(item => item[tab] == tabList[tab][1]);
            let fund = Vm.filterType.filter(item => item[tab] == tabList[tab][2]);
            let deposits = Vm.filterType.filter(item => item[tab]== tabList[tab][3]);

            // console.log(share,bond)


            let shareTotal = 0, bondTotal = 0, fundTotal = 0, depositsTotal = 0;

            share.forEach(item => {
                shareTotal += Number(item.position);
            });
            bond.forEach(item => {
                bondTotal += Number(item.position);
            });
            fund.forEach(item => {
                fundTotal += Number(item.position);
            });
            deposits.forEach(item => {
                depositsTotal += Number(item.position);
            });

            shareTotal = shareTotal.toFixed(2);
            bondTotal = bondTotal.toFixed(2);
            fundTotal = fundTotal.toFixed(2);
            depositsTotal = depositsTotal.toFixed(2);

            // charts data json
            let temp = [
                { "value": 0, "name": tabList[tab][0] },
                { "value": 0, "name": tabList[tab][1] },
                { "value": 0, "name": tabList[tab][2] },
                { "value": 0, "name": tabList[tab][3] }
            ];

            let total = 0;

            let _pieData = temp.filter(item => {

                if (item.name == tabList[tab][0] && share) {
                    item.value = shareTotal;
                    total += Number(shareTotal);
                }
                if (item.name == tabList[tab][1] && bond) {
                    item.value = bondTotal;
                    total += Number(bondTotal);
                }
                if (item.name == tabList[tab][2] && fund) {
                    item.value = fundTotal;
                    total += Number(fundTotal);
                }
                if (item.name == tabList[tab][3] && deposits) {
                    item.value = depositsTotal
                    total += Number(depositsTotal);
                }

                return true;
            });

            if (tab == 'product') {
                _pieData.forEach((item,index) => {
                    item.name = tabList.productTxt[index]
                })
            }

            Vm.pieData =  _pieData;

            Vm.valTotal = total.toFixed(2);;

            function filterRegion(val) {
                return Vm.filterType.filter(item => item.product == val);
            }

            Vm.drawPieChart();
            Vm.allloading = false; // loading start

        },
        drawPieChart() {
            let Vm = this;
            let showTxt = Vm.activeTab == 'product' ? tabList.productTxt : tabList[Vm.activeTab];

            let option = {
                title: {
                    text: 'Asset Distribution By ' + currentTxt,
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
                    // roseType: 'radius',
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
            this.chartPie = echarts.init(document.getElementById('assetchartPie'));
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