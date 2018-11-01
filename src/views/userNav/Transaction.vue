<template>
	<section>
		<el-col :span="14" style="margin: 35px 0 25px;">
			<el-form ref="form" :model="form" label-width="150px" size="mini">
			 <el-form-item label="Buy or Sell">
			    <el-radio-group v-model="form.buySell">
			      <el-radio border label="Buy"></el-radio>
			      <el-radio border label="Sell"></el-radio>
			    </el-radio-group>
			  </el-form-item>
			  <el-form-item label="eShare or Phone">
			    <el-radio-group v-model="form.eSharePhone">
			      <el-radio border label="eShare"></el-radio>
			      <el-radio border label="Phone"></el-radio>
			    </el-radio-group>
			  </el-form-item>	
			 <!--  <el-form-item label="活动性质" inline>
			    <el-checkbox-group v-model="form.type1" max=1>
			      <el-checkbox-button label="Buy" name="type"></el-checkbox-button>
			      <el-checkbox-button label="Sell" name="type"></el-checkbox-button>
			    </el-checkbox-group>
			    <el-checkbox-group v-model="form.type2" max=1>
			      <el-checkbox-button label="eShare" name="type"></el-checkbox-button>
			      <el-checkbox-button label="Phone" name="type"></el-checkbox-button>
			    </el-checkbox-group>
			  </el-form-item> -->
			  <el-form-item label="Customer">
			    <el-input v-model="form.name"></el-input>
			  </el-form-item>
			  <el-form-item label="Share Issue">
			    <el-input v-model="form.shareIssue"></el-input>
			  </el-form-item>
			  <el-form-item label="Norminal">
			    <el-input v-model="form.norminal"></el-input>
			  </el-form-item>
			  <el-form-item label="Share Currency">
			    <el-select v-model="form.shareCurrency" placeholder="pls select u SC">
			      <el-option label="HKD" value="shanghai"></el-option>
			      <el-option label="RMB" value="beijing"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="Share Price">
			    <el-input v-model="form.sharePrice"></el-input>
			  </el-form-item>
				<el-form-item label="Trade Type">
			    <el-select v-model="form.tradeType" placeholder="pls select u SC">
			      <el-option label="Limit" value="shanghai"></el-option>
			      <el-option label="Limit" value="beijing"></el-option>
			    </el-select>
			  </el-form-item>
				<el-form-item label="Remark">
			    <el-input v-model="form.remark"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="onSubmit">Submit</el-button>
			    <el-button @click="onReset">Reset</el-button>
			  </el-form-item>
			</el-form> 
			 <!--  -->
			 
			 <div class="cp-table-txt">
              	<p>Holding Details:</p>
             </div>
			 <el-table
		      :data="tableData"
		      size="small"
              :header-cell-style="tableHeaderColor"
		      style="width: 100%">
		      <el-table-column
		        prop="issueName"
		        label="Issue Name">
		      </el-table-column>
		      <el-table-column
		        prop="avgPrice"
		        label="Avg Price">
		      </el-table-column>
		      <el-table-column
		        prop="norminal"
		        label="Norminal">
		      </el-table-column>
		      <el-table-column
		        prop="totalValue"
		        label="Total Value">
		      </el-table-column>
		      <el-table-column
		        prop="CCY"
		        label="CCY">
		      </el-table-column>
		    </el-table>
		</el-col>

		<el-col :span="10" style="padding: 35px;">
			<el-form ref="form" label-width="100px">
			   <el-form-item label="House View:">
			    	<div>BULL</div>
			    </el-form-item>
			</el-form>
			<el-form ref="form" label-width="100px">
			   <el-form-item label="Credit Rating:">
			    	<div>AA+</div>
			    </el-form-item>
			</el-form> 
			<el-form ref="form" label-width="100px">
			   <el-form-item label="Solicite:">
			    	<div>N</div>
			    </el-form-item>
			</el-form>     
		</el-col>
	</section>
</template>
<script>
	export default {
		data() {
			return {
				    form: {
			          name: '',
			          buySell: [],
			          eSharePhone: [],
			          shareIssue: '',
			          norminal: '',
			          shareCurrency: [],
			          sharePrice: '',
			          tradeType: [],
			          remark: ''
			        },
			        tableData: [{				
			        	issueName:'0005.HK',	
			        	avgPrice:60.5,	
			        	norminal:80000,	
			        	totalValue:4840000,
			        	CCY:'HKD'
			        }]
			}
		},
		methods: {
			onSubmit(){},
			onReset(){},
			tableHeaderColor({ row, column, rowIndex, columnIndex }) {
			    if (rowIndex === 0) {
			        return 'background-color: #F7F6Fd;color: #666;font-weight: bold;'
			    }
			 },
			
		},
		mounted() {
			
		}
	};

</script>

<style scoped lang="scss">
.el-form-item{
	margin-bottom: 0px;
}
.el-form-item--mini.el-form-item {
	margin-bottom: 10px
}
.cp-table-txt {
	color: #666;
	font-size:12px;
	font-weight: bold;
	background-color: #F7F6Fd;
	display: inline-block;
	padding: 0px 20px 0px 10px;
}

</style>