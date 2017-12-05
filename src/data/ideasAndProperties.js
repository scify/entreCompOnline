import {Skill} from '../model/skill.js';
import {Level} from '../model/level.js';

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
                    new Level(1, 'I can find opportunities to help others.', 1)
                ]
            )
        ]
    }
}
