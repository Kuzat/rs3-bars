import React from "react";
import { Ability } from "../types/Ability";

export type AbilityElementProp = {
  ability: Ability;
}

export function AbilityElement({ ability }: AbilityElementProp) {
  return (
    <span className="w-100 mx-1">
      <img src={"abilities/" + ability.imgSrc} />
    </span>
  )
}