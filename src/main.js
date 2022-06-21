import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/axios'

Vue.config.productionTip = false
import 'bootstrap-vue/dist/bootstrap-vue.css'


//import bootstrap e transition
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Transitions from 'vue2-transitions'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Transitions)

//CSS
import '@/assets/css/style.css'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')