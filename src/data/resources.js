import {Skill} from '../model/skill.js';
import {SkillLevel} from '../model/skillLevel.js';
import * as Levels from './progressionModelCategories.js';

export class Resources {
  static mapSelfAwarenessAndSelfEfficacy() {
    return [
      new Skill(
        1,
        'Follow your aspirations',
        [
          new SkillLevel(1, 'I can identify my needs, wants, interests and goals', Levels.level1),
          new SkillLevel(2, 'I can describe my needs, wants, interests and goals', Levels.level2),
          new SkillLevel(3, 'I can commit to fulfilling my needs, wants, interests and goals', Levels.level3),
          new SkillLevel(4, 'I can reflect on my individual and group needs, wants, interests and aspirations in relation to opportunities and future prospects', Levels.level4),
          new SkillLevel(5, 'I can translate my needs, wants, interests and aspirations into goals that help me reach them', Levels.level5),
          new SkillLevel(6, 'I can help others to reflect on their needs, wants, interests and aspirations and how they can turn these into goals', Levels.level6),
          null,
          null
        ]
      ),
      new Skill(
        2,
        'Identify your strengths and weaknesses',
        [
          null,
          new SkillLevel(2, 'I can identify things I am good at and things I am not good at', Levels.level2),
          new SkillLevel(3, 'I can judge my strengths and weaknesses and those of others in relation to opportunities for creating value', Levels.level3),
          new SkillLevel(4, 'I am driven by the desire to use my strengths and abilities to make the most of opportunities to create value', Levels.level4),
          new SkillLevel(5, 'I can team up with others to compensate for our weaknesses and add to our strengths', Levels.level5),
          new SkillLevel(6, 'I can help others identify their strengths and weaknesses', Levels.level6),
          null,
          null
        ]
      ),
      new Skill(
        3,
        'Believe in your ability',
        [
          new SkillLevel(1, 'I believe in my ability to do what I am asked successfully', Levels.level1),
          new SkillLevel(2, 'I believe in my ability to achieve what I intend to', Levels.level2),
          new SkillLevel(3, 'I can judge the control I have over my achievements (compared with any control from outside influences)', Levels.level3),
          new SkillLevel(4, 'I believe I can influence people and situations for the better', Levels.level4),
          new SkillLevel(5, 'I believe in my ability to carry out what I have imagined and planned, despite obstacles, limited resources and resistance from others', Levels.level5),
          new SkillLevel(6, 'I believe in my ability to understand and take the good out of experiences that others may label as failures', Levels.level6),
          null,
          null

        ]
      ),
      new Skill(
        4,
        'Shape your future',
        [
          new SkillLevel(1, 'I can list different types of jobs and their key functions', Levels.level1),
          new SkillLevel(2, 'I can describe which qualities and abilities are needed for different jobs, and which of these qualities and abilities I have', Levels.level2),
          new SkillLevel(3, 'I can describe my skills and competenceAreas relating to career options, including selfemployment', Levels.level3),
          new SkillLevel(4, 'I can use my skills and competenceAreas to change my career path, as a result of new opportunities or from necessity', Levels.level4),
          new SkillLevel(5, 'I can discuss how a realistic understanding and evaluation of my personal attitudes, skills and knowledge can influence my decision-making, relationships with other people and quality of life', Levels.level5),
          new SkillLevel(6, 'I can choose professional development opportunities with my team and organisation based on a clear understanding our strengths and weaknesses', Levels.level6),
          new SkillLevel(7, 'I can design professional development strategies for my team and organisation based on a clear understanding our strengths and weaknesses, in relation to both current and future opportunities to create value', Levels.level7),
          new SkillLevel(8, 'I can design strategies to overcome my (or my team’s or organisation’s) weaknesses and to develop our strengths in anticipating future needs', Levels.level8)
        ]
      )
    ]
  }

