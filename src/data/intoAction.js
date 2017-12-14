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
          new SkillLevel(3, 'I can take individual and group responsibility to carry out simple tasks in value-creating activities.', Levels.level3),
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
          new SkillLevel(2, 'I can work independently in simple value-creating activities.', Levels.level2),
          new SkillLevel(3, 'I can initiate simple value-creating activities.', Levels.level3),
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
          new SkillLevel(6, 'I can match short-term, midterm and long-term goals to the vision for my (or my team\'s) value-creating activity.', Levels.level6),
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
          new SkillLevel(6, 'I can apply the basics of project management in managing a value-creating activity. ', Levels.level6),
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
          new SkillLevel(6, 'I can organise my value-creating activities using planning methods such as business and marketing plans.', Levels.level6),
          new SkillLevel(7, 'I can keep my planning methods updated and adapt them to changing circumstances.', Levels.level7),
          new SkillLevel(8, 'I can adapt my value-creating activity’s business model to face new challenges.', Levels.level8)
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
          new SkillLevel(4, 'I can set basic milestones and observation indicators to monitor the progress of my value-creating activity.', Levels.level4),
          new SkillLevel(5, 'I can describe different methods for performance and impact monitoring.', Levels.level5),
          new SkillLevel(6, 'I can define what data is needed to monitor how effective my value-creating activities are and an appropriate way to collect them.', Levels.level6),
          new SkillLevel(7, 'I can develop the performance indicators I (or my team) need to monitor progress towards a successful outcome in changing circumstances.', Levels.level7),
          new SkillLevel(8, 'I can design and put in place a data-collection plan to monitor whether my venture is achieving its aims.', Levels.level8)
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
        [
          new SkillLevel(1, 'I can show respect for others, their background and situations.', Levels.level1),
          new SkillLevel(2, 'I am open to the worth that others can bring to value creating activities.', Levels.level2),
          new SkillLevel(3, 'I can combine different contributions to create value.', Levels.level3),
          new SkillLevel(4, 'I can value diversity as a possible source of ideas and opportunities.', Levels.level4),
          null,
          new SkillLevel(6, 'I can support diversity within my team or organisation.', Levels.level6),
          new SkillLevel(7, 'Outside of my organisation, I can find ideas that create value and make the most of them.', Levels.level7),
          null,
        ]
      ),
      new Skill(
        14,
        'Develop emotional intelligence.',
        [
          new SkillLevel(1, 'I can show empathy towards others.', Levels.level1),
          new SkillLevel(2, 'I can recognise the role of my emotions, attitudes and behaviours in shaping others people’s attitudes and behaviours and vice versa.', Levels.level2),
          new SkillLevel(3, 'I can express my (or my team\'s) value creating ideas assertively.', Levels.level3),
          new SkillLevel(4, 'I can face and solve conflicts.', Levels.level4),
          new SkillLevel(5, 'I can compromise where necessary.', Levels.level5),
          new SkillLevel(6, 'I can deal with non assertive behaviour that hinders my (or my team\'s) value creating activities (for example, destructive attitudes, aggressive behaviour and so on).', Levels.level6),
          new SkillLevel(7, 'I can manage conflicts effectively.', Levels.level7),
          null,
        ]
      ),
      new Skill(
        15,
        'Listen actively',
        [
          new SkillLevel(1, 'I can show empathy towards others.', Levels.level1),
          new SkillLevel(2, 'I can discuss the benefits of listening to other people’s ideas for achieving my (or my team\'s) goals.', Levels.level2),
          new SkillLevel(3, 'I can listen to other people’s ideas for creating value without showing prejudice.', Levels.level3),
          new SkillLevel(4, 'I can listen to my end users.', Levels.level4),
          new SkillLevel(5, 'I can describe different techniques for managing relationships with end users.', Levels.level5),
          new SkillLevel(6, 'I can put in place strategies to actively listen to my end users and act on their needs.', Levels.level6),
          new SkillLevel(7, 'I can pull together information from a wide range of sources to understand my end users\' needs.', Levels.level7),
          null,
        ]
      ),
      new Skill(
        16,
        'Team up',
        [
          new SkillLevel(1, 'I am open to working alone as well as with others, playing different roles and taking some responsibility.', Levels.level1),
          new SkillLevel(2, 'I am willing to change my way of working in a group.', Levels.level2),
          new SkillLevel(3, 'I can work with a range of individuals and teams.', Levels.level3),
          new SkillLevel(4, 'I share the ownership of value creating activities with the members of my team.', Levels.level4),
          new SkillLevel(5, 'I can build a team based on the individual knowledge, skills and attitudes of each member.', Levels.level5),
          new SkillLevel(6, 'I can contribute to creating value by teaming up with distributed communities through digital technologies.', Levels.level6),
          new SkillLevel(7, 'I can design physical and virtual spaces that encourage team members to work together.', Levels.level7),
          new SkillLevel(8, 'I can build an organisation’s capacity to create value by encouraging people to work together.', Levels.level8),
        ]
      ),
      new Skill(
        17,
        'Work together',
        [
          new SkillLevel(1, 'I am open to involving others in my value creating activities.', Levels.level1),
          new SkillLevel(2, 'I can contribute to simple value creating activities.', Levels.level2),
          new SkillLevel(3, 'I can contribute to group decision making constructively.', Levels.level3),
          new SkillLevel(4, 'I can create a team of people who can work together in a value creating activity.', Levels.level4),
          new SkillLevel(5, 'I can use techniques and tools that help people to work together.', Levels.level5),
          new SkillLevel(6, 'I can give people the help and support they need to perform at their best within a team.', Levels.level6),
          new SkillLevel(7, 'I can work with a remote team of people who can independently contribute to a value creating activity.', Levels.level7),
          new SkillLevel(8, 'I can design working methods and incentives that enable team members to work well together.', Levels.level8),
        ]
      ),
      new Skill(
        18,
        'Expand your network',
        [
          new SkillLevel(1, 'I can explain the meaning and forms of association, co-operation and peer to peer support (for example, family and other communities).', Levels.level1),
          new SkillLevel(2, 'I am open to establishing new contacts and cooperation with others (individuals and groups).', Levels.level2),
          new SkillLevel(3, 'I can use the relationships I have to get the support I need to turn ideas into action, including emotional support.', Levels.level3),
          new SkillLevel(4, 'I can establish new relationships to get the support I need to turn ideas into action, including emotional support (for example, joining a mentor network).', Levels.level4),
          new SkillLevel(5, 'I can use my network to find the right people to work on my (or my team\'s) value creating activity.', Levels.level5),
          new SkillLevel(6, 'I proactively make contact with the right people inside and outside my organisation to support my (or my team\'s) value creating activity (for example, at conferences or on social media).', Levels.level6),
          new SkillLevel(7, 'I can use my network to bring together different perspectives to inform my (or my team\'s) value creating process.', Levels.level7),
          new SkillLevel(8, 'I can design effective processes to build networks of different or new stakeholders and keep them engaged.', Levels.level8),
        ]
      )
    ]
  }

  static mapLearnThroughExperience() {
    return [
      new Skill(
        19,
        'Reflect',
        [
          new SkillLevel(1, 'I can find examples of great failures that have created value.', Levels.level1),
          new SkillLevel(2, 'I can provide examples of temporary failures that have led to valuable achievements.', Levels.level2),
          new SkillLevel(3, 'I can reflect on failures (mine and other people’s), identify their causes and learn from them.', Levels.level3),
          new SkillLevel(4, 'I can judge if and how I have achieved my goals, so that I can evaluate my performance and learn from it.', Levels.level4),
          new SkillLevel(5, 'I can reflect on my (or my team\'s) achievements and temporary failures as things develop so as to learn and improve my ability to create value.', Levels.level5),
          new SkillLevel(6, 'I can help others reflect on their achievements and temporary failures by providing honest and constructive feedback.', Levels.level6),
          new SkillLevel(7, 'I can take my team or the organisation to a higher level of performance, based on the feedback collected and by learning lessons from achievements and failures.', Levels.level7),
          null,
        ]
      ),
      new Skill(
        20,
        'Learn to learn.',
        [
          new SkillLevel(1, 'I can provide examples that show that my abilities and competence have increased with experience.', Levels.level1),
          new SkillLevel(2, 'I can anticipate that my abilities and competence will grow with experience, through both successes and failures.', Levels.level2),
          new SkillLevel(3, 'I can reflect on the relevance of my learning pathways for my future opportunities and choices.', Levels.level3),
          new SkillLevel(4, 'I am always looking for opportunities to improve my strengths and reduce or compensate for my weaknesses.', Levels.level4),
          new SkillLevel(5, 'I can find and choose opportunities to overcome my (or my team’s) weaknesses and to develop my (or my team’s) strengths.', Levels.level5),
          new SkillLevel(6, 'I can help others develop their strengths and reduce or compensate for their weaknesses.', Levels.level6),
          new SkillLevel(7, 'I can identify opportunities for self improvement in my organisation and beyond.', Levels.level7),
          new SkillLevel(8, 'I can design and put in place a strategy for my venture to continue to generate value.', Levels.level8),
        ]
      ),
      new Skill(
        21,
        'Learn from experience',
        [
          new SkillLevel(1, 'I can recognise what I have learnt from taking part in value creating activities.', Levels.level1),
          new SkillLevel(2, 'I can reflect on my experience in taking part in value creating activities and learn from it.', Levels.level2),
          new SkillLevel(3, 'I can reflect on my interaction with others (including peers and mentors) and learn from it', Levels.level3),
          new SkillLevel(4, 'I can filter the feedback provided by others and keep the good from it.', Levels.level4),
          new SkillLevel(5, 'I can integrate lifelong learning into my personal development strategy and career progress.', Levels.level5),
          new SkillLevel(6, 'I can help others reflect on their interaction with other people and help them learn from this interaction.', Levels.level6),
          new SkillLevel(7, 'I can learn from the impact monitoring and evaluation activities that I have designed to track the progress of my value creating activity.', Levels.level7),
          new SkillLevel(8, 'I can learn lessons from monitoring and evaluation processes and establish them into my organisation’s learning processes.', Levels.level8),
        ]
      )
    ]
  }
}
