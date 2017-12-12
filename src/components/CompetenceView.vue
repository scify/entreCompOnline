<template>
  <div id="competence-breakdown">
    <header class="mdc-toolbar mdc-elevation--z4">
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
  </div>
</template>

<script>
  import eventBus from '../eventBus/eventBus.js'

  export default {
    data () {
      return {
        competence: null
      }
    },
    methods: {
      clickMenu(){
        eventBus.$emit('toggle-menu');
      }
    },
    created() {

      eventBus.$on("competence-changed", (comp) => {
          this.competence = comp;
          console.log(comp);
        }
      );
    }
  }
</script>

<style lang="scss">

</style>
