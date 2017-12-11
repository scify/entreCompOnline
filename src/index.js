import Vue from 'vue'
import 'bootstrap-sass'
import '../scss/index.scss'
import './circles-chart.js'
import CompetencesGrid from './CompetencesGrid.vue'


new Vue({
  el: '#competence-container',
  render: h => h(CompetencesGrid)
})
