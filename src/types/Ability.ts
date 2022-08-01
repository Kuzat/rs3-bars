export enum Skill {
  attack,
  strength,
  magic,
  ranged,
  defence,
  constitution,
  none
}

export type Ability = {
  name: string;
  type: string;
  description: string;
  skill: Skill;
  imgSrc: string; // Maybe some path but it is a string for now
}