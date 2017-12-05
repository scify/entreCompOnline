import {Skill} from '../model/skill.js';
import {SkillLevel} from '../model/skillLevel.js';
import * as Levels from './progressionModelCategories.js';

export class IntoAction {
  static mapTakingTheInitiative() {
    return [
      new Skill(
        1,
        'Take responsibility',
        [
          new SkillLevel(1, 'I can carry out the tasks I am given responsibly.', Levels.level1),
          new SkillLevel(2, 'I am comfortable in taking responsibility in shared activities.', Levels.level2),
          new SkillLevel(3, 'I can take individual and group responsibility to carry out simple tasks in valuecreating activities.', Levels.level3),
          new SkillLevel(4, 'I can take individual and group responsibility in value-creating activities.', Levels.level4),
          new SkillLevel(5, 'I can delegate responsibility appropriately.', Levels.level5),
          new SkillLevel(6, 'I can encourage others to take responsibility in value-creating activities.', Levels.level6),
          new SkillLevel(7, 'I take responsibility in complex value-creating activities.', Levels.level7),
          new SkillLevel(8, 'I can take responsibility in seizing new opportunities and when facing unprecedented challenges in value-creating activities.', Levels.level8)
        ]
      ),
      new Skill(
        2,
        'Work independently.',
        [
          new SkillLevel(1, 'I show some independence in carrying out tasks I am given.', Levels.level1),
          new SkillLevel(2, 'I can work independently in simple valuecreating activities.', Levels.level2),
          new SkillLevel(3, 'I can initiate simple valuecreating activities.', Levels.level3),
          new SkillLevel(4, 'I am driven by the possibility of being able to initiate value-creating activities independently.', Levels.level4),
          new SkillLevel(5, 'I can initiate value-creating activities alone and with others.', Levels.level5),
          new SkillLevel(6, 'I can help others work independently.', Levels.level6),
          new SkillLevel(7, 'I praise initiative taken by others and reward it appropriately within my team and organisation.', Levels.level7),
          null
        ]
      ),
      new Skill(
        3,
        'Take action',
        [
          new SkillLevel(1, 'I can have a go at solving problems that affect my surroundings.', Levels.level1),
          new SkillLevel(2, 'I show initiative in dealing with problems that affect my community.', Levels.level2),
          null,
          new SkillLevel(4, 'I actively face challenges, solve problems and seize opportunities to create value.', Levels.level4),
          new SkillLevel(5, 'I take action on new ideas and opportunities, which will add value to a new or existing value-creating venture.', Levels.level5),
          new SkillLevel(6, 'I value others taking the initiative in solving problems and creating value.', Levels.level6),
          new SkillLevel(7, 'I can encourage others to take the initiative in solving problems and creating value within my team and organisation.', Levels.level7),
          null
        ]
      )
    ]
  }

