import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/index'
import Classify from '../pages/classify/index'
import Cart from '../pages/cart/index'
import User from '../pages/user/index'
import Detail from '../pages/detail/index'
import Default from '../pages/public/default'


Vue.use(Router)


export default new Router({
  linkActiveClass: '',
  linkExactActiveClass: 'activeF',
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  },
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/classify',
    name: 'classify',
    component: Classify
  }, {
    path: '/cart',
    name: 'cart',
    component: Cart
  }, {
    path: '/user',
    name: 'user',
    component: User
  }, {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }, {
    path: '/default/',
    name: 'default',
    component: Default
  }]
})
