import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Router from 'vue-router'
import Lr3 from '@/components/Lr3'

Vue.use(BootstrapVue)
Vue.use(Router)

Vue.config.productionTip = false
const routes = [
  { path: '/lr3', component: Lr3 },
  { path: '/', component: Lr3 }
]

const router = new Router({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