  static mapMotivationandPerseverance() {

    return [
      new Skill(
        1,
        'Stay driven',
        [
          new SkillLevel(1, 'I am driven by the possibility to do or contribute to something that is good for me or for others', Levels.level1),
          new SkillLevel(2, 'I am motivated by the idea of creating value for myself and others', Levels.level2),
          new SkillLevel(3, 'I can anticipate the feeling of achieving my goals and this motivates me', Levels.level3),
          new SkillLevel(4, 'I can regulate my own behaviour to stay driven and achieve the benefits of turning ideas into action', Levels.level4),
          null,
          null,
          null,
          null
        ]
      ),
      new Skill(
        2,
        'Be determined',
        [
          new SkillLevel(1, 'I see tasks as challenges to do my best', Levels.level1),
          new SkillLevel(2, 'I am motivated by challenges', Levels.level2),
          new SkillLevel(3, 'I can set challenges to motivate myself', Levels.level3),
          new SkillLevel(4, 'I am willing to put effort in and use resources to overcome challenges and achieve my (or my team\'s) goals', Levels.level4),
          new SkillLevel(5, 'I drive my effort by using my desire for achievement and belief in my ability to achieve', Levels.level5),
          new SkillLevel(6, 'I can coach others to stay motivated, encouraging them to commit to what they want to achieve', Levels.level6),
          new SkillLevel(7, 'I can create the right climate to motivate my team (for example, by celebrating successes, by learning from failures and by encouraging innovative ways to tackle problems)', Levels.level7),
          new SkillLevel(8, 'I consider all outcomes as temporary solutions appropriate to their time and context, and so am motivated to make sure they develop in a continuous cycle of improvement and innovation', Levels.level8)
        ])
      ,
      new Skill(
        3,
        'Focus on what keeps you motivated',
        [
          new SkillLevel(1, 'I can recognise different ways of motivating myself and others to create value', Levels.level1),
          new SkillLevel(3, 'I can reflect on the social incentives associated with having a sense of initiative and creating value for myself and others', Levels.level3),
          new SkillLevel(4, 'I can tell the difference between personal and external factors that motivate me or others when creating value', Levels.level4),
          new SkillLevel(5, 'I can use strategies to stay motivated (for example, set goals, monitor performance and evaluate my progress)', Levels.level5),
          new SkillLevel(6, 'I can use strategies to keep my team motivated and focused on creating value', Levels.level6),
          new SkillLevel(7, 'I can design effective ways to attract talented people and keep them motivated', Levels.level7),
          new SkillLevel(8, 'I can reward initiative, effort, and achievement appropriately within my team and organisation', Levels.level8)
        ]
      )
      ,
      new Skill(
        4,
        'Be resilient',
        [
          new SkillLevel(1, 'I show passion and willingness to achieve my goals', Levels.level1),
          new SkillLevel(2, 'I am determined and persevere when trying to achieve my (or my team\'s) goals', Levels.level2),
          new SkillLevel(3, 'I can overcome simple adverse circumstances', Levels.level3),
          new SkillLevel(4, 'I can judge when it is not worth continuing with an idea', Levels.level4),
          new SkillLevel(5, 'I can persevere in the face of adversities when trying to achieve my goals', Levels.level5),
          new SkillLevel(6, 'I can devise strategies to overcome standard adverse circumstances', Levels.level6),
          new SkillLevel(7, 'I can cope with unexpected change, setbacks and failures (for example, job loss)', Levels.level7),
          new SkillLevel(8, 'I can make sure that my team or organisation stay positive when making difficult decisions and dealing with failure', Levels.level8)
        ]
      ),
      new Skill(
        5,
        'Don’t give up',
        [
          new SkillLevel(1, 'I do not give up and I can keep going even when facing difficulties', Levels.level1),
          new SkillLevel(2, 'I am not afraid of working hard to achieve my goals', Levels.level2),
          new SkillLevel(3, 'I can delay achieving my goals in order to gain greater value, thanks to prolonged effort', Levels.level3),
          new SkillLevel(4, 'I can maintain effort and interest, despite setbacks', Levels.level4),
          new SkillLevel(5, 'I can celebrate short-term achievements, in order to stay motivated', Levels.level5),
          new SkillLevel(6, 'I can inspire others to work hard on their goals by showing passion and a strong sense of ownership', Levels.level6),
          new SkillLevel(7, 'I can stay focused on my vision and goals, despite challenges', Levels.level7),
          null
        ]
      )
    ]
  }

