import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'

// manager template
import Management from './views/managerNav/Management.vue'
import CustomerTrends from './views/managerNav/CustomerTrends.vue'
import CustomerDistribution from './views/managerNav/CustomerDistribution.vue'
import Asset from './views/managerNav/customersChart.vue'

// user(rm) template
import DailyEvent from './views/userNav/DailyEvent.vue'
import CustomerPositionView from './views/userNav/CustomerPositionView.vue'
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
            { 
                path: '/customer-position/', 
                component: CustomerPositionView, 
                name: 'Customer Position',
                children: [
                    {   
                        path: '/', 
                        component: CustomerPosition, 
                        name: 'Customer Position'
                    },
                    {   
                        path: '/customer-position/:customerId/:accountId', 
                        component: CustomerPositionInfo, 
                        name: 'Customer Position Info'
                    }
                ]
            },
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