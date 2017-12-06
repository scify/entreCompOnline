import Vue from 'vue'
import App from './App.vue'
import 'bootstrap-sass'
import '../scss/common.scss'
import {competences} from './data.js'
import '../lib/circles-chart/carrotsearch.circles.js'

console.log(competences)

new Vue({
  el: '#app',
  render: h => h(App)
})

function customAttributes(opts, params, vars) {
  vars.groupColor = params.group.gcolor
  vars.labelColor = '#000'
}

function formatCompetenciesToGroups() {
  const colorsForAreas = ['#f00', '#0f0', '#00f']
  let competenceAreasGroups = []
  for (let i = 0; i < competences.length; i++) { // competence areas
    let competencesGroups = []
    for (let j = 0; j < competences[i].competences.length; j++) { // competences
      let skillsGroups = []
      // for (let k = 0; k < competences[i].competences[j].skills.length; k++) { // skills
      //   skillsGroups.push({label: competences[i].competences[j].skills[k].name})
      // }
      competencesGroups.push({label: competences[i].competences[j].name, groups: skillsGroups})
    }
    competenceAreasGroups.push({label: competences[i].name, gcolor: colorsForAreas[i], groups: competencesGroups})
  }
  console.log('areas: ', competenceAreasGroups)
  return competenceAreasGroups
}

// initialize chart with some DEMO data
const circles = new window.CarrotSearchCircles({
  id: 'chart',
  groupColorDecorator: customAttributes,
  dataObject: {
    groups: formatCompetenciesToGroups()
  }
})
console.log(circles);
