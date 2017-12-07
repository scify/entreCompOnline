/*eslint no-unused-vars: "off"*/
import {competences} from './data'
import '../lib/circles-chart/carrotsearch.circles.js'

const alphas = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7]

function getRGBAString(hex, alpha) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  let red = parseInt(result[1], 16)
  let green =  parseInt(result[2], 16)
  let blue =  parseInt(result[3], 16)
  return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')'
}

function customAttributes(opts, props, vars) {
  vars.groupColor = getRGBAString(props.group.gcolor, (props.level === 0) ? 0.7 : alphas[props.index])
  vars.labelColor = '#000'
}

function formatCompetenciesToGroups() {
  const colorsForAreas = ['0000ff', 'ff0000', '00ff00']
  let competenceAreasGroups = []
  for (let i = 0; i < competences.length; i++) { // competence areas
    let competencesGroups = []
    for (let j = 0; j < competences[i].competences.length; j++) { // competences
      let skillsGroups = []
      for (let k = 0; k < competences[i].competences[j].skills.length; k++) { // skills
        skillsGroups.push({label: competences[i].competences[j].skills[k].name, gcolor: colorsForAreas[i]})
      }
      competencesGroups.push({label: competences[i].competences[j].name, gcolor: colorsForAreas[i], groups: skillsGroups})
    }
    competenceAreasGroups.push({label: competences[i].name, gcolor: colorsForAreas[i], groups: competencesGroups})
  }
  return competenceAreasGroups
}

const circles = new window.CarrotSearchCircles({
  id: 'chart',
  groupColorDecorator: customAttributes,
  dataObject: {
    groups: formatCompetenciesToGroups()
  },
  ringScaling: 1,
  pullbackTime: 2,
  pullbackAnimation: 'tumbler',
  groupSelectionOutlineColor: 'rgba(48, 65, 93, 1)', // $blue
  groupSelectionColor: 'rgba(3, 20, 36, 0.15)', // $dark-blue
  noTexturingCurvature: 0,
  radialTextureStep: 50,
  angularTextureStep: 15,
})
