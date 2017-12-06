import Vue from 'vue'
import App from './App.vue'
import 'bootstrap-sass';
import {competences} from './data.js'
import "../scss/custom.scss";

console.log(competences)

new Vue({
  el: '#app',
  render: h => h(App)
})
