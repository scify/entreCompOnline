import {CompetenceArea} from '../model/competenceArea.js';
import {Competence} from '../model/competence.js';
import {IdeasAndProperties} from "./ideasAndProperties";
import {Resources} from "./resources.js";
import {IntoAction} from "./intoAction";

const competenceArea1 =new CompetenceArea(
  1,
  "Ideas and opportunities",
  [
    new Competence(
      1,
      "Spotting opportunities",
      "Use your imagination and abilities to identify opportunities for creating value",
      [
        "Identify and seize opportunities to create value by exploring the social, cultural and economic landscape",
        "Identify needs and challenges that need to be met",
        "Establish new connections and bring together scattered elements of the landscape to create opportunities to create value"
      ],
      IdeasAndProperties.mapSpottingOpportunitiesSkills()
    ),
    new Competence(
      2,
      "Creativity",
      "Develop creative and purposeful ideas",
      [
        "Develop several ideas and opportunities to create value, including better solutions to existing and new challenges",
        "Explore and experiment with innovative approaches",
        "Combine knowledge and resources to achieve valuable effects"
      ],
      IdeasAndProperties.mapCreativitySkills()
    ),
    new Competence(
      3,
      "Vision",
      "Work towards your vision of the future",
      [
        "Imagine the future",
        "Develop a vision to turn ideas into action",
        "Visualise future scenarios to help guide effort and action"
      ],
      IdeasAndProperties.mapVisionSkills()
    ),
    new Competence(
      4,
      "Valuing ideas",
      "Make the most of ideas and opportunities",
      [
        "Judge what value is in social, cultural and economic terms",
        "Recognise the potential an idea has for creating value and identify suitable ways of making the most out of it"
      ],
      IdeasAndProperties.mapValuingIdeasSkills()
    ),
    new Competence(
      5,
      "Ethical and sustainable thinking",
      "Assess the consequences and impact of ideas, opportunities and actions",
      [
        "Assess the consequences of ideas that bring value and the effect of entrepreneurial action on the target community, the market, society and the environment",
        "Reflect on how sustainable long-term social,cultural and economic goals are, and the course of action chosen",
        "Act responsibly"
      ],
      IdeasAndProperties.mapEthicalAndSustainableThinkingSkills()
    )
  ]
);

const competenceArea2 =new CompetenceArea(2,
  "Resources",
  [
    new Competence(
      6,
      "Self-awareness and self-efficacy",
      "Believe in your-self and keep developing",
      [
        "Reflect on your needs, aspirations and wants in the short, medium and long term",
        "Identify and assess your individual and group strengths and weaknesses",
        "Believe in your ability to influence the course of events, despite uncertainty, setbacks and temporary failures"
      ],
      Resources.mapSelfAwarenessAndSelfEfficacy()
    ),
    new Competence(
      7,
      "Motivation and perseverance",
      "Stay focused and don't give up",
      [
        "Be determined to turn ideas into action and satisfy your need to achieve",
        "Be prepared to be patient and keep trying to achieve your long-term individual or group aims",
        "Be resilient under pressure, adversity, and temporary failure"
      ],
      Resources.mapMotivationandPerseverance()
    ),
    new Competence(
      8,
      "Mobilizing resources",
      "Gather and manage the resources you need",
      [
        "Get and manage the material, non-material and digital resources needed to turn ideas into action",
        "Make the most of limited resources",
        "Get and manage the competenceAreas needed at any stage, including technical, legal, tax and digital competenceAreas"
      ],
      Resources.mapMobilisingResources()

    ),
    new Competence(
      9,
      "Financial and economic literacy",
      "Develop financial and economic know how",
      [
        "Estimate the cost of turning an idea into a value-creating activity",
        "Plan, put in place and evaluate financial decisions over time",
        "Manage financing to make sure my value-creating activity can last over the long term"
      ],
      Resources.mapFinancialAndEconomicLiteracy()
    ),
    new Competence(
      10,
      "Mobilizing others",
      "Inspire, enthuse and get others on board",
      [
        "Inspire and enthuse relevant stakeholders",
        "Get the support needed to achieve valuable outcomes",
        "Demonstrate effective communication, persuasion, negotiation and leadership"
      ],
      Resources.mapMobilisingOthers()
    )
  ]
)

const competenceArea3 =new CompetenceArea(3,
  "Into action",
  [
    new Competence(
      11,
      "Taking the initiative",
      "Go for it",
      [
        "Initiate processes that create value",
        "Take up challenges",
        "Act and work independently to achieve goals, stick",
        "to intentions and carry out planned tasks"
      ],
      IntoAction.mapTakingTheInitiative()
    ),
    new Competence(
      12,
      "Planning and management",
      "Prioritize, organize and follow-up",
      [
        "Set long-, medium- and short-term goals",
        "Define priorities and action plans",
        "Adapt to unforeseen changes"
      ],
      IntoAction.mapPlanningAndManagement()
    ),
    new Competence(
      13,
      "Coping with uncertainty, ambiguity and risk",
      "Make decisions dealing with uncertainty, ambiguity and risk",
      [
        "Make decisions when the result of that decision is uncertain, when the information available is partial or ambiguous, or when there is a risk of unintended outcomes",
        "Within the value-creating process, include structured ways of testing ideas and prototypes from the early stages, to reduce risks of failing",
        "Handle fast-moving situations promptly and flexibly"
      ],
      IntoAction.mapCopyingwithUncertaintyAmbiguityAndRisk()
    ),
    new Competence(
      14,
      "Working with others",
      "Team up, collaborate and network",
      [
        "Work together and co-operate with others to develop ideas and turn them into action",
        "Network",
        "Solve conflicts and face up to competition positively when necessary"
      ],
      IntoAction.mapWorkingWithOthers()
    ),
    new Competence(
      15,
      "Learning through experience",
      "Learn by doing",
      [
        "Use any initiative for value creation as a learning opportunity",
        "Learn with others, including peers and mentors",
        "Reflect and learn from both success and failure (your own and other people’s)"
      ],
      IntoAction.mapLearnThroughExperience()
    )
  ]
)

export const competenceAreas = [competenceArea1,competenceArea2,competenceArea3];
