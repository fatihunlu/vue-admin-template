// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import 'vuetify/dist/vuetify.min.css';
import 'font-awesome/css/font-awesome.css';

import Vuetify from 'vuetify';

import 'material-design-icons-iconfont/dist/material-design-icons.css';
import './styles/global.css';

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

import VueChartkick from 'vue-chartkick';
import Chart from 'chart.js';
import fullCalendar from 'vue-fullcalendar';
import { setupComponents } from './config/setup-components';

Vue.use(VueChartkick, { adapter: Chart });
Vue.component('full-calendar', fullCalendar);

setupComponents(Vue);

Vue.use(Vuetify);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
