import '../scss/skills.scss'
import Vue from 'vue'
import * as mdc from  'material-components-web'
import CompentencesMenu from './components/CompetencesMenu.vue'
import CompentenceView from './components/CompetenceView.vue'
import eventBus from './eventBus/eventBus'

//init material components web
mdc.autoInit();

function initMenu() {
  let drawerEl = document.querySelector('.mdc-persistent-drawer');
  let MDCPersistentDrawer = mdc.drawer.MDCPersistentDrawer;
  let drawer = new MDCPersistentDrawer(drawerEl);
  drawer.open = true; //open by default
  eventBus.$on("toggle-menu",function(){
    drawer.open = !drawer.open;
  })
}

initMenu();

new Vue({
  el: '#competence-view',
  render: h => h(CompentenceView)
})


//initialize competences menu
new Vue({
  el: '#competences-nav',
  render: h => h(CompentencesMenu)
})

