import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import ElementUI from 'element-ui'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
//import 'element-ui/lib/theme-default/index.css'
// import './assets/theme/theme-green/index.css'
import './assets/theme/element-darkred/index.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
//import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'
import routes from './routes'
import Mock from './mock'
Mock.bootstrap();
import 'font-awesome/css/font-awesome.min.css'
import 'vue-orgchart/dist/style.min.css'

// 设置语言
locale.use(lang)

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

//NProgress.configure({ showSpinner: false });

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

Vue.component(CollapseTransition.name, CollapseTransition)

//router.afterEach(transition => {
//NProgress.done();
//});

new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#app')

