import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import "@/assets/style.css"
/* transitions */
import Transitions from 'vue2-transitions'
Vue.use(Transitions)


/* EventHub */
Vue.prototype.$eventHub = new Vue();


/* import router e axios*/
import './plugins/axios'
import router from './router'

/* Bootstrap e Icons */
import { BootstrapVue } from 'bootstrap-vue'
import { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
Vue.use(BootstrapVueIcons)
Vue.use(BootstrapVue)
    /* moment */
import moment from 'moment';
import VueMoment from 'vue-moment';
require('moment/locale/pt-br');

/* icones  */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Choose Locale
moment.locale('pt-br');

Vue.use(VueMoment, { moment });

/* Alertas */
import VueSweetalert2 from "vue-sweetalert2"; //importa a lib
import "sweetalert2/dist/sweetalert2.min.css"; //configura css
Vue.use(VueSweetalert2); //usa a biblioteca

/* Validação */
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.config.productionTip = false

import Alert from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(Alert)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')