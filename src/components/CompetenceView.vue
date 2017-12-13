<template>
  <div id="competence-breakdown">
    <header class="mdc-toolbar mdc-elevation--z4" :class="'comp-area-'+competenceArea.id">
      <div class="mdc-toolbar__row">
        <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
          <button @click="clickMenu()" class="demo-menu material-icons mdc-toolbar__menu-icon">menu</button>
          <span class="mdc-toolbar__title catalog-title">{{competence.name}}</span>
        </section>
      </div>
    </header>
    <main class="competence-main">
      <h1 class="mdc-typography--display1">{{competence.hint}}</h1>
      <p v-for="descr in competence.descriptors" class="mdc-typography--body1">{{descr}}</p>

      <ul class="mdc-typography--body2">
        <li v-for="skill in competence.skills">{{skill.name}}</li>
      </ul>
    </main>
    <comp-footer v-bind:competence="competence" v-bind:competence-area="competenceArea"></comp-footer>
  </div>
</template>

<script>
  import eventBus from '../eventBus/eventBus.js'
  import extractCompetencesFromUrlMixin from '../mixIns/extractCompetencesFromUrlMixin.js'
  import footer from './CompetencesFooter.vue'

  export default {
    mixins: [extractCompetencesFromUrlMixin],
    components: {
      "comp-footer": footer
    },
    data () {
      return {
        competence: null,
        competenceArea: null
      }
    },
    methods: {
      clickMenu()
      {
        eventBus.$emit('toggle-menu');
      }
    }
    ,
    created()
    {
      let urlInfo = this.findCompetenceFromUrl();
      this.competence = urlInfo.competence;
      this.competenceArea = urlInfo.competenceArea;

      eventBus.$on("competence-changed", (comp) => {
          this.competence = comp;
          this.competenceArea = this.findCompetenceAreaByCompetence(comp);
        }
      );
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../scss/config/colors";

.mdc-toolbar__title{
  font-weight:400;
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
</style>
