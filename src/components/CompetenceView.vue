<template>
  <div id="competence-breakdown" :class="{['comp-area-'+competenceArea.id]:true, open:menuIsOpened}">
    <header class="mdc-toolbar mdc-elevation--z4 bg">
      <div class="mdc-toolbar__row">
        <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
          <button @click="clickMenu()" class="demo-menu material-icons mdc-toolbar__menu-icon">menu</button>
          <span class="mdc-toolbar__title catalog-title">{{competence.name}}</span>
        </section>

        <!--    <section class="mdc-toolbar__section mdc-toolbar__section&#45;&#45;align-end" role="toolbar">
              <a href="/index.html" class="material-icons mdc-toolbar__icon" aria-label="Home" alt="Home">home</a>
            </section>-->


      </div>
    </header>
    <main class="competence-main">
      <h1 class="mdc-typography--display1 color ">{{competence.name}}</h1>
      <h2 class="mdc-typography--title ">{{competence.hint}}</h2>


      <div class="mdc-layout-grid skills-container">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
            <div class="skills bl-color">
              <h1>Required skills </h1>
              <ul>
                <li class="color" v-for="skill in competence.skills">{{skill.name}}</li>
              </ul>
            </div>
            <div style="color:#757575;" class="mdc-typography--body1">
              Mastering these skills gives you the ability to:<br>
              <div v-for="(descr,index) in competence.descriptors"
                   class="mdc-typography--body1"> {{index + 1}}) {{descr}}

              </div>
            </div>
            <a id="assess-tool" href="javascript:void(0)" class="mdc-button mdc-button--unelevated mdc-ripple-upgraded">
              Assess yourself
             </a>
          </div>
          <div id="competences-chart-container" class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6"></div>
        </div>
      </div>

      <aside id="mdc-dialog"
             class="mdc-dialog"
             role="alertdialog"
             aria-labelledby="mdc-dialog-with-list-label"
             aria-describedby="mdc-dialog-with-list-description">
        <div class="mdc-dialog__surface">
          <header class="mdc-dialog__header">
            <h2 id="mdc-dialog-default-label" class="mdc-dialog__header__title">
              Coming Soon!
            </h2>
          </header>
          <section id="mdc-dialog-default-description" class="mdc-dialog__body">
            Thanks for your patience.


          </section>
          <footer class="mdc-dialog__footer">
            <button type="button"
                    class="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel mdc-ripple-upgraded"
                    style="--mdc-ripple-fg-size:53.03999633789062px; --mdc-ripple-fg-scale:1.9881081289759257;">Close


            </button>
          </footer>
        </div>
        <div class="mdc-dialog__backdrop"></div>
      </aside>


    </main>
    <comp-footer v-bind:competence="competence" v-bind:competence-area="competenceArea"></comp-footer>
  </div>
</template>

<script>
  import eventBus from '../eventBus/eventBus.js'
  import extractCompetencesFromUrlMixin from '../mixIns/extractCompetencesFromUrlMixin.js'
  import footer from './CompetencesFooter.vue'
  import CirclesChart from '../circles-chart.js'
  import {MDCDialog} from '@material/dialog';

  let circlesChart = new CirclesChart('competences-chart-container');

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
        eventBus.$emit('toggle-menu');
      }
    },
    mounted(){
      console.log("view is mounted");
      circlesChart.drawChart();
      circlesChart.select(this.competence.id, 'competence'); // select only competences and not areas

      const dialog = new MDCDialog(document.querySelector('#mdc-dialog'));
      document.querySelector('#assess-tool').addEventListener('click', function (evt) {
        dialog.lastFocusedTarget = evt.target;
        dialog.show();
      });
    },
    created()
    {
      let urlInfo = this.findCompetenceFromUrl();
      this.competence = urlInfo.competence;
      this.competenceArea = urlInfo.competenceArea;

      eventBus.$on("MDCPersistentDrawer:open", () => {
        this.menuIsOpened = true;
        setTimeout(function() {
          circlesChart.resizeChart()
        }, 50)
      });
      eventBus.$on("MDCPersistentDrawer:close", () => {
        this.menuIsOpened = false;
        setTimeout(function() {
          circlesChart.resizeChart()
        }, 50)
      });
      eventBus.$on("competence-changed", (comp) => {
        this.competence = comp;
        this.competenceArea = this.findCompetenceAreaByCompetence(comp);
        circlesChart.select(comp.id, 'competence'); // select only competences and not areas
      });
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../scss/config/colors";

  .skills-container {
    padding: 0;
  }

  #assess-tool {
    margin-top: 40px;
  }
  .mdc-toolbar, .mdc-toolbar__row {
    min-height: 56px;
  }



  .skills {
    border-left: 5px solid;
    padding-left: 20px;
    margin-top: 20px;
    margin-bottom: 30px;

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
