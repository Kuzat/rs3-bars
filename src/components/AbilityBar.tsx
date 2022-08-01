import React from "react"
import { useState } from "react"
import { Ability, Skill } from "../types/Ability";
import { AbilityElement } from "./AbilityElement";
import abilities_db from "../entities/abilities.json";

function mapJsonToAbility(jsonObj: object): Ability {
  return {
    name: jsonObj["name"],
    type: jsonObj["type"],
    description: jsonObj["description"],
    skill: jsonObj["skill"],
    imgSrc: jsonObj["imgSrc"]
  }
}

function loadAbility(name: string): Ability {
  if (name in abilities_db) {
    return mapJsonToAbility(abilities_db[name])
  } else {
    // Empty Ability
    return {
      name: "",
      type: "",
      description: "",
      skill: Skill.none,
      imgSrc: ""
    }
  }
}

export default function AbilityBar() {
  const [abilities, setAbilities] = useState<Ability[]>([loadAbility("slice")])

  const abilityList = abilities.map((ability) =>
    <AbilityElement ability={ability} />
  );

  return (
    <div>
      {abilityList}
    </div>
  )
}