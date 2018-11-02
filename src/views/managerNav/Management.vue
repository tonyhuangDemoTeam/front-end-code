<template>
    <section class="chart-container">
        <el-row>
            <el-col :span="24">
                <vo-basic :data="chartData" nodeContent="title" :toggleCollapse="false"></vo-basic>
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
                ageValue: [0, 100],
                ageMark: ['', 10, 20, 30, 40, 50, 60, 70, 80, 90],
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
    created() {
        this.chartData = {
            'name': 'GPB',
            'title': 'AUM: $55bn<br\>Client#: 100,000',
            'className': 'manager',
            'children': [ {
                    'name': 'HK',
                    'title': 'AUM: $45bn<br\>Client#: 70,000',
                    'className': 'product-dept',
                    'children': [{
                        'name': 'HK Team1',
                        'title': 'AUM: $45bn<br\>Client#: 70,000',
                        'className': 'rd-dept',
                        'children': [{
                            'name': 'HK RM1',
                            'title': 'AUM: $45bn<br\>Client#: 70,000',
                            'className': 'frontend1'
                        }, {
                            'name': 'HK RM2',
                            'title': 'AUM: $45bn<br\>Client#: 70,000',
                            'className': 'frontend1'
                        }]
                    },{
                      'name': 'HK Team2',
                      'title': 'AUM: $45bn<br\>Client#: 70,000',
                      'className': 'rd-dept',
                    }]
            },{
                'name': 'SG',
                'title': 'AUM: $45bn<br\>Client#: 70,000',
                'className': 'middle-level',
                'children': [{
                    'name': 'SG Team1',
                    'title': 'AUM: $45bn<br\>Client#: 70,000',
                    'className': 'rd-dept'
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
<style lang="scss">
.orgchart .node.focused, .orgchart .node:hover {
    background-color: #da001012 !important;
}
.orgchart .node .title{
  font-size: 14px !important;
  background-color: #DA0010 !important;
      height: 24px !important;
    line-height: 24px !important;
}
.orgchart .node .content{
  height: 40px !important;;
  border: 1px solid #DA0010 !important;;
}

</style>