import {competences} from './data'
import '../lib/circles-chart/carrotsearch.circles.js'

// configuration constant variables
const alphas = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7]
const colorsForAreas = ['#0000ff', '#ff0000', '#00ff00']
const groupSelectionOutlineColor = '#30415d' // $blue
const groupSelectionColor = getRGBAString('#000000', 0.15)

/**
 * Transform hex color string to RGBA color string
 * @param hex The color as hex
 * @param alpha (optional) The alpha, used in the RGBA string (default: 1)
 * @returns {string}
 */
function getRGBAString(hex, alpha) {
  alpha = alpha || 1
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  let red = parseInt(result[1], 16)
  let green =  parseInt(result[2], 16)
  let blue =  parseInt(result[3], 16)
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

function customColorDecorator(opts, props, vars) {
  vars.groupColor = getRGBAString(props.group.gcolor, (props.level === 0) ? 0.7 : alphas[props.index])
  vars.labelColor = '#000'
}

function formatCompetenciesToGroups() {
  let competenceAreasGroups = []
  for (let i = 0; i < competences.length; i++) { // competence areas
    let competencesGroups = []
    for (let j = 0; j < competences[i].competences.length; j++) { // competences
      let skillsGroups = []
      // for (let k = 0; k < competences[i].competences[j].skills.length; k++) { // skills
      //   skillsGroups.push({id: competences[i].competences[j].skills[k].id, type: 'skill', label: competences[i].competences[j].skills[k].name, gcolor: colorsForAreas[i]})
      // }
      competencesGroups.push({id: competences[i].competences[j].id, type: 'competence', label: competences[i].competences[j].name, gcolor: colorsForAreas[i], groups: skillsGroups})
    }
    competenceAreasGroups.push({id: competences[i].id, type: 'competence_area', label: competences[i].name, gcolor: colorsForAreas[i], groups: competencesGroups})
  }
  return competenceAreasGroups
}

// initialize chart
let circles = new window.CarrotSearchCircles({
  id: 'chart',
  groupColorDecorator: customColorDecorator,
  dataObject: {
    groups: formatCompetenciesToGroups()
  },
  ringScaling: 1,
  groupSelectionOutlineColor: groupSelectionOutlineColor,
  groupSelectionColor: groupSelectionColor,
  noTexturingCurvature: 0,
  radialTextureStep: 50,
  angularTextureStep: 15,
  groupFontFamily: 'sans-serif',
  rolloutAnimation: 'tumble',
  visibleGroupCount: 0, // display all groups
  titleBar: 'inscribed',
  titleBarTextColor: "#000",
  titleBarMinFontSize: 18,
  titleBarMaxFontSize: 18,
  onBeforeZoom: function () {
    // disable zoom
    return false
  },
  onGroupClick: function (info) {
    // TODO: display correct modal with cards
    alert(`You clicked the group entitled '${info.group.label}' (id: ${info.group.id}, type: ${info.group.type})`)
    console.log('Info: ', info)
  }
})

// event handlers
window.addEventListener("resize", function() {
  // on window resize, resize circles chart as well
  circles.resize()
})
