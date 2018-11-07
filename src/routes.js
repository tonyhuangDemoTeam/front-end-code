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


// manager template
import Management from './views/managerNav/Management.vue'
import CustomerTrends from './views/managerNav/CustomerTrends.vue'
import c3 from './views/managerNav/c3.vue'
import echarts from './views/managerNav/echarts.vue'
import highcharts from './views/managerNav/highcharts.vue'
import CustomerDistribution from './views/managerNav/CustomerDistribution.vue'
import Asset from './views/managerNav/customersChart.vue'
import Trade from './views/managerNav/Trade.vue'

// user(rm) template
import DailyEvent from './views/userNav/DailyEvent.vue'
import CustomerPosition from './views/userNav/CustomerPosition.vue'
import CustomerPositionInfo from './views/userNav/CustomerPositionInfo.vue'
import Transaction from './views/userNav/Transaction.vue'
import Connectivity from './views/userNav/Connectivity.vue'

// admin template
import CreateUser from './views/adminNav/CreateUser.vue'

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
    // =======================
    // manager nav
    // =======================
    {
        path: '/',
        component: Home,
        name: 'Management Overview',
        iconCls: 'fa fa-sitemap',
        leaf: true,//只有一个节点，
        meta: "manager",
        children: [
            { path: '/', component: Management, name: 'Organization Structure' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Customer Overview',
        iconCls: 'el-icon-date',
        // leaf: true,//只有一个节点
        meta: "manager",
        children: [
            { path: '/customer-distribution', component: CustomerDistribution, name: 'Customer Distribution' },
            { path: '/customer-trends-report', component: CustomerTrends, name: 'Customer Trends Report' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'el-icon-news',
        leaf: true,//只有一个节点
        meta: "manager",
        children: [
            { path: '/asset-overview', component: Asset, name: 'Asset Overview' }
        ]
    },
    // =======================
    // rm nav
    // =======================
    {
        path: '/',
        component: Home,
        name: 'Customer Position',
        iconCls: 'fa fa-object-group',//图标样式class
        // leaf: true,//只有一个节点
        meta: "rm",
        children: [
            { path: '/customer-position', component: CustomerPosition, name: 'Customer Position'},
            { path: '/customer-position-info', component: CustomerPositionInfo, name: 'Customer Position Info', hidden: true}
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Customer Trade',
        iconCls: 'fa fa-flag-checkered',//图标样式class
        // leaf: true,//只有一个节点
        meta: "rm",
        children: [
            { path: '/share-transaction-input', component: Transaction, name: 'Share Transaction Input'},
            { path: '/connectivity', component: Connectivity, name: 'Connectivity'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-cubes',//图标样式class
        leaf: true,//只有一个节点
        meta: "rm",
        children: [
            { path: '/daily-event', component: DailyEvent, name: 'Daily Event' }
        ]
    },
    // =======================
    // admin nav
    // =======================   
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-cubes',//图标样式class
        leaf: true,//只有一个节点
        meta: "admin",
        children: [
            { path: '/create-user', component: CreateUser, name: 'Create User' }
        ]
    }, 
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;