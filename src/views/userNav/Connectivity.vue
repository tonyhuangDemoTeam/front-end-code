<template>
	<section>
		<el-row>
			<el-col :span="24">
			  <el-select v-model="value" placeholder="pls select ..." size="small">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			  </el-select>
			  <el-button type="primary" size="small">Add</el-button>
		   </el-col>
		</el-row>
		<el-row>
			<el-col :span="24">
				
			</el-col>			
		</el-row>

	</section>
</template>
<script>
	export default {
		data() {
			return {
				options: [{
		          value: 'Notes',
		          label: 'Notes'
		        }, {
		          value: 'Memo',
		          label: 'Memo'
		        }],
		        value: ''
			}
		},
		methods: {
			
		},
		mounted() {
			
		}
	};

</script>

<style scoped lang="scss">



</style>