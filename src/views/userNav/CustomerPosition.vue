<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;"> 
			<el-form :inline="true" :model="filters" size="small">
				<el-form-item>
					<el-input v-model="filters.name" style="width: 300px" placeholder="Please input Customer Number!"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getCustomerNumber">Search</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<template>
			<el-col :span="24"><!-- 
					:show-summary='true'
                    sum-text="Total"  -->
				<el-table 
					:data="customerPositions" 
					v-loading="loading" 
                    size="small"
                    :header-cell-style="tableHeaderColor">
                    <el-table-column type="expand">
				      <template slot-scope="props">
				        <el-table
					       size="small"
					       :data="props.row.accounts"
							@row-click='rowSelect'
					       :show-header="false"
					       style="width: 100%">
					        <el-table-column prop="customerAccount" type="number" label="Customer Number" >
							</el-table-column>
							<el-table-column prop="" label="Customer Name" >
							</el-table-column>
							<el-table-column prop="positions.prod.bond" label="Equity" sortable>
							</el-table-column>
							<el-table-column prop="positions.prod.share" label="Fixed Income" sortable>
							</el-table-column>
							<el-table-column prop="positions.prod.deposit" label="FX" sortable>
							</el-table-column>
							<el-table-column prop="positions.prod.fund" label="Structure Product" sortable>
							</el-table-column>
							<el-table-column prop="positions.prod.total" label="Total Asset Value (USD)"  align='right'sortable>
							</el-table-column>
					    </el-table>
				      </template>
				    </el-table-column>
					<el-table-column prop="customerNumber" type="number" label="Customer Number" >
					</el-table-column>
					<el-table-column prop="customerName" label="Customer Name" >
					</el-table-column>
					<el-table-column prop="positions.prod.bond" label="Equity" sortable>
					</el-table-column>
					<el-table-column prop="positions.prod.share" label="Fixed Income" sortable>
					</el-table-column>
					<el-table-column prop="positions.prod.deposit" label="FX" sortable>
					</el-table-column>
					<el-table-column prop="positions.prod.fund" label="Structure Product" sortable>
					</el-table-column>
					<el-table-column prop="positions.prod.total" label="Total Asset Value (USD)"  align='right'sortable>
					</el-table-column>
				</el-table>
			</el-col>
		</template>
	</section>
</template>

<script>
	import {getDataUrl, getUserList } from '@/api/api';

	//import NProgress from 'nprogress'
	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				loading: false,
				customerPositions: []
			}
		},
		methods: {
			// 修改table header的背景色
			tableHeaderColor({ row, column, rowIndex, columnIndex }) {
			    if (rowIndex === 0) {
			        return 'background-color: #F7F6Fd;color: #666;font-weight: 500;'
			    }
			 },
			rowSelect(row, event, column){
                this.$router.push(`/customer-position/${row.customerAccount}`)
			 },
			getCustomerNumber(){

			},
			initPage: function () {

				let Vm = this, user;

				user = sessionStorage.getItem('user');

				if (!user) {
					Vm.$router.push('/');
                    return false;
				};

				user = JSON.parse(user);

				getDataUrl('/fos/cust/get', {type: user.role, rm: user.username}).then(data => {
					let cusPos = data.data;
					cusPos.forEach(item => {
						let prod = item.positions.prod;
						prod.total = Number(prod.fund) +  Number(prod.deposit) + Number(prod.share) + Number(prod.bond);
						prod.total= prod.total.toFixed(2);
						item.accounts.forEach(ac_item => {
							let ac_prod = ac_item.positions.prod;
							ac_item.customerAccount = ac_item.customerNumber + '-' + ac_item.accountNumber;
							ac_prod.total = Number(ac_prod.fund) +  Number(ac_prod.deposit) + Number(ac_prod.share) + Number(ac_prod.bond);
							ac_prod.total= ac_prod.total.toFixed(2);
						});
					});

					Vm.customerPositions = cusPos;
					
	
				}).catch((data) => {
					console.log(data);
				});
			}
		},
		created() {
			this.initPage();
		},
		mounted() {
			//this.initPage();
		}
	};

</script>

<style lang="scss">

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

.el-table__expanded-cell[class*=cell]{
	padding: 5px 0px 5px 50px !important;
}

</style>







