import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../App";
import { Ability } from "../types/Ability";

export type AbilityElementProp = {
  ability: Ability;
  abilityBarId: number;
  setAbility: (ability: Ability) => void;
}

type DropResultProp = {
  droppedAbility: Ability;
}

export function AbilityElement({ ability, abilityBarId, setAbility }: AbilityElementProp) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ABILITY,
    item: {abilityBarId},
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));


  return (
    <span className="w-100 mx-1" ref={drag} style={{ opacity: isDragging ? 0 : 1 }}>
      <img draggable={false} src={process.env.PUBLIC_URL + "/abilities/" + ability.imgSrc} />
    </span>
  )
}