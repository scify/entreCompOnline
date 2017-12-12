<template>
  <footer :class="'comp-area-'+competenceArea.id">
    <div class="demo-grid mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <div class=" mdc-layout-grid__cell">
          <a v-if="previousCompetence" class="footer-text" href="javascript:void(0)"
             @click="selectCompetence(previousCompetence)">
            <i class="material-icons arrow-L" aria-hidden="true">arrow_back</i>
            <span class="direction">Previous</span><span class="screen-reader">:</span>
            <div>{{previousCompetence.name}}</div>
          </a>
        </div>
        <div class="mdc-layout-grid__cell"></div>
        <div class="mdc-layout-grid__cell">
          <a v-if="nextCompetence" class="footer-text" href="javascript:void(0)"
             @click="selectCompetence(nextCompetence)">
            <i class="material-icons arrow-R" aria-hidden="true">arrow_forward</i>
            <span class="direction">Next</span><span class="screen-reader">:</span>
            <div>{{nextCompetence.name}}</div>
          </a>
        </div>
      </div>
    </div>

  </footer>
</template>

<script>
  import _ from 'lodash';
  import eventBus from '../eventBus/eventBus.js'

  export default {
    props: ['competenceArea', 'competence'],
    computed: {
      nextCompetence: function () {
        let index = this.getIndex();
        if (index < this.competenceArea.competences.length - 1)
          return this.competenceArea.competences[index + 1];
        return null;
      },
      previousCompetence: function () {
        let index = this.getIndex();
        if (index !== 0)
          return this.competenceArea.competences[index - 1];

        return null;
      }
    },
    methods: {
      getIndex(){
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
    position: absolute;
    bottom: 0;
    width: 100%;

    a {
      color: white;
    }
  }
</style>
