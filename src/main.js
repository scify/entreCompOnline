import Vue from 'vue'
import App from './App.vue'
import 'bootstrap-sass'
import {competences} from './data'
import '../scss/common.scss'
import './circles-chart.js'

console.log(competences)

new Vue({
  el: '#app',
  render: h => h(App)
})
