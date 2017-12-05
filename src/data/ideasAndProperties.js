import {Skill} from '../model/skill.js';
import {SkillLevel} from '../model/skillLevel.js';
import * as Levels from './progressionModelCategories.js';

export class IdeasAndProperties {
    static skills() {
        return IdeasAndProperties.calculateSkills();
    }
    static calculateSkills() {
        return [
            new Skill(
                1,
                'Identify, create and seize opportunities',
                [
                    new SkillLevel(1, 'I can find opportunities to help others.', Levels.level1),
                    new SkillLevel(2, 'I can recognise opportunities to create value in my community and surroundings.', 2),
                    // new SkillLevel(1, 'I can find opportunities to help others.', 1),
                    // new SkillLevel(1, 'I can find opportunities to help others.', 1),
                    // new SkillLevel(1, 'I can find opportunities to help others.', 1),
                    // new SkillLevel(1, 'I can find opportunities to help others.', 1),
                    // new SkillLevel(1, 'I can find opportunities to help others.', 1),
                    // new SkillLevel(1, 'I can find opportunities to help others.', 1)
                ]
            )
        ]
    }
}
