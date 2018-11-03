<template>
    <section class="chart-container">
        <el-row>
            <el-col :span="24" v-loading="chartLoading">
                <keep-alive>
                    <vo-basic :data="chartData" nodeContent="title" :toggleCollapse="false"></vo-basic>
                </keep-alive>
            </el-col>
        </el-row>
    </section>
</template>
<script>
import { VoBasic } from 'vue-orgchart'

import { getManagerOSList } from '../../api/api';

export default {
    components: { VoBasic },
    data() {
        return {
            chartData: null,
            chartLoading: false,
        }
    },
    watch: {

    },
    computed: {

    },
    methods: {
        getChartData(){

            this.chartLoading = true;
            getManagerOSList().then((res) => {
                this.chartData = res.data.list;
                this.chartLoading = false;
            });

        }
    },
    created() {
        this.getChartData();
    },
    mounted() {

    },
    updated() {

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