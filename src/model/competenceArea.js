import _ from 'lodash';
export class CompetenceArea {
  constructor(id, name,competences) {
    this.id = id;
    this.name = name;
    this.competences = competences;
  }

  getCompetence(competence_id){
    return _.find(this.competences, (c) => c.id === competence_id);
  }

}
