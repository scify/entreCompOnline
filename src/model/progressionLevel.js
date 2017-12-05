export class ProgressionLevel {
  constructor(id, name, action, level,levelDescription) {
    this.id = id;
    this.name = name;
    this.action = action;
    this.level = level;
    this.levelDescription=levelDescription;
  }

  get levelName() {
    return "Level " + this.level;
  }
}


