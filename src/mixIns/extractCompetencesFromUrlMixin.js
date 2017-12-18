import {competenceAreas} from '../data/competenceAreas.js'
import URLSearchParams from 'url-search-params'

export default {
  methods: {
    findCompetenceFromUrl(){
      let competence = null;
      let competenceArea = null;
      let competenceId = null;
      try {
        competenceId = parseInt(new URLSearchParams(window.location.hash).get("#competence").replace('competence_', ''));
      } catch(e) {
        competenceId = 1; // default value is the first competence
      }

      if (competenceId) {
        for (let area  of competenceAreas) {
          competence = area.getCompetence(competenceId);
          if (competence) {
            competenceArea = area;
            break;
          }
        }
      }
      else { //if no url provided select first
        competenceArea = competenceAreas[0];
        competence = competenceArea.competences[0];
      }

      return {
        competence,
        competenceArea
      }
    },
    findCompetenceAreaByCompetence(competence)
    {
      for (let area  of competenceAreas) {
        if (area.getCompetence(competence.id))
          return area;
      }
    }
  }
}
