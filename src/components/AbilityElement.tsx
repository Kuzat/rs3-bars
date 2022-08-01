import React from "react";
import { Ability } from "../types/Ability";

export type AbilityElementProp = {
  ability: Ability;
}

export function AbilityElement({ ability }: AbilityElementProp) {
  return (
    <span>
      <img src={"abilities/" + ability.imgSrc} />
      This is {ability.name} ability!
    </span>
  )
}