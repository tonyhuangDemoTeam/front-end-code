<template>
	<section>
		<el-row>
		<el-col :span="24">
			<div class="cp-head-info">
				<ul style="width: 60%; float: left;">
					<li>
						<span class="span1">Customer Number:</span>
						<span class="span2">{{cusAccinfo.customerNumber}}</span>
					</li>
					<li>
						<span class="span1">Account Number:</span>
						<span class="span2">{{cusAccinfo.accountNumber}}</span>
					</li>
					<li>
						<span class="span1">Account Name:</span>
						<span class="span2">{{cusAccinfo.accountName}}</span>
					</li>
				</ul>
				<div style="width: 30%; float: right;">
					<el-button size="small" type="primary" style="float: right;margin: 25px;">Save As PDF</el-button>
				</div>
			</div>
			
		</el-col>

		<el-col :span="24">
              <div class="cp-table-txt">
              	<p>Equity:</p>
              </div>
			  <el-table 
			  	:data="equityTable" 
			  	show-summary 
                sum-text="Total" 
                size="small"
                class='cp-table'
                :header-cell-style="tableHeaderColor"
			  	style="width: 100%">
			    <el-table-column prop="name" label="Product Name">
			    </el-table-column>
			    <el-table-column prop="quantity" label="Quantity">
			    </el-table-column>
			    <el-table-column prop="amount" label="Total Amount(USD)">
			    </el-table-column>
			    <el-table-column prop="marketPrice" label="Market Price">
			    </el-table-column>
			    <el-table-column prop="cost" label="Average Cost">
			    </el-table-column>
			    <el-table-column prop="averagePL" label="P&L(USD)">
			    </el-table-column>
			    <el-table-column prop="yesterdayPL" width='180' label="Last Biz Date P&L(USD)">
			    </el-table-column>
			  </el-table>
		</el-col>

		<el-col :span="24">
              <div class="cp-table-txt">
              	<p>Fixed Income:</p>
              </div>
			  <el-table 
			  	:data="fixedTable" 
			  	show-summary 
                sum-text="Total" 
                class='cp-table'
                size="small"
                :header-cell-style="tableHeaderColor"
			  	style="width: 100%">
			    <el-table-column prop="name" label="Product Name">
			    </el-table-column>
			    <el-table-column prop="quantity" label="Quantity">
			    </el-table-column>
			    <el-table-column prop="amount" label="Total Amount(USD)">
			    </el-table-column>
			    <el-table-column prop="marketPrice" label="Market Price">
			    </el-table-column>
			    <el-table-column prop="cost" label="Average Cost">
			    </el-table-column>
			    <el-table-column prop="averagePL" label="P&L(USD)">
			    </el-table-column>
			    <el-table-column prop="yesterdayPL" width='180' label="Last Biz Date P&L(USD)">
			    </el-table-column>
			  </el-table>
		</el-col>

	    <el-col :span="24">
              <div class="cp-table-txt">
              	<p>FX:</p>
              </div>
			  <el-table 
			  	:data="fxTable" 
			  	show-summary 
                sum-text="Total" 
                class='cp-table'
                size="small"
                :header-cell-style="tableHeaderColor"
			  	style="width: 100%">
			    <el-table-column prop="name" label="Product Name">
			    </el-table-column>
			    <el-table-column prop="quantity" label="Quantity">
			    </el-table-column>
			    <el-table-column prop="amount" label="Total Amount(USD)">
			    </el-table-column>
			    <el-table-column prop="marketPrice" label="Market Price">
			    </el-table-column>
			    <el-table-column prop="cost" label="Average Cost">
			    </el-table-column>
			    <el-table-column prop="averagePL" label="P&L(USD)">
			    </el-table-column>
			    <el-table-column prop="yesterdayPL" width='180' label="Last Biz Date P&L(USD)">
			    </el-table-column>
			  </el-table>
		</el-col>

		<el-col :span="24">
              <div class="cp-table-txt">
              	<p>Structure Product:</p>
              </div>
			  <el-table 
			  	:data="structureTable" 
			  	show-summary 
                sum-text="Total" 
                class='cp-table'
                size="small"
                :header-cell-style="tableHeaderColor"
			  	style="width: 100%">
			    <el-table-column prop="name" label="Product Name">
			    </el-table-column>
			    <el-table-column prop="quantity" label="Quantity">
			    </el-table-column>
			    <el-table-column prop="amount" label="Total Amount(USD)">
			    </el-table-column>
			    <el-table-column prop="marketPrice" label="Market Price">
			    </el-table-column>
			    <el-table-column prop="cost" label="Average Cost">
			    </el-table-column>
			    <el-table-column prop="averagePL" label="P&L(USD)">
			    </el-table-column>
			    <el-table-column prop="yesterdayPL" width='180' label="Last Biz Date P&L(USD)">
			    </el-table-column>
			  </el-table>
		</el-col>

		<el-col :span="24">
              <div class="cp-table-txt">
              	<p>Portfolio Summary:</p>
              </div>
			  <el-table 
			  	:data="tableData4" 
                class='cp-table'
                size="small"
                :header-cell-style="tableHeaderColor"
			  	style="width: 100%">
			    <el-table-column prop="name" label="Equity">
			    </el-table-column>
			    <el-table-column prop="quantity" label="Fixed Income">
			    </el-table-column>
			    <el-table-column prop="totalAmount" label="FX">
			    </el-table-column>
			    <el-table-column prop="marketPrice" label="Structure Product">
			    </el-table-column>
			    <el-table-column prop="averageCost" label="Total Value">
			    </el-table-column>
			    <el-table-column prop="pl" label="Total P&L">
			    </el-table-column>
			    <el-table-column prop="lbdp" width='180' label="Total P&L Last Biz Date">
			    </el-table-column>
			  </el-table>
		</el-col>
		</el-row>
		<el-row>
			<el-col :span="12">
                <div id="chartPie1" style="width:80%; height:400px;"></div>
			</el-col>	
			<el-col :span="12">
                <div id="chartPie2" style="width:80%; height:400px;"></div>
			</el-col>	
		</el-row>

	</section>
