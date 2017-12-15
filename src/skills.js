import '../scss/skills.scss'
import Vue from 'vue'
import * as mdc from  '@material/drawer'
import CompentencesMenu from './components/CompetencesMenu.vue'
import CompentenceView from './components/CompetenceView.vue'
import eventBus from './eventBus/eventBus'

function initMenu() {
  let drawerEl = document.querySelector('.mdc-persistent-drawer');
  let drawer = new mdc.MDCPersistentDrawer(drawerEl);
  drawer.open = true; //open by default
  eventBus.$on("toggle-menu",function(){
    drawer.open = !drawer.open;
  })

  drawerEl.addEventListener('MDCPersistentDrawer:open', function() {
    console.log('MDCPersistentDrawer:open');
    eventBus.$emit('MDCPersistentDrawer:open');
  });
  drawerEl.addEventListener('MDCPersistentDrawer:close', function() {
    console.log('MDCPersistentDrawer:close');
    eventBus.$emit('MDCPersistentDrawer:close');
  });


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


