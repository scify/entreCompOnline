<template>
  <div id="competence-breakdown" :class="{['comp-area-'+competenceArea.id]:true, open:menuIsOpened}">
    <header class="mdc-toolbar mdc-elevation--z4 bg">
      <div class="mdc-toolbar__row">
        <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
          <button @click="clickMenu()" class="demo-menu material-icons mdc-toolbar__menu-icon">menu</button>
          <span class="mdc-toolbar__title catalog-title">{{competence.name}}</span>
        </section>
      </div>
    </header>
    <main class="competence-main">
      <h1 class="mdc-typography--display1 color ">{{competence.name}}</h1>
      <h2 class="mdc-typography--title ">{{competence.hint}}</h2>

      <div style="color:#757575;" class="mdc-typography--body1">
        Mastering these skills gives you the ability to:<br>
        <span v-for="(descr,index) in competence.descriptors"  class="mdc-typography--body1"> {{index+1}}) {{descr}}</span>
      </div>

      <div class="skills bl-color">
        <h1>Required skills </h1>
        <ul>
          <li class="color" v-for="skill in competence.skills">{{skill.name}}</li>
        </ul>
      </div>

      <a href="javascript:void(0)" class="mdc-button mdc-button--unelevated mdc-ripple-upgraded" >
       Assess your self
      </a>


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
        competenceArea: null,
        menuIsOpened: true
      }
    },
    methods: {
      clickMenu()
      {
        this.menuIsOpened = !this.menuIsOpened;
        eventBus.$emit('toggle-menu');
      }
    },
    mounted(){
        console.log("view is mounted");
        //configure circles.js here.
    },
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

  .mdc-toolbar__row {
    min-height: 56px;
  }

  .skills {
    border-left: 5px solid;
    padding-left: 20px;
    margin-top: 40px;
    margin-bottom: 50px;

    h1 {
      margin: 0;
      font-size: 15px;
      line-height: 16px;
      padding-bottom: 12px;
      font-weight: 400;
      color: #757575;
    }

    ul {
      list-style: none;
      margin-top: 0;
      padding-left: 0;
    }

    li {
      font-size: 20px;
      line-height: 40px;
    }
  }

  .mdc-toolbar__title {
    font-weight: 400;
  }

  .mdc-typography--title {
    font-weight: 400;
  }

  .comp-area-1 {
    .bg {
      background-color: $dark-blue;
    }
    .color {
      color: $dark-blue;
    }
    .bl-color {
      border-left-color: $dark-blue;
    }

  }

  .comp-area-2 {
    .bg {
      background-color: $crimson;
    }
    .color {
      color: $crimson;
    }
    .bl-color {
      border-left-color: $crimson;
    }
  }

  .comp-area-3 {
    .bg {
      background-color: $blue;
    }
    .color {
      color: $blue;
    }
    .bl-color {
      border-left-color: $blue;
    }

  }
</style>
