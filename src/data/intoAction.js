import {Skill} from '../model/skill.js';
import {SkillLevel} from '../model/skillLevel.js';
import * as Levels from './progressionModelCategories.js';

export class IntoAction {
  static mapTakingTheInitiative() {
    return [
      new Skill(
        1,
        'Take responsibility',
        []
      ),
      new Skill(
        2,
        'Work independently.',
        []
      ),
      new Skill(
        3,
        'Take action',
        []
      )
    ]
  }

  static mapPlanningAndManagement() {

    return [
      new Skill(
        4,
        'Define goals',
        []
      ),
      new Skill(
        5,
        'Plan and organize.',
        [])
      ,
      new Skill(
        6,
        'Develop sustainable business plans.',
        []
      )
      ,
      new Skill(
        7,
        'Define priorities',
        []
      ),
      new Skill(
        8,
        'Monitor your progress',
        []
      ),
      new Skill(
        9,
        'Be flexible and adapt to changes.',
        []
      )
    ]
  }

  static mapCopyingwithUncertaintyAmbiguityAndRisk() {
    return [
      new Skill(
        10,
        'Cope with uncertainty and ambiguity.',
        []
      ),
      new Skill(
        11,
        'Calculate risk',
        []
      )
      ,
      new Skill(
        12,
        'Manage risk',
        []
      )
    ]
  }

  static mapWorkingWithOthers() {
    return [
      new Skill(
        13,
        'Accept diversity (people’s differences).',
        []
      ),
      new Skill(
        14,
        'Develop emotional intelligence.',
        []
      )
      ,
      new Skill(
        15,
        'Listen actively',
        []
      )
      ,
      new Skill(
        16,
        'Team up',
        []
      )
      ,
      new Skill(
        17,
        'Work together',
        []
      )
      ,
      new Skill(
        18,
        'Expand your network',
        []
      )
    ]
  }

  static mapLearnThroughExperience() {
    return [
      new Skill(
        19,
        'Reflect',
        []
      ),
      new Skill(
        20,
        'Learn to learn.',
        []
      )
      ,
      new Skill(
        21,
        'Learn from experience',
        []
      )
    ]
  }
}
