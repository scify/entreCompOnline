import '../scss/skills.scss'
import Vue from 'vue'
import * as mdc from  'material-components-web'
import CompentencesMenu from './components/CompetencesMenu.vue'
import CompentenceView from './components/CompetenceView.vue'

//init material components web
mdc.autoInit();

function initMenu() {
  let drawerEl = document.querySelector('.mdc-persistent-drawer');
  let MDCPersistentDrawer = mdc.drawer.MDCPersistentDrawer;
  let drawer = new MDCPersistentDrawer(drawerEl);
  drawer.open = true;

  //todo handle this via the event bus.

/*  document.querySelector('.demo-menu').addEventListener('click', function () {
    drawer.open = !drawer.open;
  });*/
}

initMenu();

//initialize competences menu
new Vue({
  el: '#competences-nav',
  render: h => h(CompentencesMenu)
})

new Vue({
  el: '#competence-view',
  render: h => h(CompentenceView)
})
