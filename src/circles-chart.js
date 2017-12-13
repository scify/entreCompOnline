import {competenceAreas} from './data/competenceAreas.js'
import '../lib/circles-chart/carrotsearch.circles.js'
import styles from '../scss/config/colors.scss'

export default class CirclesChart {
  constructor(container) {
    this.container = container
    this.chart = null
  }
  drawChart() {
    // initialize chart
    this.chart = new window.CarrotSearchCircles({
      id: this.container,
      groupColorDecorator: customColorDecorator,
      dataObject: {
        groups: formatCompetenciesToGroups()
      },
      ringScaling: 1,
      groupOutlineColor: "#fff",
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
        //  alert(`You clicked the group entitled '${info.group.label}' (id: ${info.group.id}, type: ${info.group.type})`)
        if (info.group.type==="competence")
          window.location.href = "skills.html#competence="+info.group.id;
      }
    })

    // event handlers
    window.addEventListener("resize", function() {
      // on window resize, resize circles chart as well
      this.chart.resize()
    })
  }

  select(id, type) {
    // console.log(`${id} is selected`)
    this.chart.set('selection', {all: true, selected: false})
    this.chart.set('selection', type + '_' + id)
  }
}
// configuration constant variables
//const alphas = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7]
const colorsForAreas = [styles.ideasAndOpportunitiesColor, styles.resourcesColor, styles.introActionColor]
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
  vars.groupColor = getRGBAString(props.group.gcolor, (props.level === 0) ? 0.8 : 1);
  vars.labelColor = "#fff";//styles.chartFontColor
}

function formatCompetenciesToGroups() {
  let competenceAreasGroups = []
  for (let i = 0; i < competenceAreas.length; i++) { // competence areas
    let competencesGroups = []
    for (let j = 0; j < competenceAreas[i].competences.length; j++) { // competenceAreas
      let skillsGroups = []
      // for (let k = 0; k < competenceAreas[i].competenceAreas[j].skills.length; k++) { // skills
      //   skillsGroups.push({id: competenceAreas[i].competenceAreas[j].skills[k].id, type: 'skill', label: competenceAreas[i].competenceAreas[j].skills[k].name, gcolor: colorsForAreas[i]})
      // }
      competencesGroups.push({id: 'competence_' + competenceAreas[i].competences[j].id, type: 'competence', label: competenceAreas[i].competences[j].name, gcolor: colorsForAreas[i], groups: skillsGroups})
    }
    competenceAreasGroups.push({id: 'competence_area_' + competenceAreas[i].id, type: 'competence_area', label: competenceAreas[i].name, gcolor: colorsForAreas[i], groups: competencesGroups})
  }
  return competenceAreasGroups
}
