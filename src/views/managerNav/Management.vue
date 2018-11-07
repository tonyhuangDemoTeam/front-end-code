<template>
    <section class="chart-container">
        <el-row>
            <el-col :span="24" v-loading="chartLoading">
                <vo-basic :data="chartData" :pan="true"  nodeContent="content" :toggleCollapse="false"></vo-basic>
            </el-col>
        </el-row>
    </section>
</template>
<script>
import { VoBasic } from 'vue-orgchart'

import { getManagerOSList } from '@/api/api';

export default {
    components: { VoBasic },
    data() {
        return {
            chartData: null,
            tempData: null,
            chartLoading: true,
        }
    },
    watch: {

    },
    computed: {

    },
    methods: {
        getChartData(){
            this.chartLoading = true;
            getManagerOSList({type: 'arch'}).then((res) => {
                this.tempData = res.data;
                this.mapJson(this.tempData);
            });
        },
        mapJson(json){

            json = JSON.parse(JSON.stringify(json).replaceAll('entries','children'))
      
            objForEeach(json);

            function objForEeach(json){
                curry(json);
                for (var key in json) {
                    if (Array.isArray(json[key]) && json[key].length !== 0) {
                        json[key].forEach(item => {
                            objForEeach(item);
                        });
                    }
                }
            }

            // 'AUM: $55bn<br\>Client#: 100,000',
            function curry(obj){
                obj['content'] = 'AUM: ' + obj['clients'] +'<br\>Client#:'+ obj['position'];
            }

          this.chartLoading = false;

          return this.chartData = this.tempData = json;
        
        },

    },
    created() {
         String.prototype.replaceAll = function (FindText, RepText) {
              let regExp = new RegExp(FindText,'g');
              return this.replace(regExp, RepText);
          };
    },
    mounted() {
        this.getChartData();

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