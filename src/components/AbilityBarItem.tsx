import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../App";
import { Ability } from "../types/Ability";
import { AbilityElement } from "./AbilityElement";

export type AbilityBarItemElementProp = {
    ability: Ability;
    abilityBarId: number;
    switchAbility: (draggedAbilityBarId: number, droppedAbilityBarId: number) => void;
}

type DragItem = {
    abilityBarId: number;
}

export function AbilityBarItem({ ability, abilityBarId, switchAbility }: AbilityBarItemElementProp) {
    const [currentAbility, setCurrentAbility] = useState(ability);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.ABILITY,
        drop: (item: DragItem, monitor) => {
            switchAbility(item.abilityBarId, abilityBarId)
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    }),
        [abilityBarId]
    );

    return (
        <span ref={drop} style={{ opacity: isOver ? 0 : 1 }}>
            <AbilityElement ability={currentAbility} setAbility={setCurrentAbility} abilityBarId={abilityBarId} />
        </span>
    )
}