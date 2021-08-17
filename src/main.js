import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios,axios)//安装插件
axios.defaults.baseURL='/api'//配置全局的默认地址
// 配置swiper
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);
// 
import {currency,factPrice} from '@/utils/filters'
Vue.filter('currency',currency)
Vue.filter('factPrice',factPrice)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
