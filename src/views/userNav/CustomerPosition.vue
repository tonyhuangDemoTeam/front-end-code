<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;"> 
			<el-form :inline="true" :model="filters" size="small">
				<el-form-item>
					<el-input v-model="filters.name" style="width: 300px" placeholder="..."></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getUser">Search</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<template>
			<el-col :span="24">
				<el-table 
					:data="users" 
					v-loading="loading" 
					:show-summary='true'
                    sum-text="Total" 
                    size="medium"
                    :header-cell-style="tableHeaderColor">
					<el-table-column prop="number" type="number" label="Customer Number" >
					</el-table-column>
					<el-table-column prop="name" label="Customer Name" >
					</el-table-column>
					<el-table-column prop="equity" label="Equity" sortable>
					</el-table-column>
					<el-table-column prop="fixedIncome" label="Fixed Income" sortable>
					</el-table-column>
					<el-table-column prop="fx" label="FX" sortable>
					</el-table-column>
					<el-table-column prop="structureProduct" label="Structure Product" sortable>
					</el-table-column>
					<el-table-column prop="value" label="Total Asset Value (USD)"  align='right'sortable>
					</el-table-column>
				</el-table>
			</el-col>
		</template>
	</section>
</template>

<script>
	import { getUserList } from '../../api/api';
	//import NProgress from 'nprogress'
	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				loading: false,
				users: [
				    {number: '8000-123456', name:'Nikko KITMAN	',equity: 16300508.05	,fixedIncome: 16300508.05	,fx:16300508.05 ,structureProduct:2345232.00, equity:23455.00,value: 16300508.05},
					{number: '8000-677988', name:'Oliver HUSIN	',equity: 5000300.00	,fixedIncome: 0.00			,fx:0.00,structureProduct:2345232.00,value: 9789644.98},
					{number: '8000-546700', name:'Ming Group LTD	',equity: 0.00		,fixedIncome: 100000.00		,fx:3004030.00,structureProduct:2345232.00,value: 6788688.05},
					{number: '8000-544976', name:'Calvin ZUGBERG	',equity: 0.00		,fixedIncome: 300000.00		,fx:400000.00,structureProduct:'2345232.40',value: 6689002.00},
					{number: '8000-321456', name:'Shawn BLIANCE	',equity: 9789644.98	,fixedIncome: 9789644.98	,fx:9789644.98,structureProduct:2345232.00,value: 5776559.98},
					{number:' 8000-698929', name:'Kawasaki MIZUKA	',equity: 6788688.05	,fixedIncome: 6788688.05	,fx:6788688.05,structureProduct:'2345232.02',value: 3002993.99}
				]
			}
		},
		methods: {
			//性别显示转换
			formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
			// 修改table header的背景色
			tableHeaderColor({ row, column, rowIndex, columnIndex }) {
			    if (rowIndex === 0) {
			        return 'background-color: #F7F6Fd;color: #666;font-weight: 500;'
			    }
			 },
    
			//获取用户列表
			getUser: function () {
				// let para = {
				// 	name: this.filters.name
				// };
				// this.loading = true;
				// //NProgress.start();
				// getUserList(para).then((res) => {
				// 	this.users = res.data.users;
				// 	this.loading = false;
				// 	//NProgress.done();
				// });
			}
		},
		mounted() {
			this.getUser();
		}
	};

</script>

<style scoped lang="scss">

// .sc-toolbar{    
// 	background: #f2f2f2;
//     padding: 10px;
//     margin: 10px 0px;
// }
.el-form-item--small.el-form-item{
	margin-bottom: 10px;
}
.toolbar {
	// background-color: #fff;
}




</style>







