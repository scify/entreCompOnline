<template>
  <div class="mdc-list-group">
    <template v-for="compArea in competencesAreas">
      <h3 class="mdc-list-group__subheader">{{compArea.name}}</h3>
      <ul class="mdc-list" :class="'comp-area-'+compArea.id">
        <li v-for="comp in compArea.competences"
            class="mdc-list-item"
            :class="{active: comp.id == (selectedCompetence? selectedCompetence.id:-1) }"
            @click="selectCompetence(comp)">
          <i class="mdc-list-item__start-detail material-icons" aria-hidden="true">fiber_manual_record</i>
          <span>{{comp.name}}</span>

        </li>
      </ul>
      <hr class="mdc-list-divider">
    </template>
  </div>
</template>

<script>
  import {competenceAreas} from '../data/competenceAreas.js'
  import UrlSearchParams from 'url-search-params'
  import _ from 'lodash';
  import eventBus from '../eventBus/eventBus.js'
  import extractCompetencesFromUrlMixin from '../mixIns/extractCompetencesFromUrlMixin.js'

  export default {
    mixins: [extractCompetencesFromUrlMixin],
    data () {
      return {
        selectedCompetence: null,
        competencesAreas: competenceAreas
      }
    },
    methods: {
      selectCompetence(comp){
        this.selectedCompetence = comp;
        eventBus.$emit("competence-changed", comp);
        //todo: url should be updated too
      }
    },
    created(){
      let urlInfo = this.findCompetenceFromUrl()
      this.selectedCompetence = urlInfo.competence;

      eventBus.$on("competence-changed", (comp) => {
          this.selectedCompetence = comp;
        }
      );

    }
  }
</script>

<style lang="scss" scoped>
  @import "../../scss/config/colors";


  .mdc-list-group {
    overflow-y: scroll;
  }
  .mdc-list-group__subheader {
    padding: 0 16px;
    color: gray;

  }

  .mdc-list-item span {
    max-width: 260px;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .mdc-list-item {
    font-size: 1rem;
    font-weight: 400;
  }

  .comp-area-1 .active, .comp-area-1 .active .mdc-list-item__start-detail {
    color: $dark-blue;

  }

  .comp-area-2 .active, .comp-area-2 .active .mdc-list-item__start-detail {
    color: $crimson;
  }

  .comp-area-3 .active, .comp-area-3 .active .mdc-list-item__start-detail {
    color: $blue;
    font-weight:500;
  }


</style>
