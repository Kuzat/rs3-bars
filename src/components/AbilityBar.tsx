import React from "react"
import { useState } from "react"
import { Ability, Skill } from "../types/Ability";
import { AbilitiesDB } from "../utils/AbilitiesDB";
import { AbilityElement } from "./AbilityElement";



export default function AbilityBar() {
  const db = new AbilitiesDB();
  const [abilities, setAbilities] = useState<Ability[]>([db.getAbility("slice")]);

  const abilityList = abilities.map((ability) =>
    <AbilityElement key={ability.name} ability={ability} />
  );

  return (
    <div>
      {abilityList}
    </div>
  )
}