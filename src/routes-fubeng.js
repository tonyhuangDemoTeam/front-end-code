import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import elementSo from './views/nav2/elementSo.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import CustomerSelect from './views/CustomerSelect.vue'
import c3 from './views/charts/c3.vue'
import echarts from './views/charts/echarts.vue'
import highcharts from './views/charts/highcharts.vue'
import customers from './views/charts/customers.vue'
import customersChart from './views/charts/customersChart.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {   path: '/customerSelect', 
        component: CustomerSelect,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: 'Management Overview',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/', component: Main, name: 'index', hidden: true },
            { path: '/table', component: Table, name: 'Table' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user', component: user, name: 'List' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Asset Overview',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/customerList', component: Page4, name: 'customerList' },
            { path: '/page5', component: Page5, name: 'bookingCenter' },
            { path: '/elm', component: elementSo, name: 'elementUI' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Customer Overview',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/page6', component: Page6, name: 'nav3' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Customer Overview',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/c3', component: c3, name: 'c3js' },
            { path: '/echarts', component: echarts, name: 'echarts' },
            { path: '/highcharts', component: highcharts, name: 'highcharts' },
            { path: '/customers', component: customers, name: 'Customer Overview' },
            { path: '/customersChart', component: customersChart, name: 'customersChart' },
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;