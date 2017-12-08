import Vue from 'vue'
import 'bootstrap-sass'
import {competences} from './data'
import '../scss/index.scss'
import './circles-chart.js'
import CompetencesGrid from './CompetencesGrid.vue'

console.log(competences)

new Vue({
  el: '#competences-container',
  render: h => h(CompetencesGrid)
})
