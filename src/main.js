// main.js

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';

import VueRouter from 'vue-router';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueAxios, axios)


Vue.config.productionTip = false;

import RegisterComponent from './components/RegisterComponent.vue';

const routes = [
  {
    name: 'register',
    path: '/register',
    component: RegisterComponent
}
];

export default new Vuex.Store({
  module  : {},
  
})




const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');

