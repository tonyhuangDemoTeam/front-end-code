<template>
	<section>
		<el-col :span="24">
			<ul class="cp-head-info">
				<li>
					<span class="span1">Customer Number:</span>
					<span class="span2">8000-123456</span>
				</li>
				<li>
					<span class="span1">Account Number:</span>
					<span class="span2">0001</span>
				</li>
				<li>
					<span class="span1">Customer Name:</span>
					<span class="span2">Nikko KITMAN</span>
				</li>
			</ul>
		</el-col>

		<el-col :span="24">
              <div class="cp-table-txt">
              	<p>Equity:</p>
              </div>
			  <el-table 
			  	:data="tableData6" 
			  	show-summary 
                sum-text="Total" 
                size="small"
			  	style="width: 100%">
			    <el-table-column prop="name" label="Product Name">
			    </el-table-column>
			    <el-table-column prop="quantity" label="Quantity">
			    </el-table-column>
			    <el-table-column prop="totalAmount" label="Total Amount(USD)">
			    </el-table-column>
			    <el-table-column prop="marketPrice" label="Market Price">
			    </el-table-column>
			    <el-table-column prop="averageCost" label="Average Cost">
			    </el-table-column>
			    <el-table-column prop="pl" label="P&L(USD)">
			    </el-table-column>
			    <el-table-column prop="lbdp" label="Last Biz Date P&L(USD)">
			    </el-table-column>
			  </el-table>
		</el-col>

		<el-col :span="24">
              <div class="cp-table-txt">
              	<p>Fixed Income:</p>
              </div>
			  <el-table 
			  	:data="tableData6" 
			  	show-summary 
                sum-text="Total" 
                size="small"
			  	style="width: 100%">
			    <el-table-column prop="name" label="Product Name">
			    </el-table-column>
			    <el-table-column prop="quantity" label="Quantity">
			    </el-table-column>
			    <el-table-column prop="totalAmount" label="Total Amount(USD)">
			    </el-table-column>
			    <el-table-column prop="marketPrice" label="Market Price">
			    </el-table-column>
			    <el-table-column prop="averageCost" label="Average Cost">
			    </el-table-column>
			    <el-table-column prop="pl" label="P&L(USD)">
			    </el-table-column>
			    <el-table-column prop="lbdp" label="Last Biz Date P&L(USD)">
			    </el-table-column>
			  </el-table>
		</el-col>

	</section>
</template>
<script>
	export default {
		data() {
			return {
				tableData6: [{
					name:'HSBC Holding',	
					quantity:80000,	
					totalAmount:5084000, 
					marketPrice:63.55,	
					averageCost:60.05,
					pl:280000,	
					lbdp:6000
				 },{
				 	name:'Tencent',	
				 	quantity:10000,	
				 	totalAmount:2706000, 
				 	marketPrice:270.6,	
				 	averageCost:180.05,
				 	pl:901000,	
				 	lbdp:3000
				 }]
			}
		},
		methods: {

			getSummaries(param) {
		        const { columns, data } = param;
		        const sums = [];
		        columns.forEach((column, index) => {
		          if (index === 0) {
		            sums[index] = '总价';
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
		            sums[index] += ' 元';
		          } else {
		            sums[index] = 'N/A';
		          }
		        });

		        return sums;
		     }
			
		},
		mounted() {
			
		}
	};

</script>

<style scoped lang="scss">
.cp-head-info {
	padding: 0;
	li {
	    list-style: none;
	    padding: 5px 10px;
		span {

		}
		.span1{
			display: inline-block;
			font-weight: bold;
			width: 150px;
		}
		.span2{

		}
	}
}
.cp-table-txt {
	color: #666;
	font-weight: bold;
}

</style>










