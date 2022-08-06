import React, { useEffect } from "react"
import { useState } from "react"
import { Ability, Skill } from "../types/Ability";
import { AbilitiesDB } from "../utils/AbilitiesDB";
import { AbilityBarItem } from "./AbilityBarItem";
import { AbilityElement } from "./AbilityElement";



export default function AbilityBar() {
  const db = new AbilitiesDB();
  const initAbilityBar = (abilities: Ability[]): JSX.Element[] => {
    return abilities.map((ability, index) =>
      <AbilityBarItem key={ability.name} ability={ability} abilityBarId={index} switchAbility={switchAbility} />
    )
  }

  const switchAbility = (draggedAbilityBarId: number, droppedAbilityBarId: number) => {
    console.log(draggedAbilityBarId, droppedAbilityBarId);
    const newAbilities = abilities.slice();
    const draggedAbility = newAbilities[draggedAbilityBarId];
    newAbilities[draggedAbilityBarId] = newAbilities[droppedAbilityBarId];
    newAbilities[droppedAbilityBarId] = draggedAbility;
    setAbilities(newAbilities);
  }

  // Max 14 number of abilities
  const [abilities, setAbilities] = useState<JSX.Element[]>(initAbilityBar(db.listAbilities().slice(0, 14)));

  return (
    <div className="flex flex-row justify-evenly w-2/3 items-center m-auto bg-[#131a1f] pt-5 pb-3 px-3">
      {abilities}
    </div>
  )
}