  static mapMobilisingResources() {
    return [
      new Skill(
        1,
        'Manage resources (material and non material)',
        [
          new SkillLevel(1, 'I recognise that resources are not unlimited', Levels.level1),
          new SkillLevel(2, 'I can appreciate the importance of sharing resources with others. ', Levels.level2),
          new SkillLevel(3, 'I can experiment with different combinations of resources to turn my ideas into action', Levels.level3),
          new SkillLevel(4, 'I can get and manage the necessary resources to turn my idea into action', Levels.level4),
          new SkillLevel(5, 'I can develop a plan for dealing with limited resources when setting up my value-creating activity', Levels.level5),
          new SkillLevel(6, 'I can get together the necessary resources to develop my value-creating activity', Levels.level6),
          new SkillLevel(7, 'I can allocate enough resources to each step of my (or my team\'s) action plan and for the valuecreating activity (for example, time, finances, and my team’s skills, knowledge and experience)', Levels.level7),
          new SkillLevel(8, 'I can judge the key resources needed to support an innovative idea or opportunity to develop an existing business, launch a new venture, or initiate a social enterprise', Levels.level8),
        ]
      ),
      new Skill(
        2,
        'Use resources responsibly',
        [
          new SkillLevel(1, 'I value my possessions and use them responsibly', Levels.level1),
          new SkillLevel(2, 'I can describe how resources last longer through reuse, repair and recycling', Levels.level2),
          new SkillLevel(3, 'I can discuss the principles of circular economy and resource efficiency', Levels.level3),
          new SkillLevel(4, 'I use resources responsibly and efficiently (for example, energy, materials in the supply chain or manufacturing process, public spaces)', Levels.level4),
          new SkillLevel(5, 'I take into account the nonmaterial cost of using resources when taking decisions about my valuecreating activities', Levels.level5),
          new SkillLevel(6, 'I can choose and put in place effective resourcemanagement procedures (for example, lifecycle analysis, solid waste)', Levels.level6),
          new SkillLevel(7, 'I can identify the opportunities that use resources efficiently and the circular economy brings to my organisation', Levels.level7),
          new SkillLevel(8, 'I can design and put in place innovative ways to lower the overall impact of my valuecreating activity on the environment, the community and society, and measure the improvement', Levels.level8)
        ]
      )
      ,
      new Skill(
        3,
        'Make the most of your time',
        [
          new SkillLevel(1, 'I can recognise different uses for my time (for example, studying, playing, resting)', Levels.level1),
          new SkillLevel(2, 'I value my time as a scarce resource', Levels.level2),
          new SkillLevel(3, 'I can discuss the need for investing time in different value-creating activities', Levels.level3),
          new SkillLevel(4, 'I can use my time effectively to achieve my goals', Levels.level4),
          new SkillLevel(5, 'I can manage my time effectively, using techniques and tools that help make me (or my team) productive', Levels.level5),
          new SkillLevel(6, 'I can help others manage their time effectively', Levels.level6),
          new SkillLevel(7, 'I can put in place effective timemanagement procedures', Levels.level7),
          new SkillLevel(8, 'I can develop effective timemanagement procedures that meet the specific needs of my valuecreating activity', Levels.level8)
        ]
      )
      ,
      new Skill(
        4,
        'Get support',
        [
          new SkillLevel(1, 'I can look for help when I am having difficulty achieving what I have decided to do', Levels.level1),
          new SkillLevel(2, 'I can identify sources of help for my value-creating activity (for example, teachers, peers, mentors)', Levels.level2),
          new SkillLevel(3, 'I can describe the concepts of division of labour and job specialisation', Levels.level3),
          new SkillLevel(4, 'I can find and list public and private services to support my value-creating activity (for example, incubator, social enterprise advisors, start-up angels, chamber of commerce)', Levels.level4),
          new SkillLevel(5, 'I can find digital solutions (for example, free, paid for, or open-source) that can help me manage my valuecreating activities efficiently', Levels.level5),
          new SkillLevel(6, 'I can find support to help me take advantage of an opportunity to create value (for example, advisor or consultancy services, peer or mentor support)', Levels.level6),
          new SkillLevel(7, 'I can effectively delegate tasks within and outside my organisation to make the most value (for example, outsourcing, partnering, acquisitions, crowdsourcing)', Levels.level7),
          new SkillLevel(8, 'I can develop a network of flexible and responsive providers from outside the organisation who support my valuecreating activity', Levels.level8)
        ]
      )
    ]
  }

