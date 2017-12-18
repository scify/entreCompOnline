import {competenceAreas} from './data/competenceAreas.js'
import '../lib/circles-chart/carrotsearch.circles.js'
import styles from '../scss/config/colors.scss'

export default class CirclesChart {
  constructor(container) {
    this.container = container
    this.chart = null
    this.oldDataObject = null
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
      rolloutTime: 0,
      pullbackTime: 0,
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
    window.addEventListener("resize", () => {
      this.resizeChart()
    })
  }

  resizeChart() {
    // when container of the chart is narrow, keep old data and do not display chart
    if (window.innerWidth <= 860) {
      document.getElementById(this.container).style.display = 'none'
      this.oldDataObject = this.oldDataObject || this.chart.get('dataObject')
      this.chart.set('dataObject', null)
    } else { // else, reset data if needed and then resize chart
      if (this.chart.get('dataObject') == null && this.oldDataObject != null) {
        document.getElementById(this.container).style.display = 'block'
        this.chart.set('dataObject', this.oldDataObject)
        this.oldDataObject = null
      }
      this.chart.resize() // on window resize, resize circles chart as well
    }
  }

  select(id, type) {
    let selectedId = type + '_' + id
    this._grayScaleNonSelectedDataObjectItems(selectedId)
    this.chart.set('selection', {all: true, selected: false})
    this.chart.set('selection', selectedId)
    window.location.href = "#competence=" + selectedId;
    this.resizeChart()
  }

  _grayScaleNonSelectedDataObjectItems(selectedId) {
    let dataObject = this.chart.get('dataObject')
    for (let i = 0; i < dataObject.groups.length; i++) { // competence areas
      let foundSelectedIdInThisArea = false
      for (let j = 0; j < dataObject.groups[i].groups.length; j++) { // competences
        let isSelectedItem = dataObject.groups[i].groups[j].id === selectedId
        if (isSelectedItem)
          foundSelectedIdInThisArea = true
        let newCompetenceAlpha = (isSelectedItem) ? 1 : 0.1
        dataObject.groups[i].groups[j].gcolor = (isAlreadyRGBAString(dataObject.groups[i].groups[j].gcolor)) ?
          changeAlpha(dataObject.groups[i].groups[j].gcolor, newCompetenceAlpha) :
            getRGBAString(dataObject.groups[i].groups[j].gcolor, newCompetenceAlpha)
      }
      let newAreaAlpha = (foundSelectedIdInThisArea) ? 0.6 : 0.2
      dataObject.groups[i].gcolor = (isAlreadyRGBAString(dataObject.groups[i].gcolor)) ?
        changeAlpha(dataObject.groups[i].gcolor, newAreaAlpha) :
        getRGBAString(dataObject.groups[i].gcolor, newAreaAlpha)
    }
    this.chart.set('dataObject', [])
    this.chart.set('dataObject', dataObject)
  }
}

// configuration constant variables
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

function changeAlpha(rgbaString, newAlpha) {
  let colorStrippedDownToNumbers = rgbaString.replace('rgba(', '')
  colorStrippedDownToNumbers = colorStrippedDownToNumbers.replace(')', '')
  let splitResult = colorStrippedDownToNumbers.split(',')
  return `rgba(${splitResult[0]},${splitResult[1]},${splitResult[2]}, ${newAlpha})`
}

function isAlreadyRGBAString(color) {
  return color.indexOf('rgba') !== -1;
}

function customColorDecorator(opts, props, vars) {
  vars.groupColor = (isAlreadyRGBAString(props.group.gcolor)) ?
    props.group.gcolor :
      getRGBAString(props.group.gcolor, (props.level === 0) ? 0.8 : 1)
  vars.labelColor = styles.chartFontColor
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
