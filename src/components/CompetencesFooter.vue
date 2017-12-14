<template>
  <footer class="bg">
    <div class="footer-column">
      <a v-if="previousCompetence" class="footer-text" href="javascript:void(0)"
         @click="selectCompetence(previousCompetence)">
        <i class="material-icons arrow" aria-hidden="true">arrow_back</i>
        <span class="direction">Previous</span><span class="screen-reader">:</span>
        <div class="competence-name">{{previousCompetence.name}}</div>
      </a>
    </div>
    <div class="footer-column">
      <a v-if="nextCompetence" class="footer-text" href="javascript:void(0)"
         @click="selectCompetence(nextCompetence)">
        <i class="material-icons arrow " aria-hidden="true">arrow_forward</i>
        <span class="direction">Next</span><span class="screen-reader">:</span>
        <div class="competence-name">{{nextCompetence.name}}</div>
      </a>
    </div>
  </footer>
</template>

<script>
  import _ from 'lodash';
  import eventBus from '../eventBus/eventBus.js'
  import {competenceAreas} from '../data/competenceAreas.js'

  export default {
    props: ['competenceArea', 'competence'],
    computed: {
      nextCompetence: function () {
        let index = this.getCompetenceIndex();
        if (index < this.competenceArea.competences.length - 1)
          return this.competenceArea.competences[index + 1];
        else {
          let areaIndex = this.getAreaIndex();
          if (areaIndex < competenceAreas.length-1)
          {
            //select the first item from the next competence area
            return competenceAreas[areaIndex+1].competences[0];
          }

        }
        return null;
      },
      previousCompetence: function () {
        let index = this.getCompetenceIndex();
        if (index !== 0)
          return this.competenceArea.competences[index - 1];
        else{
            let areaIndex = this.getAreaIndex();
            if (areaIndex>0) //select the last competence from the previous competence area
                return  _.last(competenceAreas[areaIndex-1].competences);
        }
        return null;
      }
    },
    methods: {
      getAreaIndex(){
        let areaIndex = _.findIndex(competenceAreas, a => a.id === this.competenceArea.id);
        return areaIndex;
      },
      getCompetenceIndex(){
        let index = _.findIndex(this.competenceArea.competences, c => c.id === this.competence.id);
        return index;
      },
      selectCompetence(comp){
        eventBus.$emit("competence-changed", comp);
      }
    }
  }
</script>

<style lang="scss">
  footer {
    min-height: 96px;
    display: flex;
    justify-content: space-between;
    -webkit-font-smoothing: antialiased;
    align-items: center;
    font-weight: 500;

    .competence-name {
      white-space: nowrap;
    }
    .arrow {
      padding-top: 23px;
      width: 24px;
    }
    .footer-column:first-child {
      margin-left: 76px;
      .arrow {
        float: left;
        margin-right: 10px;
      }
      @media screen and (max-width: 800px) {
       .competence-name,.direction{display:none;}
        margin-left: 35px;
      }
    }
    .footer-column:last-child {
      margin-right: 76px;
      .competence-name {
        margin-right: 35px;
      }
      .arrow {
        float: right;
        margin-left: 10px;
      }
      @media screen and (max-width: 800px) {
        margin-right: 35px;
      }
    }
    .screen-reader {
      position: absolute;
      left: -10000px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }
    .direction {
      font-size: 15px;
      color: rgba(255, 255, 255, .55);
      line-height: 18px;
      margin-bottom: 1px;
    }
    a {
      color: white;
      text-decoration: none;
      font-size: 20px;
    }


  }
</style>
