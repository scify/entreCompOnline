import {competenceAreas} from '../data/competenceAreas.js'
import URLSearchParams from 'url-search-params'

export default {
  methods: {
    findCompetenceFromUrl(){
      let competenceId = parseInt(new URLSearchParams(window.location.hash).get("#competence"));
      let competence = null;
      let competenceArea = null;
      for (let area  of competenceAreas) {
        competence = area.getCompetence(competenceId);
        if (competence)
          competenceArea = area;
        break;
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
