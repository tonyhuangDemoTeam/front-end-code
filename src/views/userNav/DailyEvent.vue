<template>
	<section>


		<el-col :span="20">
			 <p class="data-txt">Today</p>
			 <el-table
		      :data="tableData"
		      :show-header='false'
		      size="small"
		      style="width: 100%">
		      <el-table-column
		        prop="date"
		        label=""
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="info"
		        label="">
		      </el-table-column>
		    </el-table>
		    <p class="data-txt">Yesterday</p>
			 <el-table
		      :show-header='false'
		      size="small"
		      :data="tableData"
		      style="width: 100%">
		      <el-table-column
		        prop="date"
		        label=""
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="info"
		        label="">
		      </el-table-column>
		    </el-table>
		    <p class="data-txt">more then</p>
			 <el-table
		      :show-header='false'
		      size="small"
		      :data="tableData"
		      style="width: 100%">
		      <el-table-column
		        prop="date"
		        label=""
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="info"
		        label="">
		      </el-table-column>
		    </el-table>
		</el-col>

		<el-col :span="20">
			
		</el-col>




	</section>
</template>
<script>
	export default {
		data() {
			return {
				  tableData: [{
		            date: '2018-11-01 13:36',
		            info: 'Share Deal Confirmation #67998'
		          }, {
		            date: '2016-05-04 13:36',
		            info: 'Customer 8000123456 today\'s birthday'
		          }, {
		            date: '2016-05-01 13:36',
		            info: 'Bond Deal #67998 pending settlement'
		          }, {
		            date: '2016-05-03 13:36',
		            info: 'Customer 8000123456 today\'s birthday'
		          }]
			}
		},
		methods: {
			
		},
		mounted() {
			
		}
	};

</script>

<style scoped lang="scss">

.data-txt {
	    color: #666;
    margin-top: 25px;
    font-weight: bold;
}

</style>