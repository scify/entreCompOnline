import Vue from 'vue'
import 'bootstrap-sass'
import '../scss/index.scss'
import CirclesChart from './circles-chart.js'
import CompetencesGrid from './components/CompetencesGrid.vue'


new Vue({
  el: '#competence-container',
  render: h => h(CompetencesGrid)
})

let circlesChart = new CirclesChart('chart')
circlesChart.drawChart()
