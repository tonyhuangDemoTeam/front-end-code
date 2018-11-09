<template>
	<section id="element-to-print">
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
					<el-button size="small" type="primary" @click="aveAsPDF" style="float: right;margin: 25px;">Save As PDF</el-button>
				</div>
			</div>
			
		</el-col>

		<el-col :span="24">
              <div class="cp-table-txt">
              	Equity:
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
			    <el-table-column fixed="right" prop="quantity" label="Quantity">
			    </el-table-column>
			    <el-table-column fixed="right" prop="amount" label="Total Amount(USD)">
			    </el-table-column>
			    <el-table-column fixed="right" prop="marketPrice" label="Market Price">
			    </el-table-column>
			    <el-table-column fixed="right" prop="cost" label="Average Cost">
			    </el-table-column>
			    <el-table-column fixed="right" prop="averagePL" label="P&L(USD)">
			    </el-table-column>
			    <el-table-column fixed="right" prop="yesterdayPL" width='180' label="Last Biz Date P&L(USD)">
			    </el-table-column>
			  </el-table>
		</el-col>

		<el-col :span="24">
              <div class="cp-table-txt">
              	Fixed Income:
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
			    <el-table-column fixed="right" prop="quantity" label="Quantity">
			    </el-table-column>
			    <el-table-column fixed="right" prop="amount" label="Total Amount(USD)">
			    </el-table-column>
			    <el-table-column fixed="right" prop="marketPrice" label="Market Price">
			    </el-table-column>
			    <el-table-column fixed="right" prop="cost" label="Average Cost">
			    </el-table-column>
			    <el-table-column fixed="right" prop="averagePL" label="P&L(USD)">
			    </el-table-column>
			    <el-table-column fixed="right" prop="yesterdayPL" width='180' label="Last Biz Date P&L(USD)">
			    </el-table-column>
			  </el-table>
		</el-col>

	    <el-col :span="24">
              <div class="cp-table-txt">
              	FX:
              </div>
			  <el-table 
			  	:data="fxTable" 
			  	show-summary 
                sum-text="Total" 
                class='cp-table'
                size="small"
                :header-cell-style="tableHeaderColor"
			  	style="width: 100%">
			    <el-table-column prop="name" fixed="right" label="Product Name">
			    </el-table-column>
			    <el-table-column prop="quantity" fixed="right" label="Quantity">
			    </el-table-column>
			    <el-table-column prop="amount" fixed="right" label="Total Amount(USD)">
			    </el-table-column>
			    <el-table-column prop="marketPrice" fixed="right" label="Market Price">
			    </el-table-column>
			    <el-table-column prop="cost" fixed="right" label="Average Cost">
			    </el-table-column>
			    <el-table-column prop="averagePL" fixed="right" label="P&L(USD)">
			    </el-table-column>
			    <el-table-column prop="yesterdayPL" width='180' fixed="right" label="Last Biz Date P&L(USD)">
			    </el-table-column>
			  </el-table>
		</el-col>

		<el-col :span="24">
              <div class="cp-table-txt">
              	Structure Product:
              </div>
			  <el-table 
			  	:data="structureTable" 
			  	show-summary 
                sum-text="Total" 
                class='cp-table'
                size="small"
                :header-cell-style="tableHeaderColor"
			  	style="width: 100%">
			    <el-table-column  prop="name" label="Product Name">
			    </el-table-column>
			    <el-table-column fixed="right" prop="quantity" label="Quantity">
			    </el-table-column>
			    <el-table-column fixed="right" prop="amount" label="Total Amount(USD)">
			    </el-table-column>
			    <el-table-column fixed="right" prop="marketPrice" label="Market Price">
			    </el-table-column>
			    <el-table-column fixed="right" prop="cost" label="Average Cost">
			    </el-table-column>
			    <el-table-column fixed="right" prop="averagePL" label="P&L(USD)">
			    </el-table-column>
			    <el-table-column fixed="right" prop="yesterdayPL" width='180' label="Last Biz Date P&L(USD)">
			    </el-table-column>
			  </el-table>
		</el-col>

		<el-col :span="24">
              <div class="cp-table-txt">
              	Portfolio Summary:
              </div>
			  <el-table 
			  	:data="SummaryTable" 
			  	fixed
                class='cp-table'
                size="small"
                :header-cell-style="tableHeaderColor"
			  	style="width: 100%">
			    <el-table-column prop="share" label="Equity">
			    </el-table-column>
			    <el-table-column fixed="right" prop="bond" label="Fixed Income">
			    </el-table-column>
			    <el-table-column fixed="right" prop="deposits" label="FX">
			    </el-table-column>
			    <el-table-column fixed="right" prop="fund" label="Structure Product">
			    </el-table-column>
			    <el-table-column fixed="right" prop="cost" label="Total Value">
			    </el-table-column>
			    <el-table-column fixed="right" prop="averagePL" label="Total P&L">
			    </el-table-column>
			    <el-table-column fixed="right" prop="yesterdayPL" width='180' label="Total P&L Last Biz Date">
			    </el-table-column>
			  </el-table>
		</el-col>
		</el-row>
		<el-row>
			<el-col :span="12">
                <div id="chartPie1" style="width:100%; height:400px;"></div>
			</el-col>	
			<el-col :span="12">
                <div id="chartPie2" style="width:100%; height:400px;"></div>
			</el-col>	
		</el-row>

	</section>
