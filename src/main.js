import Vue from 'vue'
import App from './App.vue'
import {competences} from './data.js'

console.log(competences);

new Vue({
  el: '#app',
  render: h => h(App)
})
