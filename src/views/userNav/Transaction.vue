<template>
	<el-row>
		<el-col :span="14" style="margin: 35px 0 25px;">
			<el-form ref="form" :model="form" label-width="100px" size="mini">	
			  <el-row>
			  	 <el-col :span="11">
			  	 	<el-form-item label="Buy/Sell:" inline>
				    <el-radio-group v-model="form.transactionType">
				      <el-radio-button label="B" value="B">Buy</el-radio-button>
				      <el-radio-button label="S" value="S">Sell</el-radio-button>
				    </el-radio-group>
				  </el-form-item>
			  	 	<el-form-item label="Customer:">
					    <el-select v-model="form.customerNumber" @change="getcustomerNumber" placeholder="Pls select Customer Number!">
					       <el-option
						      v-for="item,index in form.customerNumberoptions"
						      :key="index"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
					    </el-select>
					  </el-form-item>
					  <el-form-item label="Share Issue:">
					    <el-select v-model="form.shareIssueCode" @change="getIssueItem" placeholder="Pls select issue Code!">
						    <el-option
						      v-for="item in form.shareIssueCodeoptions"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						 </el-select>
					  </el-form-item>
					  <el-form-item label="Norminal:">
					    <el-input v-model="form.shareQuantity"></el-input>
					  </el-form-item>	
					  <el-form-item label="Share Price:">
					    <el-input v-model="form.sharePrice"></el-input>
					  </el-form-item>
					  </el-form-item>
						<el-form-item label="TradeDate:">
					    <el-date-picker
					      v-model="form.tradeDate"
					      type="date"
					      value-format="yyyy-MM-dd"
					      placeholder="Please pick a date!">
					    </el-date-picker>
					  </el-form-item>					  
			  	 </el-col>
			  	 <el-col :span="0" style="  height: 20px;">
			  	 </el-col>
			  	 <el-col :span="11">
			  	 	<el-form-item label="Trans Type:" inline>
				    <el-radio-group v-model="form.type2" style=''>
				      <el-radio-button label="eShare"></el-radio-button>
				      <el-radio-button label="Phone"></el-radio-button>
				    </el-radio-group>
				  </el-form-item>
			  	 	<el-form-item label="Account:">
					    <el-select v-model="form.accountNumber" placeholder="Pls select Account Number!">
					        <el-option
						      v-for="item in form.accountNumberoptions"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
					 </el-form-item>
					  <el-form-item label="Currency:">
					    <el-input v-model="form.shareCurrency"></el-input>
					  </el-form-item>	
					  <el-form-item label="Trade Type:">
					    <el-select v-model="form.tradeType" placeholder="Pls select Trade Type">
					      <el-option label="Limit" value="shanghai"></el-option>
					      <el-option label="Limit" value="beijing"></el-option>
					    </el-select>
					  </el-form-item>	
					  <el-form-item label="Remark:">
					    <el-input v-model="form.remark"></el-input>
					  </el-form-item>
					  </el-form-item>
						<el-form-item label="ValueDate:">
					    <el-date-picker
					      v-model="form.valueDate"
					      type="date"
					      value-format="yyyy-MM-dd"
					      placeholder="Please pick a date!">
					    </el-date-picker>
					  </el-form-item>					  				  				 
			       </el-col>
			  </el-row>
			  <el-row>
			  	<el-col :span='24' class="el-form-item_submit">
			  		<el-button type="primary" size="small" :loding='submiting' @click="onSubmit">Submit</el-button>
			    	<el-button @click="onReset" size="small">Reset</el-button>
			  	</el-col>
			  	
			  </el-row>
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
		        prop="shareIssueCode"
		        label="Issue Name">
		      </el-table-column>
		      <el-table-column
		        prop="averagePrice"
		        label="Avg Price">
		      </el-table-column>
		      <el-table-column
		        prop="considerationAmount"
		        label="Norminal">
		      </el-table-column>
		      <el-table-column
		        prop="holdingQuantity"
		        label="Total Value">
		      </el-table-column>
		      <el-table-column
		        prop="shareCurrency"
		        label="CCY">
		      </el-table-column>
		    </el-table>
		</el-col>

		<el-col :span="10" style="padding: 40px 10px 0 40px;">
			<el-form ref="form" :model="issueInfo" label-width="150px" size="mina">
			   <el-form-item label="House View:">
			    	<div>{{issueInfo.houseView}}</div>
			    </el-form-item>
			    <el-form-item label="Credit Rating:">
			    	<div>{{issueInfo.creditRating}}</div>
			    </el-form-item>
			    <el-form-item label="Solicite:">
			    	<div>{{issueInfo.solicite}}</div>
			    </el-form-item>
			    <el-form-item label="Issue Code:">
			    	<div>{{issueInfo.issueCode}}</div>
			    </el-form-item>
			    <el-form-item label="Share Issue Name:">
			    	<div>{{issueInfo.shareIssueName}}</div>
			    </el-form-item>
			    <el-form-item label="Share Price:">
			    	<div>{{issueInfo.sharePrice}}</div>
			    </el-form-item>
			</el-form>   
		</el-col>
	</el-row>