  static mapPlanningAndManagement() {

    return [
      new Skill(
        4,
        'Define goals',
        [
          new SkillLevel(1, 'I can clarify what my goals are in a simple value-creating activity.', Levels.level1),
          new SkillLevel(2, 'I can identify alternative goals to create value in a simple context.', Levels.level2),
          new SkillLevel(3, 'I can describe my goals for the future in line with my strengths, ambitions, interests and achievements.', Levels.level3),
          new SkillLevel(4, 'I can set short-term goals that I can act on.', Levels.level4),
          new SkillLevel(5, 'I can define long-term goals arising from the vision for my (or my team\'s) value-creating activity.', Levels.level5),
          new SkillLevel(6, 'I can match short-term, midterm and longterm goals to the vision for my (or my team\'s) value-creating activity.', Levels.level6),
          new SkillLevel(7, 'I can design a strategy to achieve goals in line with my (or my team\'s) vision.', Levels.level7),
          new SkillLevel(8, 'I can manage the balance between the need for creativity and for control so that my organisation’s capacity to achieve its goals is protected and nurtured.', Levels.level8),
        ]
      ),
      new Skill(
        5,
        'Plan and organize.',
        [
          new SkillLevel(1, 'I can carry out a simple plan for value-creating activities.', Levels.level1),
          new SkillLevel(2, 'I can deal with a range of simple tasks at the same time without feeling uncomfortable.', Levels.level2),
          new SkillLevel(3, 'I can create an action plan which identifies the necessary steps to achieve my goals.', Levels.level3),
          new SkillLevel(4, 'I can allow for the possibility of changes to my plans.', Levels.level4),
          new SkillLevel(5, 'I can summarise the basics of project management.', Levels.level5),
          new SkillLevel(6, 'I can apply the basics of project management in managing a valuecreating activity. ', Levels.level6),
          new SkillLevel(7, 'I can develop and stick to a detailed project management plan, adjusting to changing circumstances to make sure goals are reached.', Levels.level7),
          new SkillLevel(8, 'I can design managerial procedures to effectively deliver value in challenging circumstances.', Levels.level8)
        ])
      ,
      new Skill(
        6,
        'Develop sustainable business plans.',
        [
          null,
          null,
          new SkillLevel(3, 'I can develop a business model for my idea.', Levels.level3),
          new SkillLevel(4, 'I can define the key elements that make up the business model necessary to deliver the value I have identified.', Levels.level4),
          new SkillLevel(5, 'I can develop a business plan based on the model, describing how to achieve the value identified.', Levels.level5),
          new SkillLevel(6, 'I can organise my valuecreating activities using planning methods such as business and marketing plans.', Levels.level6),
          new SkillLevel(7, 'I can keep my planning methods updated and adapt them to changing circumstances.', Levels.level7),
          new SkillLevel(8, 'I can adapt my valuecreating activity’s business model to face new challenges.', Levels.level8)
        ]
      )
      ,
      new Skill(
        7,
        'Define priorities',
        [
          new SkillLevel(1, 'I can recall the order of steps that was needed in a simple value-creating activity I took part in.', Levels.level1),
          new SkillLevel(2, 'I can identify the basic steps that are needed in a value-creating activity.', Levels.level2),
          new SkillLevel(3, 'I can prioritise the basic steps in a value creating activity.', Levels.level3),
          new SkillLevel(4, 'I can set my own priorities and act on them.', Levels.level4),
          new SkillLevel(5, 'I can define the priorities to meet my (or my team’s) vision.', Levels.level5),
          new SkillLevel(6, 'I can stay focused on the priorities set, despite changing circumstances.', Levels.level6),
          new SkillLevel(7, 'I can define priorities in uncertain circumstances, with partial or ambiguous information.', Levels.level7),
          new SkillLevel(8, 'I can adapt my value creating activity’s business model to face new challenges.', Levels.level8),
        ]
      ),
      new Skill(
        8,
        'Monitor your progress',
        [
          new SkillLevel(1, 'I can recognise how much progress I have made on a task.', Levels.level1),
          new SkillLevel(2, 'I can monitor whether a task is going to plan.', Levels.level2),
          new SkillLevel(3, 'I can identify different types of data that are necessary for monitoring the progress of a simple value-creating activity.', Levels.level3),
          new SkillLevel(4, 'I can set basic milestones and observation indicators to monitor the progress of my valuecreating activity.', Levels.level4),
          new SkillLevel(5, 'I can describe different methods for performance and impact monitoring.', Levels.level5),
          new SkillLevel(6, 'I can define what data is needed to monitor how effective my value-creating activities are and an appropriate way to collect them.', Levels.level6),
          new SkillLevel(7, 'I can develop the performance indicators I (or my team) need to monitor progress towards a successful outcome in changing circumstances.', Levels.level7),
          new SkillLevel(8, 'I can design and put in place a datacollection plan to monitor whether my venture is achieving its aims.', Levels.level8)
        ]
      ),
      new Skill(
        9,
        'Be flexible and adapt to changes.',
        [
          new SkillLevel(1, 'I am open to changes.', Levels.level1),
          new SkillLevel(2, 'I can confront and deal with changes in a constructive way.', Levels.level2),
          new SkillLevel(3, 'I can change my plans based on the needs of my team.', Levels.level3),
          new SkillLevel(4, 'I can adapt my plans to achieve my goals in light of changes that are outside my control.', Levels.level4),
          new SkillLevel(5, 'I can embrace change that brings new opportunities for value creation', Levels.level5),
          new SkillLevel(6, 'I can anticipate and include change along the valuecreating process.', Levels.level6),
          new SkillLevel(7, 'I can use the results of monitoring to adjust vision, aims, priorities, resource planning, action steps or any other aspect of the valuecreating process.', Levels.level7),
          new SkillLevel(8, 'I can communicate effectively to the organisation the reason for changes and adjustments.', Levels.level8),

        ]
      )
    ]
  }

