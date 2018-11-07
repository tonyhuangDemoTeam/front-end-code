<template>
	<el-row class="container">
		<el-col :span="24" class="header">
			<el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
				<img :src="this.sysLogo" alt="">
				<span>{{collapsed?sysLogoTxt:sysName}}</span>
			</el-col>
			<el-col :span="6">
				<div class="tools" @click.prevent="collapse">
					<i class="fa fa-align-justify"></i>
				</div>
			</el-col>
			<el-col :span="8" class="userinfo">
				<el-dropdown trigger="hover">
					<div class="el-dropdown-link userinfo-inner">
						<el-badge is-dot class="item"><img :src="this.sysUserAvatar" /></el-badge>
						<div>
							<span class="_name">{{sysUserName}}</span>
							<span class="_bsn">{{businessDate}}</span>
						</div> 
					</div>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item @click.native="$router.push('/daily-event')">
							Notifications
							<!-- <el-badge class="mark" :value="12" /> -->
						</el-dropdown-item>
						<el-dropdown-item>Settings</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">Sign Out</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>
		<el-col :span="24" class="main">
			<aside :class="collapsed ? 'menu-collapsed':'menu-expanded'">
				<!--导航菜单-->
				<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
					 unique-opened router v-show="!collapsed">
					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden && item.meta == sysMeta">
						<el-submenu :index="index+''" v-if="!item.leaf">
							<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
							<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
					</template>
				</el-menu>
				<!--导航菜单-折叠后-->
				<ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">
					<li v-for="(item,index) in $router.options.routes" v-if="!item.hidden && item.meta == sysMeta" class="el-submenu item">
						<template v-if="!item.leaf">
							<div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"><i :class="item.iconCls"></i></div>
							<ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"> 
								<li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item" style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''" @click="$router.push(child.path)">{{child.name}}</li>
							</ul>
						</template>
						<template v-else>
							<li class="el-submenu">
								<div class="el-submenu__title" style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;" :class="$route.path==item.children[0].path?'is-active':''" @click="$router.push(item.children[0].path)"><i :class="item.iconCls"></i></div>
							</li>
						</template>
					</li>
				</ul>
			</aside>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<strong class="title">{{$route.name}}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
	</el-row>
</template>

<script>
	import { getDataUrl } from '@/api/api';

	export default {
		data() {
			return {
				sysLogo: require('../assets/hongkong-hsbc-logo-en.svg'),
				sysName:'Private Banking',
				sysLogoTxt:'HSBC',
				collapsed:false,
				sysUserName: '',
				sysMeta: '',
				sysUserAvatar: require('../assets/user.png'),
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		computed: {

			businessDate(){

				// console.log(this.nowDate("yyyy-MM-dd hh:mm:ss"))

				return this.nowDate("yyyy-MM-dd")
				// return this.nowDate("yyyy-MM-dd hh:mm:ss")

			}

        },
        created(){
         	Date.prototype.format = function(format)
				{
				 var o = {
				 "M+" : this.getMonth()+1, //month
				 "d+" : this.getDate(),    //day
				 "h+" : this.getHours(),   //hour
				 "m+" : this.getMinutes(), //minute
				 "s+" : this.getSeconds(), //second
				 "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
				 "S" : this.getMilliseconds() //millisecond
				 }
				 if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
				 (this.getFullYear()+"").substr(4 - RegExp.$1.length));
				 for(var k in o)if(new RegExp("("+ k +")").test(format))
				 format = format.replace(RegExp.$1,
				 RegExp.$1.length==1 ? o[k] :
				 ("00"+ o[k]).substr((""+ o[k]).length));
				 return format;
				}
        },
		methods: {
			nowDate(opt){
				return (new Date()).format(opt);
			},
			onSubmit() {
				console.log('submit!');
			},
			handleclose() {
				//console.log('handleclose');
			},
			handleselect: function (a, b) {
			},
			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('Are you sure you want to quit??', 'Tips', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/login');
				}).catch(() => {

				});


			},
			//折叠导航栏
			collapse:function(){
				this.collapsed=!this.collapsed;
			},
			showMenu(i,status){
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			}
		},
		mounted() {
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysMeta = user.meta || 'user';

				// this.sysUserAvatar = user.avatar || '../assets/logo.jpeg';
			};


			//  getDataUrl('/sa/user/get',{id: 'rm1'}).then(data => {
			// 	console.log('data');
			// 	console.log(data);

			// }).catch((data) => {
			// 	console.log(data);

			// })

		}
	}

</script>

<style scoped lang="scss">
	@import '~scss_vars';
	
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.header {
			height: 60px;
			line-height: 60px;
			background: $color-primary;
			color:#fff;
			border-bottom:1px solid #999;
			.userinfo {
				text-align: right;
				padding-right: 35px;
				float: right;
				.userinfo-inner {
					cursor: pointer;
					color: #000;
					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						// margin: 10px 0px 10px 10px;
						margin-left: 10px;
						float: right;
					}
					div {
						float: right;
						line-height: 20px;
						margin-top: 8px;
						span._name {
							display: block;
							font-weight: bold;;
						}
						span._bsn {
							display: block;
							color: #777;
						}
					}
				}
			}
			.logo {
				//width:230px;
				height:60px;
				font-size: 22px;
				padding-left:20px;
				padding-right:20px;
				border-color: rgba(238,241,146,0.3);
				border-right-width: 1px;
				border-right-style: solid;
				img {
					//width: 40px;
					//float: left;   
					float: left;
					margin: 10px 50px 0px 18px;
					// margin-left: 10px;
				}
				span {
					font-size: 14px;
				    color: #000;
				    display: inline-block;
				    float: right;
				        line-height: normal;
				}
				.txt {
					color:#fff;
				}
			}
			.logo-width{
				width:230px;
			}
			.logo-collapse-width{
				width:60px
			}
			.tools{
				padding: 0px 23px;
				width:14px;
				height: 60px;
				line-height: 60px;
				cursor: pointer;
				color: #000;
			}
		}
		.main {
			display: flex;
			// background: #324057;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
			aside {
				flex:0 0 230px;
				width: 230px;
				// position: absolute;
				// top: 0px;
				// bottom: 0px;
				.el-menu{
					height: 100%;
					width: 100% !important;
				}
				.collapsed{
					width:60px;
					.item{
						position: relative;
					}
					.submenu{
						position: absolute;
						top:0px;
						left:60px;
						z-index:99999;
						height:auto;
						display:none;
					}

				}
			}
			.menu-collapsed{
				flex:0 0 60px;
				width: 60px;
			}
			.menu-expanded{
				flex:0 0 230px;
				width: 230px !important;
			}
			.content-container {
				flex:1;
				overflow-y: scroll;
				padding: 20px;
				.breadcrumb-container {
					.title {
						width: 200px;
						float: left;
						color: #475669;
					}
					.breadcrumb-inner {
						float: right;
					}
				}
				.content-wrapper {
					background-color: #fff;
					box-sizing: border-box;
				}
			}
		}
	}
</style>