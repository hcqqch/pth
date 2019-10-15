import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import Mock from './mock'
Mock.bootstrap();

Vue.config.productionTip = false
Vue.config.devtools === 'development'

router.beforeEach((to, from, next) => {
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

// router.beforeEach((to, from, next) => {
//     if (to.path == '/login') {
//         sessionStorage.removeItem('user');
//     }
//     let user = JSON.parse();
// })
// store.commit('increment', { amount: 30 })
// store.commit({
//     type: 'increment',
//     amount: 30
// })

store.commit({
    type: 'INCREMENT'
})

// store.dispatch('increment')

new Vue({
    router,
    store,
    // render: h => h(App) h是createElement另外的写法
    render: h => h(App)
}).$mount('#app')