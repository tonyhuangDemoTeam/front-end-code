import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'

// manager template
import Management from './views/pmNav/Management.vue'
import CustomerTrends from './views/pmNav/CustomerTrends.vue'
import CustomerDistribution from './views/pmNav/CustomerDistribution.vue'
import Asset from './views/pmNav/customersAsset.vue'

// user(rm) template
import DailyEvent from './views/rmNav/DailyEvent.vue'
import CustomerPositionView from './views/rmNav/CustomerPositionView.vue'
import CustomerPosition from './views/rmNav/CustomerPosition.vue'
import CustomerPositionInfo from './views/rmNav/CustomerPositionInfo.vue'
import Transaction from './views/rmNav/Transaction.vue'
import Connectivity from './views/rmNav/Connectivity.vue'

// admin template
import CreateUser from './views/adminNav/CreateUser.vue'

var routes = [
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
        meta: "pm",
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
        meta: "pm",
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
        meta: "pm",
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