import React from "react"
import { useState } from "react"
import { Ability, Skill } from "../types/Ability";
import { AbilitiesDB } from "../utils/AbilitiesDB";
import { AbilityElement } from "./AbilityElement";



export default function AbilityBar() {
  const db = new AbilitiesDB();
  // Max 14 number of abilities
  const [abilities, setAbilities] = useState<Ability[]>(db.listAbilities().slice(0, 14));

  const abilityList = abilities.map((ability) =>
    <AbilityElement key={ability.name} ability={ability} />
  );

  return (
    <div className="flex flex-row justify-evenly w-2/3 items-center">
      {abilityList}
    </div>
  )
}