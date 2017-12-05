import {CompetenceArea} from './model/competenceArea.js';
import {Competence} from './model/competence.js';
import {ProgressionModelCategory} from  './model/progressionModelCategory';
import {ProgressionModelCategoryItem} from  './model/progressionModelCategoryItem';

const level1 = new ProgressionModelCategoryItem(1,
  "Under direct supervision",
  "Discover",
  1,
  "Level 1 focuses mainly on discovering your qualities, potential, interests and wishes. It also focuses on recognising different types of problems and needs that can be solved creatively, and on developing individual skills and attitudes."
);
const level2 = new ProgressionModelCategoryItem(2,
  "With reduced support from others, some autonomy and together with my peers",
  "Explore",
  2,
  "Level 2 focuses on exploring different approaches to problems, concentrating on diversity and developing social skills and attitudes"
);
const level3 = new ProgressionModelCategoryItem(
  3,
  "On my own and together with my peers",
  "Experiment",
  3,
  "Level 3 focuses on critical thinking and on experimenting with creating value, for instance through practical entrepreneurial experiences."
);
const level4 = new ProgressionModelCategoryItem(
  4,
  "Taking and sharing some responsibilities.",
  "Dare",
  4,
  "Level 4 focuses  on turning ideas into action in ‘real life’ and on taking responsibility for this."
);
const level5 =new ProgressionModelCategoryItem(5,
  "With some guidance and together with others.",
  "Improve",
  5,
  "Level 5 focuses on improving your skills for turning ideas into action, taking increasing responsibility for creating value, and developing knowledge about entrepreneurship."
);
const level6 = new ProgressionModelCategoryItem(6,
  "Taking responsibility for making decisions and working with others.",
  "Reinforce",
  6,
  "Level 6 focuses on working with others, using the knowledge you have to generate value, dealing with increasingly complex challenges."
);
const level7 = new ProgressionModelCategoryItem(7,
  "Taking responsibility for contributing to complex developments in a specific field.",
  "Expand",
  7,
  "Level 7 focuses on the competences needed to deal with complex challenges, handling a constantly changing environment where the degree of uncertainty is high."
);
const level8 = new ProgressionModelCategoryItem(8,
  "Contributing substantially to the development of a specific field.",
  "Transform",
  8,
  "Level 8 focuses on emerging challenges by developing new knowledge, through research and development and innovation capabilities to achieve excellence and transform the ways things are done."
);


const foundation = new ProgressionModelCategory(1, "Foundation", "Relying on support from others", [level1,level2]);
const intermediate = new ProgressionModelCategory(2, "Intermediate", "Building independence", [level3,level4]);
const advanced = new ProgressionModelCategory(3, "Advanced", "Taking responsibility", [level5,level6]);
const expert = new ProgressionModelCategory(4, "Expert", "Driving Transformation, innovation and growth", [level7,level8]);

const competences = [
  new CompetenceArea(1,
    "Ideas and opportunities",
    [
      new Competence(
        1,
        "Spotting opportunities",
        "Use your 5 imagination and abilities to identify opportunities for creating value",
        [
          "Identify and seize opportunities to create value by exploring the social, cultural and economic landscape",
          "Identify needs and challenges that need to be met",
          "Establish new connections and bring together scattered elements of the landscape to create opportunities to create value"
        ]),
      new Competence(
        2,
        "Creativity",
        "Develop creative and purposeful ideas",
        [
          "Develop several ideas and opportunities to create value, including better solutions to existing and new challenges",
          "Explore and experiment with innovative approaches",
          "Combine knowledge and resources to achieve valuable effects"
        ]),
      new Competence(
        3,
        "Vision",
        "Work towards your vision of the future",
        [
          "Imagine the future",
          "Develop a vision to turn ideas into action",
          "Visualise future scenarios to help guide effort and action"
        ]
      ),
      new Competence(
        4,
        "Valuing ideas",
        "Make the most of ideas and opportunities",
        [
          "Judge what value is in social, cultural and economic terms",
          "Recognise the potential an idea has for creating value and identify suitable ways of making the most out of it"
        ]
      ),
      new Competence(
        5,
        "Ethical and sustainable thinking",
        "Assess the consequences and impact of ideas, opportunities and actions",
        [
          "Assess the consequences of ideas that bring value and the effect of entrepreneurial action on the target community, the market, society and the environment",
          "Reflect on how sustainable long-term social,cultural and economic goals are, and the course of action chosen",
          "Act responsibly"
        ]
      )
    ]
  ),
  new CompetenceArea(2,
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
        ]
      ),
      new Competence(
        7,
        "Motivation and perseverance",
        "Stay focused and don't give up",
        [
          "Be determined to turn ideas into action and satisfy your need to achieve",
          "Be prepared to be patient and keep trying to achieve your long-term individual or group aims",
          "Be resilient under pressure, adversity, and temporary failure"
        ]
      ),
      new Competence(
        8,
        "Mobilizing resources",
        "Gather and manage the resources you need",
        [
          "Get and manage the material, non-material and digital resources needed to turn ideas into action",
          "Make the most of limited resources",
          "Get and manage the competences needed at any stage, including technical, legal, tax and digital competences"
        ]
      ),
      new Competence(
        9,
        "Financial and economic literacy",
        "Develop financial and economic know how",
        [
          "Estimate the cost of turning an idea into a value-creating activity",
          "Plan, put in place and evaluate financial decisions over time",
          "Manage financing to make sure my value-creating activity can last over the long term"
        ]
      ),
      new Competence(
        10,
        "Mobilizing others",
        "Inspire, enthuse and get others on board",
        [
          "Inspire and enthuse relevant stakeholders",
          "Get the support needed to achieve valuable outcomes",
          "Demonstrate effective communication, persuasion, negotiation and leadership"
        ]
      )
    ]
  ),
  new CompetenceArea(3,
    "Intro action",
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
        ]
      ),
      new Competence(
        12,
        "Planning and management",
        "Prioritize, organize and follow-up",
        [
          "Set long-, medium- and short-term goals",
          "Define priorities and action plans",
          "Adapt to unforeseen changes"
        ]
      ),
      new Competence(
        13,
        "Coping with uncertainty, ambiguity and risk",
        "Make decisions dealing with uncertainty, ambiguity and risk",
        [
          "Make decisions when the result of that decision is uncertain, when the information available is partial or ambiguous, or when there is a risk of unintended outcomes",
          "Within the value-creating process, include structured ways of testing ideas and prototypes from the early stages, to reduce risks of failing",
          "Handle fast-moving situations promptly and flexibly"
        ]
      ),
      new Competence(
        14,
        "Working with others",
        "Team up, collaborate and network",
        [
          "Work together and co-operate with others to develop ideas and turn them into action",
          "Network",
          "Solve conflicts and face up to competition positively when necessary"
        ]
      ),
      new Competence(
        15,
        "Learning through experience",
        "Learn by doing",
        [
          "Use any initiative for value creation as a learning opportunity",
          "Learn with others, including peers and mentors",
          "Reflect and learn from both success and failure (your own and other people’s)"
        ]
      )
    ]
  )
];

export default competences;