</template>
<script>
    import echarts from 'echarts'
    import html2pdf from 'html2pdf.js'
	import {getDataUrl, getUserList } from '@/api/api';

	let acctlist;

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
				SummaryTable: [{
					share:'',	
					bond:'',	
					deposits:'', 
					fund: '',	
					cost: '564567.11',
					averagePL: '-165.5380002',	
					yesterdayPL: '-165.5380002'
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
                  
                  acctlist = data.data;

                  Vm.equityTable = acctlist.positions.share;
                  Vm.fixedTable = acctlist.positions.bond;
                  Vm.fxTable = acctlist.positions.deposits;
                  Vm.structureTable = acctlist.positions.fund;

                  // console.log(acctlist);

				 Object.assign(Vm.SummaryTable[0], acctlist.prodCataInfo);

                  
				}).catch((data) => {
					console.log(data);
				});

			},

			aveAsPDF(){

				let element = document.getElementById('element-to-print');
				let opt = {
				  margin:       1,
				  filename:     'accountNumber.pdf',
				  image:        { type: 'jpeg', quality: 0.98 },
				  html2canvas:  { scale: 2 },
				  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
				};
				 
				// New Promise-based usage:
				html2pdf().set(opt).from(element).save();


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
                let Vm = this;

                let opt1 = { 
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
                            radius : '30%',
                            // roseType : 'radius',
                            // radius: ['10%', '70%'],
                            // center: ['50%', '50%'],
                            data: [
                             	{name: 'Equity', value: acctlist.prodCataInfo.share},
                             	{name: 'Fixed Income', value: acctlist.prodCataInfo.bond},
                             	{name: 'FX', value: acctlist.prodCataInfo.deposits},
                             	{name: 'Structure Product', value: acctlist.prodCataInfo.fund},
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
                };

                // console.log(acctlist)
				let data2 = [], ccyCataInfo = acctlist.ccyCataInfo;
				let ccykey = Object.keys(ccyCataInfo).sort();

				for(let key in ccyCataInfo){
					data2.push({
						name: key, value: ccyCataInfo[key]
					})
				}


				// console.log(data2)


                let opt2 = {
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
                        data: ccykey,
                    },
                    series: [
                        {
                            // name: 'distribution of data',
                            type: 'pie',
                            radius : '40%',
                            // roseType : 'radius',
                            // radius: ['10%', '70%'],
                            // center: ['50%', '50%'],
                            data: data2,
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
                };


                this.chartPie1 = echarts.init(document.getElementById('chartPie1'));
                this.chartPie1.setOption(opt1);

                this.chartPie2 = echarts.init(document.getElementById('chartPie2'));
                this.chartPie2.setOption(opt2);
            },
            drawCharts() {
            	let Vm = this;

            	setTimeout(()=>{
            		Vm.drawPieChart()
            	},200);

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
	padding: 10px 10px 10px;
}

</style>










