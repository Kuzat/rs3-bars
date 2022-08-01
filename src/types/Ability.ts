export enum Skill {
  attack,
  strength,
  magic,
  ranged,
  defence,
  constitution,
  none
}

export interface Ability {
  name: string;
  type: string;
  description?: string;
  skill: Skill;
  imgSrc: string;
}

export function mapJsonToAbility(jsonObj: object): Ability {
  return {
    name: jsonObj["name"],
    type: jsonObj["type"],
    description: jsonObj["description"],
    skill: jsonObj["skill"],
    imgSrc: jsonObj["imgSrc"]
  }
}