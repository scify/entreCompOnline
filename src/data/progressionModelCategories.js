import {ProgressionCategory} from "../model/progressionCategory";
import {ProgressionLevel} from "../model/progressionLevel";

export const level1 = new ProgressionLevel(1,
    "Under direct supervision",
    "Discover",
    1,
    "Level 1 focuses mainly on discovering your qualities, potential, interests and wishes. It also focuses on recognising different types of problems and needs that can be solved creatively, and on developing individual skills and attitudes."
);
export const level2 = new ProgressionLevel(2,
    "With reduced support from others, some autonomy and together with my peers",
    "Explore",
    2,
    "Level 2 focuses on exploring different approaches to problems, concentrating on diversity and developing social skills and attitudes"
);
export const level3 = new ProgressionLevel(
    3,
    "On my own and together with my peers",
    "Experiment",
    3,
    "Level 3 focuses on critical thinking and on experimenting with creating value, for instance through practical entrepreneurial experiences."
);
export const level4 = new ProgressionLevel(
    4,
    "Taking and sharing some responsibilities.",
    "Dare",
    4,
    "Level 4 focuses  on turning ideas into action in ‘real life’ and on taking responsibility for this."
);
export const level5 =new ProgressionLevel(5,
    "With some guidance and together with others.",
    "Improve",
    5,
    "Level 5 focuses on improving your skills for turning ideas into action, taking increasing responsibility for creating value, and developing knowledge about entrepreneurship."
);
export const level6 = new ProgressionLevel(6,
    "Taking responsibility for making decisions and working with others.",
    "Reinforce",
    6,
    "Level 6 focuses on working with others, using the knowledge you have to generate value, dealing with increasingly complex challenges."
);
export const level7 = new ProgressionLevel(7,
    "Taking responsibility for contributing to complex developments in a specific field.",
    "Expand",
    7,
    "Level 7 focuses on the competenceAreas needed to deal with complex challenges, handling a constantly changing environment where the degree of uncertainty is high."
);
export const level8 = new ProgressionLevel(8,
    "Contributing substantially to the development of a specific field.",
    "Transform",
    8,
    "Level 8 focuses on emerging challenges by developing new knowledge, through research and development and innovation capabilities to achieve excellence and transform the ways things are done."
);

const foundation = new ProgressionCategory(1, "Foundation", "Relying on support from others", [level1,level2]);
const intermediate = new ProgressionCategory(2, "Intermediate", "Building independence", [level3,level4]);
const advanced = new ProgressionCategory(3, "Advanced", "Taking responsibility", [level5,level6]);
const expert = new ProgressionCategory(4, "Expert", "Driving Transformation, innovation and growth", [level7,level8]);


export const progressionCategories = [foundation,intermediate,advanced,expert];
