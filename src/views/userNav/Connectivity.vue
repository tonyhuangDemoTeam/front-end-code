<template>
	<section>
		<!-- header input -->
		<el-row style="padding-top: 35px;">
			<el-col :span="24">
			  <el-select v-model="value"style="width: 250px;" placeholder="pls select ..." size="small">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			  </el-select>
			  <el-popover
			    placement="right"
			    title="limit"
			    width="200"
			    v-model="visible2"
			    content="Add four at most.">
			  </el-popover>
			  <el-button type="primary" @click="addItem" size="small">Add</el-button>
		   </el-col>
		</el-row>

		<!-- card list -->
		<el-row style="padding-top: 30px;" :gutter="10">
			<el-col :span="6"  v-for="card,index in cards">
				<el-card class="box-card">
				  <div slot="header" class="clearfix">
				    <span>{{card.name}}</span>
				    <el-button style="float: right; padding: 3px 0" :index="index" @click="delCard(index)" type="text">del</el-button>
				  </div>
				  <el-form ref="form" :model="card.form" size="small" label-width="50px">
					  <el-form-item label="name:">
					    <el-input v-model="card.form.a"></el-input>
					  </el-form-item>
					  <el-form-item label="name:">
					    <el-input v-model="card.form.b"></el-input>
					  </el-form-item>
					  <el-form-item label="name:">
					    <el-select v-model="card.form.value" placeholder="Pls select ...">
						    <el-option
						      v-for="item in card.form.options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
					  </el-form-item>
					  <el-form-item label="name:">
					    <el-input v-model="card.form.c"></el-input>
					  </el-form-item>
					  <el-form-item>
					    <el-button type="primary" @click="onSubmit">Submit</el-button>
					    <el-button>Reset</el-button>
					  </el-form-item>
				  </el-form>
				</el-card>
			</el-col>			
		</el-row>

		<!--  -->
		<el-row style="padding-top: 30px;" :gutter="10">
			<el-col :span='6' v-for="table in tables">
				<el-card>
					   <el-table
					      size="small"
					      :data="table.data"
					      :show-header="false"
					      style="width: 100%">
					      <el-table-column
					        prop="name"
					        label="name">
					      </el-table-column>
					      <el-table-column
					        prop="value"
					        label="value">
					      </el-table-column>
					    </el-table>
				</el-card>			
		    </el-col>
		</el-row>

	</section>
</template>
<script>
	export default {
		data() {
			return {
				cards:[
				   {    
				   	    name: "Notes",
				   	    form: {
				   	    	value: "",
							options: [{
					          value: 'aa',
					          label: 'aa'
					        }, {
					          value: 'bb',
					          label: 'bb'
					        }, {
					          value: 'cc',
					          label: 'cc'
					        }],
					        a: '',
					        b: '',
					        c: ''
				   		},
					},
					{    
				   	    name: "Memo",
				   	    form: {
				   	    	value: "",
							options: [{
					          value: 'aa',
					          label: 'aa'
					        }, {
					          value: 'bb',
					          label: 'bb'
					        }, {
					          value: 'cc',
					          label: 'cc'
					        }],
					        a: '',
					        b: '',
					        c: ''
				   		},
					},
				],
				tables: [{
                    data: [{
                    	name: "name:",
                    	value: "value",
                    },{
                    	name: "name:",
                    	value: "value",
                    },{
                    	name: "name:",
                    	value: "value",
                    }]
				},{
                    data: [{
                    	name: "name:",
                    	value: "value",
                    },{
                    	name: "name:",
                    	value: "value",
                    },{
                    	name: "name:",
                    	value: "value",
                    }]
				}],
				options: [{
		          value: 'Notes',
		          label: 'Notes'
		        }, {
		          value: 'Memo',
		          label: 'Memo'
		        }],
		        value: '',
		        visible2: false
			}
		},
		methods: {
			onSubmit(){},
			addItem(){
				var _temp =  {    
				   	    name: this.value,
				   	    form: {
				   	    	value: "",
							options: [{
					          value: 'aa',
					          label: 'aa'
					        }, {
					          value: 'bb',
					          label: 'bb'
					        }, {
					          value: 'cc',
					          label: 'cc'
					        }],
					        a: '',
					        b: '',
					        c: ''
				   		},
					};
				if (this.cards.length == 4) {
					this.visible2 = true;
					return false;
				}else{
					this.visible2 = false;
				}	
			    this.cards.push(_temp)		
			},
			delCard(index){
               this.cards.splice(index,1)
			},
			
		},
		mounted() {
			
		}
	};

</script>

<style scoped lang="scss">



</style>