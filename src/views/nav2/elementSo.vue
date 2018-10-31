<template>
	<section>
		<!-- 按钮 -->
        <el-row></el-row>
		<el-row>
		  <el-button icon="el-icon-search" circle></el-button>
		  <el-button type="primary" icon="el-icon-edit" circle></el-button>
		  <el-button type="success" icon="el-icon-check" circle></el-button>
		  <el-button type="info" icon="el-icon-message" circle></el-button>
		  <el-button type="warning" icon="el-icon-star-off" circle></el-button>
		  <el-button type="danger" icon="el-icon-delete" circle></el-button>
		</el-row>
        <el-row>
			<el-switch
			  v-model="value3"
			  active-text="按月付费"
			  inactive-text="按年付费">
			</el-switch>
			<el-switch
			  style="display: block"
			  v-model="value4"
			  active-color="#13ce66"
			  inactive-color="#ff4949"
			  active-text="按月付费"
			  inactive-text="按年付费">
			</el-switch>        	
        </el-row>
      


	</section>
</template>
<script>

	//import NProgress from 'nprogress'
	export default {
		data() {
			return {
				value3: true,
                value4: true,
				filters: {
					name: ''
				},
				loading: false,
				users: [
				]
			}
		},
		methods: {
		},
		mounted() {
			
		}
	};

</script>

<style scoped>

</style>