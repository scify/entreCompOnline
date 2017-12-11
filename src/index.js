import Vue from 'vue'
import 'bootstrap-sass'
import '../scss/index.scss'
import './circles-chart.js'
import CompetencesGrid from './CompetencesGrid.vue'


new Vue({
  el: '#competenceAreas-container',
  render: h => h(CompetencesGrid)
})
