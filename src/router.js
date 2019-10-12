import Vue from 'vue'
import router from 'vue-router'
import Home from './components/Home.vue'
import List from './views/List.vue'
import Form from './views/Form.vue'
import About from './views/About.vue'

Vue.use(router)
const originalPush = router.prototype.push
router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default new router({
    routes: [
        // {
        //     path: '/',
        //     name: 'home',
        //     component: Home
        // },
        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () =>
        //         import ( /* webpackChunkName: "about" */ './views/About.vue')
        // }, {
        //     path: '/form',
        //     name: 'form',
        //     component: () =>
        //         import ( /* webpackChunkName: "about" */ './views/Form.vue')
        // },
        {
            path: '/',
            component: Home,
            name: '导航一',
            iconCls: 'el-icon-message', //图标样式class
            children: [
                { path: '/list', component: List, name: 'List' },
                { path: '/form', component: Form, name: 'Form' },
                { path: '/about', component: About, name: 'About' },
            ]
        },
        // {
        //     path: '/',
        //     component: Home,
        //     name: '导肮二',
        //     iconCls: 'el-icon-message', //图标样式class
        //     children: [
        //         { path: '/list', component: List, name: 'List' },
        //         { path: '/form', component: Form, name: 'Form' },
        //         { path: '/about', component: About, name: 'About' },
        //     ]
        // },
    ]
})