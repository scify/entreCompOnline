<template>
  <div>
    <div class="row comp-area-filters">
      <div class="col-md-12 text-center">
        <a class="comp-area-filter active" href="#" >All</a>
        <a class="comp-area-filter" href="#" v-for="compArea in competencesAreas">
          {{compArea.name}}
        </a>
      </div>
    </div>
    <div class="row">
      <template v-for="compArea in competencesAreas">
        <div v-for="comp in compArea.competences" class="col-md-4">
          <div class="mdc-card " v-bind:class="'comp-area-'+compArea.id" >
            <section class="mdc-card__primary">
              <h1 class="mdc-card__title mdc-card__title--large">{{comp.name}}</h1>
            </section>
            <section class="mdc-card__supporting-text">
              {{comp.hint}}
            </section>
            <section class="mdc-card__actions">
              <a class="mdc-button mdc-button--compact mdc-card__action">view {{comp.skills.length}} skills </a>
            </section>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import {competences} from './data'

  export default {
    data () {
      return {
        competencesAreas: competences
      }
    }
  }
</script>

<style lang="scss">
  @import "../scss/config/colors";

  .mdc-card__title{
    font-size:17px;
  }
  .mdc-card__supporting-text{
    font-size:14px;
    height: 40px;
    line-height:1.1em;
  }
  .mdc-button
  {
   font-size:12px;
  }
  .mdc-card__title,.mdc-button,.mdc-card__supporting-text{
    color:white;
  }
  .comp-area-1 {
    background-color:$dark-blue;
  }
  .comp-area-2 {
    background-color:$crimson;
  }
  .comp-area-3 {
    background-color:$blue;
  }
  .comp-area-filters
  {
    margin-bottom:25px;
  }

  .mdc-card{
    margin-bottom:25px;
  }

  .comp-area-filter
  {
    margin-right:15px;
  }
</style>