</template>
<script>
    import echarts from 'echarts'
	import {getDataUrl, getUserList } from '@/api/api';

	export default {
		data() {
			return {
				chartPie1: null,
				chartPie2: null,
				cusAccinfo: null,
				equityTable: [],
				fixedTable: [],
				fxTable: [],
				structureTable: [],
				tableData4: [{
					name:'50000',	
					quantity:80000,	
					totalAmount:5084000, 
					marketPrice:63.55,	
					averageCost:60.05,
					pl: '-165.5380002',	
					lbdp: '-165.5380002'
				}],
			}
		},
		methods: {

			initPage(){

				let Vm = this;

				let customerId = this.$route.params.customerId, 
					accountId = this.$route.params.accountId;

				let info = Vm.getAccountInfo();
				
				Vm.cusAccinfo = info.customerNumber ? Vm.getAccountInfo() : {
					customerNumber: customerId,
					accountName: 'acct ' + accountId,
					accountNumber: accountId
				};
			
				getDataUrl('/fos/acct/get', {type: 'position', cust: customerId, acct: accountId}).then(data => {
                  let list = data.data;

                  Vm.equityTable = list.fund;
                  Vm.fixedTable = list.share;
                  Vm.fxTable = list.bond;
                  Vm.structureTable = list.deposits;

				}).catch((data) => {
					console.log(data);
				});

			},

			getSummaries(param) {
		        const { columns, data } = param;
		        const sums = [];
		        columns.forEach((column, index) => {
		          if (index === 0) {
		            sums[index] = 'Total';
		            return;
		          }
		          const values = data.map(item => Number(item[column.property]));
		          if (!values.every(value => isNaN(value))) {
		            sums[index] = values.reduce((prev, curr) => {
		              const value = Number(curr);
		              if (!isNaN(value)) {
		                return prev + curr;
		              } else {
		                return prev;
		              }
		            }, 0);
		            sums[index] += ' $';
		          } else {
		            sums[index] = 'N/A';
		          }
		        });

		        return sums;
		    },
		    // 修改table header的背景色
			tableHeaderColor({ row, column, rowIndex, columnIndex }) {
			    if (rowIndex === 0) {
			        return 'background-color: #F7F6Fd;color: #666;font-weight: bold;'
			    }
			 }, 
			 drawPieChart() {
                let _seft = this;

                this.chartPie1 = echarts.init(document.getElementById('chartPie1'));
                this.chartPie1.setOption({
                    title: {
                        text: 'Asset Allocation(USD)',
                        // subtext: 'Total GPB Customer : ' + _seft.valTotal,
                        x: 'center'
                    },
                    // tooltip: {
                    //     trigger: 'item',
                    //     showContent: true,
                    //     formatter: "{a} <br/>{b} : {c} ({d}%)"
                    // },
                    legend: {
                        // orient: 'vertical',//horizontal
                        // left: 'bottom',
                        bottom: '20',
                        data: ['Equity','Fixed Income','FX','Structure Product'],
                    },
                    series: [
                        {
                            // name: 'distribution of data',
                            type: 'pie',
                            radius : '40%',
                            // roseType : 'radius',
                            // radius: ['10%', '70%'],
                            // center: ['50%', '50%'],
                            data: [
                             	{name: 'Equity', value: 300},
                             	{name: 'Fixed Income', value: 400},
                             	{name: 'FX', value: 700},
                             	{name: 'Structure Product', value: 300},
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
                                      formatter: '{c} ({d}%)' 
                                    }, 
                                    labelLine:{
                                      show: true
                                    } 
                                } 
                            }
                                                
                        }
                    ]
                });

                this.chartPie2 = echarts.init(document.getElementById('chartPie2'));
                this.chartPie2.setOption({
                    title: {
                        text: 'By Currency',
                        // subtext: 'Total GPB Customer : ' + _seft.valTotal,
                        x: 'center'
                    },
                    // tooltip: {
                    //     trigger: 'item',
                    //     showContent: true,
                    //     formatter: "{a} <br/>{b} : {c} ({d}%)"
                    // },
                    legend: {
                        // orient: 'vertical',//horizontal
                        // left: 'bottom',
                        bottom: '20',
                        data: ['Equity','Fixed Income','FX','Structure Product'],
                    },
                    series: [
                        {
                            // name: 'distribution of data',
                            type: 'pie',
                            radius : '40%',
                            // roseType : 'radius',
                            // radius: ['10%', '70%'],
                            // center: ['50%', '50%'],
                            data: [
                             	{name: 'Equity', value: 130},
                             	{name: 'Fixed Income', value: 250},
                             	{name: 'FX', value: 560},
                             	{name: 'Structure Product', value: 300},
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
                                      formatter: '{c} ({d}%)' 
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
            this.drawCharts();
            // this.initPage();
        },
        created(){
            this.initPage();

        },
        updated() {
            this.drawCharts()
        }
	};

</script>

<style scoped lang="scss">
.cp-head-info {
	overflow: hidden;
	margin: 5px 0;
    background-color: #eee;
	ul{
		padding: 0;
	}
	li {
	    list-style: none;
	    padding: 5px 10px;
		span {
			color: #666;

		}
		.span1{
			display: inline-block;
			font-weight: bold;
			width: 150px;
			// color: #666;
		}
		.span2{

		}
	}
}
.cp-table {
	margin-bottom: 20px;
}
.cp-table-txt {
	color: #666;
	font-weight: bold;
	background-color: #F7F6Fd;
	display: inline-block;
	padding: 0px 20px 0px 10px;
}

</style>