</template>
<script>
  import { getDataUrl, requestTransaction } from '@/api/api';

  let customerPositions;

	export default {
		data() {
			return {
        			submiting: false,
				    form: {
				      transactionType: '',
				      type2: '',
			          customerNumber: '',
			          customerNumberoptions: [],
				      accountNumber: '',
				      accountNumberoptions: [],
			          shareIssueCode: '',
			          shareIssueCodeoptions: [],
			          shareQuantity: '',
			          shareCurrency: '',
			          sharePrice: '',
			          tradeType: [],
			          considerationAmount: 0,
			          remark: '',
			          tradeDate:'',
				      valueDate:'',
			        },
			        tableData: [],
			        issueInfo:{
						creditRating: '',
						houseView: '',
						issueCode: '',
						shareCountry: '',
						shareCurrency: '',
						shareIssueCode: '',
						shareIssueName: '',
						sharePrice: '',
						solicite: '',
			        },
			        issueCode: null,
			        issueCodeStates: []
			}
		},
		watch: {
           'form.customerNumber'(val){
                this.getSharePosition();
           },
           'form.accountNumber'(val){
                this.getSharePosition();
           },
		},
		methods: {
			getcustomerNumber(cusNum){
				let Vm = this, customerList = [];

				customerPositions.forEach((item,index) => {
					if(item.customerNumber == cusNum){
						customerList = item.accounts;
						return false;
					}
				});

				Vm.form.accountNumber = '';
				Vm.form.accountNumberoptions = [];

				customerList.forEach((item,index) => {
					Vm.form.accountNumberoptions.push({
 						value: item.accountNumber,
          				label: item.accountName
					})
				});

			},
			getSharePosition(){

				let customer = this.form.customerNumber,
					account = this.form.accountNumber;

				if (!customer || !account) { return false;}	

			    getDataUrl('/fos/share/position/get', {cust: customer, acct: account}).then(data => {
					this.tableData = data.data
				}).catch((data) => {
					console.log(data);

				});
			},
			onSubmit(){
				let Vm = this;
				Vm.submiting = true;
				requestTransaction('fos/share/deal/save', Vm.form).then(data => {
				   Vm.submiting = false;
				   Vm.$message({
			          showClose: true,
			          message: 'Submitted successfully.',
			          type: 'success'
			        });
				}).catch((data) => {
					console.log(data);
				});
			},
			onReset(){},
			tableHeaderColor({ row, column, rowIndex, columnIndex }) {
			    if (rowIndex === 0) {
			        return 'background-color: #F7F6Fd;color: #666;font-weight: bold;'
			    }
			 },
			 getIssueItem(event){

			 	let el = event.target, Vm = this;

			 	let val = Vm.issueCode[Vm.form.shareIssueCode]
			 	Vm.issueInfo = val ? val : {};
			 	Vm.form.shareCurrency = val ? val.shareCurrency : '';

			 }
			
		},
		created(){
           
			let Vm = this, user;

			user = sessionStorage.getItem('user');

			if (!user) {
				Vm.$router.push('/');
                return false;
			};

			user = JSON.parse(user);
			getDataUrl('/fos/share/issue/get', {}).then(data => {
				Vm.issueCode = data.data;
				var newkey = Object.keys(Vm.issueCode).sort();
				newkey.forEach(item => {
					Vm.form.shareIssueCodeoptions.push({
 						value: item,
          				label: Vm.issueCode[item].shareIssueName
					})
				});
			}).catch((data) => {
				console.log(data);
			});

			getDataUrl('/fos/cust/get', {type: user.role, rm: user.id}).then(data => {
				customerPositions = data.data;
				customerPositions.forEach((item,index) => {
					Vm.form.customerNumberoptions.push({
 						value: item.customerNumber,
          				label: item.customerName
					})
				});
			}).catch((data) => {
				console.log(data);
			});

		},
		mounted() {
			
		}
	};

</script>

<style scoped lang="scss">
.el-form{
    padding: 20px 20px 20px 10px;
    border: 1px solid #eee;
    margin-bottom: 20px;	
}
.el-form-item_submit{
	 margin: 20px 0;
    text-align: center;
}
.el-select.el-select--mini{
  width: 100%;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner{
 width: 100%;
}
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