  static mapCopyingwithUncertaintyAmbiguityAndRisk() {
    return [
      new Skill(
        10,
        'Cope with uncertainty and ambiguity.',
        [
          new SkillLevel(1, 'I am not afraid of making mistakes while trying new things.', Levels.level1),
          new SkillLevel(2, 'I explore my own ways to achieve things.', Levels.level2),
          new SkillLevel(3, 'I can discuss the role that information plays in reducing uncertainty, ambiguity and risk.', Levels.level3),
          new SkillLevel(4, 'I can actively look for, compare and contrast different sources of information that help me reduce ambiguity, uncertainty, and risks in making decisions.', Levels.level4),
          new SkillLevel(5, 'I can find ways of making decisions when the information is incomplete.', Levels.level5),
          new SkillLevel(6, 'I can pull together different viewpoints to take informed decisions when the degree of uncertainty is high', Levels.level6),
          new SkillLevel(7, 'I can make decisions evaluating the different elements in a situation that is uncertain and ambiguous.', Levels.level7),
          new SkillLevel(8, 'I can set up appropriate strategies for collecting and monitoring data, which help me take decisions based on sound evidence.', Levels.level8)
        ]
      ),
      new Skill(
        11,
        'Calculate risk',
        [
          new SkillLevel(1, 'I can identify examples of risks in my surroundings.', Levels.level1),
          new SkillLevel(2, 'I can describe risks related to a simple value-creating activity in which I take part.', Levels.level2),
          new SkillLevel(3, 'I can tell the difference between acceptable and unacceptable risks.', Levels.level3),
          new SkillLevel(4, 'I can weigh up the risks and benefits of self-employment with alternative career options, and make choices that reflect my preferences.', Levels.level4),
          new SkillLevel(5, 'I can apply the concept of affordable losses to make decisions when creating value.', Levels.level5),
          new SkillLevel(6, 'I can compare value-creating activities based on a risk assessment.', Levels.level6),
          new SkillLevel(7, 'I can assess the risks my venture is exposed to as conditions change.', Levels.level7),
          new SkillLevel(8, 'I can evaluate high-risk long-term investments using a structured approach.', Levels.level8)
        ]
      )
      ,
      new Skill(
        12,
        'Manage risk',
        [
          null,
          null,
          new SkillLevel(3, 'I can critically evaluate the risks associated with an idea that creates value, taking into account a variety of factors.', Levels.level3),
          new SkillLevel(4, 'I can critically evaluate the risks related to the formal setup of a value-creating venture in the area in which I work.', Levels.level4),
          new SkillLevel(5, 'I can demonstrate that I can make decisions by weighing up both the risks and the expected benefits of a value-creating activity.', Levels.level5),
          new SkillLevel(6, 'I can outline a risk management plan for guiding my (or my team\'s) choices while developing my value-creating activity.', Levels.level6),
          new SkillLevel(7, 'I can use strategies to reduce the risks that may arise during the value-creating process.', Levels.level7),
          new SkillLevel(8, 'I can come up with strategies to reduce the risk of my value-creating initiative becoming obsolete.', Levels.level8)
        ]
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