  static mapFinancialAndEconomicLiteracy() {
    return [
      new Skill(
        5,
        'Understand economic and financial concepts',
        [
          new SkillLevel(1, 'I can recall basic terminology and symbols related to money', Levels.level1),
          new SkillLevel(2, 'I can explain simple economic concepts (for example, supply and demand, market price, trade)', Levels.level2),
          new SkillLevel(3, 'I can use the concept of opportunity costs and comparative advantage to explain why exchanges happen between individuals, regions and nations', Levels.level3),
          new SkillLevel(4, 'I can read income statements and balance sheets', Levels.level4),
          new SkillLevel(5, 'I can explain the difference between a balance sheet and a profitand-loss account', Levels.level5),
          new SkillLevel(6, 'I can build financial indicators (for example, return on investment)', Levels.level6),
          new SkillLevel(7, 'I can use financial indicators to assess the financial health of a value-creating activity', Levels.level7),
          new SkillLevel(8, 'I can use financial indicators to compare the financial health of my value-creating activity with that of competitors', Levels.level8)
        ]
      ),
      new Skill(
        6,
        'Budget',
        [
          new SkillLevel(1, 'I can judge what to use my money for', Levels.level1),
          new SkillLevel(2, 'I can draw up a simple household budget in a responsible manner', Levels.level2),
          new SkillLevel(3, 'I can draw up a budget for a valuecreating activity', Levels.level3),
          new SkillLevel(4, 'I can judge the cash-flow needs of a value-creating activity', Levels.level4),
          new SkillLevel(5, 'I can apply the financial planning and forecasting concepts that I need to turn ideas into action (for example, profit or not for profit)', Levels.level5),
          new SkillLevel(6, 'I can judge the cash-flow needs of a complex project', Levels.level6),
          new SkillLevel(7, 'I can judge the cash-flow needs of an organisation that handles many valuecreating activities that depend on each other', Levels.level7),
          new SkillLevel(8, 'I can create a plan for the financial and economic long-term sustainability of my (or my team\'s) valuecreating activity', Levels.level8)
        ]
      )
      ,
      new Skill(
        7,
        'Find funding',
        [
          new SkillLevel(1, 'I can identify the main types of income for families, businesses, nonprofit organisations and the state', Levels.level1),
          new SkillLevel(2, 'I can describe the main role of banks in the economy and society', Levels.level2),
          new SkillLevel(3, 'I can explain that value-creating activities can take different forms (a business, a social enterprise, a non-profit organization and so on) and can have different structures of ownership (individual company, limited company, cooperative and so on)', Levels.level3),
          new SkillLevel(4, 'I can identify public and private sources of funding for my value-creating activity (For example prizes,crowdfunding, and shares)', Levels.level4),
          new SkillLevel(5, 'I can choose the most appropriate sources of funding to start up or expand a valuecreating activity', Levels.level5),
          new SkillLevel(6, 'I can apply for public or private business support programmes, financing schemes, public subsidies or calls for tender', Levels.level6),
          new SkillLevel(7, 'I can raise funds and secure revenue from different sources, and manage the diversity of those sources', Levels.level7),
          new SkillLevel(8, 'I can judge an opportunity as a possible investor', Levels.level8)
        ]
      )
      ,
      new Skill(
        8,
        'Understand taxation',
        [
          new SkillLevel(1, 'I can outline the purpose of taxation', Levels.level1),
          new SkillLevel(2, 'I can explain how taxation finances the activities of a country and its part in providing public goods and services', Levels.level2),
          new SkillLevel(4, 'I can estimate the main accountancy and tax obligations I need to fulfil to meet the tax requirements for my activities', Levels.level4),
          new SkillLevel(5, 'I can estimate how my financial decisions (investments, buying assets, goods and so on) affect my tax', Levels.level5),
          new SkillLevel(6, 'I can make financial decisions based on current taxation schemes', Levels.level6),
          new SkillLevel(7, 'I can make financial decisions based on taxation schemes of different countries and territories', Levels.level7),
          null
        ]
      )
    ]
  }


