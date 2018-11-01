<template>
	<section>
		<el-col :span="12">
			<el-form ref="form" :model="form" label-width="150px" size="small">
				<el-form-item label="User ID :">
				    <el-input v-model="form.userId"></el-input>
				 </el-form-item>
				 <el-form-item label="User Name :">
				    <el-input v-model="form.userName"></el-input>
				 </el-form-item>
				 <el-form-item label="User Role :">
				    <el-input v-model="form.userRole"></el-input>
				 </el-form-item>
				 <el-form-item label="RM Code :">
				    <el-input v-model="form.rmCode"></el-input>
				 </el-form-item>
				 <el-form-item label="Team Code :">
				    <el-input v-model="form.teamCode"></el-input>
				 </el-form-item>
				 <el-form-item>
				    <el-button type="primary" @click="onSubmit">Create Now</el-button>
				    <el-button>Reset</el-button>
				  </el-form-item>
			</el-form>
		</el-col>

		<el-col :span="18">
			<p class="info-txt">User List</p>
			<el-table
		      :data="tableData"
		      size="small"
		      style="width: 100%">
		      <el-table-column
		        prop="userId"
		        label="User ID"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="userName"
		        label="User Name"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="userRole"
		        label="User Role">
		      </el-table-column>
		      <el-table-column
		        prop="rmCode"
		        label="RM Code">
		      </el-table-column>
		      <el-table-column
		        prop="teamCode"
		        label="Team Code">
		      </el-table-column>
		    </el-table>
		</el-col>

	</section>
</template>
<script>
	export default {
		data() {
			return {
				form: {
		          userId: 'HK-USER-2',	
		          userName: 'Jones KILAN',
		          userRole: 'RM',
		          rmCode: 'RMS001',
		          teamCode: 'TM1'
		        },
		        tableData: [{
		          userId: 'HK-USER-2',	
		          userName: 'Jones KILAN',
		          userRole: 'RM',
		          rmCode: 'RMS001',
		          teamCode: 'TM1'
		        },
		        {
		          userId: 'HK-USER-3',	
		          userName: 'Joshua CHLOE',
		          userRole: 'RM',
		          rmCode: 'RMS002',
		          teamCode: ''
		        },
		        {
		          userId: 'HK-USER-3',	
		          userName: 'Joshua CHLOE',
		          userRole: 'RM',
		          rmCode: 'RMS002',
		          teamCode: ''
		        },
		        {
		          userId: 'HK-USER-3',	
		          userName: 'Joshua CHLOE',
		          userRole: 'RM',
		          rmCode: 'RMS002',
		          teamCode: ''
		        }
		        ]
			}
		},
		methods: {
			onSubmit(){},
			
		},
		mounted() {
			
		}
	};

</script>

<style scoped lang="scss">

.info-txt {
	    color: #666;
    margin-top: 25px;
    font-weight: bold;
}

</style>