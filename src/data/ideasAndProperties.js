import {Skill} from '../model/skill.js';
import {SkillLevel} from '../model/skillLevel.js';
import * as Levels from './progressionModelCategories.js';

export class IdeasAndProperties {
  static mapSpottingOpportunitiesSkills() {
    return [
      new Skill(
        1,
        'Identify, create and seize opportunities',
        [
          new SkillLevel(1, 'I can find opportunities to help others', Levels.level1),
          new SkillLevel(2, 'I can recognise opportunities to create value in my community and surroundings', Levels.level2),
          new SkillLevel(3, 'I can explain what makes an opportunity to create value', Levels.level3),
          new SkillLevel(4, 'I can proactively look for opportunities to create value, including out of necessity', Levels.level4),
          new SkillLevel(5, 'I can describe different analytical approaches to identify entrepreneurial opportunities', Levels.level5),
          new SkillLevel(6, 'I can use my knowledge and understanding of the context to make opportunities to create value', Levels.level6),
          new SkillLevel(7, 'I can judge opportunities for creating value and decide whether to follow these up at different levels of the system I am working in (for example, micro, meso or macro)', Levels.level7),
          new SkillLevel(8, 'I can spot and quickly take advantage of an opportunity', Levels.level8),
        ]
      ),
      new Skill(
        2,
        'Focus on challenges',
        [
          new SkillLevel(1, 'I can find different examples of challenges that need solutions', Levels.level1),
          new SkillLevel(2, 'I can recognise challenges in my community and surroundings that I can contribute to solving', Levels.level2),
          new SkillLevel(3, 'I can identify opportunities to solve problems in alternative ways', Levels.level3),
          new SkillLevel(4, 'I can redefine the description of a challenge, so that alternative opportunities address it may become apparent', Levels.level4),
          new SkillLevel(5, 'I can take apart established practices and challenge mainstream thought to create opportunities and look at challenges in different ways', Levels.level5),
          new SkillLevel(6, 'I can judge the right time to take an opportunity to create value', Levels.level6),
          new SkillLevel(7, 'I can cluster different opportunities or identify synergies among different opportunities to make the most out of them', Levels.level7),
          new SkillLevel(8, 'I can define opportunities where I can maintain a competitive advantage', Levels.level8),
        ]
      ),
      new Skill(
        3,
        'Uncover needs',
        [
          new SkillLevel(1, 'I can find examples of groups who have benefited from a solution to a given problem', Levels.level1),
          new SkillLevel(2, 'I can identify needs in my community and surroundings that have not been met', Levels.level2),
          new SkillLevel(3, 'I can explain that different groups may have different needs', Levels.level3),
          new SkillLevel(4, 'I can establish which user group, and which needs, I want to tackle through creating value', Levels.level4),
          new SkillLevel(5, 'I can carry out a needs analysis involving relevant stakeholders', Levels.level5),
          new SkillLevel(6, 'I can identify challenges related to the contrasting needs and interests of different stakeholders', Levels.level6),
          new SkillLevel(7, 'I can produce a ‘roadmap’ which matches the needs with the actions needed to deal with them and helps me create value', Levels.level7),
          new SkillLevel(8, 'I can design projects which aim to anticipate future needs', Levels.level8),
        ]
      ),
      new Skill(
        4,
        'Analyse the context',
        [
          new SkillLevel(1, 'I can tell the difference between different areas where value can be created (for example, at home, in the community, in the environment, or in the economy or society)', Levels.level1),
          new SkillLevel(2, 'I can recognise the different roles the public, private and third sectors play in my region or country', Levels.level2),
          new SkillLevel(3, 'I can tell the difference between contexts for creating value (for example, communities and informal networks, existing organisations, the market)', Levels.level3),
          new SkillLevel(4, 'I can identify my person al, social and professional opportunities for creating value, both in existing organisations or by setting up new ventures', Levels.level4),
          new SkillLevel(5, 'I can identify the boundaries of the system that are relevant to my (or my team\'s) value creating activity', Levels.level5),
          new SkillLevel(6, 'I can analyse an existing value creation activity by looking at it as a whole and identifying opportunities to develop it further', Levels.level6),
          new SkillLevel(7, 'I can monitor relevant trends and see how they create threats and new opportunities to create value', Levels.level7),
          new SkillLevel(8, 'I can promote a culture within my organisation that is open to spotting the weak signals of change, leading to new opportunities for creating value', Levels.level8),
        ]
      )
    ];
  }
  static mapCreativitySkills() {
    return [
      new Skill(
        1,
        'Be curious and open',
        [
          new SkillLevel(1, 'I can show that I am curious about new things', Levels.level1),
          new SkillLevel(2, 'I can explore new ways to make use of existing resources', Levels.level2),
          new SkillLevel(3, 'I can experiment with my skills and competenceAreas in situations that are new to me', Levels.level3),
          new SkillLevel(4, 'I can actively search for new solutions that meet my needs', Levels.level4),
          new SkillLevel(5, 'I can actively search for new solutions that improve the value creating process', Levels.level5),
          new SkillLevel(6, 'I can combine my understanding of different contexts to transfer knowledge, ideas and solutions across different areas', Levels.level6),
          null,
          null,
        ]
      ),
      new Skill(
        2,
        'Develop ideas',
        [
          new SkillLevel(1, 'I can develop ideas that solve problems that are relevant to me and my surroundings', Levels.level1),
          new SkillLevel(2, 'Alone and as part of a team, I can develop ideas that create value for others', Levels.level2),
          new SkillLevel(3, 'I can experiment with different techniques to generate alternative solutions to problems, using available resources in an effective way', Levels.level3),
          new SkillLevel(4, 'I can test the value of my solutions with end users', Levels.level4),
          new SkillLevel(5, 'I can describe different techniques to test innovative ideas with end users', Levels.level5),
          new SkillLevel(6, 'I can set up processes to involve stakeholders in finding, developing and testing ideas', Levels.level6),
          new SkillLevel(7, 'I can tailor a variety of ways of involving stakeholders to suit the needs of my value creating activity', Levels.level7),
          new SkillLevel(8, 'I can design new processes to involve stakeholders in generating, developing and testing ideas that create value', Levels.level8),
        ]
      ),
      new Skill(
        3,
        'Define problems',
        [
          new SkillLevel(1, 'I can approach open ended problems (problems that can have many solutions) with curiosity', Levels.level1),
          new SkillLevel(2, 'I can explore open ended problems in many ways so as to generate multiple solutions', Levels.level2),
          new SkillLevel(3, 'I can take part in group dynamics aimed at defining open ended problems', Levels.level3),
          new SkillLevel(4, 'I can reshape open ended problems to fit my skills', Levels.level4),
          new SkillLevel(5, 'I can describe and explain different approaches to shaping open ended problems and different problem solving strategies', Levels.level5),
          new SkillLevel(6, 'I can help others create value by encouraging experimentation and using creative techniques to approach problems and generate solutions', Levels.level6),
          new SkillLevel(7, 'I can initiate, develop, manage and complete a creative project', Levels.level7),
          new SkillLevel(8, 'I can use a mix of creative techniques to keep genera ting value over time', Levels.level8),
        ]
      ),
      new Skill(
        4,
        'Design value',
        [
          new SkillLevel(1, 'I can assemble objects that create value for me and others', Levels.level1),
          new SkillLevel(2, 'I can improve existing products, services and processes so that they better meet my needs or those of my peers and the community', Levels.level2),
          new SkillLevel(3, 'I can identify the basic functions that a prototype should have to illustrate the value of my idea', Levels.level3),
          new SkillLevel(4, 'I can assemble, test and progressively refine prototypes that simulate the value I want to create', Levels.level4),
          new SkillLevel(5, 'I can create (alone or with others) products or services that solve my problems and my needs', Levels.level5),
          new SkillLevel(6, 'I can develop and deliver value in stages, launching with the core features of my (or my team\'s) idea and progressively adding more', Levels.level6),
          new SkillLevel(7, 'I can apply different design approaches to create value through new products, processes or services', Levels.level7),
          new SkillLevel(8, 'I can design and put in place innovative processes to create value', Levels.level8),
        ]
      ),
      new Skill(
        5,
        'Be innovative',
        [
          new SkillLevel(1, 'I can find examples of innovative products, services and solutions', Levels.level1),
          new SkillLevel(2, 'I can describe how some innovations have transformed society', Levels.level2),
          new SkillLevel(3, 'I can tell the difference between types of innovations (for example, process versus product innovation and social innovation, incremental versus disruptive innovation)', Levels.level3),
          new SkillLevel(4, 'I can judge if an idea, product or process is innovative or just new to me', Levels.level4),
          new SkillLevel(5, 'I can describe how innovations diffuse in society, culture and the market', Levels.level5),
          new SkillLevel(6, 'I can describe different levels of innovation (for example, incremental, breakthrough or transformational) and their role in value creating activities', Levels.level6),
          new SkillLevel(7, 'I can identify the steps needed to research the potential for an innovative idea in light of its development into an existing enterprise, a new venture or an opportunity for social change', Levels.level7),
          new SkillLevel(8, 'I can manage innovation processes that respond to emerging needs and make the most of opportunities as they become available', Levels.level8),
        ]
      )
    ];
  }
  static mapVisionSkills() {
    return [
      new Skill(
        1,
        'Imagine',
        [
          new SkillLevel(1, 'I can imagine a desirable future', Levels.level1),
          new SkillLevel(2, 'I can develop simple future scenarios where value is created for my community and surroundings', Levels.level2),
          new SkillLevel(3, 'I can develop (alone or with others) an inspiring vision for the future that involves others', Levels.level3),
          new SkillLevel(4, 'I can build future scenarios around my value creating activity', Levels.level4),
          new SkillLevel(5, 'I can use my understanding of the context to identify different strategic visions for creating value', Levels.level5),
          new SkillLevel(6, 'I can discuss my (or my team\'s) strategic vision for creating value', Levels.level6),
          new SkillLevel(7, 'I can develop (alone or with others) and compare different future scenarios', Levels.level7),
          new SkillLevel(8, 'I can show different audiences the benefits of my vision during turbulent times', Levels.level8),
        ]
      ),
      new Skill(
        2,
        'Think strategically',
        [
          null,
          null,
          new SkillLevel(3, 'I can explain what a vision is and what purpose it serves', Levels.level3),
          new SkillLevel(4, 'I am aware of what is needed to build a vision', Levels.level4),
          new SkillLevel(5, 'I can explain the role of a vision statement for strategic planning', Levels.level5),
          new SkillLevel(6, 'I can prepare a vision statement for my (or my team\'s) value creating activity that guides internal decision making throughout the whole process of creating value', Levels.level6),
          new SkillLevel(7, 'I can plan backwards from my vision to design the necessary strategy to achieve it', Levels.level7),
          new SkillLevel(8, 'I can encourage enthusiasm and a sense of belonging around a convincing vision', Levels.level8),
        ]
      ),
      new Skill(
        3,
        'Guide action',
        [
          null,
          null,
          new SkillLevel(3, 'My vision for creating value drives me to make the effort to turn ideas into action', Levels.level3),
          new SkillLevel(4, 'I can decide what type of vision for creating value I would like to contribute to', Levels.level4),
          new SkillLevel(5, 'I can identify the changes needed to achieve my vision', Levels.level5),
          new SkillLevel(6, 'I can promote initiatives for change and transformation that contribute to my vision', Levels.level6),
          new SkillLevel(7, 'I can identify challenges related to my (or my team\'s) vision, while respecting the different levels of the system and t he variety of stakeholders affected', Levels.level7),
          new SkillLevel(8, 'I can create (alone or with others) a ‘roadmap’ based on my vision for creating value', Levels.level8),
        ]
      )
    ];
  }
  static mapValuingIdeasSkills() {
    return [
      new Skill(
        1,
        'Recognise the value of ideas',
        [
          new SkillLevel(1, 'I can find examples of ideas that have value for myself and others', Levels.level1),
          new SkillLevel(2, 'I can show how different groups, such as firms and institutions, create value in my community and surroundings', Levels.level2),
          new SkillLevel(3, 'I can tell the difference between social, cultural and economic value', Levels.level3),
          new SkillLevel(4, 'I can decide which type of value I want to act on and then choose the most appropriate pathway to do so', Levels.level4),
          new SkillLevel(5, 'I recognise the many forms of value that could be created through entrepreneurship, such as social, cultural or economic value', Levels.level5),
          new SkillLevel(6, 'I can break down a value chain into its different parts and identify how value is added in each part', Levels.level6),
          new SkillLevel(7, 'I can develop strategies to effectively make the mos t of opportunities to create value in my organisation or venture', Levels.level7),
          new SkillLevel(8, 'I can state the value of a new idea from different stakeholders\' perspectives', Levels.level8),
        ]
      ),
      new Skill(
        2,
        'Share and protect ideas',
        [
          new SkillLevel(1, 'I can clarify that other people’s ideas can be used and acted on, while respecting their rights', Levels.level1),
          new SkillLevel(2, 'I can explain that ideas can be shared and circulated for the benefit of everyone or can be protected by certain rights, for example, copyrights or patents', Levels.level2),
          new SkillLevel(3, 'I can tell the difference between types of licences that can be used to sh are ideas and protect rights', Levels.level3),
          new SkillLevel(4, 'I can choose the most appropriate licence for the purpose of sharing and protecting the value created by my ideas', Levels.level4),
          new SkillLevel(5, 'I can tell the difference between trademarks, registered design rights, patents, geographical indications, trad e secrets, confidentiality agreements and copyright licences, including open, public domain licences such as creative commons', Levels.level5),
          new SkillLevel(6, 'When creating ideas with others, I can outline a dissemination and exploitation agreement that benefits all partners involved', Levels.level6),
          new SkillLevel(7, 'I can develop a tailored strategy on intellectual property rights that deals with geographic requirements', Levels.level7),
          new SkillLevel(8, 'I can develop a strategy on intellectual property rights that is tailored to the age of my portfolio', Levels.level8),
        ]
      )
    ];
  }
  static mapEthicalAndSustainableThinkingSkills() {
    return [
      new Skill(
        1,
        'Behave ethically',
        [
          new SkillLevel(1, 'I can recognise behaviours that show integrity, honesty, responsibility, courage and commitment', Levels.level1),
          new SkillLevel(2, 'I can describe in my own words the importance of integrity and ethical values', Levels.level2),
          new SkillLevel(3, 'I can apply ethical thinking to consumption and production processes', Levels.level3),
          new SkillLevel(4, 'I am driven by honesty and integrity when taking decisions', Levels.level4),
          new SkillLevel(5, 'I can argue that ideas for creating value should be supported by ethics and values relating to gender, equality, fairness, social justice and environmental sustainability', Levels.level5),
          new SkillLevel(6, 'I can take responsibility for promoting ethical behaviour in my area of influence, (for example, by promoting gender balance highlighting inequalities and any lack of integrity)', Levels.level6),
          new SkillLevel(7, 'I make it my priority to make sure that ethical behaviour is respected and promoted in my area of influence', Levels.level7),
          new SkillLevel(8, 'I take action against unethical behaviour', Levels.level8),
        ]
      ),
      new Skill(
        2,
        'Think sustainably',
        [
          new SkillLevel(1, 'I can list examples of environmentally friendly behaviour that benefits a community', Levels.level1),
          new SkillLevel(2, 'I can recognise examples of environmentally friendly behaviour by companies that creates value for society as a whole', Levels.level2),
          new SkillLevel(3, 'I can identify practices that are not sustainable and their implications for the environment', Levels.level3),
          new SkillLevel(4, 'I can produce a clear problem statement when faced with practices that are not sustainable', Levels.level4),
          new SkillLevel(5, 'I can discuss the impact an organisation has on the environment (and vice versa)', Levels.level5),
          new SkillLevel(6, 'I can discuss the relationship between society and technical developments, relating to their implications for the environment', Levels.level6),
          new SkillLevel(7, 'I can choose adequate methods for analysing environmental impact based on their advantages and disadvantages', Levels.level7),
          new SkillLevel(8, 'I can contribute to self regulation discussions within my sector of operations', Levels.level8),
        ]
      ),
      new Skill(
        3,
        'Assess impact',
        [
          new SkillLevel(1, 'I can find and list examples of changes caused by human action in social, cultural, environmental or economic contexts', Levels.level1),
          new SkillLevel(2, 'I can tell the difference between the impact of a value creating activity on the target community and the broader impact on society', Levels.level2),
          new SkillLevel(3, 'I can identify the impact that taking up opportunities will have on me and my team, on the target group and on the surrounding community', Levels.level3),
          new SkillLevel(4, 'I can identify stakeholders who are affected by the change brought about by my (or my team\'s) value creating activity, including stakeholders who cannot speak up (for example, future generations, climate or nature)', Levels.level4),
          new SkillLevel(5, 'I can analyse the implications of my value creating activity within the boundaries of the system I am working in', Levels.level5),
          new SkillLevel(6, 'I can define the purpose of the impact assessment, impact monitoring, and evaluation of impact', Levels.level6),
          new SkillLevel(7, 'I can choose ‘measure indicators’ to monitor and assess the impact of my value creating activity', Levels.level7),
          new SkillLevel(8, 'I can carry out impact assessment, impact monitoring, and impact evaluation on my value creating activity', Levels.level8),
        ]
      ),
      new Skill(
        4,
        'Be accountable',
        [
          null,
          null,
          null,
          new SkillLevel(4, 'I can tell the difference between accounting for use of resources and accounting for the impact of my value creating activity on stakeholders and the environment', Levels.level4),
          new SkillLevel(5, 'I can tell the difference between input, output, outcomes and impact', Levels.level5),
          new SkillLevel(6, 'I can discuss a range of accountability methods for both functional and strategic accountability', Levels.level6),
          new SkillLevel(7, 'I can use the accountability methods that hold me responsible to our internal and external stakeholders', Levels.level7),
          new SkillLevel(8, 'I can design ways to be accountable to all of our stakeholders', Levels.level8),
        ]
      )
    ];
  }
}