  static mapMobilisingOthers() {
    return [
      new Skill(
        9,
        'Inspire and get inspired',
        [
          new SkillLevel(1, 'I show enthusiasm for challenges', Levels.level1),
          new SkillLevel(2, 'I am actively involved in creating value for others', Levels.level2),
          new SkillLevel(3, 'I do not get discouraged by difficulties', Levels.level3),
          new SkillLevel(4, 'I can lead by example', Levels.level4),
          new SkillLevel(5, 'I can get endorsement from others to support my value-creating activity', Levels.level5),
          new SkillLevel(6, 'I can inspire others, despite challenging circumstances', Levels.level6),
          new SkillLevel(7, 'I can maintain momentum with my team, partners and stakeholders when involved in a challenging situation', Levels.level7),
          new SkillLevel(8, 'I can form coalitions to turn ideas into action', Levels.level8)
        ]
      ),
      new Skill(
        10,
        'Persuade',
        [
          null,
          new SkillLevel(2, 'I can persuade others by providing a number of arguments', Levels.level2),
          new SkillLevel(3, 'I can persuade others by providing evidence for my arguments', Levels.level3),
          new SkillLevel(4, 'I can persuade others by appealing to their emotions', Levels.level4),
          new SkillLevel(5, 'I can pitch effectively in front of potential investors or donors', Levels.level5),
          new SkillLevel(6, 'I can overcome resistance from those who will be affected by my (or my (team\'s) vision, innovative approach, and value - creating activity', Levels.level6),
          new SkillLevel(7, 'I can create a call to action that gets internal stakeholders on board, such as co-workers, partners, employees or senior managers', Levels.level7),
          new SkillLevel(8, 'I can negotiate support for ideas for creating value', Levels.level8),
        ]
      )
      ,
      new Skill(
        11,
        ' Communicate effectively',
        [
          new SkillLevel(1, 'I can communicate my ideas clearly to others', Levels.level1),
          new SkillLevel(2, 'I can communicate my team\'s ideas to others persuasively by using different methods (for example posters, videos, role-play)', Levels.level2),
          new SkillLevel(3, 'I can communicate imaginative design solutions', Levels.level3),
          new SkillLevel(4, 'I can communicate the value of my (or my team\'s) idea to stakeholders from different backgrounds effectively', Levels.level4),
          new SkillLevel(5, 'I can communicate the vision for my (or my team\'s) venture in a way that inspires and persuades external groups, such as funders, partner organisations, volunteers, new members and affiliate supporters', Levels.level5),
          new SkillLevel(6, 'I can produce narratives and scenarios that motivate, inspire and direct people', Levels.level6),
          new SkillLevel(7, 'I can take part in constructive discussions with the community that my idea is targeted at', Levels.level7),
          new SkillLevel(8, 'I can get all relevant stakeholders to take responsibility to act on an opportunity for value creation', Levels.level8),
        ]
      )
      ,
      new Skill(
        12,
        'Use media effectively',
        [
          new SkillLevel(1, 'I can provide examples of inspiring communication campaigns', Levels.level1),
          new SkillLevel(2, 'I can discuss how different media can be used to reach audiences in different ways', Levels.level2),
          new SkillLevel(3, 'I can use various methods, including social media, to communicate valuecreating ideas effectively', Levels.level3),
          new SkillLevel(4, 'I can use media appropriately, showing that I am aware of my audience and purpose', Levels.level4),
          new SkillLevel(5, 'I can influence opinions in relation to my value creating activity, through a planned approach to social media', Levels.level5),
          new SkillLevel(6, 'I can design effective social media campaigns to mobilize people in relation to my (or my team’s) value-creating activity', Levels.level6),
          new SkillLevel(7, 'I can define a communication strategy to mobilize people in relation to my (or my team’s) value creating activity', Levels.level7),
          new SkillLevel(8, 'I can sustain and increase the support for my vision', Levels.level8),
        ]
      )
    ]
  }
}
