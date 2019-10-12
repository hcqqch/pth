import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import Mock from './mock'
Mock.bootstrap();

Vue.config.productionTip = false
Vue.config.devtools === 'development'

new Vue({
    router,
    store,
    // render: h => h(App) h是createElement另外的写法
    render: h => h(App)
}).$mount('#app')