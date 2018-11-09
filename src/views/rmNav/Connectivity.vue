<template>
    <section>
        <!-- header input -->
        <el-row style="padding-top: 35px;">
            <el-col :span="24">
                <el-select v-model="selectValue" style="width: 250px;" placeholder="Please select value!" size="small">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-button type="primary" @click="addItem" size="small">Add</el-button>
            </el-col>
        </el-row>
        <!-- card list -->
        <el-row style="padding-top: 30px;" :gutter="6">
            <el-col :span="8" v-for="card,index in cards" v-loading="card.loading">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <b>{{card.name}}</b>
                        <el-button style="float: right; padding: 3px 0" :index="index" @click="delCard(index)" type="text">del</el-button>
                    </div>
                    <el-form ref="form" :model="card.form" :rules="cardRules" size="small" label-width="110px">
                        <el-form-item prop="issueCode" label="Underlying:">
                            <el-select v-model="card.form.issueCode" placeholder="Please select value!">
                                <el-option v-for="item in card.form.issueCodeoptions" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item prop="iusseDate" label="Iusse Date:">
                            <el-date-picker v-model="card.form.iusseDate" type="date" value-format="yyyy-MM-dd" placeholder="Please pick a date!">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item prop="maturityDate" label="Maturity Date:">
                            <el-date-picker v-model="card.form.maturityDate" type="date" value-format="yyyy-MM-dd" placeholder="Please pick a date!">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" :index="index" @click="onSubmit(index)">Submit</el-button>
                            <el-button @click="onReset(index)">Reset</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
        <!--  -->
        <el-row style="padding-top: 20px;" :gutter="10">
            <el-col :span='8' v-for="table in tables">
                <el-card>
                   <!--  <el-table size="small" :data="table.list" :show-header="false" style="width: 100%">
                        <el-table-column prop="name" label="name">
                        </el-table-column>
                        <el-table-column prop="value" label="value">
                        </el-table-column>
                    </el-table> -->
                    <ul class="con-bank-ul">
                        <li v-for="item,index in table.list">
                            <span>{{item.name}}</span>
                            <span :class="item.class" v-loading="item.loading">{{item.value}}</span>
                        </li>
                    </ul>
                </el-card>
            </el-col>
        </el-row>
    </section>
</template>
<script>
import { getDataUrl } from '@/api/api';

let issueCodeoptionsModel = [],
    submitTime = 800,
    penddingTime = 1500;

export default {
    data() {
        return {
            loading: true,
            cards: [],
            cardRules: {
                issueCode: [
                    { required: true, message: 'Please select issue Code!', trigger: 'change' }
                ],
                iusseDate: [
                    { required: true, message: 'Please pick a date!', trigger: 'change' }
                ],
                maturityDate: [
                    { required: true, message: 'Please pick a date!', trigger: 'change' }
                ],
            },
            tables: [],
            options: [{
                value: 'FCN',
                label: 'FCN'
            }, {
                value: 'BCN',
                label: 'BCN'
            }, {
                value: 'CDA',
                label: 'CDA'
            }, {
                value: 'ELN',
                label: 'ELN'
            }],
            selectValue: '',
            visible2: false
        }
    },
    methods: {
        onSubmit(index) {
            let Vm = this;

            Vm.$refs.form[index].validate((valid) => {
                if (valid) {
                    Vm.cards[index].loading = true;
                    setTimeout(() => {
                        Vm.cards[index].loading = false;
                        Vm.returnitem(index);
                    }, submitTime);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });

        },
        onReset(index) {
            this.$refs.form[index].resetFields();
        },
        returnitem(index) {

            let Vm = this,
                item;

            item = {
                list: [{
                    name: "JP:",
                    value: "pendding",
                    loading: true,
                    class: ''
                }, {
                    name: "BNP:",
                    value: "pendding",
                    loading: true,
                    class: ''
                }, {
                    name: "CS:",
                    value: "pendding",
                    loading: true,
                    class: ''
                }]
            };

            Vm.tables[index] ? Vm.tables[index] = item : Vm.tables.push(item);

            setTimeout(() => {
            	let values = [], _min, _index;

                Vm.tables[index].list.forEach((item, index) => {
                    item.value = Vm.genRandom(50, 60);
                    item.loading = false;
                    values.push(item.value);
                });
                values.forEach((item, i) => {
                	if(i == 0) {
                		_min = item;
                		_index = i;
                	}
                	if (item < _min) {
						_min = item;
                		_index = i;
                	}
                });

                Vm.tables[index].list[_index].class = 'light'

            }, penddingTime);

        },
        genRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1) | 0) + min;
        },
        addItem() {
            let Vm = this,
                item;

            if (!Vm.selectValue) {
                Vm.$message({
                    message: 'Please select value!',
                    type: 'warning'
                });
                return false;
            }

            item = {
                name: Vm.selectValue,
                form: {
                    issueCode: '',
                    issueCodeoptions: issueCodeoptionsModel,
                    iusseDate: '',
                    maturityDate: ''
                },
                loading: false
            };

            if (Vm.cards.length == 3) {
                Vm.$message({
                    message: 'Only three can be added.',
                    type: 'warning'
                });
                return false;
            }

            Vm.cards.push(item);
            Vm.selectValue = '';

        },
        delCard(index) {
            this.cards.splice(index, 1);
            this.tables.splice(index, 1);
        },

    },
    mounted() {

    },
    created() {

        let Vm = this;

        getDataUrl('/fos/share/issue/get', {}).then(data => {
            let _data = data.data;
            let newkey = Object.keys(_data).sort();
            newkey.forEach(item => {
                issueCodeoptionsModel.push({
                    value: item,
                    label: _data[item].shareIssueName
                })
            });
        }).catch((data) => {
            console.log(data);
        });

    }
};
</script>
<style scoped lang="scss">
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
    width: 100%;
}

.el-select {
    width: 100%;
}

.con-bank-ul,
.con-bank-ul * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.con-bank-ul {
    width: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
        line-height: 40px;
        border-bottom: 1px solid #ebeef5;
        font-size: 12px;
        color: #606266;



        &:hover{
        	background-color: #f5f7fa;
        }

        span {
            padding-left: 10px;
            display: inline-block;
            width: 49%;
            &.light{
            	font-weight: bold;
            	color: #DA0010;
            }
        }
    }

    .el-loading-spinner {
        margin-top: -12px !important;
        text-align: left !important;

        .circular {
            height: 26px !important;
            width: 26px !important;
        }
    }
}
</style>