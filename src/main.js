import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './common/js/iconfont.js'


Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper)
Vue.prototype.bus = new Vue()

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App></App>'
})
