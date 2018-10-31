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
import Management from './views/charts/Management.vue'
import CustomerSelect from './views/CustomerSelect.vue'
import CustomerTrends from './views/charts/CustomerTrends.vue'
import c3 from './views/charts/c3.vue'
import echarts from './views/charts/echarts.vue'
import highcharts from './views/charts/highcharts.vue'
import Customer from './views/charts/customers.vue'
import Asset from './views/charts/customersChart.vue'
import Trade from './views/charts/Trade.vue'

// admin template




// user template
import DailyEvent from './views/userNav/DailyEvent.vue'
import CustomerPosition from './views/userNav/CustomerPosition.vue'
import CustomerPositionInfo from './views/userNav/CustomerPositionInfo.vue'
import Transaction from './views/userNav/Transaction.vue'
import Connectivity from './views/userNav/Connectivity.vue'


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
    {
        path: '/',
        component: Home,
        name: 'Management Overview',
        iconCls: 'fa fa-address-card',
        // leaf: true,//只有一个节点，
        meta: "admin",
        children: [
            { path: '/', component: Management, name: 'Organization Structure' },
            { path: '/net-new-money-report', component: Management, name: 'Net New Money Report' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Customer Overview',
        iconCls: 'el-icon-date',
        // leaf: true,//只有一个节点
        meta: "admin",
        children: [
            { path: '/customer-distribution', component: Customer, name: 'Customer Distribution' },
            { path: '/customer-trends-report', component: CustomerTrends, name: 'Customer Trends Report' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'el-icon-news',
        leaf: true,//只有一个节点
        meta: "admin",
        children: [
            { path: '/asset-overview', component: Asset, name: 'Asset Overview' }
        ]
    },
    // =======================
    // user nav
    // =======================
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-cubes',//图标样式class
        leaf: true,//只有一个节点
        meta: "user",
        children: [
            { path: '/daily-event', component: DailyEvent, name: 'Daily Event' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Customer Position',
        iconCls: 'fa fa-object-group',//图标样式class
        // leaf: true,//只有一个节点
        meta: "user",
        children: [
            { path: '/customer-position', component: CustomerPosition, name: 'Customer Position'},
            { path: '/customer-position-info', component: CustomerPositionInfo, name: 'Customer Position Info'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Customer Trade',
        iconCls: 'fa fa-flag-checkered',//图标样式class
        // leaf: true,//只有一个节点
        meta: "user",
        children: [
            { path: '/share-transaction-input', component: Transaction, name: 'Share Transaction Input'},
            { path: '/connectivity', component: Connectivity, name: 'Connectivity'}
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;