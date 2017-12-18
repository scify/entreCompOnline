import Vue from 'vue'
import $ from 'jquery';
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
circlesChart.resizeChart()

const scrollToArea = function () {
  let target = $($(this).attr('href'));
  if (target.length)
      $('html,body').animate({scrollTop: target.offset().top}, 500);
  return false;
}

$(function () {
  $("body").on("click", ".navbar-nav .scroll", scrollToArea)
})
