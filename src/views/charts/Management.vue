<template>
    <section class="chart-container">
        <el-row> 
            <el-col :span="24">
                <vo-basic :data="chartData" nodeContent="title"></vo-basic>
               <!-- // 'data':datascource,'nodeContent':'title' -->
                <!-- <div class="total-txt">Total GPB Customer : 879 </div> -->
                <!-- <div id="chart-container" style="width:100%; height:400px;"></div> -->
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import { VoBasic } from 'vue-orgchart'

    export default {
        components: { VoBasic },
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
                chartData: null,
                valTotal: 0,
                pieData: null,
            }
        },
        watch: {

        },
        computed: {

        },
        methods: {
            onSubmit() {
                let _seft = this;
                
            },
            drawPieChart() {
                let _seft = this;
               
            },
            drawCharts() {
                this.drawPieChart()
            },
        },
        created () {
            this.chartData = {
            'name': 'Lao Lao',
            'title': 'general manager',
            'children': [{
                'name': 'Bo Miao',
                'title': 'department manager',
                'className': 'middle-level',
                'children': [{
                    'name': 'Li Jing',
                    'title': 'senior engineer',
                    'className': 'product-dept'
                }, {
                    'name': 'Li Xin',
                    'title': 'senior engineer',
                    'className': 'product-dept',
                    'children': [{
                        'name': 'To To',
                        'title': 'engineer',
                        'className': 'pipeline1'
                    }, {
                        'name': 'Fei Fei',
                        'title': 'engineer',
                        'className': 'pipeline1'
                    }, {
                        'name': 'Xuan Xuan',
                        'title': 'engineer',
                        'className': 'pipeline1'
                    }]
                }]
            }, {
                'name': 'Su Miao',
                'title': 'department manager',
                'className': 'middle-level',
                'children': [{
                    'name': 'Pang Pang',
                    'title': 'senior engineer',
                    'className': 'rd-dept'
                }, {
                    'name': 'Hei Hei',
                    'title': 'senior engineer',
                    'className': 'rd-dept',
                    'children': [{
                        'name': 'Xiang Xiang',
                        'title': 'UE engineer',
                        'className': 'frontend1'
                    }, {
                        'name': 'Dan Dan',
                        'title': 'engineer',
                        'className': 'frontend1'
                    }, {
                        'name': 'Zai Zai',
                        'title': 'engineer',
                        'className': 'frontend1'
                    }]
                }]
            }]
        }
        },
        mounted() {
            this.drawCharts();
            
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
