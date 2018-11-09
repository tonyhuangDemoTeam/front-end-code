<template>
	<el-row>
		<el-col :span="20">
			 <p class="data-txt"></p>
			 <el-table
		      :data="tableData"
		      :show-header='false'
		      size="small"
		      style="width: 100%">
		      <el-table-column
		        prop="createDate"
		        :formatter="formatter"
		        label=""
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="remarks"
		        label="">
		      </el-table-column>
		    </el-table>
		</el-col>
	</el-row>
</template>
<script>
    import { getDataUrl } from '@/api/api';
	export default {
		data() {
			return {
				tableData: []
			}
		},
		methods: {
			formatter(row, column) {
			 	let d = new Date(row.createDate);
				let times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes(); 
		        return times;
		      },
			filterHandler(value, row, column) {},
		},
		mounted() {},
		created() {
			let Vm = this, user;

			user = sessionStorage.getItem('user');

			if (!user) {
				Vm.$router.push('/');
                return false;
			};

			user = JSON.parse(user);

		    // fos/action/get?rm=rm1
			getDataUrl('/fos/action/get', {rm: user.id}).then(data => {
				Vm.tableData = data.data
			}).catch((data) => {
				console.log(data);
			});

	    },
	    updated() {}
	};

</script>

<style scoped lang="scss">

.data-txt {
	    color: #666;
    margin-top: 25px;
    font-weight: bold;
}

</style>