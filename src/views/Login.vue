<template>
  <section>
  <div class="logo"><img src="" alt=""></div>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title"><img :src="this.sysLogo" alt=""> <span>{{sysName}}</span></h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" @keyup.enter.native="handleSubmit2" auto-complete="off" placeholder="Username"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" @keyup.enter.native="handleSubmit2" auto-complete="off" placeholder="Password"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">Remember password！</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">Sign in</el-button>
      <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
    </el-form-item>
  </el-form>
  </section>
</template>

<script>
  import { requestLogin } from '@/api/api';
  //import NProgress from 'nprogress'
  export default {
    data() {
      return {
        sysLogo: require('../assets/hongkong-hsbc-logo-en.svg'),
        sysName: 'Private Banking',
        logining: false,
        ruleForm2: {
          account: '',
          checkPass: ''
        },
        rules2: {
          account: [
            { required: true, message: 'Please input username.', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          checkPass: [
            { required: true, message: 'Please input a password.', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        checked: true
      };
    },
    methods: {
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleSubmit2(ev) {
        var Vm = this;
        Vm.$refs.ruleForm2.validate((valid) => {

          if (!valid) {
            console.log('error submit!!');
            return false;
          }
            //_Vm.$router.replace('/table');
            Vm.logining = true;
            //NProgress.start();
            var loginParams = { id: Vm.ruleForm2.account, password: Vm.ruleForm2.checkPass };
            requestLogin(loginParams).then(data => {
                  Vm.logining = false;

                  if (data.status !== 200) {
                    Vm.$message({
                      message: data.statusText,
                      type: 'error'
                    });

                  } else {
                    sessionStorage.setItem('user', JSON.stringify(data.data));
                    let _path = {path: '/'}; 
                    if (data.data.role == 'admin') {
                        _path = {path: '/create-user'};
                    }
                    if (data.data.role == 'pm') {
                        _path = {path: '/'};
                    }
                    if (data.data.role == 'rm') {
                        _path = {path: '/customer-position'};
                    }

                    Vm.$router.push( _path );
                  }
                }
             ).then(data => {
                  Vm.logining = false;

            }).catch((e) => {
                Vm.logining = false;
                let rdata = e.response.data;
                    Vm.$message({
                      message: 'invalid Username and Password !',
                      type: 'error'
                    });

            });

 
        });
      }
    }
  }

</script>

<style lang="scss" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 100px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #666;
      img{
          display: inline-block;
          width: 211px;
      }
      span{
             display: inline-block;
    margin-left: -115px;
    top: 10px;
    position: relative;
      }
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>