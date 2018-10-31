<template>
  <section>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="filters">
        <el-form-item>
          <el-input v-model="filters.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="getUser">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!-- "customerNumber" : 8000123456,
      "customerName" : "Tony HUANG",
      "customerType" : "Individual",
      "homeCountry" : "CN",
      "bookingCenter" :"HK",
      "rmCode" : "HKRM01",
      "dateOfBirth" : "1983-01-01" -->

    <!--列表-->
    <template>
      <el-table :data="customers" highlight-current-row v-loading="loading" style="width: 100%;">
        <el-table-column type="index" width="60">
        </el-table-column>
        <el-table-column prop="customerNumber" label="编号" width="120" sortable>
        </el-table-column>
        <el-table-column prop="customerName" label="姓名" width="100"  sortable>
        </el-table-column>
        <el-table-column prop="customerType" label="类型" width="100" :formatter="formatSex" sortable>
        </el-table-column>
        <el-table-column prop="homeCountry" label="地址" width="120" sortable>
        </el-table-column>
        <el-table-column prop="bookingCenter" label="公司" min-width="120" sortable>
        </el-table-column>
        <el-table-column prop="rmCode" label="rm编码" min-width="100" sortable>
        </el-table-column>
        <el-table-column prop="dateOfBirth" label="生日" min-width="100" sortable>
        </el-table-column>
      </el-table>
    </template>

  </section>
</template>
<script>
  import { getCustomerList } from '../../api/api';
  //import NProgress from 'nprogress'
  export default {
    data() {
      return {
        filters: {
          name: ''
        },
        loading: false,
        customers: [
        ]
      }
    },
    methods: {
      //性别显示转换
      formatSex: function (row, column) {
        return row.customerType == 1 ? 'Individual' : row.customerType == 0 ? 'Entity' : 'undefined';
      },
      //获取用户列表
      getUser: function () {
        let para = {
          name: this.filters.name
        };
        this.loading = true;
        //NProgress.start();
        getCustomerList(para).then((res) => {
          this.customers = res.data.customers;
          this.loading = false;
          //NProgress.done();
        });
      }
    },
    mounted() {
      this.getUser();
    }
  };

</script>

<style scoped>

</style>