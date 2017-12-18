<template>
  <div>
    <div class="row comp-area-filters">
      <div class="col-md-12 text-center">
        <a class="comp-area-filter"
           :class="getAreaFilterClass('all')"
           @click="filterCompetencesByArea(-1)"
           href="javascript:void(0)">All</a>
        <a class="comp-area-filter "
           v-for="compArea in competencesAreas"
           :class="getAreaFilterClass(compArea.id)"
           @click="filterCompetencesByArea(compArea.id)"
           href="javascript:void(0)"
        >
          {{compArea.name}}
        </a>
      </div>
    </div>
    <div class="row">
      <template v-for="compArea in filteredCompetencesAreas">
        <div v-for="comp in compArea.competences" class="col-md-4">
          <div class="mdc-card " v-bind:class="'comp-area-'+compArea.id">
            <section class="mdc-card__primary">
              <h1 class="mdc-card__title mdc-card__title--large">{{comp.name}}</h1>
            </section>
            <section class="mdc-card__supporting-text">
              {{comp.hint}}
           </section>
            <section class="mdc-card__actions">
              <a class="mdc-button mdc-button--compact mdc-card__action" v-bind:href="'skills.html#competence='+comp.id">VIEW {{comp.skills.length}} SKILLS</a>
            </section>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import {competenceAreas} from '../data/competenceAreas.js'
  import _ from 'lodash';

  export default {
    data () {
      return {
        selectedAreaId: 1,
        competencesAreas: competenceAreas,
        filteredCompetencesAreas: competenceAreas
      }
    },
    methods: {
      getAreaFilterClass: function (compAreaId) {
        let cssObject = {};
        cssObject.active = compAreaId === this.selectedAreaId;
        cssObject['comp-area-' +compAreaId] = true;
        return cssObject;
      },
      filterCompetencesByArea: function (areaId) {
        this.selectedAreaId = areaId;
        if (areaId===-1)
          this.filteredCompetencesAreas = this.competencesAreas;
        else
          this.filteredCompetencesAreas =[ _.find(this.competencesAreas, (c) => c.id === areaId)];
      }
    }
  }
</script>

<style lang="scss">
  @import "../../scss/config/colors";
  @import "../../node_modules/material-components-web/dist/material-components-web.css";
  .mdc-card {
    border-radius: 5px;
    height: 160px;
    .mdc-card__title {
      font-size: 20px;
      line-height: 1.1em;
    }

    .mdc-card__supporting-text {
      font-size: 14px;
      height: 70px;
      line-height: 1.3em;
    }

    .mdc-button {
      font-size: 15px;
      font-weight: bold;
      margin-left: 5px !important;
    }

    .mdc-card__title, .mdc-button, .mdc-card__supporting-text {
      color: white;
    }
  }

  .comp-area-1 {
    background-color: $dark-blue;
  }

  .comp-area-2 {
    background-color: $crimson;
  }

  .comp-area-3 {
    background-color: $blue;
  }

  .comp-area-filters {
    margin-bottom: 25px;
    margin-top: 20px;
  }

  .comp-area-filter {
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
    text-decoration: none;
    display: inline-block;
    margin-bottom: 5px;
  }

  .comp-area-all {
    background-color: black;
  }

  .comp-area-filter:active, .comp-area-filter:hover, .comp-area-filter.active {
    background-color: $light-blue;
    text-decoration: none;
    color: white;
  }

  .mdc-card {
    margin-bottom: 25px;
  }

  .comp-area-filter {
    margin-right: 15px;
  }
</style>
